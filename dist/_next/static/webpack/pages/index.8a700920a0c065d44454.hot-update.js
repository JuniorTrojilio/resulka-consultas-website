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
  currentlyText = text;

  function handleNCM() {
    setTpSearch(TipeSearch.tpNCM);
    setText('Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.');
  }

  if (tpSearch == TipeSearch.tpNCM) {} else if (tpSearch == TipeSearch.tpCFOP) {
    setText('Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.');
  } else {
    setText('Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.');
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    buttonActive: tpSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleNCM;
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCFOP);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCEST);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25CYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRpcGVTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJjdXJyZW50bHlUZXh0IiwiQnV0dG9uQmFyIiwidXNlU3RhdGUiLCJ0cE5DTSIsInRwU2VhcmNoIiwic2V0VHBTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZU5DTSIsInRwQ0ZPUCIsInRwQ0VTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxJQUFLQSxVQUFaOztXQUFZQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7QUFBQUEsWSxDQUFBQSxVO0dBQUFBLFUsS0FBQUEsVTs7QUFVTCxJQUFJQyxlQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFJUCxJQUFNQyxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUM5QjtBQUFBOztBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBYUosVUFBVSxDQUFDSyxLQUF4QixDQUR2QztBQUFBLE1BQ01DLFFBRE47QUFBQSxNQUNnQkMsV0FEaEI7O0FBQUEsbUJBRXVCSCxzREFBUSxDQUFDLEVBQUQsQ0FGL0I7QUFBQSxNQUVNSSxJQUZOO0FBQUEsTUFFWUMsT0FGWjs7QUFHRFIsaUJBQWUsR0FBR0ssUUFBbEI7QUFDQUosZUFBYSxHQUFHTSxJQUFoQjs7QUFFQSxXQUFTRSxTQUFULEdBQW9CO0FBQ2hCSCxlQUFXLENBQUNQLFVBQVUsQ0FBQ0ssS0FBWixDQUFYO0FBQ0FJLFdBQU8sQ0FBQyx3RkFBRCxDQUFQO0FBQ0g7O0FBRUQsTUFBR0gsUUFBUSxJQUFJTixVQUFVLENBQUNLLEtBQTFCLEVBQWdDLENBRS9CLENBRkQsTUFFTSxJQUFHQyxRQUFRLElBQUlOLFVBQVUsQ0FBQ1csTUFBMUIsRUFBaUM7QUFDbkNGLFdBQU8sQ0FBQyxzSUFBRCxDQUFQO0FBQ0gsR0FGSyxNQUVEO0FBQ0RBLFdBQU8sQ0FBQyx5R0FBRCxDQUFQO0FBQ0g7O0FBR0QsU0FDSSxNQUFDLGlEQUFEO0FBQVcsZ0JBQVksRUFBRUgsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSSxTQUFOO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFdBQVcsQ0FBQ1AsVUFBVSxDQUFDVyxNQUFaLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0ksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1KLFdBQVcsQ0FBQ1AsVUFBVSxDQUFDWSxNQUFaLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLENBREo7QUFPSCxDQTVCRDs7R0FBTVQsUzs7S0FBQUEsUztBQThCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGE3MDA5MjBhMGMwNjVkNDQ0NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmV4cG9ydCBlbnVtIFRpcGVTZWFyY2gge1xyXG4gICAgdHBOQ00gPSAxLFxyXG4gICAgdHBDRk9QID0gMixcclxuICAgIHRwQ0VTVCA9IDNcclxuICB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgYnV0dG9uQWN0aXZlPzogVGlwZVNlYXJjaDtcclxufVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50bHlTZWFyY2ggOiBUaXBlU2VhcmNoO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseVRleHQgOiBTdHJpbmc7XHJcblxyXG5cclxuXHJcbmNvbnN0IEJ1dHRvbkJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcclxufSkgPT57ICBcclxuICAgIGNvbnN0IFt0cFNlYXJjaCwgc2V0VHBTZWFyY2hdID0gdXNlU3RhdGU8VGlwZVNlYXJjaD4oVGlwZVNlYXJjaC50cE5DTSlcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKSAgXHJcbiAgICBjdXJyZW50bHlTZWFyY2ggPSB0cFNlYXJjaDtcclxuICAgIGN1cnJlbnRseVRleHQgPSB0ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU5DTSgpe1xyXG4gICAgICAgIHNldFRwU2VhcmNoKFRpcGVTZWFyY2gudHBOQ00pXHJcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWwuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodHBTZWFyY2ggPT0gVGlwZVNlYXJjaC50cE5DTSl7XHJcbiAgICAgICAgXHJcbiAgICB9ZWxzZSBpZih0cFNlYXJjaCA9PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XHJcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEZpc2NhbCBkZSBPcGVyYcOnw7VlcyBlIFByZXN0YcOnw7VlcyBkYXMgZW50cmFkYXMgZSBzYcOtZGFzIGRlIG1lcmNhZG9yaWFzLicpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEVzcGVjaWZpY2Fkb3IgZGEgU3Vic3RpcnVpw6fDo28gVHJpYnV0w6FyaWEuJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGJ1dHRvbkFjdGl2ZT17dHBTZWFyY2h9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5DTX0+TkNNPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cENGT1ApfT5DRk9QPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cENFU1QpfT5DRVNUPC9CdXR0b24+ICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJhcjsiXSwic291cmNlUm9vdCI6IiJ9