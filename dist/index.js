"use strict";

var express = require('express');

var index = require('../src/routes/index');

var app = express();
app.use('/', index);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT, "..."));
});