var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 30000
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Sets up the Express app to handle data parsing

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, function () {
  console.log("Listening on Port: "+PORT);
})


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});
