function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$3 = Symbol.for("react.lazy"), z$4 = Symbol.iterator;
function A$3(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$4 && a[z$4] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$4 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$2(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e || B$4;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$2.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$3() {
}
F$3.prototype = E$2.prototype;
function G$4(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e || B$4;
}
var H$3 = G$4.prototype = new F$3();
H$3.constructor = G$4;
C$3(H$3, E$2.prototype);
H$3.isPureReactComponent = true;
var I$4 = Array.isArray, J$3 = Object.prototype.hasOwnProperty, K$4 = { current: null }, L$4 = { key: true, ref: true, __self: true, __source: true };
function M$3(a, b2, e) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$3.call(b2, d2) && !L$4.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c2, _owner: K$4.current };
}
function N$3(a, b2) {
  return { $$typeof: l$2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$3(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$3 = /\/+/g;
function Q$4(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$3(a, b2, e, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h2 = false;
  if (null === a) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$2:
        case n$1:
          h2 = true;
      }
  }
  if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$4(h2, 0) : d2, I$4(c2) ? (e = "", null != a && (e = a.replace(P$3, "$&/") + "/"), R$3(c2, b2, e, "", function(a2) {
    return a2;
  })) : null != c2 && (O$3(c2) && (c2 = N$3(c2, e + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$3, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$4(a)) for (var g2 = 0; g2 < a.length; g2++) {
    k2 = a[g2];
    var f2 = d2 + Q$4(k2, g2);
    h2 += R$3(k2, b2, e, f2, c2);
  }
  else if (f2 = A$3(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$4(k2, g2++), h2 += R$3(k2, b2, e, f2, c2);
  else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$3(a, b2, e) {
  if (null == a) return a;
  var d2 = [], c2 = 0;
  R$3(a, d2, "", "", function(a2) {
    return b2.call(e, a2, c2++);
  });
  return d2;
}
function T$3(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$4 = { current: null }, V$4 = { transition: null }, W$4 = { ReactCurrentDispatcher: U$4, ReactCurrentBatchConfig: V$4, ReactCurrentOwner: K$4 };
function X$4() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$3, forEach: function(a, b2, e) {
  S$3(a, function() {
    b2.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b2 = 0;
  S$3(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$3(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$3(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$4;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$4;
react_production_min.act = X$4;
react_production_min.cloneElement = function(a, b2, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$3({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$4.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
    for (f2 in b2) J$3.call(b2, f2) && !L$4.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$3;
react_production_min.createFactory = function(a) {
  var b2 = M$3.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$3, render: a };
};
react_production_min.isValidElement = O$3;
react_production_min.lazy = function(a) {
  return { $$typeof: y$3, _payload: { _status: -1, _result: a }, _init: T$3 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$2, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$4.transition;
  V$4.transition = {};
  try {
    a();
  } finally {
    V$4.transition = b2;
  }
};
react_production_min.unstable_act = X$4;
react_production_min.useCallback = function(a, b2) {
  return U$4.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$4.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$4.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$4.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$4.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e) {
  return U$4.current.useImperativeHandle(a, b2, e);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$4.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$4.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$4.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e) {
  return U$4.current.useReducer(a, b2, e);
};
react_production_min.useRef = function(a) {
  return U$4.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$4.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e) {
  return U$4.current.useSyncExternalStore(a, b2, e);
};
react_production_min.useTransition = function() {
  return U$4.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const t = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$2 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$2 = { key: true, ref: true, __self: true, __source: true };
function q$2(c2, a, g2) {
  var b2, d2 = {}, e = null, h2 = null;
  void 0 !== g2 && (e = "" + g2);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a) m$3.call(a, b2) && !p$2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$2, type: c2, key: e, ref: h2, props: d2, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e = a[d2];
      if (0 < g2(e, b2)) a[d2] = b2, a[c2] = e, c2 = d2;
      else break a;
    }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a: for (var d2 = 0, e = a.length, w2 = e >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g2(C2, c2)) n2 < e && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
        else if (n2 < e && 0 > g2(x2, c2)) a[d2] = x2, a[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a);
    }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c2 + e;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$1(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++) da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$2(a, b2, c2, d2, e, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$3 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$3[a] = new v$2(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$3[b2] = new v$2(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$3[a] = new v$2(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$3[a] = new v$2(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$3[a] = new v$2(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$3[a] = new v$2(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$3[a] = new v$2(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$3[a] = new v$2(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$3[a] = new v$2(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$3[b2] = new v$2(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$3[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$3[a] = new v$2(a, 1, false, a.toLowerCase(), null, false, false);
});
z$3.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$3[a] = new v$2(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e = z$3.hasOwnProperty(b2) ? z$3[b2] : null;
  if (null !== e ? 0 !== e.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d2) && (c2 = null), d2 || null === e ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d2 = e.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$2 = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e[g2] !== f2[h2]) {
              var k2 = "\n" + e[g2].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a.render;
      a = a.displayName;
      a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
    case Ha:
      b2 = a._payload;
      a = a._init;
      try {
        return Qa(a(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b2 = a._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
  } else a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
    for (c2 = 0; c2 < a.length; c2++) e = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e && (a[c2].selected = e), e && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c2) {
        a[e].selected = true;
        d2 && (a[e].defaultSelected = true);
        return;
      }
      null !== b2 || a[e].disabled || (b2 = a[e]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$1(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$1(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b2.firstChild; ) a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a.setProperty(c2, e) : a[c2] = e;
  }
}
var tb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$1(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$1(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$1(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p$1(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib) return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d2;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$1(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b2, c2, d2, e, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$1(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p$1(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2) throw Error(p$1(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e = c2.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d2 = e.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c2) return Xb(e), a;
        if (f2 === d2) return Xb(e), b2;
        f2 = f2.sibling;
      }
      throw Error(p$1(188));
    }
    if (c2.return !== d2.return) c2 = e, d2 = f2;
    else {
      for (var g2 = false, h2 = e.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$1(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$1(190));
  }
  if (3 !== c2.tag) throw Error(p$1(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2) return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$3 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e) && (e = d2 & -d2, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d2 |= a[c2], b2 &= ~e;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e[g2] = vc(h2, b2);
    } else k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e = 31 - oc(c2), f2 = 1 << e;
    b2[e] = 0;
    d2[e] = -1;
    a[e] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e = 1 << d2;
    e & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e;
  }
}
var C$2 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e && -1 === b2.indexOf(e) && b2.push(e);
  return a;
}
function Uc(a, b2, c2, d2, e) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 1, fd(a, b2, c2, d2);
  } finally {
    C$2 = e, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 4, fd(a, b2, c2, d2);
  } finally {
    C$2 = e, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e = Yc(a, b2, c2, d2);
    if (null === e) hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e, a, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d2.stopPropagation();
    } else hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a) if (b2 = Vb(a), null === b2) a = null;
  else if (c2 = b2.tag, 13 === c2) {
    a = Wb(b2);
    if (null !== a) return a;
    a = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a = null;
  } else b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b2 = ld, c2 = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c2 && b2[a] === e[a]; a++) ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e[f2 - d2]; d2++) ;
  return md = e.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e, f2, g2) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$2({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$2 = ia && "CompositionEvent" in window, be$2 = null;
ia && "documentMode" in document && (be$2 = document.documentMode);
var ce$2 = ia && "TextEvent" in window && !be$2, de$1 = ia && (!ae$2 || be$2 && 8 < be$2 && 11 >= be$2), ee$2 = String.fromCharCode(32), fe$2 = false;
function ge$2(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$2(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie$2 = false;
function je$2(a, b2) {
  switch (a) {
    case "compositionend":
      return he$2(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$2 = true;
      return ee$2;
    case "textInput":
      return a = b2.data, a === ee$2 && fe$2 ? null : a;
    default:
      return null;
  }
}
function ke$2(a, b2) {
  if (ie$2) return "compositionend" === a || !ae$2 && ge$2(a, b2) ? (a = nd(), md = ld = kd = null, ie$2 = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le$2[a.type] : "textarea" === b2 ? true : false;
}
function ne$2(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe$2(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$2 = null;
function re$2(a) {
  se$2(a, 0);
}
function te$2(a) {
  var b2 = ue$2(a);
  if (Wa(b2)) return a;
}
function ve$2(a, b2) {
  if ("change" === a) return b2;
}
var we$2 = false;
if (ia) {
  var xe$2;
  if (ia) {
    var ye$2 = "oninput" in document;
    if (!ye$2) {
      var ze$2 = document.createElement("div");
      ze$2.setAttribute("oninput", "return;");
      ye$2 = "function" === typeof ze$2.oninput;
    }
    xe$2 = ye$2;
  } else xe$2 = false;
  we$2 = xe$2 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$2() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$2 = pe$1 = null);
}
function Be$1(a) {
  if ("value" === a.propertyName && te$2(qe$2)) {
    var b2 = [];
    ne$2(b2, qe$2, a, xb(a));
    Jb(re$2, b2);
  }
}
function Ce$2(a, b2, c2) {
  "focusin" === a ? (Ae$2(), pe$1 = b2, qe$2 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a && Ae$2();
}
function De$2(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te$2(qe$2);
}
function Ee$2(a, b2) {
  if ("click" === a) return te$2(b2);
}
function Fe$2(a, b2) {
  if ("input" === a || "change" === a) return te$2(b2);
}
function Ge$2(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He$2 = "function" === typeof Object.is ? Object.is : Ge$2;
function Ie$2(a, b2) {
  if (He$2(a, b2)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e = c2[d2];
    if (!ja.call(b2, e) || !He$2(a[e], b2[e])) return false;
  }
  return true;
}
function Je$1(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke$2(a, b2) {
  var c2 = Je$1(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$1(c2);
  }
}
function Le$1(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$2() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a = b2.contentWindow;
    else break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne$2(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe$2(a) {
  var b2 = Me$2(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$2(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c2.textContent.length, f2 = Math.min(d2.start, e);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e);
        !a.extend && f2 > d2 && (e = d2, d2 = f2, f2 = e);
        e = Ke$2(c2, f2);
        var g2 = Ke$2(
          c2,
          d2
        );
        e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe$2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe$2 = null, Re$2 = null, Se$2 = null, Te$2 = false;
function Ue$2(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$2 || null == Qe$2 || Qe$2 !== Xa(d2) || (d2 = Qe$2, "selectionStart" in d2 && Ne$2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$2 && Ie$2(Se$2, d2) || (Se$2 = d2, d2 = oe$2(Re$2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe$2)));
}
function Ve$2(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We$2 = { animationend: Ve$2("Animation", "AnimationEnd"), animationiteration: Ve$2("Animation", "AnimationIteration"), animationstart: Ve$2("Animation", "AnimationStart"), transitionend: Ve$2("Transition", "TransitionEnd") }, Xe$2 = {}, Ye$1 = {};
ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$2.animationend.animation, delete We$2.animationiteration.animation, delete We$2.animationstart.animation), "TransitionEvent" in window || delete We$2.transitionend.transition);
function Ze$1(a) {
  if (Xe$2[a]) return Xe$2[a];
  if (!We$2[a]) return a;
  var b2 = We$2[a], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$1) return Xe$2[a] = b2[c2];
  return a;
}
var $e$2 = Ze$1("animationend"), af = Ze$1("animationiteration"), bf = Ze$1("animationstart"), cf = Ze$1("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$2, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se$2(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D$2(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c2 = e.bind(null, b2, c2, a);
  e = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
  d2 ? void 0 !== e ? a.addEventListener(b2, c2, { capture: true, passive: e }) : a.addEventListener(b2, c2, true) : void 0 !== e ? a.addEventListener(b2, c2, { passive: e }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e || 8 === h2.nodeType && h2.parentNode === e) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e2 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$2:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e2), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$2(k3);
            u2 = null == n2 ? h3 : ue$2(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e2);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$2(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve$2;
        else if (me$1(h3)) if (we$2) na = Fe$2;
        else {
          na = De$2;
          var xa = Ce$2;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$2);
        if (na && (na = na(a, d3))) {
          ne$2(g3, na, c2, e2);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue$2(d3) : window;
      switch (a) {
        case "focusin":
          if (me$1(xa) || "true" === xa.contentEditable) Qe$2 = xa, Re$2 = d3, Se$2 = null;
          break;
        case "focusout":
          Se$2 = Re$2 = Qe$2 = null;
          break;
        case "mousedown":
          Te$2 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$2 = false;
          Ue$2(g3, c2, e2);
          break;
        case "selectionchange":
          if (Pe$2) break;
        case "keydown":
        case "keyup":
          Ue$2(g3, c2, e2);
      }
      var $a;
      if (ae$2) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie$2 ? ge$2(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$2 && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie$2 = true)), xa = oe$2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$2(c2), null !== $a && (ba.data = $a))));
      if ($a = ce$2 ? je$2(a, c2) : ke$2(a, c2)) d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d3 }), e2.data = $a);
    }
    se$2(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe$2(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2) throw Error(p$1(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e = c2.nextSibling;
    a.removeChild(c2);
    if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
      if (0 === d2) {
        a.removeChild(e);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2) return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
        if (c2 = a[Of]) return c2;
        a = Mf(a);
      }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue$2(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p$1(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$1(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$3(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c2) e[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$1(Wf);
  E$1(H$2);
}
function ag(a, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$1(168));
  G$3(H$2, b2);
  G$3(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e in d2) if (!(e in b2)) throw Error(p$1(108, Ra(a) || "Unknown", e));
  return A$2({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$3(H$2, a);
  G$3(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2) throw Error(p$1(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E$1(Wf), E$1(H$2), G$3(H$2, a)) : E$1(Wf);
  G$3(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$2;
    try {
      var c2 = eg;
      for (C$2 = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e = 32 - oc(d2) - 1;
  d2 &= ~(1 << e);
  c2 += 1;
  var f2 = 32 - oc(b2) + e;
  if (30 < f2) {
    var g2 = e - e % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e -= g2;
    rg = 1 << 32 - oc(b2) + e | c2 << e | d2;
    sg = f2 + a;
  } else rg = 1 << f2 | c2 << e | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$3 = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$3) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a)) throw Error(p$1(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$3 = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p$1(418));
      a.flags = a.flags & -4097 | 2;
      I$3 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I$3) return Fg(a), I$3 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a)) throw Hg(), Error(p$1(418));
    for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p$1(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$3 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$1(147, a));
      var e = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a2) {
        var b3 = e.refs;
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a) throw Error(p$1(284));
    if (!c2._owner) throw Error(p$1(290, a));
  }
  return a;
}
function Mg(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function Ng(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function Og(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e(a2, b3) {
    a2 = Pg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Lg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
      Mg(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e2 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e2 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e2 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e2 = c3._init, r2(
            a2,
            b3,
            e2(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a2, b3, c3, d3, null);
      Mg(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e2) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e2);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e2);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e2);
        case Ha:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e2);
      }
      if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e2, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e2, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e2, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e2, u2), I$3 && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e2, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$3 && tg(e2, w2);
      return l3;
    }
    for (u2 = d2(e2, u2); w2 < h3.length; w2++) x2 = y2(u2, e2, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$3 && tg(e2, w2);
    return l3;
  }
  function t2(e2, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$1(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$1(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e2, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e2,
      m3
    ), I$3 && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$3 && tg(e2, w2);
      return l3;
    }
    for (m3 = d2(e2, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e2, a2);
    });
    I$3 && tg(e2, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e(l3, f3.props);
                  d3.ref = Lg(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a2, d3.sibling);
                d3 = e(d3, f3.children || []);
                d3.return = a2;
                a2 = d3;
                break a;
              } else {
                c2(a2, d3);
                break;
              }
              else b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a2, d3, f3, h3);
      if (Ka(f3)) return t2(a2, d3, f3, h3);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b2 = Wg.current;
  E$1(Wg);
  a._currentValue = b2;
}
function bh(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2) break;
    a = a.return;
  }
}
function ch(a, b2) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b2 = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$1(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b2;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b2, c2, d2) {
  var e = b2.interleaved;
  null === e ? (c2.next = c2, gh(b2)) : (c2.next = e.next, e.next = c2);
  b2.interleaved = c2;
  return ih(a, d2);
}
function ih(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$3 & 2)) {
    var e = d2.pending;
    null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
    d2.pending = b2;
    return ih(a, c2);
  }
  e = d2.interleaved;
  null === e ? (b2.next = b2, gh(d2)) : (b2.next = e.next, e.next = b2);
  d2.interleaved = b2;
  return ih(a, c2);
}
function oh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function ph(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
    } else e = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a, b2, c2, d2) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
  if (null !== h2) {
    e.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$2({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b2 = e.shared.interleaved;
    if (null !== b2) {
      e = b2;
      do
        g2 |= e.lane, e = e.next;
      while (e !== b2);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function sh(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
    var d2 = a[b2], e = d2.callback;
    if (null !== e) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e) throw Error(p$1(191, e));
      e.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p$1(174));
  return a;
}
function yh(a, b2) {
  G$3(wh, b2);
  G$3(vh, a);
  G$3(uh, th);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E$1(uh);
  G$3(uh, b2);
}
function zh() {
  E$1(uh);
  E$1(vh);
  E$1(wh);
}
function Ah(a) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G$3(vh, a), G$3(uh, c2));
}
function Bh(a) {
  vh.current === a && (E$1(uh), E$1(vh));
}
var L$3 = Uf(0);
function Ch(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$2 = null, N$2 = null, O$2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$2() {
  throw Error(p$1(321));
}
function Mh(a, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He$2(a[c2], b2[c2])) return false;
  return true;
}
function Nh(a, b2, c2, d2, e, f2) {
  Hh = f2;
  M$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c2(d2, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$1(301));
      f2 += 1;
      O$2 = N$2 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a = c2(d2, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$2 && null !== N$2.next;
  Hh = 0;
  O$2 = N$2 = M$2 = null;
  Ih = false;
  if (b2) throw Error(p$1(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$2 ? M$2.memoizedState = O$2 = a : O$2 = O$2.next = a;
  return O$2;
}
function Uh() {
  if (null === N$2) {
    var a = M$2.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N$2.next;
  var b2 = null === O$2 ? M$2.memoizedState : O$2.next;
  if (null !== b2) O$2 = b2, N$2 = a;
  else {
    if (null === a) throw Error(p$1(310));
    N$2 = a;
    a = { memoizedState: N$2.memoizedState, baseState: N$2.baseState, baseQueue: N$2.baseQueue, queue: N$2.queue, next: null };
    null === O$2 ? M$2.memoizedState = O$2 = a : O$2 = O$2.next = a;
  }
  return O$2;
}
function Vh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Wh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a;
  var d2 = N$2, e = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e) {
      var g2 = e.next;
      e.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e = f2;
    c2.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$2.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$2(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M$2.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$1(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
  if (null !== e) {
    c2.pending = null;
    var g2 = e = e.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e);
    He$2(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a, b2) {
  var c2 = M$2, d2 = Uh(), e = b2(), f2 = !He$2(d2.memoizedState, e);
  f2 && (d2.memoizedState = e, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$2 && O$2.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e, b2), void 0, null);
    if (null === Q$3) throw Error(p$1(349));
    0 !== (Hh & 30) || di(c2, b2, e);
  }
  return e;
}
function di(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function ci(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a);
}
function ai(a, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a);
  });
}
function ei(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He$2(a, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a) {
  var b2 = ih(a, 1);
  null !== b2 && gi(b2, a, 1, -1);
}
function hi(a) {
  var b2 = Th();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ii.bind(null, M$2, a);
  return [b2.memoizedState, a];
}
function bi(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b2, c2, d2) {
  var e = Th();
  M$2.flags |= a;
  e.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a, b2, c2, d2) {
  var e = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$2) {
    var g2 = N$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$2.flags |= a;
  e.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a, b2) {
  return ki(8390656, 8, a, b2);
}
function $h(a, b2) {
  return li(2048, 8, a, b2);
}
function ni(a, b2) {
  return li(4, 2, a, b2);
}
function oi(a, b2) {
  return li(4, 4, a, b2);
}
function pi(a, b2) {
  if ("function" === typeof b2) return a = a(), b2(a), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
    b2.current = null;
  };
}
function qi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return li(4, 4, pi.bind(null, b2, a), c2);
}
function ri() {
}
function si(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ti(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function ui(a, b2, c2) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
  He$2(c2, b2) || (c2 = yc(), M$2.lanes |= c2, rh |= c2, a.baseState = true);
  return b2;
}
function vi(a, b2) {
  var c2 = C$2;
  C$2 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b2();
  } finally {
    C$2 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b2, c2) {
  var d2 = yi(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, c2);
  else if (c2 = hh(a, b2, c2, d2), null !== c2) {
    var e = R$2();
    gi(c2, a, d2, e);
    Bi(c2, b2, d2);
  }
}
function ii(a, b2, c2) {
  var d2 = yi(a), e = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e.hasEagerState = true;
      e.eagerState = h2;
      if (He$2(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
        b2.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a, b2, e, d2);
    null !== c2 && (e = R$2(), gi(c2, a, d2, e), Bi(c2, b2, d2));
  }
}
function zi(a) {
  var b2 = a.alternate;
  return a === M$2 || null !== b2 && b2 === M$2;
}
function Ai(a, b2) {
  Jh = Ih = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Bi(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$2, useContext: P$2, useEffect: P$2, useImperativeHandle: P$2, useInsertionEffect: P$2, useLayoutEffect: P$2, useMemo: P$2, useReducer: P$2, useRef: P$2, useState: P$2, useDebugValue: P$2, useDeferredValue: P$2, useTransition: P$2, useMutableSource: P$2, useSyncExternalStore: P$2, useId: P$2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
  Th().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ki(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ki(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = xi.bind(null, M$2, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = Th();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b2 = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = M$2, e = Th();
  if (I$3) {
    if (void 0 === c2) throw Error(p$1(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$3) throw Error(p$1(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = Th(), b2 = Q$3.identifierPrefix;
  if (I$3) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b2 = Uh();
    return ui(b2, N$2.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b2 = Uh();
  return null === N$2 ? b2.memoizedState = a : ui(b2, N$2.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$2({}, b2);
    a = a.defaultProps;
    for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
function Di(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$2({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R$2(), e = yi(a), f2 = mh(d2, e);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e);
  null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R$2(), e = yi(a), f2 = mh(d2, e);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e);
  null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = R$2(), d2 = yi(a), e = mh(c2, d2);
  e.tag = 2;
  void 0 !== b2 && null !== b2 && (e.callback = b2);
  b2 = nh(a, e, d2);
  null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
} };
function Fi(a, b2, c2, d2, e, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$2(c2, d2) || !Ie$2(e, f2) : true;
}
function Gi(a, b2, c2) {
  var d2 = false, e = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a, b2, c2, d2) {
  var e = a.stateNode;
  e.props = c2;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b2, f2, c2), e.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c2, e, d2), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e = c2;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e, digest: null };
}
function Ki(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a, b2);
  };
  return c2;
}
function Qi(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e = b2.value;
    c2.payload = function() {
      return d2(e);
    };
    c2.callback = function() {
      Li(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d2.set(b2, e);
  } else e = d2.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d2.set(b2, e));
  e.has(c2) || (e.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
}
function Ui(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b2, c2, d2, e) {
  if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b2, c2, d2) {
  b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
}
function Yi(a, b2, c2, d2, e) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e);
  d2 = Nh(a, b2, c2, d2, f2, e);
  c2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
  I$3 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, d2, e);
  return b2.child;
}
function $i(a, b2, c2, d2, e) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e);
    a = Rg(c2.type, null, d2, b2, b2.mode, e);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$2;
    if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e);
  }
  b2.flags |= 1;
  a = Pg(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function bj(a, b2, c2, d2, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie$2(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b2.lanes = a.lanes, Zi(a, b2, e);
  }
  return cj(a, b2, c2, d2, e);
}
function dj(a, b2, c2) {
  var d2 = b2.pendingProps, e = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$3(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$3(ej, fj), fj |= a, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$3(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$3(ej, fj), fj |= d2;
  Xi(a, b2, e, c2);
  return b2.child;
}
function gj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a, b2, c2, d2, e) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e);
  c2 = Nh(a, b2, c2, d2, f2, e);
  d2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
  I$3 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, c2, e);
  return b2.child;
}
function hj(a, b2, c2, d2, e) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e);
  if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a, b2, c2, d2, f2, e);
}
function jj(a, b2, c2, d2, e, f2) {
  gj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e && dg(b2, c2, false), Zi(a, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e && dg(b2, c2, true);
  return b2.child;
}
function kj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  yh(a, b2.containerInfo);
}
function lj(a, b2, c2, d2, e) {
  Ig();
  Jg(e);
  b2.flags |= 256;
  Xi(a, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b2, c2) {
  var d2 = b2.pendingProps, e = L$3.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G$3(L$3, e & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
  }
  e = a.memoizedState;
  if (null !== e && (h2 = e.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e = a.child;
    h2 = e.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e, k2), d2.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function sj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a.child, null, c2);
  a = qj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function rj(a, b2, c2, d2, e, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$1(422))), sj(a, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e, 0, null);
    f2 = Tg(f2, e, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
  if ("$!" === e.data) {
    d2 = e.nextSibling && e.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$1(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (dh || h2) {
    d2 = Q$3;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d2.suspendedLanes | g2)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d2, a, e, -1));
    }
    tj();
    d2 = Ki(Error(p$1(421)));
    return sj(a, b2, g2, d2);
  }
  if ("$?" === e.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b2;
  I$3 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a.return, b2, c2);
}
function wj(a, b2, c2, d2, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e);
}
function xj(a, b2, c2) {
  var d2 = b2.pendingProps, e = d2.revealOrder, f2 = d2.tail;
  Xi(a, b2, d2.children, c2);
  d2 = L$3.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
      else if (19 === a.tag) vj(a, c2, b2);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b2) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b2) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d2 &= 1;
  }
  G$3(L$3, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e) {
    case "forwards":
      c2 = b2.child;
      for (e = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e = c2), c2 = c2.sibling;
      c2 = e;
      null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
      wj(b2, false, e, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e = b2.child;
      for (b2.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b2.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c2;
        c2 = e;
        e = a;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a && b2.child !== a.child) throw Error(p$1(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = Pg(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e = b2.memoizedProps.value;
      G$3(Wg, d2._currentValue);
      d2._currentValue = e;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$3(L$3, L$3.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
        G$3(L$3, L$3.current & 1);
        a = Zi(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G$3(L$3, L$3.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2) return xj(a, b2, c2);
        b2.flags |= 128;
      }
      e = b2.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G$3(L$3, L$3.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a, b2, c2);
  }
  return Zi(a, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b2, c2, d2) {
  var e = a.memoizedProps;
  if (e !== d2) {
    a = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e = Ya(a, e);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e = A$2({}, e, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e) if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h2 = e[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e ? e[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a, b2) {
  if (!I$3) switch (a.tailMode) {
    case "hidden":
      b2 = a.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
  }
}
function S$2(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2) for (var e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags & 14680064, d2 |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags, d2 |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Ej(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$2(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$1(Wf);
      E$1(H$2);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b2);
      S$2(b2);
      return null;
    case 5:
      Bh(b2);
      var e = xh(wh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$1(166));
          S$2(b2);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D$2(lf[e], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a
            ), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          zj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a);
                D$2("close", a);
                e = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a);
                e = d2;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D$2(lf[e], a);
                e = d2;
                break;
              case "source":
                D$2("error", a);
                e = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a
                );
                D$2("load", a);
                e = d2;
                break;
              case "details":
                D$2("toggle", a);
                e = d2;
                break;
              case "input":
                Za(a, d2);
                e = Ya(a, d2);
                D$2("invalid", a);
                break;
              case "option":
                e = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e = A$2({}, d2, { value: void 0 });
                D$2("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e = gb(a, d2);
                D$2("invalid", a);
                break;
              default:
                e = d2;
            }
            ub(c2, e);
            h2 = e;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a) : null != k2 && ta(a, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$2(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$1(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$2(b2);
      return null;
    case 13:
      E$1(L$3);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$3 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p$1(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$1(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$2(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$3.current & 1) ? 0 === T$2 && (T$2 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$2(b2);
      return null;
    case 4:
      return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$2(b2), null;
    case 10:
      return ah(b2.type._context), S$2(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 19:
      E$1(L$3);
      f2 = b2.memoizedState;
      if (null === f2) return S$2(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$2 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
          g2 = Ch(a);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
            G$3(L$3, L$3.current & 1 | 2);
            return b2.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B$3() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a = Ch(g2), null !== a) {
          if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$3) return S$2(b2), null;
        } else 2 * B$3() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$3(), b2.sibling = null, c2 = L$3.current, G$3(L$3, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$2(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$2(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$1(156, b2.tag));
}
function Ij(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$1(Wf), E$1(H$2), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$1(L$3);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate) throw Error(p$1(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$1(L$3), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$3 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$3 = null;
function Lj(a, b2) {
  var c2 = a.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$3(a, b2, d2);
  }
  else c2.current = null;
}
function Mj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$3(a, b2, d2);
  }
}
var Nj = false;
function Oj(a, b2) {
  Cf = dd;
  a = Me$2();
  if (Ne$2(a)) {
    if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e && 3 !== q2.nodeType || (h2 = g2 + e);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c2 && ++l2 === e && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V$3 = b2; null !== V$3; ) if (b2 = V$3, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V$3 = a;
  else for (; null !== V$3; ) {
    b2 = V$3;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$1(163));
      }
    } catch (F2) {
      W$3(b2, b2.return, F2);
    }
    a = b2.sibling;
    if (null !== a) {
      a.return = b2.return;
      V$3 = a;
      break;
    }
    V$3 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e = d2 = d2.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e = e.next;
    } while (e !== d2);
  }
}
function Qj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Sj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Sj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
}
var X$3 = null, Xj = false;
function Yj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
}
function Zj(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$3 || Lj(c2, b2);
    case 6:
      var d2 = X$3, e = Xj;
      X$3 = null;
      Yj(a, b2, c2);
      X$3 = d2;
      Xj = e;
      null !== X$3 && (Xj ? (a = X$3, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X$3.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$3 && (Xj ? (a = X$3, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X$3, c2.stateNode));
      break;
    case 4:
      d2 = X$3;
      e = Xj;
      X$3 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a, b2, c2);
      X$3 = d2;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$3 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e = d2 = d2.next;
        do {
          var f2 = e, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e = e.next;
        } while (e !== d2);
      }
      Yj(a, b2, c2);
      break;
    case 1:
      if (!U$3 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$3(c2, b2, h2);
      }
      Yj(a, b2, c2);
      break;
    case 21:
      Yj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$3 = (d2 = U$3) || null !== c2.memoizedState, Yj(a, b2, c2), U$3 = d2) : Yj(a, b2, c2);
      break;
    default:
      Yj(a, b2, c2);
  }
}
function ak(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e = c2[d2];
    try {
      var f2 = a, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$3 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$3 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$3 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$3) throw Error(p$1(160));
      Zj(f2, g2, e);
      X$3 = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W$3(e, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
}
function dk(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W$3(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W$3(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W$3(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W$3(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        if (null === a.stateNode) throw Error(p$1(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W$3(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a);
      ek(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$3(a, a.return, t2);
      }
      break;
    case 4:
      ck(b2, a);
      ek(a);
      break;
    case 13:
      ck(b2, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B$3()));
      d2 & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U$3 = (l2 = U$3) || m2, ck(b2, a), U$3 = l2) : ck(b2, a);
      ek(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V$3 = a, m2 = a.child; null !== m2; ) {
          for (q2 = V$3 = m2; null !== V$3; ) {
            r2 = V$3;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$3(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$3 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$3(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$3(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a);
      ek(a);
      d2 & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$1(160));
      }
      switch (d2.tag) {
        case 5:
          var e = d2.stateNode;
          d2.flags & 32 && (ob(e, ""), d2.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
          Vj(a, h2, g2);
          break;
        default:
          throw Error(p$1(161));
      }
    } catch (k2) {
      W$3(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function hk(a, b2, c2) {
  V$3 = a;
  ik(a);
}
function ik(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V$3; ) {
    var e = V$3, f2 = e.child;
    if (22 === e.tag && d2) {
      var g2 = null !== e.memoizedState || Jj;
      if (!g2) {
        var h2 = e.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$3;
        h2 = Jj;
        var l2 = U$3;
        Jj = g2;
        if ((U$3 = k2) && !l2) for (V$3 = e; null !== V$3; ) g2 = V$3, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e) : null !== k2 ? (k2.return = g2, V$3 = k2) : jk(e);
        for (; null !== f2; ) V$3 = f2, ik(f2), f2 = f2.sibling;
        V$3 = e;
        Jj = h2;
        U$3 = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V$3 = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V$3; ) {
    var b2 = V$3;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$3 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$3) if (null === c2) d2.componentDidMount();
            else {
              var e = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$1(163));
        }
        U$3 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$3(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V$3 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$3 = c2;
      break;
    }
    V$3 = b2.return;
  }
}
function gk(a) {
  for (; null !== V$3; ) {
    var b2 = V$3;
    if (b2 === a) {
      V$3 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$3 = c2;
      break;
    }
    V$3 = b2.return;
  }
}
function jk(a) {
  for (; null !== V$3; ) {
    var b2 = V$3;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$3(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$3(b2, e, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$3(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$3(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$3(b2, b2.return, k2);
    }
    if (b2 === a) {
      V$3 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$3 = h2;
      break;
    }
    V$3 = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$3 = 0, Q$3 = null, Y$2 = null, Z$3 = 0, fj = 0, ej = Uf(0), T$2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$2() {
  return 0 !== (K$3 & 6) ? B$3() : -1 !== Ak ? Ak : Ak = B$3();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K$3 & 2) && 0 !== Z$3) return Z$3 & -Z$3;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C$2;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
  Ac(a, c2, d2);
  if (0 === (K$3 & 2) || a !== Q$3) a === Q$3 && (0 === (K$3 & 2) && (qk |= c2), 4 === T$2 && Ck(a, Z$3)), Dk(a, d2), 1 === c2 && 0 === K$3 && 0 === (b2.mode & 1) && (Gj = B$3() + 500, fg && jg());
}
function Dk(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === Q$3 ? Z$3 : 0);
  if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K$3 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Gk(a, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$3 & 6)) throw Error(p$1(327));
  var c2 = a.callbackNode;
  if (Hk() && a.callbackNode !== c2) return null;
  var d2 = uc(a, a === Q$3 ? Z$3 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
  else {
    b2 = d2;
    var e = K$3;
    K$3 |= 2;
    var f2 = Jk();
    if (Q$3 !== a || Z$3 !== b2) uk = null, Gj = B$3() + 500, Kk(a, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$3 = e;
    null !== Y$2 ? b2 = 0 : (Q$3 = null, Z$3 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e = xc(a), 0 !== e && (d2 = e, b2 = Nk(a, e)));
    if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$3()), c2;
    if (6 === b2) Ck(a, d2);
    else {
      e = a.current.alternate;
      if (0 === (d2 & 30) && !Ok(e) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$3()), c2;
      a.finishedWork = e;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$1(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$3(), 10 < b2)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d2) !== d2) {
              R$2();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a.eventTimes;
          for (e = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e && (e = g2);
            d2 &= ~f2;
          }
          d2 = e;
          d2 = B$3() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p$1(329));
      }
    }
  }
  Dk(a, B$3());
  return a.callbackNode === c2 ? Gk.bind(null, a) : null;
}
function Nk(a, b2) {
  var c2 = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
  a = Ik(a, b2);
  2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e = c2[d2], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He$2(f2(), e)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a) {
  if (0 !== (K$3 & 6)) throw Error(p$1(327));
  Hk();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1)) return Dk(a, B$3()), null;
  var c2 = Ik(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B$3()), c2;
  if (6 === c2) throw Error(p$1(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Pk(a, tk, uk);
  Dk(a, B$3());
  return null;
}
function Qk(a, b2) {
  var c2 = K$3;
  K$3 |= 1;
  try {
    return a(b2);
  } finally {
    K$3 = c2, 0 === K$3 && (Gj = B$3() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K$3 & 6) && Hk();
  var b2 = K$3;
  K$3 |= 1;
  var c2 = ok.transition, d2 = C$2;
  try {
    if (ok.transition = null, C$2 = 1, a) return a();
  } finally {
    C$2 = d2, ok.transition = c2, K$3 = b2, 0 === (K$3 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$1(ej);
}
function Kk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y$2) for (c2 = Y$2.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$1(Wf);
        E$1(H$2);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$1(L$3);
        break;
      case 19:
        E$1(L$3);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$3 = a;
  Y$2 = a = Pg(a.current, null);
  Z$3 = fj = b2;
  T$2 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b2) {
  do {
    var c2 = Y$2;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$2.memoizedState; null !== d2; ) {
          var e = d2.queue;
          null !== e && (e.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$2 = N$2 = M$2 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        pk = b2;
        Y$2 = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$3;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$1(426));
          }
        } else if (I$3 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y$2 === c2 && null !== c2 && (Y$2 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2) T$2 = 4;
  null === Q$3 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$3, Z$3);
}
function Ik(a, b2) {
  var c2 = K$3;
  K$3 |= 2;
  var d2 = Jk();
  if (Q$3 !== a || Z$3 !== b2) uk = null, Kk(a, b2);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K$3 = c2;
  mk.current = d2;
  if (null !== Y$2) throw Error(p$1(261));
  Q$3 = null;
  Z$3 = 0;
  return T$2;
}
function Tk() {
  for (; null !== Y$2; ) Uk(Y$2);
}
function Lk() {
  for (; null !== Y$2 && !cc(); ) Uk(Y$2);
}
function Uk(a) {
  var b2 = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Sk(a) : Y$2 = b2;
  nk.current = null;
}
function Sk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$2 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$2 = c2;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$2 = 6;
        Y$2 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$2 = b2;
      return;
    }
    Y$2 = b2 = a;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Pk(a, b2, c2) {
  var d2 = C$2, e = ok.transition;
  try {
    ok.transition = null, C$2 = 1, Wk(a, b2, c2, d2);
  } finally {
    ok.transition = e, C$2 = d2;
  }
  return null;
}
function Wk(a, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$3 & 6)) throw Error(p$1(327));
  c2 = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c2) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current) throw Error(p$1(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === Q$3 && (Y$2 = Q$3 = null, Z$3 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$2;
    C$2 = 1;
    var h2 = K$3;
    K$3 |= 4;
    nk.current = null;
    Oj(a, c2);
    dk(c2, a);
    Oe$2(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    hk(c2);
    dc();
    K$3 = h2;
    C$2 = g2;
    ok.transition = f2;
  } else a.current = c2;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a, B$3());
  if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d2(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b2 = ok.transition, c2 = C$2;
    try {
      ok.transition = null;
      C$2 = 16 > a ? 16 : a;
      if (null === wk) var d2 = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$3 & 6)) throw Error(p$1(331));
        var e = K$3;
        K$3 |= 4;
        for (V$3 = a.current; null !== V$3; ) {
          var f2 = V$3, g2 = f2.child;
          if (0 !== (V$3.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$3 = l2; null !== V$3; ) {
                  var m2 = V$3;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$3 = q2;
                  else for (; null !== V$3; ) {
                    m2 = V$3;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$3 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$3 = r2;
                      break;
                    }
                    V$3 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$3 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$3 = g2;
          else b: for (; null !== V$3; ) {
            f2 = V$3;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$3 = x2;
              break b;
            }
            V$3 = f2.return;
          }
        }
        var w2 = a.current;
        for (V$3 = w2; null !== V$3; ) {
          g2 = V$3;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$3 = u2;
          else b: for (g2 = w2; null !== V$3; ) {
            h2 = V$3;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W$3(h2, h2.return, na);
            }
            if (h2 === g2) {
              V$3 = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V$3 = F2;
              break b;
            }
            V$3 = h2.return;
          }
        }
        K$3 = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$2 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a, b2, 1);
  a = nh(a, b2, 1);
  b2 = R$2();
  null !== a && (Ac(a, 1, b2), Dk(a, b2));
}
function W$3(a, b2, c2) {
  if (3 === a.tag) Xk(a, a, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a = Ji(c2, a);
        a = Qi(b2, a, 1);
        b2 = nh(b2, a, 1);
        a = R$2();
        null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$2();
  a.pingedLanes |= a.suspendedLanes & c2;
  Q$3 === a && (Z$3 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$3 & 130023424) === Z$3 && 500 > B$3() - fk ? Kk(a, 0) : rk |= c2);
  Dk(a, b2);
}
function Yk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$2();
  a = ih(a, b2);
  null !== a && (Ac(a, b2, c2), Dk(a, c2));
}
function uj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a, c2);
}
function bk(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c2 = e.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$1(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a, c2);
}
var Vk;
Vk = function(a, b2, c2) {
  if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I$3 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a, b2);
      a = b2.pendingProps;
      var e = Yf(b2, H$2.current);
      ch(b2, c2);
      e = Nh(null, b2, d2, a, e, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei, b2.stateNode = e, e._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$3 && f2 && vg(b2), Xi(null, b2, e, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a, b2);
        a = b2.pendingProps;
        e = d2._init;
        d2 = e(d2._payload);
        b2.type = d2;
        e = b2.tag = Zk(d2);
        a = Ci(d2, a);
        switch (e) {
          case 0:
            b2 = cj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
            break a;
        }
        throw Error(p$1(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), cj(a, b2, d2, e, c2);
    case 1:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), hj(a, b2, d2, e, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a) throw Error(p$1(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e = f2.element;
        lh(a, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e = Ji(Error(p$1(423)), b2);
          b2 = lj(a, b2, d2, c2, e);
          break a;
        } else if (d2 !== e) {
          e = Ji(Error(p$1(424)), b2);
          b2 = lj(a, b2, d2, c2, e);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$3 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e) {
            b2 = Zi(a, b2, c2);
            break a;
          }
          Xi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a && Eg(b2), d2 = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d2, e) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return oj(a, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), Yi(a, b2, d2, e, c2);
    case 7:
      return Xi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e.value;
        G$3(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He$2(f2.value, g2)) {
          if (f2.children === e.children && !Wf.current) {
            b2 = Zi(a, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$1(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a, b2, e.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e = eh(e), d2 = d2(e), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e = Ci(d2, b2.pendingProps), e = Ci(d2.type, e), $i(a, b2, d2, e, c2);
    case 15:
      return bj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e), Ii(b2, d2, e, c2), jj(null, b2, d2, true, a, c2);
    case 19:
      return xj(a, b2, c2);
    case 22:
      return dj(a, b2, c2);
  }
  throw Error(p$1(156, b2.tag));
};
function Fk(a, b2) {
  return ac(a, b2);
}
function $k(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new $k(a, b2, c2, d2);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Rg(a, b2, c2, d2, e, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a) aj(a) && (g2 = 1);
  else if ("string" === typeof a) g2 = 5;
  else a: switch (a) {
    case ya:
      return Tg(c2.children, e, f2, b2);
    case za:
      g2 = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c2, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c2, b2, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c2, b2, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c2, e, f2, b2);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g2 = 10;
          break a;
        case Ca:
          g2 = 9;
          break a;
        case Da:
          g2 = 11;
          break a;
        case Ga:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$1(130, null == a ? a : typeof a, ""));
  }
  b2 = Bg(g2, c2, b2, e);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function pj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Sg(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function al(a, b2, c2, d2, e) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b2, c2, d2, e, f2, g2, h2, k2) {
  a = new al(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$1(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2)) return bg(a, c2, b2);
  }
  return b2;
}
function el(a, b2, c2, d2, e, f2, g2, h2, k2) {
  a = bl(c2, d2, true, a, e, f2, g2, h2, k2);
  a.context = dl(null);
  c2 = a.current;
  d2 = R$2();
  e = yi(c2);
  f2 = mh(d2, e);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e);
  a.current.lanes = e;
  Ac(a, e, d2);
  Dk(a, d2);
  return a;
}
function fl(a, b2, c2, d2) {
  var e = b2.current, f2 = R$2(), g2 = yi(e);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = nh(e, b2, g2);
  null !== a && (gi(a, e, g2, f2), oh(a, e, g2));
  return g2;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a, b2) {
  hl(a, b2);
  (a = a.alternate) && hl(a, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$1(409));
  fl(a, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b2, c2, d2, e) {
  if (e) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = gl(g2);
        f2.call(a2);
      };
    }
    var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g2;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = gl(k2);
      h2.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a, b2, c2, d2, e) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e) {
      var h2 = e;
      e = function() {
        var a2 = gl(g2);
        h2.call(a2);
      };
    }
    fl(b2, g2, a, e);
  } else g2 = ql(c2, b2, a, e, d2);
  return gl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$3()), 0 === (K$3 & 6) && (Gj = B$3() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a, 1);
        if (null !== b3) {
          var c3 = R$2();
          gi(b3, a, 1, c3);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = ih(a, 134217728);
    if (null !== b2) {
      var c2 = R$2();
      gi(b2, a, 134217728, c2);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = yi(a), c2 = ih(a, b2);
    if (null !== c2) {
      var d2 = R$2();
      gi(c2, a, b2, d2);
    }
    il(a, b2);
  }
};
Hc = function() {
  return C$2;
};
Ic = function(a, b2) {
  var c2 = C$2;
  try {
    return C$2 = a, b2();
  } finally {
    C$2 = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e = Db(d2);
            if (!e) throw Error(p$1(90));
            Wa(d2);
            bb(d2, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue$2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$1(200));
  return cl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!nl(a)) throw Error(p$1(299));
  var c2 = false, d2 = "", e = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
  b2 = bl(a, 1, false, null, null, c2, false, d2, e);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render) throw Error(p$1(188));
    a = Object.keys(a).join(",");
    throw Error(p$1(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!nl(a)) throw Error(p$1(405));
  var d2 = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$1(200));
  return rl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p$1(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$1(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
  return rl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
const nav_bg = "" + new URL("nav-bg-CFrzhTyU.jpg", import.meta.url).href;
const text_logo = "" + new URL("text-logo-5n54RIhD.png", import.meta.url).href;
const TRACK_MEMO_SYMBOL = Symbol();
const GET_ORIGINAL_SYMBOL = Symbol();
const AFFECTED_PROPERTY = "a";
const IS_TARGET_COPIED_PROPERTY = "f";
const PROXY_PROPERTY = "p";
const PROXY_CACHE_PROPERTY = "c";
const TARGET_CACHE_PROPERTY = "t";
const HAS_KEY_PROPERTY = "h";
const ALL_OWN_KEYS_PROPERTY = "w";
const HAS_OWN_KEY_PROPERTY = "o";
const KEYS_PROPERTY = "k";
let newProxy$1 = (target, handler) => new Proxy(target, handler);
const getProto = Object.getPrototypeOf;
const objectsToTrack = /* @__PURE__ */ new WeakMap();
const isObjectToTrack = (obj) => obj && (objectsToTrack.has(obj) ? objectsToTrack.get(obj) : getProto(obj) === Object.prototype || getProto(obj) === Array.prototype);
const isObject$1 = (x2) => typeof x2 === "object" && x2 !== null;
const needsToCopyTargetObject = (obj) => Object.values(Object.getOwnPropertyDescriptors(obj)).some((descriptor) => !descriptor.configurable && !descriptor.writable);
const copyTargetObject = (obj) => {
  if (Array.isArray(obj)) {
    return Array.from(obj);
  }
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  Object.values(descriptors).forEach((desc) => {
    desc.configurable = true;
  });
  return Object.create(getProto(obj), descriptors);
};
const createProxyHandler = (origObj, isTargetCopied) => {
  const state = {
    [IS_TARGET_COPIED_PROPERTY]: isTargetCopied
  };
  let trackObject = false;
  const recordUsage = (type, key) => {
    if (!trackObject) {
      let used = state[AFFECTED_PROPERTY].get(origObj);
      if (!used) {
        used = {};
        state[AFFECTED_PROPERTY].set(origObj, used);
      }
      if (type === ALL_OWN_KEYS_PROPERTY) {
        used[ALL_OWN_KEYS_PROPERTY] = true;
      } else {
        let set = used[type];
        if (!set) {
          set = /* @__PURE__ */ new Set();
          used[type] = set;
        }
        set.add(key);
      }
    }
  };
  const recordObjectAsUsed = () => {
    trackObject = true;
    state[AFFECTED_PROPERTY].delete(origObj);
  };
  const handler = {
    get(target, key) {
      if (key === GET_ORIGINAL_SYMBOL) {
        return origObj;
      }
      recordUsage(KEYS_PROPERTY, key);
      return createProxy(Reflect.get(target, key), state[AFFECTED_PROPERTY], state[PROXY_CACHE_PROPERTY], state[TARGET_CACHE_PROPERTY]);
    },
    has(target, key) {
      if (key === TRACK_MEMO_SYMBOL) {
        recordObjectAsUsed();
        return true;
      }
      recordUsage(HAS_KEY_PROPERTY, key);
      return Reflect.has(target, key);
    },
    getOwnPropertyDescriptor(target, key) {
      recordUsage(HAS_OWN_KEY_PROPERTY, key);
      return Reflect.getOwnPropertyDescriptor(target, key);
    },
    ownKeys(target) {
      recordUsage(ALL_OWN_KEYS_PROPERTY);
      return Reflect.ownKeys(target);
    }
  };
  if (isTargetCopied) {
    handler.set = handler.deleteProperty = () => false;
  }
  return [handler, state];
};
const getOriginalObject = (obj) => (
  // unwrap proxy
  obj[GET_ORIGINAL_SYMBOL] || // otherwise
  obj
);
const createProxy = (obj, affected, proxyCache2, targetCache2) => {
  if (!isObjectToTrack(obj))
    return obj;
  let targetAndCopied = targetCache2 && targetCache2.get(obj);
  if (!targetAndCopied) {
    const target2 = getOriginalObject(obj);
    if (needsToCopyTargetObject(target2)) {
      targetAndCopied = [target2, copyTargetObject(target2)];
    } else {
      targetAndCopied = [target2];
    }
    targetCache2 === null || targetCache2 === void 0 ? void 0 : targetCache2.set(obj, targetAndCopied);
  }
  const [target, copiedTarget] = targetAndCopied;
  let handlerAndState = proxyCache2 && proxyCache2.get(target);
  if (!handlerAndState || handlerAndState[1][IS_TARGET_COPIED_PROPERTY] !== !!copiedTarget) {
    handlerAndState = createProxyHandler(target, !!copiedTarget);
    handlerAndState[1][PROXY_PROPERTY] = newProxy$1(copiedTarget || target, handlerAndState[0]);
    if (proxyCache2) {
      proxyCache2.set(target, handlerAndState);
    }
  }
  handlerAndState[1][AFFECTED_PROPERTY] = affected;
  handlerAndState[1][PROXY_CACHE_PROPERTY] = proxyCache2;
  handlerAndState[1][TARGET_CACHE_PROPERTY] = targetCache2;
  return handlerAndState[1][PROXY_PROPERTY];
};
const isAllOwnKeysChanged = (prevObj, nextObj) => {
  const prevKeys = Reflect.ownKeys(prevObj);
  const nextKeys = Reflect.ownKeys(nextObj);
  return prevKeys.length !== nextKeys.length || prevKeys.some((k2, i2) => k2 !== nextKeys[i2]);
};
const isChanged = (prevObj, nextObj, affected, cache, isEqual = Object.is) => {
  if (isEqual(prevObj, nextObj)) {
    return false;
  }
  if (!isObject$1(prevObj) || !isObject$1(nextObj))
    return true;
  const used = affected.get(getOriginalObject(prevObj));
  if (!used)
    return true;
  if (cache) {
    const hit = cache.get(prevObj);
    if (hit === nextObj) {
      return false;
    }
    cache.set(prevObj, nextObj);
  }
  let changed = null;
  for (const key of used[HAS_KEY_PROPERTY] || []) {
    changed = Reflect.has(prevObj, key) !== Reflect.has(nextObj, key);
    if (changed)
      return changed;
  }
  if (used[ALL_OWN_KEYS_PROPERTY] === true) {
    changed = isAllOwnKeysChanged(prevObj, nextObj);
    if (changed)
      return changed;
  } else {
    for (const key of used[HAS_OWN_KEY_PROPERTY] || []) {
      const hasPrev = !!Reflect.getOwnPropertyDescriptor(prevObj, key);
      const hasNext = !!Reflect.getOwnPropertyDescriptor(nextObj, key);
      changed = hasPrev !== hasNext;
      if (changed)
        return changed;
    }
  }
  for (const key of used[KEYS_PROPERTY] || []) {
    changed = isChanged(prevObj[key], nextObj[key], affected, cache, isEqual);
    if (changed)
      return changed;
  }
  if (changed === null)
    throw new Error("invalid used");
  return changed;
};
const getUntracked = (obj) => {
  if (isObjectToTrack(obj)) {
    return obj[GET_ORIGINAL_SYMBOL] || null;
  }
  return null;
};
const markToTrack = (obj, mark = true) => {
  objectsToTrack.set(obj, mark);
};
const affectedToPathList = (obj, affected, onlyWithValues) => {
  const list = [];
  const seen = /* @__PURE__ */ new WeakSet();
  const walk = (x2, path) => {
    var _a, _b, _c;
    if (seen.has(x2)) {
      return;
    }
    if (isObject$1(x2)) {
      seen.add(x2);
    }
    const used = isObject$1(x2) && affected.get(getOriginalObject(x2));
    if (used) {
      (_a = used[HAS_KEY_PROPERTY]) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
        const segment = `:has(${String(key)})`;
        list.push(path ? [...path, segment] : [segment]);
      });
      if (used[ALL_OWN_KEYS_PROPERTY] === true) {
        const segment = ":ownKeys";
        list.push(path ? [...path, segment] : [segment]);
      } else {
        (_b = used[HAS_OWN_KEY_PROPERTY]) === null || _b === void 0 ? void 0 : _b.forEach((key) => {
          const segment = `:hasOwn(${String(key)})`;
          list.push(path ? [...path, segment] : [segment]);
        });
      }
      (_c = used[KEYS_PROPERTY]) === null || _c === void 0 ? void 0 : _c.forEach((key) => {
        if ("value" in (Object.getOwnPropertyDescriptor(x2, key) || {})) {
          walk(x2[key], path ? [...path, key] : [key]);
        }
      });
    } else if (path) {
      list.push(path);
    }
  };
  walk(obj);
  return list;
};
const __vite_import_meta_env__$1 = {};
const isObject = (x2) => typeof x2 === "object" && x2 !== null;
const canProxyDefault = (x2) => isObject(x2) && !refSet.has(x2) && (Array.isArray(x2) || !(Symbol.iterator in x2)) && !(x2 instanceof WeakMap) && !(x2 instanceof WeakSet) && !(x2 instanceof Error) && !(x2 instanceof Number) && !(x2 instanceof Date) && !(x2 instanceof String) && !(x2 instanceof RegExp) && !(x2 instanceof ArrayBuffer) && !(x2 instanceof Promise);
const createSnapshotDefault = (target, version) => {
  const cache = snapCache.get(target);
  if ((cache == null ? void 0 : cache[0]) === version) {
    return cache[1];
  }
  const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  markToTrack(snap, true);
  snapCache.set(target, [version, snap]);
  Reflect.ownKeys(target).forEach((key) => {
    if (Object.getOwnPropertyDescriptor(snap, key)) {
      return;
    }
    const value = Reflect.get(target, key);
    const { enumerable } = Reflect.getOwnPropertyDescriptor(
      target,
      key
    );
    const desc = {
      value,
      enumerable,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: true
    };
    if (refSet.has(value)) {
      markToTrack(value, false);
    } else if (proxyStateMap.has(value)) {
      const [target2, ensureVersion] = proxyStateMap.get(
        value
      );
      desc.value = createSnapshotDefault(target2, ensureVersion());
    }
    Object.defineProperty(snap, key, desc);
  });
  return Object.preventExtensions(snap);
};
const createHandlerDefault = (isInitializing, addPropListener, removePropListener, notifyUpdate) => ({
  deleteProperty(target, prop) {
    const prevValue = Reflect.get(target, prop);
    removePropListener(prop);
    const deleted = Reflect.deleteProperty(target, prop);
    if (deleted) {
      notifyUpdate(["delete", [prop], prevValue]);
    }
    return deleted;
  },
  set(target, prop, value, receiver) {
    const hasPrevValue = !isInitializing() && Reflect.has(target, prop);
    const prevValue = Reflect.get(target, prop, receiver);
    if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
      return true;
    }
    removePropListener(prop);
    if (isObject(value)) {
      value = getUntracked(value) || value;
    }
    const nextValue = !proxyStateMap.has(value) && canProxy(value) ? proxy(value) : value;
    addPropListener(prop, nextValue);
    Reflect.set(target, prop, nextValue, receiver);
    notifyUpdate(["set", [prop], value, prevValue]);
    return true;
  }
});
const proxyStateMap = /* @__PURE__ */ new WeakMap();
const refSet = /* @__PURE__ */ new WeakSet();
const snapCache = /* @__PURE__ */ new WeakMap();
const versionHolder = [1, 1];
const proxyCache = /* @__PURE__ */ new WeakMap();
let objectIs = Object.is;
let newProxy = (target, handler) => new Proxy(target, handler);
let canProxy = canProxyDefault;
let createSnapshot = createSnapshotDefault;
let createHandler = createHandlerDefault;
function proxy(baseObject = {}) {
  if (!isObject(baseObject)) {
    throw new Error("object required");
  }
  const found = proxyCache.get(baseObject);
  if (found) {
    return found;
  }
  let version = versionHolder[0];
  const listeners = /* @__PURE__ */ new Set();
  const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
    if (version !== nextVersion) {
      version = nextVersion;
      listeners.forEach((listener) => listener(op, nextVersion));
    }
  };
  let checkVersion = versionHolder[1];
  const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
    if (checkVersion !== nextCheckVersion && !listeners.size) {
      checkVersion = nextCheckVersion;
      propProxyStates.forEach(([propProxyState]) => {
        const propVersion = propProxyState[1](nextCheckVersion);
        if (propVersion > version) {
          version = propVersion;
        }
      });
    }
    return version;
  };
  const createPropListener = (prop) => (op, nextVersion) => {
    const newOp = [...op];
    newOp[1] = [prop, ...newOp[1]];
    notifyUpdate(newOp, nextVersion);
  };
  const propProxyStates = /* @__PURE__ */ new Map();
  const addPropListener = (prop, propValue) => {
    const propProxyState = !refSet.has(propValue) && proxyStateMap.get(propValue);
    if (propProxyState) {
      if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    }
  };
  const removePropListener = (prop) => {
    var _a;
    const entry = propProxyStates.get(prop);
    if (entry) {
      propProxyStates.delete(prop);
      (_a = entry[1]) == null ? void 0 : _a.call(entry);
    }
  };
  const addListener = (listener) => {
    listeners.add(listener);
    if (listeners.size === 1) {
      propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
        if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && prevRemove) {
          throw new Error("remove already exists");
        }
        const remove = propProxyState[2](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove]);
      });
    }
    const removeListener = () => {
      listeners.delete(listener);
      if (listeners.size === 0) {
        propProxyStates.forEach(([propProxyState, remove], prop) => {
          if (remove) {
            remove();
            propProxyStates.set(prop, [propProxyState]);
          }
        });
      }
    };
    return removeListener;
  };
  let initializing = true;
  const handler = createHandler(
    () => initializing,
    addPropListener,
    removePropListener,
    notifyUpdate
  );
  const proxyObject = newProxy(baseObject, handler);
  proxyCache.set(baseObject, proxyObject);
  const proxyState = [baseObject, ensureVersion, addListener];
  proxyStateMap.set(proxyObject, proxyState);
  Reflect.ownKeys(baseObject).forEach((key) => {
    const desc = Object.getOwnPropertyDescriptor(
      baseObject,
      key
    );
    if ("value" in desc && desc.writable) {
      proxyObject[key] = baseObject[key];
    }
  });
  initializing = false;
  return proxyObject;
}
function subscribe(proxyObject, callback, notifyInSync) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  let promise;
  const ops = [];
  const addListener = proxyState[2];
  let isListenerActive = false;
  const listener = (op) => {
    ops.push(op);
    if (!promise) {
      promise = Promise.resolve().then(() => {
        promise = void 0;
        if (isListenerActive) {
          callback(ops.splice(0));
        }
      });
    }
  };
  const removeListener = addListener(listener);
  isListenerActive = true;
  return () => {
    isListenerActive = false;
    removeListener();
  };
}
function snapshot(proxyObject) {
  const proxyState = proxyStateMap.get(proxyObject);
  if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production" && !proxyState) {
    console.warn("Please use proxy object");
  }
  const [target, ensureVersion] = proxyState;
  return createSnapshot(target, ensureVersion());
}
const __vite_import_meta_env__ = {};
const useAffectedDebugValue = (state, affected) => {
  const pathList = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    pathList.current = affectedToPathList(state, affected);
  });
  reactExports.useDebugValue(pathList.current);
};
const condUseAffectedDebugValue = useAffectedDebugValue;
const targetCache = /* @__PURE__ */ new WeakMap();
function useSnapshot(proxyObject, options) {
  const notifyInSync = void 0;
  const affected = reactExports.useMemo(
    () => proxyObject && /* @__PURE__ */ new WeakMap(),
    [proxyObject]
  );
  const lastSnapshot = reactExports.useRef(void 0);
  let inRender = true;
  const currSnapshot = reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (callback) => {
        const unsub = subscribe(proxyObject, callback);
        callback();
        return unsub;
      },
      [proxyObject, notifyInSync]
    ),
    () => {
      const nextSnapshot = snapshot(proxyObject);
      try {
        if (!inRender && lastSnapshot.current && !isChanged(
          lastSnapshot.current,
          nextSnapshot,
          affected,
          /* @__PURE__ */ new WeakMap()
        )) {
          return lastSnapshot.current;
        }
      } catch (e) {
      }
      return nextSnapshot;
    },
    () => snapshot(proxyObject)
  );
  inRender = false;
  reactExports.useLayoutEffect(() => {
    lastSnapshot.current = currSnapshot;
  });
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production") {
    condUseAffectedDebugValue(currSnapshot, affected);
  }
  const proxyCache2 = reactExports.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return createProxy(currSnapshot, affected, proxyCache2, targetCache);
}
function PageTransition({ children, cond, className, onClick }) {
  className = className ?? "";
  onClick = onClick ?? function() {
  };
  return !cond ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className,
      onClick,
      children
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
}
const mainbgIMG = "" + new URL("main-bg-DqJw1Cqp.png", import.meta.url).href;
function BgPattern() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-bg z-0 absolute nav-bg w-full h-full top-0 left-0", style: { backgroundImage: `url(${mainbgIMG})` } });
}
const infoIMG = "" + new URL("info-etcwfViV.png", import.meta.url).href;
const Input = reactExports.forwardRef(function({ title, placeholder, onEnter, className, titleClassName, children, onChange, callbacks }, ref) {
  function _onChange() {
    localRef.current?.classList.remove("popup-error");
    localRef.current?.classList.remove("popup-error-same");
    onChange(localRef.current?.querySelector("input")?.value);
  }
  reactExports.useImperativeHandle(ref, () => {
    return {
      checkInput(callback) {
        callback = callback ?? { func: function(text) {
          return true;
        } };
        let callbacks2 = [];
        if (callback.func != void 0) {
          callbacks2 = [callback];
        } else {
          callbacks2 = callback;
        }
        for (let callback2 of callbacks2) {
          if (!callback2.func(localRef.current.querySelector("input").value)) {
            if (localRef.current?.classList.contains("popup-error")) {
              localRef.current?.classList.remove("popup-error");
              localRef.current?.classList.add("popup-error-same");
            } else {
              localRef.current?.classList.add("popup-error");
              localRef.current?.classList.remove("popup-error-same");
            }
            setErrMsg(callback2.msg ?? "");
            return false;
          }
        }
        localRef.current?.classList.remove("popup-error");
        localRef.current?.classList.remove("popup-error-same");
        return true;
      },
      getInput() {
        return localRef.current?.querySelector("input")?.value;
      },
      setInput(text) {
        localRef.current.querySelector("input").value = text;
        return null;
      }
    };
  });
  const localRef = reactExports.useRef(null);
  onEnter = onEnter ?? function() {
  };
  className = className ?? "";
  const [errMsg, setErrMsg] = reactExports.useState("");
  title = title ?? "";
  children = children ?? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  onChange = onChange ?? function(title2) {
  };
  callbacks = callbacks ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: localRef, className: "popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden " + className, children: [
    title == "" ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `title text-white flex items-center justify-center cursor-default w-32 font-bold rounded-r ${titleClassName}`, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { onChange: _onChange, ...callbacks, type: "text", placeholder, className: "p-2 w-full outline-none", onKeyDown: (e) => e.key == "Enter" ? onEnter() : function() {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: infoIMG, width: 35, className: "info-icon self-center px-2 cursor-pointer", alt: "infoIMG" }),
    !errMsg ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bubble arrow-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bubble-wrapper ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: errMsg }) }) }),
    children
  ] });
});
const closeIMG = "" + new URL("close-CNt9sK1Y.png", import.meta.url).href;
const userIMG = "" + new URL("user-Dew6X5B5.png", import.meta.url).href;
const addIMG = "" + new URL("add-tiTPLJhe.png", import.meta.url).href;
function validate_inputNotEmpty(text) {
  return text.length != 0;
}
function validate_inputNumber(text) {
  var pattern = /^\d+\.?\d*$/;
  return pattern.test(text);
}
function validate_noComma(text) {
  return !text.includes(",");
}
let imgViewerState = proxy({
  img_base64: "",
  visible: false
});
const imgViewer = {
  setImgBase64: (img_base64) => {
    imgViewerState.img_base64 = img_base64;
  },
  show: (img_base64) => {
    if (img_base64) imgViewer.setImgBase64(img_base64);
    imgViewerState.visible = true;
  },
  hide: () => {
    imgViewerState.visible = false;
  }
};
const imgIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATaSURBVHic7ZtdbBRVGIbfM7vtdmehPxaQ1rRGhUrxp16QRhSTGo0hWMGABtFWm8UQijGkAcIVCYoxRgHFSKUqJYZWiqZao21isalJb7BNYw2Vsv0vVMJiabPpdn9n5/MCuqG2MjPdOTO07HO3s2e+854n58zMzuwwaCSlpTRNSghtJYYNAJYDWAKAaa1zK5It9nCemLX1l5V7T+pZdyY0BXe0OkuI2CEAd3HKAwBItYp4YsHysF8Kv1b/0K7vePYlqG0onnW+S8ROgPPgbyIhyWo9+VzXh4U8O1ElwNH6ZhEY28czyEwwMNtCi/30890fP8urD2UBzTsWENFBXgGUYESijYS6tec+KuBRX1GA6AgVA7ibR+dqEcAcjkRb3Yt/Hc7Xv7YSMr2gd6ezgQEplgRrw/r+Tx7Vs66yAIYcPTuMBUZITwwLv27oObhSr5pqDoJGHfXVsjhRtjVu6i6/X49iagToepGjBwS6B4j8tvH8Z/fGWkv1dcDtBiPKYla5qWiwIiOWOnNWAAAwwgPBUKhpm6ti0WxrzGkBAEBEudco0PzqUHnabPaf8wIAgDH2cCggNTovHF+odd95IeAGq8bZREPZpW/tWnaaTwJAwJrhgLvh7Z4Gm9p95pUAACCZCtxy3/f7qdmqpv28EwAAMmhdT+/5U0SkOD5VloxGIhkj0nisZV56qvO9cgDbb9XothTgjQTQ6u3Xo9RmKAiYl0tAC3EBZgcwm7gAswOYTVyA2QHMJi7A7ABmExdgdgCzueMFcPsxVJaxFnsy1yHFIsZUxxPx4YO/f8anVxp1SjYVLjPgETELB7I2xTx4AEixiHg/+2XkJC3VIdl0uAjItWeAzfA8xRPxoct/GRLJmuoxMOTaM/WKNwVOS2D64E9fO4sdA18jIIeRa89Ew4rdWJKQrL4i4/OAypCDYIRk7BysRkAOAwC6/JdxhNOa1oohAoIkwScHp2wbkyamtWsZdyFEkhGRohgiQBQSsSV9dfSzlQkoXvzklDa1o20ovHAIRb3HDJVg2D3B8vveQEHyCvQH/0Fh2mPIE7Oj39WOtsHZ9yUkklE/1oGi3mOoWrYdiYx/PMMEWJiALYtWT9v+w2h7dPCT1I91YHP3UdTkvAUbZwmGLIEznk5UuJunba8dbUNJX8WMp8VGzzkUG7AcuAs44+nEKz1HsWvoG3zubopuv3na/x/1Yx3Y1l/JNR/X+TU5+MnT356hGngifqRaROy9WKPqgqjdO8AzIh8B4RvTdt+l2ujgAYBAODBcp6mWaLn+nDMk81kKXAS0eQfgk0OoXlaKP30XY6qVJ2bDGwmifWJQn3D/gYuA4dAoNrqOoHTpM0izxvaDqNM/jNKBE3CHPTqlmwq3Y0DLuAst4y5e5XXjjr8hEhdgdgCziQswO4DZxAWYHcBs1Agg7in4oZhdUQADRvTJYjwEXFVqoyiAgB594hgPAylmV7EE6Cc9wpgCCYrZFQX4fElVAK7oEshQ6KooyaeUWinPgKfLvYzRbl0yGQgR2zmyplLx76aqToMT+ZXVAHsn9lhGQfv9jx+vUdNS28vTvztfJ7DDANJnlYs/I4yxson8r6rU7qD5gVvqHyWpwZDgFCCsJ9CDuP5WqVlvlhEANwNzyaAfkyyWyrFVX2i6c/Iv4zuQw8IkFOwAAAAASUVORK5CYII=";
const uploadIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACqRJREFUeF7tW3uQnEUR7/52N+dekEeQ29tvvk2OEBNJqYigEIpAUhVi0DKiUaEERECRZ0AFQoSShwIajEUgilUqIlD4wCoCgiUVI1HxgSWglq9oPO9yM8NdwiNBuMs9dtv9HfOde5vd22/3drNn1fU/yX07PdPzm56enu4epjI0d+7cgwYHBy8loncS0TFEpMq1ncT3fmbeqLW+hohkEv3UzMqlOIMgWCIi3yGi2TX3XAWjiNxhrb28Cpa6Nd0HgCAIVojIj4ko/G2AiJ4lop66jfpaR8uI6NCCPm8xxlxb5zEqdjcOgI6OjoOHh4f/7NQ9R0QbmPlarTVAqCsppX5LRMcVdsrMa7XWX6zrQBU6GwdAEATrROQqx3OzMea6RglTAMAgEcWJKIaxRORSa+1XGzVucb/jAFBK/YaIjieivmQyOWf79u0QriFUAEA3M1/nbI7njOG5xhjYoIZTIQBxpdTLRJQUkYestR9o5OiFABhjOpRSnySir7sxs0R0hjHmh42UAX2PAeD7/mxm7h79yLwuv+/XNHLwYgAwllLqM0T0ZTfuMDOfprWGQW4YjQHQ3t7eEYvF/u324ZestTibG0alAMBgvu9fz8w3uIH3MvOpWuutjRJkygHgNAFaAG0AvcLMy7TWTzUChCkJgAMB9gB2AfQSES01xvyx3iA0DYAgCDaJyPuI6FVjzIFEBL+jkFgpdS8RneU+7hSRk6y12+oJQtMAUErBx/g8JuN53oqenp7HS0wsppT6ARGFJ5LOZrOLe3t7u+oFQtMA8H3/aGb+PeZPRJaIVhlj4B2Oo4ULF87YvXv3w8y8wv3Q6Xne4p6eHvBMmpoGACQv8jyxBbaJyI4Ss0oy80nhd2b+a39//6IXX3wRfsukqKkAzJs3r2VgYGBDXgMuKPRJosyoXi5zUwEIJ6qUWsrMZ4rIsUQ0ZwIwsF1eDz4RucFae2MUsCZqMyUAiDoJpdTb3NUc3uqNWuvQYYraxT7tpgEIIdnfrnAtSzatAdNbYNoGTBvB6VPgtQh1847B9vb2hbFY7FYiStVgyf9JRFcYY16ogRcRo+ZvgSAINorIJbVMwK3cJ7TW36yFf0oAkMlk3pHL5TbWqgHxePyj3d3dz1UCIJVKHR6Px09GqFBEUswMjTuEiE5xrvA3ZsyYsbqrq2tvpb7+b1zhIAjeiIuRiLyHiI6MMLF+ItqCKHY6nb7/6aefHo7AM67JlHCF0+n0kchAMfMZYYKk2okQEfILN6dSqXuqAaLZAHi+71/HzJ8rmvgeZkY4/DER6czlcnbmzJm9AwMDB3iel85ms2kiWsTMCKm9vQisPxDR6caYf0QBsSYAUqnUzGQyOXotrZWGhoYOYmYEPpcU9PE3aEIqlXo06ioin+F53tUiggAqUmygV/PZrYuMMfdVkq9qAJRSHyQiBCuTlTqv4veXmHmN1vpuIkJWqGryfX8BEd1eEDqDr3C51vqOuhrBIAhuE5Erq5awPANWfaXWensd+kQk+SYiGkvq4si21n6tXN9VawBS6CMjIxeKSHu1AjNzTEQuKtjvTwwMDJxWj9heoSy+75/BzPe7cVB5sswY87NS8lYNQLWTLhLsYmYOU9/bEonE8V1dXbsr9Tlr1qwDW1tbLxaRp4wxT1Rqj9+DILgMlSeubU9LS8tbOjs79xTz7jcAZs+efUg2m4UrjKoQTPq4qJba9/0rmfk2Zn45Ho+nojo/Sqm7iOhCTJqZv6W1/njTAFBK3Z5PcY3WATHzaq31nVFWEm0KeROJRLqrq6s3Cm8QBEj1A3QUeI2MjIzM7+vrG00Ah1STBiiljq/GBjAzjkxYeBxTne3t7W+KesxNBgDw+r5/PjOHd4+7jDEXTwqAfBHFp/Oh6fVRVqBMm3OMMThGI1OtGuAGQHrt70Q0j4j2Dg4Otj3//PP/qVkDlFKo5PpCZOnHN9w7NDR02K5du16phn+SAGAL3UJEazGmiKy01v6oZgCQywuCYHnULSAib4ABcwM+aox5bzWTn+wWcPyoe0L9EwAYV5NYkw2oZgJKqUVE9GvHA/c0rAOK3M1kNQB2VymFIAyu088aY8buDw0HwPf905n5e5jtBGnwCcGoAwDYBgilIaLUl1+EMSdufwBwFYquMENmPkpr/afIS+8a1gkA3C5PxV3DGDMjLMhoOACFwg8PD7fv3LmzrxiATCbj53K5XxDRLhH5sLV2XFluJQCCIFgjIrgRorhrFOxiUkp9m4g+hu+xWGzWjh07UHbzvzK5RqXGlFI4McIa4AWlvL8gCN4tIo85obe5KpBd4SQmAqCotO7nxpjC6/UYDkop1ByuwsobY1rgGI0DIJ1Oz/E8b7T0xCFZlzK5IAhWiwhqAEC4lGwpXh1UgezZswffT3S/PdvS0rI09N3LAeD7/rlwcd1CDuIqXK6kTikFQwyDXNoGuGIFOAgJZv6u1voj1e7VUu0LjWA+bIUS2HtKtXPvE3DROdr9/qSIvMta218KAN/3T2NmrCpqjLPM/CGt9UPlZFZKYXFRe/CMMQbvH0apuFY4tJTdeW9tbonKraoxUUodRUQIU8EI3q21Pr9cJ6lUqi0ej/+SiOY7TfxJOp1e2dvbCz9i9B6Bu8Dw8PDC/EMOGDWoMq6755UDFjyFVbD5YOv3jTGIPZYEAIED3Nch7BVa61B1q554IYNSCkYtIKKdxhjE84pL4saaO2GfJKKM+/igiPQy82XubzhSD4SVIkT0KWMMLlplyff9S/Ayxc3rbK01YgX7AuCs8V/yoaWD4TfDeLnOywocBZnCa6mInGit/VUFgRcwMzThMNcOMb6Zxf9n5pu01tdXkkEptdk90BiJxWJt4QmwzxbAB6XU2S7mF/aLJAbK2TorDTTB71DZ0YQGEUVyh1FG53neVhFBEeU+JCJ3WmtXV5Ipk8kcm8vlfue2+xZjDF6qjFG5N0NnYQCnCZXGqPp3z/NO7unpwbk/IaXT6cWe56GAsjgAe58x5pwoD62UUgiFLcVAInKKtfanFQFAgyAIEES4Jv9+CK/G3kpEr6skcBW/P5NMJk+I8iDD+QibYP9c/48YY3Cej57jE5GLYD/o2mw2xiwvbl9SA0p0Gm9razu0tbU1avuScg0NDa1n5vB4vccYc26lSbjFWIVbnIhsbW1tPS8KcO70ga2B7RAROcZaO5paj6QBUQSrto3v+63MDIcERyOkWlPOda2278L20N68D4Hrb3iSwJgjJrAPTWpFaxHSZX1hVGc5/g3GGLwNqCkhUiyDM3rYMqMPPUXkAWvtmeVk3e8AQBDf95cz8yPOkcGnLcx8jtba1AKq48GdH4YRvkxoNJ9MJBKnTBRFbgoAEDidTh8Ti8Xg5BzuJoBU91cGBwfXFcbsogDiTgu8MoHBDuneZDJ5QSV70TQAIKV7qInncSsLBH+BmR/O5XIPe563udyjTaXUfDy4wMMqIjqhgD8rIp+NaluaCkCoui6Lc3WJB9ooeIAjZpm5V0QOEJE0M8OdDm3I2NyZeVMul1trrUUUOBJNBQBCQfFu8f35oAjqj1AaE5XgJj8uIuuttWHsMSrv+NtgZK4GN8xkMm/OZrNLmPkIIjoC/4pIBxHBTjwnItCIf+FGmEgktkRNlZUS+78B/puMBJxNPwAAAABJRU5ErkJggg==";
const ImgUpload = reactExports.forwardRef(function({ title, titleClassName, maxImgs, onUploadImg }, ref) {
  reactExports.useImperativeHandle(ref, () => {
    return {
      checkInput: () => {
        if (imgs.length != maxImgs) {
          if (localRef.current?.classList.contains("popup-error")) {
            localRef.current?.classList.remove("popup-error");
            localRef.current?.classList.add("popup-error-same");
          } else {
            localRef.current?.classList.add("popup-error");
            localRef.current?.classList.remove("popup-error-same");
          }
          return false;
        }
        localRef.current?.classList.remove("popup-error");
        localRef.current?.classList.remove("popup-error-same");
        return true;
      },
      getInput: () => {
        return imgs;
      },
      setInput: (imgs2) => {
        setImgs([...imgs2]);
      }
    };
  });
  function removeImg(idx) {
    imgs.splice(idx, 1);
    setImgs([...imgs]);
  }
  async function _onUploadImg() {
    const imgBase64 = await onUploadImg();
    setImgs([...imgs, imgBase64]);
  }
  function onClickImg(imgBase64) {
    imgViewer.show(imgBase64);
  }
  const localRef = reactExports.useRef(null);
  onUploadImg = onUploadImg ?? function() {
  };
  maxImgs = maxImgs ?? 1;
  const [imgs, setImgs] = reactExports.useState([]);
  titleClassName = titleClassName ?? "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: localRef, className: "popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${titleClassName}`, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex item-center p-2 w-full justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 items-center justify-center  self-center rounded", children: imgs.map((img, idx) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "uploaded-img self-end relative ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { onClick: () => onClickImg(img), className: "cursor-zoom-in", src: imgIMG, width: 28, alt: "imgIMG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { onClick: () => removeImg(idx), src: closeIMG, alt: "closeIMG", className: "close-icon absolute", width: 10 })
        ] }, idx);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 justify-end self-end self-center rounded ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: `${maxImgs} / ${imgs.length}` }),
        maxImgs > imgs.length ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { onClick: _onUploadImg, className: "upload-image cursor-pointer", src: uploadIMG, width: 28, alt: "uploadIMG" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
      ] })
    ] })
  ] });
});
const moreIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAxBJREFUeF7tm0GL00AUx99rcIOH0kvFMhNEepKii4jiJ/Cqn0APsnsTFNGLogdFL4ooeNvFg36C9eonWFxEVCpeikhmiNhL6UGykj53JAFZqDuTZmYNk95K/2/mP7/3ksk0MwiOP/1+v5Om6RUAOAsAp/PutwBgMwzD56PRaOLSErrsjDF2DhFfAEA0p9+YiC5LKd+48uUMAGPsPCJu6AyMiC5IKV/raBfVOAHAGOsi4icAOKxp+DsRHZdSjjX1pWVOAHDOnwLAVUOXz4QQ1wxjjOVOADDG3iJiccPTMklEW1LKM1riBUTWAQwGg6XJZDIFgCVDn9udTqc9HA63DeOM5NYBdLvddhiGamoz7YvSNO2Mx2MFz9rH1FQpI5zzzwBwzDD4ixDCNMawC/OsGHegAjjnLwHgomHwKyHEJcMYY7mTCuj1eoMgCN4BQKjpMM2y7FSSJENNfWmZEwDKHWPsBiI+0nFKRDellI91tItqnAEAgBbn/BYA3AWAA3OM/9rR3RNCPNzRzRYdnE68SwB//HDOTwLA/XwxdCg3+UMthgDgjhDivY7xqjTOAfxtnDF2RH2XUn6rakCm7ewrAFOzNvQNABtU69RmUwF1ypYNr00F2KBapzabCqhTtmx43dcKiKLooBpUHMc/bQxOp03nAHq93tFWq3UbEdWLkUFuckhEm7PZ7EGSJF91jFelcQogiqIVInoCAO05A5gi4vU4jterGuBe7TgDkA9+bS9D6ndEXHUFwQkAVfZBEHz4R+Z3c5lmWbbs4nJwAoAxtoaIKzrZLzREtC6lXDWJKaN1AoBzrrJ/wtDgRyHEsmGMsdw6ADXVEZH6bz8wdJchYtv2FNkAMMxKKbnXl4Ai5v1N0PtpUFWB1w9CxY3D60fhAoLXi6HdU4iXy+FS86jFIOsPQha9V9J0A6ASjDVupKmAGievEutNBVSCscaNNBWwn8nzcouMz5uk/N4m5/VGSe+3ynq/Wdrr7fLeH5jw/shM/l7A30NTCkBzbM73g5P5ZeDv0dliweX14ekCwv92fP43U+NiUNPx7qQAAAAASUVORK5CYII=";
let GState = proxy({
  tabIdx: "books",
  borrowed: [],
  bookMoreOptionsMenu: { show: false, idx: 0 },
  filterState: { visible: false }
});
function OptionsComp({ idx, onClick }) {
  function onClickMore() {
    onClick(idx);
  }
  useSnapshot(GState.bookMoreOptionsMenu);
  const ref = reactExports.useRef(null);
  onClick = onClick ?? function() {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: moreIMG, alt: "moreIMG", className: "w-4 cursor-pointer", onClick: onClickMore }) });
}
let BookingsState = proxy({
  borrowed: []
});
async function loadAll$4() {
  const loaded = await window.db.borrowed.getAll();
  let borrowed = [];
  for (let i2 = 0; i2 < loaded.length; i2++) {
    borrowed.push({
      id: loaded[i2]["id"],
      user_id: loaded[i2]["user_id"],
      book_id: loaded[i2]["book_id"],
      admin_id: loaded[i2]["admin_id"],
      return_date: loaded[i2]["return_date"]
    });
  }
  BookingsState.borrowed = borrowed;
}
const BookingAction = {
  loadAll: loadAll$4,
  add: async (bookID, userID, adminID, return_date) => {
    await window.db.borrowed.insert(bookID, userID, adminID, return_date);
    await BookAction.loadAll();
    await UserAction.loadAll();
    await BookingAction.loadAll();
  },
  getFromBookId: (book_id) => {
    return BookingsState.borrowed.find((booked) => booked.book_id == book_id);
  },
  returnCurBook: async () => {
    await window.db.borrowed.returnBook(BookAction.getCurBook().id);
    await BookAction.loadAll();
    await BookingAction.loadAll();
    await UserAction.loadAll();
  },
  queryAdmin: async (admin_id) => {
    return await window.db.borrowed.queryAdmin(admin_id);
  },
  isUserReserving: (user_id) => {
    return BookingsState.borrowed.find((item) => item.user_id == user_id);
  },
  isBookReserved: (user_id) => {
    return BookingsState.borrowed.find((item) => item.user_id == user_id);
  }
};
let BookState = proxy({
  books: []
});
async function parseData(data) {
  let out = [];
  for (let i2 = 0; i2 < data.length; i2++) {
    out.push({
      id: data[i2]["id"],
      idx: i2.toString(),
      title: data[i2]["title"] ?? "",
      author: data[i2]["author"] ?? "",
      available: data[i2]["available"] ?? "",
      publish_year: Number.parseInt(data[i2]["publish_year"]).toString() ?? "",
      tags: [],
      desc: data[i2]["desc"],
      options_comp: () => OptionsComp({ idx: i2, onClick: () => toggleEditBook(i2) })
    });
    out[i2].tags = await window.db.book_tags.getTagsOfBook(out[i2].id);
  }
  return out;
}
async function loadAll$3() {
  const loadedBooks = await window.db.books.getAll();
  let books = await parseData(loadedBooks);
  BookState.books = books;
}
const BookAction = {
  loadAll: loadAll$3,
  search: (title, author, publish_year, tags) => {
    window.db.books.search(title, author, publish_year, tags);
  },
  remove: async (id2) => {
    await window.db.books.remove(id2);
    await BookAction.loadAll();
  },
  removeCurr: () => {
    BookAction.remove(BookState.books[popupState.editedAdminIdx].id);
    BookAction.loadAll();
  },
  update: (title, author, publish_year, tags, date) => {
    window.db.books.update(BookState.books[popupState.editedBookIdx].id, title, author, publish_year, [...tags], date);
    BookAction.loadAll();
    BookingAction.loadAll();
  },
  add: (title, author, publish_year, tags) => {
    window.db.books.insert(title, author, publish_year, tags);
    BookAction.loadAll();
  },
  filter: async ({ title, author, year, tags }) => {
    title = title ?? "";
    author = author ?? "";
    year = year ?? "";
    tags = tags ?? [];
    let filtered = window.db.books.filter(title, author, year, tags);
    let books = await parseData(filtered);
    BookState.books = books;
  },
  getCurBook: function() {
    return BookState.books[popupState.editedBookIdx];
  },
  getBook: (id2) => {
    return BookState.books.find((book) => book.id == id2);
  }
};
let popupState = proxy({
  popupVis: false,
  popupType: "book-book",
  editedBookIdx: 0,
  editedAdminIdx: 0,
  editedUserIdx: 0
});
function toggleBookABook() {
  popupState.popupVis = true;
  popupState.popupType = "book-book";
}
function toggleAddBook() {
  popupState.popupVis = true;
  popupState.popupType = "add-book";
}
function toggleEditBook(idx) {
  popupState.popupVis = true;
  popupState.popupType = "edit-book";
  popupState.editedBookIdx = idx;
}
function toggleEditBookID(id2) {
  for (let i2 = 0; i2 < BookState.books.length; i2++) {
    if (BookState.books[i2].id == id2) {
      toggleEditBook(i2);
      break;
    }
  }
}
function toggleAddUser() {
  popupState.popupVis = true;
  popupState.popupType = "add-user";
}
function toggleEditUser(idx) {
  popupState.popupVis = true;
  popupState.popupType = "edit-user";
  popupState.editedUserIdx = idx;
}
function toggleEditUserID(id2) {
  for (let i2 = 0; i2 < UsersState.users.length; i2++) {
    if (UsersState.users[i2].id == id2) {
      toggleEditUser(i2);
      break;
    }
  }
}
function toggleAddAdmin() {
  popupState.popupVis = true;
  popupState.popupType = "add-admin";
}
function toggleEditAdmin(idx) {
  popupState.popupVis = true;
  popupState.popupType = "edit-admin";
  popupState.editedAdminIdx = idx;
}
function hidePopup() {
  popupState.popupVis = false;
}
let UsersState = proxy({
  users: []
});
async function loadAll$2() {
  const fetched = await window.db.users.getAll();
  let users = [];
  for (let i2 = 0; i2 < fetched.length; i2++) {
    users.push({
      id: fetched[i2]["id"],
      idx: i2.toString(),
      first_name: fetched[i2]["first_name"] ?? "",
      last_name: fetched[i2]["last_name"] ?? "",
      school: fetched[i2]["school"] ?? "",
      imgsUUID: fetched[i2]["imgsUUID"] ?? "",
      reserved_book: fetched[i2]["reserved_book"] ?? null,
      img: "",
      idImg: "",
      schoolIdImg: "",
      schoolPaper: "",
      options_comp: () => OptionsComp({ idx: i2, onClick: toggleEditUser })
    });
    let { img, idImg, schoolIdImg, schoolPaper } = window.utils.loadUserImgs(users[i2].imgsUUID);
    users[i2].img = img;
    users[i2].idImg = idImg;
    users[i2].schoolIdImg = schoolIdImg;
    users[i2].schoolPaper = schoolPaper;
  }
  UsersState.users = users;
}
const UserAction = {
  loadAll: loadAll$2,
  search: (fname, lname) => window.db.users.search(fname, lname),
  remove: async (id2) => {
    await window.db.users.remove(id2);
    UserAction.loadAll();
  },
  removeCurr: async () => {
    await UserAction.remove(UsersState.users[popupState.editedAdminIdx].id);
    await UserAction.loadAll();
  },
  update: (id2, imgsUUID, fname, lname, school, img, idImg, schoolIdImg, schoolPaper) => {
    window.db.users.update(id2, imgsUUID, fname, lname, school, img, idImg, schoolIdImg, schoolPaper);
    UserAction.loadAll();
  },
  add: (fname, lname, school, img, idImg, schoolIdImg, schoolPaper) => {
    window.db.users.insert(fname, lname, school, img, idImg, schoolIdImg, schoolPaper);
    UserAction.loadAll();
  },
  getUser: (id2) => {
    return UsersState.users.find((user) => user.id == id2);
  },
  getCurUser: () => {
    return UsersState.users[popupState.editedUserIdx];
  }
};
function r$1(e) {
  var t2, f2, n2 = "";
  if ("string" == typeof e || "number" == typeof e) n2 += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t2 = 0; t2 < o; t2++) e[t2] && (f2 = r$1(e[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e) e[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++) (e = arguments[f2]) && (t2 = r$1(e)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function Mt(t2) {
  if (typeof document == "undefined") return;
  let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t2 : e.appendChild(document.createTextNode(t2));
}
Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var L$2 = (t2) => typeof t2 == "number" && !isNaN(t2), N$1 = (t2) => typeof t2 == "string", P$1 = (t2) => typeof t2 == "function", mt = (t2) => N$1(t2) || L$2(t2), B$2 = (t2) => N$1(t2) || P$1(t2) ? t2 : null, pt$1 = (t2, o) => t2 === false || L$2(t2) && t2 > 0 ? t2 : o, z$2 = (t2) => reactExports.isValidElement(t2) || N$1(t2) || P$1(t2) || L$2(t2);
function Z$2(t2, o, e = 300) {
  let { scrollHeight: r2, style: s2 } = t2;
  requestAnimationFrame(() => {
    s2.minHeight = "initial", s2.height = r2 + "px", s2.transition = `all ${e}ms`, requestAnimationFrame(() => {
      s2.height = "0", s2.padding = "0", s2.margin = "0", setTimeout(o, e);
    });
  });
}
function $$2({ enter: t$12, exit: o, appendPosition: e = false, collapse: r2 = true, collapseDuration: s2 = 300 }) {
  return function({ children: a, position: d2, preventExitTransition: c2, done: T2, nodeRef: g2, isIn: v2, playToast: x2 }) {
    let C2 = e ? `${t$12}--${d2}` : t$12, S2 = e ? `${o}--${d2}` : o, E2 = reactExports.useRef(0);
    return reactExports.useLayoutEffect(() => {
      let f2 = g2.current, p2 = C2.split(" "), b2 = (n2) => {
        n2.target === g2.current && (x2(), f2.removeEventListener("animationend", b2), f2.removeEventListener("animationcancel", b2), E2.current === 0 && n2.type !== "animationcancel" && f2.classList.remove(...p2));
      };
      (() => {
        f2.classList.add(...p2), f2.addEventListener("animationend", b2), f2.addEventListener("animationcancel", b2);
      })();
    }, []), reactExports.useEffect(() => {
      let f2 = g2.current, p2 = () => {
        f2.removeEventListener("animationend", p2), r2 ? Z$2(f2, T2, s2) : T2();
      };
      v2 || (c2 ? p2() : (() => {
        E2.current = 1, f2.className += ` ${S2}`, f2.addEventListener("animationend", p2);
      })());
    }, [v2]), t.createElement(t.Fragment, null, a);
  };
}
function J$2(t2, o) {
  return { content: tt(t2.content, t2.props), containerId: t2.props.containerId, id: t2.props.toastId, theme: t2.props.theme, type: t2.props.type, data: t2.props.data || {}, isLoading: t2.props.isLoading, icon: t2.props.icon, reason: t2.removalReason, status: o };
}
function tt(t2, o, e = false) {
  return reactExports.isValidElement(t2) && !N$1(t2.type) ? reactExports.cloneElement(t2, { closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : P$1(t2) ? t2({ closeToast: o.closeToast, toastProps: o, data: o.data, isPaused: e }) : t2;
}
function yt({ closeToast: t$12, theme: o, ariaLabel: e = "close" }) {
  return t.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o}`, type: "button", onClick: (r2) => {
    r2.stopPropagation(), t$12(true);
  }, "aria-label": e }, t.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, t.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function gt({ delay: t$12, isRunning: o, closeToast: e, type: r2 = "default", hide: s2, className: l2, controlledProgress: a, progress: d2, rtl: c2, isIn: T2, theme: g2 }) {
  let v2 = s2 || a && d2 === 0, x2 = { animationDuration: `${t$12}ms`, animationPlayState: o ? "running" : "paused" };
  a && (x2.transform = `scaleX(${d2})`);
  let C2 = clsx("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${r2}`, { ["Toastify__progress-bar--rtl"]: c2 }), S2 = P$1(l2) ? l2({ rtl: c2, type: r2, defaultClassName: C2 }) : clsx(C2, l2), E2 = { [a && d2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d2 < 1 ? null : () => {
    T2 && e();
  } };
  return t.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": v2 }, t.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g2} Toastify__progress-bar--${r2}` }), t.createElement("div", { role: "progressbar", "aria-hidden": v2 ? "true" : "false", "aria-label": "notification timer", className: S2, style: x2, ...E2 }));
}
var Xt = 1, at$1 = () => `${Xt++}`;
function _t(t2, o, e) {
  let r2 = 1, s2 = 0, l2 = [], a = [], d2 = o, c2 = /* @__PURE__ */ new Map(), T2 = /* @__PURE__ */ new Set(), g2 = (i2) => (T2.add(i2), () => T2.delete(i2)), v2 = () => {
    a = Array.from(c2.values()), T2.forEach((i2) => i2());
  }, x2 = ({ containerId: i2, toastId: n2, updateId: u2 }) => {
    let h2 = i2 ? i2 !== t2 : t2 !== 1, m2 = c2.has(n2) && u2 == null;
    return h2 || m2;
  }, C2 = (i2, n2) => {
    c2.forEach((u2) => {
      var h2;
      (n2 == null || n2 === u2.props.toastId) && ((h2 = u2.toggle) == null || h2.call(u2, i2));
    });
  }, S2 = (i2) => {
    var n2, u2;
    (u2 = (n2 = i2.props) == null ? void 0 : n2.onClose) == null || u2.call(n2, i2.removalReason), i2.isActive = false;
  }, E2 = (i2) => {
    if (i2 == null) c2.forEach(S2);
    else {
      let n2 = c2.get(i2);
      n2 && S2(n2);
    }
    v2();
  }, f2 = () => {
    s2 -= l2.length, l2 = [];
  }, p2 = (i2) => {
    var m2, _2;
    let { toastId: n2, updateId: u2 } = i2.props, h2 = u2 == null;
    i2.staleId && c2.delete(i2.staleId), i2.isActive = true, c2.set(n2, i2), v2(), e(J$2(i2, h2 ? "added" : "updated")), h2 && ((_2 = (m2 = i2.props).onOpen) == null || _2.call(m2));
  };
  return { id: t2, props: d2, observe: g2, toggle: C2, removeToast: E2, toasts: c2, clearQueue: f2, buildToast: (i2, n2) => {
    if (x2(n2)) return;
    let { toastId: u2, updateId: h2, data: m2, staleId: _2, delay: k2 } = n2, M2 = h2 == null;
    M2 && s2++;
    let A2 = { ...d2, style: d2.toastStyle, key: r2++, ...Object.fromEntries(Object.entries(n2).filter(([D2, Y2]) => Y2 != null)), toastId: u2, updateId: h2, data: m2, isIn: false, className: B$2(n2.className || d2.toastClassName), progressClassName: B$2(n2.progressClassName || d2.progressClassName), autoClose: n2.isLoading ? false : pt$1(n2.autoClose, d2.autoClose), closeToast(D2) {
      c2.get(u2).removalReason = D2, E2(u2);
    }, deleteToast() {
      let D2 = c2.get(u2);
      if (D2 != null) {
        if (e(J$2(D2, "removed")), c2.delete(u2), s2--, s2 < 0 && (s2 = 0), l2.length > 0) {
          p2(l2.shift());
          return;
        }
        v2();
      }
    } };
    A2.closeButton = d2.closeButton, n2.closeButton === false || z$2(n2.closeButton) ? A2.closeButton = n2.closeButton : n2.closeButton === true && (A2.closeButton = z$2(d2.closeButton) ? d2.closeButton : true);
    let R2 = { content: i2, props: A2, staleId: _2 };
    d2.limit && d2.limit > 0 && s2 > d2.limit && M2 ? l2.push(R2) : L$2(k2) ? setTimeout(() => {
      p2(R2);
    }, k2) : p2(R2);
  }, setProps(i2) {
    d2 = i2;
  }, setToggle: (i2, n2) => {
    let u2 = c2.get(i2);
    u2 && (u2.toggle = n2);
  }, isToastActive: (i2) => {
    var n2;
    return (n2 = c2.get(i2)) == null ? void 0 : n2.isActive;
  }, getSnapshot: () => a };
}
var I$2 = /* @__PURE__ */ new Map(), F$2 = [], st = /* @__PURE__ */ new Set(), Vt = (t2) => st.forEach((o) => o(t2)), bt = () => I$2.size > 0;
function Qt() {
  F$2.forEach((t2) => nt(t2.content, t2.options)), F$2 = [];
}
var vt = (t2, { containerId: o }) => {
  var e;
  return (e = I$2.get(o || 1)) == null ? void 0 : e.toasts.get(t2);
};
function X$2(t2, o) {
  var r2;
  if (o) return !!((r2 = I$2.get(o)) != null && r2.isToastActive(t2));
  let e = false;
  return I$2.forEach((s2) => {
    s2.isToastActive(t2) && (e = true);
  }), e;
}
function ht(t2) {
  if (!bt()) {
    F$2 = F$2.filter((o) => t2 != null && o.options.toastId !== t2);
    return;
  }
  if (t2 == null || mt(t2)) I$2.forEach((o) => {
    o.removeToast(t2);
  });
  else if (t2 && ("containerId" in t2 || "id" in t2)) {
    let o = I$2.get(t2.containerId);
    o ? o.removeToast(t2.id) : I$2.forEach((e) => {
      e.removeToast(t2.id);
    });
  }
}
var Ct = (t2 = {}) => {
  I$2.forEach((o) => {
    o.props.limit && (!t2.containerId || o.id === t2.containerId) && o.clearQueue();
  });
};
function nt(t2, o) {
  z$2(t2) && (bt() || F$2.push({ content: t2, options: o }), I$2.forEach((e) => {
    e.buildToast(t2, o);
  }));
}
function xt(t2) {
  var o;
  (o = I$2.get(t2.containerId || 1)) == null || o.setToggle(t2.id, t2.fn);
}
function rt$1(t2, o) {
  I$2.forEach((e) => {
    (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t2, o == null ? void 0 : o.id);
  });
}
function Et(t2) {
  let o = t2.containerId || 1;
  return { subscribe(e) {
    let r2 = _t(o, t2, Vt);
    I$2.set(o, r2);
    let s2 = r2.observe(e);
    return Qt(), () => {
      s2(), I$2.delete(o);
    };
  }, setProps(e) {
    var r2;
    (r2 = I$2.get(o)) == null || r2.setProps(e);
  }, getSnapshot() {
    var e;
    return (e = I$2.get(o)) == null ? void 0 : e.getSnapshot();
  } };
}
function Pt(t2) {
  return st.add(t2), () => {
    st.delete(t2);
  };
}
function Wt(t2) {
  return t2 && (N$1(t2.toastId) || L$2(t2.toastId)) ? t2.toastId : at$1();
}
function U$2(t2, o) {
  return nt(t2, o), o.toastId;
}
function V$2(t2, o) {
  return { ...o, type: o && o.type || t2, toastId: Wt(o) };
}
function Q$2(t2) {
  return (o, e) => U$2(o, V$2(t2, e));
}
function y$2(t2, o) {
  return U$2(t2, V$2("default", o));
}
y$2.loading = (t2, o) => U$2(t2, V$2("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...o }));
function Gt(t2, { pending: o, error: e, success: r2 }, s2) {
  let l2;
  o && (l2 = N$1(o) ? y$2.loading(o, s2) : y$2.loading(o.render, { ...s2, ...o }));
  let a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, d2 = (T2, g2, v2) => {
    if (g2 == null) {
      y$2.dismiss(l2);
      return;
    }
    let x2 = { type: T2, ...a, ...s2, data: v2 }, C2 = N$1(g2) ? { render: g2 } : g2;
    return l2 ? y$2.update(l2, { ...x2, ...C2 }) : y$2(C2.render, { ...x2, ...C2 }), v2;
  }, c2 = P$1(t2) ? t2() : t2;
  return c2.then((T2) => d2("success", r2, T2)).catch((T2) => d2("error", e, T2)), c2;
}
y$2.promise = Gt;
y$2.success = Q$2("success");
y$2.info = Q$2("info");
y$2.error = Q$2("error");
y$2.warning = Q$2("warning");
y$2.warn = y$2.warning;
y$2.dark = (t2, o) => U$2(t2, V$2("default", { theme: "dark", ...o }));
function qt(t2) {
  ht(t2);
}
y$2.dismiss = qt;
y$2.clearWaitingQueue = Ct;
y$2.isActive = X$2;
y$2.update = (t2, o = {}) => {
  let e = vt(t2, o);
  if (e) {
    let { props: r2, content: s2 } = e, l2 = { delay: 100, ...r2, ...o, toastId: o.toastId || t2, updateId: at$1() };
    l2.toastId !== t2 && (l2.staleId = t2);
    let a = l2.render || s2;
    delete l2.render, U$2(a, l2);
  }
};
y$2.done = (t2) => {
  y$2.update(t2, { progress: 1 });
};
y$2.onChange = Pt;
y$2.play = (t2) => rt$1(true, t2);
y$2.pause = (t2) => rt$1(false, t2);
function It(t2) {
  var a;
  let { subscribe: o, getSnapshot: e, setProps: r2 } = reactExports.useRef(Et(t2)).current;
  r2(t2);
  let s2 = (a = reactExports.useSyncExternalStore(o, e, e)) == null ? void 0 : a.slice();
  function l2(d2) {
    if (!s2) return [];
    let c2 = /* @__PURE__ */ new Map();
    return t2.newestOnTop && s2.reverse(), s2.forEach((T2) => {
      let { position: g2 } = T2.props;
      c2.has(g2) || c2.set(g2, []), c2.get(g2).push(T2);
    }), Array.from(c2, (T2) => d2(T2[0], T2[1]));
  }
  return { getToastToRender: l2, isToastActive: X$2, count: s2 == null ? void 0 : s2.length };
}
function At(t2) {
  let [o, e] = reactExports.useState(false), [r2, s2] = reactExports.useState(false), l2 = reactExports.useRef(null), a = reactExports.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d2, pauseOnHover: c2, closeToast: T2, onClick: g2, closeOnClick: v2 } = t2;
  xt({ id: t2.toastId, containerId: t2.containerId, fn: e }), reactExports.useEffect(() => {
    if (t2.pauseOnFocusLoss) return x2(), () => {
      C2();
    };
  }, [t2.pauseOnFocusLoss]);
  function x2() {
    document.hasFocus() || p2(), window.addEventListener("focus", f2), window.addEventListener("blur", p2);
  }
  function C2() {
    window.removeEventListener("focus", f2), window.removeEventListener("blur", p2);
  }
  function S2(m2) {
    if (t2.draggable === true || t2.draggable === m2.pointerType) {
      b2();
      let _2 = l2.current;
      a.canCloseOnClick = true, a.canDrag = true, _2.style.transition = "none", t2.draggableDirection === "x" ? (a.start = m2.clientX, a.removalDistance = _2.offsetWidth * (t2.draggablePercent / 100)) : (a.start = m2.clientY, a.removalDistance = _2.offsetHeight * (t2.draggablePercent === 80 ? t2.draggablePercent * 1.5 : t2.draggablePercent) / 100);
    }
  }
  function E2(m2) {
    let { top: _2, bottom: k2, left: M2, right: A2 } = l2.current.getBoundingClientRect();
    m2.nativeEvent.type !== "touchend" && t2.pauseOnHover && m2.clientX >= M2 && m2.clientX <= A2 && m2.clientY >= _2 && m2.clientY <= k2 ? p2() : f2();
  }
  function f2() {
    e(true);
  }
  function p2() {
    e(false);
  }
  function b2() {
    a.didMove = false, document.addEventListener("pointermove", n2), document.addEventListener("pointerup", u2);
  }
  function i2() {
    document.removeEventListener("pointermove", n2), document.removeEventListener("pointerup", u2);
  }
  function n2(m2) {
    let _2 = l2.current;
    if (a.canDrag && _2) {
      a.didMove = true, o && p2(), t2.draggableDirection === "x" ? a.delta = m2.clientX - a.start : a.delta = m2.clientY - a.start, a.start !== m2.clientX && (a.canCloseOnClick = false);
      let k2 = t2.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
      _2.style.transform = `translate3d(${k2},0)`, _2.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
    }
  }
  function u2() {
    i2();
    let m2 = l2.current;
    if (a.canDrag && a.didMove && m2) {
      if (a.canDrag = false, Math.abs(a.delta) > a.removalDistance) {
        s2(true), t2.closeToast(true), t2.collapseAll();
        return;
      }
      m2.style.transition = "transform 0.2s, opacity 0.2s", m2.style.removeProperty("transform"), m2.style.removeProperty("opacity");
    }
  }
  let h2 = { onPointerDown: S2, onPointerUp: E2 };
  return d2 && c2 && (h2.onMouseEnter = p2, t2.stacked || (h2.onMouseLeave = f2)), v2 && (h2.onClick = (m2) => {
    g2 && g2(m2), a.canCloseOnClick && T2(true);
  }), { playToast: f2, pauseToast: p2, isRunning: o, preventExitTransition: r2, toastRef: l2, eventHandlers: h2 };
}
var Ot = typeof window != "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
var G$2 = ({ theme: t$12, type: o, isLoading: e, ...r2 }) => t.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t$12 === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`, ...r2 });
function ao(t$12) {
  return t.createElement(G$2, { ...t$12 }, t.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function so(t$12) {
  return t.createElement(G$2, { ...t$12 }, t.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function no(t$12) {
  return t.createElement(G$2, { ...t$12 }, t.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function ro(t$12) {
  return t.createElement(G$2, { ...t$12 }, t.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function io() {
  return t.createElement("div", { className: "Toastify__spinner" });
}
var W$2 = { info: so, warning: ao, success: no, error: ro, spinner: io }, lo = (t2) => t2 in W$2;
function Nt({ theme: t2, type: o, isLoading: e, icon: r2 }) {
  let s2 = null, l2 = { theme: t2, type: o };
  return r2 === false || (P$1(r2) ? s2 = r2({ ...l2, isLoading: e }) : reactExports.isValidElement(r2) ? s2 = reactExports.cloneElement(r2, l2) : e ? s2 = W$2.spinner() : lo(o) && (s2 = W$2[o](l2))), s2;
}
var wt = (t$12) => {
  let { isRunning: o, preventExitTransition: e, toastRef: r2, eventHandlers: s2, playToast: l2 } = At(t$12), { closeButton: a, children: d2, autoClose: c2, onClick: T2, type: g2, hideProgressBar: v2, closeToast: x2, transition: C2, position: S2, className: E2, style: f2, progressClassName: p2, updateId: b2, role: i2, progress: n2, rtl: u2, toastId: h2, deleteToast: m2, isIn: _2, isLoading: k2, closeOnClick: M2, theme: A2, ariaLabel: R2 } = t$12, D2 = clsx("Toastify__toast", `Toastify__toast-theme--${A2}`, `Toastify__toast--${g2}`, { ["Toastify__toast--rtl"]: u2 }, { ["Toastify__toast--close-on-click"]: M2 }), Y2 = P$1(E2) ? E2({ rtl: u2, position: S2, type: g2, defaultClassName: D2 }) : clsx(D2, E2), ft = Nt(t$12), dt2 = !!n2 || !c2, j2 = { closeToast: x2, type: g2, theme: A2 }, H2 = null;
  return a === false || (P$1(a) ? H2 = a(j2) : reactExports.isValidElement(a) ? H2 = reactExports.cloneElement(a, j2) : H2 = yt(j2)), t.createElement(C2, { isIn: _2, done: m2, position: S2, preventExitTransition: e, nodeRef: r2, playToast: l2 }, t.createElement("div", { id: h2, tabIndex: 0, onClick: T2, "data-in": _2, className: Y2, ...s2, style: f2, ref: r2, ..._2 && { role: i2, "aria-label": R2 } }, ft != null && t.createElement("div", { className: clsx("Toastify__toast-icon", { ["Toastify--animate-icon Toastify__zoom-enter"]: !k2 }) }, ft), tt(d2, t$12, !o), H2, !t$12.customProgressBar && t.createElement(gt, { ...b2 && !dt2 ? { key: `p-${b2}` } : {}, rtl: u2, theme: A2, delay: c2, isRunning: o, isIn: _2, closeToast: x2, hide: v2, type: g2, className: p2, controlledProgress: dt2, progress: n2 || 0 })));
};
var K$2 = (t2, o = false) => ({ enter: `Toastify--animate Toastify__${t2}-enter`, exit: `Toastify--animate Toastify__${t2}-exit`, appendPosition: o }), lt$1 = $$2(K$2("bounce", true)), uo = $$2(K$2("flip"));
var _o = { position: "top-right", transition: lt$1, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (t2) => t2.altKey && t2.code === "KeyT" };
function Lt(t$12) {
  let o = { ..._o, ...t$12 }, e = t$12.stacked, [r2, s2] = reactExports.useState(true), l2 = reactExports.useRef(null), { getToastToRender: a, isToastActive: d2, count: c2 } = It(o), { className: T2, style: g2, rtl: v2, containerId: x2, hotKeys: C2 } = o;
  function S2(f2) {
    let p2 = clsx("Toastify__toast-container", `Toastify__toast-container--${f2}`, { ["Toastify__toast-container--rtl"]: v2 });
    return P$1(T2) ? T2({ position: f2, rtl: v2, defaultClassName: p2 }) : clsx(p2, B$2(T2));
  }
  function E2() {
    e && (s2(true), y$2.play());
  }
  return Ot(() => {
    var f2;
    if (e) {
      let p2 = l2.current.querySelectorAll('[data-in="true"]'), b2 = 12, i2 = (f2 = o.position) == null ? void 0 : f2.includes("top"), n2 = 0, u2 = 0;
      Array.from(p2).reverse().forEach((h2, m2) => {
        let _2 = h2;
        _2.classList.add("Toastify__toast--stacked"), m2 > 0 && (_2.dataset.collapsed = `${r2}`), _2.dataset.pos || (_2.dataset.pos = i2 ? "top" : "bot");
        let k2 = n2 * (r2 ? 0.2 : 1) + (r2 ? 0 : b2 * m2);
        _2.style.setProperty("--y", `${i2 ? k2 : k2 * -1}px`), _2.style.setProperty("--g", `${b2}`), _2.style.setProperty("--s", `${1 - (r2 ? u2 : 0)}`), n2 += _2.offsetHeight, u2 += 0.025;
      });
    }
  }, [r2, c2, e]), reactExports.useEffect(() => {
    function f2(p2) {
      var i2;
      let b2 = l2.current;
      C2(p2) && ((i2 = b2.querySelector('[tabIndex="0"]')) == null || i2.focus(), s2(false), y$2.pause()), p2.key === "Escape" && (document.activeElement === b2 || b2 != null && b2.contains(document.activeElement)) && (s2(true), y$2.play());
    }
    return document.addEventListener("keydown", f2), () => {
      document.removeEventListener("keydown", f2);
    };
  }, [C2]), t.createElement("section", { ref: l2, className: "Toastify", id: x2, onMouseEnter: () => {
    e && (s2(false), y$2.pause());
  }, onMouseLeave: E2, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": o["aria-label"] }, a((f2, p2) => {
    let b2 = p2.length ? { ...g2 } : { ...g2, pointerEvents: "none" };
    return t.createElement("div", { tabIndex: -1, className: S2(f2), "data-stacked": e, style: b2, key: `c-${f2}` }, p2.map(({ content: i2, props: n2 }) => t.createElement(wt, { ...n2, stacked: e, collapseAll: E2, isIn: d2(n2.toastId, n2.containerId), key: `t-${n2.key}` }, i2)));
  }));
}
function getDate(offset) {
  offset = offset ?? 0;
  const today = /* @__PURE__ */ new Date();
  const offseted = /* @__PURE__ */ new Date();
  offseted.setDate(today.getDate() + offset);
  return offseted.toISOString().replace("T", " ").split(" ")[0].replaceAll("-", "/");
}
function showToast(type, msg) {
  y$2.dismiss();
  type(msg, {
    position: "bottom-center",
    autoClose: 800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: void 0,
    transition: uo
  });
}
const INPUT_TITLE_WIDTH$1 = "w-48";
function AddUserPopup() {
  function onAddUser() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const idImgValid = idImgRef.current?.checkInput();
    const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    const schoolImgValid = schoolImgRef.current?.checkInput();
    if (!(fNameValid && lNameValid && collegeValid && idImgValid && idSchoolImgValid && schoolImgValid)) {
      return;
    }
    UserAction.add(
      fNameRef.current.getInput(),
      lNameRef.current.getInput(),
      collegeRef.current.getInput(),
      mainImg[0],
      // mainImgRef.current!.getInput()[0],
      idImgRef.current.getInput()[0],
      idSchoolImgRef.current.getInput()[0],
      schoolImgRef.current.getInput()[0]
    );
    fNameRef.current.setInput("");
    lNameRef.current.setInput("");
    collegeRef.current.setInput("");
    setMainImg([]);
    idImgRef.current.setInput([]);
    idSchoolImgRef.current.setInput([]);
    schoolImgRef.current.setInput([]);
  }
  function onSaveUser() {
    const fNameValid = fNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const lNameValid = lNameRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const collegeValid = collegeRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "" });
    const idImgValid = idImgRef.current?.checkInput();
    const idSchoolImgValid = idSchoolImgRef.current?.checkInput();
    const schoolImgValid = schoolImgRef.current?.checkInput();
    if (!(fNameValid && lNameValid && collegeValid && idImgValid && idSchoolImgValid && schoolImgValid)) {
      return;
    }
    let user = UsersState.users[popupState.editedUserIdx];
    UserAction.update(
      user.id,
      user.imgsUUID,
      fNameRef.current.getInput(),
      lNameRef.current.getInput(),
      collegeRef.current.getInput(),
      mainImg[0],
      idImgRef.current.getInput()[0],
      idSchoolImgRef.current.getInput()[0],
      schoolImgRef.current.getInput()[0]
    );
  }
  function onDeleteUser() {
    const user = UserAction.getCurUser();
    const reserved = BookingAction.isUserReserving(user.id);
    if (reserved) {
      const book = BookAction.getBook(reserved.book_id);
      showToast(y$2.error, `لا يمكن الحدف, العضو يملك كتاب ${book.title}`);
    } else {
      UserAction.remove(user.id);
      hidePopup();
      showToast(y$2.success, `تم حدف العضو بنجاح`);
    }
  }
  reactExports.useEffect(() => {
    if (popupState.popupType == "edit-user") {
      let user = UsersState.users[popupState.editedUserIdx];
      fNameRef.current.setInput(user.first_name);
      lNameRef.current.setInput(user.last_name);
      collegeRef.current.setInput(user.school);
      idImgRef.current.setInput([user.idImg]);
      idSchoolImgRef.current.setInput([user.schoolIdImg]);
      schoolImgRef.current.setInput([user.schoolPaper]);
    }
  });
  async function onUploadImg() {
    const imgBase64 = await window.utils.open();
    return [imgBase64];
  }
  const fNameRef = reactExports.useRef(null);
  const lNameRef = reactExports.useRef(null);
  const collegeRef = reactExports.useRef(null);
  const [mainImg, setMainImg] = reactExports.useState([]);
  if (popupState.popupType == "edit-user" && mainImg.length == 0) {
    let user = UsersState.users[popupState.editedUserIdx];
    setMainImg([user.img]);
  }
  const idImgRef = reactExports.useRef(null);
  const idSchoolImgRef = reactExports.useRef(null);
  const schoolImgRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-popup rounded shadow w-2/4", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BgPattern, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full flex flex-col gap-5 px-6 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-end -mb-6 cursor-pointer w-fit h-fit", onClick: () => popupState.popupVis = false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: closeIMG, alt: "closeIMG", width: 16, onClick: () => hidePopup() }) }),
      popupState.popupType == "edit-user" ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "تعديل معلومات العضو" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "اضافة عضو جديد" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          onClick: async () => setMainImg(await onUploadImg()),
          className: `img-frame flex items-center justify-center  
                    w-28 h-28 bg-white self-center rounded-full overflow-hidden border-4
                    ${popupState.popupType == "edit-user" ? "" : "cursor-pointer bg-zinc-200"}
                  `,
          children: popupState.popupType == "edit-user" || mainImg.length != 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mainImg, alt: "img" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: userIMG, width: 50, alt: "img" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_TITLE_WIDTH$1, ref: fNameRef, title: "الاسم", placeholder: "ادخل الاسم... " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_TITLE_WIDTH$1, ref: lNameRef, title: "اللقب", placeholder: "ادخل اللقب... " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_TITLE_WIDTH$1, ref: collegeRef, title: "الجامعة", placeholder: "ادخل اسم الجامعة... " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImgUpload, { ref: idImgRef, titleClassName: INPUT_TITLE_WIDTH$1, title: "بطاقة التعريف", onUploadImg }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImgUpload, { ref: idSchoolImgRef, titleClassName: INPUT_TITLE_WIDTH$1, title: "بطاقة الطالب", onUploadImg }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImgUpload, { ref: schoolImgRef, titleClassName: INPUT_TITLE_WIDTH$1, title: "شهادة مدرسية", onUploadImg })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButtons$2, { onAddUser, onDeleteUser, onSaveUser })
    ] })
  ] });
}
function ActionButtons$2({ onAddUser, onDeleteUser, onSaveUser }) {
  if (popupState.popupType == "add-user") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onAddUser, className: "interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "اضافة" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex gap-2 self-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onDeleteUser, className: "delete-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حدف" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onSaveUser, className: "interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حفظ" })
    ] })
  ] });
}
const subIMG = "" + new URL("sub-CUnai6Uh.png", import.meta.url).href;
const DateInput = reactExports.forwardRef(function({}, ref) {
  reactExports.useImperativeHandle(ref, () => {
    return {
      getInput: () => {
        const date = /* @__PURE__ */ new Date(yearRef.current.value + "-" + monthRef.current.value + "-" + dayRef.current.value);
        return date.toISOString().replace("T", " ").split(" ")[0].replaceAll("-", "/");
      },
      setInput: (year, month, day) => {
        dayRef.current.value = day;
        monthRef.current.value = month;
        yearRef.current.value = year;
      }
    };
  });
  const dayRef = reactExports.useRef(null);
  const monthRef = reactExports.useRef(null);
  const yearRef = reactExports.useRef(null);
  let limitInput = (ref2, max) => {
    if (ref2.current.value == "" || Number.isNaN(Number.parseInt(ref2.current.value))) {
      ref2.current.value = "1";
    }
    ref2.current.value = Math.max(1, Math.min(max, Number.parseInt(ref2.current.value)));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-64 flex flex-row gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: dayRef, onChange: (e) => limitInput(dayRef, 30), maxLength: 2, className: "w-12 text-center  border rounded px-2", placeholder: "dd", type: "text" }),
    "/",
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: monthRef, onChange: (e) => limitInput(monthRef, 12), maxLength: 2, className: "w-12 text-center  border rounded px-2", placeholder: "mm", type: "text" }),
    "/",
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: yearRef, onChange: (e) => limitInput(yearRef, 5e3), maxLength: 4, className: "w-16 text-center border rounded px-2", placeholder: "yyyy", type: "text" })
  ] });
});
const INPUT_WIDTH$1 = "w-40";
function AddBookPopup() {
  function onAddBook() {
    let titleValid = titleRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let authorValid = authorRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let yearValid = yearRef.current?.checkInput({ func: validate_inputNumber, msg: "يرجى ادخال عام نشر صحيح" });
    if (!(titleValid && authorValid && yearValid)) return;
    BookAction.add(titleRef.current.getInput(), authorRef.current.getInput(), yearRef.current.getInput(), tags);
    titleRef.current.setInput("");
    authorRef.current.setInput("");
    yearRef.current.setInput("");
  }
  function onRemoveBook() {
    const book = BookAction.getCurBook();
    const reserved = BookingAction.isBookReserved(book.id);
    if (reserved) {
      const user = UserAction.getUser(reserved.user_id);
      showToast(y$2.error, `لا يمكن الحدف, الكتاب حاليا لدى ${user.first_name + " " + user.last_name}`);
    } else {
      BookAction.remove(book.id);
      hidePopup();
      showToast(y$2.success, `تم حدف الكتاب بنجاح`);
    }
  }
  async function onReturnBook() {
    await BookingAction.returnCurBook();
    showToast(y$2.success, "تم ارسترجاع الكتاب بنجاح");
    popupState.popupVis = false;
  }
  function onUpateBook() {
    let titleValid = titleRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let authorValid = authorRef.current?.checkInput({ func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" });
    let yearValid = yearRef.current?.checkInput({ func: validate_inputNumber, msg: "يرجى ادخال عام نشر صحيح" });
    if (!(titleValid && authorValid && yearValid)) return;
    BookAction.update(titleRef.current.getInput(), authorRef.current.getInput(), yearRef.current.getInput(), tags, dateRef.current.getInput());
  }
  function onAddTag() {
    if (!tagRef.current?.checkInput({ func: validate_noComma, msg: "يرجي عدم اضافة فاصلة" })) return;
    const tag = tagRef.current.getInput();
    if (!tag || tags.includes(tag)) return;
    setTags([...tags, tag]);
    tagRef.current.setInput("");
  }
  function onRemoveTag(tag) {
    tags.splice(tags.indexOf(tag), 1);
    setTags([...tags]);
  }
  function ReservedBookExtraInfo() {
    if (popupState.popupType != "edit-book" || popupState.popupType == "edit-book" && BookState.books[popupState.editedBookIdx].available) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
    }
    let user = UsersState.users.find((user2) => user2.id == BookingAction.getFromBookId(BookState.books[popupState.editedBookIdx].id)?.user_id);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookDateInput, { ref: dateRef }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden cursor-pointer",
          onClick: () => toggleEditUserID(user.id),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `title text-white flex items-center justify-center w-32 font-bold rounded-r ` + INPUT_WIDTH$1, children: "العضو" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-2 w-full", children: user.first_name + " " + user.last_name })
          ]
        }
      )
    ] });
  }
  reactExports.useEffect(() => {
    if (popupState.popupType == "edit-book") {
      titleRef.current.setInput(BookState.books[popupState.editedBookIdx].title);
      authorRef.current.setInput(BookState.books[popupState.editedBookIdx].author);
      yearRef.current.setInput(BookState.books[popupState.editedBookIdx].publish_year);
      setTags(BookState.books[popupState.editedBookIdx].tags);
    }
  }, [popupState.popupType]);
  const titleRef = reactExports.useRef(null);
  const authorRef = reactExports.useRef(null);
  const yearRef = reactExports.useRef(null);
  const tagRef = reactExports.useRef(null);
  const [tags, setTags] = reactExports.useState([]);
  const dateRef = reactExports.useRef(null);
  useSnapshot(GState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "book-add-edit-popup", className: "filter-popup rounded shadow w-2/4", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BgPattern, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-end -mb-6 cursor-pointer w-fit h-fit", onClick: () => popupState.popupVis = false, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: closeIMG, alt: "closeIMG", width: 16, onClick: () => hidePopup() }) }),
      popupState.popupType == "edit-book" ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "تعديل معلومات الكتاب" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "اضافة كتاب" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_WIDTH$1, ref: titleRef, title: "العنوان", placeholder: "ادخل العنوان... " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_WIDTH$1, ref: authorRef, title: "الكاتب", placeholder: "ادخل اسم الكاتب... " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { titleClassName: INPUT_WIDTH$1, ref: yearRef, title: "سنة النشر", placeholder: "ادخل سنة النشر..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReservedBookExtraInfo, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "مواضيع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-auto	 w-full flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: tagRef, className: "my-0 shrink-0", onEnter: onAddTag, title: "موضوع", placeholder: "ادخل موضوع..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " tags-container bg-zinc-50	rounded p-2 flex flex-row flex-wrap gap-2 text-white w-full h-fit overflowy-scroll", style: { maxHeight: "160px" }, children: tags.map(
          (tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "tag-item relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded px-6 py-2 cursor-default shadow", children: tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: closeIMG, onClick: () => onRemoveTag(tag), alt: "closeIMG", className: "tag-item-cancel absolute cursor-pointer" })
          ] }, tag)
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ActionButtons$1, { onAddBook, onUpateBook, onRemoveBook, onReturnBook })
    ] })
  ] });
}
function ActionButtons$1({ onAddBook, onUpateBook, onRemoveBook, onReturnBook }) {
  if (popupState.popupType == "add-book") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onAddBook,
        className: "interactive-button add-book flex gap-2  self-end  cursor-pointer rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "اضافة" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row self-end gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onUpateBook,
        className: "interactive-button add-book  flex gap-2    rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حفظ" })
        ]
      }
    ),
    BookAction.getCurBook().available ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onRemoveBook,
        className: "delete-book   flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حدف" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onReturnBook,
        className: "interactive-button add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: subIMG, height: 16, width: 16, alt: "subIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ارجاع" })
        ]
      }
    )
  ] });
}
const BookDateInput = reactExports.forwardRef(function({}, ref) {
  function DateSelector() {
    function selectDate(option) {
      setDateOption(option);
      switch (option) {
        case "week":
          setDateInput({ title: "بعد اسبوع", date: getDate(7) });
          break;
        case "2week":
          setDateInput({ title: "بعد اسبوعين", date: getDate(14) });
          break;
        case "month":
          setDateInput({ title: "بعد شهر", date: getDate(30) });
          break;
      }
      setDateRec(false);
    }
    const sharedStyle = "border-gray-300 cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "date-selection absolute top-12 left-0 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("manual"), className: sharedStyle, children: "اختر تاريخ محدد" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("week"), className: sharedStyle, children: "بعد اسبوع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("2week"), className: sharedStyle, children: "بعد اسبوعين" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("month"), className: sharedStyle, children: "بعد شهر" })
    ] });
  }
  reactExports.useEffect(() => {
    if (dateRef.current) {
      const [year, month, day] = BookingAction.getFromBookId(BookAction.getCurBook().id)?.return_date.split("/");
      dateRef.current.setInput(year, month, day);
    }
  });
  reactExports.useImperativeHandle(ref, () => {
    return {
      getInput: () => {
        if (dateRef.current) {
          return dateRef.current.getInput();
        } else {
          return dateInput.date;
        }
      }
    };
  });
  const [dateRec, setDateRec] = reactExports.useState(false);
  const [dateOption, setDateOption] = reactExports.useState("manual");
  const dateRef = reactExports.useRef(null);
  const [dateInput, setDateInput] = reactExports.useState({ title: "week", date: getDate(7) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `popup-input relative flex  gap-2 text-lg m-4 pl-1 bg-white rounded shadow overflow-hidden`,
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${INPUT_WIDTH$1}`, children: "تاريخ الارجاع" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex item-center justify-between p-2 w-full", children: [
          dateOption == "manual" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateInput, { ref: dateRef }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: dateInput.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-end flex-1 mx-2 justify-self-end", children: dateInput.date.split(" ")[0] })
          ] }),
          dateRec ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateSelector, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center p-1 cursor-pointer", onClick: (e) => setDateRec(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-4", src: moreIMG, alt: "moreIMG" }) })
        ] })
      ]
    }
  );
});
let AdminsState = proxy({
  admins: []
});
async function loadAll$1() {
  const fetched = await window.db.admins.getAll();
  let admins = [];
  for (let i2 = 0; i2 < fetched.length; i2++) {
    admins.push({
      id: fetched[i2]["id"],
      idx: i2.toString(),
      first_name: fetched[i2]["first_name"] ?? "",
      last_name: fetched[i2]["last_name"] ?? "",
      imgsUUID: fetched[i2]["imgsUUID"] ?? "",
      img: "",
      options_comp: () => OptionsComp({ idx: i2, onClick: () => toggleEditAdmin(i2) })
    });
    let { img } = window.utils.loadAdminImgs(admins[i2].id);
    admins[i2].img = img;
  }
  AdminsState.admins = admins;
}
const AdminAction = {
  loadAll: loadAll$1,
  search: async (fname, lname) => await window.db.admins.search(fname, lname),
  remove: async (id2) => {
    await window.db.admins.remove(id2);
  },
  removeCurr: async () => {
    await AdminAction.remove(AdminsState.admins[popupState.editedAdminIdx].id);
    await AdminAction.loadAll();
  },
  update: async (id2, imgsUUID, fname, lname, img) => {
    await window.db.admins.update(id2, imgsUUID, fname, lname, img);
    await AdminAction.loadAll();
  },
  add: async (fname, lname, img) => {
    await window.db.admins.insert(fname, lname, img);
    await AdminAction.loadAll();
  }
};
const INPUT_WIDTH = "w-40";
function BookBookPopup() {
  function onChangeBook(text) {
    onBlur();
    text = text ?? bookRef.current?.getInput();
    if (!text || !text.length) {
      setBooks(BookState.books);
      return;
    }
    setBooks(BookState.books.filter((book) => book.title.includes(text)));
  }
  function onSelectBook(book) {
    setBooks([]);
    setSelectedBook(book);
    bookRef.current?.setInput(book.title);
  }
  function onChangeUser(text) {
    onBlur();
    text = text ?? userRef.current?.getInput();
    if (!text || !text.length) {
      setUsers(UsersState.users);
      return;
    }
    setUsers(UsersState.users.filter((user) => {
      let names = text.split(" ");
      for (let name of names) {
        if (user.first_name.includes(name) || user.last_name.includes(name)) return true;
      }
      return false;
    }));
  }
  function onSelectUser(user) {
    setUsers([]);
    setSelectedUser(user);
    userRef.current?.setInput(user.first_name + " " + user.last_name);
  }
  function onChangeAdmin(text) {
    onBlur();
    text = text ?? adminRef.current?.getInput();
    if (!text || !text.length) {
      setAdmins(AdminsState.admins);
      return;
    }
    setAdmins(AdminsState.admins.filter((admin) => {
      let names = text.split(" ");
      for (let name of names) {
        if (admin.first_name.includes(name) || admin.last_name.includes(name)) return true;
      }
      return false;
    }));
  }
  function onSelectAdmin(admin) {
    setAdmins([]);
    setSelectedAdmin(admin);
    adminRef.current?.setInput(admin.first_name + " " + admin.last_name);
  }
  function AdminItems() {
    let comps = [];
    for (let admin of Object.values(admins)) {
      comps.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            onClick: () => onSelectAdmin(admin),
            className: `border-gray-300 cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: admin.first_name + " " + admin.last_name })
          },
          admin.id
        )
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-12 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll", children: [
      " ",
      comps
    ] });
  }
  function UserItems() {
    function showInfo(e, reserved) {
      e.stopPropagation();
      const book = BookAction.getBook(reserved.user_id);
      showToast(y$2.info, `العضو يملك كتاب ${book.title} لا يمكن حجز اكثر من كتاب للعضو الواحد`);
    }
    let comps = [];
    for (let user of Object.values(users)) {
      const reserved = BookingsState.borrowed.find((item) => item.user_id == user.id);
      comps.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            onClick: (e) => !reserved ? onSelectUser(user) : showInfo(e, reserved),
            className: `border-gray-300 cursor-pointer py-2 px-4 border-b ${reserved ? "bg-yellow-50 hover:bg-yellow-50" : ""} hover:bg-stone-100 flex items-center justify-between`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: user.first_name + " " + user.last_name })
          },
          user.id
        )
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-12 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll", children: [
      " ",
      comps
    ] });
  }
  function BookItems() {
    function showInfo(e, reserved) {
      e.stopPropagation();
      const user = UserAction.getUser(reserved.user_id);
      showToast(y$2.info, `الكتاب محجوز من طرف ${user.first_name + " " + user.last_name}`);
    }
    let comps = [];
    for (let book of Object.values(books)) {
      const reserved = BookingsState.borrowed.find((item) => item.book_id == book.id);
      console.log(reserved);
      comps.push(
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            onClick: (e) => !reserved ? onSelectBook(book) : showInfo(e, reserved),
            className: `border-gray-300 cursor-pointer py-2 px-4 ${reserved ? "bg-yellow-50 hover:bg-yellow-50" : ""}  border-b hover:bg-stone-100 flex items-center justify-between`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: book.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm  text-stone-600", children: book.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-stone-600", children: book.publish_year })
              ] })
            ]
          },
          book.id
        )
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-12 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll", children: [
      " ",
      comps,
      " "
    ] });
  }
  function DateSelector() {
    function selectDate(option) {
      setDateOption(option);
      switch (option) {
        case "week":
          setDateInput({ title: "بعد اسبوع", date: getDate(7) });
          break;
        case "2week":
          setDateInput({ title: "بعد اسبوعين", date: getDate(14) });
          break;
        case "month":
          setDateInput({ title: "بعد شهر", date: getDate(30) });
          break;
      }
      setDateRec(false);
    }
    const sharedStyle = "border-gray-300  cursor-pointer py-2 px-4 border-b hover:bg-stone-100 flex items-center justify-between";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "date-selection absolute top-12 left-0 z-10  w-full flex flex-col bg-white rounded shadow max-h-60 overflow-y-scroll", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("manual"), className: sharedStyle, children: "اختر تاريخ محدد" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("week"), className: sharedStyle, children: "بعد اسبوع" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("2week"), className: sharedStyle, children: "بعد اسبوعين" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => selectDate("month"), className: sharedStyle, children: "بعد شهر" })
    ] });
  }
  function onBlur(e) {
    if (e) {
      e.stopPropagation();
    }
    setUsers([]);
    setBooks([]);
    setAdmins([]);
    setDateRec(false);
  }
  async function onBooking() {
    const isBookValid = bookRef.current?.checkInput([
      { func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" },
      { func: () => {
        return selectedBook != void 0 && bookRef.current?.getInput() == selectedBook.title;
      }, msg: "تم ادخال كتاب غير معروف, تحقق من الاسم" }
    ]);
    const isUserValid = userRef.current?.checkInput([
      { func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" },
      { func: () => {
        return selectedUser != void 0 && userRef.current?.getInput() == selectedUser.first_name + " " + selectedUser.last_name;
      }, msg: "تم ادخال عضو غير معروف, تحقق من الاسم" }
    ]);
    const isAdminValid = adminRef.current?.checkInput([
      { func: validate_inputNotEmpty, msg: "تم ادخال اسم فارغ, يرجي ادخال اسم صحيح" },
      { func: () => {
        return selectedAdmin != void 0 && adminRef.current?.getInput() == selectedAdmin.first_name + " " + selectedAdmin.last_name;
      }, msg: "تم ادخال عضو غير معروف, تحقق من الاسم" }
    ]);
    if (!(isBookValid && isUserValid && isAdminValid)) {
      return;
    }
    await BookingAction.add(
      selectedBook.id,
      selectedUser.id,
      selectedAdmin.id,
      dateOption == "manual" ? dateRef.current.getInput() : dateInput.date
    );
    adminRef.current?.setInput("");
    userRef.current?.setInput("");
    bookRef.current?.setInput("");
    selectedBook.available = false;
    selectedUser.reserved_book = Number.parseInt(selectedAdmin.id);
    setSelectedBook(null);
    setSelectedUser(null);
    setSelectedAdmin(null);
    showToast(y$2.success, "تم حجز الكتاب بنجاح");
  }
  const adminRef = reactExports.useRef(null);
  const bookRef = reactExports.useRef(null);
  const userRef = reactExports.useRef(null);
  const dateRef = reactExports.useRef(null);
  const [books, setBooks] = reactExports.useState([]);
  const [selectedBook, setSelectedBook] = reactExports.useState(null);
  const [users, setUsers] = reactExports.useState([]);
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [admins, setAdmins] = reactExports.useState([]);
  const [selectedAdmin, setSelectedAdmin] = reactExports.useState(null);
  const [dateRec, setDateRec] = reactExports.useState(false);
  const [dateOption, setDateOption] = reactExports.useState("week");
  const [dateInput, setDateInput] = reactExports.useState({ title: "بعد اسبوع", date: getDate(7) });
  useSnapshot(GState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "book-a-book", className: "filter-popup rounded shadow", onClick: (e) => {
    onBlur(e);
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BgPattern, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full h-full flex flex-col gap-5 px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-end -mb-6 cursor-pointer w-fit h-fit", onClick: () => hidePopup(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: closeIMG, alt: "closeIMG", width: 16 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "حجز كتاب" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            titleClassName: `${INPUT_WIDTH}`,
            ref: adminRef,
            title: "المسئول",
            placeholder: "ادخل اسم المسئول... ",
            onChange: onChangeAdmin,
            callbacks: { onClick: (e) => e.stopPropagation(), onFocus: (e) => onChangeAdmin() },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminItems, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            titleClassName: `${INPUT_WIDTH}`,
            ref: userRef,
            onChange: onChangeUser,
            callbacks: { onClick: (e) => e.stopPropagation(), onFocus: (e) => onChangeUser() },
            title: "العضو",
            placeholder: "ادخل اسم العضو... ",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserItems, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            titleClassName: `${INPUT_WIDTH}`,
            ref: bookRef,
            callbacks: { onClick: (e) => e.stopPropagation(), onFocus: (e) => onChangeBook() },
            onChange: onChangeBook,
            title: "العنوان",
            placeholder: "ادخل العنوان... ",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookItems, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "popup-input relative flex  gap-2 text-lg m-4 pl-1 bg-white rounded shadow overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${INPUT_WIDTH}`, children: "تاريخ الارجاع" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex item-center p-2 w-full", children: [
                dateOption == "manual" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateInput, { ref: dateRef }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: dateInput.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-end flex-1 mx-2 justify-self-end", children: dateInput.date.split(" ")[0] })
                ] }),
                dateRec ? /* @__PURE__ */ jsxRuntimeExports.jsx(DateSelector, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center pl-2 cursor-pointer", onClick: (e) => setDateRec(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-6", src: moreIMG, alt: "moreIMG" }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: onBooking,
          className: "cursor-pointer interactive-button add-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حجز" })
          ]
        }
      )
    ] })
  ] });
}
const profile = "data:image/svg+xml,%3c?xml%20version='1.0'%20?%3e%3csvg%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle/%3e%3cg%20id='about'%3e%3cpath%20d='M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z'/%3e%3cpath%20d='M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z'/%3e%3c/g%3e%3c/svg%3e";
const INPUT_TITLE_WIDTH = "w-48";
function AddAdminPopup() {
  function onAddAdmin() {
    const fNameValid = fNameRef.current?.checkInput({
      func: validate_inputNotEmpty,
      msg: ""
    });
    const lNameValid = lNameRef.current?.checkInput({
      func: validate_inputNotEmpty,
      msg: ""
    });
    if (!(fNameValid && lNameValid)) {
      return;
    }
    AdminAction.add(
      fNameRef.current.getInput(),
      lNameRef.current.getInput(),
      mainImg
    );
    fNameRef.current.setInput("");
    lNameRef.current.setInput("");
    setMainImg([]);
    hidePopup();
  }
  function onSaveAdmin() {
    const fNameValid = fNameRef.current?.checkInput({
      func: validate_inputNotEmpty,
      msg: ""
    });
    const lNameValid = lNameRef.current?.checkInput({
      func: validate_inputNotEmpty,
      msg: ""
    });
    if (!(fNameValid && lNameValid)) {
      return;
    }
    const admin = AdminsState.admins[popupState.editedAdminIdx];
    const updatedImg = mainImg.length > 0 ? mainImg : admin.img;
    AdminAction.update(
      admin.id,
      admin.imgsUUID,
      fNameRef.current.getInput(),
      lNameRef.current.getInput(),
      updatedImg
      // Updated image passed here
    );
    hidePopup();
  }
  function onDeleteAdmin() {
    if (adminBooks.length == 0) {
      AdminAction.removeCurr();
      popupState.popupVis = false;
    } else {
      y$2.dismiss();
      y$2.error("لا يمكن حدف المسئول,لانه توجد كتب باسمه", {
        position: "bottom-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: void 0,
        transition: uo
      });
    }
  }
  function showBookPopup(book) {
    toggleEditBookID(book.id);
  }
  async function onInitAdmin() {
    if (popupState.popupType == "edit-admin") {
      let admin = AdminsState.admins[popupState.editedAdminIdx];
      fNameRef.current.setInput(admin.first_name);
      lNameRef.current.setInput(admin.last_name);
      let admin_books = await BookingAction.queryAdmin(admin.id);
      setAdminBooks(admin_books);
      if (mainImg.length == 0) {
        let admin2 = AdminsState.admins[popupState.editedAdminIdx];
        setMainImg([admin2.img]);
      }
    }
  }
  reactExports.useEffect(() => {
    onInitAdmin();
  }, []);
  async function onUploadImg() {
    const imgBase64 = await window.utils.open();
    setMainImg(imgBase64);
    return imgBase64;
  }
  const fNameRef = reactExports.useRef(null);
  const lNameRef = reactExports.useRef(null);
  const [adminBooks, setAdminBooks] = reactExports.useState([]);
  const [mainImg, setMainImg] = reactExports.useState([]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "filter-popup rounded shadow w-2/4",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BgPattern, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "  w-full flex z-10  flex-col gap-2 px-6 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-end mb-6 cursor-pointer  w-fit h-fit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: closeIMG,
              alt: "closeIMG",
              width: 16,
              onClick: () => hidePopup()
            }
          ) }),
          popupState.popupType == "edit-admin" ? /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "تعديل معلومات المسؤول" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "اضافة مسؤول جديد" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              onClick: async () => setMainImg(await onUploadImg()),
              className: `img-frame flex items-center justify-center  
        w-28 h-28 bg-white self-center rounded-full overflow-hidden border-4
        ${popupState.popupType || mainImg == "edit-admin" ? "" : "cursor-pointer bg-zinc-200"}`,
              children: mainImg.length !== 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "object-fill", src: mainImg, alt: "img" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "self-center",
                    src: profile,
                    width: 50,
                    alt: "img"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "اضف صورة" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                titleClassName: INPUT_TITLE_WIDTH,
                ref: fNameRef,
                title: "الاسم",
                placeholder: "ادخل الاسم... "
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                titleClassName: INPUT_TITLE_WIDTH,
                ref: lNameRef,
                title: "اللقب",
                placeholder: "ادخل اللقب... "
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "m-4 flex flex-col gap-4 max-h-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "الكتب المحجوزة من طرف المسئول" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-4 overflow-y-scroll p-2 flex flex-col", children: adminBooks.map((book, idx) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  onClick: () => showBookPopup(book),
                  className: `cursor-pointer hover:bg-gray-50 bg-white rounded`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "py-2", children: book.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "bg-gray-200" })
                  ]
                },
                book.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ActionButtons,
            {
              onAddAdmin,
              onDeleteAdmin,
              onSaveAdmin
            }
          )
        ] })
      ]
    }
  );
}
function ActionButtons({
  onAddAdmin,
  onDeleteAdmin,
  onSaveAdmin
}) {
  if (popupState.popupType == "add-admin") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onAddAdmin,
        className: "interactive-button flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: addIMG,
              height: 16,
              width: 16,
              alt: "addIMG",
              className: "self-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "اضافة" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex gap-2 self-end", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onDeleteAdmin,
        className: "delete-book flex gap-2  self-end  rounded py-1 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: addIMG,
              height: 16,
              width: 16,
              alt: "addIMG",
              className: "self-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حدف" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: onSaveAdmin,
        className: "interactive-button flex gap-2  self-end  rounded py-1 bg-red-300 px-4 text-white text-lg shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: addIMG,
              height: 16,
              width: 16,
              alt: "addIMG",
              className: "self-center"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "حفظ" })
        ]
      }
    )
  ] });
}
function PopUp() {
  useSnapshot(popupState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "popup", onClick: () => popupState.popupVis = false, style: { pointerEvents: !popupState.popupVis ? "none" : "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { cond: !popupState.popupVis, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "popup-container", children: (() => {
    switch (popupState.popupType) {
      case "add-book":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddBookPopup, {});
      case "edit-book":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddBookPopup, {});
      case "add-user":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddUserPopup, {});
      case "edit-user":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddUserPopup, {});
      case "add-admin":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddAdminPopup, {});
      case "edit-admin":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AddAdminPopup, {});
      case "book-book":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(BookBookPopup, {});
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  })() }) }) });
}
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
dist.parse = parse$1;
dist.serialize = serialize$1;
const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (() => {
  const C2 = function() {
  };
  C2.prototype = /* @__PURE__ */ Object.create(null);
  return C2;
})();
function parse$1(str, options) {
  const obj = new NullObject();
  const len = str.length;
  if (len < 2)
    return obj;
  const dec = options?.decode || decode;
  let index = 0;
  do {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1)
      break;
    const colonIdx = str.indexOf(";", index);
    const endIdx = colonIdx === -1 ? len : colonIdx;
    if (eqIdx > endIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const keyStartIdx = startIndex(str, index, eqIdx);
    const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
    const key = str.slice(keyStartIdx, keyEndIdx);
    if (obj[key] === void 0) {
      let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
      let valEndIdx = endIndex(str, endIdx, valStartIdx);
      const value = dec(str.slice(valStartIdx, valEndIdx));
      obj[key] = value;
    }
    index = endIdx + 1;
  } while (index < len);
  return obj;
}
function startIndex(str, index, max) {
  do {
    const code = str.charCodeAt(index);
    if (code !== 32 && code !== 9)
      return index;
  } while (++index < max);
  return max;
}
function endIndex(str, index, min) {
  while (index > min) {
    const code = str.charCodeAt(--index);
    if (code !== 32 && code !== 9)
      return index + 1;
  }
  return min;
}
function serialize$1(name, val, options) {
  const enc = options?.encode || encodeURIComponent;
  if (!cookieNameRegExp.test(name)) {
    throw new TypeError(`argument name is invalid: ${name}`);
  }
  const value = enc(val);
  if (!cookieValueRegExp.test(value)) {
    throw new TypeError(`argument val is invalid: ${val}`);
  }
  let str = name + "=" + value;
  if (!options)
    return str;
  if (options.maxAge !== void 0) {
    if (!Number.isInteger(options.maxAge)) {
      throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
    }
    str += "; Max-Age=" + options.maxAge;
  }
  if (options.domain) {
    if (!domainValueRegExp.test(options.domain)) {
      throw new TypeError(`option domain is invalid: ${options.domain}`);
    }
    str += "; Domain=" + options.domain;
  }
  if (options.path) {
    if (!pathValueRegExp.test(options.path)) {
      throw new TypeError(`option path is invalid: ${options.path}`);
    }
    str += "; Path=" + options.path;
  }
  if (options.expires) {
    if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
      throw new TypeError(`option expires is invalid: ${options.expires}`);
    }
    str += "; Expires=" + options.expires.toUTCString();
  }
  if (options.httpOnly) {
    str += "; HttpOnly";
  }
  if (options.secure) {
    str += "; Secure";
  }
  if (options.partitioned) {
    str += "; Partitioned";
  }
  if (options.priority) {
    const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError(`option priority is invalid: ${options.priority}`);
    }
  }
  if (options.sameSite) {
    const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
    switch (sameSite) {
      case true:
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
    }
  }
  return str;
}
function decode(str) {
  if (str.indexOf("%") === -1)
    return str;
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}
function isDate(val) {
  return __toString.call(val) === "[object Date]";
}
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var PopStateEventType = "popstate";
function createHashHistory(options = {}) {
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash: hash2 = ""
    } = parsePath(window2.location.hash.substring(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      { pathname, search, hash: hash2 },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        to
      )})`
    );
  }
  return getUrlBasedHistory(
    createHashLocation,
    createHashHref,
    validateHashLocation,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state = null, key) {
  let location = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location;
}
function createPath({
  pathname = "/",
  search = "",
  hash: hash2 = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash2 && hash2 !== "#")
    pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP";
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP";
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH";
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE";
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href}`
    );
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i2],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b2.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match2 = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match2 && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match2 = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match2) {
      return null;
    }
    Object.assign(matchedParams, match2.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match2.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match2.pathnameBase])
      ),
      route
    });
    if (match2.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match2 = pathname.match(matcher);
  if (!match2) return null;
  let matchedPathname = match2[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match2.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_2, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  );
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex2 = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex2);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex2) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash: hash2 = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash2)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char2, field, dest, path) {
  return `Cannot include a '${char2}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match2, index) => index === 0 || match2.route.path && match2.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match2, idx) => idx === pathMatches.length - 1 ? match2.pathname : match2.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from2);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
new Set(validRequestMethodsArr);
var DataRouterContext = reactExports.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = reactExports.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var ViewTransitionContext = reactExports.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = reactExports.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = reactExports.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = reactExports.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = reactExports.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = reactExports.createContext(null);
RouteErrorContext.displayName = "RouteError";
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { hash: hash2, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash: hash2 });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return reactExports.useContext(LocationContext).location;
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let { isDataRoute } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
var OutletContext = reactExports.createContext(null);
function useOutlet(context) {
  let outlet = reactExports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ reactExports.createElement(OutletContext.Provider, { value: context }, outlet);
  }
  return outlet;
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = reactExports.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return reactExports.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2, static: isStatic } = reactExports.useContext(NavigationContext);
  let { matches: parentMatches } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = !isStatic && dataRouterState && dataRouterState.matches && dataRouterState.matches.length > 0 ? dataRouterState.matches : matchRoutes(routes, { pathname: remainingPathname });
  {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match2) => Object.assign({}, match2, {
        params: Object.assign({}, parentParams, match2.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathname).pathname : match2.pathname
        ]),
        pathnameBase: match2.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathnameBase).pathname : match2.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP"
          /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "React Router caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ reactExports.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match: match2, children }) {
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match2.route.errorElement || match2.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match2.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m2) => m2.route.id && errors?.[m2.route.id] !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match2 = renderedMatches[i2];
      if (match2.route.HydrateFallback || match2.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match2.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match2.route.loader && !loaderData.hasOwnProperty(match2.route.id) && (!errors2 || errors2[match2.route.id] === void 0);
        if (match2.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match2, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match2.route.id ? errors[match2.route.id] : void 0;
      errorElement = match2.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            "route-fallback",
            false,
            "No `HydrateFallback` element provided to render during initial hydration"
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match2.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match2.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match2.route.Component, null);
      } else if (match2.route.element) {
        children = match2.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(
        RenderedRoute,
        {
          match: match2,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        }
      );
    };
    return dataRouterState && (match2.route.ErrorBoundary || match2.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(
      RenderErrorBoundary,
      {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }
    ) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId(
    "useRouteId"
    /* UseRouteId */
  );
}
function useRouteError() {
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(
    "useRouteError"
    /* UseRouteError */
  );
  let routeId = useCurrentRouteId(
    "useRouteError"
    /* UseRouteError */
  );
  if (error !== void 0) {
    return error;
  }
  return state.errors?.[routeId];
}
function useNavigateStable() {
  let { router } = useDataRouterContext(
    "useNavigate"
    /* UseNavigateStable */
  );
  let id2 = useCurrentRouteId(
    "useNavigate"
    /* UseNavigateStable */
  );
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id2, ...options });
      }
    },
    [router, id2]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}
reactExports.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP",
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash: hash2 = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash: hash2,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash2, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash2}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix2 = name ? `${name}.` : "";
        formData.append(`${prefix2}x`, "0");
        formData.append(`${prefix2}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    void 0) ;
    window.location.reload();
    return new Promise(() => {
    });
  }
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match2) => {
      let route = manifest.routes[match2.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match2, index) => {
    if (!currentMatches[index]) return true;
    return match2.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match2, index) => {
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match2.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match2.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match2, index) => isNew(match2, index) || matchPathChanged(match2, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match2, index) => {
      let manifestRoute = manifest.routes[match2.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match2, index) || matchPathChanged(match2, index)) {
        return true;
      }
      if (match2.route.shouldRevalidate) {
        let routeChoice = match2.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match2.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(
    matches.map((match2) => {
      let route = manifestPatch.routes[match2.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
function singleFetchUrl(reqUrl) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.data";
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
  }
  return url;
}
function useDataRouterContext2() {
  let context = reactExports.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = reactExports.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = reactExports.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = reactExports.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = reactExports.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  reactExports.useEffect(() => {
    if (maybePrefetch) {
      let id2 = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id2);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let { router } = useDataRouterContext2();
  let matches = reactExports.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
  reactExports.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = reactExports.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = reactExports.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m2) => {
      let manifestRoute = manifest.routes[m2.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && routeModules[m2.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m2.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page);
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = reactExports.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "prefetch", as: "fetch", href, ...linkProps })), moduleHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", { key: href, rel: "modulepreload", href, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ reactExports.createElement("link", { key, ...link })
  )));
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.1.5";
  }
} catch (e) {
}
function HashRouter({ basename, children, window: window2 }) {
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let setState = reactExports.useCallback(
    (newState) => {
      reactExports.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = reactExports.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = reactExports.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ reactExports.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, link, /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, { page: href })) : link;
  }
);
Link.displayName = "Link";
var NavLink = reactExports.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location = useLocation();
    let routerState = reactExports.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = reactExports.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ reactExports.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = reactExports.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = submitter?.getAttribute("formmethod") || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ reactExports.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return reactExports.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3(
    "useSubmit"
    /* UseSubmit */
  );
  let { basename } = reactExports.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return reactExports.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = reactExports.useContext(NavigationContext);
  let routeContext = reactExports.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match2] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match2.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = reactExports.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState"
    /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
