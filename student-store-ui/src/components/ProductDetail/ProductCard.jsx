import * as React from "react"
import "../Home/Home.css"

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <h2 className="product-name">{props.product.name}</h2>
        <p className="product-price">${props.product.price}</p>
        <img src={props.product.image} id="card-image"/>
    </div>
  )
}