import { useState } from "react"

export default function ForgotPassword() {
  const [formData, setFormData] = useState({email: ""})
  const [errors, setErrors] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await fetch("/password_reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
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
      <h1>forgot your pw??</h1>
      <form>
      <h3>enter your email</h3>
      <input
        type="text"
        name="email"
        placeholder="Current Email"
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}
      />
      <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}