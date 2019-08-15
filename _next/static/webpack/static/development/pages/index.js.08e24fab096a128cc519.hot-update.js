webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toolbar */ "./components/Toolbar/index.js");
/* harmony import */ var _Toolbar_SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar/SideDrawer */ "./components/Toolbar/SideDrawer.js");
/* harmony import */ var _Toolbar_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toolbar/Backdrop */ "./components/Toolbar/Backdrop.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SecondaryButton */ "./components/SecondaryButton.js");
var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/nav.js";







var Nav = function Nav(props) {
  var backdrop;

  if (props.open) {
    backdrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"], {
      click: function click() {
        return props.toggle(!props.open);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    drawerClickHandler: function drawerClickHandler() {
      return props.toggle(!props.open);
    },
    external: props.external,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar_SideDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: props.open,
    click: function click() {
      return props.toggle(!props.open);
    },
    external: props.external,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), backdrop));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.08e24fab096a128cc519.hot-update.js.map