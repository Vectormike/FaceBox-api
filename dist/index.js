"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("../src/routes/index"));

var _knex = _interopRequireDefault(require("knex"));

require("debug");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = (0, _knex["default"])({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'facebox',
    password: '0000',
    database: 'facebox'
  }
});
db.select('*').from('users').then(function (data) {
  console.log(data);
});
var app = (0, _express["default"])(); // parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // parse application/json

app.use(_bodyParser["default"].json());
app.use('/', _index["default"]);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT, "..."));
});