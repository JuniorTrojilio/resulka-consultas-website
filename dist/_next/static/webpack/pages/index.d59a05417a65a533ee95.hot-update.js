webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SearchBar/index.tsx":
/*!****************************************!*\
  !*** ./components/SearchBar/index.tsx ***!
  \****************************************/
/*! exports provided: currentlyValue, currentlyError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyValue", function() { return currentlyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentlyError", function() { return currentlyError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/SearchBar/styles.ts");
var _this = undefined,
    _jsxFileName = "E:\\dev\\resulka-consultas-website\\components\\SearchBar\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var currentlyValue;
var currentlyError;

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
      lineNumber: 28,
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ButtonBar */ "./components/ButtonBar/index.tsx");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar/index.tsx");
/* harmony import */ var _components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ButtonSearch/styles */ "./components/ButtonSearch/styles.ts");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/services */ "./services/services.ts");




var _jsxFileName = "E:\\dev\\resulka-consultas-website\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var services = new _services_services__WEBPACK_IMPORTED_MODULE_8__["default"]();
function Home() {
  _s();

  var _currentlyNCM,
      _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      ncm = _useState2[0],
      setNCM = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cest = _useState3[0],
      setCEST = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cfop = _useState4[0],
      setCFOP = _useState4[1];

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

              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM)) {
                _context.next = 21;
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
              console.log(ncm);

            case 21:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCEST)) {
                _context.next = 38;
                break;
              }

              _context.next = 24;
              return services.getCEST(code, 1);

            case 24:
              responsecest = _context.sent;
              setCEST(responsecest);

              if (!(responsecest.totalPages > 1)) {
                _context.next = 38;
                break;
              }

              _i = 2;

            case 28:
              if (!(_i <= responsecest.totalPages)) {
                _context.next = 38;
                break;
              }

              _context.next = 31;
              return services.getCEST(code, _i);

            case 31:
              newresponsecest = _context.sent;
              datacest = responsecest.data.concat(newresponsecest.data);
              newcest = _objectSpread(_objectSpread({}, responsecest), datacest);
              setCEST(newcest);

            case 35:
              _i++;
              _context.next = 28;
              break;

            case 38:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCFOP)) {
                _context.next = 55;
                break;
              }

              _context.next = 41;
              return services.getCFOP(code, 1);

            case 41:
              responsecfop = _context.sent;
              setCFOP(responsecfop);

              if (!(responsecfop.totalPages > 1)) {
                _context.next = 55;
                break;
              }

              _i2 = 2;

            case 45:
              if (!(_i2 <= responsecfop.totalPages)) {
                _context.next = 55;
                break;
              }

              _context.next = 48;
              return services.getCFOP(code, _i2);

            case 48:
              newresponsecfop = _context.sent;
              datacfop = responsecfop.data.concat(newresponsecfop.data);
              newcfop = _objectSpread(_objectSpread({}, responsecfop), datacfop);
              setCFOP(newcfop);

            case 52:
              _i2++;
              _context.next = 45;
              break;

            case 55:
              _context.next = 61;
              break;

            case 57:
              _context.prev = 57;
              _context.t0 = _context["catch"](0);
              setError(true);
              alert(_context.t0.message);

            case 61:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 57]]);
    }));
    return _startSearch.apply(this, arguments);
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    backgroundColor: "#ECF0F1",
    as: "main",
    width: "100vw",
    height: "100vh",
    templateColumns: "auto 100% auto",
    templateRows: "250px 100px  auto auto",
    templateAreas: " '. BT .' '. SI .' '. RB .' 'FT FT FT' ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "BT",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    wordBreak: "break-word",
    maxWidth: "sm",
    textAlign: "center",
    marginTop: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "Servi\xE7o gratuito de consulta por c\xF3digo e descri\xE7\xE3o\n        da Nomenclatura Comum do Mercosul")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    display: "flex",
    gridArea: "SI",
    justifyContent: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    hasError: error,
    placeholder: "Digite a descri\xE7\xE3o ou o c\xF3digo!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Pesquisar")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "RB",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    allowToggle: true,
    width: "90vw",
    marginTop: "50px",
    backgroundColor: "white",
    borderRadius: "md",
    maxWidth: "770px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && ((_currentlyNCM = currentlyNCM) === null || _currentlyNCM === void 0 ? void 0 : _currentlyNCM.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      pb: 4,
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: "100px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 21
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    })));
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "FT",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "AN3ZX8AGiq+gbgfB5O2M7HVRlME=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiY3VycmVudGx5VmFsdWUiLCJjdXJyZW50bHlFcnJvciIsIlNlYXJjaEJhciIsImhhc0Vycm9yIiwicGxhY2Vob2xkZXIiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwiY2hhbmdlVmFsdWUiLCJlIiwidGFyZ2V0Iiwic2VydmljZXMiLCJTZXJ2aWNlcyIsIkhvbWUiLCJuY20iLCJzZXROQ00iLCJjZXN0Iiwic2V0Q0VTVCIsImNmb3AiLCJzZXRDRk9QIiwic3RhcnRTZWFyY2giLCJjb2RlIiwiY3VycmVudGx5U2VhcmNoIiwiVGlwZVNlYXJjaCIsInRwTkNNIiwiZ2V0TkNNIiwicmVzcG9uc2VuY20iLCJ0b3RhbFBhZ2VzIiwiaSIsIm5ld3Jlc3BvbnNlbmNtIiwiZGF0YW5jbSIsImRhdGEiLCJjb25jYXQiLCJuZXduY20iLCJjb25zb2xlIiwibG9nIiwidHBDRVNUIiwiZ2V0Q0VTVCIsInJlc3BvbnNlY2VzdCIsIm5ld3Jlc3BvbnNlY2VzdCIsImRhdGFjZXN0IiwibmV3Y2VzdCIsInRwQ0ZPUCIsImdldENGT1AiLCJyZXNwb25zZWNmb3AiLCJuZXdyZXNwb25zZWNmb3AiLCJkYXRhY2ZvcCIsIm5ld2Nmb3AiLCJhbGVydCIsIm1lc3NhZ2UiLCJjdXJyZW50bHlOQ00iLCJtYXAiLCJpdGVtIiwiY29kaWdvIiwiZGVzY3JpY2FvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBT08sSUFBSUEsY0FBSjtBQUNBLElBQUlDLGNBQUo7O0FBR1AsSUFBTUMsU0FBMEIsR0FBRyxTQUE3QkEsU0FBNkIsT0FHOUI7QUFBQTs7QUFBQSxNQUZGQyxRQUVFLFFBRkZBLFFBRUU7QUFBQSxNQURGQyxXQUNFLFFBREZBLFdB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQVFFLE1BQUMsc0RBQUQ7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixFQU1FO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBT0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFXRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixFQVlFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBYUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFjRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixFQWVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLEVBZ0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixFQWlCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsRUFrQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLEVBbUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixFQW9CRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsRUFxQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLEVBc0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixFQXVCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsRUF3QkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLEVBeUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRixFQTBCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsRUEyQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLENBUkYsQ0FERixFQXVDRSxNQUFDLG9EQUFEO0FBQ0EsYUFBTyxFQUFDLFFBRFI7QUFFQSxnQkFBVSxFQUFDLFlBRlg7QUFHQSxlQUFTLEVBQUMsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkNGLENBVEosRUF1REUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkRGLENBWkYsQ0FEbUU7QUFBQSxHQUEzQixDQUF4QyxDQVBKLENBREYsQ0FwQ0YsRUF1SEUsTUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQXZIRixDQURGO0FBd0lEOztHQXJNdUJ6QyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ1OWEwNTQxN2E2NWE1MzNlZTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgICBoYXNFcnJvcj86Ym9vbGVhbjtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRseVZhbHVlOiBzdHJpbmc7XHJcbmV4cG9ydCB2YXIgY3VycmVudGx5RXJyb3I6IGJvb2xlYW47XHJcblxyXG5cclxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xyXG4gICBoYXNFcnJvcixcclxuICAgcGxhY2Vob2xkZXIsXHJcbn0pID0+e1xyXG4gICAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKVxyXG4gICAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz4gICAgICAgICAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgU2VhcmNoQmFyLCB7IGN1cnJlbnRseUVycm9yLCBjdXJyZW50bHlWYWx1ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcbmltcG9ydCB7IEJ1dHRvblNlYXJjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uU2VhcmNoL3N0eWxlcydcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VhcmNoKGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHsgICAgICAgICAgICBcbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIDEpOyBcbiAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYocmVzcG9uc2VuY20udG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlbmNtLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhbmNtID0gcmVzcG9uc2VuY20uZGF0YS5jb25jYXQobmV3cmVzcG9uc2VuY20uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld25jbSA9IHsgLi4ucmVzcG9uc2VuY20sIC4uLmRhdGFuY20gfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0TkNNKHJlc3BvbnNlbmNtKTsgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q0VTVChudWxsKTtcbiAgICAgICAgICAgIHNldENGT1AobnVsbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuY20pXG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRVNUKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENFU1QocmVzcG9uc2VjZXN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZXN0LnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNlc3QudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNlc3QgPSByZXNwb25zZWNlc3QuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZXN0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZXN0ID0geyAuLi5yZXNwb25zZWNlc3QsIC4uLmRhdGFjZXN0IH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0VTVChuZXdjZXN0KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRk9QKHJlc3BvbnNlY2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNmb3AudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2ZvcCA9IHJlc3BvbnNlY2ZvcC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNmb3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nmb3AgPSB7IC4uLnJlc3BvbnNlY2ZvcCwgLi4uZGF0YWNmb3AgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRk9QKG5ld2Nmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgIH0gICBcbn1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIFxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICBhcz1cIm1haW5cIlxuICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJhdXRvIDEwMCUgYXV0b1wiXG4gICAgICB0ZW1wbGF0ZVJvd3M9XCIyNTBweCAxMDBweCAgYXV0byBhdXRvXCJcbiAgICAgIHRlbXBsYXRlQXJlYXM9XCJcbiAgICAgICAgJy4gQlQgLidcbiAgICAgICAgJy4gU0kgLidcbiAgICAgICAgJy4gUkIgLidcbiAgICAgICAgJ0ZUIEZUIEZUJ1xuICAgICAgXCIgXG4gICAgPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJCVFwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxCdXR0b25CYXIgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB3b3JkQnJlYWs9XCJicmVhay13b3JkXCJcbiAgICAgICAgICBtYXhXaWR0aD1cInNtXCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIlxuICAgICAgICA+e2BTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvXG4gICAgICAgIGRhIE5vbWVuY2xhdHVyYSBDb211bSBkbyBNZXJjb3N1bGB9PC9UZXh0PlxuICAgICAgPC9GbGV4PiBcbiAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgZ3JpZEFyZWE9XCJTSVwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8U2VhcmNoQmFyIFxuICAgICAgICAgIGhhc0Vycm9yPXtlcnJvcn0gXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBkZXNjcmnDp8OjbyBvdSBvIGPDs2RpZ28hXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uU2VhcmNoPlBlc3F1aXNhcjwvQnV0dG9uU2VhcmNoPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxGbGV4IGdyaWRBcmVhPVwiUkJcIiBmbGV4RGlyPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiPlxuICAgICAgICA8QWNjb3JkaW9uIFxuICAgICAgICAgIGFsbG93VG9nZ2xlIHdpZHRoPVwiOTB2d1wiIFxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIiBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgIG1heFdpZHRoPVwiNzcwcHhcIlxuICAgICAgICAgID4gXG4gICAgICAgICAgeyBjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00gJiYgY3VycmVudGx5TkNNPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjB2aFwiXG4gICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+RXN0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgd2lkdGg9XCIxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDXCI+QUM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTFwiPkFMPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVBcIj5BUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFNXCI+QU08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCQVwiPkJBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VcIj5DRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVTXCI+RVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHT1wiPkdPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5NQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1UXCI+TVQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRFwiPk1TPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUdcIj5NRzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBBXCI+UEE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQlwiPlBCPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJcIj5QUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBFXCI+UEU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSVwiPlBJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUkpcIj5SSjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJOXCI+Uk48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSU1wiPlJTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9cIj5STzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJSXCI+UlI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQ1wiPlNDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1BcIj5TUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNFXCI+U0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUT1wiPlRPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREZcIj5ERjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIlxuICAgICAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FjY29yZGlvbj4gICAgICAgIFxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggXG4gICAgICAgIGdyaWRBcmVhPVwiRlRcIiBcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgICA+XG4gICAgICA8TGluayBcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnRyZWV1bmZlLmNvbS5ici9cIiBcbiAgICAgICAgYWx0PVwiVHJlZXVuZmUgVGVjbm9sb2dpYVwiXG4gICAgICAgIHRleHREZWNvcj1cIm5vbmVcIlxuICAgICAgICA+VHJlZXVuZmUgVGVjbm9sb2dpYSA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9HcmlkPlxuICAgICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=