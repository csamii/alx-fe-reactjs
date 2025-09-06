import { useQuery } from 'react-query';
// async function fetchPosts() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!res.ok) throw new Error('Failed to fetch posts')
//   return res.json()
// }


const PostsComponent = () => {
    const { isPending, error, data, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            if (!res.ok) throw new Error('Failed to fetch posts')
            return res.json()
        }),
    })

    if (isPending) return <p style={{ color: 'green' }}>Loading posts…</p>
    if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>
    console.log(data)
    if (!data) return <p>No posts found</p>

    return (
        <div>
            {data.map((post) => (
                <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default PostsComponent;