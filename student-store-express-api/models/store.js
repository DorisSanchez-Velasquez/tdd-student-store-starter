//IMPORT FILES
const { storage } = require(`../data/storage`)

class Store
{
    static getProductList()
    {
        let products = storage.get("products").value()
        return products
    }

    static getProduct(productId)
    {
        let product = storage.get("products").find({id: Number(productId)}).value();
        return product
    }

    static createPurchase(purchaseOrder)
    {
        const total = purchaseOrder.total + (purchaseOrder.total * 0.0875)
        const newPurchase = {...purchaseOrder, total}

        storage.get("purchases").push(newPurchase).write()
        return newPurchase
    }
}

module.exports = Store;