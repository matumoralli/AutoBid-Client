import "@/styles/globals.css";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </UserProvider>
    </>
  );
}
