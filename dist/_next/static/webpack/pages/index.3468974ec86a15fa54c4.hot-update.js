webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_SearchBar_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchBar/styles */ "./components/SearchBar/styles.ts");
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

  var _this = this;

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState5[0],
      setValue = _useState5[1];

  function changeValue(value) {
    setValue(value);
    setError(false);
  }

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
              setNCM(newncm);

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
      lineNumber: 99,
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
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 115,
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
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx(_components_SearchBar_styles__WEBPACK_IMPORTED_MODULE_6__["SearchBar"], {
    placeholder: "Digite a descri\xE7\xE3o ou o c\xF3digo",
    value: value,
    onChange: function onChange(e) {
      return changeValue(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 135,
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
      lineNumber: 136,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      pb: 4,
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: "75px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 21
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
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
      lineNumber: 218,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "Qq7ezF73Sw/E7wCSjs9O+Y0w7E0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInN0YXJ0U2VhcmNoIiwiY29kZSIsImN1cnJlbnRseVNlYXJjaCIsIlRpcGVTZWFyY2giLCJ0cE5DTSIsImdldE5DTSIsInJlc3BvbnNlbmNtIiwidG90YWxQYWdlcyIsImkiLCJuZXdyZXNwb25zZW5jbSIsImRhdGFuY20iLCJkYXRhIiwiY29uY2F0IiwibmV3bmNtIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiYWxlcnQiLCJtZXNzYWdlIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJjb2RpZ28iLCJkZXNjcmljYW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLElBQUlDLDBEQUFKLEVBQWpCO0FBTWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7O0FBQUEsbUJBRVBGLHNEQUFRLENBQWtCLElBQWxCLENBRkQ7QUFBQSxNQUV0QkcsR0FGc0I7QUFBQSxNQUVqQkMsTUFGaUI7O0FBQUEsbUJBR0xKLHNEQUFR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QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFXRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixFQVlFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBYUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFjRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixFQWVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLEVBZ0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixFQWlCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsRUFrQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLEVBbUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixFQW9CRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsRUFxQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLEVBc0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixFQXVCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsRUF3QkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLEVBeUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRixFQTBCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsRUEyQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLENBUkYsQ0FERixFQXVDRSxNQUFDLG9EQUFEO0FBQ0EsYUFBTyxFQUFDLFFBRFI7QUFFQSxnQkFBVSxFQUFDLFlBRlg7QUFHQSxlQUFTLEVBQUMsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkNGLENBVEosRUF1REUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkRGLENBWkYsQ0FEMEQ7QUFBQSxHQUFsQixDQUF4QyxDQVBKLENBREYsQ0FwQ0YsRUF1SEUsTUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQXZIRixDQURGO0FBd0lEOztHQTVNdUJoRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM0Njg5NzRlYzg2YTE1ZmE1NGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcyB9IGZyb20gJy4uL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5jb25zdCBzZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcztcblxuaW50ZXJmYWNlIFByb3Bze1xuICBoYXNFcnJvcj86Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuY20sIHNldE5DTV0gPSB1c2VTdGF0ZTxOQ01Qcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY2VzdCwgc2V0Q0VTVF0gPSB1c2VTdGF0ZTxDRVNUUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nmb3AsIHNldENGT1BdID0gdXNlU3RhdGU8Q0ZPUFByb3BzIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIHNldFZhbHVlKHZhbHVlKVxuICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH0gXG4gICAgICAgICAgICAgICAgICAgIHNldE5DTShuZXduY20pOyBcbiAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xuICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5jbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpXG4gICAgfSAgIFxufVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgIGFzPVwibWFpblwiXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cImF1dG8gMTAwJSBhdXRvXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cIjI1MHB4IDEwMHB4ICBhdXRvIGF1dG9cIlxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxuICAgICAgICAnLiBCVCAuJ1xuICAgICAgICAnLiBTSSAuJ1xuICAgICAgICAnLiBSQiAuJ1xuICAgICAgICAnRlQgRlQgRlQnXG4gICAgICBcIiBcbiAgICA+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIkJUXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEJ1dHRvbkJhciAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgID57YFNlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo29cbiAgICAgICAgZGEgTm9tZW5jbGF0dXJhIENvbXVtIGRvIE1lcmNvc3VsYH08L1RleHQ+XG4gICAgICA8L0ZsZXg+IFxuICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICBncmlkQXJlYT1cIlNJXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxTZWFyY2hCYXIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBkZXNjcmnDp8OjbyBvdSBvIGPDs2RpZ29cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8QnV0dG9uU2VhcmNoIG9uQ2xpY2s9eygpID0+IHN0YXJ0U2VhcmNoKHZhbHVlKX0+UGVzcXVpc2FyPC9CdXR0b25TZWFyY2g+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJSQlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxBY2NvcmRpb24gXG4gICAgICAgICAgYWxsb3dUb2dnbGUgd2lkdGg9XCI5MHZ3XCIgXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3NzBweFwiXG4gICAgICAgICAgPiBcbiAgICAgICAgICB7IGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSAmJiBuY20/LmRhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gcGFkZGluZz1cIjVweFwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiIFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0uY29kaWdvfTwvYj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9UZXh0PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkljb24vPlxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fSBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHZoXCJcbiAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB3aWR0aD1cIjc1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQ1wiPkFDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxcIj5BTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFQXCI+QVA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTVwiPkFNPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFcIj5CQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFXCI+Q0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFU1wiPkVTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR09cIj5HTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVFwiPk1UPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5NUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1HXCI+TUc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQVwiPlBBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEJcIj5QQjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBSXCI+UFI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRVwiPlBFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUElcIj5QSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSTlwiPlJOPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5SUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPXCI+Uk88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSUlwiPlJSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQXCI+U1A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9cIj5UTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRGXCI+REY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb24+ICAgICAgICBcbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IFxuICAgICAgICBncmlkQXJlYT1cIkZUXCIgXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgICAgPlxuICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50cmVldW5mZS5jb20uYnIvXCIgXG4gICAgICAgIGFsdD1cIlRyZWV1bmZlIFRlY25vbG9naWFcIlxuICAgICAgICB0ZXh0RGVjb3I9XCJub25lXCJcbiAgICAgICAgPlRyZWV1bmZlIFRlY25vbG9naWEgPC9MaW5rPlxuICAgICAgPC9GbGV4PlxuICAgIDwvR3JpZD5cbiAgICAgIFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9