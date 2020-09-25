webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ButtonBar/index.tsx":
/*!****************************************!*\
  !*** ./components/ButtonBar/index.tsx ***!
  \****************************************/
/*! exports provided: TipeSearch, currentlySearch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipeSearch", function() { return TipeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlySearch", function() { return currentlySearch; });
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

var ButtonBar = function ButtonBar(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(TipeSearch.tpNCM),
      tpSearch = _useState[0],
      setTpSearch = _useState[1];

  currentlySearch = tpSearch;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    buttonActive: tpSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpNCM);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCFOP);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return setTpSearch(TipeSearch.tpCEST);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "CEST"));
};

_s(ButtonBar, "u3wJB4rQ2eFumeDc5FUQfqC6e6Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25CYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlRpcGVTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJCdXR0b25CYXIiLCJ1c2VTdGF0ZSIsInRwTkNNIiwidHBTZWFyY2giLCJzZXRUcFNlYXJjaCIsInRwQ0ZPUCIsInRwQ0VTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLElBQUtBLFVBQVo7O1dBQVlBLFU7QUFBQUEsWSxDQUFBQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7R0FBQUEsVSxLQUFBQSxVOztBQVVMLElBQUlDLGVBQUo7O0FBRVAsSUFBTUMsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0FDOUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDK0JDLHNEQUFRLENBQWFILFVBQVUsQ0FBQ0ksS0FBeEIsQ0FEdkM7QUFBQSxNQUNNQyxRQUROO0FBQUEsTUFDZ0JDLFdBRGhCOztBQUVETCxpQkFBZSxHQUFHSSxRQUFsQjtBQUNBLFNBQ0ksTUFBQyxpREFBRDtBQUFXLGdCQUFZLEVBQUVBLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUMsV0FBVyxDQUFDTixVQUFVLENBQUNJLEtBQVosQ0FBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUUsV0FBVyxDQUFDTixVQUFVLENBQUNPLE1BQVosQ0FBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFHSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUQsV0FBVyxDQUFDTixVQUFVLENBQUNRLE1BQVosQ0FBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosQ0FESjtBQU9ILENBWEQ7O0dBQU1OLFM7O0tBQUFBLFM7QUFhU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2EyNWNmYWU0ZWRiY2RlYjU1YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmV4cG9ydCBlbnVtIFRpcGVTZWFyY2gge1xyXG4gICAgdHBOQ00gPSAxLFxyXG4gICAgdHBDRk9QID0gMixcclxuICAgIHRwQ0VTVCA9IDNcclxuICB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgYnV0dG9uQWN0aXZlPzogVGlwZVNlYXJjaDtcclxufVxyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50bHlTZWFyY2ggOiBUaXBlU2VhcmNoO1xyXG5cclxuY29uc3QgQnV0dG9uQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG59KSA9PnsgIFxyXG4gICAgY29uc3QgW3RwU2VhcmNoLCBzZXRUcFNlYXJjaF0gPSB1c2VTdGF0ZTxUaXBlU2VhcmNoPihUaXBlU2VhcmNoLnRwTkNNKSAgXHJcbiAgICBjdXJyZW50bHlTZWFyY2ggPSB0cFNlYXJjaDtcclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIGJ1dHRvbkFjdGl2ZT17dHBTZWFyY2h9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRwU2VhcmNoKFRpcGVTZWFyY2gudHBOQ00pfT5OQ008L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0ZPUCl9PkNGT1A8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVCl9PkNFU1Q8L0J1dHRvbj4gICAgXHJcbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmFyOyJdLCJzb3VyY2VSb290IjoiIn0=