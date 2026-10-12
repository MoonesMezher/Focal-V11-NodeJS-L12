const express = require("express");
const app = express();

// GET - /hello - 200 { message: "Hello World" }
app.get("/hello", (req, res) => {
    res.status(200).json({ message: "Hello World" })
});
// FORM:
// app.[method]("[url]"", (req, res) => {})

app.listen(4000, () => {
    console.log("Server is running");
}); // register port

// CRUD?