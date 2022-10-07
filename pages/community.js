import Head from 'next/head'
import Image from 'next/image'
import Navbar3 from './components/Navbar3'
import Router from 'next/router'
import Cookie from 'universal-cookie';


const Community = () => {
  const cookie = new Cookie();
  const check = ()=>{
  if (cookie.get('token')){
    Router.push("/dashboard"); 
  }
}
check();
  return (
    <>
    <Navbar3/>
    
    
      <Head>
        <title>Connecteen | Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/><br/>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <div className="containerMod">
        <Image src="/underCons.webp" height="500px" width="500px" alt="404" />
        <h1>The link you were looking for was not found</h1>
        </div>
      </main>

    
    </>
  )
  }



export default (Community);
