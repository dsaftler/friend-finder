const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;
console.log(__dirname);
app.use(express.static(path.join(__dirname, './app/public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Sets up the Express app to handle data parsing

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
  console.log("Listening on Port: "+PORT);
});
