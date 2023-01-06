var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Guys ! Hope you are doing well ||");
});

app.listen(4000);
