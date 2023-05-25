require("dotenv").config();
//!TEMPORAL. Esta después va a ser un action creator de Redux que consiga un Token del Backend y lo guarde en el estado de Redux.
const axios = require("axios");

async function getApiToken() {
  var options = {
    method: "POST",
    url: process.env.AUTH0_TOKEN_URL,
    headers: { "content-type": "application/json" },
    data: {
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      grant_type: "client_credentials",
    },
  };


  try {
    const response = await axios(options);
    console.log("Auth0 Api gave an access token:", response.data.access_token);
  } catch (error) {
    console.log("There has been an error running Axios to get API token", error);
  }
}

getApiToken();
