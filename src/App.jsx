import { useState, useEffect } from 'react'

import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import Notification from './components/Notification'
import BlogList from './components/BlogList'
import CreateBlogForm from './components/CreateBlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogURL, setNewBlogURL] = useState('')
  const [notification, setNotification] = useState(null)
  const [useSuccessStyle, setUseSuccessStyle] = useState(false)

  const updateAllBlogs = () => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }

  useEffect(() => {
    updateAllBlogs()
  }, [])

  useEffect(() => {
    const jwtInLocalStorage = window.localStorage.getItem('userLoggedIntoBlogSystem')
    if (jwtInLocalStorage) {
      const userJSON = JSON.parse(jwtInLocalStorage)
      setUser(userJSON)
      blogService.setToken(userJSON.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({username, password})
      setUser(user)
      setUsername('')
      setPassword('')
      window.localStorage.setItem('userLoggedIntoBlogSystem', JSON.stringify(user))
      blogService.setToken(user.token)
      
      setUseSuccessStyle(true)
      setNotification('Login succeeded')
      setTimeout(() => {
        setNotification(null)
      }, 5000);

    } catch (exception) {
      setUseSuccessStyle(false)
      setNotification('Incorrect username or password')
      setTimeout(() => {
        setNotification(null)
      }, 5000);
      console.log('username or password is incorrect')
      // setNotificationMessage('username or password is incorrect')
      // setTimeout(() => {
      //   setNotificationMessage(null)
      // }, 5000)
    }
  }

  const handleNewBlogSubmit = async (event) => {
    event.preventDefault()

    const newBlog = {
        "title": newBlogTitle,
        "author": newBlogAuthor,
        "url": newBlogURL,
    }

    const res = await blogService.createNewBlog(newBlog)

    setNewBlogTitle('')
    setNewBlogAuthor('')
    setNewBlogURL('')

    updateAllBlogs()

    setUseSuccessStyle(true)
    setNotification(`a new blog ${newBlogTitle} by ${newBlogAuthor} added`)
    setTimeout(() => {
      setNotification(null)
    }, 5000);
  }

  const logout = (event) => {
    setUser(null)
    blogService.setToken(null)
    window.localStorage.removeItem('userLoggedIntoBlogSystem')

    setUseSuccessStyle(true)
    setNotification(`log out successful`)
    setTimeout(() => {
      setNotification(null)
    }, 5000);
  };

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
        {user.username} logged in <button onClick={logout}>logout</button>
      </div>
      <CreateBlogForm 
        title={newBlogTitle}
        setTitle={setNewBlogTitle}
        author={newBlogAuthor}
        setAuthor={setNewBlogAuthor}
        url={newBlogURL}
        setURL={setNewBlogURL}
        handleSubmit={handleNewBlogSubmit}
      />

      <BlogList blogs={blogs} />

    </>
  )

  return (
    <div>
      <h2>blogs</h2>

      <Notification
          message={notification} 
          useSuccessStyle={useSuccessStyle} />
      
      {
        user === null 
        ? loginForm() 
        : blogForm()
      }

    </div>
  )
}

export default App