//!TEMPORAL. Esta después va a ser un action creator de Redux que consiga un Token del Backend y lo guarde en el estado de Redux.

const axios = require("axios");
console.log(process.env.AUTH0_TOKEN_URL, process.env.AUTH0_AUDIENCE);

async function getApiToken() {
  var options = {
    method: "POST",
    url: process.env.AUTH0_TOKEN_URL,
    headers: { "content-type": "application/json" },
    body: `{"client_id":${process.env.AUTH0_CLIENT_ID},"client_secret":${process.env.AUTH0_CLIENT_SECRET},"audience":${process.env.AUTH0_AUDIENCE},"grant_type":"client_credentials"}`,
  };

  console.log(process.env.AUTH0_TOKEN_URL, process.env.AUTH0_AUDIENCE);

  await axios(options)
    .then(async function (response) {
      const token = response.data.access_token;
      console.log("Auth0 Api gave an access token:", token);
      auth0Response = response.data;
    })
    .catch((error) => {
      console.log("There has been an error running Axios to get API token", error);
    });
}

console.log(getApiToken());
