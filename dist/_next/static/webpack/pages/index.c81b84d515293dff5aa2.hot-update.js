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

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.'),
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
    setCEST(null);
    setCFOP(null);
  }

  function handleCEST() {
    setTpSearch(TipeSearch.tpCEST);
    setText('Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.');
    setNCM(null);
    setCFOP(null);
  }

  function handleCFOP() {
    setTpSearch(TipeSearch.tpCFOP);
    setText('Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.');
    setNCM(null);
    setCEST(null);
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
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setError(true);
              setErrorMsg(_context.t0.message);

            case 14:
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
      lineNumber: 158,
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
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["BoxButton"], {
    buttonActive: tpSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleNCM();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "NCM"), __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleCFOP();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, "CFOP"), __jsx(_components_ButtonBar_styles__WEBPACK_IMPORTED_MODULE_5__["ButtonBar"], {
    onClick: function onClick() {
      return handleCEST();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 178,
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
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
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
      lineNumber: 192,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 199,
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
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], {
    mr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, errorMsg)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["CloseButton"], {
    right: "8px",
    top: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 216,
      columnNumber: 9
    }
  }, tpSearch === TipeSearch.tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
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
        lineNumber: 260,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 27
      }
    }, municipal, "%"))))));
  })), tpSearch === TipeSearch.tpCEST && (cest === null || cest === void 0 ? void 0 : cest.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 21
      }
    }, item.cest))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o CEST: "), item.descricao_cest), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 15
      }
    }, "NCM: "), item.codigo), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
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
    }, "Segmento: "), item.segmento), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 15
      }
    }, "Vers\xE3o: "), item.versao)));
  })), tpSearch === TipeSearch.tpCFOP && (cfop === null || cfop === void 0 ? void 0 : cfop.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 15
      }
    }, "Aplica\xE7\xE3o: "), item.aplicacao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 15
      }
    }, "Categoria: "), item.categoria), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
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
      lineNumber: 438,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "VJM7dksIiAJwwJWdNs+Gr9TD5JE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJlc3RhZHVhbCIsInNldEVzdGFkdWFsIiwibXVuaWNpcGFsIiwic2V0TXVuaWNpcGFsIiwiaW1wb3J0YWRvIiwic2V0SW1wb3J0YWRvIiwibmFjaW9uYWwiLCJzZXROYWNpb25hbCIsIlVGIiwic2V0VUYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidGV4dCIsInNldFRleHQiLCJUaXBlU2VhcmNoIiwidHBOQ00iLCJ0cFNlYXJjaCIsInNldFRwU2VhcmNoIiwiaGFuZGxlTkNNIiwiaGFuZGxlQ0VTVCIsInRwQ0VTVCIsImhhbmRsZUNGT1AiLCJ0cENGT1AiLCJjaGFuZ2VWYWx1ZSIsInNlYXJjaFRheCIsImNvZGUiLCJnZXRUQVgiLCJyZXNwb25zZXRheCIsImRhdGEiLCJpbXBvc3RvcyIsImltcG9ydGFkb3NmZWRlcmFsIiwibmFjaW9uYWxmZWRlcmFsIiwibWVzc2FnZSIsInN0YXJ0U2VhcmNoIiwiZ2V0TkNNIiwicmVzcG9uc2VuY20iLCJ0b3RhbFBhZ2VzIiwiaSIsIm5ld3Jlc3BvbnNlbmNtIiwiZGF0YW5jbSIsImNvbmNhdCIsIm5ld25jbSIsImNvZGlnbyIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0IiwiZGVzY3JpY2FvX2Nlc3QiLCJzZWdtZW50byIsInZl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QUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsRUFNRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixFQU9FO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLEVBUUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsRUFTRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixFQVVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBV0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsRUFZRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixFQWFFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLEVBY0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEYsRUFlRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixFQWdCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkYsRUFpQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGLEVBa0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZ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QTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxFQUNtQk4sSUFBSSxDQUFDTyxTQUR4QixDQVRBLEVBYUEsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxFQUNtQlAsSUFBSSxDQUFDQyxTQUR4QixDQWJBLEVBaUJBLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFDY0QsSUFBSSxDQUFDUSxJQURuQixDQWpCQSxDQVpGLENBRGtEO0FBQUEsR0FBbkIsQ0FBbEMsQ0F4TEQsQ0FqQkYsQ0F6Q0YsRUF3UkUsTUFBQyxvREFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsV0FBTyxFQUFDLFFBRlY7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxtQkFBZSxFQUFDLFNBTGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPQSxNQUFDLG9EQUFEO0FBQ0UsUUFBSSxFQUFDLDhCQURQO0FBRUUsT0FBRyxFQUFDLHFCQUZOO0FBR0UsYUFBUyxFQUFDLE1BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQQSxDQXhSRixDQURGO0FBeVNEOztHQXZhdUI1RSxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM4MWI4NGQ1MTUyOTNkZmY1YWEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFxuICBHcmlkLCBcbiAgRmxleCwgXG4gIFRleHQsXG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uSGVhZGVyLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQWNjb3JkaW9uSWNvbiwgXG4gIEJveCxcbiAgU2VsZWN0LFxuICBGb3JtQ29udHJvbCxcbiAgTGluayxcbiAgRGl2aWRlcixcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQWxlcnRUaXRsZSxcbiAgQ2xvc2VCdXR0b25cbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uQmFyLCBCb3hCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhci9zdHlsZXMnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvblNlYXJjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uU2VhcmNoL3N0eWxlcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyL3N0eWxlcydcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMsIFRBWFByb3BzIH0gZnJvbSAnLi4vc2VydmljZXMvc2VydmljZXMnXG5cbmNvbnN0IHNlcnZpY2VzID0gbmV3IFNlcnZpY2VzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25jbSwgc2V0TkNNXSA9IHVzZVN0YXRlPE5DTVByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZXN0LCBzZXRDRVNUXSA9IHVzZVN0YXRlPENFU1RQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY2ZvcCwgc2V0Q0ZPUF0gPSB1c2VTdGF0ZTxDRk9QUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2VzdGFkdWFsLCBzZXRFc3RhZHVhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW211bmljaXBhbCwgc2V0TXVuaWNpcGFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1wb3J0YWRvLCBzZXRJbXBvcnRhZG9dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtuYWNpb25hbCwgc2V0TmFjaW9uYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgVUYsIHNldFVGXSA9IHVzZVN0YXRlKCdERicpO1xuICBjb25zdCBbIHZhbHVlLCBzZXRWYWx1ZSBdID0gdXNlU3RhdGUoJycpOyAgXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCdTZXJ2acOnbyBncmF0dWl0byBkZSBjb25zdWx0YSBwb3IgY8OzZGlnbyBlIGRlc2NyacOnw6NvIGRhIE5vbWVuY2xhdHVyYSBDb211bSBkbyBNZXJjb3N1bC4nKTtcbiAgXG4gIGVudW0gVGlwZVNlYXJjaCB7XG4gICAgdHBOQ00gPSAxLFxuICAgIHRwQ0ZPUCA9IDIsXG4gICAgdHBDRVNUID0gM1xuICB9XG5cbiAgY29uc3QgW3RwU2VhcmNoLCBzZXRUcFNlYXJjaF0gPSB1c2VTdGF0ZTxUaXBlU2VhcmNoPihUaXBlU2VhcmNoLnRwTkNNKVxuXG4gXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOQ00oKXtcbiAgICAgICAgc2V0VHBTZWFyY2goVGlwZVNlYXJjaC50cE5DTSlcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkYSBOb21lbmNsYXR1cmEgQ29tdW0gZG8gTWVyY29zdWwuJyk7XG4gICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgIHNldENGT1AobnVsbCk7ICAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ0VTVCgpe1xuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0VTVClcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEVzcGVjaWZpY2Fkb3IgZGEgU3Vic3RpcnVpw6fDo28gVHJpYnV0w6FyaWEuJyk7XG4gICAgICAgIHNldE5DTShudWxsKTtcbiAgICAgICAgc2V0Q0ZPUChudWxsKTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ0ZPUCgpe1xuICAgICAgICBzZXRUcFNlYXJjaChUaXBlU2VhcmNoLnRwQ0ZPUClcbiAgICAgICAgc2V0VGV4dCgnU2VydmnDp28gZ3JhdHVpdG8gZGUgY29uc3VsdGEgcG9yIGPDs2RpZ28gZSBkZXNjcmnDp8OjbyBkbyBDw7NkaWdvIEZpc2NhbCBkZSBPcGVyYcOnw7VlcyBlIFByZXN0YcOnw7VlcyBkYXMgZW50cmFkYXMgZSBzYcOtZGFzIGRlIG1lcmNhZG9yaWFzLicpO1xuICAgICAgICBzZXROQ00obnVsbCk7XG4gICAgICAgIHNldENFU1QobnVsbCk7IFxuICAgIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIHNldENFU1QobnVsbClcbiAgICAgIHNldENGT1AobnVsbClcbiAgICAgIHNldE5DTShudWxsKVxuICAgICAgc2V0VmFsdWUodmFsdWUpXG4gICAgICBzZXRFcnJvcihmYWxzZSlcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaFRheChVRjpzdHJpbmcsIGNvZGUgOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZXRheCA9IGF3YWl0IHNlcnZpY2VzLmdldFRBWChVRiwgY29kZSlcbiAgICAgIHNldEVzdGFkdWFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MuZXN0YWR1YWwpXG4gICAgICBzZXRNdW5pY2lwYWwocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5tdW5pY2lwYWwpXG4gICAgICBzZXRJbXBvcnRhZG8ocmVzcG9uc2V0YXguZGF0YS5pbXBvc3Rvcy5pbXBvcnRhZG9zZmVkZXJhbClcbiAgICAgIHNldE5hY2lvbmFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MubmFjaW9uYWxmZWRlcmFsKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgICAgc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKHRwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlbmNtID0gYXdhaXQgc2VydmljZXMuZ2V0TkNNKGNvZGUsIDEpOyBcbiAgICAgICAgICAgIHNldE5DTShyZXNwb25zZW5jbSk7IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYocmVzcG9uc2VuY20udG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlbmNtLnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhbmNtID0gcmVzcG9uc2VuY20uZGF0YS5jb25jYXQobmV3cmVzcG9uc2VuY20uZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld25jbSA9IHsgLi4ucmVzcG9uc2VuY20sIC4uLmRhdGFuY20gfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hUYXgoJ0RGJywgbmV3bmNtLmRhdGFbMF0uY29kaWdvKSAgXG4gICAgICAgICAgICAgICAgICAgIHNldE5DTShuZXduY20pOyAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Q0VTVChudWxsKTtcbiAgICAgICAgICAgIHNldENGT1AobnVsbCk7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZih0cFNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENFU1Qpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0VTVChyZXNwb25zZWNlc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNlc3QudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZXN0ID0gYXdhaXQgc2VydmljZXMuZ2V0Q0VTVChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2VzdCA9IHJlc3BvbnNlY2VzdC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNlc3QuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nlc3QgPSB7IC4uLnJlc3BvbnNlY2VzdCwgLi4uZGF0YWNlc3QgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRVNUKG5ld2Nlc3QpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXROQ00obnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRk9QKHJlc3BvbnNlY2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNmb3AudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2ZvcCA9IHJlc3BvbnNlY2ZvcC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNmb3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nmb3AgPSB7IC4uLnJlc3BvbnNlY2ZvcCwgLi4uZGF0YWNmb3AgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRk9QKG5ld2Nmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXROQ00obnVsbCk7XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpOyBcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgIHNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIFxuICAgIH0gICBcbn1cblxuICByZXR1cm4gKFxuICAgIDxHcmlkIFxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICBhcz1cIm1haW5cIlxuICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJhdXRvIDEwMCUgYXV0b1wiXG4gICAgICB0ZW1wbGF0ZVJvd3M9XCIyNTBweCAxMDBweCAgYXV0byBhdXRvXCJcbiAgICAgIHRlbXBsYXRlQXJlYXM9XCJcbiAgICAgICAgJy4gQlQgLidcbiAgICAgICAgJy4gU0kgLidcbiAgICAgICAgJy4gUkIgLidcbiAgICAgICAgJ0ZUIEZUIEZUJ1xuICAgICAgXCIgXG4gICAgPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJCVFwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICA8Qm94QnV0dG9uIGJ1dHRvbkFjdGl2ZT17dHBTZWFyY2h9PlxuICAgICAgICAgICAgPEJ1dHRvbkJhciBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOQ00oKX0+TkNNPC9CdXR0b25CYXI+XG4gICAgICAgICAgICA8QnV0dG9uQmFyIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNGT1AoKX0+Q0ZPUDwvQnV0dG9uQmFyPlxuICAgICAgICAgICAgPEJ1dHRvbkJhciBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDRVNUKCl9PkNFU1Q8L0J1dHRvbkJhcj4gICAgXG4gICAgICAgIDwvQm94QnV0dG9uPiAgICBcbiAgICAgICAgPFRleHRcbiAgICAgICAgICB3b3JkQnJlYWs9XCJicmVhay13b3JkXCJcbiAgICAgICAgICBtYXhXaWR0aD1cInNtXCJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIlxuICAgICAgICA+e3RleHR9PC9UZXh0PlxuICAgICAgPC9GbGV4PiBcbiAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgZ3JpZEFyZWE9XCJTSVwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGhhc0Vycm9yPXtlcnJvcn0+XG4gICAgICAgIDxTZWFyY2hCYXIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBkZXNjcmnDp8OjbyBvdSBvIGPDs2RpZ29cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8QnV0dG9uU2VhcmNoIG9uQ2xpY2s9eygpID0+IHN0YXJ0U2VhcmNoKHZhbHVlKX0+UGVzcXVpc2FyPC9CdXR0b25TZWFyY2g+XG4gICAgICAgIDwvQ29udGFpbmVyPiAgICAgICAgXG4gICAgICA8L0Zvcm1Db250cm9sPiAgICAgIFxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJSQlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxBbGVydCBcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgIGZsZXhEaXI9XCJyb3dcIiBcbiAgICAgICAgICBzdGF0dXM9XCJlcnJvclwiIFxuICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiIFxuICAgICAgICAgIHdpZHRoPVwiNDB2d1wiIFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwic21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgIDxBbGVydFRpdGxlIG1yPXsyfT57ZXJyb3JNc2d9PC9BbGVydFRpdGxlPlxuICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gIHJpZ2h0PVwiOHB4XCIgdG9wPVwiOHB4XCIgLz5cbiAgICAgICAgPC9BbGVydD4pfVxuICAgICAgICA8QWNjb3JkaW9uIFxuICAgICAgICAgIGFsbG93VG9nZ2xlIFxuICAgICAgICAgIHdpZHRoPVwiOTB2d1wiIFxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIiBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgIG1heFdpZHRoPVwiNzcwcHhcIiAgICAgICAgXG4gICAgICAgICAgPiBcbiAgICAgICAgICB7IHRwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNICYmIG5jbT8uZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBwYWRkaW5nPVwiNXB4XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBvbkNsaWNrPXsoKSA9PiBzZWFyY2hUYXgoVUYsaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCIgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5jb2RpZ299PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjB2aFwiXG4gICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjNDU1YTY0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5BbGlxdW90YXM8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiB3b3JkQnJlYWs9XCJicmVhay13b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17J0RGJ30gd2lkdGg9XCI3NXB4XCIgb25DaGFuZ2U9e2UgPT4gc2VhcmNoVGF4KGUuY3VycmVudFRhcmdldC52YWx1ZSwgaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQ1wiPkFDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxcIj5BTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFQXCI+QVA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTVwiPkFNPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFcIj5CQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFXCI+Q0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFU1wiPkVTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR09cIj5HTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVFwiPk1UPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5NUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1HXCI+TUc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQVwiPlBBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEJcIj5QQjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBSXCI+UFI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRVwiPlBFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUElcIj5QSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSTlwiPlJOPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5SUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPXCI+Uk88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSUlwiPlJSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQXCI+U1A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9cIj5UTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRGXCI+REY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5hY2lvbmFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFjaW9uYWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkltcG9ydGFkbzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltcG9ydGFkb30lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gXG5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+RXN0YWR1YWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RhZHVhbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+TXVuaWNpcGFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVuaWNpcGFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiBcbiAgICAgICAgICAgICAgICAgIDwvRmxleD4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7IHRwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCAmJiBjZXN0Py5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheChVRixpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNlc3R9PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjc1dmhcIj4gXG4gICAgICAgICAgICAgIDxEaXZpZGVyLz4gICAgXG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8Yj5EZXNjcmnDp8OjbyBDRVNUOiA8L2I+e2l0ZW0uZGVzY3JpY2FvX2Nlc3R9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPk5DTTogPC9iPntpdGVtLmNvZGlnb31cbiAgICAgICAgICAgICAgPC9UZXh0PiAgICAgIFxuXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPkRlc2NyacOnw6NvOiA8L2I+e2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICBcblxuICAgICAgICAgICAgICA8VGV4dD4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8Yj5TZWdtZW50bzogPC9iPntpdGVtLnNlZ21lbnRvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPlZlcnPDo286IDwvYj57aXRlbS52ZXJzYW99XG4gICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICBcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25QYW5lbD5cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAge3RwU2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCAmJiBjZm9wPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheChVRixpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNzV2aFwiPiBcbiAgICAgICAgICAgICAgPERpdmlkZXIvPiAgICBcbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkFwbGljYcOnw6NvOiA8L2I+e2l0ZW0uYXBsaWNhY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPGI+Q2F0ZWdvcmlhOiA8L2I+e2l0ZW0uY2F0ZWdvcmlhfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgXG5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkRlc2NyacOnw6NvOiA8L2I+e2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgXG5cbiAgICAgICAgICAgICAgPFRleHQ+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGI+VGlwbzogPC9iPntpdGVtLnRpcG99XG4gICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb24+ICAgICAgICBcbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IFxuICAgICAgICBncmlkQXJlYT1cIkZUXCIgXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgICAgPlxuICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50cmVldW5mZS5jb20uYnIvXCIgXG4gICAgICAgIGFsdD1cIlRyZWV1bmZlIFRlY25vbG9naWFcIlxuICAgICAgICB0ZXh0RGVjb3I9XCJub25lXCJcbiAgICAgICAgPlRyZWV1bmZlIFRlY25vbG9naWEgPC9MaW5rPlxuICAgICAgPC9GbGV4PlxuICAgIDwvR3JpZD5cbiAgICAgIFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9