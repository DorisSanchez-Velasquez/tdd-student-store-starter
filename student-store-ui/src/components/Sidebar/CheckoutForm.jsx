import * as React from "react"
import "./Sidebar.css"

export default function Sidebar(props) 
{
    return(
        <div>
            <h1 id="checkout-header">CHECKOUT FORM</h1>
            <div className="checkout-form">
                <p>Name</p>
                <input type="email" 
                    name="email" 
                    placeholder="student@codepath.org"
                    onChange={props.handleOncCheckoutFormChange}
                    className="checkout-form-input"/>

                <p>Email</p>
                <input type="text"
                    name="name"
                    placeholder="Student Name"
                    onChange={props.handleOncCheckoutFormChange}
                    className="checkout-form-input"/>
                <div>
                    <button className="checkout-button" onClick={props.handleOnSubmit}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
