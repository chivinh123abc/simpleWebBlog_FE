import axios from 'axios'

export const fetchAllPostAPI = async () => {
  const response = await axios.get('http://localhost:3000/posts')
  return response.data
}

export const createPostAPI = async (title: string, content: string) => {
  const response = await axios.post('http://localhost:3000/posts', { title, content })
  return response.data
}
