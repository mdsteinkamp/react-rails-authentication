import { useNavigate, Link } from "react-router-dom"
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
      <h3>navbar</h3>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/update_password">
        <button>Update Password</button>
      </Link>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}