import * as React from "react"
import ProductCard from "../ProductDetail/ProductCard"

export default function ProductGrid(props) {
    // console.log("Entered product grid: ", props.products)
    if(props.filteredProducts.length > 0)
    {
      return (
        <div className = "product-grid">
            {props.filteredProducts.map((product, index) => {
                return <ProductCard key = {product.id} 
                                    showDescription={false} 
                                    product={product}
                                    productId = {product.id}/>;
            })}
        </div>
    )
    }

  return (
      <div className = "product-grid">
          {props.products.map((product, index) => {
              return <ProductCard key = {product.id} 
                                  showDescription={false} 
                                  product={product}
                                  productId = {product.id}/>;
          })}
      </div>
  )
}