import '../styles/globals.css'
import Footer from './components/Footer'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
