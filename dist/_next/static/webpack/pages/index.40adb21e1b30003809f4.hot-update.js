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
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCEST)) {
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
              if (!(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCFOP)) {
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

  var handleText = Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlyText"];
  }, []);
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
      lineNumber: 131,
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
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    wordBreak: "break-word",
    maxWidth: "sm",
    textAlign: "center",
    marginTop: "50px",
    onClick: function onClick() {
      return handleText();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlyText"])), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["FormControl"], {
    display: "flex",
    gridArea: "SI",
    justifyContent: "center",
    alignItems: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
      lineNumber: 169,
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
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], {
    mr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, errorMsg)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["CloseButton"], {
    right: "8px",
    top: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 186,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
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
        lineNumber: 226,
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
        lineNumber: 230,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 27
      }
    }, municipal, "%"))))));
  })), _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCEST && (cest === null || cest === void 0 ? void 0 : cest.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 21
      }
    }, item.cest))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o CEST: "), item.descricao_cest), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 15
      }
    }, "NCM: "), item.codigo), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 15
      }
    }, "Segmento: "), item.segmento), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 15
      }
    }, "Vers\xE3o: "), item.versao)));
  })), _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpCFOP && (cfop === null || cfop === void 0 ? void 0 : cfop.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      maxWidth: "75vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 15
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 15
      }
    }, "Aplica\xE7\xE3o: "), item.aplicacao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 15
      }
    }, "Categoria: "), item.categoria), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 15
      }
    }, "Descri\xE7\xE3o: "), item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 15
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
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
      lineNumber: 408,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "w+4hOFgesnUllHiAA+QJDTV2DIk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJlc3RhZHVhbCIsInNldEVzdGFkdWFsIiwibXVuaWNpcGFsIiwic2V0TXVuaWNpcGFsIiwiaW1wb3J0YWRvIiwic2V0SW1wb3J0YWRvIiwibmFjaW9uYWwiLCJzZXROYWNpb25hbCIsIlVGIiwic2V0VUYiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2hhbmdlVmFsdWUiLCJzZWFyY2hUYXgiLCJjb2RlIiwiZ2V0VEFYIiwicmVzcG9uc2V0YXgiLCJkYXRhIiwiaW1wb3N0b3MiLCJpbXBvcnRhZG9zZmVkZXJhbCIsIm5hY2lvbmFsZmVkZXJhbCIsInN0YXJ0U2VhcmNoIiwiY3VycmVudGx5U2VhcmNoIiwiVGlwZVNlYXJjaCIsInRwTkNNIiwiZ2V0TkNNIiwicmVzcG9uc2VuY20iLCJ0b3RhbFBhZ2VzIiwiaSIsIm5ld3Jlc3BvbnNlbmNtIiwiZGF0YW5jbSIsImNvbmNhdCIsIm5ld25jbSIsImNvZGlnbyIsInRwQ0VTVCIsImdldENFU1QiLCJyZXNwb25zZWNlc3QiLCJuZXdyZXNwb25zZWNlc3QiLCJkYXRhY2VzdCIsIm5ld2Nlc3QiLCJ0cENGT1AiLCJnZXRDRk9QIiwicmVzcG9uc2VjZm9wIiwibmV3cmVzcG9uc2VjZm9wIiwiZGF0YWNmb3AiLCJuZXdjZm9wIiwibWVzc2FnZSIsImhhbmRsZVRleHQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50bHlUZXh0IiwiZSIsInRhcmdldCIsIm1hcCIsIml0ZW0iLCJkZXNjcmljYW8iLCJjdXJyZW50VGFyZ2V0IiwiZGVzY3JpY2FvX2Nlc3QiLCJzZWdtZW50byIsInZlcnNhbyIsImFwbGljYWNhbyIsImNh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QUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixFQVFFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLEVBU0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFVRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLEVBWUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsRUFhRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBZUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsRUFnQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLEVBaUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQWtCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsRUFtQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLEVBb0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixF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QUFBQTtBQUFBO0FBQUEsMkJBREEsRUFDbUJQLElBQUksQ0FBQ0MsU0FEeEIsQ0FiQSxFQWlCQSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLEVBQ2NELElBQUksQ0FBQ1EsSUFEbkIsQ0FqQkEsQ0FaRixDQUR5RDtBQUFBLEdBQW5CLENBQXpDLENBeExELENBakJGLENBdENGLEVBcVJFLE1BQUMsb0RBQUQ7QUFDRSxZQUFRLEVBQUMsSUFEWDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0Usa0JBQWMsRUFBQyxRQUhqQjtBQUlFLGNBQVUsRUFBQyxRQUpiO0FBS0UsbUJBQWUsRUFBQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0EsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyw4QkFEUDtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLGFBQVMsRUFBQyxNQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEEsQ0FyUkYsQ0FERjtBQXNTRDs7R0F6WXVCekUsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MGFkYjIxZTFiMzAwMDM4MDlmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBcbiAgR3JpZCwgXG4gIEZsZXgsIFxuICBUZXh0LFxuICBBY2NvcmRpb24sXG4gIEFjY29yZGlvbkl0ZW0sXG4gIEFjY29yZGlvbkhlYWRlcixcbiAgQWNjb3JkaW9uUGFuZWwsXG4gIEFjY29yZGlvbkljb24sIFxuICBCb3gsXG4gIFNlbGVjdCxcbiAgRm9ybUNvbnRyb2wsXG4gIExpbmssXG4gIERpdmlkZXIsXG4gIEFsZXJ0LFxuICBBbGVydEljb24sXG4gIEFsZXJ0VGl0bGUsXG4gIENsb3NlQnV0dG9uXG59IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XG5cbmltcG9ydCBCdXR0b25CYXIsIHsgY3VycmVudGx5U2VhcmNoLCBjdXJyZW50bHlUZXh0LCBUaXBlU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25CYXInO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXIvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvblNlYXJjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uU2VhcmNoL3N0eWxlcydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyL3N0eWxlcydcbmltcG9ydCBTZXJ2aWNlcywgeyBDRVNUUHJvcHMsIENGT1BQcm9wcywgTkNNUHJvcHMsIFRBWFByb3BzIH0gZnJvbSAnLi4vc2VydmljZXMvc2VydmljZXMnXG5cbmNvbnN0IHNlcnZpY2VzID0gbmV3IFNlcnZpY2VzO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW25jbSwgc2V0TkNNXSA9IHVzZVN0YXRlPE5DTVByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZXN0LCBzZXRDRVNUXSA9IHVzZVN0YXRlPENFU1RQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY2ZvcCwgc2V0Q0ZPUF0gPSB1c2VTdGF0ZTxDRk9QUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2VzdGFkdWFsLCBzZXRFc3RhZHVhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW211bmljaXBhbCwgc2V0TXVuaWNpcGFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaW1wb3J0YWRvLCBzZXRJbXBvcnRhZG9dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtuYWNpb25hbCwgc2V0TmFjaW9uYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFsgVUYsIHNldFVGXSA9IHVzZVN0YXRlKCdERicpO1xuXG4gIGNvbnN0IFsgdmFsdWUsIHNldFZhbHVlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZyl7XG4gICAgICBzZXRDRVNUKG51bGwpXG4gICAgICBzZXRDRk9QKG51bGwpXG4gICAgICBzZXROQ00obnVsbClcbiAgICAgIHNldFZhbHVlKHZhbHVlKVxuICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hUYXgoVUY6c3RyaW5nLCBjb2RlIDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2V0YXggPSBhd2FpdCBzZXJ2aWNlcy5nZXRUQVgoVUYsIGNvZGUpXG4gICAgICBzZXRFc3RhZHVhbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLmVzdGFkdWFsKVxuICAgICAgc2V0TXVuaWNpcGFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MubXVuaWNpcGFsKVxuICAgICAgc2V0SW1wb3J0YWRvKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MuaW1wb3J0YWRvc2ZlZGVyYWwpXG4gICAgICBzZXROYWNpb25hbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLm5hY2lvbmFsZmVkZXJhbClcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH1cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGF4KCdERicsIG5ld25jbS5kYXRhWzBdLmNvZGlnbykgIFxuICAgICAgICAgICAgICAgICAgICBzZXROQ00obmV3bmNtKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpOyAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldE5DTShudWxsKTtcbiAgICAgICAgICAgIHNldENGT1AobnVsbCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNmb3AgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRk9QKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRk9QKHJlc3BvbnNlY2ZvcCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihyZXNwb25zZWNmb3AudG90YWxQYWdlcyA+IDEpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHJlc3BvbnNlY2ZvcC50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCBpKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhY2ZvcCA9IHJlc3BvbnNlY2ZvcC5kYXRhLmNvbmNhdChuZXdyZXNwb25zZWNmb3AuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2Nmb3AgPSB7IC4uLnJlc3BvbnNlY2ZvcCwgLi4uZGF0YWNmb3AgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRDRk9QKG5ld2Nmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXROQ00obnVsbCk7XG4gICAgICAgICAgICBzZXRDRVNUKG51bGwpOyBcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG4gICAgICAgIHNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIFxuICAgIH0gICBcbn1cblxuXG4gIGNvbnN0IGhhbmRsZVRleHQgPSB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN1cnJlbnRseVRleHRcbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIFxuICAgICAgYmFja2dyb3VuZENvbG9yPVwiI0VDRjBGMVwiXG4gICAgICBhcz1cIm1haW5cIlxuICAgICAgd2lkdGg9XCIxMDB2d1wiXG4gICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICB0ZW1wbGF0ZUNvbHVtbnM9XCJhdXRvIDEwMCUgYXV0b1wiXG4gICAgICB0ZW1wbGF0ZVJvd3M9XCIyNTBweCAxMDBweCAgYXV0byBhdXRvXCJcbiAgICAgIHRlbXBsYXRlQXJlYXM9XCJcbiAgICAgICAgJy4gQlQgLidcbiAgICAgICAgJy4gU0kgLidcbiAgICAgICAgJy4gUkIgLidcbiAgICAgICAgJ0ZUIEZUIEZUJ1xuICAgICAgXCIgXG4gICAgPlxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJCVFwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIDxCdXR0b25CYXIvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGV4dCgpfVxuICAgICAgICA+e2N1cnJlbnRseVRleHR9PC9UZXh0PlxuICAgICAgPC9GbGV4PiBcbiAgICAgIDxGb3JtQ29udHJvbCBcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgZ3JpZEFyZWE9XCJTSVwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGhhc0Vycm9yPXtlcnJvcn0+XG4gICAgICAgIDxTZWFyY2hCYXIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBkZXNjcmnDp8OjbyBvdSBvIGPDs2RpZ29cIiBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICA8QnV0dG9uU2VhcmNoIG9uQ2xpY2s9eygpID0+IHN0YXJ0U2VhcmNoKHZhbHVlKX0+UGVzcXVpc2FyPC9CdXR0b25TZWFyY2g+XG4gICAgICAgIDwvQ29udGFpbmVyPiAgICAgICAgXG4gICAgICA8L0Zvcm1Db250cm9sPiAgICAgIFxuICAgICAgPEZsZXggZ3JpZEFyZWE9XCJSQlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCI+XG4gICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxBbGVydCBcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgIGZsZXhEaXI9XCJyb3dcIiBcbiAgICAgICAgICBzdGF0dXM9XCJlcnJvclwiIFxuICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiIFxuICAgICAgICAgIHdpZHRoPVwiNDB2d1wiIFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwic21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIj5cbiAgICAgICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgICAgIDxBbGVydFRpdGxlIG1yPXsyfT57ZXJyb3JNc2d9PC9BbGVydFRpdGxlPlxuICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gIHJpZ2h0PVwiOHB4XCIgdG9wPVwiOHB4XCIgLz5cbiAgICAgICAgPC9BbGVydD4pfVxuICAgICAgICA8QWNjb3JkaW9uIFxuICAgICAgICAgIGFsbG93VG9nZ2xlIFxuICAgICAgICAgIHdpZHRoPVwiOTB2d1wiIFxuICAgICAgICAgIG1hcmdpblRvcD1cIjUwcHhcIiBcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPVwibWRcIlxuICAgICAgICAgIG1heFdpZHRoPVwiNzcwcHhcIiAgICAgICAgXG4gICAgICAgICAgPiBcbiAgICAgICAgICB7IGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSAmJiBuY20/LmRhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gcGFkZGluZz1cIjVweFwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgb25DbGljaz17KCkgPT4gc2VhcmNoVGF4KFVGLGl0ZW0uY29kaWdvKX0+XG4gICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiIFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0uY29kaWdvfTwvYj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9UZXh0PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC9Cb3g+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkljb24vPlxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvblBhbmVsIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjYwdmhcIlxuICAgICAgICAgICAgICAgID4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmljYW99XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzQ1NWE2NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+QWxpcXVvdGFzPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgd29yZEJyZWFrPVwiYnJlYWstd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCI1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+RXN0YWRvPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9eydERid9IHdpZHRoPVwiNzVweFwiIG9uQ2hhbmdlPXtlID0+IHNlYXJjaFRheChlLmN1cnJlbnRUYXJnZXQudmFsdWUsIGl0ZW0uY29kaWdvKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUNcIj5BQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMXCI+QUw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBUFwiPkFQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQU1cIj5BTTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJBXCI+QkE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDRVwiPkNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVNcIj5FUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdPXCI+R088L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1BPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVRcIj5NVDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TVM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNR1wiPk1HPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEFcIj5QQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBCXCI+UEI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQUlwiPlBSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEVcIj5QRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBJXCI+UEk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSSlwiPlJKPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUk5cIj5STjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJTXCI+UlM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJST1wiPlJPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlJcIj5SUjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNDXCI+U0M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTUFwiPlNQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0VcIj5TRTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRPXCI+VE88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERlwiPkRGPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleCBcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5OYWNpb25hbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge25hY2lvbmFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5JbXBvcnRhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbXBvcnRhZG99JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+IFxuXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPkVzdGFkdWFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXN0YWR1YWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPk11bmljaXBhbDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge211bmljaXBhbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiAgXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgeyBjdXJyZW50bHlTZWFyY2ggPT09IFRpcGVTZWFyY2gudHBDRVNUICYmIGNlc3Q/LmRhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0gcGFkZGluZz1cIjVweFwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25IZWFkZXIgb25DbGljaz17KCkgPT4gc2VhcmNoVGF4KFVGLGl0ZW0uY29kaWdvKX0+XG4gICAgICAgICAgICAgICAgPEJveCBcbiAgICAgICAgICAgICAgICBmbGV4PVwiMVwiIFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGI+e2l0ZW0uY2VzdH08L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNzV2aFwiPiBcbiAgICAgICAgICAgICAgPERpdmlkZXIvPiAgICBcbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkRlc2NyacOnw6NvIENFU1Q6IDwvYj57aXRlbS5kZXNjcmljYW9fY2VzdH1cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPFRleHQ+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGI+TkNNOiA8L2I+e2l0ZW0uY29kaWdvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgXG5cbiAgICAgICAgICAgICAgPFRleHQ+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGI+RGVzY3Jpw6fDo286IDwvYj57aXRlbS5kZXNjcmljYW99XG4gICAgICAgICAgICAgIDwvVGV4dD4gIFxuXG4gICAgICAgICAgICAgIDxUZXh0PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxiPlNlZ21lbnRvOiA8L2I+e2l0ZW0uc2VnbWVudG99XG4gICAgICAgICAgICAgIDwvVGV4dD4gICBcbiAgICAgICAgICAgICAgPFRleHQ+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGI+VmVyc8OjbzogPC9iPntpdGVtLnZlcnNhb31cbiAgICAgICAgICAgICAgPC9UZXh0PiAgICAgICAgIFxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cblxuICAgICAgICB7Y3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0ZPUCAmJiBjZm9wPy5kYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtIHBhZGRpbmc9XCI1cHhcIiBvdXRsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSGVhZGVyIG9uQ2xpY2s9eygpID0+IHNlYXJjaFRheChVRixpdGVtLmNvZGlnbyl9PlxuICAgICAgICAgICAgICAgIDxCb3ggXG4gICAgICAgICAgICAgICAgZmxleD1cIjFcIiBcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxiPntpdGVtLmNvZGlnb308L2I+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvQm94PiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JY29uLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25IZWFkZXI+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25QYW5lbCBcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNzV2aFwiPiBcbiAgICAgICAgICAgICAgPERpdmlkZXIvPiAgICBcbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkFwbGljYcOnw6NvOiA8L2I+e2l0ZW0uYXBsaWNhY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPGI+Q2F0ZWdvcmlhOiA8L2I+e2l0ZW0uY2F0ZWdvcmlhfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgXG5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxiPkRlc2NyacOnw6NvOiA8L2I+e2l0ZW0uZGVzY3JpY2FvfVxuICAgICAgICAgICAgICA8L1RleHQ+ICAgXG5cbiAgICAgICAgICAgICAgPFRleHQ+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGI+VGlwbzogPC9iPntpdGVtLnRpcG99XG4gICAgICAgICAgICAgIDwvVGV4dD4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8L0FjY29yZGlvblBhbmVsPlxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9BY2NvcmRpb24+ICAgICAgICBcbiAgICAgIDwvRmxleD5cbiAgICAgIDxGbGV4IFxuICAgICAgICBncmlkQXJlYT1cIkZUXCIgXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiIFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgICAgPlxuICAgICAgPExpbmsgXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy50cmVldW5mZS5jb20uYnIvXCIgXG4gICAgICAgIGFsdD1cIlRyZWV1bmZlIFRlY25vbG9naWFcIlxuICAgICAgICB0ZXh0RGVjb3I9XCJub25lXCJcbiAgICAgICAgPlRyZWV1bmZlIFRlY25vbG9naWEgPC9MaW5rPlxuICAgICAgPC9GbGV4PlxuICAgIDwvR3JpZD5cbiAgICAgIFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9