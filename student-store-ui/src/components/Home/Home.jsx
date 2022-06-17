import * as React from "react"
import Hero from "../Home/Hero"
import ProductGrid from "../Home/ProductGrid"
import "./Home.css"

export default function Home(props) {
  const {products} = props;
  return (
    <div className="home">
      <Hero />
      <ProductGrid products = {props.products} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
    </div>
  )
}
