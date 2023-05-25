import "@/styles/globals.css";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}
