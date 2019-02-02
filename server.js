const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//Parse application /x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// -------------------------- Routes -----------------------------

//Sets static assets path
// app.use(express.static(path.join(__dirname, '/build')));

//Sets route to index
app.get("/", (req, res) => {
  res.sendFile(__dirname, '/index.html')
})

//Setting up routes in app
app.use(routes);

// -------------------------- Listen -----------------------------

// Start the API server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
