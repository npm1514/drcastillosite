"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _ConsultationForm = require("../styled-components/components/ConsultationForm");

var _treatmentsList = _interopRequireDefault(require("../data/treatmentsList"));

var _global = require("../styled-components/global");

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

var ConsultationFormComponent = /*#__PURE__*/function (_Component) {
  _inherits(ConsultationFormComponent, _Component);

  var _super = _createSuper(ConsultationFormComponent);

  function ConsultationFormComponent(props) {
    var _this;

    _classCallCheck(this, ConsultationFormComponent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "submitForm", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          email = _this$state.email,
          phone = _this$state.phone,
          selectedTreatments = _this$state.selectedTreatments;
      var data = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        procedures: selectedTreatments.join(', '),
        option: 1
      };
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        alert("An email has been submitted to Dr. Castillo's office. Someone will be in contact with you regarding your inquiry.");

        _this.setState({
          selectedTreatments: [],
          firstName: "",
          lastName: "",
          phone: "",
          email: ""
        });
      })["catch"](function (err) {
        alert("Something went wrong. Please contact Dr. Castillo's office directly. We are sorry for the inconvenience.");

        _this.setState({
          selectedTreatments: [],
          firstName: "",
          lastName: "",
          phone: "",
          email: ""
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeState", function (e, prop) {
      var obj = {};
      obj[prop] = e.target.value;

      _this.setState(obj);
    });

    _defineProperty(_assertThisInitialized(_this), "changeTreatment", function (e) {
      e.preventDefault();

      if (e.target.value) {
        var vals = _this.state.selectedTreatments;
        var removeIndex = vals.findIndex(function (a) {
          return a == e.target.value;
        });

        if (removeIndex == -1) {
          vals.push(e.target.value);
        } else {
          vals.splice(removeIndex, 1);
        }

        _this.setState({
          selectedTreatments: vals
        });
      }
    });

    _this.state = {
      selectedTreatments: [],
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    };
    return _this;
  }

  _createClass(ConsultationFormComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          firstName = _this$state2.firstName,
          lastName = _this$state2.lastName,
          email = _this$state2.email,
          phone = _this$state2.phone,
          selectedTreatments = _this$state2.selectedTreatments;
      return /*#__PURE__*/_react["default"].createElement(_ConsultationForm.FormWrap, null, /*#__PURE__*/_react["default"].createElement(_global.Description, null, /*#__PURE__*/_react["default"].createElement(_global.HashMark, {
        id: "appointment"
      })), /*#__PURE__*/_react["default"].createElement(_ConsultationForm.ConsultationForm, {
        onSubmit: this.submitForm,
        id: "appointment"
      }, /*#__PURE__*/_react["default"].createElement(_.ConsultationCard, {
        title: "REQUEST A CONSULTATION"
      }, /*#__PURE__*/_react["default"].createElement(_ConsultationForm.ConsultationInput, {
        placeholder: "First Name",
        onChange: function onChange(e) {
          _this2.changeState(e, "firstName");
        },
        value: firstName,
        type: "text",
        required: true
      }), /*#__PURE__*/_react["default"].createElement(_ConsultationForm.ConsultationInput, {
        placeholder: "Last Name",
        onChange: function onChange(e) {
          _this2.changeState(e, "lastName");
        },
        value: lastName,
        type: "text",
        required: true
      })), /*#__PURE__*/_react["default"].createElement(_.ConsultationCard, {
        title: "OTHER INFORMATION"
      }, /*#__PURE__*/_react["default"].createElement(_ConsultationForm.ConsultationInput, {
        placeholder: "Phone",
        onChange: function onChange(e) {
          _this2.changeState(e, "phone");
        },
        value: phone,
        type: "tel",
        required: true
      }), /*#__PURE__*/_react["default"].createElement(_ConsultationForm.ConsultationInput, {
        placeholder: "Email",
        onChange: function onChange(e) {
          _this2.changeState(e, "email");
        },
        value: email,
        type: "email",
        required: true
      })), /*#__PURE__*/_react["default"].createElement(_.ConsultationCard, {
        title: "TREATMENTS"
      }, /*#__PURE__*/_react["default"].createElement(_ConsultationForm.PillBox, null, selectedTreatments && selectedTreatments.length ? selectedTreatments.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement(_ConsultationForm.Pill, {
          key: i
        }, a);
      }) : null), /*#__PURE__*/_react["default"].createElement(_.Dropdown, {
        placeholder: "Treatment(s) - Select All That Apply",
        options: _treatmentsList["default"],
        value: selectedTreatments,
        onClick: this.changeTreatment,
        required: true,
        multiple: true
      }), /*#__PURE__*/_react["default"].createElement(_global.Button, {
        color1: "#5ad4f1",
        color2: "#fff",
        color3: "#fff",
        type: "submit",
        style: {
          fontSize: '12px',
          fontWeight: 'normal',
          borderWidth: '1px'
        }
      }, "REQUEST NOW"))));
    }
  }]);

  return ConsultationFormComponent;
}(_react.Component);

var _default = ConsultationFormComponent;
exports["default"] = _default;