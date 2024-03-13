import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({username, password})
      setUser(user)
      setUsername('')
      setPassword('')

    } catch (exception) {
      console.log('username or password is incorrect')
      // setNotificationMessage('username or password is incorrect')
      // setTimeout(() => {
      //   setNotificationMessage(null)
      // }, 5000)
    }
  }

  const loginForm = () => (
    <>
      <LoginForm 
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
    </>
  )

  const blogForm = () => (
    <>
      <div>
        {user.username} logged in
      </div>
      <div>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    </>
  )

  return (
    <div>
      <h2>blogs</h2>

      {
        user === null 
        ? loginForm() 
        : blogForm()
      }

    </div>
  )
}

export default App