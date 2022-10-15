import NavbarLoggedIn from "./components/NavbarLoggedIn";
import Cookies from "universal-cookie";
import Router from "next/router";
import axios from "axios"
import backend from './api/backend'


const dashboard = ()=>{
  const cookies = new Cookies();
  const token = cookies.get("token");
  const check = async () => {
    cookies.get("token") ? null : Router.push("/login");
  };
  const reset = axios.post(backend+"dashboard", {token:token})
  .then((data) => {
    if(data.data.message !== 'success'){
        Router.push('/login')
    }
    else{
        console.log(data)
    }
  })

  

  

  return (
    <div>
    <NavbarLoggedIn/>
    <h1>Dashboard</h1>
  </div>
  )
}

export default dashboard;
