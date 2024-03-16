import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Home({}) {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home page</h1>
      <Link to="/login">Login Here</Link>
      <br />
      <Link to="/signup">Signup Here</Link>
    </div>
  )
}