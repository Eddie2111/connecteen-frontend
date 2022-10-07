import Head from 'next/head'
import Image from 'next/image'
import Navbar3 from './components/Navbar3'

const About = () => {
  const headingH1 = {
    fontSize: "4.0rem",
    fontWeight: "light",
    color: "black",
    textAlign: "center",
    margin: "1rem",
    textShadow: "0px 0px 1px black"
  }
  return (
    <>
      <Head>
        <title> Connecteen || About</title>
        <meta name="description" content="Global vision and introduction of Connecteen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar3 />
      <br/><br/><br/><br/>
      <div className="containerMod">
        
        <br/><br/><br/><br/>
        <Image src="/heading.png" alt="About" width={450} height={100} className="image" />
        <br/><br/><br/><br/>
        <h1 className="heading-black-H2">Global vision and introduction of Connecteen</h1>
        <Image src="/metaCover.png" alt="About" width={800} height={600} className="image" /> 
      </div>
    </>
  )
}

export default (About);
