webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/consolidated-events/lib/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/consolidated-events/lib/index.esm.js ***!
  \***********************************************************/
/*! exports provided: addEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
var CAN_USE_DOM = !!( true && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ "./node_modules/react-waypoint/es/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-waypoint/es/index.js ***!
  \*************************************************/
/*! exports provided: Waypoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waypoint", function() { return Waypoint; });
/* harmony import */ var consolidated_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! consolidated-events */ "./node_modules/consolidated-events/lib/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * Attempts to parse the offset provided as a prop as a percentage. For
 * instance, if the component has been provided with the string "20%" as
 * a value of one of the offset props. If the value matches, then it returns
 * a numeric version of the prop. For instance, "20%" would become `0.2`.
 * If `str` isn't a percentage, then `undefined` will be returned.
 *
 * @param {string} str The value of an offset prop to be converted to a
 *   number.
 * @return {number|undefined} The numeric version of `str`. Undefined if `str`
 *   was not a percentage.
 */
function parseOffsetAsPercentage(str) {
  if (str.slice(-1) === '%') {
    return parseFloat(str.slice(0, -1)) / 100;
  }

  return undefined;
}

/**
 * Attempts to parse the offset provided as a prop as a pixel value. If
 * parsing fails, then `undefined` is returned. Three examples of values that
 * will be successfully parsed are:
 * `20`
 * "20px"
 * "20"
 *
 * @param {string|number} str A string of the form "{number}" or "{number}px",
 *   or just a number.
 * @return {number|undefined} The numeric version of `str`. Undefined if `str`
 *   was neither a number nor string ending in "px".
 */
function parseOffsetAsPixels(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str)) {
    return parseFloat(str);
  }

  if (str.slice(-2) === 'px') {
    return parseFloat(str.slice(0, -2));
  }

  return undefined;
}

/**
 * @param {string|number} offset
 * @param {number} contextHeight
 * @return {number} A number representing `offset` converted into pixels.
 */

function computeOffsetPixels(offset, contextHeight) {
  var pixelOffset = parseOffsetAsPixels(offset);

  if (typeof pixelOffset === 'number') {
    return pixelOffset;
  }

  var percentOffset = parseOffsetAsPercentage(offset);

  if (typeof percentOffset === 'number') {
    return percentOffset * contextHeight;
  }

  return undefined;
}

var ABOVE = 'above';
var INSIDE = 'inside';
var BELOW = 'below';
var INVISIBLE = 'invisible';

function debugLog() {
  if (true) {
    var _console;

    (_console = console).log.apply(_console, arguments); // eslint-disable-line no-console

  }
}

/**
 * When an element's type is a string, it represents a DOM node with that tag name
 * https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html#dom-elements
 *
 * @param {React.element} Component
 * @return {bool} Whether the component is a DOM Element
 */
function isDOMElement(Component) {
  return typeof Component.type === 'string';
}

var errorMessage = '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a ' + 'DOM element (e.g. <div>) nor does it use the innerRef prop.\n\n' + 'See https://goo.gl/LrBNgw for more info.';
/**
 * Raise an error if "children" is not a DOM Element and there is no ref provided to Waypoint
 *
 * @param {?React.element} children
 * @param {?HTMLElement} ref
 * @return {undefined}
 */

function ensureRefIsProvidedByChild(children, ref) {
  if (children && !isDOMElement(children) && !ref) {
    throw new Error(errorMessage);
  }
}

/**
 * @param {object} bounds An object with bounds data for the waypoint and
 *   scrollable parent
 * @return {string} The current position of the waypoint in relation to the
 *   visible portion of the scrollable parent. One of the constants `ABOVE`,
 *   `BELOW`, `INSIDE` or `INVISIBLE`.
 */

function getCurrentPosition(bounds) {
  if (bounds.viewportBottom - bounds.viewportTop === 0) {
    return INVISIBLE;
  } // top is within the viewport


  if (bounds.viewportTop <= bounds.waypointTop && bounds.waypointTop <= bounds.viewportBottom) {
    return INSIDE;
  } // bottom is within the viewport


  if (bounds.viewportTop <= bounds.waypointBottom && bounds.waypointBottom <= bounds.viewportBottom) {
    return INSIDE;
  } // top is above the viewport and bottom is below the viewport


  if (bounds.waypointTop <= bounds.viewportTop && bounds.viewportBottom <= bounds.waypointBottom) {
    return INSIDE;
  }

  if (bounds.viewportBottom < bounds.waypointTop) {
    return BELOW;
  }

  if (bounds.waypointTop < bounds.viewportTop) {
    return ABOVE;
  }

  return INVISIBLE;
}

