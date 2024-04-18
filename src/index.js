import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About';
import Frontend from './Components/Frontend';
import Contact from './Components/Contact';
import Slider from './Components/Slider';
// import Register from './Components/Register';
import Login from './Components/Login';
import Register from './Components/Register';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element: <Slider/>
      },
      
      {
        path:"about",
        element: <About/>
      },
       
       
      {
        path:"courses",
        element:<Frontend/>

      },
      {
        path:"contact",
        element:<Contact/>

      },
      // {
      //   path:"login",
      //   element:<Register/>

      // },
      {
        path:"register",
        element:<Login/>

      },
      {
        path:"login",
        element:<Register/>

      },
      
      // {
      //   path="/login">
      //     {isLoggedIn ? (
      //       <Redirect to="/" />
      //     ) : (
      //       <LoginForm onLogin={handleLogin} />
      //     )}
      // }
    ] 
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
