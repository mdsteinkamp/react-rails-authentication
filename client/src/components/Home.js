import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Home({}) {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Home page</h1>
      <Link to="/signup">Signup Here</Link>
      <br />
      <Link to="/login">Login Here</Link>
    </div>
  )
}