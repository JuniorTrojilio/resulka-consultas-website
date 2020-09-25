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
/* harmony import */ var _components_Container_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Container/styles */ "./components/Container/styles.ts");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/services */ "./services/services.ts");




var _jsxFileName = "E:\\dev\\resulka-consultas-website\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var services = new _services_services__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
              _context.next = 60;
              break;

            case 57:
              _context.prev = 57;
              _context.t0 = _context["catch"](0);
              setError(true);

            case 60:
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
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
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
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, "Pesquisar"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "RB",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 138,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      onClick: function onClick() {
        return alert('clicou');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      pb: 4,
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: "75px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
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
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInN0YXJ0U2VhcmNoIiwiY29kZSIsImN1cnJlbnRseVNlYXJjaCIsIlRpcGVTZWFyY2giLCJ0cE5DTSIsImdldE5DTSIsInJlc3BvbnNlbmNtIiwidG90YWxQYWdlcyIsImkiLCJuZXdyZXNwb25zZW5jbSIsImRhdGFuY20iLCJkYXRhIiwiY29uY2F0IiwibmV3bmNtIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJhbGVydCIsImNvZGlnbyIsImRlc2NyaWNhbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsMERBQUosRUFBakI7QUFNZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBa0IsSUFBbEIsQ0FGRDtBQUFBLE1BRXRCRyxHQUZzQjtBQUFBLE1BRWpCQyxNQUZpQjs7QUFBQSxtQkFHTEosc0RBQVEsQ0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQU9FO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBUUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixFQVVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBV0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsRUFZRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQWFFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLEVBY0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsRUFlRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixFQWdCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsRUFpQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLEVBa0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRixFQW1CRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkYsRUFvQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLEVBcUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRixFQXNCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkYsRUF1QkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJGLEVBd0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRixFQXlCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkYsRUEwQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJGLEVBMkJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRixDQVJGLENBREYsRUF1Q0UsTUFBQyxvREFBRDtBQUNBLGFBQU8sRUFBQyxRQURSO0FBRUEsZ0JBQVUsRUFBQyxZQUZYO0FBR0EsZUFBUyxFQUFDLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZDRixDQVRKLEVBdURFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXZERixDQVpGLENBRDBEO0FBQUEsR0FBbEIsQ0FBeEMsQ0FQSixDQURGLENBdENGLEVBeUhFLE1BQUMsb0RBQUQ7QUFDRSxZQUFRLEVBQUMsSUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsbUJBQWUsRUFBQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0EsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLGFBQVMsRUFBQyxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEEsQ0F6SEYsQ0FERjtBQTBJRDs7R0E3TXVCL0MsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNjk4ZGM2MTZmZDI2ZGFhYmI3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgXG4gIEdyaWQsIFxuICBGbGV4LCBcbiAgVGV4dCxcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25IZWFkZXIsXG4gIEFjY29yZGlvblBhbmVsLFxuICBBY2NvcmRpb25JY29uLCBcbiAgQm94LFxuICBTZWxlY3QsXG4gIEZvcm1Db250cm9sLFxuICBMaW5rLFxuICBEaXZpZGVyXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCBCdXR0b25CYXIsIHsgY3VycmVudGx5U2VhcmNoLCBUaXBlU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25CYXInO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvblNlYXJjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uU2VhcmNoL3N0eWxlcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyL3N0eWxlcydcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIHNldEVycm9yKGZhbHNlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRTZWFyY2goY29kZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkgeyAgICAgICAgICAgIFxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00pe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgMSk7IFxuICAgICAgICAgICAgc2V0TkNNKHJlc3BvbnNlbmNtKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZihyZXNwb25zZW5jbS50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VuY20udG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFuY20gPSByZXNwb25zZW5jbS5kYXRhLmNvbmNhdChuZXdyZXNwb25zZW5jbS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3bmNtID0geyAuLi5yZXNwb25zZW5jbSwgLi4uZGF0YW5jbSB9IFxuICAgICAgICAgICAgICAgICAgICBzZXROQ00obmV3bmNtKTsgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q0VTVChudWxsKTtcbiAgICAgICAgICAgIHNldENGT1AobnVsbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuY20pXG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRVNUKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENFU1QocmVzcG9uc2VjZXN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZXN0LnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNlc3QudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2VzdCA9IGF3YWl0IHNlcnZpY2VzLmdldENFU1QoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNlc3QgPSByZXNwb25zZWNlc3QuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZXN0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZXN0ID0geyAuLi5yZXNwb25zZWNlc3QsIC4uLmRhdGFjZXN0IH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0VTVChuZXdjZXN0KTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRk9QKHJlc3BvbnNlY2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNmb3AudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2ZvcCA9IHJlc3BvbnNlY2ZvcC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNmb3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nmb3AgPSB7IC4uLnJlc3BvbnNlY2ZvcCwgLi4uZGF0YWNmb3AgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRk9QKG5ld2Nmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzZXRFcnJvcih0cnVlKVxuICAgIH0gICBcbn1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIFxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICBhcz1cIm1haW5cIlxuICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJhdXRvIDEwMCUgYXV0b1wiXG4gICAgICB0ZW1wbGF0ZVJvd3M9XCIyNTBweCAxMDBweCAgYXV0byBhdXRvXCJcbiAgICAgIHRlbXBsYXRlQXJlYXM9XCJcbiAgICAgICAgJy4gQlQgLidcbiAgICAgICAgJy4gU0kgLidcbiAgICAgICAgJy4gUkIgLidcbiAgICAgICAgJ0ZUIEZUIEZUJ1xuICAgICAgXCIgXG4gICAgPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJCVFwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxCdXR0b25CYXIgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB3b3JkQnJlYWs9XCJicmVhay13b3JkXCJcbiAgICAgICAgICBtYXhXaWR0aD1cInNtXCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIlxuICAgICAgICA+e2BTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvXG4gICAgICAgIGRhIE5vbWVuY2xhdHVyYSBDb211bSBkbyBNZXJjb3N1bGB9PC9UZXh0PlxuICAgICAgPC9GbGV4PiBcbiAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgZ3JpZEFyZWE9XCJTSVwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGhhc0Vycm9yPXtlcnJvcn0+XG4gICAgICAgIDxTZWFyY2hCYXIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBkZXNjcmnDp8OjbyBvdSBvIGPDs2RpZ29cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8QnV0dG9uU2VhcmNoIG9uQ2xpY2s9eygpID0+IHN0YXJ0U2VhcmNoKHZhbHVlKX0+UGVzcXVpc2FyPC9CdXR0b25TZWFyY2g+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxGbGV4IGdyaWRBcmVhPVwiUkJcIiBmbGV4RGlyPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiPlxuICAgICAgICA8QWNjb3JkaW9uIFxuICAgICAgICAgIGFsbG93VG9nZ2xlIHdpZHRoPVwiOTB2d1wiIFxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIiBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgIG1heFdpZHRoPVwiNzcwcHhcIlxuICAgICAgICAgID4gXG4gICAgICAgICAgeyBjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00gJiYgbmNtPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdjbGljb3UnKX0+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiIFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0uY29kaWdvfTwvYj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9UZXh0PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkljb24vPlxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsIHBiPXs0fSBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHZoXCJcbiAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB3aWR0aD1cIjc1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQ1wiPkFDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxcIj5BTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFQXCI+QVA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTVwiPkFNPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFcIj5CQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFXCI+Q0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFU1wiPkVTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR09cIj5HTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVFwiPk1UPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5NUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1HXCI+TUc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQVwiPlBBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEJcIj5QQjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBSXCI+UFI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRVwiPlBFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUElcIj5QSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSTlwiPlJOPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5SUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPXCI+Uk88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSUlwiPlJSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQXCI+U1A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9cIj5UTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRGXCI+REY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb24+ICAgICAgICBcbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IFxuICAgICAgICBncmlkQXJlYT1cIkZUXCIgXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgICAgPlxuICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50cmVldW5mZS5jb20uYnIvXCIgXG4gICAgICAgIGFsdD1cIlRyZWV1bmZlIFRlY25vbG9naWFcIlxuICAgICAgICB0ZXh0RGVjb3I9XCJub25lXCJcbiAgICAgICAgPlRyZWV1bmZlIFRlY25vbG9naWEgPC9MaW5rPlxuICAgICAgPC9GbGV4PlxuICAgIDwvR3JpZD5cbiAgICAgIFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9