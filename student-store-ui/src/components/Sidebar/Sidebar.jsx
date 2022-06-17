import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <button className="toggle-button"><img src="../src/arrow.png" alt="arrow" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/shoppingCart.png" alt="arrow" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/dollarSign.png" alt="arrow" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/checklist.png" alt="arrow" id="toggle-image"/></button>
    </section>
  )
}
