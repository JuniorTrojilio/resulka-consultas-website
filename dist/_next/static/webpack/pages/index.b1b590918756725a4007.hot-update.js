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
                _context2.next = 22;
                break;
              }

              _context2.next = 4;
              return services.getNCM(code, 1);

            case 4:
              responsencm = _context2.sent;
              setNCM(responsencm);

              if (!(responsencm.totalPages > 1)) {
                _context2.next = 19;
                break;
              }

              i = 2;

            case 8:
              if (!(i <= responsencm.totalPages)) {
                _context2.next = 19;
                break;
              }

              _context2.next = 11;
              return services.getNCM(code, i);

            case 11:
              newresponsencm = _context2.sent;
              datancm = responsencm.data.concat(newresponsencm.data);
              newncm = _objectSpread(_objectSpread({}, responsencm), datancm);
              searchTax('DF', newncm.data[0].codigo);
              setNCM(newncm);

            case 16:
              i++;
              _context2.next = 8;
              break;

            case 19:
              setCEST(null);
              setCFOP(null);
              console.log(ncm);

            case 22:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCEST)) {
                _context2.next = 39;
                break;
              }

              _context2.next = 25;
              return services.getCEST(code, 1);

            case 25:
              responsecest = _context2.sent;
              setCEST(responsecest);

              if (!(responsecest.totalPages > 1)) {
                _context2.next = 39;
                break;
              }

              _i = 2;

            case 29:
              if (!(_i <= responsecest.totalPages)) {
                _context2.next = 39;
                break;
              }

              _context2.next = 32;
              return services.getCEST(code, _i);

            case 32:
              newresponsecest = _context2.sent;
              datacest = responsecest.data.concat(newresponsecest.data);
              newcest = _objectSpread(_objectSpread({}, responsecest), datacest);
              setCEST(newcest);

            case 36:
              _i++;
              _context2.next = 29;
              break;

            case 39:
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCFOP)) {
                _context2.next = 56;
                break;
              }

              _context2.next = 42;
              return services.getCFOP(code, 1);

            case 42:
              responsecfop = _context2.sent;
              setCFOP(responsecfop);

              if (!(responsecfop.totalPages > 1)) {
                _context2.next = 56;
                break;
              }

              _i2 = 2;

            case 46:
              if (!(_i2 <= responsecfop.totalPages)) {
                _context2.next = 56;
                break;
              }

              _context2.next = 49;
              return services.getCFOP(code, _i2);

            case 49:
              newresponsecfop = _context2.sent;
              datacfop = responsecfop.data.concat(newresponsecfop.data);
              newcfop = _objectSpread(_objectSpread({}, responsecfop), datacfop);
              setCFOP(newcfop);

            case 53:
              _i2++;
              _context2.next = 46;
              break;

            case 56:
              _context2.next = 62;
              break;

            case 58:
              _context2.prev = 58;
              _context2.t0 = _context2["catch"](0);
              setError(true);
              alert(_context2.t0.message);

            case 62:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 58]]);
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
      lineNumber: 118,
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
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 134,
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
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 156,
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
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibmNtIiwic2V0TkNNIiwiY2VzdCIsInNldENFU1QiLCJjZm9wIiwic2V0Q0ZPUCIsImVzdGFkdWFsIiwic2V0RXN0YWR1YWwiLCJtdW5pY2lwYWwiLCJzZXRNdW5pY2lwYWwiLCJpbXBvcnRhZG8iLCJzZXRJbXBvcnRhZG8iLCJuYWNpb25hbCIsInNldE5hY2lvbmFsIiwiVUYiLCJzZXRVRiIsInZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJpbXBvc3RvcyIsImltcG9ydGFkb3NmZWRlcmFsIiwibmFjaW9uYWxmZWRlcmFsIiwiYWxlcnQiLCJtZXNzYWdlIiwic3RhcnRTZWFyY2giLCJjdXJyZW50bHlTZWFyY2giLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiY29uY2F0IiwibmV3bmNtIiwiY29kaWdvIiwiY29uc29sZSIsImxvZyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElB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QUEsR0FBbEIsQ0FBeEMsQ0FSSixDQURGLENBdENGLEVBMkxFLE1BQUMsb0RBQUQ7QUFDRSxZQUFRLEVBQUMsSUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsbUJBQWUsRUFBQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0EsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLGFBQVMsRUFBQyxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEEsQ0EzTEYsQ0FERjtBQTRNRDs7R0FsU3VCWixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxYjU5MDkxODc1NjcyNWE0MDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXIvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcywgVEFYUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXN0YWR1YWwsIHNldEVzdGFkdWFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbXVuaWNpcGFsLCBzZXRNdW5pY2lwYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbXBvcnRhZG8sIHNldEltcG9ydGFkb10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25hY2lvbmFsLCBzZXROYWNpb25hbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBVRiwgc2V0VUZdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSlcbiAgICAgIHNldEVycm9yKGZhbHNlKVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoVGF4KFVGOnN0cmluZywgY29kZSA6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNldGF4ID0gYXdhaXQgc2VydmljZXMuZ2V0VEFYKFVGLCBjb2RlKVxuICAgICAgc2V0RXN0YWR1YWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5lc3RhZHVhbClcbiAgICAgIHNldE11bmljaXBhbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLm11bmljaXBhbClcbiAgICAgIHNldEltcG9ydGFkbyhyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLmltcG9ydGFkb3NmZWRlcmFsKVxuICAgICAgc2V0TmFjaW9uYWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5uYWNpb25hbGZlZGVyYWwpXG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH1cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGF4KCdERicsIG5ld25jbS5kYXRhWzBdLmNvZGlnbykgIFxuICAgICAgICAgICAgICAgICAgICBzZXROQ00obmV3bmNtKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cobmNtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1Ape1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0ZPUChyZXNwb25zZWNmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZm9wLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNmb3AudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNmb3AgPSByZXNwb25zZWNmb3AuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZm9wLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZm9wID0geyAuLi5yZXNwb25zZWNmb3AsIC4uLmRhdGFjZm9wIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0ZPUChuZXdjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSlcbiAgICB9ICAgXG59XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgYXM9XCJtYWluXCJcbiAgICAgIHdpZHRoPVwiMTAwdndcIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgdGVtcGxhdGVDb2x1bW5zPVwiYXV0byAxMDAlIGF1dG9cIlxuICAgICAgdGVtcGxhdGVSb3dzPVwiMjUwcHggMTAwcHggIGF1dG8gYXV0b1wiXG4gICAgICB0ZW1wbGF0ZUFyZWFzPVwiXG4gICAgICAgICcuIEJUIC4nXG4gICAgICAgICcuIFNJIC4nXG4gICAgICAgICcuIFJCIC4nXG4gICAgICAgICdGVCBGVCBGVCdcbiAgICAgIFwiIFxuICAgID5cbiAgICAgIDxGbGV4IGdyaWRBcmVhPVwiQlRcIiBmbGV4RGlyPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiPlxuICAgICAgICA8QnV0dG9uQmFyIC8+XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgd29yZEJyZWFrPVwiYnJlYWstd29yZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCJzbVwiXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCJcbiAgICAgICAgPntgU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8Ojb1xuICAgICAgICBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWxgfTwvVGV4dD5cbiAgICAgIDwvRmxleD4gXG4gICAgICA8Rm9ybUNvbnRyb2wgXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgIGdyaWRBcmVhPVwiU0lcIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBoYXNFcnJvcj17ZXJyb3J9PlxuICAgICAgICA8U2VhcmNoQmFyIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGEgZGVzY3Jpw6fDo28gb3UgbyBjw7NkaWdvXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VWYWx1ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgPEJ1dHRvblNlYXJjaCBvbkNsaWNrPXsoKSA9PiBzdGFydFNlYXJjaCh2YWx1ZSl9PlBlc3F1aXNhcjwvQnV0dG9uU2VhcmNoPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIlJCXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEFjY29yZGlvbiBcbiAgICAgICAgICBhbGxvd1RvZ2dsZSBcbiAgICAgICAgICB3aWR0aD1cIjkwdndcIiBcbiAgICAgICAgICBtYXJnaW5Ub3A9XCI1MHB4XCIgXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcbiAgICAgICAgICBtYXhXaWR0aD1cIjc3MHB4XCIgICAgICAgIFxuICAgICAgICAgID4gXG4gICAgICAgICAgeyBjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00gJiYgbmNtPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheCgnREYnLGl0ZW0uY29kaWdvKX0+XG4gICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiIFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0uY29kaWdvfTwvYj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9UZXh0PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkljb24vPlxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwdmhcIlxuICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmljYW99XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ1NWE2NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+QWxpcXVvdGFzPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgd29yZEJyZWFrPVwiYnJlYWstd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+RXN0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9XCJERlwiIHdpZHRoPVwiNzVweFwiIG9uQ2hhbmdlPXtlID0+IHNlYXJjaFRheChlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW0uY29kaWdvKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUNcIj5BQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMXCI+QUw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBUFwiPkFQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQU1cIj5BTTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBXCI+QkE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDRVwiPkNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVNcIj5FUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdPXCI+R088L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1BPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVRcIj5NVDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNR1wiPk1HPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFcIj5QQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBCXCI+UEI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQUlwiPlBSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVcIj5QRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBJXCI+UEk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSSlwiPlJKPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk5cIj5STjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJTXCI+UlM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST1wiPlJPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlJcIj5SUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNDXCI+U0M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTUFwiPlNQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0VcIj5TRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRPXCI+VE88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERlwiPkRGPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5OYWNpb25hbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hY2lvbmFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5JbXBvcnRhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbXBvcnRhZG99JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+IFxuXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkVzdGFkdWFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXN0YWR1YWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPk11bmljaXBhbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge211bmljaXBhbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb24+ICAgICAgICBcbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IFxuICAgICAgICBncmlkQXJlYT1cIkZUXCIgXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgICAgPlxuICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50cmVldW5mZS5jb20uYnIvXCIgXG4gICAgICAgIGFsdD1cIlRyZWV1bmZlIFRlY25vbG9naWFcIlxuICAgICAgICB0ZXh0RGVjb3I9XCJub25lXCJcbiAgICAgICAgPlRyZWV1bmZlIFRlY25vbG9naWEgPC9MaW5rPlxuICAgICAgPC9GbGV4PlxuICAgIDwvR3JpZD5cbiAgICAgIFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9