// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parse incoming JSON data
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// Link to api routes
require("./routes/apiRoutes")(app);
// Link to html routes
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, () => {
  console.log(`Active server now on port ${PORT}!`);
});
