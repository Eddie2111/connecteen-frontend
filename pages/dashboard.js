import NavbarLoggedIn from "./components/NavbarLoggedIn";
import Cookies from "universal-cookie";
import Router from "next/router";
import api from "./api/auth/authCheck";
export default function Dashboard() {
  const cookie = new Cookies();
  const token = cookie.get("token");

  return (
    <div>
      <NavbarLoggedIn/>
      <h1>Dashboard</h1>
    </div>
)

  
}