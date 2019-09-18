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
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);


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
      className: "mt-3 toolbar__logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "../static/images/logo-color.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "mt-3 toolbar__logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "../static/images/logo-blanco.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("scroll", function () {
      var isTop = window.scrollY < 100;

      if (isTop) {
        setColor('');
        setLogoColor(false);
      } else {
        setColor('white');
        setLogoColor(true);
      }
    });
    return function () {
      return document.removeEventListener("scroll", _this);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "toolbar ".concat(color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__toggle-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DrawerToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    click: props.drawerClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__container-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, renderLogo())), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "toolbar__items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/index#tus-intereses-primero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "C\xF3mo funciona") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    activeClass: "side-drawer--active",
    to: "tus-intereses-primero",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "C\xF3mo funciona")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/index#precios",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Precios") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    activeClass: "side-drawer--active",
    to: "precios",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Precios")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, props.external ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/index#academia-del-ahorro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Tips de ahorro") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    activeClass: "side-drawer--active",
    to: "academia-del-ahorro",
    offset: -120,
    duration: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Tips de ahorro"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "toolbar__button-group1",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Ingres\xE1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "toolbar__button-group1 ml-2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/demo');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Demo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-2 toolbar__button-group2",
    onClick: function onClick() {
      return window.location.assign('https://app.invuelto.com/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Ingres\xE1")));
});

/***/ })

})
//# sourceMappingURL=index.js.300ed3bb859a03f44a1f.hot-update.js.map