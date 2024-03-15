import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import '../App.css'

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
  fetch("/hello")
  .then((r) => r.json())
  .then((data) => setCount(data.count));
  }, []);

  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
  );
}
