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
              setErrorMsg(_context2.t0.message);

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
      lineNumber: 125,
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
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(_components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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
      lineNumber: 141,
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
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx(_components_Container_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    hasError: error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(_components_ButtonSearch_styles__WEBPACK_IMPORTED_MODULE_7__["ButtonSearch"], {
    onClick: function onClick() {
      return startSearch(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 163,
      columnNumber: 7
    }
  }, error && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    display: "flex",
    flexDir: "row",
    status: "error",
    alignSelf: "center",
    width: "40vw",
    justifyContent: "space-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], {
    mr: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, errorMsg)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["CloseButton"], {
    right: "8px",
    top: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
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
      lineNumber: 178,
      columnNumber: 9
    }
  }, _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["currentlySearch"] === _components_ButtonBar__WEBPACK_IMPORTED_MODULE_5__["TipeSearch"].tpNCM && (ncm === null || ncm === void 0 ? void 0 : ncm.data.map(function (item) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
      padding: "5px",
      outline: "none",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionHeader"], {
      onClick: function onClick() {
        return searchTax(UF, item.codigo);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      flex: "1",
      textAlign: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, item.codigo))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["AccordionPanel"], {
      display: "flex",
      flexDir: "column",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      maxWidth: "60vh",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }, item.descricao), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#455a64",
      alignSelf: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    }, "Aliquotas"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "row",
      justifyContent: "space-around",
      wordBreak: "break-word",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      alignItems: "flex-start",
      marginTop: "5px",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
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
        lineNumber: 222,
        columnNumber: 23
      }
    }, __jsx("option", {
      value: "AC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, "AC"), __jsx("option", {
      value: "AL",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 25
      }
    }, "AL"), __jsx("option", {
      value: "AP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 25
      }
    }, "AP"), __jsx("option", {
      value: "AM",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    }, "AM"), __jsx("option", {
      value: "BA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 25
      }
    }, "BA"), __jsx("option", {
      value: "CE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    }, "CE"), __jsx("option", {
      value: "ES",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 25
      }
    }, "ES"), __jsx("option", {
      value: "GO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 25
      }
    }, "GO"), __jsx("option", {
      value: "MA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 25
      }
    }, "MA"), __jsx("option", {
      value: "MT",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 25
      }
    }, "MT"), __jsx("option", {
      value: "MD",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 25
      }
    }, "MS"), __jsx("option", {
      value: "MG",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 25
      }
    }, "MG"), __jsx("option", {
      value: "PA",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }, "PA"), __jsx("option", {
      value: "PB",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 25
      }
    }, "PB"), __jsx("option", {
      value: "PR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, "PR"), __jsx("option", {
      value: "PE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }
    }, "PE"), __jsx("option", {
      value: "PI",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 25
      }
    }, "PI"), __jsx("option", {
      value: "RJ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 25
      }
    }, "RJ"), __jsx("option", {
      value: "RN",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 25
      }
    }, "RN"), __jsx("option", {
      value: "RS",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    }, "RS"), __jsx("option", {
      value: "RO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }, "RO"), __jsx("option", {
      value: "RR",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 25
      }
    }, "RR"), __jsx("option", {
      value: "SC",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }, "SC"), __jsx("option", {
      value: "SP",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    }, "SP"), __jsx("option", {
      value: "SE",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    }, "SE"), __jsx("option", {
      value: "TO",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 25
      }
    }, "TO"), __jsx("option", {
      value: "DF",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }, "DF"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    }, "Nacional"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }, nacional, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 23
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "Importado"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 27
      }
    }, importado, "%"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 23
      }
    }, "Estadual"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 27
      }
    }, estadual, "%")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
      flexDir: "column",
      justifyContent: "space-betwenn",
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      fontWeight: "bold",
      color: "#e8685e",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 23
      }
    }, "Municipal"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
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
      lineNumber: 326,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.treeunfe.com.br/",
    alt: "Treeunfe Tecnologia",
    textDecor: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 7
    }
  }, "Treeunfe Tecnologia ")));
}

