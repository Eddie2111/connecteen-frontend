
import Link from 'next/link'
function Banner(){
  const fontStyleBanner = {
    color: "white",
  }
  const joinNow = {
    marginTop:"-60px",
  }
  return (

    <nav className="flex flex-wrap items-center justify-between p-2 bg-blue-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">Connecteen</span>
      </div>
      <div className="block lg:hidden">

      </div>
      <div className="flex-grow block w-full sm:flex lg:items-center ">
        <div className="text-sm lg:flex-grow" style={fontStyleBanner}>
          Join the most advanced community of Bangladesh
        </div>
        <br/>
        <div>
          <p style = {joinNow}
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white transition border border-white rounded hover:border-transparent hover:text-blue-500 hover:bg-white lg:mt-0"> 
              <Link href="/login"> Join Today </Link>
            </p>
        </div>
      </div>
    </nav>
    
  )
}
export default Banner;
