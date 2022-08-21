const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./routes/auth")
const outletRouter = require("./routes/outlet")
const userRouter = require("./routes/user")
const bodyParser = require("body-parser");

const app = express()

// middleware to get body of request
app.use(bodyParser.json())

// router
app.use("/api", authRouter)
app.use("/api", outletRouter)
app.use("/api", userRouter)

//connect to DB
mongoose.connect("mongodb://localhost:27017/posbackend")
.then(() => {
    console.log("DB Connected")
})

app.listen(8007, () => {
    console.log("App is running on port 8007")
})