import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Components/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />,
    children : [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/blogs",
        element:<Blog/>,
      },
      {
        path:"/login",
        element:<Login/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
