"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: -69px;\n  z-index: 100;\n  background-color: #fff;\n  @media(min-width: 700px){\n    top: -36px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject());

exports.Header = Header;