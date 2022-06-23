import * as React from "react"
import "./Sidebar.css"

export default function CheckoutForm(props) 
{
    return(
        <div>
            <h1 id="checkout-header">CHECKOUT FORM</h1>
            <div className="checkout-form">
                <p>Name</p>
                <input type="text" 
                    name="name" 
                    placeholder="Student Name"
                    onChange={(evt) => {props.handleOnCheckoutFormChange(evt.target.name, evt.target.value)}}
                    className="checkout-form-input"/>

                <p>Email</p>
                <input type="email"
                    name="email"
                    placeholder="student@codepath.org"
                    onChange={(evt) => {props.handleOnCheckoutFormChange(evt.target.name, evt.target.value)}}
                    className="checkout-form-input"/>
                <div>
                    <button className="checkout-button" onClick={(props.handleOnSubmitCheckoutForm)}>CHECKOUT</button>
                    {/* {props.submitSuccess === true ? (<h2 className="success">Success!</h2>) : (<h2 className="error">{props.error}</h2>)} */}
                </div>
            </div>
        </div>
    )
}