_s(Home, "tHKsSCIkExfybRGyEBTPgA6kCDs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInNlcnZpY2VzIiwiU2VydmljZXMiLCJIb21lIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsIm5jbSIsInNldE5DTSIsImNlc3QiLCJzZXRDRVNUIiwiY2ZvcCIsInNldENGT1AiLCJlc3RhZHVhbCIsInNldEVzdGFkdWFsIiwibXVuaWNpcGFsIiwic2V0TXVuaWNpcGFsIiwiaW1wb3J0YWRvIiwic2V0SW1wb3J0YWRvIiwibmFjaW9uYWwiLCJzZXROYWNpb25hbCIsIlVGIiwic2V0VUYiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2hhbmdlVmFsdWUiLCJzZWFyY2hUYXgiLCJjb2RlIiwiZ2V0VEFYIiwicmVzcG9uc2V0YXgiLCJkYXRhIiwiaW1wb3N0b3MiLCJpbXBvcnRhZG9zZmVkZXJhbCIsIm5hY2lvbmFsZmVkZXJhbCIsInN0YXJ0U2VhcmNoIiwiY3VycmVudGx5U2VhcmNoIiwiVGlwZVNlYXJjaCIsInRwTkNNIiwiZ2V0TkNNIiwicmVzcG9uc2VuY20iLCJ0b3RhbFBhZ2VzIiwiaSIsIm5ld3Jlc3BvbnNlbmNtIiwiZGF0YW5jbSIsImNvbmNhdCIsIm5ld25jbSIsImNvZGlnbyIsImNvbnNvbGUiLCJsb2ciLCJ0cENFU1QiLCJnZXRDRVNUIiwicmVzcG9uc2VjZXN0IiwibmV3cmVzcG9uc2VjZXN0IiwiZGF0YWNlc3QiLCJuZXdjZXN0IiwidHBDRk9QIiwiZ2V0Q0ZPUCIsInJlc3BvbnNlY2ZvcCIsIm5ld3Jlc3BvbnNlY2ZvcCIsImRhdGFjZm9wIiwibmV3Y2ZvcCIsIm1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImRlc2NyaWNhbyIsImN1cnJlbnRUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQXFCQTtBQUNBO0FBQ0E7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Q0FBYjtBQUFBLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQUtFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBTUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFPRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixFQVFFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLEVBU0U7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsRUFVRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLEVBWUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsRUFhRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWNFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLEVBZUU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsRUFnQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGLEVBaUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixFQWtCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkYsRUFtQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGLEVBb0JFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixFQXFCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkYsRUFzQkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGLEVBdUJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRixFQXdCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkYsRUF5QkU7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBekJGLEVBMEJFO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixFQTJCRTtBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtB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YnBhY2svcGFnZXMvaW5kZXguMDMyNGQ5OGZjMTdmZGFlMWMyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFxuICBHcmlkLCBcbiAgRmxleCwgXG4gIFRleHQsXG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uSGVhZGVyLFxuICBBY2NvcmRpb25QYW5lbCxcbiAgQWNjb3JkaW9uSWNvbiwgXG4gIEJveCxcbiAgU2VsZWN0LFxuICBGb3JtQ29udHJvbCxcbiAgTGluayxcbiAgRGl2aWRlcixcbiAgQWxlcnQsXG4gIEFsZXJ0SWNvbixcbiAgQWxlcnRUaXRsZSxcbiAgQWxlcnREZXNjcmlwdGlvbixcbiAgQ2xvc2VCdXR0b25cbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcblxuaW1wb3J0IEJ1dHRvbkJhciwgeyBjdXJyZW50bHlTZWFyY2gsIFRpcGVTZWFyY2ggfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbkJhcic7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uU2VhcmNoIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b25TZWFyY2gvc3R5bGVzJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXIvc3R5bGVzJ1xuaW1wb3J0IFNlcnZpY2VzLCB7IENFU1RQcm9wcywgQ0ZPUFByb3BzLCBOQ01Qcm9wcywgVEFYUHJvcHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcblxuY29uc3Qgc2VydmljZXMgPSBuZXcgU2VydmljZXM7XG5cbmludGVyZmFjZSBQcm9wc3tcbiAgaGFzRXJyb3I/OmJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbmNtLCBzZXROQ01dID0gdXNlU3RhdGU8TkNNUHJvcHMgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Nlc3QsIHNldENFU1RdID0gdXNlU3RhdGU8Q0VTVFByb3BzIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjZm9wLCBzZXRDRk9QXSA9IHVzZVN0YXRlPENGT1BQcm9wcyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbZXN0YWR1YWwsIHNldEVzdGFkdWFsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbXVuaWNpcGFsLCBzZXRNdW5pY2lwYWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpbXBvcnRhZG8sIHNldEltcG9ydGFkb10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25hY2lvbmFsLCBzZXROYWNpb25hbF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgWyBVRiwgc2V0VUZdID0gdXNlU3RhdGUoJ0RGJyk7XG5cbiAgY29uc3QgWyB2YWx1ZSwgc2V0VmFsdWUgXSA9IHVzZVN0YXRlKCcnKTtcblxuICBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKXtcbiAgICAgIHNldFZhbHVlKHZhbHVlKVxuICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hUYXgoVUY6c3RyaW5nLCBjb2RlIDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPntcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2V0YXggPSBhd2FpdCBzZXJ2aWNlcy5nZXRUQVgoVUYsIGNvZGUpXG4gICAgICBzZXRFc3RhZHVhbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLmVzdGFkdWFsKVxuICAgICAgc2V0TXVuaWNpcGFsKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MubXVuaWNpcGFsKVxuICAgICAgc2V0SW1wb3J0YWRvKHJlc3BvbnNldGF4LmRhdGEuaW1wb3N0b3MuaW1wb3J0YWRvc2ZlZGVyYWwpXG4gICAgICBzZXROYWNpb25hbChyZXNwb25zZXRheC5kYXRhLmltcG9zdG9zLm5hY2lvbmFsZmVkZXJhbClcbiAgICAgIFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFNlYXJjaChjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+e1xuICAgIHRyeSB7ICAgICAgICAgICAgXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cE5DTSl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZW5jbSA9IGF3YWl0IHNlcnZpY2VzLmdldE5DTShjb2RlLCAxKTsgXG4gICAgICAgICAgICBzZXROQ00ocmVzcG9uc2VuY20pOyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKHJlc3BvbnNlbmNtLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZW5jbS50b3RhbFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzcG9uc2VuY20gPSBhd2FpdCBzZXJ2aWNlcy5nZXROQ00oY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YW5jbSA9IHJlc3BvbnNlbmNtLmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlbmNtLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXduY20gPSB7IC4uLnJlc3BvbnNlbmNtLCAuLi5kYXRhbmNtIH1cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGF4KCdERicsIG5ld25jbS5kYXRhWzBdLmNvZGlnbykgIFxuICAgICAgICAgICAgICAgICAgICBzZXROQ00obmV3bmNtKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENFU1QobnVsbCk7XG4gICAgICAgICAgICBzZXRDRk9QKG51bGwpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cobmNtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwQ0VTVCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIDEpXG4gICAgICAgICAgICBzZXRDRVNUKHJlc3BvbnNlY2VzdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlY2VzdC50b3RhbFBhZ2VzID4gMSl7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gcmVzcG9uc2VjZXN0LnRvdGFsUGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdyZXNwb25zZWNlc3QgPSBhd2FpdCBzZXJ2aWNlcy5nZXRDRVNUKGNvZGUsIGkpICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFjZXN0ID0gcmVzcG9uc2VjZXN0LmRhdGEuY29uY2F0KG5ld3Jlc3BvbnNlY2VzdC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Y2VzdCA9IHsgLi4ucmVzcG9uc2VjZXN0LCAuLi5kYXRhY2VzdCB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNldENFU1QobmV3Y2VzdCk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRseVNlYXJjaCA9PT0gVGlwZVNlYXJjaC50cENGT1Ape1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VjZm9wID0gYXdhaXQgc2VydmljZXMuZ2V0Q0ZPUChjb2RlLCAxKVxuICAgICAgICAgICAgc2V0Q0ZPUChyZXNwb25zZWNmb3ApOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYocmVzcG9uc2VjZm9wLnRvdGFsUGFnZXMgPiAxKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSByZXNwb25zZWNmb3AudG90YWxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld3Jlc3BvbnNlY2ZvcCA9IGF3YWl0IHNlcnZpY2VzLmdldENGT1AoY29kZSwgaSkgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YWNmb3AgPSByZXNwb25zZWNmb3AuZGF0YS5jb25jYXQobmV3cmVzcG9uc2VjZm9wLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdjZm9wID0geyAuLi5yZXNwb25zZWNmb3AsIC4uLmRhdGFjZm9wIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q0ZPUChuZXdjZm9wKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgICAgc2V0RXJyb3JNc2coZXJyb3IubWVzc2FnZSlcbiAgICAgICAgXG4gICAgfSAgIFxufVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjRUNGMEYxXCJcbiAgICAgIGFzPVwibWFpblwiXG4gICAgICB3aWR0aD1cIjEwMHZ3XCJcbiAgICAgIGhlaWdodD1cIjEwMHZoXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cImF1dG8gMTAwJSBhdXRvXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cIjI1MHB4IDEwMHB4ICBhdXRvIGF1dG9cIlxuICAgICAgdGVtcGxhdGVBcmVhcz1cIlxuICAgICAgICAnLiBCVCAuJ1xuICAgICAgICAnLiBTSSAuJ1xuICAgICAgICAnLiBSQiAuJ1xuICAgICAgICAnRlQgRlQgRlQnXG4gICAgICBcIiBcbiAgICA+XG4gICAgICA8RmxleCBncmlkQXJlYT1cIkJUXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAgPEJ1dHRvbkJhciAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIHdvcmRCcmVhaz1cImJyZWFrLXdvcmRcIlxuICAgICAgICAgIG1heFdpZHRoPVwic21cIlxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiXG4gICAgICAgID57YFNlcnZpw6dvIGdyYXR1aXRvIGRlIGNvbnN1bHRhIHBvciBjw7NkaWdvIGUgZGVzY3Jpw6fDo29cbiAgICAgICAgZGEgTm9tZW5jbGF0dXJhIENvbXVtIGRvIE1lcmNvc3VsYH08L1RleHQ+XG4gICAgICA8L0ZsZXg+IFxuICAgICAgPEZvcm1Db250cm9sIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiIFxuICAgICAgICBncmlkQXJlYT1cIlNJXCIgXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgIDxDb250YWluZXIgaGFzRXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPFNlYXJjaEJhciBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhIGRlc2NyacOnw6NvIG91IG8gY8OzZGlnb1wiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlVmFsdWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgIDxCdXR0b25TZWFyY2ggb25DbGljaz17KCkgPT4gc3RhcnRTZWFyY2godmFsdWUpfT5QZXNxdWlzYXI8L0J1dHRvblNlYXJjaD5cbiAgICAgICAgPC9Db250YWluZXI+ICAgICAgICBcbiAgICAgIDwvRm9ybUNvbnRyb2w+ICAgICAgXG4gICAgICA8RmxleCBncmlkQXJlYT1cIlJCXCIgZmxleERpcj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIj5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPEFsZXJ0IFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgZmxleERpcj1cInJvd1wiIFxuICAgICAgICAgIHN0YXR1cz1cImVycm9yXCIgXG4gICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCIgXG4gICAgICAgICAgd2lkdGg9XCI0MHZ3XCIgXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEFsZXJ0SWNvbiAvPlxuICAgICAgICAgICAgPEFsZXJ0VGl0bGUgbXI9ezJ9PntlcnJvck1zZ308L0FsZXJ0VGl0bGU+XG4gICAgICAgICAgICA8L0JveD4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiAgcmlnaHQ9XCI4cHhcIiB0b3A9XCI4cHhcIiAvPlxuICAgICAgICA8L0FsZXJ0Pil9XG4gICAgICAgIDxBY2NvcmRpb24gXG4gICAgICAgICAgYWxsb3dUb2dnbGUgXG4gICAgICAgICAgd2lkdGg9XCI5MHZ3XCIgXG4gICAgICAgICAgbWFyZ2luVG9wPVwiNTBweFwiIFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgICAgbWF4V2lkdGg9XCI3NzBweFwiICAgICAgICBcbiAgICAgICAgICA+IFxuICAgICAgICAgIHsgY3VycmVudGx5U2VhcmNoID09PSBUaXBlU2VhcmNoLnRwTkNNICYmIG5jbT8uZGF0YS5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbSBwYWRkaW5nPVwiNXB4XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkhlYWRlciBvbkNsaWNrPXsoKSA9PiBzZWFyY2hUYXgoVUYsaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICA8Qm94IFxuICAgICAgICAgICAgICAgIGZsZXg9XCIxXCIgXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8Yj57aXRlbS5jb2RpZ299PC9iPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L0JveD4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSWNvbi8+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSGVhZGVyPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uUGFuZWwgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoPVwiNjB2aFwiXG4gICAgICAgICAgICAgICAgPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaWNhb31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjNDU1YTY0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5BbGlxdW90YXM8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwicm93XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiB3b3JkQnJlYWs9XCJicmVhay13b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiIFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5Fc3RhZG88L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17J0RGJ30gd2lkdGg9XCI3NXB4XCIgb25DaGFuZ2U9e2UgPT4gc2VhcmNoVGF4KGUuY3VycmVudFRhcmdldC52YWx1ZSwgaXRlbS5jb2RpZ28pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBQ1wiPkFDPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxcIj5BTDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFQXCI+QVA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTVwiPkFNPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQkFcIj5CQTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNFXCI+Q0U8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFU1wiPkVTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR09cIj5HTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TUE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNVFwiPk1UPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5NUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1HXCI+TUc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQQVwiPlBBPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUEJcIj5QQjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBSXCI+UFI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQRVwiPlBFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUElcIj5QSTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJKXCI+Uko8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSTlwiPlJOPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUlNcIj5SUzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlJPXCI+Uk88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSUlwiPlJSPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU0NcIj5TQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNQXCI+U1A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTRVwiPlNFPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVE9cIj5UTzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRGXCI+REY8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD4gIFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IFxuICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VublwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiI2U4Njg1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5hY2lvbmFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFjaW9uYWx9JVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZTg2ODVlXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkltcG9ydGFkbzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltcG9ydGFkb30lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD4gXG5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXggXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlbm5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+RXN0YWR1YWw8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlc3RhZHVhbH0lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZW5uXCJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNlODY4NWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+TXVuaWNpcGFsPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bXVuaWNpcGFsfSVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+ICBcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0FjY29yZGlvbj4gICAgICAgIFxuICAgICAgPC9GbGV4PlxuICAgICAgPEZsZXggXG4gICAgICAgIGdyaWRBcmVhPVwiRlRcIiBcbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiIFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIFxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNFQ0YwRjFcIlxuICAgICAgICA+XG4gICAgICA8TGluayBcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnRyZWV1bmZlLmNvbS5ici9cIiBcbiAgICAgICAgYWx0PVwiVHJlZXVuZmUgVGVjbm9sb2dpYVwiXG4gICAgICAgIHRleHREZWNvcj1cIm5vbmVcIlxuICAgICAgICA+VHJlZXVuZmUgVGVjbm9sb2dpYSA8L0xpbms+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9HcmlkPlxuICAgICAgXG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=