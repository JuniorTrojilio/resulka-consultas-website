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

  function handleCEST() {
    setTpSearch(TipeSearch.tpCEST);
    setText('Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.');
  }

  function handleCFOP() {
    setTpSearch(TipeSearch.tpCEST);
    setText('Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.');
  }

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["BoxButton"], {
    buttonActive: tpSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleNCM();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleCEST();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: function onClick() {
      return handleCFOP();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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

/***/ }),

/***/ "./components/ButtonBar/styles.ts":
/*!****************************************!*\
  !*** ./components/ButtonBar/styles.ts ***!
  \****************************************/
/*! exports provided: BoxButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxButton", function() { return BoxButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");


function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    outline: none;\n    width: 80px;\n    height: 30px;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 16px;\n\n    cursor: pointer;\n    color: #818181;\n    border: none;\n    border-radius: 5px 0 0 5px;\n    background-color: #fff;\n    \n    &:hover {\n      background: #e8685e;\n      color: #fff;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          background-color: #e8685e;\n          color: #fff;\n          transition: background-color 0.2s;\n          &:hover {\n            background: ", ";\n            color: #fff;\n          }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          background-color: #e8685e;\n          color: #fff;\n          transition: background-color 0.2s;\n          &:hover {\n            background: ", ";\n            color: #fff;\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      background-color: #e8685e;\n      color: #fff;\n      transition: background-color 0.2s;\n      &:hover {\n        background: ", ";\n        color: #fff;\n      }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;  \n  flex-direction: row;\n  align-items: center;  \n\n  Button {\n    ", "\n\n    & + Button {\n        border-radius: 0;\n        color: #818181;\n        background-color: #fff;\n\n        ", "\n    }\n\n    & + Button + Button{\n        border-radius: 0 5px 5px 0;\n        color: #818181;\n        background-color: #fff;\n\n        ", "\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var BoxButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.buttonActive === 1 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.05, '#E8685E'));
}, function (props) {
  return props.buttonActive === 2 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.05, '#E8685E'));
}, function (props) {
  return props.buttonActive === 3 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["shade"])(0.05, '#E8685E'));
});
var Button = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject5());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25CYXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1dHRvbkJhci9zdHlsZXMudHMiXSwibmFtZXMiOlsiVGlwZVNlYXJjaCIsImN1cnJlbnRseVNlYXJjaCIsImN1cnJlbnRseVRleHQiLCJCdXR0b25CYXIiLCJ1c2VTdGF0ZSIsInRwTkNNIiwidHBTZWFyY2giLCJzZXRUcFNlYXJjaCIsInRleHQiLCJzZXRUZXh0IiwiaGFuZGxlTkNNIiwiaGFuZGxlQ0VTVCIsInRwQ0VTVCIsImhhbmRsZUNGT1AiLCJCb3hCdXR0b24iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImJ1dHRvbkFjdGl2ZSIsImNzcyIsInNoYWRlIiwiQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLElBQUtBLFVBQVo7O1dBQVlBLFU7QUFBQUEsWSxDQUFBQSxVO0FBQUFBLFksQ0FBQUEsVTtBQUFBQSxZLENBQUFBLFU7R0FBQUEsVSxLQUFBQSxVOztBQVVMLElBQUlDLGVBQUo7QUFDQSxJQUFJQyxhQUFKOztBQUlQLElBQU1DLFNBQTBCLEdBQUcsU0FBN0JBLFNBQTZCLE9BQzlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQytCQyxzREFBUSxDQUFhSixVQUFVLENBQUNLLEtBQXhCLENBRHZDO0FBQUEsTUFDTUMsUUFETjtBQUFBLE1BQ2dCQyxXQURoQjs7QUFBQSxtQkFFdUJILHNEQUFRLENBQUMsRUFBRCxDQUYvQjtBQUFBLE1BRU1JLElBRk47QUFBQSxNQUVZQyxPQUZaOztBQUlEUixpQkFBZSxHQUFHSyxRQUFsQjtBQUNBSixlQUFhLEdBQUdNLElBQWhCOztBQUVBLFdBQVNFLFNBQVQsR0FBb0I7QUFDaEJILGVBQVcsQ0FBQ1AsVUFBVSxDQUFDSyxLQUFaLENBQVg7QUFDQUksV0FBTyxDQUFDLHdGQUFELENBQVA7QUFDSDs7QUFFRCxXQUFTRSxVQUFULEdBQXFCO0FBQ2pCSixlQUFXLENBQUNQLFVBQVUsQ0FBQ1ksTUFBWixDQUFYO0FBQ0FILFdBQU8sQ0FBQyx5R0FBRCxDQUFQO0FBQ0g7O0FBRUQsV0FBU0ksVUFBVCxHQUFxQjtBQUNqQk4sZUFBVyxDQUFDUCxVQUFVLENBQUNZLE1BQVosQ0FBWDtBQUNBSCxXQUFPLENBQUMsc0lBQUQsQ0FBUDtBQUNIOztBQUdELFNBQ0ksTUFBQyxpREFBRDtBQUFXLGdCQUFZLEVBQUVILFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUksU0FBUyxFQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLEVBRUksTUFBQyw4Q0FBRDtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1DLFVBQVUsRUFBaEI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFHSSxNQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTUUsVUFBVSxFQUFoQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixDQURKO0FBT0gsQ0EvQkQ7O0dBQU1WLFM7O0tBQUFBLFM7QUFpQ1NBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBSU8sSUFBTVcsU0FBUyxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQU1oQixVQUFBQyxLQUFLO0FBQUEsU0FDUEEsS0FBSyxDQUFDQyxZQUFOLEtBQXVCLENBQXZCLElBQ0FDLHlEQURBLHFCQU1rQkMsc0RBQUssQ0FBQyxJQUFELEVBQU8sU0FBUCxDQU52QixDQURPO0FBQUEsQ0FOVyxFQXVCWixVQUFBSCxLQUFLO0FBQUEsU0FDUEEsS0FBSyxDQUFDQyxZQUFOLEtBQXVCLENBQXZCLElBQ0FDLHlEQURBLHFCQU1rQkMsc0RBQUssQ0FBQyxJQUFELEVBQU8sU0FBUCxDQU52QixDQURPO0FBQUEsQ0F2Qk8sRUF5Q1osVUFBQUgsS0FBSztBQUFBLFNBQ1BBLEtBQUssQ0FBQ0MsWUFBTixLQUF1QixDQUF2QixJQUNBQyx5REFEQSxxQkFNa0JDLHNEQUFLLENBQUMsSUFBRCxFQUFPLFNBQVAsQ0FOdkIsQ0FETztBQUFBLENBekNPLENBQWY7QUF3REEsSUFBTUMsTUFBTSxHQUFHTix1REFBTSxDQUFDTyxNQUFWLG9CQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkMDgyMjc4MDI5YTg3OTg3MTI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJveEJ1dHRvbiwgQnV0dG9uIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5leHBvcnQgZW51bSBUaXBlU2VhcmNoIHtcclxuICAgIHRwTkNNID0gMSxcclxuICAgIHRwQ0ZPUCA9IDIsXHJcbiAgICB0cENFU1QgPSAzXHJcbiAgfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wc3tcclxuICAgIGJ1dHRvbkFjdGl2ZT86IFRpcGVTZWFyY2g7XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudGx5U2VhcmNoIDogVGlwZVNlYXJjaDtcclxuZXhwb3J0IGxldCBjdXJyZW50bHlUZXh0IDogU3RyaW5nO1xyXG5cclxuXHJcblxyXG5jb25zdCBCdXR0b25CYXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XHJcbn0pID0+eyAgXHJcbiAgICBjb25zdCBbdHBTZWFyY2gsIHNldFRwU2VhcmNoXSA9IHVzZVN0YXRlPFRpcGVTZWFyY2g+KFRpcGVTZWFyY2gudHBOQ00pXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY3VycmVudGx5U2VhcmNoID0gdHBTZWFyY2g7XHJcbiAgICBjdXJyZW50bHlUZXh0ID0gdGV4dDtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVOQ00oKXtcclxuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwTkNNKVxyXG4gICAgICAgIHNldFRleHQoJ1NlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo28gZGEgTm9tZW5jbGF0dXJhIENvbXVtIGRvIE1lcmNvc3VsLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNFU1QoKXtcclxuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVClcclxuICAgICAgICBzZXRUZXh0KCdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRvIEPDs2RpZ28gRXNwZWNpZmljYWRvciBkYSBTdWJzdGlydWnDp8OjbyBUcmlidXTDoXJpYS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDRk9QKCl7XHJcbiAgICAgICAgc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cENFU1QpXHJcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEZpc2NhbCBkZSBPcGVyYcOnw7VlcyBlIFByZXN0YcOnw7VlcyBkYXMgZW50cmFkYXMgZSBzYcOtZGFzIGRlIG1lcmNhZG9yaWFzLicpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveEJ1dHRvbiBidXR0b25BY3RpdmU9e3RwU2VhcmNofT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOQ00oKX0+TkNNPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ0VTVCgpfT5DRk9QPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ0ZPUCgpfT5DRVNUPC9CdXR0b24+ICAgIFxyXG4gICAgICAgIDwvQm94QnV0dG9uPiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJhcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgeyBzaGFkZSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL2luZGV4JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQm94QnV0dG9uID0gc3R5bGVkLmRpdjxQcm9wcz5gXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG5cclxuICBCdXR0b24ge1xyXG4gICAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuYnV0dG9uQWN0aXZlID09PSAxICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODY4NWU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7c2hhZGUoMC4wNSwgJyNFODY4NUUnKX07XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICBgfVxyXG5cclxuICAgICYgKyBCdXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgJHtwcm9wcyA9PlxyXG4gICAgICAgIHByb3BzLmJ1dHRvbkFjdGl2ZSA9PT0gMiAmJlxyXG4gICAgICAgIGNzc2BcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODY4NWU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3NoYWRlKDAuMDUsICcjRTg2ODVFJyl9O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgfVxyXG5cclxuICAgICYgKyBCdXR0b24gKyBCdXR0b257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICAgICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgJHtwcm9wcyA9PlxyXG4gICAgICAgIHByb3BzLmJ1dHRvbkFjdGl2ZSA9PT0gMyAmJlxyXG4gICAgICAgIGNzc2BcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlODY4NWU7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3NoYWRlKDAuMDUsICcjRTg2ODVFJyl9O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlODY4NWU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=