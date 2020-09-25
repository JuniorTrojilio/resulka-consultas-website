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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/SearchBar/styles.ts");
var _this = undefined,
    _jsxFileName = "E:\\dev\\resulka-consultas-website\\components\\SearchBar\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var services = new Services();
var currentlyValue;
var currentlyError;
var currentlyNCM;
var currentlyCEST;
var currentlyCFOP;

var SearchBar = function SearchBar(_ref) {
  _s();

  var hasError = _ref.hasError,
      placeholder = _ref.placeholder;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  function changeValue(value) {
    setValue(value);
    setError(false);
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  });
};

_s(SearchBar, "da2RrCTg/RP32ClXISQtP4jnmYY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJjdXJyZW50bHlWYWx1ZSIsImN1cnJlbnRseUVycm9yIiwiY3VycmVudGx5TkNNIiwiY3VycmVudGx5Q0VTVCIsImN1cnJlbnRseUNGT1AiLCJTZWFyY2hCYXIiLCJoYXNFcnJvciIsInBsYWNlaG9sZGVyIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZXJyb3IiLCJzZXRFcnJvciIsImNoYW5nZVZhbHVlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBT08sSUFBSUMsY0FBSjtBQUNBLElBQUlDLGNBQUo7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBSjtBQUNBLElBQUlDLGFBQUo7O0FBR1AsSUFBTUMsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0FHOUI7QUFBQTs7QUFBQSxNQUZGQyxRQUVFLFFBRkZBLFFBRUU7QUFBQSxNQURGQyxXQUNFLFFBREZBLFdBQ0U7O0FBQUEsa0JBQzJCQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkM7QUFBQSxNQUNPQyxLQURQO0FBQUEsTUFDY0MsUUFEZDs7QUFBQSxtQkFFeUJGLHNEQUFRLENBQUMsS0FBRCxDQUZqQztBQUFBLE1BRU1HLEtBRk47QUFBQSxNQUVhQyxRQUZiOztBQUlELFdBQVNDLFdBQVQsQ0FBcUJKLEtBQXJCLEVBQW1DO0FBQy9CQyxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBRyxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0g7O0FBR0QsU0FDUSxNQUFDLDZDQUFEO0FBQ0ksZUFBVyxFQUFFTCxXQURqQjtBQUVJLFNBQUssRUFBRUUsS0FGWDtBQUdJLFlBQVEsRUFBRSxrQkFBQUssQ0FBQztBQUFBLGFBQUlELFdBQVcsQ0FBQ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNOLEtBQVYsQ0FBZjtBQUFBLEtBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURSO0FBTUgsQ0FuQkQ7O0dBQU1KLFM7O0tBQUFBLFM7QUFxQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmMjg2NjU3NTlkMzU2YWViNjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9zdHlsZXMnXHJcbmltcG9ydCB7IGN1cnJlbnRseVNlYXJjaCwgVGlwZVNlYXJjaCB9IGZyb20gJy4uL0J1dHRvbkJhcic7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcztcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGhhc0Vycm9yPzpib29sZWFuO1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5VmFsdWU6IHN0cmluZztcclxuZXhwb3J0IHZhciBjdXJyZW50bHlFcnJvcjogYm9vbGVhbjtcclxuZXhwb3J0IGxldCBjdXJyZW50bHlOQ006IE5DTVByb3BzO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseUNFU1Q6IENFU1RQcm9wczsgXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5Q0ZPUDogQ0ZPUFByb3BzO1xyXG5cclxuXHJcbmNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxuICAgaGFzRXJyb3IsXHJcbiAgIHBsYWNlaG9sZGVyLFxyXG59KSA9PntcclxuICAgIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUpXHJcbiAgICAgICAgc2V0RXJyb3IoZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiggICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPiAgICAgICAgICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=