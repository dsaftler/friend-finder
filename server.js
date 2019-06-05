var express = require('express');
var app = express();

var PORT = process.env.PORT || 30000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Sets up the Express app to handle data parsing

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
  console.log("Listening on Port: "+PORT);
});