new TextEncoder();
function ImgViewer() {
  useSnapshot(imgViewerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PageTransition,
    {
      cond: !imgViewerState.visible,
      className: `
                ${!imgViewerState.visible ? "pointer-events-none " : ""} 
                absolute z-30 top-0 left-0 w-full h-full
            `,
      onClick: () => imgViewer.hide(),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: "img-preview",
          className: " w-full h-full flex  w-full h-full items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              onClick: (e) => e.stopPropagation(),
              src: imgViewerState.img_base64,
              className: "max-h-1/2 rounded shadow-xl p-1 border bg-white",
              alt: "failed to load img"
            }
          )
        }
      )
    }
  );
}
function NavBar() {
  function to(path) {
    GState.tabIdx = path;
    switch (path) {
      case "books":
        navigator2("/");
        break;
      case "users":
        navigator2("users");
        break;
      case "admins":
        navigator2("admins");
        break;
    }
  }
  let navigator2 = useNavigate();
  useSnapshot(GState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "nav-bar", className: "flex gap-8 justify-self-start flex-1 self-center items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => to("admins"), className: `${GState.tabIdx == "admins" ? "nav-active" : ""} text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`, children: "المسؤولين" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => to("books"), className: `${GState.tabIdx == "books" ? "nav-active" : ""}      text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`, children: "الكتب" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { onClick: () => to("users"), className: `${GState.tabIdx == "users" ? "nav-active" : ""}      text-lg text-white cursor-pointer py-1 w-28 text-center rounded-2xl hover:font-bold`, children: "الاعضاء" })
  ] });
}
function loadAll() {
  BookAction.loadAll();
  UserAction.loadAll();
  AdminAction.loadAll();
  BookingAction.loadAll();
}
function App() {
  reactExports.useEffect(() => {
    loadAll();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "app", className: "w-full h-full flex flex-col gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lt,
      {
        position: "bottom-center",
        stacked: true
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImgViewer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopUp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BgPattern, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "z-10 my-6 mx-20 h-0 grow flex flex-col gap-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
  ] });
}
function TopBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "navbar w-full relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "z-0 absolute nav-bg w-full h-full opacity-10", style: { backgroundImage: `url(${nav_bg})` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "navbar-content flex items-center justify-between px-20 z-10 absolute w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 w-fit flex  justify-start gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: text_logo, alt: "text_logo", width: 300 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: async () => {
        showToast(y$2.loading, "جاري ملأ البيانات");
        window.db.db_fake.books_fillDB();
        window.db.db_fake.users_fillDB();
        showToast(y$2.success, "تم ملأ البيانات");
        loadAll();
      }, className: "p-2 hover:bg-gray-200 bg-white rounded-lg font-bold cursor-pointer", children: "املاء بمعلومات تجريبية" }) })
    ] })
  ] });
}
const searchIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHXSURBVHgB3VXLccJADJWN4UwqiNNB6MBUAB2AL3yGQ6ACnArChWH4zBg6gApCKojTgUvgzDdPjpwB43XsTHJI3syyiy3pSVpJJvrr0JJejkYjS9O0GpaFv2agoGne8Xj0sK+azeaSvkMAw2Yul3NPp5NFyfBBVm63275KQI8+GA6H97quv4rxDZYDMhPearz2+30JRm02zlGxLOtQmgjYc1bAsYgUzPP5fM+27U2couu6xe1228exy46AtBQXiXERjq4/s3GsQaPR6FEChLg3Ho9vsNc4pdjLUbnPFEGwSh8X6RcKhUdKCcgGEXBKuSiUBEhJRY6OKi1xENmB2KgpCYDgonCJb5QRyP9CCCwlAUIMCDqdjkcZcXa5ppLgt3BO4PPPbDa7pYyYTCZhH3hKAqRozfvhcKhTRkDnXmwkEizk2OUmopRgWfRPX/4ulQS4qDWqYI1jcbfbPVFKQNYh6Z9Wq7WKvr/oZIRqyxyqo/E23HBfjIoBZIPal/l0hatpyoPLMIxwZPhYDvdGWL4yr+o4PohMiNjJqhzXMpdMSgAXBuQc7HORvSJJ/OBMp9MKlKvShGEp+mJ4joH4EuPQBUkiQRZESfDtuOPnP9bJ7DF7TtKw/wfvycPvadxJWsUAAAAASUVORK5CYII=";
const filterIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAbCAYAAAB4Kn/lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFLSURBVHgB7ZW7TkJBEIYnClEKjCTamBiNjb6CjXbaGG0sLEx8LTt5BB/AysLGhBoCCVTcAoRbuIXbP9khHDbDOYdbaPiTL+fk391hZ87sQrTTNhQEJ4ofFnz5e8rER/Cm+C+CrQ9wZ5sBZSJ7+3P8keLz3KBtajtei7Ye+BpEwBm49LPAT+AjMh+tDirgHYTWETgsgWLgn8zHingtsrviikza/IP34BfkhGeZw+95WmDH3DKvoArSZHrzHAxBFBSFqHi+A4ckeIJMyjw2OVE90AYtefeUsxRNkCRTAlYNpDzW34Jj2cQNiGs75vS+ZbADPkHXJegFeCCTXRk8kaNb7K7oSbCO4KZDeWZBCRyQowIBWl4ZUKDpxfQHGpPBVY40Z/ZF5uBw+X6cg6veFRx8KM+Zm08rRV/QfE0Dl7EZLfRPAZ2Sch/vtHmNAevRPjEhQQJtAAAAAElFTkSuQmCC";
const SearchBar = reactExports.forwardRef(function({ placeholder, showFilter, onEnter }, ref) {
  useSnapshot(GState.filterState);
  function onShowFilter() {
    GState.filterState.visible = !GState.filterState.visible;
  }
  placeholder = placeholder ?? "";
  showFilter = showFilter ?? true;
  reactExports.useImperativeHandle(ref, () => {
    return {
      getInput: () => {
        return localRef.current?.querySelector("input")?.value;
      }
    };
  });
  const localRef = reactExports.useRef(null);
  onEnter = onEnter ?? function() {
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: localRef, className: "search-bar-container flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-bar bg-white rounded flex gap-4  shadow h-full w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "self-center icon-r px-4 h-full flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: searchIMG, alt: "searchIMG", className: "self-center" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { onKeyDown: (e) => e.key == "Enter" ? onEnter() : "", type: "text", className: " w-full text-2sm", placeholder }),
    showFilter ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `self-center hoverable cursor-pointer icon-l px-4 h-full flex ${GState.filterState.visible ? "filter-visible" : ""}`, onClick: onShowFilter, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: filterIMG, alt: "filterIMG", className: "self-center" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
  ] }) });
});
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i2);
      ar[i2] = from2[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2, siblings) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root2, props) {
  return assign(node("", null, null, "", null, null, 0, root2.siblings), root2, { length: -root2.length }, props);
}
function lift(root2) {
  while (root2.root)
    root2 = copy(root2.root, { children: [root2] });
  append(root2, root2.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root2, parent, siblings) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root2, parent, length2, siblings) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 4789:
      return MOZ + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a, b2, c2, d2, e, f2) {
        return MS + a + ":" + b2 + f2 + (c2 ? MS + a + "-span:" + (d2 ? e : +e - +b2) + f2 : "") + value;
      });
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var define_process_env_default = {};
var f$1 = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", m$1 = "active", y$1 = "data-styled-version", v$1 = "6.1.14", g$1 = "/*!sc*/\n", S$1 = "undefined" != typeof window && "HTMLElement" in window, w$1 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false), _$1 = Object.freeze([]), C$1 = Object.freeze({});
function I$1(e2, t2, n2) {
  return void 0 === n2 && (n2 = C$1), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}
