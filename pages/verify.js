import Head from 'next/head'
import Navbar2 from './components/Navbar2'
import Link from 'next/link'
import { Button } from '@mui/material'
import  Router  from 'next/router'
import backend from './api/backend'
import { useState } from 'react'

const Verify = () => {
  const [error,setError] = useState('');
    try{
    const sendBack = localStorage.getItem('isVerifyAllowed');
    if (!sendBack){
        Router.push('/404')
        console.log("yes");
    }
    if (sendBack){
        console.log("duh");
    }
}
catch(err){
    
    console.log(err);
}
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: localStorage.getItem('email'),
      code: event.target.code.value,
    };
    
    const back = await fetch(backend+'verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then((data) => {
      if(data.status===400){
      setError(data.message)
      }
      else{
      localStorage.removeItem('isVerifyAllowed');
      Router.push('/login')
      }
    }
    )
    .catch(err => console.log(err))

  }
  return (
    <>
    <Navbar2 />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Connecteen | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold" >
          Join {' '}
          <p className="text-blue-600"> Connecteen </p> Today
        </h1>
<br/>
        <div className="flex items-center justify-around max-w-4xl mt-6 sm:w-full">

        <div className="w-full max-w-xs">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md cardLogin" onSubmit={onSubmit}>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Verification Code</label>
              <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none verification focus:outline-none focus:shadow-outline" 
              id="password" type="password" placeholder="* * * *"  name="code" required minLength='4' maxLength="4" />
              <p className="text-xs italic text-red-500">{error}</p>
            </div>

            <div className="flex items-center justify-between">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                Verify
              </button>
              <Button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" href="#">
                Resend code
              </Button>
            </div><br/>
            <Link className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="/signup">
                Wrong info? Sign up again
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
export default (Verify);


