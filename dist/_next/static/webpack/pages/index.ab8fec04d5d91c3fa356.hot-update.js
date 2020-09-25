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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      estadual = _useState5[0],
      setEstadual = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      municipal = _useState6[0],
      setMunicipal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      importado = _useState7[0],
      setImportado = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      nacional = _useState8[0],
      setNacional = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      UF = _useState9[0],
      setUF = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState10[0],
      setValue = _useState10[1];

  function changeValue(value) {
    setValue(value);
    setError(false);
  }

  function searchTax(_x, _x2) {
    return _searchTax.apply(this, arguments);
  }

  function _searchTax() {
    _searchTax = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(UF, code) {
      var responsetax;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return services.getTAX(UF, code);

            case 3:
              responsetax = _context.sent;
              setEstadual(responsetax.data.impostos.estadual);
              setMunicipal(responsetax.data.impostos.municipal);
              setImportado(responsetax.data.impostos.importadosfederal);
              setNacional(responsetax.data.impostos.nacionalfederal);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _searchTax.apply(this, arguments);
  }

  function startSearch(_x3) {
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
      lineNumber: 117,
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
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 133,
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
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
      lineNumber: 148,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax('DF', item.codigo);
      },
      defaultIsOpen: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      value: "DF",
      width: "75px",
      onChange: function onChange(e) {
        return searchTax(e.currentTarget.value, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 27
      }
    }, municipal, "%"))))));
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "FT",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "C/dbyKbyAmeRcBDTS327mZb/tbA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsImVzdGFkdWFsIiwic2V0RXN0YWR1YWwiLCJtdW5pY2lwYWwiLCJzZXRNdW5pY2lwYWwiLCJpbXBvcnRhZG8iLCJzZXRJbXBvcnRhZG8iLCJuYWNpb25hbCIsInNldE5hY2lvbmFsIiwiVUYiLCJzZXRVRiIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJpbXBvc3RvcyIsImltcG9ydGFkb3NmZWRlcmFsIiwibmFjaW9uYWxmZWRlcmFsIiwiYWxlcnQiLCJtZXNzYWdlIiwic3RhcnRTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiY29uY2F0IiwibmV3bmNtIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJjb2RpZ28iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElB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a0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsbUJBQWUsRUFBQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0EsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLGFBQVMsRUFBQyxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEEsQ0EzTEYsQ0FERjtBQTRNRDs7R0FqU3VCWixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiOGZlYzA0ZDVkOTFjM2ZhMzU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXIvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcywgVEFYUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXN0YWR1YWwsIHNldEVzdGFkdWFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbXVuaWNpcGFsLCBzZXRNdW5pY2lwYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbXBvcnRhZG8sIHNldEltcG9ydGFkb10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25hY2lvbmFsLCBzZXROYWNpb25hbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBVRiwgc2V0VUZdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIHNldEVycm9yKGZhbHNlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVGF4KFVGOnN0cmluZywgY29kZSA6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNldGF4ID0gYXdhaXQgc2VydmljZXMuZ2V0VEFYKFVGLCBjb2RlKVxuICAgICAgc2V0RXN0YWR1YWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5lc3RhZHVhbClcbiAgICAgIHNldE11bmljaXBhbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLm11bmljaXBhbClcbiAgICAgIHNldEltcG9ydGFkbyhyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLmltcG9ydGFkb3NmZWRlcmFsKVxuICAgICAgc2V0TmFjaW9uYWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5uYWNpb25hbGZlZGVyYWwpXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH0gXG4gICAgICAgICAgICAgICAgICAgIHNldE5DTShuZXduY20pOyBcbiAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xuICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5jbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgfSAgIFxufVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgIGFzPVwibWFpblwiXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cImF1dG8gMTAwJSBhdXRvXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cIjI1MHB4IDEwMHB4ICBhdXRvIGF1dG9cIlxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxuICAgICAgICAnLiBCVCAuJ1xuICAgICAgICAnLiBTSSAuJ1xuICAgICAgICAnLiBSQiAuJ1xuICAgICAgICAnRlQgRlQgRlQnXG4gICAgICBcIiBcbiAgICA+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIkJUXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEJ1dHRvbkJhciAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgID57YFNlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo29cbiAgICAgICAgZGEgTm9tZW5jbGF0dXJhIENvbXVtIGRvIE1lcmNvc3VsYH08L1RleHQ+XG4gICAgICA8L0ZsZXg+IFxuICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICBncmlkQXJlYT1cIlNJXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxDb250YWluZXIgaGFzRXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPFNlYXJjaEJhciBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhIGRlc2NyacOnw6NvIG91IG8gY8OzZGlnb1wiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxCdXR0b25TZWFyY2ggb25DbGljaz17KCkgPT4gc3RhcnRTZWFyY2godmFsdWUpfT5QZXNxdWlzYXI8L0J1dHRvblNlYXJjaD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJSQlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxBY2NvcmRpb24gXG4gICAgICAgICAgYWxsb3dUb2dnbGUgXG4gICAgICAgICAgd2lkdGg9XCI5MHZ3XCIgXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3NzBweFwiICAgICAgICAgIFxuICAgICAgICAgID4gXG4gICAgICAgICAgeyBjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00gJiYgbmNtPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheCgnREYnLGl0ZW0uY29kaWdvKX0gZGVmYXVsdElzT3Blbj17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHZoXCJcbiAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NTVhNjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPkFsaXF1b3RhczwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNXB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPkVzdGFkbzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPVwiREZcIiB3aWR0aD1cIjc1cHhcIiBvbkNoYW5nZT17ZSA9PiBzZWFyY2hUYXgoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDXCI+QUM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTFwiPkFMPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVBcIj5BUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFNXCI+QU08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCQVwiPkJBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VcIj5DRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVTXCI+RVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHT1wiPkdPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5NQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1UXCI+TVQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRFwiPk1TPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUdcIj5NRzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBBXCI+UEE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQlwiPlBCPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJcIj5QUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBFXCI+UEU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSVwiPlBJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUkpcIj5SSjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJOXCI+Uk48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSU1wiPlJTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9cIj5STzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJSXCI+UlI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQ1wiPlNDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1BcIj5TUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNFXCI+U0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUT1wiPlRPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREZcIj5ERjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TmFjaW9uYWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYWNpb25hbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+SW1wb3J0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1wb3J0YWRvfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiBcblxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZHVhbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGFkdWFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5NdW5pY2lwYWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdW5pY2lwYWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWNjb3JkaW9uPiAgICAgICAgXG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBcbiAgICAgICAgZ3JpZEFyZWE9XCJGVFwiIFxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICAgID5cbiAgICAgIDxMaW5rIFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudHJlZXVuZmUuY29tLmJyL1wiIFxuICAgICAgICBhbHQ9XCJUcmVldW5mZSBUZWNub2xvZ2lhXCJcbiAgICAgICAgdGV4dERlY29yPVwibm9uZVwiXG4gICAgICAgID5UcmVldW5mZSBUZWNub2xvZ2lhIDwvTGluaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0dyaWQ+XG4gICAgICBcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==