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
/* harmony import */ var _components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ButtonBar/styles */ "./components/ButtonBar/styles.ts");
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      errorMsg = _useState2[0],
      setErrorMsg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      ncm = _useState3[0],
      setNCM = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cest = _useState4[0],
      setCEST = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      cfop = _useState5[0],
      setCFOP = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      estadual = _useState6[0],
      setEstadual = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      municipal = _useState7[0],
      setMunicipal = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      importado = _useState8[0],
      setImportado = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      nacional = _useState9[0],
      setNacional = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('DF'),
      UF = _useState10[0],
      setUF = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      value = _useState11[0],
      setValue = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      text = _useState12[0],
      setText = _useState12[1];

  var TipeSearch;

  (function (TipeSearch) {
    TipeSearch[TipeSearch["tpNCM"] = 1] = "tpNCM";
    TipeSearch[TipeSearch["tpCFOP"] = 2] = "tpCFOP";
    TipeSearch[TipeSearch["tpCEST"] = 3] = "tpCEST";
  })(TipeSearch || (TipeSearch = {}));

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(TipeSearch.tpNCM),
      tpSearch = _useState13[0],
      setTpSearch = _useState13[1];

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

  function changeValue(value) {
    setCEST(null);
    setCFOP(null);
    setNCM(null);
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
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

            case 12:
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

              if (!(tpSearch === TipeSearch.tpNCM)) {
                _context2.next = 21;
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

            case 21:
              if (!(tpSearch === TipeSearch.tpCEST)) {
                _context2.next = 40;
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
              setNCM(null);
              setCFOP(null);

            case 40:
              if (!(tpSearch === TipeSearch.tpCFOP)) {
                _context2.next = 59;
                break;
              }

              _context2.next = 43;
              return services.getCFOP(code, 1);

            case 43:
              responsecfop = _context2.sent;
              setCFOP(responsecfop);

              if (!(responsecfop.totalPages > 1)) {
                _context2.next = 57;
                break;
              }

              _i2 = 2;

            case 47:
              if (!(_i2 <= responsecfop.totalPages)) {
                _context2.next = 57;
                break;
              }

              _context2.next = 50;
              return services.getCFOP(code, _i2);

            case 50:
              newresponsecfop = _context2.sent;
              datacfop = responsecfop.data.concat(newresponsecfop.data);
              newcfop = _objectSpread(_objectSpread({}, responsecfop), datacfop);
              setCFOP(newcfop);

            case 54:
              _i2++;
              _context2.next = 47;
              break;

            case 57:
              setNCM(null);
              setCEST(null);

            case 59:
              _context2.next = 65;
              break;

            case 61:
              _context2.prev = 61;
              _context2.t0 = _context2["catch"](0);
              setError(true);
              setErrorMsg(_context2.t0.message);

            case 65:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 61]]);
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
      lineNumber: 155,
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
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["BoxButton"], {
    buttonActive: tpSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleNCM();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleCEST();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleCFOP();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, "CEST")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    wordBreak: "break-word",
    maxWidth: "sm",
    textAlign: "center",
    marginTop: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, text)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    display: "flex",
    gridArea: "SI",
    justifyContent: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 189,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 196,
      columnNumber: 7
    }
  }, error && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    display: "flex",
    flexDir: "row",
    status: "error",
    alignSelf: "center",
    width: "40vw",
    justifyContent: "space-between",
    borderRadius: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], {
    mr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, errorMsg)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["CloseButton"], {
    right: "8px",
    top: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    allowToggle: true,
    width: "90vw",
    marginTop: "50px",
    backgroundColor: "white",
    borderRadius: "md",
    maxWidth: "770px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, tpSearch === TipeSearch.tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 23
      }
    }, "Estado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      value: 'DF',
      width: "75px",
      onChange: function onChange(e) {
        return searchTax(e.currentTarget.value, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 27
      }
    }, municipal, "%"))))));
  })), currentlySearch === TipeSearch.tpCEST && (cest === null || cest === void 0 ? void 0 : cest.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 21
      }
    }, item.cest))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o CEST: "), item.descricao_cest), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 15
      }
    }, "NCM: "), item.codigo), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 15
      }
    }, "Segmento: "), item.segmento), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 15
      }
    }, "Vers\xE3o: "), item.versao)));
  })), currentlySearch === TipeSearch.tpCFOP && (cfop === null || cfop === void 0 ? void 0 : cfop.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 15
      }
    }, "Aplica\xE7\xE3o: "), item.aplicacao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 15
      }
    }, "Categoria: "), item.categoria), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 15
      }
    }, "Tipo: "), item.tipo)));
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    gridArea: "FT",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "TIefyCEWtqitEY9U1MvUU9VJkk4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJlc3RhZHVhbCIsInNldEVzdGFkdWFsIiwibXVuaWNpcGFsIiwic2V0TXVuaWNpcGFsIiwiaW1wb3J0YWRvIiwic2V0SW1wb3J0YWRvIiwibmFjaW9uYWwiLCJzZXROYWNpb25hbCIsIlVGIiwic2V0VUYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidGV4dCIsInNldFRleHQiLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJ0cFNlYXJjaCIsInNldFRwU2VhcmNoIiwiaGFuZGxlTkNNIiwiaGFuZGxlQ0VTVCIsInRwQ0VTVCIsImhhbmRsZUNGT1AiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJpbXBvc3RvcyIsImltcG9ydGFkb3NmZWRlcmFsIiwibmFjaW9uYWxmZWRlcmFsIiwic3RhcnRTZWFyY2giLCJnZXROQ00iLCJyZXNwb25zZW5jbSIsInRvdGFsUGFnZXMiLCJpIiwibmV3cmVzcG9uc2VuY20iLCJkYXRhbmNtIiwiY29uY2F0IiwibmV3bmNtIiwiY29kaWdvIiwiZ2V0Q0VTVCIsInJlc3BvbnNlY2VzdCIsIm5ld3Jlc3BvbnNlY2VzdCIsImRhdGFjZXN0IiwibmV3Y2VzdCIsInRwQ0ZPUCIsImdldENGT1AiLCJyZXNwb25zZWNmb3AiLCJuZXdyZXNwb25zZWNmb3AiLCJkYXRhY2ZvcCIsIm5ld2Nmb3AiLCJtZXNzYWdlIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudGx5U2VhcmNoIiwiZGVzY3JpY2FvX2Nl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LElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLEVBU0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFVRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLEVBWUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsRUFhRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBZUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsRUFnQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLEVBaUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQWtCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsRUFtQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLEVBb0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixFQXFCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFy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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBQ2NELElBQUksQ0FBQ1MsSUFEbkIsQ0FqQkEsQ0FaRixDQUR5RDtBQUFBLEdBQW5CLENBQXpDLENBeExELENBakJGLENBekNGLEVBd1JFLE1BQUMsb0RBQUQ7QUFDRSxZQUFRLEVBQUMsSUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsbUJBQWUsRUFBQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0EsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLGFBQVMsRUFBQyxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEEsQ0F4UkYsQ0FERjtBQXlTRDs7R0FwYXVCN0UsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iODZlNTlmYTlmYzJjNTE3MTU5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXIsXG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEFsZXJ0VGl0bGUsXG4gIENsb3NlQnV0dG9uXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCB7IEJ1dHRvbkJhciwgQm94QnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25CYXIvc3R5bGVzJztcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyL3N0eWxlcyc7XG5pbXBvcnQgeyBCdXR0b25TZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvblNlYXJjaC9zdHlsZXMnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhaW5lci9zdHlsZXMnXG5pbXBvcnQgU2VydmljZXMsIHsgQ0VTVFByb3BzLCBDRk9QUHJvcHMsIE5DTVByb3BzLCBUQVhQcm9wcyB9IGZyb20gJy4uL3NlcnZpY2VzL3NlcnZpY2VzJ1xuXG5jb25zdCBzZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtuY20sIHNldE5DTV0gPSB1c2VTdGF0ZTxOQ01Qcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY2VzdCwgc2V0Q0VTVF0gPSB1c2VTdGF0ZTxDRVNUUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nmb3AsIHNldENGT1BdID0gdXNlU3RhdGU8Q0ZPUFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlc3RhZHVhbCwgc2V0RXN0YWR1YWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFttdW5pY2lwYWwsIHNldE11bmljaXBhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltcG9ydGFkbywgc2V0SW1wb3J0YWRvXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbmFjaW9uYWwsIHNldE5hY2lvbmFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbIFVGLCBzZXRVRl0gPSB1c2VTdGF0ZSgnREYnKTtcbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTsgIFxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICBlbnVtIFRpcGVTZWFyY2gge1xuICAgIHRwTkNNID0gMSxcbiAgICB0cENGT1AgPSAyLFxuICAgIHRwQ0VTVCA9IDNcbiAgfVxuXG4gIGNvbnN0IFt0cFNlYXJjaCwgc2V0VHBTZWFyY2hdID0gdXNlU3RhdGU8VGlwZVNlYXJjaD4oVGlwZVNlYXJjaC50cE5DTSlcblxuICBcblxuICBpbnRlcmZhY2UgUHJvcHN7XG4gICAgICBidXR0b25BY3RpdmU/OiBUaXBlU2VhcmNoO1xuICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOQ00oKXtcbiAgICAgICAgc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cE5DTSlcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWwuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ0VTVCgpe1xuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVClcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEVzcGVjaWZpY2Fkb3IgZGEgU3Vic3RpcnVpw6fDo28gVHJpYnV0w6FyaWEuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ0ZPUCgpe1xuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVClcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEZpc2NhbCBkZSBPcGVyYcOnw7VlcyBlIFByZXN0YcOnw7VlcyBkYXMgZW50cmFkYXMgZSBzYcOtZGFzIGRlIG1lcmNhZG9yaWFzLicpO1xuICAgIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIHNldENFU1QobnVsbClcbiAgICAgIHNldENGT1AobnVsbClcbiAgICAgIHNldE5DTShudWxsKVxuICAgICAgc2V0VmFsdWUodmFsdWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRheChVRjpzdHJpbmcsIGNvZGUgOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZXRheCA9IGF3YWl0IHNlcnZpY2VzLmdldFRBWChVRiwgY29kZSlcbiAgICAgIHNldEVzdGFkdWFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MuZXN0YWR1YWwpXG4gICAgICBzZXRNdW5pY2lwYWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5tdW5pY2lwYWwpXG4gICAgICBzZXRJbXBvcnRhZG8ocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5pbXBvcnRhZG9zZmVkZXJhbClcbiAgICAgIHNldE5hY2lvbmFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MubmFjaW9uYWxmZWRlcmFsKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VhcmNoKGNvZGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD57XG4gICAgdHJ5IHsgICAgICAgICAgICBcbiAgICAgICAgaWYodHBTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00pe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgMSk7IFxuICAgICAgICAgICAgc2V0TkNNKHJlc3BvbnNlbmNtKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZihyZXNwb25zZW5jbS50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VuY20udG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFuY20gPSByZXNwb25zZW5jbS5kYXRhLmNvbmNhdChuZXdyZXNwb25zZW5jbS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3bmNtID0geyAuLi5yZXNwb25zZW5jbSwgLi4uZGF0YW5jbSB9XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFRheCgnREYnLCBuZXduY20uZGF0YVswXS5jb2RpZ28pICBcbiAgICAgICAgICAgICAgICAgICAgc2V0TkNNKG5ld25jbSk7ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpO1xuICAgICAgICAgICAgc2V0Q0ZPUChudWxsKTsgICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldE5DTShudWxsKTtcbiAgICAgICAgICAgIHNldENGT1AobnVsbCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodHBTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRk9QKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgMSlcbiAgICAgICAgICAgIHNldENGT1AocmVzcG9uc2VjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZm9wLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZm9wID0gcmVzcG9uc2VjZm9wLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2ZvcC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2ZvcCA9IHsgLi4ucmVzcG9uc2VjZm9wLCAuLi5kYXRhY2ZvcCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENGT1AobmV3Y2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldE5DTShudWxsKTtcbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7IFxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgXG4gICAgfSAgIFxufVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgIGFzPVwibWFpblwiXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cImF1dG8gMTAwJSBhdXRvXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cIjI1MHB4IDEwMHB4ICBhdXRvIGF1dG9cIlxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxuICAgICAgICAnLiBCVCAuJ1xuICAgICAgICAnLiBTSSAuJ1xuICAgICAgICAnLiBSQiAuJ1xuICAgICAgICAnRlQgRlQgRlQnXG4gICAgICBcIiBcbiAgICA+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIkJUXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgIDxCb3hCdXR0b24gYnV0dG9uQWN0aXZlPXt0cFNlYXJjaH0+XG4gICAgICAgICAgICA8QnV0dG9uQmFyIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5DTSgpfT5OQ008L0J1dHRvbkJhcj5cbiAgICAgICAgICAgIDxCdXR0b25CYXIgb25DbGljaz17KCkgPT4gaGFuZGxlQ0VTVCgpfT5DRk9QPC9CdXR0b25CYXI+XG4gICAgICAgICAgICA8QnV0dG9uQmFyIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNGT1AoKX0+Q0VTVDwvQnV0dG9uQmFyPiAgICBcbiAgICAgICAgPC9Cb3hCdXR0b24+ICAgIFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgID57dGV4dH08L1RleHQ+XG4gICAgICA8L0ZsZXg+IFxuICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICBncmlkQXJlYT1cIlNJXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxDb250YWluZXIgaGFzRXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPFNlYXJjaEJhciBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhIGRlc2NyacOnw6NvIG91IG8gY8OzZGlnb1wiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxCdXR0b25TZWFyY2ggb25DbGljaz17KCkgPT4gc3RhcnRTZWFyY2godmFsdWUpfT5QZXNxdWlzYXI8L0J1dHRvblNlYXJjaD5cbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgICBcbiAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgXG4gICAgICA8RmxleCBncmlkQXJlYT1cIlJCXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEFsZXJ0IFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgZmxleERpcj1cInJvd1wiIFxuICAgICAgICAgIHN0YXR1cz1cImVycm9yXCIgXG4gICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCIgXG4gICAgICAgICAgd2lkdGg9XCI0MHZ3XCIgXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJzbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgPEFsZXJ0VGl0bGUgbXI9ezJ9PntlcnJvck1zZ308L0FsZXJ0VGl0bGU+XG4gICAgICAgICAgICA8L0JveD4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiAgcmlnaHQ9XCI4cHhcIiB0b3A9XCI4cHhcIiAvPlxuICAgICAgICA8L0FsZXJ0Pil9XG4gICAgICAgIDxBY2NvcmRpb24gXG4gICAgICAgICAgYWxsb3dUb2dnbGUgXG4gICAgICAgICAgd2lkdGg9XCI5MHZ3XCIgXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3NzBweFwiICAgICAgICBcbiAgICAgICAgICA+IFxuICAgICAgICAgIHsgdHBTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBOQ00gJiYgbmNtPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheChVRixpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI2MHZoXCJcbiAgICAgICAgICAgICAgICA+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM0NTVhNjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPkFsaXF1b3RhczwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJyb3dcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPVwiNXB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPkVzdGFkbzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXsnREYnfSB3aWR0aD1cIjc1cHhcIiBvbkNoYW5nZT17ZSA9PiBzZWFyY2hUYXgoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFDXCI+QUM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTFwiPkFMPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVBcIj5BUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFNXCI+QU08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCQVwiPkJBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0VcIj5DRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVTXCI+RVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHT1wiPkdPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5NQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1UXCI+TVQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRFwiPk1TPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUdcIj5NRzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBBXCI+UEE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQlwiPlBCPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUFJcIj5QUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBFXCI+UEU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQSVwiPlBJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUkpcIj5SSjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJOXCI+Uk48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSU1wiPlJTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk9cIj5STzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJSXCI+UlI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTQ1wiPlNDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU1BcIj5TUDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNFXCI+U0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUT1wiPlRPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREZcIj5ERjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TmFjaW9uYWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYWNpb25hbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+SW1wb3J0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW1wb3J0YWRvfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiBcblxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZHVhbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VzdGFkdWFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5NdW5pY2lwYWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttdW5pY2lwYWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+IFxuICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIHsgY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCAmJiBjZXN0Py5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheChVRixpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNlc3R9PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjc1dmhcIj4gXG4gICAgICAgICAgICAgIDxEaXZpZGVyLz4gICAgXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8Yj5EZXNjcmnDp8OjbyBDRVNUOiA8L2I+e2l0ZW0uZGVzY3JpY2FvX2Nlc3R9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPk5DTTogPC9iPntpdGVtLmNvZGlnb31cbiAgICAgICAgICAgICAgPC9UZXh0PiAgICAgIFxuXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPkRlc2NyacOnw6NvOiA8L2I+e2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICBcblxuICAgICAgICAgICAgICA8VGV4dD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8Yj5TZWdtZW50bzogPC9iPntpdGVtLnNlZ21lbnRvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPlZlcnPDo286IDwvYj57aXRlbS52ZXJzYW99XG4gICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICBcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAge2N1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1AgJiYgY2ZvcD8uZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBwYWRkaW5nPVwiNXB4XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBvbkNsaWNrPXsoKSA9PiBzZWFyY2hUYXgoVUYsaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCIgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5jb2RpZ299PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjc1dmhcIj4gXG4gICAgICAgICAgICAgIDxEaXZpZGVyLz4gICAgXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8Yj5BcGxpY2HDp8OjbzogPC9iPntpdGVtLmFwbGljYWNhb31cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkNhdGVnb3JpYTogPC9iPntpdGVtLmNhdGVnb3JpYX1cbiAgICAgICAgICAgICAgPC9UZXh0PiAgICAgIFxuXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8Yj5EZXNjcmnDp8OjbzogPC9iPntpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgPC9UZXh0PiAgIFxuXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPlRpcG86IDwvYj57aXRlbS50aXBvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQWNjb3JkaW9uPiAgICAgICAgXG4gICAgICA8L0ZsZXg+XG4gICAgICA8RmxleCBcbiAgICAgICAgZ3JpZEFyZWE9XCJGVFwiIFxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICAgID5cbiAgICAgIDxMaW5rIFxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudHJlZXVuZmUuY29tLmJyL1wiIFxuICAgICAgICBhbHQ9XCJUcmVldW5mZSBUZWNub2xvZ2lhXCJcbiAgICAgICAgdGV4dERlY29yPVwibm9uZVwiXG4gICAgICAgID5UcmVldW5mZSBUZWNub2xvZ2lhIDwvTGluaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L0dyaWQ+XG4gICAgICBcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==