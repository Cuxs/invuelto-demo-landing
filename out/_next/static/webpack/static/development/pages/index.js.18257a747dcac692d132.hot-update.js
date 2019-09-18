webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/tagManager.js":
/*!**********************************!*\
  !*** ./components/tagManager.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-tag-manager */ "./node_modules/react-google-tag-manager/lib/index.js");
/* harmony import */ var react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/mariano/Trabajo/Invuelto/invuelto-landing/components/tagManager.js";



var GoogleTagManager =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GoogleTagManager, _React$Component);

  function GoogleTagManager() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GoogleTagManager);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GoogleTagManager).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GoogleTagManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dataLayerName = this.props.dataLayerName || 'dataLayer';
      var scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';

      if (!window[dataLayerName]) {
        var gtmScriptNode = document.getElementById(scriptId);
        eval(gtmScriptNode.textContent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var gtm = react_google_tag_manager__WEBPACK_IMPORTED_MODULE_6___default()({
        id: this.props.gtmId,
        dataLayerName: this.props.dataLayerName || 'dataLayer',
        additionalEvents: this.props.additionalEvents || {},
        previewVariables: this.props.previewVariables || false
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, gtm.noScriptAsReact()), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: this.props.scriptId || 'react-google-tag-manager-gtm',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, gtm.scriptAsReact()));
    }
  }]);

  return GoogleTagManager;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GoogleTagManager);

/***/ }),

/***/ "./node_modules/react-google-tag-manager/lib/build_parts.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-google-tag-manager/lib/build_parts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function convertToKeyValueString(obj) {
    return JSON.stringify(obj).slice(1, -1);
}

function buildParts(_ref) {
    var id = _ref.id,
        _ref$dataLayerName = _ref.dataLayerName,
        dataLayerName = _ref$dataLayerName === undefined ? 'dataLayer' : _ref$dataLayerName,
        _ref$additionalEvents = _ref.additionalEvents,
        additionalEvents = _ref$additionalEvents === undefined ? {} : _ref$additionalEvents,
        _ref$scheme = _ref.scheme,
        scheme = _ref$scheme === undefined ? '' : _ref$scheme,
        previewVariables = _ref.previewVariables;

    if (id === undefined) {
        throw new Error('No GTM id provided');
    }

    var iframe = '\n        <iframe src="' + scheme + '//www.googletagmanager.com/ns.html?id=' + id + '"\n            height="0" width="0" style="display:none;visibility:hidden"></iframe>';

    var script = '\n        (function(w,d,s,l,i){w[l]=w[l]||[];\n            w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + convertToKeyValueString(additionalEvents) + '});\n            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';\n            j.async=true;j.src=\'' + scheme + '//www.googletagmanager.com/gtm.js?id=\'+i+dl\n            ' + (previewVariables ? '+"' + previewVariables + '"' : '') + ';\n            f.parentNode.insertBefore(j,f);\n        })(window,document,\'script\',\'' + dataLayerName + '\',\'' + id + '\');';

    return {
        iframe: iframe,
        script: script
    };
}

exports.default = buildParts;

/***/ }),

/***/ "./node_modules/react-google-tag-manager/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-google-tag-manager/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _build_parts = __webpack_require__(/*! ./build_parts */ "./node_modules/react-google-tag-manager/lib/build_parts.js");

var _build_parts2 = _interopRequireDefault(_build_parts);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GTMParts(args) {
    var parts = (0, _build_parts2.default)(args);

    function noScriptAsReact() {
        return _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: parts.iframe } });
    }

    function noScriptAsHTML() {
        return '<noscript>' + parts.iframe + '</noscript>';
    }

    function scriptAsReact() {
        return _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: parts.script } });
    }

    function scriptAsHTML() {
        return '<script>' + parts.script + '</script>';
    }

    return {
        noScriptAsReact: noScriptAsReact,
        noScriptAsHTML: noScriptAsHTML,
        scriptAsReact: scriptAsReact,
        scriptAsHTML: scriptAsHTML
    };
}

exports.default = GTMParts;

/***/ }),

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
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hotjar */ "./node_modules/react-hotjar/index.js");
/* harmony import */ var react_hotjar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hotjar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_IntroComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/IntroComponent */ "./components/IntroComponent.js");
/* harmony import */ var _components_HowToComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HowToComponent */ "./components/HowToComponent.js");
/* harmony import */ var _components_Area1Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Area1Component */ "./components/Area1Component.js");
/* harmony import */ var _components_Area2Component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Area2Component */ "./components/Area2Component.js");
/* harmony import */ var _components_Area3Component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Area3Component */ "./components/Area3Component.js");
/* harmony import */ var _components_SecurityComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SecurityComponent */ "./components/SecurityComponent.js");
/* harmony import */ var _components_PricingComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PricingComponent */ "./components/PricingComponent.js");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/FooterComponent */ "./components/FooterComponent.js");
/* harmony import */ var _components_tagManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/tagManager */ "./components/tagManager.js");

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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    react_hotjar__WEBPACK_IMPORTED_MODULE_4__["hotjar"].initialize(1063100, 6);
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_tagManager__WEBPACK_IMPORTED_MODULE_17__["default"], {
    gtmId: "GTM-5SSJRB7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_easy_swipe__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onSwipeLeft: function onSwipeLeft() {
      return toggleSideDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Invuelto, tu alcanc\xEDa digital",
    description: "Desarrollamos una herramienta con la que ahora s\xED vas a poder ahorrar, cuidamos tu plata de la inflaci\xF3n ya que tus ahorros generan intereses a tu favor. Vos eleg\xEDs el monto y la forma de ingresar dinero.",
    url: "www.invuelto.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: sideDrawerOpen,
    toggle: toggleSideDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IntroComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      return toggleVisibilityGroup2(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area1Component__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      return toggleVisibilityGroup2(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HowToComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    showImages: group2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area2Component__WEBPACK_IMPORTED_MODULE_12__["default"], {
    showImages: group2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
      toggleVisibilityGroup4(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area3Component__WEBPACK_IMPORTED_MODULE_13__["default"], {
    showImages: group3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SecurityComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
    showImages: group3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    fireOnRapidScroll: false,
    onEnter: function onEnter() {
      toggleVisibilityGroup2(true);
      toggleVisibilityGroup3(true);
      toggleVisibilityGroup4(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PricingComponent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    showImages: group4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
    showImages: group4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.18257a747dcac692d132.hot-update.js.map