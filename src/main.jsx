import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Main from './components/MyComponents/dashboard/Main.jsx'
import Orders from './components/MyComponents/dashboard/Orders.jsx'
import Home from './components/MyComponents/dashboard/Home.jsx'
import Dashboard from './components/MyComponents/dashboard/Dashboard.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/products",
        element:<Main/>
      },
      {
        path:"/orders",
        element:<Orders/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
