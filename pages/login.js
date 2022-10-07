import Head from 'next/head'
import Navbar3 from './components/Navbar3'
import Link from 'next/link'
import Router  from 'next/router'
import backend from './api/backend'
import axios from '../node_modules/axios/index'
import { useState } from 'react'
import Cookies from 'universal-cookie';


const Login = () => {
  const [error,setError] = useState('');
  const cookie = new Cookies();
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value.toString(),
      password: event.target.password.value.toString(),
    };
    const back = await axios.post(backend+'login', data)
    .then((data) => {
      console.log(data.data.result.username)
      if(data.data.status === 'success' || data.data.result.isConfirmed === true){
        localStorage.setItem('user',data.data.result.username)
        
        cookie.set('token',data.data.serialised.token, {
          path: '/',
          secure: true,
          httpOnly: false,
          sameSite: true,
          maxAge: 3600*24*15,
          });
        Router.push('/dashboard')
        //console.log(data.data.result)
        //const cookie = req.cookies();
        
      }
      if(data.data.status === 'error'){
        setError(data.data.error)
      }
      if (data.data.result.isConfirmed === false){
        Router.push('/verify')
      }

    })
    .catch(err => console.log(err))
    

  }
  if (cookie.get('token')){
    Router.push('/dashboard')
  }
  else{
  return (
    <>
      <Head>
        <title>Connecteen | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar3/>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div style={{marginBottom:"60px"}}>&nbsp;</div>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold" >
          Join {' '}
          <p className="text-blue-600"> Connecteen </p> Today
        </h1>
<br/>
        <div className="flex items-center justify-around max-w-4xl mt-6 sm:w-full">

        <div className="w-full max-w-xs">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md cardLogin" onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Email" >
                Email
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
              id="username" type="text" placeholder="john@example.com"  name="email" required minLength='10' maxLength="35"/>
            </div>
            <div className="mb-6">

              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
              <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none border-black-500 focus:outline-none focus:shadow-outline" 
              id="password" type="password" placeholder="******************"  name="password" required minLength='10' maxLength="20" />
              <p className="text-xs italic text-red-500">{error}</p>
            </div>

            <div className="flex items-center justify-between">
              <button className="px-4 py-2 font-bold text-white styleButton focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <Link className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
                Forgot Password?
              </Link>
            </div><br/>
            <Link className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="/signup">
                No account? Join today
              </Link>
              
          </form>
          <p className="text-xs text-center text-gray-500">
            &copy;2022 Connecteen. All rights reserved.
          </p>
        </div>


        </div>
      </main>


  



      
    </div>
    </>
  )
  }
}

export default (Login);


