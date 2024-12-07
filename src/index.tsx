import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, RouterProvider, useRoutes } from 'react-router';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import path from 'path';
import Books from './pages/books/Books';
import Users from './pages/users/Users';
import { useAnimatedRoutes } from 'react-animated-router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
  {
    path:  "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Books/>
  
      },
      {
        path: "/users",
        element: <Users/>
  
      }

    ]
  }
]);


root.render(
  <RouterProvider router={routes}/>
);
