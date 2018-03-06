const express = require("express");
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl);
    next();
  });


app.get("/", (req, res) => {
    res.send("WELCOME!!!");
});

app.get("/news", (req, res) => {
    res.send("DAILY NEWS");
});




app.listen(3000, ()=> {
    console.log("Server listening...");
});