var A$1 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), O$1 = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D$1 = /(^-|-$)/g;
function R$1(e2) {
  return e2.replace(O$1, "-").replace(D$1, "");
}
var T$1 = /(a)(d)/gi, k$1 = 52, j$1 = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function x$1(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > k$1; t2 = t2 / k$1 | 0) n2 = j$1(t2 % k$1) + n2;
  return (j$1(t2 % k$1) + n2).replace(T$1, "$1-$2");
}
var V$1, F$1 = 5381, M$1 = function(e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, z$1 = function(e2) {
  return M$1(F$1, e2);
};
function $$1(e2) {
  return x$1(z$1(e2) >>> 0);
}
function B$1(e2) {
  return e2.displayName || e2.name || "Component";
}
function L$1(e2) {
  return "string" == typeof e2 && true;
}
var G$1 = "function" == typeof Symbol && Symbol.for, Y$1 = G$1 ? Symbol.for("react.memo") : 60115, W$1 = G$1 ? Symbol.for("react.forward_ref") : 60112, q$1 = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, H$1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, U$1 = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, J$1 = ((V$1 = {})[W$1] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V$1[Y$1] = U$1, V$1);
function X$1(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === Y$1 ? U$1 : "$$typeof" in e2 ? J$1[e2.$$typeof] : q$1;
  var t2;
}
var Z$1 = Object.defineProperty, K$1 = Object.getOwnPropertyNames, Q$1 = Object.getOwnPropertySymbols, ee$1 = Object.getOwnPropertyDescriptor, te$1 = Object.getPrototypeOf, ne$1 = Object.prototype;
function oe$1(e2, t2, n2) {
  if ("string" != typeof t2) {
    if (ne$1) {
      var o2 = te$1(t2);
      o2 && o2 !== ne$1 && oe$1(e2, o2, n2);
    }
    var r2 = K$1(t2);
    Q$1 && (r2 = r2.concat(Q$1(t2)));
    for (var s2 = X$1(e2), i2 = X$1(t2), a2 = 0; a2 < r2.length; ++a2) {
      var c2 = r2[a2];
      if (!(c2 in H$1 || n2 && n2[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
        var l2 = ee$1(t2, c2);
        try {
          Z$1(e2, c2, l2);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re$1(e2) {
  return "function" == typeof e2;
}
function se$1(e2) {
  return "object" == typeof e2 && "styledComponentId" in e2;
}
function ie$1(e2, t2) {
  return e2 && t2 ? "".concat(e2, " ").concat(t2) : e2 || t2 || "";
}
function ae$1(e2, t2) {
  if (0 === e2.length) return "";
  for (var n2 = e2[0], o2 = 1; o2 < e2.length; o2++) n2 += e2[o2];
  return n2;
}
function ce$1(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function le$1(e2, t2, n2) {
  if (void 0 === n2 && (n2 = false), !n2 && !ce$1(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (var o2 = 0; o2 < t2.length; o2++) e2[o2] = le$1(e2[o2], t2[o2]);
  else if (ce$1(t2)) for (var o2 in t2) e2[o2] = le$1(e2[o2], t2[o2]);
  return e2;
}
function ue$1(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
function he$1(t2) {
  for (var n2 = [], o2 = 1; o2 < arguments.length; o2++) n2[o2 - 1] = arguments[o2];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t2, " for more information.").concat(n2.length > 0 ? " Args: ".concat(n2.join(", ")) : ""));
}
var fe$1 = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  return e2.prototype.indexOfGroup = function(e3) {
    for (var t2 = 0, n2 = 0; n2 < e3; n2++) t2 += this.groupSizes[n2];
    return t2;
  }, e2.prototype.insertRules = function(e3, t2) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, o2 = n2.length, r2 = o2; e3 >= r2; ) if ((r2 <<= 1) < 0) throw he$1(16, "".concat(e3));
      this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n2), this.length = r2;
      for (var s2 = o2; s2 < r2; s2++) this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = (s2 = 0, t2.length); s2 < a2; s2++) this.tag.insertRule(i2, t2[s2]) && (this.groupSizes[e3]++, i2++);
  }, e2.prototype.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t2 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), o2 = n2 + t2;
      this.groupSizes[e3] = 0;
      for (var r2 = n2; r2 < o2; r2++) this.tag.deleteRule(n2);
    }
  }, e2.prototype.getGroup = function(e3) {
    var t2 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3]) return t2;
    for (var n2 = this.groupSizes[e3], o2 = this.indexOfGroup(e3), r2 = o2 + n2, s2 = o2; s2 < r2; s2++) t2 += "".concat(this.tag.getRule(s2)).concat(g$1);
    return t2;
  }, e2;
}(), ye$1 = /* @__PURE__ */ new Map(), ve$1 = /* @__PURE__ */ new Map(), ge$1 = 1, Se$1 = function(e2) {
  if (ye$1.has(e2)) return ye$1.get(e2);
  for (; ve$1.has(ge$1); ) ge$1++;
  var t2 = ge$1++;
  return ye$1.set(e2, t2), ve$1.set(t2, e2), t2;
}, we$1 = function(e2, t2) {
  ge$1 = t2 + 1, ye$1.set(e2, t2), ve$1.set(t2, e2);
}, be$1 = "style[".concat(f$1, "][").concat(y$1, '="').concat(v$1, '"]'), Ee$1 = new RegExp("^".concat(f$1, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ne$1 = function(e2, t2, n2) {
  for (var o2, r2 = n2.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++) (o2 = r2[s2]) && e2.registerName(t2, o2);
}, Pe$1 = function(e2, t2) {
  for (var n2, o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(g$1), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
    var a2 = o2[s2].trim();
    if (a2) {
      var c2 = a2.match(Ee$1);
      if (c2) {
        var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
        0 !== l2 && (we$1(u2, l2), Ne$1(e2, u2, c2[3]), e2.getTag().insertRules(l2, r2)), r2.length = 0;
      } else r2.push(a2);
    }
  }
}, _e$1 = function(e2) {
  for (var t2 = document.querySelectorAll(be$1), n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    var r2 = t2[n2];
    r2 && r2.getAttribute(f$1) !== m$1 && (Pe$1(e2, r2), r2.parentNode && r2.parentNode.removeChild(r2));
  }
};
function Ce$1() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie$1 = function(e2) {
  var t2 = document.head, n2 = e2 || t2, o2 = document.createElement("style"), r2 = function(e3) {
    var t3 = Array.from(e3.querySelectorAll("style[".concat(f$1, "]")));
    return t3[t3.length - 1];
  }(n2), s2 = void 0 !== r2 ? r2.nextSibling : null;
  o2.setAttribute(f$1, m$1), o2.setAttribute(y$1, v$1);
  var i2 = Ce$1();
  return i2 && o2.setAttribute("nonce", i2), n2.insertBefore(o2, s2), o2;
}, Ae$1 = function() {
  function e2(e3) {
    this.element = Ie$1(e3), this.element.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet) return e4.sheet;
      for (var t2 = document.styleSheets, n2 = 0, o2 = t2.length; n2 < o2; n2++) {
        var r2 = t2[n2];
        if (r2.ownerNode === e4) return r2;
      }
      throw he$1(17);
    }(this.element), this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    try {
      return this.sheet.insertRule(t2, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, e2.prototype.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, e2.prototype.getRule = function(e3) {
    var t2 = this.sheet.cssRules[e3];
    return t2 && t2.cssText ? t2.cssText : "";
  }, e2;
}(), Oe$1 = function() {
  function e2(e3) {
    this.element = Ie$1(e3), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e3] || null), this.length++, true;
    }
    return false;
  }, e2.prototype.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), De$1 = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  return e2.prototype.insertRule = function(e3, t2) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t2), this.length++, true);
  }, e2.prototype.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, e2.prototype.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), Re$1 = S$1, Te$1 = { isServer: !S$1, useCSSOMInjection: !w$1 }, ke$1 = function() {
  function e2(e3, n2, o2) {
    void 0 === e3 && (e3 = C$1), void 0 === n2 && (n2 = {});
    var r2 = this;
    this.options = __assign(__assign({}, Te$1), e3), this.gs = n2, this.names = new Map(o2), this.server = !!e3.isServer, !this.server && S$1 && Re$1 && (Re$1 = false, _e$1(this)), ue$1(this, function() {
      return function(e4) {
        for (var t2 = e4.getTag(), n3 = t2.length, o3 = "", r3 = function(n4) {
          var r4 = function(e5) {
            return ve$1.get(e5);
          }(n4);
          if (void 0 === r4) return "continue";
          var s3 = e4.names.get(r4), i2 = t2.getGroup(n4);
          if (void 0 === s3 || !s3.size || 0 === i2.length) return "continue";
          var a2 = "".concat(f$1, ".g").concat(n4, '[id="').concat(r4, '"]'), c2 = "";
          void 0 !== s3 && s3.forEach(function(e5) {
            e5.length > 0 && (c2 += "".concat(e5, ","));
          }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g$1);
        }, s2 = 0; s2 < n3; s2++) r3(s2);
        return o3;
      }(r2);
    });
  }
  return e2.registerId = function(e3) {
    return Se$1(e3);
  }, e2.prototype.rehydrate = function() {
    !this.server && S$1 && _e$1(this);
  }, e2.prototype.reconstructWithOptions = function(n2, o2) {
    return void 0 === o2 && (o2 = true), new e2(__assign(__assign({}, this.options), n2), this.gs, o2 && this.names || void 0);
  }, e2.prototype.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, e2.prototype.getTag = function() {
    return this.tag || (this.tag = (e3 = function(e4) {
      var t2 = e4.useCSSOMInjection, n2 = e4.target;
      return e4.isServer ? new De$1(n2) : t2 ? new Ae$1(n2) : new Oe$1(n2);
    }(this.options), new fe$1(e3)));
    var e3;
  }, e2.prototype.hasNameForId = function(e3, t2) {
    return this.names.has(e3) && this.names.get(e3).has(t2);
  }, e2.prototype.registerName = function(e3, t2) {
    if (Se$1(e3), this.names.has(e3)) this.names.get(e3).add(t2);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t2), this.names.set(e3, n2);
    }
  }, e2.prototype.insertRules = function(e3, t2, n2) {
    this.registerName(e3, t2), this.getTag().insertRules(Se$1(e3), n2);
  }, e2.prototype.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, e2.prototype.clearRules = function(e3) {
    this.getTag().clearGroup(Se$1(e3)), this.clearNames(e3);
  }, e2.prototype.clearTag = function() {
    this.tag = void 0;
  }, e2;
}(), je$1 = /&/g, xe$1 = /^\s*\/\/.*$/gm;
function Ve$1(e2, t2) {
  return e2.map(function(e3) {
    return "rule" === e3.type && (e3.value = "".concat(t2, " ").concat(e3.value), e3.value = e3.value.replaceAll(",", ",".concat(t2, " ")), e3.props = e3.props.map(function(e4) {
      return "".concat(t2, " ").concat(e4);
    })), Array.isArray(e3.children) && "@keyframes" !== e3.type && (e3.children = Ve$1(e3.children, t2)), e3;
  });
}
function Fe$1(e2) {
  var t2, n2, o2, r2 = C$1, s2 = r2.options, i2 = void 0 === s2 ? C$1 : s2, a2 = r2.plugins, c2 = void 0 === a2 ? _$1 : a2, l2 = function(e3, o3, r3) {
    return r3.startsWith(n2) && r3.endsWith(n2) && r3.replaceAll(n2, "").length > 0 ? ".".concat(t2) : e3;
  }, u2 = c2.slice();
  u2.push(function(e3) {
    e3.type === RULESET && e3.value.includes("&") && (e3.props[0] = e3.props[0].replace(je$1, n2).replace(o2, l2));
  }), i2.prefix && u2.push(prefixer), u2.push(stringify);
  var p2 = function(e3, r3, s3, a3) {
    void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t2 = a3, n2 = r3, o2 = new RegExp("\\".concat(n2, "\\b"), "g");
    var c3 = e3.replace(xe$1, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
    i2.namespace && (l3 = Ve$1(l3, i2.namespace));
    var p3 = [];
    return serialize(l3, middleware(u2.concat(rulesheet(function(e4) {
      return p3.push(e4);
    })))), p3;
  };
  return p2.hash = c2.length ? c2.reduce(function(e3, t3) {
    return t3.name || he$1(15), M$1(e3, t3.name);
  }, F$1).toString() : "", p2;
}
var Me$1 = new ke$1(), ze$1 = Fe$1(), $e$1 = t.createContext({ shouldForwardProp: void 0, styleSheet: Me$1, stylis: ze$1 });
$e$1.Consumer;
t.createContext(void 0);
function Ge$1() {
  return reactExports.useContext($e$1);
}
var We$1 = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = ze$1);
      var o2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, o2) || e4.insertRules(n2.id, o2, t3(n2.rules, o2, "@keyframes"));
    }, this.name = e3, this.id = "sc-keyframes-".concat(e3), this.rules = t2, ue$1(this, function() {
      throw he$1(12, String(n2.name));
    });
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = ze$1), this.name + e3.hash;
  }, e2;
}(), qe$1 = function(e2) {
  return e2 >= "A" && e2 <= "Z";
};
function He$1(e2) {
  for (var t2 = "", n2 = 0; n2 < e2.length; n2++) {
    var o2 = e2[n2];
    if (1 === n2 && "-" === o2 && "-" === e2[0]) return e2;
    qe$1(o2) ? t2 += "-" + o2.toLowerCase() : t2 += o2;
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
var Ue$1 = function(e2) {
  return null == e2 || false === e2 || "" === e2;
}, Je = function(t2) {
  var n2, o2, r2 = [];
  for (var s2 in t2) {
    var i2 = t2[s2];
    t2.hasOwnProperty(s2) && !Ue$1(i2) && (Array.isArray(i2) && i2.isCss || re$1(i2) ? r2.push("".concat(He$1(s2), ":"), i2, ";") : ce$1(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], Je(i2), false), ["}"], false)) : r2.push("".concat(He$1(s2), ": ").concat((n2 = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n2 in unitlessKeys || n2.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
  }
  return r2;
};
function Xe$1(e2, t2, n2, o2) {
  if (Ue$1(e2)) return [];
  if (se$1(e2)) return [".".concat(e2.styledComponentId)];
  if (re$1(e2)) {
    if (!re$1(s2 = e2) || s2.prototype && s2.prototype.isReactComponent || !t2) return [e2];
    var r2 = e2(t2);
    return Xe$1(r2, t2, n2, o2);
  }
  var s2;
  return e2 instanceof We$1 ? n2 ? (e2.inject(n2, o2), [e2.getName(o2)]) : [e2] : ce$1(e2) ? Je(e2) : Array.isArray(e2) ? Array.prototype.concat.apply(_$1, e2.map(function(e3) {
    return Xe$1(e3, t2, n2, o2);
  })) : [e2.toString()];
}
function Ze(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (re$1(n2) && !se$1(n2)) return false;
  }
  return true;
}
var Ke$1 = z$1(v$1), Qe$1 = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && Ze(e3), this.componentId = t2, this.baseHash = M$1(Ke$1, t2), this.baseStyle = n2, ke$1.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e3, t2, n2) : "";
    if (this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(this.componentId, this.staticRulesId)) o2 = ie$1(o2, this.staticRulesId);
    else {
      var r2 = ae$1(Xe$1(this.rules, e3, t2, n2)), s2 = x$1(M$1(this.baseHash, r2) >>> 0);
      if (!t2.hasNameForId(this.componentId, s2)) {
        var i2 = n2(r2, ".".concat(s2), void 0, this.componentId);
        t2.insertRules(this.componentId, s2, i2);
      }
      o2 = ie$1(o2, s2), this.staticRulesId = s2;
    }
    else {
      for (var a2 = M$1(this.baseHash, n2.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
        var u2 = this.rules[l2];
        if ("string" == typeof u2) c2 += u2;
        else if (u2) {
          var p2 = ae$1(Xe$1(u2, e3, t2, n2));
          a2 = M$1(a2, p2 + l2), c2 += p2;
        }
      }
      if (c2) {
        var d2 = x$1(a2 >>> 0);
        t2.hasNameForId(this.componentId, d2) || t2.insertRules(this.componentId, d2, n2(c2, ".".concat(d2), void 0, this.componentId)), o2 = ie$1(o2, d2);
      }
    }
    return o2;
  }, e2;
}(), et = t.createContext(void 0);
et.Consumer;
function ot(e2) {
  var n2 = t.useContext(et), r2 = reactExports.useMemo(function() {
    return function(e3, n3) {
      if (!e3) throw he$1(14);
      if (re$1(e3)) {
        var o2 = e3(n3);
        return o2;
      }
      if (Array.isArray(e3) || "object" != typeof e3) throw he$1(8);
      return n3 ? __assign(__assign({}, n3), e3) : e3;
    }(e2.theme, n2);
  }, [e2.theme, n2]);
  return e2.children ? t.createElement(et.Provider, { value: r2 }, e2.children) : null;
}
var rt = {};
function it(e2, r2, s2) {
  var i2 = se$1(e2), a2 = e2, c2 = !L$1(e2), p2 = r2.attrs, d2 = void 0 === p2 ? _$1 : p2, h2 = r2.componentId, f2 = void 0 === h2 ? function(e3, t2) {
    var n2 = "string" != typeof e3 ? "sc" : R$1(e3);
    rt[n2] = (rt[n2] || 0) + 1;
    var o2 = "".concat(n2, "-").concat($$1(v$1 + n2 + rt[n2]));
    return t2 ? "".concat(t2, "-").concat(o2) : o2;
  }(r2.displayName, r2.parentComponentId) : h2, m2 = r2.displayName, y2 = void 0 === m2 ? function(e3) {
    return L$1(e3) ? "styled.".concat(e3) : "Styled(".concat(B$1(e3), ")");
  }(e2) : m2, g2 = r2.displayName && r2.componentId ? "".concat(R$1(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d2).filter(Boolean) : d2, w2 = r2.shouldForwardProp;
  if (i2 && a2.shouldForwardProp) {
    var b2 = a2.shouldForwardProp;
    if (r2.shouldForwardProp) {
      var E2 = r2.shouldForwardProp;
      w2 = function(e3, t2) {
        return b2(e3, t2) && E2(e3, t2);
      };
    } else w2 = b2;
  }
  var N2 = new Qe$1(s2, g2, i2 ? a2.componentStyle : void 0);
  function O2(e3, r3) {
    return function(e4, r4, s3) {
      var i3 = e4.attrs, a3 = e4.componentStyle, c3 = e4.defaultProps, p3 = e4.foldedComponentIds, d3 = e4.styledComponentId, h3 = e4.target, f3 = t.useContext(et), m3 = Ge$1(), y3 = e4.shouldForwardProp || m3.shouldForwardProp;
      var v2 = I$1(r4, f3, c3) || C$1, g3 = function(e5, n2, o2) {
        for (var r5, s4 = __assign(__assign({}, n2), { className: void 0, theme: o2 }), i4 = 0; i4 < e5.length; i4 += 1) {
          var a4 = re$1(r5 = e5[i4]) ? r5(s4) : r5;
          for (var c4 in a4) s4[c4] = "className" === c4 ? ie$1(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
        }
        return n2.className && (s4.className = ie$1(s4.className, n2.className)), s4;
      }(i3, r4, v2), S3 = g3.as || h3, w3 = {};
      for (var b3 in g3) void 0 === g3[b3] || "$" === b3[0] || "as" === b3 || "theme" === b3 && g3.theme === v2 || ("forwardedAs" === b3 ? w3.as = g3.forwardedAs : y3 && !y3(b3, S3) || (w3[b3] = g3[b3], y3 || true));
      var E3 = function(e5, t2) {
        var n2 = Ge$1(), o2 = e5.generateAndInjectStyles(t2, n2.styleSheet, n2.stylis);
        return o2;
      }(a3, g3);
      var N3 = ie$1(p3, d3);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L$1(S3) && !A$1.has(S3) ? "class" : "className"] = N3, s3 && (w3.ref = s3), reactExports.createElement(S3, w3);
    }(D2, e3, r3);
  }
  O2.displayName = y2;
  var D2 = t.forwardRef(O2);
  return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i2 ? ie$1(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e2, Object.defineProperty(D2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e3) {
    this._foldedDefaultProps = i2 ? function(e4) {
      for (var t2 = [], n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
      for (var o2 = 0, r3 = t2; o2 < r3.length; o2++) le$1(e4, r3[o2], true);
      return e4;
    }({}, a2.defaultProps, e3) : e3;
  } }), ue$1(D2, function() {
    return ".".concat(D2.styledComponentId);
  }), c2 && oe$1(D2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
}
function at(e2, t2) {
  for (var n2 = [e2[0]], o2 = 0, r2 = t2.length; o2 < r2; o2 += 1) n2.push(t2[o2], e2[o2 + 1]);
  return n2;
}
var ct = function(e2) {
  return Object.assign(e2, { isCss: true });
};
function lt(t2) {
  for (var n2 = [], o2 = 1; o2 < arguments.length; o2++) n2[o2 - 1] = arguments[o2];
  if (re$1(t2) || ce$1(t2)) return ct(Xe$1(at(_$1, __spreadArray([t2], n2, true))));
  var r2 = t2;
  return 0 === n2.length && 1 === r2.length && "string" == typeof r2[0] ? Xe$1(r2) : ct(Xe$1(at(r2, n2)));
}
function ut(n2, o2, r2) {
  if (void 0 === r2 && (r2 = C$1), !o2) throw he$1(1, o2);
  var s2 = function(t2) {
    for (var s3 = [], i2 = 1; i2 < arguments.length; i2++) s3[i2 - 1] = arguments[i2];
    return n2(o2, r2, lt.apply(void 0, __spreadArray([t2], s3, false)));
  };
  return s2.attrs = function(e2) {
    return ut(n2, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e2).filter(Boolean) }));
  }, s2.withConfig = function(e2) {
    return ut(n2, o2, __assign(__assign({}, r2), e2));
  }, s2;
}
var pt = function(e2) {
  return ut(it, e2);
}, dt = pt;
A$1.forEach(function(e2) {
  dt[e2] = pt(e2);
});
var l;
function r(e, t2) {
  return e[t2];
}
function i(e = [], t2, n2 = 0) {
  return [...e.slice(0, n2), t2, ...e.slice(n2)];
}
function s(e = [], t2, n2 = "id") {
  const o = e.slice(), a = r(t2, n2);
  return a ? o.splice(o.findIndex((e2) => r(e2, n2) === a), 1) : o.splice(o.findIndex((e2) => e2 === t2), 1), o;
}
function d(e) {
  return e.map((e2, t2) => {
    const n2 = Object.assign(Object.assign({}, e2), { sortable: e2.sortable || !!e2.sortFunction || void 0 });
    return e2.id || (n2.id = t2 + 1), n2;
  });
}
function c(e, t2) {
  return Math.ceil(e / t2);
}
function g(e, t2) {
  return Math.min(e, t2);
}
!function(e) {
  e.ASC = "asc", e.DESC = "desc";
}(l || (l = {}));
const u = () => null;
function p(e, t2 = [], n2 = []) {
  let o = {}, a = [...n2];
  return t2.length && t2.forEach((t3) => {
    if (!t3.when || "function" != typeof t3.when) throw new Error('"when" must be defined in the conditional style object and must be function');
    t3.when(e) && (o = t3.style || {}, t3.classNames && (a = [...a, ...t3.classNames]), "function" == typeof t3.style && (o = t3.style(e) || {}));
  }), { conditionalStyle: o, classNames: a.join(" ") };
}
function b(e, t2 = [], n2 = "id") {
  const o = r(e, n2);
  return o ? t2.some((e2) => r(e2, n2) === o) : t2.some((t3) => t3 === e);
}
function m(e, t2) {
  return t2 ? e.findIndex((e2) => h(e2.id, t2)) : -1;
}
function h(e, t2) {
  return e == t2;
}
function w(e, t2) {
  const n2 = !e.toggleOnSelectedRowsChange;
  switch (t2.type) {
    case "SELECT_ALL_ROWS": {
      const { keyField: n3, rows: o, rowCount: a, mergeSelections: l2 } = t2, r2 = !e.allSelected, i2 = !e.toggleOnSelectedRowsChange;
      if (l2) {
        const t3 = r2 ? [...e.selectedRows, ...o.filter((t4) => !b(t4, e.selectedRows, n3))] : e.selectedRows.filter((e2) => !b(e2, o, n3));
        return Object.assign(Object.assign({}, e), { allSelected: r2, selectedCount: t3.length, selectedRows: t3, toggleOnSelectedRowsChange: i2 });
      }
      return Object.assign(Object.assign({}, e), { allSelected: r2, selectedCount: r2 ? a : 0, selectedRows: r2 ? o : [], toggleOnSelectedRowsChange: i2 });
    }
    case "SELECT_SINGLE_ROW": {
      const { keyField: o, row: a, isSelected: l2, rowCount: r2, singleSelect: d2 } = t2;
      return d2 ? l2 ? Object.assign(Object.assign({}, e), { selectedCount: 0, allSelected: false, selectedRows: [], toggleOnSelectedRowsChange: n2 }) : Object.assign(Object.assign({}, e), { selectedCount: 1, allSelected: false, selectedRows: [a], toggleOnSelectedRowsChange: n2 }) : l2 ? Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length > 0 ? e.selectedRows.length - 1 : 0, allSelected: false, selectedRows: s(e.selectedRows, a, o), toggleOnSelectedRowsChange: n2 }) : Object.assign(Object.assign({}, e), { selectedCount: e.selectedRows.length + 1, allSelected: e.selectedRows.length + 1 === r2, selectedRows: i(e.selectedRows, a), toggleOnSelectedRowsChange: n2 });
    }
    case "SELECT_MULTIPLE_ROWS": {
      const { keyField: o, selectedRows: a, totalRows: l2, mergeSelections: r2 } = t2;
      if (r2) {
        const t3 = [...e.selectedRows, ...a.filter((t4) => !b(t4, e.selectedRows, o))];
        return Object.assign(Object.assign({}, e), { selectedCount: t3.length, allSelected: false, selectedRows: t3, toggleOnSelectedRowsChange: n2 });
      }
      return Object.assign(Object.assign({}, e), { selectedCount: a.length, allSelected: a.length === l2, selectedRows: a, toggleOnSelectedRowsChange: n2 });
    }
    case "CLEAR_SELECTED_ROWS": {
      const { selectedRowsFlag: n3 } = t2;
      return Object.assign(Object.assign({}, e), { allSelected: false, selectedCount: 0, selectedRows: [], selectedRowsFlag: n3 });
    }
    case "SORT_CHANGE": {
      const { sortDirection: o, selectedColumn: a, clearSelectedOnSort: l2 } = t2;
      return Object.assign(Object.assign(Object.assign({}, e), { selectedColumn: a, sortDirection: o, currentPage: 1 }), l2 && { allSelected: false, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n2 });
    }
    case "CHANGE_PAGE": {
      const { page: o, paginationServer: a, visibleOnly: l2, persistSelectedOnPageChange: r2 } = t2, i2 = a && r2, s2 = a && !r2 || l2;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { currentPage: o }), i2 && { allSelected: false }), s2 && { allSelected: false, selectedCount: 0, selectedRows: [], toggleOnSelectedRowsChange: n2 });
    }
    case "CHANGE_ROWS_PER_PAGE": {
      const { rowsPerPage: n3, page: o } = t2;
      return Object.assign(Object.assign({}, e), { currentPage: o, rowsPerPage: n3 });
    }
  }
}
const f = lt`
	pointer-events: none;
	opacity: 0.4;
`, x = dt.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({ disabled: e }) => e && f};
	${({ theme: e }) => e.table.style};
