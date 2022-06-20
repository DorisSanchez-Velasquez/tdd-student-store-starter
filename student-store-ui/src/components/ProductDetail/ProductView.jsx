import * as React from "react"
import ProductCard from "./ProductCard"

export default function ProductView(props) {
  return (
    <div className = "product-view">
        <h1 className="product-id">Product # {props.productId}</h1>
        <ProductCard key = {props.productId} 
                     showDescription={true} 
                     product={props.product}
                     productId = {props.productId}/>
    </div>
  )
}