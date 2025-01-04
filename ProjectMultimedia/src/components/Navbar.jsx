import React from 'react'
import logo from '../assets/datanian.png'

const Navbar = () => {
  return (
    <div class ="navbar">
      <img src={logo}></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
