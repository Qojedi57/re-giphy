import  ReactDOM  from "react-dom/client";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout";
import {ChakraProvider} from "@chakra-ui/react"
;
import App from './App';
import './index.css';

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  children:[
    {
      path:"trending",
      element:<div>This is trending</div>
    }
  ]
}
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  
  </React.StrictMode>
);
