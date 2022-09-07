import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './components/Footer';
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }


export default (MyApp);
