import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin({
    authorizationParams: { scope: "openid profile email" },
  }),
});

//!El objeto con login y handlelogin NO es necesario para el funcionamiento de la Autenticación, ya que se le está pasando los valores predeterminados. Lo dejo para dar un ejemplo de cómo personalizarla si así se quisiera.