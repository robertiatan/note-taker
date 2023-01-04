// Dependencies
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();
const database = require("./db/db");

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// Link to api routes
app.use("/api", require("./routes/apiRoutes"));
// Link to html routes
app.use("/", require("./routes/htmlRoutes"));

// Listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
