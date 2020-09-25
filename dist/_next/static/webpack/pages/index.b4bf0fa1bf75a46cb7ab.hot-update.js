webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ButtonBar/index.tsx":
/*!****************************************!*\
  !*** ./components/ButtonBar/index.tsx ***!
  \****************************************/
/*! exports provided: TipeSearch, currentlySearch, currentlyText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipeSearch", function() { return TipeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlySearch", function() { return currentlySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyText", function() { return currentlyText; });
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/ButtonBar/styles.ts");


var _this = undefined,
    _jsxFileName = "E:\\dev\\resulka-consultas-website\\components\\ButtonBar\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var TipeSearch;

(function (TipeSearch) {
  TipeSearch[TipeSearch["tpNCM"] = 1] = "tpNCM";
  TipeSearch[TipeSearch["tpCFOP"] = 2] = "tpCFOP";
  TipeSearch[TipeSearch["tpCEST"] = 3] = "tpCEST";
})(TipeSearch || (TipeSearch = {}));

var currentlySearch;
var currentlyText;

var ButtonBar = function ButtonBar(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(TipeSearch.tpNCM),
      tpSearch = _useState[0],
      setTpSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      text = _useState2[0],
      setText = _useState2[1];

  currentlySearch = tpSearch;

  if (tpSearch == TipeSearch.tpNCM) {
    currentlyText = 'Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.';
  } else if (tpSearch == TipeSearch.tpCFOP) {
    currentlyText = 'Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.';
  } else {
    currentlyText = 'Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.';
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    buttonActive: tpSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpNCM);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCFOP);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCEST);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "CEST"));
};

_s(ButtonBar, "e+wRfXaRGQkSYCfdWq6QO2CVVjM=");

_c = ButtonBar;
/* harmony default export */ __webpack_exports__["default"] = (ButtonBar);

var _c;

$RefreshReg$(_c, "ButtonBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25CYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRpcGVTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJjdXJyZW50bHlUZXh0IiwiQnV0dG9uQmFyIiwidXNlU3RhdGUiLCJ0cE5DTSIsInRwU2VhcmNoIiwic2V0VHBTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsInRwQ0ZPUCIsInRwQ0VTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxJQUFLQSxVQUFaOztXQUFZQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7QUFBQUEsWSxDQUFBQSxVO0dBQUFBLFUsS0FBQUEsVTs7QUFVTCxJQUFJQyxlQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFUCxJQUFNQyxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUM5QjtBQUFBOztBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBYUosVUFBVSxDQUFDSyxLQUF4QixDQUR2QztBQUFBLE1BQ01DLFFBRE47QUFBQSxNQUNnQkMsV0FEaEI7O0FBQUEsbUJBRXVCSCxzREFBUSxDQUFDLEVBQUQsQ0FGL0I7QUFBQSxNQUVNSSxJQUZOO0FBQUEsTUFFWUMsT0FGWjs7QUFHRFIsaUJBQWUsR0FBR0ssUUFBbEI7O0FBRUEsTUFBR0EsUUFBUSxJQUFJTixVQUFVLENBQUNLLEtBQTFCLEVBQWdDO0FBQzVCSCxpQkFBYSxHQUFHLHdGQUFoQjtBQUNILEdBRkQsTUFFTSxJQUFHSSxRQUFRLElBQUlOLFVBQVUsQ0FBQ1UsTUFBMUIsRUFBaUM7QUFDbkNSLGlCQUFhLEdBQUcsc0lBQWhCO0FBQ0gsR0FGSyxNQUVEO0FBQ0RBLGlCQUFhLEdBQUcseUdBQWhCO0FBQ0g7O0FBR0QsU0FDSSxNQUFDLGlEQUFEO0FBQVcsZ0JBQVksRUFBRUksUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxXQUFXLENBQUNQLFVBQVUsQ0FBQ0ssS0FBWixDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESixFQUVJLE1BQUMsOENBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNRSxXQUFXLENBQUNQLFVBQVUsQ0FBQ1UsTUFBWixDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJLE1BQUMsOENBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSCxXQUFXLENBQUNQLFVBQVUsQ0FBQ1csTUFBWixDQUFqQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixDQURKO0FBT0gsQ0F0QkQ7O0dBQU1SLFM7O0tBQUFBLFM7QUF3QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0YmYwZmExYmY3NWE0NmNiN2FiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5leHBvcnQgZW51bSBUaXBlU2VhcmNoIHtcclxuICAgIHRwTkNNID0gMSxcclxuICAgIHRwQ0ZPUCA9IDIsXHJcbiAgICB0cENFU1QgPSAzXHJcbiAgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wc3tcclxuICAgIGJ1dHRvbkFjdGl2ZT86IFRpcGVTZWFyY2g7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5U2VhcmNoIDogVGlwZVNlYXJjaDtcclxuZXhwb3J0IGxldCBjdXJyZW50bHlUZXh0IDogU3RyaW5nO1xyXG5cclxuY29uc3QgQnV0dG9uQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG59KSA9PnsgIFxyXG4gICAgY29uc3QgW3RwU2VhcmNoLCBzZXRUcFNlYXJjaF0gPSB1c2VTdGF0ZTxUaXBlU2VhcmNoPihUaXBlU2VhcmNoLnRwTkNNKVxyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpICBcclxuICAgIGN1cnJlbnRseVNlYXJjaCA9IHRwU2VhcmNoO1xyXG5cclxuICAgIGlmKHRwU2VhcmNoID09IFRpcGVTZWFyY2gudHBOQ00pe1xyXG4gICAgICAgIGN1cnJlbnRseVRleHQgPSAnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWwuJztcclxuICAgIH1lbHNlIGlmKHRwU2VhcmNoID09IFRpcGVTZWFyY2gudHBDRk9QKXtcclxuICAgICAgICBjdXJyZW50bHlUZXh0ID0gJ1NlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo28gZG8gQ8OzZGlnbyBGaXNjYWwgZGUgT3BlcmHDp8O1ZXMgZSBQcmVzdGHDp8O1ZXMgZGFzIGVudHJhZGFzIGUgc2HDrWRhcyBkZSBtZXJjYWRvcmlhcy4nO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY3VycmVudGx5VGV4dCA9ICdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRvIEPDs2RpZ28gRXNwZWNpZmljYWRvciBkYSBTdWJzdGlydWnDp8OjbyBUcmlidXTDoXJpYS4nXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGJ1dHRvbkFjdGl2ZT17dHBTZWFyY2h9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRwU2VhcmNoKFRpcGVTZWFyY2gudHBOQ00pfT5OQ008L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0ZPUCl9PkNGT1A8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVCl9PkNFU1Q8L0J1dHRvbj4gICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=