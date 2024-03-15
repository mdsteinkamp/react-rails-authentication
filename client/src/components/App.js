import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import '../App.css'

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/hello")
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setCount(data.count)
        }
      } catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, []);

  return (
        <Routes>
          <Route path="/" element={<Home count={count}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
  );
}
