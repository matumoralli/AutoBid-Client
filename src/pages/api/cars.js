import 'dotenv/config'
import { withApiAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function cars(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res);

    console.log(process.env.BACKEND_URL)


    const response = await fetch(process.env.BACKEND_URL + "/cars/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const cars = await response.json();
    console.log(cars, accessToken)
    res.status(response.status || 200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message,
    });
  }
});
