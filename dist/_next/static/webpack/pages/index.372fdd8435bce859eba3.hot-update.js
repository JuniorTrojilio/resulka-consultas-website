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
    defaultChecked: false,
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
        lineNumber: 166,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax('DF', item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
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
        lineNumber: 201,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
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
      lineNumber: 305,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsImVzdGFkdWFsIiwic2V0RXN0YWR1YWwiLCJtdW5pY2lwYWwiLCJzZXRNdW5pY2lwYWwiLCJpbXBvcnRhZG8iLCJzZXRJbXBvcnRhZG8iLCJuYWNpb25hbCIsInNldE5hY2lvbmFsIiwiVUYiLCJzZXRVRiIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJpbXBvc3RvcyIsImltcG9ydGFkb3NmZWRlcmFsIiwibmFjaW9uYWxmZWRlcmFsIiwiYWxlcnQiLCJtZXNzYWdlIiwic3RhcnRTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiY29uY2F0IiwibmV3bmNtIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJjb2RpZ28iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElB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VEYsRUFVRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLEVBWUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsRUFhRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBZUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsRUFnQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLEVBaUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQWtCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsRUFtQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLEVBb0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixFQXFCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkYsRUFzQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGLEVBdUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FB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QkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQTVMRixDQURGO0FBNk1EOztHQWxTdUJaLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzcyZmRkODQzNWJjZTg1OWViYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFxuICBHcmlkLCBcbiAgRmxleCwgXG4gIFRleHQsXG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uSGVhZGVyLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQWNjb3JkaW9uSWNvbiwgXG4gIEJveCxcbiAgU2VsZWN0LFxuICBGb3JtQ29udHJvbCxcbiAgTGluayxcbiAgRGl2aWRlclxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5pbXBvcnQgQnV0dG9uQmFyLCB7IGN1cnJlbnRseVNlYXJjaCwgVGlwZVNlYXJjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uQmFyJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyL3N0eWxlcyc7XG5pbXBvcnQgeyBCdXR0b25TZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvblNlYXJjaC9zdHlsZXMnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lci9zdHlsZXMnXG5pbXBvcnQgU2VydmljZXMsIHsgQ0VTVFByb3BzLCBDRk9QUHJvcHMsIE5DTVByb3BzLCBUQVhQcm9wcyB9IGZyb20gJy4uL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5jb25zdCBzZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcztcblxuaW50ZXJmYWNlIFByb3Bze1xuICBoYXNFcnJvcj86Ym9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuY20sIHNldE5DTV0gPSB1c2VTdGF0ZTxOQ01Qcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY2VzdCwgc2V0Q0VTVF0gPSB1c2VTdGF0ZTxDRVNUUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nmb3AsIHNldENGT1BdID0gdXNlU3RhdGU8Q0ZPUFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlc3RhZHVhbCwgc2V0RXN0YWR1YWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttdW5pY2lwYWwsIHNldE11bmljaXBhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltcG9ydGFkbywgc2V0SW1wb3J0YWRvXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbmFjaW9uYWwsIHNldE5hY2lvbmFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIFVGLCBzZXRVRl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIHNldFZhbHVlKHZhbHVlKVxuICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hUYXgoVUY6c3RyaW5nLCBjb2RlIDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2V0YXggPSBhd2FpdCBzZXJ2aWNlcy5nZXRUQVgoVUYsIGNvZGUpXG4gICAgICBzZXRFc3RhZHVhbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLmVzdGFkdWFsKVxuICAgICAgc2V0TXVuaWNpcGFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MubXVuaWNpcGFsKVxuICAgICAgc2V0SW1wb3J0YWRvKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MuaW1wb3J0YWRvc2ZlZGVyYWwpXG4gICAgICBzZXROYWNpb25hbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLm5hY2lvbmFsZmVkZXJhbClcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VhcmNoKGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHsgICAgICAgICAgICBcbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIDEpOyBcbiAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYocmVzcG9uc2VuY20udG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlbmNtLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhbmNtID0gcmVzcG9uc2VuY20uZGF0YS5jb25jYXQobmV3cmVzcG9uc2VuY20uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld25jbSA9IHsgLi4ucmVzcG9uc2VuY20sIC4uLmRhdGFuY20gfSBcbiAgICAgICAgICAgICAgICAgICAgc2V0TkNNKG5ld25jbSk7IFxuICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmNtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1Ape1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0ZPUChyZXNwb25zZWNmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZm9wLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNmb3AudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNmb3AgPSByZXNwb25zZWNmb3AuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZm9wLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZm9wID0geyAuLi5yZXNwb25zZWNmb3AsIC4uLmRhdGFjZm9wIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0ZPUChuZXdjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICB9ICAgXG59XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgYXM9XCJtYWluXCJcbiAgICAgIHdpZHRoPVwiMTAwdndcIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiYXV0byAxMDAlIGF1dG9cIlxuICAgICAgdGVtcGxhdGVSb3dzPVwiMjUwcHggMTAwcHggIGF1dG8gYXV0b1wiXG4gICAgICB0ZW1wbGF0ZUFyZWFzPVwiXG4gICAgICAgICcuIEJUIC4nXG4gICAgICAgICcuIFNJIC4nXG4gICAgICAgICcuIFJCIC4nXG4gICAgICAgICdGVCBGVCBGVCdcbiAgICAgIFwiIFxuICAgID5cbiAgICAgIDxGbGV4IGdyaWRBcmVhPVwiQlRcIiBmbGV4RGlyPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiPlxuICAgICAgICA8QnV0dG9uQmFyIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgd29yZEJyZWFrPVwiYnJlYWstd29yZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCJzbVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCJcbiAgICAgICAgPntgU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8Ojb1xuICAgICAgICBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWxgfTwvVGV4dD5cbiAgICAgIDwvRmxleD4gXG4gICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgIGdyaWRBcmVhPVwiU0lcIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBoYXNFcnJvcj17ZXJyb3J9PlxuICAgICAgICA8U2VhcmNoQmFyIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGEgZGVzY3Jpw6fDo28gb3UgbyBjw7NkaWdvXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPEJ1dHRvblNlYXJjaCBvbkNsaWNrPXsoKSA9PiBzdGFydFNlYXJjaCh2YWx1ZSl9PlBlc3F1aXNhcjwvQnV0dG9uU2VhcmNoPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIlJCXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEFjY29yZGlvbiBcbiAgICAgICAgICBhbGxvd1RvZ2dsZSBcbiAgICAgICAgICB3aWR0aD1cIjkwdndcIiBcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCIgXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjc3MHB4XCIgXG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2ZhbHNlfSAgICAgICAgXG4gICAgICAgICAgPiBcbiAgICAgICAgICB7IGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSAmJiBuY20/LmRhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gcGFkZGluZz1cIjVweFwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgb25DbGljaz17KCkgPT4gc2VhcmNoVGF4KCdERicsaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCIgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5jb2RpZ299PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjB2aFwiXG4gICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjNDU1YTY0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5BbGlxdW90YXM8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiB3b3JkQnJlYWs9XCJicmVhay13b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT1cIkRGXCIgd2lkdGg9XCI3NXB4XCIgb25DaGFuZ2U9e2UgPT4gc2VhcmNoVGF4KGUuY3VycmVudFRhcmdldC52YWx1ZSwgaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQ1wiPkFDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxcIj5BTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFQXCI+QVA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTVwiPkFNPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFcIj5CQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFXCI+Q0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFU1wiPkVTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR09cIj5HTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVFwiPk1UPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5NUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1HXCI+TUc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQVwiPlBBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEJcIj5QQjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBSXCI+UFI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRVwiPlBFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUElcIj5QSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSTlwiPlJOPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5SUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPXCI+Uk88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSUlwiPlJSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQXCI+U1A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9cIj5UTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRGXCI+REY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5hY2lvbmFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFjaW9uYWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkltcG9ydGFkbzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltcG9ydGFkb30lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gXG5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+RXN0YWR1YWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RhZHVhbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+TXVuaWNpcGFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVuaWNpcGFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FjY29yZGlvbj4gICAgICAgIFxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggXG4gICAgICAgIGdyaWRBcmVhPVwiRlRcIiBcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgICA+XG4gICAgICA8TGluayBcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnRyZWV1bmZlLmNvbS5ici9cIiBcbiAgICAgICAgYWx0PVwiVHJlZXVuZmUgVGVjbm9sb2dpYVwiXG4gICAgICAgIHRleHREZWNvcj1cIm5vbmVcIlxuICAgICAgICA+VHJlZXVuZmUgVGVjbm9sb2dpYSA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9HcmlkPlxuICAgICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=