//EXPRESS IMPORTS
const express = require(`express`)
const app = express();
const morgan = require(`morgan`)
const cors = require(`cors`)
const router = require(`./routes/store`)
const {NotFoundError} = require("./utils/errors")

//APP USES
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use("/", router)


//APP GET REQUESTS
 app.get('/', async(req,res) => {
     res.status(200).json({"ping":"pong"})
 })

//404 ERROR HANDLER
app.use((req,res,next) => {
    return next(new NotFoundError())
})

//GENERIC ERROR HANDLER
app.use((error,req,res,next) => {
    const status = error.status || 500
    const message = error.message || "Something went wrong in the application"

    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app;