const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const bodyParser = require("body-parser");

const app = express()

// middleware to get body of request
app.use(bodyParser.json())

// router
app.use("/api", authRouter)

//connect to DB
mongoose.connect("mongodb://localhost:27017/posbackend")
.then(() => {
    console.log("DB Connected")
})

app.listen(8001, () => {
    console.log("App is running on port 8001")
})