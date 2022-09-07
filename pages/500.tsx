// pages/500.js

import Navbar2 from "./components/Navbar2"
import Banner from "./components/Banner"

export default function Custom500() 
{
  const imgLink = `https://img.freepik.com/premium-vector/flat-illustration-500-internal-server-error-concept-can-t-connect-server-internet_258153-329.jpg?w=2000`;

  
  return (
    <>
    <Banner/>
    <Navbar2/>
    <div className="containerMod">
    <img src={imgLink} min-height="50%" min-width="50%" alt="500" />
    <h1>A problem in the server side props. Refresh the page. If stays, contact admin.</h1>
    </div>
  </>
  )
}