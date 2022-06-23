//EXPRESS IMPORTS
const express = require(`express`)
app.use(express.json())

app.get('/', async(req,res) => {
    res.status(200).json({"ping":"pong"})
})