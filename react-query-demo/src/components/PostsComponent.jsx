import { useQuery, useQueryClient } from 'react-query';


const PostsComponent = () => {
    const queryClient = useQueryClient();
    const { isLoading, error, data, isError, isFetching, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            if (!res.ok) throw new Error('Failed to fetch posts')
            return res.json()
        }),
        staleTime: 60 * 1000,       // refresh for 1 minute
        cacheTime: 5 * 60 * 1000,   // keep unused cache for 5 minutes
        keepPreviousData: true,     // show old data while fetching new
        refetchOnWindowFocus: true, // auto refetch when tab is focused
    })

    if (isLoading) return <p style={{ color: 'green' }}>Loading posts…</p>
    if (isError) return <p style={{ color: 'crimson' }}>Error: {error.message}</p>
    console.log(data)
    if (!data) return <p>No posts found</p>

    return (
        <div>
            <button onClick={() => refetch()}>Refetch</button>
            <button
                onClick={() => {
                    queryClient.invalidateQueries({ queryKey: ['posts'] })
                }}
                >
                Invalidate Cache
            </button>
            {isFetching ? <span>Updating…</span> : null}
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