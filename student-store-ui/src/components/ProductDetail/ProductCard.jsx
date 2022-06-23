import * as React from "react"
import "../Home/Home.css"
import {Link} from "react-router-dom"

export default function ProductCard(props) {
 let findElement = props.shoppingCart.find((item) => item.itemId === props.productId)
 function formatPrice(price)
 {
    return price.toFixed(2)
 }


  //console.log(props.product)
  return (
    <div className="product-card">
        <div className="media">
          <Link to={"/products/" + props.productId}><img src={props.product.image} id="card-image"/></Link>
        </div>
        <div className = "product-info">
            <h2 className="product-name">{props.product.name}</h2>
            <div>
              <img src="../src/star.png" id="star-rating"/>
              <img src="../src/star.png" id="star-rating"/>
              <img src="../src/star.png" id="star-rating"/>
              <img src="../src/star.png" id="star-rating"/>
              <img src="../src/star.png" id="star-rating"/>
            </div>
            <p className="product-price">${formatPrice(props.product.price)}</p>
            {props.showDescription ? <p className="product-description">{props.product.description}</p> : null}
            
            <div className="add-remove-section">
                <button className="add" onClick={() => {props.handleAddItemToCart(props.productId)}}><img id="button-add" src="../src/plusSign.png"/></button>
                <button className="remove" onClick={() => {props.handleRemoveItemFromCart(props.productId)}}><img id="button-remove" src="../src/minusSign.png"/></button>
                <p id="quantity-tag">{findElement != null ? (findElement.quantity) : ""}</p>
            </div>
        </div>
    </div>
  )
}