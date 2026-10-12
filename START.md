new project
1- create new folder
2- CMD: npm init -y
3- CMD: npm i express
4- create new js file: app.js
5- write the starter code:
const express = require("express");
const app = express();
app.listen(4000, () => {
    console.log("Server is running")
})
6- write apis:
app.put("/", (req, res) => {
    res.status(200).json({})
})
