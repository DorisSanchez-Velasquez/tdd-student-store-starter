import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />

      <div className="all-nav-buttons">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#buy">Buy Now</a></li>
        </ul>
      </div>

    </nav>
  )
}
