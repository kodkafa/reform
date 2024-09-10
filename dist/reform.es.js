import { useForm as ge, FormProvider as be, useFormContext as j } from "react-hook-form";
import { useFormContext as Ye } from "react-hook-form";
import $r, { useState as ar, useRef as ye, useEffect as Ee } from "react";
var nr = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function Re() {
  if (kr)
    return L;
  kr = 1;
  var n = $r, u = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(h, m, g) {
    var y, x = {}, O = null, V = null;
    g !== void 0 && (O = "" + g), m.key !== void 0 && (O = "" + m.key), m.ref !== void 0 && (V = m.ref);
    for (y in m)
      i.call(m, y) && !c.hasOwnProperty(y) && (x[y] = m[y]);
    if (h && h.defaultProps)
      for (y in m = h.defaultProps, m)
        x[y] === void 0 && (x[y] = m[y]);
    return { $$typeof: u, type: h, key: O, ref: V, props: x, _owner: d.current };
  }
  return L.Fragment = a, L.jsx = v, L.jsxs = v, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr;
function _e() {
  return Fr || (Fr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $r, u = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), ir = Symbol.iterator, Ar = "@@iterator";
    function Nr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = ir && r[ir] || r[Ar];
      return typeof e == "function" ? e : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++)
          t[o - 1] = arguments[o];
        Dr("error", r, t);
      }
    }
    function Dr(r, e, t) {
      {
        var o = A.ReactDebugCurrentFrame, p = o.getStackAddendum();
        p !== "" && (e += "%s", t = t.concat([p]));
        var b = t.map(function(f) {
          return String(f);
        });
        b.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, b);
      }
    }
    var Ir = !1, Wr = !1, Yr = !1, Lr = !1, Mr = !1, sr;
    sr = Symbol.for("react.module.reference");
    function Vr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === c || Mr || r === d || r === g || r === y || Lr || r === V || Ir || Wr || Yr || typeof r == "object" && r !== null && (r.$$typeof === O || r.$$typeof === x || r.$$typeof === v || r.$$typeof === h || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === sr || r.getModuleId !== void 0));
    }
    function Ur(r, e, t) {
      var o = r.displayName;
      if (o)
        return o;
      var p = e.displayName || e.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function ur(r) {
      return r.displayName || "Context";
    }
    function P(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case c:
          return "Profiler";
        case d:
          return "StrictMode";
        case g:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            var e = r;
            return ur(e) + ".Consumer";
          case v:
            var t = r;
            return ur(t._context) + ".Provider";
          case m:
            return Ur(r, r.render, "ForwardRef");
          case x:
            var o = r.displayName || null;
            return o !== null ? o : P(r.type) || "Memo";
          case O: {
            var p = r, b = p._payload, f = p._init;
            try {
              return P(f(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, lr, cr, fr, dr, vr, mr, pr;
    function hr() {
    }
    hr.__reactDisabledLog = !0;
    function Br() {
      {
        if (I === 0) {
          lr = console.log, cr = console.info, fr = console.warn, dr = console.error, vr = console.group, mr = console.groupCollapsed, pr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: hr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        I++;
      }
    }
    function qr() {
      {
        if (I--, I === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, r, {
              value: lr
            }),
            info: k({}, r, {
              value: cr
            }),
            warn: k({}, r, {
              value: fr
            }),
            error: k({}, r, {
              value: dr
            }),
            group: k({}, r, {
              value: vr
            }),
            groupCollapsed: k({}, r, {
              value: mr
            }),
            groupEnd: k({}, r, {
              value: pr
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = A.ReactCurrentDispatcher, z;
    function U(r, e, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (p) {
            var o = p.stack.trim().match(/\n( *(at )?)/);
            z = o && o[1] || "";
          }
        return `
` + z + r;
      }
    }
    var X = !1, B;
    {
      var Jr = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Jr();
    }
    function gr(r, e) {
      if (!r || X)
        return "";
      {
        var t = B.get(r);
        if (t !== void 0)
          return t;
      }
      var o;
      X = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = G.current, G.current = null, Br();
      try {
        if (e) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (w) {
              o = w;
            }
            Reflect.construct(r, [], f);
          } else {
            try {
              f.call();
            } catch (w) {
              o = w;
            }
            r.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            o = w;
          }
          r();
        }
      } catch (w) {
        if (w && o && typeof w.stack == "string") {
          for (var l = w.stack.split(`
`), S = o.stack.split(`
`), E = l.length - 1, R = S.length - 1; E >= 1 && R >= 0 && l[E] !== S[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (l[E] !== S[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || l[E] !== S[R]) {
                    var C = `
` + l[E].replace(" at new ", " at ");
                    return r.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", r.displayName)), typeof r == "function" && B.set(r, C), C;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = b, qr(), Error.prepareStackTrace = p;
      }
      var D = r ? r.displayName || r.name : "", F = D ? U(D) : "";
      return typeof r == "function" && B.set(r, F), F;
    }
    function Kr(r, e, t) {
      return gr(r, !1);
    }
    function Gr(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function q(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return gr(r, Gr(r));
      if (typeof r == "string")
        return U(r);
      switch (r) {
        case g:
          return U("Suspense");
        case y:
          return U("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return Kr(r.render);
          case x:
            return q(r.type, e, t);
          case O: {
            var o = r, p = o._payload, b = o._init;
            try {
              return q(b(p), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, br = {}, yr = A.ReactDebugCurrentFrame;
    function J(r) {
      if (r) {
        var e = r._owner, t = q(r.type, r._source, e ? e.type : null);
        yr.setExtraStackFrame(t);
      } else
        yr.setExtraStackFrame(null);
    }
    function zr(r, e, t, o, p) {
      {
        var b = Function.call.bind(W);
        for (var f in r)
          if (b(r, f)) {
            var l = void 0;
            try {
              if (typeof r[f] != "function") {
                var S = Error((o || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              l = r[f](e, f, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              l = E;
            }
            l && !(l instanceof Error) && (J(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, f, typeof l), J(null)), l instanceof Error && !(l.message in br) && (br[l.message] = !0, J(p), _("Failed %s type: %s", t, l.message), J(null));
          }
      }
    }
    var Xr = Array.isArray;
    function H(r) {
      return Xr(r);
    }
    function Hr(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function Zr(r) {
      try {
        return Er(r), !1;
      } catch {
        return !0;
      }
    }
    function Er(r) {
      return "" + r;
    }
    function Rr(r) {
      if (Zr(r))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hr(r)), Er(r);
    }
    var Y = A.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _r, Sr, Z;
    Z = {};
    function re(r) {
      if (W.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ee(r) {
      if (W.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function te(r, e) {
      if (typeof r.ref == "string" && Y.current && e && Y.current.stateNode !== e) {
        var t = P(Y.current.type);
        Z[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(Y.current.type), r.ref), Z[t] = !0);
      }
    }
    function ne(r, e) {
      {
        var t = function() {
          _r || (_r = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ae(r, e) {
      {
        var t = function() {
          Sr || (Sr = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var oe = function(r, e, t, o, p, b, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ie(r, e, t, o, p) {
      {
        var b, f = {}, l = null, S = null;
        t !== void 0 && (Rr(t), l = "" + t), ee(e) && (Rr(e.key), l = "" + e.key), re(e) && (S = e.ref, te(e, p));
        for (b in e)
          W.call(e, b) && !Qr.hasOwnProperty(b) && (f[b] = e[b]);
        if (r && r.defaultProps) {
          var E = r.defaultProps;
          for (b in E)
            f[b] === void 0 && (f[b] = E[b]);
        }
        if (l || S) {
          var R = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          l && ne(f, R), S && ae(f, R);
        }
        return oe(r, l, S, p, o, Y.current, f);
      }
    }
    var Q = A.ReactCurrentOwner, wr = A.ReactDebugCurrentFrame;
    function N(r) {
      if (r) {
        var e = r._owner, t = q(r.type, r._source, e ? e.type : null);
        wr.setExtraStackFrame(t);
      } else
        wr.setExtraStackFrame(null);
    }
    var rr;
    rr = !1;
    function er(r) {
      return typeof r == "object" && r !== null && r.$$typeof === u;
    }
    function Tr() {
      {
        if (Q.current) {
          var r = P(Q.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function se(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), t = r.lineNumber;
          return `

Check your code at ` + e + ":" + t + ".";
        }
        return "";
      }
    }
    var xr = {};
    function ue(r) {
      {
        var e = Tr();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function Cr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = ue(e);
        if (xr[t])
          return;
        xr[t] = !0;
        var o = "";
        r && r._owner && r._owner !== Q.current && (o = " It was passed a child from " + P(r._owner.type) + "."), N(r), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), N(null);
      }
    }
    function Or(r, e) {
      {
        if (typeof r != "object")
          return;
        if (H(r))
          for (var t = 0; t < r.length; t++) {
            var o = r[t];
            er(o) && Cr(o, e);
          }
        else if (er(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var p = Nr(r);
          if (typeof p == "function" && p !== r.entries)
            for (var b = p.call(r), f; !(f = b.next()).done; )
              er(f.value) && Cr(f.value, e);
        }
      }
    }
    function le(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === x))
          t = e.propTypes;
        else
          return;
        if (t) {
          var o = P(e);
          zr(t, r.props, "prop", o, r);
        } else if (e.PropTypes !== void 0 && !rr) {
          rr = !0;
          var p = P(e);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ce(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var o = e[t];
          if (o !== "children" && o !== "key") {
            N(r), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), N(null);
            break;
          }
        }
        r.ref !== null && (N(r), _("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Pr = {};
    function jr(r, e, t, o, p, b) {
      {
        var f = Vr(r);
        if (!f) {
          var l = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = se(p);
          S ? l += S : l += Tr();
          var E;
          r === null ? E = "null" : H(r) ? E = "array" : r !== void 0 && r.$$typeof === u ? (E = "<" + (P(r.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : E = typeof r, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, l);
        }
        var R = ie(r, e, t, p, b);
        if (R == null)
          return R;
        if (f) {
          var C = e.children;
          if (C !== void 0)
            if (o)
              if (H(C)) {
                for (var D = 0; D < C.length; D++)
                  Or(C[D], r);
                Object.freeze && Object.freeze(C);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(C, r);
        }
        if (W.call(e, "key")) {
          var F = P(r), w = Object.keys(e).filter(function(he) {
            return he !== "key";
          }), tr = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[F + tr]) {
            var pe = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tr, F, pe, F), Pr[F + tr] = !0;
          }
        }
        return r === i ? ce(R) : le(R), R;
      }
    }
    function fe(r, e, t) {
      return jr(r, e, t, !0);
    }
    function de(r, e, t) {
      return jr(r, e, t, !1);
    }
    var ve = de, me = fe;
    M.Fragment = i, M.jsx = ve, M.jsxs = me;
  }()), M;
}
process.env.NODE_ENV === "production" ? nr.exports = Re() : nr.exports = _e();
var or = nr.exports;
const $ = or.Fragment, s = or.jsx, T = or.jsxs, Se = ({
  className: n = "",
  children: u,
  type: a = "button",
  reference: i = null,
  ...d
}) => /* @__PURE__ */ s("button", { ref: i, ...d, type: a, className: `reform-button ${n}`, children: u }), K = ({ htmlFor: n, className: u = "", children: a, ...i }) => /* @__PURE__ */ s("label", { ...i, htmlFor: n, className: `reform-label ${u}`, children: a }), Oe = ({
  className: n = "",
  onSubmit: u = () => !0,
  onChange: a,
  defaultValues: i,
  disabled: d = !1,
  resolver: c,
  ...v
}) => {
  const [h, m] = ar(""), g = ge({
    resolver: c,
    defaultValues: i || {},
    reValidateMode: "onChange",
    disabled: d
  }), y = async (O) => {
    m("loading"), await u(O, g.setError) && g.reset(i), m("");
  }, x = () => {
    const O = { ...g.watch() };
    a && a(O, g.setError);
  };
  return /* @__PURE__ */ s(be, { ...g, children: /* @__PURE__ */ s(
    "form",
    {
      className: `reform-form ${h ? "reform-loading" : ""} ${n}`,
      onSubmit: g.handleSubmit(y),
      onChange: x,
      ...v
    }
  ) });
}, we = ({ className: n, name: u, label: a, type: i = "text", ...d }) => {
  var h;
  const {
    register: c,
    formState: { errors: v }
  } = j() || {};
  return /* @__PURE__ */ T($, { children: [
    a && /* @__PURE__ */ s(K, { htmlFor: u, children: a }),
    /* @__PURE__ */ s(
      "input",
      {
        ...d,
        type: i,
        className: `reform-element ${n}`,
        ...u ? c(u) : {}
      }
    ),
    u && v[u] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": u, children: String((h = v[u]) == null ? void 0 : h.message) })
  ] });
}, Te = ({ children: n, className: u, label: a, disabled: i, ...d }) => {
  const c = ye(null), { formState: v } = j(), [h, m] = ar([]);
  return Ee(() => {
    var g;
    c.current && Object.keys(v.errors).length && m([
      ...new Set(
        Array.from((g = c.current) == null ? void 0 : g.querySelectorAll(".reform-item-error")).map((y) => y.innerHTML)
      )
    ]);
  }, [c.current, v]), /* @__PURE__ */ T("div", { children: [
    a && /* @__PURE__ */ s(K, { children: a }),
    /* @__PURE__ */ s(
      "div",
      {
        ref: c,
        ...d,
        className: `reform-input-group group ${u} ${i ? "disabled" : ""}`,
        children: n
      }
    ),
    h == null ? void 0 : h.map((g, y) => /* @__PURE__ */ s("p", { className: "reform-item-error", children: g }, y))
  ] });
}, Pe = ({
  className: n,
  label: u,
  show: a = /* @__PURE__ */ s("i", { className: "reform-password-show" }),
  hide: i = /* @__PURE__ */ s("i", { className: "reform-password-hide" }),
  ...d
}) => {
  const [c, v] = ar("password"), h = () => {
    v(c === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ T(Te, { label: u, className: "reform-password", disabled: d.disabled, children: [
    /* @__PURE__ */ s(we, { ...d, className: n, type: c }),
    /* @__PURE__ */ s("span", { className: "mr-2", onClick: h, children: c === "password" ? a : i })
  ] });
}, je = ({
  id: n = `reform-checkbox-${Math.random()}`,
  className: u = "",
  name: a,
  label: i,
  type: d = "checkbox",
  value: c = "true",
  ...v
}) => {
  var g;
  const {
    register: h,
    formState: { errors: m }
  } = j() || {};
  return /* @__PURE__ */ T($, { children: [
    /* @__PURE__ */ T("div", { className: `reform-checkbox ${u}`, children: [
      /* @__PURE__ */ s("input", { ...v, id: n, type: d, value: c, ...a ? h(a) : {} }),
      i && /* @__PURE__ */ s("label", { htmlFor: n, children: i })
    ] }),
    a && m[a] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": a, children: String((g = m[a]) == null ? void 0 : g.message) })
  ] });
}, ke = ({
  id: n = `reform-radio-${Math.random()}`,
  className: u = "",
  name: a,
  label: i,
  type: d = "radio",
  value: c = "true",
  ...v
}) => {
  var g;
  const {
    register: h,
    formState: { errors: m }
  } = j() || {};
  return /* @__PURE__ */ T($, { children: [
    /* @__PURE__ */ T("div", { className: `reform-radio ${u}`, children: [
      /* @__PURE__ */ s("input", { ...v, id: n, type: d, value: c, ...a ? h(a) : {} }),
      i && /* @__PURE__ */ s("label", { htmlFor: n, children: i })
    ] }),
    a && m[a] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": a, children: String((g = m[a]) == null ? void 0 : g.message) })
  ] });
}, Fe = ({
  children: n,
  className: u = "reform-submit-animation",
  disabled: a,
  ...i
}) => /* @__PURE__ */ s(Se, { disabled: a, ...i, className: `reform-submit ${u}`, type: "submit", children: n }), $e = ({
  id: n = `reform-switch-${Math.random()}`,
  className: u = "",
  name: a,
  label: i,
  type: d = "checkbox",
  on: c,
  off: v,
  ...h
}) => {
  var y;
  const {
    register: m,
    formState: { errors: g }
  } = j() || {};
  return /* @__PURE__ */ T($, { children: [
    /* @__PURE__ */ T("div", { className: `reform-switch ${u}`, children: [
      /* @__PURE__ */ T("div", { children: [
        v && /* @__PURE__ */ s("label", { htmlFor: n, className: "reform-label", children: v }),
        /* @__PURE__ */ s("input", { ...h, id: n, type: d, ...a ? m(a) : {} }),
        c && /* @__PURE__ */ s("label", { htmlFor: n, className: "reform-label", children: c })
      ] }),
      i && /* @__PURE__ */ s("label", { htmlFor: n, children: i })
    ] }),
    a && g[a] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": a, children: String((y = g[a]) == null ? void 0 : y.message) })
  ] });
}, Ae = ({ name: n, resize: u = !0, label: a, className: i, ...d }) => {
  var h;
  const {
    register: c,
    formState: { errors: v }
  } = j() || {};
  return /* @__PURE__ */ T($, { children: [
    a && /* @__PURE__ */ s(K, { htmlFor: n, children: a }),
    /* @__PURE__ */ s(
      "textarea",
      {
        className: `reform-element reform-textarea ${!u && "resize-none"} ${i}`,
        ...n ? c(n) : {},
        ...d
      }
    ),
    n && v[n] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": n, children: String((h = v[n]) == null ? void 0 : h.message) })
  ] });
}, Ne = ({ name: n, placeholder: u, label: a, options: i, className: d, ...c }) => {
  var m;
  const {
    register: v,
    formState: { errors: h }
  } = j() || { formState: {} };
  return /* @__PURE__ */ T($, { children: [
    a && /* @__PURE__ */ s(K, { htmlFor: n, children: a }),
    /* @__PURE__ */ T(
      "select",
      {
        className: `reform-element reform-select ${d}`,
        ...n ? v(n) : {},
        ...c,
        children: [
          u && /* @__PURE__ */ s("option", { value: "", children: u }, "placeholder"),
          i.map(({ children: g, ...y }, x) => /* @__PURE__ */ s("option", { ...y, children: g }, x))
        ]
      }
    ),
    n && h[n] && /* @__PURE__ */ s("p", { className: "reform-item-error", "data-name": n, children: String((m = h[n]) == null ? void 0 : m.message) })
  ] });
}, De = ({ name: n = "root", className: u, ...a }) => {
  const {
    formState: { errors: i }
  } = j() || {}, d = n === "root" && typeof i[n] == "object" ? Object.values(i[n]) : i[n];
  return console.log(i), /* @__PURE__ */ s("div", { ...a, className: `reform-errorarea ${u}`, children: d && /* @__PURE__ */ s("p", { className: "reform-item-error", children: Array.isArray(d) ? /* @__PURE__ */ s("ul", { children: d.map((c, v) => /* @__PURE__ */ s("li", { children: String(c == null ? void 0 : c.message) }, v)) }) : /* @__PURE__ */ T($, { children: [
    String(d.message),
    Array.isArray(d.details) && /* @__PURE__ */ s("ul", { children: d.details.map((c, v) => /* @__PURE__ */ s("li", { children: c }, v)) })
  ] }) }) });
};
export {
  Se as Button,
  je as Checkbox,
  De as ErrorArea,
  Oe as Form,
  we as Input,
  Te as InputGroup,
  K as Label,
  Pe as PasswordInput,
  ke as Radio,
  Ne as Select,
  Fe as Submit,
  $e as Switch,
  Ae as Textarea,
  Ye as useFormContext
};
