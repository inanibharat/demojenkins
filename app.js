var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 2023 ???!");
});

app.listen(4000);
