import axios from 'axios'

export const fetchAllPostAPI = async () => {
  const response = await axios.get('http://localhost:3000/posts')
  return response.data
}