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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, [ncm]);

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

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    hasError: hasError || error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Pesquisar"));
};

_s(SearchBar, "taYQXnI1VrX60SPGCzmmvovoT3w=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJjdXJyZW50bHlWYWx1ZSIsImN1cnJlbnRseUVycm9yIiwiY3VycmVudGx5TkNNIiwiY3VycmVudGx5Q0VTVCIsImN1cnJlbnRseUNGT1AiLCJTZWFyY2hCYXIiLCJoYXNFcnJvciIsInBsYWNlaG9sZGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJ1c2VFZmZlY3QiLCJzdGFydFNlYXJjaCIsImNvZGUiLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiZGF0YSIsImNvbmNhdCIsIm5ld25jbSIsImNvbnNvbGUiLCJsb2ciLCJ0cENFU1QiLCJnZXRDRVNUIiwicmVzcG9uc2VjZXN0IiwibmV3cmVzcG9uc2VjZXN0IiwiZGF0YWNlc3QiLCJuZXdjZXN0IiwidHBDRk9QIiwiZ2V0Q0ZPUCIsInJlc3BvbnNlY2ZvcCIsIm5ld3Jlc3BvbnNlY2ZvcCIsImRhdGFjZm9wIiwibmV3Y2ZvcCIsImFsZXJ0IiwibWVzc2FnZSIsImNoYW5nZVZhbHVlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsMERBQUosRUFBakI7QUFPTyxJQUFJQyxjQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFHUCxJQUFNQyxTQUEw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QUE7QUFBQTtBQUFBO0FBbURRaEIsc0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQW9DLG1CQUFLLENBQUMsWUFBTUMsT0FBUCxDQUFMOztBQXBEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhCQztBQUFBO0FBQUE7O0FBeUVELFdBQVNDLFdBQVQsQ0FBcUJ6QyxLQUFyQixFQUFtQztBQUMvQkMsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDQUcsWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIOztBQUdELFNBQ0ksTUFBQyxpREFBRDtBQUFXLFlBQVEsRUFBRU4sUUFBUSxJQUFJSyxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUNJLGVBQVcsRUFBRUosV0FEakI7QUFFSSxTQUFLLEVBQUVFLEtBRlg7QUFHSSxZQUFRLEVBQUUsa0JBQUEwQyxDQUFDO0FBQUEsYUFBSUQsV0FBVyxDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBUzNDLEtBQVYsQ0FBZjtBQUFBLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBS0ksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1XLFdBQVcsQ0FBQ1gsS0FBRCxDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosQ0FESjtBQVNILENBM0ZEOztHQUFNSixTOztLQUFBQSxTO0FBNkZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NjM1NDE4ZTYxOTkwZjA3OWRhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICcuL3N0eWxlcydcclxuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NlcnZpY2VzJ1xyXG5pbXBvcnQgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9CdXR0b25CYXInO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgICBoYXNFcnJvcj86Ym9vbGVhbjtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRseVZhbHVlOiBzdHJpbmc7XHJcbmV4cG9ydCB2YXIgY3VycmVudGx5RXJyb3I6IGJvb2xlYW47XHJcbmV4cG9ydCBsZXQgY3VycmVudGx5TkNNOiBOQ01Qcm9wcztcclxuZXhwb3J0IGxldCBjdXJyZW50bHlDRVNUOiBDRVNUUHJvcHM7IFxyXG5leHBvcnQgbGV0IGN1cnJlbnRseUNGT1A6IENGT1BQcm9wcztcclxuXHJcblxyXG5jb25zdCBTZWFyY2hCYXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbiAgIGhhc0Vycm9yLFxyXG4gICBwbGFjZWhvbGRlcixcclxufSkgPT57ICAgIFxyXG4gICAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25jbSwgc2V0TkNNXSA9IHVzZVN0YXRlPE5DTVByb3BzIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbY2VzdCwgc2V0Q0VTVF0gPSB1c2VTdGF0ZTxDRVNUUHJvcHMgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIGN1cnJlbnRseUVycm9yID0gZXJyb3I7XHJcbiAgICBjdXJyZW50bHlOQ00gPSBuY207XHJcbiAgICBjdXJyZW50bHlDRVNUID0gY2VzdDtcclxuICAgIGN1cnJlbnRseUNGT1AgPSBjZm9wO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFtuY21dKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VhcmNoKGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgICAgdHJ5IHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIDEpOyBcclxuICAgICAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldENFU1QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDRk9QKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmNtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXHJcbiAgICAgICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1Ape1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCAxKVxyXG4gICAgICAgICAgICAgICAgc2V0Q0ZPUChyZXNwb25zZWNmb3ApOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VjZm9wLnRvdGFsUGFnZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNmb3AudG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNmb3AgPSByZXNwb25zZWNmb3AuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZm9wLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZm9wID0geyAuLi5yZXNwb25zZWNmb3AsIC4uLmRhdGFjZm9wIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q0ZPUChuZXdjZm9wKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKVxyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBoYXNFcnJvcj17aGFzRXJyb3IgfHwgZXJyb3J9PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0U2VhcmNoKHZhbHVlKX0+UGVzcXVpc2FyPC9CdXR0b24+ICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjsiXSwic291cmNlUm9vdCI6IiJ9