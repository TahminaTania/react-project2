import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/NavBar';
import Register from './components/Registration';
import Login from './components/LogIn';
import Footer from './components/Footer';
import Home from './Pages/Home';
import SingleRoom from './components/SingleRoom';


const Layout =()=>{


  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <div><Home /></div>,
      },
      {
        path: "/blog",
        element: <div>Blog</div>,
      },
      {
        path: "/hotel/:Hotelid",
        element: <div><SingleRoom/></div>,
      },
      {
        path: "/login",
        element: <div><Login/></div>,
      },
      {
        path: "/Register",
        element: <div><Register/></div>,
      },
      {
        path: "/post/:id",
        element: <div>Individual</div>,
      },
    ]

  },
  {
    path: "/Register",
    element: <div><Register/></div>,
  },
  {
    path: "/log",
    element: <div>login</div>,
  },


]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