`, C = lt`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`, y = dt.div`
	display: flex;
	width: 100%;
	${({ $fixedHeader: e }) => e && C};
	${({ theme: e }) => e.head.style};
`, R = dt.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({ theme: e }) => e.headRow.style};
	${({ $dense: e, theme: t2 }) => e && t2.headRow.denseStyle};
`, v = (e, ...t2) => lt`
		@media screen and (max-width: ${599}px) {
			${lt(e, ...t2)}
		}
	`, S = (e, ...t2) => lt`
		@media screen and (max-width: ${959}px) {
			${lt(e, ...t2)}
		}
	`, E = (e, ...t2) => lt`
		@media screen and (max-width: ${1280}px) {
			${lt(e, ...t2)}
		}
	`, O = (e) => (t2, ...n2) => lt`
			@media screen and (max-width: ${e}px) {
				${lt(t2, ...n2)}
			}
		`, $ = dt.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({ theme: e, $headCell: t2 }) => e[t2 ? "headCells" : "cells"].style};
	${({ $noPadding: e }) => e && "padding: 0"};
`, k = dt($)`
	flex-grow: ${({ button: e, grow: t2 }) => 0 === t2 || e ? 0 : t2 || 1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({ maxWidth: e }) => e || "100%"};
	min-width: ${({ minWidth: e }) => e || "100px"};
	${({ width: e }) => e && lt`
			min-width: ${e};
			max-width: ${e};
		`};
	${({ right: e }) => e && "justify-content: flex-end"};
	${({ button: e, center: t2 }) => (t2 || e) && "justify-content: center"};
	${({ compact: e, button: t2 }) => (e || t2) && "padding: 0"};

	/* handle hiding cells */
	${({ hide: e }) => e && "sm" === e && v`
    display: none;
  `};
	${({ hide: e }) => e && "md" === e && S`
    display: none;
  `};
	${({ hide: e }) => e && "lg" === e && E`
    display: none;
  `};
	${({ hide: e }) => e && Number.isInteger(e) && O(e)`
    display: none;
  `};
