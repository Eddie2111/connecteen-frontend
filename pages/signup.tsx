import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from './components/Banner'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer';

const Signup: NextPage = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      cpassword: event.target.cpassword.value
    };
    //const res = await fetch("https://server42223.herokuapp.com/");
    const res = await fetch('/api/hello', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
    console.log(data,res);
  }
  return (
    <>
    <Banner />
    <Navbar2 />
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Connecteen | Signup </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold" >
          Join {' '}
          <p className="text-blue-600"> Connecteen </p> Today
        </h1>

        <p className="mt-3 text-2xl">
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Get started by joining the most advanced community of Banlgadesh
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl  items-center justify-around sm:w-full">

        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 cardSignup" onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email" >
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" type="text" placeholder="john@example.com"  name="email" required minLength='10' maxLength="40"/>
            </div>
            <div className="mb-6">

              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" type="password" placeholder="******************"  name="password" required minLength='10' maxLength="20" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >
                Confirm Password
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="cpassword" type="password" placeholder="******************" name="cpassword" required minLength='10' maxLength="20"/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div><br/>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                Have Account? Login Here
              </a>
              
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Connecteen. All rights reserved.
          </p>
        </div>


        </div>
      </main>

      <div className="flex items-center justify-between">
              <br/><br/><br/>
            </div><br/>

  



      
    </div>
    </>
  )
}

export default (Signup);
