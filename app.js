const express = require("express");
const nunjucks = require("nunjucks");
const app = express(); // creates an instance of an express application

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates
//Turn off Nunjuck's caching-------^
const people = [ {name: 'Nunjucks'}, {name: 'MTA'}, {name: "People who talk too much during lectures"}, {name: 'People with GIANTTT a** backpacks on the train...'}, {name: 'People who dont bathe...'} ];

app.get("/", (req, res) => {
    res.render( 'index', {title: 'HALL OF SHAME', people: people} );
});


app.use(function (req, res, next) {
    console.log(req.method, req.originalUrl);
    next();
  });


// app.get("/", (req, res) => {
//     res.send("WELCOME!!!");
// });

app.get("/news", (req, res) => {
    res.send("DAILY NEWS");
});


app.listen(3000, ()=> {
    console.log("Server listening...");
});