import React from "react";
import NavbarLoggedIn from "./components/NavbarLoggedIn";
import Link from "next/link";
import Head from "next/head";
import welcomeFormData from "./api/forms/welcomeFormData"
import SEO from "./components/SEO";
const Welcome = () => {
  const onSubmit = async (event)=>{
    event.preventDefault();
    const data = event.target.data
    await welcomeFormData(data);
  }
  return (
    <>
    <Head>
      <title>Connecteen || Welcome</title>
      <SEO/>
    </Head>
    <div>
      <NavbarLoggedIn />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center"></p>
              <Link href="/dashboard">Go to Dashboard</Link>
              <h1 className="text-center">Let's prepare your profile</h1>
              <form onSubmit={onSubmit} method="post">
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>
                <input type="text" name="firstname" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"/>


              </form>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Welcome;