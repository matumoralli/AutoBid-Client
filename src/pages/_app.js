import '@/styles/globals.css'
import Navbar from '@/common/Navbar'
import Footer from '@/common/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
