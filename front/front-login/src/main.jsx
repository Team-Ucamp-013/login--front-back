import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Profile from './components/Profile'
import LoginForm from './components/LoginForm'


const router = createBrowserRouter([
  {
    path:'/register',
    element: <App />
  },
  {
    path:'/login',
    element: <LoginForm />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