var timeout;
var timeoutQueue = [];
function onNextTick(cb) {
  timeoutQueue.push(cb);

  if (!timeout) {
    timeout = setTimeout(function () {
      timeout = null; // Drain the timeoutQueue

      var item; // eslint-disable-next-line no-cond-assign

      while (item = timeoutQueue.shift()) {
        item();
      }
    }, 0);
  }

  var isSubscribed = true;
  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }

    isSubscribed = false;
    var index = timeoutQueue.indexOf(cb);

    if (index === -1) {
      return;
    }

    timeoutQueue.splice(index, 1);

    if (!timeoutQueue.length && timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}

function resolveScrollableAncestorProp(scrollableAncestor) {
  // When Waypoint is rendered on the server, `window` is not available.
  // To make Waypoint easier to work with, we allow this to be specified in
  // string form and safely convert to `window` here.
  if (scrollableAncestor === 'window') {
    return global.window;
  }

  return scrollableAncestor;
}

var defaultProps = {
  debug: false,
  scrollableAncestor: undefined,
  children: undefined,
  topOffset: '0px',
  bottomOffset: '0px',
  horizontal: false,
  onEnter: function onEnter() {},
  onLeave: function onLeave() {},
  onPositionChange: function onPositionChange() {},
  fireOnRapidScroll: true
}; // Calls a function when you scroll to the element.

