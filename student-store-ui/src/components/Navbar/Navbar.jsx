import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
      <Logo />

      <div className="all-nav-buttons">
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
        <h3>Buy Now</h3>
      </div>

    </nav>
  )
}
