"use strict";

var _react = _interopRequireDefault(require("react"));

var _express = _interopRequireDefault(require("express"));

var _server = require("react-dom/server");

var _Title = _interopRequireDefault(require("../public/components/ui/common/title1/Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log(_Title["default"]);
global.React = _react["default"];

var logger = function logger(req, res, next) {
  console.log("".concat(req.method, " request for ").concat(req.url));
  next();
};

var app = (0, _express["default"])().use(logger);
app.get('*', function (req, res) {
  var body = (0, _server.renderToString)(_react["default"].createElement(_Title["default"], {
    content: 'hello'
  }));
  res.status(200).send("\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <title>Document</title>\n    </head>\n    <body>\n      <div id=\"root\">".concat(body, "</div>\n    </body>\n    </html>\n  "));
});
app.listen(3000, function () {
  return console.log("Server was running at 'http://localhost:3000'");
});