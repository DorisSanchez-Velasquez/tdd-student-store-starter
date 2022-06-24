const express = require(`express`)
const router = express.Router()
const Store = require(`../models/store`)

router.use(express.json())

router.get('/store', async(req,res,next) => {
    let products = await Store.getProductList()
    res.status(200).json({"products" : products})
})

router.get('/store/:productId', async(req,res,next) => {
    let productId = req.params.productId
    let product = await Store.getProduct(productId)
    res.status(200).json({"product" : product})
})

router.post('/store', async(req,res,next) => {
    let purchaseOrder = req.body
    let purchase = await Store.createPurchase(purchaseOrder)

    res.status(201).json({"purchase" : purchase})
    console.log("whoop whoop")
})

module.exports = router;