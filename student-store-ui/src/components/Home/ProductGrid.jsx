import * as React from "react"
import ProductCard from "../ProductDetail/ProductCard"

export default function ProductGrid(props) {
    if(props.filteredProducts.length > 0)
    {
        console.log("ProductGrid - Products")
        return (
            <div className = "product-grid">
                {props.filteredProducts.map((product, index) => {
                    return <ProductCard key = {product.id} 
                                        showDescription={false} 
                                        product={product}
                                        productId = {product.id}
                                        handleAddItemToCart = {props.handleAddItemToCart}
                                        shoppingCart = {props.shoppingCart}/>;
                })}
            </div>
        )
    }
    else
    {return (
        <div className = "product-grid">
            {props.products.map((product, index) => {
                return <ProductCard key = {product.id} 
                                    showDescription={false} 
                                    product={product}
                                    productId = {product.id}
                                    handleAddItemToCart = {props.handleAddItemToCart}
                                    shoppingCart = {props.shoppingCart}/>;
            })}
        </div>
    )}
}