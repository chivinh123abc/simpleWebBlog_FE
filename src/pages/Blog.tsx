import { useEffect, useState } from 'react'
import Post from '~/components/Blog/Post'
import { fetchAllPostAPI } from '~/apis'

type PostType = {
  id: number
  title: string
  content: string
  createdAt: string | null
}

const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchAllPostAPI()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching posts:', err)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className='flex justify-center' >
      <div className='w-2/3 min-h-screen flex flex-col items-center bg-red-100'>
        {posts.map(post => (
          <Post id={post.id} title={post.title} content={post.content}></Post>
        ))}
      </div>
    </div >
  )
}

export default Blog
