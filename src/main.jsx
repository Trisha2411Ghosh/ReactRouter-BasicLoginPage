import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children :[
      {
        path: "",
        element : <Home/>
      },
      {
        path: "about",
        element : <About/>
      },
      {
        path: "contact",
        element : <Contact/>
      },
      { 
        path: "user/:userid",
        element : <User/>
      },
      { 
        path: "github",
        element : <Github/>,
        loader : githubInfoLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