var Waypoint =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Waypoint, _React$PureComponent);

  function Waypoint(props) {
    var _this;

    _classCallCheck(this, Waypoint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Waypoint).call(this, props));

    _this.refElement = function (e) {
      _this._ref = e;
    };

    return _this;
  }

  _createClass(Waypoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Waypoint.getWindow()) {
        return;
      } // this._ref may occasionally not be set at this time. To help ensure that
      // this works smoothly and to avoid layout thrashing, we want to delay the
      // initial execution until the next tick.


      this.cancelOnNextTick = onNextTick(function () {
        _this2.cancelOnNextTick = null;
        var _this2$props = _this2.props,
            children = _this2$props.children,
            debug = _this2$props.debug; // Berofe doing anything, we want to check that this._ref is avaliable in Waypoint

        ensureRefIsProvidedByChild(children, _this2._ref);
        _this2._handleScroll = _this2._handleScroll.bind(_this2);
        _this2.scrollableAncestor = _this2._findScrollableAncestor();

        if ( true && debug) {
          debugLog('scrollableAncestor', _this2.scrollableAncestor);
        }

        _this2.scrollEventListenerUnsubscribe = Object(consolidated_events__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(_this2.scrollableAncestor, 'scroll', _this2._handleScroll, {
          passive: true
        });
        _this2.resizeEventListenerUnsubscribe = Object(consolidated_events__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(window, 'resize', _this2._handleScroll, {
          passive: true
        });

        _this2._handleScroll(null);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (!Waypoint.getWindow()) {
        return;
      }

      if (!this.scrollableAncestor) {
        // The Waypoint has not yet initialized.
        return;
      } // The element may have moved, so we need to recompute its position on the
      // page. This happens via handleScroll in a way that forces layout to be
      // computed.
      //
      // We want this to be deferred to avoid forcing layout during render, which
      // causes layout thrashing. And, if we already have this work enqueued, we
      // can just wait for that to happen instead of enqueueing again.


      if (this.cancelOnNextTick) {
        return;
      }

      this.cancelOnNextTick = onNextTick(function () {
        _this3.cancelOnNextTick = null;

        _this3._handleScroll(null);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!Waypoint.getWindow()) {
        return;
      }

      if (this.scrollEventListenerUnsubscribe) {
        this.scrollEventListenerUnsubscribe();
      }

      if (this.resizeEventListenerUnsubscribe) {
        this.resizeEventListenerUnsubscribe();
      }

      if (this.cancelOnNextTick) {
        this.cancelOnNextTick();
      }
    }
    /**
     * Traverses up the DOM to find an ancestor container which has an overflow
     * style that allows for scrolling.
     *
     * @return {Object} the closest ancestor element with an overflow style that
     *   allows for scrolling. If none is found, the `window` object is returned
     *   as a fallback.
     */

  }, {
    key: "_findScrollableAncestor",
    value: function _findScrollableAncestor() {
      var _this$props = this.props,
          horizontal = _this$props.horizontal,
          scrollableAncestor = _this$props.scrollableAncestor;

      if (scrollableAncestor) {
        return resolveScrollableAncestorProp(scrollableAncestor);
      }

      var node = this._ref;

      while (node.parentNode) {
        node = node.parentNode;

        if (node === document.body) {
          // We've reached all the way to the root node.
          return window;
        }

        var style = window.getComputedStyle(node);
        var overflowDirec = horizontal ? style.getPropertyValue('overflow-x') : style.getPropertyValue('overflow-y');
        var overflow = overflowDirec || style.getPropertyValue('overflow');

        if (overflow === 'auto' || overflow === 'scroll') {
          return node;
        }
      } // A scrollable ancestor element was not found, which means that we need to
      // do stuff on window.


      return window;
    }
    /**
     * @param {Object} event the native scroll event coming from the scrollable
     *   ancestor, or resize event coming from the window. Will be undefined if
     *   called by a React lifecyle method
     */

  }, {
    key: "_handleScroll",
    value: function _handleScroll(event) {
      if (!this._ref) {
        // There's a chance we end up here after the component has been unmounted.
        return;
      }

      var bounds = this._getBounds();

      var currentPosition = getCurrentPosition(bounds);
      var previousPosition = this._previousPosition;
      var _this$props2 = this.props,
          debug = _this$props2.debug,
          onPositionChange = _this$props2.onPositionChange,
          onEnter = _this$props2.onEnter,
          onLeave = _this$props2.onLeave,
          fireOnRapidScroll = _this$props2.fireOnRapidScroll;

      if ( true && debug) {
        debugLog('currentPosition', currentPosition);
        debugLog('previousPosition', previousPosition);
      } // Save previous position as early as possible to prevent cycles


      this._previousPosition = currentPosition;

      if (previousPosition === currentPosition) {
        // No change since last trigger
        return;
      }

      var callbackArg = {
        currentPosition: currentPosition,
        previousPosition: previousPosition,
        event: event,
        waypointTop: bounds.waypointTop,
        waypointBottom: bounds.waypointBottom,
        viewportTop: bounds.viewportTop,
        viewportBottom: bounds.viewportBottom
      };
      onPositionChange.call(this, callbackArg);

      if (currentPosition === INSIDE) {
        onEnter.call(this, callbackArg);
      } else if (previousPosition === INSIDE) {
        onLeave.call(this, callbackArg);
      }

      var isRapidScrollDown = previousPosition === BELOW && currentPosition === ABOVE;
      var isRapidScrollUp = previousPosition === ABOVE && currentPosition === BELOW;

      if (fireOnRapidScroll && (isRapidScrollDown || isRapidScrollUp)) {
        // If the scroll event isn't fired often enough to occur while the
        // waypoint was visible, we trigger both callbacks anyway.
        onEnter.call(this, {
          currentPosition: INSIDE,
          previousPosition: previousPosition,
          event: event,
          waypointTop: bounds.waypointTop,
          waypointBottom: bounds.waypointBottom,
          viewportTop: bounds.viewportTop,
          viewportBottom: bounds.viewportBottom
        });
        onLeave.call(this, {
          currentPosition: currentPosition,
          previousPosition: INSIDE,
          event: event,
          waypointTop: bounds.waypointTop,
          waypointBottom: bounds.waypointBottom,
          viewportTop: bounds.viewportTop,
          viewportBottom: bounds.viewportBottom
        });
      }
    }
  }, {
    key: "_getBounds",
    value: function _getBounds() {
      var _this$props3 = this.props,
          horizontal = _this$props3.horizontal,
          debug = _this$props3.debug;

      var _this$_ref$getBoundin = this._ref.getBoundingClientRect(),
          left = _this$_ref$getBoundin.left,
          top = _this$_ref$getBoundin.top,
          right = _this$_ref$getBoundin.right,
          bottom = _this$_ref$getBoundin.bottom;

      var waypointTop = horizontal ? left : top;
      var waypointBottom = horizontal ? right : bottom;
      var contextHeight;
      var contextScrollTop;

      if (this.scrollableAncestor === window) {
        contextHeight = horizontal ? window.innerWidth : window.innerHeight;
        contextScrollTop = 0;
      } else {
        contextHeight = horizontal ? this.scrollableAncestor.offsetWidth : this.scrollableAncestor.offsetHeight;
        contextScrollTop = horizontal ? this.scrollableAncestor.getBoundingClientRect().left : this.scrollableAncestor.getBoundingClientRect().top;
      }

      if ( true && debug) {
        debugLog('waypoint top', waypointTop);
        debugLog('waypoint bottom', waypointBottom);
        debugLog('scrollableAncestor height', contextHeight);
        debugLog('scrollableAncestor scrollTop', contextScrollTop);
      }

      var _this$props4 = this.props,
          bottomOffset = _this$props4.bottomOffset,
          topOffset = _this$props4.topOffset;
      var topOffsetPx = computeOffsetPixels(topOffset, contextHeight);
      var bottomOffsetPx = computeOffsetPixels(bottomOffset, contextHeight);
      var contextBottom = contextScrollTop + contextHeight;
      return {
        waypointTop: waypointTop,
        waypointBottom: waypointBottom,
        viewportTop: contextScrollTop + topOffsetPx,
        viewportBottom: contextBottom - bottomOffsetPx
      };
    }
    /**
     * @return {Object}
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var children = this.props.children;

      if (!children) {
        // We need an element that we can locate in the DOM to determine where it is
        // rendered relative to the top of its context.
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          ref: this.refElement,
          style: {
            fontSize: 0
          }
        });
      }

      if (isDOMElement(children) || Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isForwardRef"])(children)) {
        var ref = function ref(node) {
          _this4.refElement(node);

          if (children.ref) {
            if (typeof children.ref === 'function') {
              children.ref(node);
            } else {
              children.ref.current = node;
            }
          }
        };

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {
          ref: ref
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(children, {
        innerRef: this.refElement
      });
    }
  }]);

  return Waypoint;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent);

if (true) {
  Waypoint.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    debug: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onPositionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    fireOnRapidScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    // eslint-disable-next-line react/forbid-prop-types
    scrollableAncestor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    // `topOffset` can either be a number, in which case its a distance from the
    // top of the container in pixels, or a string value. Valid string values are
    // of the form "20px", which is parsed as pixels, or "20%", which is parsed
    // as a percentage of the height of the containing element.
    // For instance, if you pass "-20%", and the containing element is 100px tall,
    // then the waypoint will be triggered when it has been scrolled 20px beyond
    // the top of the containing element.
    topOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
    // `bottomOffset` is like `topOffset`, but for the bottom of the container.
    bottomOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
  };
}

Waypoint.above = ABOVE;
Waypoint.below = BELOW;
Waypoint.inside = INSIDE;
Waypoint.invisible = INVISIBLE;

Waypoint.getWindow = function () {
  if (true) {
    return window;
  }

  return undefined;
};

Waypoint.defaultProps = defaultProps;
Waypoint.displayName = 'Waypoint';



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Jumbotron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Jumbotron */ "./components/Jumbotron.js");
/* harmony import */ var _components_IntroComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IntroComponent */ "./components/IntroComponent.js");
/* harmony import */ var _components_HowToComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HowToComponent */ "./components/HowToComponent.js");
/* harmony import */ var _components_Area1Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Area1Component */ "./components/Area1Component.js");
/* harmony import */ var _components_Area2Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Area2Component */ "./components/Area2Component.js");
/* harmony import */ var _components_Area3Component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Area3Component */ "./components/Area3Component.js");
/* harmony import */ var _components_SecurityComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SecurityComponent */ "./components/SecurityComponent.js");
/* harmony import */ var _components_PricingComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PricingComponent */ "./components/PricingComponent.js");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/FooterComponent */ "./components/FooterComponent.js");

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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Invuelto, tu alcanc\xEDa digital",
    description: "Cuidamos tu plata de la inflaci\xF3n y te ayudamos a ahorrar.",
    url: "www.invuelto.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), group1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Jumbotron__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_IntroComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: toggleVisibilityGroup2(true),
    onLeave: toggleVisibilityGroup1(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), group2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HowToComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area1Component__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: toggleVisibilityGroup2(false),
    onLeave: toggleVisibilityGroup3(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), group3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area2Component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Area3Component__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_waypoint__WEBPACK_IMPORTED_MODULE_2__["Waypoint"], {
    onEnter: toggleVisibilityGroup3(false),
    onLeave: toggleVisibilityGroup4(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), group4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SecurityComponent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PricingComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9830a5139aaaa5e5942b.hot-update.js.map