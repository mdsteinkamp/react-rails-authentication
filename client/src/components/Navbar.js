import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Navbar() {
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      const response = await fetch(("/logout"), {
        method: "DELETE",
      })
      if (response.ok) {
        setUser(null)
        navigate("/")
      }
    } catch(err) {
      console.log(err)
    }
  }


  return (
    <div>
      <h1>navbar</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}