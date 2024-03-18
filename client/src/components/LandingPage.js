import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"


export default function LandingPage() {
  const {user, setUser} = useContext(UserContext)

  if (!user) return <h1>Please log in!</h1>

  return(
    <div>
      <h1>Landing Page</h1>
      <h3>Welcome {user.email}</h3>
    </div>
  )
}