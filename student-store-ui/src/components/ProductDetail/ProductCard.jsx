import * as React from "react"
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <h2 className="product-name">{props.product.name}</h2>
        <p className="product-price">${props.product.price}</p>
        <img src={props.product.image} />
    </div>
  )
}