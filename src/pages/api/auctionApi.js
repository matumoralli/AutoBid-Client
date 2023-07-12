import axios from "axios";
import { API_ACTIONS } from "@/dictionary";
import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
//!USAR ESTA API SÓLO PARA INFORMACIÓN PRIVADA, YA QUE SOLICITA AUTORIZACIÓN PREVIA DEL USUARIO. TODA LA INFORMACIÓN PÚBLICA TIENE QUE PASAR POR EL "APISLICE.JS" DE REDUX

export default withApiAuthRequired(async function auctionAPI(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);
    let fetchOptions = "";

    const body = JSON.parse(req.body);

      // console.log("este es action", body.action);
      // console.log("este es payload", body.payload);
      // console.log("este es accesstoken", accessToken);

    const { action, payload } = body;

    switch (action) {

      case API_ACTIONS.CREATE_AUCTION:
        fetchOptions = {
          method: "POST",
          url: process.env.BACKEND_URL + `/auctions/`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          data: { carDetailId: payload.carDetailId, userId: payload.userId, minPrice: payload.minPrice, sellerType: payload.sellerType, customEnd: payload.customEnd  },
        };

        break;

        case API_ACTIONS.UPDATE_AUCTION:
          fetchOptions = {
            method: "PUT",
            url: process.env.BACKEND_URL + `/auctions/${payload.auctionId}`,
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
            data: { newInfo: {...payload} },
          };
  
          break;

      case API_ACTIONS.GET_AUCTION:
        fetchOptions = {
          method: "GET",
          url: process.env.BACKEND_URL + `/auctions/${payload.auctionId}`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        };

        break;


      case API_ACTIONS.POST_COMMENT:
        fetchOptions = {
          method: "POST",
          url: process.env.BACKEND_URL + `/auctions/comment/${payload.userId}`,
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          data: { auctionId: payload.auctionId, comment: payload.comment },
        };

        break;

        case API_ACTIONS.POST_REPLY:
          fetchOptions = {
            method: "POST",
            url: process.env.BACKEND_URL + `/replies/${payload.commentId}`,
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
            data: { userId: payload.userId, reply: payload.reply },
          };
  
          break;

          case API_ACTIONS.POST_BID:
            fetchOptions = {
              method: "POST",
              url: process.env.BACKEND_URL + `/auctions/bid/${payload.userId}`,
              headers: {
                authorization: `Bearer ${accessToken}`,
              },
              data: { ammount: payload.ammount, auctionId: payload.auctionId },
            };
    
            break;


      default:
        console.log("No action was specified in Switch"); 
    }

    await axios(fetchOptions).then((response) => {
      const auctionAPIResponse = response.data;
      res.status(response.status || 200).json(auctionAPIResponse.data);
    });
  } catch (error) {
    console.log("There has been a problem fetching in auctionAPI:", error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
});
