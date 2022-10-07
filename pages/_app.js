import '../styles/globals.css'
import Footer from './components/Footer'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import '../styles/style.css'

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},1000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (
  <div className='spinner-wrapper'>
    
  </div>)
}

function MyApp({ Component, pageProps }) {
  return( 
    <>
        <Loading/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}

export default MyApp;
