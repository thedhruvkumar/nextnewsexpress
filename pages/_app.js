import '@next/styles/globals.css'
import Navbar from '@next/components/Navbar'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
