const express = require("express");
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("The HomePage of the Application")
})


app.get("/check", (req, res) => {
    res.send("This is a page checking the value")
})




app.listen(PORT, async () => {
    console.log(`The port is listening on ${PORT}`)
})