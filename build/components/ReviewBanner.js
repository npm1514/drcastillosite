"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _ReviewBanner = require("../styled-components/components/ReviewBanner");

var _global = require("../styled-components/global");

var _reviewList = _interopRequireDefault(require("../data/reviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReviewBannerComponent = /*#__PURE__*/function (_Component) {
  _inherits(ReviewBannerComponent, _Component);

  var _super = _createSuper(ReviewBannerComponent);

  function ReviewBannerComponent(props) {
    var _this;

    _classCallCheck(this, ReviewBannerComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "clickReview", function (i) {
      _this.setState({
        selectedReview: i
      });
    });

    _this.state = {
      selectedReview: 2
    };
    return _this;
  }

  _createClass(ReviewBannerComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedReview = this.state.selectedReview;
      return /*#__PURE__*/_react["default"].createElement(_global.Parallax, {
        img: "/images/testimonial.jpg"
      }, /*#__PURE__*/_react["default"].createElement(_ReviewBanner.ReviewBanner, null, /*#__PURE__*/_react["default"].createElement(_global.Slider, {
        count: _reviewList["default"].length,
        index: selectedReview
      }, _reviewList["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_.ReviewCard, {
          message: a.message,
          author: a.author,
          count: _reviewList["default"].length,
          key: i,
          num: i
        });
      }))), /*#__PURE__*/_react["default"].createElement(_ReviewBanner.Stars, null, _reviewList["default"].map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_ReviewBanner.StarImg, {
          key: i,
          selected: i == selectedReview,
          src: "/images/reviews.png",
          onClick: function onClick() {
            _this2.clickReview(i);
          }
        });
      })), /*#__PURE__*/_react["default"].createElement(_global.H2, {
        style: {
          color: "#000"
        }
      }, _reviewList["default"][selectedReview].author));
    }
  }]);

  return ReviewBannerComponent;
}(_react.Component);

var _default = ReviewBannerComponent;
exports["default"] = _default;