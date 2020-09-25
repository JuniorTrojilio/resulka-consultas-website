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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    startSearch(currentlyValue);
  }, [ncm]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJjdXJyZW50bHlWYWx1ZSIsImN1cnJlbnRseUVycm9yIiwiY3VycmVudGx5TkNNIiwiY3VycmVudGx5Q0VTVCIsImN1cnJlbnRseUNGT1AiLCJTZWFyY2hCYXIiLCJoYXNFcnJvciIsInBsYWNlaG9sZGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJ1c2VFZmZlY3QiLCJzdGFydFNlYXJjaCIsImNvZGUiLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiZGF0YSIsImNvbmNhdCIsIm5ld25jbSIsImNvbnNvbGUiLCJsb2ciLCJ0cENFU1QiLCJnZXRDRVNUIiwicmVzcG9uc2VjZXN0IiwibmV3cmVzcG9uc2VjZXN0IiwiZGF0YWNlc3QiLCJuZXdjZXN0IiwidHBDRk9QIiwiZ2V0Q0ZPUCIsInJlc3BvbnNlY2ZvcCIsIm5ld3Jlc3BvbnNlY2ZvcCIsImRhdGFjZm9wIiwibmV3Y2ZvcCIsImFsZXJ0IiwibWVzc2FnZSIsImNoYW5nZVZhbHVlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsMERBQUosRUFBakI7QUFPTyxJQUFJQyxjQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFHUCxJQUFNQyxTQUEw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QUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW1EUWhCLHNCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FvQyxtQkFBSyxDQUFDLFlBQU1DLE9BQVAsQ0FBTDs7QUFwRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FoQkM7QUFBQTtBQUFBOztBQXlFRCxXQUFTQyxXQUFULENBQXFCekMsS0FBckIsRUFBbUM7QUFDL0JDLFlBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0FHLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDs7QUFHRCxTQUNJLE1BQUMsaURBQUQ7QUFBVyxZQUFRLEVBQUVOLFFBQVEsSUFBSUssS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFDSSxlQUFXLEVBQUVKLFdBRGpCO0FBRUksU0FBSyxFQUFFRSxLQUZYO0FBR0ksWUFBUSxFQUFFLGtCQUFBMEMsQ0FBQztBQUFBLGFBQUlELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVMzQyxLQUFWLENBQWY7QUFBQSxLQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUtJLE1BQUMsOENBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVyxXQUFXLENBQUNYLEtBQUQsQ0FBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLENBREo7QUFTSCxDQTNGRDs7R0FBTUosUzs7S0FBQUEsUztBQTZGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTQzM2Y1MWJiMDQ1YmY2NDhkOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24sIElucHV0IH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zZXJ2aWNlcydcclxuaW1wb3J0IHsgY3VycmVudGx5U2VhcmNoLCBUaXBlU2VhcmNoIH0gZnJvbSAnLi4vQnV0dG9uQmFyJztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gbmV3IFNlcnZpY2VzO1xyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgaGFzRXJyb3I/OmJvb2xlYW47XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50bHlWYWx1ZTogc3RyaW5nO1xyXG5leHBvcnQgdmFyIGN1cnJlbnRseUVycm9yOiBib29sZWFuO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseU5DTTogTkNNUHJvcHM7XHJcbmV4cG9ydCBsZXQgY3VycmVudGx5Q0VTVDogQ0VTVFByb3BzOyBcclxuZXhwb3J0IGxldCBjdXJyZW50bHlDRk9QOiBDRk9QUHJvcHM7XHJcblxyXG5cclxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gICBoYXNFcnJvcixcclxuICAgcGxhY2Vob2xkZXIsXHJcbn0pID0+eyAgICBcclxuICAgIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuY20sIHNldE5DTV0gPSB1c2VTdGF0ZTxOQ01Qcm9wcyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbY2ZvcCwgc2V0Q0ZPUF0gPSB1c2VTdGF0ZTxDRk9QUHJvcHMgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICBjdXJyZW50bHlFcnJvciA9IGVycm9yO1xyXG4gICAgY3VycmVudGx5TkNNID0gbmNtO1xyXG4gICAgY3VycmVudGx5Q0VTVCA9IGNlc3Q7XHJcbiAgICBjdXJyZW50bHlDRk9QID0gY2ZvcDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHN0YXJ0U2VhcmNoKGN1cnJlbnRseVZhbHVlKVxyXG4gICAgfSxbbmNtXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHRyeSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXHJcbiAgICAgICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZW5jbS50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VuY20udG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFuY20gPSByZXNwb25zZW5jbS5kYXRhLmNvbmNhdChuZXdyZXNwb25zZW5jbS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3bmNtID0geyAuLi5yZXNwb25zZW5jbSwgLi4uZGF0YW5jbSB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5jbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxyXG4gICAgICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcclxuICAgICAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSlcclxuICAgICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgaGFzRXJyb3I9e2hhc0Vycm9yIHx8IGVycm9yfT4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzdGFydFNlYXJjaCh2YWx1ZSl9PlBlc3F1aXNhcjwvQnV0dG9uPiAgICAgICAgICAgICBcclxuICAgICAgICA8L0NvbnRhaW5lcj4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==