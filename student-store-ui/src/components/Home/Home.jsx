import * as React from "react"
import Hero from "../Home/Hero"
import ProductGrid from "../Home/ProductGrid"
import "./Home.css"
import Search from "../Search/Search"

export default function Home(props) {
  const {products} = props;
  console.log("Entering home")

  return (
    <div className="home" id="home">
      <Hero />

      <Search searchItems={props.searchItems}/>

      <h1 id="buy">Best Selling Products</h1>

      <ProductGrid products = {props.products}
                   filteredProducts={props.filteredProducts}
                   shoppingCart = {props.shoppingCart}
                   handleAddItemToCart={props.handleAddItemToCart} 
                   handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
    </div>
  )
}
