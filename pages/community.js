import Head from 'next/head'
import Image from 'next/image'
import Navbar2 from './components/Navbar2'

const Community = () => {
  return (
    <>
    <Navbar2/>
    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Connecteen | Community</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <div className="containerMod">
        <img src="/underCons.webp" height="50%" width="50%" alt="404" />
        <h1>The link you were looking for was not found</h1>
        </div>
      </main>

    </div>
    </>
  )
}

export default (Community);
