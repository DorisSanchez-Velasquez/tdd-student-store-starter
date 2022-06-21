import * as React from "react"
import "../Home/Home.css"
import {Link} from "react-router-dom"

export default function ProductCard(props) {
 function formatPrice(price)
 {
    return price.toFixed(2)
 }

  let quantity;
  function findQuantity()
  {
    if(props.shoppingCart.length > 0)
    {
     props.shoppingCart.map((element) => {
       if(element.itemId === props.productId)
       {
         quantity = element.quantity;
       }
     })
    }
  }
  findQuantity();



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
                <button className="remove"><img id="button-remove" src="../src/minusSign.png"/></button>
                <p id="quantity-tag">{quantity}</p>
            </div>
        </div>
    </div>
  )
}