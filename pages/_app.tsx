import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './components/Footer';
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const data = 0;
  if(data === 1){
    return (
      <>
        <Component {...pageProps} />
        
      </>
    )
  }
  else{
    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default (MyApp);
