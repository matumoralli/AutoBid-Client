import axios from "axios";
import { API_ACTIONS } from "@/dictionary";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
//!USAR ESTA API SÓLO PARA INFORMACIÓN PRIVADA, YA QUE SOLICITA AUTORIZACIÓN PREVIA DEL USUARIO. TODA LA INFORMACIÓN PÚBLICA TIENE QUE PASAR POR EL "APISLICE.JS" DE REDUX

export default withApiAuthRequired(async function usersAPI(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    let fetchOptions = "";

    const body = JSON.parse(req.body);

    // console.log("este es action", body.action);
    // console.log("este es payload", body.payload);
    // console.log("este es accesstoken", accessToken);

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
          url: process.env.BACKEND_URL + `/users/user/${email}`,
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

      case API_ACTIONS.GIVE_USER_CREDIT:
        fetchOptions = {
          method: "PUT",
          url: process.env.BACKEND_URL + `/users/user/${payload.email}/credit`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };

        break;

        case API_ACTIONS.REMOVE_USER_CREDIT:
          fetchOptions = {
            method: "PUT",
            url: process.env.BACKEND_URL + `/users/user/${payload.email}/remove-credit`,
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