`, P = lt`
	div:first-child {
		white-space: ${({ $wrapCell: e }) => e ? "normal" : "nowrap"};
		overflow: ${({ $allowOverflow: e }) => e ? "visible" : "hidden"};
		text-overflow: ellipsis;
	}
`, D = dt(k).attrs((e) => ({ style: e.style }))`
	${({ $renderAsCell: e }) => !e && P};
	${({ theme: e, $isDragging: t2 }) => t2 && e.cells.draggingStyle};
	${({ $cellStyle: e }) => e};
`;
var H = reactExports.memo(function({ id: t2, column: n2, row: o, rowIndex: a, dataTag: l2, isDragging: r2, onDragStart: i2, onDragOver: s2, onDragEnd: d2, onDragEnter: c2, onDragLeave: g2 }) {
  const { conditionalStyle: u2, classNames: b2 } = p(o, n2.conditionalCellStyles, ["rdt_TableCell"]);
  return reactExports.createElement(D, { id: t2, "data-column-id": n2.id, role: "cell", className: b2, "data-tag": l2, $cellStyle: n2.style, $renderAsCell: !!n2.cell, $allowOverflow: n2.allowOverflow, button: n2.button, center: n2.center, compact: n2.compact, grow: n2.grow, hide: n2.hide, maxWidth: n2.maxWidth, minWidth: n2.minWidth, right: n2.right, width: n2.width, $wrapCell: n2.wrap, style: u2, $isDragging: r2, onDragStart: i2, onDragOver: s2, onDragEnd: d2, onDragEnter: c2, onDragLeave: g2 }, !n2.cell && reactExports.createElement("div", { "data-tag": l2 }, function(e, t3, n3, o2) {
    return t3 ? n3 && "function" == typeof n3 ? n3(e, o2) : t3(e, o2) : null;
  }(o, n2.selector, n2.format, a)), n2.cell && n2.cell(o, a, n2, t2));
});
const F = "input";
var j = reactExports.memo(function({ name: t2, component: n2 = F, componentOptions: o = { style: {} }, indeterminate: a = false, checked: l2 = false, disabled: r2 = false, onClick: i2 = u }) {
  const s2 = n2, d2 = s2 !== F ? o.style : ((e) => Object.assign(Object.assign({ fontSize: "18px" }, !e && { cursor: "pointer" }), { padding: 0, marginTop: "1px", verticalAlign: "middle", position: "relative" }))(r2), c2 = reactExports.useMemo(() => function(e, ...t3) {
    let n3;
    return Object.keys(e).map((t4) => e[t4]).forEach((o2, a2) => {
      const l3 = e;
      "function" == typeof o2 && (n3 = Object.assign(Object.assign({}, l3), { [Object.keys(e)[a2]]: o2(...t3) }));
    }), n3 || e;
  }(o, a), [o, a]);
  return reactExports.createElement(s2, Object.assign({ type: "checkbox", ref: (e) => {
    e && (e.indeterminate = a);
  }, style: d2, onClick: r2 ? u : i2, name: t2, "aria-label": t2, checked: l2, disabled: r2 }, c2, { onChange: u }));
});
const I = dt($)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;
function T({ name: t2, keyField: n2, row: o, rowCount: a, selected: l2, selectableRowsComponent: r2, selectableRowsComponentProps: i2, selectableRowsSingle: s2, selectableRowDisabled: d2, onSelectedRow: c2 }) {
  const g2 = !(!d2 || !d2(o));
  return reactExports.createElement(I, { onClick: (e) => e.stopPropagation(), className: "rdt_TableCell", $noPadding: true }, reactExports.createElement(j, { name: t2, component: r2, componentOptions: i2, checked: l2, "aria-checked": l2, onClick: () => {
    c2({ type: "SELECT_SINGLE_ROW", row: o, isSelected: l2, keyField: n2, rowCount: a, singleSelect: s2 });
  }, disabled: g2 }));
}
const M = dt.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({ theme: e }) => e.expanderButton.style};
`;
function L({ disabled: t2 = false, expanded: n2 = false, expandableIcon: o, id: a, row: l2, onToggled: r2 }) {
  const i2 = n2 ? o.expanded : o.collapsed;
  return reactExports.createElement(M, { "aria-disabled": t2, onClick: () => r2 && r2(l2), "data-testid": `expander-button-${a}`, disabled: t2, "aria-label": n2 ? "Collapse Row" : "Expand Row", role: "button", type: "button" }, i2);
}
const A = dt($)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({ theme: e }) => e.expanderCell.style};
`;
function _({ row: t2, expanded: n2 = false, expandableIcon: o, id: a, onToggled: l2, disabled: r2 = false }) {
  return reactExports.createElement(A, { onClick: (e) => e.stopPropagation(), $noPadding: true }, reactExports.createElement(L, { id: a, row: t2, expanded: n2, expandableIcon: o, disabled: r2, onToggled: l2 }));
}
const N = dt.div`
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.expanderRow.style};
	${({ $extendedRowStyle: e }) => e};
