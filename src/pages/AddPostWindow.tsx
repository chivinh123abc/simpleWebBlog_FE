import React, { useState } from 'react'
import { createPostAPI } from '~/apis'
import type { PostType } from '~/pages/Blog'

type AddPostWindowProps = {
  onClose: () => void
  onPostCreated: (newPost: PostType) => void
}

const AddPostWindow: React.FC<AddPostWindowProps> = ({ onClose, onPostCreated }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const newPost = await createPostAPI(title, content)
      console.log('Post create', newPost)

      setTitle('')
      setContent('')

      onPostCreated(newPost)

      onClose()

    } catch (error) {
      console.log('Error creating post', error)
    }
  }

  return (
    <div className='flex items-center justify-center p-4  min-h-screen'>
      <div className='w-full max-w-md'>
        <form action="" className='bg-white rounded-lg shadow-md p-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="title" className='block text-gray-700 font-bold text-lg mb2'>
              Title
            </label>
            <input className='border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              type='text'
              id='title'
              placeholder='Enter your title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="content" className='block text-gray-700 font-bold text-lg mb2'>
              Content
            </label>
            <textarea className='border border-gray-300 rounded p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs'
              id='content'
              placeholder='Enter your content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 cursor-pointer'>
              Submit
            </button>
          </div>
        </form>
      </div >
    </div >
  )
}
export default AddPostWindow
