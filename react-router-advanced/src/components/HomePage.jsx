import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <section>
        <Link to="/profile" style={{color: "green"}}>Profile</Link>
        <h1>Home</h1>
        <p>Welcome to my Blog</p>
    </section>
  )
}