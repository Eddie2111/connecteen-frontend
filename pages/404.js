// pages/404.js

import Head from 'next/head'
import Navbar3 from './components/Navbar3'
export default function Custom404() {
  return (
    <>    
    <Head>
    <title>Connecteen | Error</title>
  </Head>
    <Navbar3/>
    <div className="containerMod">
    <img src="/404.jpg" height="50%" width="50%" alt="404" />
    <h1>The link you were looking for was not found</h1>
    </div>
  </>
  )
}
