webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SearchBar/index.tsx":
/*!****************************************!*\
  !*** ./components/SearchBar/index.tsx ***!
  \****************************************/
/*! exports provided: currentlyValue, currentlyError, currentlyNCM, currentlyCEST, currentlyCFOP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyValue", function() { return currentlyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyError", function() { return currentlyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyNCM", function() { return currentlyNCM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyCEST", function() { return currentlyCEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyCFOP", function() { return currentlyCFOP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/SearchBar/styles.ts");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/services */ "./services/services.ts");
/* harmony import */ var _ButtonBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBar */ "./components/ButtonBar/index.tsx");




var _this = undefined,
    _jsxFileName = "E:\\dev\\resulka-consultas-website\\components\\SearchBar\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var services = new _services_services__WEBPACK_IMPORTED_MODULE_5__["default"]();
var currentlyValue;
var currentlyError;
var currentlyNCM;
var currentlyCEST;
var currentlyCFOP;

var SearchBar = function SearchBar(_ref) {
  _s();

  var hasError = _ref.hasError,
      placeholder = _ref.placeholder;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      ncm = _useState3[0],
      setNCM = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cest = _useState4[0],
      setCEST = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cfop = _useState5[0],
      setCFOP = _useState5[1];

  currentlyError = error;
  currentlyNCM = ncm;
  currentlyCEST = cest;
  currentlyCFOP = cfop;

  function startSearch(_x) {
    return _startSearch.apply(this, arguments);
  }

  function _startSearch() {
    _startSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(code) {
      var responsencm, i, newresponsencm, datancm, newncm, responsecest, _i, newresponsecest, datacest, newcest, responsecfop, _i2, newresponsecfop, datacfop, newcfop;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(_ButtonBar__WEBPACK_IMPORTED_MODULE_6__["currentlySearch"] === _ButtonBar__WEBPACK_IMPORTED_MODULE_6__["TipeSearch"].tpNCM)) {
                _context.next = 22;
                break;
              }

              _context.next = 4;
              return services.getNCM(code, 1);

            case 4:
              responsencm = _context.sent;
              setNCM(responsencm);

              if (!(responsencm.totalPages > 1)) {
                _context.next = 18;
                break;
              }

              i = 2;

            case 8:
              if (!(i <= responsencm.totalPages)) {
                _context.next = 18;
                break;
              }

              _context.next = 11;
              return services.getNCM(code, i);

            case 11:
              newresponsencm = _context.sent;
              datancm = responsencm.data.concat(newresponsencm.data);
              newncm = _objectSpread(_objectSpread({}, responsencm), datancm);
              setNCM(responsencm);

            case 15:
              i++;
              _context.next = 8;
              break;

            case 18:
              setCEST(null);
              setCFOP(null);
              setValue('');
              console.log(ncm);

            case 22:
              if (!(_ButtonBar__WEBPACK_IMPORTED_MODULE_6__["currentlySearch"] === _ButtonBar__WEBPACK_IMPORTED_MODULE_6__["TipeSearch"].tpCEST)) {
                _context.next = 39;
                break;
              }

              _context.next = 25;
              return services.getCEST(code, 1);

            case 25:
              responsecest = _context.sent;
              setCEST(responsecest);

              if (!(responsecest.totalPages > 1)) {
                _context.next = 39;
                break;
              }

              _i = 2;

            case 29:
              if (!(_i <= responsecest.totalPages)) {
                _context.next = 39;
                break;
              }

              _context.next = 32;
              return services.getCEST(code, _i);

            case 32:
              newresponsecest = _context.sent;
              datacest = responsecest.data.concat(newresponsecest.data);
              newcest = _objectSpread(_objectSpread({}, responsecest), datacest);
              setCEST(newcest);

            case 36:
              _i++;
              _context.next = 29;
              break;

            case 39:
              if (!(_ButtonBar__WEBPACK_IMPORTED_MODULE_6__["currentlySearch"] === _ButtonBar__WEBPACK_IMPORTED_MODULE_6__["TipeSearch"].tpCFOP)) {
                _context.next = 56;
                break;
              }

              _context.next = 42;
              return services.getCFOP(code, 1);

            case 42:
              responsecfop = _context.sent;
              setCFOP(responsecfop);

              if (!(responsecfop.totalPages > 1)) {
                _context.next = 56;
                break;
              }

              _i2 = 2;

            case 46:
              if (!(_i2 <= responsecfop.totalPages)) {
                _context.next = 56;
                break;
              }

              _context.next = 49;
              return services.getCFOP(code, _i2);

            case 49:
              newresponsecfop = _context.sent;
              datacfop = responsecfop.data.concat(newresponsecfop.data);
              newcfop = _objectSpread(_objectSpread({}, responsecfop), datacfop);
              setCFOP(newcfop);

            case 53:
              _i2++;
              _context.next = 46;
              break;

            case 56:
              _context.next = 62;
              break;

            case 58:
              _context.prev = 58;
              _context.t0 = _context["catch"](0);
              setError(true);
              alert(_context.t0.message);

            case 62:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 58]]);
    }));
    return _startSearch.apply(this, arguments);
  }

  function changeValue(value) {
    setValue(value);
    setError(false);
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  });
};

