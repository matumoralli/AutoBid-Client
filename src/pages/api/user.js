import axios from "axios";
import { API_ACTIONS } from "@/dictionary";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function userAPI(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    let fetchOptions = "";

    const body = JSON.parse(req.body);

    console.log('este es action', body.action);
    console.log('este es payload', body.payload);

    const { action, payload } = body;

    switch (action) {
      case API_ACTIONS.LOGIN_REGISTER_USER:
        const { name, email } = payload;

        if (!name || !email) {
          return res.status(400).json({
            error: "Missing user, email or password",
          });
        }

        fetchOptions = {
          method: "POST",
          url: process.env.BACKEND_URL + `/users/${email}`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          data: { name: name },
        };

        break;

      case API_ACTIONS.GET_ALL_USERS:
        fetchOptions = {
          method: "GET",
          url: process.env.BACKEND_URL + `/users/`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };

        break;

      default:
        console.log("No action was specified in Switch");
    }

    await axios(fetchOptions).then((response) => {
      const userAPIResponse = response.data;
      res.status(response.status || 200).json(userAPIResponse.data);
    });
  } catch (error) {
    console.log("There has been a problem fetching in userApi:", error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
});
