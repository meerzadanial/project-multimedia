import React from 'react'
import logo from '../assets/datanian.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className= "navbar">
      <img src={logo}></img>
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