_s(SearchBar, "HTA8J6Z7wJVlKJEUsOrvEMkY9Ec=");

_c = SearchBar;
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

var _c;

$RefreshReg$(_c, "SearchBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SearchBar/styles.ts":
/*!****************************************!*\
  !*** ./components/SearchBar/styles.ts ***!
  \****************************************/
/*! exports provided: Input, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-width: 85px;\n  height: 50px;\n  width: 10vw;\n  outline: none;\n  background: #e8685e;\n  border-radius: 0 5px 5px 0;\n  border: 2px solid #e8685e;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      -webkit-animation: swing 1s ease;\n      animation: swing 1s ease;\n      -webkit-animation-iteration-count: 1;\n      animation-iteration-count: 1;\n\n      Input {\n        border: 2px solid #e74c3c;\n        border-right: none;\n      }\n\n      Button {\n        border: 2px solid #e74c3c;\n        border-left: none;        \n      }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  outline: none;\n  height: 50px;\n  width: 75vw;\n  max-width: 580px;\n  min-width: 180px;\n  padding: 15px;\n  border-radius: 5px 0 0 5px;\n  color: #3a3a3a;\n  border: 2px solid #fff;\n\n  ", "\n \n\n  @keyframes swing {\n    15% {\n      -webkit-transform: translateX(5px);\n      transform: translateX(5px);\n    }\n    30% {\n      -webkit-transform: translateX(-5px);\n      transform: translateX(-5px);\n    }\n    50% {\n      -webkit-transform: translateX(3px);\n      transform: translateX(3px);\n    }\n    65% {\n      -webkit-transform: translateX(-3px);\n      transform: translateX(-3px);\n    }\n    80% {\n      -webkit-transform: translateX(2px);\n      transform: translateX(2px);\n    }\n    100% {\n      -webkit-transform: translateX(0);\n      transform: translateX(0);\n    }\n  }\n\n  min-width: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject(), function (props) {
  return props.hasError && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2());
});
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMudHMiXSwibmFtZXMiOlsic2VydmljZXMiLCJTZXJ2aWNlcyIsImN1cnJlbnRseVZhbHVlIiwiY3VycmVudGx5RXJyb3IiLCJjdXJyZW50bHlOQ00iLCJjdXJyZW50bHlDRVNUIiwiY3VycmVudGx5Q0ZPUCIsIlNlYXJjaEJhciIsImhhc0Vycm9yIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsInN0YXJ0U2VhcmNoIiwiY29kZSIsImN1cnJlbnRseVNlYXJjaCIsIlRpcGVTZWFyY2giLCJ0cE5DTSIsImdldE5DTSIsInJlc3BvbnNlbmNtIiwidG90YWxQYWdlcyIsImkiLCJuZXdyZXNwb25zZW5jbSIsImRhdGFuY20iLCJkYXRhIiwiY29uY2F0IiwibmV3bmNtIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiYWxlcnQiLCJtZXNzYWdlIiwiY2hhbmdlVmFsdWUiLCJlIiwidGFyZ2V0IiwiSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsInByb3BzIiwiY3NzIiwiQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxJQUFJQywwREFBSixFQUFqQjtB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Qy9EO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBbURRZixzQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBbUMsbUJBQUssQ0FBQyxZQUFNQyxPQUFQLENBQUw7O0FBcERSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWkM7QUFBQTtBQUFBOztBQXFFRCxXQUFTQyxXQUFULENBQXFCeEMsS0FBckIsRUFBbUM7QUFDL0JDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0FHLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDs7QUFHRCxTQUVRLE1BQUMsNkNBQUQ7QUFDSSxlQUFXLEVBQUVMLFdBRGpCO0FBRUksU0FBSyxFQUFFRSxLQUZYO0FBR0ksWUFBUSxFQUFFLGtCQUFBeUMsQ0FBQztBQUFBLGFBQUlELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVMxQyxLQUFWLENBQWY7QUFBQSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUjtBQVFILENBdEZEOztHQUFNSixTOztLQUFBQSxTO0FBd0ZTQSx3RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFPTyxJQUFNK0MsS0FBSyxHQUFHQyx1REFBTSxDQUFDQyxLQUFWLG9CQVdkLFVBQUFDLEtBQUs7QUFBQSxTQUNMQSxLQUFLLENBQUNqRCxRQUFOLElBQ0FrRCx5REFEQSxvQkFESztBQUFBLENBWFMsQ0FBWDtBQW1FQSxJQUFNQyxNQUFNLEdBQUdKLHVEQUFNLENBQUNLLE1BQVYsb0JBQVoiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdmMWNmZmVmZGQyOGM0ZWNkOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIElucHV0IH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXJ2aWNlcydcclxuaW1wb3J0IHsgY3VycmVudGx5U2VhcmNoLCBUaXBlU2VhcmNoIH0gZnJvbSAnLi4vQnV0dG9uQmFyJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gbmV3IFNlcnZpY2VzO1xyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgaGFzRXJyb3I/OmJvb2xlYW47XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50bHlWYWx1ZTogc3RyaW5nO1xyXG5leHBvcnQgdmFyIGN1cnJlbnRseUVycm9yOiBib29sZWFuO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseU5DTTogTkNNUHJvcHM7XHJcbmV4cG9ydCBsZXQgY3VycmVudGx5Q0VTVDogQ0VTVFByb3BzOyBcclxuZXhwb3J0IGxldCBjdXJyZW50bHlDRk9QOiBDRk9QUHJvcHM7XHJcblxyXG5cclxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gICBoYXNFcnJvcixcclxuICAgcGxhY2Vob2xkZXIsXHJcbn0pID0+eyAgICBcclxuICAgIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuY20sIHNldE5DTV0gPSB1c2VTdGF0ZTxOQ01Qcm9wcyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbY2ZvcCwgc2V0Q0ZPUF0gPSB1c2VTdGF0ZTxDRk9QUHJvcHMgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjdXJyZW50bHlFcnJvciA9IGVycm9yO1xyXG4gICAgY3VycmVudGx5TkNNID0gbmNtO1xyXG4gICAgY3VycmVudGx5Q0VTVCA9IGNlc3Q7XHJcbiAgICBjdXJyZW50bHlDRk9QID0gY2ZvcDtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHRyeSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXHJcbiAgICAgICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZW5jbS50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VuY20udG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFuY20gPSByZXNwb25zZW5jbS5kYXRhLmNvbmNhdChuZXdyZXNwb25zZW5jbS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3bmNtID0geyAuLi5yZXNwb25zZW5jbSwgLi4uZGF0YW5jbSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5jbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxyXG4gICAgICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcclxuICAgICAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSlcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaGFzRXJyb3I/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0PFByb3BzPmBcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNzV2dztcclxuICBtYXgtd2lkdGg6IDU4MHB4O1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBjb2xvcjogIzNhM2EzYTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG5cclxuICAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5oYXNFcnJvciAmJlxyXG4gICAgY3NzYFxyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3dpbmcgMXMgZWFzZTtcclxuICAgICAgYW5pbWF0aW9uOiBzd2luZyAxcyBlYXNlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcblxyXG4gICAgICBJbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2U3NGMzYztcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTsgICAgICAgIFxyXG4gICAgICB9XHJcbiAgYH1cclxuIFxyXG5cclxuICBAa2V5ZnJhbWVzIHN3aW5nIHtcclxuICAgIDE1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gICAgfVxyXG4gICAgNjUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaW4td2lkdGg6IDMwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIG1pbi13aWR0aDogODVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZTg2ODVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlODY4NWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=