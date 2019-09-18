webpackHotUpdate("static/development/pages/vueltos.js",{

/***/ "./pages/vueltos.js":
/*!**************************!*\
  !*** ./pages/vueltos.js ***!
  \**************************/
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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SecondaryButton */ "./components/SecondaryButton.js");
/* harmony import */ var _modules_fetches__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/fetches */ "./modules/fetches.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sass_odometer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sass/_odometer.scss */ "./sass/_odometer.scss");
/* harmony import */ var _sass_odometer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_sass_odometer_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_VideoContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/VideoContainer */ "./components/VideoContainer.js");
/* harmony import */ var _components_tagManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tagManager */ "./components/tagManager.js");



var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/pages/vueltos.js";








var Odometer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-odometerjs */ "./node_modules/react-odometerjs/dist/index.js", 7));
}, {
  ssr: false,
  loading: function loading() {
    return 0;
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-odometerjs */ "./node_modules/react-odometerjs/dist/index.js")];
    },
    modules: ['react-odometerjs']
  }
});

var Vueltos = function Vueltos() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var ignore = false;

    var getCashBackCount =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_modules_fetches__WEBPACK_IMPORTED_MODULE_6__["getTotalCashBacks"])();

              case 2:
                response = _context.sent;
                if (!ignore) setCount(response.data.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getCashBackCount() {
        return _ref.apply(this, arguments);
      };
    }();

    getCashBackCount();
    return function () {
      ignore = true;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_tagManager__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gtmId: "GTM-5SSJRB7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "vueltos__jumbotron d-flex justify-content-between flex-lg-row flex-md-column flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "vueltos__jumbotron--images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/images/vueltos/formas-01.svg",
    className: "vueltos__image1",
    alt: "decorado",
    style: {
      zIndex: '-1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/images/vueltos/formas-02.svg",
    className: "vueltos__image2",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/images/vueltos/pig-enamorado.png",
    className: "vueltos__image3",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "vueltos__jumbotron--text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "mb-3",
    style: {
      lineHeight: '140%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "La soluci\xF3n a los problemas de cambio y redondeo ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Comenzar")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "text-primary text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\xA1", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Odometer, {
    duration: 3000,
    theme: "plaza",
    auto: true,
    value: count,
    format: "(ddd)",
    animation: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), " VUELTOS DADOS! "))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco1",
    src: "/static/images/vueltos/candy.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_VideoContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    videoId: "pF1Q5JgfAu0",
    iconVueltos: "/static/images/vueltos/dar-negocios.svg",
    icon1: "/static/images/vueltos/digito.svg",
    icon2: "/static/images/vueltos/sms.svg",
    icon3: "/static/images/vueltos/revisar.svg",
    title: "Quiero dar vueltos",
    subtitle: "para negocios",
    text1: "Vueltos de cualquier d\xEDgito ($1,00; 12,33 \xF3 9,76)",
    text2: "Acreditaci\xF3n autom\xE1tica a tus clientes con o sin cuenta",
    text3: "Ver y revisar vueltos con un click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Activ\xE1 tu alcanc\xEDa")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco2",
    src: "/static/images/vueltos/moneda.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco5",
    src: "/static/images/vueltos/circle.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco7",
    src: "/static/images/vueltos/circle.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco4",
    src: "/static/images/vueltos/candy.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_VideoContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    iconVueltos: "/static/images/vueltos/dar-vueltos.svg",
    icon1: "/static/images/vueltos/sms.svg",
    icon2: "/static/images/vueltos/activala.svg",
    icon3: "/static/images/vueltos/crecen.svg",
    title: "Quiero mi vuelto",
    subtitle: "para usuarios",
    text1: "Tu vuelto a tu celu por sms",
    text2: "\xBFNo ten\xE9s cuenta? Activala gratis.",
    text3: "Revis\xE1 como crecen d\xEDa a d\xEDa tus vueltos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Empez\xE1 a ahorrar"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco3",
    src: "/static/images/vueltos/moneda.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "footer__container",
    style: {
      height: '550px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "vueltos__footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "text-color3",
    style: {
      fontSize: '25px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Enterate de nuestras novedades "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "d-lg-flex flex-md-column mt-5 justify-content-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "text-color3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "invuelto"), ".com"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "ml-3",
    target: "__blank",
    rel: "noopener noreferrer",
    href: "https://facebook.com/invuelto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: "redes",
    src: "../static/images/fb.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "ml-3",
    target: "__blank",
    rel: "noopener noreferrer",
    href: "https://linkedin.com/in/invuelto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: "redes",
    src: "../static/images/in.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "ml-3",
    target: "__blank",
    rel: "noopener noreferrer",
    href: "https://instagram.com/invuelto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: "redes",
    src: "../static/images/insta.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    className: "ml-3",
    target: "__blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/invuelto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: "redes",
    src: "../static/images/twitter.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "footer__social-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    alt: "decorado",
    className: "footer__circle2",
    src: "../static/images/circle-security2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: "deco6",
    src: "/static/images/vueltos/circle-2.svg",
    alt: "decorado",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Vueltos);

/***/ })

})
//# sourceMappingURL=vueltos.js.e94240a1912b98bfbbfa.hot-update.js.map