import 'dotenv/config'
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function users(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    console.log(process.env.BACKEND_URL)

    // This is a contrived example, normally your external API would exist on another domain.
    const response = await fetch(process.env.BACKEND_URL + "/users/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const users = await response.json();
    console.log(users, accessToken)
    res.status(response.status || 200).json(users);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
});