`;
var z = reactExports.memo(function({ data: t2, ExpanderComponent: n2, expanderComponentProps: o, extendedRowStyle: a, extendedClassNames: l2 }) {
  const r2 = ["rdt_ExpanderRow", ...l2.split(" ").filter((e) => "rdt_TableRow" !== e)].join(" ");
  return reactExports.createElement(N, { className: r2, $extendedRowStyle: a }, reactExports.createElement(n2, Object.assign({ data: t2 }, o)));
});
const W = "allowRowEvents";
var B, G, V;
!function(e) {
  e.LTR = "ltr", e.RTL = "rtl", e.AUTO = "auto";
}(B || (B = {})), function(e) {
  e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center";
}(G || (G = {})), function(e) {
  e.SM = "sm", e.MD = "md", e.LG = "lg";
}(V || (V = {}));
const U = lt`
	&:hover {
		${({ $highlightOnHover: e, theme: t2 }) => e && t2.rows.highlightOnHoverStyle};
	}
`, Y = lt`
	&:hover {
		cursor: pointer;
	}
`, K = dt.div.attrs((e) => ({ style: e.style }))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({ theme: e }) => e.rows.style};
	${({ $dense: e, theme: t2 }) => e && t2.rows.denseStyle};
	${({ $striped: e, theme: t2 }) => e && t2.rows.stripedStyle};
	${({ $highlightOnHover: e }) => e && U};
	${({ $pointerOnHover: e }) => e && Y};
	${({ $selected: e, theme: t2 }) => e && t2.rows.selectedHighlightStyle};
	${({ $conditionalStyle: e }) => e};
`;
function q({ columns: t2 = [], conditionalRowStyles: n2 = [], defaultExpanded: o = false, defaultExpanderDisabled: a = false, dense: l2 = false, expandableIcon: i2, expandableRows: s2 = false, expandableRowsComponent: d2, expandableRowsComponentProps: c2, expandableRowsHideExpander: g2, expandOnRowClicked: b2 = false, expandOnRowDoubleClicked: m2 = false, highlightOnHover: w2 = false, id: f2, expandableInheritConditionalStyles: x2, keyField: C2, onRowClicked: y2 = u, onRowDoubleClicked: R2 = u, onRowMouseEnter: v2 = u, onRowMouseLeave: S2 = u, onRowExpandToggled: E2 = u, onSelectedRow: O2 = u, pointerOnHover: $2 = false, row: k2, rowCount: P2, rowIndex: D2, selectableRowDisabled: F2 = null, selectableRows: j2 = false, selectableRowsComponent: I2, selectableRowsComponentProps: M2, selectableRowsHighlight: L2 = false, selectableRowsSingle: A2 = false, selected: N2, striped: B2 = false, draggingColumnId: G2, onDragStart: V2, onDragOver: U2, onDragEnd: Y2, onDragEnter: q2, onDragLeave: J2 }) {
  const [Q2, X2] = reactExports.useState(o);
  reactExports.useEffect(() => {
    X2(o);
  }, [o]);
  const Z2 = reactExports.useCallback(() => {
    X2(!Q2), E2(!Q2, k2);
  }, [Q2, E2, k2]), ee2 = $2 || s2 && (b2 || m2), te2 = reactExports.useCallback((e) => {
    e.target.getAttribute("data-tag") === W && (y2(k2, e), !a && s2 && b2 && Z2());
  }, [a, b2, s2, Z2, y2, k2]), ne2 = reactExports.useCallback((e) => {
    e.target.getAttribute("data-tag") === W && (R2(k2, e), !a && s2 && m2 && Z2());
  }, [a, m2, s2, Z2, R2, k2]), oe2 = reactExports.useCallback((e) => {
    v2(k2, e);
  }, [v2, k2]), ae2 = reactExports.useCallback((e) => {
    S2(k2, e);
  }, [S2, k2]), le2 = r(k2, C2), { conditionalStyle: re2, classNames: ie2 } = p(k2, n2, ["rdt_TableRow"]), se2 = L2 && N2, de2 = x2 ? re2 : {}, ce2 = B2 && D2 % 2 == 0;
  return reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(K, { id: `row-${f2}`, role: "row", $striped: ce2, $highlightOnHover: w2, $pointerOnHover: !a && ee2, $dense: l2, onClick: te2, onDoubleClick: ne2, onMouseEnter: oe2, onMouseLeave: ae2, className: ie2, $selected: se2, $conditionalStyle: re2 }, j2 && reactExports.createElement(T, { name: `select-row-${le2}`, keyField: C2, row: k2, rowCount: P2, selected: N2, selectableRowsComponent: I2, selectableRowsComponentProps: M2, selectableRowDisabled: F2, selectableRowsSingle: A2, onSelectedRow: O2 }), s2 && !g2 && reactExports.createElement(_, { id: le2, expandableIcon: i2, expanded: Q2, row: k2, onToggled: Z2, disabled: a }), t2.map((t3) => t3.omit ? null : reactExports.createElement(H, { id: `cell-${t3.id}-${le2}`, key: `cell-${t3.id}-${le2}`, dataTag: t3.ignoreRowClick || t3.button ? null : W, column: t3, row: k2, rowIndex: D2, isDragging: h(G2, t3.id), onDragStart: V2, onDragOver: U2, onDragEnd: Y2, onDragEnter: q2, onDragLeave: J2 }))), s2 && Q2 && reactExports.createElement(z, { key: `expander-${le2}`, data: k2, extendedRowStyle: de2, extendedClassNames: ie2, ExpanderComponent: d2, expanderComponentProps: c2 }));
}
const J = dt.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
	${({ $sortDirection: e }) => "desc" === e && "transform: rotate(180deg)"};
