"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var deb = (0, _debug["default"])('app:app.register');
var database = (0, _knex["default"])({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'facebox',
    password: '0000',
    database: 'facebox'
  }
});

var userController =
/*#__PURE__*/
function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: "register",
    value: function register(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          email = _req$body.email,
          password = _req$body.password; // Check if user exists with email else create account

      database('users').where({
        email: email
      }).then(function (user) {
        if (user) {
          res.status(409).json({
            message: 'User exists',
            code: 409
          });
        } else {
          database('users').insert({
            name: name,
            email: email,
            joined: new Date()
          }).then(function (user) {
            res.status(201).json({
              message: 'User Created',
              user: {
                name: user.name,
                email: user.email
              }
            });
          });
        }
      });
    }
  }]);

  return userController;
}();

var _default = userController;
exports["default"] = _default;