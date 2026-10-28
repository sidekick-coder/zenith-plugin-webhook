import * as bu from "vue";
import { ref as F, toRef as ua, computed as j, watch as pe, onMounted as xe, onServerPrefetch as Df, defineComponent as O, openBlock as w, createBlock as z, resolveDynamicComponent as Ur, withCtx as g, renderSlot as C, resolveComponent as Rk, useModel as Ae, mergeProps as I, createElementBlock as Z, toDisplayString as W, mergeModels as Ge, createVNode as A, unref as u, createCommentVNode as re, normalizeClass as ve, createTextVNode as J, createElementVNode as le, withModifiers as Ve, Fragment as Pe, renderList as Qe, h as ar, toRefs as Xe, withKeys as zt, normalizeProps as Be, guardReactiveProps as Ue, withDirectives as ba, vShow as eo, getCurrentInstance as ir, camelize as Mf, shallowRef as to, useAttrs as Nk, nextTick as we, Comment as Vk, cloneVNode as Uk, toHandlerKey as Lk, onUpdated as Wk, triggerRef as Kk, toValue as je, Teleport as Pf, onUnmounted as _t, isRef as lt, reactive as ro, inject as ao, provide as sl, watchEffect as ut, normalizeStyle as Ut, markRaw as Hk, onBeforeUnmount as jf, effectScope as Ff, getCurrentScope as If, onScopeDispose as Tf, isVNode as Wa, createSlots as Gk, vModelText as Rf, withMemo as ll, watchPostEffect as Nf, watchSyncEffect as Yk, mergeDefaults as Vf, customRef as Zk, shallowReadonly as na } from "vue";
import { useForm as Jk, isNotNestedPath as Qk, cleanupNonNestedPath as Xk, Field as e0, useField as t0, ErrorMessage as r0, FieldContextKey as a0, useFieldError as n0, useIsFieldTouched as o0, useIsFieldDirty as i0, useIsFieldValid as s0 } from "vee-validate";
import "vue-router";
import { t as Uf, I as l0, T as u0, g as jn, M as oa } from "./index-CjjI-3eN.mjs";
function Co(e, t) {
  return If() ? (Tf(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Yn() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const a = () => t(r);
      return Co(a), { off: a };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((a) => a(...r))),
    clear: () => {
      e.clear();
    }
  };
}
// @__NO_SIDE_EFFECTS__
function d0(e) {
  let t = !1, r;
  const a = Ff(!0);
  return ((...n) => (t || (r = a.run(() => e(...n)), t = !0), r));
}
const vt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const c0 = (e) => typeof e < "u", f0 = Object.prototype.toString, p0 = (e) => f0.call(e) === "[object Object]", ku = () => {
}, wu = /* @__PURE__ */ y0();
function y0() {
  var e, t, r;
  return vt && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((r = window) === null || r === void 0 ? void 0 : r.navigator.userAgent));
}
function m0(e, t) {
  function r(...a) {
    return new Promise((n, o) => {
      Promise.resolve(e(() => t.apply(this, a), {
        fn: t,
        thisArg: this,
        args: a
      })).then(n).catch(o);
    });
  }
  return r;
}
const h0 = (e) => e();
function v0(e, t = {}) {
  let r, a, n = ku;
  const o = (s) => {
    clearTimeout(s), n(), n = ku;
  };
  let i;
  return (s) => {
    const l = je(e), d = je(t.maxWait);
    return r && o(r), l <= 0 || d !== void 0 && d <= 0 ? (a && (o(a), a = void 0), Promise.resolve(s())) : new Promise((c, f) => {
      n = t.rejectOnCancel ? f : c, i = s, d && !a && (a = setTimeout(() => {
        r && o(r), a = void 0, c(i());
      }, d)), r = setTimeout(() => {
        a && o(a), a = void 0, c(s());
      }, l);
    });
  };
}
function zi(e) {
  return Array.isArray(e) ? e : [e];
}
function g0(e) {
  return ir();
}
// @__NO_SIDE_EFFECTS__
function Lf(e) {
  if (!vt) return e;
  let t = 0, r, a;
  const n = () => {
    t -= 1, a && t <= 0 && (a.stop(), r = void 0, a = void 0);
  };
  return ((...o) => (t += 1, a || (a = Ff(!0), r = a.run(() => e(...o))), Co(n), r));
}
function b0(e) {
  return lt(e) ? ro(new Proxy({}, {
    get(t, r, a) {
      return u(Reflect.get(e.value, r, a));
    },
    set(t, r, a) {
      return lt(e.value[r]) && !lt(a) ? e.value[r].value = a : e.value[r] = a, !0;
    },
    deleteProperty(t, r) {
      return Reflect.deleteProperty(e.value, r);
    },
    has(t, r) {
      return Reflect.has(e.value, r);
    },
    ownKeys() {
      return Object.keys(e.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  })) : ro(e);
}
function k0(e) {
  return b0(j(e));
}
function ye(e, ...t) {
  const r = t.flat(), a = r[0];
  return k0(() => Object.fromEntries(typeof a == "function" ? Object.entries(Xe(e)).filter(([n, o]) => !a(je(o), n)) : Object.entries(Xe(e)).filter((n) => !r.includes(n[0]))));
}
function Wf(e, t = 1e4) {
  return Zk((r, a) => {
    let n = je(e), o;
    const i = () => setTimeout(() => {
      n = je(e), a();
    }, je(t));
    return Co(() => {
      clearTimeout(o);
    }), {
      get() {
        return r(), n;
      },
      set(s) {
        n = s, a(), clearTimeout(o), o = i();
      }
    };
  });
}
function w0(e, t, r = {}) {
  const { eventFilter: a = h0, ...n } = r;
  return pe(e, m0(a, t), n);
}
function x0(e, t) {
  g0() && jf(e, t);
}
function Kf(e, t, r = {}) {
  const { debounce: a = 0, maxWait: n = void 0, ...o } = r;
  return w0(e, t, {
    ...o,
    eventFilter: v0(a, { maxWait: n })
  });
}
function z0(e, t, r) {
  return pe(e, t, {
    ...r,
    immediate: !0
  });
}
const $o = vt ? window : void 0;
function Kt(e) {
  var t;
  const r = je(e);
  return (t = r?.$el) !== null && t !== void 0 ? t : r;
}
function no(...e) {
  const t = (a, n, o, i) => (a.addEventListener(n, o, i), () => a.removeEventListener(n, o, i)), r = j(() => {
    const a = zi(je(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return z0(() => {
    var a, n;
    return [
      (a = (n = r.value) === null || n === void 0 ? void 0 : n.map((o) => Kt(o))) !== null && a !== void 0 ? a : [$o].filter((o) => o != null),
      zi(je(r.value ? e[1] : e[0])),
      zi(u(r.value ? e[2] : e[1])),
      je(r.value ? e[3] : e[2])
    ];
  }, ([a, n, o, i], s, l) => {
    if (!a?.length || !n?.length || !o?.length) return;
    const d = p0(i) ? { ...i } : i, c = a.flatMap((f) => n.flatMap((y) => o.map((p) => t(f, y, p, d))));
    l(() => {
      c.forEach((f) => f());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Hf() {
  const e = to(!1), t = ir();
  return t && xe(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function _0(e) {
  const t = /* @__PURE__ */ Hf();
  return j(() => (t.value, !!e()));
}
function S0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function q0(...e) {
  let t, r, a = {};
  e.length === 3 ? (t = e[0], r = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, r = e[0], a = e[1]) : (t = e[0], r = e[1]) : (t = !0, r = e[0]);
  const { target: n = $o, eventName: o = "keydown", passive: i = !1, dedupe: s = !1 } = a, l = S0(t);
  return no(n, o, (d) => {
    d.repeat && je(s) || l(d) && r(d);
  }, i);
}
function O0(e) {
  return JSON.parse(JSON.stringify(e));
}
function A0(e, t, r = {}) {
  const { window: a = $o, ...n } = r;
  let o;
  const i = /* @__PURE__ */ _0(() => a && "ResizeObserver" in a), s = () => {
    o && (o.disconnect(), o = void 0);
  }, l = pe(j(() => {
    const c = je(e);
    return Array.isArray(c) ? c.map((f) => Kt(f)) : [Kt(c)];
  }), (c) => {
    if (s(), i.value && a) {
      o = new ResizeObserver(t);
      for (const f of c) f && o.observe(f, n);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), d = () => {
    s(), l();
  };
  return Co(d), {
    isSupported: i,
    stop: d
  };
}
// @__NO_SIDE_EFFECTS__
function et(e, t, r, a = {}) {
  var n, o;
  const { clone: i = !1, passive: s = !1, eventName: l, deep: d = !1, defaultValue: c, shouldEmit: f } = a, y = ir(), p = r || y?.emit || (y == null || (n = y.$emit) === null || n === void 0 ? void 0 : n.bind(y)) || (y == null || (o = y.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(y?.proxy));
  let k = l;
  t || (t = "modelValue"), k = k || `update:${t.toString()}`;
  const h = (v) => i ? typeof i == "function" ? i(v) : O0(v) : v, m = () => c0(e[t]) ? h(e[t]) : c, b = (v) => {
    f ? f(v) && p(k, v) : p(k, v);
  };
  if (s) {
    const v = F(m());
    let _ = !1;
    return pe(() => e[t], (x) => {
      _ || (_ = !0, v.value = h(x), we(() => _ = !1));
    }), pe(v, (x) => {
      !_ && (x !== e[t] || d) && b(x);
    }, { deep: d }), v;
  } else return j({
    get() {
      return m();
    },
    set(v) {
      b(v);
    }
  });
}
function _s(e) {
  const t = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid RGB color format: " + e);
  return {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3])
  };
}
function Ss(e) {
  const t = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/.exec(e);
  return t ? {
    r: parseInt(t[1]),
    g: parseInt(t[2]),
    b: parseInt(t[3]),
    a: parseFloat(t[4])
  } : {
    ..._s(e),
    a: 1
  };
}
function E0(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  if (!t)
    throw new Error("Invalid HEX color format: " + e);
  return {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  };
}
function Xa(e) {
  const t = /hsla?\((\d+),\s*(\d+)%,\s*(\d+)%(?:,\s*[\d.]+)?\)/.exec(e);
  if (!t)
    throw new Error("Invalid HSL color format: " + e);
  const r = parseInt(t[1]) / 360, a = parseInt(t[2]) / 100, n = parseInt(t[3]) / 100;
  let o, i, s;
  if (a === 0)
    o = i = s = n;
  else {
    const l = (f, y, p) => (p < 0 && (p += 1), p > 1 && (p -= 1), p < 0.16666666666666666 ? f + (y - f) * 6 * p : p < 0.5 ? y : p < 0.6666666666666666 ? f + (y - f) * (0.6666666666666666 - p) * 6 : f), d = n < 0.5 ? n * (1 + a) : n + a - n * a, c = 2 * n - d;
    o = l(c, d, r + 1 / 3), i = l(c, d, r), s = l(c, d, r - 1 / 3);
  }
  return {
    r: Math.round(o * 255),
    g: Math.round(i * 255),
    b: Math.round(s * 255)
  };
}
function qs(e, t, r) {
  e /= 255, t /= 255, r /= 255;
  const a = Math.max(e, t, r), n = Math.min(e, t, r), o = (a + n) / 2;
  if (a === n)
    return {
      h: 0,
      s: 0,
      l: Math.round(o * 100)
    };
  const i = a - n, s = o > 0.5 ? i / (2 - a - n) : i / (a + n);
  let l = 0;
  switch (a) {
    case e:
      l = ((t - r) / i + (t < r ? 6 : 0)) * 60;
      break;
    case t:
      l = ((r - e) / i + 2) * 60;
      break;
    case r:
      l = ((e - t) / i + 4) * 60;
      break;
  }
  return {
    h: Math.round(l),
    s: Math.round(s * 100),
    l: Math.round(o * 100)
  };
}
function Bo(e, t, r) {
  const a = (n) => {
    const o = n.toString(16);
    return o.length === 1 ? "0" + o : o;
  };
  return `#${a(e)}${a(t)}${a(r)}`;
}
function C0(e) {
  const t = /oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/.exec(e);
  if (!t)
    throw new Error("Invalid OKLCH color format: " + e);
  return {
    l: parseFloat(t[1]),
    c: parseFloat(t[2]),
    h: parseFloat(t[3])
  };
}
function Gf(e) {
  const t = C0(e), { l: r, c: a, h: n } = t, o = n * Math.PI / 180, i = a * Math.cos(o), s = a * Math.sin(o), l = r + 0.3963377774 * i + 0.2158037573 * s, d = r - 0.1055613458 * i - 0.0638541728 * s, c = r - 0.0894841775 * i - 1.291485548 * s, f = l * l * l, y = d * d * d, p = c * c * c;
  let k = 4.0767416621 * f - 3.3077115913 * y + 0.2309699292 * p, h = -1.2684380046 * f + 2.6097574011 * y - 0.3413193965 * p, m = -0.0041960863 * f - 0.7034186147 * y + 1.707614701 * p;
  const b = (v) => v >= 31308e-7 ? 1.055 * Math.pow(v, 1 / 2.4) - 0.055 : 12.92 * v;
  return k = b(k), h = b(h), m = b(m), {
    r: Math.round(Math.max(0, Math.min(1, k)) * 255),
    g: Math.round(Math.max(0, Math.min(1, h)) * 255),
    b: Math.round(Math.max(0, Math.min(1, m)) * 255)
  };
}
function ul(e, t, r) {
  e = e / 255, t = t / 255, r = r / 255;
  const a = (h) => h >= 0.04045 ? Math.pow((h + 0.055) / 1.055, 2.4) : h / 12.92;
  e = a(e), t = a(t), r = a(r);
  const n = 0.4122214708 * e + 0.5363325363 * t + 0.0514459929 * r, o = 0.2119034982 * e + 0.6806995451 * t + 0.1073969566 * r, i = 0.0883024619 * e + 0.2817188376 * t + 0.6299787005 * r, s = Math.cbrt(n), l = Math.cbrt(o), d = Math.cbrt(i), c = 0.2104542553 * s + 0.793617785 * l - 0.0040720468 * d, f = 1.9779984951 * s - 2.428592205 * l + 0.4505937099 * d, y = 0.0259040371 * s + 0.7827717662 * l - 0.808675766 * d, p = Math.sqrt(f * f + y * y);
  let k = Math.atan2(y, f) * (180 / Math.PI);
  return k < 0 && (k += 360), {
    l: Math.round(c * 1e3) / 1e3,
    c: Math.round(p * 1e3) / 1e3,
    h: Math.round(k * 1e3) / 1e3
  };
}
function Ea(e) {
  const t = lt(e) ? e : F(je(e));
  return j({
    get() {
      return t.value ? t.value.startsWith("#") ? "hex" : /^rgba/.test(t.value) ? "rgba" : /^rgb/.test(t.value) ? "rgb" : /^oklch/.test(t.value) ? "oklch" : /^hsla/.test(t.value) ? "hsla" : /^hsl/.test(t.value) ? "hsl" : "unknown" : null;
    },
    set(r) {
      if (!t.value || !r)
        return;
      const a = yn(t).value;
      if (a) {
        if (r === "hex") {
          t.value = Bo(a.r, a.g, a.b);
          return;
        }
        if (r === "rgb") {
          t.value = `rgb(${a.r}, ${a.g}, ${a.b})`;
          return;
        }
        if (r === "rgba") {
          t.value = `rgba(${a.r}, ${a.g}, ${a.b}, 1)`;
          return;
        }
        if (r === "hsl") {
          const n = qs(a.r, a.g, a.b);
          t.value = `hsl(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (r === "hsla") {
          const n = qs(a.r, a.g, a.b);
          t.value = `hsla(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (r === "oklch") {
          const n = ul(a.r, a.g, a.b);
          t.value = `oklch(${n.l} ${n.c} ${n.h})`;
          return;
        }
      }
    }
  });
}
function yn(e) {
  const t = lt(e) ? e : F(je(e)), r = Ea(t);
  return j({
    get() {
      if (!t.value)
        return null;
      if (r.value === "rgba") {
        const a = Ss(t.value);
        return {
          r: a.r,
          g: a.g,
          b: a.b
        };
      }
      return r.value === "rgb" ? _s(t.value) : r.value === "hex" && t.value.length === 7 ? E0(t.value) : r.value === "hsl" ? Xa(t.value) : r.value === "oklch" ? Gf(t.value) : null;
    },
    set() {
      if (t.value) {
        if (r.value === "rgb") {
          const a = _s(t.value);
          t.value = `rgb(${a.r}, ${a.g}, ${a.b})`;
        }
        if (r.value === "rgba") {
          const a = Ss(t.value);
          t.value = `rgba(${a.r}, ${a.g}, ${a.b}, ${a.a})`;
        }
      }
    }
  });
}
function $0(e) {
  const t = lt(e) ? e : F(je(e)), r = Ea(t), a = yn(t);
  return j({
    get() {
      return a.value ? r.value === "rgba" ? Ss(t.value) : {
        ...a.value,
        a: 1
      } : null;
    },
    set(n) {
      if (!(!n || !t.value)) {
        if (r.value === "rgba") {
          t.value = `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
          return;
        }
        if (r.value === "rgb") {
          t.value = `rgb(${n.r}, ${n.g}, ${n.b})`;
          return;
        }
      }
    }
  });
}
function B0(e) {
  const t = lt(e) ? e : F(je(e)), r = Ea(t), a = yn(t);
  return j({
    get() {
      return a.value ? qs(a.value.r, a.value.g, a.value.b) : null;
    },
    set(n) {
      if (!(!n || !t.value)) {
        if (r.value === "hsl") {
          t.value = `hsl(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (r.value === "hsla") {
          t.value = `hsla(${n.h}, ${n.s}%, ${n.l}%)`;
          return;
        }
        if (r.value === "hex") {
          const o = Xa(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = Bo(o.r, o.g, o.b);
          return;
        }
        if (r.value === "rgba") {
          const o = Xa(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgba(${o.r}, ${o.g}, ${o.b}, 1)`;
          return;
        }
        if (r.value === "rgb") {
          const o = Xa(`hsl(${n.h}, ${n.s}%, ${n.l}%)`);
          t.value = `rgb(${o.r}, ${o.g}, ${o.b})`;
          return;
        }
        if (r.value === "oklch") {
          const o = Xa(`hsl(${n.h}, ${n.s}%, ${n.l}%)`), i = ul(o.r, o.g, o.b);
          t.value = `oklch(${i.l} ${i.c} ${i.h})`;
          return;
        }
      }
    }
  });
}
function D0(e) {
  const t = lt(e) ? e : F(je(e)), r = Ea(t), a = yn(t);
  return j({
    get() {
      return a.value ? Bo(a.value.r, a.value.g, a.value.b) : null;
    },
    set(n) {
      if (n && r.value === "hex") {
        t.value = n.startsWith("#") ? n : `#${n}`;
        return;
      }
    }
  });
}
function Yf(e) {
  const t = lt(e) ? e : F(je(e)), r = Ea(t), a = D0(t), n = yn(t), o = $0(t), i = B0(t), s = j({
    get() {
      return n.value ? ul(n.value.r, n.value.g, n.value.b) : null;
    },
    set(l) {
      if (!l)
        return;
      if (r.value === "oklch") {
        t.value = `oklch(${l.l} ${l.c} ${l.h})`;
        return;
      }
      const d = Gf(`oklch(${l.l} ${l.c} ${l.h})`);
      if (r.value === "hex") {
        t.value = Bo(d.r, d.g, d.b);
        return;
      }
      if (r.value === "rgb") {
        t.value = `rgb(${d.r}, ${d.g}, ${d.b})`;
        return;
      }
    }
  });
  return {
    type: r,
    color: t,
    hex: a,
    rgb: n,
    hsl: i,
    oklch: s,
    rgba: o
  };
}
class Ca extends Error {
  status = 500;
  constructor(t, r = 500) {
    super(t), this.name = "BaseException", this.status = r;
  }
  static fromError(t) {
    return new Ca(t.message, 500);
  }
}
class M0 {
  entries = /* @__PURE__ */ new Map();
  loadFromRecord(t) {
    Object.entries(t).forEach(([r, a]) => {
      this.set(r, a);
    });
  }
  toRecord() {
    const t = {};
    for (const [r, a] of this.entries.entries())
      t[String(r)] = a;
    return t;
  }
  getKey(t) {
    let r = t;
    (typeof t == "function" || typeof t == "object") && (r = t.name);
    const a = typeof t != "string" && typeof t != "symbol";
    return a && !t?.__container_entry_key && console.warn(`Warning: The constructor ${t?.name || t} does not have a unique identifier. Consider adding a static property __container_entry_key to avoid potential conflicts.`), a && t?.__container_entry_key && (r = t.__container_entry_key), r;
  }
  set(t, r) {
    const a = this.getKey(t);
    return this.entries.set(a, r), this;
  }
  has(t) {
    const r = this.getKey(t);
    return this.entries.has(r);
  }
  get(t) {
    const r = this.getKey(t);
    if (!this.entries.has(r))
      throw new Ca(`Entry with key "${String(r)}" not found in container.`);
    return this.entries.get(r);
  }
  unset(t) {
    const r = this.getKey(t);
    this.entries.delete(r);
  }
  singleton(t) {
    const r = t.name, a = this.entries.get(r);
    if (a)
      return a;
    const n = new t();
    return this.entries.set(r, n), n;
  }
  load(t) {
    Object.entries(t).forEach(([r, a]) => {
      this.set(r, a);
    });
  }
  proxy(t) {
    return new Proxy({}, {
      get: (r, a) => {
        const n = this.get(t), o = n[a];
        return typeof o == "function" ? o.bind(n) : n[a];
      },
      set: (r, a, n) => {
        const o = this.get(t);
        return o[a] = n, !0;
      }
    });
  }
  keys() {
    return Array.from(this.entries.keys());
  }
  clear() {
    this.entries.clear();
  }
}
const dt = globalThis.clientContainer || new M0();
globalThis.clientContainer = dt;
function P0(e, t) {
  const r = dt.get("state");
  let a = r[e];
  !a && t?.default !== void 0 && (a = t.default()), a && t?.transform && (a = t.transform(a));
  const n = F(a), o = (i) => {
    r[e] = i, dt.set("state", r);
  };
  return pe(n, o, { deep: !0 }), j({
    get: () => n.value,
    set: (i) => {
      n.value = i, o(i);
    }
  });
}
var xu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function j0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function F0(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      var n = !1;
      try {
        n = this instanceof a;
      } catch {
      }
      return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var zu, _u;
function $a() {
  return _u || (_u = 1, zu = TypeError), zu;
}
const I0 = {}, T0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: I0
}, Symbol.toStringTag, { value: "Module" })), R0 = /* @__PURE__ */ F0(T0);
var _i, Su;
function Do() {
  if (Su) return _i;
  Su = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, a = e && Map.prototype.forEach, n = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && n ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, i = n && o && typeof o.get == "function" ? o.get : null, s = n && Set.prototype.forEach, l = typeof WeakMap == "function" && WeakMap.prototype, d = l ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, p = y ? WeakRef.prototype.deref : null, k = Boolean.prototype.valueOf, h = Object.prototype.toString, m = Function.prototype.toString, b = String.prototype.match, v = String.prototype.slice, _ = String.prototype.replace, x = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, S = RegExp.prototype.test, q = Array.prototype.concat, E = Array.prototype.join, D = Array.prototype.slice, N = Math.floor, ee = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ie = Object.getOwnPropertySymbols, H = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, X = typeof Symbol == "function" && typeof Symbol.iterator == "object", P = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === X || !0) ? Symbol.toStringTag : null, V = Object.prototype.propertyIsEnumerable, R = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(M) {
    return M.__proto__;
  } : null);
  function L(M, T) {
    if (M === 1 / 0 || M === -1 / 0 || M !== M || M && M > -1e3 && M < 1e3 || S.call(/e/, T))
      return T;
    var ke = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof M == "number") {
      var $e = M < 0 ? -N(-M) : N(M);
      if ($e !== M) {
        var De = String($e), me = v.call(T, De.length + 1);
        return _.call(De, ke, "$&_") + "." + _.call(_.call(me, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(T, ke, "$&_");
  }
  var de = R0, G = de.custom, _e = Ze(G) ? G : null, Se = {
    __proto__: null,
    double: '"',
    single: "'"
  }, Le = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  _i = function M(T, ke, $e, De) {
    var me = ke || {};
    if (Re(me, "quoteStyle") && !Re(Se, me.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Re(me, "maxStringLength") && (typeof me.maxStringLength == "number" ? me.maxStringLength < 0 && me.maxStringLength !== 1 / 0 : me.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var cr = Re(me, "customInspect") ? me.customInspect : !0;
    if (typeof cr != "boolean" && cr !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Re(me, "indent") && me.indent !== null && me.indent !== "	" && !(parseInt(me.indent, 10) === me.indent && me.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Re(me, "numericSeparator") && typeof me.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var $r = me.numericSeparator;
    if (typeof T > "u")
      return "undefined";
    if (T === null)
      return "null";
    if (typeof T == "boolean")
      return T ? "true" : "false";
    if (typeof T == "string")
      return uu(T, me);
    if (typeof T == "number") {
      if (T === 0)
        return 1 / 0 / T > 0 ? "0" : "-0";
      var pt = String(T);
      return $r ? L(T, pt) : pt;
    }
    if (typeof T == "bigint") {
      var fr = String(T) + "n";
      return $r ? L(T, fr) : fr;
    }
    var hi = typeof me.depth > "u" ? 5 : me.depth;
    if (typeof $e > "u" && ($e = 0), $e >= hi && hi > 0 && typeof T == "object")
      return Oe(T) ? "[Array]" : "[Object]";
    var ra = Fk(me, $e);
    if (typeof De > "u")
      De = [];
    else if (kt(De, T) >= 0)
      return "[Circular]";
    function qt(aa, Pn, Tk) {
      if (Pn && (De = D.call(De), De.push(Pn)), Tk) {
        var gu = {
          depth: me.depth
        };
        return Re(me, "quoteStyle") && (gu.quoteStyle = me.quoteStyle), M(aa, gu, $e + 1, De);
      }
      return M(aa, me, $e + 1, De);
    }
    if (typeof T == "function" && !U(T)) {
      var cu = Cr(T), fu = Dn(T, qt);
      return "[Function" + (cu ? ": " + cu : " (anonymous)") + "]" + (fu.length > 0 ? " { " + E.call(fu, ", ") + " }" : "");
    }
    if (Ze(T)) {
      var pu = X ? _.call(String(T), /^(Symbol\(.*\))_[^)]*$/, "$1") : H.call(T);
      return typeof T == "object" && !X ? Ua(pu) : pu;
    }
    if (Mk(T)) {
      for (var La = "<" + $.call(String(T.nodeName)), vi = T.attributes || [], Mn = 0; Mn < vi.length; Mn++)
        La += " " + vi[Mn].name + "=" + Ie(be(vi[Mn].value), "double", me);
      return La += ">", T.childNodes && T.childNodes.length && (La += "..."), La += "</" + $.call(String(T.nodeName)) + ">", La;
    }
    if (Oe(T)) {
      if (T.length === 0)
        return "[]";
      var gi = Dn(T, qt);
      return ra && !jk(gi) ? "[" + mi(gi, ra) + "]" : "[ " + E.call(gi, ", ") + " ]";
    }
    if (Q(T)) {
      var bi = Dn(T, qt);
      return !("cause" in Error.prototype) && "cause" in T && !V.call(T, "cause") ? "{ [" + String(T) + "] " + E.call(q.call("[cause]: " + qt(T.cause), bi), ", ") + " }" : bi.length === 0 ? "[" + String(T) + "]" : "{ [" + String(T) + "] " + E.call(bi, ", ") + " }";
    }
    if (typeof T == "object" && cr) {
      if (_e && typeof T[_e] == "function" && de)
        return de(T, { depth: hi - $e });
      if (cr !== "symbol" && typeof T.inspect == "function")
        return T.inspect();
    }
    if (Xr(T)) {
      var yu = [];
      return a && a.call(T, function(aa, Pn) {
        yu.push(qt(Pn, T, !0) + " => " + qt(aa, T));
      }), du("Map", r.call(T), yu, ra);
    }
    if (Bk(T)) {
      var mu = [];
      return s && s.call(T, function(aa) {
        mu.push(qt(aa, T));
      }), du("Set", i.call(T), mu, ra);
    }
    if (ea(T))
      return yi("WeakMap");
    if (Dk(T))
      return yi("WeakSet");
    if (ta(T))
      return yi("WeakRef");
    if (fe(T))
      return Ua(qt(Number(T)));
    if (Ne(T))
      return Ua(qt(ee.call(T)));
    if (ge(T))
      return Ua(k.call(T));
    if (se(T))
      return Ua(qt(String(T)));
    if (typeof window < "u" && T === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && T === globalThis || typeof xu < "u" && T === xu)
      return "{ [object globalThis] }";
    if (!Y(T) && !U(T)) {
      var ki = Dn(T, qt), hu = R ? R(T) === Object.prototype : T instanceof Object || T.constructor === Object, wi = T instanceof Object ? "" : "null prototype", vu = !hu && P && Object(T) === T && P in T ? v.call(rt(T), 8, -1) : wi ? "Object" : "", Ik = hu || typeof T.constructor != "function" ? "" : T.constructor.name ? T.constructor.name + " " : "", xi = Ik + (vu || wi ? "[" + E.call(q.call([], vu || [], wi || []), ": ") + "] " : "");
      return ki.length === 0 ? xi + "{}" : ra ? xi + "{" + mi(ki, ra) + "}" : xi + "{ " + E.call(ki, ", ") + " }";
    }
    return String(T);
  };
  function Ie(M, T, ke) {
    var $e = ke.quoteStyle || T, De = Se[$e];
    return De + M + De;
  }
  function be(M) {
    return _.call(String(M), /"/g, "&quot;");
  }
  function ce(M) {
    return !P || !(typeof M == "object" && (P in M || typeof M[P] < "u"));
  }
  function Oe(M) {
    return rt(M) === "[object Array]" && ce(M);
  }
  function Y(M) {
    return rt(M) === "[object Date]" && ce(M);
  }
  function U(M) {
    return rt(M) === "[object RegExp]" && ce(M);
  }
  function Q(M) {
    return rt(M) === "[object Error]" && ce(M);
  }
  function se(M) {
    return rt(M) === "[object String]" && ce(M);
  }
  function fe(M) {
    return rt(M) === "[object Number]" && ce(M);
  }
  function ge(M) {
    return rt(M) === "[object Boolean]" && ce(M);
  }
  function Ze(M) {
    if (X)
      return M && typeof M == "object" && M instanceof Symbol;
    if (typeof M == "symbol")
      return !0;
    if (!M || typeof M != "object" || !H)
      return !1;
    try {
      return H.call(M), !0;
    } catch {
    }
    return !1;
  }
  function Ne(M) {
    if (!M || typeof M != "object" || !ee)
      return !1;
    try {
      return ee.call(M), !0;
    } catch {
    }
    return !1;
  }
  var ze = Object.prototype.hasOwnProperty || function(M) {
    return M in this;
  };
  function Re(M, T) {
    return ze.call(M, T);
  }
  function rt(M) {
    return h.call(M);
  }
  function Cr(M) {
    if (M.name)
      return M.name;
    var T = b.call(m.call(M), /^function\s*([\w$]+)/);
    return T ? T[1] : null;
  }
  function kt(M, T) {
    if (M.indexOf)
      return M.indexOf(T);
    for (var ke = 0, $e = M.length; ke < $e; ke++)
      if (M[ke] === T)
        return ke;
    return -1;
  }
  function Xr(M) {
    if (!r || !M || typeof M != "object")
      return !1;
    try {
      r.call(M);
      try {
        i.call(M);
      } catch {
        return !0;
      }
      return M instanceof Map;
    } catch {
    }
    return !1;
  }
  function ea(M) {
    if (!d || !M || typeof M != "object")
      return !1;
    try {
      d.call(M, d);
      try {
        f.call(M, f);
      } catch {
        return !0;
      }
      return M instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function ta(M) {
    if (!p || !M || typeof M != "object")
      return !1;
    try {
      return p.call(M), !0;
    } catch {
    }
    return !1;
  }
  function Bk(M) {
    if (!i || !M || typeof M != "object")
      return !1;
    try {
      i.call(M);
      try {
        r.call(M);
      } catch {
        return !0;
      }
      return M instanceof Set;
    } catch {
    }
    return !1;
  }
  function Dk(M) {
    if (!f || !M || typeof M != "object")
      return !1;
    try {
      f.call(M, f);
      try {
        d.call(M, d);
      } catch {
        return !0;
      }
      return M instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Mk(M) {
    return !M || typeof M != "object" ? !1 : typeof HTMLElement < "u" && M instanceof HTMLElement ? !0 : typeof M.nodeName == "string" && typeof M.getAttribute == "function";
  }
  function uu(M, T) {
    if (M.length > T.maxStringLength) {
      var ke = M.length - T.maxStringLength, $e = "... " + ke + " more character" + (ke > 1 ? "s" : "");
      return uu(v.call(M, 0, T.maxStringLength), T) + $e;
    }
    var De = Le[T.quoteStyle || "single"];
    De.lastIndex = 0;
    var me = _.call(_.call(M, De, "\\$1"), /[\x00-\x1f]/g, Pk);
    return Ie(me, "single", T);
  }
  function Pk(M) {
    var T = M.charCodeAt(0), ke = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[T];
    return ke ? "\\" + ke : "\\x" + (T < 16 ? "0" : "") + x.call(T.toString(16));
  }
  function Ua(M) {
    return "Object(" + M + ")";
  }
  function yi(M) {
    return M + " { ? }";
  }
  function du(M, T, ke, $e) {
    var De = $e ? mi(ke, $e) : E.call(ke, ", ");
    return M + " (" + T + ") {" + De + "}";
  }
  function jk(M) {
    for (var T = 0; T < M.length; T++)
      if (kt(M[T], `
`) >= 0)
        return !1;
    return !0;
  }
  function Fk(M, T) {
    var ke;
    if (M.indent === "	")
      ke = "	";
    else if (typeof M.indent == "number" && M.indent > 0)
      ke = E.call(Array(M.indent + 1), " ");
    else
      return null;
    return {
      base: ke,
      prev: E.call(Array(T + 1), ke)
    };
  }
  function mi(M, T) {
    if (M.length === 0)
      return "";
    var ke = `
` + T.prev + T.base;
    return ke + E.call(M, "," + ke) + `
` + T.prev;
  }
  function Dn(M, T) {
    var ke = Oe(M), $e = [];
    if (ke) {
      $e.length = M.length;
      for (var De = 0; De < M.length; De++)
        $e[De] = Re(M, De) ? T(M[De], M) : "";
    }
    var me = typeof ie == "function" ? ie(M) : [], cr;
    if (X) {
      cr = {};
      for (var $r = 0; $r < me.length; $r++)
        cr["$" + me[$r]] = me[$r];
    }
    for (var pt in M)
      Re(M, pt) && (ke && String(Number(pt)) === pt && pt < M.length || X && cr["$" + pt] instanceof Symbol || (S.call(/[^\w$]/, pt) ? $e.push(T(pt, M) + ": " + T(M[pt], M)) : $e.push(pt + ": " + T(M[pt], M))));
    if (typeof ie == "function")
      for (var fr = 0; fr < me.length; fr++)
        V.call(M, me[fr]) && $e.push("[" + T(me[fr]) + "]: " + T(M[me[fr]], M));
    return $e;
  }
  return _i;
}
var Si, qu;
function N0() {
  if (qu) return Si;
  qu = 1;
  var e = /* @__PURE__ */ Do(), t = /* @__PURE__ */ $a(), r = function(s, l, d) {
    for (var c = s, f; (f = c.next) != null; c = f)
      if (f.key === l)
        return c.next = f.next, d || (f.next = /** @type {NonNullable<typeof list.next>} */
        s.next, s.next = f), f;
  }, a = function(s, l) {
    if (s) {
      var d = r(s, l);
      return d && d.value;
    }
  }, n = function(s, l, d) {
    var c = r(s, l);
    c ? c.value = d : s.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: l,
      next: s.next,
      value: d
    };
  }, o = function(s, l) {
    return s ? !!r(s, l) : !1;
  }, i = function(s, l) {
    if (s)
      return r(s, l, !0);
  };
  return Si = function() {
    var s, l = {
      assert: function(d) {
        if (!l.has(d))
          throw new t("Side channel does not contain " + e(d));
      },
      delete: function(d) {
        var c = i(s, d);
        return c && s && !s.next && (s = void 0), !!c;
      },
      get: function(d) {
        return a(s, d);
      },
      has: function(d) {
        return o(s, d);
      },
      set: function(d, c) {
        s || (s = {
          next: void 0
        }), n(
          /** @type {NonNullable<typeof $o>} */
          s,
          d,
          c
        );
      }
    };
    return l;
  }, Si;
}
var Ou, Au;
function Zf() {
  return Au || (Au = 1, Ou = Object), Ou;
}
var Eu, Cu;
function V0() {
  return Cu || (Cu = 1, Eu = Error), Eu;
}
var $u, Bu;
function U0() {
  return Bu || (Bu = 1, $u = EvalError), $u;
}
var Du, Mu;
function L0() {
  return Mu || (Mu = 1, Du = RangeError), Du;
}
var Pu, ju;
function W0() {
  return ju || (ju = 1, Pu = ReferenceError), Pu;
}
var Fu, Iu;
function K0() {
  return Iu || (Iu = 1, Fu = SyntaxError), Fu;
}
var Tu, Ru;
function H0() {
  return Ru || (Ru = 1, Tu = URIError), Tu;
}
var Nu, Vu;
function G0() {
  return Vu || (Vu = 1, Nu = Math.abs), Nu;
}
var Uu, Lu;
function Y0() {
  return Lu || (Lu = 1, Uu = Math.floor), Uu;
}
var Wu, Ku;
function Z0() {
  return Ku || (Ku = 1, Wu = Math.max), Wu;
}
var Hu, Gu;
function J0() {
  return Gu || (Gu = 1, Hu = Math.min), Hu;
}
var Yu, Zu;
function Q0() {
  return Zu || (Zu = 1, Yu = Math.pow), Yu;
}
var Ju, Qu;
function X0() {
  return Qu || (Qu = 1, Ju = Math.round), Ju;
}
var Xu, ed;
function ew() {
  return ed || (ed = 1, Xu = Number.isNaN || function(e) {
    return e !== e;
  }), Xu;
}
var qi, td;
function tw() {
  if (td) return qi;
  td = 1;
  var e = /* @__PURE__ */ ew();
  return qi = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, qi;
}
var rd, ad;
function rw() {
  return ad || (ad = 1, rd = Object.getOwnPropertyDescriptor), rd;
}
var Oi, nd;
function Jf() {
  if (nd) return Oi;
  nd = 1;
  var e = /* @__PURE__ */ rw();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Oi = e, Oi;
}
var Ai, od;
function aw() {
  if (od) return Ai;
  od = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ai = e, Ai;
}
var id, sd;
function nw() {
  return sd || (sd = 1, id = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = /* @__PURE__ */ Symbol("test"), r = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var a = 42;
    e[t] = a;
    for (var n in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (i.value !== a || i.enumerable !== !0)
        return !1;
    }
    return !0;
  }), id;
}
var Ei, ld;
function ow() {
  if (ld) return Ei;
  ld = 1;
  var e = typeof Symbol < "u" && Symbol, t = nw();
  return Ei = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Ei;
}
var ud, dd;
function Qf() {
  return dd || (dd = 1, ud = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ud;
}
var Ci, cd;
function Xf() {
  if (cd) return Ci;
  cd = 1;
  var e = /* @__PURE__ */ Zf();
  return Ci = e.getPrototypeOf || null, Ci;
}
var $i, fd;
function iw() {
  if (fd) return $i;
  fd = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, a = "[object Function]", n = function(s, l) {
    for (var d = [], c = 0; c < s.length; c += 1)
      d[c] = s[c];
    for (var f = 0; f < l.length; f += 1)
      d[f + s.length] = l[f];
    return d;
  }, o = function(s, l) {
    for (var d = [], c = l, f = 0; c < s.length; c += 1, f += 1)
      d[f] = s[c];
    return d;
  }, i = function(s, l) {
    for (var d = "", c = 0; c < s.length; c += 1)
      d += s[c], c + 1 < s.length && (d += l);
    return d;
  };
  return $i = function(s) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== a)
      throw new TypeError(e + l);
    for (var d = o(arguments, 1), c, f = function() {
      if (this instanceof c) {
        var m = l.apply(
          this,
          n(d, arguments)
        );
        return Object(m) === m ? m : this;
      }
      return l.apply(
        s,
        n(d, arguments)
      );
    }, y = r(0, l.length - d.length), p = [], k = 0; k < y; k++)
      p[k] = "$" + k;
    if (c = Function("binder", "return function (" + i(p, ",") + "){ return binder.apply(this,arguments); }")(f), l.prototype) {
      var h = function() {
      };
      h.prototype = l.prototype, c.prototype = new h(), h.prototype = null;
    }
    return c;
  }, $i;
}
var Bi, pd;
function Mo() {
  if (pd) return Bi;
  pd = 1;
  var e = iw();
  return Bi = Function.prototype.bind || e, Bi;
}
var yd, md;
function dl() {
  return md || (md = 1, yd = Function.prototype.call), yd;
}
var hd, vd;
function ep() {
  return vd || (vd = 1, hd = Function.prototype.apply), hd;
}
var gd, bd;
function sw() {
  return bd || (bd = 1, gd = typeof Reflect < "u" && Reflect && Reflect.apply), gd;
}
var Di, kd;
function lw() {
  if (kd) return Di;
  kd = 1;
  var e = Mo(), t = ep(), r = dl(), a = sw();
  return Di = a || e.call(r, t), Di;
}
var Mi, wd;
function tp() {
  if (wd) return Mi;
  wd = 1;
  var e = Mo(), t = /* @__PURE__ */ $a(), r = dl(), a = lw();
  return Mi = function(n) {
    if (n.length < 1 || typeof n[0] != "function")
      throw new t("a function is required");
    return a(e, r, n);
  }, Mi;
}
var Pi, xd;
function uw() {
  if (xd) return Pi;
  xd = 1;
  var e = tp(), t = /* @__PURE__ */ Jf(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var a = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), n = Object, o = n.getPrototypeOf;
  return Pi = a && typeof a.get == "function" ? e([a.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    (function(i) {
      return o(i == null ? i : n(i));
    })
  ) : !1, Pi;
}
var ji, zd;
function dw() {
  if (zd) return ji;
  zd = 1;
  var e = Qf(), t = Xf(), r = /* @__PURE__ */ uw();
  return ji = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : r ? function(a) {
    return r(a);
  } : null, ji;
}
var Fi, _d;
function cw() {
  if (_d) return Fi;
  _d = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Mo();
  return Fi = r.call(e, t), Fi;
}
var Ii, Sd;
function cl() {
  if (Sd) return Ii;
  Sd = 1;
  var e, t = /* @__PURE__ */ Zf(), r = /* @__PURE__ */ V0(), a = /* @__PURE__ */ U0(), n = /* @__PURE__ */ L0(), o = /* @__PURE__ */ W0(), i = /* @__PURE__ */ K0(), s = /* @__PURE__ */ $a(), l = /* @__PURE__ */ H0(), d = /* @__PURE__ */ G0(), c = /* @__PURE__ */ Y0(), f = /* @__PURE__ */ Z0(), y = /* @__PURE__ */ J0(), p = /* @__PURE__ */ Q0(), k = /* @__PURE__ */ X0(), h = /* @__PURE__ */ tw(), m = Function, b = function(U) {
    try {
      return m('"use strict"; return (' + U + ").constructor;")();
    } catch {
    }
  }, v = /* @__PURE__ */ Jf(), _ = /* @__PURE__ */ aw(), x = function() {
    throw new s();
  }, $ = v ? (function() {
    try {
      return arguments.callee, x;
    } catch {
      try {
        return v(arguments, "callee").get;
      } catch {
        return x;
      }
    }
  })() : x, S = ow()(), q = dw(), E = Xf(), D = Qf(), N = ep(), ee = dl(), ie = {}, H = typeof Uint8Array > "u" || !q ? e : q(Uint8Array), X = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": S && q ? q([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": ie,
    "%AsyncGenerator%": ie,
    "%AsyncGeneratorFunction%": ie,
    "%AsyncIteratorPrototype%": ie,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": a,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": m,
    "%GeneratorFunction%": ie,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": S && q ? q(q([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !S || !q ? e : q((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": v,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": n,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !S || !q ? e : q((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": S && q ? q(""[Symbol.iterator]()) : e,
    "%Symbol%": S ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": $,
    "%TypedArray%": H,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": l,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": ee,
    "%Function.prototype.apply%": N,
    "%Object.defineProperty%": _,
    "%Object.getPrototypeOf%": E,
    "%Math.abs%": d,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": y,
    "%Math.pow%": p,
    "%Math.round%": k,
    "%Math.sign%": h,
    "%Reflect.getPrototypeOf%": D
  };
  if (q)
    try {
      null.error;
    } catch (U) {
      var P = q(q(U));
      X["%Error.prototype%"] = P;
    }
  var V = function U(Q) {
    var se;
    if (Q === "%AsyncFunction%")
      se = b("async function () {}");
    else if (Q === "%GeneratorFunction%")
      se = b("function* () {}");
    else if (Q === "%AsyncGeneratorFunction%")
      se = b("async function* () {}");
    else if (Q === "%AsyncGenerator%") {
      var fe = U("%AsyncGeneratorFunction%");
      fe && (se = fe.prototype);
    } else if (Q === "%AsyncIteratorPrototype%") {
      var ge = U("%AsyncGenerator%");
      ge && q && (se = q(ge.prototype));
    }
    return X[Q] = se, se;
  }, R = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, L = Mo(), de = /* @__PURE__ */ cw(), G = L.call(ee, Array.prototype.concat), _e = L.call(N, Array.prototype.splice), Se = L.call(ee, String.prototype.replace), Le = L.call(ee, String.prototype.slice), Ie = L.call(ee, RegExp.prototype.exec), be = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ce = /\\(\\)?/g, Oe = function(U) {
    var Q = Le(U, 0, 1), se = Le(U, -1);
    if (Q === "%" && se !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (se === "%" && Q !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var fe = [];
    return Se(U, be, function(ge, Ze, Ne, ze) {
      fe[fe.length] = Ne ? Se(ze, ce, "$1") : Ze || ge;
    }), fe;
  }, Y = function(U, Q) {
    var se = U, fe;
    if (de(R, se) && (fe = R[se], se = "%" + fe[0] + "%"), de(X, se)) {
      var ge = X[se];
      if (ge === ie && (ge = V(se)), typeof ge > "u" && !Q)
        throw new s("intrinsic " + U + " exists, but is not available. Please file an issue!");
      return {
        alias: fe,
        name: se,
        value: ge
      };
    }
    throw new i("intrinsic " + U + " does not exist!");
  };
  return Ii = function(U, Q) {
    if (typeof U != "string" || U.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof Q != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (Ie(/^%?[^%]*%?$/, U) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var se = Oe(U), fe = se.length > 0 ? se[0] : "", ge = Y("%" + fe + "%", Q), Ze = ge.name, Ne = ge.value, ze = !1, Re = ge.alias;
    Re && (fe = Re[0], _e(se, G([0, 1], Re)));
    for (var rt = 1, Cr = !0; rt < se.length; rt += 1) {
      var kt = se[rt], Xr = Le(kt, 0, 1), ea = Le(kt, -1);
      if ((Xr === '"' || Xr === "'" || Xr === "`" || ea === '"' || ea === "'" || ea === "`") && Xr !== ea)
        throw new i("property names with quotes must have matching quotes");
      if ((kt === "constructor" || !Cr) && (ze = !0), fe += "." + kt, Ze = "%" + fe + "%", de(X, Ze))
        Ne = X[Ze];
      else if (Ne != null) {
        if (!(kt in Ne)) {
          if (!Q)
            throw new s("base intrinsic for " + U + " exists, but the property is not available.");
          return;
        }
        if (v && rt + 1 >= se.length) {
          var ta = v(Ne, kt);
          Cr = !!ta, Cr && "get" in ta && !("originalValue" in ta.get) ? Ne = ta.get : Ne = Ne[kt];
        } else
          Cr = de(Ne, kt), Ne = Ne[kt];
        Cr && !ze && (X[Ze] = Ne);
      }
    }
    return Ne;
  }, Ii;
}
var Ti, qd;
function rp() {
  if (qd) return Ti;
  qd = 1;
  var e = /* @__PURE__ */ cl(), t = tp(), r = t([e("%String.prototype.indexOf%")]);
  return Ti = function(a, n) {
    var o = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(a, !!n)
    );
    return typeof o == "function" && r(a, ".prototype.") > -1 ? t(
      /** @type {const} */
      [o]
    ) : o;
  }, Ti;
}
var Ri, Od;
function ap() {
  if (Od) return Ri;
  Od = 1;
  var e = /* @__PURE__ */ cl(), t = /* @__PURE__ */ rp(), r = /* @__PURE__ */ Do(), a = /* @__PURE__ */ $a(), n = e("%Map%", !0), o = t("Map.prototype.get", !0), i = t("Map.prototype.set", !0), s = t("Map.prototype.has", !0), l = t("Map.prototype.delete", !0), d = t("Map.prototype.size", !0);
  return Ri = !!n && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, f = {
      assert: function(y) {
        if (!f.has(y))
          throw new a("Side channel does not contain " + r(y));
      },
      delete: function(y) {
        if (c) {
          var p = l(c, y);
          return d(c) === 0 && (c = void 0), p;
        }
        return !1;
      },
      get: function(y) {
        if (c)
          return o(c, y);
      },
      has: function(y) {
        return c ? s(c, y) : !1;
      },
      set: function(y, p) {
        c || (c = new n()), i(c, y, p);
      }
    };
    return f;
  }, Ri;
}
var Ni, Ad;
function fw() {
  if (Ad) return Ni;
  Ad = 1;
  var e = /* @__PURE__ */ cl(), t = /* @__PURE__ */ rp(), r = /* @__PURE__ */ Do(), a = ap(), n = /* @__PURE__ */ $a(), o = e("%WeakMap%", !0), i = t("WeakMap.prototype.get", !0), s = t("WeakMap.prototype.set", !0), l = t("WeakMap.prototype.has", !0), d = t("WeakMap.prototype.delete", !0);
  return Ni = o ? (
    /** @type {Exclude<import('.'), false>} */
    (function() {
      var c, f, y = {
        assert: function(p) {
          if (!y.has(p))
            throw new n("Side channel does not contain " + r(p));
        },
        delete: function(p) {
          if (o && p && (typeof p == "object" || typeof p == "function")) {
            if (c)
              return d(c, p);
          } else if (a && f)
            return f.delete(p);
          return !1;
        },
        get: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && c ? i(c, p) : f && f.get(p);
        },
        has: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && c ? l(c, p) : !!f && f.has(p);
        },
        set: function(p, k) {
          o && p && (typeof p == "object" || typeof p == "function") ? (c || (c = new o()), s(c, p, k)) : a && (f || (f = a()), f.set(p, k));
        }
      };
      return y;
    })
  ) : a, Ni;
}
var Vi, Ed;
function np() {
  if (Ed) return Vi;
  Ed = 1;
  var e = /* @__PURE__ */ $a(), t = /* @__PURE__ */ Do(), r = N0(), a = ap(), n = fw(), o = n || a || r;
  return Vi = function() {
    var i, s = {
      assert: function(l) {
        if (!s.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!i && i.delete(l);
      },
      get: function(l) {
        return i && i.get(l);
      },
      has: function(l) {
        return !!i && i.has(l);
      },
      set: function(l, d) {
        i || (i = o()), i.set(l, d);
      }
    };
    return s;
  }, Vi;
}
var Ui, Cd;
function fl() {
  if (Cd) return Ui;
  Cd = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ui = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(a) {
        return e.call(a, t, "+");
      },
      RFC3986: function(a) {
        return String(a);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, Ui;
}
var Li, $d;
function op() {
  if ($d) return Li;
  $d = 1;
  var e = /* @__PURE__ */ fl(), t = np(), r = Object.prototype.hasOwnProperty, a = Array.isArray, n = t(), o = function(S, q) {
    return n.set(S, q), S;
  }, i = function(S) {
    return n.has(S);
  }, s = function(S) {
    return n.get(S);
  }, l = function(S, q) {
    n.set(S, q);
  }, d = (function() {
    for (var S = [], q = 0; q < 256; ++q)
      S[S.length] = "%" + ((q < 16 ? "0" : "") + q.toString(16)).toUpperCase();
    return S;
  })(), c = function(S) {
    for (; S.length > 1; ) {
      var q = S.pop(), E = q.obj[q.prop];
      if (a(E)) {
        for (var D = [], N = 0; N < E.length; ++N)
          typeof E[N] < "u" && (D[D.length] = E[N]);
        q.obj[q.prop] = D;
      }
    }
  }, f = function(S, q) {
    for (var E = q && q.plainObjects ? { __proto__: null } : {}, D = 0; D < S.length; ++D)
      typeof S[D] < "u" && (E[D] = S[D]);
    return E;
  }, y = function S(q, E, D) {
    if (!E)
      return q;
    if (typeof E != "object" && typeof E != "function") {
      if (a(q)) {
        var N = q.length;
        if (D && typeof D.arrayLimit == "number" && N > D.arrayLimit)
          return o(f(q.concat(E), D), N);
        q[N] = E;
      } else if (q && typeof q == "object")
        if (i(q)) {
          var ee = s(q) + 1;
          q[ee] = E, l(q, ee);
        } else {
          if (D && D.strictMerge)
            return [q, E];
          (D && (D.plainObjects || D.allowPrototypes) || !r.call(Object.prototype, E)) && (q[E] = !0);
        }
      else
        return [q, E];
      return q;
    }
    if (!q || typeof q != "object") {
      if (i(E)) {
        for (var ie = Object.keys(E), H = D && D.plainObjects ? { __proto__: null, 0: q } : { 0: q }, X = 0; X < ie.length; X++) {
          var P = parseInt(ie[X], 10);
          H[P + 1] = E[ie[X]];
        }
        return o(H, s(E) + 1);
      }
      var V = [q].concat(E);
      return D && typeof D.arrayLimit == "number" && V.length > D.arrayLimit ? o(f(V, D), V.length - 1) : V;
    }
    var R = q;
    return a(q) && !a(E) && (R = f(q, D)), a(q) && a(E) ? (E.forEach(function(L, de) {
      if (r.call(q, de)) {
        var G = q[de];
        G && typeof G == "object" && L && typeof L == "object" ? q[de] = S(G, L, D) : q[q.length] = L;
      } else
        q[de] = L;
    }), q) : Object.keys(E).reduce(function(L, de) {
      var G = E[de];
      if (r.call(L, de) ? L[de] = S(L[de], G, D) : L[de] = G, i(E) && !i(L) && o(L, s(E)), i(L)) {
        var _e = parseInt(de, 10);
        String(_e) === de && _e >= 0 && _e > s(L) && l(L, _e);
      }
      return L;
    }, R);
  }, p = function(S, q) {
    return Object.keys(q).reduce(function(E, D) {
      return E[D] = q[D], E;
    }, S);
  }, k = function(S, q, E) {
    var D = S.replace(/\+/g, " ");
    if (E === "iso-8859-1")
      return D.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }, h = 1024, m = function(S, q, E, D, N) {
    if (S.length === 0)
      return S;
    var ee = S;
    if (typeof S == "symbol" ? ee = Symbol.prototype.toString.call(S) : typeof S != "string" && (ee = String(S)), E === "iso-8859-1")
      return escape(ee).replace(/%u[0-9a-f]{4}/gi, function(L) {
        return "%26%23" + parseInt(L.slice(2), 16) + "%3B";
      });
    for (var ie = "", H = 0; H < ee.length; H += h) {
      for (var X = ee.length >= h ? ee.slice(H, H + h) : ee, P = [], V = 0; V < X.length; ++V) {
        var R = X.charCodeAt(V);
        if (R === 45 || R === 46 || R === 95 || R === 126 || R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || N === e.RFC1738 && (R === 40 || R === 41)) {
          P[P.length] = X.charAt(V);
          continue;
        }
        if (R < 128) {
          P[P.length] = d[R];
          continue;
        }
        if (R < 2048) {
          P[P.length] = d[192 | R >> 6] + d[128 | R & 63];
          continue;
        }
        if (R < 55296 || R >= 57344) {
          P[P.length] = d[224 | R >> 12] + d[128 | R >> 6 & 63] + d[128 | R & 63];
          continue;
        }
        V += 1, R = 65536 + ((R & 1023) << 10 | X.charCodeAt(V) & 1023), P[P.length] = d[240 | R >> 18] + d[128 | R >> 12 & 63] + d[128 | R >> 6 & 63] + d[128 | R & 63];
      }
      ie += P.join("");
    }
    return ie;
  }, b = function(S) {
    for (var q = [{ obj: { o: S }, prop: "o" }], E = [], D = 0; D < q.length; ++D)
      for (var N = q[D], ee = N.obj[N.prop], ie = Object.keys(ee), H = 0; H < ie.length; ++H) {
        var X = ie[H], P = ee[X];
        typeof P == "object" && P !== null && E.indexOf(P) === -1 && (q[q.length] = { obj: ee, prop: X }, E[E.length] = P);
      }
    return c(q), S;
  }, v = function(S) {
    return Object.prototype.toString.call(S) === "[object RegExp]";
  }, _ = function(S) {
    return !S || typeof S != "object" ? !1 : !!(S.constructor && S.constructor.isBuffer && S.constructor.isBuffer(S));
  }, x = function(S, q, E, D) {
    if (i(S)) {
      var N = s(S) + 1;
      return S[N] = q, l(S, N), S;
    }
    var ee = [].concat(S, q);
    return ee.length > E ? o(f(ee, { plainObjects: D }), ee.length - 1) : ee;
  }, $ = function(S, q) {
    if (a(S)) {
      for (var E = [], D = 0; D < S.length; D += 1)
        E[E.length] = q(S[D]);
      return E;
    }
    return q(S);
  };
  return Li = {
    arrayToObject: f,
    assign: p,
    combine: x,
    compact: b,
    decode: k,
    encode: m,
    isBuffer: _,
    isOverflow: i,
    isRegExp: v,
    markOverflow: o,
    maybeMap: $,
    merge: y
  }, Li;
}
var Wi, Bd;
function pw() {
  if (Bd) return Wi;
  Bd = 1;
  var e = np(), t = /* @__PURE__ */ op(), r = /* @__PURE__ */ fl(), a = Object.prototype.hasOwnProperty, n = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, m) {
      return h + "[" + m + "]";
    },
    repeat: function(h) {
      return h;
    }
  }, o = Array.isArray, i = Array.prototype.push, s = function(h, m) {
    i.apply(h, o(m) ? m : [m]);
  }, l = Date.prototype.toISOString, d = r.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: t.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: d,
    formatter: r.formatters[d],
    // deprecated
    indices: !1,
    serializeDate: function(h) {
      return l.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, y = {}, p = function h(m, b, v, _, x, $, S, q, E, D, N, ee, ie, H, X, P, V, R) {
    for (var L = m, de = R, G = 0, _e = !1; (de = de.get(y)) !== void 0 && !_e; ) {
      var Se = de.get(m);
      if (G += 1, typeof Se < "u") {
        if (Se === G)
          throw new RangeError("Cyclic object value");
        _e = !0;
      }
      typeof de.get(y) > "u" && (G = 0);
    }
    if (typeof D == "function" ? L = D(b, L) : L instanceof Date ? L = ie(L) : v === "comma" && o(L) && (L = t.maybeMap(L, function(Ne) {
      return Ne instanceof Date ? ie(Ne) : Ne;
    })), L === null) {
      if ($)
        return E && !P ? E(b, c.encoder, V, "key", H) : b;
      L = "";
    }
    if (f(L) || t.isBuffer(L)) {
      if (E) {
        var Le = P ? b : E(b, c.encoder, V, "key", H);
        return [X(Le) + "=" + X(E(L, c.encoder, V, "value", H))];
      }
      return [X(b) + "=" + X(String(L))];
    }
    var Ie = [];
    if (typeof L > "u")
      return Ie;
    var be;
    if (v === "comma" && o(L))
      P && E && (L = t.maybeMap(L, E)), be = [{ value: L.length > 0 ? L.join(",") || null : void 0 }];
    else if (o(D))
      be = D;
    else {
      var ce = Object.keys(L);
      be = N ? ce.sort(N) : ce;
    }
    var Oe = q ? String(b).replace(/\./g, "%2E") : String(b), Y = _ && o(L) && L.length === 1 ? Oe + "[]" : Oe;
    if (x && o(L) && L.length === 0)
      return Y + "[]";
    for (var U = 0; U < be.length; ++U) {
      var Q = be[U], se = typeof Q == "object" && Q && typeof Q.value < "u" ? Q.value : L[Q];
      if (!(S && se === null)) {
        var fe = ee && q ? String(Q).replace(/\./g, "%2E") : String(Q), ge = o(L) ? typeof v == "function" ? v(Y, fe) : Y : Y + (ee ? "." + fe : "[" + fe + "]");
        R.set(m, G);
        var Ze = e();
        Ze.set(y, R), s(Ie, h(
          se,
          ge,
          v,
          _,
          x,
          $,
          S,
          q,
          v === "comma" && P && o(L) ? null : E,
          D,
          N,
          ee,
          ie,
          H,
          X,
          P,
          V,
          Ze
        ));
      }
    }
    return Ie;
  }, k = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var m = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var b = r.default;
    if (typeof h.format < "u") {
      if (!a.call(r.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      b = h.format;
    }
    var v = r.formatters[b], _ = c.filter;
    (typeof h.filter == "function" || o(h.filter)) && (_ = h.filter);
    var x;
    if (h.arrayFormat in n ? x = h.arrayFormat : "indices" in h ? x = h.indices ? "indices" : "repeat" : x = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: x,
      charset: m,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: _,
      format: b,
      formatter: v,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return Wi = function(h, m) {
    var b = h, v = k(m), _, x;
    typeof v.filter == "function" ? (x = v.filter, b = x("", b)) : o(v.filter) && (x = v.filter, _ = x);
    var $ = [];
    if (typeof b != "object" || b === null)
      return "";
    var S = n[v.arrayFormat], q = S === "comma" && v.commaRoundTrip;
    _ || (_ = Object.keys(b)), v.sort && _.sort(v.sort);
    for (var E = e(), D = 0; D < _.length; ++D) {
      var N = _[D], ee = b[N];
      v.skipNulls && ee === null || s($, p(
        ee,
        N,
        S,
        q,
        v.allowEmptyArrays,
        v.strictNullHandling,
        v.skipNulls,
        v.encodeDotInKeys,
        v.encode ? v.encoder : null,
        v.filter,
        v.sort,
        v.allowDots,
        v.serializeDate,
        v.format,
        v.formatter,
        v.encodeValuesOnly,
        v.charset,
        E
      ));
    }
    var ie = $.join(v.delimiter), H = v.addQueryPrefix === !0 ? "?" : "";
    return v.charsetSentinel && (v.charset === "iso-8859-1" ? H += "utf8=%26%2310003%3B&" : H += "utf8=%E2%9C%93&"), ie.length > 0 ? H + ie : "";
  }, Wi;
}
var Ki, Dd;
function yw() {
  if (Dd) return Ki;
  Dd = 1;
  var e = /* @__PURE__ */ op(), t = Object.prototype.hasOwnProperty, r = Array.isArray, a = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, n = function(p) {
    return p.replace(/&#(\d+);/g, function(k, h) {
      return String.fromCharCode(parseInt(h, 10));
    });
  }, o = function(p, k, h) {
    if (p && typeof p == "string" && k.comma && p.indexOf(",") > -1)
      return p.split(",");
    if (k.throwOnLimitExceeded && h >= k.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return p;
  }, i = "utf8=%26%2310003%3B", s = "utf8=%E2%9C%93", l = function(p, k) {
    var h = { __proto__: null }, m = k.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    m = m.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var b = k.parameterLimit === 1 / 0 ? void 0 : k.parameterLimit, v = m.split(
      k.delimiter,
      k.throwOnLimitExceeded && typeof b < "u" ? b + 1 : b
    );
    if (k.throwOnLimitExceeded && typeof b < "u" && v.length > b)
      throw new RangeError("Parameter limit exceeded. Only " + b + " parameter" + (b === 1 ? "" : "s") + " allowed.");
    var _ = -1, x, $ = k.charset;
    if (k.charsetSentinel)
      for (x = 0; x < v.length; ++x)
        v[x].indexOf("utf8=") === 0 && (v[x] === s ? $ = "utf-8" : v[x] === i && ($ = "iso-8859-1"), _ = x, x = v.length);
    for (x = 0; x < v.length; ++x)
      if (x !== _) {
        var S = v[x], q = S.indexOf("]="), E = q === -1 ? S.indexOf("=") : q + 1, D, N;
        if (E === -1 ? (D = k.decoder(S, a.decoder, $, "key"), N = k.strictNullHandling ? null : "") : (D = k.decoder(S.slice(0, E), a.decoder, $, "key"), D !== null && (N = e.maybeMap(
          o(
            S.slice(E + 1),
            k,
            r(h[D]) ? h[D].length : 0
          ),
          function(ie) {
            return k.decoder(ie, a.decoder, $, "value");
          }
        ))), N && k.interpretNumericEntities && $ === "iso-8859-1" && (N = n(String(N))), S.indexOf("[]=") > -1 && (N = r(N) ? [N] : N), k.comma && r(N) && N.length > k.arrayLimit) {
          if (k.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + k.arrayLimit + " element" + (k.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          N = e.combine([], N, k.arrayLimit, k.plainObjects);
        }
        if (D !== null) {
          var ee = t.call(h, D);
          ee && (k.duplicates === "combine" || S.indexOf("[]=") > -1) ? h[D] = e.combine(
            h[D],
            N,
            k.arrayLimit,
            k.plainObjects
          ) : (!ee || k.duplicates === "last") && (h[D] = N);
        }
      }
    return h;
  }, d = function(p, k, h, m) {
    var b = 0;
    if (p.length > 0 && p[p.length - 1] === "[]") {
      var v = p.slice(0, -1).join("");
      b = Array.isArray(k) && k[v] ? k[v].length : 0;
    }
    for (var _ = m ? k : o(k, h, b), x = p.length - 1; x >= 0; --x) {
      var $, S = p[x];
      if (S === "[]" && h.parseArrays)
        e.isOverflow(_) ? $ = _ : $ = h.allowEmptyArrays && (_ === "" || h.strictNullHandling && _ === null) ? [] : e.combine(
          [],
          _,
          h.arrayLimit,
          h.plainObjects
        );
      else {
        $ = h.plainObjects ? { __proto__: null } : {};
        var q = S.charAt(0) === "[" && S.charAt(S.length - 1) === "]" ? S.slice(1, -1) : S, E = h.decodeDotInKeys ? q.replace(/%2E/g, ".") : q, D = parseInt(E, 10), N = !isNaN(D) && S !== E && String(D) === E && D >= 0 && h.parseArrays;
        if (!h.parseArrays && E === "")
          $ = { 0: _ };
        else if (N && D < h.arrayLimit)
          $ = [], $[D] = _;
        else {
          if (N && h.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          N ? ($[D] = _, e.markOverflow($, D)) : E !== "__proto__" && ($[E] = _);
        }
      }
      _ = $;
    }
    return _;
  }, c = function(p, k) {
    var h = k.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (k.depth <= 0)
      return !k.plainObjects && t.call(Object.prototype, h) && !k.allowPrototypes ? void 0 : [h];
    var m = /(\[[^[\]]*])/, b = /(\[[^[\]]*])/g, v = m.exec(h), _ = v ? h.slice(0, v.index) : h, x = [];
    if (_) {
      if (!k.plainObjects && t.call(Object.prototype, _) && !k.allowPrototypes)
        return;
      x[x.length] = _;
    }
    for (var $ = 0; (v = b.exec(h)) !== null && $ < k.depth; ) {
      $ += 1;
      var S = v[1].slice(1, -1);
      if (!k.plainObjects && t.call(Object.prototype, S) && !k.allowPrototypes)
        return;
      x[x.length] = v[1];
    }
    if (v) {
      if (k.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + k.depth + " and strictDepth is true");
      x[x.length] = "[" + h.slice(v.index) + "]";
    }
    return x;
  }, f = function(p, k, h, m) {
    if (p) {
      var b = c(p, h);
      if (b)
        return d(b, k, h, m);
    }
  }, y = function(p) {
    if (!p)
      return a;
    if (typeof p.allowEmptyArrays < "u" && typeof p.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof p.decodeDotInKeys < "u" && typeof p.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (p.decoder !== null && typeof p.decoder < "u" && typeof p.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof p.charset < "u" && p.charset !== "utf-8" && p.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof p.throwOnLimitExceeded < "u" && typeof p.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var k = typeof p.charset > "u" ? a.charset : p.charset, h = typeof p.duplicates > "u" ? a.duplicates : p.duplicates;
    if (h !== "combine" && h !== "first" && h !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var m = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : a.allowDots : !!p.allowDots;
    return {
      allowDots: m,
      allowEmptyArrays: typeof p.allowEmptyArrays == "boolean" ? !!p.allowEmptyArrays : a.allowEmptyArrays,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : a.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : a.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : a.arrayLimit,
      charset: k,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : a.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : a.comma,
      decodeDotInKeys: typeof p.decodeDotInKeys == "boolean" ? p.decodeDotInKeys : a.decodeDotInKeys,
      decoder: typeof p.decoder == "function" ? p.decoder : a.decoder,
      delimiter: typeof p.delimiter == "string" || e.isRegExp(p.delimiter) ? p.delimiter : a.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : a.depth,
      duplicates: h,
      ignoreQueryPrefix: p.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof p.interpretNumericEntities == "boolean" ? p.interpretNumericEntities : a.interpretNumericEntities,
      parameterLimit: typeof p.parameterLimit == "number" ? p.parameterLimit : a.parameterLimit,
      parseArrays: p.parseArrays !== !1,
      plainObjects: typeof p.plainObjects == "boolean" ? p.plainObjects : a.plainObjects,
      strictDepth: typeof p.strictDepth == "boolean" ? !!p.strictDepth : a.strictDepth,
      strictMerge: typeof p.strictMerge == "boolean" ? !!p.strictMerge : a.strictMerge,
      strictNullHandling: typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : a.strictNullHandling,
      throwOnLimitExceeded: typeof p.throwOnLimitExceeded == "boolean" ? p.throwOnLimitExceeded : !1
    };
  };
  return Ki = function(p, k) {
    var h = y(k);
    if (p === "" || p === null || typeof p > "u")
      return h.plainObjects ? { __proto__: null } : {};
    for (var m = typeof p == "string" ? l(p, h) : p, b = h.plainObjects ? { __proto__: null } : {}, v = Object.keys(m), _ = 0; _ < v.length; ++_) {
      var x = v[_], $ = f(x, m[x], h, typeof p == "string");
      b = e.merge(b, $, h);
    }
    return h.allowSparse === !0 ? b : e.compact(b);
  }, Ki;
}
var Hi, Md;
function mw() {
  if (Md) return Hi;
  Md = 1;
  var e = /* @__PURE__ */ pw(), t = /* @__PURE__ */ yw(), r = /* @__PURE__ */ fl();
  return Hi = {
    formats: r,
    parse: t,
    stringify: e
  }, Hi;
}
var hw = /* @__PURE__ */ mw();
const ip = /* @__PURE__ */ j0(hw);
async function sr(e) {
  try {
    return [null, await e()];
  } catch (t) {
    return [t, null];
  }
}
sr.sync = function(e) {
  try {
    return [null, e()];
  } catch (t) {
    return [t, null];
  }
};
class vw {
  static __container_entry_key = "ToastService";
  success(t, r) {
    console.log("Success:", t, r);
  }
  error(t, r) {
    console.error("Error:", t, r);
  }
}
const oo = dt.proxy(vw);
class gw {
  static __container_entry_key = "FetchService";
  async handleError(t) {
    if (t.headers.get("Content-Type")?.includes("json")) {
      const r = await t.json().catch(() => ({ message: $t("Internal Server Error") }));
      return r.message && oo.error(r.message), r;
    }
    return oo.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(t, r) {
    if (!r)
      return t;
    const a = ip.stringify(r, { arrayFormat: "brackets" });
    return t + "?" + a;
  }
  buildRequestInit(t) {
    const r = { ...t };
    return t.data && (r.body = JSON.stringify(t.data), r.headers = {
      ...r.headers,
      "Content-Type": "application/json"
    }), r;
  }
  async parseResponse(t) {
    return t.headers.get("Content-Type")?.includes("json") ? t.json() : t.text();
  }
  async fetch(t, r = {}) {
    throw new Error("Method not implemented");
  }
  async try(t, r = {}) {
    return sr(() => this.fetch(t, r));
  }
  async get(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "GET"
    });
  }
  async post(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "POST"
    });
  }
  async put(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "PUT"
    });
  }
  async delete(t, r = {}) {
    return this.fetch(t, {
      ...r,
      method: "DELETE"
    });
  }
}
const Lt = dt.proxy(gw), Gi = /* @__PURE__ */ new Set();
function bw(e, t = {}) {
  const r = t.key || e, a = P0(r, {
    default: () => ({
      items: [],
      page: 1,
      total: 0,
      total_pages: 1
    })
  }), n = F(!1), o = ua(t.page || 1), i = ua(t.query || {}), s = ua(t.limit || 10), l = ua(t.orderBy || null), d = ua(t.orderDirection || null), c = j(() => a.value.total), f = j(() => a.value.total_pages), y = j(() => {
    let b = Array.isArray(a.value.items) ? a.value.items : [];
    return t.refine && (b = t.refine(b)), t.serialize ? b.map((v) => t.serialize(v)) : b;
  });
  async function p() {
    if (n.value) return;
    n.value = !0;
    const b = JSON.parse(JSON.stringify({
      ...i.value,
      page: o.value,
      limit: s.value,
      orderBy: l.value ? l.value : void 0,
      orderDirection: d.value ? d.value : void 0
    })), [v, _] = await Lt.try(e, {
      method: "GET",
      query: b
    });
    if (v) {
      n.value = !1, console.error(v);
      return;
    }
    a.value = _, await new Promise((x) => setTimeout(x, 800)), n.value = !1;
  }
  async function k() {
    if (o.value === 1) {
      await p();
      return;
    }
    o.value = 1;
  }
  function h(b, v) {
    JSON.stringify(b) === JSON.stringify(v) || k();
  }
  pe([o, s], p), pe([l, d], k, { deep: !0 }), Kf(
    () => JSON.parse(JSON.stringify(i.value)),
    h,
    {
      debounce: t.debounce || 1e3
    }
  );
  async function m() {
    if (!Gi.has(r) && y.value.length) {
      Gi.add(r);
      return;
    }
    Gi.add(r), await p();
  }
  return t.immediate !== !1 && (xe(m), Df(m)), {
    page: o,
    limit: s,
    orderBy: l,
    orderDirection: d,
    total: c,
    totalPages: f,
    items: y,
    loading: n,
    load: p,
    reset: k,
    query: i,
    hydrate: m
  };
}
let pa;
function kw(e) {
  pa = {
    ...pa,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function Ba(e) {
  return {
    lang: e?.lang ?? pa?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? pa?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? pa?.abortPipeEarly
  };
}
function ww() {
  pa = void 0;
}
let tn;
function xw(e, t) {
  tn || (tn = /* @__PURE__ */ new Map()), tn.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function sp(e) {
  return tn?.get(e);
}
function zw(e) {
  tn?.delete(e);
}
let rn;
function _w(e, t) {
  rn || (rn = /* @__PURE__ */ new Map()), rn.set(t, e);
}
// @__NO_SIDE_EFFECTS__
function lp(e) {
  return rn?.get(e);
}
function Sw(e) {
  rn?.delete(e);
}
let jr;
function qw(e, t, r) {
  jr || (jr = /* @__PURE__ */ new Map()), jr.get(e) || jr.set(e, /* @__PURE__ */ new Map()), jr.get(e).set(r, t);
}
// @__NO_SIDE_EFFECTS__
function up(e, t) {
  return jr?.get(e)?.get(t);
}
function Ow(e, t) {
  jr?.get(e)?.delete(t);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  const t = typeof e;
  return t === "string" ? `"${e}"` : t === "number" || t === "bigint" || t === "boolean" ? `${e}` : t === "object" || t === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : t;
}
function B(e, t, r, a, n) {
  const o = n && "input" in n ? n.input : r.value, i = n?.expected ?? e.expects ?? null, s = n?.received ?? /* @__PURE__ */ Te(o), l = {
    kind: e.kind,
    type: e.type,
    input: o,
    expected: i,
    received: s,
    message: `Invalid ${t}: ${i ? `Expected ${i} but r` : "R"}eceived ${s}`,
    requirement: e.requirement,
    path: n?.path,
    issues: n?.issues,
    lang: a.lang,
    abortEarly: a.abortEarly,
    abortPipeEarly: a.abortPipeEarly
  }, d = e.kind === "schema", c = n?.message ?? e.message ?? /* @__PURE__ */ up(e.reference, l.lang) ?? (d ? /* @__PURE__ */ lp(l.lang) : null) ?? a.message ?? /* @__PURE__ */ sp(l.lang);
  c !== void 0 && (l.message = typeof c == "function" ? c(l) : c), d && (r.typed = !1), r.issues ? r.issues.push(l) : r.issues = [l];
}
// @__NO_SIDE_EFFECTS__
function io(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
let Yi;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return Yi || (Yi = new TextEncoder()), Yi.encode(e).length;
}
let Zi;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  Zi || (Zi = new Intl.Segmenter());
  const t = Zi.segment(e);
  let r = 0;
  for (const a of t) r++;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Po(e, t) {
  if ("pipe" in e) {
    const r = [];
    for (let a = e.pipe.length - 1; a >= 0; a--) {
      const n = e.pipe[a];
      if (n.kind === "schema" && "pipe" in n) r.push(n);
      else if (n.kind === "metadata" && n.type === t) return n[t];
    }
    for (const a of r) {
      const n = /* @__PURE__ */ Po(a, t);
      if (n !== void 0) return n;
    }
  }
}
// @__NO_SIDE_EFFECTS__
function K(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(t) {
      return e["~run"]({ value: t }, /* @__PURE__ */ Ba());
    }
  };
}
let Ka;
// @__NO_SIDE_EFFECTS__
function vn(e, t) {
  Ka || (Ka = /* @__PURE__ */ new Map()), Ka.get(e) || Ka.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const r = Ka.get(e).segment(t);
  let a = 0;
  for (const n of r) n.isWordLike && a++;
  return a;
}
const Aw = /\D/gu;
// @__NO_SIDE_EFFECTS__
function pl(e) {
  const t = e.replace(Aw, "");
  let r = t.length, a = 1, n = 0;
  for (; r; ) {
    const o = +t[--r];
    a ^= 1, n += a ? [
      0,
      2,
      4,
      6,
      8,
      1,
      3,
      5,
      7,
      9
    ][o] : o;
  }
  return n % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
  return Object.hasOwn(e, t) && t !== "__proto__" && t !== "prototype" && t !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  const r = [...new Set(e)];
  return r.length > 1 ? `(${r.join(` ${t} `)})` : r[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function Ew(e, t) {
  const r = {};
  for (const a of e) r[a] = t;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Cw(e) {
  const t = {};
  for (const r of e) Object.assign(t, r.entries);
  return t;
}
// @__NO_SIDE_EFFECTS__
function jo(e) {
  if (e.path) {
    let t = "";
    for (const r of e.path) if (typeof r.key == "string" || typeof r.key == "number") t ? t += `.${r.key}` : t += r.key;
    else return null;
    return t;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function $w(e, t) {
  return t.kind === e;
}
// @__NO_SIDE_EFFECTS__
function Bw(e, t) {
  return t.type === e;
}
// @__NO_SIDE_EFFECTS__
function Dw(e) {
  return e instanceof lr;
}
var lr = class extends Error {
  /**
  * Creates a Valibot error with useful information.
  *
  * @param issues The error issues.
  */
  constructor(e) {
    super(e[0].message), this.name = "ValiError", this.issues = e;
  }
};
// @__NO_SIDE_EFFECTS__
function dp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: dp,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const a = t.value;
      return t.value = (...n) => {
        const o = this.schema["~run"]({ value: n }, r);
        if (o.issues) throw new lr(o.issues);
        return a(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cp(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: cp,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const a = t.value;
      return t.value = async (...n) => {
        const o = await e["~run"]({ value: n }, r);
        if (o.issues) throw new lr(o.issues);
        return a(...o.value);
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fp() {
  return {
    kind: "transformation",
    type: "await",
    reference: fp,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const pp = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, yp = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, mp = /^[a-z][\da-z]*$/u, hp = /^[+-]?(?:\d*\.)?\d+$/u, vp = /^\d+$/u, gp = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, bp = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, kp = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), wp = /^(?:0[hx])?[\da-fA-F]+$/u, xp = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, zp = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, _p = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, Sp = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, qp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Op = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, Ap = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, Ep = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, Cp = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, $p = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, Bp = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, Dp = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, Mp = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Pp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, jp = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Fp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Ip = /^[\w-]+$/u, Tp = /^(?:0o)?[0-7]+$/u, Rp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Np = /^[\da-z]+(?:[-_][\da-z]+)*$/u, Vp = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Up = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Lp(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Lp,
    async: !1,
    expects: null,
    requirement: pp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Base64", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wp(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Wp,
    async: !1,
    expects: null,
    requirement: yp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "BIC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kp(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: Kp,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hp(e, t) {
  return {
    kind: "validation",
    type: "bytes",
    reference: Hp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ mn(r.value);
        n !== this.requirement && B(this, "bytes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gp(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: Gp,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement(r.value) && B(this, "input", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yp(e, t) {
  return {
    kind: "validation",
    type: "check",
    reference: Yp,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, a) {
      return r.typed && !await this.requirement(r.value) && B(this, "input", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zp(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Zp,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) for (let n = 0; n < r.value.length; n++) {
        const o = r.value[n];
        this.requirement(o, n, r.value) || B(this, "item", r, a, {
          input: o,
          path: [{
            type: "array",
            origin: "value",
            input: r.value,
            key: n,
            value: o
          }]
        });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jp(e, t) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Jp,
    async: !0,
    expects: null,
    requirement: e,
    message: t,
    async "~run"(r, a) {
      if (r.typed) {
        const n = await Promise.all(r.value.map(this.requirement));
        for (let o = 0; o < r.value.length; o++) if (!n[o]) {
          const i = r.value[o];
          B(this, "item", r, a, {
            input: i,
            path: [{
              type: "array",
              origin: "value",
              input: r.value,
              key: o,
              value: i
            }]
          });
        }
      }
      return r;
    }
  };
}
const Mw = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, Pw = /[- ]/gu, jw = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function Qp(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: Qp,
    async: !1,
    expects: null,
    requirement(t) {
      let r;
      return Mw.test(t) && (r = t.replace(Pw, "")) && jw.some((a) => a.test(r)) && /* @__PURE__ */ pl(r);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "credit card", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: Xp,
    async: !1,
    expects: null,
    requirement: mp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Cuid2", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ey(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: ey,
    async: !1,
    expects: null,
    requirement: hp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "decimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ty(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: ty,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function ry(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: ry,
    async: !1,
    expects: null,
    requirement: vp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "digits", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ay(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: ay,
    expects: null,
    async: !1,
    requirement: gp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "domain", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ny(e) {
  return {
    kind: "validation",
    type: "email",
    reference: ny,
    expects: null,
    async: !1,
    requirement: bp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oy(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: oy,
    async: !1,
    expects: null,
    requirement: kp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "emoji", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iy(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: iy,
    async: !1,
    expects: "0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length > 0 && B(this, "length", t, r, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sy(e, t) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: sy,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !r.value.endsWith(this.requirement) && B(this, "end", r, a, { received: `"${r.value.slice(-this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ly(e, t) {
  return {
    kind: "validation",
    type: "entries",
    reference: ly,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (!r.typed) return r;
      const n = Object.keys(r.value).length;
      return r.typed && n !== this.requirement && B(this, "entries", r, a, { received: `${n}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uy(e, t) {
  return {
    kind: "validation",
    type: "every_item",
    reference: uy,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !r.value.every(this.requirement) && B(this, "item", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dy(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: dy,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function cy(e, t) {
  const r = /* @__PURE__ */ Te(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: cy,
    async: !1,
    expects: `!${r}`,
    requirement: e,
    message: t,
    "~run"(a, n) {
      return a.typed && a.value.includes(this.requirement) && B(this, "content", a, n, { received: r }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fy(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: fy,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.filter(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function py(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: py,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.find(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yy(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: yy,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "finite", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function my(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: my,
    async: !1,
    name: e,
    "~run"(t) {
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hy(e, t) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: hy,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ hn(r.value);
        n !== this.requirement && B(this, "graphemes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vy(e, t) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: vy,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Te(e)}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !(r.value > this.requirement) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gy(e, t) {
  return {
    kind: "transformation",
    type: "guard",
    reference: gy,
    async: !1,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement(r.value) && (B(this, "input", r, a), r.typed = !1), r;
    }
  };
}
const Fw = {
  md4: 32,
  md5: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
  adler32: 8
};
// @__NO_SIDE_EFFECTS__
function by(e, t) {
  return {
    kind: "validation",
    type: "hash",
    reference: by,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((r) => `^[a-fA-F0-9]{${Fw[r]}}$`).join("|"), "u"),
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement.test(r.value) && B(this, "hash", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ky(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: ky,
    async: !1,
    expects: null,
    requirement: wp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hexadecimal", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wy(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: wy,
    async: !1,
    expects: null,
    requirement: xp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "hex color", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xy(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: xy,
    async: !1,
    expects: null,
    requirement(t) {
      return zp.test(t) && /* @__PURE__ */ pl(t);
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "IMEI", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zy(e, t) {
  const r = /* @__PURE__ */ Te(e);
  return {
    kind: "validation",
    type: "includes",
    reference: zy,
    async: !1,
    expects: r,
    requirement: e,
    message: t,
    "~run"(a, n) {
      return a.typed && !a.value.includes(this.requirement) && B(this, "content", a, n, { received: `!${r}` }), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yl(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: yl,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _y(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: _y,
    async: !1,
    expects: null,
    requirement: qp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IP", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sy(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: Sy,
    async: !1,
    expects: null,
    requirement: _p,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv4", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qy(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: qy,
    async: !1,
    expects: null,
    requirement: Sp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "IPv6", t, r), t;
    }
  };
}
function Iw(e) {
  const t = e.split("").map((a) => a === "X" ? 10 : parseInt(a));
  let r = 0;
  for (let a = 0; a < 10; a++) r += t[a] * (10 - a);
  return r % 11 === 0;
}
function Tw(e) {
  const t = e.split("").map((a) => parseInt(a));
  let r = 0;
  for (let a = 0; a < 13; a++) r += t[a] * (a % 2 === 0 ? 1 : 3);
  return r % 10 === 0;
}
const Rw = /[- ]/gu, Nw = /^\d{9}[\dX]$/u, Vw = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: Oy,
    async: !1,
    expects: null,
    requirement(t) {
      const r = t.replace(Rw, "");
      return Nw.test(r) ? Iw(r) : Vw.test(r) ? Tw(r) : !1;
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "ISBN", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ay(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: Ay,
    async: !1,
    expects: null,
    requirement: Mp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ISRC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: Ey,
    async: !1,
    expects: null,
    requirement: Op,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cy(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: Cy,
    async: !1,
    expects: null,
    requirement: Ap,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "date-time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $y(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: $y,
    async: !1,
    expects: null,
    requirement: Ep,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function By(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: By,
    async: !1,
    expects: null,
    requirement: Cp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "time-second", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dy(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: Dy,
    async: !1,
    expects: null,
    requirement: $p,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "timestamp", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function My(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: My,
    async: !1,
    expects: null,
    requirement: Bp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "week", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Py(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: Py,
    async: !1,
    expects: null,
    requirement: Dp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "JWS compact", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jy(e, t) {
  return {
    kind: "validation",
    type: "length",
    reference: jy,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.length !== this.requirement && B(this, "length", r, a, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fy(e, t) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: Fy,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Te(e)}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !(r.value < this.requirement) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iy(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: Iy,
    async: !1,
    expects: null,
    requirement: Fp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ty(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Ty,
    async: !1,
    expects: null,
    requirement: Pp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "48-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ry(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Ry,
    async: !1,
    expects: null,
    requirement: jp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "64-bit MAC", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ny(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: Ny,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.map(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vy(e, t) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: Vy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ mn(r.value);
        n > this.requirement && B(this, "bytes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uy(e, t) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Uy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (!r.typed) return r;
      const n = Object.keys(r.value).length;
      return r.typed && n > this.requirement && B(this, "entries", r, a, { received: `${n}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ly(e, t) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: Ly,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ hn(r.value);
        n > this.requirement && B(this, "graphemes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wy(e, t) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Wy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.length > this.requirement && B(this, "length", r, a, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ky(e, t) {
  return {
    kind: "validation",
    type: "max_size",
    reference: Ky,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.size > this.requirement && B(this, "size", r, a, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hy(e, t) {
  return {
    kind: "validation",
    type: "max_value",
    reference: Hy,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Te(e)}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !(r.value <= this.requirement) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gy(e, t, r) {
  return {
    kind: "validation",
    type: "max_words",
    reference: Gy,
    async: !1,
    expects: `<=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(a, n) {
      if (a.typed) {
        const o = /* @__PURE__ */ vn(this.locales, a.value);
        o > this.requirement && B(this, "words", a, n, { received: `${o}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yy(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: Yy,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: Zy,
    async: !1,
    expects: /* @__PURE__ */ gt(e.map((r) => `"${r}"`), "|"),
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement.includes(r.value.type) && B(this, "MIME type", r, a, { received: `"${r.value.type}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jy(e, t) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: Jy,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ mn(r.value);
        n < this.requirement && B(this, "bytes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qy(e, t) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: Qy,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (!r.typed) return r;
      const n = Object.keys(r.value).length;
      return r.typed && n < this.requirement && B(this, "entries", r, a, { received: `${n}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xy(e, t) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: Xy,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ hn(r.value);
        n < this.requirement && B(this, "graphemes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function em(e, t) {
  return {
    kind: "validation",
    type: "min_length",
    reference: em,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.length < this.requirement && B(this, "length", r, a, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tm(e, t) {
  return {
    kind: "validation",
    type: "min_size",
    reference: tm,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.size < this.requirement && B(this, "size", r, a, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rm(e, t) {
  return {
    kind: "validation",
    type: "min_value",
    reference: rm,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ Te(e)}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !(r.value >= this.requirement) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function am(e, t, r) {
  return {
    kind: "validation",
    type: "min_words",
    reference: am,
    async: !1,
    expects: `>=${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(a, n) {
      if (a.typed) {
        const o = /* @__PURE__ */ vn(this.locales, a.value);
        o < this.requirement && B(this, "words", a, n, { received: `${o}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nm(e, t) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: nm,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value % this.requirement != 0 && B(this, "multiple", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function om(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: om,
    async: !1,
    expects: null,
    requirement: Ip,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "Nano ID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function im(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: im,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(t, r) {
      return t.typed && t.value.length === 0 && B(this, "length", t, r, { received: "0" }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sm(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: sm,
    async: !1,
    form: e,
    "~run"(t) {
      return t.value = t.value.normalize(this.form), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lm(e, t) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: lm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ mn(r.value);
        n === this.requirement && B(this, "bytes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function um(e, t) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: um,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (!r.typed) return r;
      const n = Object.keys(r.value).length;
      return r.typed && n === this.requirement && B(this, "entries", r, a, { received: `${n}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dm(e, t) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: dm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      if (r.typed) {
        const n = /* @__PURE__ */ hn(r.value);
        n === this.requirement && B(this, "graphemes", r, a, { received: `${n}` });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cm(e, t) {
  return {
    kind: "validation",
    type: "not_length",
    reference: cm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.length === this.requirement && B(this, "length", r, a, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fm(e, t) {
  return {
    kind: "validation",
    type: "not_size",
    reference: fm,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.size === this.requirement && B(this, "size", r, a, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pm(e, t) {
  return {
    kind: "validation",
    type: "not_value",
    reference: pm,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ Te(e)}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && this.requirement <= r.value && this.requirement >= r.value && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ym(e, t) {
  return {
    kind: "validation",
    type: "not_values",
    reference: ym,
    async: !1,
    expects: `!${/* @__PURE__ */ gt(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ Te(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && this.requirement.some((n) => n <= r.value && n >= r.value) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mm(e, t, r) {
  return {
    kind: "validation",
    type: "not_words",
    reference: mm,
    async: !1,
    expects: `!${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(a, n) {
      if (a.typed) {
        const o = /* @__PURE__ */ vn(this.locales, a.value);
        o === this.requirement && B(this, "words", a, n, { received: `${o}` });
      }
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hm(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: hm,
    async: !1,
    expects: null,
    requirement: Tp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "octal", t, r), t;
    }
  };
}
const Pd = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], jd = [
  !1,
  0,
  "false",
  "0",
  "no",
  "n",
  "off",
  "disabled"
];
// @__NO_SIDE_EFFECTS__
function vm(e, t) {
  const r = (s) => typeof s == "string" ? s.toLowerCase() : s, a = e?.truthy ?? Pd, n = e?.falsy ?? jd, o = e?.truthy ? e.truthy.map(r) : Pd, i = e?.falsy ? e.falsy.map(r) : jd;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: vm,
    expects: /* @__PURE__ */ gt([...a, ...n].map(Te), "|"),
    config: e,
    message: t,
    async: !1,
    "~run"(s, l) {
      const d = r(s.value);
      return o.includes(d) ? s.value = !0 : i.includes(d) ? s.value = !1 : (B(this, "boolean", s, l), s.typed = !1), s;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gm(e, t) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: gm,
    config: e,
    message: t,
    async: !1,
    "~run"(r, a) {
      try {
        r.value = JSON.parse(r.value, this.config?.reviver);
      } catch (n) {
        if (n instanceof Error)
          B(this, "JSON", r, a, { received: `"${n.message}"` }), r.typed = !1;
        else throw n;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bm(e, t) {
  if (e.issues) for (const r of t) for (const a of e.issues) {
    let n = !1;
    const o = Math.min(r.length, a.path?.length ?? 0);
    for (let i = 0; i < o; i++) if (r[i] !== a.path[i].key && (r[i] !== "$" || a.path[i].type !== "array")) {
      n = !0;
      break;
    }
    if (!n) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function km(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: km,
    async: !1,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    "~run"(a, n) {
      return (a.typed || /* @__PURE__ */ bm(a, e)) && !this.requirement(a.value) && B(this, "input", a, n), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wm(e, t, r) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: wm,
    async: !0,
    expects: null,
    paths: e,
    requirement: t,
    message: r,
    async "~run"(a, n) {
      return (a.typed || /* @__PURE__ */ bm(a, e)) && !await this.requirement(a.value) && B(this, "input", a, n), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xm(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: xm,
    async: !1,
    expects: null,
    "~run"(t, r) {
      return e({
        dataset: t,
        config: r,
        addIssue: (a) => B(this, a?.label ?? "input", t, r, a)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zm(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: zm,
    async: !0,
    expects: null,
    async "~run"(t, r) {
      return await e({
        dataset: t,
        config: r,
        addIssue: (a) => B(this, a?.label ?? "input", t, r, a)
      }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _m(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: _m,
    async: !1,
    "~run"(t, r) {
      const a = e({
        dataset: t,
        config: r,
        addIssue: (n) => B(this, n?.label ?? "input", t, r, n),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = a, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sm(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Sm,
    async: !0,
    async "~run"(t, r) {
      const a = await e({
        dataset: t,
        config: r,
        addIssue: (n) => B(this, n?.label ?? "input", t, r, n),
        NEVER: null
      });
      return t.issues ? t.typed = !1 : t.value = a, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qm() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: qm,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Om(e, t) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: Om,
    async: !1,
    operation: e,
    initial: t,
    "~run"(r) {
      return r.value = r.value.reduce(this.operation, this.initial), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Am(e, t) {
  return {
    kind: "validation",
    type: "regex",
    reference: Am,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement.test(r.value) && B(this, "format", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Em(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Em,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const a = t.value;
      return t.value = (...n) => {
        const o = this.schema["~run"]({ value: a(...n) }, r);
        if (o.issues) throw new lr(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cm(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Cm,
    async: !1,
    schema: e,
    "~run"(t, r) {
      const a = t.value;
      return t.value = async (...n) => {
        const o = await this.schema["~run"]({ value: await a(...n) }, r);
        if (o.issues) throw new lr(o.issues);
        return o.value;
      }, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $m(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: $m,
    expects: null,
    async: !1,
    requirement: Rp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "email", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bm(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: Bm,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "safe integer", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dm(e, t) {
  return {
    kind: "validation",
    type: "size",
    reference: Dm,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && r.value.size !== this.requirement && B(this, "size", r, a, { received: `${r.value.size}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mm(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: Mm,
    async: !1,
    expects: null,
    requirement: Np,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "slug", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pm(e, t) {
  return {
    kind: "validation",
    type: "some_item",
    reference: Pm,
    async: !1,
    expects: null,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !r.value.some(this.requirement) && B(this, "item", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jm(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: jm,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = t.value.sort(this.operation), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fm(e, t) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: Fm,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !r.value.startsWith(this.requirement) && B(this, "start", r, a, { received: `"${r.value.slice(0, this.requirement.length)}"` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Im(e, t) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Im,
    message: t,
    config: e,
    async: !1,
    "~run"(r, a) {
      try {
        const n = JSON.stringify(r.value, this.config?.replacer, this.config?.space);
        n === void 0 && (B(this, "JSON", r, a), r.typed = !1), r.value = n;
      } catch (n) {
        if (n instanceof Error)
          B(this, "JSON", r, a, { received: `"${n.message}"` }), r.typed = !1;
        else throw n;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tm(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Tm,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function Rm(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: Rm,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = BigInt(t.value);
      } catch {
        B(this, "bigint", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nm() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Nm,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vm(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: Vm,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = new Date(t.value), isNaN(t.value) && (B(this, "date", t, r, { received: '"Invalid Date"' }), t.typed = !1);
      } catch {
        B(this, "date", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Um() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Um,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lm(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: Lm,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value > this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wm(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Wm,
    async: !1,
    requirement: e,
    "~run"(t) {
      return t.value = t.value < this.requirement ? this.requirement : t.value, t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Km(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: Km,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = Number(t.value), isNaN(t.value) && (B(this, "number", t, r), t.typed = !1);
      } catch {
        B(this, "number", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hm(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: Hm,
    async: !1,
    message: e,
    "~run"(t, r) {
      try {
        t.value = String(t.value);
      } catch {
        B(this, "string", t, r), t.typed = !1;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gm() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: Gm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: ct,
    async: !1,
    operation: e,
    "~run"(t) {
      return t.value = this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ym(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: Ym,
    async: !0,
    operation: e,
    async "~run"(t) {
      return t.value = await this.operation(t.value), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zm() {
  return {
    kind: "transformation",
    type: "trim",
    reference: Zm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jm() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: Jm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qm() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: Qm,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xm(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: Xm,
    async: !1,
    expects: null,
    requirement: Vp,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "ULID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e) {
  return {
    kind: "validation",
    type: "url",
    reference: eh,
    async: !1,
    expects: null,
    requirement(t) {
      try {
        return new URL(t), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement(t.value) && B(this, "URL", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function th(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: th,
    async: !1,
    expects: null,
    requirement: Up,
    message: e,
    "~run"(t, r) {
      return t.typed && !this.requirement.test(t.value) && B(this, "UUID", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rh(e, t) {
  return {
    kind: "validation",
    type: "value",
    reference: rh,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ Te(e),
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !(this.requirement <= r.value && this.requirement >= r.value) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ah(e, t) {
  return {
    kind: "validation",
    type: "values",
    reference: ah,
    async: !1,
    expects: `${/* @__PURE__ */ gt(e.map((r) => r instanceof Date ? r.toJSON() : /* @__PURE__ */ Te(r)), "|")}`,
    requirement: e,
    message: t,
    "~run"(r, a) {
      return r.typed && !this.requirement.some((n) => n <= r.value && n >= r.value) && B(this, "value", r, a, { received: r.value instanceof Date ? r.value.toJSON() : /* @__PURE__ */ Te(r.value) }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nh(e, t, r) {
  return {
    kind: "validation",
    type: "words",
    reference: nh,
    async: !1,
    expects: `${t}`,
    locales: e,
    requirement: t,
    message: r,
    "~run"(a, n) {
      if (a.typed) {
        const o = /* @__PURE__ */ vn(this.locales, a.value);
        o !== this.requirement && B(this, "words", a, n, { received: `${o}` });
      }
      return a;
    }
  };
}
function Uw(e, t) {
  const r = e["~run"]({ value: t }, { abortEarly: !0 }).issues;
  if (r) throw new lr(r);
}
var oh = class {
  constructor(e) {
    this.refCount = 0, this.maxSize = e?.maxSize ?? 1e3, this.maxAge = e?.maxAge ?? 1 / 0, this.hasMaxAge = isFinite(this.maxAge);
  }
  /**
  * Stringifies an unknown input to a cache key component.
  *
  * @param input The unknown input.
  *
  * @returns A cache key component.
  */
  #e(e) {
    const t = typeof e;
    if (t === "string") return `"${e}"`;
    if (t === "number" || t === "boolean") return `${e}`;
    if (t === "bigint") return `${e}n`;
    if (t === "object" || t === "function") {
      if (e) {
        this.refIds ??= /* @__PURE__ */ new WeakMap();
        let r = this.refIds.get(e);
        return r || (r = ++this.refCount, this.refIds.set(e, r)), `#${r}`;
      }
      return "null";
    }
    return t;
  }
  /**
  * Creates a cache key from input and config.
  *
  * @param input The input value.
  * @param config The parse configuration.
  *
  * @returns The cache key.
  */
  key(e, t = {}) {
    return `${this.#e(e)}|${this.#e(t.lang)}|${this.#e(t.message)}|${this.#e(t.abortEarly)}|${this.#e(t.abortPipeEarly)}`;
  }
  /**
  * Gets a value from the cache by key.
  *
  * @param key The cache key.
  *
  * @returns The cached value.
  */
  get(e) {
    if (!this.store) return;
    const t = this.store.get(e);
    if (t) {
      if (this.hasMaxAge && Date.now() - t[1] > this.maxAge) {
        this.store.delete(e);
        return;
      }
      return this.store.delete(e), this.store.set(e, t), t[0];
    }
  }
  /**
  * Sets a value in the cache by key.
  *
  * @param key The cache key.
  * @param value The cached value.
  */
  set(e, t) {
    this.store ??= /* @__PURE__ */ new Map(), this.store.delete(e);
    const r = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [t, r]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function Lw(e, t) {
  return {
    ...e,
    cacheConfig: t,
    cache: new oh(t),
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = this.cache.key(r.value, a);
      let o = this.cache.get(n);
      return o || this.cache.set(n, o = e["~run"](r, a)), /* @__PURE__ */ io(o);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ww(e, t) {
  let r;
  return {
    ...e,
    async: !0,
    cacheConfig: t,
    cache: new oh(t),
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = this.cache.key(a.value, n), i = this.cache.get(o);
      if (i) return /* @__PURE__ */ io(i);
      let s = r?.get(o);
      s || (r ??= /* @__PURE__ */ new Map(), s = Promise.resolve(e["~run"](a, n)), r.set(o, s));
      try {
        const l = await s;
        return this.cache.set(o, l), /* @__PURE__ */ io(l);
      } finally {
        r?.delete(o);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kw(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return e["~run"](r, {
        ...a,
        ...t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bt(e, t, r) {
  return typeof e.fallback == "function" ? e.fallback(t, r) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function Hw(e, t) {
  return {
    ...e,
    fallback: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = e["~run"](r, a);
      return n.issues ? {
        typed: !0,
        value: /* @__PURE__ */ bt(this, n, a)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gw(e, t) {
  return {
    ...e,
    fallback: t,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = await e["~run"](r, a);
      return n.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ bt(this, n, a)
      } : n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  const t = {};
  for (const r of e) if (r.path) {
    const a = /* @__PURE__ */ jo(r);
    a ? (t.nested || (t.nested = {}), t.nested[a] ? t.nested[a].push(r.message) : t.nested[a] = [r.message]) : t.other ? t.other.push(r.message) : t.other = [r.message];
  } else t.root ? t.root.push(r.message) : t.root = [r.message];
  return t;
}
// @__NO_SIDE_EFFECTS__
function Yw(e, t) {
  return {
    ...e,
    "~run"(r, a) {
      const n = r.issues && [...r.issues];
      if (r = e["~run"](r, a), r.issues) {
        for (const o of r.issues) if (!n?.includes(o)) {
          let i = r.value;
          for (const s of t) {
            const l = i[s], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: s,
              value: l
            };
            if (o.path ? o.path.push(d) : o.path = [d], !l) break;
            i = l;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zw(e, t) {
  return {
    ...e,
    async: !0,
    async "~run"(r, a) {
      const n = r.issues && [...r.issues];
      if (r = await e["~run"](r, a), r.issues) {
        for (const o of r.issues) if (!n?.includes(o)) {
          let i = r.value;
          for (const s of t) {
            const l = i[s], d = {
              type: "unknown",
              origin: "value",
              input: i,
              key: s,
              value: l
            };
            if (o.path ? o.path.push(d) : o.path = [d], !l) break;
            i = l;
          }
        }
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ye(e, t, r) {
  return typeof e.default == "function" ? e.default(t, r) : e.default;
}
// @__NO_SIDE_EFFECTS__
function As(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ As(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map(As) : /* @__PURE__ */ Ye(e);
}
// @__NO_SIDE_EFFECTS__
async function Es(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ Es(r)]))) : "items" in e ? Promise.all(e.items.map(Es)) : /* @__PURE__ */ Ye(e);
}
// @__NO_SIDE_EFFECTS__
function Jw(e) {
  return /* @__PURE__ */ Po(e, "description");
}
// @__NO_SIDE_EFFECTS__
function Qw(e) {
  const t = [];
  function r(a) {
    if ("pipe" in a)
      for (const n of a.pipe) n.kind === "schema" && "pipe" in n ? r(n) : n.kind === "metadata" && n.type === "examples" && t.push(...n.examples);
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  if ("entries" in e) {
    const t = {};
    for (const r in e.entries) t[r] = /* @__PURE__ */ Cs(e.entries[r]);
    return t;
  }
  return "items" in e ? e.items.map(Cs) : /* @__PURE__ */ bt(e);
}
// @__NO_SIDE_EFFECTS__
async function $s(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([t, r]) => [t, await /* @__PURE__ */ $s(r)]))) : "items" in e ? Promise.all(e.items.map($s)) : /* @__PURE__ */ bt(e);
}
// @__NO_SIDE_EFFECTS__
function Xw(e) {
  const t = {};
  function r(a) {
    if ("pipe" in a)
      for (const n of a.pipe) n.kind === "schema" && "pipe" in n ? r(n) : n.kind === "metadata" && n.type === "metadata" && Object.assign(t, n.metadata);
  }
  return r(e), t;
}
// @__NO_SIDE_EFFECTS__
function e1(e) {
  return /* @__PURE__ */ Po(e, "title");
}
// @__NO_SIDE_EFFECTS__
function t1(e, t) {
  return !e["~run"]({ value: t }, { abortEarly: !0 }).issues;
}
// @__NO_SIDE_EFFECTS__
function gn() {
  return {
    kind: "schema",
    type: "any",
    reference: gn,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: br,
    expects: "Array",
    async: !1,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < n.length; o++) {
          const i = n[o], s = this.item["~run"]({ value: i }, a);
          if (s.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ih(e, t) {
  return {
    kind: "schema",
    type: "array",
    reference: ih,
    expects: "Array",
    async: !0,
    item: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(n.map((i) => this.item["~run"]({ value: i }, a)));
        for (let i = 0; i < o.length; i++) {
          const s = o[i];
          if (s.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: n[i]
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sh(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: sh,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "bigint" ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: lh,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value instanceof Blob ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ml(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: ml,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "boolean" ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: uh,
    expects: "unknown",
    async: !1,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return this.check(r.value) ? r.typed = !0 : B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dh(e, t) {
  return {
    kind: "schema",
    type: "custom",
    reference: dh,
    expects: "unknown",
    async: !0,
    check: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return await this.check(r.value) ? r.typed = !0 : B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fo(e) {
  return {
    kind: "schema",
    type: "date",
    reference: Fo,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value instanceof Date ? isNaN(t.value) ? B(this, "type", t, r, { received: '"Invalid Date"' }) : t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bs(e, t) {
  const r = [];
  for (const a in e) (`${+a}` !== a || typeof e[a] != "string" || !Object.is(e[e[a]], +a)) && r.push(e[a]);
  return {
    kind: "schema",
    type: "enum",
    reference: Bs,
    expects: /* @__PURE__ */ gt(r.map(Te), "|"),
    async: !1,
    enum: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      return this.options.includes(a.value) ? a.typed = !0 : B(this, "type", a, n), a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ch(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: ch,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e, t) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: fh,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ph(e) {
  return {
    kind: "schema",
    type: "file",
    reference: ph,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value instanceof File ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ds(e) {
  return {
    kind: "schema",
    type: "function",
    reference: Ds,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "function" ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yh(e, t) {
  return {
    kind: "schema",
    type: "instance",
    reference: yh,
    expects: e.name,
    async: !1,
    class: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value instanceof this.class ? r.typed = !0 : B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
  if (typeof e == typeof t) {
    if (e === t || e instanceof Date && t instanceof Date && +e == +t) return { value: e };
    if (e && t && e.constructor === Object && t.constructor === Object) {
      for (const r in t) if (r in e) {
        const a = /* @__PURE__ */ so(e[r], t[r]);
        if (a.issue) return a;
        e[r] = a.value;
      } else e[r] = t[r];
      return { value: e };
    }
    if (Array.isArray(e) && Array.isArray(t) && e.length === t.length) {
      for (let r = 0; r < e.length; r++) {
        const a = /* @__PURE__ */ so(e[r], t[r]);
        if (a.issue) return a;
        e[r] = a.value;
      }
      return { value: e };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function mh(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: mh,
    expects: /* @__PURE__ */ gt(e.map((r) => r.expects), "&"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      if (this.options.length) {
        const n = r.value;
        let o;
        r.typed = !0;
        for (const i of this.options) {
          const s = i["~run"]({ value: n }, a);
          if (s.issues && (r.issues ? r.issues.push(...s.issues) : r.issues = s.issues, a.abortEarly)) {
            r.typed = !1;
            break;
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let i = 1; i < o.length; i++) {
            const s = /* @__PURE__ */ so(r.value, o[i]);
            if (s.issue) {
              B(this, "type", r, a, { received: "unknown" });
              break;
            }
            r.value = s.value;
          }
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hh(e, t) {
  return {
    kind: "schema",
    type: "intersect",
    reference: hh,
    expects: /* @__PURE__ */ gt(e.map((r) => r.expects), "&"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      if (this.options.length) {
        const n = r.value;
        let o;
        r.typed = !0;
        const i = await Promise.all(this.options.map((s) => s["~run"]({ value: n }, a)));
        for (const s of i) {
          if (s.issues && (r.issues ? r.issues.push(...s.issues) : r.issues = s.issues, a.abortEarly)) {
            r.typed = !1;
            break;
          }
          s.typed || (r.typed = !1), r.typed && (o ? o.push(s.value) : o = [s.value]);
        }
        if (r.typed) {
          r.value = o[0];
          for (let s = 1; s < o.length; s++) {
            const l = /* @__PURE__ */ so(r.value, o[s]);
            if (l.issue) {
              B(this, "type", r, a, { received: "unknown" });
              break;
            }
            r.value = l.value;
          }
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: vh,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return this.getter(t.value)["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: gh,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(t, r) {
      return (await this.getter(t.value))["~run"](t, r);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
  return {
    kind: "schema",
    type: "literal",
    reference: lo,
    expects: /* @__PURE__ */ Te(e),
    async: !1,
    literal: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value === this.literal ? r.typed = !0 : B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bh(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: bh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const s = o in n ? n[o] : /* @__PURE__ */ Ye(i), l = i["~run"]({ value: s }, a);
            if (l.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: s
              };
              for (const c of l.issues)
                c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
              if (r.issues || (r.issues = l.issues), a.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            l.typed || (r.typed = !1), r.value[o] = l.value;
          } else if (i.fallback !== void 0) r.value[o] = /* @__PURE__ */ bt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", r, a, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), a.abortEarly))
            break;
        }
        if (!r.issues || !a.abortEarly)
          for (const o in n) /* @__PURE__ */ Lr(n, o) && !(o in this.entries) && (r.value[o] = n[o]);
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kh(e, t) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: kh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, s]) => {
          if (i in n || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const l = i in n ? n[i] : await /* @__PURE__ */ Ye(s);
            return [
              i,
              l,
              s,
              await s["~run"]({ value: l }, a)
            ];
          }
          return [
            i,
            n[i],
            s,
            null
          ];
        }));
        for (const [i, s, l, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = d.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          d.typed || (r.typed = !1), r.value[i] = d.value;
        } else if (l.fallback !== void 0) r.value[i] = await /* @__PURE__ */ bt(l);
        else if (l.type !== "exact_optional" && l.type !== "optional" && l.type !== "nullish" && (B(this, "key", r, a, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: s
          }]
        }), a.abortEarly))
          break;
        if (!r.issues || !a.abortEarly)
          for (const i in n) /* @__PURE__ */ Lr(n, i) && !(i in this.entries) && (r.value[i] = n[i]);
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wh(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: wh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], s = this.items[o]["~run"]({ value: i }, a);
          if (s.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        if (!r.issues || !a.abortEarly) for (let o = this.items.length; o < n.length; o++) r.value.push(n[o]);
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xh(e, t) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: xh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (i, s) => {
          const l = n[s];
          return [
            s,
            l,
            await i["~run"]({ value: l }, a)
          ];
        }));
        for (const [i, s, l] of o) {
          if (l.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const c of l.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = l.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value.push(l.value);
        }
        if (!r.issues || !a.abortEarly) for (let i = this.items.length; i < n.length; i++) r.value.push(n[i]);
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zh(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: zh,
    expects: "Map",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      const o = a.value;
      if (o instanceof Map) {
        a.typed = !0, a.value = /* @__PURE__ */ new Map();
        for (const [i, s] of o) {
          const l = this.key["~run"]({ value: i }, n);
          if (l.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: o,
              key: i,
              value: s
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = l.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          const d = this.value["~run"]({ value: s }, n);
          if (d.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: o,
              key: i,
              value: s
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = d.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          (!l.typed || !d.typed) && (a.typed = !1), a.value.set(l.value, d.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _h(e, t, r) {
  return {
    kind: "schema",
    type: "map",
    reference: _h,
    expects: "Map",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = a.value;
      if (o instanceof Map) {
        a.typed = !0, a.value = /* @__PURE__ */ new Map();
        const i = await Promise.all([...o].map(([s, l]) => Promise.all([
          s,
          l,
          this.key["~run"]({ value: s }, n),
          this.value["~run"]({ value: l }, n)
        ])));
        for (const [s, l, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "map",
              origin: "key",
              input: o,
              key: s,
              value: l
            };
            for (const y of d.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = d.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "map",
              origin: "value",
              input: o,
              key: s,
              value: l
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = c.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          (!d.typed || !c.typed) && (a.typed = !1), a.value.set(d.value, c.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sh(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: Sh,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return Number.isNaN(t.value) ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qh(e) {
  return {
    kind: "schema",
    type: "never",
    reference: qh,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oh(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Oh,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value !== null && (r = this.wrapped["~run"](r, a)), r.value === null && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ah(e, t) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: Ah,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value !== null && (r = await this.wrapped["~run"](r, a)), r.value === null && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eh(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Eh,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value === null || r.value === void 0 || (r = this.wrapped["~run"](r, a)), (r.value === null || r.value === void 0) && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ch(e, t) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Ch,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value === null || r.value === void 0 || (r = await this.wrapped["~run"](r, a)), (r.value === null || r.value === void 0) && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hl(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: hl,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value !== void 0 && (r = this.wrapped["~run"](r, a)), r.value === void 0 && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vl(e, t) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: vl,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value !== void 0 && (r = await this.wrapped["~run"](r, a)), r.value === void 0 && B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Ms,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value === null ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $h(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: $h,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value === null && (this.default !== void 0 && (r.value = /* @__PURE__ */ Ye(this, r, a)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bh(e, t) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Bh,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value === null && (this.default !== void 0 && (r.value = await /* @__PURE__ */ Ye(this, r, a)), r.value === null) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: uo,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = /* @__PURE__ */ Ye(this, r, a)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dh(e, t) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Dh,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return (r.value === null || r.value === void 0) && (this.default !== void 0 && (r.value = await /* @__PURE__ */ Ye(this, r, a)), r.value === null || r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return {
    kind: "schema",
    type: "number",
    reference: ka,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "number" && !isNaN(t.value) ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gl(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: gl,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const s = o in n ? n[o] : /* @__PURE__ */ Ye(i), l = i["~run"]({ value: s }, a);
            if (l.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: s
              };
              for (const c of l.issues)
                c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
              if (r.issues || (r.issues = l.issues), a.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            l.typed || (r.typed = !1), r.value[o] = l.value;
          } else if (i.fallback !== void 0) r.value[o] = /* @__PURE__ */ bt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", r, a, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), a.abortEarly))
            break;
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mh(e, t) {
  return {
    kind: "schema",
    type: "object",
    reference: Mh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, s]) => {
          if (i in n || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const l = i in n ? n[i] : await /* @__PURE__ */ Ye(s);
            return [
              i,
              l,
              s,
              await s["~run"]({ value: l }, a)
            ];
          }
          return [
            i,
            n[i],
            s,
            null
          ];
        }));
        for (const [i, s, l, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = d.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          d.typed || (r.typed = !1), r.value[i] = d.value;
        } else if (l.fallback !== void 0) r.value[i] = await /* @__PURE__ */ bt(l);
        else if (l.type !== "exact_optional" && l.type !== "optional" && l.type !== "nullish" && (B(this, "key", r, a, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: s
          }]
        }), a.abortEarly))
          break;
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ph(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Ph,
    expects: "Object",
    async: !1,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        a.typed = !0, a.value = {};
        for (const i in this.entries) {
          const s = this.entries[i];
          if (i in o || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const l = i in o ? o[i] : /* @__PURE__ */ Ye(s), d = s["~run"]({ value: l }, n);
            if (d.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: l
              };
              for (const f of d.issues)
                f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
              if (a.issues || (a.issues = d.issues), n.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            d.typed || (a.typed = !1), a.value[i] = d.value;
          } else if (s.fallback !== void 0) a.value[i] = /* @__PURE__ */ bt(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (B(this, "key", a, n, {
            input: void 0,
            expected: `"${i}"`,
            path: [{
              type: "object",
              origin: "key",
              input: o,
              key: i,
              value: o[i]
            }]
          }), n.abortEarly))
            break;
        }
        if (!a.issues || !n.abortEarly) {
          for (const i in o) if (/* @__PURE__ */ Lr(o, i) && !(i in this.entries)) {
            const s = this.rest["~run"]({ value: o[i] }, n);
            if (s.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: o,
                key: i,
                value: o[i]
              };
              for (const d of s.issues)
                d.path ? d.path.unshift(l) : d.path = [l], a.issues?.push(d);
              if (a.issues || (a.issues = s.issues), n.abortEarly) {
                a.typed = !1;
                break;
              }
            }
            s.typed || (a.typed = !1), a.value[i] = s.value;
          }
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jh(e, t, r) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: jh,
    expects: "Object",
    async: !0,
    entries: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        a.typed = !0, a.value = {};
        const [i, s] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([l, d]) => {
          if (l in o || (d.type === "exact_optional" || d.type === "optional" || d.type === "nullish") && d.default !== void 0) {
            const c = l in o ? o[l] : await /* @__PURE__ */ Ye(d);
            return [
              l,
              c,
              d,
              await d["~run"]({ value: c }, n)
            ];
          }
          return [
            l,
            o[l],
            d,
            null
          ];
        })), Promise.all(Object.entries(o).filter(([l]) => /* @__PURE__ */ Lr(o, l) && !(l in this.entries)).map(async ([l, d]) => [
          l,
          d,
          await this.rest["~run"]({ value: d }, n)
        ]))]);
        for (const [l, d, c, f] of i) if (f) {
          if (f.issues) {
            const y = {
              type: "object",
              origin: "value",
              input: o,
              key: l,
              value: d
            };
            for (const p of f.issues)
              p.path ? p.path.unshift(y) : p.path = [y], a.issues?.push(p);
            if (a.issues || (a.issues = f.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          f.typed || (a.typed = !1), a.value[l] = f.value;
        } else if (c.fallback !== void 0) a.value[l] = await /* @__PURE__ */ bt(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (B(this, "key", a, n, {
          input: void 0,
          expected: `"${l}"`,
          path: [{
            type: "object",
            origin: "key",
            input: o,
            key: l,
            value: d
          }]
        }), n.abortEarly))
          break;
        if (!a.issues || !n.abortEarly) for (const [l, d, c] of s) {
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: o,
              key: l,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = c.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          c.typed || (a.typed = !1), a.value[l] = c.value;
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: wa,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ Ye(this, r, a)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bl(e, t) {
  return {
    kind: "schema",
    type: "optional",
    reference: bl,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ Ye(this, r, a)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Io,
    expects: /* @__PURE__ */ gt(e.map(Te), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return this.options.includes(r.value) ? r.typed = !0 : B(this, "type", r, a), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fh(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: Fh,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value instanceof Promise ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kl(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: kl,
    expects: "Object",
    async: !1,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        a.typed = !0, a.value = {};
        for (const i in o) if (/* @__PURE__ */ Lr(o, i)) {
          const s = o[i], l = this.key["~run"]({ value: i }, n);
          if (l.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: o,
              key: i,
              value: s
            };
            for (const f of l.issues)
              f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = l.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          const d = this.value["~run"]({ value: s }, n);
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: o,
              key: i,
              value: s
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], a.issues?.push(f);
            if (a.issues || (a.issues = d.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          (!l.typed || !d.typed) && (a.typed = !1), l.typed && (a.value[l.value] = d.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ih(e, t, r) {
  return {
    kind: "schema",
    type: "record",
    reference: Ih,
    expects: "Object",
    async: !0,
    key: e,
    value: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        a.typed = !0, a.value = {};
        const i = await Promise.all(Object.entries(o).filter(([s]) => /* @__PURE__ */ Lr(o, s)).map(([s, l]) => Promise.all([
          s,
          l,
          this.key["~run"]({ value: s }, n),
          this.value["~run"]({ value: l }, n)
        ])));
        for (const [s, l, d, c] of i) {
          if (d.issues) {
            const f = {
              type: "object",
              origin: "key",
              input: o,
              key: s,
              value: l
            };
            for (const y of d.issues)
              y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = d.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: o,
              key: s,
              value: l
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = c.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          (!d.typed || !c.typed) && (a.typed = !1), d.typed && (a.value[d.value] = c.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Th(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Th,
    expects: "Set",
    async: !1,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (n instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        for (const o of n) {
          const i = this.value["~run"]({ value: o }, a);
          if (i.issues) {
            const s = {
              type: "set",
              origin: "value",
              input: n,
              key: null,
              value: o
            };
            for (const l of i.issues)
              l.path ? l.path.unshift(s) : l.path = [s], r.issues?.push(l);
            if (r.issues || (r.issues = i.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          i.typed || (r.typed = !1), r.value.add(i.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rh(e, t) {
  return {
    kind: "schema",
    type: "set",
    reference: Rh,
    expects: "Set",
    async: !0,
    value: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (n instanceof Set) {
        r.typed = !0, r.value = /* @__PURE__ */ new Set();
        const o = await Promise.all([...n].map(async (i) => [i, await this.value["~run"]({ value: i }, a)]));
        for (const [i, s] of o) {
          if (s.issues) {
            const l = {
              type: "set",
              origin: "value",
              input: n,
              key: null,
              value: i
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.add(s.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Nh,
    expects: "Object",
    async: !1,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        for (const o in this.entries) {
          const i = this.entries[o];
          if (o in n || (i.type === "exact_optional" || i.type === "optional" || i.type === "nullish") && i.default !== void 0) {
            const s = o in n ? n[o] : /* @__PURE__ */ Ye(i), l = i["~run"]({ value: s }, a);
            if (l.issues) {
              const d = {
                type: "object",
                origin: "value",
                input: n,
                key: o,
                value: s
              };
              for (const c of l.issues)
                c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
              if (r.issues || (r.issues = l.issues), a.abortEarly) {
                r.typed = !1;
                break;
              }
            }
            l.typed || (r.typed = !1), r.value[o] = l.value;
          } else if (i.fallback !== void 0) r.value[o] = /* @__PURE__ */ bt(i);
          else if (i.type !== "exact_optional" && i.type !== "optional" && i.type !== "nullish" && (B(this, "key", r, a, {
            input: void 0,
            expected: `"${o}"`,
            path: [{
              type: "object",
              origin: "key",
              input: n,
              key: o,
              value: n[o]
            }]
          }), a.abortEarly))
            break;
        }
        if (!r.issues || !a.abortEarly) {
          for (const o in n) if (!(o in this.entries)) {
            B(this, "key", r, a, {
              input: o,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: n,
                key: o,
                value: n[o]
              }]
            });
            break;
          }
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vh(e, t) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Vh,
    expects: "Object",
    async: !0,
    entries: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (n && typeof n == "object") {
        r.typed = !0, r.value = {};
        const o = await Promise.all(Object.entries(this.entries).map(async ([i, s]) => {
          if (i in n || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const l = i in n ? n[i] : await /* @__PURE__ */ Ye(s);
            return [
              i,
              l,
              s,
              await s["~run"]({ value: l }, a)
            ];
          }
          return [
            i,
            n[i],
            s,
            null
          ];
        }));
        for (const [i, s, l, d] of o) if (d) {
          if (d.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const f of d.issues)
              f.path ? f.path.unshift(c) : f.path = [c], r.issues?.push(f);
            if (r.issues || (r.issues = d.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          d.typed || (r.typed = !1), r.value[i] = d.value;
        } else if (l.fallback !== void 0) r.value[i] = await /* @__PURE__ */ bt(l);
        else if (l.type !== "exact_optional" && l.type !== "optional" && l.type !== "nullish" && (B(this, "key", r, a, {
          input: void 0,
          expected: `"${i}"`,
          path: [{
            type: "object",
            origin: "key",
            input: n,
            key: i,
            value: s
          }]
        }), a.abortEarly))
          break;
        if (!r.issues || !a.abortEarly) {
          for (const i in n) if (!(i in this.entries)) {
            B(this, "key", r, a, {
              input: i,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: n,
                key: i,
                value: n[i]
              }]
            });
            break;
          }
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Uh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], s = this.items[o]["~run"]({ value: i }, a);
          if (s.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
        !(r.issues && a.abortEarly) && this.items.length < n.length && B(this, "type", r, a, {
          input: n[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: n,
            key: this.items.length,
            value: n[this.items.length]
          }]
        });
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lh(e, t) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Lh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (i, s) => {
          const l = n[s];
          return [
            s,
            l,
            await i["~run"]({ value: l }, a)
          ];
        }));
        for (const [i, s, l] of o) {
          if (l.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const c of l.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = l.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value.push(l.value);
        }
        !(r.issues && a.abortEarly) && this.items.length < n.length && B(this, "type", r, a, {
          input: n[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: n,
            key: this.items.length,
            value: n[this.items.length]
          }]
        });
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return {
    kind: "schema",
    type: "string",
    reference: ft,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "string" ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wh(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Wh,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return typeof t.value == "symbol" ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Kh,
    expects: "Array",
    async: !1,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        for (let o = 0; o < this.items.length; o++) {
          const i = n[o], s = this.items[o]["~run"]({ value: i }, a);
          if (s.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: n,
              key: o,
              value: i
            };
            for (const d of s.issues)
              d.path ? d.path.unshift(l) : d.path = [l], r.issues?.push(d);
            if (r.issues || (r.issues = s.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          s.typed || (r.typed = !1), r.value.push(s.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hh(e, t) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Hh,
    expects: "Array",
    async: !0,
    items: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      const n = r.value;
      if (Array.isArray(n)) {
        r.typed = !0, r.value = [];
        const o = await Promise.all(this.items.map(async (i, s) => {
          const l = n[s];
          return [
            s,
            l,
            await i["~run"]({ value: l }, a)
          ];
        }));
        for (const [i, s, l] of o) {
          if (l.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: n,
              key: i,
              value: s
            };
            for (const c of l.issues)
              c.path ? c.path.unshift(d) : c.path = [d], r.issues?.push(c);
            if (r.issues || (r.issues = l.issues), a.abortEarly) {
              r.typed = !1;
              break;
            }
          }
          l.typed || (r.typed = !1), r.value.push(l.value);
        }
      } else B(this, "type", r, a);
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gh(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Gh,
    expects: "Array",
    async: !1,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      const o = a.value;
      if (Array.isArray(o)) {
        a.typed = !0, a.value = [];
        for (let i = 0; i < this.items.length; i++) {
          const s = o[i], l = this.items[i]["~run"]({ value: s }, n);
          if (l.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: s
            };
            for (const c of l.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = l.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
        if (!a.issues || !n.abortEarly) for (let i = this.items.length; i < o.length; i++) {
          const s = o[i], l = this.rest["~run"]({ value: s }, n);
          if (l.issues) {
            const d = {
              type: "array",
              origin: "value",
              input: o,
              key: i,
              value: s
            };
            for (const c of l.issues)
              c.path ? c.path.unshift(d) : c.path = [d], a.issues?.push(c);
            if (a.issues || (a.issues = l.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          l.typed || (a.typed = !1), a.value.push(l.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yh(e, t, r) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Yh,
    expects: "Array",
    async: !0,
    items: e,
    rest: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = a.value;
      if (Array.isArray(o)) {
        a.typed = !0, a.value = [];
        const [i, s] = await Promise.all([Promise.all(this.items.map(async (l, d) => {
          const c = o[d];
          return [
            d,
            c,
            await l["~run"]({ value: c }, n)
          ];
        })), Promise.all(o.slice(this.items.length).map(async (l, d) => [
          d + this.items.length,
          l,
          await this.rest["~run"]({ value: l }, n)
        ]))]);
        for (const [l, d, c] of i) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: l,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = c.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          c.typed || (a.typed = !1), a.value.push(c.value);
        }
        if (!a.issues || !n.abortEarly) for (const [l, d, c] of s) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: o,
              key: l,
              value: d
            };
            for (const y of c.issues)
              y.path ? y.path.unshift(f) : y.path = [f], a.issues?.push(y);
            if (a.issues || (a.issues = c.issues), n.abortEarly) {
              a.typed = !1;
              break;
            }
          }
          c.typed || (a.typed = !1), a.value.push(c.value);
        }
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: Ps,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zh(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Zh,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = /* @__PURE__ */ Ye(this, r, a)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jh(e, t) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Jh,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      return r.value === void 0 && (this.default !== void 0 && (r.value = await /* @__PURE__ */ Ye(this, r, a)), r.value === void 0) ? (r.typed = !0, r) : this.wrapped["~run"](r, a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  let t;
  if (e) for (const r of e) t ? t.push(...r.issues) : t = r.issues;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Bt,
    expects: /* @__PURE__ */ gt(e.map((r) => r.expects), "|"),
    async: !1,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      let n, o, i;
      for (const s of this.options) {
        const l = s["~run"]({ value: r.value }, a);
        if (l.typed) if (l.issues) o ? o.push(l) : o = [l];
        else {
          n = l;
          break;
        }
        else i ? i.push(l) : i = [l];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", r, a, { issues: /* @__PURE__ */ co(o) }), r.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", r, a, { issues: /* @__PURE__ */ co(i) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qh(e, t) {
  return {
    kind: "schema",
    type: "union",
    reference: Qh,
    expects: /* @__PURE__ */ gt(e.map((r) => r.expects), "|"),
    async: !0,
    options: e,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(r, a) {
      let n, o, i;
      for (const s of this.options) {
        const l = await s["~run"]({ value: r.value }, a);
        if (l.typed) if (l.issues) o ? o.push(l) : o = [l];
        else {
          n = l;
          break;
        }
        else i ? i.push(l) : i = [l];
      }
      if (n) return n;
      if (o) {
        if (o.length === 1) return o[0];
        B(this, "type", r, a, { issues: /* @__PURE__ */ co(o) }), r.typed = !0;
      } else {
        if (i?.length === 1) return i[0];
        B(this, "type", r, a, { issues: /* @__PURE__ */ co(i) });
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xh() {
  return {
    kind: "schema",
    type: "unknown",
    reference: Xh,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ev(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: ev,
    expects: "Object",
    async: !1,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        let i, s = 0, l = this.key, d = [];
        const c = (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") c(p, new Set(y).add(p.key));
            else {
              let k = !0, h = 0;
              for (const m of y) {
                const b = p.entries[m];
                if (m in o ? b["~run"]({
                  typed: !1,
                  value: o[m]
                }, { abortEarly: !0 }).issues : b.type !== "exact_optional" && b.type !== "optional" && b.type !== "nullish") {
                  k = !1, l !== m && (s < h || s === h && m in o && !(l in o)) && (s = h, l = m, d = []), l === m && d.push(p.entries[m].expects);
                  break;
                }
                h++;
              }
              if (k) {
                const m = p["~run"]({ value: o }, n);
                (!i || !i.typed && m.typed) && (i = m);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", a, n, {
          input: o[l],
          expected: /* @__PURE__ */ gt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: l,
            value: o[l]
          }]
        });
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tv(e, t, r) {
  return {
    kind: "schema",
    type: "variant",
    reference: tv,
    expects: "Object",
    async: !0,
    key: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(a, n) {
      const o = a.value;
      if (o && typeof o == "object") {
        let i, s = 0, l = this.key, d = [];
        const c = async (f, y) => {
          for (const p of f.options) {
            if (p.type === "variant") await c(p, new Set(y).add(p.key));
            else {
              let k = !0, h = 0;
              for (const m of y) {
                const b = p.entries[m];
                if (m in o ? (await b["~run"]({
                  typed: !1,
                  value: o[m]
                }, { abortEarly: !0 })).issues : b.type !== "exact_optional" && b.type !== "optional" && b.type !== "nullish") {
                  k = !1, l !== m && (s < h || s === h && m in o && !(l in o)) && (s = h, l = m, d = []), l === m && d.push(p.entries[m].expects);
                  break;
                }
                h++;
              }
              if (k) {
                const m = await p["~run"]({ value: o }, n);
                (!i || !i.typed && m.typed) && (i = m);
              }
            }
            if (i && !i.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), i) return i;
        B(this, "type", a, n, {
          input: o[l],
          expected: /* @__PURE__ */ gt(d, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: o,
            key: l,
            value: o[l]
          }]
        });
      } else B(this, "type", a, n);
      return a;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return {
    kind: "schema",
    type: "void",
    reference: js,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      return t.value === void 0 ? t.typed = !0 : B(this, "type", t, r), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function r1(e, t) {
  return /* @__PURE__ */ Io(Object.keys(e.entries), t);
}
// @__NO_SIDE_EFFECTS__
function a1(e, t) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(r, a) {
      return e["~run"](r, {
        ...a,
        message: t
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function n1(e, t) {
  const r = { ...e.entries };
  for (const a of t) delete r[a];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
function rv(e, t, r) {
  const a = e["~run"]({ value: t }, /* @__PURE__ */ Ba(r));
  if (a.issues) throw new lr(a.issues);
  return a.value;
}
async function av(e, t, r) {
  const a = await e["~run"]({ value: t }, /* @__PURE__ */ Ba(r));
  if (a.issues) throw new lr(a.issues);
  return a.value;
}
// @__NO_SIDE_EFFECTS__
function o1(e, t) {
  const r = (a) => rv(e, a, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function i1(e, t) {
  const r = (a) => av(e, a, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function s1(e, t) {
  const r = {};
  for (const a in e.entries) r[a] = !t || t.includes(a) ? /* @__PURE__ */ wa(e.entries[a]) : e.entries[a];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function l1(e, t) {
  const r = {};
  for (const a in e.entries) r[a] = !t || t.includes(a) ? /* @__PURE__ */ bl(e.entries[a]) : e.entries[a];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function u1(e, t) {
  const r = {};
  for (const a of t) r[a] = e.entries[a];
  return {
    ...e,
    entries: r,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gt(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    "~run"(t, r) {
      for (const a of e) if (a.kind !== "metadata") {
        if (t.issues && (a.kind === "schema" || a.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = a["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function d1(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    },
    async "~run"(t, r) {
      for (const a of e) if (a.kind !== "metadata") {
        if (t.issues && (a.kind === "schema" || a.kind === "transformation")) {
          t.typed = !1;
          break;
        }
        (!t.issues || !r.abortEarly && !r.abortPipeEarly) && (t = await a["~run"](t, r));
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function c1(e, t, r) {
  const a = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? r : t, o = {};
  for (const i in e.entries) o[i] = !a || a.includes(i) ? /* @__PURE__ */ hl(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function f1(e, t, r) {
  const a = Array.isArray(t) ? t : void 0, n = Array.isArray(t) ? r : t, o = {};
  for (const i in e.entries) o[i] = !a || a.includes(i) ? /* @__PURE__ */ vl(e.entries[i], n) : e.entries[i];
  return {
    ...e,
    entries: o,
    get "~standard"() {
      return /* @__PURE__ */ K(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sn(e, t, r) {
  const a = e["~run"]({ value: t }, /* @__PURE__ */ Ba(r));
  return {
    typed: a.typed,
    success: !a.issues,
    output: a.value,
    issues: a.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function To(e, t, r) {
  const a = await e["~run"]({ value: t }, /* @__PURE__ */ Ba(r));
  return {
    typed: a.typed,
    success: !a.issues,
    output: a.value,
    issues: a.issues
  };
}
// @__NO_SIDE_EFFECTS__
function p1(e, t) {
  const r = (a) => /* @__PURE__ */ sn(e, a, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function y1(e, t) {
  const r = (a) => /* @__PURE__ */ To(e, a, t);
  return r.schema = e, r.config = t, r;
}
// @__NO_SIDE_EFFECTS__
function m1(e) {
  let t = "";
  for (const r of e) {
    t && (t += `
`), t += `× ${r.message}`;
    const a = /* @__PURE__ */ jo(r);
    a && (t += `
  → at ${a}`);
  }
  return t;
}
// @__NO_SIDE_EFFECTS__
function h1(e) {
  return e.wrapped;
}
const v1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: pp,
  BIC_REGEX: yp,
  CUID2_REGEX: mp,
  DECIMAL_REGEX: hp,
  DIGITS_REGEX: vp,
  DOMAIN_REGEX: gp,
  EMAIL_REGEX: bp,
  EMOJI_REGEX: kp,
  HEXADECIMAL_REGEX: wp,
  HEX_COLOR_REGEX: xp,
  IMEI_REGEX: zp,
  IPV4_REGEX: _p,
  IPV6_REGEX: Sp,
  IP_REGEX: qp,
  ISO_DATE_REGEX: Op,
  ISO_DATE_TIME_REGEX: Ap,
  ISO_TIMESTAMP_REGEX: $p,
  ISO_TIME_REGEX: Ep,
  ISO_TIME_SECOND_REGEX: Cp,
  ISO_WEEK_REGEX: Bp,
  ISRC_REGEX: Mp,
  JWS_COMPACT_REGEX: Dp,
  MAC48_REGEX: Pp,
  MAC64_REGEX: jp,
  MAC_REGEX: Fp,
  NANO_ID_REGEX: Ip,
  OCTAL_REGEX: Tp,
  RFC_EMAIL_REGEX: Rp,
  SLUG_REGEX: Np,
  ULID_REGEX: Vp,
  UUID_REGEX: Up,
  ValiError: lr,
  _addIssue: B,
  _cloneDataset: io,
  _getByteCount: mn,
  _getGraphemeCount: hn,
  _getLastMetadata: Po,
  _getStandardProps: K,
  _getWordCount: vn,
  _isLuhnAlgo: pl,
  _isValidObjectKey: Lr,
  _joinExpects: gt,
  _stringify: Te,
  any: gn,
  args: dp,
  argsAsync: cp,
  array: br,
  arrayAsync: ih,
  assert: Uw,
  awaitAsync: fp,
  base64: Lp,
  bic: Wp,
  bigint: sh,
  blob: lh,
  boolean: ml,
  brand: Kp,
  bytes: Hp,
  cache: Lw,
  cacheAsync: Ww,
  check: Gp,
  checkAsync: Yp,
  checkItems: Zp,
  checkItemsAsync: Jp,
  config: Kw,
  creditCard: Qp,
  cuid2: Xp,
  custom: uh,
  customAsync: dh,
  date: Fo,
  decimal: ey,
  deleteGlobalConfig: ww,
  deleteGlobalMessage: zw,
  deleteSchemaMessage: Sw,
  deleteSpecificMessage: Ow,
  description: ty,
  digits: ry,
  domain: ay,
  email: ny,
  emoji: oy,
  empty: iy,
  endsWith: sy,
  entries: ly,
  entriesFromList: Ew,
  entriesFromObjects: Cw,
  enum: Bs,
  enum_: Bs,
  everyItem: uy,
  exactOptional: ch,
  exactOptionalAsync: fh,
  examples: dy,
  excludes: cy,
  fallback: Hw,
  fallbackAsync: Gw,
  file: ph,
  filterItems: fy,
  findItem: py,
  finite: yy,
  flatten: Os,
  flavor: my,
  forward: Yw,
  forwardAsync: Zw,
  function: Ds,
  function_: Ds,
  getDefault: Ye,
  getDefaults: As,
  getDefaultsAsync: Es,
  getDescription: Jw,
  getDotPath: jo,
  getExamples: Qw,
  getFallback: bt,
  getFallbacks: Cs,
  getFallbacksAsync: $s,
  getGlobalConfig: Ba,
  getGlobalMessage: sp,
  getMetadata: Xw,
  getSchemaMessage: lp,
  getSpecificMessage: up,
  getTitle: e1,
  graphemes: hy,
  gtValue: vy,
  guard: gy,
  hash: by,
  hexColor: wy,
  hexadecimal: ky,
  imei: xy,
  includes: zy,
  instance: yh,
  integer: yl,
  intersect: mh,
  intersectAsync: hh,
  ip: _y,
  ipv4: Sy,
  ipv6: qy,
  is: t1,
  isOfKind: $w,
  isOfType: Bw,
  isValiError: Dw,
  isbn: Oy,
  isoDate: Ey,
  isoDateTime: Cy,
  isoTime: $y,
  isoTimeSecond: By,
  isoTimestamp: Dy,
  isoWeek: My,
  isrc: Ay,
  jwsCompact: Py,
  keyof: r1,
  lazy: vh,
  lazyAsync: gh,
  length: jy,
  literal: lo,
  looseObject: bh,
  looseObjectAsync: kh,
  looseTuple: wh,
  looseTupleAsync: xh,
  ltValue: Fy,
  mac: Iy,
  mac48: Ty,
  mac64: Ry,
  map: zh,
  mapAsync: _h,
  mapItems: Ny,
  maxBytes: Vy,
  maxEntries: Uy,
  maxGraphemes: Ly,
  maxLength: Wy,
  maxSize: Ky,
  maxValue: Hy,
  maxWords: Gy,
  message: a1,
  metadata: Yy,
  mimeType: Zy,
  minBytes: Jy,
  minEntries: Qy,
  minGraphemes: Xy,
  minLength: em,
  minSize: tm,
  minValue: rm,
  minWords: am,
  multipleOf: nm,
  nan: Sh,
  nanoid: om,
  never: qh,
  nonEmpty: im,
  nonNullable: Oh,
  nonNullableAsync: Ah,
  nonNullish: Eh,
  nonNullishAsync: Ch,
  nonOptional: hl,
  nonOptionalAsync: vl,
  normalize: sm,
  notBytes: lm,
  notEntries: um,
  notGraphemes: dm,
  notLength: cm,
  notSize: fm,
  notValue: pm,
  notValues: ym,
  notWords: mm,
  null: Ms,
  null_: Ms,
  nullable: $h,
  nullableAsync: Bh,
  nullish: uo,
  nullishAsync: Dh,
  number: ka,
  object: gl,
  objectAsync: Mh,
  objectWithRest: Ph,
  objectWithRestAsync: jh,
  octal: hm,
  omit: n1,
  optional: wa,
  optionalAsync: bl,
  parse: rv,
  parseAsync: av,
  parseBoolean: vm,
  parseJson: gm,
  parser: o1,
  parserAsync: i1,
  partial: s1,
  partialAsync: l1,
  partialCheck: km,
  partialCheckAsync: wm,
  pick: u1,
  picklist: Io,
  pipe: Gt,
  pipeAsync: d1,
  promise: Fh,
  rawCheck: xm,
  rawCheckAsync: zm,
  rawTransform: _m,
  rawTransformAsync: Sm,
  readonly: qm,
  record: kl,
  recordAsync: Ih,
  reduceItems: Om,
  regex: Am,
  required: c1,
  requiredAsync: f1,
  returns: Em,
  returnsAsync: Cm,
  rfcEmail: $m,
  safeInteger: Bm,
  safeParse: sn,
  safeParseAsync: To,
  safeParser: p1,
  safeParserAsync: y1,
  set: Th,
  setAsync: Rh,
  setGlobalConfig: kw,
  setGlobalMessage: xw,
  setSchemaMessage: _w,
  setSpecificMessage: qw,
  size: Dm,
  slug: Mm,
  someItem: Pm,
  sortItems: jm,
  startsWith: Fm,
  strictObject: Nh,
  strictObjectAsync: Vh,
  strictTuple: Uh,
  strictTupleAsync: Lh,
  string: ft,
  stringifyJson: Im,
  summarize: m1,
  symbol: Wh,
  title: Tm,
  toBigint: Rm,
  toBoolean: Nm,
  toDate: Vm,
  toLowerCase: Um,
  toMaxValue: Lm,
  toMinValue: Wm,
  toNumber: Km,
  toString: Hm,
  toUpperCase: Gm,
  transform: ct,
  transformAsync: Ym,
  trim: Zm,
  trimEnd: Jm,
  trimStart: Qm,
  tuple: Kh,
  tupleAsync: Hh,
  tupleWithRest: Gh,
  tupleWithRestAsync: Yh,
  ulid: Xm,
  undefined: Ps,
  undefined_: Ps,
  undefinedable: Zh,
  undefinedableAsync: Jh,
  union: Bt,
  unionAsync: Qh,
  unknown: Xh,
  unwrap: h1,
  url: eh,
  uuid: th,
  value: rh,
  values: ah,
  variant: ev,
  variantAsync: tv,
  void: js,
  void_: js,
  words: nh
}, Symbol.toStringTag, { value: "Module" }));
function Fs(e = /* @__PURE__ */ gn()) {
  return /* @__PURE__ */ Gt(
    /* @__PURE__ */ Bt([e, /* @__PURE__ */ br(e)]),
    /* @__PURE__ */ ct((t) => Array.isArray(t) ? t : [t]),
    /* @__PURE__ */ br(e)
  );
}
Fs.number = () => Fs(/* @__PURE__ */ ka());
const nv = 6048e5, g1 = 864e5, Fd = /* @__PURE__ */ Symbol.for("constructDateFrom");
function kr(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Fd in e ? e[Fd](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Dt(e, t) {
  return kr(t || e, e);
}
let b1 = {};
function Ro() {
  return b1;
}
function ln(e, t) {
  const r = Ro(), a = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, n = Dt(e, t?.in), o = n.getDay(), i = (o < a ? 7 : 0) + o - a;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function fo(e, t) {
  return ln(e, { ...t, weekStartsOn: 1 });
}
function ov(e, t) {
  const r = Dt(e, t?.in), a = r.getFullYear(), n = kr(r, 0);
  n.setFullYear(a + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = fo(n), i = kr(r, 0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  const s = fo(i);
  return r.getTime() >= o.getTime() ? a + 1 : r.getTime() >= s.getTime() ? a : a - 1;
}
function Id(e) {
  const t = Dt(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function k1(e, ...t) {
  const r = kr.bind(
    null,
    t.find((a) => typeof a == "object")
  );
  return t.map(r);
}
function Td(e, t) {
  const r = Dt(e, t?.in);
  return r.setHours(0, 0, 0, 0), r;
}
function w1(e, t, r) {
  const [a, n] = k1(
    r?.in,
    e,
    t
  ), o = Td(a), i = Td(n), s = +o - Id(o), l = +i - Id(i);
  return Math.round((s - l) / g1);
}
function x1(e, t) {
  const r = ov(e, t), a = kr(e, 0);
  return a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0), fo(a);
}
function z1(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function _1(e) {
  return !(!z1(e) && typeof e != "number" || isNaN(+Dt(e)));
}
function S1(e, t) {
  const r = Dt(e, t?.in);
  return r.setFullYear(r.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const q1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, O1 = (e, t, r) => {
  let a;
  const n = q1[e];
  return typeof n == "string" ? a = n : t === 1 ? a = n.one : a = n.other.replace("{{count}}", t.toString()), r?.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
function Ji(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const A1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, E1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, C1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, $1 = {
  date: Ji({
    formats: A1,
    defaultWidth: "full"
  }),
  time: Ji({
    formats: E1,
    defaultWidth: "full"
  }),
  dateTime: Ji({
    formats: C1,
    defaultWidth: "full"
  })
}, B1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, D1 = (e, t, r, a) => B1[e];
function Ha(e) {
  return (t, r) => {
    const a = r?.context ? String(r.context) : "standalone";
    let n;
    if (a === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r?.width ? String(r.width) : i;
      n = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r?.width ? String(r.width) : e.defaultWidth;
      n = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[o];
  };
}
const M1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, P1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, j1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, F1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, I1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, T1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, R1 = (e, t) => {
  const r = Number(e), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, N1 = {
  ordinalNumber: R1,
  era: Ha({
    values: M1,
    defaultWidth: "wide"
  }),
  quarter: Ha({
    values: P1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ha({
    values: j1,
    defaultWidth: "wide"
  }),
  day: Ha({
    values: F1,
    defaultWidth: "wide"
  }),
  dayPeriod: Ha({
    values: I1,
    defaultWidth: "wide",
    formattingValues: T1,
    defaultFormattingWidth: "wide"
  })
};
function Ga(e) {
  return (t, r = {}) => {
    const a = r.width, n = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], o = t.match(n);
    if (!o)
      return null;
    const i = o[0], s = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? U1(s, (f) => f.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      V1(s, (f) => f.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = r.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      r.valueCallback(d)
    ) : d;
    const c = t.slice(i.length);
    return { value: d, rest: c };
  };
}
function V1(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function U1(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function L1(e) {
  return (t, r = {}) => {
    const a = t.match(e.matchPattern);
    if (!a) return null;
    const n = a[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(n.length);
    return { value: i, rest: s };
  };
}
const W1 = /^(\d+)(th|st|nd|rd)?/i, K1 = /\d+/i, H1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, G1 = {
  any: [/^b/i, /^(a|c)/i]
}, Y1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Z1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, J1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Q1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, X1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ex = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, tx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rx = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ax = {
  ordinalNumber: L1({
    matchPattern: W1,
    parsePattern: K1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ga({
    matchPatterns: H1,
    defaultMatchWidth: "wide",
    parsePatterns: G1,
    defaultParseWidth: "any"
  }),
  quarter: Ga({
    matchPatterns: Y1,
    defaultMatchWidth: "wide",
    parsePatterns: Z1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ga({
    matchPatterns: J1,
    defaultMatchWidth: "wide",
    parsePatterns: Q1,
    defaultParseWidth: "any"
  }),
  day: Ga({
    matchPatterns: X1,
    defaultMatchWidth: "wide",
    parsePatterns: ex,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ga({
    matchPatterns: tx,
    defaultMatchWidth: "any",
    parsePatterns: rx,
    defaultParseWidth: "any"
  })
}, nx = {
  code: "en-US",
  formatDistance: O1,
  formatLong: $1,
  formatRelative: D1,
  localize: N1,
  match: ax,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ox(e, t) {
  const r = Dt(e, t?.in);
  return w1(r, S1(r)) + 1;
}
function ix(e, t) {
  const r = Dt(e, t?.in), a = +fo(r) - +x1(r);
  return Math.round(a / nv) + 1;
}
function iv(e, t) {
  const r = Dt(e, t?.in), a = r.getFullYear(), n = Ro(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = kr(t?.in || e, 0);
  i.setFullYear(a + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = ln(i, t), l = kr(t?.in || e, 0);
  l.setFullYear(a, 0, o), l.setHours(0, 0, 0, 0);
  const d = ln(l, t);
  return +r >= +s ? a + 1 : +r >= +d ? a : a - 1;
}
function sx(e, t) {
  const r = Ro(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, n = iv(e, t), o = kr(t?.in || e, 0);
  return o.setFullYear(n, 0, a), o.setHours(0, 0, 0, 0), ln(o, t);
}
function lx(e, t) {
  const r = Dt(e, t?.in), a = +ln(r, t) - +sx(r, t);
  return Math.round(a / nv) + 1;
}
function qe(e, t) {
  const r = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(t, "0");
  return r + a;
}
const pr = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
    return qe(t === "yy" ? a % 100 : a, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : qe(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return qe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, a = e.getMilliseconds(), n = Math.trunc(
      a * Math.pow(10, r - 3)
    );
    return qe(n, t.length);
  }
}, ia = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Rd = {
  // Era
  G: function(e, t, r) {
    const a = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return r.era(a, { width: "narrow" });
      default:
        return r.era(a, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const a = e.getFullYear(), n = a > 0 ? a : 1 - a;
      return r.ordinalNumber(n, { unit: "year" });
    }
    return pr.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, a) {
    const n = iv(e, a), o = n > 0 ? n : 1 - n;
    if (t === "YY") {
      const i = o % 100;
      return qe(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(o, { unit: "year" }) : qe(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = ov(e);
    return qe(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return qe(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(a);
      // 01, 02, 03, 04
      case "QQ":
        return qe(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(a);
      // 01, 02, 03, 04
      case "qq":
        return qe(a, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return r.ordinalNumber(a, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const a = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return pr.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return r.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.month(a, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const a = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(a + 1);
      // 01, 02, ..., 12
      case "LL":
        return qe(a + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return r.ordinalNumber(a + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return r.month(a, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, a) {
    const n = lx(e, a);
    return t === "wo" ? r.ordinalNumber(n, { unit: "week" }) : qe(n, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const a = ix(e);
    return t === "Io" ? r.ordinalNumber(a, { unit: "week" }) : qe(a, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : pr.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const a = ox(e);
    return t === "Do" ? r.ordinalNumber(a, { unit: "dayOfYear" }) : qe(a, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const a = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, a) {
    const n = e.getDay(), o = (n - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return qe(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return r.ordinalNumber(o, { unit: "day" });
      case "eee":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, a) {
    const n = e.getDay(), o = (n - a.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return qe(o, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return r.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return r.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return r.day(n, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return r.day(n, {
          width: "short",
          context: "standalone"
        });
      default:
        return r.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const a = e.getDay(), n = a === 0 ? 7 : a;
    switch (t) {
      // 2
      case "i":
        return String(n);
      // 02
      case "ii":
        return qe(n, t.length);
      // 2nd
      case "io":
        return r.ordinalNumber(n, { unit: "day" });
      // Tue
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const a = e.getHours();
    let n;
    switch (a === 12 ? n = ia.noon : a === 0 ? n = ia.midnight : n = a / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const a = e.getHours();
    let n;
    switch (a >= 17 ? n = ia.evening : a >= 12 ? n = ia.afternoon : a >= 4 ? n = ia.morning : n = ia.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return r.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let a = e.getHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, { unit: "hour" });
    }
    return pr.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : pr.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const a = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(a, { unit: "hour" }) : qe(a, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let a = e.getHours();
    return a === 0 && (a = 24), t === "ko" ? r.ordinalNumber(a, { unit: "hour" }) : qe(a, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : pr.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : pr.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return pr.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Vd(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Pr(a);
      // Hours and minutes with `:` delimiter
      default:
        return Pr(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Vd(a);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Pr(a);
      // Hours and minutes with `:` delimiter
      default:
        return Pr(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Nd(a, ":");
      default:
        return "GMT" + Pr(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const a = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Nd(a, ":");
      default:
        return "GMT" + Pr(a, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const a = Math.trunc(+e / 1e3);
    return qe(a, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    return qe(+e, t.length);
  }
};
function Nd(e, t = "") {
  const r = e > 0 ? "-" : "+", a = Math.abs(e), n = Math.trunc(a / 60), o = a % 60;
  return o === 0 ? r + String(n) : r + String(n) + t + qe(o, 2);
}
function Vd(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + qe(Math.abs(e) / 60, 2) : Pr(e, t);
}
function Pr(e, t = "") {
  const r = e > 0 ? "-" : "+", a = Math.abs(e), n = qe(Math.trunc(a / 60), 2), o = qe(a % 60, 2);
  return r + n + t + o;
}
const Ud = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, sv = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, ux = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], a = r[1], n = r[2];
  if (!n)
    return Ud(e, t);
  let o;
  switch (a) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Ud(a, t)).replace("{{time}}", sv(n, t));
}, dx = {
  p: sv,
  P: ux
}, cx = /^D+$/, fx = /^Y+$/, px = ["D", "DD", "YY", "YYYY"];
function yx(e) {
  return cx.test(e);
}
function mx(e) {
  return fx.test(e);
}
function hx(e, t, r) {
  const a = vx(e, t, r);
  if (console.warn(a), px.includes(e)) throw new RangeError(a);
}
function vx(e, t, r) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const gx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kx = /^'([^]*?)'?$/, wx = /''/g, xx = /[a-zA-Z]/;
function po(e, t, r) {
  const a = Ro(), n = a.locale ?? nx, o = a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, i = a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, s = Dt(e, r?.in);
  if (!_1(s))
    throw new RangeError("Invalid time value");
  let l = t.match(bx).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const y = dx[f];
      return y(c, n.formatLong);
    }
    return c;
  }).join("").match(gx).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: zx(c) };
    if (Rd[f])
      return { isToken: !0, value: c };
    if (f.match(xx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  n.localize.preprocessor && (l = n.localize.preprocessor(s, l));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return l.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (mx(f) || yx(f)) && hx(f, t, String(e));
    const y = Rd[f[0]];
    return y(s, f, n.localize, d);
  }).join("");
}
function zx(e) {
  const t = e.match(kx);
  return t ? t[1].replace(wx, "'") : e;
}
var lv = typeof global == "object" && global && global.Object === Object && global, _x = typeof self == "object" && self && self.Object === Object && self, bn = lv || _x || Function("return this")(), xa = bn.Symbol, uv = Object.prototype, Sx = uv.hasOwnProperty, qx = uv.toString, Ya = xa ? xa.toStringTag : void 0;
function Ox(e) {
  var t = Sx.call(e, Ya), r = e[Ya];
  try {
    e[Ya] = void 0;
    var a = !0;
  } catch {
  }
  var n = qx.call(e);
  return a && (t ? e[Ya] = r : delete e[Ya]), n;
}
var Ax = Object.prototype, Ex = Ax.toString;
function Cx(e) {
  return Ex.call(e);
}
var $x = "[object Null]", Bx = "[object Undefined]", Ld = xa ? xa.toStringTag : void 0;
function Da(e) {
  return e == null ? e === void 0 ? Bx : $x : Ld && Ld in Object(e) ? Ox(e) : Cx(e);
}
function Ma(e) {
  return e != null && typeof e == "object";
}
var Dx = "[object Symbol]";
function No(e) {
  return typeof e == "symbol" || Ma(e) && Da(e) == Dx;
}
function dv(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, n = Array(a); ++r < a; )
    n[r] = t(e[r], r, e);
  return n;
}
var kn = Array.isArray, Wd = xa ? xa.prototype : void 0, Kd = Wd ? Wd.toString : void 0;
function cv(e) {
  if (typeof e == "string")
    return e;
  if (kn(e))
    return dv(e, cv) + "";
  if (No(e))
    return Kd ? Kd.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Mx = /\s/;
function Px(e) {
  for (var t = e.length; t-- && Mx.test(e.charAt(t)); )
    ;
  return t;
}
var jx = /^\s+/;
function Fx(e) {
  return e && e.slice(0, Px(e) + 1).replace(jx, "");
}
function wr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hd = NaN, Ix = /^[-+]0x[0-9a-f]+$/i, Tx = /^0b[01]+$/i, Rx = /^0o[0-7]+$/i, Nx = parseInt;
function Gd(e) {
  if (typeof e == "number")
    return e;
  if (No(e))
    return Hd;
  if (wr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Fx(e);
  var r = Tx.test(e);
  return r || Rx.test(e) ? Nx(e.slice(2), r ? 2 : 8) : Ix.test(e) ? Hd : +e;
}
function fv(e) {
  return e;
}
var Vx = "[object AsyncFunction]", Ux = "[object Function]", Lx = "[object GeneratorFunction]", Wx = "[object Proxy]";
function pv(e) {
  if (!wr(e))
    return !1;
  var t = Da(e);
  return t == Ux || t == Lx || t == Vx || t == Wx;
}
var Qi = bn["__core-js_shared__"], Yd = (function() {
  var e = /[^.]+$/.exec(Qi && Qi.keys && Qi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function Kx(e) {
  return !!Yd && Yd in e;
}
var Hx = Function.prototype, Gx = Hx.toString;
function Yx(e) {
  if (e != null) {
    try {
      return Gx.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Zx = /[\\^$.*+?()[\]{}|]/g, Jx = /^\[object .+?Constructor\]$/, Qx = Function.prototype, Xx = Object.prototype, ez = Qx.toString, tz = Xx.hasOwnProperty, rz = RegExp(
  "^" + ez.call(tz).replace(Zx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function az(e) {
  if (!wr(e) || Kx(e))
    return !1;
  var t = pv(e) ? rz : Jx;
  return t.test(Yx(e));
}
function nz(e, t) {
  return e?.[t];
}
function wl(e, t) {
  var r = nz(e, t);
  return az(r) ? r : void 0;
}
function yv(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var oz = 800, iz = 16, sz = Date.now;
function lz(e) {
  var t = 0, r = 0;
  return function() {
    var a = sz(), n = iz - (a - r);
    if (r = a, n > 0) {
      if (++t >= oz)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function uz(e) {
  return function() {
    return e;
  };
}
var yo = (function() {
  try {
    var e = wl(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), dz = yo ? function(e, t) {
  return yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: uz(t),
    writable: !0
  });
} : fv, cz = lz(dz);
function fz(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var pz = 9007199254740991, yz = /^(?:0|[1-9]\d*)$/;
function Vo(e, t) {
  var r = typeof e;
  return t = t ?? pz, !!t && (r == "number" || r != "symbol" && yz.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function mv(e, t, r) {
  t == "__proto__" && yo ? yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Uo(e, t) {
  return e === t || e !== e && t !== t;
}
var mz = Object.prototype, hz = mz.hasOwnProperty;
function hv(e, t, r) {
  var a = e[t];
  (!(hz.call(e, t) && Uo(a, r)) || r === void 0 && !(t in e)) && mv(e, t, r);
}
function vz(e, t, r, a) {
  var n = !r;
  r || (r = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o], l = a ? a(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), n ? mv(r, s, l) : hv(r, s, l);
  }
  return r;
}
var Zd = Math.max;
function gz(e, t, r) {
  return t = Zd(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, n = -1, o = Zd(a.length - t, 0), i = Array(o); ++n < o; )
      i[n] = a[t + n];
    n = -1;
    for (var s = Array(t + 1); ++n < t; )
      s[n] = a[n];
    return s[t] = r(i), yv(e, this, s);
  };
}
function vv(e, t) {
  return cz(gz(e, t, fv), e + "");
}
var bz = 9007199254740991;
function xl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bz;
}
function gv(e) {
  return e != null && xl(e.length) && !pv(e);
}
function kz(e, t, r) {
  if (!wr(r))
    return !1;
  var a = typeof t;
  return (a == "number" ? gv(r) && Vo(t, r.length) : a == "string" && t in r) ? Uo(r[t], e) : !1;
}
function wz(e) {
  return vv(function(t, r) {
    var a = -1, n = r.length, o = n > 1 ? r[n - 1] : void 0, i = n > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (n--, o) : void 0, i && kz(r[0], r[1], i) && (o = n < 3 ? void 0 : o, n = 1), t = Object(t); ++a < n; ) {
      var s = r[a];
      s && e(t, s, a, o);
    }
    return t;
  });
}
var xz = Object.prototype;
function zz(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || xz;
  return e === r;
}
function _z(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Sz = "[object Arguments]";
function Jd(e) {
  return Ma(e) && Da(e) == Sz;
}
var bv = Object.prototype, qz = bv.hasOwnProperty, Oz = bv.propertyIsEnumerable, kv = Jd(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Jd : function(e) {
  return Ma(e) && qz.call(e, "callee") && !Oz.call(e, "callee");
};
function Az() {
  return !1;
}
var wv = typeof exports == "object" && exports && !exports.nodeType && exports, Qd = wv && typeof module == "object" && module && !module.nodeType && module, Ez = Qd && Qd.exports === wv, Xd = Ez ? bn.Buffer : void 0, Cz = Xd ? Xd.isBuffer : void 0, $z = Cz || Az, Bz = "[object Arguments]", Dz = "[object Array]", Mz = "[object Boolean]", Pz = "[object Date]", jz = "[object Error]", Fz = "[object Function]", Iz = "[object Map]", Tz = "[object Number]", Rz = "[object Object]", Nz = "[object RegExp]", Vz = "[object Set]", Uz = "[object String]", Lz = "[object WeakMap]", Wz = "[object ArrayBuffer]", Kz = "[object DataView]", Hz = "[object Float32Array]", Gz = "[object Float64Array]", Yz = "[object Int8Array]", Zz = "[object Int16Array]", Jz = "[object Int32Array]", Qz = "[object Uint8Array]", Xz = "[object Uint8ClampedArray]", e_ = "[object Uint16Array]", t_ = "[object Uint32Array]", Me = {};
Me[Hz] = Me[Gz] = Me[Yz] = Me[Zz] = Me[Jz] = Me[Qz] = Me[Xz] = Me[e_] = Me[t_] = !0;
Me[Bz] = Me[Dz] = Me[Wz] = Me[Mz] = Me[Kz] = Me[Pz] = Me[jz] = Me[Fz] = Me[Iz] = Me[Tz] = Me[Rz] = Me[Nz] = Me[Vz] = Me[Uz] = Me[Lz] = !1;
function r_(e) {
  return Ma(e) && xl(e.length) && !!Me[Da(e)];
}
function a_(e) {
  return function(t) {
    return e(t);
  };
}
var xv = typeof exports == "object" && exports && !exports.nodeType && exports, an = xv && typeof module == "object" && module && !module.nodeType && module, n_ = an && an.exports === xv, Xi = n_ && lv.process, mo = (function() {
  try {
    var e = an && an.require && an.require("util").types;
    return e || Xi && Xi.binding && Xi.binding("util");
  } catch {
  }
})(), ec = mo && mo.isTypedArray, o_ = ec ? a_(ec) : r_, i_ = Object.prototype, s_ = i_.hasOwnProperty;
function l_(e, t) {
  var r = kn(e), a = !r && kv(e), n = !r && !a && $z(e), o = !r && !a && !n && o_(e), i = r || a || n || o, s = i ? _z(e.length, String) : [], l = s.length;
  for (var d in e)
    s_.call(e, d) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Vo(d, l))) && s.push(d);
  return s;
}
function zv(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var u_ = zv(Object.keys, Object), d_ = Object.prototype, c_ = d_.hasOwnProperty;
function f_(e) {
  if (!zz(e))
    return u_(e);
  var t = [];
  for (var r in Object(e))
    c_.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function _v(e) {
  return gv(e) ? l_(e) : f_(e);
}
var tc = wz(function(e, t, r, a) {
  vz(t, _v(t), e, a);
}), p_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, y_ = /^\w*$/;
function m_(e, t) {
  if (kn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || No(e) ? !0 : y_.test(e) || !p_.test(e) || t != null && e in Object(t);
}
var un = wl(Object, "create");
function h_() {
  this.__data__ = un ? un(null) : {}, this.size = 0;
}
function v_(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var g_ = "__lodash_hash_undefined__", b_ = Object.prototype, k_ = b_.hasOwnProperty;
function w_(e) {
  var t = this.__data__;
  if (un) {
    var r = t[e];
    return r === g_ ? void 0 : r;
  }
  return k_.call(t, e) ? t[e] : void 0;
}
var x_ = Object.prototype, z_ = x_.hasOwnProperty;
function __(e) {
  var t = this.__data__;
  return un ? t[e] !== void 0 : z_.call(t, e);
}
var S_ = "__lodash_hash_undefined__";
function q_(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = un && t === void 0 ? S_ : t, this;
}
function Tr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Tr.prototype.clear = h_;
Tr.prototype.delete = v_;
Tr.prototype.get = w_;
Tr.prototype.has = __;
Tr.prototype.set = q_;
function O_() {
  this.__data__ = [], this.size = 0;
}
function Lo(e, t) {
  for (var r = e.length; r--; )
    if (Uo(e[r][0], t))
      return r;
  return -1;
}
var A_ = Array.prototype, E_ = A_.splice;
function C_(e) {
  var t = this.__data__, r = Lo(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : E_.call(t, r, 1), --this.size, !0;
}
function $_(e) {
  var t = this.__data__, r = Lo(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function B_(e) {
  return Lo(this.__data__, e) > -1;
}
function D_(e, t) {
  var r = this.__data__, a = Lo(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function Pa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Pa.prototype.clear = O_;
Pa.prototype.delete = C_;
Pa.prototype.get = $_;
Pa.prototype.has = B_;
Pa.prototype.set = D_;
var M_ = wl(bn, "Map");
function P_() {
  this.size = 0, this.__data__ = {
    hash: new Tr(),
    map: new (M_ || Pa)(),
    string: new Tr()
  };
}
function j_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wo(e, t) {
  var r = e.__data__;
  return j_(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function F_(e) {
  var t = Wo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function I_(e) {
  return Wo(this, e).get(e);
}
function T_(e) {
  return Wo(this, e).has(e);
}
function R_(e, t) {
  var r = Wo(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function Wr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Wr.prototype.clear = P_;
Wr.prototype.delete = F_;
Wr.prototype.get = I_;
Wr.prototype.has = T_;
Wr.prototype.set = R_;
var N_ = "Expected a function";
function zl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(N_);
  var r = function() {
    var a = arguments, n = t ? t.apply(this, a) : a[0], o = r.cache;
    if (o.has(n))
      return o.get(n);
    var i = e.apply(this, a);
    return r.cache = o.set(n, i) || o, i;
  };
  return r.cache = new (zl.Cache || Wr)(), r;
}
zl.Cache = Wr;
var V_ = 500;
function U_(e) {
  var t = zl(e, function(a) {
    return r.size === V_ && r.clear(), a;
  }), r = t.cache;
  return t;
}
var L_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, W_ = /\\(\\)?/g, K_ = U_(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(L_, function(r, a, n, o) {
    t.push(n ? o.replace(W_, "$1") : a || r);
  }), t;
});
function wn(e) {
  return e == null ? "" : cv(e);
}
function Ko(e, t) {
  return kn(e) ? e : m_(e, t) ? [e] : K_(wn(e));
}
function dn(e) {
  if (typeof e == "string" || No(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Sv(e, t) {
  t = Ko(t, e);
  for (var r = 0, a = t.length; e != null && r < a; )
    e = e[dn(t[r++])];
  return r && r == a ? e : void 0;
}
function it(e, t, r) {
  var a = e == null ? void 0 : Sv(e, t);
  return a === void 0 ? r : a;
}
var H_ = zv(Object.getPrototypeOf, Object), G_ = "[object Object]", Y_ = Function.prototype, Z_ = Object.prototype, qv = Y_.toString, J_ = Z_.hasOwnProperty, Q_ = qv.call(Object);
function X_(e) {
  if (!Ma(e) || Da(e) != G_)
    return !1;
  var t = H_(e);
  if (t === null)
    return !0;
  var r = J_.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && qv.call(r) == Q_;
}
var eS = "[object DOMException]", tS = "[object Error]";
function Ov(e) {
  if (!Ma(e))
    return !1;
  var t = Da(e);
  return t == tS || t == eS || typeof e.message == "string" && typeof e.name == "string" && !X_(e);
}
var rS = vv(function(e, t) {
  try {
    return yv(e, void 0, t);
  } catch (r) {
    return Ov(r) ? r : new Error(r);
  }
});
function aS(e, t, r) {
  var a = -1, n = e.length;
  t < 0 && (t = -t > n ? 0 : n + t), r = r > n ? n : r, r < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(n); ++a < n; )
    o[a] = e[a + t];
  return o;
}
function nS(e, t, r, a) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    r = t(r, e[n], n, e);
  return r;
}
function Av(e) {
  return function(t) {
    return e?.[t];
  };
}
var oS = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, iS = Av(oS), sS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, lS = "\\u0300-\\u036f", uS = "\\ufe20-\\ufe2f", dS = "\\u20d0-\\u20ff", cS = lS + uS + dS, fS = "[" + cS + "]", pS = RegExp(fS, "g");
function yS(e) {
  return e = wn(e), e && e.replace(sS, iS).replace(pS, "");
}
var mS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function hS(e) {
  return e.match(mS) || [];
}
var vS = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function gS(e) {
  return vS.test(e);
}
var Ev = "\\ud800-\\udfff", bS = "\\u0300-\\u036f", kS = "\\ufe20-\\ufe2f", wS = "\\u20d0-\\u20ff", xS = bS + kS + wS, Cv = "\\u2700-\\u27bf", $v = "a-z\\xdf-\\xf6\\xf8-\\xff", zS = "\\xac\\xb1\\xd7\\xf7", _S = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", SS = "\\u2000-\\u206f", qS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bv = "A-Z\\xc0-\\xd6\\xd8-\\xde", OS = "\\ufe0e\\ufe0f", Dv = zS + _S + SS + qS, Mv = "['’]", rc = "[" + Dv + "]", AS = "[" + xS + "]", Pv = "\\d+", ES = "[" + Cv + "]", jv = "[" + $v + "]", Fv = "[^" + Ev + Dv + Pv + Cv + $v + Bv + "]", CS = "\\ud83c[\\udffb-\\udfff]", $S = "(?:" + AS + "|" + CS + ")", BS = "[^" + Ev + "]", Iv = "(?:\\ud83c[\\udde6-\\uddff]){2}", Tv = "[\\ud800-\\udbff][\\udc00-\\udfff]", da = "[" + Bv + "]", DS = "\\u200d", ac = "(?:" + jv + "|" + Fv + ")", MS = "(?:" + da + "|" + Fv + ")", nc = "(?:" + Mv + "(?:d|ll|m|re|s|t|ve))?", oc = "(?:" + Mv + "(?:D|LL|M|RE|S|T|VE))?", Rv = $S + "?", Nv = "[" + OS + "]?", PS = "(?:" + DS + "(?:" + [BS, Iv, Tv].join("|") + ")" + Nv + Rv + ")*", jS = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", FS = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", IS = Nv + Rv + PS, TS = "(?:" + [ES, Iv, Tv].join("|") + ")" + IS, RS = RegExp([
  da + "?" + jv + "+" + nc + "(?=" + [rc, da, "$"].join("|") + ")",
  MS + "+" + oc + "(?=" + [rc, da + ac, "$"].join("|") + ")",
  da + "?" + ac + "+" + nc,
  da + "+" + oc,
  FS,
  jS,
  Pv,
  TS
].join("|"), "g");
function NS(e) {
  return e.match(RS) || [];
}
function VS(e, t, r) {
  return e = wn(e), t = t, t === void 0 ? gS(e) ? NS(e) : hS(e) : e.match(t) || [];
}
var US = "['’]", LS = RegExp(US, "g");
function WS(e) {
  return function(t) {
    return nS(VS(yS(t).replace(LS, "")), e, "");
  };
}
function KS(e, t, r) {
  t = Ko(t, e);
  for (var a = -1, n = t.length, o = !1; ++a < n; ) {
    var i = dn(t[a]);
    if (!(o = e != null && r(e, i)))
      break;
    e = e[i];
  }
  return o || ++a != n ? o : (n = e == null ? 0 : e.length, !!n && xl(n) && Vo(i, n) && (kn(e) || kv(e)));
}
var es = function() {
  return bn.Date.now();
}, HS = "Expected a function", GS = Math.max, YS = Math.min;
function ZS(e, t, r) {
  var a, n, o, i, s, l, d = 0, c = !1, f = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(HS);
  t = Gd(t) || 0, wr(r) && (c = !!r.leading, f = "maxWait" in r, o = f ? GS(Gd(r.maxWait) || 0, t) : o, y = "trailing" in r ? !!r.trailing : y);
  function p(S) {
    var q = a, E = n;
    return a = n = void 0, d = S, i = e.apply(E, q), i;
  }
  function k(S) {
    return d = S, s = setTimeout(b, t), c ? p(S) : i;
  }
  function h(S) {
    var q = S - l, E = S - d, D = t - q;
    return f ? YS(D, o - E) : D;
  }
  function m(S) {
    var q = S - l, E = S - d;
    return l === void 0 || q >= t || q < 0 || f && E >= o;
  }
  function b() {
    var S = es();
    if (m(S))
      return v(S);
    s = setTimeout(b, h(S));
  }
  function v(S) {
    return s = void 0, y && a ? p(S) : (a = n = void 0, i);
  }
  function _() {
    s !== void 0 && clearTimeout(s), d = 0, a = l = n = s = void 0;
  }
  function x() {
    return s === void 0 ? i : v(es());
  }
  function $() {
    var S = es(), q = m(S);
    if (a = arguments, n = this, l = S, q) {
      if (s === void 0)
        return k(l);
      if (f)
        return clearTimeout(s), s = setTimeout(b, t), p(l);
    }
    return s === void 0 && (s = setTimeout(b, t)), i;
  }
  return $.cancel = _, $.flush = x, $;
}
function JS(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var QS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, XS = Av(QS), Vv = /[&<>"']/g, eq = RegExp(Vv.source);
function tq(e) {
  return e = wn(e), e && eq.test(e) ? e.replace(Vv, XS) : e;
}
var rq = Object.prototype, aq = rq.hasOwnProperty;
function nq(e, t) {
  return e != null && aq.call(e, t);
}
function oq(e, t) {
  return e != null && KS(e, t, nq);
}
function iq(e, t) {
  return dv(t, function(r) {
    return e[r];
  });
}
function sq(e, t) {
  return t.length < 2 ? e : Sv(e, aS(t, 0, -1));
}
mo && mo.isRegExp;
var lq = WS(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
}), uq = Object.prototype, dq = uq.hasOwnProperty;
function cq(e, t) {
  t = Ko(t, e);
  var r = -1, a = t.length;
  if (!a)
    return !0;
  for (; ++r < a; ) {
    var n = dn(t[r]);
    if (n === "__proto__" && !dq.call(e, "__proto__") || (n === "constructor" || n === "prototype") && r < a - 1)
      return !1;
  }
  var o = sq(e, t);
  return o == null || delete o[dn(JS(t))];
}
function fq(e, t, r, a) {
  if (!wr(e))
    return e;
  t = Ko(t, e);
  for (var n = -1, o = t.length, i = o - 1, s = e; s != null && ++n < o; ) {
    var l = dn(t[n]), d = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (n != i) {
      var c = s[l];
      d = void 0, d === void 0 && (d = wr(c) ? c : Vo(t[n + 1]) ? [] : {});
    }
    hv(s, l, d), s = s[l];
  }
  return e;
}
function _l(e, t, r) {
  return e == null ? e : fq(e, t, r);
}
var Uv = Object.prototype, pq = Uv.hasOwnProperty;
function ic(e, t, r, a) {
  return e === void 0 || Uo(e, Uv[r]) && !pq.call(a, r) ? t : e;
}
var yq = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function mq(e) {
  return "\\" + yq[e];
}
var Lv = /<%=([\s\S]+?)%>/g, hq = /<%-([\s\S]+?)%>/g, vq = /<%([\s\S]+?)%>/g, sc = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: hq,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: vq,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: Lv,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: tq }
  }
}, gq = "Invalid `variable` option passed into `_.template`", bq = "Invalid `imports` option passed into `_.template`", kq = /\b__p \+= '';/g, wq = /\b(__p \+=) '' \+/g, xq = /(__e\(.*?\)|\b__t\)) \+\n'';/g, lc = /[()=,{}\[\]\/\s]/, zq = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fn = /($^)/, _q = /['\n\r\u2028\u2029\\]/g, Sq = Object.prototype, uc = Sq.hasOwnProperty;
function qq(e, t, r) {
  var a = sc.imports._.templateSettings || sc;
  e = wn(e), t = tc({}, t, a, ic);
  var n = tc({}, t.imports, a.imports, ic), o = _v(n), i = iq(n, o);
  fz(o, function(m) {
    if (lc.test(m))
      throw new Error(bq);
  });
  var s, l, d = 0, c = t.interpolate || Fn, f = "__p += '", y = RegExp(
    (t.escape || Fn).source + "|" + c.source + "|" + (c === Lv ? zq : Fn).source + "|" + (t.evaluate || Fn).source + "|$",
    "g"
  ), p = uc.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(y, function(m, b, v, _, x, $) {
    return v || (v = _), f += e.slice(d, $).replace(_q, mq), b && (s = !0, f += `' +
__e(` + b + `) +
'`), x && (l = !0, f += `';
` + x + `;
__p += '`), v && (f += `' +
((__t = (` + v + `)) == null ? '' : __t) +
'`), d = $ + m.length, m;
  }), f += `';
`;
  var k = uc.call(t, "variable") && t.variable;
  if (!k)
    f = `with (obj) {
` + f + `
}
`;
  else if (lc.test(k))
    throw new Error(gq);
  f = (l ? f.replace(kq, "") : f).replace(wq, "$1").replace(xq, "$1;"), f = "function(" + (k || "obj") + `) {
` + (k ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
  var h = rS(function() {
    return Function(o, p + "return " + f).apply(void 0, i);
  });
  if (h.source = f, Ov(h))
    throw h;
  return h;
}
function Oq(e, t) {
  return e == null ? !0 : cq(e, t);
}
const Wv = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ ka()]),
  /* @__PURE__ */ ct(Number),
  /* @__PURE__ */ yl()
), Kv = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ ml()]),
  /* @__PURE__ */ ct((e) => e === !0 || e === "true")
), Hv = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ Fo()]),
  /* @__PURE__ */ ct((e) => e instanceof Date ? e : new Date(e)),
  /* @__PURE__ */ ct((e) => e && po(e, "yyyy-MM-dd"))
), Gv = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ Fo()]),
  /* @__PURE__ */ ct((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), po(e, "yyyy-MM-dd HH:mm"))))
), Aq = (e = /* @__PURE__ */ gn()) => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ br(/* @__PURE__ */ ft())]),
  /* @__PURE__ */ ct((t) => Array.isArray(t) ? t : t.split(",")),
  /* @__PURE__ */ br(e)
), Yv = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ ka(), /* @__PURE__ */ br(/* @__PURE__ */ ft()), /* @__PURE__ */ br(/* @__PURE__ */ ka())]),
  /* @__PURE__ */ ct((e) => Array.isArray(e) ? e.map(Number) : typeof e == "string" ? e.split(",").map(Number) : [Number(e)]),
  /* @__PURE__ */ ct((e) => e.map(Number))
), Sl = () => /* @__PURE__ */ Gt(
  /* @__PURE__ */ Bt([/* @__PURE__ */ ft(), /* @__PURE__ */ kl(/* @__PURE__ */ ft(), /* @__PURE__ */ gn())]),
  /* @__PURE__ */ ct((e) => typeof e == "string" ? ip.parse(e) : e),
  /* @__PURE__ */ ct((e) => {
    const t = {};
    for (const r in e)
      _l(t, r, it(e, r));
    return t;
  })
);
function mt() {
  return Sl();
}
mt.number = Wv;
mt.boolean = Kv;
mt.date = Hv;
mt.datetime = Gv;
mt.array = Aq;
mt.arrayNumber = Yv;
mt.object = Sl;
const Eq = () => /* @__PURE__ */ Gt(/* @__PURE__ */ ft(), /* @__PURE__ */ ct((e) => {
  const t = e.split(/[;\n]/).filter(Boolean).filter((n) => n.includes("=")).map((n) => n.trim().split("=")), r = Object.fromEntries(t), a = {};
  for (const [n, o] of Object.entries(r)) {
    let i = o;
    o.startsWith("bool:") && (i = o.replace("bool:", "").trim() === "true"), _l(a, n, i);
  }
  return a;
})), ql = (e = {}) => /* @__PURE__ */ gl({
  page: /* @__PURE__ */ wa(mt.number(), 1),
  limit: /* @__PURE__ */ wa(mt.number(), e.maxLimit || 100),
  orderBy: /* @__PURE__ */ uo(e.orderFields ? mt.array(/* @__PURE__ */ Io(e.orderFields)) : mt.array(/* @__PURE__ */ ft()), []),
  orderDirection: /* @__PURE__ */ uo(mt.array(/* @__PURE__ */ Bt([/* @__PURE__ */ lo("asc"), /* @__PURE__ */ lo("desc")])), [])
});
function Zv(e = {}) {
  return ql(e);
}
Zv.base = ql;
const Cq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: Fs,
  arrayNumber: Yv,
  base: ql,
  boolean: Kv,
  date: Hv,
  datetime: Gv,
  keyValue: Eq,
  number: Wv,
  object: Sl,
  pagination: Zv,
  url: mt
}, Symbol.toStringTag, { value: "Module" }));
class $q {
  static __container_entry_key = "ValidatorService";
  v = {
    ...v1,
    extras: Cq
  };
  create(t) {
    return t(this.v);
  }
  validate(t, r) {
    const a = typeof r == "function" ? r(this.v) : r, { output: n, issues: o, success: i } = /* @__PURE__ */ sn(a, t);
    if (!i) {
      const s = /* @__PURE__ */ Os(o), l = [];
      s.root && l.push(...s.root), s.nested && Object.entries(s.nested).forEach((f) => {
        const [y, p] = f;
        l.push(...p.map((k) => `${y}: ${k}`));
      });
      const d = l.length ? l.join(", ") : "Validation failed", c = new Ca(d, 422);
      throw c.name = "ValidationError", Object.assign(c, { messages: l }), c;
    }
    return n;
  }
  async validateAsync(t, r) {
    const a = typeof r == "function" ? r(this.v) : r, { output: n, issues: o, success: i } = await /* @__PURE__ */ To(a, t);
    if (!i) {
      const s = new Error("Validation failed"), l = /* @__PURE__ */ Os(o), d = {
        ...l.root,
        ...l.nested
      };
      throw Object.assign(s, { details: d }), s;
    }
    return n;
  }
  isValid(t, r) {
    const a = typeof r == "function" ? r(this.v) : r, { success: n } = /* @__PURE__ */ sn(a, t);
    return n;
  }
}
const ho = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Jv(e) {
  return Number(e) >= 0;
}
function Bq(e) {
  return typeof e == "object" && e !== null;
}
function Dq(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function dc(e) {
  if (!Bq(e) || Dq(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Qv(e, t) {
  return Object.keys(t).forEach((r) => {
    if (dc(t[r]) && dc(e[r])) {
      e[r] || (e[r] = {}), Qv(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function Mq(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (Jv(t[a])) {
      r += `[${t[a]}]`;
      continue;
    }
    r += `.${t[a]}`;
  }
  return r;
}
function Pq(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(r) {
      const a = await /* @__PURE__ */ To(e, r, t);
      if (a.success)
        return {
          value: a.output,
          errors: []
        };
      const n = {};
      return Xv(a.issues, n), {
        errors: Object.values(n)
      };
    },
    cast(r) {
      if (e.async)
        return r;
      const a = /* @__PURE__ */ sn(e, r, t);
      if (a.success)
        return a.output;
      const n = /* @__PURE__ */ Ye(/* @__PURE__ */ wa(e));
      return ho(n) && ho(r) ? Qv(n, r) : r;
    },
    describe(r) {
      try {
        if (!r)
          return {
            required: !cc(e),
            exists: !0
          };
        const a = Is(r, e);
        return a ? {
          required: !cc(a),
          exists: !0
        } : {
          required: !1,
          exists: !1
        };
      } catch {
        return {
          required: !1,
          exists: !1
        };
      }
    }
  };
}
function Xv(e, t) {
  e.forEach((r) => {
    const a = Mq(/* @__PURE__ */ jo(r) || "");
    r.issues && (Xv(r.issues.flatMap((n) => n.issues || []), t), !a) || (t[a] || (t[a] = { errors: [], path: a }), t[a].errors.push(r.message));
  });
}
function Is(e, t) {
  var r, a, n, o;
  if (fc(t))
    return (r = t.options.map((l) => Is(e, l)).find(Boolean)) !== null && r !== void 0 ? r : null;
  if (pc(t))
    return (a = t.options.map((l) => Is(e, l)).find(Boolean)) !== null && a !== void 0 ? a : null;
  if (!In(t))
    return null;
  if (Qk(e))
    return t.entries[Xk(e)];
  const i = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let s = t;
  for (let l = 0; l <= i.length; l++) {
    const d = i[l];
    if (!d || !s)
      return s;
    if (fc(s) && (s = (n = s.options.find((c) => In(c) && c.entries[d])) !== null && n !== void 0 ? n : s), pc(s) && (s = (o = s.options.find((c) => In(c) && c.entries[d])) !== null && o !== void 0 ? o : s), In(s)) {
      s = s.entries[d] || null;
      continue;
    }
    Jv(d) && jq(s) && (s = s.item);
  }
  return null;
}
function cc(e) {
  return e.type === "optional";
}
function jq(e) {
  return ho(e) && "item" in e;
}
function In(e) {
  return ho(e) && "entries" in e;
}
function fc(e) {
  return e.type === "intersect";
}
function pc(e) {
  return e.type === "variant";
}
function Fq() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function Iq(e = "") {
  return e + Fq();
}
class xn {
  static __container_entry_key = "LoggerService";
  info(t, r) {
  }
  debug(t, r) {
  }
  warn(t, r) {
  }
  error(t, r) {
  }
  child(t) {
    return new xn();
  }
}
class Ol {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(t) {
    this.debug = t?.debug || !1, this.logger = t?.logger || new xn(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(t) {
    return new Ol(t);
  }
  setDebug(t) {
    this.debug = t, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(t) {
    this.logger = t;
  }
  on(t, r, a) {
    const n = a?.id || Iq();
    if (a?.unique && this.handlers.some((i) => i.event === t && i.listener === r || i.id === n))
      return;
    const o = {
      id: n,
      event: t,
      listener: r
    };
    return this.handlers.push(o), this.debug && this.logger.debug("handler added", o), o;
  }
  once(t, r, a) {
    const n = (o, i) => {
      r(o, i), this.off(t, n);
    };
    return this.on(t, n, a);
  }
  onDebounce(t, r, a) {
    const n = ZS(r, a?.debounce || 300), o = this.on(t, n, a);
    return o && (o.originalListener = r), o;
  }
  onAnyOf(t, r, a) {
    const n = [];
    for (const o of t) {
      const i = this.on(o, r, a);
      i && n.push(i);
    }
    return n;
  }
  off(t, r) {
    this.handlers = this.handlers.filter((a) => !(a.event === t && (a.listener === r || a.originalListener === r))), this.debug && this.logger.debug("handler removed", { event: t });
  }
  emit(t, r) {
    this.debug && this.logger.debug("emitting event", {
      event: t,
      args: r
    });
    const a = this.handlers.filter((n) => n.event === t);
    for (const n of a)
      sr.sync(() => n.listener(r, { event: t }));
  }
  async emitAndWait(t, r) {
    const a = this.handlers.filter((n) => n.event === t);
    this.debug && this.logger.debug("emitting event and wait", {
      handlers: a.length,
      event: t,
      args: r
    });
    for await (const n of a)
      await n.listener(r, { event: t });
  }
  list() {
    return this.handlers;
  }
  listByEvent(t) {
    return this.handlers.filter((r) => r.event === t);
  }
  remove(t) {
    const r = Array.isArray(t) ? t : [t];
    this.handlers = this.handlers.filter((a) => !r.includes(a.id)), this.debug && this.logger.debug("handlers removed", { ids: r });
  }
  clear() {
    this.handlers = [], this.debug && this.logger.debug("all handlers cleared");
  }
  hasHandlers() {
    return this.handlers.length > 0;
  }
}
const yc = dt.proxy(Ol);
class Tq {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(t) {
    this.currendId = t, yc.emit("layout:change", t);
  }
  add(t, r, a) {
    this.components.set(t, r), this.options = a || {};
  }
  has(t) {
    return this.components.has(t);
  }
  get(t) {
    const r = this.components.get(t);
    if (!r)
      throw new Ca(`Layout ${t} not found`);
    return r;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(t = {}) {
    this.options = t, yc.emit("layout:set-options", t);
  }
}
const eg = globalThis, Rq = eg.layout || new Tq();
eg.layout = Rq;
F(/* @__PURE__ */ new Map());
dt.proxy("route");
dt.proxy("router");
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function mc(e) {
  return typeof e == "string" ? `'${e}'` : new Nq().serialize(e);
}
const Nq = /* @__PURE__ */ (function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(r, a) {
      const n = typeof r, o = typeof a;
      return n === "string" && o === "string" ? r.localeCompare(a) : n === "number" && o === "number" ? r - a : String.prototype.localeCompare.call(this.serialize(r, !0), this.serialize(a, !0));
    }
    serialize(r, a) {
      if (r === null) return "null";
      switch (typeof r) {
        case "string":
          return a ? r : `'${r}'`;
        case "bigint":
          return `${r}n`;
        case "object":
          return this.$object(r);
        case "function":
          return this.$function(r);
      }
      return String(r);
    }
    serializeObject(r) {
      const a = Object.prototype.toString.call(r);
      if (a !== "[object Object]") return this.serializeBuiltInType(a.length < 10 ? `unknown:${a}` : a.slice(8, -1), r);
      const n = r.constructor, o = n === Object || n === void 0 ? "" : n.name;
      if (o !== "" && globalThis[o] === n) return this.serializeBuiltInType(o, r);
      if (typeof r.toJSON == "function") {
        const i = r.toJSON();
        return o + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
      }
      return this.serializeObjectEntries(o, Object.entries(r));
    }
    serializeBuiltInType(r, a) {
      const n = this["$" + r];
      if (n) return n.call(this, a);
      if (typeof a?.entries == "function") return this.serializeObjectEntries(r, a.entries());
      throw new Error(`Cannot serialize ${r}`);
    }
    serializeObjectEntries(r, a) {
      const n = Array.from(a).sort((i, s) => this.compare(i[0], s[0]));
      let o = `${r}{`;
      for (let i = 0; i < n.length; i++) {
        const [s, l] = n[i];
        o += `${this.serialize(s, !0)}:${this.serialize(l)}`, i < n.length - 1 && (o += ",");
      }
      return o + "}";
    }
    $object(r) {
      let a = this.#e.get(r);
      return a === void 0 && (this.#e.set(r, `#${this.#e.size}`), a = this.serializeObject(r), this.#e.set(r, a)), a;
    }
    $function(r) {
      const a = Function.prototype.toString.call(r);
      return a.slice(-15) === "[native code] }" ? `${r.name || ""}()[native]` : `${r.name}(${r.length})${a.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(r) {
      let a = "[";
      for (let n = 0; n < r.length; n++) a += this.serialize(r[n]), n < r.length - 1 && (a += ",");
      return a + "]";
    }
    $Date(r) {
      try {
        return `Date(${r.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(r) {
      return `ArrayBuffer[${new Uint8Array(r).join(",")}]`;
    }
    $Set(r) {
      return `Set${this.$Array(Array.from(r).sort((a, n) => this.compare(a, n)))}`;
    }
    $Map(r) {
      return this.serializeObjectEntries("Map", r.entries());
    }
  }
  for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(r) {
    return `${t}(${r})`;
  };
  for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(r) {
    return `${t}[${r.join(",")}]`;
  };
  for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(r) {
    return `${t}[${r.join("n,")}${r.length > 0 ? "n" : ""}]`;
  };
  return e;
})();
function xr(e, t) {
  return e === t || mc(e) === mc(t);
}
function Vq(e, t, r) {
  const a = e.findIndex((s) => xr(s, t)), n = e.findIndex((s) => xr(s, r));
  if (a === -1 || n === -1) return [];
  const [o, i] = [a, n].sort((s, l) => s - l);
  return e.slice(o, i + 1);
}
function hc(e, t = Number.NEGATIVE_INFINITY, r = Number.POSITIVE_INFINITY) {
  return Math.min(r, Math.max(t, e));
}
function Ee(e, t) {
  const r = typeof e == "string" && !t ? `${e}Context` : t, a = Symbol(r);
  return [(n) => {
    const o = ao(a, n);
    if (o || o === null) return o;
    throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (n) => (sl(a, n), n)];
}
function Ke() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function Ho(e, t, r) {
  const a = r.originalEvent.target, n = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && a.addEventListener(e, t, { once: !0 }), a.dispatchEvent(n);
}
function za(e) {
  return e == null;
}
function vc(e, t) {
  return za(e) ? !1 : Array.isArray(e) ? e.some((r) => xr(r, t)) : xr(e, t);
}
function Al(e) {
  return e ? e.flatMap((t) => t.type === Pe ? Al(t.children) : [t]) : [];
}
const Uq = ["INPUT", "TEXTAREA"];
function gc(e, t, r, a = {}) {
  if (!t || a.enableIgnoredElement && Uq.includes(t.nodeName)) return null;
  const { arrowKeyOptions: n = "both", attributeName: o = "[data-reka-collection-item]", itemsArray: i = [], loop: s = !0, dir: l = "ltr", preventScroll: d = !0, focus: c = !1 } = a, [f, y, p, k, h, m] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], b = p || k, v = f || y;
  if (!h && !m && (!b && !v || n === "vertical" && v || n === "horizontal" && b)) return null;
  const _ = r ? Array.from(r.querySelectorAll(o)) : i;
  if (!_.length) return null;
  d && e.preventDefault();
  let x = null;
  return v || b ? x = tg(_, t, {
    goForward: b ? k : l === "ltr" ? f : y,
    loop: s
  }) : h ? x = _.at(0) || null : m && (x = _.at(-1) || null), c && x?.focus(), x;
}
function tg(e, t, r, a = e.includes(t) ? e.length : e.length + 1) {
  if (--a === 0) return null;
  const n = e.indexOf(t);
  let o;
  if (n === -1 ? o = r.goForward ? 0 : e.length - 1 : o = r.goForward ? n + 1 : n - 1, !r.loop && (o < 0 || o >= e.length)) return null;
  const i = (o + e.length) % e.length, s = e[i];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? tg(e, s, r, a) : s : null;
}
const [ja] = /* @__PURE__ */ Ee("ConfigProvider"), ot = /* @__PURE__ */ ro({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
function ts(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ts(e, t, r = ".", a) {
  if (!ts(t))
    return Ts(e, {}, r);
  const n = { ...t };
  for (const o of Object.keys(e)) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const i = e[o];
    i != null && (Array.isArray(i) && Array.isArray(n[o]) ? n[o] = [...i, ...n[o]] : ts(i) && ts(n[o]) ? n[o] = Ts(
      i,
      n[o],
      (r ? `${r}.` : "") + o.toString()
    ) : n[o] = i);
  }
  return n;
}
function Lq(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, a) => Ts(r, a, ""), {})
  );
}
const Wq = Lq(), Kq = /* @__PURE__ */ Lf(() => {
  const e = F(/* @__PURE__ */ new Map()), t = F(), r = j(() => {
    for (const i of e.value.values()) if (i) return !0;
    return !1;
  }), a = ja({ scrollBody: F(!0) });
  let n = null;
  const o = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", ot.layersWithOutsidePointerEventsDisabled.size === 0 && (document.body.style.pointerEvents = ""), document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", wu && n?.(), t.value = void 0;
  };
  return pe(r, (i, s) => {
    if (!vt) return;
    if (!i) {
      s && o();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, d = {
      padding: l,
      margin: 0
    }, c = a.scrollBody?.value ? typeof a.scrollBody.value == "object" ? Wq({
      padding: a.scrollBody.value.padding === !0 ? l : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === !0 ? l : a.scrollBody.value.margin
    }, d) : d : {
      padding: 0,
      margin: 0
    };
    l > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.documentElement.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), wu && (n = no(document, "touchmove", (f) => Hq(f), { passive: !1 })), we(() => {
      r.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function zn(e) {
  const t = Math.random().toString(36).substring(2, 7), r = Kq();
  r.value.set(t, e ?? !1);
  const a = j({
    get: () => r.value.get(t) ?? !1,
    set: (n) => r.value.set(t, n)
  });
  return x0(() => {
    r.value.delete(t);
  }), a;
}
function rg(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const r = e.parentNode;
    return !(r instanceof Element) || r.tagName === "BODY" ? !1 : rg(r);
  }
}
function Hq(e) {
  const t = e || window.event, r = t.target;
  return r instanceof Element && rg(r) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Gq = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Bopomofo}]/u, Yq = /android/i;
function Zq() {
  return typeof navigator < "u" && Yq.test(navigator.userAgent);
}
function ag(e) {
  const t = F(!1), r = F(!0), a = F(!1), n = j(() => t.value && r.value);
  function o() {
    t.value = !0, r.value = !0, a.value = !1;
  }
  function i(l) {
    l.data && (Gq.test(l.data) ? (r.value = !0, a.value = !0) : Zq() && !a.value && (r.value = !1));
  }
  function s(l) {
    we(() => {
      t.value = !1, e?.(l);
    });
  }
  return {
    isComposing: t,
    shouldDeferInput: n,
    handleCompositionStart: o,
    handleCompositionUpdate: i,
    handleCompositionEnd: s
  };
}
function ya(e, t) {
  return e - t * Math.floor(e / t);
}
const ng = 1721426;
function Ir(e, t, r, a) {
  t = _n(e, t);
  let n = t - 1, o = -2;
  return r <= 2 ? o = 0 : gr(t) && (o = -1), ng - 1 + 365 * n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400) + Math.floor((367 * r - 362) / 12 + o + a);
}
function gr(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function _n(e, t) {
  return e === "BC" ? 1 - t : t;
}
function Go(e) {
  let t = "AD";
  return e <= 0 && (t = "BC", e = 1 - e), [
    t,
    e
  ];
}
const Jq = {
  standard: [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ],
  leapyear: [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
};
class At {
  fromJulianDay(t) {
    let r = t, a = r - ng, n = Math.floor(a / 146097), o = ya(a, 146097), i = Math.floor(o / 36524), s = ya(o, 36524), l = Math.floor(s / 1461), d = ya(s, 1461), c = Math.floor(d / 365), f = n * 400 + i * 100 + l * 4 + c + (i !== 4 && c !== 4 ? 1 : 0), [y, p] = Go(f), k = r - Ir(y, p, 1, 1), h = 2;
    r < Ir(y, p, 3, 1) ? h = 0 : gr(p) && (h = 1);
    let m = Math.floor(((k + h) * 12 + 373) / 367), b = r - Ir(y, p, m, 1) + 1;
    return new He(y, p, m, b);
  }
  toJulianDay(t) {
    return Ir(t.era, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    return Jq[gr(t.year) ? "leapyear" : "standard"][t.month - 1];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getMonthsInYear(t) {
    return 12;
  }
  getDaysInYear(t) {
    return gr(t.year) ? 366 : 365;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 31;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getYearsInEra(t) {
    return 9999;
  }
  getEras() {
    return [
      "BC",
      "AD"
    ];
  }
  isInverseEra(t) {
    return t.era === "BC";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BC" ? "AD" : "BC", t.year = 1 - t.year);
  }
  constructor() {
    this.identifier = "gregory";
  }
}
const Qq = {
  "001": 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};
function zr(e, t) {
  return t = st(t, e.calendar), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day;
}
function El(e, t) {
  return t = st(t, e.calendar), e = Rs(e), t = Rs(t), e.era === t.era && e.year === t.year && e.month === t.month;
}
function rs(e, t) {
  return Cl(e.calendar, t.calendar) && zr(e, t);
}
function bc(e, t) {
  return Cl(e.calendar, t.calendar) && El(e, t);
}
function Cl(e, t) {
  return e.isEqual?.(t) ?? t.isEqual?.(e) ?? e.identifier === t.identifier;
}
function Xq(e, t) {
  return zr(e, og(t));
}
const eO = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};
function $l(e, t, r) {
  let a = e.calendar.toJulianDay(e), n = r ? eO[r] : nO(t), o = Math.ceil(a + 1 - n) % 7;
  return o < 0 && (o += 7), o;
}
function tO(e) {
  return Nt(Date.now(), e);
}
function og(e) {
  return lO(tO(e));
}
function ig(e, t) {
  return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function rO(e, t) {
  return kc(e) - kc(t);
}
function kc(e) {
  return e.hour * 36e5 + e.minute * 6e4 + e.second * 1e3 + e.millisecond;
}
let as = null;
function Fa() {
  return as == null && (as = new Intl.DateTimeFormat().resolvedOptions().timeZone), as;
}
function Rs(e) {
  return e.subtract({
    days: e.day - 1
  });
}
function wc(e) {
  return e.add({
    days: e.calendar.getDaysInMonth(e) - e.day
  });
}
const xc = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map();
function aO(e) {
  if (Intl.Locale) {
    let r = xc.get(e);
    return r || (r = new Intl.Locale(e).maximize().region, r && xc.set(e, r)), r;
  }
  let t = e.split("-")[1];
  return t === "u" ? void 0 : t;
}
function nO(e) {
  let t = ns.get(e);
  if (!t) {
    if (Intl.Locale) {
      let a = new Intl.Locale(e);
      if ("getWeekInfo" in a && (t = a.getWeekInfo(), t))
        return ns.set(e, t), t.firstDay;
    }
    let r = aO(e);
    if (e.includes("-fw-")) {
      let a = e.split("-fw-")[1].split("-")[0];
      a === "mon" ? t = {
        firstDay: 1
      } : a === "tue" ? t = {
        firstDay: 2
      } : a === "wed" ? t = {
        firstDay: 3
      } : a === "thu" ? t = {
        firstDay: 4
      } : a === "fri" ? t = {
        firstDay: 5
      } : a === "sat" ? t = {
        firstDay: 6
      } : t = {
        firstDay: 0
      };
    } else e.includes("-ca-iso8601") ? t = {
      firstDay: 1
    } : t = {
      firstDay: r && Qq[r] || 0
    };
    ns.set(e, t);
  }
  return t.firstDay;
}
function _a(e) {
  e = st(e, new At());
  let t = _n(e.era, e.year);
  return sg(t, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
}
function sg(e, t, r, a, n, o, i) {
  let s = /* @__PURE__ */ new Date();
  return s.setUTCHours(a, n, o, i), s.setUTCFullYear(e, t - 1, r), s.getTime();
}
function Ns(e, t) {
  if (t === "UTC") return 0;
  if (e > 0 && t === Fa()) return new Date(e).getTimezoneOffset() * -6e4;
  let { year: r, month: a, day: n, hour: o, minute: i, second: s } = lg(e, t);
  return sg(r, a, n, o, i, s, 0) - Math.floor(e / 1e3) * 1e3;
}
const zc = /* @__PURE__ */ new Map();
function lg(e, t) {
  let r = zc.get(t);
  r || (r = new Intl.DateTimeFormat("en-US", {
    timeZone: t,
    hour12: !1,
    era: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  }), zc.set(t, r));
  let a = r.formatToParts(new Date(e)), n = {};
  for (let o of a) o.type !== "literal" && (n[o.type] = o.value);
  return {
    // Firefox returns B instead of BC... https://bugzilla.mozilla.org/show_bug.cgi?id=1752253
    year: n.era === "BC" || n.era === "B" ? -n.year + 1 : +n.year,
    month: +n.month,
    day: +n.day,
    hour: n.hour === "24" ? 0 : +n.hour,
    minute: +n.minute,
    second: +n.second
  };
}
const _c = 864e5;
function oO(e, t, r, a) {
  return (r === a ? [
    r
  ] : [
    r,
    a
  ]).filter((n) => iO(e, t, n));
}
function iO(e, t, r) {
  let a = lg(r, t);
  return e.year === a.year && e.month === a.month && e.day === a.day && e.hour === a.hour && e.minute === a.minute && e.second === a.second;
}
function tr(e, t, r = "compatible") {
  let a = Sa(e);
  if (t === "UTC") return _a(a);
  if (t === Fa() && r === "compatible") {
    a = st(a, new At());
    let l = /* @__PURE__ */ new Date(), d = _n(a.era, a.year);
    return l.setFullYear(d, a.month - 1, a.day), l.setHours(a.hour, a.minute, a.second, a.millisecond), l.getTime();
  }
  let n = _a(a), o = Ns(n - _c, t), i = Ns(n + _c, t), s = oO(a, t, n - o, n - i);
  if (s.length === 1) return s[0];
  if (s.length > 1) switch (r) {
    // 'compatible' means 'earlier' for "fall back" transitions
    case "compatible":
    case "earlier":
      return s[0];
    case "later":
      return s[s.length - 1];
    case "reject":
      throw new RangeError("Multiple possible absolute times found");
  }
  switch (r) {
    case "earlier":
      return Math.min(n - o, n - i);
    // 'compatible' means 'later' for "spring forward" transitions
    case "compatible":
    case "later":
      return Math.max(n - o, n - i);
    case "reject":
      throw new RangeError("No such absolute time found");
  }
}
function ug(e, t, r = "compatible") {
  return new Date(tr(e, t, r));
}
function Nt(e, t) {
  let r = Ns(e, t), a = new Date(e + r), n = a.getUTCFullYear(), o = a.getUTCMonth() + 1, i = a.getUTCDate(), s = a.getUTCHours(), l = a.getUTCMinutes(), d = a.getUTCSeconds(), c = a.getUTCMilliseconds();
  return new Oa(n < 1 ? "BC" : "AD", n < 1 ? -n + 1 : n, o, i, t, r, s, l, d, c);
}
function sO(e, t) {
  return Nt(e.getTime(), t);
}
function lO(e) {
  return new He(e.calendar, e.era, e.year, e.month, e.day);
}
function Sa(e, t) {
  let r = 0, a = 0, n = 0, o = 0;
  if ("timeZone" in e) ({ hour: r, minute: a, second: n, millisecond: o } = e);
  else if ("hour" in e) return e;
  return new qa(e.calendar, e.era, e.year, e.month, e.day, r, a, n, o);
}
function st(e, t) {
  if (Cl(e.calendar, t)) return e;
  let r = t.fromJulianDay(e.calendar.toJulianDay(e)), a = e.copy();
  return a.calendar = t, a.era = r.era, a.year = r.year, a.month = r.month, a.day = r.day, Rr(a), a;
}
function uO(e, t, r) {
  if (e instanceof Oa)
    return e.timeZone === t ? e : cO(e, t);
  let a = tr(e, t, r);
  return Nt(a, t);
}
function dO(e) {
  let t = _a(e) - e.offset;
  return new Date(t);
}
function cO(e, t) {
  let r = _a(e) - e.offset;
  return st(Nt(r, t), e.calendar);
}
const Za = 36e5;
function Yo(e, t) {
  let r = e.copy(), a = "hour" in r ? mO(r, t) : 0;
  Vs(r, t.years || 0), r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e), r.month += t.months || 0, Us(r), dg(r), r.day += (t.weeks || 0) * 7, r.day += t.days || 0, r.day += a, fO(r), r.calendar.balanceDate && r.calendar.balanceDate(r), r.year < 1 && (r.year = 1, r.month = 1, r.day = 1);
  let n = r.calendar.getYearsInEra(r);
  if (r.year > n) {
    let i = r.calendar.isInverseEra?.(r);
    r.year = n, r.month = i ? 1 : r.calendar.getMonthsInYear(r), r.day = i ? 1 : r.calendar.getDaysInMonth(r);
  }
  r.month < 1 && (r.month = 1, r.day = 1);
  let o = r.calendar.getMonthsInYear(r);
  return r.month > o && (r.month = o, r.day = r.calendar.getDaysInMonth(r)), r.day = Math.max(1, Math.min(r.calendar.getDaysInMonth(r), r.day)), r;
}
function Vs(e, t) {
  e.calendar.isInverseEra?.(e) && (t = -t), e.year += t;
}
function Us(e) {
  for (; e.month < 1; )
    Vs(e, -1), e.month += e.calendar.getMonthsInYear(e);
  let t = 0;
  for (; e.month > (t = e.calendar.getMonthsInYear(e)); )
    e.month -= t, Vs(e, 1);
}
function fO(e) {
  for (; e.day < 1; )
    e.month--, Us(e), e.day += e.calendar.getDaysInMonth(e);
  for (; e.day > e.calendar.getDaysInMonth(e); )
    e.day -= e.calendar.getDaysInMonth(e), e.month++, Us(e);
}
function dg(e) {
  e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day));
}
function Rr(e) {
  e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), dg(e);
}
function cg(e) {
  let t = {};
  for (let r in e) typeof e[r] == "number" && (t[r] = -e[r]);
  return t;
}
function fg(e, t) {
  return Yo(e, cg(t));
}
function Bl(e, t) {
  let r = e.copy();
  return t.era != null && (r.era = t.era), t.year != null && (r.year = t.year), t.month != null && (r.month = t.month), t.day != null && (r.day = t.day), Rr(r), r;
}
function vo(e, t) {
  let r = e.copy();
  return t.hour != null && (r.hour = t.hour), t.minute != null && (r.minute = t.minute), t.second != null && (r.second = t.second), t.millisecond != null && (r.millisecond = t.millisecond), yO(r), r;
}
function pO(e) {
  e.second += Math.floor(e.millisecond / 1e3), e.millisecond = Tn(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = Tn(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = Tn(e.minute, 60);
  let t = Math.floor(e.hour / 24);
  return e.hour = Tn(e.hour, 24), t;
}
function yO(e) {
  e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3)), e.second = Math.max(0, Math.min(e.second, 59)), e.minute = Math.max(0, Math.min(e.minute, 59)), e.hour = Math.max(0, Math.min(e.hour, 23));
}
function Tn(e, t) {
  let r = e % t;
  return r < 0 && (r += t), r;
}
function mO(e, t) {
  return e.hour += t.hours || 0, e.minute += t.minutes || 0, e.second += t.seconds || 0, e.millisecond += t.milliseconds || 0, pO(e);
}
function Dl(e, t, r, a) {
  let n = e.copy();
  switch (t) {
    case "era": {
      let o = e.calendar.getEras(), i = o.indexOf(e.era);
      if (i < 0) throw new Error("Invalid era: " + e.era);
      i = rr(i, r, 0, o.length - 1, a?.round), n.era = o[i], Rr(n);
      break;
    }
    case "year":
      n.calendar.isInverseEra?.(n) && (r = -r), n.year = rr(e.year, r, -1 / 0, 9999, a?.round), n.year === -1 / 0 && (n.year = 1), n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
      break;
    case "month":
      n.month = rr(e.month, r, 1, e.calendar.getMonthsInYear(e), a?.round);
      break;
    case "day":
      n.day = rr(e.day, r, 1, e.calendar.getDaysInMonth(e), a?.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return e.calendar.balanceDate && e.calendar.balanceDate(n), Rr(n), n;
}
function pg(e, t, r, a) {
  let n = e.copy();
  switch (t) {
    case "hour": {
      let o = e.hour, i = 0, s = 23;
      if (a?.hourCycle === 12) {
        let l = o >= 12;
        i = l ? 12 : 0, s = l ? 23 : 11;
      }
      n.hour = rr(o, r, i, s, a?.round);
      break;
    }
    case "minute":
      n.minute = rr(e.minute, r, 0, 59, a?.round);
      break;
    case "second":
      n.second = rr(e.second, r, 0, 59, a?.round);
      break;
    case "millisecond":
      n.millisecond = rr(e.millisecond, r, 0, 999, a?.round);
      break;
    default:
      throw new Error("Unsupported field " + t);
  }
  return n;
}
function rr(e, t, r, a, n = !1) {
  if (n) {
    e += Math.sign(t), e < r && (e = a);
    let o = Math.abs(t);
    t > 0 ? e = Math.ceil(e / o) * o : e = Math.floor(e / o) * o, e > a && (e = r);
  } else
    e += t, e < r ? e = a - (r - e - 1) : e > a && (e = r + (e - a - 1));
  return e;
}
function yg(e, t) {
  let r;
  if (t.years != null && t.years !== 0 || t.months != null && t.months !== 0 || t.weeks != null && t.weeks !== 0 || t.days != null && t.days !== 0) {
    let n = Yo(Sa(e), {
      years: t.years,
      months: t.months,
      weeks: t.weeks,
      days: t.days
    });
    r = tr(n, e.timeZone);
  } else
    r = _a(e) - e.offset;
  r += t.milliseconds || 0, r += (t.seconds || 0) * 1e3, r += (t.minutes || 0) * 6e4, r += (t.hours || 0) * 36e5;
  let a = Nt(r, e.timeZone);
  return st(a, e.calendar);
}
function hO(e, t) {
  return yg(e, cg(t));
}
function vO(e, t, r, a) {
  switch (t) {
    case "hour": {
      let n = 0, o = 23;
      if (a?.hourCycle === 12) {
        let k = e.hour >= 12;
        n = k ? 12 : 0, o = k ? 23 : 11;
      }
      let i = Sa(e), s = st(vo(i, {
        hour: n
      }), new At()), l = [
        tr(s, e.timeZone, "earlier"),
        tr(s, e.timeZone, "later")
      ].filter((k) => Nt(k, e.timeZone).day === s.day)[0], d = st(vo(i, {
        hour: o
      }), new At()), c = [
        tr(d, e.timeZone, "earlier"),
        tr(d, e.timeZone, "later")
      ].filter((k) => Nt(k, e.timeZone).day === d.day).pop(), f = _a(e) - e.offset, y = Math.floor(f / Za), p = f % Za;
      return f = rr(y, r, Math.floor(l / Za), Math.floor(c / Za), a?.round) * Za + p, st(Nt(f, e.timeZone), e.calendar);
    }
    case "minute":
    case "second":
    case "millisecond":
      return pg(e, t, r, a);
    case "era":
    case "year":
    case "month":
    case "day": {
      let n = Dl(Sa(e), t, r, a), o = tr(n, e.timeZone);
      return st(Nt(o, e.timeZone), e.calendar);
    }
    default:
      throw new Error("Unsupported field " + t);
  }
}
function gO(e, t, r) {
  let a = Sa(e), n = vo(Bl(a, t), t);
  if (n.compare(a) === 0) return e;
  let o = tr(n, e.timeZone, r);
  return st(Nt(o, e.timeZone), e.calendar);
}
function bO(e) {
  return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function mg(e) {
  let t = st(e, new At()), r;
  return t.era === "BC" ? r = t.year === 1 ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : r = String(t.year).padStart(4, "0"), `${r}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
}
function hg(e) {
  return `${mg(e)}T${bO(e)}`;
}
function kO(e) {
  let t = Math.sign(e) < 0 ? "-" : "+";
  e = Math.abs(e);
  let r = Math.floor(e / 36e5), a = Math.floor(e % 36e5 / 6e4), n = Math.floor(e % 36e5 % 6e4 / 1e3), o = `${t}${String(r).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
  return n !== 0 && (o += `:${String(n).padStart(2, "0")}`), o;
}
function wO(e) {
  return `${hg(e)}${kO(e.offset)}[${e.timeZone}]`;
}
function Ml(e) {
  let t = typeof e[0] == "object" ? e.shift() : new At(), r;
  if (typeof e[0] == "string") r = e.shift();
  else {
    let i = t.getEras();
    r = i[i.length - 1];
  }
  let a = e.shift(), n = e.shift(), o = e.shift();
  return [
    t,
    r,
    a,
    n,
    o
  ];
}
class He {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // i.e. a ZonedDateTime should not be be passable to a parameter that expects CalendarDate.
  // If that behavior is desired, use the AnyCalendarDate interface instead.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [r, a, n, o, i] = Ml(t);
    this.calendar = r, this.era = a, this.year = n, this.month = o, this.day = i, Rr(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new He(this.calendar, this.era, this.year, this.month, this.day) : new He(this.calendar, this.year, this.month, this.day);
  }
  /** Returns a new `CalendarDate` with the given duration added to it. */
  add(t) {
    return Yo(this, t);
  }
  /** Returns a new `CalendarDate` with the given duration subtracted from it. */
  subtract(t) {
    return fg(this, t);
  }
  /** Returns a new `CalendarDate` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Bl(this, t);
  }
  /**
  * Returns a new `CalendarDate` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, a) {
    return Dl(this, t, r, a);
  }
  /** Converts the date to a native JavaScript Date object, with the time set to midnight in the given time zone. */
  toDate(t) {
    return ug(this, t);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return mg(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return ig(this, t);
  }
}
class qa {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [r, a, n, o, i] = Ml(t);
    this.calendar = r, this.era = a, this.year = n, this.month = o, this.day = i, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Rr(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new qa(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new qa(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `CalendarDateTime` with the given duration added to it. */
  add(t) {
    return Yo(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return fg(this, t);
  }
  /** Returns a new `CalendarDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t) {
    return Bl(vo(this, t), t);
  }
  /**
  * Returns a new `CalendarDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, a) {
    switch (t) {
      case "era":
      case "year":
      case "month":
      case "day":
        return Dl(this, t, r, a);
      default:
        return pg(this, t, r, a);
    }
  }
  /** Converts the date to a native JavaScript Date object in the given time zone. */
  toDate(t, r) {
    return ug(this, t, r);
  }
  /** Converts the date to an ISO 8601 formatted string. */
  toString() {
    return hg(this);
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    let r = ig(this, t);
    return r === 0 ? rO(this, Sa(t)) : r;
  }
}
class Oa {
  // This prevents TypeScript from allowing other types with the same fields to match.
  // @ts-ignore
  #e;
  constructor(...t) {
    let [r, a, n, o, i] = Ml(t), s = t.shift(), l = t.shift();
    this.calendar = r, this.era = a, this.year = n, this.month = o, this.day = i, this.timeZone = s, this.offset = l, this.hour = t.shift() || 0, this.minute = t.shift() || 0, this.second = t.shift() || 0, this.millisecond = t.shift() || 0, Rr(this);
  }
  /** Returns a copy of this date. */
  copy() {
    return this.era ? new Oa(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new Oa(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
  }
  /** Returns a new `ZonedDateTime` with the given duration added to it. */
  add(t) {
    return yg(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given duration subtracted from it. */
  subtract(t) {
    return hO(this, t);
  }
  /** Returns a new `ZonedDateTime` with the given fields set to the provided values. Other fields will be constrained accordingly. */
  set(t, r) {
    return gO(this, t, r);
  }
  /**
  * Returns a new `ZonedDateTime` with the given field adjusted by a specified amount.
  * When the resulting value reaches the limits of the field, it wraps around.
  */
  cycle(t, r, a) {
    return vO(this, t, r, a);
  }
  /** Converts the date to a native JavaScript Date object. */
  toDate() {
    return dO(this);
  }
  /** Converts the date to an ISO 8601 formatted string, including the UTC offset and time zone identifier. */
  toString() {
    return wO(this);
  }
  /** Converts the date to an ISO 8601 formatted string in UTC. */
  toAbsoluteString() {
    return this.toDate().toISOString();
  }
  /** Compares this date with another. A negative result indicates that this date is before the given one, and a positive date indicates that it is after. */
  compare(t) {
    return this.toDate().getTime() - uO(t, this.timeZone).toDate().getTime();
  }
}
const ma = [
  [
    1868,
    9,
    8
  ],
  [
    1912,
    7,
    30
  ],
  [
    1926,
    12,
    25
  ],
  [
    1989,
    1,
    8
  ],
  [
    2019,
    5,
    1
  ]
], xO = [
  [
    1912,
    7,
    29
  ],
  [
    1926,
    12,
    24
  ],
  [
    1989,
    1,
    7
  ],
  [
    2019,
    4,
    30
  ]
], Zn = [
  1867,
  1911,
  1925,
  1988,
  2018
], vr = [
  "meiji",
  "taisho",
  "showa",
  "heisei",
  "reiwa"
];
function Sc(e) {
  const t = ma.findIndex(([r, a, n]) => e.year < r || e.year === r && e.month < a || e.year === r && e.month === a && e.day < n);
  return t === -1 ? ma.length - 1 : t === 0 ? 0 : t - 1;
}
function os(e) {
  let t = Zn[vr.indexOf(e.era)];
  if (!t) throw new Error("Unknown era: " + e.era);
  return new He(e.year + t, e.month, e.day);
}
class zO extends At {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), a = Sc(r);
    return new He(this, vr[a], r.year - Zn[a], r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(os(t));
  }
  balanceDate(t) {
    let r = os(t), a = Sc(r);
    vr[a] !== t.era && (t.era = vr[a], t.year = r.year - Zn[a]), this.constrainDate(t);
  }
  constrainDate(t) {
    let r = vr.indexOf(t.era), a = xO[r];
    if (a != null) {
      let [n, o, i] = a, s = n - Zn[r];
      t.year = Math.max(1, Math.min(s, t.year)), t.year === s && (t.month = Math.min(o, t.month), t.month === o && (t.day = Math.min(i, t.day)));
    }
    if (t.year === 1 && r >= 0) {
      let [, n, o] = ma[r];
      t.month = Math.max(n, t.month), t.month === n && (t.day = Math.max(o, t.day));
    }
  }
  getEras() {
    return vr;
  }
  getYearsInEra(t) {
    let r = vr.indexOf(t.era), a = ma[r], n = ma[r + 1];
    if (n == null)
      return 9999 - a[0] + 1;
    let o = n[0] - a[0];
    return (t.month < n[1] || t.month === n[1] && t.day < n[2]) && o++, o;
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(os(t));
  }
  getMinimumMonthInYear(t) {
    let r = qc(t);
    return r ? r[1] : 1;
  }
  getMinimumDayInMonth(t) {
    let r = qc(t);
    return r && t.month === r[1] ? r[2] : 1;
  }
  constructor(...t) {
    super(...t), this.identifier = "japanese";
  }
}
function qc(e) {
  if (e.year === 1) {
    let t = vr.indexOf(e.era);
    return ma[t];
  }
}
const vg = -543;
class _O extends At {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), a = _n(r.era, r.year);
    return new He(this, a - vg, r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Oc(t));
  }
  getEras() {
    return [
      "BE"
    ];
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Oc(t));
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "buddhist";
  }
}
function Oc(e) {
  let [t, r] = Go(e.year + vg);
  return new He(t, r, e.month, e.day);
}
const go = 1911;
function gg(e) {
  return e.era === "minguo" ? e.year + go : 1 - e.year + go;
}
function Ac(e) {
  let t = e - go;
  return t > 0 ? [
    "minguo",
    t
  ] : [
    "before_minguo",
    1 - t
  ];
}
class SO extends At {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), a = _n(r.era, r.year), [n, o] = Ac(a);
    return new He(this, n, o, r.month, r.day);
  }
  toJulianDay(t) {
    return super.toJulianDay(Ec(t));
  }
  getEras() {
    return [
      "before_minguo",
      "minguo"
    ];
  }
  balanceDate(t) {
    let [r, a] = Ac(gg(t));
    t.era = r, t.year = a;
  }
  isInverseEra(t) {
    return t.era === "before_minguo";
  }
  getDaysInMonth(t) {
    return super.getDaysInMonth(Ec(t));
  }
  getYearsInEra(t) {
    return t.era === "before_minguo" ? 9999 : 9999 - go;
  }
  constructor(...t) {
    super(...t), this.identifier = "roc";
  }
}
function Ec(e) {
  let [t, r] = Go(gg(e));
  return new He(t, r, e.month, e.day);
}
const Cc = 1948320, $c = [
  0,
  31,
  62,
  93,
  124,
  155,
  186,
  216,
  246,
  276,
  306,
  336
  // Esfand
];
class qO {
  fromJulianDay(t) {
    let r = t - Cc, a = 1 + Math.floor((33 * r + 3) / 12053), n = 365 * (a - 1) + Math.floor((8 * a + 21) / 33), o = r - n, i = o < 216 ? Math.floor(o / 31) : Math.floor((o - 6) / 30), s = o - $c[i] + 1;
    return new He(this, a, i + 1, s);
  }
  toJulianDay(t) {
    let r = Cc - 1 + 365 * (t.year - 1) + Math.floor((8 * t.year + 21) / 33);
    return r += $c[t.month - 1], r += t.day, r;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInMonth(t) {
    return t.month <= 6 ? 31 : t.month <= 11 || ya(25 * t.year + 11, 33) < 8 ? 30 : 29;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 31;
  }
  getEras() {
    return [
      "AP"
    ];
  }
  getYearsInEra() {
    return 9377;
  }
  constructor() {
    this.identifier = "persian";
  }
}
const is = 78, Bc = 80;
class OO extends At {
  fromJulianDay(t) {
    let r = super.fromJulianDay(t), a = r.year - is, n = t - Ir(r.era, r.year, 1, 1), o;
    n < Bc ? (a--, o = gr(r.year - 1) ? 31 : 30, n += o + 155 + 90 + 10) : (o = gr(r.year) ? 31 : 30, n -= Bc);
    let i, s;
    if (n < o)
      i = 1, s = n + 1;
    else {
      let l = n - o;
      l < 155 ? (i = Math.floor(l / 31) + 2, s = l % 31 + 1) : (l -= 155, i = Math.floor(l / 30) + 7, s = l % 30 + 1);
    }
    return new He(this, a, i, s);
  }
  toJulianDay(t) {
    let r = t.year + is, [a, n] = Go(r), o, i;
    return gr(n) ? (o = 31, i = Ir(a, n, 3, 21)) : (o = 30, i = Ir(a, n, 3, 22)), t.month === 1 ? i + t.day - 1 : (i += o + Math.min(t.month - 2, 5) * 31, t.month >= 8 && (i += (t.month - 7) * 30), i += t.day - 1, i);
  }
  getDaysInMonth(t) {
    return t.month === 1 && gr(t.year + is) || t.month >= 2 && t.month <= 6 ? 31 : 30;
  }
  getYearsInEra() {
    return 9919;
  }
  getEras() {
    return [
      "saka"
    ];
  }
  balanceDate() {
  }
  constructor(...t) {
    super(...t), this.identifier = "indian";
  }
}
const bo = 1948440, Dc = 1948439, xt = 1300, sa = 1600, AO = 460322;
function ko(e, t, r, a) {
  return a + Math.ceil(29.5 * (r - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function bg(e, t, r) {
  let a = Math.floor((30 * (r - t) + 10646) / 10631), n = Math.min(12, Math.ceil((r - (29 + ko(t, a, 1, 1))) / 29.5) + 1), o = r - ko(t, a, n, 1) + 1;
  return new He(e, a, n, o);
}
function Mc(e) {
  return (14 + 11 * e) % 30 < 11;
}
class Pl {
  fromJulianDay(t) {
    return bg(this, bo, t);
  }
  toJulianDay(t) {
    return ko(bo, t.year, t.month, t.day);
  }
  getDaysInMonth(t) {
    let r = 29 + t.month % 2;
    return t.month === 12 && Mc(t.year) && r++, r;
  }
  getMonthsInYear() {
    return 12;
  }
  getDaysInYear(t) {
    return Mc(t.year) ? 355 : 354;
  }
  getMaximumMonthsInYear() {
    return 12;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra() {
    return 9665;
  }
  getEras() {
    return [
      "AH"
    ];
  }
  constructor() {
    this.identifier = "islamic-civil";
  }
}
class EO extends Pl {
  fromJulianDay(t) {
    return bg(this, Dc, t);
  }
  toJulianDay(t) {
    return ko(Dc, t.year, t.month, t.day);
  }
  constructor(...t) {
    super(...t), this.identifier = "islamic-tbla";
  }
}
const CO = "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
let Ls, ha;
function Jn(e) {
  return AO + ha[e - xt];
}
function en(e, t) {
  let r = e - xt, a = 1 << 11 - (t - 1);
  return (Ls[r] & a) === 0 ? 29 : 30;
}
function Pc(e, t) {
  let r = Jn(e);
  for (let a = 1; a < t; a++) r += en(e, a);
  return r;
}
function jc(e) {
  return ha[e + 1 - xt] - ha[e - xt];
}
class $O extends Pl {
  constructor() {
    if (super(), this.identifier = "islamic-umalqura", Ls || (Ls = new Uint16Array(Uint8Array.from(atob(CO), (t) => t.charCodeAt(0)).buffer)), !ha) {
      ha = new Uint32Array(sa - xt + 1);
      let t = 0;
      for (let r = xt; r <= sa; r++) {
        ha[r - xt] = t;
        for (let a = 1; a <= 12; a++) t += en(r, a);
      }
    }
  }
  fromJulianDay(t) {
    let r = t - bo, a = Jn(xt), n = Jn(sa);
    if (r < a || r > n) return super.fromJulianDay(t);
    {
      let o = xt - 1, i = 1, s = 1;
      for (; s > 0; ) {
        o++, s = r - Jn(o) + 1;
        let l = jc(o);
        if (s === l) {
          i = 12;
          break;
        } else if (s < l) {
          let d = en(o, i);
          for (i = 1; s > d; )
            s -= d, i++, d = en(o, i);
          break;
        }
      }
      return new He(this, o, i, r - Pc(o, i) + 1);
    }
  }
  toJulianDay(t) {
    return t.year < xt || t.year > sa ? super.toJulianDay(t) : bo + Pc(t.year, t.month) + (t.day - 1);
  }
  getDaysInMonth(t) {
    return t.year < xt || t.year > sa ? super.getDaysInMonth(t) : en(t.year, t.month);
  }
  getDaysInYear(t) {
    return t.year < xt || t.year > sa ? super.getDaysInYear(t) : jc(t.year);
  }
}
const Fc = 347997, kg = 1080, wg = 24 * kg, BO = 29, DO = 12 * kg + 793, MO = BO * wg + DO;
function Fr(e) {
  return ya(e * 7 + 1, 19) < 7;
}
function Qn(e) {
  let t = Math.floor((235 * e - 234) / 19), r = 12084 + 13753 * t, a = t * 29 + Math.floor(r / 25920);
  return ya(3 * (a + 1), 7) < 3 && (a += 1), a;
}
function PO(e) {
  let t = Qn(e - 1), r = Qn(e);
  return Qn(e + 1) - r === 356 ? 2 : r - t === 382 ? 1 : 0;
}
function nn(e) {
  return Qn(e) + PO(e);
}
function xg(e) {
  return nn(e + 1) - nn(e);
}
function jO(e) {
  let t = xg(e);
  switch (t > 380 && (t -= 30), t) {
    case 353:
      return 0;
    // deficient
    case 354:
      return 1;
    // normal
    case 355:
      return 2;
  }
}
function Rn(e, t) {
  if (t >= 6 && !Fr(e) && t++, t === 4 || t === 7 || t === 9 || t === 11 || t === 13) return 29;
  let r = jO(e);
  return t === 2 ? r === 2 ? 30 : 29 : t === 3 ? r === 0 ? 29 : 30 : t === 6 ? Fr(e) ? 30 : 0 : 30;
}
class FO {
  fromJulianDay(t) {
    let r = t - Fc, a = r * wg / MO, n = Math.floor((19 * a + 234) / 235) + 1, o = nn(n), i = Math.floor(r - o);
    for (; i < 1; )
      n--, o = nn(n), i = Math.floor(r - o);
    let s = 1, l = 0;
    for (; l < i; )
      l += Rn(n, s), s++;
    s--, l -= Rn(n, s);
    let d = i - l;
    return new He(this, n, s, d);
  }
  toJulianDay(t) {
    let r = nn(t.year);
    for (let a = 1; a < t.month; a++) r += Rn(t.year, a);
    return r + t.day + Fc;
  }
  getDaysInMonth(t) {
    return Rn(t.year, t.month);
  }
  getMonthsInYear(t) {
    return Fr(t.year) ? 13 : 12;
  }
  getDaysInYear(t) {
    return xg(t.year);
  }
  getMaximumMonthsInYear() {
    return 13;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra() {
    return 9999;
  }
  getEras() {
    return [
      "AM"
    ];
  }
  balanceYearMonth(t, r) {
    r.year !== t.year && (Fr(r.year) && !Fr(t.year) && r.month > 6 ? t.month-- : !Fr(r.year) && Fr(t.year) && r.month > 6 && t.month++);
  }
  constructor() {
    this.identifier = "hebrew";
  }
}
const Ws = 1723856, Ic = 1824665, Ks = 5500;
function wo(e, t, r, a) {
  return e + 365 * t + Math.floor(t / 4) + 30 * (r - 1) + a - 1;
}
function jl(e, t) {
  let r = Math.floor(4 * (t - e) / 1461), a = 1 + Math.floor((t - wo(e, r, 1, 1)) / 30), n = t + 1 - wo(e, r, a, 1);
  return [
    r,
    a,
    n
  ];
}
function zg(e) {
  return Math.floor(e % 4 / 3);
}
function _g(e, t) {
  return t % 13 !== 0 ? 30 : zg(e) + 5;
}
class Fl {
  fromJulianDay(t) {
    let [r, a, n] = jl(Ws, t), o = "AM";
    return r <= 0 && (o = "AA", r += Ks), new He(this, o, r, a, n);
  }
  toJulianDay(t) {
    let r = t.year;
    return t.era === "AA" && (r -= Ks), wo(Ws, r, t.month, t.day);
  }
  getDaysInMonth(t) {
    return _g(t.year, t.month);
  }
  getMonthsInYear() {
    return 13;
  }
  getDaysInYear(t) {
    return 365 + zg(t.year);
  }
  getMaximumMonthsInYear() {
    return 13;
  }
  getMaximumDaysInMonth() {
    return 30;
  }
  getYearsInEra(t) {
    return t.era === "AA" ? 9999 : 9991;
  }
  getEras() {
    return [
      "AA",
      "AM"
    ];
  }
  constructor() {
    this.identifier = "ethiopic";
  }
}
class IO extends Fl {
  fromJulianDay(t) {
    let [r, a, n] = jl(Ws, t);
    return r += Ks, new He(this, "AA", r, a, n);
  }
  getEras() {
    return [
      "AA"
    ];
  }
  getYearsInEra() {
    return 9999;
  }
  constructor(...t) {
    super(...t), this.identifier = "ethioaa";
  }
}
class TO extends Fl {
  fromJulianDay(t) {
    let [r, a, n] = jl(Ic, t), o = "CE";
    return r <= 0 && (o = "BCE", r = 1 - r), new He(this, o, r, a, n);
  }
  toJulianDay(t) {
    let r = t.year;
    return t.era === "BCE" && (r = 1 - r), wo(Ic, r, t.month, t.day);
  }
  getDaysInMonth(t) {
    let r = t.year;
    return t.era === "BCE" && (r = 1 - r), _g(r, t.month);
  }
  isInverseEra(t) {
    return t.era === "BCE";
  }
  balanceDate(t) {
    t.year <= 0 && (t.era = t.era === "BCE" ? "CE" : "BCE", t.year = 1 - t.year);
  }
  getEras() {
    return [
      "BCE",
      "CE"
    ];
  }
  getYearsInEra(t) {
    return t.era === "BCE" ? 9999 : 9715;
  }
  constructor(...t) {
    super(...t), this.identifier = "coptic";
  }
}
function RO(e) {
  switch (e) {
    case "buddhist":
      return new _O();
    case "ethiopic":
      return new Fl();
    case "ethioaa":
      return new IO();
    case "coptic":
      return new TO();
    case "hebrew":
      return new FO();
    case "indian":
      return new OO();
    case "islamic-civil":
      return new Pl();
    case "islamic-tbla":
      return new EO();
    case "islamic-umalqura":
      return new $O();
    case "japanese":
      return new zO();
    case "persian":
      return new qO();
    case "roc":
      return new SO();
    default:
      return new At();
  }
}
let ss = /* @__PURE__ */ new Map();
class er {
  constructor(t, r = {}) {
    this.formatter = Sg(t, r), this.options = r;
  }
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, r) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, r);
    if (r < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(r)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, r) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, r);
    if (r < t) throw new RangeError("End date must be >= start date");
    let a = this.formatter.formatToParts(t), n = this.formatter.formatToParts(r);
    return [
      ...a.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...n.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return UO() && (this.resolvedHourCycle || (this.resolvedHourCycle = LO(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
}
const NO = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function Sg(e, t = {}) {
  if (typeof t.hour12 == "boolean" && VO()) {
    t = {
      ...t
    };
    let n = NO[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? o, delete t.hour12;
  }
  let r = e + (t ? Object.entries(t).sort((n, o) => n[0] < o[0] ? -1 : 1).join() : "");
  if (ss.has(r)) return ss.get(r);
  let a = new Intl.DateTimeFormat(e, t);
  return ss.set(r, a), a;
}
let ls = null;
function VO() {
  return ls == null && (ls = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), ls;
}
let us = null;
function UO() {
  return us == null && (us = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), us;
}
function LO(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let r = Sg(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(r.formatToParts(new Date(2020, 2, 3, 0)).find((o) => o.type === "hour").value, 10), n = parseInt(r.formatToParts(new Date(2020, 2, 3, 23)).find((o) => o.type === "hour").value, 10);
  if (a === 0 && n === 23) return "h23";
  if (a === 24 && n === 23) return "h24";
  if (a === 0 && n === 11) return "h11";
  if (a === 12 && n === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
function Rt(e, t = Fa()) {
  return Il(e) ? e.toDate() : e.toDate(t);
}
function WO(e) {
  return e instanceof qa;
}
function Il(e) {
  return e instanceof Oa;
}
function KO(e) {
  return WO(e) || Il(e);
}
function va(e) {
  if (e instanceof Date) {
    const t = e.getFullYear(), r = e.getMonth() + 1;
    return new Date(t, r, 0).getDate();
  } else return e.set({ day: 100 }).day;
}
function Nn(e, t) {
  return e.compare(t) < 0;
}
function ds(e, t) {
  return e.compare(t) > 0;
}
function HO(e, t, r) {
  const a = $l(e, r, "sun");
  return t > a ? e.subtract({ days: a + 7 - t }) : t === a ? e : e.subtract({ days: a - t });
}
function GO(e, t, r) {
  const a = $l(e, r, "sun"), n = t === 0 ? 6 : t - 1;
  return a === n ? e : a > n ? e.add({ days: 7 - a + n }) : e.add({ days: n - a });
}
function YO(e) {
  const { defaultValue: t, defaultPlaceholder: r, granularity: a = "day", locale: n = "en" } = e;
  if (Array.isArray(t) && t.length) return t.at(-1).copy();
  if (t && !Array.isArray(t)) return t.copy();
  if (r) return r.copy();
  const o = /* @__PURE__ */ new Date(), i = o.getFullYear(), s = o.getMonth() + 1, l = o.getDate(), d = [
    "hour",
    "minute",
    "second"
  ], c = new er(n), f = RO(c.resolvedOptions().calendar);
  return d.includes(a ?? "day") ? st(new qa(i, s, l, 0, 0, 0), f) : st(new He(i, s, l), f);
}
function ZO(e, t) {
  const r = [];
  for (let a = 0; a < e.length; a += t) r.push(e.slice(a, a + t));
  return r;
}
function JO(e) {
  const t = e.querySelector("[data-selected]");
  if (t) return t.focus();
  const r = e.querySelector("[data-today]");
  if (r) return r.focus();
  const a = e.querySelector("[data-value]:not([data-outside-view]):not([data-disabled])");
  if (a) return a.focus();
}
function Tc(e, t) {
  const r = [];
  let a = e.add({ days: 1 });
  const n = t;
  for (; a.compare(n) < 0; )
    r.push(a), a = a.add({ days: 1 });
  return r;
}
function cs(e) {
  const { dateObj: t, weekStartsOn: r, fixedWeeks: a, locale: n } = e, o = va(t), i = Array.from({ length: o }, (m, b) => t.set({ day: b + 1 })), s = Rs(t), l = wc(t), d = HO(s, r, n), c = GO(l, r, n), f = Tc(d.subtract({ days: 1 }), s), y = Tc(l, c.add({ days: 1 })), p = f.length + i.length + y.length;
  if (a && p < 42) {
    const m = 42 - p;
    let b = y.at(-1);
    b || (b = wc(t));
    const v = Array.from({ length: m }, (_, x) => {
      const $ = x + 1;
      return b.add({ days: $ });
    });
    y.push(...v);
  }
  const k = f.concat(i, y), h = ZO(k, 7);
  return {
    value: t,
    cells: k,
    rows: h
  };
}
function Br(e) {
  const { numberOfMonths: t, dateObj: r, ...a } = e, n = [];
  if (!t || t === 1)
    return n.push(cs({
      ...a,
      dateObj: r
    })), n;
  n.push(cs({
    ...a,
    dateObj: r
  }));
  for (let o = 1; o < t; o++) {
    const i = r.add({ months: o });
    n.push(cs({
      ...a,
      dateObj: i
    }));
  }
  return n;
}
function QO(e) {
  const t = new He(2025, 1, 6);
  return (1 - $l(t, e) + 7) % 7;
}
function XO(e, t = {}) {
  const r = F(e);
  function a() {
    return r.value;
  }
  function n(m) {
    r.value = m;
  }
  function o(m, b) {
    return new er(r.value, {
      ...t,
      ...b
    }).format(m);
  }
  function i(m, b = !0) {
    return KO(m) && b ? o(Rt(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : o(Rt(m), { dateStyle: "long" });
  }
  function s(m, b = {}) {
    return new er(r.value, {
      ...t,
      month: "long",
      year: "numeric",
      ...b
    }).format(m);
  }
  function l(m, b = {}) {
    return new er(r.value, {
      ...t,
      month: "long",
      ...b
    }).format(m);
  }
  function d() {
    const m = og(Fa());
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ].map((b) => ({
      label: l(Rt(m.set({ month: b }))),
      value: b
    }));
  }
  function c(m, b = {}) {
    return new er(r.value, {
      ...t,
      year: "numeric",
      ...b
    }).format(m);
  }
  function f(m, b) {
    return Il(m) ? new er(r.value, {
      ...t,
      ...b,
      timeZone: m.timeZone
    }).formatToParts(Rt(m)) : new er(r.value, {
      ...t,
      ...b
    }).formatToParts(Rt(m));
  }
  function y(m, b = "narrow") {
    return new er(r.value, {
      ...t,
      weekday: b
    }).format(m);
  }
  function p(m) {
    const b = new er(r.value, {
      ...t,
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((v) => v.type === "dayPeriod")?.value;
    return b === "PM" || b === "pm" || b === "p.m." ? "PM" : "AM";
  }
  const k = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function h(m, b, v = {}) {
    const _ = {
      ...k,
      ...v
    }, x = f(m, _).find(($) => $.type === b);
    return x ? x.value : "";
  }
  return {
    setLocale: n,
    getLocale: a,
    fullMonth: l,
    fullYear: c,
    fullMonthAndYear: s,
    toParts: f,
    custom: o,
    part: h,
    dayPeriod: p,
    selectedDate: i,
    dayOfWeek: y,
    getMonths: d
  };
}
function Or(e) {
  const t = ja({ dir: F("ltr") });
  return j(() => e?.value || t.dir?.value || "ltr");
}
function Ia(e) {
  const t = ir(), r = t?.type.emits, a = {};
  return r?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), r?.forEach((n) => {
    a[Lk(Mf(n))] = (...o) => e(n, ...o);
  }), a;
}
function eA(e) {
  const t = j(() => u(e)), r = j(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (a, n) => n.length === 0 ? !0 : (a = a.normalize("NFC"), n = n.normalize("NFC"), r.value.compare(a.slice(0, n.length), n) === 0),
    endsWith: (a, n) => n.length === 0 ? !0 : (a = a.normalize("NFC"), n = n.normalize("NFC"), r.value.compare(a.slice(-n.length), n) === 0),
    contains: (a, n) => {
      if (n.length === 0) return !0;
      a = a.normalize("NFC"), n = n.normalize("NFC");
      let o = 0;
      const i = n.length;
      for (; o + i <= a.length; o++) {
        const s = a.slice(o, o + i);
        if (r.value.compare(n, s) === 0) return !0;
      }
      return !1;
    }
  };
}
let fs = 0;
function Zo() {
  ut((e) => {
    if (!vt) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Rc()), document.body.insertAdjacentElement("beforeend", t[1] ?? Rc()), fs++, e(() => {
      fs === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((r) => r.remove()), fs--;
    });
  });
}
function Rc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function Jo(e) {
  return j(() => je(e) ? !!Kt(e)?.closest("form") : !0);
}
function ue() {
  const e = ir(), t = F(), r = j(() => a());
  Wk(() => {
    r.value !== a() && Kk(t);
  });
  function a() {
    return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : Kt(t);
  }
  const n = Object.assign({}, e.exposed), o = {};
  for (const s in e.props) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[s]
  });
  if (Object.keys(n).length > 0) for (const s in n) Object.defineProperty(o, s, {
    enumerable: !0,
    configurable: !0,
    get: () => n[s]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function i(s) {
    if (t.value = s, !!s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), !(s instanceof Element) && !Object.hasOwn(s, "$el"))) {
      const l = s.$.exposed, d = Object.assign({}, o);
      for (const c in l) Object.defineProperty(d, c, {
        enumerable: !0,
        configurable: !0,
        get: () => l[c]
      });
      e.exposed = d;
    }
  }
  return {
    forwardRef: i,
    currentRef: t,
    currentElement: r
  };
}
function Fe(e) {
  const t = ir(), r = Object.keys(t?.type.props ?? {}).reduce((n, o) => {
    const i = (t?.type.props[o]).default;
    return i !== void 0 && (n[o] = i), n;
  }, {}), a = ua(e);
  return j(() => {
    const n = {}, o = t?.vnode.props ?? {};
    return Object.keys(o).forEach((i) => {
      n[Mf(i)] = o[i];
    }), Object.keys({
      ...r,
      ...n
    }).reduce((i, s) => (a.value[s] !== void 0 && (i[s] = a.value[s]), i), {});
  });
}
function Ce(e, t) {
  const r = Fe(e), a = t ? Ia(t) : {};
  return j(() => ({
    ...r.value,
    ...a
  }));
}
function qg() {
  const e = ir()?.vnode?.scopeId;
  return e ? { [e]: "" } : {};
}
var tA = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, la = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Un = {}, ps = 0, Og = function(e) {
  return e && (e.host || Og(e.parentNode));
}, rA = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var a = Og(r);
    return a && e.contains(a) ? a : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, aA = function(e, t, r, a) {
  var n = rA(t, Array.isArray(e) ? e : [e]);
  Un[r] || (Un[r] = /* @__PURE__ */ new WeakMap());
  var o = Un[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(n), d = function(f) {
    !f || s.has(f) || (s.add(f), d(f.parentNode));
  };
  n.forEach(d);
  var c = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(y) {
      if (s.has(y))
        c(y);
      else
        try {
          var p = y.getAttribute(a), k = p !== null && p !== "false", h = (la.get(y) || 0) + 1, m = (o.get(y) || 0) + 1;
          la.set(y, h), o.set(y, m), i.push(y), h === 1 && k && Vn.set(y, !0), m === 1 && y.setAttribute(r, "true"), k || y.setAttribute(a, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", y, b);
        }
    });
  };
  return c(t), s.clear(), ps++, function() {
    i.forEach(function(f) {
      var y = la.get(f) - 1, p = o.get(f) - 1;
      la.set(f, y), o.set(f, p), y || (Vn.has(f) || f.removeAttribute(a), Vn.delete(f)), p || f.removeAttribute(r);
    }), ps--, ps || (la = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Un = {});
  };
}, nA = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var a = Array.from(Array.isArray(e) ? e : [e]), n = tA(e);
  return n ? (a.push.apply(a, Array.from(n.querySelectorAll("[aria-live], script"))), aA(a, n, r, "aria-hidden")) : function() {
    return null;
  };
};
function Sn(e) {
  let t;
  pe(() => Kt(e), (r) => {
    let a = !1;
    try {
      a = !!r?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    r && !a ? t = nA(r) : t && t();
  }), _t(() => {
    t && t();
  });
}
let oA = 0;
function tt(e, t = "reka") {
  let r;
  const a = ja({ useId: void 0 });
  return a.useId ? r = a.useId() : "useId" in bu ? r = bu.useId?.() : r = `${++oA}`, t ? `${t}-${r}` : r;
}
function Ag() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function iA(e) {
  const t = ja({ locale: F("en") });
  return j(() => e?.value || t.locale?.value || "en");
}
function sA(e) {
  const t = F(), r = j(() => t.value?.width ?? 0), a = j(() => t.value?.height ?? 0);
  let n;
  return xe(() => {
    const o = Kt(e);
    o ? (t.value = {
      width: o.offsetWidth,
      height: o.offsetHeight
    }, n = new ResizeObserver((i) => {
      if (!Array.isArray(i) || !i.length) return;
      const s = i[0];
      let l, d;
      if ("borderBoxSize" in s) {
        const c = s.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
        l = f.inlineSize, d = f.blockSize;
      } else
        l = o.offsetWidth, d = o.offsetHeight;
      t.value = {
        width: l,
        height: d
      };
    }), n.observe(o, { box: "border-box" })) : t.value = void 0;
  }), _t(() => {
    n?.disconnect(), n = void 0;
  }), {
    width: r,
    height: a
  };
}
function lA(e, t) {
  const r = F(e);
  function a(n) {
    return t[r.value][n] ?? r.value;
  }
  return {
    state: r,
    dispatch: (n) => {
      r.value = a(n);
    }
  };
}
function Qo(e) {
  const t = Wf("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (r, a) => {
      t.value = t.value + r;
      {
        const n = Ke(), o = a.map((c) => ({
          ...c,
          textValue: c.value?.textValue ?? c.ref.textContent?.trim() ?? ""
        })), i = o.find((c) => c.ref === n), s = o.map((c) => c.textValue), l = dA(s, t.value, i?.textValue), d = o.find((c) => c.textValue === l);
        return d && d.ref.focus(), d?.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function uA(e, t) {
  return e.map((r, a) => e[(t + a) % e.length]);
}
function dA(e, t, r) {
  const a = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, n = r ? e.indexOf(r) : -1;
  let o = uA(e, Math.max(n, 0));
  a.length === 1 && (o = o.filter((s) => s !== r));
  const i = o.find((s) => s.toLowerCase().startsWith(a.toLowerCase()));
  return i !== r ? i : void 0;
}
function cA(e, t) {
  const r = F({}), a = F("none"), n = F(e), o = e.value ? "mounted" : "unmounted";
  let i;
  const s = t.value?.ownerDocument.defaultView ?? $o, { state: l, dispatch: d } = lA(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (h) => {
    if (vt) {
      const m = new CustomEvent(h, {
        bubbles: !1,
        cancelable: !1
      });
      t.value?.dispatchEvent(m);
    }
  };
  pe(e, async (h, m) => {
    const b = m !== h;
    if (await we(), b) {
      const v = a.value, _ = Ln(t.value);
      h ? (d("MOUNT"), c("enter"), _ === "none" && c("after-enter")) : _ === "none" || _ === "undefined" || r.value?.display === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : m && v !== _ ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const f = (h) => {
    if (h.target !== t.value) return;
    const m = Ln(t.value), b = m.includes(CSS.escape(h.animationName)), v = l.value === "mounted" ? "enter" : "leave";
    if (b && (c(`after-${v}`), d("ANIMATION_END"), !n.value)) {
      const _ = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", i = s?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = _);
      });
    }
    m === "none" && d("ANIMATION_END");
  }, y = (h) => {
    h.target === t.value && (a.value = Ln(t.value));
  }, p = pe(t, (h, m) => {
    h ? (r.value = getComputedStyle(h), h.addEventListener("animationstart", y), h.addEventListener("animationcancel", f), h.addEventListener("animationend", f)) : (d("ANIMATION_END"), i !== void 0 && s?.clearTimeout(i), m?.removeEventListener("animationstart", y), m?.removeEventListener("animationcancel", f), m?.removeEventListener("animationend", f));
  }, { immediate: !0 }), k = pe(l, () => {
    const h = Ln(t.value);
    a.value = l.value === "mounted" ? h : "none";
  });
  return _t(() => {
    p(), k(), t.value && (t.value.removeEventListener("animationstart", y), t.value.removeEventListener("animationcancel", f), t.value.removeEventListener("animationend", f)), i !== void 0 && s?.clearTimeout(i);
  }), { isPresent: j(() => ["mounted", "unmountSuspended"].includes(l.value)) };
}
function Ln(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var Kr = /* @__PURE__ */ O({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: r }) {
    const { present: a, forceMount: n } = Xe(e), o = F(), { isPresent: i } = cA(a, o);
    r({ present: i });
    let s = t.default({ present: i.value });
    s = Al(s || []);
    const l = ir();
    if (s && s?.length > 1) {
      const d = l?.parent?.type.name ? `<${l.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${d}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((c) => `  - ${c}`).join(`
`)
      ].join(`
`));
    }
    return () => n.value || a.value || i.value ? ar(t.default({ present: i.value })[0], { ref: (d) => {
      const c = Kt(d);
      return typeof c?.hasAttribute > "u" || (c?.hasAttribute("data-reka-popper-content-wrapper") ? o.value = c.firstElementChild : o.value = c), c;
    } }) : null;
  }
});
const xo = /* @__PURE__ */ O({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: r }) {
    return () => {
      if (!r.default) return null;
      const a = Al(r.default()), n = a.findIndex((l) => l.type !== Vk);
      if (n === -1) return a;
      const o = a[n];
      delete o.props?.ref;
      const i = o.props ? I(t, o.props) : t, s = Uk({
        ...o,
        props: {}
      }, i);
      return a.length === 1 ? s : (a[n] = s, a);
    };
  }
}), fA = [
  "area",
  "img",
  "input"
], oe = /* @__PURE__ */ O({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: r }) {
    const a = e.asChild ? "template" : e.as;
    return typeof a == "string" && fA.includes(a) ? () => ar(a, t) : a !== "template" ? () => ar(e.as, t, { default: r.default }) : () => ar(xo, t, { default: r.default });
  }
});
function Ht() {
  const e = F(), t = j(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : Kt(e));
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [Yt, pA] = /* @__PURE__ */ Ee("DialogRoot");
var yA = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = /* @__PURE__ */ et(r, "open", t, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), n = F(), o = F(), { modal: i, unmountOnHide: s } = Xe(r);
    return pA({
      open: a,
      modal: i,
      unmountOnHide: s,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (l) => {
        a.value = l;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: n,
      contentElement: o
    }), (l, d) => C(l.$slots, "default", {
      open: u(a),
      close: () => a.value = !1
    });
  }
}), Eg = yA, mA = /* @__PURE__ */ O({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = Yt();
    return (a, n) => (w(), z(u(oe), I(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: n[0] || (n[0] = (o) => u(r).onOpenChange(!1))
    }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), Tl = mA;
const hA = "dismissableLayer.pointerDownOutside", vA = "dismissableLayer.focusOutside";
function Cg(e, t) {
  if (!(t instanceof Element)) return !1;
  const r = t.closest("[data-dismissable-layer]"), a = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), n = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(r && (a === r || n.indexOf(a) < n.indexOf(r)));
}
function gA(e, t, r = !0) {
  const a = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1), o = F(() => {
  });
  return ut((i) => {
    if (!vt || !je(r)) return;
    const s = async (d) => {
      const c = d.target;
      if (!(!t?.value || !c)) {
        if (Cg(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let f = function() {
            Ho(hA, e, y);
          };
          const y = { originalEvent: d };
          d.pointerType === "touch" ? (a.removeEventListener("click", o.value), o.value = f, a.addEventListener("click", o.value, { once: !0 })) : f();
        } else a.removeEventListener("click", o.value);
        n.value = !1;
      }
    }, l = window.setTimeout(() => {
      a.addEventListener("pointerdown", s);
    }, 0);
    i(() => {
      window.clearTimeout(l), a.removeEventListener("pointerdown", s), a.removeEventListener("click", o.value);
    });
  }), { onPointerDownCapture: () => {
    je(r) && (n.value = !0);
  } };
}
function bA(e, t, r = !0) {
  const a = t?.value?.ownerDocument ?? globalThis?.document, n = F(!1);
  return ut((o) => {
    if (!vt || !je(r)) return;
    const i = async (s) => {
      if (!t?.value) return;
      await we(), await we();
      const l = s.target;
      !t.value || !l || Cg(t.value, l) || s.target && !n.value && Ho(vA, e, { originalEvent: s });
    };
    a.addEventListener("focusin", i), o(() => a.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      je(r) && (n.value = !0);
    },
    onBlurCapture: () => {
      je(r) && (n.value = !1);
    }
  };
}
var kA = /* @__PURE__ */ O({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, { forwardRef: n, currentElement: o } = ue(), i = j(() => o.value?.ownerDocument ?? globalThis.document), s = j(() => ot.layersRoot), l = j(() => o.value ? Array.from(s.value).indexOf(o.value) : -1), d = j(() => ot.layersWithOutsidePointerEventsDisabled.size > 0), c = j(() => {
      const p = Array.from(s.value), [k] = [...ot.layersWithOutsidePointerEventsDisabled].slice(-1), h = p.indexOf(k);
      return l.value >= h;
    }), f = gA(async (p) => {
      const k = [...ot.branches].some((h) => h?.contains(p.target));
      !r.present || !c.value || k || (a("pointerDownOutside", p), a("interactOutside", p), await we(), p.defaultPrevented || a("dismiss"));
    }, o), y = bA((p) => {
      const k = [...ot.branches].some((h) => h?.contains(p.target));
      !r.present || k || (a("focusOutside", p), a("interactOutside", p), p.defaultPrevented || a("dismiss"));
    }, o);
    return q0("Escape", (p) => {
      !r.present || l.value !== s.value.size - 1 || (a("escapeKeyDown", p), p.defaultPrevented || a("dismiss"));
    }), pe([
      o,
      () => r.disableOutsidePointerEvents,
      () => r.present
    ], ([p, k, h], m, b) => {
      !p || !h || k && (ot.layersWithOutsidePointerEventsDisabled.size === 0 && (ot.originalBodyPointerEvents = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), ot.layersWithOutsidePointerEventsDisabled.add(p), b(() => {
        ot.layersWithOutsidePointerEventsDisabled.delete(p), ot.layersWithOutsidePointerEventsDisabled.size === 0 && !za(ot.originalBodyPointerEvents) && (i.value.body.style.pointerEvents = ot.originalBodyPointerEvents);
      }));
    }, { immediate: !0 }), pe([o, () => r.present], ([p, k], h, m) => {
      !p || !k || (s.value.add(p), m(() => {
        s.value.delete(p);
      }));
    }, { immediate: !0 }), ut((p) => {
      p(() => {
        o.value && (s.value.delete(o.value), ot.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (p, k) => (w(), z(u(oe), {
      ref: u(n),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: Ut({ pointerEvents: d.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: u(y).onFocusCapture,
      onBlurCapture: u(y).onBlurCapture,
      onPointerdownCapture: u(f).onPointerDownCapture
    }, {
      default: g(() => [C(p.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), qn = kA;
const wA = /* @__PURE__ */ d0(() => F([]));
function xA() {
  const e = wA();
  return {
    add(t) {
      const r = e.value[0];
      t !== r && r?.pause(), e.value = Nc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Nc(e.value, t), e.value[0]?.resume();
    }
  };
}
function Nc(e, t) {
  const r = [...e], a = r.indexOf(t);
  return a !== -1 && r.splice(a, 1), r;
}
const ys = "focusScope.autoFocusOnMount", ms = "focusScope.autoFocusOnUnmount", Vc = {
  bubbles: !1,
  cancelable: !0
};
function zA(e, { select: t = !1 } = {}) {
  const r = Ke();
  for (const a of e)
    if (hr(a, { select: t }), Ke() !== r) return !0;
}
function _A(e) {
  const t = $g(e), r = Uc(t, e), a = Uc(t.reverse(), e);
  return [r, a];
}
function $g(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (a) => {
    const n = a.tagName === "INPUT" && a.type === "hidden";
    return a.disabled || a.hidden || n ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Uc(e, t) {
  for (const r of e) if (!SA(r, { upTo: t })) return r;
}
function SA(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function qA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function hr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = Ke();
    e.focus({ preventScroll: !0 }), e !== r && qA(e) && t && e.select();
  }
}
var OA = /* @__PURE__ */ O({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, a = t, { currentRef: n, currentElement: o } = ue(), i = F(null), s = xA(), l = /* @__PURE__ */ ro({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ut((f) => {
      if (!vt) return;
      const y = o.value;
      if (!r.trapped) return;
      function p(b) {
        if (l.paused || !y) return;
        const v = b.target;
        y.contains(v) ? i.value = v : hr(i.value, { select: !0 });
      }
      function k(b) {
        if (l.paused || !y) return;
        const v = b.relatedTarget;
        v !== null && (y.contains(v) || hr(i.value, { select: !0 }));
      }
      function h(b) {
        const v = i.value;
        v === null || !b.some((_) => _.removedNodes.length > 0) || y.contains(v) || hr(y);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", k);
      const m = new MutationObserver(h);
      y && m.observe(y, {
        childList: !0,
        subtree: !0
      }), f(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", k), m.disconnect();
      });
    });
    function d(f, y) {
      const p = new CustomEvent(ys, Vc), k = (h) => a("mountAutoFocus", h);
      f.addEventListener(ys, k), f.dispatchEvent(p), f.removeEventListener(ys, k), p.defaultPrevented || (zA($g(f), { select: !0 }), Ke() === y && hr(f));
    }
    ut(async (f) => {
      const y = o.value;
      if (await we(), !y) return;
      r.present !== !1 && s.add(l);
      const p = Ke();
      !y.contains(p) && r.present !== !1 && d(y, p), f(() => {
        const k = new CustomEvent(ms, Vc), h = (m) => {
          a("unmountAutoFocus", m);
        };
        y.addEventListener(ms, h), y.dispatchEvent(k), y.setAttribute("data-focus-scope-unmounting", ""), setTimeout(() => {
          k.defaultPrevented || hr(p ?? document.body, { select: !0 }), y.removeEventListener(ms, h), s.remove(l), y.removeAttribute("data-focus-scope-unmounting");
        }, 0);
      });
    }), pe(() => r.present, async (f, y) => {
      if (!vt) return;
      if (f === !1 && y === !0) {
        s.remove(l);
        return;
      }
      if (f !== !0 || y !== !1) return;
      s.add(l), await we();
      const p = o.value;
      if (!p) return;
      const k = Ke();
      p.contains(k) || d(p, k);
    });
    function c(f) {
      if (!r.loop && !r.trapped || l.paused) return;
      const y = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, p = Ke();
      if (y && p) {
        const k = f.currentTarget, [h, m] = _A(k);
        h && m ? !f.shiftKey && p === m ? (f.preventDefault(), r.loop && hr(h, { select: !0 })) : f.shiftKey && p === h && (f.preventDefault(), r.loop && hr(m, { select: !0 })) : p === k && f.preventDefault();
      }
    }
    return (f, y) => (w(), z(u(oe), {
      ref_key: "currentRef",
      ref: n,
      tabindex: "-1",
      "as-child": f.asChild,
      as: f.as,
      onKeydown: c
    }, {
      default: g(() => [C(f.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), On = OA;
const AA = "menu.itemSelect", Hs = ["Enter", " "], EA = [
  "ArrowDown",
  "PageUp",
  "Home"
], Bg = [
  "ArrowUp",
  "PageDown",
  "End"
], CA = [...EA, ...Bg];
[...Hs], [...Hs];
function Dg(e) {
  return e ? "open" : "closed";
}
function Gs(e) {
  const t = Ke();
  for (const r of e)
    if (r === t || (r.focus(), Ke() !== t)) return;
}
function $A(e, t) {
  const { x: r, y: a } = e;
  let n = !1;
  for (let o = 0, i = t.length - 1; o < t.length; i = o++) {
    const s = t[o].x, l = t[o].y, d = t[i].x, c = t[i].y;
    l > a != c > a && r < (d - s) * (a - l) / (c - l) + s && (n = !n);
  }
  return n;
}
function BA(e, t) {
  if (!t) return !1;
  const r = {
    x: e.clientX,
    y: e.clientY
  };
  return $A(r, t);
}
function zo(e) {
  return e.pointerType === "mouse";
}
var DA = /* @__PURE__ */ O({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Yt(), { forwardRef: o, currentElement: i } = ue();
    return n.titleId ||= tt(void 0, "reka-dialog-title"), n.descriptionId ||= tt(void 0, "reka-dialog-description"), xe(() => {
      n.contentElement = i, Ke() !== document.body && (n.triggerElement.value = Ke());
    }), (s, l) => (w(), z(u(On), {
      "as-child": "",
      loop: "",
      trapped: r.trapFocus,
      present: r.present,
      onMountAutoFocus: l[5] || (l[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: l[6] || (l[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: g(() => [A(u(qn), I({
        id: u(n).contentId,
        ref: u(o),
        as: s.as,
        "as-child": s.asChild,
        present: r.present,
        "disable-outside-pointer-events": s.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": u(n).descriptionId,
        "aria-labelledby": u(n).titleId,
        "data-state": u(Dg)(u(n).open.value)
      }, s.$attrs, {
        onDismiss: l[0] || (l[0] = (d) => u(n).onOpenChange(!1)),
        onEscapeKeyDown: l[1] || (l[1] = (d) => a("escapeKeyDown", d)),
        onFocusOutside: l[2] || (l[2] = (d) => a("focusOutside", d)),
        onInteractOutside: l[3] || (l[3] = (d) => a("interactOutside", d)),
        onPointerDownOutside: l[4] || (l[4] = (d) => a("pointerDownOutside", d))
      }), {
        default: g(() => [C(s.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "present",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped", "present"]));
  }
}), Mg = DA, MA = /* @__PURE__ */ O({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Yt(), o = Ia(a), { forwardRef: i, currentElement: s } = ue(), l = j(() => r.present ? s.value : void 0);
    Sn(l);
    const d = j(() => {
      const { present: c, ...f } = r;
      return f;
    });
    return pe(() => r.present, (c, f) => {
      !c && f && n.triggerElement.value?.focus();
    }), (c, f) => (w(), z(Mg, I({
      ...d.value,
      ...u(o)
    }, {
      ref: u(i),
      present: c.present,
      "trap-focus": u(n).open.value,
      "disable-outside-pointer-events": r.disableOutsidePointerEvents,
      onCloseAutoFocus: f[0] || (f[0] = (y) => {
        y.defaultPrevented || (y.preventDefault(), u(n).triggerElement.value?.focus());
      }),
      onPointerDownOutside: f[1] || (f[1] = (y) => {
        const p = y.detail.originalEvent, k = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || k) && y.preventDefault();
      }),
      onFocusOutside: f[2] || (f[2] = (y) => {
        y.preventDefault();
      })
    }), {
      default: g(() => [C(c.$slots, "default")]),
      _: 3
    }, 16, [
      "present",
      "trap-focus",
      "disable-outside-pointer-events"
    ]));
  }
}), PA = MA, jA = /* @__PURE__ */ O({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !0
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = Ia(t);
    ue();
    const n = Yt(), o = F(!1), i = F(!1), s = j(() => {
      const { present: l, ...d } = r;
      return d;
    });
    return pe(() => r.present, (l, d) => {
      !l && d && (o.value || n.triggerElement.value?.focus(), o.value = !1, i.value = !1);
    }), (l, d) => (w(), z(Mg, I({
      ...s.value,
      ...u(a)
    }, {
      present: l.present,
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        c.defaultPrevented || (o.value || u(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        u(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: g(() => [C(l.$slots, "default")]),
      _: 3
    }, 16, ["present"]));
  }
}), FA = jA, IA = /* @__PURE__ */ O({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Yt(), o = Ia(a), { forwardRef: i } = ue();
    return (s, l) => (w(), z(u(Kr), {
      present: s.forceMount || u(n).open.value,
      "force-mount": s.forceMount || !u(n).unmountOnHide.value
    }, {
      default: g(({ present: d }) => [u(n).modal.value ? ba((w(), z(PA, I({
        key: 0,
        ref: u(i),
        present: u(n).unmountOnHide.value || d
      }, {
        ...r,
        ...u(o),
        ...s.$attrs
      }), {
        default: g(() => [C(s.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[eo, u(n).unmountOnHide.value || d]]) : ba((w(), z(FA, I({
        key: 1,
        ref: u(i),
        present: u(n).unmountOnHide.value || d
      }, {
        ...r,
        ...u(o),
        ...s.$attrs
      }), {
        default: g(() => [C(s.$slots, "default")]),
        _: 2
      }, 1040, ["present"])), [[eo, u(n).unmountOnHide.value || d]])]),
      _: 3
    }, 8, ["present", "force-mount"]));
  }
}), Pg = IA, TA = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = Yt();
    return (a, n) => (w(), z(u(oe), I(t, { id: u(r).descriptionId }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), jg = TA, RA = /* @__PURE__ */ O({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    present: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  setup(e) {
    const t = e, r = Yt(), a = zn(t.present);
    return pe(() => t.present, (n) => a.value = n), ue(), (n, o) => (w(), z(u(oe), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": u(r).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" },
      onPointerdown: o[0] || (o[0] = Ve(() => {
      }, [
        "left",
        "self",
        "prevent"
      ]))
    }, {
      default: g(() => [C(n.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), NA = RA, VA = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Yt(), { forwardRef: r } = ue();
    return (a, n) => u(t)?.modal.value ? (w(), z(u(Kr), {
      key: 0,
      present: a.forceMount || u(t).open.value,
      "force-mount": a.forceMount || !u(t).unmountOnHide.value
    }, {
      default: g(({ present: o }) => [ba(A(NA, I(a.$attrs, {
        ref: u(r),
        as: a.as,
        "as-child": a.asChild,
        present: u(t).unmountOnHide.value || o
      }), {
        default: g(() => [C(a.$slots, "default")]),
        _: 2
      }, 1040, [
        "as",
        "as-child",
        "present"
      ]), [[eo, u(t).unmountOnHide.value || o]])]),
      _: 3
    }, 8, ["present", "force-mount"])) : re("v-if", !0);
  }
}), Fg = VA, UA = /* @__PURE__ */ O({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = ja({}), a = j(() => t.to ?? r.teleportTo?.value ?? "body"), n = /* @__PURE__ */ Hf();
    return (o, i) => u(n) || o.forceMount ? (w(), z(Pf, {
      key: 0,
      to: a.value,
      disabled: o.disabled,
      defer: o.defer
    }, [C(o.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : re("v-if", !0);
  }
}), Ta = UA, LA = /* @__PURE__ */ O({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), WA = LA, KA = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e, r = Yt();
    return ue(), (a, n) => (w(), z(u(oe), I(t, { id: u(r).titleId }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Ig = KA, HA = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = Yt(), { forwardRef: a, currentElement: n } = ue();
    return r.contentId ||= tt(void 0, "reka-dialog-content"), xe(() => {
      r.triggerElement.value = n.value;
    }), (o, i) => (w(), z(u(oe), I(t, {
      ref: u(a),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": u(r).open.value || !1,
      "aria-controls": u(r).open.value ? u(r).contentId : void 0,
      "data-state": u(r).open.value ? "open" : "closed",
      onClick: u(r).onOpenToggle
    }), {
      default: g(() => [C(o.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), Tg = HA, GA = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(Tl), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), YA = GA;
const [ZA, JA] = /* @__PURE__ */ Ee("AlertDialogContent");
var QA = /* @__PURE__ */ O({
  __name: "AlertDialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = Ia(t);
    ue();
    const n = F();
    return JA({ onCancelElementChange: (o) => {
      n.value = o;
    } }), (o, i) => (w(), z(u(Pg), I({
      ...r,
      ...u(a)
    }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = Ve(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = Ve(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        we(() => {
          n.value?.focus({ preventScroll: !0 });
        });
      })
    }), {
      default: g(() => [C(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), XA = QA, eE = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = ZA(), { forwardRef: a, currentElement: n } = ue();
    return xe(() => {
      r.onCancelElementChange(n.value);
    }), (o, i) => (w(), z(u(Tl), I(t, { ref: u(a) }), {
      default: g(() => [C(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), tE = eE, rE = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(jg), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), aE = rE, nE = /* @__PURE__ */ O({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(Fg), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), oE = nE, iE = /* @__PURE__ */ O({
  __name: "AlertDialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), sE = iE, lE = /* @__PURE__ */ O({
  __name: "AlertDialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return ue(), (a, n) => (w(), z(u(Eg), I(u(r), { modal: !0 }), {
      default: g((o) => [C(a.$slots, "default", Be(Ue(o)))]),
      _: 3
    }, 16));
  }
}), uE = lE, dE = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(Ig), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), cE = dE, fE = /* @__PURE__ */ O({
  __name: "AlertDialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(Tg), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), pE = fE;
const Lc = "data-reka-collection-item";
function St(e = {}) {
  const { key: t = "", isProvider: r = !1 } = e, a = `${t}CollectionProvider`;
  let n;
  if (r) {
    const c = F(/* @__PURE__ */ new Map());
    n = {
      collectionRef: F(),
      itemMap: c
    }, sl(a, n);
  } else n = ao(a);
  const o = (c = !1) => {
    const f = n.collectionRef.value;
    if (!f) return [];
    const y = Array.from(f.querySelectorAll(`[${Lc}]`)), p = new Map(y.map((h, m) => [h, m])), k = Array.from(n.itemMap.value.values()).sort((h, m) => (p.get(h.ref) ?? -1) - (p.get(m.ref) ?? -1));
    return c ? k : k.filter((h) => h.ref.dataset.disabled !== "");
  }, i = /* @__PURE__ */ O({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: k } = Ht();
      return pe(k, () => {
        n.collectionRef.value = k.value;
      }), () => ar(xo, {
        ref: p,
        ...y
      }, f);
    }
  }), s = /* @__PURE__ */ O({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: f, attrs: y }) {
      const { primitiveElement: p, currentElement: k } = Ht();
      return ut((h) => {
        if (k.value) {
          const m = Hk(k.value);
          n.itemMap.value.set(m, {
            ref: k.value,
            value: c.value
          }), h(() => n.itemMap.value.delete(m));
        }
      }), () => ar(xo, {
        ...y,
        [Lc]: "",
        ref: p
      }, f);
    }
  }), l = j(() => Array.from(n.itemMap.value.values())), d = j(() => n.itemMap.value.size);
  return {
    getItems: o,
    reactiveItems: l,
    itemMapSize: d,
    CollectionSlot: i,
    CollectionItem: s
  };
}
var yE = /* @__PURE__ */ O({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(oe), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" || t.feature === "fully-hidden" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: g(() => [C(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Rg = yE, mE = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: r, currentElement: a } = Ht(), n = j(() => t.checked ?? t.value);
    return pe(n, (o, i) => {
      if (!a.value) return;
      const s = a.value, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "value").set;
      if (d && o !== i) {
        const c = new Event("input", { bubbles: !0 }), f = new Event("change", { bubbles: !0 });
        d.call(s, o), s.dispatchEvent(c), s.dispatchEvent(f);
      }
    }), (o, i) => (w(), z(Rg, I({
      ref_key: "primitiveElement",
      ref: r
    }, {
      ...t,
      ...o.$attrs
    }, { as: "input" }), null, 16));
  }
}), Wc = mE, hE = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, r = j(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), a = j(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, o) => typeof n == "object" ? Object.entries(n).map(([i, s]) => ({
      name: `${t.name}[${o}][${i}]`,
      value: s
    })) : {
      name: `${t.name}[${o}]`,
      value: n
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, o]) => ({
      name: `${t.name}[${n}]`,
      value: o
    })) : []);
    return (n, o) => (w(), Z(Pe, null, [re(" We render single input if it's required "), r.value ? (w(), z(Wc, I({ key: n.name }, {
      ...t,
      ...n.$attrs
    }, {
      name: n.name,
      value: n.value
    }), null, 16, ["name", "value"])) : (w(!0), Z(Pe, { key: 1 }, Qe(a.value, (i) => (w(), z(Wc, I({ key: i.name }, { ref_for: !0 }, {
      ...t,
      ...n.$attrs
    }, {
      name: i.name,
      value: i.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), Rl = hE;
function vE(e, t, r) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => on(a, t, r)) : on(e, t, r);
}
function on(e, t, r) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof r == "function" ? r(e, t) : typeof r == "string" ? e?.[r] === t?.[r] : xr(e, t);
}
const gE = "rovingFocusGroup.onEntryFocus", bE = {
  bubbles: !1,
  cancelable: !0
}, kE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function wE(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ng(e, t, r) {
  const a = wE(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return kE[a];
}
function Vg(e, t = !1) {
  const r = Ke();
  for (const a of e)
    if (a === r || (a.focus({ preventScroll: t }), Ke() !== r)) return;
}
function xE(e, t) {
  return e.map((r, a) => e[(t + a) % e.length]);
}
const [Xo, zE] = /* @__PURE__ */ Ee("ListboxRoot");
var _E = /* @__PURE__ */ O({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r, { multiple: o, highlightOnHover: i, orientation: s, disabled: l, selectionBehavior: d, dir: c } = Xe(a), { getItems: f } = St({ isProvider: !0 }), { handleTypeaheadSearch: y } = Qo(), { primitiveElement: p, currentElement: k } = Ht(), h = Ag(), m = Or(c), b = Jo(k), v = F(), _ = F(!1), x = F(!0), $ = /* @__PURE__ */ et(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? (o.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    });
    function S(Y) {
      if (_.value = !0, a.multiple) {
        const U = Array.isArray($.value) ? [...$.value] : [], Q = U.findIndex((se) => on(se, Y, a.by));
        a.selectionBehavior === "toggle" ? (Q === -1 ? U.push(Y) : U.splice(Q, 1), $.value = U) : ($.value = [Y], v.value = Y);
      } else a.selectionBehavior === "toggle" && on($.value, Y, a.by) ? $.value = void 0 : $.value = Y;
      setTimeout(() => {
        _.value = !1;
      }, 1);
    }
    const q = F(null), E = F(null), D = F(!1), N = F(!1), ee = /* @__PURE__ */ Yn(), ie = /* @__PURE__ */ Yn(), H = /* @__PURE__ */ Yn();
    function X() {
      return f().map((Y) => Y.ref).filter((Y) => Y.dataset.disabled !== "");
    }
    function P(Y, U = !0, Q) {
      if (!Y) return;
      q.value = Y, (Q ?? x.value) && q.value.focus(), U && q.value.scrollIntoView({ block: "nearest" });
      const se = f().find((fe) => fe.ref === Y);
      n("highlight", se);
    }
    function V(Y) {
      if (D.value) H.trigger(Y);
      else {
        const U = f().find((Q) => on(Q.value, Y, a.by));
        U && (q.value = U.ref, P(U.ref));
      }
    }
    function R(Y) {
      if (q.value && q.value.isConnected) {
        if (Y.ctrlKey || Y.metaKey || Y.altKey) return;
        Y.preventDefault(), Y.stopPropagation(), N.value || q.value.click();
      }
    }
    function L(Y) {
      if (x.value) {
        if (_.value = !0, D.value) ie.trigger(Y);
        else {
          const U = Y.altKey || Y.ctrlKey || Y.metaKey;
          if (U && Y.key === "a" && o.value) {
            const Q = f(), se = Q.map((ge) => ge.value);
            $.value = [...se], Y.preventDefault();
            const fe = Q.at(-1);
            fe && P(fe.ref);
          } else if (!U) {
            const Q = y(Y.key, f());
            Q && P(Q);
          }
        }
        setTimeout(() => {
          _.value = !1;
        }, 1);
      }
    }
    function de() {
      N.value = !0;
    }
    function G() {
      we(() => {
        N.value = !1;
      });
    }
    function _e() {
      we(() => {
        const Y = new KeyboardEvent("keydown", { key: "PageUp" });
        Ie(Y);
      });
    }
    function Se(Y) {
      const U = q.value;
      U?.isConnected && (E.value = U), q.value = null, n("leave", Y);
    }
    function Le(Y) {
      const U = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if (Y.currentTarget?.dispatchEvent(U), n("entryFocus", U), !U.defaultPrevented)
        if (E.value) P(E.value);
        else {
          const Q = X()?.[0];
          P(Q);
        }
    }
    function Ie(Y) {
      const U = Ng(Y, s.value, m.value);
      if (!U) return;
      let Q = X();
      if (q.value) {
        if (U === "last") Q.reverse();
        else if (U === "prev" || U === "next") {
          U === "prev" && Q.reverse();
          const se = Q.indexOf(q.value);
          Q = Q.slice(se + 1);
        }
        be(Y, Q[0]);
      }
      if (Q.length) {
        const se = !q.value && U === "prev" ? Q.length - 1 : 0;
        P(Q[se]);
      }
      if (D.value) return ie.trigger(Y);
    }
    function be(Y, U) {
      if (!(D.value || a.selectionBehavior !== "replace" || !o.value || !Array.isArray($.value) || (Y.altKey || Y.ctrlKey || Y.metaKey) && !Y.shiftKey) && Y.shiftKey) {
        const Q = f().filter((ge) => ge.ref.dataset.disabled !== "");
        let se = Q.find((ge) => ge.ref === U)?.value;
        if (Y.key === h.END ? se = Q.at(-1)?.value : Y.key === h.HOME && (se = Q[0]?.value), !se || !v.value) return;
        const fe = Vq(Q.map((ge) => ge.value), v.value, se);
        $.value = fe;
      }
    }
    async function ce(Y, U = !0) {
      if (vt)
        if (await we(), D.value) ee.trigger({
          event: Y,
          scroll: U
        });
        else {
          const Q = X(), se = Q.find((ge) => ge.dataset.state === "checked"), fe = U ? void 0 : !1;
          se ? P(se, U, fe) : Q.length && P(Q[0], U, fe);
        }
    }
    let Oe = !1;
    return pe($, () => {
      if (!_.value) {
        const Y = Oe;
        Oe = !0, we(() => {
          ce(void 0, Y);
        });
      }
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: q,
      highlightItem: V,
      highlightFirstItem: _e,
      highlightSelected: ce,
      getItems: f
    }), zE({
      modelValue: $,
      onValueChange: S,
      multiple: o,
      orientation: s,
      dir: m,
      disabled: l,
      highlightOnHover: i,
      highlightedElement: q,
      isVirtual: D,
      virtualFocusHook: ee,
      virtualKeydownHook: ie,
      virtualHighlightHook: H,
      by: a.by,
      firstValue: v,
      selectionBehavior: d,
      focusable: x,
      onLeave: Se,
      onEnter: Le,
      changeHighlight: P,
      onKeydownEnter: R,
      onKeydownNavigation: Ie,
      onKeydownTypeAhead: L,
      onCompositionStart: de,
      onCompositionEnd: G,
      highlightFirstItem: _e
    }), (Y, U) => (w(), z(u(oe), {
      ref_key: "primitiveElement",
      ref: p,
      as: Y.as,
      "as-child": Y.asChild,
      dir: u(m),
      "data-disabled": u(l) ? "" : void 0,
      onPointerleave: Se,
      onFocusout: U[0] || (U[0] = async (Q) => {
        const se = Q.relatedTarget || Q.target;
        await we(), q.value && u(k) && !u(k).contains(se) && Se(Q);
      })
    }, {
      default: g(() => [C(Y.$slots, "default", { modelValue: u($) }), u(b) && Y.name ? (w(), z(u(Rl), {
        key: 0,
        name: Y.name,
        value: u($),
        disabled: u(l),
        required: Y.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : re("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), SE = _E, qE = /* @__PURE__ */ O({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = St(), r = Xo(), a = Wf(!1, 10);
    return (n, o) => (w(), z(u(t), null, {
      default: g(() => [A(u(oe), {
        role: "listbox",
        as: n.as,
        "as-child": n.asChild,
        tabindex: u(r).focusable.value ? u(r).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": u(r).orientation.value,
        "aria-multiselectable": !!u(r).multiple.value,
        "data-orientation": u(r).orientation.value,
        onMousedown: o[0] || (o[0] = Ve((i) => a.value = !0, ["left"])),
        onFocus: o[1] || (o[1] = (i) => {
          u(a) || u(r).onEnter(i);
        }),
        onKeydown: [
          o[2] || (o[2] = zt((i) => {
            u(r).orientation.value === "vertical" && (i.key === "ArrowLeft" || i.key === "ArrowRight") || u(r).orientation.value === "horizontal" && (i.key === "ArrowUp" || i.key === "ArrowDown") || (i.preventDefault(), u(r).focusable.value && u(r).onKeydownNavigation(i));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          zt(u(r).onKeydownEnter, ["enter"]),
          u(r).onKeydownTypeAhead
        ]
      }, {
        default: g(() => [C(n.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), OE = qE, AE = /* @__PURE__ */ O({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = /* @__PURE__ */ et(r, "modelValue", t, {
      defaultValue: "",
      passive: r.modelValue === void 0
    }), n = Xo(), { primitiveElement: o, currentElement: i } = Ht(), s = j(() => r.disabled || n.disabled.value || !1), l = F();
    Yk(() => l.value = n.highlightedElement.value?.id), xe(() => {
      n.focusable.value = !1, setTimeout(() => {
        r.autoFocus && i.value?.focus();
      }, 1);
    }), _t(() => {
      n.focusable.value = !0;
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = ag((v) => {
      a.value = v.target.value, n.onCompositionEnd(), n.highlightFirstItem();
    });
    function k() {
      n.onCompositionStart(), f();
    }
    function h(v) {
      c.value || (a.value = v.target.value, n.highlightFirstItem());
    }
    function m(v) {
      d.value || (v.preventDefault(), n.onKeydownNavigation(v));
    }
    function b(v) {
      d.value || n.onKeydownEnter(v);
    }
    return (v, _) => (w(), z(u(oe), {
      ref_key: "primitiveElement",
      ref: o,
      as: v.as,
      "as-child": v.asChild,
      value: u(a),
      disabled: s.value ? "" : void 0,
      "data-disabled": s.value ? "" : void 0,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": l.value,
      type: "text",
      onKeydown: [zt(m, [
        "down",
        "up",
        "home",
        "end"
      ]), zt(b, ["enter"])],
      onInput: h,
      onCompositionstart: k,
      onCompositionupdate: u(y),
      onCompositionend: u(p)
    }, {
      default: g(() => [C(v.$slots, "default", { modelValue: u(a) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onCompositionupdate",
      "onCompositionend"
    ]));
  }
}), EE = AE;
const [SF, CE] = /* @__PURE__ */ Ee("ListboxGroup");
var $E = /* @__PURE__ */ O({
  __name: "ListboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = tt(void 0, "reka-listbox-group");
    return CE({ id: r }), (a, n) => (w(), z(u(oe), I({ role: "group" }, t, { "aria-labelledby": u(r) }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), BE = $E;
const DE = "listbox.select", [ME, PE] = /* @__PURE__ */ Ee("ListboxItem");
var jE = /* @__PURE__ */ O({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = tt(void 0, "reka-listbox-item"), { CollectionItem: o } = St(), { forwardRef: i, currentElement: s } = ue(), l = Xo(), d = j(() => s.value != null && s.value === l.highlightedElement.value), c = j(() => vE(l.modelValue.value, r.value, l.by)), f = j(() => l.disabled.value || r.disabled);
    async function y(k) {
      a("select", k), !k?.defaultPrevented && !f.value && k && (l.onValueChange(r.value), l.changeHighlight(s.value));
    }
    function p(k) {
      const h = {
        originalEvent: k,
        value: r.value
      };
      Ho(DE, y, h);
    }
    return PE({ isSelected: c }), (k, h) => (w(), z(u(o), { value: k.value }, {
      default: g(() => [ll([
        d.value,
        c.value,
        f.value,
        u(l).focusable.value
      ], () => A(u(oe), I({ id: u(n) }, k.$attrs, {
        ref: u(i),
        role: "option",
        tabindex: u(l).focusable.value ? d.value ? "0" : "-1" : -1,
        "aria-selected": c.value,
        as: k.as,
        "as-child": k.asChild,
        disabled: f.value ? "" : void 0,
        "data-disabled": f.value ? "" : void 0,
        "data-highlighted": d.value ? "" : void 0,
        "data-state": c.value ? "checked" : "unchecked",
        onClick: p,
        onKeydown: zt(Ve(p, ["prevent"]), ["space"]),
        onPointermove: h[0] || (h[0] = () => {
          u(l).highlightedElement.value !== u(s) && u(l).highlightOnHover.value && u(l).changeHighlight(u(s), !1, !1);
        })
      }), {
        default: g(() => [C(k.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), h, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), FE = jE, IE = /* @__PURE__ */ O({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = ME();
    return (a, n) => u(r).isSelected.value ? (w(), z(u(oe), I({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16)) : re("v-if", !0);
  }
}), TE = IE;
const [Ug, RE] = /* @__PURE__ */ Ee("PopperRoot");
var NE = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = F();
    return RE({
      anchor: t,
      onAnchorChange: (r) => t.value = r
    }), (r, a) => C(r.$slots, "default");
  }
}), ei = NE, VE = /* @__PURE__ */ O({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: a } = ue(), n = Ug();
    return Nf(() => {
      n.onAnchorChange(t.reference ?? a.value);
    }), (o, i) => (w(), z(u(oe), {
      ref: u(r),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: g(() => [C(o.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), ti = VE;
function UE(e) {
  return e !== null;
}
function LE(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      const { placement: r, rects: a, middlewareData: n } = t, o = n.arrow?.centerOffset !== 0, i = o ? 0 : e.arrowWidth, s = o ? 0 : e.arrowHeight, [l, d] = Ys(r), c = {
        start: e.dir === "rtl" ? "100%" : "0%",
        center: "50%",
        end: e.dir === "rtl" ? "0%" : "100%"
      }[d], f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d], y = (n.arrow?.x ?? 0) + i / 2, p = (n.arrow?.y ?? 0) + s / 2;
      let k = "", h = "";
      return l === "bottom" ? (k = o ? c : `${y}px`, h = `${-s}px`) : l === "top" ? (k = o ? c : `${y}px`, h = `${a.floating.height + s}px`) : l === "right" ? (k = `${-s}px`, h = o ? f : `${p}px`) : l === "left" && (k = `${a.floating.width + s}px`, h = o ? f : `${p}px`), { data: {
        x: k,
        y: h
      } };
    }
  };
}
function Ys(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
const WE = ["top", "right", "bottom", "left"], _r = Math.min, yt = Math.max, _o = Math.round, Wn = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), KE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zs(e, t, r) {
  return yt(e, _r(t, r));
}
function nr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function or(e) {
  return e.split("-")[0];
}
function Ra(e) {
  return e.split("-")[1];
}
function Nl(e) {
  return e === "x" ? "y" : "x";
}
function Vl(e) {
  return e === "y" ? "height" : "width";
}
function Vt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ul(e) {
  return Nl(Vt(e));
}
function HE(e, t, r) {
  r === void 0 && (r = !1);
  const a = Ra(e), n = Ul(e), o = Vl(n);
  let i = n === "x" ? a === (r ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (i = So(i)), [i, So(i)];
}
function GE(e) {
  const t = So(e);
  return [Js(e), t, Js(t)];
}
function Js(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Kc = ["left", "right"], Hc = ["right", "left"], YE = ["top", "bottom"], ZE = ["bottom", "top"];
function JE(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Hc : Kc : t ? Kc : Hc;
    case "left":
    case "right":
      return t ? YE : ZE;
    default:
      return [];
  }
}
function QE(e, t, r, a) {
  const n = Ra(e);
  let o = JE(or(e), r === "start", a);
  return n && (o = o.map((i) => i + "-" + n), t && (o = o.concat(o.map(Js)))), o;
}
function So(e) {
  const t = or(e);
  return KE[t] + e.slice(t.length);
}
function XE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lg(e) {
  return typeof e != "number" ? XE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function qo(e) {
  const {
    x: t,
    y: r,
    width: a,
    height: n
  } = e;
  return {
    width: a,
    height: n,
    top: r,
    left: t,
    right: t + a,
    bottom: r + n,
    x: t,
    y: r
  };
}
function Gc(e, t, r) {
  let {
    reference: a,
    floating: n
  } = e;
  const o = Vt(t), i = Ul(t), s = Vl(i), l = or(t), d = o === "y", c = a.x + a.width / 2 - n.width / 2, f = a.y + a.height / 2 - n.height / 2, y = a[s] / 2 - n[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: c,
        y: a.y - n.height
      };
      break;
    case "bottom":
      p = {
        x: c,
        y: a.y + a.height
      };
      break;
    case "right":
      p = {
        x: a.x + a.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: a.x - n.width,
        y: f
      };
      break;
    default:
      p = {
        x: a.x,
        y: a.y
      };
  }
  switch (Ra(t)) {
    case "start":
      p[i] -= y * (r && d ? -1 : 1);
      break;
    case "end":
      p[i] += y * (r && d ? -1 : 1);
      break;
  }
  return p;
}
async function eC(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: a,
    y: n,
    platform: o,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: y = !1,
    padding: p = 0
  } = nr(t, e), k = Lg(p), h = s[y ? f === "floating" ? "reference" : "floating" : f], m = qo(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(h))) == null || r ? h : h.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: l
  })), b = f === "floating" ? {
    x: a,
    y: n,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), _ = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = qo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: v,
    strategy: l
  }) : b);
  return {
    top: (m.top - x.top + k.top) / _.y,
    bottom: (x.bottom - m.bottom + k.bottom) / _.y,
    left: (m.left - x.left + k.left) / _.x,
    right: (x.right - m.right + k.right) / _.x
  };
}
const tC = 50, rC = async (e, t, r) => {
  const {
    placement: a = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: i
  } = r, s = i.detectOverflow ? i : {
    ...i,
    detectOverflow: eC
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: n
  }), {
    x: c,
    y: f
  } = Gc(d, a, l), y = a, p = 0;
  const k = {};
  for (let h = 0; h < o.length; h++) {
    const m = o[h];
    if (!m)
      continue;
    const {
      name: b,
      fn: v
    } = m, {
      x: _,
      y: x,
      data: $,
      reset: S
    } = await v({
      x: c,
      y: f,
      initialPlacement: a,
      placement: y,
      strategy: n,
      middlewareData: k,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = _ ?? c, f = x ?? f, k[b] = {
      ...k[b],
      ...$
    }, S && p < tC && (p++, typeof S == "object" && (S.placement && (y = S.placement), S.rects && (d = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: n
    }) : S.rects), {
      x: c,
      y: f
    } = Gc(d, y, l)), h = -1);
  }
  return {
    x: c,
    y: f,
    placement: y,
    strategy: n,
    middlewareData: k
  };
}, aC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: a,
      placement: n,
      rects: o,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: d,
      padding: c = 0
    } = nr(e, t) || {};
    if (d == null)
      return {};
    const f = Lg(c), y = {
      x: r,
      y: a
    }, p = Ul(n), k = Vl(p), h = await i.getDimensions(d), m = p === "y", b = m ? "top" : "left", v = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", x = o.reference[k] + o.reference[p] - y[p] - o.floating[k], $ = y[p] - o.reference[p], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let q = S ? S[_] : 0;
    (!q || !await (i.isElement == null ? void 0 : i.isElement(S))) && (q = s.floating[_] || o.floating[k]);
    const E = x / 2 - $ / 2, D = q / 2 - h[k] / 2 - 1, N = _r(f[b], D), ee = _r(f[v], D), ie = N, H = q - h[k] - ee, X = q / 2 - h[k] / 2 + E, P = Zs(ie, X, H), V = !l.arrow && Ra(n) != null && X !== P && o.reference[k] / 2 - (X < ie ? N : ee) - h[k] / 2 < 0, R = V ? X < ie ? X - ie : X - H : 0;
    return {
      [p]: y[p] + R,
      data: {
        [p]: P,
        centerOffset: X - P - R,
        ...V && {
          alignmentOffset: R
        }
      },
      reset: V
    };
  }
}), nC = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, a;
      const {
        placement: n,
        middlewareData: o,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: d
      } = t, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: y,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: k = "none",
        flipAlignment: h = !0,
        ...m
      } = nr(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const b = or(n), v = Vt(s), _ = or(s) === s, x = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), $ = y || (_ || !h ? [So(s)] : GE(s)), S = k !== "none";
      !y && S && $.push(...QE(s, h, k, x));
      const q = [s, ...$], E = await l.detectOverflow(t, m), D = [];
      let N = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (c && D.push(E[b]), f) {
        const X = HE(n, i, x);
        D.push(E[X[0]], E[X[1]]);
      }
      if (N = [...N, {
        placement: n,
        overflows: D
      }], !D.every((X) => X <= 0)) {
        var ee, ie;
        const X = (((ee = o.flip) == null ? void 0 : ee.index) || 0) + 1, P = q[X];
        if (P && (!(f === "alignment" && v !== Vt(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((R) => Vt(R.placement) === v ? R.overflows[0] > 0 : !0)))
          return {
            data: {
              index: X,
              overflows: N
            },
            reset: {
              placement: P
            }
          };
        let V = (ie = N.filter((R) => R.overflows[0] <= 0).sort((R, L) => R.overflows[1] - L.overflows[1])[0]) == null ? void 0 : ie.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var H;
              const R = (H = N.filter((L) => {
                if (S) {
                  const de = Vt(L.placement);
                  return de === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  de === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((de) => de > 0).reduce((de, G) => de + G, 0)]).sort((L, de) => L[1] - de[1])[0]) == null ? void 0 : H[0];
              R && (V = R);
              break;
            }
            case "initialPlacement":
              V = s;
              break;
          }
        if (n !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Yc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zc(e) {
  return WE.some((t) => e[t] >= 0);
}
const oC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r,
        platform: a
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = nr(e, t);
      switch (n) {
        case "referenceHidden": {
          const i = await a.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), s = Yc(i, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Zc(s)
            }
          };
        }
        case "escaped": {
          const i = await a.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), s = Yc(i, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Zc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wg = /* @__PURE__ */ new Set(["left", "top"]);
async function iC(e, t) {
  const {
    placement: r,
    platform: a,
    elements: n
  } = e, o = await (a.isRTL == null ? void 0 : a.isRTL(n.floating)), i = or(r), s = Ra(r), l = Vt(r) === "y", d = Wg.has(i) ? -1 : 1, c = o && l ? -1 : 1, f = nr(t, e);
  let {
    mainAxis: y,
    crossAxis: p,
    alignmentAxis: k
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof k == "number" && (p = s === "end" ? k * -1 : k), l ? {
    x: p * c,
    y: y * d
  } : {
    x: y * d,
    y: p * c
  };
}
const sC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, a;
      const {
        x: n,
        y: o,
        placement: i,
        middlewareData: s
      } = t, l = await iC(t, e);
      return i === ((r = s.offset) == null ? void 0 : r.placement) && (a = s.arrow) != null && a.alignmentOffset ? {} : {
        x: n + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, lC = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: a,
        placement: n,
        platform: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (b) => {
            let {
              x: v,
              y: _
            } = b;
            return {
              x: v,
              y: _
            };
          }
        },
        ...d
      } = nr(e, t), c = {
        x: r,
        y: a
      }, f = await o.detectOverflow(t, d), y = Vt(or(n)), p = Nl(y);
      let k = c[p], h = c[y];
      if (i) {
        const b = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", _ = k + f[b], x = k - f[v];
        k = Zs(_, k, x);
      }
      if (s) {
        const b = y === "y" ? "top" : "left", v = y === "y" ? "bottom" : "right", _ = h + f[b], x = h - f[v];
        h = Zs(_, h, x);
      }
      const m = l.fn({
        ...t,
        [p]: k,
        [y]: h
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - a,
          enabled: {
            [p]: i,
            [y]: s
          }
        }
      };
    }
  };
}, uC = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: a,
        placement: n,
        rects: o,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = nr(e, t), c = {
        x: r,
        y: a
      }, f = Vt(n), y = Nl(f);
      let p = c[y], k = c[f];
      const h = nr(s, t), m = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const _ = y === "y" ? "height" : "width", x = o.reference[y] - o.floating[_] + m.mainAxis, $ = o.reference[y] + o.reference[_] - m.mainAxis;
        p < x ? p = x : p > $ && (p = $);
      }
      if (d) {
        var b, v;
        const _ = y === "y" ? "width" : "height", x = Wg.has(or(n)), $ = o.reference[f] - o.floating[_] + (x && ((b = i.offset) == null ? void 0 : b[f]) || 0) + (x ? 0 : m.crossAxis), S = o.reference[f] + o.reference[_] + (x ? 0 : ((v = i.offset) == null ? void 0 : v[f]) || 0) - (x ? m.crossAxis : 0);
        k < $ ? k = $ : k > S && (k = S);
      }
      return {
        [y]: p,
        [f]: k
      };
    }
  };
}, dC = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, a;
      const {
        placement: n,
        rects: o,
        platform: i,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...d
      } = nr(e, t), c = await i.detectOverflow(t, d), f = or(n), y = Ra(n), p = Vt(n) === "y", {
        width: k,
        height: h
      } = o.floating;
      let m, b;
      f === "top" || f === "bottom" ? (m = f, b = y === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (b = f, m = y === "end" ? "top" : "bottom");
      const v = h - c.top - c.bottom, _ = k - c.left - c.right, x = _r(h - c[m], v), $ = _r(k - c[b], _), S = !t.middlewareData.shift;
      let q = x, E = $;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (E = _), (a = t.middlewareData.shift) != null && a.enabled.y && (q = v), S && !y) {
        const N = yt(c.left, 0), ee = yt(c.right, 0), ie = yt(c.top, 0), H = yt(c.bottom, 0);
        p ? E = k - 2 * (N !== 0 || ee !== 0 ? N + ee : yt(c.left, c.right)) : q = h - 2 * (ie !== 0 || H !== 0 ? ie + H : yt(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: q
      });
      const D = await i.getDimensions(s.floating);
      return k !== D.width || h !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ri() {
  return typeof window < "u";
}
function Hr(e) {
  return Ll(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ht(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zt(e) {
  var t;
  return (t = (Ll(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ll(e) {
  return ri() ? e instanceof Node || e instanceof ht(e).Node : !1;
}
function Et(e) {
  return ri() ? e instanceof Element || e instanceof ht(e).Element : !1;
}
function ur(e) {
  return ri() ? e instanceof HTMLElement || e instanceof ht(e).HTMLElement : !1;
}
function Jc(e) {
  return !ri() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ht(e).ShadowRoot;
}
function An(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: a,
    display: n
  } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && n !== "inline" && n !== "contents";
}
function cC(e) {
  return /^(table|td|th)$/.test(Hr(e));
}
function ai(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const fC = /transform|translate|scale|rotate|perspective|filter/, pC = /paint|layout|strict|content/, Dr = (e) => !!e && e !== "none";
let hs;
function Wl(e) {
  const t = Et(e) ? Ct(e) : e;
  return Dr(t.transform) || Dr(t.translate) || Dr(t.scale) || Dr(t.rotate) || Dr(t.perspective) || !Kl() && (Dr(t.backdropFilter) || Dr(t.filter)) || fC.test(t.willChange || "") || pC.test(t.contain || "");
}
function yC(e) {
  let t = Sr(e);
  for (; ur(t) && !Aa(t); ) {
    if (Wl(t))
      return t;
    if (ai(t))
      return null;
    t = Sr(t);
  }
  return null;
}
function Kl() {
  return hs == null && (hs = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), hs;
}
function Aa(e) {
  return /^(html|body|#document)$/.test(Hr(e));
}
function Ct(e) {
  return ht(e).getComputedStyle(e);
}
function ni(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Sr(e) {
  if (Hr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jc(e) && e.host || // Fallback.
    Zt(e)
  );
  return Jc(t) ? t.host : t;
}
function Kg(e) {
  const t = Sr(e);
  return Aa(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ur(t) && An(t) ? t : Kg(t);
}
function cn(e, t, r) {
  var a;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const n = Kg(e), o = n === ((a = e.ownerDocument) == null ? void 0 : a.body), i = ht(n);
  if (o) {
    const s = Qs(i);
    return t.concat(i, i.visualViewport || [], An(n) ? n : [], s && r ? cn(s) : []);
  } else
    return t.concat(n, cn(n, [], r));
}
function Qs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hg(e) {
  const t = Ct(e);
  let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const n = ur(e), o = n ? e.offsetWidth : r, i = n ? e.offsetHeight : a, s = _o(r) !== o || _o(a) !== i;
  return s && (r = o, a = i), {
    width: r,
    height: a,
    $: s
  };
}
function Hl(e) {
  return Et(e) ? e : e.contextElement;
}
function ga(e) {
  const t = Hl(e);
  if (!ur(t))
    return Wt(1);
  const r = t.getBoundingClientRect(), {
    width: a,
    height: n,
    $: o
  } = Hg(t);
  let i = (o ? _o(r.width) : r.width) / a, s = (o ? _o(r.height) : r.height) / n;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const mC = /* @__PURE__ */ Wt(0);
function Gg(e) {
  const t = ht(e);
  return !Kl() || !t.visualViewport ? mC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hC(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== ht(e) ? !1 : t;
}
function Nr(e, t, r, a) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), o = Hl(e);
  let i = Wt(1);
  t && (a ? Et(a) && (i = ga(a)) : i = ga(e));
  const s = hC(o, r, a) ? Gg(o) : Wt(0);
  let l = (n.left + s.x) / i.x, d = (n.top + s.y) / i.y, c = n.width / i.x, f = n.height / i.y;
  if (o) {
    const y = ht(o), p = a && Et(a) ? ht(a) : a;
    let k = y, h = Qs(k);
    for (; h && a && p !== k; ) {
      const m = ga(h), b = h.getBoundingClientRect(), v = Ct(h), _ = b.left + (h.clientLeft + parseFloat(v.paddingLeft)) * m.x, x = b.top + (h.clientTop + parseFloat(v.paddingTop)) * m.y;
      l *= m.x, d *= m.y, c *= m.x, f *= m.y, l += _, d += x, k = ht(h), h = Qs(k);
    }
  }
  return qo({
    width: c,
    height: f,
    x: l,
    y: d
  });
}
function oi(e, t) {
  const r = ni(e).scrollLeft;
  return t ? t.left + r : Nr(Zt(e)).left + r;
}
function Yg(e, t) {
  const r = e.getBoundingClientRect(), a = r.left + t.scrollLeft - oi(e, r), n = r.top + t.scrollTop;
  return {
    x: a,
    y: n
  };
}
function vC(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: a,
    strategy: n
  } = e;
  const o = n === "fixed", i = Zt(a), s = t ? ai(t.floating) : !1;
  if (a === i || s && o)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Wt(1);
  const c = Wt(0), f = ur(a);
  if ((f || !f && !o) && ((Hr(a) !== "body" || An(i)) && (l = ni(a)), f)) {
    const p = Nr(a);
    d = ga(a), c.x = p.x + a.clientLeft, c.y = p.y + a.clientTop;
  }
  const y = i && !f && !o ? Yg(i, l) : Wt(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - l.scrollLeft * d.x + c.x + y.x,
    y: r.y * d.y - l.scrollTop * d.y + c.y + y.y
  };
}
function gC(e) {
  return Array.from(e.getClientRects());
}
function bC(e) {
  const t = Zt(e), r = ni(e), a = e.ownerDocument.body, n = yt(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), o = yt(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let i = -r.scrollLeft + oi(e);
  const s = -r.scrollTop;
  return Ct(a).direction === "rtl" && (i += yt(t.clientWidth, a.clientWidth) - n), {
    width: n,
    height: o,
    x: i,
    y: s
  };
}
const Qc = 25;
function kC(e, t) {
  const r = ht(e), a = Zt(e), n = r.visualViewport;
  let o = a.clientWidth, i = a.clientHeight, s = 0, l = 0;
  if (n) {
    o = n.width, i = n.height;
    const c = Kl();
    (!c || c && t === "fixed") && (s = n.offsetLeft, l = n.offsetTop);
  }
  const d = oi(a);
  if (d <= 0) {
    const c = a.ownerDocument, f = c.body, y = getComputedStyle(f), p = c.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, k = Math.abs(a.clientWidth - f.clientWidth - p);
    k <= Qc && (o -= k);
  } else d <= Qc && (o += d);
  return {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function wC(e, t) {
  const r = Nr(e, !0, t === "fixed"), a = r.top + e.clientTop, n = r.left + e.clientLeft, o = ur(e) ? ga(e) : Wt(1), i = e.clientWidth * o.x, s = e.clientHeight * o.y, l = n * o.x, d = a * o.y;
  return {
    width: i,
    height: s,
    x: l,
    y: d
  };
}
function Xc(e, t, r) {
  let a;
  if (t === "viewport")
    a = kC(e, r);
  else if (t === "document")
    a = bC(Zt(e));
  else if (Et(t))
    a = wC(t, r);
  else {
    const n = Gg(e);
    a = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    };
  }
  return qo(a);
}
function Zg(e, t) {
  const r = Sr(e);
  return r === t || !Et(r) || Aa(r) ? !1 : Ct(r).position === "fixed" || Zg(r, t);
}
function xC(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let a = cn(e, [], !1).filter((s) => Et(s) && Hr(s) !== "body"), n = null;
  const o = Ct(e).position === "fixed";
  let i = o ? Sr(e) : e;
  for (; Et(i) && !Aa(i); ) {
    const s = Ct(i), l = Wl(i);
    !l && s.position === "fixed" && (n = null), (o ? !l && !n : !l && s.position === "static" && n && (n.position === "absolute" || n.position === "fixed") || An(i) && !l && Zg(e, i)) ? a = a.filter((d) => d !== i) : n = s, i = Sr(i);
  }
  return t.set(e, a), a;
}
function zC(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: a,
    strategy: n
  } = e;
  const o = [...r === "clippingAncestors" ? ai(t) ? [] : xC(t, this._c) : [].concat(r), a], i = Xc(t, o[0], n);
  let s = i.top, l = i.right, d = i.bottom, c = i.left;
  for (let f = 1; f < o.length; f++) {
    const y = Xc(t, o[f], n);
    s = yt(y.top, s), l = _r(y.right, l), d = _r(y.bottom, d), c = yt(y.left, c);
  }
  return {
    width: l - c,
    height: d - s,
    x: c,
    y: s
  };
}
function _C(e) {
  const {
    width: t,
    height: r
  } = Hg(e);
  return {
    width: t,
    height: r
  };
}
function SC(e, t, r) {
  const a = ur(t), n = Zt(t), o = r === "fixed", i = Nr(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Wt(0);
  function d() {
    l.x = oi(n);
  }
  if (a || !a && !o)
    if ((Hr(t) !== "body" || An(n)) && (s = ni(t)), a) {
      const p = Nr(t, !0, o, t);
      l.x = p.x + t.clientLeft, l.y = p.y + t.clientTop;
    } else n && d();
  o && !a && n && d();
  const c = n && !a && !o ? Yg(n, s) : Wt(0), f = i.left + s.scrollLeft - l.x - c.x, y = i.top + s.scrollTop - l.y - c.y;
  return {
    x: f,
    y,
    width: i.width,
    height: i.height
  };
}
function vs(e) {
  return Ct(e).position === "static";
}
function ef(e, t) {
  if (!ur(e) || Ct(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Zt(e) === r && (r = r.ownerDocument.body), r;
}
function Jg(e, t) {
  const r = ht(e);
  if (ai(e))
    return r;
  if (!ur(e)) {
    let n = Sr(e);
    for (; n && !Aa(n); ) {
      if (Et(n) && !vs(n))
        return n;
      n = Sr(n);
    }
    return r;
  }
  let a = ef(e, t);
  for (; a && cC(a) && vs(a); )
    a = ef(a, t);
  return a && Aa(a) && vs(a) && !Wl(a) ? r : a || yC(e) || r;
}
const qC = async function(e) {
  const t = this.getOffsetParent || Jg, r = this.getDimensions, a = await r(e.floating);
  return {
    reference: SC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function OC(e) {
  return Ct(e).direction === "rtl";
}
const AC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vC,
  getDocumentElement: Zt,
  getClippingRect: zC,
  getOffsetParent: Jg,
  getElementRects: qC,
  getClientRects: gC,
  getDimensions: _C,
  getScale: ga,
  isElement: Et,
  isRTL: OC
};
function Qg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function EC(e, t) {
  let r = null, a;
  const n = Zt(e);
  function o() {
    var s;
    clearTimeout(a), (s = r) == null || s.disconnect(), r = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), o();
    const d = e.getBoundingClientRect(), {
      left: c,
      top: f,
      width: y,
      height: p
    } = d;
    if (s || t(), !y || !p)
      return;
    const k = Wn(f), h = Wn(n.clientWidth - (c + y)), m = Wn(n.clientHeight - (f + p)), b = Wn(c), v = {
      rootMargin: -k + "px " + -h + "px " + -m + "px " + -b + "px",
      threshold: yt(0, _r(1, l)) || 1
    };
    let _ = !0;
    function x($) {
      const S = $[0].intersectionRatio;
      if (S !== l) {
        if (!_)
          return i();
        S ? i(!1, S) : a = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Qg(d, e.getBoundingClientRect()) && i(), _ = !1;
    }
    try {
      r = new IntersectionObserver(x, {
        ...v,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(x, v);
    }
    r.observe(e);
  }
  return i(!0), o;
}
function CC(e, t, r, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: o = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = a, d = Hl(e), c = n || o ? [...d ? cn(d) : [], ...t ? cn(t) : []] : [];
  c.forEach((b) => {
    n && b.addEventListener("scroll", r, {
      passive: !0
    }), o && b.addEventListener("resize", r);
  });
  const f = d && s ? EC(d, r) : null;
  let y = -1, p = null;
  i && (p = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === d && p && t && (p.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var _;
      (_ = p) == null || _.observe(t);
    })), r();
  }), d && !l && p.observe(d), t && p.observe(t));
  let k, h = l ? Nr(e) : null;
  l && m();
  function m() {
    const b = Nr(e);
    h && !Qg(h, b) && r(), h = b, k = requestAnimationFrame(m);
  }
  return r(), () => {
    var b;
    c.forEach((v) => {
      n && v.removeEventListener("scroll", r), o && v.removeEventListener("resize", r);
    }), f?.(), (b = p) == null || b.disconnect(), p = null, l && cancelAnimationFrame(k);
  };
}
const $C = sC, BC = lC, tf = nC, DC = dC, MC = oC, PC = aC, jC = uC, FC = (e, t, r) => {
  const a = /* @__PURE__ */ new Map(), n = {
    platform: AC,
    ...r
  }, o = {
    ...n.platform,
    _c: a
  };
  return rC(e, t, {
    ...n,
    platform: o
  });
};
function IC(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Xs(e) {
  if (IC(e)) {
    const t = e.$el;
    return Ll(t) && Hr(t) === "#comment" ? null : t;
  }
  return e;
}
function ca(e) {
  return typeof e == "function" ? e() : u(e);
}
function TC(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const r = Xs(ca(e.element));
      return r == null ? {} : PC({
        element: r,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Xg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rf(e, t) {
  const r = Xg(e);
  return Math.round(t * r) / r;
}
function RC(e, t, r) {
  r === void 0 && (r = {});
  const a = r.whileElementsMounted, n = j(() => {
    var q;
    return (q = ca(r.open)) != null ? q : !0;
  }), o = j(() => ca(r.middleware)), i = j(() => {
    var q;
    return (q = ca(r.placement)) != null ? q : "bottom";
  }), s = j(() => {
    var q;
    return (q = ca(r.strategy)) != null ? q : "absolute";
  }), l = j(() => {
    var q;
    return (q = ca(r.transform)) != null ? q : !0;
  }), d = j(() => Xs(e.value)), c = j(() => Xs(t.value)), f = F(0), y = F(0), p = F(s.value), k = F(i.value), h = to({}), m = F(!1), b = j(() => {
    const q = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return q;
    const E = rf(c.value, f.value), D = rf(c.value, y.value);
    return l.value ? {
      ...q,
      transform: "translate(" + E + "px, " + D + "px)",
      ...Xg(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: E + "px",
      top: D + "px"
    };
  });
  let v;
  function _() {
    if (d.value == null || c.value == null)
      return;
    const q = n.value;
    FC(d.value, c.value, {
      middleware: o.value,
      placement: i.value,
      strategy: s.value
    }).then((E) => {
      f.value = E.x, y.value = E.y, p.value = E.strategy, k.value = E.placement, h.value = E.middlewareData, m.value = q !== !1;
    });
  }
  function x() {
    typeof v == "function" && (v(), v = void 0);
  }
  function $() {
    if (x(), a === void 0) {
      _();
      return;
    }
    if (d.value != null && c.value != null) {
      v = a(d.value, c.value, _);
      return;
    }
  }
  function S() {
    n.value || (m.value = !1);
  }
  return pe([o, i, s, n], _, {
    flush: "sync"
  }), pe([d, c], $, {
    flush: "sync"
  }), pe(n, S, {
    flush: "sync"
  }), If() && Tf(x), {
    x: na(f),
    y: na(y),
    strategy: na(p),
    placement: na(k),
    middlewareData: na(h),
    isPositioned: na(m),
    floatingStyles: b,
    update: _
  };
}
const NC = ["dir"], eb = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  hideShiftedArrow: !0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [qF, VC] = /* @__PURE__ */ Ee("PopperContent");
var UC = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Vf({
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...eb }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Ug(), { forwardRef: o, currentElement: i } = ue(), s = Or(j(() => r.dir)), l = F(), d = F(), { width: c, height: f } = sA(d), y = j(() => r.side + (r.align !== "center" ? `-${r.align}` : "")), p = j(() => typeof r.collisionPadding == "number" ? r.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...r.collisionPadding
    }), k = j(() => Array.isArray(r.collisionBoundary) ? r.collisionBoundary : [r.collisionBoundary]), h = j(() => ({
      padding: p.value,
      boundary: k.value.filter(UE),
      altBoundary: k.value.length > 0
    })), m = j(() => ({
      mainAxis: r.sideFlip,
      crossAxis: r.alignFlip
    })), b = j(() => [
      $C({
        mainAxis: r.sideOffset + f.value,
        alignmentAxis: r.alignOffset
      }),
      r.prioritizePosition && r.avoidCollisions && tf({
        ...h.value,
        ...m.value
      }),
      r.avoidCollisions && BC({
        mainAxis: !0,
        crossAxis: !!r.prioritizePosition,
        limiter: r.sticky === "partial" ? jC() : void 0,
        ...h.value
      }),
      !r.prioritizePosition && r.avoidCollisions && tf({
        ...h.value,
        ...m.value
      }),
      DC({
        ...h.value,
        apply: ({ elements: H, rects: X, availableWidth: P, availableHeight: V }) => {
          const { width: R, height: L } = X.reference, de = H.floating.style;
          de.setProperty("--reka-popper-available-width", `${P}px`), de.setProperty("--reka-popper-available-height", `${V}px`), de.setProperty("--reka-popper-anchor-width", `${R}px`), de.setProperty("--reka-popper-anchor-height", `${L}px`);
        }
      }),
      d.value && TC({
        element: d.value,
        padding: r.arrowPadding
      }),
      LE({
        arrowWidth: c.value,
        arrowHeight: f.value,
        dir: s.value
      }),
      r.hideWhenDetached && MC({
        strategy: "referenceHidden",
        ...h.value
      })
    ]), v = j(() => r.reference ?? n.anchor.value), { floatingStyles: _, placement: x, isPositioned: $, middlewareData: S } = RC(v, l, {
      strategy: r.positionStrategy,
      placement: y,
      whileElementsMounted: (...H) => CC(...H, {
        layoutShift: !r.disableUpdateOnLayoutShift,
        animationFrame: r.updatePositionStrategy === "always"
      }),
      middleware: b
    }), q = j(() => Ys(x.value)[0]), E = j(() => Ys(x.value)[1]);
    Nf(() => {
      $.value && a("placed");
    });
    const D = j(() => {
      const H = S.value.arrow?.centerOffset !== 0;
      return r.hideShiftedArrow && H;
    }), N = F("");
    ut(() => {
      i.value && (N.value = window.getComputedStyle(i.value).zIndex);
    });
    const ee = j(() => S.value.arrow?.x ?? 0), ie = j(() => S.value.arrow?.y ?? 0);
    return VC({
      placedSide: q,
      onArrowChange: (H) => d.value = H,
      arrowX: ee,
      arrowY: ie,
      shouldHideArrow: D
    }), (H, X) => (w(), Z("div", {
      ref_key: "floatingRef",
      ref: l,
      "data-reka-popper-content-wrapper": "",
      dir: u(s),
      style: Ut({
        ...u(_),
        transform: u($) ? u(_).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: N.value,
        "--reka-popper-transform-origin": [u(S).transformOrigin?.x, u(S).transformOrigin?.y].join(" "),
        ...u(S).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [r.memoDependencies ? ll([
      r.asChild,
      r.as,
      q.value,
      E.value,
      u($),
      ...Object.values(H.$attrs),
      ...r.memoDependencies
    ], () => (w(), z(u(oe), I({
      key: 0,
      ref: u(o)
    }, H.$attrs, {
      "as-child": r.asChild,
      as: r.as,
      "data-side": q.value,
      "data-align": E.value,
      style: { animation: u($) ? void 0 : "none" }
    }), {
      default: g(() => [C(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])), X, 0) : (w(), z(u(oe), I({
      key: 1,
      ref: u(o)
    }, H.$attrs, {
      "as-child": r.asChild,
      as: r.as,
      "data-side": q.value,
      "data-align": E.value,
      dir: u(s),
      style: { animation: u($) ? void 0 : "none" }
    }), {
      default: g(() => [C(H.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "dir",
      "style"
    ]))], 12, NC));
  }
}), ii = UC;
const [Gr, LC] = /* @__PURE__ */ Ee("ComboboxRoot");
var WC = /* @__PURE__ */ O({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1,
      default: !0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r, { primitiveElement: o, currentElement: i } = Ht(), { multiple: s, disabled: l, ignoreFilter: d, resetSearchTermOnSelect: c, openOnFocus: f, openOnClick: y, dir: p, resetModelValueOnClear: k, highlightOnHover: h } = Xe(a), m = Or(p), b = /* @__PURE__ */ et(a, "modelValue", n, {
      defaultValue: a.defaultValue ?? (s.value ? [] : void 0),
      passive: a.modelValue === void 0,
      deep: !0
    }), v = /* @__PURE__ */ et(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    });
    async function _(V) {
      v.value = V, H.value = "", V ? (await we(), o.value?.highlightSelected(), $.value = !0, q.value?.focus()) : ($.value = !1, setTimeout(() => {
        !V && a.resetSearchTermOnBlur && x.trigger();
      }, 1));
    }
    const x = /* @__PURE__ */ Yn(), $ = F(!1), S = F(!1), q = F(), E = F(), D = j(() => o.value?.highlightedElement ?? void 0), N = F(/* @__PURE__ */ new Map()), ee = F(/* @__PURE__ */ new Map()), { contains: ie } = eA({ sensitivity: "base" }), H = F(""), X = j((V) => {
      if (!H.value || a.ignoreFilter || S.value) return {
        count: N.value.size,
        items: V?.items ?? /* @__PURE__ */ new Map(),
        groups: V?.groups ?? new Set(ee.value.keys())
      };
      let R = 0;
      const L = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set();
      for (const [G, _e] of N.value) {
        const Se = ie(_e, H.value);
        L.set(G, Se ? 1 : 0), Se && R++;
      }
      for (const [G, _e] of ee.value) for (const Se of _e) if (L.get(Se) > 0) {
        de.add(G);
        break;
      }
      return {
        count: R,
        items: L,
        groups: de
      };
    }), P = ir();
    return xe(() => {
      P?.exposed && (P.exposed.highlightItem = o.value?.highlightItem, P.exposed.highlightFirstItem = o.value?.highlightFirstItem, P.exposed.highlightSelected = o.value?.highlightSelected);
    }), t({
      filtered: X,
      highlightedElement: D,
      highlightItem: o.value?.highlightItem,
      highlightFirstItem: o.value?.highlightFirstItem,
      highlightSelected: o.value?.highlightSelected
    }), LC({
      modelValue: b,
      multiple: s,
      disabled: l,
      open: v,
      onOpenChange: _,
      contentId: "",
      isUserInputted: $,
      isVirtual: S,
      inputElement: q,
      highlightedElement: D,
      onInputElementChange: (V) => q.value = V,
      triggerElement: E,
      onTriggerElementChange: (V) => E.value = V,
      parentElement: i,
      resetSearchTermOnSelect: c,
      onResetSearchTerm: x.on,
      allItems: N,
      allGroups: ee,
      filterSearch: H,
      filterState: X,
      ignoreFilter: d,
      openOnFocus: f,
      openOnClick: y,
      resetModelValueOnClear: k
    }), (V, R) => (w(), z(u(ei), null, {
      default: g(() => [A(u(SE), I({
        ref_key: "primitiveElement",
        ref: o
      }, V.$attrs, {
        modelValue: u(b),
        "onUpdate:modelValue": R[0] || (R[0] = (L) => lt(b) ? b.value = L : null),
        style: { pointerEvents: u(v) ? "auto" : void 0 },
        as: V.as,
        "as-child": V.asChild,
        dir: u(m),
        multiple: u(s),
        name: V.name,
        required: V.required,
        disabled: u(l),
        "highlight-on-hover": u(h),
        by: a.by,
        onHighlight: R[1] || (R[1] = (L) => n("highlight", L))
      }), {
        default: g(() => [C(V.$slots, "default", {
          open: u(v),
          modelValue: u(b)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), KC = WC, HC = /* @__PURE__ */ O({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = ue();
    return (r, a) => (w(), z(u(ti), {
      "as-child": "",
      reference: r.reference
    }, {
      default: g(() => [A(u(oe), I({
        ref: u(t),
        "as-child": r.asChild,
        as: r.as
      }, r.$attrs), {
        default: g(() => [C(r.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), GC = HC;
const [OF, YC] = /* @__PURE__ */ Ee("ComboboxContent");
var ZC = /* @__PURE__ */ O({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, { position: n } = Xe(r), o = Gr(), i = j(() => o.ignoreFilter.value ? o.allItems.value.size === 0 : o.filterState.value.count === 0), { forwardRef: s, currentElement: l } = ue();
    zn(r.bodyLock), Zo(), Sn(o.parentElement);
    const d = j(() => r.position === "popper" ? r : {}), c = Fe(d.value), f = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    YC({ position: n });
    const y = F(!1);
    xe(() => {
      o.inputElement.value && (y.value = l.value.contains(o.inputElement.value), y.value && o.inputElement.value.focus());
    }), _t(() => {
      const k = Ke();
      y.value && (!k || k === document.body) && o.triggerElement.value?.focus();
    });
    function p(k) {
      if (o.parentElement.value?.contains(k)) return !0;
      const h = (k instanceof Element ? k.closest("label") : null)?.control;
      return !!h && !!o.parentElement.value?.contains(h);
    }
    return (k, h) => (w(), z(u(OE), { "as-child": "" }, {
      default: g(() => [A(u(On), {
        "as-child": "",
        onMountAutoFocus: h[5] || (h[5] = Ve(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: h[6] || (h[6] = Ve(() => {
        }, ["prevent"]))
      }, {
        default: g(() => [A(u(qn), {
          "as-child": "",
          "disable-outside-pointer-events": k.disableOutsidePointerEvents,
          onDismiss: h[0] || (h[0] = (m) => u(o).onOpenChange(!1)),
          onFocusOutside: h[1] || (h[1] = (m) => {
            p(m.target) && m.preventDefault(), a("focusOutside", m);
          }),
          onInteractOutside: h[2] || (h[2] = (m) => a("interactOutside", m)),
          onEscapeKeyDown: h[3] || (h[3] = (m) => a("escapeKeyDown", m)),
          onPointerDownOutside: h[4] || (h[4] = (m) => {
            p(m.target) && m.preventDefault(), a("pointerDownOutside", m);
          })
        }, {
          default: g(() => [(w(), z(Ur(u(n) === "popper" ? u(ii) : u(oe)), I({
            ...k.$attrs,
            ...u(c)
          }, {
            id: u(o).contentId,
            ref: u(s),
            "memo-dependencies": u(n) === "popper" ? [u(o).filterSearch.value, u(o).filterState.value] : void 0,
            "data-state": u(o).open.value ? "open" : "closed",
            "data-empty": i.value ? "" : void 0,
            style: {
              display: r.hideWhenEmpty && i.value ? "none" : "flex",
              flexDirection: "column",
              outline: "none",
              ...u(n) === "popper" ? f : {}
            }
          }), {
            default: g(() => [C(k.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "memo-dependencies",
            "data-state",
            "data-empty",
            "style"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), JC = ZC, QC = /* @__PURE__ */ O({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const r = Ce(e, t), { forwardRef: a } = ue(), n = Gr();
    return n.contentId ||= tt(void 0, "reka-combobox-content"), (o, i) => (w(), z(u(Kr), { present: o.forceMount || u(n).open.value }, {
      default: g(() => [A(JC, I({
        ...u(r),
        ...o.$attrs
      }, { ref: u(a) }), {
        default: g(() => [C(o.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), af = QC, XC = /* @__PURE__ */ O({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = Gr(), a = j(() => r.ignoreFilter.value ? r.allItems.value.size === 0 : r.filterState.value.count === 0);
    return (n, o) => a.value ? (w(), z(u(oe), Be(I({ key: 0 }, t)), {
      default: g(() => [C(n.$slots, "default", {}, () => [o[0] || (o[0] = J("No options"))])]),
      _: 3
    }, 16)) : re("v-if", !0);
  }
}), e$ = XC;
const [tb, t$] = /* @__PURE__ */ Ee("ComboboxGroup");
var r$ = /* @__PURE__ */ O({
  __name: "ComboboxGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = tt(void 0, "reka-combobox-group"), a = Gr(), n = j(() => a.ignoreFilter.value ? !0 : a.filterSearch.value ? a.filterState.value.groups.has(r) : !0), o = t$({
      id: r,
      labelId: ""
    });
    return xe(() => {
      a.allGroups.value.has(r) || a.allGroups.value.set(r, /* @__PURE__ */ new Set());
    }), _t(() => {
      a.allGroups.value.delete(r);
    }), (i, s) => (w(), z(u(BE), I({
      id: u(r),
      "aria-labelledby": u(o).labelId
    }, t, { hidden: n.value ? void 0 : !0 }), {
      default: g(() => [C(i.$slots, "default")]),
      _: 3
    }, 16, [
      "id",
      "aria-labelledby",
      "hidden"
    ]));
  }
}), a$ = r$, n$ = /* @__PURE__ */ O({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Gr(), o = Xo(), { primitiveElement: i, currentElement: s } = Ht(), l = /* @__PURE__ */ et(r, "modelValue", a, { passive: r.modelValue === void 0 });
    xe(() => {
      s.value && n.onInputElementChange(s.value);
    });
    const { isComposing: d, shouldDeferInput: c, handleCompositionStart: f, handleCompositionUpdate: y, handleCompositionEnd: p } = ag(($) => {
      const S = $.target;
      S && h(S.value);
    });
    function k($) {
      d.value || ($.preventDefault(), n.open.value || n.onOpenChange(!0));
    }
    function h($) {
      n.open.value ? n.filterSearch.value = $ : (n.onOpenChange(!0), we(() => {
        $ && (n.filterSearch.value = $, o.highlightFirstItem());
      }));
    }
    function m($) {
      c.value || h($.target.value);
    }
    function b() {
      n.openOnFocus.value && !n.open.value && n.onOpenChange(!0);
    }
    function v($) {
      if (!n.open.value) return;
      const S = $.relatedTarget;
      if (!S) return;
      const q = n.parentElement.value?.contains(S), E = document.getElementById(n.contentId)?.contains(S);
      !q && !E && requestAnimationFrame(() => {
        if (!n.open.value) return;
        const D = document.activeElement;
        !n.parentElement.value?.contains(D) && !document.getElementById(n.contentId)?.contains(D) && n.onOpenChange(!1);
      });
    }
    function _() {
      n.openOnClick.value && !n.open.value && n.onOpenChange(!0);
    }
    function x() {
      const $ = n.modelValue.value;
      r.displayValue ? l.value = r.displayValue($) : !n.multiple.value && $ && !Array.isArray($) && typeof $ != "object" ? l.value = $.toString() : l.value = "", we(() => {
        l.value = l.value;
      });
    }
    return n.onResetSearchTerm(() => {
      x();
    }), pe(n.modelValue, async () => {
      !n.isUserInputted.value && n.resetSearchTermOnSelect.value && x();
    }, {
      immediate: !0,
      deep: !0
    }), pe(n.filterState, ($, S) => {
      !n.isVirtual.value && S.count === 0 && o.highlightFirstItem();
    }), ($, S) => (w(), z(u(EE), {
      ref_key: "primitiveElement",
      ref: i,
      modelValue: u(l),
      "onUpdate:modelValue": S[0] || (S[0] = (q) => lt(l) ? l.value = q : null),
      as: $.as,
      "as-child": $.asChild,
      "auto-focus": $.autoFocus,
      disabled: $.disabled,
      "aria-expanded": u(n).open.value,
      "aria-controls": u(n).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: _,
      onInput: m,
      onKeydown: zt(k, ["down", "up"]),
      onFocus: b,
      onBlur: v,
      onCompositionstart: u(f),
      onCompositionupdate: u(y),
      onCompositionend: u(p)
    }, {
      default: g(() => [C($.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onCompositionstart",
      "onCompositionupdate",
      "onCompositionend"
    ]));
  }
}), o$ = n$, i$ = /* @__PURE__ */ O({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = tt(void 0, "reka-combobox-item"), o = Gr(), i = tb(null), { primitiveElement: s, currentElement: l } = Ht();
    if (r.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const d = j(() => {
      if (o.isVirtual.value || o.ignoreFilter.value || !o.filterSearch.value) return !0;
      {
        const c = o.filterState.value.items.get(n);
        return c === void 0 ? !0 : c > 0;
      }
    });
    return xe(() => {
      o.allItems.value.set(n, r.textValue || l.value.textContent || l.value.innerText);
      const c = i?.id;
      c && (o.allGroups.value.has(c) ? o.allGroups.value.get(c)?.add(n) : o.allGroups.value.set(c, /* @__PURE__ */ new Set([n])));
    }), _t(() => {
      o.allItems.value.delete(n);
    }), (c, f) => d.value ? ll([
      d.value,
      u(o).filterSearch.value,
      u(o).disabled.value,
      c.disabled,
      r.value,
      r.as,
      r.asChild,
      ...Object.values(c.$attrs)
    ], () => (w(), z(u(FE), I({ key: 0 }, r, {
      id: u(n),
      ref_key: "primitiveElement",
      ref: s,
      disabled: u(o).disabled.value || c.disabled,
      onSelect: f[0] || (f[0] = (y) => {
        a("select", y), !y.defaultPrevented && (!u(o).multiple.value && !c.disabled && !u(o).disabled.value ? (y.preventDefault(), u(o).onOpenChange(!1), u(o).modelValue.value = r.value) : u(o).multiple.value && u(o).inputElement.value?.focus());
      })
    }), {
      default: g(() => [C(c.$slots, "default", {}, () => [J(W(c.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])), f, 1) : re("v-if", !0);
  }
}), s$ = i$, l$ = /* @__PURE__ */ O({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(TE), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), u$ = l$, d$ = /* @__PURE__ */ O({
  __name: "ComboboxLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = tb({
      id: "",
      labelId: ""
    });
    return r.labelId ||= tt(void 0, "reka-combobox-group-label"), (a, n) => (w(), z(u(oe), I(t, { id: u(r).labelId }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), c$ = d$, f$ = /* @__PURE__ */ O({
  __name: "ComboboxPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), p$ = f$, y$ = /* @__PURE__ */ O({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: a } = ue(), n = Gr(), o = j(() => t.disabled || n.disabled.value || !1);
    return xe(() => {
      a.value && n.onTriggerElementChange(a.value);
    }), (i, s) => (w(), z(u(oe), I(t, {
      ref: u(r),
      type: i.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": u(n).open.value,
      "aria-controls": u(n).contentId,
      "data-state": u(n).open.value ? "open" : "closed",
      disabled: o.value,
      "data-disabled": o.value ? "" : void 0,
      "aria-disabled": o.value ?? void 0,
      onClick: s[0] || (s[0] = (l) => u(n).onOpenChange(!u(n).open.value))
    }), {
      default: g(() => [C(i.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), m$ = y$;
function h$(e) {
  const t = ja({ nonce: F() });
  return j(() => e?.value || t.nonce?.value);
}
const [rb, v$] = /* @__PURE__ */ Ee("AvatarRoot");
var g$ = /* @__PURE__ */ O({
  __name: "AvatarRoot",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return ue(), v$({ imageLoadingStatus: F("idle") }), (t, r) => (w(), z(u(oe), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: g(() => [C(t.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), b$ = g$, k$ = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {
      type: Number,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, r = rb();
    ue();
    const a = F(t.delayMs === void 0);
    return ut((n) => {
      if (t.delayMs && vt) {
        const o = window.setTimeout(() => {
          a.value = !0;
        }, t.delayMs);
        n(() => {
          window.clearTimeout(o);
        });
      }
    }), (n, o) => a.value && u(r).imageLoadingStatus.value !== "loaded" ? (w(), z(u(oe), {
      key: 0,
      "as-child": n.asChild,
      as: n.as
    }, {
      default: g(() => [C(n.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"])) : re("v-if", !0);
  }
}), w$ = k$;
function nf(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function x$(e, { referrerPolicy: t, crossOrigin: r } = {}) {
  const a = F(!1), n = F(null), o = j(() => a.value ? (!n.value && vt && (n.value = new window.Image()), n.value) : null), i = F(nf(o.value, e.value)), s = (l) => () => {
    a.value && (i.value = l);
  };
  return xe(() => {
    a.value = !0, ut((l) => {
      const d = o.value;
      if (!d) return;
      i.value = nf(d, e.value);
      const c = s("loaded"), f = s("error");
      d.addEventListener("load", c), d.addEventListener("error", f), t?.value && (d.referrerPolicy = t.value), typeof r?.value == "string" && (d.crossOrigin = r.value), l(() => {
        d.removeEventListener("load", c), d.removeEventListener("error", f);
      });
    });
  }), _t(() => {
    a.value = !1;
  }), i;
}
var z$ = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {
      type: String,
      required: !0
    },
    referrerPolicy: {
      type: null,
      required: !1
    },
    crossOrigin: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "img"
    }
  },
  emits: ["loadingStatusChange"],
  setup(e, { emit: t }) {
    const r = e, a = t, { src: n, referrerPolicy: o, crossOrigin: i } = Xe(r);
    ue();
    const s = rb(), l = x$(n, {
      referrerPolicy: o,
      crossOrigin: i
    });
    return pe(l, (d) => {
      a("loadingStatusChange", d), d !== "idle" && (s.imageLoadingStatus.value = d);
    }, { immediate: !0 }), (d, c) => ba((w(), z(u(oe), {
      role: "img",
      "as-child": d.asChild,
      as: d.as,
      src: u(n),
      referrerpolicy: u(o),
      crossorigin: u(i)
    }, {
      default: g(() => [C(d.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "src",
      "referrerpolicy",
      "crossorigin"
    ])), [[eo, u(l) === "loaded"]]);
  }
}), _$ = z$;
function S$(e) {
  function t(o) {
    return Array.isArray(e.date.value) ? e.date.value.some((i) => zr(i, o)) : e.date.value ? zr(e.date.value, o) : !1;
  }
  const r = j(() => {
    if (Array.isArray(e.date.value)) {
      if (!e.date.value.length) return !1;
      for (const o of e.date.value)
        if (e.isDateDisabled?.(o) || e.isDateUnavailable?.(o)) return !0;
    } else {
      if (!e.date.value) return !1;
      if (e.isDateDisabled?.(e.date.value) || e.isDateUnavailable?.(e.date.value)) return !0;
    }
    return !1;
  }), a = j(() => Array.isArray(e.date.value) ? e.date.value.length > 0 : !!e.date.value), n = j(() => Array.isArray(e.date.value) ? e.date.value.length ? e.date.value.some((o) => e.isDateDisabled?.(o)) : !1 : e.date.value ? !!e.isDateDisabled?.(e.date.value) : !1);
  return {
    isDateSelected: t,
    isInvalid: r,
    hasSelectedDate: a,
    isSelectedDateDisabled: n
  };
}
function q$(e, t) {
  const r = t(e), a = r.compare(e), n = {};
  return a >= 7 && (n.day = 1), a >= va(e) && (n.month = 1), r.set({ ...n });
}
function O$(e, t) {
  const r = t(e), a = e.compare(r), n = {};
  return a >= 7 && (n.day = 35), a >= va(e) && (n.month = 13), r.set({ ...n });
}
function A$(e, t) {
  return t(e);
}
function E$(e, t) {
  return t(e);
}
function C$(e) {
  const t = XO(e.locale.value), r = j(() => {
    const b = { calendar: e.placeholder.value.calendar.identifier };
    return e.placeholder.value.calendar.identifier === "gregory" && e.placeholder.value.era === "BC" && (b.era = "short"), b;
  }), a = F(Br({
    dateObj: e.placeholder.value,
    weekStartsOn: e.weekStartsOn.value,
    locale: e.locale.value,
    fixedWeeks: e.fixedWeeks.value,
    numberOfMonths: e.numberOfMonths.value
  })), n = j(() => a.value.map((b) => b.value));
  function o(b) {
    return !n.value.some((v) => bc(b, v));
  }
  const i = (b) => {
    if (!e.maxValue.value || !a.value.length) return !1;
    if (e.disabled.value) return !0;
    const v = a.value.at(-1).value;
    if (!b && !e.nextPage.value) {
      const x = v.add({ months: 1 }).set({ day: 1 });
      return ds(x, e.maxValue.value);
    }
    const _ = q$(v, b || e.nextPage.value);
    return ds(_, e.maxValue.value);
  }, s = (b) => {
    if (!e.minValue.value || !a.value.length) return !1;
    if (e.disabled.value) return !0;
    const v = a.value[0].value;
    if (!b && !e.prevPage.value) {
      const x = v.subtract({ months: 1 }).set({ day: 35 });
      return Nn(x, e.minValue.value);
    }
    const _ = O$(v, b || e.prevPage.value);
    return Nn(_, e.minValue.value);
  };
  function l(b) {
    return !!(e.isDateDisabled?.(b) || e.disabled.value || e.maxValue.value && ds(b, e.maxValue.value) || e.minValue.value && Nn(b, e.minValue.value));
  }
  const d = (b) => !!e.isDateUnavailable?.(b), c = j(() => a.value.length ? a.value[0].rows[0].map((b) => t.dayOfWeek(Rt(b), e.weekdayFormat.value)) : []), f = (b) => {
    const v = a.value[0].value;
    if (!b && !e.nextPage.value) {
      const S = v.add({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), q = Br({
        dateObj: S,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = q, e.placeholder.value = q[0].value.set({ day: 1 });
      return;
    }
    const _ = A$(v, b || e.nextPage.value), x = Br({
      dateObj: _,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = x;
    const $ = {};
    if (!b) {
      const S = x[0].value.compare(v);
      S >= va(v) && ($.day = 1), S >= 365 && ($.month = 1);
    }
    e.placeholder.value = x[0].value.set({ ...$ });
  }, y = (b) => {
    const v = a.value[0].value;
    if (!b && !e.prevPage.value) {
      const S = v.subtract({ months: e.pagedNavigation.value ? e.numberOfMonths.value : 1 }), q = Br({
        dateObj: S,
        weekStartsOn: e.weekStartsOn.value,
        locale: e.locale.value,
        fixedWeeks: e.fixedWeeks.value,
        numberOfMonths: e.numberOfMonths.value
      });
      a.value = q, e.placeholder.value = q[0].value.set({ day: 1 });
      return;
    }
    const _ = E$(v, b || e.prevPage.value), x = Br({
      dateObj: _,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
    a.value = x;
    const $ = {};
    if (!b) {
      const S = v.compare(x[0].value);
      S >= va(v) && ($.day = 1), S >= 365 && ($.month = 1);
    }
    e.placeholder.value = x[0].value.set({ ...$ });
  };
  pe(e.placeholder, (b) => {
    n.value.some((v) => bc(v, b)) || (a.value = Br({
      dateObj: b,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    }));
  }), pe([
    e.locale,
    e.weekStartsOn,
    e.fixedWeeks,
    e.numberOfMonths
  ], () => {
    a.value = Br({
      dateObj: e.placeholder.value,
      weekStartsOn: e.weekStartsOn.value,
      locale: e.locale.value,
      fixedWeeks: e.fixedWeeks.value,
      numberOfMonths: e.numberOfMonths.value
    });
  });
  const p = j(() => {
    if (!a.value.length) return "";
    if (e.locale.value !== t.getLocale() && t.setLocale(e.locale.value), a.value.length === 1) {
      const q = a.value[0].value;
      return `${t.fullMonthAndYear(Rt(q), r.value)}`;
    }
    const b = Rt(a.value[0].value), v = Rt(a.value.at(-1).value), _ = t.fullMonth(b, r.value), x = t.fullMonth(v, r.value), $ = t.fullYear(b, r.value), S = t.fullYear(v, r.value);
    return $ === S ? `${_} - ${x} ${S}` : `${_} ${$} - ${x} ${S}`;
  }), k = j(() => `${e.calendarLabel.value ?? "Event Date"}, ${p.value}`), h = j(() => !(l(e.placeholder.value) || d(e.placeholder.value) || o(e.placeholder.value))), m = j(() => {
    for (const b of a.value) {
      if (e.minValue.value && Nn(b.value, e.minValue.value)) continue;
      const v = va(b.value), _ = e.minValue.value && El(e.minValue.value, b.value) ? e.minValue.value.day : 1;
      for (let x = _; x <= v; x++) {
        const $ = b.value.set({ day: x });
        if (!(l($) || d($)))
          return $;
      }
    }
  });
  return {
    isDateDisabled: l,
    isDateUnavailable: d,
    isNextButtonDisabled: i,
    isPrevButtonDisabled: s,
    grid: a,
    weekdays: c,
    visibleView: n,
    isOutsideVisibleView: o,
    formatter: t,
    nextPage: f,
    prevPage: y,
    headingValue: p,
    fullCalendarLabel: k,
    isPlaceholderFocusable: h,
    firstFocusableDate: m
  };
}
const $$ = { style: {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0px",
  position: "absolute",
  "white-space": "nowrap",
  width: "1px"
} }, B$ = {
  role: "heading",
  "aria-level": "2"
}, [Na, D$] = /* @__PURE__ */ Ee("CalendarRoot");
var M$ = /* @__PURE__ */ O({
  __name: "CalendarRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1,
      default: void 0
    },
    defaultPlaceholder: {
      type: null,
      required: !1
    },
    placeholder: {
      type: null,
      required: !1,
      default: void 0
    },
    pagedNavigation: {
      type: Boolean,
      required: !1,
      default: !1
    },
    preventDeselect: {
      type: Boolean,
      required: !1,
      default: !1
    },
    weekStartsOn: {
      type: Number,
      required: !1
    },
    weekdayFormat: {
      type: String,
      required: !1,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: !1
    },
    fixedWeeks: {
      type: Boolean,
      required: !1,
      default: !1
    },
    maxValue: {
      type: null,
      required: !1
    },
    minValue: {
      type: null,
      required: !1
    },
    locale: {
      type: String,
      required: !1
    },
    numberOfMonths: {
      type: Number,
      required: !1,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    readonly: {
      type: Boolean,
      required: !1,
      default: !1
    },
    initialFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    isDateDisabled: {
      type: Function,
      required: !1,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    nextPage: {
      type: Function,
      required: !1
    },
    prevPage: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableDaysOutsideCurrentView: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const r = e, a = t, { disabled: n, readonly: o, initialFocus: i, pagedNavigation: s, weekdayFormat: l, fixedWeeks: d, multiple: c, minValue: f, maxValue: y, numberOfMonths: p, preventDeselect: k, isDateDisabled: h, isDateUnavailable: m, calendarLabel: b, defaultValue: v, nextPage: _, prevPage: x, dir: $, locale: S, disableDaysOutsideCurrentView: q } = Xe(r), { primitiveElement: E, currentElement: D } = Ht(), N = iA(S), ee = Or($), ie = j(() => r.weekStartsOn ?? QO(N.value)), H = /* @__PURE__ */ et(r, "modelValue", a, {
      defaultValue: v.value,
      passive: r.modelValue === void 0
    }), X = YO({
      defaultPlaceholder: r.placeholder,
      defaultValue: H.value,
      locale: r.locale
    }), P = /* @__PURE__ */ et(r, "placeholder", a, {
      defaultValue: r.defaultPlaceholder ?? X.copy(),
      passive: r.placeholder === void 0
    });
    function V(ze) {
      P.value = ze.copy();
    }
    const { fullCalendarLabel: R, headingValue: L, isDateDisabled: de, isDateUnavailable: G, isNextButtonDisabled: _e, isPrevButtonDisabled: Se, weekdays: Le, isOutsideVisibleView: Ie, nextPage: be, prevPage: ce, formatter: Oe, grid: Y, isPlaceholderFocusable: U, firstFocusableDate: Q } = C$({
      locale: N,
      placeholder: P,
      weekStartsOn: ie,
      fixedWeeks: d,
      numberOfMonths: p,
      minValue: f,
      maxValue: y,
      disabled: n,
      weekdayFormat: l,
      pagedNavigation: s,
      isDateDisabled: h.value,
      isDateUnavailable: m.value,
      calendarLabel: b,
      nextPage: _,
      prevPage: x
    }), { isInvalid: se, isDateSelected: fe, hasSelectedDate: ge, isSelectedDateDisabled: Ze } = S$({
      date: H,
      isDateDisabled: de,
      isDateUnavailable: G
    });
    pe(H, (ze) => {
      if (Array.isArray(ze) && ze.length) {
        const Re = ze.at(-1);
        Re && !rs(P.value, Re) && V(Re);
      } else !Array.isArray(ze) && ze && !rs(P.value, ze) && V(ze);
    });
    function Ne(ze) {
      if (c.value) {
        if (!H.value) H.value = [ze.copy()];
        else if (Array.isArray(H.value)) {
          if (H.value.findIndex((Re) => zr(Re, ze)) === -1) H.value = [...H.value, ze];
          else if (!k.value) {
            const Re = H.value.filter((rt) => !zr(rt, ze));
            if (!Re.length) {
              P.value = ze.copy(), H.value = void 0;
              return;
            }
            H.value = Re.map((rt) => rt.copy());
          }
        }
      } else {
        if (!H.value) {
          H.value = ze.copy();
          return;
        }
        !k.value && rs(H.value, ze) ? (P.value = ze.copy(), H.value = void 0) : H.value = ze.copy();
      }
    }
    return xe(() => {
      i.value && JO(D.value);
    }), D$({
      isDateUnavailable: G,
      dir: ee,
      isDateDisabled: de,
      locale: N,
      formatter: Oe,
      modelValue: H,
      placeholder: P,
      disabled: n,
      initialFocus: i,
      pagedNavigation: s,
      grid: Y,
      weekDays: Le,
      weekStartsOn: ie,
      weekdayFormat: l,
      fixedWeeks: d,
      multiple: c,
      numberOfMonths: p,
      readonly: o,
      preventDeselect: k,
      fullCalendarLabel: R,
      headingValue: L,
      isInvalid: se,
      isDateSelected: fe,
      isNextButtonDisabled: _e,
      isPrevButtonDisabled: Se,
      isOutsideVisibleView: Ie,
      nextPage: be,
      prevPage: ce,
      parentElement: D,
      onPlaceholderChange: V,
      onDateChange: Ne,
      disableDaysOutsideCurrentView: q,
      minValue: f,
      maxValue: y,
      isPlaceholderFocusable: U,
      firstFocusableDate: Q,
      hasSelectedDate: ge,
      isSelectedDateDisabled: Ze
    }), (ze, Re) => (w(), z(u(oe), {
      ref_key: "primitiveElement",
      ref: E,
      as: ze.as,
      "as-child": ze.asChild,
      "aria-label": u(R),
      "data-readonly": u(o) ? "" : void 0,
      "data-disabled": u(n) ? "" : void 0,
      "data-invalid": u(se) ? "" : void 0,
      dir: u(ee)
    }, {
      default: g(() => [C(ze.$slots, "default", {
        date: u(P),
        grid: u(Y),
        weekDays: u(Le),
        weekStartsOn: ie.value,
        locale: u(N),
        fixedWeeks: u(d),
        modelValue: u(H)
      }), le("div", $$, [le("div", B$, W(u(R)), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-label",
      "data-readonly",
      "data-disabled",
      "data-invalid",
      "dir"
    ]));
  }
}), P$ = M$, j$ = /* @__PURE__ */ O({
  __name: "CalendarCell",
  props: {
    date: {
      type: null,
      required: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "td"
    }
  },
  setup(e) {
    const t = Na();
    return (r, a) => (w(), z(u(oe), {
      as: r.as,
      "as-child": r.asChild,
      role: "gridcell",
      "aria-selected": u(t).isDateSelected(r.date) ? !0 : void 0,
      "aria-disabled": u(t).isDateDisabled(r.date) || u(t).isDateUnavailable?.(r.date) || u(t).disableDaysOutsideCurrentView.value,
      "data-disabled": u(t).isDateDisabled(r.date) || u(t).disableDaysOutsideCurrentView.value ? "" : void 0
    }, {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-selected",
      "aria-disabled",
      "data-disabled"
    ]));
  }
}), F$ = j$, I$ = /* @__PURE__ */ O({
  __name: "CalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: !0
    },
    month: {
      type: null,
      required: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, r = Ag(), a = Na(), { primitiveElement: n } = Ht(), o = j(() => t.day.day.toLocaleString(a.locale.value)), i = j(() => a.formatter.custom(Rt(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), s = j(() => a.isDateUnavailable?.(t.day) ?? !1), l = j(() => Xq(t.day, Fa())), d = j(() => !El(t.day, t.month)), c = j(() => a.isOutsideVisibleView(t.day)), f = j(() => a.isDateDisabled(t.day) || a.disableDaysOutsideCurrentView.value && d.value), y = j(() => d.value || f.value ? !1 : !a.disabled.value && a.isPlaceholderFocusable.value && zr(t.day, a.placeholder.value) ? !0 : (!a.hasSelectedDate.value || a.isSelectedDateDisabled.value) && !a.isPlaceholderFocusable.value ? a.firstFocusableDate.value && zr(t.day, a.firstFocusableDate.value) : !1), p = j(() => a.isDateSelected(t.day));
    function k(b) {
      a.readonly.value || a.isDateDisabled(b) || a.isDateUnavailable?.(b) || a.onDateChange(b);
    }
    function h() {
      f.value || k(t.day);
    }
    function m(b) {
      if (f.value || (b.code === r.ENTER || b.code === r.SPACE_CODE) && (b.ctrlKey || b.metaKey || b.altKey)) return;
      b.preventDefault(), b.stopPropagation();
      const v = a.parentElement.value, _ = 7, x = a.dir.value === "rtl" ? -1 : 1;
      switch (b.code) {
        case r.ARROW_RIGHT:
          $(t.day, x);
          break;
        case r.ARROW_LEFT:
          $(t.day, -x);
          break;
        case r.ARROW_UP:
          $(t.day, -_);
          break;
        case r.ARROW_DOWN:
          $(t.day, _);
          break;
        case r.ENTER:
        case r.SPACE_CODE:
          k(t.day);
      }
      function $(S, q) {
        const E = S.add({ days: q });
        if (a.minValue.value && E.compare(a.minValue.value) < 0 || a.maxValue.value && E.compare(a.maxValue.value) > 0) return;
        const D = v.querySelector(`[data-value='${E.toString()}']:not([data-outside-view])`);
        if (!D) {
          if (q > 0) {
            if (a.isNextButtonDisabled()) return;
            a.nextPage();
          } else {
            if (a.isPrevButtonDisabled()) return;
            a.prevPage();
          }
          we(() => {
            $(S, q);
          });
          return;
        }
        if (D && D.hasAttribute("data-disabled")) return $(E, q);
        a.onPlaceholderChange(E), D?.focus();
      }
    }
    return (b, v) => (w(), z(u(oe), {
      ref_key: "primitiveElement",
      ref: n,
      as: t.as,
      "as-child": t.asChild,
      role: "button",
      "aria-label": i.value,
      "data-reka-calendar-cell-trigger": "",
      "aria-disabled": f.value || s.value ? !0 : void 0,
      "data-selected": p.value ? !0 : void 0,
      "data-value": b.day.toString(),
      "data-disabled": f.value ? "" : void 0,
      "data-unavailable": s.value ? "" : void 0,
      "data-today": l.value ? "" : void 0,
      "data-outside-view": d.value ? "" : void 0,
      "data-outside-visible-view": c.value ? "" : void 0,
      "data-focused": y.value ? "" : void 0,
      tabindex: y.value ? 0 : d.value || f.value ? void 0 : -1,
      onClick: h,
      onKeydown: zt(m, [
        "up",
        "down",
        "left",
        "right",
        "space",
        "enter"
      ])
    }, {
      default: g(() => [C(b.$slots, "default", {
        dayValue: o.value,
        disabled: f.value,
        today: l.value,
        selected: p.value,
        outsideView: d.value,
        outsideVisibleView: c.value,
        unavailable: s.value
      }, () => [J(W(o.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-label",
      "aria-disabled",
      "data-selected",
      "data-value",
      "data-disabled",
      "data-unavailable",
      "data-today",
      "data-outside-view",
      "data-outside-visible-view",
      "data-focused",
      "tabindex"
    ]));
  }
}), T$ = I$, R$ = /* @__PURE__ */ O({
  __name: "CalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "table"
    }
  },
  setup(e) {
    const t = e, r = Na(), a = j(() => r.disabled.value ? !0 : void 0), n = j(() => r.readonly.value ? !0 : void 0);
    return (o, i) => (w(), z(u(oe), I(t, {
      tabindex: "-1",
      role: "application",
      "aria-readonly": n.value,
      "aria-disabled": a.value,
      "data-readonly": n.value && "",
      "data-disabled": a.value && ""
    }), {
      default: g(() => [C(o.$slots, "default")]),
      _: 3
    }, 16, [
      "aria-readonly",
      "aria-disabled",
      "data-readonly",
      "data-disabled"
    ]));
  }
}), N$ = R$, V$ = /* @__PURE__ */ O({
  __name: "CalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "tbody"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), U$ = V$, L$ = /* @__PURE__ */ O({
  __name: "CalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "thead"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), I(t, { "aria-hidden": "true" }), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), W$ = L$, K$ = /* @__PURE__ */ O({
  __name: "CalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "tr"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), H$ = K$, G$ = /* @__PURE__ */ O({
  __name: "CalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "th"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Y$ = G$, Z$ = /* @__PURE__ */ O({
  __name: "CalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), J$ = Z$, Q$ = /* @__PURE__ */ O({
  __name: "CalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, r = Na();
    return (a, n) => (w(), z(u(oe), I(t, { "data-disabled": u(r).disabled.value ? "" : void 0 }), {
      default: g(() => [C(a.$slots, "default", { headingValue: u(r).headingValue.value }, () => [J(W(u(r).headingValue.value), 1)])]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), X$ = Q$, eB = /* @__PURE__ */ O({
  __name: "CalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = j(() => a.disabled.value || a.isNextButtonDisabled(t.nextPage)), a = Na();
    function n() {
      r.value || a.nextPage(t.nextPage);
    }
    return (o, i) => (w(), z(u(oe), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": r.value || void 0,
      "data-disabled": r.value || void 0,
      disabled: r.value,
      onClick: n
    }, {
      default: g(() => [C(o.$slots, "default", { disabled: r.value }, () => [i[0] || (i[0] = J(" Next page "))])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "type",
      "aria-disabled",
      "data-disabled",
      "disabled"
    ]));
  }
}), tB = eB, rB = /* @__PURE__ */ O({
  __name: "CalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = j(() => a.disabled.value || a.isPrevButtonDisabled(t.prevPage)), a = Na();
    function n() {
      r.value || a.prevPage(t.prevPage);
    }
    return (o, i) => (w(), z(u(oe), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: t.as === "button" ? "button" : void 0,
      "aria-disabled": r.value || void 0,
      "data-disabled": r.value || void 0,
      disabled: r.value,
      onClick: n
    }, {
      default: g(() => [C(o.$slots, "default", { disabled: r.value }, () => [i[0] || (i[0] = J(" Prev page "))])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "type",
      "aria-disabled",
      "data-disabled",
      "disabled"
    ]));
  }
}), aB = rB;
const [nB, oB] = /* @__PURE__ */ Ee("RovingFocusGroup");
var iB = /* @__PURE__ */ O({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r, { loop: o, orientation: i, dir: s } = Xe(a), l = Or(s), d = /* @__PURE__ */ et(a, "currentTabStopId", n, {
      defaultValue: a.defaultCurrentTabStopId,
      passive: a.currentTabStopId === void 0
    }), c = F(!1), f = F(!1), y = F(0), { getItems: p, CollectionSlot: k } = St({ isProvider: !0 });
    function h(b) {
      const v = !f.value;
      if (b.currentTarget && b.target === b.currentTarget && v && !c.value) {
        const _ = new CustomEvent(gE, bE);
        if (b.currentTarget.dispatchEvent(_), n("entryFocus", _), !_.defaultPrevented) {
          const x = p().map((D) => D.ref).filter((D) => D.dataset.disabled !== ""), $ = x.find((D) => D.getAttribute("data-active") === ""), S = x.find((D) => D.getAttribute("data-highlighted") === ""), q = x.find((D) => D.id === d.value), E = [
            $,
            S,
            q,
            ...x
          ].filter(Boolean);
          Vg(E, a.preventScrollOnEntryFocus);
        }
      }
      f.value = !1;
    }
    function m() {
      setTimeout(() => {
        f.value = !1;
      }, 1);
    }
    return t({ getItems: p }), oB({
      loop: o,
      dir: l,
      orientation: i,
      currentTabStopId: d,
      onItemFocus: (b) => {
        d.value = b;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (b, v) => (w(), z(u(k), null, {
      default: g(() => [A(u(oe), {
        tabindex: c.value || y.value === 0 ? -1 : 0,
        "data-orientation": u(i),
        as: b.as,
        "as-child": b.asChild,
        dir: u(l),
        style: { outline: "none" },
        onMousedown: v[0] || (v[0] = (_) => f.value = !0),
        onMouseup: m,
        onFocus: h,
        onBlur: v[1] || (v[1] = (_) => c.value = !1)
      }, {
        default: g(() => [C(b.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), sB = iB, lB = /* @__PURE__ */ O({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: !1
    },
    focusable: {
      type: Boolean,
      required: !1,
      default: !0
    },
    active: {
      type: Boolean,
      required: !1
    },
    allowShiftKey: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, r = nB(), a = tt(), n = j(() => t.tabStopId || a), o = j(() => r.currentTabStopId.value === n.value), { getItems: i, CollectionItem: s } = St();
    xe(() => {
      t.focusable && r.onFocusableItemAdd();
    }), _t(() => {
      t.focusable && r.onFocusableItemRemove();
    }), pe(() => t.focusable, (d, c) => {
      d !== c && (d ? r.onFocusableItemAdd() : r.onFocusableItemRemove());
    });
    function l(d) {
      if (d.key === "Tab" && d.shiftKey) {
        r.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget) return;
      const c = Ng(d, r.orientation.value, r.dir.value);
      if (c !== void 0) {
        if (d.metaKey || d.ctrlKey || d.altKey || !t.allowShiftKey && d.shiftKey) return;
        d.preventDefault();
        let f = [...i().map((y) => y.ref).filter((y) => y.dataset.disabled !== "")];
        if (c === "last") f.reverse();
        else if (c === "prev" || c === "next") {
          c === "prev" && f.reverse();
          const y = f.indexOf(d.currentTarget);
          f = r.loop.value ? xE(f, y + 1) : f.slice(y + 1);
        }
        we(() => Vg(f));
      }
    }
    return (d, c) => (w(), z(u(s), null, {
      default: g(() => [A(u(oe), {
        tabindex: o.value ? 0 : -1,
        "data-orientation": u(r).orientation.value,
        "data-active": d.active ? "" : void 0,
        "data-disabled": d.focusable ? void 0 : "",
        as: d.as,
        "as-child": d.asChild,
        onMousedown: c[0] || (c[0] = (f) => {
          d.focusable ? u(r).onItemFocus(n.value) : f.preventDefault();
        }),
        onFocus: c[1] || (c[1] = (f) => u(r).onItemFocus(n.value)),
        onKeydown: l
      }, {
        default: g(() => [C(d.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "data-active",
        "data-disabled",
        "as",
        "as-child"
      ])]),
      _: 3
    }));
  }
}), uB = lB;
const [dB] = /* @__PURE__ */ Ee("CheckboxGroupRoot");
function Gl(e) {
  return e === "indeterminate";
}
function ab(e) {
  return Gl(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const [cB, fB] = /* @__PURE__ */ Ee("CheckboxRoot");
var pB = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    value: {
      type: null,
      required: !1,
      default: "on"
    },
    id: {
      type: String,
      required: !1
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, { forwardRef: n, currentElement: o } = ue(), i = dB(null), s = /* @__PURE__ */ et(r, "modelValue", a, {
      defaultValue: r.defaultValue ?? r.falseValue,
      passive: r.modelValue === void 0
    }), l = j(() => i?.disabled.value || r.disabled), d = j(() => xr(s.value, r.trueValue)), c = j(() => za(i?.modelValue.value) ? s.value === "indeterminate" ? "indeterminate" : d.value : vc(i.modelValue.value, r.value));
    function f() {
      if (za(i?.modelValue.value))
        s.value === "indeterminate" ? s.value = r.trueValue : s.value = d.value ? r.falseValue : r.trueValue;
      else {
        const m = [...i.modelValue.value || []];
        if (vc(m, r.value)) {
          const b = m.findIndex((v) => xr(v, r.value));
          m.splice(b, 1);
        } else m.push(r.value);
        i.modelValue.value = m;
      }
    }
    const y = Jo(o), p = qg(), k = Nk(), h = j(() => {
      if (!k["aria-label"])
        return r.id && o.value ? document.querySelector(`[for="${r.id}"]`)?.innerText : void 0;
    });
    return fB({
      disabled: l,
      state: c
    }), (m, b) => (w(), Z(Pe, null, [(w(), z(Ur(u(i)?.rovingFocus.value ? u(uB) : u(oe)), I({
      ...m.$attrs,
      ...u(p)
    }, {
      id: m.id,
      ref: u(n),
      role: "checkbox",
      "as-child": m.asChild,
      as: m.as,
      type: m.as === "button" ? "button" : void 0,
      "aria-checked": u(Gl)(c.value) ? "mixed" : c.value,
      "aria-required": m.required,
      "aria-label": m.$attrs["aria-label"] || h.value,
      "data-state": u(ab)(c.value),
      "data-disabled": l.value ? "" : void 0,
      disabled: l.value,
      focusable: u(i)?.rovingFocus.value ? !l.value : void 0,
      onKeydown: zt(Ve(() => {
      }, ["prevent"]), ["enter"]),
      onClick: f
    }), {
      default: g(() => [C(m.$slots, "default", {
        modelValue: u(s),
        state: c.value
      })]),
      _: 3
    }, 16, [
      "id",
      "as-child",
      "as",
      "type",
      "aria-checked",
      "aria-required",
      "aria-label",
      "data-state",
      "data-disabled",
      "disabled",
      "focusable",
      "onKeydown"
    ])), u(y) && m.name && !u(i) ? (w(), z(u(Rl), I({
      key: 0,
      type: "checkbox",
      checked: !!c.value,
      name: m.name,
      value: m.value,
      disabled: l.value,
      required: m.required
    }, u(p)), null, 16, [
      "checked",
      "name",
      "value",
      "disabled",
      "required"
    ])) : re("v-if", !0)], 64));
  }
}), yB = pB, mB = /* @__PURE__ */ O({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const { forwardRef: t } = ue(), r = cB();
    return (a, n) => (w(), z(u(Kr), { present: a.forceMount || u(Gl)(u(r).state.value) || u(r).state.value === !0 }, {
      default: g(() => [A(u(oe), I({
        ref: u(t),
        "data-state": u(ab)(u(r).state.value),
        "data-disabled": u(r).disabled.value ? "" : void 0,
        style: { pointerEvents: "none" },
        "as-child": a.asChild,
        as: a.as
      }, a.$attrs), {
        default: g(() => [C(a.$slots, "default")]),
        _: 3
      }, 16, [
        "data-state",
        "data-disabled",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["present"]));
  }
}), hB = mB, vB = /* @__PURE__ */ O({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(ti), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), gB = vB;
function bB() {
  const e = F(!1);
  return xe(() => {
    no("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), no(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const kB = /* @__PURE__ */ Lf(bB), [si, wB] = /* @__PURE__ */ Ee(["MenuRoot", "MenuSub"], "MenuContext"), [Yl, xB] = /* @__PURE__ */ Ee("MenuRoot");
var zB = /* @__PURE__ */ O({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = t, { modal: n, dir: o } = Xe(r), i = Or(o), s = /* @__PURE__ */ et(r, "open", a), l = F(), d = kB();
    return wB({
      open: s,
      onOpenChange: (c) => {
        s.value = c;
      },
      content: l,
      onContentChange: (c) => {
        l.value = c;
      }
    }), xB({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: i,
      modal: n
    }), (c, f) => (w(), z(u(ei), null, {
      default: g(() => [C(c.$slots, "default")]),
      _: 3
    }));
  }
}), _B = zB;
const [nb, SB] = /* @__PURE__ */ Ee("MenuContent");
var qB = /* @__PURE__ */ O({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Vf({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...eb }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = si(), o = Yl(), { trapFocus: i, disableOutsidePointerEvents: s, loop: l } = Xe(r);
    Zo(), zn(s.value);
    const d = F(""), c = F(0), f = F(0), y = F(null), p = F("right"), k = F(0), h = F(null), m = F(), { forwardRef: b, currentElement: v } = ue(), { handleTypeaheadSearch: _ } = Qo(), x = F();
    function $(P) {
      const V = gc(P, x.value || Ke(), v.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !1,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      V && (x.value = V, V.scrollIntoView({ block: "nearest" }));
    }
    function S() {
      x.value && x.value.click();
    }
    const q = F(), E = F();
    pe(x, (P) => {
      if (E.value && (P === void 0 || P !== E.value.trigger.value)) {
        if (P === void 0) return;
        E.value.onOpenChange(!1), E.value = void 0;
      }
    }), pe(v, (P) => {
      n.onContentChange(P);
    }), _t(() => {
      window.clearTimeout(c.value);
    });
    function D(P) {
      return p.value === y.value?.side && BA(P, y.value?.area);
    }
    async function N(P) {
      a("openAutoFocus", P), !P.defaultPrevented && (P.preventDefault(), v.value?.focus({ preventScroll: !0 }));
    }
    function ee(P) {
      if (P.defaultPrevented) return;
      const V = P.target, R = V.closest("[data-reka-menu-content]") === P.currentTarget, L = ["input", "textarea"].includes(V.tagName.toLowerCase()), de = P.ctrlKey || P.altKey || P.metaKey, G = P.key.length === 1, _e = gc(P, Ke(), v.value, {
        loop: l.value,
        arrowKeyOptions: "vertical",
        dir: o?.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (_e) return _e?.focus();
      if (P.code === "Space") return;
      const Se = m.value?.getItems() ?? [];
      if (R && (P.key === "Tab" && o.modal.value && P.preventDefault(), !de && G && !L && _(P.key, Se)), P.target !== v.value || !CA.includes(P.key)) return;
      P.preventDefault();
      const Le = [...Se.map((Ie) => Ie.ref)];
      Bg.includes(P.key) && Le.reverse(), Gs(Le);
    }
    function ie(P) {
      P?.currentTarget?.contains?.(P.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function H(P) {
      if (!zo(P)) return;
      const V = P.target, R = k.value !== P.clientX;
      if (P?.currentTarget?.contains(V) && R) {
        const L = P.clientX > k.value ? "right" : "left";
        p.value = L, k.value = P.clientX;
      }
    }
    function X(P) {
      zo(P) && q.value && q.value.focus();
    }
    return SB({
      onItemEnter: (P) => !!D(P),
      onItemLeave: (P) => D(P) ? !0 : (["INPUT", "TEXTAREA"].includes(Ke()?.tagName || "") || v.value?.focus(), h.value = null, !1),
      onTriggerLeave: (P) => !!D(P),
      searchRef: d,
      highlightedElement: x,
      onKeydownNavigation: $,
      onKeydownEnter: S,
      filterElement: q,
      onFilterElementChange: (P) => {
        q.value = P;
      },
      activeSubmenuContext: E,
      pointerGraceTimerRef: f,
      onPointerGraceIntentChange: (P) => {
        y.value = P;
      }
    }), (P, V) => (w(), z(u(On), {
      "as-child": "",
      trapped: u(i),
      onMountAutoFocus: N,
      onUnmountAutoFocus: V[7] || (V[7] = (R) => a("closeAutoFocus", R))
    }, {
      default: g(() => [A(u(qn), {
        "as-child": "",
        "disable-outside-pointer-events": u(s),
        onEscapeKeyDown: V[2] || (V[2] = (R) => a("escapeKeyDown", R)),
        onPointerDownOutside: V[3] || (V[3] = (R) => a("pointerDownOutside", R)),
        onFocusOutside: V[4] || (V[4] = (R) => a("focusOutside", R)),
        onInteractOutside: V[5] || (V[5] = (R) => a("interactOutside", R)),
        onDismiss: V[6] || (V[6] = (R) => a("dismiss"))
      }, {
        default: g(() => [A(u(sB), {
          ref_key: "rovingFocusGroupRef",
          ref: m,
          "current-tab-stop-id": h.value,
          "onUpdate:currentTabStopId": V[0] || (V[0] = (R) => h.value = R),
          "as-child": "",
          orientation: "vertical",
          dir: u(o).dir.value,
          loop: u(l),
          onEntryFocus: V[1] || (V[1] = (R) => {
            a("entryFocus", R), u(o).isUsingKeyboardRef.value || R.preventDefault();
          })
        }, {
          default: g(() => [A(u(ii), {
            ref: u(b),
            role: "menu",
            as: P.as,
            "as-child": P.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": u(Dg)(u(n).open.value),
            dir: u(o).dir.value,
            side: P.side,
            "side-offset": P.sideOffset,
            align: P.align,
            "align-offset": P.alignOffset,
            "avoid-collisions": P.avoidCollisions,
            "collision-boundary": P.collisionBoundary,
            "collision-padding": P.collisionPadding,
            "arrow-padding": P.arrowPadding,
            "prioritize-position": P.prioritizePosition,
            "position-strategy": P.positionStrategy,
            "update-position-strategy": P.updatePositionStrategy,
            sticky: P.sticky,
            "hide-when-detached": P.hideWhenDetached,
            reference: P.reference,
            onKeydown: ee,
            onBlur: ie,
            onPointermove: H,
            onPointerenter: X
          }, {
            default: g(() => [C(P.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), ob = qB, OB = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = nb(), { forwardRef: a, currentElement: n } = ue(), { CollectionItem: o } = St(), i = F(!1), s = j(() => i.value || n.value != null && r.highlightedElement.value === n.value);
    async function l(c) {
      if (!(c.defaultPrevented || !zo(c))) {
        if (t.disabled) r.onItemLeave(c);
        else if (!r.onItemEnter(c)) {
          const f = c.currentTarget;
          r.highlightedElement.value = f, ["INPUT", "TEXTAREA"].includes(Ke()?.tagName || "") || f.focus({ preventScroll: !0 });
        }
      }
    }
    async function d(c) {
      await we(), !(c.defaultPrevented || !zo(c) || r.highlightedElement.value !== n.value) && !r.onItemLeave(c) && r.highlightedElement.value === n.value && (r.highlightedElement.value = void 0);
    }
    return (c, f) => (w(), z(u(o), { value: { textValue: c.textValue } }, {
      default: g(() => [A(u(oe), I({
        ref: u(a),
        role: "menuitem",
        tabindex: "-1"
      }, c.$attrs, {
        as: c.as,
        "as-child": c.asChild,
        "aria-disabled": c.disabled || void 0,
        "data-disabled": c.disabled ? "" : void 0,
        "data-highlighted": s.value ? "" : void 0,
        onPointermove: l,
        onPointerleave: d,
        onFocus: f[0] || (f[0] = async (y) => {
          await we(), !(y.defaultPrevented || c.disabled) && (i.value = !0, u(r).highlightedElement.value = y.currentTarget);
        }),
        onBlur: f[1] || (f[1] = async (y) => {
          await we(), !y.defaultPrevented && (i.value = !1);
        })
      }), {
        default: g(() => [C(c.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), AB = OB, EB = /* @__PURE__ */ O({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = t, { forwardRef: n, currentElement: o } = ue(), i = Yl(), s = nb(), l = F(!1);
    async function d() {
      const c = o.value;
      if (!r.disabled && c) {
        const f = new CustomEvent(AA, {
          bubbles: !0,
          cancelable: !0
        });
        a("select", f), await we(), f.defaultPrevented ? l.value = !1 : i.onClose();
      }
    }
    return (c, f) => (w(), z(AB, I(r, {
      ref: u(n),
      onClick: d,
      onPointerdown: f[0] || (f[0] = () => {
        l.value = !0;
      }),
      onPointerup: f[1] || (f[1] = async (y) => {
        await we(), !y.defaultPrevented && (l.value || y.currentTarget?.click());
      }),
      onKeydown: f[2] || (f[2] = async (y) => {
        const p = u(s).searchRef.value !== "";
        c.disabled || p && y.key === " " || u(Hs).includes(y.key) && (y.currentTarget?.click(), y.preventDefault());
      })
    }), {
      default: g(() => [C(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), CB = EB, $B = /* @__PURE__ */ O({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Ce(r, a), o = si(), { forwardRef: i, currentElement: s } = ue();
    return Sn(s), (l, d) => (w(), z(ob, I(u(n), {
      ref: u(i),
      "trap-focus": u(o).open.value,
      "disable-outside-pointer-events": u(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => u(o).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = Ve((c) => a("focusOutside", c), ["prevent"]))
    }), {
      default: g(() => [C(l.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), BB = $B, DB = /* @__PURE__ */ O({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = Ce(e, t), a = si();
    return (n, o) => (w(), z(ob, I(u(r), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: o[0] || (o[0] = (i) => u(a).onOpenChange(!1))
    }), {
      default: g(() => [C(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), MB = DB, PB = /* @__PURE__ */ O({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = Ce(e, t), a = si(), n = Yl();
    return (o, i) => (w(), z(u(Kr), { present: o.forceMount || u(a).open.value }, {
      default: g(() => [u(n).modal.value ? (w(), z(BB, Be(I({ key: 0 }, {
        ...o.$attrs,
        ...u(r)
      })), {
        default: g(() => [C(o.$slots, "default")]),
        _: 3
      }, 16)) : (w(), z(MB, Be(I({ key: 1 }, {
        ...o.$attrs,
        ...u(r)
      })), {
        default: g(() => [C(o.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), jB = PB, FB = /* @__PURE__ */ O({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), IB = FB;
const [En, TB] = /* @__PURE__ */ Ee("PopoverRoot");
var RB = /* @__PURE__ */ O({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = t, { modal: n } = Xe(r), o = /* @__PURE__ */ et(r, "open", a, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), i = F(), s = F(!1);
    return TB({
      contentId: "",
      triggerId: "",
      modal: n,
      open: o,
      onOpenChange: (l) => {
        o.value = l;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerElement: i,
      hasCustomAnchor: s
    }), (l, d) => (w(), z(u(ei), null, {
      default: g(() => [C(l.$slots, "default", {
        open: u(o),
        close: () => o.value = !1
      })]),
      _: 3
    }));
  }
}), NB = RB, VB = /* @__PURE__ */ O({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Fe(ye(r, "trapFocus", "disableOutsidePointerEvents")), { forwardRef: o } = ue(), i = En();
    return Zo(), (s, l) => (w(), z(u(On), {
      "as-child": "",
      loop: "",
      trapped: s.trapFocus,
      onMountAutoFocus: l[5] || (l[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: l[6] || (l[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: g(() => [A(u(qn), {
        "as-child": "",
        "disable-outside-pointer-events": s.disableOutsidePointerEvents,
        onPointerDownOutside: l[0] || (l[0] = (d) => a("pointerDownOutside", d)),
        onInteractOutside: l[1] || (l[1] = (d) => a("interactOutside", d)),
        onEscapeKeyDown: l[2] || (l[2] = (d) => a("escapeKeyDown", d)),
        onFocusOutside: l[3] || (l[3] = (d) => a("focusOutside", d)),
        onDismiss: l[4] || (l[4] = (d) => u(i).onOpenChange(!1))
      }, {
        default: g(() => [A(u(ii), I(u(n), {
          id: u(i).contentId,
          ref: u(o),
          "data-state": u(i).open.value ? "open" : "closed",
          "aria-labelledby": u(i).triggerId,
          style: {
            "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
            "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
            "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
          },
          role: "dialog"
        }), {
          default: g(() => [C(s.$slots, "default")]),
          _: 3
        }, 16, [
          "id",
          "data-state",
          "aria-labelledby"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), ib = VB, UB = /* @__PURE__ */ O({
  __name: "PopoverContentModal",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = En(), o = F(!1);
    zn(!0);
    const i = Ce(r, a), { forwardRef: s, currentElement: l } = ue();
    return Sn(l), (d, c) => (w(), z(ib, I(u(i), {
      ref: u(s),
      "trap-focus": u(n).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = Ve((f) => {
        a("closeAutoFocus", f), o.value || u(n).triggerElement.value?.focus();
      }, ["prevent"])),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        a("pointerDownOutside", f);
        const y = f.detail.originalEvent, p = y.button === 0 && y.ctrlKey === !0, k = y.button === 2 || p;
        o.value = k;
      }),
      onFocusOutside: c[2] || (c[2] = Ve(() => {
      }, ["prevent"]))
    }), {
      default: g(() => [C(d.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), LB = UB, WB = /* @__PURE__ */ O({
  __name: "PopoverContentNonModal",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = En(), o = F(!1), i = F(!1), s = Ce(r, a);
    return (l, d) => (w(), z(ib, I(u(s), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        a("closeAutoFocus", c), c.defaultPrevented || (o.value || u(n).triggerElement.value?.focus(), c.preventDefault()), o.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        a("interactOutside", c), c.defaultPrevented || (o.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const f = c.target;
        u(n).triggerElement.value?.contains(f) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: g(() => [C(l.$slots, "default")]),
      _: 3
    }, 16));
  }
}), KB = WB, HB = /* @__PURE__ */ O({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = En(), o = Ce(r, a), { forwardRef: i } = ue();
    return n.contentId ||= tt(void 0, "reka-popover-content"), (s, l) => (w(), z(u(Kr), { present: s.forceMount || u(n).open.value }, {
      default: g(() => [u(n).modal.value ? (w(), z(LB, I({ key: 0 }, u(o), { ref: u(i) }), {
        default: g(() => [C(s.$slots, "default")]),
        _: 3
      }, 16)) : (w(), z(KB, I({ key: 1 }, u(o), { ref: u(i) }), {
        default: g(() => [C(s.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), GB = HB, YB = /* @__PURE__ */ O({
  __name: "PopoverPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ZB = YB, JB = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = En(), { forwardRef: a, currentElement: n } = ue();
    return r.triggerId ||= tt(void 0, "reka-popover-trigger"), xe(() => {
      r.triggerElement.value = n.value;
    }), (o, i) => (w(), z(Ur(u(r).hasCustomAnchor.value ? u(oe) : u(ti)), { "as-child": "" }, {
      default: g(() => [A(u(oe), {
        id: u(r).triggerId,
        ref: u(a),
        type: o.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": u(r).open.value,
        "aria-controls": u(r).contentId,
        "data-state": u(r).open.value ? "open" : "closed",
        as: o.as,
        "as-child": t.asChild,
        onClick: u(r).onOpenToggle
      }, {
        default: g(() => [C(o.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "as",
        "as-child",
        "onClick"
      ])]),
      _: 3
    }));
  }
}), QB = JB;
const [sb, XB] = /* @__PURE__ */ Ee("DropdownMenuRoot");
var e2 = /* @__PURE__ */ O({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = t;
    ue();
    const n = /* @__PURE__ */ et(r, "open", a, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), o = F(), { modal: i, dir: s } = Xe(r), l = Or(s);
    return XB({
      open: n,
      onOpenChange: (d) => {
        n.value = d;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      triggerId: "",
      triggerElement: o,
      contentId: "",
      modal: i,
      dir: l
    }), (d, c) => (w(), z(u(_B), {
      open: u(n),
      "onUpdate:open": c[0] || (c[0] = (f) => lt(n) ? n.value = f : null),
      dir: u(l),
      modal: u(i)
    }, {
      default: g(() => [C(d.$slots, "default", { open: u(n) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), t2 = e2, r2 = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    ue();
    const a = sb(), n = F(!1);
    function o(i) {
      i.defaultPrevented || (n.value || setTimeout(() => {
        a.triggerElement.value?.focus();
      }, 0), n.value = !1, i.preventDefault());
    }
    return a.contentId ||= tt(void 0, "reka-dropdown-menu-content"), (i, s) => (w(), z(u(jB), I(u(r), {
      id: u(a).contentId,
      "aria-labelledby": u(a)?.triggerId,
      style: {
        "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
        "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
        "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
      },
      onCloseAutoFocus: o,
      onInteractOutside: s[0] || (s[0] = (l) => {
        if (l.defaultPrevented) return;
        const d = l.detail.originalEvent, c = d.button === 0 && d.ctrlKey === !0, f = d.button === 2 || c;
        (!u(a).modal.value || f) && (n.value = !0), u(a).triggerElement.value?.contains(l.target) && l.preventDefault();
      })
    }), {
      default: g(() => [C(i.$slots, "default")]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), a2 = r2, n2 = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = Ia(t);
    return ue(), (n, o) => (w(), z(u(CB), Be(Ue({
      ...r,
      ...u(a)
    })), {
      default: g(() => [C(n.$slots, "default")]),
      _: 3
    }, 16));
  }
}), o2 = n2, i2 = /* @__PURE__ */ O({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(IB), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), s2 = i2, l2 = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = sb(), { forwardRef: a, currentElement: n } = ue();
    return xe(() => {
      r.triggerElement = n;
    }), r.triggerId ||= tt(void 0, "reka-dropdown-menu-trigger"), (o, i) => (w(), z(u(gB), { "as-child": "" }, {
      default: g(() => [A(u(oe), {
        id: u(r).triggerId,
        ref: u(a),
        type: o.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: o.as,
        "aria-haspopup": "menu",
        "aria-expanded": u(r).open.value,
        "aria-controls": u(r).open.value ? u(r).contentId : void 0,
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        "data-state": u(r).open.value ? "open" : "closed",
        onClick: i[0] || (i[0] = async (s) => {
          !o.disabled && s.button === 0 && s.ctrlKey === !1 && (u(r)?.onOpenToggle(), await we(), u(r).open.value && s.preventDefault());
        }),
        onKeydown: i[1] || (i[1] = zt((s) => {
          o.disabled || (["Enter", " "].includes(s.key) && u(r).onOpenToggle(), s.key === "ArrowDown" && u(r).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(s.key) && s.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: g(() => [C(o.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), u2 = l2, d2 = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "label"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, a) => (w(), z(u(oe), I(t, { onMousedown: a[0] || (a[0] = (n) => {
      !n.defaultPrevented && n.detail > 1 && n.preventDefault();
    }) }), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), c2 = d2;
let f2 = !1;
try {
  f2 = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
let p2 = !1;
try {
  p2 = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
const y2 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], m2 = [" ", "Enter"], Ot = 10;
function fn(e, t, r) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((a) => el(a, t, r)) : el(e, t, r);
}
function el(e, t, r) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof r == "function" ? r(e, t) : typeof r == "string" ? e?.[r] === t?.[r] : xr(e, t);
}
function h2(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0;
}
const v2 = ["value"], [Ar, lb] = /* @__PURE__ */ Ee("SelectRoot");
var g2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    nullableValue: {
      type: String,
      required: !1,
      default: ""
    },
    by: {
      type: [String, Function],
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    autocomplete: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = e, a = t, { required: n, disabled: o, multiple: i, dir: s } = Xe(r), l = /* @__PURE__ */ et(r, "modelValue", a, {
      defaultValue: r.defaultValue ?? (i.value ? [] : void 0),
      passive: r.modelValue === void 0,
      deep: !0
    }), d = /* @__PURE__ */ et(r, "open", a, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), c = F(), f = F(), y = F({
      x: 0,
      y: 0
    }), p = j(() => i.value && Array.isArray(l.value) ? l.value?.length === 0 : za(l.value));
    St({ isProvider: !0 });
    const k = Or(s), h = Jo(c), m = F(/* @__PURE__ */ new Set()), b = j(() => Array.from(m.value).map((x) => x.value).join(";"));
    function v(x) {
      if (i.value) {
        const $ = Array.isArray(l.value) ? [...l.value] : [], S = $.findIndex((q) => el(q, x, r.by));
        S === -1 ? $.push(x) : $.splice(S, 1), l.value = [...$];
      } else l.value = x;
    }
    function _(x) {
      return Array.from(m.value).find(($) => fn(x, $.value, r.by));
    }
    return lb({
      triggerElement: c,
      onTriggerChange: (x) => {
        c.value = x;
      },
      valueElement: f,
      onValueElementChange: (x) => {
        f.value = x;
      },
      contentId: "",
      modelValue: l,
      onValueChange: v,
      by: r.by,
      open: d,
      multiple: i,
      required: n,
      onOpenChange: (x) => {
        d.value = x;
      },
      dir: k,
      triggerPointerDownPosRef: y,
      disabled: o,
      isEmptyModelValue: p,
      optionsSet: m,
      onOptionAdd: (x) => {
        const $ = _(x.value);
        $ && m.value.delete($), m.value.add(x);
      },
      onOptionRemove: (x) => {
        const $ = _(x.value);
        $ && m.value.delete($);
      }
    }), (x, $) => (w(), z(u(ei), null, {
      default: g(() => [C(x.$slots, "default", {
        modelValue: u(l),
        open: u(d)
      }), u(h) && x.name ? (w(), z(w2, {
        key: b.value,
        "aria-hidden": "true",
        tabindex: "-1",
        multiple: u(i),
        required: u(n),
        name: x.name,
        autocomplete: x.autocomplete,
        disabled: u(o),
        value: u(l)
      }, {
        default: g(() => [u(za)(u(l)) ? (w(), Z("option", {
          key: 0,
          value: x.nullableValue
        }, null, 8, v2)) : re("v-if", !0), (w(!0), Z(Pe, null, Qe(Array.from(m.value), (S) => (w(), Z("option", I({ key: S.value ?? "" }, { ref_for: !0 }, S), null, 16))), 128))]),
        _: 1
      }, 8, [
        "multiple",
        "required",
        "name",
        "autocomplete",
        "disabled",
        "value"
      ])) : re("v-if", !0)]),
      _: 3
    }));
  }
}), b2 = g2, k2 = /* @__PURE__ */ O({
  __name: "BubbleSelect",
  props: {
    autocomplete: {
      type: String,
      required: !1
    },
    autofocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    form: {
      type: String,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    },
    size: {
      type: Number,
      required: !1
    },
    value: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = F(), a = Ar();
    pe(() => t.value, (o, i) => {
      const s = window.HTMLSelectElement.prototype, l = Object.getOwnPropertyDescriptor(s, "value").set;
      if (o !== i && l && r.value) {
        const d = new Event("change", { bubbles: !0 });
        l.call(r.value, o), r.value.dispatchEvent(d);
      }
    });
    function n(o) {
      a.onValueChange(o.target.value);
    }
    return (o, i) => (w(), z(u(Rg), { "as-child": "" }, {
      default: g(() => [le("select", I({
        ref_key: "selectElement",
        ref: r
      }, t, { onInput: n }), [C(o.$slots, "default")], 16)]),
      _: 3
    }));
  }
}), w2 = k2, x2 = /* @__PURE__ */ O({
  __name: "SelectPopperPosition",
  props: {
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1,
      default: Ot
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Fe(e);
    return (r, a) => (w(), z(u(ii), I(u(t), { style: {
      boxSizing: "border-box",
      "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-select-content-available-width": "var(--reka-popper-available-width)",
      "--reka-select-content-available-height": "var(--reka-popper-available-height)",
      "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
    } }), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), z2 = x2;
const _2 = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Yr, ub] = /* @__PURE__ */ Ee("SelectContent");
var S2 = /* @__PURE__ */ O({
  __name: "SelectContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "item-aligned"
    },
    bodyLock: {
      type: Boolean,
      required: !1,
      default: !0
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const r = e, a = t, n = Ar();
    Zo(), zn(r.bodyLock);
    const { CollectionSlot: o, getItems: i } = St(), s = F();
    Sn(s);
    const { search: l, handleTypeaheadSearch: d } = Qo(), c = F(), f = F(), y = F(), p = F(!1), k = F(!1), h = F(!1);
    function m() {
      f.value && s.value && Gs([f.value, s.value]);
    }
    pe(p, () => {
      m();
    });
    const { onOpenChange: b, triggerPointerDownPosRef: v } = n;
    ut((S) => {
      if (!s.value) return;
      let q = {
        x: 0,
        y: 0
      };
      const E = (N) => {
        q = {
          x: Math.abs(Math.round(N.pageX) - (v.value?.x ?? 0)),
          y: Math.abs(Math.round(N.pageY) - (v.value?.y ?? 0))
        };
      }, D = (N) => {
        N.pointerType !== "touch" && (q.x <= 10 && q.y <= 10 ? N.preventDefault() : s.value?.contains(N.target) || b(!1), document.removeEventListener("pointermove", E), v.value = null);
      };
      v.value !== null && (document.addEventListener("pointermove", E), document.addEventListener("pointerup", D, {
        capture: !0,
        once: !0
      })), S(() => {
        document.removeEventListener("pointermove", E), document.removeEventListener("pointerup", D, { capture: !0 });
      });
    });
    function _(S) {
      const q = S.ctrlKey || S.altKey || S.metaKey;
      if (S.key === "Tab" && S.preventDefault(), !q && S.key.length === 1 && d(S.key, i()), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(S.key)) {
        let E = [...i().map((D) => D.ref)];
        if (["ArrowUp", "End"].includes(S.key) && (E = E.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(S.key)) {
          const D = S.target, N = E.indexOf(D);
          E = E.slice(N + 1);
        }
        setTimeout(() => Gs(E)), S.preventDefault();
      }
    }
    const x = j(() => r.position === "popper" ? r : {}), $ = Fe(x.value);
    return ub({
      content: s,
      viewport: c,
      onViewportChange: (S) => {
        c.value = S;
      },
      itemRefCallback: (S, q, E) => {
        const D = !k.value && !E, N = fn(n.modelValue.value, q, n.by);
        if (n.multiple.value) {
          if (h.value) return;
          (N || D) && (f.value = S, N && (h.value = !0));
        } else (N || D) && (f.value = S);
        D && (k.value = !0);
      },
      selectedItem: f,
      selectedItemText: y,
      onItemLeave: () => {
        s.value?.focus();
      },
      itemTextRefCallback: (S, q, E) => {
        const D = !k.value && !E;
        (fn(n.modelValue.value, q, n.by) || D) && (y.value = S);
      },
      focusSelectedItem: m,
      position: r.position,
      isPositioned: p,
      searchRef: l
    }), (S, q) => (w(), z(u(o), null, {
      default: g(() => [A(u(On), {
        "as-child": "",
        onMountAutoFocus: q[6] || (q[6] = Ve(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: q[7] || (q[7] = (E) => {
          a("closeAutoFocus", E), !E.defaultPrevented && (u(n).triggerElement.value?.focus({ preventScroll: !0 }), E.preventDefault());
        })
      }, {
        default: g(() => [A(u(qn), {
          "as-child": "",
          "disable-outside-pointer-events": S.disableOutsidePointerEvents,
          onFocusOutside: q[2] || (q[2] = Ve(() => {
          }, ["prevent"])),
          onDismiss: q[3] || (q[3] = (E) => u(n).onOpenChange(!1)),
          onEscapeKeyDown: q[4] || (q[4] = (E) => a("escapeKeyDown", E)),
          onPointerDownOutside: q[5] || (q[5] = (E) => a("pointerDownOutside", E))
        }, {
          default: g(() => [(w(), z(Ur(S.position === "popper" ? z2 : E2), I({
            ...S.$attrs,
            ...u($)
          }, {
            id: u(n).contentId,
            ref: (E) => {
              if (!E) return;
              const D = u(Kt)(E);
              D?.hasAttribute("data-reka-popper-content-wrapper") ? s.value = D.firstElementChild : s.value = D;
            },
            role: "listbox",
            "data-state": u(n).open.value ? "open" : "closed",
            dir: u(n).dir.value,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none"
            },
            onContextmenu: q[0] || (q[0] = Ve(() => {
            }, ["prevent"])),
            onPlaced: q[1] || (q[1] = (E) => p.value = !0),
            onKeydown: _
          }), {
            default: g(() => [C(S.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "dir",
            "onKeydown"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), q2 = S2;
const [Zl, O2] = /* @__PURE__ */ Ee("SelectItemAlignedPosition");
var A2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const r = e, a = t, { getItems: n } = St(), o = Ar(), i = Yr(), s = F(!1), l = F(!0), d = F(), { forwardRef: c, currentElement: f } = ue(), { viewport: y, selectedItem: p, selectedItemText: k, focusSelectedItem: h } = i;
    function m() {
      if (o.triggerElement.value && o.valueElement.value && d.value && f.value && y?.value && p?.value && k?.value) {
        const _ = o.triggerElement.value.getBoundingClientRect(), x = f.value.getBoundingClientRect(), $ = o.valueElement.value.getBoundingClientRect(), S = k.value.getBoundingClientRect();
        if (o.dir.value !== "rtl") {
          const ce = S.left - x.left, Oe = $.left - ce, Y = _.left - Oe, U = _.width + Y, Q = Math.max(U, x.width), se = window.innerWidth - Ot, fe = hc(Oe, Ot, Math.max(Ot, se - Q));
          d.value.style.minWidth = `${U}px`, d.value.style.left = `${fe}px`;
        } else {
          const ce = x.right - S.right, Oe = window.innerWidth - $.right - ce, Y = window.innerWidth - _.right - Oe, U = _.width + Y, Q = Math.max(U, x.width), se = window.innerWidth - Ot, fe = hc(Oe, Ot, Math.max(Ot, se - Q));
          d.value.style.minWidth = `${U}px`, d.value.style.right = `${fe}px`;
        }
        const q = n().map((ce) => ce.ref), E = window.innerHeight - Ot * 2, D = y.value.scrollHeight, N = window.getComputedStyle(f.value), ee = Number.parseInt(N.borderTopWidth, 10), ie = Number.parseInt(N.paddingTop, 10), H = Number.parseInt(N.borderBottomWidth, 10), X = Number.parseInt(N.paddingBottom, 10), P = ee + ie + D + X + H, V = Math.min(p.value.offsetHeight * 5, P), R = window.getComputedStyle(y.value), L = Number.parseInt(R.paddingTop, 10), de = Number.parseInt(R.paddingBottom, 10), G = _.top + _.height / 2 - Ot, _e = E - G, Se = p.value.offsetHeight / 2, Le = p.value.offsetTop + Se, Ie = ee + ie + Le, be = P - Ie;
        if (Ie <= G) {
          const ce = p.value === q.at(-1);
          d.value.style.bottom = "0px";
          const Oe = f.value.clientHeight - y.value.offsetTop - y.value.offsetHeight, Y = Math.max(_e, Se + (ce ? de : 0) + Oe + H), U = Ie + Y;
          d.value.style.height = `${U}px`;
        } else {
          const ce = p.value === q[0];
          d.value.style.top = "0px";
          const Oe = Math.max(G, ee + y.value.offsetTop + (ce ? L : 0) + Se) + be;
          d.value.style.height = `${Oe}px`, y.value.scrollTop = Ie - G + y.value.offsetTop;
        }
        d.value.style.margin = `${Ot}px 0`, d.value.style.minHeight = `${V}px`, d.value.style.maxHeight = `${E}px`, a("placed"), requestAnimationFrame(() => s.value = !0);
      }
    }
    const b = F("");
    xe(async () => {
      await we(), m(), f.value && (b.value = window.getComputedStyle(f.value).zIndex);
    });
    function v(_) {
      _ && l.value === !0 && (m(), h?.(), l.value = !1);
    }
    return A0(o.triggerElement, () => {
      m();
    }), O2({
      contentWrapper: d,
      shouldExpandOnScrollRef: s,
      onScrollButtonChange: v
    }), (_, x) => (w(), Z("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: Ut({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: b.value
      })
    }, [A(u(oe), I({
      ref: u(c),
      style: {
        boxSizing: "border-box",
        maxHeight: "100%"
      }
    }, {
      ..._.$attrs,
      ...r
    }), {
      default: g(() => [C(_.$slots, "default")]),
      _: 3
    }, 16)], 4));
  }
}), E2 = A2, C2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: !0
  } },
  setup(e) {
    return lb(e.context), ub(_2), (t, r) => C(t.$slots, "default");
  }
}), $2 = C2;
const B2 = { key: 1 };
var D2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    memoDependencies: {
      type: Array,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(e, { emit: t }) {
    const r = e, a = Ce(r, t), n = Ar(), o = F();
    xe(() => {
      o.value = new DocumentFragment();
    });
    const i = F(), s = j(() => r.forceMount || n.open.value), l = F(s.value);
    let d;
    function c() {
      d && (clearTimeout(d), d = void 0);
    }
    return pe(s, (f, y, p) => {
      c(), d = setTimeout(() => {
        l.value = s.value, d = void 0;
      }), p(c);
    }), _t(c), (f, y) => s.value || l.value || i.value?.present ? (w(), z(u(Kr), {
      key: 0,
      ref_key: "presenceRef",
      ref: i,
      present: s.value
    }, {
      default: g(() => [A(q2, Be(Ue({
        ...u(a),
        ...f.$attrs
      })), {
        default: g(() => [C(f.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"])) : o.value ? (w(), Z("div", B2, [(w(), z(Pf, { to: o.value }, [A($2, { context: u(n) }, {
      default: g(() => [C(f.$slots, "default")]),
      _: 3
    }, 8, ["context"])], 8, ["to"]))])) : re("v-if", !0);
  }
}), M2 = D2;
const [P2, j2] = /* @__PURE__ */ Ee("SelectGroup");
var F2 = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = tt(void 0, "reka-select-group");
    return j2({ id: r }), (a, n) => (w(), z(u(oe), I({ role: "group" }, t, { "aria-labelledby": u(r) }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), I2 = F2, T2 = /* @__PURE__ */ O({
  __name: "SelectIcon",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(oe), {
      "aria-hidden": "true",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: g(() => [C(t.$slots, "default", {}, () => [r[0] || (r[0] = J("▼"))])]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), R2 = T2;
const [db, N2] = /* @__PURE__ */ Ee("SelectItem");
var V2 = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = t, { disabled: n } = Xe(r), o = Ar(), i = Yr(), { forwardRef: s, currentElement: l } = ue(), { CollectionItem: d } = St(), c = j(() => fn(o.modelValue?.value, r.value, o.by)), f = F(!1), y = F(r.textValue ?? ""), p = tt(void 0, "reka-select-item-text"), k = "select.select";
    async function h(x) {
      if (x.defaultPrevented) return;
      const $ = {
        originalEvent: x,
        value: r.value
      };
      Ho(k, m, $);
    }
    async function m(x) {
      await we(), a("select", x), !x.defaultPrevented && (n.value || (o.onValueChange(r.value), o.multiple.value || o.onOpenChange(!1)));
    }
    async function b(x) {
      await we(), !x.defaultPrevented && (n.value ? i.onItemLeave?.() : x.currentTarget?.focus({ preventScroll: !0 }));
    }
    async function v(x) {
      await we(), !x.defaultPrevented && x.currentTarget === Ke() && i.onItemLeave?.();
    }
    async function _(x) {
      await we(), !(x.defaultPrevented || i.searchRef?.value !== "" && x.key === " ") && (m2.includes(x.key) && h(x), x.key === " " && x.preventDefault());
    }
    if (r.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return xe(() => {
      l.value && i.itemRefCallback(l.value, r.value, r.disabled);
    }), N2({
      value: r.value,
      disabled: n,
      textId: p,
      isSelected: c,
      onItemTextChange: (x) => {
        y.value = ((y.value || x?.textContent) ?? "").trim();
      }
    }), (x, $) => (w(), z(u(d), { value: { textValue: y.value } }, {
      default: g(() => [A(u(oe), {
        ref: u(s),
        role: "option",
        "aria-labelledby": u(p),
        "data-highlighted": f.value ? "" : void 0,
        "aria-selected": c.value,
        "data-state": c.value ? "checked" : "unchecked",
        "aria-disabled": u(n) || void 0,
        "data-disabled": u(n) ? "" : void 0,
        tabindex: u(n) ? void 0 : -1,
        as: x.as,
        "as-child": x.asChild,
        onFocus: $[0] || ($[0] = (S) => f.value = !0),
        onBlur: $[1] || ($[1] = (S) => f.value = !1),
        onPointerup: h,
        onPointerdown: $[2] || ($[2] = (S) => {
          S.currentTarget.focus({ preventScroll: !0 });
        }),
        onTouchend: $[3] || ($[3] = Ve(() => {
        }, ["prevent", "stop"])),
        onPointermove: b,
        onPointerleave: v,
        onKeydown: _
      }, {
        default: g(() => [C(x.$slots, "default")]),
        _: 3
      }, 8, [
        "aria-labelledby",
        "data-highlighted",
        "aria-selected",
        "data-state",
        "aria-disabled",
        "data-disabled",
        "tabindex",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), U2 = V2, L2 = /* @__PURE__ */ O({
  __name: "SelectItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, r = db();
    return (a, n) => u(r).isSelected.value ? (w(), z(u(oe), I({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16)) : re("v-if", !0);
  }
}), W2 = L2, K2 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, r = Ar(), a = Yr(), n = db(), { forwardRef: o, currentElement: i } = ue(), s = j(() => ({
      value: n.value,
      disabled: n.disabled.value,
      textContent: i.value?.textContent ?? n.value?.toString() ?? ""
    }));
    return xe(() => {
      i.value && (n.onItemTextChange(i.value), a.itemTextRefCallback(i.value, n.value, n.disabled.value), r.onOptionAdd(s.value));
    }), _t(() => {
      r.onOptionRemove(s.value);
    }), (l, d) => (w(), z(u(oe), I({
      id: u(n).textId,
      ref: u(o)
    }, {
      ...t,
      ...l.$attrs
    }), {
      default: g(() => [C(l.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), H2 = K2, G2 = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  setup(e) {
    const t = e, r = P2({ id: "" });
    return (a, n) => (w(), z(u(oe), I(t, { id: u(r).id }), {
      default: g(() => [C(a.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), Y2 = G2, Z2 = /* @__PURE__ */ O({
  __name: "SelectPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Ta), Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), J2 = Z2, Q2 = /* @__PURE__ */ O({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const r = t, { getItems: a } = St(), n = Yr(), o = F(null);
    function i() {
      o.value !== null && (window.clearInterval(o.value), o.value = null);
    }
    ut(() => {
      a().map((d) => d.ref).find((d) => d === Ke())?.scrollIntoView({ block: "nearest" });
    });
    function s() {
      o.value === null && (o.value = window.setInterval(() => {
        r("autoScroll");
      }, 50));
    }
    function l() {
      n.onItemLeave?.(), o.value === null && (o.value = window.setInterval(() => {
        r("autoScroll");
      }, 50));
    }
    return jf(() => i()), (d, c) => (w(), z(u(oe), I({
      "aria-hidden": "true",
      style: { flexShrink: 0 }
    }, d.$parent?.$props, {
      onPointerdown: s,
      onPointermove: l,
      onPointerleave: c[0] || (c[0] = () => {
        i();
      })
    }), {
      default: g(() => [C(d.$slots, "default")]),
      _: 3
    }, 16));
  }
}), cb = Q2, X2 = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Yr(), r = t.position === "item-aligned" ? Zl() : void 0, { forwardRef: a, currentElement: n } = ue(), o = F(!1);
    return ut((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let s = function() {
          const d = l.scrollHeight - l.clientHeight;
          o.value = Math.ceil(l.scrollTop) < d;
        };
        const l = t.viewport.value;
        s(), l.addEventListener("scroll", s), i(() => l.removeEventListener("scroll", s));
      }
    }), pe(n, () => {
      n.value && r?.onScrollButtonChange(n.value);
    }), (i, s) => o.value ? (w(), z(cb, {
      key: 0,
      ref: u(a),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: l, selectedItem: d } = u(t);
        l?.value && d?.value && (l.value.scrollTop = l.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: g(() => [C(i.$slots, "default")]),
      _: 3
    }, 512)) : re("v-if", !0);
  }
}), eD = X2, tD = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Yr(), r = t.position === "item-aligned" ? Zl() : void 0, { forwardRef: a, currentElement: n } = ue(), o = F(!1);
    return ut((i) => {
      if (t.viewport?.value && t.isPositioned?.value) {
        let s = function() {
          o.value = l.scrollTop > 0;
        };
        const l = t.viewport.value;
        s(), l.addEventListener("scroll", s), i(() => l.removeEventListener("scroll", s));
      }
    }), pe(n, () => {
      n.value && r?.onScrollButtonChange(n.value);
    }), (i, s) => o.value ? (w(), z(cb, {
      key: 0,
      ref: u(a),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: l, selectedItem: d } = u(t);
        l?.value && d?.value && (l.value.scrollTop = l.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: g(() => [C(i.$slots, "default")]),
      _: 3
    }, 512)) : re("v-if", !0);
  }
}), rD = tD, aD = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = Ar(), { forwardRef: a, currentElement: n } = ue(), o = j(() => r.disabled?.value || t.disabled);
    r.contentId ||= tt(void 0, "reka-select-content"), xe(() => {
      r.onTriggerChange(n.value);
    });
    const { getItems: i } = St(), { search: s, handleTypeaheadSearch: l, resetTypeahead: d } = Qo();
    function c() {
      o.value || (r.onOpenChange(!0), d());
    }
    function f(b) {
      c(), r.triggerPointerDownPosRef.value = {
        x: Math.round(b.pageX),
        y: Math.round(b.pageY)
      };
    }
    function y(b) {
      return b.button === 0 && b.ctrlKey === !1;
    }
    let p = !1;
    function k(b) {
      if (b.pointerType === "touch") return b.preventDefault();
      const v = b.target;
      v.hasPointerCapture(b.pointerId) && v.releasePointerCapture(b.pointerId), y(b) && (f(b), p = !0);
    }
    function h(b) {
      y(b) && b.preventDefault();
    }
    function m(b) {
      p || b.currentTarget?.focus(), p = !1;
    }
    return (b, v) => (w(), z(u(ti), {
      "as-child": "",
      reference: b.reference
    }, {
      default: g(() => [A(u(oe), {
        ref: u(a),
        role: "combobox",
        type: b.as === "button" ? "button" : void 0,
        "aria-controls": u(r).contentId,
        "aria-expanded": u(r).open.value || !1,
        "aria-required": u(r).required?.value,
        "aria-autocomplete": "none",
        disabled: o.value,
        dir: u(r)?.dir.value,
        "data-state": u(r)?.open.value ? "open" : "closed",
        "data-disabled": o.value ? "" : void 0,
        "data-placeholder": u(h2)(u(r).modelValue?.value) ? "" : void 0,
        "as-child": b.asChild,
        as: b.as,
        onClick: m,
        onPointerdown: k,
        onMousedown: h,
        onPointerup: v[0] || (v[0] = Ve((_) => {
          _.pointerType === "touch" && f(_);
        }, ["prevent"])),
        onKeydown: v[1] || (v[1] = (_) => {
          const x = u(s) !== "";
          !(_.ctrlKey || _.altKey || _.metaKey) && _.key.length === 1 && x && _.key === " " || (u(l)(_.key, u(i)()), u(y2).includes(_.key) && (c(), _.preventDefault()));
        })
      }, {
        default: g(() => [C(b.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "aria-controls",
        "aria-expanded",
        "aria-required",
        "disabled",
        "dir",
        "data-state",
        "data-disabled",
        "data-placeholder",
        "as-child",
        "as"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), nD = aD, oD = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {
      type: String,
      required: !1,
      default: ""
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: a } = ue(), n = Ar();
    xe(() => {
      n.valueElement = a;
    });
    const o = j(() => {
      let s = [];
      const l = Array.from(n.optionsSet.value), d = (c) => l.find((f) => fn(c, f.value, n.by));
      return Array.isArray(n.modelValue.value) ? s = n.modelValue.value.map((c) => d(c)?.textContent ?? "") : s = [d(n.modelValue.value)?.textContent ?? ""], s.filter(Boolean);
    }), i = j(() => o.value.length ? o.value.join(", ") : t.placeholder);
    return (s, l) => (w(), z(u(oe), {
      ref: u(r),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" },
      "data-placeholder": o.value.length ? void 0 : t.placeholder
    }, {
      default: g(() => [C(s.$slots, "default", {
        selectedLabel: o.value,
        modelValue: u(n).modelValue.value
      }, () => [J(W(i.value), 1)])]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-placeholder"
    ]));
  }
}), iD = oD, sD = /* @__PURE__ */ O({
  __name: "SelectViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { nonce: r } = Xe(t), a = h$(r), n = Yr(), o = n.position === "item-aligned" ? Zl() : void 0, { forwardRef: i, currentElement: s } = ue();
    xe(() => {
      n?.onViewportChange(s.value);
    });
    const l = F(0);
    function d(c) {
      const f = c.currentTarget, { shouldExpandOnScrollRef: y, contentWrapper: p } = o ?? {};
      if (y?.value && p?.value) {
        const k = Math.abs(l.value - f.scrollTop);
        if (k > 0) {
          const h = window.innerHeight - Ot * 2, m = Number.parseFloat(p.value.style.minHeight), b = Number.parseFloat(p.value.style.height), v = Math.max(m, b);
          if (v < h) {
            const _ = v + k, x = Math.min(h, _), $ = _ - x;
            p.value.style.height = `${x}px`, p.value.style.bottom === "0px" && (f.scrollTop = $ > 0 ? $ : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = f.scrollTop;
    }
    return (c, f) => (w(), Z(Pe, null, [A(u(oe), I({
      ref: u(i),
      "data-reka-select-viewport": "",
      role: "presentation"
    }, {
      ...c.$attrs,
      ...t
    }, {
      style: {
        position: "relative",
        flex: 1,
        overflow: "hidden auto"
      },
      onScroll: d
    }), {
      default: g(() => [C(c.$slots, "default")]),
      _: 3
    }, 16), A(u(oe), {
      as: "style",
      nonce: u(a)
    }, {
      default: g(() => f[0] || (f[0] = [J(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), lD = sD, uD = /* @__PURE__ */ O({
  __name: "BaseSeparator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = ["horizontal", "vertical"];
    function a(s) {
      return r.includes(s);
    }
    const n = j(() => a(t.orientation) ? t.orientation : "horizontal"), o = j(() => n.value === "vertical" ? t.orientation : void 0), i = j(() => t.decorative ? { role: "none" } : {
      "aria-orientation": o.value,
      role: "separator"
    });
    return (s, l) => (w(), z(u(oe), I({
      as: s.as,
      "as-child": s.asChild,
      "data-orientation": n.value
    }, i.value), {
      default: g(() => [C(s.$slots, "default")]),
      _: 3
    }, 16, [
      "as",
      "as-child",
      "data-orientation"
    ]));
  }
}), dD = uD, cD = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: "horizontal"
    },
    decorative: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(dD, Be(Ue(t)), {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fD = cD;
function pD() {
  if (typeof matchMedia == "function") return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
pD();
const [yD, mD] = /* @__PURE__ */ Ee("SwitchRoot");
var hD = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SwitchRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    value: {
      type: String,
      required: !1,
      default: "on"
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, { disabled: n } = Xe(r), o = /* @__PURE__ */ et(r, "modelValue", a, {
      defaultValue: r.defaultValue ?? r.falseValue,
      passive: r.modelValue === void 0
    }), i = j(() => o.value === r.trueValue);
    function s() {
      n.value || (o.value = i.value ? r.falseValue : r.trueValue);
    }
    const { forwardRef: l, currentElement: d } = ue(), c = Jo(d), f = qg(), y = j(() => r.id && d.value ? document.querySelector(`[for="${r.id}"]`)?.innerText : void 0);
    return mD({
      checked: i,
      toggleCheck: s,
      disabled: n
    }), (p, k) => (w(), Z(Pe, null, [A(u(oe), I({
      id: p.id,
      ref: u(l),
      role: "switch",
      type: p.as === "button" ? "button" : void 0,
      value: p.value,
      "aria-label": p.$attrs["aria-label"] || y.value,
      "aria-checked": i.value,
      "aria-required": p.required,
      "data-state": i.value ? "checked" : "unchecked",
      "data-disabled": u(n) ? "" : void 0,
      "as-child": p.asChild,
      as: p.as,
      disabled: u(n)
    }, {
      ...u(f),
      ...p.$attrs
    }, {
      onClick: s,
      onKeydown: zt(Ve(s, ["prevent"]), ["enter"])
    }), {
      default: g(() => [C(p.$slots, "default", {
        modelValue: u(o),
        checked: i.value
      })]),
      _: 3
    }, 16, [
      "id",
      "type",
      "value",
      "aria-label",
      "aria-checked",
      "aria-required",
      "data-state",
      "data-disabled",
      "as-child",
      "as",
      "disabled",
      "onKeydown"
    ]), u(c) && p.name ? (w(), z(u(Rl), I({
      key: 0,
      type: "checkbox",
      name: p.name,
      disabled: u(n),
      required: p.required,
      value: p.value,
      checked: i.value
    }, u(f)), null, 16, [
      "name",
      "disabled",
      "required",
      "value",
      "checked"
    ])) : re("v-if", !0)], 64));
  }
}), vD = hD, gD = /* @__PURE__ */ O({
  __name: "SwitchThumb",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = yD();
    return ue(), (r, a) => (w(), z(u(oe), {
      "data-state": u(t).checked.value ? "checked" : "unchecked",
      "data-disabled": u(t).disabled.value ? "" : void 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: g(() => [C(r.$slots, "default")]),
      _: 3
    }, 8, [
      "data-state",
      "data-disabled",
      "as-child",
      "as"
    ]));
  }
}), bD = gD;
function fb(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = fb(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function pb() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = fb(e)) && (a && (a += " "), a += t);
  return a;
}
const kD = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let a = 0; a < e.length; a++)
    r[a] = e[a];
  for (let a = 0; a < t.length; a++)
    r[e.length + a] = t[a];
  return r;
}, wD = (e, t) => ({
  classGroupId: e,
  validator: t
}), yb = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Oo = "-", of = [], xD = "arbitrary..", zD = (e) => {
  const t = SD(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (n) => {
      if (n.startsWith("[") && n.endsWith("]"))
        return _D(n);
      const o = n.split(Oo), i = o[0] === "" && o.length > 1 ? 1 : 0;
      return mb(o, i, t);
    },
    getConflictingClassGroupIds: (n, o) => {
      if (o) {
        const i = a[n], s = r[n];
        return i ? s ? kD(s, i) : i : s || of;
      }
      return r[n] || of;
    }
  };
}, mb = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const a = e[t], n = r.nextPart.get(a);
  if (n) {
    const l = mb(e, t + 1, n);
    if (l) return l;
  }
  const o = r.validators;
  if (o === null)
    return;
  const i = t === 0 ? e.join(Oo) : e.slice(t).join(Oo), s = o.length;
  for (let l = 0; l < s; l++) {
    const d = o[l];
    if (d.validator(i))
      return d.classGroupId;
  }
}, _D = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), a = t.slice(0, r);
  return a ? xD + a : void 0;
})(), SD = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return qD(r, t);
}, qD = (e, t) => {
  const r = yb();
  for (const a in e) {
    const n = e[a];
    Jl(n, r, a, t);
  }
  return r;
}, Jl = (e, t, r, a) => {
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = e[o];
    OD(i, t, r, a);
  }
}, OD = (e, t, r, a) => {
  if (typeof e == "string") {
    AD(e, t, r);
    return;
  }
  if (typeof e == "function") {
    ED(e, t, r, a);
    return;
  }
  CD(e, t, r, a);
}, AD = (e, t, r) => {
  const a = e === "" ? t : hb(t, e);
  a.classGroupId = r;
}, ED = (e, t, r, a) => {
  if ($D(e)) {
    Jl(e(a), t, r, a);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(wD(r, e));
}, CD = (e, t, r, a) => {
  const n = Object.entries(e), o = n.length;
  for (let i = 0; i < o; i++) {
    const [s, l] = n[i];
    Jl(l, hb(t, s), r, a);
  }
}, hb = (e, t) => {
  let r = e;
  const a = t.split(Oo), n = a.length;
  for (let o = 0; o < n; o++) {
    const i = a[o];
    let s = r.nextPart.get(i);
    s || (s = yb(), r.nextPart.set(i, s)), r = s;
  }
  return r;
}, $D = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, BD = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  const n = (o, i) => {
    r[o] = i, t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let i = r[o];
      if (i !== void 0)
        return i;
      if ((i = a[o]) !== void 0)
        return n(o, i), i;
    },
    set(o, i) {
      o in r ? r[o] = i : n(o, i);
    }
  };
}, tl = "!", sf = ":", DD = [], lf = (e, t, r, a, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: a,
  isExternal: n
}), MD = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let a = (n) => {
    const o = [];
    let i = 0, s = 0, l = 0, d;
    const c = n.length;
    for (let h = 0; h < c; h++) {
      const m = n[h];
      if (i === 0 && s === 0) {
        if (m === sf) {
          o.push(n.slice(l, h)), l = h + 1;
          continue;
        }
        if (m === "/") {
          d = h;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? s++ : m === ")" && s--;
    }
    const f = o.length === 0 ? n : n.slice(l);
    let y = f, p = !1;
    f.endsWith(tl) ? (y = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(tl) && (y = f.slice(1), p = !0)
    );
    const k = d && d > l ? d - l : void 0;
    return lf(o, p, y, k);
  };
  if (t) {
    const n = t + sf, o = a;
    a = (i) => i.startsWith(n) ? o(i.slice(n.length)) : lf(DD, !1, i, void 0, !0);
  }
  if (r) {
    const n = a;
    a = (o) => r({
      className: o,
      parseClassName: n
    });
  }
  return a;
}, PD = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, a) => {
    t.set(r, 1e6 + a);
  }), (r) => {
    const a = [];
    let n = [];
    for (let o = 0; o < r.length; o++) {
      const i = r[o], s = i[0] === "[", l = t.has(i);
      s || l ? (n.length > 0 && (n.sort(), a.push(...n), n = []), a.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), a.push(...n)), a;
  };
}, jD = (e) => ({
  cache: BD(e.cacheSize),
  parseClassName: MD(e),
  sortModifiers: PD(e),
  ...zD(e)
}), FD = /\s+/, ID = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = t, i = [], s = e.trim().split(FD);
  let l = "";
  for (let d = s.length - 1; d >= 0; d -= 1) {
    const c = s[d], {
      isExternal: f,
      modifiers: y,
      hasImportantModifier: p,
      baseClassName: k,
      maybePostfixModifierPosition: h
    } = r(c);
    if (f) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let m = !!h, b = a(m ? k.substring(0, h) : k);
    if (!b) {
      if (!m) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (b = a(k), !b) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      m = !1;
    }
    const v = y.length === 0 ? "" : y.length === 1 ? y[0] : o(y).join(":"), _ = p ? v + tl : v, x = _ + b;
    if (i.indexOf(x) > -1)
      continue;
    i.push(x);
    const $ = n(b, m);
    for (let S = 0; S < $.length; ++S) {
      const q = $[S];
      i.push(_ + q);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
}, TD = (...e) => {
  let t = 0, r, a, n = "";
  for (; t < e.length; )
    (r = e[t++]) && (a = vb(r)) && (n && (n += " "), n += a);
  return n;
}, vb = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = vb(e[a])) && (r && (r += " "), r += t);
  return r;
}, RD = (e, ...t) => {
  let r, a, n, o;
  const i = (l) => {
    const d = t.reduce((c, f) => f(c), e());
    return r = jD(d), a = r.cache.get, n = r.cache.set, o = s, s(l);
  }, s = (l) => {
    const d = a(l);
    if (d)
      return d;
    const c = ID(l, r);
    return n(l, c), c;
  };
  return o = i, (...l) => o(TD(...l));
}, ND = [], Je = (e) => {
  const t = (r) => r[e] || ND;
  return t.isThemeGetter = !0, t;
}, gb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, VD = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, UD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, LD = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, WD = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, KD = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, HD = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, yr = (e) => VD.test(e), he = (e) => !!e && !Number.isNaN(Number(e)), mr = (e) => !!e && Number.isInteger(Number(e)), gs = (e) => e.endsWith("%") && he(e.slice(0, -1)), Xt = (e) => UD.test(e), kb = () => !0, GD = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  LD.test(e) && !WD.test(e)
), Ql = () => !1, YD = (e) => KD.test(e), ZD = (e) => HD.test(e), JD = (e) => !ae(e) && !ne(e), QD = (e) => Er(e, zb, Ql), ae = (e) => gb.test(e), Mr = (e) => Er(e, _b, GD), uf = (e) => Er(e, iM, he), XD = (e) => Er(e, qb, kb), eM = (e) => Er(e, Sb, Ql), df = (e) => Er(e, wb, Ql), tM = (e) => Er(e, xb, ZD), Kn = (e) => Er(e, Ob, YD), ne = (e) => bb.test(e), Ja = (e) => Zr(e, _b), rM = (e) => Zr(e, Sb), cf = (e) => Zr(e, wb), aM = (e) => Zr(e, zb), nM = (e) => Zr(e, xb), Hn = (e) => Zr(e, Ob, !0), oM = (e) => Zr(e, qb, !0), Er = (e, t, r) => {
  const a = gb.exec(e);
  return a ? a[1] ? t(a[1]) : r(a[2]) : !1;
}, Zr = (e, t, r = !1) => {
  const a = bb.exec(e);
  return a ? a[1] ? t(a[1]) : r : !1;
}, wb = (e) => e === "position" || e === "percentage", xb = (e) => e === "image" || e === "url", zb = (e) => e === "length" || e === "size" || e === "bg-size", _b = (e) => e === "length", iM = (e) => e === "number", Sb = (e) => e === "family-name", qb = (e) => e === "number" || e === "weight", Ob = (e) => e === "shadow", sM = () => {
  const e = Je("color"), t = Je("font"), r = Je("text"), a = Je("font-weight"), n = Je("tracking"), o = Je("leading"), i = Je("breakpoint"), s = Je("container"), l = Je("spacing"), d = Je("radius"), c = Je("shadow"), f = Je("inset-shadow"), y = Je("text-shadow"), p = Je("drop-shadow"), k = Je("blur"), h = Je("perspective"), m = Je("aspect"), b = Je("ease"), v = Je("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...x(), ne, ae], S = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", "contain", "none"], E = () => [ne, ae, l], D = () => [yr, "full", "auto", ...E()], N = () => [mr, "none", "subgrid", ne, ae], ee = () => ["auto", {
    span: ["full", mr, ne, ae]
  }, mr, ne, ae], ie = () => [mr, "auto", ne, ae], H = () => ["auto", "min", "max", "fr", ne, ae], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], P = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...E()], R = () => [yr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], L = () => [yr, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...E()], de = () => [yr, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...E()], G = () => [e, ne, ae], _e = () => [...x(), cf, df, {
    position: [ne, ae]
  }], Se = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Le = () => ["auto", "cover", "contain", aM, QD, {
    size: [ne, ae]
  }], Ie = () => [gs, Ja, Mr], be = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    ne,
    ae
  ], ce = () => ["", he, Ja, Mr], Oe = () => ["solid", "dashed", "dotted", "double"], Y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [he, gs, cf, df], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    k,
    ne,
    ae
  ], se = () => ["none", he, ne, ae], fe = () => ["none", he, ne, ae], ge = () => [he, ne, ae], Ze = () => [yr, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Xt],
      breakpoint: [Xt],
      color: [kb],
      container: [Xt],
      "drop-shadow": [Xt],
      ease: ["in", "out", "in-out"],
      font: [JD],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Xt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Xt],
      shadow: [Xt],
      spacing: ["px", he],
      text: [Xt],
      "text-shadow": [Xt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", yr, ae, ne, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [he, ae, ne, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: D()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: D()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: D()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": D()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [mr, "auto", ne, ae]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [yr, "full", "auto", s, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [he, yr, "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", he, ne, ae]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", he, ne, ae]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [mr, "first", "last", "none", ne, ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": N()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ee()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ie()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ie()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": N()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ee()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ie()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ie()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...X(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...P(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...P()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...P(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": X()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...P(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...P()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: E()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: V()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: R()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...L()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...L()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...L()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...de()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...de()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...de()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...R()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...R()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...R()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...R()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...R()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...R()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Ja, Mr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [a, oM, XD]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", gs, ae]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rM, eM, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ae]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, ne, ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [he, "none", ne, uf]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ne, ae]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ne, ae]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [he, "from-font", "auto", ne, Mr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [he, "auto", ne, ae]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, ae]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ne, ae]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: _e()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Se()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Le()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, mr, ne, ae],
          radial: ["", ne, ae],
          conic: [mr, ne, ae]
        }, nM, tM]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Ie()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Ie()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Ie()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: be()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": be()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": be()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": be()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": be()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": be()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": be()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": be()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": be()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": be()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": be()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": be()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": be()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": be()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": be()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: ce()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": ce()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": ce()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": ce()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": ce()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": ce()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": ce()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": ce()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": ce()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": ce()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": ce()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": ce()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": ce()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": G()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [he, ne, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", he, Ja, Mr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Hn,
          Kn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Hn, Kn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: ce()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [he, Mr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": ce()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Hn, Kn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [he, ne, ae]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Y(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [he]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [ne, ae]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [he]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: _e()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Se()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Le()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ne, ae]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ne,
          ae
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [he, ne, ae]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [he, ne, ae]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Hn,
          Kn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", he, ne, ae]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [he, ne, ae]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", he, ne, ae]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [he, ne, ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", he, ne, ae]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ne,
          ae
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [he, ne, ae]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [he, ne, ae]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", he, ne, ae]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [he, ne, ae]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", he, ne, ae]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [he, ne, ae]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [he, ne, ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", he, ne, ae]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, ae]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [he, "initial", ne, ae]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, ne, ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [he, ne, ae]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, ne, ae]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, ne, ae]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: fe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": fe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": fe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": fe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ge()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ge()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ge()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ne, ae, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ze()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ze()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ze()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ze()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: G()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: G()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, ae]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": E()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": E()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ne, ae]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [he, Ja, Mr, uf]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, lM = /* @__PURE__ */ RD(sM);
function te(...e) {
  return lM(pb(e));
}
const uM = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
}, ff = (e) => e === "", dM = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim(), pf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cM = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), fM = (e) => {
  const t = cM(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Qa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const pM = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: r,
  "absolute-stroke-width": a,
  strokeWidth: n,
  "stroke-width": o,
  size: i = Qa.width,
  color: s = Qa.stroke,
  ...l
}, { slots: d }) => ar(
  "svg",
  {
    ...Qa,
    ...l,
    width: i,
    height: i,
    stroke: s,
    "stroke-width": ff(r) || ff(a) || r === !0 || a === !0 ? Number(n || o || Qa["stroke-width"]) * 24 / Number(i) : n || o || Qa["stroke-width"],
    class: dM(
      "lucide",
      l.class,
      ...e ? [`lucide-${pf(fM(e))}-icon`, `lucide-${pf(e)}`] : ["lucide-icon"]
    ),
    ...!d.default && !uM(l) && { "aria-hidden": "true" }
  },
  [...t.map((c) => ar(...c)), ...d.default ? [d.default()] : []]
), Mt = (e, t) => (r, { slots: a, attrs: n }) => ar(
  pM,
  {
    ...n,
    ...r,
    iconNode: t,
    name: e
  },
  a
), yM = Mt("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), Xl = Mt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]), Ab = Mt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), mM = Mt("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), hM = Mt("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), vM = Mt("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), gM = Mt("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]), bM = Mt("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), kM = Mt("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]), wM = Mt("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]), Eb = Mt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), yf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mf = pb, Cb = (e, t) => (r) => {
  var a;
  if (t?.variants == null) return mf(e, r?.class, r?.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((d) => {
    const c = r?.[d], f = o?.[d];
    if (c === null) return null;
    const y = yf(c) || yf(f);
    return n[d][y];
  }), s = r && Object.entries(r).reduce((d, c) => {
    let [f, y] = c;
    return y === void 0 || (d[f] = y), d;
  }, {}), l = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((d, c) => {
    let { class: f, className: y, ...p } = c;
    return Object.entries(p).every((k) => {
      let [h, m] = k;
      return Array.isArray(m) ? m.includes({
        ...o,
        ...s
      }[h]) : {
        ...o,
        ...s
      }[h] === m;
    }) ? [
      ...d,
      f,
      y
    ] : d;
  }, []);
  return mf(e, i, l, r?.class, r?.className);
}, xM = /* @__PURE__ */ O({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(uE), I({ "data-slot": "alert-dialog" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vr = /* @__PURE__ */ O({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: { type: [Boolean, null, String, Object, Array] },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(oe), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ve(u(te)(u(Va)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Va = Cb(
  "zkit:inline-flex zkit:items-center zkit:justify-center zkit:gap-2 zkit:whitespace-nowrap zkit:rounded-md zkit:text-sm zkit:font-medium zkit:transition-all zkit:disabled:pointer-events-none zkit:disabled:opacity-50 zkit:[&_svg]:pointer-events-none zkit:[&_svg:not([class*='size-'])]:size-4 zkit:shrink-0 zkit:[&_svg]:shrink-0 zkit:outline-none zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:focus-visible:ring-[3px] zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "zkit:bg-primary zkit:text-primary-foreground zkit:shadow-xs zkit:hover:bg-primary/90",
        destructive: "zkit:bg-destructive zkit:text-white zkit:shadow-xs zkit:hover:bg-destructive/90 zkit:focus-visible:ring-destructive/20 zkit:dark:focus-visible:ring-destructive/40 zkit:dark:bg-destructive/60",
        outline: "zkit:border zkit:bg-background zkit:shadow-xs zkit:hover:bg-accent zkit:hover:text-accent-foreground zkit:dark:bg-input/30 zkit:dark:border-input zkit:dark:hover:bg-input/50",
        secondary: "zkit:bg-secondary zkit:text-secondary-foreground zkit:shadow-xs zkit:hover:bg-secondary/80",
        ghost: "zkit:hover:bg-accent zkit:hover:text-accent-foreground zkit:dark:hover:bg-accent/50",
        link: "zkit:text-primary zkit:underline-offset-4 zkit:hover:underline"
      },
      size: {
        default: "zkit:h-9 zkit:px-4 zkit:py-2 zkit:has-[>svg]:px-3",
        sm: "zkit:h-8 zkit:rounded-md zkit:gap-1.5 zkit:px-3 zkit:has-[>svg]:px-2.5",
        lg: "zkit:h-10 zkit:rounded-md zkit:px-6 zkit:has-[>svg]:px-4",
        icon: "zkit:size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), zM = /* @__PURE__ */ O({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(YA), I(u(r), {
      class: u(te)(u(Va)(), t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _M = /* @__PURE__ */ O({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(tE), I(u(r), {
      class: u(te)(
        u(Va)({ variant: "zkit:outline" }),
        "zkit:mt-2 zkit:sm:mt-0",
        t.class
      )
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), SM = /* @__PURE__ */ O({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(sE), null, {
      default: g(() => [
        A(u(oE), {
          "data-slot": "alert-dialog-overlay",
          class: "zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80"
        }),
        A(u(XA), I({ "data-slot": "alert-dialog-content" }, u(o), {
          class: u(te)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            r.class
          )
        }), {
          default: g(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), qM = /* @__PURE__ */ O({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(aE), I({ "data-slot": "alert-dialog-description" }, u(r), {
      class: u(te)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), OM = /* @__PURE__ */ O({
  __name: "AlertDialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("div", {
      "data-slot": "alert-dialog-footer",
      class: ve(
        u(te)(
          "zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end",
          t.class
        )
      )
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), AM = /* @__PURE__ */ O({
  __name: "AlertDialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("div", {
      "data-slot": "alert-dialog-header",
      class: ve(u(te)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), EM = /* @__PURE__ */ O({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(cE), I({ "data-slot": "alert-dialog-title" }, u(r), {
      class: u(te)("zkit:text-lg zkit:font-semibold", t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), CM = /* @__PURE__ */ O({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(pE), I({ "data-slot": "alert-dialog-trigger" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hf = /* @__PURE__ */ O({
  __name: "Avatar",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(b$), {
      "data-slot": "avatar",
      class: ve(u(te)("zkit:relative zkit:flex zkit:size-8 zkit:shrink-0 zkit:overflow-hidden zkit:rounded-full", t.class))
    }, {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), vf = /* @__PURE__ */ O({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(w$), I({ "data-slot": "avatar-fallback" }, u(r), {
      class: u(te)("zkit:bg-muted zkit:flex zkit:size-full zkit:items-center zkit:justify-center zkit:rounded-full", t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gf = /* @__PURE__ */ O({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    crossOrigin: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(_$), I({ "data-slot": "avatar-image" }, t, { class: "zkit:aspect-square zkit:size-full" }), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $M = /* @__PURE__ */ O({
  __name: "Badge",
  props: {
    asChild: { type: Boolean },
    as: {},
    variant: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(oe), I({
      "data-slot": "badge",
      class: u(te)(u(BM)({ variant: e.variant }), t.class)
    }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BM = Cb(
  "zkit:inline-flex zkit:items-center zkit:justify-center zkit:rounded-md zkit:border zkit:px-2 zkit:py-0.5 zkit:text-xs zkit:font-medium zkit:w-fit zkit:whitespace-nowrap zkit:shrink-0 zkit:[&>svg]:size-3 zkit:gap-1 zkit:[&>svg]:pointer-events-none zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:focus-visible:ring-[3px] zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:transition-[color,box-shadow] zkit:overflow-hidden",
  {
    variants: {
      variant: {
        default: "zkit:border-transparent zkit:bg-primary zkit:text-primary-foreground zkit:[a&]:hover:bg-primary/90",
        secondary: "zkit:border-transparent zkit:bg-secondary zkit:text-secondary-foreground zkit:[a&]:hover:bg-secondary/90",
        destructive: "zkit:border-transparent zkit:bg-destructive zkit:text-white zkit:[a&]:hover:bg-destructive/90 zkit:focus-visible:ring-destructive/20 zkit:dark:focus-visible:ring-destructive/40 zkit:dark:bg-destructive/60",
        outline: "zkit:text-foreground zkit:[a&]:hover:bg-accent zkit:[a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), DM = { class: "zkit:flex zkit:items-center zkit:gap-2 zkit:justify-between" }, MM = { class: "zkit:flex zkit:flex-col zkit:gap-y-4 zkit:mt-4 zkit:sm:flex-row zkit:sm:gap-x-4 zkit:sm:gap-y-0" }, PM = /* @__PURE__ */ O({
  __name: "Calendar",
  props: {
    defaultValue: {},
    defaultPlaceholder: {},
    placeholder: {},
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    modelValue: {},
    multiple: { type: Boolean },
    disableDaysOutsideCurrentView: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    function i(s, l) {
      return l === -1 ? s.subtract({ years: 1 }) : s.add({ years: 1 });
    }
    return (s, l) => (w(), z(u(P$), I({
      "data-slot": "calendar",
      class: u(te)("zkit:px-2 zkit:py-3", r.class)
    }, u(o)), {
      default: g(({ grid: d, weekDays: c }) => [
        A(u(VM), null, {
          default: g(() => [
            le("div", DM, [
              A(u(wf), {
                "prev-page": (f) => i(f, -1)
              }, {
                default: g(() => [
                  A(u(gM))
                ]),
                _: 1
              }, 8, ["prev-page"]),
              A(u(wf)),
              A(u(UM)),
              A(u(kf)),
              A(u(kf), {
                "next-page": (f) => i(f, 1)
              }, {
                default: g(() => [
                  A(u(kM))
                ]),
                _: 1
              }, 8, ["next-page"])
            ])
          ]),
          _: 1
        }),
        le("div", MM, [
          (w(!0), Z(Pe, null, Qe(d, (f) => (w(), z(u(IM), {
            key: f.value.toString()
          }, {
            default: g(() => [
              A(u(RM), null, {
                default: g(() => [
                  A(u(bf), null, {
                    default: g(() => [
                      (w(!0), Z(Pe, null, Qe(c, (y) => (w(), z(u(NM), { key: y }, {
                        default: g(() => [
                          J(W(y), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              A(u(TM), null, {
                default: g(() => [
                  (w(!0), Z(Pe, null, Qe(f.rows, (y, p) => (w(), z(u(bf), {
                    key: `weekDate-${p}`,
                    class: "zkit:mt-2 zkit:w-full"
                  }, {
                    default: g(() => [
                      (w(!0), Z(Pe, null, Qe(y, (k) => (w(), z(u(jM), {
                        key: k.toString(),
                        date: k
                      }, {
                        default: g(() => [
                          A(u(FM), {
                            day: k,
                            month: f.value
                          }, null, 8, ["day", "month"])
                        ]),
                        _: 2
                      }, 1032, ["date"]))), 128))
                    ]),
                    _: 2
                  }, 1024))), 128))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), jM = /* @__PURE__ */ O({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(F$), I({
      "data-slot": "calendar-cell",
      class: u(te)("zkit:relative zkit:p-0 zkit:text-center zkit:text-sm zkit:focus-within:relative zkit:focus-within:z-20 zkit:[&:has([data-selected])]:rounded-md zkit:[&:has([data-selected])]:bg-accent", t.class)
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FM = /* @__PURE__ */ O({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(T$), I({
      "data-slot": "calendar-cell-trigger",
      class: u(te)(
        u(Va)({ variant: "zkit:ghost" }),
        "zkit:size-8 zkit:p-0 zkit:font-normal zkit:aria-selected:opacity-100 zkit:cursor-default",
        "zkit:[&[data-today]:not([data-selected])]:bg-accent zkit:[&[data-today]:not([data-selected])]:text-accent-foreground",
        // Selected
        "zkit:data-[selected]:bg-primary zkit:data-[selected]:text-primary-foreground zkit:data-[selected]:opacity-100 zkit:data-[selected]:hover:bg-primary zkit:data-[selected]:hover:text-primary-foreground zkit:data-[selected]:focus:bg-primary zkit:data-[selected]:focus:text-primary-foreground",
        // Disabled
        "zkit:data-[disabled]:text-muted-foreground zkit:data-[disabled]:opacity-50",
        // Unavailable
        "zkit:data-[unavailable]:text-destructive-foreground zkit:data-[unavailable]:line-through",
        // Outside months
        "zkit:data-[outside-view]:text-muted-foreground",
        t.class
      )
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), IM = /* @__PURE__ */ O({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(N$), I({
      "data-slot": "calendar-grid",
      class: u(te)("zkit:w-full zkit:border-collapse zkit:space-x-1", t.class)
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), TM = /* @__PURE__ */ O({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(U$), I({ "data-slot": "calendar-grid-body" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), RM = /* @__PURE__ */ O({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(W$), I({ "data-slot": "calendar-grid-head" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ O({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(H$), I({
      "data-slot": "calendar-grid-row",
      class: u(te)("zkit:h-8", t.class)
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), NM = /* @__PURE__ */ O({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(Y$), I({
      "data-slot": "calendar-head-cell",
      class: u(te)("zkit:text-muted-foreground zkit:rounded-md zkit:w-8 zkit:font-normal zkit:text-[0.8rem]", t.class)
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), VM = /* @__PURE__ */ O({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(J$), I({
      "data-slot": "calendar-header",
      class: u(te)("zkit:flex zkit:justify-center zkit:pt-1 zkit:relative zkit:items-center zkit:w-full", t.class)
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UM = /* @__PURE__ */ O({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(X$), I({
      "data-slot": "calendar-heading",
      class: u(te)("zkit:text-sm zkit:font-medium", t.class)
    }, u(a)), {
      default: g(({ headingValue: i }) => [
        C(n.$slots, "default", { headingValue: i }, () => [
          J(W(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kf = /* @__PURE__ */ O({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(tB), I({
      "data-slot": "calendar-next-button",
      class: u(te)(
        u(Va)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default", {}, () => [
          A(u(hM), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wf = /* @__PURE__ */ O({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(aB), I({
      "data-slot": "calendar-prev-button",
      class: u(te)(
        u(Va)({ variant: "zkit:outline" }),
        "zkit:size-7 zkit:bg-transparent zkit:p-0 zkit:opacity-50 zkit:hover:opacity-100",
        t.class
      )
    }, u(a)), {
      default: g(() => [
        C(n.$slots, "default", {}, () => [
          A(u(mM), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LM = /* @__PURE__ */ O({
  __name: "Checkbox",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    value: {},
    id: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(yB), I({ "data-slot": "checkbox" }, u(o), {
      class: u(te)(
        "zkit:peer zkit:border-input zkit:data-[state=checked]:bg-primary zkit:data-[state=checked]:text-primary-foreground zkit:data-[state=checked]:border-primary zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:size-4 zkit:shrink-0 zkit:rounded-[4px] zkit:border zkit:shadow-xs zkit:transition-shadow zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        r.class
      )
    }), {
      default: g(() => [
        A(u(hB), {
          "data-slot": "checkbox-indicator",
          class: "zkit:flex zkit:items-center zkit:justify-center zkit:text-current zkit:transition-none"
        }, {
          default: g(() => [
            C(i.$slots, "default", {}, () => [
              A(u(Xl), { class: "zkit:size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WM = /* @__PURE__ */ O({
  __name: "Combobox",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    resetModelValueOnClear: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(KC), I({ "data-slot": "combobox" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), KM = /* @__PURE__ */ O({
  __name: "ComboboxAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(GC), I({ "data-slot": "combobox-anchor" }, u(a), {
      class: u(te)("zkit:w-[200px]", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), HM = /* @__PURE__ */ O({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(e$), I({ "data-slot": "combobox-empty" }, u(r), {
      class: u(te)("zkit:py-6 zkit:text-center zkit:text-sm", t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GM = /* @__PURE__ */ O({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    heading: {}
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(a$), I({ "data-slot": "combobox-group" }, u(r), {
      class: u(te)("zkit:overflow-hidden zkit:p-1 zkit:text-foreground", t.class)
    }), {
      default: g(() => [
        e.heading ? (w(), z(u(c$), {
          key: 0,
          class: "zkit:px-2 zkit:py-1.5 zkit:text-xs zkit:font-medium zkit:text-muted-foreground"
        }, {
          default: g(() => [
            J(W(e.heading), 1)
          ]),
          _: 1
        })) : re("", !0),
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), YM = {
  "data-slot": "command-input-wrapper",
  class: "zkit:flex zkit:h-9 zkit:items-center zkit:gap-2 zkit:border-b zkit:px-3"
}, ZM = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ComboboxInput",
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), Z("div", YM, [
      A(u(wM), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" }),
      A(u(o$), I({
        "data-slot": "command-input",
        class: u(te)(
          "zkit:placeholder:text-muted-foreground zkit:flex zkit:h-10 zkit:w-full zkit:rounded-md zkit:bg-transparent zkit:py-3 zkit:text-sm zkit:outline-hidden zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
          r.class
        )
      }, { ...u(o), ...i.$attrs }), {
        default: g(() => [
          C(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"])
    ]));
  }
}), xf = /* @__PURE__ */ O({
  __name: "ComboboxItem",
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(s$), I({ "data-slot": "combobox-item" }, u(o), {
      class: u(te)("zkit:data-[highlighted]:bg-accent zkit:data-[highlighted]:text-accent-foreground zkit:[&_svg:not([class*='text-'])]:text-muted-foreground zkit:relative zkit:flex zkit:cursor-default zkit:items-center zkit:gap-2 zkit:rounded-sm zkit:px-2 zkit:py-1.5 zkit:text-sm zkit:outline-hidden zkit:select-none zkit:data-[disabled]:pointer-events-none zkit:data-[disabled]:opacity-50 zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4", r.class)
    }), {
      default: g(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), JM = /* @__PURE__ */ O({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(u$), I({ "data-slot": "combobox-item-indicator" }, u(a), {
      class: u(te)("zkit:ml-auto", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QM = /* @__PURE__ */ O({
  __name: "ComboboxList",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    hideWhenEmpty: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    portable: { type: Boolean, default: !0 },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => e.portable ? (w(), z(u(p$), { key: 0 }, {
      default: g(() => [
        A(u(af), I({ "data-slot": "combobox-list" }, u(o), {
          class: u(te)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", r.class)
        }), {
          default: g(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    })) : (w(), z(u(af), I({
      key: 1,
      "data-slot": "combobox-list"
    }, u(o), {
      class: u(te)("zkit:z-50 zkit:w-[200px] zkit:rounded-md zkit:border zkit:bg-popover zkit:text-popover-foreground zkit:origin-(--zkit-reka-combobox-content-transform-origin) zkit:overflow-hidden zkit:shadow-md zkit:outline-none zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2", r.class)
    }), {
      default: g(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $b = /* @__PURE__ */ O({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean },
    unmountOnHide: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(Eg), I({ "data-slot": "dialog" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), XM = /* @__PURE__ */ O({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(Fg), I({ "data-slot": "dialog-overlay" }, u(r), {
      class: u(te)("zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:fixed zkit:inset-0 zkit:z-50 zkit:bg-black/80", t.class)
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bb = /* @__PURE__ */ O({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    hideClose: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(WA), null, {
      default: g(() => [
        A(XM),
        A(u(Pg), I({ "data-slot": "dialog-content" }, u(o), {
          class: u(te)(
            "zkit:bg-background zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:fixed zkit:top-[50%] zkit:left-[50%] zkit:z-50 zkit:grid zkit:w-full zkit:max-w-[calc(100%-2rem)] zkit:translate-x-[-50%] zkit:translate-y-[-50%] zkit:gap-4 zkit:rounded-lg zkit:border zkit:p-6 zkit:shadow-lg zkit:duration-200 zkit:sm:max-w-lg",
            r.class
          )
        }), {
          default: g(() => [
            C(i.$slots, "default"),
            r.hideClose ? re("", !0) : (w(), z(u(Tl), {
              key: 0,
              class: "zkit:ring-offset-background zkit:focus:ring-ring zkit:data-[state=open]:bg-accent zkit:data-[state=open]:text-muted-foreground zkit:absolute zkit:top-4 zkit:right-4 zkit:rounded-xs zkit:opacity-70 zkit:transition-opacity zkit:hover:opacity-100 zkit:focus:ring-2 zkit:focus:ring-offset-2 zkit:focus:outline-hidden zkit:disabled:pointer-events-none zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4"
            }, {
              default: g(() => [
                A(u(Eb)),
                s[0] || (s[0] = le("span", { class: "zkit:sr-only" }, "Close", -1))
              ]),
              _: 1
            }))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Db = /* @__PURE__ */ O({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(jg), I({ "data-slot": "dialog-description" }, u(a), {
      class: u(te)("zkit:text-muted-foreground zkit:text-sm", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), eP = /* @__PURE__ */ O({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("div", {
      "data-slot": "dialog-footer",
      class: ve(u(te)("zkit:flex zkit:flex-col-reverse zkit:gap-2 zkit:sm:flex-row zkit:sm:justify-end", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), tP = /* @__PURE__ */ O({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("div", {
      "data-slot": "dialog-header",
      class: ve(u(te)("zkit:flex zkit:flex-col zkit:gap-2 zkit:text-center zkit:sm:text-left", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), Mb = /* @__PURE__ */ O({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(Ig), I({ "data-slot": "dialog-title" }, u(a), {
      class: u(te)("zkit:text-lg zkit:leading-none zkit:font-semibold", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pb = /* @__PURE__ */ O({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Tg), I({ "data-slot": "dialog-trigger" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, t.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(t);
    }
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const rP = /* @__PURE__ */ O({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(t2), I({ "data-slot": "dropdown-menu" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), aP = /* @__PURE__ */ O({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(s2), null, {
      default: g(() => [
        A(u(a2), I({ "data-slot": "dropdown-menu-content" }, u(o), {
          class: u(te)("zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:max-h-(--zkit-reka-dropdown-menu-content-available-height) zkit:min-w-[8rem] zkit:origin-(--zkit-reka-dropdown-menu-content-transform-origin) zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:p-1 zkit:shadow-md", r.class)
        }), {
          default: g(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), nP = /* @__PURE__ */ O({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, r = ye(t, "inset", "variant", "class"), a = Fe(r);
    return (n, o) => (w(), z(u(o2), I({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, u(a), {
      class: u(te)("zkit:focus:bg-accent zkit:focus:text-accent-foreground zkit:data-[variant=destructive]:text-destructive-foreground zkit:data-[variant=destructive]:focus:bg-destructive/10 zkit:dark:data-[variant=destructive]:focus:bg-destructive/40 zkit:data-[variant=destructive]:focus:text-destructive-foreground zkit:data-[variant=destructive]:*:[svg]:!text-destructive-foreground zkit:[&_svg:not([class*='text-'])]:text-muted-foreground zkit:relative zkit:flex zkit:cursor-default zkit:items-center zkit:gap-2 zkit:rounded-sm zkit:px-2 zkit:py-1.5 zkit:text-sm zkit:outline-hidden zkit:select-none zkit:data-[disabled]:pointer-events-none zkit:data-[disabled]:opacity-50 zkit:data-[inset]:pl-8 zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), oP = /* @__PURE__ */ O({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Fe(e);
    return (r, a) => (w(), z(u(u2), I({ "data-slot": "dropdown-menu-trigger" }, u(t)), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jb = /* @__PURE__ */ Symbol.for("zenith:form-item");
function li() {
  const e = ao(a0), t = ao(jb);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: r } = e, a = t, n = {
    valid: s0(r),
    isDirty: i0(r),
    isTouched: o0(r),
    error: n0(r)
  };
  return {
    id: a,
    name: r,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...n
  };
}
const dr = /* @__PURE__ */ O({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: r, formDescriptionId: a, formMessageId: n } = li();
    return (o, i) => (w(), z(u(xo), {
      id: u(r),
      "data-slot": "form-control",
      "aria-describedby": u(t) ? `${u(a)} ${u(n)}` : `${u(a)}`,
      "aria-invalid": !!u(t)
    }, {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), iP = ["id"], Pt = /* @__PURE__ */ O({
  __name: "FormDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { formDescriptionId: r } = li();
    return (a, n) => (w(), Z("p", {
      id: u(r),
      "data-slot": "form-description",
      class: ve(u(te)("zkit:text-muted-foreground zkit:text-sm", t.class))
    }, [
      C(a.$slots, "default")
    ], 10, iP));
  }
}), jt = /* @__PURE__ */ O({
  __name: "FormItem",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = tt();
    return sl(jb, r), (a, n) => (w(), Z("div", {
      "data-slot": "form-item",
      class: ve(u(te)("zkit:grid zkit:gap-2", t.class))
    }, [
      C(a.$slots, "default")
    ], 2));
  }
}), pn = /* @__PURE__ */ O({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(c2), I({ "data-slot": "label" }, u(r), {
      class: u(te)(
        "zkit:flex zkit:items-center zkit:gap-2 zkit:text-sm zkit:leading-none zkit:font-medium zkit:select-none zkit:group-data-[disabled=true]:pointer-events-none zkit:group-data-[disabled=true]:opacity-50 zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ft = /* @__PURE__ */ O({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { error: r, formItemId: a } = li();
    return (n, o) => (w(), z(u(pn), {
      "data-slot": "form-label",
      "data-error": !!u(r),
      class: ve(u(te)(
        "zkit:data-[error=true]:text-destructive",
        t.class
      )),
      for: u(a)
    }, {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), It = /* @__PURE__ */ O({
  __name: "FormMessage",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, { name: r, formMessageId: a } = li();
    return (n, o) => (w(), z(u(r0), {
      id: u(a),
      "data-slot": "form-message",
      as: "p",
      name: je(u(r)),
      class: ve(u(te)("zkit:text-destructive zkit:text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), Tt = e0, qr = /* @__PURE__ */ O({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = /* @__PURE__ */ et(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (n, o) => ba((w(), Z("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => lt(a) ? a.value = i : null),
      "data-slot": "input",
      class: ve(u(te)(
        "zkit:file:text-foreground zkit:placeholder:text-muted-foreground zkit:selection:bg-primary zkit:selection:text-primary-foreground zkit:dark:bg-input/30 zkit:border-input zkit:flex zkit:h-9 zkit:w-full zkit:min-w-0 zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-1 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:file:inline-flex zkit:file:h-7 zkit:file:border-0 zkit:file:bg-transparent zkit:file:text-sm zkit:file:font-medium zkit:disabled:pointer-events-none zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm",
        "zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:focus-visible:ring-[3px]",
        "zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive",
        r.class
      ))
    }, null, 2)), [
      [Rf, u(a)]
    ]);
  }
}), Fb = /* @__PURE__ */ O({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(NB), I({ "data-slot": "popover" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ib = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(ZB), null, {
      default: g(() => [
        A(u(GB), I({ "data-slot": "popover-content" }, { ...u(o), ...i.$attrs }, {
          class: u(te)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:z-50 zkit:w-72 zkit:rounded-md zkit:border zkit:p-4 zkit:shadow-md zkit:origin-(--zkit-reka-popover-content-transform-origin) zkit:outline-hidden",
            r.class
          )
        }), {
          default: g(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Tb = /* @__PURE__ */ O({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(QB), I({ "data-slot": "popover-trigger" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sP = /* @__PURE__ */ O({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    nullableValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const r = Ce(e, t);
    return (a, n) => (w(), z(u(b2), I({ "data-slot": "select" }, u(r)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lP = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    memoDependencies: {},
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(J2), null, {
      default: g(() => [
        A(u(M2), I({ "data-slot": "select-content" }, { ...u(o), ...i.$attrs }, {
          class: u(te)(
            "zkit:bg-popover zkit:text-popover-foreground zkit:data-[state=open]:animate-in zkit:data-[state=closed]:animate-out zkit:data-[state=closed]:fade-out-0 zkit:data-[state=open]:fade-in-0 zkit:data-[state=closed]:zoom-out-95 zkit:data-[state=open]:zoom-in-95 zkit:data-[side=bottom]:slide-in-from-top-2 zkit:data-[side=left]:slide-in-from-right-2 zkit:data-[side=right]:slide-in-from-left-2 zkit:data-[side=top]:slide-in-from-bottom-2 zkit:relative zkit:z-50 zkit:max-h-(--zkit-reka-select-content-available-height) zkit:min-w-[8rem] zkit:overflow-x-hidden zkit:overflow-y-auto zkit:rounded-md zkit:border zkit:shadow-md",
            e.position === "popper" && "zkit:data-[side=bottom]:translate-y-1 zkit:data-[side=left]:-translate-x-1 zkit:data-[side=right]:translate-x-1 zkit:data-[side=top]:-translate-y-1",
            r.class
          )
        }), {
          default: g(() => [
            C(i.$slots, "top"),
            A(u(pP)),
            A(u(lD), {
              class: ve(u(te)("zkit:p-1", e.position === "popper" && "zkit:h-[var(--zkit-reka-select-trigger-height)] zkit:w-full zkit:min-w-[var(--zkit-reka-select-trigger-width)] zkit:scroll-my-1"))
            }, {
              default: g(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            A(u(fP)),
            C(i.$slots, "bottom")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), uP = /* @__PURE__ */ O({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(I2), I({ "data-slot": "select-group" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dP = { class: "zkit:absolute zkit:right-2 zkit:flex zkit:size-3.5 zkit:items-center zkit:justify-center" }, zf = /* @__PURE__ */ O({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(U2), I({ "data-slot": "select-item" }, u(a), {
      class: u(te)(
        "zkit:focus:bg-accent zkit:focus:text-accent-foreground zkit:[&_svg:not([class*='text-'])]:text-muted-foreground zkit:relative zkit:flex zkit:w-full zkit:cursor-default zkit:items-center zkit:gap-2 zkit:rounded-sm zkit:py-1.5 zkit:pr-8 zkit:pl-2 zkit:text-sm zkit:outline-hidden zkit:select-none zkit:data-[disabled]:pointer-events-none zkit:data-[disabled]:opacity-50 zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4 zkit:*:[span]:last:flex zkit:*:[span]:last:items-center zkit:*:[span]:last:gap-2",
        t.class
      )
    }), {
      default: g(() => [
        le("span", dP, [
          A(u(W2), null, {
            default: g(() => [
              A(u(Xl), { class: "zkit:size-4" })
            ]),
            _: 1
          })
        ]),
        A(u(H2), null, {
          default: g(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cP = /* @__PURE__ */ O({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(Y2), {
      "data-slot": "select-label",
      class: ve(u(te)("zkit:px-2 zkit:py-1.5 zkit:text-sm zkit:font-medium", t.class))
    }, {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fP = /* @__PURE__ */ O({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(eD), I({ "data-slot": "select-scroll-down-button" }, u(a), {
      class: u(te)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default", {}, () => [
          A(u(Ab), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pP = /* @__PURE__ */ O({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(rD), I({ "data-slot": "select-scroll-up-button" }, u(a), {
      class: u(te)("zkit:flex zkit:cursor-default zkit:items-center zkit:justify-center zkit:py-1", t.class)
    }), {
      default: g(() => [
        C(n.$slots, "default", {}, () => [
          A(u(vM), { class: "zkit:size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yP = /* @__PURE__ */ O({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    size: { default: "default" }
  },
  setup(e) {
    const t = e, r = ye(t, "class", "size"), a = Fe(r);
    return (n, o) => (w(), z(u(nD), I({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, u(a), {
      class: u(te)(
        "zkit:border-input zkit:data-[placeholder]:text-muted-foreground zkit:[&_svg:not([class*='text-'])]:text-muted-foreground zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:dark:bg-input/30 zkit:dark:hover:bg-input/50 zkit:flex zkit:w-fit zkit:items-center zkit:justify-between zkit:gap-2 zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-2 zkit:text-sm zkit:whitespace-nowrap zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:data-[size=default]:h-10 zkit:data-[size=sm]:h-8 zkit:*:data-[slot=select-value]:line-clamp-1 zkit:*:data-[slot=select-value]:flex zkit:*:data-[slot=select-value]:items-center zkit:*:data-[slot=select-value]:gap-2 zkit:[&_svg]:pointer-events-none zkit:[&_svg]:shrink-0 zkit:[&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: g(() => [
        C(n.$slots, "default"),
        A(u(R2), { "as-child": "" }, {
          default: g(() => [
            A(u(Ab), { class: "zkit:size-4 zkit:opacity-50" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), mP = /* @__PURE__ */ O({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), z(u(iD), I({ "data-slot": "select-value" }, t), {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hP = /* @__PURE__ */ O({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class");
    return (a, n) => (w(), z(u(fD), I({ "data-slot": "separator-root" }, u(r), {
      class: u(te)(
        "zkit:bg-border zkit:shrink-0 zkit:data-[orientation=horizontal]:h-px zkit:data-[orientation=horizontal]:w-full zkit:data-[orientation=vertical]:h-full zkit:data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
});
let rl = 1;
var vP = class {
  subscribers;
  toasts;
  dismissedToasts;
  constructor() {
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
  subscribe = (e) => (this.subscribers.push(e), () => {
    const t = this.subscribers.indexOf(e);
    this.subscribers.splice(t, 1);
  });
  publish = (e) => {
    this.subscribers.forEach((t) => t(e));
  };
  addToast = (e) => {
    this.publish(e), this.toasts = [...this.toasts, e];
  };
  create = (e) => {
    const { message: t, ...r } = e, a = typeof e.id == "number" || e.id && e.id?.length > 0 ? e.id : rl++, n = this.toasts.find((i) => i.id === a), o = e.dismissible === void 0 ? !0 : e.dismissible;
    return this.dismissedToasts.has(a) && this.dismissedToasts.delete(a), n ? this.toasts = this.toasts.map((i) => i.id === a ? (this.publish({
      ...i,
      ...e,
      id: a,
      title: t
    }), {
      ...i,
      ...e,
      id: a,
      dismissible: o,
      title: t
    }) : i) : this.addToast({
      title: t,
      ...r,
      dismissible: o,
      id: a
    }), a;
  };
  dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
    id: e,
    dismiss: !0
  })))) : this.toasts.forEach((t) => {
    this.subscribers.forEach((r) => r({
      id: t.id,
      dismiss: !0
    }));
  }), e);
  message = (e, t) => this.create({
    ...t,
    message: e,
    type: "default"
  });
  error = (e, t) => this.create({
    ...t,
    type: "error",
    message: e
  });
  success = (e, t) => this.create({
    ...t,
    type: "success",
    message: e
  });
  info = (e, t) => this.create({
    ...t,
    type: "info",
    message: e
  });
  warning = (e, t) => this.create({
    ...t,
    type: "warning",
    message: e
  });
  loading = (e, t) => this.create({
    ...t,
    type: "loading",
    message: e
  });
  promise = (e, t) => {
    if (!t) return;
    let r;
    t.loading !== void 0 && (r = this.create({
      ...t,
      promise: e,
      type: "loading",
      message: t.loading,
      description: typeof t.description != "function" ? t.description : void 0
    }));
    const a = Promise.resolve(e instanceof Function ? e() : e);
    let n = r !== void 0, o;
    const i = a.then(async (l) => {
      if (o = ["resolve", l], Wa(l))
        n = !1, this.create({
          id: r,
          type: "default",
          message: l
        });
      else if (bP(l) && !l.ok) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description, f = typeof d == "object" && !Wa(d) ? d : {
          message: d || "",
          id: r || ""
        };
        this.create({
          id: r,
          type: "error",
          description: c,
          ...f
        });
      } else if (l instanceof Error) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description, f = typeof d == "object" && !Wa(d) ? d : {
          message: d || "",
          id: r || ""
        };
        this.create({
          id: r,
          type: "error",
          description: c,
          ...f
        });
      } else if (t.success !== void 0) {
        n = !1;
        const d = typeof t.success == "function" ? await t.success(l) : t.success, c = typeof t.description == "function" ? await t.description(l) : t.description, f = typeof d == "object" && !Wa(d) ? d : {
          message: d || "",
          id: r || ""
        };
        this.create({
          id: r,
          type: "success",
          description: c,
          ...f
        });
      }
    }).catch(async (l) => {
      if (o = ["reject", l], t.error !== void 0) {
        n = !1;
        const d = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description, f = typeof d == "object" && !Wa(d) ? d : {
          message: d || "",
          id: r || ""
        };
        this.create({
          id: r,
          type: "error",
          description: c,
          ...f
        });
      }
    }).finally(() => {
      n && (this.dismiss(r), r = void 0), t.finally?.();
    }), s = () => new Promise((l, d) => i.then(() => o[0] === "reject" ? d(o[1]) : l(o[1])).catch(d));
    return typeof r != "string" && typeof r != "number" ? { unwrap: s } : Object.assign(r, { unwrap: s });
  };
  custom = (e, t) => {
    const r = t?.id || rl++, a = this.toasts.find((o) => o.id === r), n = t?.dismissible === void 0 ? !0 : t.dismissible;
    return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), a ? this.toasts = this.toasts.map((o) => o.id === r ? (this.publish({
      ...o,
      component: e,
      dismissible: n,
      id: r,
      ...t
    }), {
      ...o,
      component: e,
      dismissible: n,
      id: r,
      ...t
    }) : o) : this.addToast({
      component: e,
      dismissible: n,
      id: r,
      ...t
    }), r;
  };
  getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
};
const wt = new vP();
function gP(e, t) {
  const r = t?.id || rl++;
  return wt.create({
    message: e,
    id: r,
    type: "default",
    ...t
  }), r;
}
const bP = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", kP = gP, wP = () => wt.toasts, xP = () => wt.getActiveToasts();
Object.assign(kP, {
  success: wt.success,
  info: wt.info,
  warning: wt.warning,
  error: wt.error,
  custom: wt.custom,
  message: wt.message,
  promise: wt.promise,
  dismiss: wt.dismiss,
  loading: wt.loading
}, {
  getHistory: wP,
  getToasts: xP
});
const Rb = /* @__PURE__ */ O({
  __name: "Switch",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    id: {},
    value: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = ye(r, "class"), o = Ce(n, a);
    return (i, s) => (w(), z(u(vD), I({ "data-slot": "switch" }, u(o), {
      class: u(te)(
        "zkit:peer zkit:data-[state=checked]:bg-primary zkit:data-[state=unchecked]:bg-input zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:dark:data-[state=unchecked]:bg-input/80 zkit:inline-flex zkit:h-[1.15rem] zkit:w-8 zkit:shrink-0 zkit:items-center zkit:rounded-full zkit:border zkit:border-transparent zkit:shadow-xs zkit:transition-all zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50",
        r.class
      )
    }), {
      default: g(() => [
        A(u(bD), {
          "data-slot": "switch-thumb",
          class: ve(u(te)("zkit:bg-background zkit:dark:data-[state=unchecked]:bg-foreground zkit:dark:data-[state=checked]:bg-primary-foreground zkit:pointer-events-none zkit:block zkit:size-4 zkit:rounded-full zkit:ring-0 zkit:transition-transform zkit:data-[state=checked]:translate-x-[calc(100%-2px)] zkit:data-[state=unchecked]:translate-x-0"))
        }, {
          default: g(() => [
            C(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zP = /* @__PURE__ */ O({
  __name: "Table",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    wrapperClass: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("div", {
      "data-slot": "table-container",
      class: ve(u(te)("zkit:relative zkit:w-full zkit:overflow-auto", t.wrapperClass))
    }, [
      le("table", {
        "data-slot": "table",
        class: ve(u(te)("zkit:w-full zkit:caption-bottom zkit:text-sm", t.class))
      }, [
        C(r.$slots, "default")
      ], 2)
    ], 2));
  }
}), _P = /* @__PURE__ */ O({
  __name: "TableBody",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("tbody", {
      "data-slot": "table-body",
      class: ve(u(te)("zkit:[&_tr:last-child]:border-0", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), bs = /* @__PURE__ */ O({
  __name: "TableCell",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("td", {
      "data-slot": "table-cell",
      class: ve(
        u(te)(
          "zkit:p-2 zkit:align-middle zkit:whitespace-nowrap zkit:[&:has([role=checkbox])]:pr-0 zkit:[&>[role=checkbox]]:translate-y-[2px]",
          t.class
        )
      )
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), ks = /* @__PURE__ */ O({
  __name: "TableRow",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("tr", {
      "data-slot": "table-row",
      class: ve(u(te)("zkit:hover:bg-muted/50 zkit:data-[state=selected]:bg-muted zkit:border-b zkit:transition-colors", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), _f = /* @__PURE__ */ O({
  __name: "TableHead",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("th", {
      "data-slot": "table-head",
      class: ve(u(te)("zkit:text-muted-foreground zkit:h-10 zkit:px-2 zkit:text-left zkit:align-middle zkit:font-medium zkit:whitespace-nowrap ", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), SP = /* @__PURE__ */ O({
  __name: "TableHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e;
    return (r, a) => (w(), Z("thead", {
      "data-slot": "table-header",
      class: ve(u(te)("zkit:[&_tr]:border-b", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), Nb = /* @__PURE__ */ O({
  __name: "Textarea",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, a = /* @__PURE__ */ et(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (n, o) => ba((w(), Z("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (i) => lt(a) ? a.value = i : null),
      "data-slot": "textarea",
      class: ve(u(te)("zkit:border-input zkit:placeholder:text-muted-foreground zkit:focus-visible:border-ring zkit:focus-visible:ring-ring/50 zkit:aria-invalid:ring-destructive/20 zkit:dark:aria-invalid:ring-destructive/40 zkit:aria-invalid:border-destructive zkit:dark:bg-input/30 zkit:flex zkit:field-sizing-content zkit:min-h-16 zkit:w-full zkit:rounded-md zkit:border zkit:bg-transparent zkit:px-3 zkit:py-2 zkit:text-base zkit:shadow-xs zkit:transition-[color,box-shadow] zkit:outline-none zkit:focus-visible:ring-[3px] zkit:disabled:cursor-not-allowed zkit:disabled:opacity-50 zkit:md:text-sm", r.class))
    }, null, 2)), [
      [Rf, u(a)]
    ]);
  }
}), Vb = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ClientOnly",
  setup(e) {
    const t = F(!1);
    return xe(() => {
      t.value = !0;
    }), (r, a) => t.value ? C(r.$slots, "default", {}, void 0, void 0, 0) : C(r.$slots, "fallback", {}, void 0, void 0, 1);
  }
}), qP = { class: "zkit:flex" }, OP = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, Ub = /* @__PURE__ */ O({
  __name: "TextField",
  props: /* @__PURE__ */ Ge({
    id: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    labelClass: {
      type: String,
      default: "min-w-[132px]"
    },
    inputClass: {
      type: String,
      default: ""
    }
  }, {
    modelValue: {
      default: ""
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const [t, r] = Ae(e, "modelValue");
    return (a, n) => (w(), Z("div", null, [
      e.label && e.variant !== "horizontal" ? (w(), z(pn, {
        key: 0,
        class: ve(["zkit:mb-4", e.labelClass])
      }, {
        default: g(() => [
          J(W(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : re("", !0),
      le("div", qP, [
        e.label && e.variant === "horizontal" ? (w(), z(pn, {
          key: 0,
          class: ve(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: g(() => [
            J(W(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : re("", !0),
        C(a.$slots, "prepend"),
        A(u(qr), {
          id: e.id,
          "model-value": u(t),
          type: e.type,
          placeholder: e.placeholder,
          disabled: e.disabled,
          autocomplete: e.autocomplete,
          readonly: e.readonly,
          autofocus: e.autofocus,
          class: ve([[e.label && e.variant === "horizontal" ? "zkit:rounded-l-none zkit:flex-1" : "", e.inputClass], "zkit:h-10"]),
          "onUpdate:modelValue": n[0] || (n[0] = (o) => !u(r).lazy && (t.value = o)),
          onChange: n[1] || (n[1] = (o) => u(r).lazy && (t.value = o.target.value))
        }, null, 8, ["id", "model-value", "type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "class"]),
        C(a.$slots, "append")
      ]),
      e.hint ? (w(), Z("p", OP, W(e.hint), 1)) : re("", !0)
    ]));
  }
}), AP = { class: "zkit:space-y-4" }, EP = { class: "zkit:relative zkit:w-full zkit:h-48 zkit:rounded-md zkit:overflow-hidden zkit:cursor-crosshair" }, CP = { class: "zkit:space-y-2" }, $P = { class: "zkit:relative zkit:h-3 zkit:rounded-md zkit:overflow-hidden zkit:cursor-pointer" }, BP = /* @__PURE__ */ O({
  __name: "ColorWheel",
  props: {
    modelValue: {
      type: String,
      default: "#ff0000"
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ae(e, "modelValue"), { hsl: r } = Yf(t);
    function a(f, y, p) {
      return Math.ceil(Math.min(p, Math.max(y, f)));
    }
    const n = j(() => r.value?.h || 0), o = j(() => r.value?.s || 100), i = j(() => r.value?.l || 50), s = j(() => {
      const f = o.value / 100, y = i.value / 100, p = y + f * Math.min(y, 1 - y);
      return p === 0 ? 0 : 2 * (1 - y / p) * 100;
    }), l = j(() => {
      const f = o.value / 100, y = i.value / 100;
      return (y + f * Math.min(y, 1 - y)) * 100;
    });
    function d(f) {
      const y = f.currentTarget.getBoundingClientRect(), p = (f.clientX - y.left) / y.width, k = (f.clientY - y.top) / y.height, h = p, m = 1 - k, b = m * (1 - h / 2), v = b === 0 || b === 1 ? 0 : (m - b) / Math.min(b, 1 - b);
      r.value = {
        h: r.value?.h || 0,
        s: a(v * 100, 0, 100),
        l: a(b * 100, 0, 100)
      };
    }
    function c(f) {
      const y = f.currentTarget.getBoundingClientRect(), p = (f.clientX - y.left) / y.width * 360;
      r.value = {
        h: a(p, 0, 360),
        s: r.value?.s || 100,
        l: r.value?.l || 50
      };
    }
    return (f, y) => (w(), Z("div", AP, [
      le("div", EP, [
        le("div", {
          class: "zkit:absolute zkit:inset-0",
          style: Ut({
            background: `linear-gradient(to right, #fff, hsl(${n.value}, 100%, 50%))`
          })
        }, null, 4),
        le("div", {
          class: "zkit:absolute zkit:inset-0",
          style: { background: "linear-gradient(to bottom, transparent, #000)" },
          onClick: d
        }, [
          le("div", {
            class: "zkit:absolute zkit:w-4 zkit:h-4 zkit:border-2 zkit:border-white zkit:rounded-full zkit:shadow-lg zkit:-translate-x-1/2 zkit:-translate-y-1/2 zkit:pointer-events-none",
            style: Ut({
              left: `${s.value}%`,
              top: `${100 - l.value}%`
            })
          }, null, 4)
        ])
      ]),
      le("div", CP, [
        y[0] || (y[0] = le("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Hue", -1)),
        le("div", $P, [
          le("div", {
            class: "zkit:absolute zkit:inset-0",
            style: { background: "linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)" },
            onClick: c
          }, [
            le("div", {
              class: "zkit:absolute zkit:w-1 zkit:h-full zkit:bg-white zkit:shadow-lg zkit:-translate-x-1/2 zkit:pointer-events-none",
              style: Ut({ left: `${n.value / 360 * 100}%` })
            }, null, 4)
          ])
        ])
      ])
    ]));
  }
}), DP = { class: "zkit:space-y-4" }, MP = { class: "zkit:space-y-2" }, PP = { class: "zkit:flex zkit:items-center zkit:justify-between" }, jP = ["onClick"], FP = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:mt-2"
}, IP = { class: "zkit:text-xs" }, TP = { class: "zkit:space-y-2" }, RP = { class: "zkit:grid zkit:grid-cols-10 zkit:gap-2" }, NP = ["onClick"], Lb = [
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#64748b",
  "#000000",
  "#ffffff"
], VP = /* @__PURE__ */ O({
  __name: "ColorPicker",
  props: /* @__PURE__ */ Ge({
    class: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !0
    },
    presets: {
      type: Array,
      default: () => Lb
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = F(!1), a = Ae(e, "modelValue"), n = Ea(a), { hex: o, rgb: i, rgba: s, hsl: l, oklch: d } = Yf(a), c = j({
      get() {
        return n.value === "hex" ? o.value : n.value === "rgba" && s.value ? `rgba(${s.value.r}, ${s.value.g}, ${s.value.b}, ${s.value.a})` : n.value === "rgb" && i.value ? `rgb(${i.value.r}, ${i.value.g}, ${i.value.b})` : n.value === "hsl" && l.value ? `hsl(${l.value.h}, ${l.value.s}%, ${l.value.l}%)` : n.value === "oklch" && d.value ? `oklch(${d.value.l} ${d.value.c} ${d.value.h})` : "";
      },
      set(y) {
        y && (a.value = y);
      }
    });
    pe(n, (y) => {
      if (y === "hex") {
        c.value = o.value;
        return;
      }
      if (y === "rgb" && i.value) {
        c.value = `rgb(${i.value.r}, ${i.value.g}, ${i.value.b})`;
        return;
      }
      if (y === "rgba" && s.value) {
        c.value = `rgba(${s.value.r}, ${s.value.g}, ${s.value.b}, ${s.value.a})`;
        return;
      }
      if (y === "hsl" && l.value) {
        c.value = `hsl(${l.value.h}, ${l.value.s}%, ${l.value.l}%)`;
        return;
      }
      if (y === "oklch" && d.value) {
        c.value = `oklch(${d.value.l} ${d.value.c} ${d.value.h})`;
        return;
      }
    });
    function f(y) {
      if (!s.value) return;
      const p = Math.max(0, Math.min(1, Number(y)));
      a.value = `rgba(${s.value.r}, ${s.value.g}, ${s.value.b}, ${p})`;
    }
    return (y, p) => (w(), z(u(Fb), {
      open: r.value,
      "onUpdate:open": p[4] || (p[4] = (k) => r.value = k)
    }, {
      default: g(() => [
        A(u(Tb), { "as-child": "" }, {
          default: g(() => [
            C(y.$slots, "activator", {
              color: a.value,
              open: r.value
            }, () => [
              A(Ub, {
                modelValue: a.value,
                "onUpdate:modelValue": p[0] || (p[0] = (k) => a.value = k),
                label: e.label,
                variant: e.variant,
                placeholder: e.placeholder,
                readonly: e.readonly,
                class: ve([t.class, "zkit:cursor-pointer"]),
                "input-class": "text-left rounded-l-none"
              }, {
                prepend: g(() => [
                  le("div", {
                    class: "zkit:size-10 zkit:border zkit:rounded-l zkit:shrink-0",
                    style: Ut({ backgroundColor: a.value })
                  }, null, 4)
                ]),
                _: 1
              }, 8, ["modelValue", "label", "variant", "placeholder", "readonly", "class"])
            ])
          ]),
          _: 3
        }),
        A(u(Ib), {
          class: "zkit:w-72 zkit:p-4",
          align: "start"
        }, {
          default: g(() => [
            le("div", DP, [
              A(BP, {
                modelValue: a.value,
                "onUpdate:modelValue": p[1] || (p[1] = (k) => a.value = k)
              }, null, 8, ["modelValue"]),
              le("div", MP, [
                le("div", PP, [
                  (w(), Z(Pe, null, Qe(["hex", "rgb", "rgba", "hsl", "oklch"], (k) => le("button", {
                    key: k,
                    type: "button",
                    class: ve(["zkit:text-xs zkit:px-2 zkit:py-1 zkit:rounded zkit:font-medium zkit:uppercase", u(n) === k ? "zkit:bg-primary zkit:text-primary-foreground" : "zkit:bg-secondary zkit:hover:bg-secondary/80"]),
                    onClick: (h) => n.value = k
                  }, W(k), 11, jP)), 64))
                ]),
                A(u(qr), {
                  "model-value": c.value,
                  class: ve([{ "zkit:uppercase": u(n) === "hex" }, "zkit:font-mono"]),
                  placeholder: u(n) === "hex" ? "#000000" : u(n) === "rgb" ? "rgb(0, 0, 0)" : u(n) === "rgba" ? "rgba(0, 0, 0, 1)" : u(n) === "hsl" ? "hsl(0, 0%, 0%)" : "oklch(0 0 0)",
                  onChange: p[2] || (p[2] = (k) => {
                    c.value = k.target.value;
                  })
                }, null, 8, ["model-value", "class", "placeholder"]),
                u(n) === "rgba" && u(s) && u(s) ? (w(), Z("div", FP, [
                  le("label", IP, W(y.$t("Opacity")), 1),
                  A(u(qr), {
                    type: "number",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    "model-value": u(s).a,
                    class: "zkit:w-16 zkit:font-mono",
                    onChange: p[3] || (p[3] = (k) => f(k.target.value))
                  }, null, 8, ["model-value"])
                ])) : re("", !0)
              ]),
              le("div", TP, [
                p[5] || (p[5] = le("label", { class: "zkit:text-sm zkit:font-medium zkit:mb-2 zkit:block" }, "Presets", -1)),
                le("div", RP, [
                  (w(!0), Z(Pe, null, Qe(e.presets, (k) => (w(), Z("button", {
                    key: k,
                    type: "button",
                    class: "zkit:w-6 zkit:h-6 zkit:rounded zkit:border zkit:border-border zkit:hover:scale-110 zkit:transition-transform",
                    style: Ut({ backgroundColor: k }),
                    onClick: () => {
                      a.value = k;
                    }
                  }, null, 12, NP))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), UP = ["icon"], at = /* @__PURE__ */ O({
  __name: "Icon",
  props: {
    name: {
      type: String,
      default: null
    }
  },
  setup(e) {
    const t = e, r = j(() => t.name?.includes(":") ? t.name : `lucide:${lq(t.name)}`);
    return (a, n) => (w(), Z("iconify-icon", {
      icon: r.value,
      class: "zkit:flex"
    }, null, 8, UP));
  }
}), LP = {
  key: 1,
  class: "zkit:text-sm"
}, nt = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ZButton",
  props: /* @__PURE__ */ Ge({
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ge(["click"], ["update:loading"]),
  setup(e, { emit: t }) {
    const r = Rk("RouterLink"), a = e, n = Ae(e, "loading"), o = t;
    function i(l) {
      a.href || o("click", l);
    }
    const s = j(() => a.to ? r : a.href ? "a" : "button");
    return (l, d) => (w(), z(Vr, I(l.$attrs, {
      disabled: e.disabled || n.value,
      as: s.value,
      href: e.to ? e.to : e.href,
      to: e.to,
      type: e.type,
      onClick: i
    }), {
      default: g(() => [
        n.value ? (w(), z(at, {
          key: 0,
          name: "Loader2",
          class: "zkit:animate-spin"
        })) : e.label ? (w(), Z("span", LP, W(e.label), 1)) : C(l.$slots, "default", {}, void 0, void 0, 2)
      ]),
      _: 3
    }, 16, ["disabled", "as", "href", "to", "type"]));
  }
});
class WP {
  static __container_entry_key = "DashboardWidgetRegistry";
  definitions = /* @__PURE__ */ new Map();
  register(...t) {
    for (const r of t)
      this.definitions.set(r.id, r);
  }
  get(t) {
    return this.definitions.get(t) || null;
  }
  list() {
    return Array.from(this.definitions.values());
  }
}
dt.proxy(WP);
const KP = /* @__PURE__ */ O({
  __name: "PageTitle",
  props: {
    tag: {
      type: String,
      default: "h1"
    }
  },
  setup(e) {
    return (t, r) => (w(), z(Ur(e.tag), { class: "zkit:text-2xl zkit:font-bold" }, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), HP = /* @__PURE__ */ O({
  __name: "PageSubtitle",
  props: {
    tag: {
      type: String,
      default: "h2"
    }
  },
  setup(e) {
    return (t, r) => (w(), z(Ur(e.tag), { class: "zkit:text-muted-foreground zkit:text-base" }, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
function Jt(...e) {
  return e.reduce((t, r) => r(t), class {
  });
}
function GP(e) {
  return function(t) {
    class r extends t {
      constructor(...n) {
        super(...n);
        const o = new e(...n);
        Object.assign(this, o);
      }
    }
    for (const a of Reflect.ownKeys(e.prototype))
      a !== "constructor" && Object.defineProperty(
        r.prototype,
        a,
        Object.getOwnPropertyDescriptor(e.prototype, a)
      );
    return r;
  };
}
function al(e, t = "", r = {}) {
  for (const [a, n] of Object.entries(e)) {
    const o = /^\d+$/.test(a) ? `${t}[${a}]` : t ? `${t}.${a}` : a;
    if (n && typeof n == "object") {
      al(n, o, r);
      continue;
    }
    r[o] = n;
  }
  return r;
}
class YP {
  static __container_entry_key = "ConfigService";
  entries;
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  list() {
    return Array.from(this.entries.values());
  }
  parseValue(t) {
    return typeof t == "string" && t.endsWith(":boolean") ? t.replace(":boolean", "").trim() === "true" : t;
  }
  loadFromRecord(t, r = "unknow") {
    for (const [a, n] of Object.entries(t))
      this.entries.set(a, {
        key: a,
        value: this.parseValue(n),
        source: r
      });
  }
  loadFromEntries(t, r = "unknow") {
    for (const [a, n] of t)
      this.entries.set(a, {
        key: a,
        value: this.parseValue(n),
        source: r
      });
  }
  toRecord() {
    const t = {};
    for (const [r, a] of this.entries.entries())
      t[r] = a.value;
    return t;
  }
  has(t) {
    if (this.entries.get(t))
      return !0;
    if (!t.includes("."))
      return !1;
    const r = t.split(".")[0], a = this.entries.get(r);
    if (!a)
      return !!this.entries.get(t);
    const n = a.value;
    return typeof n != "object" || Array.isArray(n) ? !1 : oq(n, t.substring(r.length + 1));
  }
  get(t, r) {
    const a = this.entries.get(t);
    if (a)
      return a.value;
    if (!t.includes("."))
      return r;
    const n = t.split(".")[0], o = this.entries.get(n);
    if (!o) {
      const s = this.entries.get(t);
      return s ? s.value : r;
    }
    const i = o.value;
    return typeof i != "object" || Array.isArray(i) ? r : it(i, t.substring(n.length + 1), r);
  }
  getOne(t, r) {
    for (const a of t)
      if (this.has(a))
        return this.get(a);
    return r;
  }
  set(t, r, a = "runtime") {
    if (!t.includes(".")) {
      this.entries.set(t, {
        key: t,
        source: a,
        value: r
      });
      return;
    }
    const n = t.split(".")[0];
    let o = this.get(n, {});
    (typeof o != "object" || Array.isArray(o)) && (o = {}), _l(o, t.substring(n.length + 1), r), this.entries.set(n, {
      key: n,
      source: a,
      value: o
    });
  }
  unset(t) {
    if (!t.includes(".")) {
      this.entries.delete(t);
      return;
    }
    const r = t.split(".")[0], a = this.get(r, {});
    a && (typeof a != "object" || Array.isArray(a) || (Oq(a, t.substring(r.length + 1)), this.entries.set(r, {
      key: r,
      source: "runtime",
      value: a
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return al(this.toRecord());
  }
  evaluate(t, r) {
    try {
      return qq(t, { interpolate: /\${{([\s\S]+?)}}/g })(r);
    } catch (a) {
      throw new Ca(`Failed to evaluate template: ${t}. ${a}`);
    }
  }
  evaluateConfig(t) {
    const r = this.toRecord();
    for (const [a, n] of Object.entries(al(r)))
      if (typeof n == "string") {
        const o = this.evaluate(n, t);
        this.set(a, o, "evaluated");
      }
  }
}
class ZP {
  hook_id;
  hook_aliases;
  order;
  subhooks;
  async register() {
  }
  async load() {
  }
  async boot() {
  }
  async shutdown() {
  }
  /** @deprecated Use register */
  async onRegister() {
  }
  /** @deprecated Use load */
  async onLoad() {
  }
  /** @deprecated Use boot */
  async onBoot() {
  }
  /** @deprecated Use shutdown */
  async onShutdown() {
  }
}
const Jr = new $q();
function Ao() {
  return Jr.create((e) => e.object({
    id: e.number(),
    dashboard_id: e.number(),
    name: e.string(),
    value: e.nullable(e.string())
  }));
}
Ao.create = Jr.create((e) => e.pick(Ao(), ["dashboard_id", "name", "value"]));
Ao.update = Jr.create((e) => e.partial(Ao.create));
function Eo() {
  return Jr.create((e) => e.object({
    id: e.number(),
    name: e.string(),
    description: e.nullish(e.string(), null),
    created_at: e.string(),
    updated_at: e.string(),
    deleted_at: e.nullable(e.string()),
    metas: e.optional(e.record(e.string(), e.any()))
  }));
}
Eo.create = Jr.create((e) => e.pick(Eo(), ["name", "description"]));
Eo.update = Jr.create((e) => e.partial(Eo.create));
function Qt(e) {
  return class extends e {
    static from(t) {
      const r = typeof this == "function" ? this : e, a = new r();
      let n = { ...t };
      return typeof r?.parse == "function" && (n = r.parse(t)), typeof this?.parse == "function" && (n = this.parse(t)), Object.assign(a, n), a;
    }
    merge(t) {
      return Object.assign(this, t), this;
    }
  };
}
function Cn(e) {
  return class extends e {
    deleted_at = null;
  };
}
function $n(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
class Wb {
  constructor(t, r) {
    this.operator = t, this.value = r, Object.defineProperty(this, "t", { writable: !0 });
  }
  get notes() {
    return this.t;
  }
  addNote(t) {
    this.t = this.t || [], this.t.push(t);
  }
}
let eu = class extends Wb {
};
class ui extends eu {
  constructor(t, r) {
    if (!Array.isArray(r)) throw new Error(`"${t}" operator expects to receive an array of conditions`);
    super(t, r);
  }
}
const Bn = "__itself__";
let di = class extends Wb {
  constructor(e, t, r) {
    super(e, r), this.field = t;
  }
};
const Kb = new eu("__null__", null), nl = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function JP(e, t) {
  return t instanceof ui && t.operator === e;
}
function Hb(e, t) {
  return t.length === 1 ? t[0] : new ui(e, (function r(a, n, o) {
    const i = o || [];
    for (let s = 0, l = n.length; s < l; s++) {
      const d = n[s];
      JP(a, d) ? r(a, d.value, i) : i.push(d);
    }
    return i;
  })(e, t));
}
const QP = (e) => e, Gb = () => /* @__PURE__ */ Object.create(null), Yb = Object.defineProperty(Gb(), "__@type@__", { value: "ignore value" });
function XP(e, t, r = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const a in e)
    if (nl(e, a) && nl(t, a) && (!r || e[a] !== Yb)) return !0;
  return !1;
}
function ej(e) {
  const t = [];
  for (const r in e) nl(e, r) && e[r] !== Yb && t.push(r);
  return t;
}
function ws(e, t) {
  t !== Kb && e.push(t);
}
const Zb = (e) => Hb("and", e), Jb = { compound(e, t, r) {
  const a = (Array.isArray(t) ? t : [t]).map((n) => r.parse(n));
  return new ui(e.name, a);
}, field: (e, t, r) => new di(e.name, r.field, t), document: (e, t) => new eu(e.name, t) };
let tj = class {
  constructor(e, t = Gb()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: t.operatorToConditionName || QP, defaultOperatorName: t.defaultOperatorName || "eq", mergeFinalConditions: t.mergeFinalConditions || Zb }, this.o = Object.keys(e).reduce((r, a) => (r[a] = Object.assign({ name: this.u.operatorToConditionName(a) }, e[a]), r), {}), this.s = Object.assign({}, t.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (r) => XP(r, this.o, t.useIgnoreValue) }), this.i = Object.assign({}, t.documentContext, { parse: this.parse, query: {} }), this.h = t.useIgnoreValue ? ej : Object.keys;
  }
  setParse(e) {
    this.parse = e, this.s.parse = e, this.i.parse = e;
  }
  parseField(e, t, r, a) {
    const n = this.o[t];
    if (!n) throw new Error(`Unsupported operator "${t}"`);
    if (n.type !== "field") throw new Error(`Unexpected ${n.type} operator "${t}" at field level`);
    return this.s.field = e, this.s.query = a, this.parseInstruction(n, r, this.s);
  }
  parseInstruction(e, t, r) {
    return typeof e.validate == "function" && e.validate(e, t), (e.parse || Jb[e.type])(e, t, r);
  }
  parseFieldOperators(e, t) {
    const r = [], a = this.h(t);
    for (let n = 0, o = a.length; n < o; n++) {
      const i = a[n];
      if (!this.o[i]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      ws(r, this.parseField(e, i, t[i], t));
    }
    return r;
  }
  parse(e) {
    const t = [], r = this.h(e);
    this.i.query = e;
    for (let a = 0, n = r.length; a < n; a++) {
      const o = r[a], i = e[o], s = this.o[o];
      if (s) {
        if (s.type !== "document" && s.type !== "compound") throw new Error(`Cannot use parsing instruction for operator "${o}" in "document" context as it is supposed to be used in  "${s.type}" context`);
        ws(t, this.parseInstruction(s, i, this.i));
      } else this.s.hasOperators(i) ? t.push(...this.parseFieldOperators(o, i)) : ws(t, this.parseField(o, this.u.defaultOperatorName, i, e));
    }
    return this.u.mergeFinalConditions(t);
  }
};
function xs(e, t) {
  const r = e[t];
  if (typeof r != "function") throw new Error(`Unable to interpret "${t}" condition. Did you forget to register interpreter for it?`);
  return r;
}
function rj(e) {
  return e.operator;
}
function aj(e, t) {
  const r = t, a = r && r.getInterpreterName || rj;
  let n;
  switch (r ? r.numberOfArguments : 0) {
    case 1:
      n = (i) => {
        const s = a(i, r);
        return xs(e, s)(i, o);
      };
      break;
    case 3:
      n = (i, s, l) => {
        const d = a(i, r);
        return xs(e, d)(i, s, l, o);
      };
      break;
    default:
      n = (i, s) => {
        const l = a(i, r);
        return xs(e, l)(i, s, o);
      };
  }
  const o = Object.assign({}, r, { interpret: n });
  return o.interpret;
}
function nj(e, t) {
  return (r, ...a) => {
    const n = e(r, ...a), o = t.bind(null, n);
    return o.ast = n, o;
  };
}
function Qb(e, t) {
  if (!Array.isArray(t)) throw new Error(`"${e.name}" expects value to be an array`);
}
function Xb(e, t) {
  if (Qb(e, t), !t.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const tu = (e) => (t, r) => {
  if (typeof r !== e) throw new Error(`"${t.name}" expects value to be a "${e}"`);
}, ek = { type: "compound", validate: Xb, parse(e, t, { parse: r }) {
  const a = t.map((n) => r(n));
  return Hb(e.name, a);
} }, oj = ek, ij = { type: "compound", validate: Xb }, sj = { type: "field", validate(e, t) {
  if (!(t && (t instanceof RegExp || t.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, t, r) {
  const a = t instanceof RegExp ? new di("regex", r.field, t) : r.parse(t, r);
  return new ui(e.name, [a]);
} }, tk = { type: "field", validate(e, t) {
  if (!t || t.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, t, { parse: r, field: a, hasOperators: n }) {
  const o = n(t) ? r(t, { field: Bn }) : r(t);
  return new di(e.name, a, o);
} }, rk = { type: "field", validate: tu("number") }, ci = { type: "field", validate: Qb }, ak = ci, nk = ci, lj = { type: "field", validate(e, t) {
  if (!Array.isArray(t) || t.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, ok = { type: "field", validate: tu("boolean") }, ru = { type: "field", validate: function(e, t) {
  if (!(typeof t == "string" || typeof t == "number" || t instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, fi = ru, ik = fi, sk = fi, au = { type: "field" }, lk = au, uk = { type: "field", validate(e, t) {
  if (!(t instanceof RegExp) && typeof t != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, t, r) {
  const a = typeof t == "string" ? new RegExp(t, r.query.$options || "") : t;
  return new di(e.name, r.field, a);
} }, dk = { type: "field", parse: () => Kb }, uj = { type: "document", validate: tu("function") };
var dj = Object.freeze({ __proto__: null, $and: ek, $or: oj, $nor: ij, $not: sj, $elemMatch: tk, $size: rk, $in: ci, $nin: ak, $all: nk, $mod: lj, $exists: ok, $gte: ru, $gt: fi, $lt: ik, $lte: sk, $eq: au, $ne: lk, $regex: uk, $options: dk, $where: uj });
let cj = class extends tj {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (t) => t.slice(1) });
  }
  parse(e, t) {
    return t && t.field ? Zb(this.parseFieldOperators(t.field, e)) : super.parse(e);
  }
};
const ol = dj;
function nu(e, t, r) {
  for (let a = 0, n = e.length; a < n; a++) if (r(e[a], t) === 0) return !0;
  return !1;
}
function ou(e, t) {
  return Array.isArray(e) && Number.isNaN(Number(t));
}
function Sf(e, t, r) {
  if (!ou(e, t)) return r(e, t);
  let a = [];
  for (let n = 0; n < e.length; n++) {
    const o = r(e[n], t);
    o !== void 0 && (a = a.concat(o));
  }
  return a;
}
function Qr(e) {
  return (t, r, a) => {
    const n = a.get(r, t.field);
    return Array.isArray(n) ? n.some((o) => e(t, o, a)) : e(t, n, a);
  };
}
const fj = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), pj = (e, t) => e[t];
function ck(e, t, r) {
  const a = t.lastIndexOf(".");
  return a === -1 ? [e, t] : [r(e, t.slice(0, a)), t.slice(a + 1)];
}
function yj(e, t, r = pj) {
  if (t === Bn) return e;
  if (!e) throw new Error(`Unable to get field "${t}" out of ${String(e)}.`);
  return (function(a, n, o) {
    if (n.indexOf(".") === -1) return Sf(a, n, o);
    const i = n.split(".");
    let s = a;
    for (let l = 0, d = i.length; l < d; l++) if (s = Sf(s, i[l], o), !s || typeof s != "object") return l < d - 1 ? void 0 : s;
    return s;
  })(e, t, r);
}
function fk(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function pk(e, t = {}) {
  return aj(e, Object.assign({ get: yj, compare: fk }, t));
}
const yk = (e, t, { interpret: r }) => e.value.some((a) => r(a, t)), mj = (e, t, r) => !yk(e, t, r), mk = (e, t, { interpret: r }) => e.value.every((a) => r(a, t)), hj = (e, t, { interpret: r }) => !r(e.value[0], t), iu = (e, t, { compare: r, get: a }) => {
  const n = a(t, e.field);
  return Array.isArray(n) && !Array.isArray(e.value) ? nu(n, e.value, r) : r(n, e.value) === 0;
}, hk = (e, t, r) => !iu(e, t, r), vk = Qr((e, t, r) => {
  const a = r.compare(t, e.value);
  return a === 0 || a === -1;
}), gk = Qr((e, t, r) => r.compare(t, e.value) === -1), bk = Qr((e, t, r) => r.compare(t, e.value) === 1), kk = Qr((e, t, r) => {
  const a = r.compare(t, e.value);
  return a === 0 || a === 1;
}), wk = (e, t, { get: r }) => {
  if (e.field === Bn) return t !== void 0;
  const [a, n] = ck(t, e.field, r), o = (i) => i == null ? !!i === e.value : fj(i, n) === e.value;
  return ou(a, n) ? a.some(o) : o(a);
}, vj = Qr((e, t) => typeof t == "number" && t % e.value[0] === e.value[1]), xk = (e, t, { get: r }) => {
  const [a, n] = ck(t, e.field, r), o = (i) => {
    const s = r(i, n);
    return Array.isArray(s) && s.length === e.value;
  };
  return e.field !== Bn && ou(a, n) ? a.some(o) : o(a);
}, zk = Qr((e, t) => typeof t == "string" && e.value.test(t)), pi = Qr((e, t, { compare: r }) => nu(e.value, t, r)), _k = (e, t, r) => !pi(e, t, r), Sk = (e, t, { compare: r, get: a }) => {
  const n = a(t, e.field);
  return Array.isArray(n) && e.value.every((o) => nu(n, o, r));
}, qk = (e, t, { interpret: r, get: a }) => {
  const n = a(t, e.field);
  return Array.isArray(n) && n.some((o) => r(e.value, o));
}, gj = (e, t) => e.value.call(t);
var bj = Object.freeze({ __proto__: null, or: yk, nor: mj, and: mk, not: hj, eq: iu, ne: hk, lte: vk, lt: gk, gt: bk, gte: kk, exists: wk, mod: vj, size: xk, regex: zk, within: pi, nin: _k, all: Sk, elemMatch: qk, where: gj });
const su = Object.assign({}, bj, { in: pi });
pk(su);
function qf(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const kj = (e, t) => fk(qf(e), qf(t));
function lu(e, t, r) {
  const a = new cj(e), n = pk(t, Object.assign({ compare: kj }, r));
  if (r && r.forPrimitives) {
    const o = { field: Bn }, i = a.parse;
    a.setParse((s) => i(s, o));
  }
  return nj(a.parse, n);
}
lu(ol, su);
lu(["$and", "$or"].reduce((e, t) => (e[t] = Object.assign({}, e[t], { type: "field" }), e), Object.assign({}, ol, { $nor: Object.assign({}, ol.$nor, { type: "field", parse: Jb.compound }) })), su, { forPrimitives: !0 });
const Ok = Object.hasOwn || ((e, t) => Object.prototype.hasOwnProperty.call(e, t));
function il(e) {
  return Array.isArray(e) ? e : [e];
}
const fa = "__caslSubjectType__";
function zs(e, t) {
  if (t) {
    if (!Ok(t, fa)) Object.defineProperty(t, fa, { value: e });
    else if (e !== t[fa]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${t[fa]}`);
  }
  return t;
}
const Xn = (e) => {
  const t = typeof e;
  return t === "string" || t === "function";
}, wj = (e) => e.modelName || e.name;
function Ak(e) {
  return Ok(e, fa) ? e[fa] : wj(e.constructor);
}
const Of = { function: (e) => e.constructor, string: Ak };
function Af(e, t, r) {
  for (let a = r; a < t.length; a++) e.push(t[a]);
}
function Ef(e, t) {
  if (!e || !e.length) return t || [];
  if (!t || !t.length) return e || [];
  let r = 0, a = 0;
  const n = [];
  for (; r < e.length && a < t.length; ) e[r].priority < t[a].priority ? (n.push(e[r]), r++) : e[r].priority > t[a].priority ? (n.push(t[a]), a++) : (n.push(e[r]), r++, a++);
  return Af(n, e, r), Af(n, t, a), n;
}
function Gn(e, t, r) {
  let a = e.get(t);
  return a || (a = r(), e.set(t, a)), a;
}
const xj = (e) => e;
function zj(e, t) {
  let r;
  for (let a = 0; a < e.length; a++) {
    const n = t(e[a]);
    r && n && r.push(e[a]), n || (r ??= e.slice(0, a));
  }
  return r || e;
}
function _j(e, t) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !t.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !t.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class Sj {
  constructor(t, r, a = 0) {
    _j(t, r), this.action = r.resolveAction(t.action), this.subject = t.subject, this.inverted = !!t.inverted, this.conditions = t.conditions, this.reason = t.reason, this.origin = t, this.fields = t.fields ? il(t.fields) : void 0, this.priority = a, this.t = r;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const t = this.i();
    return t ? t.ast : void 0;
  }
  matchesConditions(t) {
    return this.conditions ? !t || Xn(t) ? !this.inverted : this.i()(t) : !0;
  }
  matchesField(t) {
    return this.fields ? t ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(t)) : !this.inverted : !0;
  }
}
function qj(e, t) {
  const r = { value: e, prev: t, next: null };
  return t && (t.next = r), r;
}
function Oj(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const Cf = () => ({ rules: [], merged: !1 }), $f = () => /* @__PURE__ */ new Map();
class Aj {
  constructor(t = [], r = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: r.conditionsMatcher, fieldMatcher: r.fieldMatcher, resolveAction: r.resolveAction || xj }, this.$ = r.anyAction || "manage", this.A = r.anySubjectType || "all", this.m = t, this.M = !!r.detectSubjectType, this.j = r.detectSubjectType || Ak, this.v(t);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(t) {
    return Xn(t) ? t : t ? this.j(t) : this.A;
  }
  update(t) {
    const r = { rules: t, ability: this, target: this };
    return this._("update", r), this.m = t, this.v(t), this._("updated", r), this;
  }
  v(t) {
    const r = /* @__PURE__ */ new Map();
    let a;
    for (let n = t.length - 1; n >= 0; n--) {
      const o = t.length - n - 1, i = new Sj(t[n], this.p, o), s = il(i.action), l = il(i.subject || this.A);
      !this.h && i.fields && (this.h = !0);
      for (let d = 0; d < l.length; d++) {
        const c = Gn(r, l[d], $f);
        a === void 0 && (a = typeof l[d]), typeof l[d] !== a && a !== "mixed" && (a = "mixed");
        for (let f = 0; f < s.length; f++) Gn(c, s[f], Cf).rules.push(i);
      }
    }
    if (this.l = r, a !== "mixed" && !this.M) {
      const n = Of[a] || Of.string;
      this.j = n;
    }
  }
  possibleRulesFor(t, r = this.A) {
    if (!Xn(r)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const a = Gn(this.l, r, $f), n = Gn(a, t, Cf);
    if (n.merged) return n.rules;
    const o = t !== this.$ && a.has(this.$) ? a.get(this.$).rules : void 0;
    let i = Ef(n.rules, o);
    return r !== this.A && (i = Ef(i, this.possibleRulesFor(t, this.A))), n.rules = i, n.merged = !0, i;
  }
  rulesFor(t, r, a) {
    const n = this.possibleRulesFor(t, r);
    if (a && typeof a != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? zj(n, (o) => o.matchesField(a)) : n;
  }
  actionsFor(t) {
    if (!Xn(t)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const r = /* @__PURE__ */ new Set(), a = this.l.get(t);
    a && Array.from(a.keys()).forEach((o) => r.add(o));
    const n = t !== this.A ? this.l.get(this.A) : void 0;
    return n && Array.from(n.keys()).forEach((o) => r.add(o)), Array.from(r);
  }
  on(t, r) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const a = this.F, n = a.get(t) || null, o = qj(r, n);
    return a.set(t, o), () => {
      const i = a.get(t);
      !o.next && !o.prev && i === o ? a.delete(t) : o === i && a.set(t, o.prev), Oj(o);
    };
  }
  _(t, r) {
    if (!this.F) return;
    let a = this.F.get(t) || null;
    const n = [];
    for (; a !== null; )
      n.push(a.value), a = a.prev;
    for (let o = 0; o < n.length; o++) n[o](r);
  }
}
class Ej extends Aj {
  can(t, r, a) {
    const n = this.relevantRuleFor(t, r, a);
    return !!n && !n.inverted;
  }
  relevantRuleFor(t, r, a) {
    const n = this.detectSubjectType(r), o = this.rulesFor(t, n, a);
    for (let i = 0, s = o.length; i < s; i++) if (o[i].matchesConditions(r)) return o[i];
    return null;
  }
  cannot(t, r, a) {
    return !this.can(t, r, a);
  }
}
const Cj = { $eq: au, $ne: lk, $lt: ik, $lte: sk, $gt: fi, $gte: ru, $in: ci, $nin: ak, $all: nk, $size: rk, $regex: uk, $options: dk, $elemMatch: tk, $exists: ok }, $j = { eq: iu, ne: hk, lt: gk, lte: vk, gt: bk, gte: kk, in: pi, nin: _k, all: Sk, size: xk, regex: zk, elemMatch: qk, exists: wk, and: mk }, Bj = lu(Cj, $j), Dj = /[-/\\^$+?.()|[\]{}]/g, Mj = /\.?\*+\.?/g, Pj = /\*+/, jj = /\./g;
function Fj(e, t, r) {
  const a = r[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", n = e.indexOf("**") === -1 ? "[^.]" : ".", o = e.replace(jj, "\\$&").replace(Pj, n + a);
  return t + e.length === r.length ? `(?:${o})?` : o;
}
function Ij(e, t, r) {
  return e === "." && (r[t - 1] === "*" || r[t + 1] === "*") ? e : `\\${e}`;
}
function Tj(e) {
  const t = e.map((a) => a.replace(Dj, Ij).replace(Mj, Fj)), r = t.length > 1 ? `(?:${t.join("|")})` : t[0];
  return new RegExp(`^${r}$`);
}
const Rj = (e) => {
  let t;
  return (r) => (typeof t > "u" && (t = e.every((a) => a.indexOf("*") === -1) ? null : Tj(e)), t === null ? e.indexOf(r) !== -1 : t.test(r));
};
function Nj(e = [], t = {}) {
  return new Ej(e, Object.assign({ conditionsMatcher: Bj, fieldMatcher: Rj }, t));
}
function Vj(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class Uj {
  constructor(t) {
    this.O = t;
  }
  because(t) {
    return this.O.reason = t, this;
  }
}
class Lj {
  constructor(t) {
    this.rules = [], this.C = t, this.can = (r, a, n, o) => this.R(r, a, n, o, !1), this.cannot = (r, a, n, o) => this.R(r, a, n, o, !0), this.build = (r) => Vj(this.C) ? new this.C(this.rules, r) : this.C(this.rules, r);
  }
  R(t, r, a, n, o) {
    const i = { action: t };
    return o && (i.inverted = o), r && (i.subject = r, Array.isArray(a) || typeof a == "string" ? i.fields = a : typeof a < "u" && (i.conditions = a), typeof n < "u" && (i.conditions = n)), this.rules.push(i), new Uj(i);
  }
}
function Wj(e, t) {
  const r = new Lj(Nj), a = e(r.can, r.cannot);
  return a && typeof a.then == "function" ? a.then(() => r.build(t)) : r.build(t);
}
class Kj extends Jt(Qt) {
  id;
  name;
  description = null;
  origin;
  subject;
  action;
  conditions = null;
  get editable() {
    return this.origin === "custom";
  }
  get parsedConditions() {
    if (!this.conditions)
      return {};
    const [t, r] = sr.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return t ? {} : r;
  }
}
class Hj {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(t = {}) {
    const r = (t.permissions || []).map((a) => Kj.from(a));
    this.permissions = r, this.debug = t.debug || !1, this.logger = t.logger || new xn().child({ label: "acl" }), this.ability = Wj((a) => {
      r.forEach((n) => {
        a(n.action, n.subject, n.parsedConditions);
      });
    }), this.debug && this.logger.debug("initialized in debug mode", {
      permissions: this.permissions
    });
  }
  can(t, r, a) {
    if (!a)
      return this.ability.can(t, r);
    const n = zs(r, a);
    return this.ability.can(t, n);
  }
  cannot(t, r, a) {
    if (!a)
      return this.ability.cannot(t, r);
    const n = zs(r, a);
    return this.ability.cannot(t, n);
  }
  subject(t, r) {
    return zs(t, r);
  }
}
class AF extends Jt(Qt, $n, Cn) {
  id;
  drive;
  mimetype;
  purpose;
  client_name;
  filename;
  public;
  // dynamic
  url;
  metas;
  isImage() {
    return this.mimetype.startsWith("image/");
  }
}
class EF extends Jt(Qt, $n, Cn) {
  id;
  file_id;
  name;
  value;
}
class CF extends Jt(Qt, $n, Cn) {
  id;
  purpose;
  mime_types;
  max_size;
  // dynamic 
  upload_url;
  create_file_url;
  getParsedMimeTypes() {
    return this.mime_types.split(",").map((t) => t.trim());
  }
  isAllowedMimeType(t) {
    const r = this.getParsedMimeTypes();
    return r.includes(t) || r.includes("*/*");
  }
  isAllowedSize(t) {
    return t <= this.max_size;
  }
}
class $F extends Jt(Qt, GP(ZP)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(t) {
    const r = Object.fromEntries(
      Object.entries(t).filter(([, a]) => a !== void 0)
    );
    Object.assign(this, r), this.hook_id = `module:${this.id}`;
  }
}
class BF extends Jt(Qt) {
  id;
  name;
  version;
  description;
  enabled;
  author;
  dependencies;
  build;
}
class DF extends Jt(Qt) {
  id;
  name;
  version;
  enabled;
  aliases;
  branches;
}
class MF extends Jt(Qt, $n, Cn) {
  id;
  name;
  description;
}
class PF extends Jt(Qt, $n, Cn) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    const [t, r] = this.name.split(" ");
    if (!r)
      return t[0].toUpperCase();
    const a = t[0].toUpperCase(), n = r[0].toUpperCase();
    return a + n;
  }
}
const Gj = /* @__PURE__ */ O({
  __name: "FormTextarea",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), { name: e.name }, {
      default: g(({ componentField: a }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                A(Nb, I({
                  class: "zkit:min-h-20",
                  rows: e.rows
                }, { ...t.$attrs, ...a }), null, 16, ["rows"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), Yj = dt.proxy(xn), Zj = { class: "zkit:flex" }, Jj = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2"
}, Qj = { class: "zkit:text-sm" }, Xj = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, e3 = { class: "zkit:border-b zkit:p-2" }, t3 = {
  key: 1,
  class: "zkit:flex zkit:flex-col"
}, r3 = {
  key: 0,
  class: "zkit:text-xs zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:mt-0.5"
}, a3 = { class: "zkit:flex zkit:space-x-2 zkit:p-2 zkit:border-t zkit:justify-end" }, n3 = /* @__PURE__ */ O({
  __name: "ZSelect",
  props: /* @__PURE__ */ Ge({
    id: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    labelKey: {
      type: String,
      default: "label"
    },
    descriptionKey: {
      type: String,
      default: null
    },
    valueKey: {
      type: String,
      default: "value"
    },
    fetch: {
      type: String,
      default: ""
    },
    fetchOptions: {
      type: Object,
      default: () => ({})
    },
    fetchKey: {
      type: String,
      default: "items"
    },
    labelClass: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    badge: {
      type: Boolean,
      default: !1
    },
    colorKey: {
      type: String,
      default: "color"
    },
    showSearchInput: {
      type: Boolean,
      default: !1
    }
  }, {
    modelValue: {
      required: !0,
      default: null
    },
    modelModifiers: {},
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {}
  }),
  emits: ["update:modelValue", "update:options"],
  setup(e) {
    const t = e, r = Ae(e, "modelValue"), a = F(""), n = j(() => i.value.map((m) => ({
      label: l(m),
      value: d(m),
      description: c(m),
      color: f(m)
    }))), o = j(() => {
      const m = a.value.trim().toLowerCase();
      return m ? n.value.filter((b) => {
        const v = String(b.label || "").toLowerCase(), _ = String(b.description || "").toLowerCase();
        return v.includes(m) || _.includes(m);
      }) : n.value;
    }), i = Ae(e, "options"), s = j(() => t.multiple ? n.value.filter((m) => r.value?.includes(m.value)) : n.value.find((m) => m.value === r.value) || null);
    function l(m) {
      return it(m, t.labelKey) || m;
    }
    function d(m) {
      return it(m, t.valueKey) || m;
    }
    function c(m) {
      return t.descriptionKey ? it(m, t.descriptionKey) : null;
    }
    function f(m) {
      return t.colorKey ? it(m, t.colorKey) : null;
    }
    function y(m) {
      return t.fetchKey ? it(m, t.fetchKey) : m;
    }
    async function p() {
      if (!t.fetch) return;
      const [m, b] = await Lt.try(t.fetch, t.fetchOptions);
      if (m) {
        Yj.error("Select fetch error:", m);
        return;
      }
      i.value = y(b);
    }
    function k() {
      r.value = o.value.map((m) => m.value);
    }
    function h() {
      r.value = [];
    }
    return xe(() => {
      !i.value.length && t.fetch && p();
    }), pe(() => t.showSearchInput, (m) => {
      m || (a.value = "");
    }), (m, b) => (w(), Z("div", null, [
      e.label && e.variant !== "horizontal" ? (w(), z(pn, {
        key: 0,
        class: ve(["zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:block zkit:mb-4", e.labelClass])
      }, {
        default: g(() => [
          J(W(e.label), 1)
        ]),
        _: 1
      }, 8, ["class"])) : re("", !0),
      le("div", Zj, [
        e.variant === "horizontal" ? (w(), z(pn, {
          key: 0,
          class: ve(["zkit:h-10 zkit:flex zkit:items-center zkit:border zkit:px-2 zkit:rounded-l zkit:bg-secondary zkit:text-xs", e.labelClass])
        }, {
          default: g(() => [
            J(W(e.label), 1)
          ]),
          _: 1
        }, 8, ["class"])) : re("", !0),
        A(u(sP), {
          id: e.id,
          modelValue: r.value,
          "onUpdate:modelValue": b[5] || (b[5] = (v) => r.value = v),
          disabled: e.disabled,
          multiple: e.multiple
        }, {
          default: g(() => [
            A(u(yP), {
              class: ve(u(te)(e.variant === "horizontal" ? "rounded-l-none flex-1" : "w-full", m.$attrs.class))
            }, {
              default: g(() => [
                e.multiple && r.value?.length > 2 ? (w(), Z("div", Jj, [
                  le("span", Qj, W(r.value.length) + " selected", 1)
                ])) : s.value && !Array.isArray(s.value) ? (w(), Z("div", Xj, [
                  le("span", null, W(s.value.label), 1)
                ])) : (w(), z(u(mP), {
                  key: 2,
                  placeholder: e.placeholder
                }, null, 8, ["placeholder"]))
              ]),
              _: 1
            }, 8, ["class"]),
            A(u(lP), { class: "zkit:max-h-92" }, Gk({
              default: g(() => [
                A(u(uP), null, {
                  default: g(() => [
                    o.value.length ? re("", !0) : (w(), z(u(cP), { key: 0 }, {
                      default: g(() => [
                        J(W(m.$t("No items")), 1)
                      ]),
                      _: 1
                    })),
                    e.clearable && !e.multiple ? (w(), z(u(zf), {
                      key: 1,
                      value: null,
                      onClick: b[4] || (b[4] = (v) => r.value = e.multiple ? [] : null)
                    }, {
                      default: g(() => [
                        J(W(m.$t("None")), 1)
                      ]),
                      _: 1
                    })) : re("", !0),
                    (w(!0), Z(Pe, null, Qe(o.value, (v) => (w(), z(u(zf), {
                      key: v.value,
                      value: v.value
                    }, {
                      default: g(() => [
                        e.badge ? (w(), Z("div", {
                          key: 0,
                          class: "zkit:px-2 zkit:py-1 zkit:rounded-md zkit:text-xs zkit:font-medium",
                          style: Ut({ backgroundColor: v.color || "#3b82f6", color: "white" })
                        }, W(v.label), 5)) : re("", !0),
                        e.badge ? re("", !0) : (w(), Z("div", t3, [
                          le("span", null, W(v.label), 1),
                          e.descriptionKey ? (w(), Z("span", r3, W(v.description), 1)) : re("", !0)
                        ]))
                      ]),
                      _: 2
                    }, 1032, ["value"]))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, [
              e.showSearchInput ? {
                name: "top",
                fn: g(() => [
                  le("div", e3, [
                    A(u(qr), {
                      modelValue: a.value,
                      "onUpdate:modelValue": b[0] || (b[0] = (v) => a.value = v),
                      placeholder: m.$t("Search"),
                      class: "zkit:h-9",
                      onKeydown: [
                        b[1] || (b[1] = zt(Ve(() => {
                        }, ["stop"]), ["enter"])),
                        b[2] || (b[2] = Ve(() => {
                        }, ["stop"]))
                      ],
                      onClick: b[3] || (b[3] = Ve(() => {
                      }, ["stop"]))
                    }, null, 8, ["modelValue", "placeholder"])
                  ])
                ]),
                key: "0"
              } : void 0,
              e.multiple ? {
                name: "bottom",
                fn: g(() => [
                  le("div", a3, [
                    A(nt, {
                      variant: "outline",
                      size: "sm",
                      disabled: i.value.length === r.value?.length,
                      onClick: k
                    }, {
                      default: g(() => [
                        J(W(m.$t("All")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    e.clearable ? (w(), z(nt, {
                      key: 0,
                      variant: "outline",
                      size: "sm",
                      disabled: r.value?.length === 0,
                      onClick: h
                    }, {
                      default: g(() => [
                        J(W(m.$t("Clear")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])) : re("", !0)
                  ])
                ]),
                key: "1"
              } : void 0
            ]), 1024)
          ]),
          _: 1
        }, 8, ["id", "modelValue", "disabled", "multiple"])
      ])
    ]));
  }
}), o3 = /* @__PURE__ */ O({
  __name: "FormSelect",
  props: /* @__PURE__ */ Ge({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  }, {
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {}
  }),
  emits: ["update:options"],
  setup(e) {
    const t = Ae(e, "options");
    return (r, a) => (w(), z(u(Tt), {
      name: e.name,
      disabled: e.disabled,
      readonly: e.readonly
    }, {
      default: g(({ componentField: n }) => [
        A(jt, null, {
          default: g(() => [
            A(Ft, null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(n3, I({
              options: t.value,
              "onUpdate:options": a[0] || (a[0] = (o) => t.value = o),
              "model-value": n.modelValue
            }, r.$attrs, {
              onBlur: n.onBlur,
              "onUpdate:modelValue": n["onUpdate:modelValue"]
            }), null, 16, ["options", "model-value", "onBlur", "onUpdate:modelValue"]),
            e.hint ? (w(), z(Pt, { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(It)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), i3 = /* @__PURE__ */ O({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(e) {
    const t = e, r = ye(t, "class"), a = Fe(r);
    return (n, o) => (w(), z(u(m$), I({ "data-slot": "combobox-trigger" }, u(a), {
      class: u(te)("", t.class),
      tabindex: "0"
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s3 = {
  key: 0,
  class: "zkit:flex zkit:items-center zkit:gap-2 zkit:text-left"
}, l3 = {
  key: 0,
  class: "zkit:flex-shrink-0"
}, u3 = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, d3 = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:white-space-normal zkit:break-words zkit:truncate zkit:max-w-sm"
}, c3 = { key: 1 }, f3 = { class: "zkit:ml-2 zkit:flex zkit:items-center zkit:space-x-2" }, p3 = { class: "zkit:relative zkit:w-full zkit:items-center" }, y3 = {
  key: 0,
  class: "zkit:flex-shrink-0 zkit:mr-2"
}, m3 = { class: "zkit:flex zkit:flex-col zkit:items-start zkit:flex-1" }, h3 = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, v3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "FormAutocomplete",
  props: /* @__PURE__ */ Ge({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    labelKey: {
      type: [String, Function],
      default: "label"
    },
    subtitleKey: {
      type: [String, Function],
      default: null
    },
    avatarKey: {
      type: [String, Function],
      default: null
    },
    valueKey: {
      type: [String, Function],
      default: "value"
    },
    hint: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: null
    },
    initialOption: {
      type: Object,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fetch: {
      type: String,
      default: null
    },
    fetchQuery: {
      type: Object,
      default: () => ({})
    },
    fetchOption: {
      type: [String, Function],
      default: null
    },
    serialize: {
      type: Function,
      default: (e) => e
    },
    listAttrs: {
      type: Object,
      default: () => ({ portable: !1 })
    }
  }, {
    selectedObject: {
      type: Object
      // default: () => props.initialOption,
    },
    selectedObjectModifiers: {},
    options: {
      type: Array,
      default: () => []
    },
    optionsModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    search: {
      type: String,
      default: ""
    },
    searchModifiers: {}
  }),
  emits: ["update:selectedObject", "update:options", "update:loading", "update:search"],
  setup(e) {
    const t = e, { setValue: r, value: a } = t0(t.name), n = Ae(e, "selectedObject"), o = Ae(e, "options"), i = Ae(e, "loading"), s = Ae(e, "search"), l = j(() => o.value.map((v) => t.serialize(v)).map((v) => ({
      label: f(v),
      subtitle: y(v),
      avatar: p(v),
      value: c(v),
      initials: k(v)
    }))), d = j(() => {
      if (!n.value)
        return null;
      const v = t.serialize(n.value);
      return {
        label: f(v),
        subtitle: y(v),
        avatar: p(v),
        value: c(v),
        initials: k(v)
      };
    });
    function c(v) {
      return t.valueKey ? typeof t.valueKey == "function" ? t.valueKey(v) : it(v, t.valueKey, v) : v;
    }
    function f(v) {
      return t.labelKey ? typeof t.labelKey == "function" ? t.labelKey(v) : it(v, t.labelKey, v) : null;
    }
    function y(v) {
      return t.subtitleKey ? typeof t.subtitleKey == "function" ? t.subtitleKey(v) : it(v, t.subtitleKey, null) : null;
    }
    function p(v) {
      return t.avatarKey ? typeof t.avatarKey == "function" ? t.avatarKey(v) : it(v, t.avatarKey, null) : null;
    }
    function k(v) {
      const _ = f(v);
      return _ ? String(_).charAt(0).toUpperCase() : "A";
    }
    function h(v) {
      if (!v) {
        n.value = null, r(null);
        return;
      }
      const _ = o.value.map((x) => t.serialize(x)).find((x) => c(x) === v.value);
      n.value = _, r(_ ? c(_) : null);
    }
    async function m() {
      if (!t.fetchOption || !a.value)
        return;
      i.value = !0;
      const [v, _] = await sr(() => typeof t.fetchOption == "string" ? Lt.get(t.fetchOption.replace(":value", a.value), { method: "GET" }) : t.fetchOption(a.value));
      if (v) {
        console.error("Failed to load selected option:", v), i.value = !1;
        return;
      }
      n.value = t.serialize(_), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    async function b() {
      i.value = !0, await m();
      const v = {
        ...t.fetchQuery,
        search: s.value
      }, [_, x] = await Lt.try(t.fetch, {
        method: "GET",
        query: v
      });
      if (_) {
        console.error("Failed to load options:", _), o.value = [], i.value = !1;
        return;
      }
      const $ = x?.items || x;
      o.value = $.map((S) => t.serialize(S)), setTimeout(() => {
        i.value = !1;
      }, 500);
    }
    if (t.fetch && Kf(s, b, {
      immediate: !0,
      debounce: 1e3
    }), t.initialOption && (n.value = t.initialOption), !t.fetch && !t.initialOption && a.value) {
      const v = l.value.find((_) => _.value === a.value);
      v && h(v);
    }
    return (v, _) => (w(), z(u(Tt), {
      name: t.name
    }, {
      default: g(() => [
        A(u(jt), { class: "zkit:flex zkit:flex-col" }, {
          default: g(() => [
            e.label ? (w(), z(u(Ft), { key: 0 }, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(WM), {
              "ignore-filter": !!e.fetch,
              disabled: e.disabled,
              by: e.valueKey
            }, {
              default: g(() => [
                A(u(KM), { "as-child": "" }, {
                  default: g(() => [
                    A(i3, { "as-child": "" }, {
                      default: g(() => [
                        A(u(Vr), {
                          variant: "outline",
                          class: "zkit:justify-between zkit:w-full zkit:h-auto zkit:min-h-10",
                          disabled: e.disabled
                        }, {
                          default: g(() => [
                            d.value ? (w(), Z("div", s3, [
                              e.avatarKey ? (w(), Z("div", l3, [
                                C(v.$slots, "avatar", { option: d.value }, () => [
                                  A(u(hf), { class: "zkit:size-6" }, {
                                    default: g(() => [
                                      d.value.avatar ? (w(), z(gf, {
                                        key: 0,
                                        src: d.value.avatar,
                                        alt: d.value.label
                                      }, null, 8, ["src", "alt"])) : re("", !0),
                                      A(vf, null, {
                                        default: g(() => [
                                          J(W(d.value.initials), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])) : re("", !0),
                              le("div", u3, [
                                C(v.$slots, "label", { option: d.value }, () => [
                                  J(W(d.value.label), 1)
                                ]),
                                e.subtitleKey ? (w(), Z("div", d3, [
                                  C(v.$slots, "subtitle", { option: n.value }, () => [
                                    J(W(d.value.subtitle || "-"), 1)
                                  ])
                                ])) : re("", !0)
                              ])
                            ])) : (w(), Z("div", c3, W(e.placeholder), 1)),
                            le("div", f3, [
                              i.value ? (w(), z(at, {
                                key: 0,
                                name: "Loader2",
                                class: "zkit:animate-spin"
                              })) : re("", !0),
                              A(u(bM), { class: "zkit:size-4 zkit:shrink-0 zkit:opacity-50" })
                            ])
                          ]),
                          _: 3
                        }, 8, ["disabled"])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }),
                A(u(QM), I({
                  align: "start",
                  class: "zkit:w-md"
                }, e.listAttrs), {
                  default: g(() => [
                    le("div", p3, [
                      A(u(ZM), {
                        modelValue: s.value,
                        "onUpdate:modelValue": _[0] || (_[0] = (x) => s.value = x),
                        disabled: e.disabled
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    A(u(HM), { class: "zkit:px-6" }, {
                      default: g(() => [
                        J(W(v.$t("No results")), 1)
                      ]),
                      _: 1
                    }),
                    A(u(GM), { class: "zkit:max-h-60 zkit:overflow-y-auto" }, {
                      default: g(() => [
                        e.clearable ? (w(), Z(Pe, { key: 0 }, [
                          A(u(xf), {
                            value: null,
                            onClick: _[1] || (_[1] = (x) => h(null))
                          }, {
                            default: g(() => [
                              J(W(v.$t("Clear")), 1)
                            ]),
                            _: 1
                          }),
                          A(hP)
                        ], 64)) : re("", !0),
                        (w(!0), Z(Pe, null, Qe(l.value, (x) => (w(), z(u(xf), {
                          key: x.value,
                          value: x.value,
                          onClick: ($) => h(x)
                        }, {
                          default: g(() => [
                            e.avatarKey ? (w(), Z("div", y3, [
                              C(v.$slots, "avatar", { option: x }, () => [
                                A(u(hf), { class: "zkit:size-6" }, {
                                  default: g(() => [
                                    x.avatar ? (w(), z(gf, {
                                      key: 0,
                                      src: x.avatar,
                                      alt: x.label
                                    }, null, 8, ["src", "alt"])) : re("", !0),
                                    A(vf, null, {
                                      default: g(() => [
                                        J(W(x.initials), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])) : re("", !0),
                            le("div", m3, [
                              C(v.$slots, "label", { option: x }, () => [
                                J(W(x.label), 1)
                              ]),
                              e.subtitleKey ? (w(), Z("div", h3, [
                                C(v.$slots, "subtitle", { option: x }, () => [
                                  J(W(x.subtitle || "-"), 1)
                                ])
                              ])) : re("", !0)
                            ]),
                            A(u(JM), null, {
                              default: g(() => [
                                A(u(Xl), {
                                  class: ve(u(te)("zkit:ml-auto zkit:h-4 zkit:w-4"))
                                }, null, 8, ["class"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["value", "onClick"]))), 128))
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 16)
              ]),
              _: 3
            }, 8, ["ignore-filter", "disabled", "by"]),
            e.hint ? (w(), z(u(Pt), { key: 1 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), g3 = { class: "zkit:space-y-2" }, b3 = /* @__PURE__ */ O({
  __name: "FormSwitch",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: g(({ value: a, handleChange: n }) => [
        A(u(jt), { class: "zkit:rounded-lg zkit:border zkit:p-4 zkit:flex zkit:items-center zkit:justify-between zkit:gap-x-4" }, {
          default: g(() => [
            le("div", g3, [
              A(u(Ft), null, {
                default: g(() => [
                  J(W(e.label), 1)
                ]),
                _: 1
              }),
              e.hint ? (w(), z(u(Pt), { key: 0 }, {
                default: g(() => [
                  J(W(e.hint), 1)
                ]),
                _: 1
              })) : re("", !0),
              A(u(It))
            ]),
            A(u(dr), null, {
              default: g(() => [
                A(Rb, {
                  disabled: e.disabled,
                  "model-value": a,
                  "onUpdate:modelValue": n
                }, null, 8, ["disabled", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), k3 = ["src", "alt"], w3 = ["src", "alt"], x3 = /* @__PURE__ */ O({
  __name: "Image",
  props: {
    src: {
      type: String,
      required: !0
    },
    alt: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u($b), null, {
      default: g(() => [
        A(u(Pb), { "as-child": "" }, {
          default: g(() => [
            le("img", I({
              src: e.src,
              alt: e.alt
            }, t.$attrs), null, 16, k3)
          ]),
          _: 1
        }),
        A(u(Bb), {
          class: "zkit:sm:max-w-auto zkit:w-auto zkit:p-0 zkit:h-auto zkit:bg-transparent zkit:border-0 zkit:shadow-none zkit:focus:outline-none",
          "hide-close": ""
        }, {
          default: g(() => [
            A(Mb, { class: "zkit:hidden" }, {
              default: g(() => [
                J(W(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            A(Db, { class: "zkit:hidden" }, {
              default: g(() => [
                J(W(e.alt || t.$t("Image preview")), 1)
              ]),
              _: 1
            }),
            le("img", {
              src: e.src,
              alt: e.alt,
              class: "zkit:block zkit:h-[100dvw] zkit:max-h-[80dvh] zkit:rounded-lg zkit:object-contain"
            }, null, 8, w3)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), z3 = Lt;
function _3(e) {
  return new Promise((t) => {
    const r = document.createElement("input");
    r.type = "file", r.accept = e.accept || "*/*", r.multiple = e.multiple || !1, r.onchange = (a) => {
      const n = a.target, o = Array.from(n.files);
      t(e.multiple ? Array.from(o) : o[0]);
    }, r.oncancel = () => {
      t(e.multiple ? [] : null);
    }, r.click();
  });
}
function S3(e) {
  return new Promise((t, r) => {
    const a = new FileReader();
    a.onload = (n) => {
      n.target?.result instanceof ArrayBuffer ? t(new Uint8Array(n.target.result)) : r(new Error("Failed to read file as ArrayBuffer"));
    }, a.onerror = () => {
      r(a.error);
    }, a.readAsArrayBuffer(e);
  });
}
async function q3(e) {
  const t = new FormData();
  return t.append("file", e.file), e.directory && t.append("directory", e.directory), z3.post(`/api/drives/${e.driveId}/upload`, {
    body: t,
    query: { directory: e.directory }
  });
}
const O3 = {
  pick: _3,
  upload: q3,
  toUint8Array: S3
}, Ek = dt.proxy(Hj), Ck = /* @__PURE__ */ O({
  __name: "FileUploader",
  props: /* @__PURE__ */ Ge({
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    public: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
      // 10MB default
    },
    mimetypes: {
      type: String,
      default: "*/*"
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  }, {
    fileId: { type: Number },
    fileIdModifiers: {},
    fileUrl: { type: String },
    fileUrlModifiers: {},
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ge(["uploaded"], ["update:fileId", "update:fileUrl", "update:loading"]),
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r, o = Ae(e, "fileId"), i = Ae(e, "fileUrl"), s = Ae(e, "loading"), l = j(() => {
      const h = {
        purpose: a.purpose,
        folder: a.folder,
        max_size: a.maxSize,
        mime_types: a.mimetypes
      };
      return Ek.can("create", "FileUploadSession", h);
    });
    async function d(h) {
      return await Lt.post("/api/file-upload-sessions", {
        method: "POST",
        data: {
          public: a.public,
          folder: a.folder,
          client_name: h.name,
          purpose: a.purpose,
          mime_types: a.mimetypes,
          max_size: a.maxSize
        }
      });
    }
    async function c(h, m) {
      return await Lt.put(m, {
        body: h
      });
    }
    async function f(h) {
      return await Lt.post(h);
    }
    async function y(h) {
      const m = await d(h);
      await c(h, m.upload_url);
      const b = await f(m.create_file_url);
      return o.value = b.id, i.value = b.url, b;
    }
    async function p() {
      const h = await O3.pick({
        multiple: a.multiple,
        accept: a.mimetypes
      });
      if (h) {
        if (a.multiple && Array.isArray(h)) {
          const m = [];
          for (const b of h) {
            const v = await y(b);
            m.push(v);
          }
          return m;
        }
        if (!Array.isArray(h))
          return await y(h);
      }
    }
    async function k() {
      s.value = !0;
      const [h, m] = await sr(() => p());
      if (h || !m) {
        s.value = !1, console.error(h);
        return;
      }
      if (await new Promise((b) => setTimeout(b, 500)), Array.isArray(m)) {
        n("uploaded", m), s.value = !1;
        return;
      }
      n("uploaded", m), s.value = !1;
    }
    return t({
      handle: k,
      executeFromFile: y
    }), (h, m) => l.value ? C(h.$slots, "default", {
      handle: k,
      loading: s.value
    }, () => [
      A(nt, {
        type: "button",
        variant: "outline",
        loading: s.value,
        disabled: e.disabled,
        onClick: k
      }, {
        default: g(() => [
          A(at, {
            name: "Upload",
            class: "zkit:size-4 zkit:mr-2"
          }),
          J(" " + W(h.$t("Upload")), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled"])
    ], void 0, 0) : (w(), z(nt, {
      key: 1,
      type: "button",
      variant: "outline",
      disabled: "",
      class: "zkit:text-xs zkit:text-red-600 zkit:mt-1 zkit:block"
    }, {
      default: g(() => [
        J(W(h.$t("Missing permissions for file upload")), 1)
      ]),
      _: 1
    }));
  }
}), A3 = { class: "zkit:flex zkit:flex-col zkit:items-baseline zkit:space-y-4" }, E3 = {
  key: 0,
  class: "zkit:relative zkit:inline-block zkit:border zkit:rounded-lg zkit:overflow-hidden"
}, C3 = { class: "zkit:flex zkit:flex-wrap zkit:flex-col zkit:gap-2 zkit:sm:flex-row! zkit:sm:gap-2 zkit:w-full" }, $3 = /* @__PURE__ */ O({
  __name: "FormImageUploader",
  props: /* @__PURE__ */ Ge({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !1
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    public: {
      type: Boolean,
      default: !1
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
      // 10MB default
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {},
    fileUrl: { type: String },
    fileUrlModifiers: {}
  }),
  emits: ["update:loading", "update:fileUrl"],
  setup(e) {
    const t = Ae(e, "loading"), r = Ae(e, "fileUrl"), a = F(null);
    function n() {
      r.value = null;
    }
    async function o() {
      if (!a.value)
        return;
      const i = await navigator.clipboard.read();
      for (const s of i) {
        const l = s.types.find((y) => y.startsWith("image/"));
        if (!l)
          continue;
        const d = await s.getType(l), c = new File([d], `clipboard-image-${Date.now()}.png`, { type: l });
        t.value = !0;
        const [f] = await sr(() => a.value.executeFromFile(c));
        if (f) {
          t.value = !1;
          return;
        }
        setTimeout(() => {
          t.value = !1;
        }, 500);
        break;
      }
    }
    return (i, s) => (w(), z(u(Tt), { name: e.name }, {
      default: g(({ value: l, setValue: d }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), { class: "zkit:mb-2" }, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                le("div", A3, [
                  C(i.$slots, "preview", {
                    value: l,
                    url: r.value,
                    setValue: d
                  }, () => [
                    r.value ? (w(), Z("div", E3, [
                      A(x3, {
                        src: r.value,
                        alt: i.$t("Uploaded image"),
                        class: "zkit:max-w-xs zkit:max-h-48 zkit:object-cover zkit:w-full"
                      }, null, 8, ["src", "alt"])
                    ])) : re("", !0)
                  ]),
                  A(Ck, {
                    ref_key: "fileUploaderRef",
                    ref: a,
                    "file-url": r.value,
                    "onUpdate:fileUrl": s[0] || (s[0] = (c) => r.value = c),
                    loading: t.value,
                    "onUpdate:loading": s[1] || (s[1] = (c) => t.value = c),
                    "file-id": l,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: "image/*",
                    "onUpdate:fileId": d
                  }, {
                    default: g(({ handle: c, loading: f }) => [
                      C(i.$slots, "default", {
                        handle: c,
                        loading: f,
                        value: l,
                        setValue: d
                      }, () => [
                        le("div", C3, [
                          l ? (w(), z(nt, {
                            key: 0,
                            type: "button",
                            variant: "outline",
                            disabled: e.disabled,
                            tooltip: i.$t("Remove image"),
                            onClick: () => {
                              n(), d(null);
                            }
                          }, {
                            default: g(() => [
                              A(at, {
                                name: "trash",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["disabled", "tooltip", "onClick"])) : re("", !0),
                          A(nt, {
                            type: "button",
                            variant: "outline",
                            loading: f,
                            disabled: e.disabled,
                            tooltip: i.$t("Upload image"),
                            onClick: c
                          }, {
                            default: g(() => [
                              A(at, {
                                name: "Upload",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled", "tooltip", "onClick"]),
                          A(nt, {
                            type: "button",
                            variant: "outline",
                            loading: t.value,
                            disabled: e.disabled,
                            tooltip: i.$t("Paste from clipboard"),
                            onClick: o
                          }, {
                            default: g(() => [
                              A(at, {
                                name: "Clipboard",
                                class: "zkit:size-4"
                              })
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled", "tooltip"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["file-url", "loading", "file-id", "purpose", "folder", "max-size", "disabled", "public", "onUpdate:fileId"])
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), B3 = /* @__PURE__ */ O({
  __name: "FormColorPicker",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !0
    },
    presets: {
      type: Array,
      default: () => Lb
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: g(({ componentField: a }) => [
        A(VP, {
          "model-value": a.modelValue,
          placeholder: e.placeholder,
          readonly: e.readonly,
          presets: e.presets,
          "onUpdate:modelValue": a["onUpdate:modelValue"]
        }, {
          activator: g(({ color: n }) => [
            A(u(jt), null, {
              default: g(() => [
                A(u(Ft), null, {
                  default: g(() => [
                    J(W(e.label), 1)
                  ]),
                  _: 1
                }),
                A(u(dr), null, {
                  default: g(() => [
                    A(Ub, {
                      "model-value": n,
                      placeholder: e.placeholder,
                      readonly: e.readonly,
                      class: "zkit:cursor-pointer",
                      "input-class": "text-left rounded-l-none"
                    }, {
                      prepend: g(() => [
                        le("div", {
                          class: "zkit:size-10 zkit:border zkit:rounded-l zkit:shrink-0",
                          style: Ut({ backgroundColor: n })
                        }, null, 4)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "placeholder", "readonly"])
                  ]),
                  _: 2
                }, 1024),
                e.hint ? (w(), z(u(Pt), { key: 0 }, {
                  default: g(() => [
                    J(W(e.hint), 1)
                  ]),
                  _: 1
                })) : re("", !0),
                A(u(It))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "readonly", "presets", "onUpdate:modelValue"])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), D3 = { class: "zkit:space-y-2" }, M3 = { class: "zkit:flex zkit:gap-2" }, P3 = { class: "zkit:space-y-1" }, j3 = { class: "zkit:text-sm zkit:truncate" }, F3 = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "StringListInput",
  props: /* @__PURE__ */ Ge({
    name: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    }
  }, {
    modelValue: {
      type: Array,
      default: () => []
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ae(e, "modelValue"), r = F("");
    function a() {
      const o = r.value.trim();
      o && (t.value = [...t.value, o], r.value = "");
    }
    function n(o) {
      t.value = t.value.filter((i, s) => s !== o);
    }
    return (o, i) => (w(), Z("div", D3, [
      le("div", M3, [
        A(u(qr), {
          modelValue: r.value,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => r.value = s),
          placeholder: e.placeholder,
          class: "zkit:flex-1 zkit:h-10",
          disabled: e.disabled,
          onKeydown: zt(Ve(a, ["prevent"]), ["enter"])
        }, null, 8, ["modelValue", "placeholder", "disabled", "onKeydown"]),
        A(u(Vr), {
          disabled: e.disabled,
          type: "button",
          class: "zkit:h-10",
          onClick: a
        }, {
          default: g(() => [
            A(at, {
              name: "plus",
              class: "zkit:w-4 zkit:h-4"
            })
          ]),
          _: 1
        }, 8, ["disabled"])
      ]),
      le("div", P3, [
        (w(!0), Z(Pe, null, Qe(t.value, (s, l) => (w(), Z("div", {
          key: l,
          class: "zkit:flex zkit:items-center zkit:justify-between zkit:rounded zkit:border zkit:p-2 zkit:bg-muted"
        }, [
          le("div", j3, W(s), 1),
          A(u(Vr), {
            variant: "ghost",
            size: "icon",
            disabled: e.disabled,
            onClick: (d) => n(l)
          }, {
            default: g(() => [
              A(u(Eb), { class: "zkit:w-4 zkit:h-4" })
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ]))), 128))
      ])
    ]));
  }
}), I3 = /* @__PURE__ */ O({
  __name: "FormStringListInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: g(({ value: a, setValue: n }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                A(F3, {
                  disabled: e.disabled,
                  name: e.name,
                  placeholder: e.placeholder,
                  "model-value": a,
                  "onUpdate:modelValue": n
                }, null, 8, ["disabled", "name", "placeholder", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), T3 = {
  key: 0,
  class: "zkit:text-sm zkit:font-medium zkit:leading-none zkit:peer-disabled:cursor-not-allowed zkit:peer-disabled:opacity-70 zkit:mb-2 zkit:block"
}, R3 = {
  key: 1,
  class: "zkit:text-sm zkit:text-muted-foreground zkit:mt-2"
}, N3 = /* @__PURE__ */ O({
  __name: "JsonInput",
  props: /* @__PURE__ */ Ge({
    mode: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: null
    },
    textareaClass: {
      type: String,
      default: null
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ge(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Ae(e, "modelValue"), a = e, n = t, o = j({
      get() {
        return a.mode === "object" && typeof r.value == "object" ? JSON.stringify(r.value, null, 2) : r.value || "";
      },
      set(l) {
        if (a.mode === "object") {
          try {
            const d = JSON.parse(l);
            r.value = d;
          } catch {
            r.value = l;
          }
          return;
        }
        r.value = l;
      }
    });
    function i() {
      if (a.mode === "object" && typeof r.value == "object") {
        o.value = JSON.stringify(r.value, null, 2);
        return;
      }
      o.value = JSON.stringify(JSON.parse(o.value), null, 2);
    }
    function s() {
      i(), n("blur");
    }
    return xe(i), (l, d) => (w(), Z("div", null, [
      e.label ? (w(), Z("label", T3, W(e.label), 1)) : re("", !0),
      A(Nb, {
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => o.value = c),
        class: ve(["zkit:min-h-20 zkit:font-mono", e.textareaClass]),
        rows: e.rows || (e.mode === "object" ? 6 : 3),
        onBlur: s
      }, null, 8, ["modelValue", "rows", "class"]),
      e.hint ? (w(), Z("p", R3, W(e.hint), 1)) : re("", !0)
    ]));
  }
}), V3 = /* @__PURE__ */ O({
  __name: "FormJsonInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), { name: e.name }, {
      default: g(({ value: a, setValue: n }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                A(N3, I({
                  mode: e.mode,
                  "model-value": a
                }, t.$attrs, { "onUpdate:modelValue": n }), null, 16, ["mode", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), U3 = {
  key: 0,
  class: "zkit:p-3 zkit:border-t"
}, L3 = { class: "zkit:flex zkit:items-center zkit:gap-2" }, W3 = { class: "zkit:flex-1" }, K3 = { class: "zkit:text-sm zkit:font-medium" }, H3 = { class: "zkit:flex-1" }, G3 = { class: "zkit:text-sm zkit:font-medium" }, Y3 = /* @__PURE__ */ O({
  __name: "DatePicker",
  props: /* @__PURE__ */ Ge({
    placeholder: {
      type: String,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    class: {
      type: String,
      default: void 0
    },
    mode: {
      type: String,
      default: "date"
    },
    clearable: {
      type: Boolean,
      required: !1
    }
  }, {
    modelValue: {
      type: [Date, String],
      default: null
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = Ae(e, "modelValue"), a = F(!1), n = F("00"), o = F("00"), i = j(() => r.value ? t.mode === "datetime" ? po(r.value, "yyyy-MM-dd HH:mm") : po(r.value, "yyyy-MM-dd") : t.placeholder || $t("Select date"));
    function s() {
      if (!r.value)
        return;
      const c = new Date(r.value);
      c.setHours(parseInt(n.value) || 0), c.setMinutes(parseInt(o.value) || 0), c.setSeconds(0), c.setMilliseconds(0), r.value = c;
    }
    function l(c) {
      c.stopPropagation(), r.value = null, n.value = "00", o.value = "00";
    }
    const d = j({
      get() {
        if (!r.value)
          return;
        const c = new Date(r.value);
        return sO(c, Fa());
      },
      set(c) {
        if (!c) {
          r.value = null, a.value = !1;
          return;
        }
        const f = new Date(c.year, c.month - 1, c.day);
        t.mode === "datetime" && (f.setHours(parseInt(n.value) || 0), f.setMinutes(parseInt(o.value) || 0), f.setSeconds(0), f.setMilliseconds(0), n.value = f.getHours().toString().padStart(2, "0"), o.value = f.getMinutes().toString().padStart(2, "0")), r.value = f, t.mode === "date" && (a.value = !1);
      }
    });
    return (c, f) => (w(), z(u(Fb), {
      open: a.value,
      "onUpdate:open": f[4] || (f[4] = (y) => a.value = y)
    }, {
      default: g(() => [
        A(u(Tb), { "as-child": "" }, {
          default: g(() => [
            A(u(Vr), {
              variant: "outline",
              class: ve(u(te)(
                "zkit:w-full zkit:justify-start zkit:text-left zkit:font-normal zkit:!h-10",
                !r.value && "zkit:text-muted-foreground",
                t.class
              )),
              disabled: e.disabled
            }, {
              default: g(() => [
                A(at, {
                  name: "calendar",
                  class: "zkit:mr-2 zkit:h-4 zkit:w-4"
                }),
                J(" " + W(i.value) + " ", 1),
                e.clearable && r.value ? (w(), z(at, {
                  key: 0,
                  name: "x",
                  class: "zkit:ml-auto zkit:h-4 zkit:w-4 zkit:opacity-50 zkit:hover:opacity-100",
                  onClick: l
                })) : re("", !0)
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ]),
          _: 1
        }),
        A(u(Ib), { class: "zkit:min-w-[320px] zkit:w-auto zkit:p-0" }, {
          default: g(() => [
            A(u(PM), {
              modelValue: d.value,
              "onUpdate:modelValue": f[0] || (f[0] = (y) => d.value = y)
            }, null, 8, ["modelValue"]),
            e.mode === "datetime" ? (w(), Z("div", U3, [
              le("div", L3, [
                le("div", W3, [
                  le("label", K3, W(c.$t("Hours")), 1),
                  A(u(qr), {
                    modelValue: n.value,
                    "onUpdate:modelValue": f[1] || (f[1] = (y) => n.value = y),
                    type: "number",
                    min: "0",
                    max: "23",
                    class: "zkit:mt-1",
                    onInput: s
                  }, null, 8, ["modelValue"])
                ]),
                le("div", H3, [
                  le("label", G3, W(c.$t("Minutes")), 1),
                  A(u(qr), {
                    modelValue: o.value,
                    "onUpdate:modelValue": f[2] || (f[2] = (y) => o.value = y),
                    type: "number",
                    min: "0",
                    max: "59",
                    class: "zkit:mt-1",
                    onInput: s
                  }, null, 8, ["modelValue"])
                ])
              ]),
              A(u(Vr), {
                variant: "default",
                size: "sm",
                class: "zkit:w-full zkit:mt-3",
                onClick: f[3] || (f[3] = (y) => a.value = !1)
              }, {
                default: g(() => [
                  J(W(c.$t("Done")), 1)
                ]),
                _: 1
              })
            ])) : re("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["open"]));
  }
}), Z3 = /* @__PURE__ */ O({
  __name: "FormDatePicker",
  props: {
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    readonly: {
      type: Boolean,
      default: null
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), {
      name: e.name,
      disabled: e.disabled,
      readonly: e.readonly
    }, {
      default: g(({ componentField: a }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                A(Y3, I(t.$attrs, {
                  "model-value": a.modelValue,
                  disabled: e.disabled,
                  onBlur: a.onBlur,
                  "onUpdate:modelValue": a["onUpdate:modelValue"]
                }), null, 16, ["model-value", "disabled", "onBlur", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name", "disabled", "readonly"]));
  }
}), J3 = { class: "zkit:flex zkit:gap-2" }, Q3 = /* @__PURE__ */ O({
  __name: "FormTextField",
  props: {
    name: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "text"
    },
    step: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      required: !0
    },
    hint: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    presets: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, r) => (w(), z(u(Tt), {
      name: e.name,
      "validate-on-blur": !1
    }, {
      default: g(({ componentField: a }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                le("div", J3, [
                  A(u(qr), I({
                    type: e.type,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    autocomplete: e.autocomplete,
                    readonly: e.readonly,
                    autofocus: e.autofocus,
                    step: e.step,
                    class: "zkit:h-10 zkit:flex-1"
                  }, a), null, 16, ["type", "placeholder", "disabled", "autocomplete", "readonly", "autofocus", "step"]),
                  e.presets.length > 0 ? (w(), z(u(rP), { key: 0 }, {
                    default: g(() => [
                      A(u(oP), { "as-child": "" }, {
                        default: g(() => [
                          A(u(Vr), {
                            variant: "outline",
                            size: "sm",
                            type: "button",
                            class: "zkit:h-10"
                          }, {
                            default: g(() => [
                              A(at, {
                                name: "chevron-down",
                                class: "zkit:w-4 zkit:h-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      A(u(aP), { align: "end" }, {
                        default: g(() => [
                          (w(!0), Z(Pe, null, Qe(e.presets, (n) => (w(), z(u(nP), {
                            key: n.value,
                            onClick: (o) => a.onChange(n.value)
                          }, {
                            default: g(() => [
                              J(W(n.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]))), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)) : re("", !0),
                  C(t.$slots, "append")
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), X3 = { class: "zkit:flex zkit:flex-col zkit:gap-3" }, eF = { class: "zkit:flex zkit:items-center zkit:gap-2" }, tF = {
  key: 0,
  class: "zkit:text-sm zkit:text-muted-foreground"
}, rF = /* @__PURE__ */ O({
  __name: "FormFileUploader",
  props: /* @__PURE__ */ Ge({
    name: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    purpose: {
      type: String,
      required: !0
    },
    folder: {
      type: String,
      default: null
    },
    public: {
      type: Boolean,
      default: !1
    },
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    mimetypes: {
      type: String,
      default: "*/*"
    }
  }, {
    loading: { type: Boolean, type: Boolean, default: !1 },
    loadingModifiers: {}
  }),
  emits: ["update:loading"],
  setup(e) {
    const t = Ae(e, "loading"), r = F(null);
    function a(o) {
      r.value = o;
    }
    function n(o) {
      r.value = null, o(null);
    }
    return (o, i) => (w(), z(u(Tt), { name: e.name }, {
      default: g(({ value: s, setValue: l }) => [
        A(u(jt), null, {
          default: g(() => [
            A(u(Ft), null, {
              default: g(() => [
                J(W(e.label), 1)
              ]),
              _: 1
            }),
            A(u(dr), null, {
              default: g(() => [
                le("div", X3, [
                  A(Ck, {
                    loading: t.value,
                    "onUpdate:loading": i[0] || (i[0] = (d) => t.value = d),
                    "file-id": s,
                    purpose: e.purpose,
                    folder: e.folder,
                    "max-size": e.maxSize,
                    disabled: e.disabled,
                    public: e.public,
                    mimetypes: e.mimetypes,
                    "onUpdate:fileId": l,
                    onUploaded: a
                  }, {
                    default: g(({ handle: d, loading: c }) => [
                      le("div", eF, [
                        A(nt, {
                          type: "button",
                          variant: "outline",
                          loading: c,
                          disabled: e.disabled,
                          onClick: d
                        }, {
                          default: g(() => [
                            A(at, {
                              name: "Upload",
                              class: "zkit:size-4 zkit:mr-2"
                            }),
                            J(" " + W(s ? o.$t("Replace") : o.$t("Upload")), 1)
                          ]),
                          _: 2
                        }, 1032, ["loading", "disabled", "onClick"]),
                        s ? (w(), z(nt, {
                          key: 0,
                          type: "button",
                          variant: "destructive",
                          disabled: e.disabled,
                          onClick: (f) => n(l)
                        }, {
                          default: g(() => [
                            A(at, {
                              name: "X",
                              class: "zkit:size-4 zkit:mr-2"
                            }),
                            J(" " + W(o.$t("Clear")), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])) : re("", !0)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["loading", "file-id", "purpose", "folder", "max-size", "disabled", "public", "mimetypes", "onUpdate:fileId"]),
                  s ? (w(), Z("p", tF, W(o.$t("Selected file :0", [r.value?.client_name || s])), 1)) : re("", !0)
                ])
              ]),
              _: 2
            }, 1024),
            e.hint ? (w(), z(u(Pt), { key: 0 }, {
              default: g(() => [
                J(W(e.hint), 1)
              ]),
              _: 1
            })) : re("", !0),
            A(u(It))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), aF = ["name"], nF = /* @__PURE__ */ O({
  __name: "FormHiddenField",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, r) => (w(), Z("input", {
      class: "zkit:hidden",
      name: e.name
    }, null, 8, aF));
  }
}), oF = {
  key: 1,
  class: "zkit:text-destructive"
}, iF = /* @__PURE__ */ O({
  __name: "FormAutoFieldRender",
  props: {
    name: {
      type: String,
      required: !0
    },
    field: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = to(null), a = to({}), n = {
      "text-field": Q3,
      textarea: Gj,
      select: o3,
      autocomplete: v3,
      switch: b3,
      "file-upload": rF,
      "image-upload": $3,
      "color-picker": B3,
      "string-list-input": I3,
      "json-input": V3,
      "date-picker": Z3,
      hidden: nF
    };
    async function o() {
      const { component: i, ...s } = t.field;
      let l = null;
      if (typeof i == "string" && n[i] && (l = n[i]), typeof i == "function" && (l = i()), !l) {
        console.error(`Component ${i} not found`);
        return;
      }
      a.value = {
        name: t.name,
        ...s
      }, r.value = l;
    }
    return xe(o), (i, s) => r.value ? (w(), z(Ur(r.value), Be(I({ key: 0 }, a.value)), null, 16)) : (w(), Z("div", oF, W(i.$t("Error rendering field")) + ": " + W(t.field.component), 1));
  }
}), sF = /* @__PURE__ */ O({
  __name: "FormAutoFieldList",
  props: {
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    return (t, r) => (w(!0), Z(Pe, null, Qe(e.fields, (a, n) => (w(), z(iF, {
      key: n,
      name: n,
      field: a
    }, null, 8, ["name", "field"]))), 128));
  }
});
dt.proxy(YP);
const lF = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "ZAlertButton",
  props: /* @__PURE__ */ Ge({
    title: {
      type: String,
      default: () => $t("Are you sure?")
    },
    description: {
      type: String,
      default: () => $t("This action cannot be undone.")
    },
    fetch: {
      type: [String, Function],
      required: !1,
      default: void 0
    },
    fetchMethod: {
      type: String,
      default: "DELETE"
    },
    toastOnSuccess: {
      type: String,
      default: () => $t("Deleted successfully.")
    }
  }, {
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ Ge(["confirm", "fetched"], ["update:loading"]),
  setup(e, { emit: t }) {
    const r = e, a = Ae(e, "loading"), n = t;
    async function o() {
      if (!r.fetch) return;
      a.value = !0;
      let [s, l] = [null, null];
      if (typeof r.fetch == "string" && ([s, l] = await Lt.try(r.fetch, { method: r.fetchMethod })), typeof r.fetch == "function") {
        const d = r.fetch;
        [s, l] = await sr(() => d());
      }
      if (s) {
        a.value = !1;
        return;
      }
      setTimeout(() => {
        a.value = !1, r.toastOnSuccess && oo.success(r.toastOnSuccess), n("fetched", l);
      }, 500);
    }
    function i() {
      if (r.fetch)
        return o();
      n("confirm");
    }
    return (s, l) => (w(), z(Vb, null, {
      fallback: g(() => [
        A(nt, I(s.$attrs, { loading: a.value }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["loading"])
      ]),
      default: g(() => [
        A(u(xM), null, {
          default: g(() => [
            A(u(CM), { "as-child": "" }, {
              default: g(() => [
                A(nt, I(s.$attrs, { loading: a.value }), {
                  default: g(() => [
                    C(s.$slots, "default")
                  ]),
                  _: 3
                }, 16, ["loading"])
              ]),
              _: 3
            }),
            A(u(SM), null, {
              default: g(() => [
                A(u(AM), null, {
                  default: g(() => [
                    A(u(EM), null, {
                      default: g(() => [
                        J(W(e.title), 1)
                      ]),
                      _: 1
                    }),
                    A(u(qM), null, {
                      default: g(() => [
                        J(W(e.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                A(u(OM), null, {
                  default: g(() => [
                    A(u(_M), { disabled: a.value }, {
                      default: g(() => [
                        J(W(s.$t("Cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    A(u(zM), {
                      disabled: a.value,
                      onClick: i
                    }, {
                      default: g(() => [
                        J(W(s.$t("Confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});
class uF extends Jt(Qt) {
  id;
  label;
  layout;
  to;
  target;
  group;
  order;
  icon;
  parent;
}
class dF {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...t) {
    for (const r of t)
      r.id || (r.id = JSON.stringify(r)), this.items.set(r.id, uF.from(r));
  }
  remove(t) {
    this.items.delete(t);
  }
  list(t = {}) {
    let r = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return t.layout && (r = r.filter((a) => a.layout === t.layout)), t.group && (r = r.filter((a) => a.group === t.group || a.parent === t.group)), t.parent && (r = r.filter((a) => a.parent === t.parent)), t.allowed !== void 0 && t.allowed === !0 && (r = r.filter((a) => Ek.can("view", a))), r.sort((a, n) => {
      const o = a.order ? a.order : 98, i = n.order ? n.order : 98;
      return o - i;
    }), r;
  }
  clear() {
    this.items.clear();
  }
}
dt.proxy(dF);
class cF {
  static __container_entry_key = "AuthService";
  user;
  disabled = !1;
  constructor(t = {}) {
    this.user = t.user || null, this.disabled = t.disabled || !1;
  }
  async logout(t) {
    const [r] = await Lt.try("/auth/logout", { method: "POST" });
    r || (window.location.href = t?.redirect || "/");
  }
}
dt.proxy(cF);
const fF = { class: "zkit:flex zkit:items-center" }, pF = { class: "zkit:flex-1" }, yF = /* @__PURE__ */ O({
  __name: "ZDataTable",
  props: /* @__PURE__ */ Ge({
    itemKey: {
      type: String,
      default: null
    },
    class: {
      type: String,
      default: ""
    },
    enableSelection: {
      type: Boolean,
      default: !1
    },
    disableSort: {
      type: Boolean,
      default: !1
    }
  }, {
    selected: {
      type: Array,
      default: () => []
    },
    selectedModifiers: {},
    loading: {
      type: Boolean,
      default: !1
    },
    loadingModifiers: {},
    rows: {
      type: Array,
      default: () => []
    },
    rowsModifiers: {},
    columns: {
      type: Array,
      default: () => []
    },
    columnsModifiers: {},
    orderBy: {
      type: [String, Array],
      default: null
    },
    orderByModifiers: {},
    orderDirection: {
      type: [String, Array],
      default: null
    },
    orderDirectionModifiers: {}
  }),
  emits: ["update:selected", "update:loading", "update:rows", "update:columns", "update:orderBy", "update:orderDirection"],
  setup(e) {
    const t = e, r = Ae(e, "selected"), a = Ae(e, "loading"), n = Ae(e, "rows"), o = Ae(e, "columns"), i = Ae(e, "orderBy"), s = Ae(e, "orderDirection"), l = j(() => o.value.map((v, _) => ({
      id: v.id || String(_),
      ...v
    }))), d = j(() => n.value.map((v) => {
      let _ = { _raw: v };
      for (const x of l.value)
        _[x.id] = c(v, x);
      return _;
    }));
    function c(v, _) {
      return typeof _.field == "function" ? _.field(v) : it(v, _.field);
    }
    function f(v) {
      if (!t.itemKey) return;
      const _ = it(v, t.itemKey);
      if (_)
        return r.value.includes(_);
    }
    function y(v) {
      if (!t.itemKey) return;
      const _ = it(v, t.itemKey);
      if (!_) return;
      if (!r.value.includes(_)) {
        r.value.push(_);
        return;
      }
      const x = r.value.indexOf(_);
      r.value.splice(x, 1);
    }
    function p() {
      return Array.isArray(i.value) ? i.value : i.value ? [i.value] : [];
    }
    function k() {
      return Array.isArray(s.value) ? s.value : s.value ? [s.value] : [];
    }
    function h(v) {
      if (t.disableSort || v.sortable === !1) return;
      const _ = p(), x = k(), $ = _.indexOf(v.id);
      $ !== -1 && x[$] === "desc" ? (_.splice($, 1), x.splice($, 1)) : $ !== -1 ? x[$] = "desc" : (_.push(v.id), x.push("asc")), i.value = _, s.value = x;
    }
    function m(v) {
      return p().includes(v.id);
    }
    function b(v) {
      const _ = p(), x = k(), $ = _.indexOf(v.id);
      return $ !== -1 && x[$] === "desc";
    }
    return (v, _) => (w(), z(u(zP), {
      "wrapper-class": u(te)("border rounded-lg", t.class, a.value ? "opacity-50 pointer-events-none" : "")
    }, {
      default: g(() => [
        A(u(SP), null, {
          default: g(() => [
            A(u(ks), null, {
              default: g(() => [
                e.enableSelection ? (w(), z(u(_f), {
                  key: 0,
                  class: "zkit:w-[50px]"
                })) : re("", !0),
                (w(!0), Z(Pe, null, Qe(l.value, (x, $) => (w(), z(u(_f), {
                  key: $,
                  class: ve(["zkit:group", [
                    !e.disableSort && x.sortable !== !1 ? "zkit:cursor-pointer zkit:select-none" : ""
                  ]]),
                  onClick: (S) => h(x)
                }, {
                  default: g(() => [
                    le("div", fF, [
                      le("div", pF, [
                        C(v.$slots, `column-${x.id}`, { column: x }, () => [
                          J(W(x.label), 1)
                        ])
                      ]),
                      !e.disableSort && x.sortable !== !1 ? (w(), z(u(yM), {
                        key: 0,
                        size: 12,
                        class: ve([
                          m(x) ? "" : "zkit:opacity-0 zkit:group-hover:opacity-100",
                          b(x) ? "zkit:rotate-180" : ""
                        ])
                      }, null, 8, ["class"])) : re("", !0)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        A(u(_P), null, {
          default: g(() => [
            d.value.length === 0 ? (w(), z(u(ks), { key: 0 }, {
              default: g(() => [
                A(u(bs), {
                  colspan: l.value.length + (e.enableSelection ? 1 : 0),
                  class: "zkit:text-center zkit:py-4"
                }, {
                  default: g(() => [
                    J(W(v.$t("No data")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"])
              ]),
              _: 1
            })) : re("", !0),
            (w(!0), Z(Pe, null, Qe(d.value, (x, $) => (w(), z(u(ks), { key: $ }, {
              default: g(() => [
                e.enableSelection ? (w(), z(u(bs), {
                  key: 0,
                  class: "zkit:w-[50px]"
                }, {
                  default: g(() => [
                    A(LM, {
                      "model-value": f(x),
                      "onUpdate:modelValue": (S) => y(x)
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024)) : re("", !0),
                (w(!0), Z(Pe, null, Qe(l.value, (S, q) => (w(), z(u(bs), { key: q }, {
                  default: g(() => [
                    C(v.$slots, `row-${S.id}`, {
                      row: x._raw,
                      column: S
                    }, () => [
                      J(W(x[S.id]), 1)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["wrapper-class"]));
  }
}), mF = {
  key: 0,
  class: "zkit:mb-2 zkit:text-sm zkit:text-red-600"
}, Bf = /* @__PURE__ */ O({
  __name: "ZDialogForm",
  props: /* @__PURE__ */ Ge({
    title: {
      type: String,
      default: () => $t("Form")
    },
    description: {
      type: String,
      default: () => $t("Fill in the details below to create a new item")
    },
    schema: {
      type: Object,
      default: () => Jr.create((e) => e.record(e.string(), e.any()))
      // dummy schema to satisfy generic constraint
    },
    values: {
      type: Object,
      default: () => ({})
    },
    handle: {
      type: Function,
      default: null
    },
    fields: {
      type: Object,
      default: () => ({})
    },
    submitText: {
      type: String,
      default: () => $t("Save")
    },
    closeTimeout: {
      type: Number,
      default: 800
    },
    toastOnSuccess: {
      type: String,
      default: null
    },
    contentClass: {
      type: String,
      default: ""
    }
  }, {
    open: {
      type: Boolean,
      default: !1
    },
    openModifiers: {}
  }),
  emits: /* @__PURE__ */ Ge(["submit"], ["update:open"]),
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r, o = F(!1), i = Ae(e, "open"), { handleSubmit: s, errors: l, values: d, resetForm: c, setFieldValue: f } = Jk({
      validationSchema: Pq(a.schema),
      initialValues: a.values
    }), y = j(() => {
      const h = {};
      for (const [m, b] of Object.entries(a.fields))
        typeof b == "function" ? h[m] = b(d) : h[m] = b;
      return h;
    }), p = j(() => {
      const h = {};
      for (const [m, b] of Object.entries(l.value))
        a.fields[m] || (h[m] = b);
      return h;
    }), k = s(async (h) => {
      if (!a.handle) {
        i.value = !1;
        return;
      }
      o.value = !0;
      const [m, b] = await sr(() => a.handle(h));
      if (m) {
        o.value = !1, console.error(m);
        return;
      }
      a.toastOnSuccess && oo.success(a.toastOnSuccess), a.closeTimeout && await new Promise((v) => setTimeout(v, a.closeTimeout)), i.value = !1, o.value = !1, c(), n("submit", b);
    });
    return pe(i, () => {
      i.value && c({ values: a.values });
    }), t({ setFieldValue: f }), (h, m) => (w(), z(Vb, null, {
      fallback: g(() => [
        C(h.$slots, "default")
      ]),
      default: g(() => [
        A(u($b), {
          open: i.value,
          "onUpdate:open": m[1] || (m[1] = (b) => i.value = b)
        }, {
          default: g(() => [
            h.$slots.default ? (w(), z(u(Pb), { key: 0 }, {
              default: g(() => [
                C(h.$slots, "default")
              ]),
              _: 3
            })) : re("", !0),
            A(u(Bb), {
              class: ve(u(te)("zkit:max-h-[90vh] zkit:overflow-y-auto"))
            }, {
              default: g(() => [
                A(u(tP), null, {
                  default: g(() => [
                    A(u(Mb), null, {
                      default: g(() => [
                        J(W(e.title), 1)
                      ]),
                      _: 1
                    }),
                    A(u(Db), null, {
                      default: g(() => [
                        J(W(e.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                le("form", {
                  class: "zkit:space-y-4 zkit:py-2",
                  onSubmit: m[0] || (m[0] = Ve(
                    //@ts-ignore
                    (...b) => u(k) && u(k)(...b),
                    ["prevent"]
                  ))
                }, [
                  A(sF, { fields: y.value }, null, 8, ["fields"]),
                  Object.keys(p.value).length ? (w(), Z("div", mF, [
                    (w(!0), Z(Pe, null, Qe(p.value, (b, v) => (w(), Z("div", { key: v }, W(b), 1))), 128))
                  ])) : re("", !0),
                  A(u(eP), null, {
                    default: g(() => [
                      A(nt, {
                        type: "submit",
                        class: "zkit:w-full",
                        loading: o.value
                      }, {
                        default: g(() => [
                          J(W(e.submitText), 1)
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ], 32)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 3
        }, 8, ["open"])
      ]),
      _: 3
    }));
  }
}), We = Uf.v, hF = We.object({
  id: We.string(),
  name: We.string(),
  enabled: We.boolean(),
  trigger_events: We.array(We.string()),
  request_url: We.string(),
  request_method: We.optional(We.picklist(["GET", "POST", "PUT", "DELETE"])),
  request_headers: We.optional(We.record(We.string(), We.string())),
  request_body: We.optional(We.union([We.string(), We.record(We.string(), We.any())]))
}), $k = We.omit(hF, ["id", "enabled"]);
We.partial($k);
const vF = { class: "mb-6 flex items-center justify-between gap-4" }, gF = { class: "flex items-center gap-2" }, bF = { class: "flex flex-col gap-1" }, kF = { class: "flex justify-end items-center gap-2" }, jF = /* @__PURE__ */ O({
  __name: "senders",
  setup(e) {
    const { items: t, loading: r, load: a, hydrate: n } = bw("/api/webhook/senders", { limit: 100 }), o = l0([
      {
        id: "enabled",
        label: $t("Enabled"),
        field: "enabled"
      },
      {
        id: "name",
        label: $t("Name"),
        field: "name"
      },
      {
        id: "event",
        label: $t("Event"),
        field: "trigger_events"
      },
      { id: "actions" }
    ]);
    xe(n), Df(n);
    const i = Uf.create((m) => m.intersect([
      m.omit($k, ["request_headers", "trigger_events"]),
      m.object({
        request_headers: m.optional(m.string()),
        trigger_events: m.string()
      })
    ])), s = u0({
      name: {
        component: "text-field",
        label: $t("Name"),
        placeholder: $t("New user notify")
      },
      trigger_events: {
        component: "textarea",
        label: $t("Events"),
        hint: $t('Separated by semicolons. ex "user:created;user:deleted"')
      },
      request_url: {
        component: "text-field",
        label: $t("Request URL"),
        placeholder: "https://example.com/webhook"
      },
      request_method: {
        component: "select",
        label: $t("Request Method"),
        options: [
          {
            label: "POST",
            value: "POST"
          },
          {
            label: "GET",
            value: "GET"
          },
          {
            label: "PUT",
            value: "PUT"
          },
          {
            label: "DELETE",
            value: "DELETE"
          }
        ]
      },
      request_headers: {
        component: "textarea",
        label: $t("Request Headers"),
        // split with new line, and key value with ":"
        hint: $t('One header per line, key and value separated by ":". ex "Content-Type: application/json"')
      },
      request_body: {
        component: "textarea",
        label: $t("Request Body"),
        hint: $t("You can use {{data.event}} to include the variables in the request body.")
      }
    });
    function l(m) {
      const b = {
        name: m.name,
        request_url: m.request_url,
        request_method: m.request_method,
        request_body: m.request_body,
        request_headers: m.request_headers || {}
      };
      if (m.trigger_events && (b.trigger_events = m.trigger_events.join(";")), m.request_headers) {
        const v = [];
        for (const [_, x] of Object.entries(m.request_headers))
          v.push(`${_}: ${x}`);
        b.request_headers = v.join(`
`);
      }
      return m.request_body && (b.request_body = JSON.stringify(m.request_body, null, 2)), b;
    }
    function d(m) {
      const b = {
        name: m.name,
        request_url: m.request_url,
        request_method: m.request_method,
        request_body: m.request_body
      };
      if (m.trigger_events && (b.trigger_events = m.trigger_events.split(`

;`).map((v) => v.trim())), m.request_headers) {
        const v = {};
        m.request_headers.split(`
`).forEach((x) => {
          const [$, S] = x.split(":").map((q) => q.trim());
          $ && S && (v[$] = S);
        }), b.request_headers = v;
      }
      if (m.request_body)
        try {
          b.request_body = JSON.parse(m.request_body);
        } catch {
          throw oa.error($t("Invalid JSON in request body.")), new Error("Invalid JSON in request body.");
        }
      return b;
    }
    const c = F([]), f = F([]);
    async function y(m) {
      const [b] = await jn.try("/api/webhook/senders", {
        method: "POST",
        data: d(m)
      });
      if (b) {
        oa.error($t("Failed to create."));
        return;
      }
      oa.success($t("Created successfully.")), a();
    }
    async function p(m, b) {
      const [v] = await jn.try(`/api/webhook/senders/${m}`, {
        method: "PUT",
        data: d(b)
      });
      v || (oa.success($t("Updated successfully.")), a());
    }
    async function k(m) {
      c.value.push(m);
      const [b] = await jn.try(`/api/webhook/senders/${m}`, { method: "DELETE" });
      if (b) {
        c.value = [];
        return;
      }
      await new Promise((v) => setTimeout(v, 1e3)), oa.success($t("Deleted successfully.")), a();
    }
    async function h(m) {
      f.value.push(m.id);
      const [b] = await jn.try(`/api/webhook/senders/${m.id}/toggle`, { method: "POST" });
      if (b) {
        f.value = [];
        return;
      }
      await new Promise((v) => setTimeout(v, 800)), oa.success($t("Updated successfully.")), f.value = [], a();
    }
    return (m, b) => (w(), Z(
      Pe,
      null,
      [
        le("div", vF, [
          le("div", null, [
            A(u(KP), null, {
              default: g(() => [
                J(
                  W(m.$t("Webhook senders")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            A(u(HP), null, {
              default: g(() => [
                J(
                  W(m.$t("Manage your webhook senders here.")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          le("div", gF, [
            A(u(nt), {
              variant: "outline",
              size: "icon",
              disabled: u(r),
              onClick: u(a)
            }, {
              default: g(() => [
                A(u(at), {
                  name: "RefreshCw",
                  class: ve(["size-4", { "animate-spin": u(r) }])
                }, null, 8, ["class"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["disabled", "onClick"]),
            A(u(Bf), {
              fields: u(s),
              title: m.$t("New Webhook Sender"),
              description: m.$t("Create a new webhook sender."),
              "submit-text": m.$t("Create"),
              schema: u(i),
              handle: y,
              onSubmit: u(a)
            }, {
              default: g(() => [
                A(u(nt), null, {
                  default: g(() => [
                    J(
                      W(m.$t("Add new")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["fields", "title", "description", "submit-text", "schema", "onSubmit"])
          ])
        ]),
        A(u(yF), {
          loading: u(r),
          rows: u(t),
          columns: u(o)
        }, {
          "row-enabled": g(({ row: v }) => [
            f.value.includes(v.id) ? (w(), z(u(at), {
              key: 0,
              name: "Loader2",
              class: "animate-spin"
            })) : (w(), z(u(Rb), {
              key: 1,
              "model-value": !!v.enabled,
              onClick: (_) => h(v)
            }, null, 8, ["model-value", "onClick"]))
          ]),
          "row-event": g(({ row: v }) => [
            le("div", bF, [
              (w(!0), Z(
                Pe,
                null,
                Qe(v.trigger_events, (_) => (w(), z(
                  u($M),
                  { key: _ },
                  {
                    default: g(() => [
                      J(
                        W(_),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          "row-actions": g(({ row: v }) => [
            le("div", kF, [
              A(u(Bf), {
                fields: u(s),
                title: m.$t("Edit Webhook Sender"),
                description: m.$t("Edit the webhook sender."),
                "submit-text": m.$t("Update"),
                schema: u(i),
                values: l(v),
                handle: (_) => p(v.id, _),
                onSubmit: u(a)
              }, {
                default: g(() => [
                  A(u(nt), {
                    variant: "ghost",
                    size: "icon"
                  }, {
                    default: g(() => [
                      A(u(at), { name: "Edit" })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["fields", "title", "description", "submit-text", "schema", "values", "handle", "onSubmit"]),
              A(u(lF), {
                variant: "ghost",
                loading: c.value.includes(v.id),
                onConfirm: (_) => k(v.id)
              }, {
                default: g(() => [
                  A(u(at), { name: "trash" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading", "onConfirm"])
            ])
          ]),
          _: 1
          /* STABLE */
        }, 8, ["loading", "rows", "columns"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
export {
  jF as default
};
