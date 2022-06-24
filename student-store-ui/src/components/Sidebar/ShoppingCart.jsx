import * as React from "react"
import "./Sidebar.css"

export default function ShoppingCart(props) 
{
    let name;
    let price = 0;
    let cost;
    let subtotal = 0;
    let taxes;
    let totalPrice;

    function formatPrice(price)
    {
       return price.toFixed(2)
    }

    function findProduct(element)
    {
        props.products.map((product) => {
            if(product.id === element.itemId)
            {
                name = product.name;
                price = product.price;
                cost = product.price * element.quantity;
            }
        })
        subtotal += cost;
        taxes = (subtotal * 8.75)/100;
        totalPrice = subtotal + taxes;
    }


    if(props.shoppingCart.length === 0)
    {
        return(
            <div>
                <h1>SHOPPING CART</h1>
                <p className="notification">No items added to cart yet. Start shopping now!</p>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <h1>SHOPPING CART</h1>
                <table className="shopping-cart">
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Cost</th>
                    </tr>
                {
                    props.shoppingCart.map((element) => {
                        findProduct(element);
                        return(
                            <tr key={element.itemId} id="cart-product">
                                <td className="cart-product-name">{name}</td>
                                <td className="cart-product-quantity">{element.quantity}</td>
                                <td>${formatPrice(price)}</td>
                                <td>${formatPrice(cost)}</td>
                            </tr>
                        )
                    })
                }

                <tr id="cart-product">
                    <td>Subtotal</td>
                    <td></td>
                    <td></td>
                    <td className="subtotal">${formatPrice(subtotal)}</td>
                </tr>
                <tr id="cart-product">
                    <td>Taxes and Fees</td>
                    <td></td>
                    <td></td>
                    <td>${formatPrice(taxes)}</td>
                </tr>
                <tr id="cart-product">
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td className = "total-price">${formatPrice(totalPrice)}</td>
                </tr>
                </table>
            </div>
        )
    }
}
