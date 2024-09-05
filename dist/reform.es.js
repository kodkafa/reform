import X, { useState as qt, useRef as fs, useEffect as cs } from "react";
var rt = (t) => t.type === "checkbox", ze = (t) => t instanceof Date, re = (t) => t == null;
const $r = (t) => typeof t == "object";
var Z = (t) => !re(t) && !Array.isArray(t) && $r(t) && !ze(t), ds = (t) => Z(t) && t.target ? rt(t.target) ? t.target.checked : t.target.value : t, hs = (t) => t.substring(0, t.search(/\.\d+(\.|$)/)) || t, ys = (t, r) => t.has(hs(r)), ps = (t) => {
  const r = t.constructor && t.constructor.prototype;
  return Z(r) && r.hasOwnProperty("isPrototypeOf");
}, zt = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function de(t) {
  let r;
  const e = Array.isArray(t);
  if (t instanceof Date)
    r = new Date(t);
  else if (t instanceof Set)
    r = new Set(t);
  else if (!(zt && (t instanceof Blob || t instanceof FileList)) && (e || Z(t)))
    if (r = e ? [] : {}, !e && !ps(t))
      r = t;
    else
      for (const s in t)
        t.hasOwnProperty(s) && (r[s] = de(t[s]));
  else
    return t;
  return r;
}
var wt = (t) => Array.isArray(t) ? t.filter(Boolean) : [], Y = (t) => t === void 0, _ = (t, r, e) => {
  if (!r || !Z(t))
    return e;
  const s = wt(r.split(/[,[\].]+?/)).reduce((n, i) => re(n) ? n : n[i], t);
  return Y(s) || s === t ? Y(t[r]) ? e : t[r] : s;
}, pe = (t) => typeof t == "boolean", Ht = (t) => /^\w*$/.test(t), Rr = (t) => wt(t.replace(/["|']|\]/g, "").split(/\.|\[/)), I = (t, r, e) => {
  let s = -1;
  const n = Ht(r) ? [r] : Rr(r), i = n.length, u = i - 1;
  for (; ++s < i; ) {
    const l = n[s];
    let d = e;
    if (s !== u) {
      const h = t[l];
      d = Z(h) || Array.isArray(h) ? h : isNaN(+n[s + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    t[l] = d, t = t[l];
  }
  return t;
};
const lr = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, he = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, be = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Fr = X.createContext(null), Re = () => X.useContext(Fr), vs = (t) => {
  const { children: r, ...e } = t;
  return X.createElement(Fr.Provider, { value: e }, r);
};
var ms = (t, r, e, s = !0) => {
  const n = {
    defaultValues: r._defaultValues
  };
  for (const i in t)
    Object.defineProperty(n, i, {
      get: () => {
        const u = i;
        return r._proxyFormState[u] !== he.all && (r._proxyFormState[u] = !s || he.all), e && (e[u] = !0), t[u];
      }
    });
  return n;
}, oe = (t) => Z(t) && !Object.keys(t).length, gs = (t, r, e, s) => {
  e(t);
  const { name: n, ...i } = t;
  return oe(i) || Object.keys(i).length >= Object.keys(r).length || Object.keys(i).find((u) => r[u] === (!s || he.all));
}, yt = (t) => Array.isArray(t) ? t : [t];
function bs(t) {
  const r = X.useRef(t);
  r.current = t, X.useEffect(() => {
    const e = !t.disabled && r.current.subject && r.current.subject.subscribe({
      next: r.current.next
    });
    return () => {
      e && e.unsubscribe();
    };
  }, [t.disabled]);
}
var ve = (t) => typeof t == "string", xs = (t, r, e, s, n) => ve(t) ? (s && r.watch.add(t), _(e, t, n)) : Array.isArray(t) ? t.map((i) => (s && r.watch.add(i), _(e, i))) : (s && (r.watchAll = !0), e), Cr = (t, r, e, s, n) => r ? {
  ...e[t],
  types: {
    ...e[t] && e[t].types ? e[t].types : {},
    [s]: n || !0
  }
} : {}, fr = (t) => ({
  isOnSubmit: !t || t === he.onSubmit,
  isOnBlur: t === he.onBlur,
  isOnChange: t === he.onChange,
  isOnAll: t === he.all,
  isOnTouch: t === he.onTouched
}), cr = (t, r, e) => !e && (r.watchAll || r.watch.has(t) || [...r.watch].some((s) => t.startsWith(s) && /^\.\w+/.test(t.slice(s.length))));
const tt = (t, r, e, s) => {
  for (const n of e || Object.keys(t)) {
    const i = _(t, n);
    if (i) {
      const { _f: u, ...l } = i;
      if (u) {
        if (u.refs && u.refs[0] && r(u.refs[0], n) && !s)
          return !0;
        if (u.ref && r(u.ref, u.name) && !s)
          return !0;
        if (tt(l, r))
          break;
      } else if (Z(l) && tt(l, r))
        break;
    }
  }
};
var _s = (t, r, e) => {
  const s = yt(_(t, e));
  return I(s, "root", r[e]), I(t, e, s), t;
}, Zt = (t) => t.type === "file", Ee = (t) => typeof t == "function", mt = (t) => {
  if (!zt)
    return !1;
  const r = t ? t.ownerDocument : 0;
  return t instanceof (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement);
}, pt = (t) => ve(t), Gt = (t) => t.type === "radio", gt = (t) => t instanceof RegExp;
const dr = {
  value: !1,
  isValid: !1
}, hr = { value: !0, isValid: !0 };
var Dr = (t) => {
  if (Array.isArray(t)) {
    if (t.length > 1) {
      const r = t.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: r, isValid: !!r.length };
    }
    return t[0].checked && !t[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      t[0].attributes && !Y(t[0].attributes.value) ? Y(t[0].value) || t[0].value === "" ? hr : { value: t[0].value, isValid: !0 } : hr
    ) : dr;
  }
  return dr;
};
const yr = {
  isValid: !1,
  value: null
};
var Vr = (t) => Array.isArray(t) ? t.reduce((r, e) => e && e.checked && !e.disabled ? {
  isValid: !0,
  value: e.value
} : r, yr) : yr;
function pr(t, r, e = "validate") {
  if (pt(t) || Array.isArray(t) && t.every(pt) || pe(t) && !t)
    return {
      type: e,
      message: pt(t) ? t : "",
      ref: r
    };
}
var Ye = (t) => Z(t) && !gt(t) ? t : {
  value: t,
  message: ""
}, vr = async (t, r, e, s, n) => {
  const { ref: i, refs: u, required: l, maxLength: d, minLength: h, min: p, max: v, pattern: T, validate: V, name: j, valueAsNumber: K, mount: q, disabled: z } = t._f, w = _(r, j);
  if (!q || z)
    return {};
  const se = u ? u[0] : i, Q = (S) => {
    s && se.reportValidity && (se.setCustomValidity(pe(S) ? "" : S || ""), se.reportValidity());
  }, M = {}, fe = Gt(i), me = rt(i), ye = fe || me, ne = (K || Zt(i)) && Y(i.value) && Y(w) || mt(i) && i.value === "" || w === "" || Array.isArray(w) && !w.length, J = Cr.bind(null, j, e, M), P = (S, k, D, U = be.maxLength, ie = be.minLength) => {
    const ee = S ? k : D;
    M[j] = {
      type: S ? U : ie,
      message: ee,
      ref: i,
      ...J(S ? U : ie, ee)
    };
  };
  if (n ? !Array.isArray(w) || !w.length : l && (!ye && (ne || re(w)) || pe(w) && !w || me && !Dr(u).isValid || fe && !Vr(u).isValid)) {
    const { value: S, message: k } = pt(l) ? { value: !!l, message: l } : Ye(l);
    if (S && (M[j] = {
      type: be.required,
      message: k,
      ref: se,
      ...J(be.required, k)
    }, !e))
      return Q(k), M;
  }
  if (!ne && (!re(p) || !re(v))) {
    let S, k;
    const D = Ye(v), U = Ye(p);
    if (!re(w) && !isNaN(w)) {
      const ie = i.valueAsNumber || w && +w;
      re(D.value) || (S = ie > D.value), re(U.value) || (k = ie < U.value);
    } else {
      const ie = i.valueAsDate || new Date(w), ee = (Te) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + Te), Se = i.type == "time", Oe = i.type == "week";
      ve(D.value) && w && (S = Se ? ee(w) > ee(D.value) : Oe ? w > D.value : ie > new Date(D.value)), ve(U.value) && w && (k = Se ? ee(w) < ee(U.value) : Oe ? w < U.value : ie < new Date(U.value));
    }
    if ((S || k) && (P(!!S, D.message, U.message, be.max, be.min), !e))
      return Q(M[j].message), M;
  }
  if ((d || h) && !ne && (ve(w) || n && Array.isArray(w))) {
    const S = Ye(d), k = Ye(h), D = !re(S.value) && w.length > +S.value, U = !re(k.value) && w.length < +k.value;
    if ((D || U) && (P(D, S.message, k.message), !e))
      return Q(M[j].message), M;
  }
  if (T && !ne && ve(w)) {
    const { value: S, message: k } = Ye(T);
    if (gt(S) && !w.match(S) && (M[j] = {
      type: be.pattern,
      message: k,
      ref: i,
      ...J(be.pattern, k)
    }, !e))
      return Q(k), M;
  }
  if (V) {
    if (Ee(V)) {
      const S = await V(w, r), k = pr(S, se);
      if (k && (M[j] = {
        ...k,
        ...J(be.validate, k.message)
      }, !e))
        return Q(k.message), M;
    } else if (Z(V)) {
      let S = {};
      for (const k in V) {
        if (!oe(S) && !e)
          break;
        const D = pr(await V[k](w, r), se, k);
        D && (S = {
          ...D,
          ...J(k, D.message)
        }, Q(D.message), e && (M[j] = S));
      }
      if (!oe(S) && (M[j] = {
        ref: se,
        ...S
      }, !e))
        return M;
    }
  }
  return Q(!0), M;
};
function Es(t, r) {
  const e = r.slice(0, -1).length;
  let s = 0;
  for (; s < e; )
    t = Y(t) ? s++ : t[r[s++]];
  return t;
}
function ws(t) {
  for (const r in t)
    if (t.hasOwnProperty(r) && !Y(t[r]))
      return !1;
  return !0;
}
function G(t, r) {
  const e = Array.isArray(r) ? r : Ht(r) ? [r] : Rr(r), s = e.length === 1 ? t : Es(t, e), n = e.length - 1, i = e[n];
  return s && delete s[i], n !== 0 && (Z(s) && oe(s) || Array.isArray(s) && ws(s)) && G(t, e.slice(0, -1)), t;
}
var Nt = () => {
  let t = [];
  return {
    get observers() {
      return t;
    },
    next: (n) => {
      for (const i of t)
        i.next && i.next(n);
    },
    subscribe: (n) => (t.push(n), {
      unsubscribe: () => {
        t = t.filter((i) => i !== n);
      }
    }),
    unsubscribe: () => {
      t = [];
    }
  };
}, bt = (t) => re(t) || !$r(t);
function Ae(t, r) {
  if (bt(t) || bt(r))
    return t === r;
  if (ze(t) && ze(r))
    return t.getTime() === r.getTime();
  const e = Object.keys(t), s = Object.keys(r);
  if (e.length !== s.length)
    return !1;
  for (const n of e) {
    const i = t[n];
    if (!s.includes(n))
      return !1;
    if (n !== "ref") {
      const u = r[n];
      if (ze(i) && ze(u) || Z(i) && Z(u) || Array.isArray(i) && Array.isArray(u) ? !Ae(i, u) : i !== u)
        return !1;
    }
  }
  return !0;
}
var jr = (t) => t.type === "select-multiple", Ss = (t) => Gt(t) || rt(t), Pt = (t) => mt(t) && t.isConnected, Nr = (t) => {
  for (const r in t)
    if (Ee(t[r]))
      return !0;
  return !1;
};
function xt(t, r = {}) {
  const e = Array.isArray(t);
  if (Z(t) || e)
    for (const s in t)
      Array.isArray(t[s]) || Z(t[s]) && !Nr(t[s]) ? (r[s] = Array.isArray(t[s]) ? [] : {}, xt(t[s], r[s])) : re(t[s]) || (r[s] = !0);
  return r;
}
function Pr(t, r, e) {
  const s = Array.isArray(t);
  if (Z(t) || s)
    for (const n in t)
      Array.isArray(t[n]) || Z(t[n]) && !Nr(t[n]) ? Y(r) || bt(e[n]) ? e[n] = Array.isArray(t[n]) ? xt(t[n], []) : { ...xt(t[n]) } : Pr(t[n], re(r) ? {} : r[n], e[n]) : e[n] = !Ae(t[n], r[n]);
  return e;
}
var dt = (t, r) => Pr(t, r, xt(r)), Ir = (t, { valueAsNumber: r, valueAsDate: e, setValueAs: s }) => Y(t) ? t : r ? t === "" ? NaN : t && +t : e && ve(t) ? new Date(t) : s ? s(t) : t;
function It(t) {
  const r = t.ref;
  if (!(t.refs ? t.refs.every((e) => e.disabled) : r.disabled))
    return Zt(r) ? r.files : Gt(r) ? Vr(t.refs).value : jr(r) ? [...r.selectedOptions].map(({ value: e }) => e) : rt(r) ? Dr(t.refs).value : Ir(Y(r.value) ? t.ref.value : r.value, t);
}
var Os = (t, r, e, s) => {
  const n = {};
  for (const i of t) {
    const u = _(r, i);
    u && I(n, i, u._f);
  }
  return {
    criteriaMode: e,
    names: [...t],
    fields: n,
    shouldUseNativeValidation: s
  };
}, Xe = (t) => Y(t) ? t : gt(t) ? t.source : Z(t) ? gt(t.value) ? t.value.source : t.value : t;
const mr = "AsyncFunction";
var Ts = (t) => (!t || !t.validate) && !!(Ee(t.validate) && t.validate.constructor.name === mr || Z(t.validate) && Object.values(t.validate).find((r) => r.constructor.name === mr)), ks = (t) => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate);
function gr(t, r, e) {
  const s = _(t, e);
  if (s || Ht(e))
    return {
      error: s,
      name: e
    };
  const n = e.split(".");
  for (; n.length; ) {
    const i = n.join("."), u = _(r, i), l = _(t, i);
    if (u && !Array.isArray(u) && e !== i)
      return { name: e };
    if (l && l.type)
      return {
        name: i,
        error: l
      };
    n.pop();
  }
  return {
    name: e
  };
}
var As = (t, r, e, s, n) => n.isOnAll ? !1 : !e && n.isOnTouch ? !(r || t) : (e ? s.isOnBlur : n.isOnBlur) ? !t : (e ? s.isOnChange : n.isOnChange) ? t : !0, $s = (t, r) => !wt(_(t, r)).length && G(t, r);
const Rs = {
  mode: he.onSubmit,
  reValidateMode: he.onChange,
  shouldFocusError: !0
};
function Fs(t = {}) {
  let r = {
    ...Rs,
    ...t
  }, e = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Ee(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: r.errors || {},
    disabled: r.disabled || !1
  }, s = {}, n = Z(r.defaultValues) || Z(r.values) ? de(r.defaultValues || r.values) || {} : {}, i = r.shouldUnregister ? {} : de(n), u = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, d, h = 0;
  const p = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: Nt(),
    array: Nt(),
    state: Nt()
  }, T = fr(r.mode), V = fr(r.reValidateMode), j = r.criteriaMode === he.all, K = (o) => (f) => {
    clearTimeout(h), h = setTimeout(o, f);
  }, q = async (o) => {
    if (p.isValid || o) {
      const f = r.resolver ? oe((await ye()).errors) : await J(s, !0);
      f !== e.isValid && v.state.next({
        isValid: f
      });
    }
  }, z = (o, f) => {
    (p.isValidating || p.validatingFields) && ((o || Array.from(l.mount)).forEach((c) => {
      c && (f ? I(e.validatingFields, c, f) : G(e.validatingFields, c));
    }), v.state.next({
      validatingFields: e.validatingFields,
      isValidating: !oe(e.validatingFields)
    }));
  }, w = (o, f = [], c, x, g = !0, m = !0) => {
    if (x && c) {
      if (u.action = !0, m && Array.isArray(_(s, o))) {
        const E = c(_(s, o), x.argA, x.argB);
        g && I(s, o, E);
      }
      if (m && Array.isArray(_(e.errors, o))) {
        const E = c(_(e.errors, o), x.argA, x.argB);
        g && I(e.errors, o, E), $s(e.errors, o);
      }
      if (p.touchedFields && m && Array.isArray(_(e.touchedFields, o))) {
        const E = c(_(e.touchedFields, o), x.argA, x.argB);
        g && I(e.touchedFields, o, E);
      }
      p.dirtyFields && (e.dirtyFields = dt(n, i)), v.state.next({
        name: o,
        isDirty: S(o, f),
        dirtyFields: e.dirtyFields,
        errors: e.errors,
        isValid: e.isValid
      });
    } else
      I(i, o, f);
  }, se = (o, f) => {
    I(e.errors, o, f), v.state.next({
      errors: e.errors
    });
  }, Q = (o) => {
    e.errors = o, v.state.next({
      errors: e.errors,
      isValid: !1
    });
  }, M = (o, f, c, x) => {
    const g = _(s, o);
    if (g) {
      const m = _(i, o, Y(c) ? _(n, o) : c);
      Y(m) || x && x.defaultChecked || f ? I(i, o, f ? m : It(g._f)) : U(o, m), u.mount && q();
    }
  }, fe = (o, f, c, x, g) => {
    let m = !1, E = !1;
    const F = {
      name: o
    }, B = !!(_(s, o) && _(s, o)._f && _(s, o)._f.disabled);
    if (!c || x) {
      p.isDirty && (E = e.isDirty, e.isDirty = F.isDirty = S(), m = E !== F.isDirty);
      const L = B || Ae(_(n, o), f);
      E = !!(!B && _(e.dirtyFields, o)), L || B ? G(e.dirtyFields, o) : I(e.dirtyFields, o, !0), F.dirtyFields = e.dirtyFields, m = m || p.dirtyFields && E !== !L;
    }
    if (c) {
      const L = _(e.touchedFields, o);
      L || (I(e.touchedFields, o, c), F.touchedFields = e.touchedFields, m = m || p.touchedFields && L !== c);
    }
    return m && g && v.state.next(F), m ? F : {};
  }, me = (o, f, c, x) => {
    const g = _(e.errors, o), m = p.isValid && pe(f) && e.isValid !== f;
    if (t.delayError && c ? (d = K(() => se(o, c)), d(t.delayError)) : (clearTimeout(h), d = null, c ? I(e.errors, o, c) : G(e.errors, o)), (c ? !Ae(g, c) : g) || !oe(x) || m) {
      const E = {
        ...x,
        ...m && pe(f) ? { isValid: f } : {},
        errors: e.errors,
        name: o
      };
      e = {
        ...e,
        ...E
      }, v.state.next(E);
    }
  }, ye = async (o) => {
    z(o, !0);
    const f = await r.resolver(i, r.context, Os(o || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation));
    return z(o), f;
  }, ne = async (o) => {
    const { errors: f } = await ye(o);
    if (o)
      for (const c of o) {
        const x = _(f, c);
        x ? I(e.errors, c, x) : G(e.errors, c);
      }
    else
      e.errors = f;
    return f;
  }, J = async (o, f, c = {
    valid: !0
  }) => {
    for (const x in o) {
      const g = o[x];
      if (g) {
        const { _f: m, ...E } = g;
        if (m) {
          const F = l.array.has(m.name), B = g._f && Ts(g._f);
          B && p.validatingFields && z([x], !0);
          const L = await vr(g, i, j, r.shouldUseNativeValidation && !f, F);
          if (B && p.validatingFields && z([x]), L[m.name] && (c.valid = !1, f))
            break;
          !f && (_(L, m.name) ? F ? _s(e.errors, L, m.name) : I(e.errors, m.name, L[m.name]) : G(e.errors, m.name));
        }
        !oe(E) && await J(E, f, c);
      }
    }
    return c.valid;
  }, P = () => {
    for (const o of l.unMount) {
      const f = _(s, o);
      f && (f._f.refs ? f._f.refs.every((c) => !Pt(c)) : !Pt(f._f.ref)) && Fe(o);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, S = (o, f) => (o && f && I(i, o, f), !Ae(Ge(), n)), k = (o, f, c) => xs(o, l, {
    ...u.mount ? i : Y(f) ? n : ve(o) ? { [o]: f } : f
  }, c, f), D = (o) => wt(_(u.mount ? i : n, o, t.shouldUnregister ? _(n, o, []) : [])), U = (o, f, c = {}) => {
    const x = _(s, o);
    let g = f;
    if (x) {
      const m = x._f;
      m && (!m.disabled && I(i, o, Ir(f, m)), g = mt(m.ref) && re(f) ? "" : f, jr(m.ref) ? [...m.ref.options].forEach((E) => E.selected = g.includes(E.value)) : m.refs ? rt(m.ref) ? m.refs.length > 1 ? m.refs.forEach((E) => (!E.defaultChecked || !E.disabled) && (E.checked = Array.isArray(g) ? !!g.find((F) => F === E.value) : g === E.value)) : m.refs[0] && (m.refs[0].checked = !!g) : m.refs.forEach((E) => E.checked = E.value === g) : Zt(m.ref) ? m.ref.value = "" : (m.ref.value = g, m.ref.type || v.values.next({
        name: o,
        values: { ...i }
      })));
    }
    (c.shouldDirty || c.shouldTouch) && fe(o, g, c.shouldTouch, c.shouldDirty, !0), c.shouldValidate && Te(o);
  }, ie = (o, f, c) => {
    for (const x in f) {
      const g = f[x], m = `${o}.${x}`, E = _(s, m);
      (l.array.has(o) || !bt(g) || E && !E._f) && !ze(g) ? ie(m, g, c) : U(m, g, c);
    }
  }, ee = (o, f, c = {}) => {
    const x = _(s, o), g = l.array.has(o), m = de(f);
    I(i, o, m), g ? (v.array.next({
      name: o,
      values: { ...i }
    }), (p.isDirty || p.dirtyFields) && c.shouldDirty && v.state.next({
      name: o,
      dirtyFields: dt(n, i),
      isDirty: S(o, m)
    })) : x && !x._f && !re(m) ? ie(o, m, c) : U(o, m, c), cr(o, l) && v.state.next({ ...e }), v.values.next({
      name: u.mount ? o : void 0,
      values: { ...i }
    });
  }, Se = async (o) => {
    u.mount = !0;
    const f = o.target;
    let c = f.name, x = !0;
    const g = _(s, c), m = () => f.type ? It(g._f) : ds(o), E = (F) => {
      x = Number.isNaN(F) || Ae(F, _(i, c, F));
    };
    if (g) {
      let F, B;
      const L = m(), ge = o.type === lr.BLUR || o.type === lr.FOCUS_OUT, lt = !ks(g._f) && !r.resolver && !_(e.errors, c) && !g._f.deps || As(ge, _(e.touchedFields, c), e.isSubmitted, V, T), Ue = cr(c, l, ge);
      I(i, c, L), ge ? (g._f.onBlur && g._f.onBlur(o), d && d(0)) : g._f.onChange && g._f.onChange(o);
      const Ce = fe(c, L, ge, !1), Rt = !oe(Ce) || Ue;
      if (!ge && v.values.next({
        name: c,
        type: o.type,
        values: { ...i }
      }), lt)
        return p.isValid && (t.mode === "onBlur" ? ge && q() : q()), Rt && v.state.next({ name: c, ...Ue ? {} : Ce });
      if (!ge && Ue && v.state.next({ ...e }), r.resolver) {
        const { errors: ft } = await ye([c]);
        if (E(L), x) {
          const Ft = gr(e.errors, s, c), ct = gr(ft, s, Ft.name || c);
          F = ct.error, c = ct.name, B = oe(ft);
        }
      } else
        z([c], !0), F = (await vr(g, i, j, r.shouldUseNativeValidation))[c], z([c]), E(L), x && (F ? B = !1 : p.isValid && (B = await J(s, !0)));
      x && (g._f.deps && Te(g._f.deps), me(c, B, F, Ce));
    }
  }, Oe = (o, f) => {
    if (_(e.errors, f) && o.focus)
      return o.focus(), 1;
  }, Te = async (o, f = {}) => {
    let c, x;
    const g = yt(o);
    if (r.resolver) {
      const m = await ne(Y(o) ? o : g);
      c = oe(m), x = o ? !g.some((E) => _(m, E)) : c;
    } else
      o ? (x = (await Promise.all(g.map(async (m) => {
        const E = _(s, m);
        return await J(E && E._f ? { [m]: E } : E);
      }))).every(Boolean), !(!x && !e.isValid) && q()) : x = c = await J(s);
    return v.state.next({
      ...!ve(o) || p.isValid && c !== e.isValid ? {} : { name: o },
      ...r.resolver || !o ? { isValid: c } : {},
      errors: e.errors
    }), f.shouldFocus && !x && tt(s, Oe, o ? g : l.mount), x;
  }, Ge = (o) => {
    const f = {
      ...u.mount ? i : n
    };
    return Y(o) ? f : ve(o) ? _(f, o) : o.map((c) => _(f, c));
  }, Ke = (o, f) => ({
    invalid: !!_((f || e).errors, o),
    isDirty: !!_((f || e).dirtyFields, o),
    error: _((f || e).errors, o),
    isValidating: !!_(e.validatingFields, o),
    isTouched: !!_((f || e).touchedFields, o)
  }), st = (o) => {
    o && yt(o).forEach((f) => G(e.errors, f)), v.state.next({
      errors: o ? e.errors : {}
    });
  }, nt = (o, f, c) => {
    const x = (_(s, o, { _f: {} })._f || {}).ref, g = _(e.errors, o) || {}, { ref: m, message: E, type: F, ...B } = g;
    I(e.errors, o, {
      ...B,
      ...f,
      ref: x
    }), v.state.next({
      name: o,
      errors: e.errors,
      isValid: !1
    }), c && c.shouldFocus && x && x.focus && x.focus();
  }, At = (o, f) => Ee(o) ? v.values.subscribe({
    next: (c) => o(k(void 0, f), c)
  }) : k(o, f, !0), Fe = (o, f = {}) => {
    for (const c of o ? yt(o) : l.mount)
      l.mount.delete(c), l.array.delete(c), f.keepValue || (G(s, c), G(i, c)), !f.keepError && G(e.errors, c), !f.keepDirty && G(e.dirtyFields, c), !f.keepTouched && G(e.touchedFields, c), !f.keepIsValidating && G(e.validatingFields, c), !r.shouldUnregister && !f.keepDefaultValue && G(n, c);
    v.values.next({
      values: { ...i }
    }), v.state.next({
      ...e,
      ...f.keepDirty ? { isDirty: S() } : {}
    }), !f.keepIsValid && q();
  }, Pe = ({ disabled: o, name: f, field: c, fields: x, value: g }) => {
    if (pe(o) && u.mount || o) {
      const m = o ? void 0 : Y(g) ? It(c ? c._f : _(x, f)._f) : g;
      I(i, f, m), fe(f, m, !1, !1, !0);
    }
  }, ke = (o, f = {}) => {
    let c = _(s, o);
    const x = pe(f.disabled) || pe(t.disabled);
    return I(s, o, {
      ...c || {},
      _f: {
        ...c && c._f ? c._f : { ref: { name: o } },
        name: o,
        mount: !0,
        ...f
      }
    }), l.mount.add(o), c ? Pe({
      field: c,
      disabled: pe(f.disabled) ? f.disabled : t.disabled,
      name: o,
      value: f.value
    }) : M(o, !0, f.value), {
      ...x ? { disabled: f.disabled || t.disabled } : {},
      ...r.progressive ? {
        required: !!f.required,
        min: Xe(f.min),
        max: Xe(f.max),
        minLength: Xe(f.minLength),
        maxLength: Xe(f.maxLength),
        pattern: Xe(f.pattern)
      } : {},
      name: o,
      onChange: Se,
      onBlur: Se,
      ref: (g) => {
        if (g) {
          ke(o, f), c = _(s, o);
          const m = Y(g.value) && g.querySelectorAll && g.querySelectorAll("input,select,textarea")[0] || g, E = Ss(m), F = c._f.refs || [];
          if (E ? F.find((B) => B === m) : m === c._f.ref)
            return;
          I(s, o, {
            _f: {
              ...c._f,
              ...E ? {
                refs: [
                  ...F.filter(Pt),
                  m,
                  ...Array.isArray(_(n, o)) ? [{}] : []
                ],
                ref: { type: m.type, name: o }
              } : { ref: m }
            }
          }), M(o, !1, void 0, m);
        } else
          c = _(s, o, {}), c._f && (c._f.mount = !1), (r.shouldUnregister || f.shouldUnregister) && !(ys(l.array, o) && u.action) && l.unMount.add(o);
      }
    };
  }, Ie = () => r.shouldFocusError && tt(s, Oe, l.mount), Me = (o) => {
    pe(o) && (v.state.next({ disabled: o }), tt(s, (f, c) => {
      const x = _(s, c);
      x && (f.disabled = x._f.disabled || o, Array.isArray(x._f.refs) && x._f.refs.forEach((g) => {
        g.disabled = x._f.disabled || o;
      }));
    }, 0, !1));
  }, it = (o, f) => async (c) => {
    let x;
    c && (c.preventDefault && c.preventDefault(), c.persist && c.persist());
    let g = de(i);
    if (v.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: m, values: E } = await ye();
      e.errors = m, g = E;
    } else
      await J(s);
    if (G(e.errors, "root"), oe(e.errors)) {
      v.state.next({
        errors: {}
      });
      try {
        await o(g, c);
      } catch (m) {
        x = m;
      }
    } else
      f && await f({ ...e.errors }, c), Ie(), setTimeout(Ie);
    if (v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: oe(e.errors) && !x,
      submitCount: e.submitCount + 1,
      errors: e.errors
    }), x)
      throw x;
  }, at = (o, f = {}) => {
    _(s, o) && (Y(f.defaultValue) ? ee(o, de(_(n, o))) : (ee(o, f.defaultValue), I(n, o, de(f.defaultValue))), f.keepTouched || G(e.touchedFields, o), f.keepDirty || (G(e.dirtyFields, o), e.isDirty = f.defaultValue ? S(o, de(_(n, o))) : S()), f.keepError || (G(e.errors, o), p.isValid && q()), v.state.next({ ...e }));
  }, ot = (o, f = {}) => {
    const c = o ? de(o) : n, x = de(c), g = oe(o), m = g ? n : x;
    if (f.keepDefaultValues || (n = c), !f.keepValues) {
      if (f.keepDirtyValues)
        for (const E of l.mount)
          _(e.dirtyFields, E) ? I(m, E, _(i, E)) : ee(E, _(m, E));
      else {
        if (zt && Y(o))
          for (const E of l.mount) {
            const F = _(s, E);
            if (F && F._f) {
              const B = Array.isArray(F._f.refs) ? F._f.refs[0] : F._f.ref;
              if (mt(B)) {
                const L = B.closest("form");
                if (L) {
                  L.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      i = t.shouldUnregister ? f.keepDefaultValues ? de(n) : {} : de(m), v.array.next({
        values: { ...m }
      }), v.values.next({
        values: { ...m }
      });
    }
    l = {
      mount: f.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, u.mount = !p.isValid || !!f.keepIsValid || !!f.keepDirtyValues, u.watch = !!t.shouldUnregister, v.state.next({
      submitCount: f.keepSubmitCount ? e.submitCount : 0,
      isDirty: g ? !1 : f.keepDirty ? e.isDirty : !!(f.keepDefaultValues && !Ae(o, n)),
      isSubmitted: f.keepIsSubmitted ? e.isSubmitted : !1,
      dirtyFields: g ? {} : f.keepDirtyValues ? f.keepDefaultValues && i ? dt(n, i) : e.dirtyFields : f.keepDefaultValues && o ? dt(n, o) : f.keepDirty ? e.dirtyFields : {},
      touchedFields: f.keepTouched ? e.touchedFields : {},
      errors: f.keepErrors ? e.errors : {},
      isSubmitSuccessful: f.keepIsSubmitSuccessful ? e.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, ut = (o, f) => ot(Ee(o) ? o(i) : o, f);
  return {
    control: {
      register: ke,
      unregister: Fe,
      getFieldState: Ke,
      handleSubmit: it,
      setError: nt,
      _executeSchema: ye,
      _getWatch: k,
      _getDirty: S,
      _updateValid: q,
      _removeUnmounted: P,
      _updateFieldArray: w,
      _updateDisabledField: Pe,
      _getFieldArray: D,
      _reset: ot,
      _resetDefaultValues: () => Ee(r.defaultValues) && r.defaultValues().then((o) => {
        ut(o, r.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (o) => {
        e = {
          ...e,
          ...o
        };
      },
      _disableForm: Me,
      _subjects: v,
      _proxyFormState: p,
      _setErrors: Q,
      get _fields() {
        return s;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return u;
      },
      set _state(o) {
        u = o;
      },
      get _defaultValues() {
        return n;
      },
      get _names() {
        return l;
      },
      set _names(o) {
        l = o;
      },
      get _formState() {
        return e;
      },
      set _formState(o) {
        e = o;
      },
      get _options() {
        return r;
      },
      set _options(o) {
        r = {
          ...r,
          ...o
        };
      }
    },
    trigger: Te,
    register: ke,
    handleSubmit: it,
    watch: At,
    setValue: ee,
    getValues: Ge,
    reset: ut,
    resetField: at,
    clearErrors: st,
    unregister: Fe,
    setError: nt,
    setFocus: (o, f = {}) => {
      const c = _(s, o), x = c && c._f;
      if (x) {
        const g = x.refs ? x.refs[0] : x.ref;
        g.focus && (g.focus(), f.shouldSelect && g.select());
      }
    },
    getFieldState: Ke
  };
}
function Cs(t = {}) {
  const r = X.useRef(), e = X.useRef(), [s, n] = X.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Ee(t.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1,
    defaultValues: Ee(t.defaultValues) ? void 0 : t.defaultValues
  });
  r.current || (r.current = {
    ...Fs(t),
    formState: s
  });
  const i = r.current.control;
  return i._options = t, bs({
    subject: i._subjects.state,
    next: (u) => {
      gs(u, i._proxyFormState, i._updateFormState, !0) && n({ ...i._formState });
    }
  }), X.useEffect(() => i._disableForm(t.disabled), [i, t.disabled]), X.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const u = i._getDirty();
      u !== s.isDirty && i._subjects.state.next({
        isDirty: u
      });
    }
  }, [i, s.isDirty]), X.useEffect(() => {
    t.values && !Ae(t.values, e.current) ? (i._reset(t.values, i._options.resetOptions), e.current = t.values, n((u) => ({ ...u }))) : i._resetDefaultValues();
  }, [t.values, i]), X.useEffect(() => {
    t.errors && i._setErrors(t.errors);
  }, [t.errors, i]), X.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), X.useEffect(() => {
    t.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [t.shouldUnregister, i]), r.current.formState = ms(s, i), r.current;
}
function Ds(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ut = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function Vs() {
  if (br)
    return Qe;
  br = 1;
  var t = X, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(l, d, h) {
    var p, v = {}, T = null, V = null;
    h !== void 0 && (T = "" + h), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (V = d.ref);
    for (p in d)
      s.call(d, p) && !i.hasOwnProperty(p) && (v[p] = d[p]);
    if (l && l.defaultProps)
      for (p in d = l.defaultProps, d)
        v[p] === void 0 && (v[p] = d[p]);
    return { $$typeof: r, type: l, key: T, ref: V, props: v, _owner: n.current };
  }
  return Qe.Fragment = e, Qe.jsx = u, Qe.jsxs = u, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function js() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = X, r = Symbol.for("react.element"), e = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), j = Symbol.iterator, K = "@@iterator";
    function q(a) {
      if (a === null || typeof a != "object")
        return null;
      var y = j && a[j] || a[K];
      return typeof y == "function" ? y : null;
    }
    var z = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(a) {
      {
        for (var y = arguments.length, b = new Array(y > 1 ? y - 1 : 0), O = 1; O < y; O++)
          b[O - 1] = arguments[O];
        se("error", a, b);
      }
    }
    function se(a, y, b) {
      {
        var O = z.ReactDebugCurrentFrame, C = O.getStackAddendum();
        C !== "" && (y += "%s", b = b.concat([C]));
        var N = b.map(function(R) {
          return String(R);
        });
        N.unshift("Warning: " + y), Function.prototype.apply.call(console[a], console, N);
      }
    }
    var Q = !1, M = !1, fe = !1, me = !1, ye = !1, ne;
    ne = Symbol.for("react.module.reference");
    function J(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === s || a === i || ye || a === n || a === h || a === p || me || a === V || Q || M || fe || typeof a == "object" && a !== null && (a.$$typeof === T || a.$$typeof === v || a.$$typeof === u || a.$$typeof === l || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ne || a.getModuleId !== void 0));
    }
    function P(a, y, b) {
      var O = a.displayName;
      if (O)
        return O;
      var C = y.displayName || y.name || "";
      return C !== "" ? b + "(" + C + ")" : b;
    }
    function S(a) {
      return a.displayName || "Context";
    }
    function k(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case s:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case l:
            var y = a;
            return S(y) + ".Consumer";
          case u:
            var b = a;
            return S(b._context) + ".Provider";
          case d:
            return P(a, a.render, "ForwardRef");
          case v:
            var O = a.displayName || null;
            return O !== null ? O : k(a.type) || "Memo";
          case T: {
            var C = a, N = C._payload, R = C._init;
            try {
              return k(R(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, U = 0, ie, ee, Se, Oe, Te, Ge, Ke;
    function st() {
    }
    st.__reactDisabledLog = !0;
    function nt() {
      {
        if (U === 0) {
          ie = console.log, ee = console.info, Se = console.warn, Oe = console.error, Te = console.group, Ge = console.groupCollapsed, Ke = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: st,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        U++;
      }
    }
    function At() {
      {
        if (U--, U === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, a, {
              value: ie
            }),
            info: D({}, a, {
              value: ee
            }),
            warn: D({}, a, {
              value: Se
            }),
            error: D({}, a, {
              value: Oe
            }),
            group: D({}, a, {
              value: Te
            }),
            groupCollapsed: D({}, a, {
              value: Ge
            }),
            groupEnd: D({}, a, {
              value: Ke
            })
          });
        }
        U < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = z.ReactCurrentDispatcher, Pe;
    function ke(a, y, b) {
      {
        if (Pe === void 0)
          try {
            throw Error();
          } catch (C) {
            var O = C.stack.trim().match(/\n( *(at )?)/);
            Pe = O && O[1] || "";
          }
        return `
` + Pe + a;
      }
    }
    var Ie = !1, Me;
    {
      var it = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new it();
    }
    function at(a, y) {
      if (!a || Ie)
        return "";
      {
        var b = Me.get(a);
        if (b !== void 0)
          return b;
      }
      var O;
      Ie = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Fe.current, Fe.current = null, nt();
      try {
        if (y) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (ae) {
              O = ae;
            }
            Reflect.construct(a, [], R);
          } else {
            try {
              R.call();
            } catch (ae) {
              O = ae;
            }
            a.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            O = ae;
          }
          a();
        }
      } catch (ae) {
        if (ae && O && typeof ae.stack == "string") {
          for (var A = ae.stack.split(`
`), te = O.stack.split(`
`), W = A.length - 1, H = te.length - 1; W >= 1 && H >= 0 && A[W] !== te[H]; )
            H--;
          for (; W >= 1 && H >= 0; W--, H--)
            if (A[W] !== te[H]) {
              if (W !== 1 || H !== 1)
                do
                  if (W--, H--, H < 0 || A[W] !== te[H]) {
                    var ce = `
` + A[W].replace(" at new ", " at ");
                    return a.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", a.displayName)), typeof a == "function" && Me.set(a, ce), ce;
                  }
                while (W >= 1 && H >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Fe.current = N, At(), Error.prepareStackTrace = C;
      }
      var We = a ? a.displayName || a.name : "", De = We ? ke(We) : "";
      return typeof a == "function" && Me.set(a, De), De;
    }
    function ot(a, y, b) {
      return at(a, !1);
    }
    function ut(a) {
      var y = a.prototype;
      return !!(y && y.isReactComponent);
    }
    function Je(a, y, b) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return at(a, ut(a));
      if (typeof a == "string")
        return ke(a);
      switch (a) {
        case h:
          return ke("Suspense");
        case p:
          return ke("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return ot(a.render);
          case v:
            return Je(a.type, y, b);
          case T: {
            var O = a, C = O._payload, N = O._init;
            try {
              return Je(N(C), y, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, $t = {}, o = z.ReactDebugCurrentFrame;
    function f(a) {
      if (a) {
        var y = a._owner, b = Je(a.type, a._source, y ? y.type : null);
        o.setExtraStackFrame(b);
      } else
        o.setExtraStackFrame(null);
    }
    function c(a, y, b, O, C) {
      {
        var N = Function.call.bind(Le);
        for (var R in a)
          if (N(a, R)) {
            var A = void 0;
            try {
              if (typeof a[R] != "function") {
                var te = Error((O || "React class") + ": " + b + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              A = a[R](y, R, O, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              A = W;
            }
            A && !(A instanceof Error) && (f(C), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", b, R, typeof A), f(null)), A instanceof Error && !(A.message in $t) && ($t[A.message] = !0, f(C), w("Failed %s type: %s", b, A.message), f(null));
          }
      }
    }
    var x = Array.isArray;
    function g(a) {
      return x(a);
    }
    function m(a) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, b = y && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b;
      }
    }
    function E(a) {
      try {
        return F(a), !1;
      } catch {
        return !0;
      }
    }
    function F(a) {
      return "" + a;
    }
    function B(a) {
      if (E(a))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", m(a)), F(a);
    }
    var L = z.ReactCurrentOwner, ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, Ue, Ce;
    Ce = {};
    function Rt(a) {
      if (Le.call(a, "ref")) {
        var y = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function ft(a) {
      if (Le.call(a, "key")) {
        var y = Object.getOwnPropertyDescriptor(a, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Ft(a, y) {
      if (typeof a.ref == "string" && L.current && y && L.current.stateNode !== y) {
        var b = k(L.current.type);
        Ce[b] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), a.ref), Ce[b] = !0);
      }
    }
    function ct(a, y) {
      {
        var b = function() {
          lt || (lt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Jr(a, y) {
      {
        var b = function() {
          Ue || (Ue = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Xr = function(a, y, b, O, C, N, R) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: a,
        key: y,
        ref: b,
        props: R,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Qr(a, y, b, O, C) {
      {
        var N, R = {}, A = null, te = null;
        b !== void 0 && (B(b), A = "" + b), ft(y) && (B(y.key), A = "" + y.key), Rt(y) && (te = y.ref, Ft(y, C));
        for (N in y)
          Le.call(y, N) && !ge.hasOwnProperty(N) && (R[N] = y[N]);
        if (a && a.defaultProps) {
          var W = a.defaultProps;
          for (N in W)
            R[N] === void 0 && (R[N] = W[N]);
        }
        if (A || te) {
          var H = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          A && ct(R, H), te && Jr(R, H);
        }
        return Xr(a, A, te, C, O, L.current, R);
      }
    }
    var Ct = z.ReactCurrentOwner, rr = z.ReactDebugCurrentFrame;
    function Be(a) {
      if (a) {
        var y = a._owner, b = Je(a.type, a._source, y ? y.type : null);
        rr.setExtraStackFrame(b);
      } else
        rr.setExtraStackFrame(null);
    }
    var Dt;
    Dt = !1;
    function Vt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === r;
    }
    function sr() {
      {
        if (Ct.current) {
          var a = k(Ct.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function es(a) {
      {
        if (a !== void 0) {
          var y = a.fileName.replace(/^.*[\\\/]/, ""), b = a.lineNumber;
          return `

Check your code at ` + y + ":" + b + ".";
        }
        return "";
      }
    }
    var nr = {};
    function ts(a) {
      {
        var y = sr();
        if (!y) {
          var b = typeof a == "string" ? a : a.displayName || a.name;
          b && (y = `

Check the top-level render call using <` + b + ">.");
        }
        return y;
      }
    }
    function ir(a, y) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var b = ts(y);
        if (nr[b])
          return;
        nr[b] = !0;
        var O = "";
        a && a._owner && a._owner !== Ct.current && (O = " It was passed a child from " + k(a._owner.type) + "."), Be(a), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, O), Be(null);
      }
    }
    function ar(a, y) {
      {
        if (typeof a != "object")
          return;
        if (g(a))
          for (var b = 0; b < a.length; b++) {
            var O = a[b];
            Vt(O) && ir(O, y);
          }
        else if (Vt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var C = q(a);
          if (typeof C == "function" && C !== a.entries)
            for (var N = C.call(a), R; !(R = N.next()).done; )
              Vt(R.value) && ir(R.value, y);
        }
      }
    }
    function rs(a) {
      {
        var y = a.type;
        if (y == null || typeof y == "string")
          return;
        var b;
        if (typeof y == "function")
          b = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === v))
          b = y.propTypes;
        else
          return;
        if (b) {
          var O = k(y);
          c(b, a.props, "prop", O, a);
        } else if (y.PropTypes !== void 0 && !Dt) {
          Dt = !0;
          var C = k(y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ss(a) {
      {
        for (var y = Object.keys(a.props), b = 0; b < y.length; b++) {
          var O = y[b];
          if (O !== "children" && O !== "key") {
            Be(a), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Be(null);
            break;
          }
        }
        a.ref !== null && (Be(a), w("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    var or = {};
    function ur(a, y, b, O, C, N) {
      {
        var R = J(a);
        if (!R) {
          var A = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = es(C);
          te ? A += te : A += sr();
          var W;
          a === null ? W = "null" : g(a) ? W = "array" : a !== void 0 && a.$$typeof === r ? (W = "<" + (k(a.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : W = typeof a, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, A);
        }
        var H = Qr(a, y, b, C, N);
        if (H == null)
          return H;
        if (R) {
          var ce = y.children;
          if (ce !== void 0)
            if (O)
              if (g(ce)) {
                for (var We = 0; We < ce.length; We++)
                  ar(ce[We], a);
                Object.freeze && Object.freeze(ce);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ar(ce, a);
        }
        if (Le.call(y, "key")) {
          var De = k(a), ae = Object.keys(y).filter(function(ls) {
            return ls !== "key";
          }), jt = ae.length > 0 ? "{key: someKey, " + ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[De + jt]) {
            var us = ae.length > 0 ? "{" + ae.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, jt, De, us, De), or[De + jt] = !0;
          }
        }
        return a === s ? ss(H) : rs(H), H;
      }
    }
    function ns(a, y, b) {
      return ur(a, y, b, !0);
    }
    function is(a, y, b) {
      return ur(a, y, b, !1);
    }
    var as = is, os = ns;
    et.Fragment = s, et.jsx = as, et.jsxs = os;
  }()), et;
}
process.env.NODE_ENV === "production" ? Ut.exports = Vs() : Ut.exports = js();
var Kt = Ut.exports;
const Ze = Kt.Fragment, $ = Kt.jsx, le = Kt.jsxs, Ns = ({
  className: t = "",
  children: r,
  type: e = "button",
  reference: s = null,
  ...n
}) => /* @__PURE__ */ $("button", { ref: s, ...n, type: e, className: `reform-button ${t}`, children: r }), St = ({ htmlFor: t, className: r = "", children: e, ...s }) => /* @__PURE__ */ $("label", { ...s, htmlFor: t, className: `reform-label ${r}`, children: e });
var _r = function(t, r, e) {
  if (t && "reportValidity" in t) {
    var s = _(e, r);
    t.setCustomValidity(s && s.message || ""), t.reportValidity();
  }
}, Mr = function(t, r) {
  var e = function(n) {
    var i = r.fields[n];
    i && i.ref && "reportValidity" in i.ref ? _r(i.ref, n, t) : i.refs && i.refs.forEach(function(u) {
      return _r(u, n, t);
    });
  };
  for (var s in r.fields)
    e(s);
}, Ps = function(t, r) {
  r.shouldUseNativeValidation && Mr(t, r);
  var e = {};
  for (var s in t) {
    var n = _(r.fields, s);
    I(e, s, Object.assign(t[s], { ref: n && n.ref }));
  }
  return e;
}, Is = function(t, r, e) {
  return r === void 0 && (r = {}), e === void 0 && (e = {}), function(s, n, i) {
    try {
      return Promise.resolve(function(u, l) {
        try {
          var d = (r.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(t[e.mode === "sync" ? "validateSync" : "validate"](s, Object.assign({ abortEarly: !1 }, r, { context: n }))).then(function(h) {
            return i.shouldUseNativeValidation && Mr({}, i), { values: e.rawValues ? s : h, errors: {} };
          }));
        } catch (h) {
          return l(h);
        }
        return d && d.then ? d.then(void 0, l) : d;
      }(0, function(u) {
        if (!u.inner)
          throw u;
        return { values: {}, errors: Ps((l = u, d = !i.shouldUseNativeValidation && i.criteriaMode === "all", (l.inner || []).reduce(function(h, p) {
          if (h[p.path] || (h[p.path] = { message: p.message, type: p.type }), d) {
            var v = h[p.path].types, T = v && v[p.type];
            h[p.path] = Cr(p.path, d, h, p.type, T ? [].concat(T, p.message) : p.message);
          }
          return h;
        }, {})), i) };
        var l, d;
      }));
    } catch (u) {
      return Promise.reject(u);
    }
  };
};
function je(t) {
  this._maxSize = t, this.clear();
}
je.prototype.clear = function() {
  this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
};
je.prototype.get = function(t) {
  return this._values[t];
};
je.prototype.set = function(t, r) {
  return this._size >= this._maxSize && this.clear(), t in this._values || this._size++, this._values[t] = r;
};
var Ms = /[^.^\]^[]+|(?=\[\]|\.\.)/g, Lr = /^\d+$/, Ls = /^\d/, Us = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, Bs = /^\s*(['"]?)(.*?)(\1)\s*$/, Jt = 512, Er = new je(Jt), wr = new je(Jt), Sr = new je(Jt), Ve = {
  Cache: je,
  split: Bt,
  normalizePath: Mt,
  setter: function(t) {
    var r = Mt(t);
    return wr.get(t) || wr.set(t, function(s, n) {
      for (var i = 0, u = r.length, l = s; i < u - 1; ) {
        var d = r[i];
        if (d === "__proto__" || d === "constructor" || d === "prototype")
          return s;
        l = l[r[i++]];
      }
      l[r[i]] = n;
    });
  },
  getter: function(t, r) {
    var e = Mt(t);
    return Sr.get(t) || Sr.set(t, function(n) {
      for (var i = 0, u = e.length; i < u; )
        if (n != null || !r)
          n = n[e[i++]];
        else
          return;
      return n;
    });
  },
  join: function(t) {
    return t.reduce(function(r, e) {
      return r + (Xt(e) || Lr.test(e) ? "[" + e + "]" : (r ? "." : "") + e);
    }, "");
  },
  forEach: function(t, r, e) {
    Ws(Array.isArray(t) ? t : Bt(t), r, e);
  }
};
function Mt(t) {
  return Er.get(t) || Er.set(
    t,
    Bt(t).map(function(r) {
      return r.replace(Bs, "$2");
    })
  );
}
function Bt(t) {
  return t.match(Ms) || [""];
}
function Ws(t, r, e) {
  var s = t.length, n, i, u, l;
  for (i = 0; i < s; i++)
    n = t[i], n && (zs(n) && (n = '"' + n + '"'), l = Xt(n), u = !l && /^\d+$/.test(n), r.call(e, n, l, u, i, t));
}
function Xt(t) {
  return typeof t == "string" && t && ["'", '"'].indexOf(t.charAt(0)) !== -1;
}
function Ys(t) {
  return t.match(Ls) && !t.match(Lr);
}
function qs(t) {
  return Us.test(t);
}
function zs(t) {
  return !Xt(t) && (Ys(t) || qs(t));
}
const Hs = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, Ot = (t) => t.match(Hs) || [], Tt = (t) => t[0].toUpperCase() + t.slice(1), Qt = (t, r) => Ot(t).join(r).toLowerCase(), Ur = (t) => Ot(t).reduce(
  (r, e) => `${r}${r ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()}`,
  ""
), Zs = (t) => Tt(Ur(t)), Gs = (t) => Qt(t, "_"), Ks = (t) => Qt(t, "-"), Js = (t) => Tt(Qt(t, " ")), Xs = (t) => Ot(t).map(Tt).join(" ");
var Lt = {
  words: Ot,
  upperFirst: Tt,
  camelCase: Ur,
  pascalCase: Zs,
  snakeCase: Gs,
  kebabCase: Ks,
  sentenceCase: Js,
  titleCase: Xs
}, er = { exports: {} };
er.exports = function(t) {
  return Br(Qs(t), t);
};
er.exports.array = Br;
function Br(t, r) {
  var e = t.length, s = new Array(e), n = {}, i = e, u = en(r), l = tn(t);
  for (r.forEach(function(h) {
    if (!l.has(h[0]) || !l.has(h[1]))
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
  }); i--; )
    n[i] || d(t[i], i, /* @__PURE__ */ new Set());
  return s;
  function d(h, p, v) {
    if (v.has(h)) {
      var T;
      try {
        T = ", node was:" + JSON.stringify(h);
      } catch {
        T = "";
      }
      throw new Error("Cyclic dependency" + T);
    }
    if (!l.has(h))
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(h));
    if (!n[p]) {
      n[p] = !0;
      var V = u.get(h) || /* @__PURE__ */ new Set();
      if (V = Array.from(V), p = V.length) {
        v.add(h);
        do {
          var j = V[--p];
          d(j, l.get(j), v);
        } while (p);
        v.delete(h);
      }
      s[--e] = h;
    }
  }
}
function Qs(t) {
  for (var r = /* @__PURE__ */ new Set(), e = 0, s = t.length; e < s; e++) {
    var n = t[e];
    r.add(n[0]), r.add(n[1]);
  }
  return Array.from(r);
}
function en(t) {
  for (var r = /* @__PURE__ */ new Map(), e = 0, s = t.length; e < s; e++) {
    var n = t[e];
    r.has(n[0]) || r.set(n[0], /* @__PURE__ */ new Set()), r.has(n[1]) || r.set(n[1], /* @__PURE__ */ new Set()), r.get(n[0]).add(n[1]);
  }
  return r;
}
function tn(t) {
  for (var r = /* @__PURE__ */ new Map(), e = 0, s = t.length; e < s; e++)
    r.set(t[e], e);
  return r;
}
var rn = er.exports;
const sn = /* @__PURE__ */ Ds(rn), nn = Object.prototype.toString, an = Error.prototype.toString, on = RegExp.prototype.toString, un = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", ln = /^Symbol\((.*)\)(.*)$/;
function fn(t) {
  return t != +t ? "NaN" : t === 0 && 1 / t < 0 ? "-0" : "" + t;
}
function Or(t, r = !1) {
  if (t == null || t === !0 || t === !1)
    return "" + t;
  const e = typeof t;
  if (e === "number")
    return fn(t);
  if (e === "string")
    return r ? `"${t}"` : t;
  if (e === "function")
    return "[Function " + (t.name || "anonymous") + "]";
  if (e === "symbol")
    return un.call(t).replace(ln, "Symbol($1)");
  const s = nn.call(t).slice(8, -1);
  return s === "Date" ? isNaN(t.getTime()) ? "" + t : t.toISOString(t) : s === "Error" || t instanceof Error ? "[" + an.call(t) + "]" : s === "RegExp" ? on.call(t) : null;
}
function $e(t, r) {
  let e = Or(t, r);
  return e !== null ? e : JSON.stringify(t, function(s, n) {
    let i = Or(this[s], r);
    return i !== null ? i : n;
  }, 2);
}
function Wr(t) {
  return t == null ? [] : [].concat(t);
}
let Yr, qr, zr, cn = /\$\{\s*(\w+)\s*\}/g;
Yr = Symbol.toStringTag;
class Tr {
  constructor(r, e, s, n) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Yr] = "Error", this.name = "ValidationError", this.value = e, this.path = s, this.type = n, this.errors = [], this.inner = [], Wr(r).forEach((i) => {
      if (ue.isError(i)) {
        this.errors.push(...i.errors);
        const u = i.inner.length ? i.inner : [i];
        this.inner.push(...u);
      } else
        this.errors.push(i);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
qr = Symbol.hasInstance;
zr = Symbol.toStringTag;
class ue extends Error {
  static formatError(r, e) {
    const s = e.label || e.path || "this";
    return s !== e.path && (e = Object.assign({}, e, {
      path: s
    })), typeof r == "string" ? r.replace(cn, (n, i) => $e(e[i])) : typeof r == "function" ? r(e) : r;
  }
  static isError(r) {
    return r && r.name === "ValidationError";
  }
  constructor(r, e, s, n, i) {
    const u = new Tr(r, e, s, n);
    if (i)
      return u;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[zr] = "Error", this.name = u.name, this.message = u.message, this.type = u.type, this.value = u.value, this.path = u.path, this.errors = u.errors, this.inner = u.inner, Error.captureStackTrace && Error.captureStackTrace(this, ue);
  }
  static [qr](r) {
    return Tr[Symbol.hasInstance](r) || super[Symbol.hasInstance](r);
  }
}
let _e = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: t,
    type: r,
    value: e,
    originalValue: s
  }) => {
    const n = s != null && s !== e ? ` (cast from the value \`${$e(s, !0)}\`).` : ".";
    return r !== "mixed" ? `${t} must be a \`${r}\` type, but the final value was: \`${$e(e, !0)}\`` + n : `${t} must match the configured type. The validated value was: \`${$e(e, !0)}\`` + n;
  }
}, dn = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, hn = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, Wt = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, yn = {
  isValue: "${path} field must be ${value}"
}, Yt = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
}, pn = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, vn = {
  notType: (t) => {
    const {
      path: r,
      value: e,
      spec: s
    } = t, n = s.types.length;
    if (Array.isArray(e)) {
      if (e.length < n)
        return `${r} tuple value has too few items, expected a length of ${n} but got ${e.length} for value: \`${$e(e, !0)}\``;
      if (e.length > n)
        return `${r} tuple value has too many items, expected a length of ${n} but got ${e.length} for value: \`${$e(e, !0)}\``;
    }
    return ue.formatError(_e.notType, t);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: _e,
  string: dn,
  number: hn,
  date: Wt,
  object: Yt,
  array: pn,
  boolean: yn,
  tuple: vn
});
const tr = (t) => t && t.__isYupSchema__;
class _t {
  static fromOptions(r, e) {
    if (!e.then && !e.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: s,
      then: n,
      otherwise: i
    } = e, u = typeof s == "function" ? s : (...l) => l.every((d) => d === s);
    return new _t(r, (l, d) => {
      var h;
      let p = u(...l) ? n : i;
      return (h = p == null ? void 0 : p(d)) != null ? h : d;
    });
  }
  constructor(r, e) {
    this.fn = void 0, this.refs = r, this.refs = r, this.fn = e;
  }
  resolve(r, e) {
    let s = this.refs.map((i) => (
      // TODO: ? operator here?
      i.getValue(e == null ? void 0 : e.value, e == null ? void 0 : e.parent, e == null ? void 0 : e.context)
    )), n = this.fn(s, r, e);
    if (n === void 0 || // @ts-ignore this can be base
    n === r)
      return r;
    if (!tr(n))
      throw new TypeError("conditions must return a schema object");
    return n.resolve(e);
  }
}
const ht = {
  context: "$",
  value: "."
};
class Ne {
  constructor(r, e = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof r != "string")
      throw new TypeError("ref must be a string, got: " + r);
    if (this.key = r.trim(), r === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === ht.context, this.isValue = this.key[0] === ht.value, this.isSibling = !this.isContext && !this.isValue;
    let s = this.isContext ? ht.context : this.isValue ? ht.value : "";
    this.path = this.key.slice(s.length), this.getter = this.path && Ve.getter(this.path, !0), this.map = e.map;
  }
  getValue(r, e, s) {
    let n = this.isContext ? s : this.isValue ? r : e;
    return this.getter && (n = this.getter(n || {})), this.map && (n = this.map(n)), n;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(r, e) {
    return this.getValue(r, e == null ? void 0 : e.parent, e == null ? void 0 : e.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(r) {
    return r && r.__isYupRef;
  }
}
Ne.prototype.__isYupRef = !0;
const Hr = (t) => t == null;
function qe(t) {
  function r({
    value: e,
    path: s = "",
    options: n,
    originalValue: i,
    schema: u
  }, l, d) {
    const {
      name: h,
      test: p,
      params: v,
      message: T,
      skipAbsent: V
    } = t;
    let {
      parent: j,
      context: K,
      abortEarly: q = u.spec.abortEarly,
      disableStackTrace: z = u.spec.disableStackTrace
    } = n;
    function w(P) {
      return Ne.isRef(P) ? P.getValue(e, j, K) : P;
    }
    function se(P = {}) {
      const S = Object.assign({
        value: e,
        originalValue: i,
        label: u.spec.label,
        path: P.path || s,
        spec: u.spec,
        disableStackTrace: P.disableStackTrace || z
      }, v, P.params);
      for (const D of Object.keys(S))
        S[D] = w(S[D]);
      const k = new ue(ue.formatError(P.message || T, S), e, S.path, P.type || h, S.disableStackTrace);
      return k.params = S, k;
    }
    const Q = q ? l : d;
    let M = {
      path: s,
      parent: j,
      type: h,
      from: n.from,
      createError: se,
      resolve: w,
      options: n,
      originalValue: i,
      schema: u
    };
    const fe = (P) => {
      ue.isError(P) ? Q(P) : P ? d(null) : Q(se());
    }, me = (P) => {
      ue.isError(P) ? Q(P) : l(P);
    };
    if (V && Hr(e))
      return fe(!0);
    let ne;
    try {
      var J;
      if (ne = p.call(M, e, M), typeof ((J = ne) == null ? void 0 : J.then) == "function") {
        if (n.sync)
          throw new Error(`Validation test of type: "${M.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(ne).then(fe, me);
      }
    } catch (P) {
      me(P);
      return;
    }
    fe(ne);
  }
  return r.OPTIONS = t, r;
}
function mn(t, r, e, s = e) {
  let n, i, u;
  return r ? (Ve.forEach(r, (l, d, h) => {
    let p = d ? l.slice(1, l.length - 1) : l;
    t = t.resolve({
      context: s,
      parent: n,
      value: e
    });
    let v = t.type === "tuple", T = h ? parseInt(p, 10) : 0;
    if (t.innerType || v) {
      if (v && !h)
        throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${u}" must contain an index to the tuple element, e.g. "${u}[0]"`);
      if (e && T >= e.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${r}. because there is no value at that index. `);
      n = e, e = e && e[T], t = v ? t.spec.types[T] : t.innerType;
    }
    if (!h) {
      if (!t.fields || !t.fields[p])
        throw new Error(`The schema does not contain the path: ${r}. (failed at: ${u} which is a type: "${t.type}")`);
      n = e, e = e && e[p], t = t.fields[p];
    }
    i = p, u = d ? "[" + l + "]" : "." + l;
  }), {
    schema: t,
    parent: n,
    parentPath: i
  }) : {
    parent: n,
    parentPath: r,
    schema: t
  };
}
class Et extends Set {
  describe() {
    const r = [];
    for (const e of this.values())
      r.push(Ne.isRef(e) ? e.describe() : e);
    return r;
  }
  resolveAll(r) {
    let e = [];
    for (const s of this.values())
      e.push(r(s));
    return e;
  }
  clone() {
    return new Et(this.values());
  }
  merge(r, e) {
    const s = this.clone();
    return r.forEach((n) => s.add(n)), e.forEach((n) => s.delete(n)), s;
  }
}
function He(t, r = /* @__PURE__ */ new Map()) {
  if (tr(t) || !t || typeof t != "object")
    return t;
  if (r.has(t))
    return r.get(t);
  let e;
  if (t instanceof Date)
    e = new Date(t.getTime()), r.set(t, e);
  else if (t instanceof RegExp)
    e = new RegExp(t), r.set(t, e);
  else if (Array.isArray(t)) {
    e = new Array(t.length), r.set(t, e);
    for (let s = 0; s < t.length; s++)
      e[s] = He(t[s], r);
  } else if (t instanceof Map) {
    e = /* @__PURE__ */ new Map(), r.set(t, e);
    for (const [s, n] of t.entries())
      e.set(s, He(n, r));
  } else if (t instanceof Set) {
    e = /* @__PURE__ */ new Set(), r.set(t, e);
    for (const s of t)
      e.add(He(s, r));
  } else if (t instanceof Object) {
    e = {}, r.set(t, e);
    for (const [s, n] of Object.entries(t))
      e[s] = He(n, r);
  } else
    throw Error(`Unable to clone ${t}`);
  return e;
}
class we {
  constructor(r) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new Et(), this._blacklist = new Et(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(_e.notType);
    }), this.type = r.type, this._typeCheck = r.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, r == null ? void 0 : r.spec), this.withMutation((e) => {
      e.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(r) {
    if (this._mutate)
      return r && Object.assign(this.spec, r), this;
    const e = Object.create(Object.getPrototypeOf(this));
    return e.type = this.type, e._typeCheck = this._typeCheck, e._whitelist = this._whitelist.clone(), e._blacklist = this._blacklist.clone(), e.internalTests = Object.assign({}, this.internalTests), e.exclusiveTests = Object.assign({}, this.exclusiveTests), e.deps = [...this.deps], e.conditions = [...this.conditions], e.tests = [...this.tests], e.transforms = [...this.transforms], e.spec = He(Object.assign({}, this.spec, r)), e;
  }
  label(r) {
    let e = this.clone();
    return e.spec.label = r, e;
  }
  meta(...r) {
    if (r.length === 0)
      return this.spec.meta;
    let e = this.clone();
    return e.spec.meta = Object.assign(e.spec.meta || {}, r[0]), e;
  }
  withMutation(r) {
    let e = this._mutate;
    this._mutate = !0;
    let s = r(this);
    return this._mutate = e, s;
  }
  concat(r) {
    if (!r || r === this)
      return this;
    if (r.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${r.type}`);
    let e = this, s = r.clone();
    const n = Object.assign({}, e.spec, s.spec);
    return s.spec = n, s.internalTests = Object.assign({}, e.internalTests, s.internalTests), s._whitelist = e._whitelist.merge(r._whitelist, r._blacklist), s._blacklist = e._blacklist.merge(r._blacklist, r._whitelist), s.tests = e.tests, s.exclusiveTests = e.exclusiveTests, s.withMutation((i) => {
      r.tests.forEach((u) => {
        i.test(u.OPTIONS);
      });
    }), s.transforms = [...e.transforms, ...s.transforms], s;
  }
  isType(r) {
    return r == null ? !!(this.spec.nullable && r === null || this.spec.optional && r === void 0) : this._typeCheck(r);
  }
  resolve(r) {
    let e = this;
    if (e.conditions.length) {
      let s = e.conditions;
      e = e.clone(), e.conditions = [], e = s.reduce((n, i) => i.resolve(n, r), e), e = e.resolve(r);
    }
    return e;
  }
  resolveOptions(r) {
    var e, s, n, i;
    return Object.assign({}, r, {
      from: r.from || [],
      strict: (e = r.strict) != null ? e : this.spec.strict,
      abortEarly: (s = r.abortEarly) != null ? s : this.spec.abortEarly,
      recursive: (n = r.recursive) != null ? n : this.spec.recursive,
      disableStackTrace: (i = r.disableStackTrace) != null ? i : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(r, e = {}) {
    let s = this.resolve(Object.assign({
      value: r
    }, e)), n = e.assert === "ignore-optionality", i = s._cast(r, e);
    if (e.assert !== !1 && !s.isType(i)) {
      if (n && Hr(i))
        return i;
      let u = $e(r), l = $e(i);
      throw new TypeError(`The value of ${e.path || "field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${u} 
` + (l !== u ? `result of cast: ${l}` : ""));
    }
    return i;
  }
  _cast(r, e) {
    let s = r === void 0 ? r : this.transforms.reduce((n, i) => i.call(this, n, r, this), r);
    return s === void 0 && (s = this.getDefault(e)), s;
  }
  _validate(r, e = {}, s, n) {
    let {
      path: i,
      originalValue: u = r,
      strict: l = this.spec.strict
    } = e, d = r;
    l || (d = this._cast(d, Object.assign({
      assert: !1
    }, e)));
    let h = [];
    for (let p of Object.values(this.internalTests))
      p && h.push(p);
    this.runTests({
      path: i,
      value: d,
      originalValue: u,
      options: e,
      tests: h
    }, s, (p) => {
      if (p.length)
        return n(p, d);
      this.runTests({
        path: i,
        value: d,
        originalValue: u,
        options: e,
        tests: this.tests
      }, s, n);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(r, e, s) {
    let n = !1, {
      tests: i,
      value: u,
      originalValue: l,
      path: d,
      options: h
    } = r, p = (K) => {
      n || (n = !0, e(K, u));
    }, v = (K) => {
      n || (n = !0, s(K, u));
    }, T = i.length, V = [];
    if (!T)
      return v([]);
    let j = {
      value: u,
      originalValue: l,
      path: d,
      options: h,
      schema: this
    };
    for (let K = 0; K < i.length; K++) {
      const q = i[K];
      q(j, p, function(w) {
        w && (Array.isArray(w) ? V.push(...w) : V.push(w)), --T <= 0 && v(V);
      });
    }
  }
  asNestedTest({
    key: r,
    index: e,
    parent: s,
    parentPath: n,
    originalParent: i,
    options: u
  }) {
    const l = r ?? e;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const d = typeof l == "number";
    let h = s[l];
    const p = Object.assign({}, u, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: s,
      value: h,
      originalValue: i[l],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [d ? "index" : "key"]: l,
      path: d || l.includes(".") ? `${n || ""}[${d ? l : `"${l}"`}]` : (n ? `${n}.` : "") + r
    });
    return (v, T, V) => this.resolve(p)._validate(h, p, T, V);
  }
  validate(r, e) {
    var s;
    let n = this.resolve(Object.assign({}, e, {
      value: r
    })), i = (s = e == null ? void 0 : e.disableStackTrace) != null ? s : n.spec.disableStackTrace;
    return new Promise((u, l) => n._validate(r, e, (d, h) => {
      ue.isError(d) && (d.value = h), l(d);
    }, (d, h) => {
      d.length ? l(new ue(d, h, void 0, void 0, i)) : u(h);
    }));
  }
  validateSync(r, e) {
    var s;
    let n = this.resolve(Object.assign({}, e, {
      value: r
    })), i, u = (s = e == null ? void 0 : e.disableStackTrace) != null ? s : n.spec.disableStackTrace;
    return n._validate(r, Object.assign({}, e, {
      sync: !0
    }), (l, d) => {
      throw ue.isError(l) && (l.value = d), l;
    }, (l, d) => {
      if (l.length)
        throw new ue(l, r, void 0, void 0, u);
      i = d;
    }), i;
  }
  isValid(r, e) {
    return this.validate(r, e).then(() => !0, (s) => {
      if (ue.isError(s))
        return !1;
      throw s;
    });
  }
  isValidSync(r, e) {
    try {
      return this.validateSync(r, e), !0;
    } catch (s) {
      if (ue.isError(s))
        return !1;
      throw s;
    }
  }
  _getDefault(r) {
    let e = this.spec.default;
    return e == null ? e : typeof e == "function" ? e.call(this, r) : He(e);
  }
  getDefault(r) {
    return this.resolve(r || {})._getDefault(r);
  }
  default(r) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: r
    });
  }
  strict(r = !0) {
    return this.clone({
      strict: r
    });
  }
  nullability(r, e) {
    const s = this.clone({
      nullable: r
    });
    return s.internalTests.nullable = qe({
      message: e,
      name: "nullable",
      test(n) {
        return n === null ? this.schema.spec.nullable : !0;
      }
    }), s;
  }
  optionality(r, e) {
    const s = this.clone({
      optional: r
    });
    return s.internalTests.optionality = qe({
      message: e,
      name: "optionality",
      test(n) {
        return n === void 0 ? this.schema.spec.optional : !0;
      }
    }), s;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(r = _e.defined) {
    return this.optionality(!1, r);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(r = _e.notNull) {
    return this.nullability(!1, r);
  }
  required(r = _e.required) {
    return this.clone().withMutation((e) => e.nonNullable(r).defined(r));
  }
  notRequired() {
    return this.clone().withMutation((r) => r.nullable().optional());
  }
  transform(r) {
    let e = this.clone();
    return e.transforms.push(r), e;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...r) {
    let e;
    if (r.length === 1 ? typeof r[0] == "function" ? e = {
      test: r[0]
    } : e = r[0] : r.length === 2 ? e = {
      name: r[0],
      test: r[1]
    } : e = {
      name: r[0],
      message: r[1],
      test: r[2]
    }, e.message === void 0 && (e.message = _e.default), typeof e.test != "function")
      throw new TypeError("`test` is a required parameters");
    let s = this.clone(), n = qe(e), i = e.exclusive || e.name && s.exclusiveTests[e.name] === !0;
    if (e.exclusive && !e.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return e.name && (s.exclusiveTests[e.name] = !!e.exclusive), s.tests = s.tests.filter((u) => !(u.OPTIONS.name === e.name && (i || u.OPTIONS.test === n.OPTIONS.test))), s.tests.push(n), s;
  }
  when(r, e) {
    !Array.isArray(r) && typeof r != "string" && (e = r, r = ".");
    let s = this.clone(), n = Wr(r).map((i) => new Ne(i));
    return n.forEach((i) => {
      i.isSibling && s.deps.push(i.key);
    }), s.conditions.push(typeof e == "function" ? new _t(n, e) : _t.fromOptions(n, e)), s;
  }
  typeError(r) {
    let e = this.clone();
    return e.internalTests.typeError = qe({
      message: r,
      name: "typeError",
      skipAbsent: !0,
      test(s) {
        return this.schema._typeCheck(s) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), e;
  }
  oneOf(r, e = _e.oneOf) {
    let s = this.clone();
    return r.forEach((n) => {
      s._whitelist.add(n), s._blacklist.delete(n);
    }), s.internalTests.whiteList = qe({
      message: e,
      name: "oneOf",
      skipAbsent: !0,
      test(n) {
        let i = this.schema._whitelist, u = i.resolveAll(this.resolve);
        return u.includes(n) ? !0 : this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: u
          }
        });
      }
    }), s;
  }
  notOneOf(r, e = _e.notOneOf) {
    let s = this.clone();
    return r.forEach((n) => {
      s._blacklist.add(n), s._whitelist.delete(n);
    }), s.internalTests.blacklist = qe({
      message: e,
      name: "notOneOf",
      test(n) {
        let i = this.schema._blacklist, u = i.resolveAll(this.resolve);
        return u.includes(n) ? this.createError({
          params: {
            values: Array.from(i).join(", "),
            resolved: u
          }
        }) : !0;
      }
    }), s;
  }
  strip(r = !0) {
    let e = this.clone();
    return e.spec.strip = r, e;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(r) {
    const e = (r ? this.resolve(r) : this).clone(), {
      label: s,
      meta: n,
      optional: i,
      nullable: u
    } = e.spec;
    return {
      meta: n,
      label: s,
      optional: i,
      nullable: u,
      default: e.getDefault(r),
      type: e.type,
      oneOf: e._whitelist.describe(),
      notOneOf: e._blacklist.describe(),
      tests: e.tests.map((d) => ({
        name: d.OPTIONS.name,
        params: d.OPTIONS.params
      })).filter((d, h, p) => p.findIndex((v) => v.name === d.name) === h)
    };
  }
}
we.prototype.__isYupSchema__ = !0;
for (const t of ["validate", "validateSync"])
  we.prototype[`${t}At`] = function(r, e, s = {}) {
    const {
      parent: n,
      parentPath: i,
      schema: u
    } = mn(this, r, e, s.context);
    return u[t](n && n[i], Object.assign({}, s, {
      parent: n,
      path: r
    }));
  };
for (const t of ["equals", "is"])
  we.prototype[t] = we.prototype.oneOf;
for (const t of ["not", "nope"])
  we.prototype[t] = we.prototype.notOneOf;
const gn = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function bn(t) {
  const r = xn(t);
  if (!r)
    return Date.parse ? Date.parse(t) : Number.NaN;
  if (r.z === void 0 && r.plusMinus === void 0)
    return new Date(r.year, r.month, r.day, r.hour, r.minute, r.second, r.millisecond).valueOf();
  let e = 0;
  return r.z !== "Z" && r.plusMinus !== void 0 && (e = r.hourOffset * 60 + r.minuteOffset, r.plusMinus === "+" && (e = 0 - e)), Date.UTC(r.year, r.month, r.day, r.hour, r.minute + e, r.second, r.millisecond);
}
function xn(t) {
  var r, e;
  const s = gn.exec(t);
  return s ? {
    year: xe(s[1]),
    month: xe(s[2], 1) - 1,
    day: xe(s[3], 1),
    hour: xe(s[4]),
    minute: xe(s[5]),
    second: xe(s[6]),
    millisecond: s[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      xe(s[7].substring(0, 3))
    ) : 0,
    precision: (r = (e = s[7]) == null ? void 0 : e.length) != null ? r : void 0,
    z: s[8] || void 0,
    plusMinus: s[9] || void 0,
    hourOffset: xe(s[10]),
    minuteOffset: xe(s[11])
  } : null;
}
function xe(t, r = 0) {
  return Number(t) || r;
}
let _n = /* @__PURE__ */ new Date(""), En = (t) => Object.prototype.toString.call(t) === "[object Date]";
class kt extends we {
  constructor() {
    super({
      type: "date",
      check(r) {
        return En(r) && !isNaN(r.getTime());
      }
    }), this.withMutation(() => {
      this.transform((r, e, s) => !s.spec.coerce || s.isType(r) || r === null ? r : (r = bn(r), isNaN(r) ? kt.INVALID_DATE : new Date(r)));
    });
  }
  prepareParam(r, e) {
    let s;
    if (Ne.isRef(r))
      s = r;
    else {
      let n = this.cast(r);
      if (!this._typeCheck(n))
        throw new TypeError(`\`${e}\` must be a Date or a value that can be \`cast()\` to a Date`);
      s = n;
    }
    return s;
  }
  min(r, e = Wt.min) {
    let s = this.prepareParam(r, "min");
    return this.test({
      message: e,
      name: "min",
      exclusive: !0,
      params: {
        min: r
      },
      skipAbsent: !0,
      test(n) {
        return n >= this.resolve(s);
      }
    });
  }
  max(r, e = Wt.max) {
    let s = this.prepareParam(r, "max");
    return this.test({
      message: e,
      name: "max",
      exclusive: !0,
      params: {
        max: r
      },
      skipAbsent: !0,
      test(n) {
        return n <= this.resolve(s);
      }
    });
  }
}
kt.INVALID_DATE = _n;
kt.prototype;
function wn(t, r = []) {
  let e = [], s = /* @__PURE__ */ new Set(), n = new Set(r.map(([u, l]) => `${u}-${l}`));
  function i(u, l) {
    let d = Ve.split(u)[0];
    s.add(d), n.has(`${l}-${d}`) || e.push([l, d]);
  }
  for (const u of Object.keys(t)) {
    let l = t[u];
    s.add(u), Ne.isRef(l) && l.isSibling ? i(l.path, u) : tr(l) && "deps" in l && l.deps.forEach((d) => i(d, u));
  }
  return sn.array(Array.from(s), e).reverse();
}
function kr(t, r) {
  let e = 1 / 0;
  return t.some((s, n) => {
    var i;
    if ((i = r.path) != null && i.includes(s))
      return e = n, !0;
  }), e;
}
function Zr(t) {
  return (r, e) => kr(t, r) - kr(t, e);
}
const Sn = (t, r, e) => {
  if (typeof t != "string")
    return t;
  let s = t;
  try {
    s = JSON.parse(t);
  } catch {
  }
  return e.isType(s) ? s : t;
};
function vt(t) {
  if ("fields" in t) {
    const r = {};
    for (const [e, s] of Object.entries(t.fields))
      r[e] = vt(s);
    return t.setFields(r);
  }
  if (t.type === "array") {
    const r = t.optional();
    return r.innerType && (r.innerType = vt(r.innerType)), r;
  }
  return t.type === "tuple" ? t.optional().clone({
    types: t.spec.types.map(vt)
  }) : "optional" in t ? t.optional() : t;
}
const On = (t, r) => {
  const e = [...Ve.normalizePath(r)];
  if (e.length === 1)
    return e[0] in t;
  let s = e.pop(), n = Ve.getter(Ve.join(e), !0)(t);
  return !!(n && s in n);
};
let Ar = (t) => Object.prototype.toString.call(t) === "[object Object]";
function Tn(t, r) {
  let e = Object.keys(t.fields);
  return Object.keys(r).filter((s) => e.indexOf(s) === -1);
}
const kn = Zr([]);
function Gr(t) {
  return new Kr(t);
}
class Kr extends we {
  constructor(r) {
    super({
      type: "object",
      check(e) {
        return Ar(e) || typeof e == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = kn, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      r && this.shape(r);
    });
  }
  _cast(r, e = {}) {
    var s;
    let n = super._cast(r, e);
    if (n === void 0)
      return this.getDefault(e);
    if (!this._typeCheck(n))
      return n;
    let i = this.fields, u = (s = e.stripUnknown) != null ? s : this.spec.noUnknown, l = [].concat(this._nodes, Object.keys(n).filter((v) => !this._nodes.includes(v))), d = {}, h = Object.assign({}, e, {
      parent: d,
      __validating: e.__validating || !1
    }), p = !1;
    for (const v of l) {
      let T = i[v], V = v in n;
      if (T) {
        let j, K = n[v];
        h.path = (e.path ? `${e.path}.` : "") + v, T = T.resolve({
          value: K,
          context: e.context,
          parent: d
        });
        let q = T instanceof we ? T.spec : void 0, z = q == null ? void 0 : q.strict;
        if (q != null && q.strip) {
          p = p || v in n;
          continue;
        }
        j = !e.__validating || !z ? (
          // TODO: use _cast, this is double resolving
          T.cast(n[v], h)
        ) : n[v], j !== void 0 && (d[v] = j);
      } else
        V && !u && (d[v] = n[v]);
      (V !== v in d || d[v] !== n[v]) && (p = !0);
    }
    return p ? d : n;
  }
  _validate(r, e = {}, s, n) {
    let {
      from: i = [],
      originalValue: u = r,
      recursive: l = this.spec.recursive
    } = e;
    e.from = [{
      schema: this,
      value: u
    }, ...i], e.__validating = !0, e.originalValue = u, super._validate(r, e, s, (d, h) => {
      if (!l || !Ar(h)) {
        n(d, h);
        return;
      }
      u = u || h;
      let p = [];
      for (let v of this._nodes) {
        let T = this.fields[v];
        !T || Ne.isRef(T) || p.push(T.asNestedTest({
          options: e,
          key: v,
          parent: h,
          parentPath: e.path,
          originalParent: u
        }));
      }
      this.runTests({
        tests: p,
        value: h,
        originalValue: u,
        options: e
      }, s, (v) => {
        n(v.sort(this._sortErrors).concat(d), h);
      });
    });
  }
  clone(r) {
    const e = super.clone(r);
    return e.fields = Object.assign({}, this.fields), e._nodes = this._nodes, e._excludedEdges = this._excludedEdges, e._sortErrors = this._sortErrors, e;
  }
  concat(r) {
    let e = super.concat(r), s = e.fields;
    for (let [n, i] of Object.entries(this.fields)) {
      const u = s[n];
      s[n] = u === void 0 ? i : u;
    }
    return e.withMutation((n) => (
      // XXX: excludes here is wrong
      n.setFields(s, [...this._excludedEdges, ...r._excludedEdges])
    ));
  }
  _getDefault(r) {
    if ("default" in this.spec)
      return super._getDefault(r);
    if (!this._nodes.length)
      return;
    let e = {};
    return this._nodes.forEach((s) => {
      var n;
      const i = this.fields[s];
      let u = r;
      (n = u) != null && n.value && (u = Object.assign({}, u, {
        parent: u.value,
        value: u.value[s]
      })), e[s] = i && "getDefault" in i ? i.getDefault(u) : void 0;
    }), e;
  }
  setFields(r, e) {
    let s = this.clone();
    return s.fields = r, s._nodes = wn(r, e), s._sortErrors = Zr(Object.keys(r)), e && (s._excludedEdges = e), s;
  }
  shape(r, e = []) {
    return this.clone().withMutation((s) => {
      let n = s._excludedEdges;
      return e.length && (Array.isArray(e[0]) || (e = [e]), n = [...s._excludedEdges, ...e]), s.setFields(Object.assign(s.fields, r), n);
    });
  }
  partial() {
    const r = {};
    for (const [e, s] of Object.entries(this.fields))
      r[e] = "optional" in s && s.optional instanceof Function ? s.optional() : s;
    return this.setFields(r);
  }
  deepPartial() {
    return vt(this);
  }
  pick(r) {
    const e = {};
    for (const s of r)
      this.fields[s] && (e[s] = this.fields[s]);
    return this.setFields(e, this._excludedEdges.filter(([s, n]) => r.includes(s) && r.includes(n)));
  }
  omit(r) {
    const e = [];
    for (const s of Object.keys(this.fields))
      r.includes(s) || e.push(s);
    return this.pick(e);
  }
  from(r, e, s) {
    let n = Ve.getter(r, !0);
    return this.transform((i) => {
      if (!i)
        return i;
      let u = i;
      return On(i, r) && (u = Object.assign({}, i), s || delete u[r], u[e] = n(i)), u;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Sn);
  }
  noUnknown(r = !0, e = Yt.noUnknown) {
    typeof r != "boolean" && (e = r, r = !0);
    let s = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: e,
      test(n) {
        if (n == null)
          return !0;
        const i = Tn(this.schema, n);
        return !r || i.length === 0 || this.createError({
          params: {
            unknown: i.join(", ")
          }
        });
      }
    });
    return s.spec.noUnknown = r, s;
  }
  unknown(r = !0, e = Yt.noUnknown) {
    return this.noUnknown(!r, e);
  }
  transformKeys(r) {
    return this.transform((e) => {
      if (!e)
        return e;
      const s = {};
      for (const n of Object.keys(e))
        s[r(n)] = e[n];
      return s;
    });
  }
  camelCase() {
    return this.transformKeys(Lt.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Lt.snakeCase);
  }
  constantCase() {
    return this.transformKeys((r) => Lt.snakeCase(r).toUpperCase());
  }
  describe(r) {
    const e = (r ? this.resolve(r) : this).clone(), s = super.describe(r);
    s.fields = {};
    for (const [i, u] of Object.entries(e.fields)) {
      var n;
      let l = r;
      (n = l) != null && n.value && (l = Object.assign({}, l, {
        parent: l.value,
        value: l.value[i]
      })), s.fields[i] = u.describe(l);
    }
    return s;
  }
}
Gr.prototype = Kr.prototype;
const Fn = ({
  className: t = "",
  schema: r = Gr().shape({}),
  onSubmit: e = () => !0,
  onChange: s,
  defaultValues: n,
  disabled: i = !1,
  ...u
}) => {
  const [l, d] = qt(""), h = Cs({
    resolver: Is(r),
    defaultValues: n || {},
    reValidateMode: "onChange",
    disabled: i
  }), p = async (T) => {
    d("loading"), await e(T, h.setError) && h.reset(n), d("");
  }, v = () => {
    const T = { ...h.watch() };
    s && s(T, h.setError);
  };
  return /* @__PURE__ */ $(vs, { ...h, children: /* @__PURE__ */ $(
    "form",
    {
      className: `reform-form ${l ? "reform-loading" : ""} ${t}`,
      onSubmit: h.handleSubmit(p),
      onChange: v,
      ...u
    }
  ) });
}, An = ({ className: t, name: r, label: e, type: s = "text", ...n }) => {
  var l;
  const {
    register: i,
    formState: { errors: u }
  } = Re() || {};
  return /* @__PURE__ */ le(Ze, { children: [
    e && /* @__PURE__ */ $(St, { htmlFor: r, children: e }),
    /* @__PURE__ */ $(
      "input",
      {
        ...n,
        type: s,
        className: `reform-element ${t}`,
        ...r ? i(r) : {}
      }
    ),
    r && u[r] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": r, children: String((l = u[r]) == null ? void 0 : l.message) })
  ] });
}, $n = ({ children: t, className: r, label: e, disabled: s, ...n }) => {
  const i = fs(null), { formState: u } = Re(), [l, d] = qt([]);
  return cs(() => {
    var h;
    i.current && Object.keys(u.errors).length && d([
      ...new Set(
        Array.from((h = i.current) == null ? void 0 : h.querySelectorAll(".reform-item-error")).map((p) => p.innerHTML)
      )
    ]);
  }, [i.current, u]), /* @__PURE__ */ le("div", { children: [
    e && /* @__PURE__ */ $(St, { children: e }),
    /* @__PURE__ */ $(
      "div",
      {
        ref: i,
        ...n,
        className: `reform-input-group group ${r} ${s ? "disabled" : ""}`,
        children: t
      }
    ),
    l == null ? void 0 : l.map((h, p) => /* @__PURE__ */ $("p", { className: "reform-item-error", children: h }, p))
  ] });
}, Cn = ({
  className: t,
  label: r,
  show: e = /* @__PURE__ */ $("i", { className: "reform-password-show" }),
  hide: s = /* @__PURE__ */ $("i", { className: "reform-password-hide" }),
  ...n
}) => {
  const [i, u] = qt("password"), l = () => {
    u(i === "password" ? "text" : "password");
  };
  return /* @__PURE__ */ le($n, { label: r, className: "reform-password", disabled: n.disabled, children: [
    /* @__PURE__ */ $(An, { ...n, className: t, type: i }),
    /* @__PURE__ */ $("span", { className: "mr-2", onClick: l, children: i === "password" ? e : s })
  ] });
}, Dn = ({
  id: t = `reform-checkbox-${Math.random()}`,
  className: r = "",
  name: e,
  label: s,
  type: n = "checkbox",
  value: i = "true",
  ...u
}) => {
  var h;
  const {
    register: l,
    formState: { errors: d }
  } = Re() || {};
  return /* @__PURE__ */ le(Ze, { children: [
    /* @__PURE__ */ le("div", { className: `reform-checkbox ${r}`, children: [
      /* @__PURE__ */ $("input", { ...u, id: t, type: n, value: i, ...e ? l(e) : {} }),
      s && /* @__PURE__ */ $("label", { htmlFor: t, children: s })
    ] }),
    e && d[e] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": e, children: String((h = d[e]) == null ? void 0 : h.message) })
  ] });
}, Vn = ({
  id: t = `reform-radio-${Math.random()}`,
  className: r = "",
  name: e,
  label: s,
  type: n = "radio",
  value: i = "true",
  ...u
}) => {
  var h;
  const {
    register: l,
    formState: { errors: d }
  } = Re() || {};
  return /* @__PURE__ */ le(Ze, { children: [
    /* @__PURE__ */ le("div", { className: `reform-radio ${r}`, children: [
      /* @__PURE__ */ $("input", { ...u, id: t, type: n, value: i, ...e ? l(e) : {} }),
      s && /* @__PURE__ */ $("label", { htmlFor: t, children: s })
    ] }),
    e && d[e] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": e, children: String((h = d[e]) == null ? void 0 : h.message) })
  ] });
}, jn = ({
  children: t,
  className: r = "reform-submit-animation",
  disabled: e,
  ...s
}) => /* @__PURE__ */ $(Ns, { disabled: e, ...s, className: `reform-submit ${r}`, type: "submit", children: t }), Nn = ({
  id: t = `reform-switch-${Math.random()}`,
  className: r = "",
  name: e,
  label: s,
  type: n = "checkbox",
  on: i,
  off: u,
  ...l
}) => {
  var p;
  const {
    register: d,
    formState: { errors: h }
  } = Re() || {};
  return /* @__PURE__ */ le(Ze, { children: [
    /* @__PURE__ */ le("div", { className: `reform-switch ${r}`, children: [
      /* @__PURE__ */ le("div", { children: [
        u && /* @__PURE__ */ $("label", { htmlFor: t, className: "reform-label", children: u }),
        /* @__PURE__ */ $("input", { ...l, id: t, type: n, ...e ? d(e) : {} }),
        i && /* @__PURE__ */ $("label", { htmlFor: t, className: "reform-label", children: i })
      ] }),
      s && /* @__PURE__ */ $("label", { htmlFor: t, children: s })
    ] }),
    e && h[e] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": e, children: String((p = h[e]) == null ? void 0 : p.message) })
  ] });
}, Pn = ({ name: t, resize: r = !0, label: e, className: s, ...n }) => {
  var l;
  const {
    register: i,
    formState: { errors: u }
  } = Re() || {};
  return /* @__PURE__ */ le(Ze, { children: [
    e && /* @__PURE__ */ $(St, { htmlFor: t, children: e }),
    /* @__PURE__ */ $(
      "textarea",
      {
        className: `reform-element reform-textarea ${!r && "resize-none"} ${s}`,
        ...t ? i(t) : {},
        ...n
      }
    ),
    t && u[t] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": t, children: String((l = u[t]) == null ? void 0 : l.message) })
  ] });
}, In = ({ name: t, placeholder: r, label: e, options: s, className: n, ...i }) => {
  var d;
  const {
    register: u,
    formState: { errors: l }
  } = Re() || { formState: {} };
  return /* @__PURE__ */ le(Ze, { children: [
    e && /* @__PURE__ */ $(St, { htmlFor: t, children: e }),
    /* @__PURE__ */ le(
      "select",
      {
        className: `reform-element reform-select ${n}`,
        ...t ? u(t) : {},
        ...i,
        children: [
          r && /* @__PURE__ */ $("option", { value: "", children: r }, "placeholder"),
          s.map(({ children: h, ...p }, v) => /* @__PURE__ */ $("option", { ...p, children: h }, v))
        ]
      }
    ),
    t && l[t] && /* @__PURE__ */ $("p", { className: "reform-item-error", "data-name": t, children: String((d = l[t]) == null ? void 0 : d.message) })
  ] });
}, Mn = ({ name: t = "generic", className: r, ...e }) => {
  const {
    formState: { errors: s }
  } = Re() || {}, n = s[t];
  return /* @__PURE__ */ $("div", { ...e, className: `reform-errorarea ${r}`, children: n && /* @__PURE__ */ le("p", { className: "reform-item-error", children: [
    String(n.message),
    Array.isArray(n.details) && /* @__PURE__ */ $("ul", { children: n.details.map((i, u) => /* @__PURE__ */ $("li", { children: i }, u)) })
  ] }) });
};
export {
  Ns as Button,
  Dn as Checkbox,
  Mn as ErrorArea,
  Fn as Form,
  An as Input,
  $n as InputGroup,
  St as Label,
  Cn as PasswordInput,
  Vn as Radio,
  In as Select,
  jn as Submit,
  Nn as Switch,
  Pn as Textarea,
  Re as useFormContext
};
