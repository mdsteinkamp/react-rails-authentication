import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext";
import '../App.css'
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import LandingPage from "./LandingPage";
import UpdatePassword from "./UpdatePassword";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default function App() {
  const {user} = useContext(UserContext)
  const [count, setCount] = useState(0);

  return (
    <div>
      {user ? <Navbar /> : null }
      <Routes>
        <Route path="/" element={<Home count={count}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/update_password" element={<UpdatePassword />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
