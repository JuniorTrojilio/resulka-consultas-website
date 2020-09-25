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

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    hasError: hasError || error,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, "Pesquisar"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJjdXJyZW50bHlWYWx1ZSIsImN1cnJlbnRseUVycm9yIiwiY3VycmVudGx5TkNNIiwiY3VycmVudGx5Q0VTVCIsImN1cnJlbnRseUNGT1AiLCJTZWFyY2hCYXIiLCJoYXNFcnJvciIsInBsYWNlaG9sZGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJzdGFydFNlYXJjaCIsImNvZGUiLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiZGF0YSIsImNvbmNhdCIsIm5ld25jbSIsImNvbnNvbGUiLCJsb2ciLCJ0cENFU1QiLCJnZXRDRVNUIiwicmVzcG9uc2VjZXN0IiwibmV3cmVzcG9uc2VjZXN0IiwiZGF0YWNlc3QiLCJuZXdjZXN0IiwidHBDRk9QIiwiZ2V0Q0ZPUCIsInJlc3BvbnNlY2ZvcCIsIm5ld3Jlc3BvbnNlY2ZvcCIsImRhdGFjZm9wIiwibmV3Y2ZvcCIsImFsZXJ0IiwibWVzc2FnZSIsImNoYW5nZVZhbHVlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsMERBQUosRUFBakI7QUFPTyxJQUFJQyxjQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLFlBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFHUCxJQUFNQyxTQUEwQixHQUFHLFNBQTdC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OztBQXBEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpDO0FBQUE7QUFBQTs7QUFxRUQsV0FBU0MsV0FBVCxDQUFxQnhDLEtBQXJCLEVBQW1DO0FBQy9CQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBRyxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0g7O0FBR0QsU0FDSSxNQUFDLGlEQUFEO0FBQVcsWUFBUSxFQUFFTixRQUFRLElBQUlLLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQ0ksZUFBVyxFQUFFSixXQURqQjtBQUVJLFNBQUssRUFBRUUsS0FGWDtBQUdJLFlBQVEsRUFBRSxrQkFBQXlDLENBQUM7QUFBQSxhQUFJRCxXQUFXLENBQUNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTMUMsS0FBVixDQUFmO0FBQUEsS0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFLSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVUsV0FBVyxDQUFDVixLQUFELENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixDQURKO0FBU0gsQ0F2RkQ7O0dBQU1KLFM7O0tBQUFBLFM7QUF5RlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ZTg0ZDNhMmY2ODZjYTZiZjkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBJbnB1dCB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgU2VydmljZXMsIHsgQ0VTVFByb3BzLCBDRk9QUHJvcHMsIE5DTVByb3BzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VydmljZXMnXHJcbmltcG9ydCB7IGN1cnJlbnRseVNlYXJjaCwgVGlwZVNlYXJjaCB9IGZyb20gJy4uL0J1dHRvbkJhcic7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcztcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGhhc0Vycm9yPzpib29sZWFuO1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5VmFsdWU6IHN0cmluZztcclxuZXhwb3J0IHZhciBjdXJyZW50bHlFcnJvcjogYm9vbGVhbjtcclxuZXhwb3J0IGxldCBjdXJyZW50bHlOQ006IE5DTVByb3BzO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseUNFU1Q6IENFU1RQcm9wczsgXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5Q0ZPUDogQ0ZPUFByb3BzO1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICAgaGFzRXJyb3IsXHJcbiAgIHBsYWNlaG9sZGVyLFxyXG59KSA9PnsgICAgXHJcbiAgICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtjZXN0LCBzZXRDRVNUXSA9IHVzZVN0YXRlPENFU1RQcm9wcyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2Nmb3AsIHNldENGT1BdID0gdXNlU3RhdGU8Q0ZPUFByb3BzIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgY3VycmVudGx5RXJyb3IgPSBlcnJvcjtcclxuICAgIGN1cnJlbnRseU5DTSA9IG5jbTtcclxuICAgIGN1cnJlbnRseUNFU1QgPSBjZXN0O1xyXG4gICAgY3VycmVudGx5Q0ZPUCA9IGNmb3A7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3RhcnRTZWFyY2goY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgICB0cnkgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00pe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgMSk7IFxyXG4gICAgICAgICAgICAgICAgc2V0TkNNKHJlc3BvbnNlbmNtKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VuY20udG90YWxQYWdlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlbmNtLnRvdGFsUGFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhbmNtID0gcmVzcG9uc2VuY20uZGF0YS5jb25jYXQobmV3cmVzcG9uc2VuY20uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld25jbSA9IHsgLi4ucmVzcG9uc2VuY20sIC4uLmRhdGFuY20gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TkNNKHJlc3BvbnNlbmNtKTsgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q0VTVChudWxsKTtcclxuICAgICAgICAgICAgICAgIHNldENGT1AobnVsbCk7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuY20pXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRVNUKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgMSlcclxuICAgICAgICAgICAgICAgIHNldENFU1QocmVzcG9uc2VjZXN0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2VjZXN0LnRvdGFsUGFnZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNlc3QudG90YWxQYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNlc3QgPSByZXNwb25zZWNlc3QuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZXN0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZXN0ID0geyAuLi5yZXNwb25zZWNlc3QsIC4uLmRhdGFjZXN0IH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q0VTVChuZXdjZXN0KTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIDEpXHJcbiAgICAgICAgICAgICAgICBzZXRDRk9QKHJlc3BvbnNlY2ZvcCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZWNmb3AudG90YWxQYWdlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2ZvcCA9IHJlc3BvbnNlY2ZvcC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNmb3AuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nmb3AgPSB7IC4uLnJlc3BvbnNlY2ZvcCwgLi4uZGF0YWNmb3AgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDRk9QKG5ld2Nmb3ApOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGhhc0Vycm9yPXtoYXNFcnJvciB8fCBlcnJvcn0+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3RhcnRTZWFyY2godmFsdWUpfT5QZXNxdWlzYXI8L0J1dHRvbj4gICAgICAgICAgICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=