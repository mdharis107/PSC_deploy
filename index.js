const express = require("express");
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("The HomePage of the Application")
})




app.listen(PORT, async () => {
    console.log(`The port is listening on ${PORT}`)
})