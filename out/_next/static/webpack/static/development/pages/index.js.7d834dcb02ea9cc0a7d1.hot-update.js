webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar */ "./components/Toolbar/index.js");
/* harmony import */ var _Toolbar_SideDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toolbar/SideDrawer */ "./components/Toolbar/SideDrawer.js");
/* harmony import */ var _Toolbar_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Toolbar/Backdrop */ "./components/Toolbar/Backdrop.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SecondaryButton */ "./components/SecondaryButton.js");

var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/nav.js";







var Nav = function Nav(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      _useState2$ = _useState2[0],
      sideDrawerOpen = _useState2$ === void 0 ? props.drawerOpen : _useState2$,
      toggleSideDrawer = _useState2[1];

  var backdrop;

  if (sideDrawerOpen) {
    backdrop = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Toolbar_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"], {
      click: function click() {
        return toggleSideDrawer(!sideDrawerOpen);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    drawerClickHandler: function drawerClickHandler() {
      return toggleSideDrawer(!sideDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Toolbar_SideDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: sideDrawerOpen,
    click: function click() {
      return toggleSideDrawer(!sideDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), backdrop));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.7d834dcb02ea9cc0a7d1.hot-update.js.map