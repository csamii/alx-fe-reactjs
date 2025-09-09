import { Link } from 'react-router-dom'
import { posts } from '../data/blogPost'

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(p => (
          <li key={p.postId} style={{ marginBottom: 8 }}>
            <Link to={`/blog/${p.postId}`}>#{p.postId} — {p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}