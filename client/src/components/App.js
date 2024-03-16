import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom"
import { UserContext } from "./UserContext";
import '../App.css'
import Home from "./Home";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import LandingPage from "./LandingPage";

export default function App() {
  const {user} = useContext(UserContext)
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/hello")
  //       if (response.ok) {
  //         const data = await response.json()
  //         console.log(data)
  //         setCount(data.count)
  //       }
  //     } catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fetchData()
  // }, []);

  return (
    <div>
      {user ? <Navbar /> : null }
      <Routes>
        <Route path="/" element={<Home count={count}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}
