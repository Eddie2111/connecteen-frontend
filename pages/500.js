// pages/500.js
import Navbar2 from './components/Navbar2'
import Head from 'next/head';
import {motion } from 'framer-motion'
export default function Custom500() 
{
  const imgLink = `https://img.freepik.com/premium-vector/flat-illustration-500-internal-server-error-concept-can-t-connect-server-internet_258153-329.jpg?w=2000`;

  
  return (
    <>
    <Navbar2/>
    <Head>
      <title>Connecteen | 500</title>
    </Head>
    <motion.div
    initial={{ x:600, y:-300 ,opacity: 0 }}
    animate={{ x:0, y:0, opacity: 1 }}
    transition={{ duration: 1 }}>
    <div className="containerMod">
    <img src={imgLink} height="50%" width="50%" alt="500" />
    <h1>A problem in the server side props. Refresh the page. If stays, contact admin.</h1>
    </div>
    </motion.div>
  </>
  )
}
