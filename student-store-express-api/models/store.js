//IMPORT FILES
const { storage } = require(`../data/storage`);
const { BadRequestError } = require("../utils/errors");

class Store
{
    //GETTING THE LIST OF ALL PRODUCTS FUNCTION
    static getProductList()
    {
        let products = storage.get("products").value()
        return products
    }



    //GETTING A SPECIFIC PRODUCT BY ID
    static getProduct(productId)
    {
        let product = storage.get("products").find({id: Number(productId)}).value();
        return product
    }



    //CREATING THE PURCHASE ORDERS
    static createPurchase(purchaseOrder)
    {
        //ERROR HANDLING: MISSING FIELDS
        if(!purchaseOrder.shoppingCart || !purchaseOrder.user)
        {
            throw new BadRequestError("Whoops, looks like you forgot a field! ")
        }

        //ERROR HANDLING: CHECKING DUPLICATES
        let sortedCart = purchaseOrder.shoppingCart.sort(function(itemA, itemB) {
            return itemA.itemId  - itemB.itemId
        })
        for(let x = 0; x < sortedCart.length-1; x++)
        {
            if(sortedCart[x].itemId === sortedCart[x+1].itemId)
            {
                throw new BadRequestError("Whoops, looks like there's duplicates in your cart!")
            }
        }
        

        //CALCULATING THE TOTAL OF THE SHOPPING CART
        let total = 0;
        purchaseOrder.shoppingCart.map((item) => {
            let price = storage.get("products").find({id: item.itemId}).value().price
            price = price * item.quantity
            total = total + price
        })
        let taxes = total * 0.0875
        total = total + taxes
        total = total.toFixed(2)

        //CALCULATING THE TIME STAMP
        const createdAt = new Date().toISOString()

        //DISPLAY SHOPPING CART FOR RECEIPT
        let item = []
        let order = [];
        purchaseOrder.shoppingCart.map((item) => {
            let name = storage.get("products").find({id: item.itemId}).value().name
            let quantity = item.quantity
            item =`You bought ${quantity} of the ${name}`
            order.push(item)
        })

        //OTHER PURCHASE INFORMATION
        let id = storage.get("purchases").value().length + 1;
        let name = purchaseOrder.user.name
        let email = purchaseOrder.user.email
        //let order = purchaseOrder.shoppingCart
        let receipt = ["Receipt Of Sale", 
                       `Shopper's Name: ${name}`,
                       `Shopper's Email: ${email}`,
                       `Time: ${createdAt}`,
                       `Your order: ${order}`,
                       `Total: $ ${total}`,
                       `Thank You for Shopping!`]


        //ACTUAL FINAL PURCHASE WRITE
        const newPurchase = {id, name, email, order, total, createdAt, receipt}

        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store;