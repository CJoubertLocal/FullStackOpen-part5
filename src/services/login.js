import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async userCredentials => {
    const response = await axios.post(baseUrl, userCredentials)
    return response.data
}

export default { login }