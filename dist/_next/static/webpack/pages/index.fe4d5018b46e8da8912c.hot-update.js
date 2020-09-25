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
              setTAX(responsetax);
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
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-between",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      width: "75px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }, "Nacional")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    }, "Federal")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 27
      }
    }, tax === null || tax === void 0 ? void 0 : tax.data[0].impostos.estadual)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    }, tax === null || tax === void 0 ? void 0 : tax.data[0].impostos.municipal)))));
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "FT",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsInRheCIsInNldFRBWCIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImFsZXJ0IiwibWVzc2FnZSIsInN0YXJ0U2VhcmNoIiwiY3VycmVudGx5U2VhcmNoIiwiVGlwZVNlYXJjaCIsInRwTkNNIiwiZ2V0TkNNIiwicmVzcG9uc2VuY20iLCJ0b3RhbFBhZ2VzIiwiaSIsIm5ld3Jlc3BvbnNlbmNtIiwiZGF0YW5jbSIsImRhdGEiLCJjb25jYXQiLCJuZXduY20iLCJjb25zb2xlIiwibG9nIiwidHBDRVNUIiwiZ2V0Q0VTVCIsInJlc3BvbnNlY2VzdCIsIm5ld3Jlc3BvbnNlY2VzdCIsImRhdGFjZXN0IiwibmV3Y2VzdCIsInRwQ0ZPUCIsImdldENGT1AiLCJyZXNwb25zZWNmb3AiLCJuZXdyZXNwb25zZWNmb3AiLCJkYXRhY2ZvcCIsIm5ld2Nmb3AiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImNvZGlnbyIsImRlc2NyaWNhbyIsImltcG9zdG9zIiwiZXN0YWR1YWwiLCJtdW5pY2lwYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLElBQUlDLDBEQUFKLEVBQWpCO0FBTWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEtBQUQsQ0FETDtBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BQ2ZDLFFBRGU7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REgsdUJBQ0dBLEdBQUcsQ0FBRXFCLElBQUwsQ0FBVSxDQUFWLEVBQWF1QixRQUFiLENBQXNCQyxRQUR6QixDQU5OLENBdkRGLEVBaUVFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsb0RBQUQ7QUFDTSxnQkFBVSxFQUFDLE1BRGpCO0FBRU0sV0FBSyxFQUFDLFNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQU1NLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHN0MsR0FESCxhQUNHQSxHQURILHVCQUNHQSxHQUFHLENBQUVxQixJQUFMLENBQVUsQ0FBVixFQUFhdUIsUUFBYixDQUFzQkUsU0FEekIsQ0FOTixDQWpFRixDQWRKLENBWkYsQ0FEMEQ7QUFBQSxHQUFsQixDQUF4QyxDQVBKLENBREYsQ0F0Q0YsRUEySkUsTUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQTNKRixDQURGO0FBNEtEOztHQXpQdUJ4RCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlNGQ1MDE4YjQ2ZThkYTg5MTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXIvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcywgVEFYUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdGF4LCBzZXRUQVhdID0gdXNlU3RhdGU8VEFYUHJvcHMgfCBudWxsPihudWxsKSBcblxuICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpe1xuICAgICAgc2V0VmFsdWUodmFsdWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRheChjb2RlIDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2V0YXggPSBhd2FpdCBzZXJ2aWNlcy5nZXRUQVgoJ1BSJywgY29kZSlcbiAgICAgIHNldFRBWChyZXNwb25zZXRheClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH0gXG4gICAgICAgICAgICAgICAgICAgIHNldE5DTShuZXduY20pOyBcbiAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xuICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5jbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgfSAgIFxufVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgIGFzPVwibWFpblwiXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cImF1dG8gMTAwJSBhdXRvXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cIjI1MHB4IDEwMHB4ICBhdXRvIGF1dG9cIlxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxuICAgICAgICAnLiBCVCAuJ1xuICAgICAgICAnLiBTSSAuJ1xuICAgICAgICAnLiBSQiAuJ1xuICAgICAgICAnRlQgRlQgRlQnXG4gICAgICBcIiBcbiAgICA+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIkJUXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEJ1dHRvbkJhciAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgID57YFNlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo29cbiAgICAgICAgZGEgTm9tZW5jbGF0dXJhIENvbXVtIGRvIE1lcmNvc3VsYH08L1RleHQ+XG4gICAgICA8L0ZsZXg+IFxuICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICBncmlkQXJlYT1cIlNJXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxDb250YWluZXIgaGFzRXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPFNlYXJjaEJhciBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhIGRlc2NyacOnw6NvIG91IG8gY8OzZGlnb1wiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxCdXR0b25TZWFyY2ggb25DbGljaz17KCkgPT4gc3RhcnRTZWFyY2godmFsdWUpfT5QZXNxdWlzYXI8L0J1dHRvblNlYXJjaD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJSQlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxBY2NvcmRpb24gXG4gICAgICAgICAgYWxsb3dUb2dnbGUgd2lkdGg9XCI5MHZ3XCIgXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3NzBweFwiXG4gICAgICAgICAgPiBcbiAgICAgICAgICB7IGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSAmJiBuY20/LmRhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gcGFkZGluZz1cIjVweFwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgb25DbGljaz17KCkgPT4gYWxlcnQoJ2NsaWNvdScpfT5cbiAgICAgICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCIgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5jb2RpZ299PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgcGI9ezR9IFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwdmhcIlxuICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmljYW99XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ1NWE2NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+QWxpcXVvdGFzPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+RXN0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3Qgd2lkdGg9XCI3NXB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUNcIj5BQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMXCI+QUw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBUFwiPkFQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQU1cIj5BTTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBXCI+QkE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDRVwiPkNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVNcIj5FUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdPXCI+R088L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1BPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVRcIj5NVDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNR1wiPk1HPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFcIj5QQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBCXCI+UEI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQUlwiPlBSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVcIj5QRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBJXCI+UEk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSSlwiPlJKPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk5cIj5STjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJTXCI+UlM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST1wiPlJPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlJcIj5SUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNDXCI+U0M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTUFwiPlNQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0VcIj5TRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRPXCI+VE88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERlwiPkRGPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+TmFjaW9uYWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5GZWRlcmFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+RXN0YWR1YWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXg/LmRhdGFbMF0uaW1wb3N0b3MuZXN0YWR1YWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPk11bmljaXBhbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RheD8uZGF0YVswXS5pbXBvc3Rvcy5tdW5pY2lwYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FjY29yZGlvbj4gICAgICAgIFxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggXG4gICAgICAgIGdyaWRBcmVhPVwiRlRcIiBcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgICA+XG4gICAgICA8TGluayBcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnRyZWV1bmZlLmNvbS5ici9cIiBcbiAgICAgICAgYWx0PVwiVHJlZXVuZmUgVGVjbm9sb2dpYVwiXG4gICAgICAgIHRleHREZWNvcj1cIm5vbmVcIlxuICAgICAgICA+VHJlZXVuZmUgVGVjbm9sb2dpYSA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9HcmlkPlxuICAgICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=