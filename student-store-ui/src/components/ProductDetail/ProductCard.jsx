import * as React from "react"
import "../Home/Home.css"
import {Link} from "react-router-dom"

export default function ProductCard(props) {
  return (
    <div className="product-card">
        <div className="media">
          <Link to={"/products/" + props.productId}><img src={props.product.image} id="card-image"/></Link>
        </div>
        <h2 className="product-name">{props.product.name}</h2>
        <p className="product-price">${props.product.price}</p>
    </div>
  )
}