webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Toolbar/SideDrawer.js":
/*!******************************************!*\
  !*** ./components/Toolbar/SideDrawer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SecondaryButton */ "./components/SecondaryButton.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/Toolbar/SideDrawer.js";




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: drawerClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "decorado",
    className: "side-drawer__circle1",
    src: "../../static/images/circle-aqua.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "side-drawer__close-button",
    onClick: props.click,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\u2190"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/vueltos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Vueltos", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "NUEVO")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index#tus-intereses-primero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "C\xF3mo funciona") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      return props.click();
    },
    activeClass: "side-drawer--active",
    to: "tus-intereses-primero",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "C\xF3mo funciona")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index#precios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Precios") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      return props.click();
    },
    activeClass: "side-drawer--active",
    to: "precios",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Precios")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index#academia-del-ahorro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Tips de ahorro") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    onClick: function onClick() {
      return props.click();
    },
    activeClass: "side-drawer--active",
    to: "academia-del-ahorro",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Tips de ahorro"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "side-drawer__login",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Ingres\xE1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "decorado",
    className: "side-drawer__circle2",
    src: "../../static/images/half-circle-blue-thin.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.974bfc4add7c9bd8ebf9.hot-update.js.map