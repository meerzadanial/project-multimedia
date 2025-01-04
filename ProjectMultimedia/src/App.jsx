import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/about'; // Correct import
import Contact from './pages/Contact'; // Ensure this exists
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
