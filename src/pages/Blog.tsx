import { useEffect, useState } from 'react'
import Post from '~/components/Blog/Post'
import Button from '~/components/Button'
import { fetchAllPostAPI } from '~/apis'
import AddPostWindow from '~/pages/AddPostWindow'

export type PostType = {
  id: number
  title: string
  content: string
  createdAt: string | null
}

const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

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
    <div className='flex flex-col items-center justify-center' >
      <Button onClick={() => setShowForm(true)}>Add new post</Button>

      <div className='w-2/3 min-h-screen flex flex-col items-center bg-red-100'>
        {posts.map(post => (
          <Post key={post.id} id={post.id} title={post.title} content={post.content}></Post>
        ))}
      </div>

      {showForm && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowForm(false)} // click ra ngoài để đóng
        >
          <div
            onClick={(e) => e.stopPropagation()} // chặn click bên trong để không đóng
          >
            <AddPostWindow
              onClose={() => setShowForm(false)}
              onPostCreated={(newPost) => setPosts(prev => [newPost, ...prev])} />
          </div>
        </div>
      )}


      { }

    </div >
  )
}

export default Blog
