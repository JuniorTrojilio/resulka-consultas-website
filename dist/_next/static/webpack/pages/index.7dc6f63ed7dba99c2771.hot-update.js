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

  if (tpSearch == TipeSearch.tpNCM) {
    setText('Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.');
  } else if (tpSearch == TipeSearch.tpCFOP) {
    setText('Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.');
  } else {
    setText('Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.');
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    buttonActive: tpSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpNCM);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCFOP);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCEST);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25CYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRpcGVTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJjdXJyZW50bHlUZXh0IiwiQnV0dG9uQmFyIiwidXNlU3RhdGUiLCJ0cE5DTSIsInRwU2VhcmNoIiwic2V0VHBTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsInRwQ0ZPUCIsInRwQ0VTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxJQUFLQSxVQUFaOztXQUFZQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7QUFBQUEsWSxDQUFBQSxVO0dBQUFBLFUsS0FBQUEsVTs7QUFVTCxJQUFJQyxlQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFUCxJQUFNQyxTQUEwQixHQUFHLFNBQTdCQSxTQUE2QixPQUM5QjtBQUFBOztBQUFBOztBQUFBLGtCQUMrQkMsc0RBQVEsQ0FBYUosVUFBVSxDQUFDSyxLQUF4QixDQUR2QztBQUFBLE1BQ01DLFFBRE47QUFBQSxNQUNnQkMsV0FEaEI7O0FBQUEsbUJBRXVCSCxzREFBUSxDQUFDLEVBQUQsQ0FGL0I7QUFBQSxNQUVNSSxJQUZOO0FBQUEsTUFFWUMsT0FGWjs7QUFHRFIsaUJBQWUsR0FBR0ssUUFBbEI7QUFDQUosZUFBYSxHQUFHTSxJQUFoQjs7QUFFQSxNQUFHRixRQUFRLElBQUlOLFVBQVUsQ0FBQ0ssS0FBMUIsRUFBZ0M7QUFDNUJJLFdBQU8sQ0FBQyx3RkFBRCxDQUFQO0FBQ0gsR0FGRCxNQUVNLElBQUdILFFBQVEsSUFBSU4sVUFBVSxDQUFDVSxNQUExQixFQUFpQztBQUNuQ0QsV0FBTyxDQUFDLHNJQUFELENBQVA7QUFDSCxHQUZLLE1BRUQ7QUFDREEsV0FBTyxDQUFDLHlHQUFELENBQVA7QUFDSDs7QUFHRCxTQUNJLE1BQUMsaURBQUQ7QUFBVyxnQkFBWSxFQUFFSCxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFdBQVcsQ0FBQ1AsVUFBVSxDQUFDSyxLQUFaLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1FLFdBQVcsQ0FBQ1AsVUFBVSxDQUFDVSxNQUFaLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0ksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFdBQVcsQ0FBQ1AsVUFBVSxDQUFDVyxNQUFaLENBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLENBREo7QUFPSCxDQXZCRDs7R0FBTVIsUzs7S0FBQUEsUztBQXlCU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2RjNmY2M2VkN2RiYTk5YzI3NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmV4cG9ydCBlbnVtIFRpcGVTZWFyY2gge1xyXG4gICAgdHBOQ00gPSAxLFxyXG4gICAgdHBDRk9QID0gMixcclxuICAgIHRwQ0VTVCA9IDNcclxuICB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgYnV0dG9uQWN0aXZlPzogVGlwZVNlYXJjaDtcclxufVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50bHlTZWFyY2ggOiBUaXBlU2VhcmNoO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRseVRleHQgOiBTdHJpbmc7XHJcblxyXG5jb25zdCBCdXR0b25CYXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbn0pID0+eyAgXHJcbiAgICBjb25zdCBbdHBTZWFyY2gsIHNldFRwU2VhcmNoXSA9IHVzZVN0YXRlPFRpcGVTZWFyY2g+KFRpcGVTZWFyY2gudHBOQ00pXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJykgIFxyXG4gICAgY3VycmVudGx5U2VhcmNoID0gdHBTZWFyY2g7XHJcbiAgICBjdXJyZW50bHlUZXh0ID0gdGV4dDtcclxuXHJcbiAgICBpZih0cFNlYXJjaCA9PSBUaXBlU2VhcmNoLnRwTkNNKXtcclxuICAgICAgICBzZXRUZXh0KCdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRhIE5vbWVuY2xhdHVyYSBDb211bSBkbyBNZXJjb3N1bC4nKTtcclxuICAgIH1lbHNlIGlmKHRwU2VhcmNoID09IFRpcGVTZWFyY2gudHBDRk9QKXtcclxuICAgICAgICBzZXRUZXh0KCdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRvIEPDs2RpZ28gRmlzY2FsIGRlIE9wZXJhw6fDtWVzIGUgUHJlc3Rhw6fDtWVzIGRhcyBlbnRyYWRhcyBlIHNhw61kYXMgZGUgbWVyY2Fkb3JpYXMuJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBzZXRUZXh0KCdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRvIEPDs2RpZ28gRXNwZWNpZmljYWRvciBkYSBTdWJzdGlydWnDp8OjbyBUcmlidXTDoXJpYS4nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgYnV0dG9uQWN0aXZlPXt0cFNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cE5DTSl9Pk5DTTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRwU2VhcmNoKFRpcGVTZWFyY2gudHBDRk9QKX0+Q0ZPUDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRwU2VhcmNoKFRpcGVTZWFyY2gudHBDRVNUKX0+Q0VTVDwvQnV0dG9uPiAgICBcclxuICAgICAgICA8L0NvbnRhaW5lcj4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==