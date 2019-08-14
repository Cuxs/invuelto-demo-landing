webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-waypoint */ "./node_modules/react-waypoint/es/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");
/* harmony import */ var react_easy_swipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_easy_swipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_IntroComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IntroComponent */ "./components/IntroComponent.js");
/* harmony import */ var _components_HowToComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HowToComponent */ "./components/HowToComponent.js");
/* harmony import */ var _components_Area1Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Area1Component */ "./components/Area1Component.js");
/* harmony import */ var _components_Area2Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Area2Component */ "./components/Area2Component.js");
/* harmony import */ var _components_Area3Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Area3Component */ "./components/Area3Component.js");
/* harmony import */ var _components_SecurityComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SecurityComponent */ "./components/SecurityComponent.js");
/* harmony import */ var _components_PricingComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PricingComponent */ "./components/PricingComponent.js");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/FooterComponent */ "./components/FooterComponent.js");

var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/pages/index.js";
















var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      group1 = _useState2[0],
      toggleVisibilityGroup1 = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      group2 = _useState4[0],
      toggleVisibilityGroup2 = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      group3 = _useState6[0],
      toggleVisibilityGroup3 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      group4 = _useState8[0],
      toggleVisibilityGroup4 = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      sideDrawerOpen = _useState10[0],
      toggleSideDrawer = _useState10[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_easy_swipe__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onSwipeLeft: function onSwipeLeft() {
      return toggleSideDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Invuelto, tu alcanc\xEDa digital",
    description: "Desarrollamos una herramienta con la que ahora s\xED vas a poder ahorrar, cuidamos tu plata de la inflaci\xF3n ya que tus ahorros generan intereses a tu favor. Vos eleg\xEDs el monto y la forma de ingresar dinero.",
    url: "www.invuelto.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: sideDrawerOpen,
    toggle: toggleSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), group1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IntroComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: function onEnter() {
      return toggleVisibilityGroup2(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), group2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HowToComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: function onEnter() {
      return toggleVisibilityGroup3(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area1Component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), group3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area2Component__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: function onEnter() {
      return toggleVisibilityGroup4(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area3Component__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), group4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SecurityComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PricingComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b3f80425b89dd96de7a0.hot-update.js.map