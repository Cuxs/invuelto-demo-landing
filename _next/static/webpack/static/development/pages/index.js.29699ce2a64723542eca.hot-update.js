webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Toolbar/index.js":
/*!*************************************!*\
  !*** ./components/Toolbar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DrawerToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawerToggleButton */ "./components/Toolbar/DrawerToggleButton.js");
/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SecondaryButton */ "./components/SecondaryButton.js");


var _this = undefined,
    _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/Toolbar/index.js";





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      logoColor = _useState4[0],
      setLogoColor = _useState4[1];

  var renderLogo = function renderLogo() {
    return logoColor ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "../static/images/logo-color.png",
      style: {
        width: '170px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Invuelto");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("scroll", function () {
      var isTop = window.scrollY < 100;

      if (isTop) {
        setColor('');
        setLogoColor(false);
      } else {
        setColor('#FAFAFA');
        setLogoColor(true);
      }
    });
    return function () {
      return document.removeEventListener("scroll", _this);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "toolbar",
    style: {
      backgroundColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__toggle-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DrawerToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    click: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__container-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, renderLogo())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#tus-intereses-primero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "C\xF3mo funciona")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#precios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Precios")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "FAQ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#academia-del-ahorro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Tips de ahorro"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "toolbar__button-group1",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Ingres\xE1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "toolbar__button-group1 ml-2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/demo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Demo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-2 toolbar__button-group2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Ingres\xE1")));
});

/***/ })

})
//# sourceMappingURL=index.js.29699ce2a64723542eca.hot-update.js.map