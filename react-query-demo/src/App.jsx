import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
