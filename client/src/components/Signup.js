import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext"

export default function Signup() {
  const {user, setUser} = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: ""
  })
  const [errors, setErrors] = useState([])

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
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const user = await response.json()
        setUser(user)
        console.log(user)
        navigate("/home")
      } else {
        const e = await response.json()
        setErrors(e.errors)
        e.errors.forEach(e => console.log("error:", e))
      }
    } catch(err) {
      console.log(err)
    }
  }

  return(
     <div>
      <h1>Signup Here</h1>
        <form onSubmit={handleSubmit}>
          <h3>Email</h3>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <h3>Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <h3>Confirm Password</h3>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          <br />
          <Link to="/" onClick={handleSubmit}>Signup</Link>
        </form>
        <div>
        <Link to="/">Cancel</Link>
        </div>
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