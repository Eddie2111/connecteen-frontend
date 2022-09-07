// pages/404.js
import Navbar2 from "./components/Navbar2"
import Banner from "./components/Banner"

export default function Custom404() {
  return (
    <>
    <Banner/>
    <Navbar2/>
    <div className="containerMod">
    <img src="https://st4.depositphotos.com/5686152/27322/v/380/depositphotos_273220330-stock-illustration-sorry-page-found-404-error.jpg?forcejpeg=true" height="50%" width="50%" alt="404" />
    <h1>The link you were looking for was not found</h1>
    </div>
  </>
  )
}
