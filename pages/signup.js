import Link from 'next/link'
import Head from 'next/head'
import  Router  from 'next/router'
import backend from './api/backend'
import Navbar3 from './components/Navbar3'
import validatorSignup from './api/validator/signup'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Signup = () => {
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });
  const [errorColor, setErrorColor] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      cpassword: event.target.cpassword.value,
    };
    setError(validatorSignup(data));
    
    
    if(Object.keys(error).length === 0){
      const newData = {
        name: data.name,
        email: data.email,
        password: data.password,
      }
      await fetch(backend+'signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
        .then(res => res.json())
        .then((data) => {
          const email = data.value.email
          const bool = true;
          localStorage.setItem('email', email)
          localStorage.setItem('isVerifyAllowed', bool)
          Router.push('/verify')
        })
        .catch(err => console.log(err))
    }
    if(Object.keys(error).length !== 0){
      setErrorColor("border-red-500");  
    }
    
    
    //const res = await fetch("https://server42223.herokuapp.com/");
/*
    const back = await fetch(backend+'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((data) => {
        const email = data.value.email
        const bool = true;
        localStorage.setItem('email', email)
        localStorage.setItem('isVerifyAllowed', bool)
        Router.push('/verify')
      })
      .catch(err => console.log(err))
      */

  }
  

  return (
    <>
          <Head>
        <title>Connecteen | Signup </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar3/>
    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">


    <div style={{marginBottom:"60px"}}>&nbsp;</div>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
      <motion.div 
            initial={{y:300,opacity: 0}}
            animate={{y:0,opacity: 1}}
            transition={{delay: 0.5}}>
        <h1 className="text-6xl font-bold" >
          Join {' '}
          <p className="text-blue-600"> Connecteen </p> Today
        </h1>

        <p className="mt-3 text-2xl">
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            Get started by joining the most advanced community of Banlgadesh
          </code>
        </p>
        </motion.div>

        <div className="flex items-center justify-around max-w-4xl mt-6 sm:w-full">

        <motion.div 
            initial={{opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}>

        <div className="w-full max-w-xs">
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md cardSignup" onSubmit={onSubmit}>
          <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Name" >
                Full Name
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errorcolor}" 
               type="text" placeholder="John Doe"  name="name" required minLength='3' maxLength="35"/>
              <p className="text-xs italic text-red-500">{error.name}</p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Email" >
                Email
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errorcolor}" 
               type="text" placeholder="john@example.com"  name="email" required minLength='10' maxLength="40"/>
              <p className="text-xs italic text-red-500">{error.email}</p>
            </div>
            <div className="mb-6">

              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
              <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errorcolor}" 
               type="password" placeholder="******************"  name="password" required minLength='10' maxLength="20" />
              <p className="text-xs italic text-red-500">{error.password}</p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password" >
                Confirm Password
              </label>
              <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errorcolor}" 
               type="password" placeholder="******************" name="cpassword" required minLength='10' maxLength="20"/>
              <p className="text-xs italic text-red-500">{error.cpassword}</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <Link className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
                Forgot Password?
              </Link>
            </div><br/>
            <Link className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="/login">
                Have Account? Login Here
              </Link>
              
          </form>
          <p className="text-xs text-center text-gray-500">
            &copy;2022 Connecteen. All rights reserved.
          </p>
        </div>
        </motion.div>

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
