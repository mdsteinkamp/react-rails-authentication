import { useState } from "react"
import { Link } from "react-router-dom"

export default function UpdatePassword() {
  const [formData, setFormData] = useState({
    password_challenge: "",
    password: "",
    password_confirmation: ""
  })
  const [errors, setErrors] = useState([])


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
      const response = await fetch("/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        const user = await response.json()
        console.log(user)
      } else {
        const e = await response.json()
        setErrors(e.errors)
        console.log(e.errors)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Update Your Password</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Current Password</h3>
          <input
            type="password"
            name="password_challenge"
            placeholder="Current Password"
            value={formData.password_challenge}
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
          <Link to="/" onClick={handleSubmit}>Update Password</Link>
        </form>
        <div>
        <Link to="/home">Cancel</Link>
        </div>
        {errors.length > 0 &&
            <ul>{errors.map(e => (
              <ul key={e}>
                <h3>{e}</h3>
              </ul>))}
            </ul>
          }
    </div>
    </div>
  )
}