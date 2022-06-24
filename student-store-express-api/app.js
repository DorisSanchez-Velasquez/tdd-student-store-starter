//EXPRESS IMPORTS
const express = require(`express`)
const app = express();
const morgan = require(`morgan`)
const cors = require('cors')
const router = require(`./routes/store`)

//APP USES
app.use(express.json())
app.use(morgan('tiny'))
app.use("/", router)
app.use(cors())

//HEADER
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next()
})

//APP GET REQUESTS
 app.get('/', async(req,res) => {
     res.status(200).json({"ping":"pong"})
 })

module.exports = app;