import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs/'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createNewBlog = async newBlogObject => {
  const config = {
    headers: { authorization: token },
  }
  const response = await axios.post(baseUrl, newBlogObject, config)
  return response.data
}

export default { 
  setToken,
  getAll,
  createNewBlog
}