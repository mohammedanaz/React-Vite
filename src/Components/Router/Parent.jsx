import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import ContactUs from './ContactUs'
import Layout from './Layout'
import User from './User'
import ErrorComponent from './ErrorComponent'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} errorElement={<ErrorComponent />} />
        <Route path='about' element={<About />} errorElement={<ErrorComponent />} />
        <Route path='contactUs' element={<ContactUs />} errorElement={<ErrorComponent />} />
        <Route path='user/:userName/:userId' element={<User />} errorElement={<ErrorComponent />} />
        <Route path='*' element={<h1>Page Not Fount</h1>} />
      </Route>        
  )
);

export default function Parent() {
  return (
    <div>
      <RouterProvider router={router}/> 
    </div>
  )
}
