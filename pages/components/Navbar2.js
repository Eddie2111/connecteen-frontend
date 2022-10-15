import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from "react";
function Navbar2 () {
  const [drawer, setDrawer] = useState("100vw");
  const [display, setDisplay] = useState("0%");
  const [cross, setCross] = useState("-25px");
  const [navPull, setNavPull] = useState("0px");
  const [navSize, setNavSize] = useState("bg-white border-gray-200 px-5 sm:px-4 py-4 rounded dark:bg-gray-900");
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setNavPull("-120px");
      setNavSize("bg-white border-gray-200 px-12 sm:px-4 py-12 rounded dark:bg-gray-900");
    }
    if (offset < 60) {
      setNavPull("0px");
      setNavSize("bg-white border-gray-200 px-5 sm:px-4 py-4 rounded dark:bg-gray-900");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
})
  const onDraw = ()=>{
    if (drawer === "100vw" || display ==="0%") {
      setDrawer("35vw");
      setDisplay("65%");
      setCross("15px");
    
    }
    if (drawer === "35vw" || display ==="65%") {
      setDrawer("100vw");
      setDisplay("0%");
      setCross("-25px");
    
    }
  }
  const navStyle = {
    position:"fixed",
    width:"100vw",
    marginTop: navPull,
    zIndex:"30",
    transition:"0.5s",
  }
  const sidebar = {
    width: display,
    height: "120vh",
    marginLeft:drawer,
    position:"fixed",
    display:"static",
    zIndex: "70",
    top: "0",
    left: "0",
    color:"white",
    backgroundColor: "#111",
    transition:"0.5 ease-in-out"
  }
  
    return (
  <>
<nav className={navSize} style={navStyle}>
<div className="container flex flex-wrap items-center justify-between mx-auto">
        
        <p className="flex items-center">
        
        <img src="/icon.png" layout='fill' className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> <Link href="/">Connecteen</Link></span>
        
        </p>
        
        <button data-collapse-toggle="navbar-default" onClick={onDraw} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 navbarButton" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>


        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <p  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" > <Link href="/"> Home </Link></p>
              </li>
              <li>
                <p  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/about">About </Link> </p>
              </li>
              <li>
                <p  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/community"> Community </Link></p>
              </li>
              <li>
                <p  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/courses"> Courses </Link></p>
              </li>
              <li>
                <p  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link href="/contact"> Contact </Link></p>
              </li>
            </ul>
          </div>
        

  </div>

  </nav>
  
  <div style={sidebar} id="mySidebar">
  <p className="flex items-center">        
        <img src="/icon.png" layout='fill' className="h-12 mt-12 mr-0 lg:h-12" style={{marginTop:"20px"}}alt="Logo"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white headingH2"> <Link href="/">onnecteen</Link></span>
        </p>
  
    <button onClick={onDraw} style={{float:"right",marginRight:cross,fontSize:"35px",marginTop:"-65px"}}> X </button>
    
    <ul>
      <br/><br/>
  <li className="sidebarItems"><Link href="/"> Home </Link></li>
  <li className="sidebarItems"><Link href="/about"> About us </Link></li>
  <li className="sidebarItems"><Link href="/contact"> Contact us </Link></li>
  <li className="sidebarItems"><Link href="/courses"> Courses </Link></li>
  <li className="sidebarItems"><Link href="/community"> Community </Link></li>
  <li className="sidebarItems"><Link href="/signup"> Sign up </Link></li>
  </ul>
  </div>
  
  </>
    )
  }
  export default Navbar2;
  
  
  /*

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
      
          <a href="/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> <Link href="/">Connecteen</Link></span>
          </a>
      
      
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
      
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" > <Link href="/"> Home </Link></a>
              </li>
              <li>
                <a  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/about">About </Link> </a>
              </li>
              <li>
                <a  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/"> Community </Link></a>
              </li>
              <li>
                <a  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <Link href="/courses"> Courses </Link></a>
              </li>
              <li>
                <a  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>




  <img src="../assets/icon.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
  
  <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
  
      <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
  
  
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  */