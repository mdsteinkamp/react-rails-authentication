import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState([])
  const {setUser} = useContext(UserContext)

  const navigate = useNavigate()

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const user = await response.json()
        console.log(user)
        setUser(user)
        console.log("logged in")
        navigate("/home")
      } else {
        const e = await response.json()
        setErrors(e.errors)
        e.errors.forEach(e => console.log("error:", e))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Sign In</button>
      </form>
      <h3>Not a member?</h3>
        <Link to="/signup">
          <button>Register Here</button>
        </Link>
      <br />
      <Link to="/">
        <button>Forgot Password</button>
      </Link>
      {errors.length > 0 &&
        <ul>{errors.map(e => (
          <ul key={e}>
            <h3>{e}</h3>
          </ul>))}
        </ul>
      }
    </div>
  )
}