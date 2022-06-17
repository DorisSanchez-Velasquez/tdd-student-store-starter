import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
      <Logo />

      <div className="all-nav-buttons">
        <h3 href="#home">Home</h3>
        <h3 href="#about">About Us</h3>
        <h3 href="#contact">Contact Us</h3>
        <h3 href="#buy">Buy Now</h3>
      </div>

    </nav>
  )
}
