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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      tax = _useState5[0],
      setTAX = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState6[0],
      setValue = _useState6[1];

  function changeValue(value) {
    setValue(value);
    setError(false);
  }

  function searchTax(_x) {
    return _searchTax.apply(this, arguments);
  }

  function _searchTax() {
    _searchTax = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(code) {
      var responsetax;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return services.getTAX('PR', code);

            case 3:
              responsetax = _context.sent;
              setTAX(responsetax.data);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return _searchTax.apply(this, arguments);
  }

  function startSearch(_x2) {
    return _startSearch.apply(this, arguments);
  }

  function _startSearch() {
    _startSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(code) {
      var responsencm, i, newresponsencm, datancm, newncm, responsecest, _i, newresponsecest, datacest, newcest, responsecfop, _i2, newresponsecfop, datacfop, newcfop;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM)) {
                _context2.next = 21;
                break;
              }

              _context2.next = 4;
              return services.getNCM(code, 1);

            case 4:
              responsencm = _context2.sent;
              setNCM(responsencm);

              if (!(responsencm.totalPages > 1)) {
                _context2.next = 18;
                break;
              }

              i = 2;

            case 8:
              if (!(i <= responsencm.totalPages)) {
                _context2.next = 18;
                break;
              }

              _context2.next = 11;
              return services.getNCM(code, i);

            case 11:
              newresponsencm = _context2.sent;
              datancm = responsencm.data.concat(newresponsencm.data);
              newncm = _objectSpread(_objectSpread({}, responsencm), datancm);
              setNCM(newncm);

            case 15:
              i++;
              _context2.next = 8;
              break;

            case 18:
              setCEST(null);
              setCFOP(null);
              console.log(ncm);

            case 21:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCEST)) {
                _context2.next = 38;
                break;
              }

              _context2.next = 24;
              return services.getCEST(code, 1);

            case 24:
              responsecest = _context2.sent;
              setCEST(responsecest);

              if (!(responsecest.totalPages > 1)) {
                _context2.next = 38;
                break;
              }

              _i = 2;

            case 28:
              if (!(_i <= responsecest.totalPages)) {
                _context2.next = 38;
                break;
              }

              _context2.next = 31;
              return services.getCEST(code, _i);

            case 31:
              newresponsecest = _context2.sent;
              datacest = responsecest.data.concat(newresponsecest.data);
              newcest = _objectSpread(_objectSpread({}, responsecest), datacest);
              setCEST(newcest);

            case 35:
              _i++;
              _context2.next = 28;
              break;

            case 38:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCFOP)) {
                _context2.next = 55;
                break;
              }

              _context2.next = 41;
              return services.getCFOP(code, 1);

            case 41:
              responsecfop = _context2.sent;
              setCFOP(responsecfop);

              if (!(responsecfop.totalPages > 1)) {
                _context2.next = 55;
                break;
              }

              _i2 = 2;

            case 45:
              if (!(_i2 <= responsecfop.totalPages)) {
                _context2.next = 55;
                break;
              }

              _context2.next = 48;
              return services.getCFOP(code, _i2);

            case 48:
              newresponsecfop = _context2.sent;
              datacfop = responsecfop.data.concat(newresponsecfop.data);
              newcfop = _objectSpread(_objectSpread({}, responsecfop), datacfop);
              setCFOP(newcfop);

            case 52:
              _i2++;
              _context2.next = 45;
              break;

            case 55:
              _context2.next = 60;
              break;

            case 57:
              _context2.prev = 57;
              _context2.t0 = _context2["catch"](0);
              setError(true);

            case 60:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 57]]);
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
      lineNumber: 109,
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
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
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
      lineNumber: 133,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return alert('clicou');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      pb: 4,
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: "75px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
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
      lineNumber: 230,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "Uy5a41v5bhKFys5CCiy0SLyQ+VI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsInRheCIsInNldFRBWCIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdGFydFNlYXJjaCIsImN1cnJlbnRseVNlYXJjaCIsIlRpcGVTZWFyY2giLCJ0cE5DTSIsImdldE5DTSIsInJlc3BvbnNlbmNtIiwidG90YWxQYWdlcyIsImkiLCJuZXdyZXNwb25zZW5jbSIsImRhdGFuY20iLCJjb25jYXQiLCJuZXduY20iLCJjb25zb2xlIiwibG9nIiwidHBDRVNUIiwiZ2V0Q0VTVCIsInJlc3BvbnNlY2VzdCIsIm5ld3Jlc3BvbnNlY2VzdCIsImRhdGFjZXN0IiwibmV3Y2VzdCIsInRwQ0ZPUCIsImdldENGT1AiLCJyZXNwb25zZWNmb3AiLCJuZXdyZXNwb25zZWNmb3AiLCJkYXRhY2ZvcCIsIm5ld2Nmb3AiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImNvZGlnbyIsImRlc2NyaWNhbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsSUFBSUMsMERBQUosRUFBakI7QUFNZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsS0FBRCxDQURMO0FBQUEsTUFDdEJDLEtBRHNCO0FBQUEsTUFDZkMsUUFEZTs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBa0IsSUFBbEIsQ0FG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QUEsT0FJRSxNQUFDLG9EQUFEO0FBQ0UsZ0JBQVUsRUFBQyxNQURiO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixFQVFFLE1BQUMsc0RBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixFQU1FO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBT0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixFQVNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLEVBVUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFXRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixFQVlFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGLEVBYUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsRUFjRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixFQWVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLEVBZ0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixFQWlCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkYsRUFrQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGLEVBbUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRixFQW9CRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsRUFxQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLEVBc0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRixFQXVCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkYsRUF3QkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLEVBeUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRixFQTBCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkYsRUEyQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGLENBUkYsQ0FERixFQXVDRSxNQUFDLG9EQUFEO0FBQ0EsYUFBTyxFQUFDLFFBRFI7QUFFQSxnQkFBVSxFQUFDLFlBRlg7QUFHQSxlQUFTLEVBQUMsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkNGLENBVEosRUF1REUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkRGLENBWkYsQ0FEMEQ7QUFBQSxHQUFsQixDQUF4QyxDQVBKLENBREYsQ0F0Q0YsRUF5SEUsTUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQXpIRixDQURGO0FBMElEOztHQXZOdUJyRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhiNzM2NzdlOGE4MTUzNWNlZmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXIvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcywgVEFYUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGF4LCBzZXRUQVhdID0gdXNlU3RhdGU8VEFYUHJvcHMgfCBudWxsPihudWxsKSBcblxuICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpe1xuICAgICAgc2V0VmFsdWUodmFsdWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRheChjb2RlIDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2V0YXggPSBhd2FpdCBzZXJ2aWNlcy5nZXRUQVgoJ1BSJywgY29kZSlcbiAgICAgIHNldFRBWChyZXNwb25zZXRheC5kYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VhcmNoKGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHsgICAgICAgICAgICBcbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIDEpOyBcbiAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYocmVzcG9uc2VuY20udG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlbmNtLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhbmNtID0gcmVzcG9uc2VuY20uZGF0YS5jb25jYXQobmV3cmVzcG9uc2VuY20uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld25jbSA9IHsgLi4ucmVzcG9uc2VuY20sIC4uLmRhdGFuY20gfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0TkNNKG5ld25jbSk7IFxuICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmNtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1Ape1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0ZPUChyZXNwb25zZWNmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZm9wLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNmb3AudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNmb3AgPSByZXNwb25zZWNmb3AuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZm9wLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZm9wID0geyAuLi5yZXNwb25zZWNmb3AsIC4uLmRhdGFjZm9wIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0ZPUChuZXdjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICB9ICAgXG59XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgYXM9XCJtYWluXCJcbiAgICAgIHdpZHRoPVwiMTAwdndcIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiYXV0byAxMDAlIGF1dG9cIlxuICAgICAgdGVtcGxhdGVSb3dzPVwiMjUwcHggMTAwcHggIGF1dG8gYXV0b1wiXG4gICAgICB0ZW1wbGF0ZUFyZWFzPVwiXG4gICAgICAgICcuIEJUIC4nXG4gICAgICAgICcuIFNJIC4nXG4gICAgICAgICcuIFJCIC4nXG4gICAgICAgICdGVCBGVCBGVCdcbiAgICAgIFwiIFxuICAgID5cbiAgICAgIDxGbGV4IGdyaWRBcmVhPVwiQlRcIiBmbGV4RGlyPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiPlxuICAgICAgICA8QnV0dG9uQmFyIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgd29yZEJyZWFrPVwiYnJlYWstd29yZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCJzbVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCJcbiAgICAgICAgPntgU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8Ojb1xuICAgICAgICBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWxgfTwvVGV4dD5cbiAgICAgIDwvRmxleD4gXG4gICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgIGdyaWRBcmVhPVwiU0lcIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBoYXNFcnJvcj17ZXJyb3J9PlxuICAgICAgICA8U2VhcmNoQmFyIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGEgZGVzY3Jpw6fDo28gb3UgbyBjw7NkaWdvXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPEJ1dHRvblNlYXJjaCBvbkNsaWNrPXsoKSA9PiBzdGFydFNlYXJjaCh2YWx1ZSl9PlBlc3F1aXNhcjwvQnV0dG9uU2VhcmNoPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIlJCXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEFjY29yZGlvbiBcbiAgICAgICAgICBhbGxvd1RvZ2dsZSB3aWR0aD1cIjkwdndcIiBcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCIgXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjc3MHB4XCJcbiAgICAgICAgICA+IFxuICAgICAgICAgIHsgY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNICYmIG5jbT8uZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBwYWRkaW5nPVwiNXB4XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBvbkNsaWNrPXsoKSA9PiBhbGVydCgnY2xpY291Jyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBwYj17NH0gXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjB2aFwiXG4gICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+RXN0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgd2lkdGg9XCI3NXB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUNcIj5BQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMXCI+QUw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBUFwiPkFQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQU1cIj5BTTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBXCI+QkE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDRVwiPkNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVNcIj5FUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdPXCI+R088L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1BPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVRcIj5NVDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNR1wiPk1HPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFcIj5QQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBCXCI+UEI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQUlwiPlBSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVcIj5QRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBJXCI+UEk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSSlwiPlJKPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk5cIj5STjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJTXCI+UlM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST1wiPlJPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlJcIj5SUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNDXCI+U0M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTUFwiPlNQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0VcIj5TRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRPXCI+VE88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERlwiPkRGPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiXG4gICAgICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWNjb3JkaW9uPiAgICAgICAgXG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBcbiAgICAgICAgZ3JpZEFyZWE9XCJGVFwiIFxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICAgID5cbiAgICAgIDxMaW5rIFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudHJlZXVuZmUuY29tLmJyL1wiIFxuICAgICAgICBhbHQ9XCJUcmVldW5mZSBUZWNub2xvZ2lhXCJcbiAgICAgICAgdGV4dERlY29yPVwibm9uZVwiXG4gICAgICAgID5UcmVldW5mZSBUZWNub2xvZ2lhIDwvTGluaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0dyaWQ+XG4gICAgICBcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==