`, Q = ({ sortActive: e, sortDirection: n2 }) => t.createElement(J, { $sortActive: e, $sortDirection: n2 }, "▲"), X = dt(k)`
	${({ button: e }) => e && "text-align: center"};
	${({ theme: e, $isDragging: t2 }) => t2 && e.headCells.draggingStyle};
`, Z = lt`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({ $sortActive: e }) => e ? "opacity: 1" : "opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({ $sortActive: e }) => !e && lt`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`, ee = dt.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({ disabled: e }) => !e && Z};
`, te = dt.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
var ne = reactExports.memo(function({ column: t2, disabled: n2, draggingColumnId: o, selectedColumn: a = {}, sortDirection: r2, sortIcon: i2, sortServer: s2, pagination: d2, paginationServer: c2, persistSelectedOnSort: g2, selectableRowsVisibleOnly: u2, onSort: p2, onDragStart: b2, onDragOver: m2, onDragEnd: w2, onDragEnter: f2, onDragLeave: x2 }) {
  reactExports.useEffect(() => {
    "string" == typeof t2.selector && console.error(`Warning: ${t2.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`);
  }, []);
  const [C2, y2] = reactExports.useState(false), R2 = reactExports.useRef(null);
  if (reactExports.useEffect(() => {
    R2.current && y2(R2.current.scrollWidth > R2.current.clientWidth);
  }, [C2]), t2.omit) return null;
  const v2 = () => {
    if (!t2.sortable && !t2.selector) return;
    let e = r2;
    h(a.id, t2.id) && (e = r2 === l.ASC ? l.DESC : l.ASC), p2({ type: "SORT_CHANGE", sortDirection: e, selectedColumn: t2, clearSelectedOnSort: d2 && c2 && !g2 || s2 || u2 });
  }, S2 = (t3) => reactExports.createElement(Q, { sortActive: t3, sortDirection: r2 }), E2 = () => reactExports.createElement("span", { className: [r2, "__rdt_custom_sort_icon__"].join(" ") }, i2), O2 = !(!t2.sortable || !h(a.id, t2.id)), $2 = !t2.sortable || n2, k2 = t2.sortable && !i2 && !t2.right, P2 = t2.sortable && !i2 && t2.right, D2 = t2.sortable && i2 && !t2.right, H2 = t2.sortable && i2 && t2.right;
  return reactExports.createElement(X, { "data-column-id": t2.id, className: "rdt_TableCol", $headCell: true, allowOverflow: t2.allowOverflow, button: t2.button, compact: t2.compact, grow: t2.grow, hide: t2.hide, maxWidth: t2.maxWidth, minWidth: t2.minWidth, right: t2.right, center: t2.center, width: t2.width, draggable: t2.reorder, $isDragging: h(t2.id, o), onDragStart: b2, onDragOver: m2, onDragEnd: w2, onDragEnter: f2, onDragLeave: x2 }, t2.name && reactExports.createElement(ee, { "data-column-id": t2.id, "data-sort-id": t2.id, role: "columnheader", tabIndex: 0, className: "rdt_TableCol_Sortable", onClick: $2 ? void 0 : v2, onKeyPress: $2 ? void 0 : (e) => {
    "Enter" === e.key && v2();
  }, $sortActive: !$2 && O2, disabled: $2 }, !$2 && H2 && E2(), !$2 && P2 && S2(O2), "string" == typeof t2.name ? reactExports.createElement(te, { title: C2 ? t2.name : void 0, ref: R2, "data-column-id": t2.id }, t2.name) : t2.name, !$2 && D2 && E2(), !$2 && k2 && S2(O2)));
});
const oe = dt($)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;
function ae({ headCell: t2 = true, rowData: n2, keyField: o, allSelected: a, mergeSelections: l2, selectedRows: r2, selectableRowsComponent: i2, selectableRowsComponentProps: s2, selectableRowDisabled: d2, onSelectAllRows: c2 }) {
  const g2 = r2.length > 0 && !a, u2 = d2 ? n2.filter((e) => !d2(e)) : n2, p2 = 0 === u2.length, b2 = Math.min(n2.length, u2.length);
  return reactExports.createElement(oe, { className: "rdt_TableCol", $headCell: t2, $noPadding: true }, reactExports.createElement(j, { name: "select-all-rows", component: i2, componentOptions: s2, onClick: () => {
    c2({ type: "SELECT_ALL_ROWS", rows: u2, rowCount: b2, mergeSelections: l2, keyField: o });
  }, checked: a, indeterminate: g2, disabled: p2 }));
}
function le(t2 = B.AUTO) {
  const n2 = "object" == typeof window, [o, a] = reactExports.useState(false);
  return reactExports.useEffect(() => {
    if (n2) if ("auto" !== t2) a("rtl" === t2);
    else {
      const e = !(!window.document || !window.document.createElement), t3 = document.getElementsByTagName("BODY")[0], n3 = document.getElementsByTagName("HTML")[0], o2 = "rtl" === t3.dir || "rtl" === n3.dir;
      a(e && o2);
    }
  }, [t2, n2]), o;
}
const re = dt.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({ theme: e }) => e.contextMenu.fontColor};
	font-size: ${({ theme: e }) => e.contextMenu.fontSize};
	font-weight: 400;
`, ie = dt.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`, se = dt.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({ $rtl: e }) => e && "direction: rtl"};
	${({ theme: e }) => e.contextMenu.style};
	${({ theme: e, $visible: t2 }) => t2 && e.contextMenu.activeStyle};
`;
function de({ contextMessage: t2, contextActions: n2, contextComponent: o, selectedCount: a, direction: l2 }) {
  const r2 = le(l2), i2 = a > 0;
  return o ? reactExports.createElement(se, { $visible: i2 }, reactExports.cloneElement(o, { selectedCount: a })) : reactExports.createElement(se, { $visible: i2, $rtl: r2 }, reactExports.createElement(re, null, ((e, t3, n3) => {
    if (0 === t3) return null;
    const o2 = 1 === t3 ? e.singular : e.plural;
    return n3 ? `${t3} ${e.message || ""} ${o2}` : `${t3} ${o2} ${e.message || ""}`;
  })(t2, a, r2)), reactExports.createElement(ie, null, n2));
}
const ce = dt.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({ theme: e }) => e.header.style}
`, ge = dt.div`
	flex: 1 0 auto;
	color: ${({ theme: e }) => e.header.fontColor};
	font-size: ${({ theme: e }) => e.header.fontSize};
	font-weight: 400;
`, ue = dt.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`, pe = ({ title: t2, actions: n2 = null, contextMessage: o, contextActions: a, contextComponent: l2, selectedCount: r2, direction: i2, showMenu: s2 = true }) => reactExports.createElement(ce, { className: "rdt_TableHeader", role: "heading", "aria-level": 1 }, reactExports.createElement(ge, null, t2), n2 && reactExports.createElement(ue, null, n2), s2 && reactExports.createElement(de, { contextMessage: o, contextActions: a, contextComponent: l2, direction: i2, selectedCount: r2 }));
function be(e, t2) {
  var n2 = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t2.indexOf(o) < 0 && (n2[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t2.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n2[o[a]] = e[o[a]]);
  }
  return n2;
}
"function" == typeof SuppressedError && SuppressedError;
const me = { left: "flex-start", right: "flex-end", center: "center" }, he = dt.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({ align: e }) => me[e]};
	flex-wrap: ${({ $wrapContent: e }) => e ? "wrap" : "nowrap"};
	${({ theme: e }) => e.subHeader.style}
`, we = (t2) => {
  var { align: n2 = "right", wrapContent: o = true } = t2, a = be(t2, ["align", "wrapContent"]);
  return reactExports.createElement(he, Object.assign({ align: n2, $wrapContent: o }, a));
}, fe = dt.div`
	display: flex;
	flex-direction: column;
`, xe = dt.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({ $responsive: e, $fixedHeader: t2 }) => e && lt`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t2 ? "auto" : "hidden"};
			min-height: 0;
		`};

	${({ $fixedHeader: e = false, $fixedHeaderScrollHeight: t2 = "100vh" }) => e && lt`
			max-height: ${t2};
			-webkit-overflow-scrolling: touch;
		`};

	${({ theme: e }) => e.responsiveWrapper.style};
`, Ce = dt.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${(e) => e.theme.progress.style};
`, ye = dt.div`
	position: relative;
	width: 100%;
	${({ theme: e }) => e.tableWrapper.style};
`, Re = dt($)`
	white-space: nowrap;
	${({ theme: e }) => e.expanderCell.style};
