const express = require('express')
const app = express();
const Pizza = require("./models/pizzaModel")
const User = require("./models/userModel")
const Order = require("./models/orderModel")

const db = require('./db')
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const orderRoute = require('./routes/orderRoute')
app.use("/api/pizzas/", pizzasRoute)
app.use("/api/users/", userRoute)
app.use("/api/orders/", orderRoute)
app.get("/",(req,res)=>{
    res.send("Server is working on port  ")
});

const port =process.env.PORT || 5000;
app.listen(port,()=>'server is listerning on port 5000')