import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../Sidebar/ShoppingCart"
import CheckoutForm from "../Sidebar/CheckoutForm"

export default function Sidebar(props) {

  if(props.isOpen === false){  
    return (
      <section className="sidebar" id="sidebar-closed">
        <button className="toggle-button" onClick={(evt) => {props.handleOnToggle()}}><img src="../src/arrow.png" alt="arrow" id="toggle-image"/></button>
        <button className="toggle-button"><img src="../src/shoppingCart.png" alt="arrow" id="toggle-image"/></button>
        <button className="toggle-button"><img src="../src/dollarSign.png" alt="arrow" id="toggle-image"/></button>
        <button className="toggle-button"><img src="../src/checklist.png" alt="arrow" id="toggle-image"/></button>
      </section>
  )}
  if(props.isOpen === true){
    return(
    <section className ="sidebar" id="sidebar-open">
      <button className="toggle-button-close" onClick={(evt) => {props.handleOnToggle()}}><img src="../src/arrow.png" alt="arrow" id="toggle-image"/></button>
      <ShoppingCart isOpen={props.isOpen}
                    products={props.products}
                    shoppingCart={props.shoppingCart}/>
                    
      <CheckoutForm isOpen={props.isOpen}
                    shoppingCart={props.shoppingCart}
                    checkoutForm={props.checkoutForm}
                    handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
                    error={props.error}
                    submitSuccess = {props.submitSuccess}
                    receipt = {props.receipt}/>
    </section>
  )}
}
