import Head from 'next/head'
import Navbar2 from './components/Navbar2'
import Link from 'next/link'
import backend from './api/backend'
const Login = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const back = await fetch(backend+'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

  }
  return (
    <>
    <Navbar2/>
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
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Email" >
                Email
              </label>
              <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
              id="username" type="text" placeholder="john@example.com"  name="email" required minLength='10' maxLength="35"/>
            </div>
            <div className="mb-6">

              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">Password</label>
              <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
              id="password" type="password" placeholder="******************"  name="password" required minLength='10' maxLength="20" />
              <p className="text-xs italic text-red-500">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
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

export default (Login);


