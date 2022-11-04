// pages/404.js

import Head from 'next/head'
import Navbar3 from './components/Navbar3'
import {motion} from 'framer-motion'
import SEO from './components/SEO'
export default function Custom404() {
  return (
    <>    
    <Head>
    <title>Connecteen | Error</title>
    <SEO/>
  </Head>
    <Navbar3/>
    <motion.div
    initial={{ x:300, y:300 ,opacity: 0 }}
    animate={{ x:0, y:0, opacity: 1 }}
    transition={{ duration: 1 }}>

    <div className="containerMod">
    <img src="/404.jpg" height="50%" width="50%" alt="404" />
    <h1>The link you were looking for was not found</h1>
    </div>
    </motion.div>
  </>
  )
}
