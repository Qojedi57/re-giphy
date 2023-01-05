import  ReactDOM  from "react-dom/client";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout";
import {ChakraProvider} from "@chakra-ui/react"
;
import App from './App';
import './index.css';
import Trending from "./pages/trending";
import Search from "./pages/search";
import Random from "./pages/random";

const router = createBrowserRouter([
{
  path: "/",
  element: <Layout/>,
  children:[
    {
      path:"trending",
      element:<Trending />
      
    },

    {
      path:"search",
      element:<Search/>
    },

    {
      path:"random",
      element:<Random/>
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