`, ve = dt.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({ theme: e }) => e.noData.style};
`, Se = () => t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, t.createElement("path", { d: "M7 10l5 5 5-5z" }), t.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), Ee = dt.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`, Oe = dt.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`, $e = (t2) => {
  var { defaultValue: n2, onChange: o } = t2, a = be(t2, ["defaultValue", "onChange"]);
  return reactExports.createElement(Oe, null, reactExports.createElement(Ee, Object.assign({ onChange: o, defaultValue: n2 }, a)), reactExports.createElement(Se, null));
}, ke = { columns: [], data: [], title: "", keyField: "id", selectableRows: false, selectableRowsHighlight: false, selectableRowsNoSelectAll: false, selectableRowSelected: null, selectableRowDisabled: null, selectableRowsComponent: "input", selectableRowsComponentProps: {}, selectableRowsVisibleOnly: false, selectableRowsSingle: false, clearSelectedRows: false, expandableRows: false, expandableRowDisabled: null, expandableRowExpanded: null, expandOnRowClicked: false, expandableRowsHideExpander: false, expandOnRowDoubleClicked: false, expandableInheritConditionalStyles: false, expandableRowsComponent: function() {
  return t.createElement("div", null, "To add an expander pass in a component instance via ", t.createElement("strong", null, "expandableRowsComponent"), ". You can then access props.data from this component.");
}, expandableIcon: { collapsed: t.createElement(() => t.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, t.createElement("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), t.createElement("path", { d: "M0-.25h24v24H0z", fill: "none" })), null), expanded: t.createElement(() => t.createElement("svg", { fill: "currentColor", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, t.createElement("path", { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" }), t.createElement("path", { d: "M0-.75h24v24H0z", fill: "none" })), null) }, expandableRowsComponentProps: {}, progressPending: false, progressComponent: t.createElement("div", { style: { fontSize: "24px", fontWeight: 700, padding: "24px" } }, "Loading..."), persistTableHead: false, sortIcon: null, sortFunction: null, sortServer: false, striped: false, highlightOnHover: false, pointerOnHover: false, noContextMenu: false, contextMessage: { singular: "item", plural: "items", message: "selected" }, actions: null, contextActions: null, contextComponent: null, defaultSortFieldId: null, defaultSortAsc: true, responsive: true, noDataComponent: t.createElement("div", { style: { padding: "24px" } }, "There are no records to display"), disabled: false, noTableHead: false, noHeader: false, subHeader: false, subHeaderAlign: G.RIGHT, subHeaderWrap: true, subHeaderComponent: null, fixedHeader: false, fixedHeaderScrollHeight: "100vh", pagination: false, paginationServer: false, paginationServerOptions: { persistSelectedOnSort: false, persistSelectedOnPageChange: false }, paginationDefaultPage: 1, paginationResetDefaultPage: false, paginationTotalRows: 0, paginationPerPage: 10, paginationRowsPerPageOptions: [10, 15, 20, 25, 30], paginationComponent: null, paginationComponentOptions: {}, paginationIconFirstPage: t.createElement(() => t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, t.createElement("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), t.createElement("path", { fill: "none", d: "M24 24H0V0h24v24z" })), null), paginationIconLastPage: t.createElement(() => t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, t.createElement("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), t.createElement("path", { fill: "none", d: "M0 0h24v24H0V0z" })), null), paginationIconNext: t.createElement(() => t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, t.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }), t.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), paginationIconPrevious: t.createElement(() => t.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", "aria-hidden": "true", role: "presentation" }, t.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }), t.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })), null), dense: false, conditionalRowStyles: [], theme: "default", customStyles: {}, direction: B.AUTO, onChangePage: u, onChangeRowsPerPage: u, onRowClicked: u, onRowDoubleClicked: u, onRowMouseEnter: u, onRowMouseLeave: u, onRowExpandToggled: u, onSelectedRowsChange: u, onSort: u, onColumnOrderChange: u }, Pe = { rowsPerPageText: "Rows per page:", rangeSeparatorText: "of", noRowsPerPage: false, selectAllRowsItem: false, selectAllRowsItemText: "All" }, De = dt.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({ theme: e }) => e.pagination.style};
`, He = dt.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({ theme: e }) => e.pagination.pageButtonsStyle};
	${({ $isRTL: e }) => e && "transform: scale(-1, -1)"};
`, Fe = dt.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${v`
    width: 100%;
    justify-content: space-around;
  `};
`, je = dt.span`
	flex-shrink: 1;
	user-select: none;
`, Ie = dt(je)`
	margin: 0 24px;
`, Te = dt(je)`
	margin: 0 4px;
`;
var Me = reactExports.memo(function({ rowsPerPage: t2, rowCount: n2, currentPage: o, direction: a = ke.direction, paginationRowsPerPageOptions: l2 = ke.paginationRowsPerPageOptions, paginationIconLastPage: r2 = ke.paginationIconLastPage, paginationIconFirstPage: i2 = ke.paginationIconFirstPage, paginationIconNext: s2 = ke.paginationIconNext, paginationIconPrevious: d2 = ke.paginationIconPrevious, paginationComponentOptions: g2 = ke.paginationComponentOptions, onChangeRowsPerPage: u2 = ke.onChangeRowsPerPage, onChangePage: p2 = ke.onChangePage }) {
  const b2 = (() => {
    const t3 = "object" == typeof window;
    function n3() {
      return { width: t3 ? window.innerWidth : void 0, height: t3 ? window.innerHeight : void 0 };
    }
    const [o2, a2] = reactExports.useState(n3);
    return reactExports.useEffect(() => {
      if (!t3) return () => null;
      function e() {
        a2(n3());
      }
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, []), o2;
  })(), m2 = le(a), h2 = b2.width && b2.width > 599, w2 = c(n2, t2), f2 = o * t2, x2 = f2 - t2 + 1, C2 = 1 === o, y2 = o === w2, R2 = Object.assign(Object.assign({}, Pe), g2), v2 = o === w2 ? `${x2}-${n2} ${R2.rangeSeparatorText} ${n2}` : `${x2}-${f2} ${R2.rangeSeparatorText} ${n2}`, S2 = reactExports.useCallback(() => p2(o - 1), [o, p2]), E2 = reactExports.useCallback(() => p2(o + 1), [o, p2]), O2 = reactExports.useCallback(() => p2(1), [p2]), $2 = reactExports.useCallback(() => p2(c(n2, t2)), [p2, n2, t2]), k2 = reactExports.useCallback((e) => u2(Number(e.target.value), o), [o, u2]), P2 = l2.map((t3) => reactExports.createElement("option", { key: t3, value: t3 }, t3));
  R2.selectAllRowsItem && P2.push(reactExports.createElement("option", { key: -1, value: n2 }, R2.selectAllRowsItemText));
  const D2 = reactExports.createElement($e, { onChange: k2, defaultValue: t2, "aria-label": R2.rowsPerPageText }, P2);
  return reactExports.createElement(De, { className: "rdt_Pagination" }, !R2.noRowsPerPage && h2 && reactExports.createElement(reactExports.Fragment, null, reactExports.createElement(Te, null, R2.rowsPerPageText), D2), h2 && reactExports.createElement(Ie, null, v2), reactExports.createElement(Fe, null, reactExports.createElement(He, { id: "pagination-first-page", type: "button", "aria-label": "First Page", "aria-disabled": C2, onClick: O2, disabled: C2, $isRTL: m2 }, i2), reactExports.createElement(He, { id: "pagination-previous-page", type: "button", "aria-label": "Previous Page", "aria-disabled": C2, onClick: S2, disabled: C2, $isRTL: m2 }, d2), !R2.noRowsPerPage && !h2 && D2, reactExports.createElement(He, { id: "pagination-next-page", type: "button", "aria-label": "Next Page", "aria-disabled": y2, onClick: E2, disabled: y2, $isRTL: m2 }, s2), reactExports.createElement(He, { id: "pagination-last-page", type: "button", "aria-label": "Last Page", "aria-disabled": y2, onClick: $2, disabled: y2, $isRTL: m2 }, r2)));
});
const Le = (t2, n2) => {
  const o = reactExports.useRef(true);
  reactExports.useEffect(() => {
    o.current ? o.current = false : t2();
  }, n2);
};
function Ae(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _e = function(e) {
  return /* @__PURE__ */ function(e2) {
    return !!e2 && "object" == typeof e2;
  }(e) && !function(e2) {
    var t2 = Object.prototype.toString.call(e2);
    return "[object RegExp]" === t2 || "[object Date]" === t2 || function(e3) {
      return e3.$$typeof === Ne;
    }(e2);
  }(e);
};
var Ne = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
function ze(e, t2) {
  return false !== t2.clone && t2.isMergeableObject(e) ? Ue((n2 = e, Array.isArray(n2) ? [] : {}), e, t2) : e;
  var n2;
}
function We(e, t2, n2) {
  return e.concat(t2).map(function(e2) {
    return ze(e2, n2);
  });
}
function Be(e) {
  return Object.keys(e).concat(function(e2) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e2).filter(function(t2) {
      return Object.propertyIsEnumerable.call(e2, t2);
    }) : [];
  }(e));
}
function Ge(e, t2) {
  try {
    return t2 in e;
  } catch (e2) {
    return false;
  }
}
function Ve(e, t2, n2) {
  var o = {};
  return n2.isMergeableObject(e) && Be(e).forEach(function(t3) {
    o[t3] = ze(e[t3], n2);
  }), Be(t2).forEach(function(a) {
    (function(e2, t3) {
      return Ge(e2, t3) && !(Object.hasOwnProperty.call(e2, t3) && Object.propertyIsEnumerable.call(e2, t3));
    })(e, a) || (Ge(e, a) && n2.isMergeableObject(t2[a]) ? o[a] = function(e2, t3) {
      if (!t3.customMerge) return Ue;
      var n3 = t3.customMerge(e2);
      return "function" == typeof n3 ? n3 : Ue;
    }(a, n2)(e[a], t2[a], n2) : o[a] = ze(t2[a], n2));
  }), o;
}
function Ue(e, t2, n2) {
  (n2 = n2 || {}).arrayMerge = n2.arrayMerge || We, n2.isMergeableObject = n2.isMergeableObject || _e, n2.cloneUnlessOtherwiseSpecified = ze;
  var o = Array.isArray(t2);
  return o === Array.isArray(e) ? o ? n2.arrayMerge(e, t2, n2) : Ve(e, t2, n2) : ze(t2, n2);
}
Ue.all = function(e, t2) {
  if (!Array.isArray(e)) throw new Error("first argument should be an array");
  return e.reduce(function(e2, n2) {
    return Ue(e2, n2, t2);
  }, {});
};
var Ye = Ae(Ue);
const Ke = { text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)" }, background: { default: "#FFFFFF" }, context: { background: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, divider: { default: "rgba(0,0,0,.12)" }, button: { default: "rgba(0,0,0,.54)", focus: "rgba(0,0,0,.12)", hover: "rgba(0,0,0,.12)", disabled: "rgba(0, 0, 0, .18)" }, selected: { default: "#e3f2fd", text: "rgba(0, 0, 0, 0.87)" }, highlightOnHover: { default: "#EEEEEE", text: "rgba(0, 0, 0, 0.87)" }, striped: { default: "#FAFAFA", text: "rgba(0, 0, 0, 0.87)" } }, qe = { default: Ke, light: Ke, dark: { text: { primary: "#FFFFFF", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(0,0,0,.12)" }, background: { default: "#424242" }, context: { background: "#E91E63", text: "#FFFFFF" }, divider: { default: "rgba(81, 81, 81, 1)" }, button: { default: "#FFFFFF", focus: "rgba(255, 255, 255, .54)", hover: "rgba(255, 255, 255, .12)", disabled: "rgba(255, 255, 255, .18)" }, selected: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, highlightOnHover: { default: "rgba(0, 0, 0, .7)", text: "#FFFFFF" }, striped: { default: "rgba(0, 0, 0, .87)", text: "#FFFFFF" } } };
function Qe(t2, n2, o, a) {
  const [r2, i2] = reactExports.useState(() => d(t2)), [s2, c2] = reactExports.useState(""), g2 = reactExports.useRef("");
  Le(() => {
    i2(d(t2));
  }, [t2]);
  const u2 = reactExports.useCallback((e) => {
    var t3, n3, o2;
    const { attributes: a2 } = e.target, l2 = null === (t3 = a2.getNamedItem("data-column-id")) || void 0 === t3 ? void 0 : t3.value;
    l2 && (g2.current = (null === (o2 = null === (n3 = r2[m(r2, l2)]) || void 0 === n3 ? void 0 : n3.id) || void 0 === o2 ? void 0 : o2.toString()) || "", c2(g2.current));
  }, [r2]), p2 = reactExports.useCallback((e) => {
    var t3;
    const { attributes: o2 } = e.target, a2 = null === (t3 = o2.getNamedItem("data-column-id")) || void 0 === t3 ? void 0 : t3.value;
    if (a2 && g2.current && a2 !== g2.current) {
      const e2 = m(r2, g2.current), t4 = m(r2, a2), o3 = [...r2];
      o3[e2] = r2[t4], o3[t4] = r2[e2], i2(o3), n2(o3);
    }
  }, [n2, r2]), b2 = reactExports.useCallback((e) => {
    e.preventDefault();
  }, []), h2 = reactExports.useCallback((e) => {
    e.preventDefault();
  }, []), w2 = reactExports.useCallback((e) => {
    e.preventDefault(), g2.current = "", c2("");
  }, []), f2 = function(e = false) {
    return e ? l.ASC : l.DESC;
  }(a), x2 = reactExports.useMemo(() => r2[m(r2, null == o ? void 0 : o.toString())] || {}, [o, r2]);
  return { tableColumns: r2, draggingColumnId: s2, handleDragStart: u2, handleDragEnter: p2, handleDragOver: b2, handleDragLeave: h2, handleDragEnd: w2, defaultSortDirection: f2, defaultSortColumn: x2 };
}
var Xe = reactExports.memo(function(t2) {
  const { data: n2 = ke.data, columns: o = ke.columns, title: i2 = ke.title, actions: s2 = ke.actions, keyField: d2 = ke.keyField, striped: u2 = ke.striped, highlightOnHover: p2 = ke.highlightOnHover, pointerOnHover: m2 = ke.pointerOnHover, dense: h2 = ke.dense, selectableRows: f2 = ke.selectableRows, selectableRowsSingle: C2 = ke.selectableRowsSingle, selectableRowsHighlight: v2 = ke.selectableRowsHighlight, selectableRowsNoSelectAll: S2 = ke.selectableRowsNoSelectAll, selectableRowsVisibleOnly: E2 = ke.selectableRowsVisibleOnly, selectableRowSelected: O2 = ke.selectableRowSelected, selectableRowDisabled: k2 = ke.selectableRowDisabled, selectableRowsComponent: P2 = ke.selectableRowsComponent, selectableRowsComponentProps: D2 = ke.selectableRowsComponentProps, onRowExpandToggled: H2 = ke.onRowExpandToggled, onSelectedRowsChange: F2 = ke.onSelectedRowsChange, expandableIcon: j2 = ke.expandableIcon, onChangeRowsPerPage: I2 = ke.onChangeRowsPerPage, onChangePage: T2 = ke.onChangePage, paginationServer: M2 = ke.paginationServer, paginationServerOptions: L2 = ke.paginationServerOptions, paginationTotalRows: A2 = ke.paginationTotalRows, paginationDefaultPage: _2 = ke.paginationDefaultPage, paginationResetDefaultPage: N2 = ke.paginationResetDefaultPage, paginationPerPage: z2 = ke.paginationPerPage, paginationRowsPerPageOptions: W2 = ke.paginationRowsPerPageOptions, paginationIconLastPage: B2 = ke.paginationIconLastPage, paginationIconFirstPage: G2 = ke.paginationIconFirstPage, paginationIconNext: V2 = ke.paginationIconNext, paginationIconPrevious: U2 = ke.paginationIconPrevious, paginationComponent: Y2 = ke.paginationComponent, paginationComponentOptions: K2 = ke.paginationComponentOptions, responsive: J2 = ke.responsive, progressPending: Q2 = ke.progressPending, progressComponent: X2 = ke.progressComponent, persistTableHead: Z2 = ke.persistTableHead, noDataComponent: ee2 = ke.noDataComponent, disabled: te2 = ke.disabled, noTableHead: oe2 = ke.noTableHead, noHeader: le2 = ke.noHeader, fixedHeader: re2 = ke.fixedHeader, fixedHeaderScrollHeight: ie2 = ke.fixedHeaderScrollHeight, pagination: se2 = ke.pagination, subHeader: de2 = ke.subHeader, subHeaderAlign: ce2 = ke.subHeaderAlign, subHeaderWrap: ge2 = ke.subHeaderWrap, subHeaderComponent: ue2 = ke.subHeaderComponent, noContextMenu: be2 = ke.noContextMenu, contextMessage: me2 = ke.contextMessage, contextActions: he2 = ke.contextActions, contextComponent: Se2 = ke.contextComponent, expandableRows: Ee2 = ke.expandableRows, onRowClicked: Oe2 = ke.onRowClicked, onRowDoubleClicked: $e2 = ke.onRowDoubleClicked, onRowMouseEnter: Pe2 = ke.onRowMouseEnter, onRowMouseLeave: De2 = ke.onRowMouseLeave, sortIcon: He2 = ke.sortIcon, onSort: Fe2 = ke.onSort, sortFunction: je2 = ke.sortFunction, sortServer: Ie2 = ke.sortServer, expandableRowsComponent: Te2 = ke.expandableRowsComponent, expandableRowsComponentProps: Ae2 = ke.expandableRowsComponentProps, expandableRowDisabled: _e2 = ke.expandableRowDisabled, expandableRowsHideExpander: Ne2 = ke.expandableRowsHideExpander, expandOnRowClicked: ze2 = ke.expandOnRowClicked, expandOnRowDoubleClicked: We2 = ke.expandOnRowDoubleClicked, expandableRowExpanded: Be2 = ke.expandableRowExpanded, expandableInheritConditionalStyles: Ge2 = ke.expandableInheritConditionalStyles, defaultSortFieldId: Ve2 = ke.defaultSortFieldId, defaultSortAsc: Ue2 = ke.defaultSortAsc, clearSelectedRows: Ke2 = ke.clearSelectedRows, conditionalRowStyles: Je2 = ke.conditionalRowStyles, theme: Xe2 = ke.theme, customStyles: Ze2 = ke.customStyles, direction: et2 = ke.direction, onColumnOrderChange: tt2 = ke.onColumnOrderChange, className: nt2 } = t2, { tableColumns: ot$1, draggingColumnId: at2, handleDragStart: lt2, handleDragEnter: rt2, handleDragOver: it2, handleDragLeave: st2, handleDragEnd: dt2, defaultSortDirection: ct2, defaultSortColumn: gt2 } = Qe(o, tt2, Ve2, Ue2), [{ rowsPerPage: ut2, currentPage: pt2, selectedRows: bt2, allSelected: mt2, selectedCount: ht2, selectedColumn: wt2, sortDirection: ft, toggleOnSelectedRowsChange: xt2 }, Ct2] = reactExports.useReducer(w, { allSelected: false, selectedCount: 0, selectedRows: [], selectedColumn: gt2, toggleOnSelectedRowsChange: false, sortDirection: ct2, currentPage: _2, rowsPerPage: z2, selectedRowsFlag: false, contextMessage: ke.contextMessage }), { persistSelectedOnSort: yt2 = false, persistSelectedOnPageChange: Rt = false } = L2, vt2 = !(!M2 || !Rt && !yt2), St = se2 && !Q2 && n2.length > 0, Et2 = Y2 || Me, Ot2 = reactExports.useMemo(() => ((e = {}, t3 = "default", n3 = "default") => {
    const o2 = qe[t3] ? t3 : n3;
    return Ye({ table: { style: { color: (a = qe[o2]).text.primary, backgroundColor: a.background.default } }, tableWrapper: { style: { display: "table" } }, responsiveWrapper: { style: {} }, header: { style: { fontSize: "22px", color: a.text.primary, backgroundColor: a.background.default, minHeight: "56px", paddingLeft: "16px", paddingRight: "8px" } }, subHeader: { style: { backgroundColor: a.background.default, minHeight: "52px" } }, head: { style: { color: a.text.primary, fontSize: "12px", fontWeight: 500 } }, headRow: { style: { backgroundColor: a.background.default, minHeight: "52px", borderBottomWidth: "1px", borderBottomColor: a.divider.default, borderBottomStyle: "solid" }, denseStyle: { minHeight: "32px" } }, headCells: { style: { paddingLeft: "16px", paddingRight: "16px" }, draggingStyle: { cursor: "move" } }, contextMenu: { style: { backgroundColor: a.context.background, fontSize: "18px", fontWeight: 400, color: a.context.text, paddingLeft: "16px", paddingRight: "8px", transform: "translate3d(0, -100%, 0)", transitionDuration: "125ms", transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)", willChange: "transform" }, activeStyle: { transform: "translate3d(0, 0, 0)" } }, cells: { style: { paddingLeft: "16px", paddingRight: "16px", wordBreak: "break-word" }, draggingStyle: {} }, rows: { style: { fontSize: "13px", fontWeight: 400, color: a.text.primary, backgroundColor: a.background.default, minHeight: "48px", "&:not(:last-of-type)": { borderBottomStyle: "solid", borderBottomWidth: "1px", borderBottomColor: a.divider.default } }, denseStyle: { minHeight: "32px" }, selectedHighlightStyle: { "&:nth-of-type(n)": { color: a.selected.text, backgroundColor: a.selected.default, borderBottomColor: a.background.default } }, highlightOnHoverStyle: { color: a.highlightOnHover.text, backgroundColor: a.highlightOnHover.default, transitionDuration: "0.15s", transitionProperty: "background-color", borderBottomColor: a.background.default, outlineStyle: "solid", outlineWidth: "1px", outlineColor: a.background.default }, stripedStyle: { color: a.striped.text, backgroundColor: a.striped.default } }, expanderRow: { style: { color: a.text.primary, backgroundColor: a.background.default } }, expanderCell: { style: { flex: "0 0 48px" } }, expanderButton: { style: { color: a.button.default, fill: a.button.default, backgroundColor: "transparent", borderRadius: "2px", transition: "0.25s", height: "100%", width: "100%", "&:hover:enabled": { cursor: "pointer" }, "&:disabled": { color: a.button.disabled }, "&:hover:not(:disabled)": { cursor: "pointer", backgroundColor: a.button.hover }, "&:focus": { outline: "none", backgroundColor: a.button.focus }, svg: { margin: "auto" } } }, pagination: { style: { color: a.text.secondary, fontSize: "13px", minHeight: "56px", backgroundColor: a.background.default, borderTopStyle: "solid", borderTopWidth: "1px", borderTopColor: a.divider.default }, pageButtonsStyle: { borderRadius: "50%", height: "40px", width: "40px", padding: "8px", margin: "px", cursor: "pointer", transition: "0.4s", color: a.button.default, fill: a.button.default, backgroundColor: "transparent", "&:disabled": { cursor: "unset", color: a.button.disabled, fill: a.button.disabled }, "&:hover:not(:disabled)": { backgroundColor: a.button.hover }, "&:focus": { outline: "none", backgroundColor: a.button.focus } } }, noData: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: a.text.primary, backgroundColor: a.background.default } }, progress: { style: { display: "flex", alignItems: "center", justifyContent: "center", color: a.text.primary, backgroundColor: a.background.default } } }, e);
    var a;
  })(Ze2, Xe2), [Ze2, Xe2]), $t = reactExports.useMemo(() => Object.assign({}, "auto" !== et2 && { dir: et2 }), [et2]), kt = reactExports.useMemo(() => {
    if (Ie2) return n2;
    if ((null == wt2 ? void 0 : wt2.sortFunction) && "function" == typeof wt2.sortFunction) {
      const e = wt2.sortFunction, t3 = ft === l.ASC ? e : (t4, n3) => -1 * e(t4, n3);
      return [...n2].sort(t3);
    }
    return function(e, t3, n3, o2) {
      return t3 ? o2 && "function" == typeof o2 ? o2(e.slice(0), t3, n3) : e.slice(0).sort((e2, o3) => {
        const a = t3(e2), l2 = t3(o3);
        if ("asc" === n3) {
          if (a < l2) return -1;
          if (a > l2) return 1;
        }
        if ("desc" === n3) {
          if (a > l2) return -1;
          if (a < l2) return 1;
        }
        return 0;
      }) : e;
    }(n2, null == wt2 ? void 0 : wt2.selector, ft, je2);
  }, [Ie2, wt2, ft, n2, je2]), Pt2 = reactExports.useMemo(() => {
    if (se2 && !M2) {
      const e = pt2 * ut2, t3 = e - ut2;
      return kt.slice(t3, e);
    }
    return kt;
  }, [pt2, se2, M2, ut2, kt]), Dt = reactExports.useCallback((e) => {
    Ct2(e);
  }, []), Ht = reactExports.useCallback((e) => {
    Ct2(e);
  }, []), Ft = reactExports.useCallback((e) => {
    Ct2(e);
  }, []), jt = reactExports.useCallback((e, t3) => Oe2(e, t3), [Oe2]), It2 = reactExports.useCallback((e, t3) => $e2(e, t3), [$e2]), Tt = reactExports.useCallback((e, t3) => Pe2(e, t3), [Pe2]), Mt2 = reactExports.useCallback((e, t3) => De2(e, t3), [De2]), Lt2 = reactExports.useCallback((e) => Ct2({ type: "CHANGE_PAGE", page: e, paginationServer: M2, visibleOnly: E2, persistSelectedOnPageChange: Rt }), [M2, Rt, E2]), At2 = reactExports.useCallback((e) => {
    const t3 = c(A2 || Pt2.length, e), n3 = g(pt2, t3);
    M2 || Lt2(n3), Ct2({ type: "CHANGE_ROWS_PER_PAGE", page: n3, rowsPerPage: e });
  }, [pt2, Lt2, M2, A2, Pt2.length]);
  if (se2 && !M2 && kt.length > 0 && 0 === Pt2.length) {
    const e = c(kt.length, ut2), t3 = g(pt2, e);
    Lt2(t3);
  }
  Le(() => {
    F2({ allSelected: mt2, selectedCount: ht2, selectedRows: bt2.slice(0) });
  }, [xt2]), Le(() => {
    Fe2(wt2, ft, kt.slice(0));
  }, [wt2, ft]), Le(() => {
    T2(pt2, A2 || kt.length);
  }, [pt2]), Le(() => {
    I2(ut2, pt2);
  }, [ut2]), Le(() => {
    Lt2(_2);
  }, [_2, N2]), Le(() => {
    if (se2 && M2 && A2 > 0) {
      const e = c(A2, ut2), t3 = g(pt2, e);
      pt2 !== t3 && Lt2(t3);
    }
  }, [A2]), reactExports.useEffect(() => {
    Ct2({ type: "CLEAR_SELECTED_ROWS", selectedRowsFlag: Ke2 });
  }, [C2, Ke2]), reactExports.useEffect(() => {
    if (!O2) return;
    const e = kt.filter((e2) => O2(e2)), t3 = C2 ? e.slice(0, 1) : e;
    Ct2({ type: "SELECT_MULTIPLE_ROWS", keyField: d2, selectedRows: t3, totalRows: kt.length, mergeSelections: vt2 });
  }, [n2, O2]);
  const _t2 = E2 ? Pt2 : kt, Nt2 = Rt || C2 || S2;
  return reactExports.createElement(ot, { theme: Ot2 }, !le2 && (!!i2 || !!s2) && reactExports.createElement(pe, { title: i2, actions: s2, showMenu: !be2, selectedCount: ht2, direction: et2, contextActions: he2, contextComponent: Se2, contextMessage: me2 }), de2 && reactExports.createElement(we, { align: ce2, wrapContent: ge2 }, ue2), reactExports.createElement(xe, Object.assign({ $responsive: J2, $fixedHeader: re2, $fixedHeaderScrollHeight: ie2, className: nt2 }, $t), reactExports.createElement(ye, null, Q2 && !Z2 && reactExports.createElement(Ce, null, X2), reactExports.createElement(x, { disabled: te2, className: "rdt_Table", role: "table" }, !oe2 && (!!Z2 || kt.length > 0 && !Q2) && reactExports.createElement(y, { className: "rdt_TableHead", role: "rowgroup", $fixedHeader: re2 }, reactExports.createElement(R, { className: "rdt_TableHeadRow", role: "row", $dense: h2 }, f2 && (Nt2 ? reactExports.createElement($, { style: { flex: "0 0 48px" } }) : reactExports.createElement(ae, { allSelected: mt2, selectedRows: bt2, selectableRowsComponent: P2, selectableRowsComponentProps: D2, selectableRowDisabled: k2, rowData: _t2, keyField: d2, mergeSelections: vt2, onSelectAllRows: Ht })), Ee2 && !Ne2 && reactExports.createElement(Re, null), ot$1.map((t3) => reactExports.createElement(ne, { key: t3.id, column: t3, selectedColumn: wt2, disabled: Q2 || 0 === kt.length, pagination: se2, paginationServer: M2, persistSelectedOnSort: yt2, selectableRowsVisibleOnly: E2, sortDirection: ft, sortIcon: He2, sortServer: Ie2, onSort: Dt, onDragStart: lt2, onDragOver: it2, onDragEnd: dt2, onDragEnter: rt2, onDragLeave: st2, draggingColumnId: at2 })))), !kt.length && !Q2 && reactExports.createElement(ve, null, ee2), Q2 && Z2 && reactExports.createElement(Ce, null, X2), !Q2 && kt.length > 0 && reactExports.createElement(fe, { className: "rdt_TableBody", role: "rowgroup" }, Pt2.map((t3, n3) => {
    const o2 = r(t3, d2), a = function(e = "") {
      return "number" != typeof e && (!e || 0 === e.length);
    }(o2) ? n3 : o2, l2 = b(t3, bt2, d2), i3 = !!(Ee2 && Be2 && Be2(t3)), s3 = !!(Ee2 && _e2 && _e2(t3));
    return reactExports.createElement(q, { id: a, key: a, keyField: d2, "data-row-id": a, columns: ot$1, row: t3, rowCount: kt.length, rowIndex: n3, selectableRows: f2, expandableRows: Ee2, expandableIcon: j2, highlightOnHover: p2, pointerOnHover: m2, dense: h2, expandOnRowClicked: ze2, expandOnRowDoubleClicked: We2, expandableRowsComponent: Te2, expandableRowsComponentProps: Ae2, expandableRowsHideExpander: Ne2, defaultExpanderDisabled: s3, defaultExpanded: i3, expandableInheritConditionalStyles: Ge2, conditionalRowStyles: Je2, selected: l2, selectableRowsHighlight: v2, selectableRowsComponent: P2, selectableRowsComponentProps: D2, selectableRowDisabled: k2, selectableRowsSingle: C2, striped: u2, onRowExpandToggled: H2, onRowClicked: jt, onRowDoubleClicked: It2, onRowMouseEnter: Tt, onRowMouseLeave: Mt2, onSelectedRow: Ft, draggingColumnId: at2, onDragStart: lt2, onDragOver: it2, onDragEnd: dt2, onDragEnter: rt2, onDragLeave: st2 });
  }))))), St && reactExports.createElement("div", null, reactExports.createElement(Et2, { onChangePage: Lt2, onChangeRowsPerPage: At2, rowCount: A2 || kt.length, currentPage: pt2, rowsPerPage: ut2, direction: et2, paginationRowsPerPageOptions: W2, paginationIconLastPage: B2, paginationIconFirstPage: G2, paginationIconNext: V2, paginationIconPrevious: U2, paginationComponentOptions: K2 })));
});
function Table({ columns: columns2, data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Xe,
    {
      className: "bg-white table shadow overflow-scroll h-full custom-table",
      columns: columns2,
      data
    }
  );
}
const sendIMG = "" + new URL("send-0Tdh7PHi.png", import.meta.url).href;
function StatusSvg({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, width: "26", height: "26", viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "26", height: "26", rx: "4", fill: "#8AC389", fillOpacity: "0.1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0.5", y: "0.5", width: "25", height: "25", rx: "3.5", stroke: "#D6E8ED", strokeOpacity: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 6.66718C12.8399 6.66718 12.6864 6.72783 12.5732 6.8358C12.46 6.94376 12.3964 7.0902 12.3964 7.24289V13C12.3964 13.318 12.6666 13.5757 13 13.5757H19.0357C19.3691 13.5757 19.6393 13.318 19.6393 13C19.6393 12.1684 19.4675 11.3449 19.1339 10.5765C18.8002 9.8082 18.3112 9.11007 17.6947 8.52202C17.0782 7.93396 16.3462 7.46749 15.5407 7.14923C14.7352 6.83098 13.8719 6.66718 13 6.66718ZM13.6035 12.4243V7.85068C14.1097 7.90466 14.6064 8.02637 15.0788 8.21301C15.7378 8.4734 16.3367 8.85506 16.8411 9.3362C17.3455 9.81733 17.7456 10.3885 18.0186 11.0172C18.2143 11.4677 18.3419 11.9415 18.3985 12.4243H13.6035Z", fill: "#8AC389" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10.7868 9.23194C11.1011 9.12598 11.2658 8.79707 11.1547 8.49729C11.0437 8.1975 10.6988 8.04038 10.3845 8.14634C8.04108 8.93639 6.36066 11.0681 6.36066 13.5757C6.36066 16.7553 9.06295 19.3328 12.3964 19.3328C15.0253 19.3328 17.2602 17.73 18.0885 15.4947C18.1996 15.1949 18.0349 14.866 17.7206 14.76C17.4063 14.6541 17.0615 14.8112 16.9504 15.111C16.2872 16.9006 14.4979 18.1814 12.3964 18.1814C9.72964 18.1814 7.5678 16.1194 7.5678 13.5757C7.5678 11.5713 8.91059 9.86448 10.7868 9.23194Z", fill: "#8AC389" })
  ] });
}
let BooksPageState = proxy({
  filterBooked: false
});
function BookAvaible({ book }) {
  useSnapshot(BookingsState);
  const booked_info = BookingsState.borrowed.find((borrow) => borrow.book_id == book.id);
  if (book.available || !booked_info) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "/" });
  const user_id = booked_info.user_id;
  const user = UsersState.users.find((user2) => user2.id == user_id);
  let passed_release = /* @__PURE__ */ new Date() >= new Date(booked_info.return_date);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `${passed_release ? "text-red-600" : ""}`, children: [
    " ",
    user?.first_name + "    " + user?.last_name
  ] });
}
const columns$2 = [
  { name: "#", selector: (row) => row.idx, style: { "max-width": "5%" } },
  { name: "عنوان", selector: (row) => row.title, style: { "max-width": "22.5%" } },
  { name: "الكاتب", selector: (row) => row.author, style: { "max-width": "22.5%" } },
  { name: "سنة النشر", selector: (row) => row.publish_year, style: { "max-width": "22.5%" } },
  { name: "العضو", selector: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(BookAvaible, { book: row }), style: { "max-width": "22.5%" } },
  { name: "", selector: (row) => row.options_comp ? row.options_comp() : "", style: { "max-width": "5%" } }
];
function Books() {
  function onFilterBorrowed(checked) {
    BooksPageState.filterBooked = checked;
  }
  function onSearch(author, year, tags) {
    const input = searchRef.current.getInput();
    setFilter(input.toLowerCase());
  }
  reactExports.useEffect(() => {
    GState.tabIdx = "books";
  }, []);
  useSnapshot(BooksPageState);
  useSnapshot(BookState);
  useSnapshot(BookingsState);
  let searchRef = reactExports.useRef(null);
  const [filter2, setFilter] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { cond: false, className: "books-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "الكتب:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCards$1, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row align-center justify-between gap-80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { placeholder: "ابحث عن كتاب...", ref: searchRef, onEnter: onSearch }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit", onClick: toggleAddBook, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2sm text-bold ", children: "اضف كتاب" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit", onClick: toggleBookABook, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sendIMG, height: 18, width: 18, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2sm text-bold ", children: "حجز كتاب" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " px-14 my-2 flex gap-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "w-5 outline-none cursor-pointer", defaultChecked: BooksPageState.filterBooked, onClick: (e) => onFilterBorrowed(e.target.checked) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-bold", children: "اظهر المحجوزة" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full gap-8 h-0 grow", children: (() => {
      let books = !BooksPageState.filterBooked ? BookState.books : BookState.books.filter((book) => !book.available);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { columns: columns$2, data: books.filter((item) => item.title.toLowerCase().includes(filter2) || item.author.toLowerCase().includes(filter2) || item.publish_year.toLowerCase().includes(filter2)) });
    })() })
  ] });
}
function StatusCards$1() {
  const cardCSS = "card cursor-pointer h-fit w-100 bg-white shadow  p-4 text-xl  flex flex-col gap-1 rounded-lg w-56";
  const cardTextCSS = "self-center text-2xl";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cards  w-full flex flex-row align-center justify-center w-auto gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cardCSS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSvg, { className: "self-end scale-125 -mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عدد الكتب" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: cardTextCSS, children: BookState.books.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cardCSS + " taken text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSvg, { className: "self-end scale-125 -mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عدد المأخودة" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: cardTextCSS, children: BookState.books.filter((book) => !book.available).length })
    ] })
  ] });
}
function ReversedBookInfo({ user }) {
  useSnapshot(BookingsState);
  useSnapshot(BookState);
  const booked_info = BookingsState.borrowed.find((borrow) => borrow.user_id == user.id);
  if (!booked_info || user.reserved_book == null || !BookState.books.length) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "/" });
  const book_id = booked_info.book_id;
  const book = BookState.books.find((book2) => book2.id == book_id);
  let passed_release = /* @__PURE__ */ new Date() >= new Date(booked_info.return_date);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `${passed_release ? "text-red-600" : ""}`, children: [
    " ",
    book.title,
    " "
  ] });
}
const columns$1 = [
  {
    name: "#",
    selector: (row) => row.idx,
    style: { "max-width": "5%" }
  },
  {
    name: "الاسم",
    selector: (row) => row.first_name,
    style: { "max-width": "22.5%" }
  },
  {
    name: "اللقب",
    selector: (row) => row.last_name,
    style: { "max-width": "22.5%" }
  },
  {
    name: "الكتاب المحجوز",
    selector: (row) => /* @__PURE__ */ jsxRuntimeExports.jsx(ReversedBookInfo, { user: row }),
    style: { "max-width": "22.5%" }
  },
  {
    name: "",
    selector: (row) => row.options_comp ? row.options_comp() : ""
  }
];
let UsersPageState = proxy({
  filterBookers: false
});
function Users() {
  function onFilterBorrowed(checked) {
    UsersPageState.filterBookers = checked;
  }
  reactExports.useEffect(() => {
    GState.tabIdx = "users";
  }, []);
  reactExports.useRef(null);
  reactExports.useRef(null);
  useSnapshot(UsersPageState);
  useSnapshot(UsersState);
  function onSearch() {
    const input = searchRef.current.getInput();
    setFilter(input.toLowerCase());
  }
  const [filter2, setFilter] = reactExports.useState("");
  const searchRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { cond: false, className: "users-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "tab-title text-3xl font-bold", children: "الاعضاء:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatusCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row align-center justify-between gap-80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { onEnter: onSearch, ref: searchRef, placeholder: "ابحث عن عضو...", showFilter: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit", onClick: toggleAddUser, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2sm text-bold ", children: "اضف عضو" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit", onClick: toggleBookABook, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: sendIMG, height: 18, width: 18, alt: "addIMG", className: "self-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2sm text-bold ", children: "حجز كتاب" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " px-14 my-2 flex gap-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "w-5 outline-none cursor-pointer", defaultChecked: UsersPageState.filterBookers, onClick: (e) => onFilterBorrowed(e.target.checked) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-bold", children: "اظهر المحجوزة" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full gap-8 h-0 grow", children: (() => {
      let users = !UsersPageState.filterBookers ? UsersState.users : UsersState.users.filter((user) => user.reserved_book);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { columns: columns$1, data: users.filter((user) => user.first_name.toLowerCase().includes(filter2) || user.last_name.toLowerCase().includes(filter2)) });
    })() })
  ] });
}
function StatusCards() {
  const cardCSS = "card cursor-pointer h-fit w-100 bg-white shadow  p-4 text-xl  flex flex-col gap-1 rounded-lg w-56";
  const cardTextCSS = "self-center text-2xl";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cards  w-full flex flex-row align-center justify-center w-auto gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cardCSS, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSvg, { className: "self-end scale-125 -mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عدد الاعضاء" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: cardTextCSS, children: UsersState.users.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cardCSS + " taken text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusSvg, { className: "self-end scale-125 -mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "عدد الحاجزين" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: cardTextCSS, children: UsersState.users.filter((user) => user.reserved_book).length })
    ] })
  ] });
}
const columns = [
  {
    name: "#",
    selector: (row) => row.idx
  },
  {
    name: "الاسم",
    selector: (row) => row.first_name
  },
  {
    name: "اللقب",
    selector: (row) => row.last_name
  },
  {
    name: "",
    selector: (row) => row.options_comp ? row.options_comp() : ""
  }
];
function Admins() {
  function onSearch() {
    const input = searchRef.current.getInput();
    setFilter(input.toLowerCase());
  }
  const inputStyle = "text-sm m-1";
  function UsersFilter() {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-3/12 px-8 py-4 bg-white rounded shadow flex flex-col gap-4 h-fit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "الاسم" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: authorRef, className: inputStyle, placeholder: "ادخل اسم... " })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "اللقب" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ref: yearRef, className: inputStyle, placeholder: "ادخل سنة النشر..." })
      ] })
    ] });
  }
  reactExports.useEffect(() => {
    GState.tabIdx = "admins";
  }, []);
  const authorRef = reactExports.useRef(null);
  const yearRef = reactExports.useRef(null);
  const searchRef = reactExports.useRef(null);
  const [filter2, setFilter] = reactExports.useState("");
  useSnapshot(AdminsState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { cond: false, className: "admins-table h-full flex flex-col  overflow-hidden overflowy-scroll gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "المسؤولين:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row align-center justify-between gap-80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { onEnter: onSearch, ref: searchRef, placeholder: "ابحث عن مسؤول...", showFilter: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex flex-row gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "interactive-button px-4  py-3 rounded shadow text-white flex gap-4 align-center justify-center h-fit", onClick: toggleAddAdmin, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: addIMG, height: 16, width: 16, alt: "addIMG", className: "self-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2sm text-bold ", children: "اضف مسؤول" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full gap-8 h-0 grow", children: [
      GState.filterState.visible ? /* @__PURE__ */ jsxRuntimeExports.jsx(UsersFilter, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { columns, data: AdminsState.admins.filter((admin) => admin.first_name.toLowerCase().includes(filter2) || admin.last_name.toLowerCase().includes(filter2)) })
    ] })
  ] });
}
const root = client.createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(Books, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "users", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "admins", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Admins, {}) })
  ] }) }) })
);
