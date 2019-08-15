webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BlogPreview.js":
/*!***********************************!*\
  !*** ./components/BlogPreview.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_fetches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/fetches */ "./modules/fetches.js");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/constants */ "./modules/constants.js");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_constants__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/BlogPreview.js";





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      post = _useState2[0],
      setPost = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var ignore = false;
    var slug = props.url.split('/').pop();

    var getPost =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_modules_fetches__WEBPACK_IMPORTED_MODULE_4__["getPostBySlug"])(slug);

              case 2:
                response = _context.sent;
                if (!ignore) setPost(response.data.post);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getPost(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    getPost(slug);
    return function () {
      ignore = true;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    target: "__blank",
    rel: "noopener noreferrer",
    href: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "preview__image mx-auto",
    style: {
      backgroundImage: "".concat(props.showImages ? "url(".concat(_modules_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/images/").concat(post.image, ") ") : '')
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "preview__title mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, post.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "mb-5",
    target: "__blank",
    rel: "noopener noreferrer",
    href: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Leer nota"));
});

/***/ })

})
//# sourceMappingURL=index.js.b4906c5b029d362e5155.hot-update.js.map