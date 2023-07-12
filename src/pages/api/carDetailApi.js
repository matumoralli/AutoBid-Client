import axios from "axios";
import { API_ACTIONS } from "@/dictionary";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
//!USAR ESTA API SÓLO PARA INFORMACIÓN PRIVADA, YA QUE SOLICITA AUTORIZACIÓN PREVIA DEL USUARIO. TODA LA INFORMACIÓN PÚBLICA TIENE QUE PASAR POR EL "APISLICE.JS" DE REDUX

export default withApiAuthRequired(async function carDetailAPI(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    let fetchOptions = "";

    console.log("este es req.body sin parseo", req.body);

    const body = req.body;

    console.log("este es req.body con parseo", body);

    console.log("este es action", body.action);
    console.log("este es payload", body.payload);
    console.log("este es accesstoken", accessToken);

    const { action, payload } = body;

    switch (action) {
      case API_ACTIONS.CREATE_CAR_DETAIL:
        // const formData = new FormData();
        // formData.append("images", payload.images);
        // formData.append("inspection", payload.inspection);
        // formData.append("domain", payload.domain);
        // formData.append("carDetail", JSON.stringify(payload));
        fetchOptions = {
          method: "POST",
          url: process.env.BACKEND_URL + `/cars/`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          data: body.payload ,
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
    console.log("There has been a problem fetching in carDetail:", error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
});
