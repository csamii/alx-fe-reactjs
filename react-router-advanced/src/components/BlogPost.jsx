import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/blogPost'

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => String(p.postId) === String(id));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <Link to="/blog">Back to Blog</Link>
      </section>
    )
  }

  return (
    <section>
      <h1 >{post.title}</h1>
      <p>{post.body}</p>
      <p><Link to="/blog">← Back to Blog</Link></p>
    </section>
  )
}