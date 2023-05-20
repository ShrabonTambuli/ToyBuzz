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
import Register from './Components/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AddToy from './Components/AddToy/AddToy.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';
import MyToys from './Components/MyToys/MyToys.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import UpdateData from './Components/UpdateData/UpdateData.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-toy",
        element: <AddToy/>,
      },
      {
        path: "/all-toys",
        element: <AllToys/>,
      },
      {
        path: "/my-toys",
        element: <MyToys/>,
      },
      {
        path: "/view-details/:_id",
        element: <PrivateRoute><ViewDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-buzz-server.vercel.app/product/${params._id}`)
      },
      {
        path: "/update-data/:_id",
        element: <UpdateData/>,
        loader: ({params}) => fetch(`https://toy-buzz-server.vercel.app/my-products/${params._id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
