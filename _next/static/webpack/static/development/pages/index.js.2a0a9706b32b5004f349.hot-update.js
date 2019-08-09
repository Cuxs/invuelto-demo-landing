webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Area3Component.js":
/*!**************************************!*\
  !*** ./components/Area3Component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microlink_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microlink/react */ "./node_modules/@microlink/react/dist/microlink.m.js");
var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/Area3Component.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(node_fetch__WEBPACK_IMPORTED_MODULE_2__["fetch"])("https://blog.invuelto.com/post/Cuanto-tengo-que-ahorrar-por-mes").then(function (data) {
    console.log(data.title);
  })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area3__container",
    id: "academia-del-ahorro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Academia del ahorro")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mt-5 text-secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Te ense\xF1amos c\xF3mo sacarle el"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-secondary mb-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "m\xE1ximo provecho a tu dinero."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-block d-md-flex justify-content-around mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "microlink__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_microlink_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://blog.invuelto.com/post/Cuanto-tengo-que-ahorrar-por-mes",
    size: "large",
    style: {
      fontFamily: "Mazzard H', sans-serif !important;"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "microlink__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_microlink_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://blog.invuelto.com/post/3-lecciones-para-manejar-mi-dinero-que-aprendi-tarde",
    size: "large",
    style: {
      fontFamily: "Mazzard H', sans-serif !important;"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "microlink__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_microlink_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://blog.invuelto.com/post/4-reglas-basicas-para-manejar-tu-plata",
    size: "large",
    style: {
      fontFamily: "Mazzard H', sans-serif !important;"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))));
});

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (true) { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ })

})
//# sourceMappingURL=index.js.2a0a9706b32b5004f349.hot-update.js.map