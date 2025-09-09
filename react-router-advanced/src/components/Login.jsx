import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export default function Login() {
  const location = useLocation()
  const { login } = useAuth()
  const [name, setName] = useState('')

  const from = location.state?.from?.pathname || '/profile'

  return (
    <section>
      <h1>Login</h1>
      <p>You must log in to view the Profile page.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          login(name || 'User', from)
        }}
        style={{ display: 'flex', gap: 8, alignItems: 'center' }}
      >
        <input
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </section>
  )
}