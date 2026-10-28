import "vue-router";
import { ref as Mw } from "vue";
import "vee-validate";
var fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $w(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var po, yo;
function tr() {
  return yo || (yo = 1, po = TypeError), po;
}
const qw = {}, Iw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qw
}, Symbol.toStringTag, { value: "Module" })), Rw = /* @__PURE__ */ $w(Iw);
var si, ho;
function Sn() {
  if (ho) return si;
  ho = 1;
  var e = typeof Map == "function" && Map.prototype, r = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, t = e && r && typeof r.get == "function" ? r.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = i && a && typeof a.get == "function" ? a.get : null, o = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, b = typeof WeakRef == "function" && WeakRef.prototype, d = b ? WeakRef.prototype.deref : null, E = Boolean.prototype.valueOf, m = Object.prototype.toString, h = Function.prototype.toString, P = String.prototype.match, O = String.prototype.slice, M = String.prototype.replace, v = String.prototype.toUpperCase, A = String.prototype.toLowerCase, x = RegExp.prototype.test, w = Array.prototype.concat, S = Array.prototype.join, j = Array.prototype.slice, I = Math.floor, $ = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, z = Object.getOwnPropertySymbols, X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, C = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === C || !0) ? Symbol.toStringTag : null, te = Object.prototype.propertyIsEnumerable, U = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(p) {
    return p.__proto__;
  } : null);
  function R(p, y) {
    if (p === 1 / 0 || p === -1 / 0 || p !== p || p && p > -1e3 && p < 1e3 || x.call(/e/, y))
      return y;
    var V = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof p == "number") {
      var Q = p < 0 ? -I(-p) : I(p);
      if (Q !== p) {
        var Z = String(Q), L = O.call(y, Z.length + 1);
        return M.call(Z, V, "$&_") + "." + M.call(M.call(L, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return M.call(y, V, "$&_");
  }
  var W = Rw, g = W.custom, q = ee(g) ? g : null, D = {
    __proto__: null,
    double: '"',
    single: "'"
  }, J = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  si = function p(y, V, Q, Z) {
    var L = V || {};
    if (se(L, "quoteStyle") && !se(D, L.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (se(L, "maxStringLength") && (typeof L.maxStringLength == "number" ? L.maxStringLength < 0 && L.maxStringLength !== 1 / 0 : L.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var _e = se(L, "customInspect") ? L.customInspect : !0;
    if (typeof _e != "boolean" && _e !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (se(L, "indent") && L.indent !== null && L.indent !== "	" && !(parseInt(L.indent, 10) === L.indent && L.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (se(L, "numericSeparator") && typeof L.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ee = L.numericSeparator;
    if (typeof y > "u")
      return "undefined";
    if (y === null)
      return "null";
    if (typeof y == "boolean")
      return y ? "true" : "false";
    if (typeof y == "string")
      return ur(y, L);
    if (typeof y == "number") {
      if (y === 0)
        return 1 / 0 / y > 0 ? "0" : "-0";
      var pe = String(y);
      return Ee ? R(y, pe) : pe;
    }
    if (typeof y == "bigint") {
      var xe = String(y) + "n";
      return Ee ? R(y, xe) : xe;
    }
    var xt = typeof L.depth > "u" ? 5 : L.depth;
    if (typeof Q > "u" && (Q = 0), Q >= xt && xt > 0 && typeof y == "object")
      return re(y) ? "[Array]" : "[Object]";
    var qe = ni(L, Q);
    if (typeof Z > "u")
      Z = [];
    else if (ge(Z, y) >= 0)
      return "[Circular]";
    function ve(Ie, tt, ai) {
      if (tt && (Z = j.call(Z), Z.push(tt)), ai) {
        var vr = {
          depth: L.depth
        };
        return se(L, "quoteStyle") && (vr.quoteStyle = L.quoteStyle), p(Ie, vr, Q + 1, Z);
      }
      return p(Ie, L, Q + 1, Z);
    }
    if (typeof y == "function" && !Y(y)) {
      var cr = Ae(y), fr = Ze(y, ve);
      return "[Function" + (cr ? ": " + cr : " (anonymous)") + "]" + (fr.length > 0 ? " { " + S.call(fr, ", ") + " }" : "");
    }
    if (ee(y)) {
      var pr = C ? M.call(String(y), /^(Symbol\(.*\))_[^)]*$/, "$1") : X.call(y);
      return typeof y == "object" && !C ? ze(pr) : pr;
    }
    if (ei(y)) {
      for (var Be = "<" + A.call(String(y.nodeName)), Et = y.attributes || [], et = 0; et < Et.length; et++)
        Be += " " + Et[et].name + "=" + ne(ae(Et[et].value), "double", L);
      return Be += ">", y.childNodes && y.childNodes.length && (Be += "..."), Be += "</" + A.call(String(y.nodeName)) + ">", Be;
    }
    if (re(y)) {
      if (y.length === 0)
        return "[]";
      var At = Ze(y, ve);
      return qe && !ri(At) ? "[" + _t(At, qe) + "]" : "[ " + S.call(At, ", ") + " ]";
    }
    if (G(y)) {
      var Ot = Ze(y, ve);
      return !("cause" in Error.prototype) && "cause" in y && !te.call(y, "cause") ? "{ [" + String(y) + "] " + S.call(w.call("[cause]: " + ve(y.cause), Ot), ", ") + " }" : Ot.length === 0 ? "[" + String(y) + "]" : "{ [" + String(y) + "] " + S.call(Ot, ", ") + " }";
    }
    if (typeof y == "object" && _e) {
      if (q && typeof y[q] == "function" && W)
        return W(y, { depth: xt - Q });
      if (_e !== "symbol" && typeof y.inspect == "function")
        return y.inspect();
    }
    if (ke(y)) {
      var yr = [];
      return n && n.call(y, function(Ie, tt) {
        yr.push(ve(tt, y, !0) + " => " + ve(Ie, y));
      }), lr("Map", t.call(y), yr, qe);
    }
    if (ct(y)) {
      var dr = [];
      return o && o.call(y, function(Ie) {
        dr.push(ve(Ie, y));
      }), lr("Set", s.call(y), dr, qe);
    }
    if (De(y))
      return kt("WeakMap");
    if (Zn(y))
      return kt("WeakSet");
    if ($e(y))
      return kt("WeakRef");
    if (N(y))
      return ze(ve(Number(y)));
    if (ue(y))
      return ze(ve($.call(y)));
    if (K(y))
      return ze(E.call(y));
    if (H(y))
      return ze(ve(String(y)));
    if (typeof window < "u" && y === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && y === globalThis || typeof fo < "u" && y === fo)
      return "{ [object globalThis] }";
    if (!oe(y) && !Y(y)) {
      var St = Ze(y, ve), hr = U ? U(y) === Object.prototype : y instanceof Object || y.constructor === Object, jt = y instanceof Object ? "" : "null prototype", mr = !hr && B && Object(y) === y && B in y ? O.call(ye(y), 8, -1) : jt ? "Object" : "", ii = hr || typeof y.constructor != "function" ? "" : y.constructor.name ? y.constructor.name + " " : "", Pt = ii + (mr || jt ? "[" + S.call(w.call([], mr || [], jt || []), ": ") + "] " : "");
      return St.length === 0 ? Pt + "{}" : qe ? Pt + "{" + _t(St, qe) + "}" : Pt + "{ " + S.call(St, ", ") + " }";
    }
    return String(y);
  };
  function ne(p, y, V) {
    var Q = V.quoteStyle || y, Z = D[Q];
    return Z + p + Z;
  }
  function ae(p) {
    return M.call(String(p), /"/g, "&quot;");
  }
  function ie(p) {
    return !B || !(typeof p == "object" && (B in p || typeof p[B] < "u"));
  }
  function re(p) {
    return ye(p) === "[object Array]" && ie(p);
  }
  function oe(p) {
    return ye(p) === "[object Date]" && ie(p);
  }
  function Y(p) {
    return ye(p) === "[object RegExp]" && ie(p);
  }
  function G(p) {
    return ye(p) === "[object Error]" && ie(p);
  }
  function H(p) {
    return ye(p) === "[object String]" && ie(p);
  }
  function N(p) {
    return ye(p) === "[object Number]" && ie(p);
  }
  function K(p) {
    return ye(p) === "[object Boolean]" && ie(p);
  }
  function ee(p) {
    if (C)
      return p && typeof p == "object" && p instanceof Symbol;
    if (typeof p == "symbol")
      return !0;
    if (!p || typeof p != "object" || !X)
      return !1;
    try {
      return X.call(p), !0;
    } catch {
    }
    return !1;
  }
  function ue(p) {
    if (!p || typeof p != "object" || !$)
      return !1;
    try {
      return $.call(p), !0;
    } catch {
    }
    return !1;
  }
  var le = Object.prototype.hasOwnProperty || function(p) {
    return p in this;
  };
  function se(p, y) {
    return le.call(p, y);
  }
  function ye(p) {
    return m.call(p);
  }
  function Ae(p) {
    if (p.name)
      return p.name;
    var y = P.call(h.call(p), /^function\s*([\w$]+)/);
    return y ? y[1] : null;
  }
  function ge(p, y) {
    if (p.indexOf)
      return p.indexOf(y);
    for (var V = 0, Q = p.length; V < Q; V++)
      if (p[V] === y)
        return V;
    return -1;
  }
  function ke(p) {
    if (!t || !p || typeof p != "object")
      return !1;
    try {
      t.call(p);
      try {
        s.call(p);
      } catch {
        return !0;
      }
      return p instanceof Map;
    } catch {
    }
    return !1;
  }
  function De(p) {
    if (!l || !p || typeof p != "object")
      return !1;
    try {
      l.call(p, l);
      try {
        f.call(p, f);
      } catch {
        return !0;
      }
      return p instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function $e(p) {
    if (!d || !p || typeof p != "object")
      return !1;
    try {
      return d.call(p), !0;
    } catch {
    }
    return !1;
  }
  function ct(p) {
    if (!s || !p || typeof p != "object")
      return !1;
    try {
      s.call(p);
      try {
        t.call(p);
      } catch {
        return !0;
      }
      return p instanceof Set;
    } catch {
    }
    return !1;
  }
  function Zn(p) {
    if (!f || !p || typeof p != "object")
      return !1;
    try {
      f.call(p, f);
      try {
        l.call(p, l);
      } catch {
        return !0;
      }
      return p instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function ei(p) {
    return !p || typeof p != "object" ? !1 : typeof HTMLElement < "u" && p instanceof HTMLElement ? !0 : typeof p.nodeName == "string" && typeof p.getAttribute == "function";
  }
  function ur(p, y) {
    if (p.length > y.maxStringLength) {
      var V = p.length - y.maxStringLength, Q = "... " + V + " more character" + (V > 1 ? "s" : "");
      return ur(O.call(p, 0, y.maxStringLength), y) + Q;
    }
    var Z = J[y.quoteStyle || "single"];
    Z.lastIndex = 0;
    var L = M.call(M.call(p, Z, "\\$1"), /[\x00-\x1f]/g, ti);
    return ne(L, "single", y);
  }
  function ti(p) {
    var y = p.charCodeAt(0), V = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[y];
    return V ? "\\" + V : "\\x" + (y < 16 ? "0" : "") + v.call(y.toString(16));
  }
  function ze(p) {
    return "Object(" + p + ")";
  }
  function kt(p) {
    return p + " { ? }";
  }
  function lr(p, y, V, Q) {
    var Z = Q ? _t(V, Q) : S.call(V, ", ");
    return p + " (" + y + ") {" + Z + "}";
  }
  function ri(p) {
    for (var y = 0; y < p.length; y++)
      if (ge(p[y], `
`) >= 0)
        return !1;
    return !0;
  }
  function ni(p, y) {
    var V;
    if (p.indent === "	")
      V = "	";
    else if (typeof p.indent == "number" && p.indent > 0)
      V = S.call(Array(p.indent + 1), " ");
    else
      return null;
    return {
      base: V,
      prev: S.call(Array(y + 1), V)
    };
  }
  function _t(p, y) {
    if (p.length === 0)
      return "";
    var V = `
` + y.prev + y.base;
    return V + S.call(p, "," + V) + `
` + y.prev;
  }
  function Ze(p, y) {
    var V = re(p), Q = [];
    if (V) {
      Q.length = p.length;
      for (var Z = 0; Z < p.length; Z++)
        Q[Z] = se(p, Z) ? y(p[Z], p) : "";
    }
    var L = typeof z == "function" ? z(p) : [], _e;
    if (C) {
      _e = {};
      for (var Ee = 0; Ee < L.length; Ee++)
        _e["$" + L[Ee]] = L[Ee];
    }
    for (var pe in p)
      se(p, pe) && (V && String(Number(pe)) === pe && pe < p.length || C && _e["$" + pe] instanceof Symbol || (x.call(/[^\w$]/, pe) ? Q.push(y(pe, p) + ": " + y(p[pe], p)) : Q.push(pe + ": " + y(p[pe], p))));
    if (typeof z == "function")
      for (var xe = 0; xe < L.length; xe++)
        te.call(p, L[xe]) && Q.push("[" + y(L[xe]) + "]: " + y(p[L[xe]], p));
    return Q;
  }
  return si;
}
var oi, mo;
function Fw() {
  if (mo) return oi;
  mo = 1;
  var e = /* @__PURE__ */ Sn(), r = /* @__PURE__ */ tr(), t = function(o, u, l) {
    for (var c = o, f; (f = c.next) != null; c = f)
      if (f.key === u)
        return c.next = f.next, l || (f.next = /** @type {NonNullable<typeof list.next>} */
        o.next, o.next = f), f;
  }, n = function(o, u) {
    if (o) {
      var l = t(o, u);
      return l && l.value;
    }
  }, i = function(o, u, l) {
    var c = t(o, u);
    c ? c.value = l : o.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: o.next,
      value: l
    };
  }, a = function(o, u) {
    return o ? !!t(o, u) : !1;
  }, s = function(o, u) {
    if (o)
      return t(o, u, !0);
  };
  return oi = function() {
    var o, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new r("Side channel does not contain " + e(l));
      },
      delete: function(l) {
        var c = s(o, l);
        return c && o && !o.next && (o = void 0), !!c;
      },
      get: function(l) {
        return n(o, l);
      },
      has: function(l) {
        return a(o, l);
      },
      set: function(l, c) {
        o || (o = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          o,
          l,
          c
        );
      }
    };
    return u;
  }, oi;
}
var vo, go;
function Ac() {
  return go || (go = 1, vo = Object), vo;
}
var bo, wo;
function Tw() {
  return wo || (wo = 1, bo = Error), bo;
}
var ko, _o;
function Nw() {
  return _o || (_o = 1, ko = EvalError), ko;
}
var xo, Eo;
function Cw() {
  return Eo || (Eo = 1, xo = RangeError), xo;
}
var Ao, Oo;
function Lw() {
  return Oo || (Oo = 1, Ao = ReferenceError), Ao;
}
var So, jo;
function Ww() {
  return jo || (jo = 1, So = SyntaxError), So;
}
var Po, Mo;
function zw() {
  return Mo || (Mo = 1, Po = URIError), Po;
}
var Do, $o;
function Bw() {
  return $o || ($o = 1, Do = Math.abs), Do;
}
var qo, Io;
function Gw() {
  return Io || (Io = 1, qo = Math.floor), qo;
}
var Ro, Fo;
function Uw() {
  return Fo || (Fo = 1, Ro = Math.max), Ro;
}
var To, No;
function Xw() {
  return No || (No = 1, To = Math.min), To;
}
var Co, Lo;
function Hw() {
  return Lo || (Lo = 1, Co = Math.pow), Co;
}
var Wo, zo;
function Vw() {
  return zo || (zo = 1, Wo = Math.round), Wo;
}
var Bo, Go;
function Jw() {
  return Go || (Go = 1, Bo = Number.isNaN || function(e) {
    return e !== e;
  }), Bo;
}
var ui, Uo;
function Yw() {
  if (Uo) return ui;
  Uo = 1;
  var e = /* @__PURE__ */ Jw();
  return ui = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, ui;
}
var Xo, Ho;
function Kw() {
  return Ho || (Ho = 1, Xo = Object.getOwnPropertyDescriptor), Xo;
}
var li, Vo;
function Oc() {
  if (Vo) return li;
  Vo = 1;
  var e = /* @__PURE__ */ Kw();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return li = e, li;
}
var ci, Jo;
function Qw() {
  if (Jo) return ci;
  Jo = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ci = e, ci;
}
var Yo, Ko;
function Zw() {
  return Ko || (Ko = 1, Yo = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, r = /* @__PURE__ */ Symbol("test"), t = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(t) !== "[object Symbol]")
      return !1;
    var n = 42;
    e[r] = n;
    for (var i in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var a = Object.getOwnPropertySymbols(e);
    if (a.length !== 1 || a[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, r)
      );
      if (s.value !== n || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Yo;
}
var fi, Qo;
function e0() {
  if (Qo) return fi;
  Qo = 1;
  var e = typeof Symbol < "u" && Symbol, r = Zw();
  return fi = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : r();
  }, fi;
}
var Zo, eu;
function Sc() {
  return eu || (eu = 1, Zo = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Zo;
}
var pi, tu;
function jc() {
  if (tu) return pi;
  tu = 1;
  var e = /* @__PURE__ */ Ac();
  return pi = e.getPrototypeOf || null, pi;
}
var yi, ru;
function t0() {
  if (ru) return yi;
  ru = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max, n = "[object Function]", i = function(o, u) {
    for (var l = [], c = 0; c < o.length; c += 1)
      l[c] = o[c];
    for (var f = 0; f < u.length; f += 1)
      l[f + o.length] = u[f];
    return l;
  }, a = function(o, u) {
    for (var l = [], c = u, f = 0; c < o.length; c += 1, f += 1)
      l[f] = o[c];
    return l;
  }, s = function(o, u) {
    for (var l = "", c = 0; c < o.length; c += 1)
      l += o[c], c + 1 < o.length && (l += u);
    return l;
  };
  return yi = function(o) {
    var u = this;
    if (typeof u != "function" || r.apply(u) !== n)
      throw new TypeError(e + u);
    for (var l = a(arguments, 1), c, f = function() {
      if (this instanceof c) {
        var h = u.apply(
          this,
          i(l, arguments)
        );
        return Object(h) === h ? h : this;
      }
      return u.apply(
        o,
        i(l, arguments)
      );
    }, b = t(0, u.length - l.length), d = [], E = 0; E < b; E++)
      d[E] = "$" + E;
    if (c = Function("binder", "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }")(f), u.prototype) {
      var m = function() {
      };
      m.prototype = u.prototype, c.prototype = new m(), m.prototype = null;
    }
    return c;
  }, yi;
}
var di, nu;
function jn() {
  if (nu) return di;
  nu = 1;
  var e = t0();
  return di = Function.prototype.bind || e, di;
}
var iu, au;
function ps() {
  return au || (au = 1, iu = Function.prototype.call), iu;
}
var su, ou;
function Pc() {
  return ou || (ou = 1, su = Function.prototype.apply), su;
}
var uu, lu;
function r0() {
  return lu || (lu = 1, uu = typeof Reflect < "u" && Reflect && Reflect.apply), uu;
}
var hi, cu;
function n0() {
  if (cu) return hi;
  cu = 1;
  var e = jn(), r = Pc(), t = ps(), n = r0();
  return hi = n || e.call(t, r), hi;
}
var mi, fu;
function Mc() {
  if (fu) return mi;
  fu = 1;
  var e = jn(), r = /* @__PURE__ */ tr(), t = ps(), n = n0();
  return mi = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new r("a function is required");
    return n(e, t, i);
  }, mi;
}
var vi, pu;
function i0() {
  if (pu) return vi;
  pu = 1;
  var e = Mc(), r = /* @__PURE__ */ Oc(), t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!t && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, a = i.getPrototypeOf;
  return vi = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    (function(s) {
      return a(s == null ? s : i(s));
    })
  ) : !1, vi;
}
var gi, yu;
function a0() {
  if (yu) return gi;
  yu = 1;
  var e = Sc(), r = jc(), t = /* @__PURE__ */ i0();
  return gi = e ? function(n) {
    return e(n);
  } : r ? function(n) {
    if (!n || typeof n != "object" && typeof n != "function")
      throw new TypeError("getProto: not an object");
    return r(n);
  } : t ? function(n) {
    return t(n);
  } : null, gi;
}
var bi, du;
function s0() {
  if (du) return bi;
  du = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = jn();
  return bi = t.call(e, r), bi;
}
var wi, hu;
function ys() {
  if (hu) return wi;
  hu = 1;
  var e, r = /* @__PURE__ */ Ac(), t = /* @__PURE__ */ Tw(), n = /* @__PURE__ */ Nw(), i = /* @__PURE__ */ Cw(), a = /* @__PURE__ */ Lw(), s = /* @__PURE__ */ Ww(), o = /* @__PURE__ */ tr(), u = /* @__PURE__ */ zw(), l = /* @__PURE__ */ Bw(), c = /* @__PURE__ */ Gw(), f = /* @__PURE__ */ Uw(), b = /* @__PURE__ */ Xw(), d = /* @__PURE__ */ Hw(), E = /* @__PURE__ */ Vw(), m = /* @__PURE__ */ Yw(), h = Function, P = function(Y) {
    try {
      return h('"use strict"; return (' + Y + ").constructor;")();
    } catch {
    }
  }, O = /* @__PURE__ */ Oc(), M = /* @__PURE__ */ Qw(), v = function() {
    throw new o();
  }, A = O ? (function() {
    try {
      return arguments.callee, v;
    } catch {
      try {
        return O(arguments, "callee").get;
      } catch {
        return v;
      }
    }
  })() : v, x = e0()(), w = a0(), S = jc(), j = Sc(), I = Pc(), $ = ps(), z = {}, X = typeof Uint8Array > "u" || !w ? e : w(Uint8Array), C = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": x && w ? w([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": z,
    "%AsyncGenerator%": z,
    "%AsyncGeneratorFunction%": z,
    "%AsyncIteratorPrototype%": z,
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
    "%Error%": t,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": h,
    "%GeneratorFunction%": z,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": x && w ? w(w([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !x || !w ? e : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": O,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !x || !w ? e : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": x && w ? w(""[Symbol.iterator]()) : e,
    "%Symbol%": x ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": A,
    "%TypedArray%": X,
    "%TypeError%": o,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": $,
    "%Function.prototype.apply%": I,
    "%Object.defineProperty%": M,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": b,
    "%Math.pow%": d,
    "%Math.round%": E,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": j
  };
  if (w)
    try {
      null.error;
    } catch (Y) {
      var B = w(w(Y));
      C["%Error.prototype%"] = B;
    }
  var te = function Y(G) {
    var H;
    if (G === "%AsyncFunction%")
      H = P("async function () {}");
    else if (G === "%GeneratorFunction%")
      H = P("function* () {}");
    else if (G === "%AsyncGeneratorFunction%")
      H = P("async function* () {}");
    else if (G === "%AsyncGenerator%") {
      var N = Y("%AsyncGeneratorFunction%");
      N && (H = N.prototype);
    } else if (G === "%AsyncIteratorPrototype%") {
      var K = Y("%AsyncGenerator%");
      K && w && (H = w(K.prototype));
    }
    return C[G] = H, H;
  }, U = {
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
  }, R = jn(), W = /* @__PURE__ */ s0(), g = R.call($, Array.prototype.concat), q = R.call(I, Array.prototype.splice), D = R.call($, String.prototype.replace), J = R.call($, String.prototype.slice), ne = R.call($, RegExp.prototype.exec), ae = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ie = /\\(\\)?/g, re = function(Y) {
    var G = J(Y, 0, 1), H = J(Y, -1);
    if (G === "%" && H !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (H === "%" && G !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var N = [];
    return D(Y, ae, function(K, ee, ue, le) {
      N[N.length] = ue ? D(le, ie, "$1") : ee || K;
    }), N;
  }, oe = function(Y, G) {
    var H = Y, N;
    if (W(U, H) && (N = U[H], H = "%" + N[0] + "%"), W(C, H)) {
      var K = C[H];
      if (K === z && (K = te(H)), typeof K > "u" && !G)
        throw new o("intrinsic " + Y + " exists, but is not available. Please file an issue!");
      return {
        alias: N,
        name: H,
        value: K
      };
    }
    throw new s("intrinsic " + Y + " does not exist!");
  };
  return wi = function(Y, G) {
    if (typeof Y != "string" || Y.length === 0)
      throw new o("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof G != "boolean")
      throw new o('"allowMissing" argument must be a boolean');
    if (ne(/^%?[^%]*%?$/, Y) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var H = re(Y), N = H.length > 0 ? H[0] : "", K = oe("%" + N + "%", G), ee = K.name, ue = K.value, le = !1, se = K.alias;
    se && (N = se[0], q(H, g([0, 1], se)));
    for (var ye = 1, Ae = !0; ye < H.length; ye += 1) {
      var ge = H[ye], ke = J(ge, 0, 1), De = J(ge, -1);
      if ((ke === '"' || ke === "'" || ke === "`" || De === '"' || De === "'" || De === "`") && ke !== De)
        throw new s("property names with quotes must have matching quotes");
      if ((ge === "constructor" || !Ae) && (le = !0), N += "." + ge, ee = "%" + N + "%", W(C, ee))
        ue = C[ee];
      else if (ue != null) {
        if (!(ge in ue)) {
          if (!G)
            throw new o("base intrinsic for " + Y + " exists, but the property is not available.");
          return;
        }
        if (O && ye + 1 >= H.length) {
          var $e = O(ue, ge);
          Ae = !!$e, Ae && "get" in $e && !("originalValue" in $e.get) ? ue = $e.get : ue = ue[ge];
        } else
          Ae = W(ue, ge), ue = ue[ge];
        Ae && !le && (C[ee] = ue);
      }
    }
    return ue;
  }, wi;
}
var ki, mu;
function Dc() {
  if (mu) return ki;
  mu = 1;
  var e = /* @__PURE__ */ ys(), r = Mc(), t = r([e("%String.prototype.indexOf%")]);
  return ki = function(n, i) {
    var a = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(n, !!i)
    );
    return typeof a == "function" && t(n, ".prototype.") > -1 ? r(
      /** @type {const} */
      [a]
    ) : a;
  }, ki;
}
var _i, vu;
function $c() {
  if (vu) return _i;
  vu = 1;
  var e = /* @__PURE__ */ ys(), r = /* @__PURE__ */ Dc(), t = /* @__PURE__ */ Sn(), n = /* @__PURE__ */ tr(), i = e("%Map%", !0), a = r("Map.prototype.get", !0), s = r("Map.prototype.set", !0), o = r("Map.prototype.has", !0), u = r("Map.prototype.delete", !0), l = r("Map.prototype.size", !0);
  return _i = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var c, f = {
      assert: function(b) {
        if (!f.has(b))
          throw new n("Side channel does not contain " + t(b));
      },
      delete: function(b) {
        if (c) {
          var d = u(c, b);
          return l(c) === 0 && (c = void 0), d;
        }
        return !1;
      },
      get: function(b) {
        if (c)
          return a(c, b);
      },
      has: function(b) {
        return c ? o(c, b) : !1;
      },
      set: function(b, d) {
        c || (c = new i()), s(c, b, d);
      }
    };
    return f;
  }, _i;
}
var xi, gu;
function o0() {
  if (gu) return xi;
  gu = 1;
  var e = /* @__PURE__ */ ys(), r = /* @__PURE__ */ Dc(), t = /* @__PURE__ */ Sn(), n = $c(), i = /* @__PURE__ */ tr(), a = e("%WeakMap%", !0), s = r("WeakMap.prototype.get", !0), o = r("WeakMap.prototype.set", !0), u = r("WeakMap.prototype.has", !0), l = r("WeakMap.prototype.delete", !0);
  return xi = a ? (
    /** @type {Exclude<import('.'), false>} */
    (function() {
      var c, f, b = {
        assert: function(d) {
          if (!b.has(d))
            throw new i("Side channel does not contain " + t(d));
        },
        delete: function(d) {
          if (a && d && (typeof d == "object" || typeof d == "function")) {
            if (c)
              return l(c, d);
          } else if (n && f)
            return f.delete(d);
          return !1;
        },
        get: function(d) {
          return a && d && (typeof d == "object" || typeof d == "function") && c ? s(c, d) : f && f.get(d);
        },
        has: function(d) {
          return a && d && (typeof d == "object" || typeof d == "function") && c ? u(c, d) : !!f && f.has(d);
        },
        set: function(d, E) {
          a && d && (typeof d == "object" || typeof d == "function") ? (c || (c = new a()), o(c, d, E)) : n && (f || (f = n()), f.set(d, E));
        }
      };
      return b;
    })
  ) : n, xi;
}
var Ei, bu;
function qc() {
  if (bu) return Ei;
  bu = 1;
  var e = /* @__PURE__ */ tr(), r = /* @__PURE__ */ Sn(), t = Fw(), n = $c(), i = o0(), a = i || n || t;
  return Ei = function() {
    var s, o = {
      assert: function(u) {
        if (!o.has(u))
          throw new e("Side channel does not contain " + r(u));
      },
      delete: function(u) {
        return !!s && s.delete(u);
      },
      get: function(u) {
        return s && s.get(u);
      },
      has: function(u) {
        return !!s && s.has(u);
      },
      set: function(u, l) {
        s || (s = a()), s.set(u, l);
      }
    };
    return o;
  }, Ei;
}
var Ai, wu;
function ds() {
  if (wu) return Ai;
  wu = 1;
  var e = String.prototype.replace, r = /%20/g, t = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ai = {
    default: t.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, r, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: t.RFC1738,
    RFC3986: t.RFC3986
  }, Ai;
}
var Oi, ku;
function Ic() {
  if (ku) return Oi;
  ku = 1;
  var e = /* @__PURE__ */ ds(), r = qc(), t = Object.prototype.hasOwnProperty, n = Array.isArray, i = r(), a = function(x, w) {
    return i.set(x, w), x;
  }, s = function(x) {
    return i.has(x);
  }, o = function(x) {
    return i.get(x);
  }, u = function(x, w) {
    i.set(x, w);
  }, l = (function() {
    for (var x = [], w = 0; w < 256; ++w)
      x[x.length] = "%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase();
    return x;
  })(), c = function(x) {
    for (; x.length > 1; ) {
      var w = x.pop(), S = w.obj[w.prop];
      if (n(S)) {
        for (var j = [], I = 0; I < S.length; ++I)
          typeof S[I] < "u" && (j[j.length] = S[I]);
        w.obj[w.prop] = j;
      }
    }
  }, f = function(x, w) {
    for (var S = w && w.plainObjects ? { __proto__: null } : {}, j = 0; j < x.length; ++j)
      typeof x[j] < "u" && (S[j] = x[j]);
    return S;
  }, b = function x(w, S, j) {
    if (!S)
      return w;
    if (typeof S != "object" && typeof S != "function") {
      if (n(w)) {
        var I = w.length;
        if (j && typeof j.arrayLimit == "number" && I > j.arrayLimit)
          return a(f(w.concat(S), j), I);
        w[I] = S;
      } else if (w && typeof w == "object")
        if (s(w)) {
          var $ = o(w) + 1;
          w[$] = S, u(w, $);
        } else {
          if (j && j.strictMerge)
            return [w, S];
          (j && (j.plainObjects || j.allowPrototypes) || !t.call(Object.prototype, S)) && (w[S] = !0);
        }
      else
        return [w, S];
      return w;
    }
    if (!w || typeof w != "object") {
      if (s(S)) {
        for (var z = Object.keys(S), X = j && j.plainObjects ? { __proto__: null, 0: w } : { 0: w }, C = 0; C < z.length; C++) {
          var B = parseInt(z[C], 10);
          X[B + 1] = S[z[C]];
        }
        return a(X, o(S) + 1);
      }
      var te = [w].concat(S);
      return j && typeof j.arrayLimit == "number" && te.length > j.arrayLimit ? a(f(te, j), te.length - 1) : te;
    }
    var U = w;
    return n(w) && !n(S) && (U = f(w, j)), n(w) && n(S) ? (S.forEach(function(R, W) {
      if (t.call(w, W)) {
        var g = w[W];
        g && typeof g == "object" && R && typeof R == "object" ? w[W] = x(g, R, j) : w[w.length] = R;
      } else
        w[W] = R;
    }), w) : Object.keys(S).reduce(function(R, W) {
      var g = S[W];
      if (t.call(R, W) ? R[W] = x(R[W], g, j) : R[W] = g, s(S) && !s(R) && a(R, o(S)), s(R)) {
        var q = parseInt(W, 10);
        String(q) === W && q >= 0 && q > o(R) && u(R, q);
      }
      return R;
    }, U);
  }, d = function(x, w) {
    return Object.keys(w).reduce(function(S, j) {
      return S[j] = w[j], S;
    }, x);
  }, E = function(x, w, S) {
    var j = x.replace(/\+/g, " ");
    if (S === "iso-8859-1")
      return j.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(j);
    } catch {
      return j;
    }
  }, m = 1024, h = function(x, w, S, j, I) {
    if (x.length === 0)
      return x;
    var $ = x;
    if (typeof x == "symbol" ? $ = Symbol.prototype.toString.call(x) : typeof x != "string" && ($ = String(x)), S === "iso-8859-1")
      return escape($).replace(/%u[0-9a-f]{4}/gi, function(R) {
        return "%26%23" + parseInt(R.slice(2), 16) + "%3B";
      });
    for (var z = "", X = 0; X < $.length; X += m) {
      for (var C = $.length >= m ? $.slice(X, X + m) : $, B = [], te = 0; te < C.length; ++te) {
        var U = C.charCodeAt(te);
        if (U === 45 || U === 46 || U === 95 || U === 126 || U >= 48 && U <= 57 || U >= 65 && U <= 90 || U >= 97 && U <= 122 || I === e.RFC1738 && (U === 40 || U === 41)) {
          B[B.length] = C.charAt(te);
          continue;
        }
        if (U < 128) {
          B[B.length] = l[U];
          continue;
        }
        if (U < 2048) {
          B[B.length] = l[192 | U >> 6] + l[128 | U & 63];
          continue;
        }
        if (U < 55296 || U >= 57344) {
          B[B.length] = l[224 | U >> 12] + l[128 | U >> 6 & 63] + l[128 | U & 63];
          continue;
        }
        te += 1, U = 65536 + ((U & 1023) << 10 | C.charCodeAt(te) & 1023), B[B.length] = l[240 | U >> 18] + l[128 | U >> 12 & 63] + l[128 | U >> 6 & 63] + l[128 | U & 63];
      }
      z += B.join("");
    }
    return z;
  }, P = function(x) {
    for (var w = [{ obj: { o: x }, prop: "o" }], S = [], j = 0; j < w.length; ++j)
      for (var I = w[j], $ = I.obj[I.prop], z = Object.keys($), X = 0; X < z.length; ++X) {
        var C = z[X], B = $[C];
        typeof B == "object" && B !== null && S.indexOf(B) === -1 && (w[w.length] = { obj: $, prop: C }, S[S.length] = B);
      }
    return c(w), x;
  }, O = function(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
  }, M = function(x) {
    return !x || typeof x != "object" ? !1 : !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
  }, v = function(x, w, S, j) {
    if (s(x)) {
      var I = o(x) + 1;
      return x[I] = w, u(x, I), x;
    }
    var $ = [].concat(x, w);
    return $.length > S ? a(f($, { plainObjects: j }), $.length - 1) : $;
  }, A = function(x, w) {
    if (n(x)) {
      for (var S = [], j = 0; j < x.length; j += 1)
        S[S.length] = w(x[j]);
      return S;
    }
    return w(x);
  };
  return Oi = {
    arrayToObject: f,
    assign: d,
    combine: v,
    compact: P,
    decode: E,
    encode: h,
    isBuffer: M,
    isOverflow: s,
    isRegExp: O,
    markOverflow: a,
    maybeMap: A,
    merge: b
  }, Oi;
}
var Si, _u;
function u0() {
  if (_u) return Si;
  _u = 1;
  var e = qc(), r = /* @__PURE__ */ Ic(), t = /* @__PURE__ */ ds(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(m) {
      return m + "[]";
    },
    comma: "comma",
    indices: function(m, h) {
      return m + "[" + h + "]";
    },
    repeat: function(m) {
      return m;
    }
  }, a = Array.isArray, s = Array.prototype.push, o = function(m, h) {
    s.apply(m, a(h) ? h : [h]);
  }, u = Date.prototype.toISOString, l = t.default, c = {
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
    encoder: r.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: t.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(m) {
      return u.call(m);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(m) {
    return typeof m == "string" || typeof m == "number" || typeof m == "boolean" || typeof m == "symbol" || typeof m == "bigint";
  }, b = {}, d = function m(h, P, O, M, v, A, x, w, S, j, I, $, z, X, C, B, te, U) {
    for (var R = h, W = U, g = 0, q = !1; (W = W.get(b)) !== void 0 && !q; ) {
      var D = W.get(h);
      if (g += 1, typeof D < "u") {
        if (D === g)
          throw new RangeError("Cyclic object value");
        q = !0;
      }
      typeof W.get(b) > "u" && (g = 0);
    }
    if (typeof j == "function" ? R = j(P, R) : R instanceof Date ? R = z(R) : O === "comma" && a(R) && (R = r.maybeMap(R, function(ue) {
      return ue instanceof Date ? z(ue) : ue;
    })), R === null) {
      if (A)
        return S && !B ? S(P, c.encoder, te, "key", X) : P;
      R = "";
    }
    if (f(R) || r.isBuffer(R)) {
      if (S) {
        var J = B ? P : S(P, c.encoder, te, "key", X);
        return [C(J) + "=" + C(S(R, c.encoder, te, "value", X))];
      }
      return [C(P) + "=" + C(String(R))];
    }
    var ne = [];
    if (typeof R > "u")
      return ne;
    var ae;
    if (O === "comma" && a(R))
      B && S && (R = r.maybeMap(R, S)), ae = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (a(j))
      ae = j;
    else {
      var ie = Object.keys(R);
      ae = I ? ie.sort(I) : ie;
    }
    var re = w ? String(P).replace(/\./g, "%2E") : String(P), oe = M && a(R) && R.length === 1 ? re + "[]" : re;
    if (v && a(R) && R.length === 0)
      return oe + "[]";
    for (var Y = 0; Y < ae.length; ++Y) {
      var G = ae[Y], H = typeof G == "object" && G && typeof G.value < "u" ? G.value : R[G];
      if (!(x && H === null)) {
        var N = $ && w ? String(G).replace(/\./g, "%2E") : String(G), K = a(R) ? typeof O == "function" ? O(oe, N) : oe : oe + ($ ? "." + N : "[" + N + "]");
        U.set(h, g);
        var ee = e();
        ee.set(b, U), o(ne, m(
          H,
          K,
          O,
          M,
          v,
          A,
          x,
          w,
          O === "comma" && B && a(R) ? null : S,
          j,
          I,
          $,
          z,
          X,
          C,
          B,
          te,
          ee
        ));
      }
    }
    return ne;
  }, E = function(m) {
    if (!m)
      return c;
    if (typeof m.allowEmptyArrays < "u" && typeof m.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof m.encodeDotInKeys < "u" && typeof m.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (m.encoder !== null && typeof m.encoder < "u" && typeof m.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var h = m.charset || c.charset;
    if (typeof m.charset < "u" && m.charset !== "utf-8" && m.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var P = t.default;
    if (typeof m.format < "u") {
      if (!n.call(t.formatters, m.format))
        throw new TypeError("Unknown format option provided.");
      P = m.format;
    }
    var O = t.formatters[P], M = c.filter;
    (typeof m.filter == "function" || a(m.filter)) && (M = m.filter);
    var v;
    if (m.arrayFormat in i ? v = m.arrayFormat : "indices" in m ? v = m.indices ? "indices" : "repeat" : v = c.arrayFormat, "commaRoundTrip" in m && typeof m.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var A = typeof m.allowDots > "u" ? m.encodeDotInKeys === !0 ? !0 : c.allowDots : !!m.allowDots;
    return {
      addQueryPrefix: typeof m.addQueryPrefix == "boolean" ? m.addQueryPrefix : c.addQueryPrefix,
      allowDots: A,
      allowEmptyArrays: typeof m.allowEmptyArrays == "boolean" ? !!m.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: v,
      charset: h,
      charsetSentinel: typeof m.charsetSentinel == "boolean" ? m.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!m.commaRoundTrip,
      delimiter: typeof m.delimiter > "u" ? c.delimiter : m.delimiter,
      encode: typeof m.encode == "boolean" ? m.encode : c.encode,
      encodeDotInKeys: typeof m.encodeDotInKeys == "boolean" ? m.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof m.encoder == "function" ? m.encoder : c.encoder,
      encodeValuesOnly: typeof m.encodeValuesOnly == "boolean" ? m.encodeValuesOnly : c.encodeValuesOnly,
      filter: M,
      format: P,
      formatter: O,
      serializeDate: typeof m.serializeDate == "function" ? m.serializeDate : c.serializeDate,
      skipNulls: typeof m.skipNulls == "boolean" ? m.skipNulls : c.skipNulls,
      sort: typeof m.sort == "function" ? m.sort : null,
      strictNullHandling: typeof m.strictNullHandling == "boolean" ? m.strictNullHandling : c.strictNullHandling
    };
  };
  return Si = function(m, h) {
    var P = m, O = E(h), M, v;
    typeof O.filter == "function" ? (v = O.filter, P = v("", P)) : a(O.filter) && (v = O.filter, M = v);
    var A = [];
    if (typeof P != "object" || P === null)
      return "";
    var x = i[O.arrayFormat], w = x === "comma" && O.commaRoundTrip;
    M || (M = Object.keys(P)), O.sort && M.sort(O.sort);
    for (var S = e(), j = 0; j < M.length; ++j) {
      var I = M[j], $ = P[I];
      O.skipNulls && $ === null || o(A, d(
        $,
        I,
        x,
        w,
        O.allowEmptyArrays,
        O.strictNullHandling,
        O.skipNulls,
        O.encodeDotInKeys,
        O.encode ? O.encoder : null,
        O.filter,
        O.sort,
        O.allowDots,
        O.serializeDate,
        O.format,
        O.formatter,
        O.encodeValuesOnly,
        O.charset,
        S
      ));
    }
    var z = A.join(O.delimiter), X = O.addQueryPrefix === !0 ? "?" : "";
    return O.charsetSentinel && (O.charset === "iso-8859-1" ? X += "utf8=%26%2310003%3B&" : X += "utf8=%E2%9C%93&"), z.length > 0 ? X + z : "";
  }, Si;
}
var ji, xu;
function l0() {
  if (xu) return ji;
  xu = 1;
  var e = /* @__PURE__ */ Ic(), r = Object.prototype.hasOwnProperty, t = Array.isArray, n = {
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
  }, i = function(d) {
    return d.replace(/&#(\d+);/g, function(E, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, a = function(d, E, m) {
    if (d && typeof d == "string" && E.comma && d.indexOf(",") > -1)
      return d.split(",");
    if (E.throwOnLimitExceeded && m >= E.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + E.arrayLimit + " element" + (E.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return d;
  }, s = "utf8=%26%2310003%3B", o = "utf8=%E2%9C%93", u = function(d, E) {
    var m = { __proto__: null }, h = E.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
    h = h.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var P = E.parameterLimit === 1 / 0 ? void 0 : E.parameterLimit, O = h.split(
      E.delimiter,
      E.throwOnLimitExceeded && typeof P < "u" ? P + 1 : P
    );
    if (E.throwOnLimitExceeded && typeof P < "u" && O.length > P)
      throw new RangeError("Parameter limit exceeded. Only " + P + " parameter" + (P === 1 ? "" : "s") + " allowed.");
    var M = -1, v, A = E.charset;
    if (E.charsetSentinel)
      for (v = 0; v < O.length; ++v)
        O[v].indexOf("utf8=") === 0 && (O[v] === o ? A = "utf-8" : O[v] === s && (A = "iso-8859-1"), M = v, v = O.length);
    for (v = 0; v < O.length; ++v)
      if (v !== M) {
        var x = O[v], w = x.indexOf("]="), S = w === -1 ? x.indexOf("=") : w + 1, j, I;
        if (S === -1 ? (j = E.decoder(x, n.decoder, A, "key"), I = E.strictNullHandling ? null : "") : (j = E.decoder(x.slice(0, S), n.decoder, A, "key"), j !== null && (I = e.maybeMap(
          a(
            x.slice(S + 1),
            E,
            t(m[j]) ? m[j].length : 0
          ),
          function(z) {
            return E.decoder(z, n.decoder, A, "value");
          }
        ))), I && E.interpretNumericEntities && A === "iso-8859-1" && (I = i(String(I))), x.indexOf("[]=") > -1 && (I = t(I) ? [I] : I), E.comma && t(I) && I.length > E.arrayLimit) {
          if (E.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + E.arrayLimit + " element" + (E.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          I = e.combine([], I, E.arrayLimit, E.plainObjects);
        }
        if (j !== null) {
          var $ = r.call(m, j);
          $ && (E.duplicates === "combine" || x.indexOf("[]=") > -1) ? m[j] = e.combine(
            m[j],
            I,
            E.arrayLimit,
            E.plainObjects
          ) : (!$ || E.duplicates === "last") && (m[j] = I);
        }
      }
    return m;
  }, l = function(d, E, m, h) {
    var P = 0;
    if (d.length > 0 && d[d.length - 1] === "[]") {
      var O = d.slice(0, -1).join("");
      P = Array.isArray(E) && E[O] ? E[O].length : 0;
    }
    for (var M = h ? E : a(E, m, P), v = d.length - 1; v >= 0; --v) {
      var A, x = d[v];
      if (x === "[]" && m.parseArrays)
        e.isOverflow(M) ? A = M : A = m.allowEmptyArrays && (M === "" || m.strictNullHandling && M === null) ? [] : e.combine(
          [],
          M,
          m.arrayLimit,
          m.plainObjects
        );
      else {
        A = m.plainObjects ? { __proto__: null } : {};
        var w = x.charAt(0) === "[" && x.charAt(x.length - 1) === "]" ? x.slice(1, -1) : x, S = m.decodeDotInKeys ? w.replace(/%2E/g, ".") : w, j = parseInt(S, 10), I = !isNaN(j) && x !== S && String(j) === S && j >= 0 && m.parseArrays;
        if (!m.parseArrays && S === "")
          A = { 0: M };
        else if (I && j < m.arrayLimit)
          A = [], A[j] = M;
        else {
          if (I && m.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + m.arrayLimit + " element" + (m.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          I ? (A[j] = M, e.markOverflow(A, j)) : S !== "__proto__" && (A[S] = M);
        }
      }
      M = A;
    }
    return M;
  }, c = function(d, E) {
    var m = E.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d;
    if (E.depth <= 0)
      return !E.plainObjects && r.call(Object.prototype, m) && !E.allowPrototypes ? void 0 : [m];
    var h = /(\[[^[\]]*])/, P = /(\[[^[\]]*])/g, O = h.exec(m), M = O ? m.slice(0, O.index) : m, v = [];
    if (M) {
      if (!E.plainObjects && r.call(Object.prototype, M) && !E.allowPrototypes)
        return;
      v[v.length] = M;
    }
    for (var A = 0; (O = P.exec(m)) !== null && A < E.depth; ) {
      A += 1;
      var x = O[1].slice(1, -1);
      if (!E.plainObjects && r.call(Object.prototype, x) && !E.allowPrototypes)
        return;
      v[v.length] = O[1];
    }
    if (O) {
      if (E.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + E.depth + " and strictDepth is true");
      v[v.length] = "[" + m.slice(O.index) + "]";
    }
    return v;
  }, f = function(d, E, m, h) {
    if (d) {
      var P = c(d, m);
      if (P)
        return l(P, E, m, h);
    }
  }, b = function(d) {
    if (!d)
      return n;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof d.throwOnLimitExceeded < "u" && typeof d.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var E = typeof d.charset > "u" ? n.charset : d.charset, m = typeof d.duplicates > "u" ? n.duplicates : d.duplicates;
    if (m !== "combine" && m !== "first" && m !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var h = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : n.allowDots : !!d.allowDots;
    return {
      allowDots: h,
      allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : n.allowSparse,
      arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : n.arrayLimit,
      charset: E,
      charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : n.charsetSentinel,
      comma: typeof d.comma == "boolean" ? d.comma : n.comma,
      decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof d.decoder == "function" ? d.decoder : n.decoder,
      delimiter: typeof d.delimiter == "string" || e.isRegExp(d.delimiter) ? d.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : n.depth,
      duplicates: m,
      ignoreQueryPrefix: d.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : n.parameterLimit,
      parseArrays: d.parseArrays !== !1,
      plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : n.plainObjects,
      strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : n.strictDepth,
      strictMerge: typeof d.strictMerge == "boolean" ? !!d.strictMerge : n.strictMerge,
      strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof d.throwOnLimitExceeded == "boolean" ? d.throwOnLimitExceeded : !1
    };
  };
  return ji = function(d, E) {
    var m = b(E);
    if (d === "" || d === null || typeof d > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var h = typeof d == "string" ? u(d, m) : d, P = m.plainObjects ? { __proto__: null } : {}, O = Object.keys(h), M = 0; M < O.length; ++M) {
      var v = O[M], A = f(v, h[v], m, typeof d == "string");
      P = e.merge(P, A, m);
    }
    return m.allowSparse === !0 ? P : e.compact(P);
  }, ji;
}
var Pi, Eu;
function c0() {
  if (Eu) return Pi;
  Eu = 1;
  var e = /* @__PURE__ */ u0(), r = /* @__PURE__ */ l0(), t = /* @__PURE__ */ ds();
  return Pi = {
    formats: t,
    parse: r,
    stringify: e
  }, Pi;
}
var f0 = /* @__PURE__ */ c0();
const Rc = /* @__PURE__ */ Dw(f0);
async function Cr(e) {
  try {
    return [null, await e()];
  } catch (r) {
    return [r, null];
  }
}
Cr.sync = function(e) {
  try {
    return [null, e()];
  } catch (r) {
    return [r, null];
  }
};
class rr extends Error {
  status = 500;
  constructor(r, t = 500) {
    super(r), this.name = "BaseException", this.status = t;
  }
  static fromError(r) {
    return new rr(r.message, 500);
  }
}
class p0 {
  entries = /* @__PURE__ */ new Map();
  loadFromRecord(r) {
    Object.entries(r).forEach(([t, n]) => {
      this.set(t, n);
    });
  }
  toRecord() {
    const r = {};
    for (const [t, n] of this.entries.entries())
      r[String(t)] = n;
    return r;
  }
  getKey(r) {
    let t = r;
    (typeof r == "function" || typeof r == "object") && (t = r.name);
    const n = typeof r != "string" && typeof r != "symbol";
    return n && !r?.__container_entry_key && console.warn(`Warning: The constructor ${r?.name || r} does not have a unique identifier. Consider adding a static property __container_entry_key to avoid potential conflicts.`), n && r?.__container_entry_key && (t = r.__container_entry_key), t;
  }
  set(r, t) {
    const n = this.getKey(r);
    return this.entries.set(n, t), this;
  }
  has(r) {
    const t = this.getKey(r);
    return this.entries.has(t);
  }
  get(r) {
    const t = this.getKey(r);
    if (!this.entries.has(t))
      throw new rr(`Entry with key "${String(t)}" not found in container.`);
    return this.entries.get(t);
  }
  unset(r) {
    const t = this.getKey(r);
    this.entries.delete(t);
  }
  singleton(r) {
    const t = r.name, n = this.entries.get(t);
    if (n)
      return n;
    const i = new r();
    return this.entries.set(t, i), i;
  }
  load(r) {
    Object.entries(r).forEach(([t, n]) => {
      this.set(t, n);
    });
  }
  proxy(r) {
    return new Proxy({}, {
      get: (t, n) => {
        const i = this.get(r), a = i[n];
        return typeof a == "function" ? a.bind(i) : i[n];
      },
      set: (t, n, i) => {
        const a = this.get(r);
        return a[n] = i, !0;
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
const Me = globalThis.clientContainer || new p0();
globalThis.clientContainer = Me;
class y0 {
  static __container_entry_key = "ToastService";
  success(r, t) {
    console.log("Success:", r, t);
  }
  error(r, t) {
    console.error("Error:", r, t);
  }
}
const Au = Me.proxy(y0);
class d0 {
  static __container_entry_key = "FetchService";
  async handleError(r) {
    if (r.headers.get("Content-Type")?.includes("json")) {
      const t = await r.json().catch(() => ({ message: $t("Internal Server Error") }));
      return t.message && Au.error(t.message), t;
    }
    return Au.error($t("Internal Server Error")), {
      message: $t("Internal Server Error")
    };
  }
  buildUrl(r, t) {
    if (!t)
      return r;
    const n = Rc.stringify(t, { arrayFormat: "brackets" });
    return r + "?" + n;
  }
  buildRequestInit(r) {
    const t = { ...r };
    return r.data && (t.body = JSON.stringify(r.data), t.headers = {
      ...t.headers,
      "Content-Type": "application/json"
    }), t;
  }
  async parseResponse(r) {
    return r.headers.get("Content-Type")?.includes("json") ? r.json() : r.text();
  }
  async fetch(r, t = {}) {
    throw new Error("Method not implemented");
  }
  async try(r, t = {}) {
    return Cr(() => this.fetch(r, t));
  }
  async get(r, t = {}) {
    return this.fetch(r, {
      ...t,
      method: "GET"
    });
  }
  async post(r, t = {}) {
    return this.fetch(r, {
      ...t,
      method: "POST"
    });
  }
  async put(r, t = {}) {
    return this.fetch(r, {
      ...t,
      method: "PUT"
    });
  }
  async delete(r, t = {}) {
    return this.fetch(r, {
      ...t,
      method: "DELETE"
    });
  }
}
const h0 = Me.proxy(d0);
function Ve(...e) {
  return e.reduce((r, t) => t(r), class {
  });
}
function Fc(e, ...r) {
  return r.reduce((t, n) => n(t), e);
}
function m0(e) {
  return function(r) {
    class t extends r {
      constructor(...i) {
        super(...i);
        const a = new e(...i);
        Object.assign(this, a);
      }
    }
    for (const n of Reflect.ownKeys(e.prototype))
      n !== "constructor" && Object.defineProperty(
        t.prototype,
        n,
        Object.getOwnPropertyDescriptor(e.prototype, n)
      );
    return t;
  };
}
function Je(e) {
  return class extends e {
    static from(r) {
      const t = typeof this == "function" ? this : e, n = new t();
      let i = { ...r };
      return typeof t?.parse == "function" && (i = t.parse(r)), typeof this?.parse == "function" && (i = this.parse(r)), Object.assign(n, i), n;
    }
    merge(r) {
      return Object.assign(this, r), this;
    }
  };
}
function Lr(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
function Wr(e) {
  return class extends e {
    deleted_at = null;
  };
}
class FD extends Ve(Je, Lr, Wr) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    const [r, t] = this.name.split(" ");
    if (!t)
      return r[0].toUpperCase();
    const n = r[0].toUpperCase(), i = t[0].toUpperCase();
    return n + i;
  }
}
class v0 {
  static __container_entry_key = "AuthService";
  user;
  disabled = !1;
  constructor(r = {}) {
    this.user = r.user || null, this.disabled = r.disabled || !1;
  }
  async logout(r) {
    const [t] = await h0.try("/auth/logout", { method: "POST" });
    t || (window.location.href = r?.redirect || "/");
  }
}
var Tc = typeof global == "object" && global && global.Object === Object && global, g0 = typeof self == "object" && self && self.Object === Object && self, Ye = Tc || g0 || Function("return this")(), dt = Ye.Symbol, Nc = Object.prototype, b0 = Nc.hasOwnProperty, w0 = Nc.toString, gr = dt ? dt.toStringTag : void 0;
function k0(e) {
  var r = b0.call(e, gr), t = e[gr];
  try {
    e[gr] = void 0;
    var n = !0;
  } catch {
  }
  var i = w0.call(e);
  return n && (r ? e[gr] = t : delete e[gr]), i;
}
var _0 = Object.prototype, x0 = _0.toString;
function E0(e) {
  return x0.call(e);
}
var A0 = "[object Null]", O0 = "[object Undefined]", Ou = dt ? dt.toStringTag : void 0;
function wt(e) {
  return e == null ? e === void 0 ? O0 : A0 : Ou && Ou in Object(e) ? k0(e) : E0(e);
}
function nt(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var S0 = "[object AsyncFunction]", j0 = "[object Function]", P0 = "[object GeneratorFunction]", M0 = "[object Proxy]";
function Cc(e) {
  if (!nt(e))
    return !1;
  var r = wt(e);
  return r == j0 || r == P0 || r == S0 || r == M0;
}
var Mi = Ye["__core-js_shared__"], Su = (function() {
  var e = /[^.]+$/.exec(Mi && Mi.keys && Mi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function D0(e) {
  return !!Su && Su in e;
}
var $0 = Function.prototype, q0 = $0.toString;
function Nt(e) {
  if (e != null) {
    try {
      return q0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var I0 = /[\\^$.*+?()[\]{}|]/g, R0 = /^\[object .+?Constructor\]$/, F0 = Function.prototype, T0 = Object.prototype, N0 = F0.toString, C0 = T0.hasOwnProperty, L0 = RegExp(
  "^" + N0.call(C0).replace(I0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function W0(e) {
  if (!nt(e) || D0(e))
    return !1;
  var r = Cc(e) ? L0 : R0;
  return r.test(Nt(e));
}
function z0(e, r) {
  return e?.[r];
}
function Ct(e, r) {
  var t = z0(e, r);
  return W0(t) ? t : void 0;
}
var un = (function() {
  try {
    var e = Ct(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function Lc(e, r, t) {
  r == "__proto__" && un ? un(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
function zr(e, r) {
  return e === r || e !== e && r !== r;
}
var B0 = Object.prototype, G0 = B0.hasOwnProperty;
function Wc(e, r, t) {
  var n = e[r];
  (!(G0.call(e, r) && zr(n, t)) || t === void 0 && !(r in e)) && Lc(e, r, t);
}
var We = Array.isArray;
function ht(e) {
  return e != null && typeof e == "object";
}
var U0 = "[object Symbol]";
function Yt(e) {
  return typeof e == "symbol" || ht(e) && wt(e) == U0;
}
var X0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, H0 = /^\w*$/;
function hs(e, r) {
  if (We(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Yt(e) ? !0 : H0.test(e) || !X0.test(e) || r != null && e in Object(r);
}
var $r = Ct(Object, "create");
function V0() {
  this.__data__ = $r ? $r(null) : {}, this.size = 0;
}
function J0(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Y0 = "__lodash_hash_undefined__", K0 = Object.prototype, Q0 = K0.hasOwnProperty;
function Z0(e) {
  var r = this.__data__;
  if ($r) {
    var t = r[e];
    return t === Y0 ? void 0 : t;
  }
  return Q0.call(r, e) ? r[e] : void 0;
}
var ek = Object.prototype, tk = ek.hasOwnProperty;
function rk(e) {
  var r = this.__data__;
  return $r ? r[e] !== void 0 : tk.call(r, e);
}
var nk = "__lodash_hash_undefined__";
function ik(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = $r && r === void 0 ? nk : r, this;
}
function Rt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = V0;
Rt.prototype.delete = J0;
Rt.prototype.get = Z0;
Rt.prototype.has = rk;
Rt.prototype.set = ik;
function ak() {
  this.__data__ = [], this.size = 0;
}
function Pn(e, r) {
  for (var t = e.length; t--; )
    if (zr(e[t][0], r))
      return t;
  return -1;
}
var sk = Array.prototype, ok = sk.splice;
function uk(e) {
  var r = this.__data__, t = Pn(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : ok.call(r, t, 1), --this.size, !0;
}
function lk(e) {
  var r = this.__data__, t = Pn(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function ck(e) {
  return Pn(this.__data__, e) > -1;
}
function fk(e, r) {
  var t = this.__data__, n = Pn(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function it(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
it.prototype.clear = ak;
it.prototype.delete = uk;
it.prototype.get = lk;
it.prototype.has = ck;
it.prototype.set = fk;
var qr = Ct(Ye, "Map");
function pk() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (qr || it)(),
    string: new Rt()
  };
}
function yk(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Mn(e, r) {
  var t = e.__data__;
  return yk(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function dk(e) {
  var r = Mn(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function hk(e) {
  return Mn(this, e).get(e);
}
function mk(e) {
  return Mn(this, e).has(e);
}
function vk(e, r) {
  var t = Mn(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function at(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
at.prototype.clear = pk;
at.prototype.delete = dk;
at.prototype.get = hk;
at.prototype.has = mk;
at.prototype.set = vk;
var gk = "Expected a function";
function ms(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(gk);
  var t = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], a = t.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return t.cache = a.set(i, s) || a, s;
  };
  return t.cache = new (ms.Cache || at)(), t;
}
ms.Cache = at;
var bk = 500;
function wk(e) {
  var r = ms(e, function(n) {
    return t.size === bk && t.clear(), n;
  }), t = r.cache;
  return r;
}
var kk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _k = /\\(\\)?/g, xk = wk(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(kk, function(t, n, i, a) {
    r.push(i ? a.replace(_k, "$1") : n || t);
  }), r;
});
function Or(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; )
    i[t] = r(e[t], t, e);
  return i;
}
var ju = dt ? dt.prototype : void 0, Pu = ju ? ju.toString : void 0;
function zc(e) {
  if (typeof e == "string")
    return e;
  if (We(e))
    return Or(e, zc) + "";
  if (Yt(e))
    return Pu ? Pu.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function vs(e) {
  return e == null ? "" : zc(e);
}
function Dn(e, r) {
  return We(e) ? e : hs(e, r) ? [e] : xk(vs(e));
}
var Ek = 9007199254740991, Ak = /^(?:0|[1-9]\d*)$/;
function $n(e, r) {
  var t = typeof e;
  return r = r ?? Ek, !!r && (t == "number" || t != "symbol" && Ak.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function Ft(e) {
  if (typeof e == "string" || Yt(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function Ok(e, r, t, n) {
  if (!nt(e))
    return e;
  r = Dn(r, e);
  for (var i = -1, a = r.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var u = Ft(r[i]), l = t;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != s) {
      var c = o[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : $n(r[i + 1]) ? [] : {});
    }
    Wc(o, u, l), o = o[u];
  }
  return e;
}
function gs(e, r, t) {
  return e == null ? e : Ok(e, r, t);
}
function Ra(e, r = "", t = {}) {
  for (const [n, i] of Object.entries(e)) {
    const a = /^\d+$/.test(n) ? `${r}[${n}]` : r ? `${r}.${n}` : n;
    if (i && typeof i == "object") {
      Ra(i, a, t);
      continue;
    }
    t[a] = i;
  }
  return t;
}
function qn(e, r) {
  r = Dn(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[Ft(r[t++])];
  return t && t == n ? e : void 0;
}
function bs(e, r, t) {
  var n = e == null ? void 0 : qn(e, r);
  return n === void 0 ? t : n;
}
var Sk = Object.prototype, jk = Sk.hasOwnProperty;
function Pk(e, r) {
  return e != null && jk.call(e, r);
}
var Mk = "[object Arguments]";
function Mu(e) {
  return ht(e) && wt(e) == Mk;
}
var Bc = Object.prototype, Dk = Bc.hasOwnProperty, $k = Bc.propertyIsEnumerable, Gc = Mu(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Mu : function(e) {
  return ht(e) && Dk.call(e, "callee") && !$k.call(e, "callee");
}, qk = 9007199254740991;
function ws(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qk;
}
function Uc(e, r, t) {
  r = Dn(r, e);
  for (var n = -1, i = r.length, a = !1; ++n < i; ) {
    var s = Ft(r[n]);
    if (!(a = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && ws(i) && $n(s, i) && (We(e) || Gc(e)));
}
function Ik(e, r) {
  return e != null && Uc(e, r, Pk);
}
function Rk(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
function Fk(e, r, t) {
  var n = -1, i = e.length;
  r < 0 && (r = -r > i ? 0 : i + r), t = t > i ? i : t, t < 0 && (t += i), i = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + r];
  return a;
}
function Tk(e, r) {
  return r.length < 2 ? e : qn(e, Fk(r, 0, -1));
}
var Nk = Object.prototype, Ck = Nk.hasOwnProperty;
function Lk(e, r) {
  r = Dn(r, e);
  var t = -1, n = r.length;
  if (!n)
    return !0;
  for (; ++t < n; ) {
    var i = Ft(r[t]);
    if (i === "__proto__" && !Ck.call(e, "__proto__") || (i === "constructor" || i === "prototype") && t < n - 1)
      return !1;
  }
  var a = Tk(e, r);
  return a == null || delete a[Ft(Rk(r))];
}
function Wk(e, r) {
  return e == null ? !0 : Lk(e, r);
}
function zk(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
function Bk(e, r, t, n) {
  var i = !t;
  t || (t = {});
  for (var a = -1, s = r.length; ++a < s; ) {
    var o = r[a], u = n ? n(t[o], e[o], o, t, e) : void 0;
    u === void 0 && (u = e[o]), i ? Lc(t, o, u) : Wc(t, o, u);
  }
  return t;
}
function In(e) {
  return e;
}
function Xc(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var Du = Math.max;
function Gk(e, r, t) {
  return r = Du(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, i = -1, a = Du(n.length - r, 0), s = Array(a); ++i < a; )
      s[i] = n[r + i];
    i = -1;
    for (var o = Array(r + 1); ++i < r; )
      o[i] = n[i];
    return o[r] = t(s), Xc(e, this, o);
  };
}
function Uk(e) {
  return function() {
    return e;
  };
}
var Xk = un ? function(e, r) {
  return un(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Uk(r),
    writable: !0
  });
} : In, Hk = 800, Vk = 16, Jk = Date.now;
function Yk(e) {
  var r = 0, t = 0;
  return function() {
    var n = Jk(), i = Vk - (n - t);
    if (t = n, i > 0) {
      if (++r >= Hk)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var Kk = Yk(Xk);
function Hc(e, r) {
  return Kk(Gk(e, r, In), e + "");
}
function Rn(e) {
  return e != null && ws(e.length) && !Cc(e);
}
function Qk(e, r, t) {
  if (!nt(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? Rn(t) && $n(r, t.length) : n == "string" && r in t) ? zr(t[r], e) : !1;
}
function Zk(e) {
  return Hc(function(r, t) {
    var n = -1, i = t.length, a = i > 1 ? t[i - 1] : void 0, s = i > 2 ? t[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && Qk(t[0], t[1], s) && (a = i < 3 ? void 0 : a, i = 1), r = Object(r); ++n < i; ) {
      var o = t[n];
      o && e(r, o, n, a);
    }
    return r;
  });
}
function e_(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
function t_() {
  return !1;
}
var Vc = typeof exports == "object" && exports && !exports.nodeType && exports, $u = Vc && typeof module == "object" && module && !module.nodeType && module, r_ = $u && $u.exports === Vc, qu = r_ ? Ye.Buffer : void 0, n_ = qu ? qu.isBuffer : void 0, Fa = n_ || t_, i_ = "[object Arguments]", a_ = "[object Array]", s_ = "[object Boolean]", o_ = "[object Date]", u_ = "[object Error]", l_ = "[object Function]", c_ = "[object Map]", f_ = "[object Number]", p_ = "[object Object]", y_ = "[object RegExp]", d_ = "[object Set]", h_ = "[object String]", m_ = "[object WeakMap]", v_ = "[object ArrayBuffer]", g_ = "[object DataView]", b_ = "[object Float32Array]", w_ = "[object Float64Array]", k_ = "[object Int8Array]", __ = "[object Int16Array]", x_ = "[object Int32Array]", E_ = "[object Uint8Array]", A_ = "[object Uint8ClampedArray]", O_ = "[object Uint16Array]", S_ = "[object Uint32Array]", de = {};
de[b_] = de[w_] = de[k_] = de[__] = de[x_] = de[E_] = de[A_] = de[O_] = de[S_] = !0;
de[i_] = de[a_] = de[v_] = de[s_] = de[g_] = de[o_] = de[u_] = de[l_] = de[c_] = de[f_] = de[p_] = de[y_] = de[d_] = de[h_] = de[m_] = !1;
function j_(e) {
  return ht(e) && ws(e.length) && !!de[wt(e)];
}
function Jc(e) {
  return function(r) {
    return e(r);
  };
}
var Yc = typeof exports == "object" && exports && !exports.nodeType && exports, Sr = Yc && typeof module == "object" && module && !module.nodeType && module, P_ = Sr && Sr.exports === Yc, Di = P_ && Tc.process, Iu = (function() {
  try {
    var e = Sr && Sr.require && Sr.require("util").types;
    return e || Di && Di.binding && Di.binding("util");
  } catch {
  }
})(), Ru = Iu && Iu.isTypedArray, Kc = Ru ? Jc(Ru) : j_, M_ = Object.prototype, D_ = M_.hasOwnProperty;
function $_(e, r) {
  var t = We(e), n = !t && Gc(e), i = !t && !n && Fa(e), a = !t && !n && !i && Kc(e), s = t || n || i || a, o = s ? e_(e.length, String) : [], u = o.length;
  for (var l in e)
    D_.call(e, l) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    $n(l, u))) && o.push(l);
  return o;
}
var q_ = Object.prototype;
function I_(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || q_;
  return e === t;
}
function Qc(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var R_ = Qc(Object.keys, Object), F_ = Object.prototype, T_ = F_.hasOwnProperty;
function N_(e) {
  if (!I_(e))
    return R_(e);
  var r = [];
  for (var t in Object(e))
    T_.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function Br(e) {
  return Rn(e) ? $_(e) : N_(e);
}
var Fu = Zk(function(e, r, t, n) {
  Bk(r, Br(r), e, n);
}), C_ = Qc(Object.getPrototypeOf, Object), L_ = "[object Object]", W_ = Function.prototype, z_ = Object.prototype, Zc = W_.toString, B_ = z_.hasOwnProperty, G_ = Zc.call(Object);
function U_(e) {
  if (!ht(e) || wt(e) != L_)
    return !1;
  var r = C_(e);
  if (r === null)
    return !0;
  var t = B_.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Zc.call(t) == G_;
}
var X_ = "[object DOMException]", H_ = "[object Error]";
function ef(e) {
  if (!ht(e))
    return !1;
  var r = wt(e);
  return r == H_ || r == X_ || typeof e.message == "string" && typeof e.name == "string" && !U_(e);
}
var V_ = Hc(function(e, r) {
  try {
    return Xc(e, void 0, r);
  } catch (t) {
    return ef(t) ? t : new Error(t);
  }
});
function J_(e, r) {
  return Or(r, function(t) {
    return e[t];
  });
}
var tf = Object.prototype, Y_ = tf.hasOwnProperty;
function Tu(e, r, t, n) {
  return e === void 0 || zr(e, tf[t]) && !Y_.call(n, t) ? r : e;
}
var K_ = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function Q_(e) {
  return "\\" + K_[e];
}
var rf = /<%=([\s\S]+?)%>/g;
function Z_(e) {
  return function(r) {
    return e?.[r];
  };
}
var e1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, t1 = Z_(e1), nf = /[&<>"']/g, r1 = RegExp(nf.source);
function n1(e) {
  return e = vs(e), e && r1.test(e) ? e.replace(nf, t1) : e;
}
var i1 = /<%-([\s\S]+?)%>/g, a1 = /<%([\s\S]+?)%>/g, Nu = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: i1,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: a1,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: rf,
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
    _: { escape: n1 }
  }
}, s1 = "Invalid `variable` option passed into `_.template`", o1 = "Invalid `imports` option passed into `_.template`", u1 = /\b__p \+= '';/g, l1 = /\b(__p \+=) '' \+/g, c1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Cu = /[()=,{}\[\]\/\s]/, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, tn = /($^)/, p1 = /['\n\r\u2028\u2029\\]/g, y1 = Object.prototype, Lu = y1.hasOwnProperty;
function d1(e, r, t) {
  var n = Nu.imports._.templateSettings || Nu;
  e = vs(e), r = Fu({}, r, n, Tu);
  var i = Fu({}, r.imports, n.imports, Tu), a = Br(i), s = J_(i, a);
  zk(a, function(h) {
    if (Cu.test(h))
      throw new Error(o1);
  });
  var o, u, l = 0, c = r.interpolate || tn, f = "__p += '", b = RegExp(
    (r.escape || tn).source + "|" + c.source + "|" + (c === rf ? f1 : tn).source + "|" + (r.evaluate || tn).source + "|$",
    "g"
  ), d = Lu.call(r, "sourceURL") ? "//# sourceURL=" + (r.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(b, function(h, P, O, M, v, A) {
    return O || (O = M), f += e.slice(l, A).replace(p1, Q_), P && (o = !0, f += `' +
__e(` + P + `) +
'`), v && (u = !0, f += `';
` + v + `;
__p += '`), O && (f += `' +
((__t = (` + O + `)) == null ? '' : __t) +
'`), l = A + h.length, h;
  }), f += `';
`;
  var E = Lu.call(r, "variable") && r.variable;
  if (!E)
    f = `with (obj) {
` + f + `
}
`;
  else if (Cu.test(E))
    throw new Error(s1);
  f = (u ? f.replace(u1, "") : f).replace(l1, "$1").replace(c1, "$1;"), f = "function(" + (E || "obj") + `) {
` + (E ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (u ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
  var m = V_(function() {
    return Function(a, d + "return " + f).apply(void 0, s);
  });
  if (m.source = f, ef(m))
    throw m;
  return m;
}
class h1 {
  static __container_entry_key = "ConfigService";
  entries;
  constructor() {
    this.entries = /* @__PURE__ */ new Map();
  }
  list() {
    return Array.from(this.entries.values());
  }
  parseValue(r) {
    return typeof r == "string" && r.endsWith(":boolean") ? r.replace(":boolean", "").trim() === "true" : r;
  }
  loadFromRecord(r, t = "unknow") {
    for (const [n, i] of Object.entries(r))
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: t
      });
  }
  loadFromEntries(r, t = "unknow") {
    for (const [n, i] of r)
      this.entries.set(n, {
        key: n,
        value: this.parseValue(i),
        source: t
      });
  }
  toRecord() {
    const r = {};
    for (const [t, n] of this.entries.entries())
      r[t] = n.value;
    return r;
  }
  has(r) {
    if (this.entries.get(r))
      return !0;
    if (!r.includes("."))
      return !1;
    const t = r.split(".")[0], n = this.entries.get(t);
    if (!n)
      return !!this.entries.get(r);
    const i = n.value;
    return typeof i != "object" || Array.isArray(i) ? !1 : Ik(i, r.substring(t.length + 1));
  }
  get(r, t) {
    const n = this.entries.get(r);
    if (n)
      return n.value;
    if (!r.includes("."))
      return t;
    const i = r.split(".")[0], a = this.entries.get(i);
    if (!a) {
      const o = this.entries.get(r);
      return o ? o.value : t;
    }
    const s = a.value;
    return typeof s != "object" || Array.isArray(s) ? t : bs(s, r.substring(i.length + 1), t);
  }
  getOne(r, t) {
    for (const n of r)
      if (this.has(n))
        return this.get(n);
    return t;
  }
  set(r, t, n = "runtime") {
    if (!r.includes(".")) {
      this.entries.set(r, {
        key: r,
        source: n,
        value: t
      });
      return;
    }
    const i = r.split(".")[0];
    let a = this.get(i, {});
    (typeof a != "object" || Array.isArray(a)) && (a = {}), gs(a, r.substring(i.length + 1), t), this.entries.set(i, {
      key: i,
      source: n,
      value: a
    });
  }
  unset(r) {
    if (!r.includes(".")) {
      this.entries.delete(r);
      return;
    }
    const t = r.split(".")[0], n = this.get(t, {});
    n && (typeof n != "object" || Array.isArray(n) || (Wk(n, r.substring(t.length + 1)), this.entries.set(t, {
      key: t,
      source: "runtime",
      value: n
    })));
  }
  clear() {
    this.entries.clear();
  }
  dump() {
    return Ra(this.toRecord());
  }
  evaluate(r, t) {
    try {
      return d1(r, { interpolate: /\${{([\s\S]+?)}}/g })(t);
    } catch (n) {
      throw new rr(`Failed to evaluate template: ${r}. ${n}`);
    }
  }
  evaluateConfig(r) {
    const t = this.toRecord();
    for (const [n, i] of Object.entries(Ra(t)))
      if (typeof i == "string") {
        const a = this.evaluate(i, r);
        this.set(n, a, "evaluated");
      }
  }
}
Me.proxy(h1);
var $i = function() {
  return Ye.Date.now();
}, m1 = /\s/;
function v1(e) {
  for (var r = e.length; r-- && m1.test(e.charAt(r)); )
    ;
  return r;
}
var g1 = /^\s+/;
function b1(e) {
  return e && e.slice(0, v1(e) + 1).replace(g1, "");
}
var Wu = NaN, w1 = /^[-+]0x[0-9a-f]+$/i, k1 = /^0b[01]+$/i, _1 = /^0o[0-7]+$/i, x1 = parseInt;
function zu(e) {
  if (typeof e == "number")
    return e;
  if (Yt(e))
    return Wu;
  if (nt(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = nt(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = b1(e);
  var t = k1.test(e);
  return t || _1.test(e) ? x1(e.slice(2), t ? 2 : 8) : w1.test(e) ? Wu : +e;
}
var E1 = "Expected a function", A1 = Math.max, O1 = Math.min;
function S1(e, r, t) {
  var n, i, a, s, o, u, l = 0, c = !1, f = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(E1);
  r = zu(r) || 0, nt(t) && (c = !!t.leading, f = "maxWait" in t, a = f ? A1(zu(t.maxWait) || 0, r) : a, b = "trailing" in t ? !!t.trailing : b);
  function d(x) {
    var w = n, S = i;
    return n = i = void 0, l = x, s = e.apply(S, w), s;
  }
  function E(x) {
    return l = x, o = setTimeout(P, r), c ? d(x) : s;
  }
  function m(x) {
    var w = x - u, S = x - l, j = r - w;
    return f ? O1(j, a - S) : j;
  }
  function h(x) {
    var w = x - u, S = x - l;
    return u === void 0 || w >= r || w < 0 || f && S >= a;
  }
  function P() {
    var x = $i();
    if (h(x))
      return O(x);
    o = setTimeout(P, m(x));
  }
  function O(x) {
    return o = void 0, b && n ? d(x) : (n = i = void 0, s);
  }
  function M() {
    o !== void 0 && clearTimeout(o), l = 0, n = u = i = o = void 0;
  }
  function v() {
    return o === void 0 ? s : O($i());
  }
  function A() {
    var x = $i(), w = h(x);
    if (n = arguments, i = this, u = x, w) {
      if (o === void 0)
        return E(u);
      if (f)
        return clearTimeout(o), o = setTimeout(P, r), d(u);
    }
    return o === void 0 && (o = setTimeout(P, r)), s;
  }
  return A.cancel = M, A.flush = v, A;
}
function j1() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : typeof self < "u" && self.crypto && self.crypto.randomUUID ? self.crypto.randomUUID() : typeof window < "u" && window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
    const r = Math.random() * 16 | 0;
    return (e === "x" ? r : r & 3 | 8).toString(16);
  });
}
function P1(e = "") {
  return e + j1();
}
class Lt {
  static __container_entry_key = "LoggerService";
  info(r, t) {
  }
  debug(r, t) {
  }
  warn(r, t) {
  }
  error(r, t) {
  }
  child(r) {
    return new Lt();
  }
}
class ks {
  static __container_entry_key = "EmmitterService";
  handlers = [];
  debug;
  logger;
  constructor(r) {
    this.debug = r?.debug || !1, this.logger = r?.logger || new Lt(), this.debug && this.logger.debug("emmitter loaded with debug mode enabled");
  }
  static create(r) {
    return new ks(r);
  }
  setDebug(r) {
    this.debug = r, this.debug && this.logger.debug("debug mode enabled");
  }
  setLogger(r) {
    this.logger = r;
  }
  on(r, t, n) {
    const i = n?.id || P1();
    if (n?.unique && this.handlers.some((s) => s.event === r && s.listener === t || s.id === i))
      return;
    const a = {
      id: i,
      event: r,
      listener: t
    };
    return this.handlers.push(a), this.debug && this.logger.debug("handler added", a), a;
  }
  once(r, t, n) {
    const i = (a, s) => {
      t(a, s), this.off(r, i);
    };
    return this.on(r, i, n);
  }
  onDebounce(r, t, n) {
    const i = S1(t, n?.debounce || 300), a = this.on(r, i, n);
    return a && (a.originalListener = t), a;
  }
  onAnyOf(r, t, n) {
    const i = [];
    for (const a of r) {
      const s = this.on(a, t, n);
      s && i.push(s);
    }
    return i;
  }
  off(r, t) {
    this.handlers = this.handlers.filter((n) => !(n.event === r && (n.listener === t || n.originalListener === t))), this.debug && this.logger.debug("handler removed", { event: r });
  }
  emit(r, t) {
    this.debug && this.logger.debug("emitting event", {
      event: r,
      args: t
    });
    const n = this.handlers.filter((i) => i.event === r);
    for (const i of n)
      Cr.sync(() => i.listener(t, { event: r }));
  }
  async emitAndWait(r, t) {
    const n = this.handlers.filter((i) => i.event === r);
    this.debug && this.logger.debug("emitting event and wait", {
      handlers: n.length,
      event: r,
      args: t
    });
    for await (const i of n)
      await i.listener(t, { event: r });
  }
  list() {
    return this.handlers;
  }
  listByEvent(r) {
    return this.handlers.filter((t) => t.event === r);
  }
  remove(r) {
    const t = Array.isArray(r) ? r : [r];
    this.handlers = this.handlers.filter((n) => !t.includes(n.id)), this.debug && this.logger.debug("handlers removed", { ids: t });
  }
  clear() {
    this.handlers = [], this.debug && this.logger.debug("all handlers cleared");
  }
  hasHandlers() {
    return this.handlers.length > 0;
  }
}
const Bu = Me.proxy(ks);
class M1 {
  static __container_entry_key = "LayoutService";
  components = /* @__PURE__ */ new Map();
  options = {};
  currendId = null;
  setCurrent(r) {
    this.currendId = r, Bu.emit("layout:change", r);
  }
  add(r, t, n) {
    this.components.set(r, t), this.options = n || {};
  }
  has(r) {
    return this.components.has(r);
  }
  get(r) {
    const t = this.components.get(r);
    if (!t)
      throw new rr(`Layout ${r} not found`);
    return t;
  }
  getOptions() {
    return this.options;
  }
  getCurrent() {
    return this.currendId ? this.get(this.currendId) : null;
  }
  setOptions(r = {}) {
    this.options = r, Bu.emit("layout:set-options", r);
  }
}
class af {
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
var Ta = Ct(Ye, "WeakMap");
function D1(e, r) {
  for (var t = -1, n = r.length, i = e.length; ++t < n; )
    e[i + t] = r[t];
  return e;
}
function $1() {
  this.__data__ = new it(), this.size = 0;
}
function q1(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function I1(e) {
  return this.__data__.get(e);
}
function R1(e) {
  return this.__data__.has(e);
}
var F1 = 200;
function T1(e, r) {
  var t = this.__data__;
  if (t instanceof it) {
    var n = t.__data__;
    if (!qr || n.length < F1 - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new at(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function rt(e) {
  var r = this.__data__ = new it(e);
  this.size = r.size;
}
rt.prototype.clear = $1;
rt.prototype.delete = q1;
rt.prototype.get = I1;
rt.prototype.has = R1;
rt.prototype.set = T1;
function N1(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (a[i++] = s);
  }
  return a;
}
function C1() {
  return [];
}
var L1 = Object.prototype, W1 = L1.propertyIsEnumerable, Gu = Object.getOwnPropertySymbols, z1 = Gu ? function(e) {
  return e == null ? [] : (e = Object(e), N1(Gu(e), function(r) {
    return W1.call(e, r);
  }));
} : C1;
function B1(e, r, t) {
  var n = r(e);
  return We(e) ? n : D1(n, t(e));
}
function Uu(e) {
  return B1(e, Br, z1);
}
var Na = Ct(Ye, "DataView"), Ca = Ct(Ye, "Promise"), La = Ct(Ye, "Set"), Xu = "[object Map]", G1 = "[object Object]", Hu = "[object Promise]", Vu = "[object Set]", Ju = "[object WeakMap]", Yu = "[object DataView]", U1 = Nt(Na), X1 = Nt(qr), H1 = Nt(Ca), V1 = Nt(La), J1 = Nt(Ta), yt = wt;
(Na && yt(new Na(new ArrayBuffer(1))) != Yu || qr && yt(new qr()) != Xu || Ca && yt(Ca.resolve()) != Hu || La && yt(new La()) != Vu || Ta && yt(new Ta()) != Ju) && (yt = function(e) {
  var r = wt(e), t = r == G1 ? e.constructor : void 0, n = t ? Nt(t) : "";
  if (n)
    switch (n) {
      case U1:
        return Yu;
      case X1:
        return Xu;
      case H1:
        return Hu;
      case V1:
        return Vu;
      case J1:
        return Ju;
    }
  return r;
});
var Ku = Ye.Uint8Array, Y1 = "__lodash_hash_undefined__";
function K1(e) {
  return this.__data__.set(e, Y1), this;
}
function Q1(e) {
  return this.__data__.has(e);
}
function ln(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new at(); ++r < t; )
    this.add(e[r]);
}
ln.prototype.add = ln.prototype.push = K1;
ln.prototype.has = Q1;
function Z1(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
function ex(e, r) {
  return e.has(r);
}
var tx = 1, rx = 2;
function sf(e, r, t, n, i, a) {
  var s = t & tx, o = e.length, u = r.length;
  if (o != u && !(s && u > o))
    return !1;
  var l = a.get(e), c = a.get(r);
  if (l && c)
    return l == r && c == e;
  var f = -1, b = !0, d = t & rx ? new ln() : void 0;
  for (a.set(e, r), a.set(r, e); ++f < o; ) {
    var E = e[f], m = r[f];
    if (n)
      var h = s ? n(m, E, f, r, e, a) : n(E, m, f, e, r, a);
    if (h !== void 0) {
      if (h)
        continue;
      b = !1;
      break;
    }
    if (d) {
      if (!Z1(r, function(P, O) {
        if (!ex(d, O) && (E === P || i(E, P, t, n, a)))
          return d.push(O);
      })) {
        b = !1;
        break;
      }
    } else if (!(E === m || i(E, m, t, n, a))) {
      b = !1;
      break;
    }
  }
  return a.delete(e), a.delete(r), b;
}
function nx(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, i) {
    t[++r] = [i, n];
  }), t;
}
function ix(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var ax = 1, sx = 2, ox = "[object Boolean]", ux = "[object Date]", lx = "[object Error]", cx = "[object Map]", fx = "[object Number]", px = "[object RegExp]", yx = "[object Set]", dx = "[object String]", hx = "[object Symbol]", mx = "[object ArrayBuffer]", vx = "[object DataView]", Qu = dt ? dt.prototype : void 0, qi = Qu ? Qu.valueOf : void 0;
function gx(e, r, t, n, i, a, s) {
  switch (t) {
    case vx:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case mx:
      return !(e.byteLength != r.byteLength || !a(new Ku(e), new Ku(r)));
    case ox:
    case ux:
    case fx:
      return zr(+e, +r);
    case lx:
      return e.name == r.name && e.message == r.message;
    case px:
    case dx:
      return e == r + "";
    case cx:
      var o = nx;
    case yx:
      var u = n & ax;
      if (o || (o = ix), e.size != r.size && !u)
        return !1;
      var l = s.get(e);
      if (l)
        return l == r;
      n |= sx, s.set(e, r);
      var c = sf(o(e), o(r), n, i, a, s);
      return s.delete(e), c;
    case hx:
      if (qi)
        return qi.call(e) == qi.call(r);
  }
  return !1;
}
var bx = 1, wx = Object.prototype, kx = wx.hasOwnProperty;
function _x(e, r, t, n, i, a) {
  var s = t & bx, o = Uu(e), u = o.length, l = Uu(r), c = l.length;
  if (u != c && !s)
    return !1;
  for (var f = u; f--; ) {
    var b = o[f];
    if (!(s ? b in r : kx.call(r, b)))
      return !1;
  }
  var d = a.get(e), E = a.get(r);
  if (d && E)
    return d == r && E == e;
  var m = !0;
  a.set(e, r), a.set(r, e);
  for (var h = s; ++f < u; ) {
    b = o[f];
    var P = e[b], O = r[b];
    if (n)
      var M = s ? n(O, P, b, r, e, a) : n(P, O, b, e, r, a);
    if (!(M === void 0 ? P === O || i(P, O, t, n, a) : M)) {
      m = !1;
      break;
    }
    h || (h = b == "constructor");
  }
  if (m && !h) {
    var v = e.constructor, A = r.constructor;
    v != A && "constructor" in e && "constructor" in r && !(typeof v == "function" && v instanceof v && typeof A == "function" && A instanceof A) && (m = !1);
  }
  return a.delete(e), a.delete(r), m;
}
var xx = 1, Zu = "[object Arguments]", el = "[object Array]", rn = "[object Object]", Ex = Object.prototype, tl = Ex.hasOwnProperty;
function Ax(e, r, t, n, i, a) {
  var s = We(e), o = We(r), u = s ? el : yt(e), l = o ? el : yt(r);
  u = u == Zu ? rn : u, l = l == Zu ? rn : l;
  var c = u == rn, f = l == rn, b = u == l;
  if (b && Fa(e)) {
    if (!Fa(r))
      return !1;
    s = !0, c = !1;
  }
  if (b && !c)
    return a || (a = new rt()), s || Kc(e) ? sf(e, r, t, n, i, a) : gx(e, r, u, t, n, i, a);
  if (!(t & xx)) {
    var d = c && tl.call(e, "__wrapped__"), E = f && tl.call(r, "__wrapped__");
    if (d || E) {
      var m = d ? e.value() : e, h = E ? r.value() : r;
      return a || (a = new rt()), i(m, h, t, n, a);
    }
  }
  return b ? (a || (a = new rt()), _x(e, r, t, n, i, a)) : !1;
}
function _s(e, r, t, n, i) {
  return e === r ? !0 : e == null || r == null || !ht(e) && !ht(r) ? e !== e && r !== r : Ax(e, r, t, n, _s, i);
}
var Ox = 1, Sx = 2;
function jx(e, r, t, n) {
  var i = t.length, a = i;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = t[i];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = t[i];
    var o = s[0], u = e[o], l = s[1];
    if (s[2]) {
      if (u === void 0 && !(o in e))
        return !1;
    } else {
      var c = new rt(), f;
      if (!(f === void 0 ? _s(l, u, Ox | Sx, n, c) : f))
        return !1;
    }
  }
  return !0;
}
function of(e) {
  return e === e && !nt(e);
}
function Px(e) {
  for (var r = Br(e), t = r.length; t--; ) {
    var n = r[t], i = e[n];
    r[t] = [n, i, of(i)];
  }
  return r;
}
function uf(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
function Mx(e) {
  var r = Px(e);
  return r.length == 1 && r[0][2] ? uf(r[0][0], r[0][1]) : function(t) {
    return t === e || jx(t, e, r);
  };
}
function Dx(e, r) {
  return e != null && r in Object(e);
}
function $x(e, r) {
  return e != null && Uc(e, r, Dx);
}
var qx = 1, Ix = 2;
function Rx(e, r) {
  return hs(e) && of(r) ? uf(Ft(e), r) : function(t) {
    var n = bs(t, e);
    return n === void 0 && n === r ? $x(t, e) : _s(r, n, qx | Ix);
  };
}
function Fx(e) {
  return function(r) {
    return r?.[e];
  };
}
function Tx(e) {
  return function(r) {
    return qn(r, e);
  };
}
function Nx(e) {
  return hs(e) ? Fx(Ft(e)) : Tx(e);
}
function Cx(e) {
  return typeof e == "function" ? e : e == null ? In : typeof e == "object" ? We(e) ? Rx(e[0], e[1]) : Mx(e) : Nx(e);
}
function Lx(e) {
  return function(r, t, n) {
    for (var i = -1, a = Object(r), s = n(r), o = s.length; o--; ) {
      var u = s[++i];
      if (t(a[u], u, a) === !1)
        break;
    }
    return r;
  };
}
var Wx = Lx();
function zx(e, r) {
  return e && Wx(e, r, Br);
}
function Bx(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!Rn(t))
      return e(t, n);
    for (var i = t.length, a = -1, s = Object(t); ++a < i && n(s[a], a, s) !== !1; )
      ;
    return t;
  };
}
var Gx = Bx(zx);
function Ux(e, r) {
  var t = -1, n = Rn(e) ? Array(e.length) : [];
  return Gx(e, function(i, a, s) {
    n[++t] = r(i, a, s);
  }), n;
}
function Xx(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
function Hx(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, i = e === e, a = Yt(e), s = r !== void 0, o = r === null, u = r === r, l = Yt(r);
    if (!o && !l && !a && e > r || a && s && u && !o && !l || n && s && u || !t && u || !i)
      return 1;
    if (!n && !a && !l && e < r || l && t && i && !n && !a || o && t && i || !s && i || !u)
      return -1;
  }
  return 0;
}
function Vx(e, r, t) {
  for (var n = -1, i = e.criteria, a = r.criteria, s = i.length, o = t.length; ++n < s; ) {
    var u = Hx(i[n], a[n]);
    if (u) {
      if (n >= o)
        return u;
      var l = t[n];
      return u * (l == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
function Jx(e, r, t) {
  r.length ? r = Or(r, function(a) {
    return We(a) ? function(s) {
      return qn(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : r = [In];
  var n = -1;
  r = Or(r, Jc(Cx));
  var i = Ux(e, function(a, s, o) {
    var u = Or(r, function(l) {
      return l(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return Xx(i, function(a, s) {
    return Vx(a, s, t);
  });
}
function Yx(e, r, t, n) {
  return e == null ? [] : (We(r) || (r = r == null ? [] : [r]), t = t, We(t) || (t = t == null ? [] : [t]), Jx(e, r, t));
}
let Kx = class {
  static __container_entry_key = "LifecycleService";
  hooks;
  logger;
  debug = !1;
  constructor(e = {}) {
    this.debug = e.debug ?? this.debug, this.hooks = e.hooks ?? /* @__PURE__ */ new Map(), this.logger = e.logger ?? new Lt(), e.onError && (this.onError = e.onError);
  }
  setOnError(e) {
    this.onError = e;
  }
  onError(e, r) {
    Object.assign(e, { context: r }), this.logger.error(`Error in hook ${r.method} (${r.hookId}):`, e);
  }
  mapAliases(e) {
    const r = [], t = Array.from(this.hooks.values());
    for (const n of t) {
      if (e.includes(n.hook_id)) {
        r.push(n.hook_id);
        continue;
      }
      n.hook_aliases && n.hook_aliases.find((i) => e.includes(i)) && r.push(n.hook_id);
    }
    return r;
  }
  list(e) {
    let r = Array.from(this.hooks.values());
    if (e?.exclude) {
      let t = Array.isArray(e.exclude) ? e.exclude : [e.exclude];
      t = this.mapAliases(t), r = r.filter((n) => !t.includes(n.hook_id));
    }
    if (e?.include) {
      let t = Array.isArray(e.include) ? e.include : [e.include];
      t = this.mapAliases(t), r = r.filter((n) => t.includes(n.hook_id));
    }
    return r = Yx(r, ["order"], ["asc"]), r;
  }
  add(...e) {
    const r = [];
    for (const t of e) {
      if (typeof t == "function") {
        r.push(new t());
        continue;
      }
      r.push(t);
    }
    for (const t of r) {
      if (!t.hook_id) {
        this.logger.warn("Skipping hook without hook_id:", t);
        continue;
      }
      this.hooks.set(t.hook_id, t), this.debug && this.logger.debug("add " + t.hook_id), t.subhooks && t.subhooks.forEach((n) => this.add(n));
    }
  }
  async emitMethod(e, r) {
    const t = this.list(r);
    this.debug && this.logger.debug(`emitting ${e} for hooks:`, {
      hooks: t.map((n) => n.hook_id)
    });
    for (const n of this.list(r)) {
      const i = {
        register: () => Promise.all([n.register(), n.onRegister()]),
        load: () => Promise.all([n.load(), n.onLoad()]),
        boot: () => Promise.all([n.boot(), n.onBoot()]),
        shutdown: () => Promise.all([n.shutdown(), n.onShutdown()])
      }, [a] = await Cr(() => i[e]());
      if (a) {
        this.onError(a, { hookId: n.hook_id, method: e });
        continue;
      }
      this.debug && this.logger.debug(`${e} ` + n.hook_id);
    }
  }
  async emit(e, r) {
    const t = Array.isArray(e) ? e : [e];
    for (const n of t)
      await this.emitMethod(n, r);
  }
  on(e, r) {
    const t = new af();
    t.hook_id = `custom:${e}:${Date.now()}`, t[e] = r, this.add(t);
  }
  async register(e) {
    return this.emit("register", e);
  }
  async load(e) {
    return this.emit("load", e);
  }
  async boot(e) {
    return this.emit("boot", e);
  }
  async shutdown(e) {
    await this.emit("shutdown", e);
  }
  clear() {
    this.hooks.clear();
  }
};
class Qx extends Kx {
  addImports(r) {
    const t = [];
    for (const [n, i] of Object.entries(r)) {
      const a = i.default || i, s = new a();
      s.hook_id = s.hook_id || n, t.push(s);
    }
    t.forEach((n) => this.add(n));
  }
}
class Zx extends Ve(Je) {
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
class lf {
  constructor(r, t) {
    this.operator = r, this.value = t, Object.defineProperty(this, "t", { writable: !0 });
  }
  get notes() {
    return this.t;
  }
  addNote(r) {
    this.t = this.t || [], this.t.push(r);
  }
}
let xs = class extends lf {
}, Fn = class extends xs {
  constructor(e, r) {
    if (!Array.isArray(r)) throw new Error(`"${e}" operator expects to receive an array of conditions`);
    super(e, r);
  }
};
const Gr = "__itself__";
let Tn = class extends lf {
  constructor(e, r, t) {
    super(e, t), this.field = r;
  }
};
const cf = new xs("__null__", null), Wa = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
function eE(e, r) {
  return r instanceof Fn && r.operator === e;
}
function ff(e, r) {
  return r.length === 1 ? r[0] : new Fn(e, (function t(n, i, a) {
    const s = a || [];
    for (let o = 0, u = i.length; o < u; o++) {
      const l = i[o];
      eE(n, l) ? t(n, l.value, s) : s.push(l);
    }
    return s;
  })(e, r));
}
const tE = (e) => e, pf = () => /* @__PURE__ */ Object.create(null), yf = Object.defineProperty(pf(), "__@type@__", { value: "ignore value" });
function rE(e, r, t = !1) {
  if (!e || e && e.constructor !== Object) return !1;
  for (const n in e)
    if (Wa(e, n) && Wa(r, n) && (!t || e[n] !== yf)) return !0;
  return !1;
}
function nE(e) {
  const r = [];
  for (const t in e) Wa(e, t) && e[t] !== yf && r.push(t);
  return r;
}
function Ii(e, r) {
  r !== cf && e.push(r);
}
const df = (e) => ff("and", e), hf = { compound(e, r, t) {
  const n = (Array.isArray(r) ? r : [r]).map((i) => t.parse(i));
  return new Fn(e.name, n);
}, field: (e, r, t) => new Tn(e.name, t.field, r), document: (e, r) => new xs(e.name, r) };
let iE = class {
  constructor(e, r = pf()) {
    this.o = void 0, this.s = void 0, this.i = void 0, this.u = void 0, this.h = void 0, this.parse = this.parse.bind(this), this.u = { operatorToConditionName: r.operatorToConditionName || tE, defaultOperatorName: r.defaultOperatorName || "eq", mergeFinalConditions: r.mergeFinalConditions || df }, this.o = Object.keys(e).reduce((t, n) => (t[n] = Object.assign({ name: this.u.operatorToConditionName(n) }, e[n]), t), {}), this.s = Object.assign({}, r.fieldContext, { field: "", query: {}, parse: this.parse, hasOperators: (t) => rE(t, this.o, r.useIgnoreValue) }), this.i = Object.assign({}, r.documentContext, { parse: this.parse, query: {} }), this.h = r.useIgnoreValue ? nE : Object.keys;
  }
  setParse(e) {
    this.parse = e, this.s.parse = e, this.i.parse = e;
  }
  parseField(e, r, t, n) {
    const i = this.o[r];
    if (!i) throw new Error(`Unsupported operator "${r}"`);
    if (i.type !== "field") throw new Error(`Unexpected ${i.type} operator "${r}" at field level`);
    return this.s.field = e, this.s.query = n, this.parseInstruction(i, t, this.s);
  }
  parseInstruction(e, r, t) {
    return typeof e.validate == "function" && e.validate(e, r), (e.parse || hf[e.type])(e, r, t);
  }
  parseFieldOperators(e, r) {
    const t = [], n = this.h(r);
    for (let i = 0, a = n.length; i < a; i++) {
      const s = n[i];
      if (!this.o[s]) throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);
      Ii(t, this.parseField(e, s, r[s], r));
    }
    return t;
  }
  parse(e) {
    const r = [], t = this.h(e);
    this.i.query = e;
    for (let n = 0, i = t.length; n < i; n++) {
      const a = t[n], s = e[a], o = this.o[a];
      if (o) {
        if (o.type !== "document" && o.type !== "compound") throw new Error(`Cannot use parsing instruction for operator "${a}" in "document" context as it is supposed to be used in  "${o.type}" context`);
        Ii(r, this.parseInstruction(o, s, this.i));
      } else this.s.hasOperators(s) ? r.push(...this.parseFieldOperators(a, s)) : Ii(r, this.parseField(a, this.u.defaultOperatorName, s, e));
    }
    return this.u.mergeFinalConditions(r);
  }
};
function Ri(e, r) {
  const t = e[r];
  if (typeof t != "function") throw new Error(`Unable to interpret "${r}" condition. Did you forget to register interpreter for it?`);
  return t;
}
function aE(e) {
  return e.operator;
}
function sE(e, r) {
  const t = r, n = t && t.getInterpreterName || aE;
  let i;
  switch (t ? t.numberOfArguments : 0) {
    case 1:
      i = (s) => {
        const o = n(s, t);
        return Ri(e, o)(s, a);
      };
      break;
    case 3:
      i = (s, o, u) => {
        const l = n(s, t);
        return Ri(e, l)(s, o, u, a);
      };
      break;
    default:
      i = (s, o) => {
        const u = n(s, t);
        return Ri(e, u)(s, o, a);
      };
  }
  const a = Object.assign({}, t, { interpret: i });
  return a.interpret;
}
function oE(e, r) {
  return (t, ...n) => {
    const i = e(t, ...n), a = r.bind(null, i);
    return a.ast = i, a;
  };
}
function mf(e, r) {
  if (!Array.isArray(r)) throw new Error(`"${e.name}" expects value to be an array`);
}
function vf(e, r) {
  if (mf(e, r), !r.length) throw new Error(`"${e.name}" expects to have at least one element in array`);
}
const Es = (e) => (r, t) => {
  if (typeof t !== e) throw new Error(`"${r.name}" expects value to be a "${e}"`);
}, gf = { type: "compound", validate: vf, parse(e, r, { parse: t }) {
  const n = r.map((i) => t(i));
  return ff(e.name, n);
} }, uE = gf, lE = { type: "compound", validate: vf }, cE = { type: "field", validate(e, r) {
  if (!(r && (r instanceof RegExp || r.constructor === Object))) throw new Error(`"${e.name}" expects to receive either regular expression or object of field operators`);
}, parse(e, r, t) {
  const n = r instanceof RegExp ? new Tn("regex", t.field, r) : t.parse(r, t);
  return new Fn(e.name, [n]);
} }, bf = { type: "field", validate(e, r) {
  if (!r || r.constructor !== Object) throw new Error(`"${e.name}" expects to receive an object with nested query or field level operators`);
}, parse(e, r, { parse: t, field: n, hasOperators: i }) {
  const a = i(r) ? t(r, { field: Gr }) : t(r);
  return new Tn(e.name, n, a);
} }, wf = { type: "field", validate: Es("number") }, Nn = { type: "field", validate: mf }, kf = Nn, _f = Nn, fE = { type: "field", validate(e, r) {
  if (!Array.isArray(r) || r.length !== 2) throw new Error(`"${e.name}" expects an array with 2 numeric elements`);
} }, xf = { type: "field", validate: Es("boolean") }, As = { type: "field", validate: function(e, r) {
  if (!(typeof r == "string" || typeof r == "number" || r instanceof Date)) throw new Error(`"${e.name}" expects value to be comparable (i.e., string, number or date)`);
} }, Cn = As, Ef = Cn, Af = Cn, Os = { type: "field" }, Of = Os, Sf = { type: "field", validate(e, r) {
  if (!(r instanceof RegExp) && typeof r != "string") throw new Error(`"${e.name}" expects value to be a regular expression or a string that represents regular expression`);
}, parse(e, r, t) {
  const n = typeof r == "string" ? new RegExp(r, t.query.$options || "") : r;
  return new Tn(e.name, t.field, n);
} }, jf = { type: "field", parse: () => cf }, pE = { type: "document", validate: Es("function") };
var yE = Object.freeze({ __proto__: null, $and: gf, $or: uE, $nor: lE, $not: cE, $elemMatch: bf, $size: wf, $in: Nn, $nin: kf, $all: _f, $mod: fE, $exists: xf, $gte: As, $gt: Cn, $lt: Ef, $lte: Af, $eq: Os, $ne: Of, $regex: Sf, $options: jf, $where: pE });
let dE = class extends iE {
  constructor(e) {
    super(e, { defaultOperatorName: "$eq", operatorToConditionName: (r) => r.slice(1) });
  }
  parse(e, r) {
    return r && r.field ? df(this.parseFieldOperators(r.field, e)) : super.parse(e);
  }
};
const za = yE;
function Ss(e, r, t) {
  for (let n = 0, i = e.length; n < i; n++) if (t(e[n], r) === 0) return !0;
  return !1;
}
function js(e, r) {
  return Array.isArray(e) && Number.isNaN(Number(r));
}
function rl(e, r, t) {
  if (!js(e, r)) return t(e, r);
  let n = [];
  for (let i = 0; i < e.length; i++) {
    const a = t(e[i], r);
    a !== void 0 && (n = n.concat(a));
  }
  return n;
}
function Wt(e) {
  return (r, t, n) => {
    const i = n.get(t, r.field);
    return Array.isArray(i) ? i.some((a) => e(r, a, n)) : e(r, i, n);
  };
}
const hE = Object.hasOwn || Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty), mE = (e, r) => e[r];
function Pf(e, r, t) {
  const n = r.lastIndexOf(".");
  return n === -1 ? [e, r] : [t(e, r.slice(0, n)), r.slice(n + 1)];
}
function vE(e, r, t = mE) {
  if (r === Gr) return e;
  if (!e) throw new Error(`Unable to get field "${r}" out of ${String(e)}.`);
  return (function(n, i, a) {
    if (i.indexOf(".") === -1) return rl(n, i, a);
    const s = i.split(".");
    let o = n;
    for (let u = 0, l = s.length; u < l; u++) if (o = rl(o, s[u], a), !o || typeof o != "object") return u < l - 1 ? void 0 : o;
    return o;
  })(e, r, t);
}
function Mf(e, r) {
  return e === r ? 0 : e > r ? 1 : -1;
}
function Df(e, r = {}) {
  return sE(e, Object.assign({ get: vE, compare: Mf }, r));
}
const $f = (e, r, { interpret: t }) => e.value.some((n) => t(n, r)), gE = (e, r, t) => !$f(e, r, t), qf = (e, r, { interpret: t }) => e.value.every((n) => t(n, r)), bE = (e, r, { interpret: t }) => !t(e.value[0], r), Ps = (e, r, { compare: t, get: n }) => {
  const i = n(r, e.field);
  return Array.isArray(i) && !Array.isArray(e.value) ? Ss(i, e.value, t) : t(i, e.value) === 0;
}, If = (e, r, t) => !Ps(e, r, t), Rf = Wt((e, r, t) => {
  const n = t.compare(r, e.value);
  return n === 0 || n === -1;
}), Ff = Wt((e, r, t) => t.compare(r, e.value) === -1), Tf = Wt((e, r, t) => t.compare(r, e.value) === 1), Nf = Wt((e, r, t) => {
  const n = t.compare(r, e.value);
  return n === 0 || n === 1;
}), Cf = (e, r, { get: t }) => {
  if (e.field === Gr) return r !== void 0;
  const [n, i] = Pf(r, e.field, t), a = (s) => s == null ? !!s === e.value : hE(s, i) === e.value;
  return js(n, i) ? n.some(a) : a(n);
}, wE = Wt((e, r) => typeof r == "number" && r % e.value[0] === e.value[1]), Lf = (e, r, { get: t }) => {
  const [n, i] = Pf(r, e.field, t), a = (s) => {
    const o = t(s, i);
    return Array.isArray(o) && o.length === e.value;
  };
  return e.field !== Gr && js(n, i) ? n.some(a) : a(n);
}, Wf = Wt((e, r) => typeof r == "string" && e.value.test(r)), Ln = Wt((e, r, { compare: t }) => Ss(e.value, r, t)), zf = (e, r, t) => !Ln(e, r, t), Bf = (e, r, { compare: t, get: n }) => {
  const i = n(r, e.field);
  return Array.isArray(i) && e.value.every((a) => Ss(i, a, t));
}, Gf = (e, r, { interpret: t, get: n }) => {
  const i = n(r, e.field);
  return Array.isArray(i) && i.some((a) => t(e.value, a));
}, kE = (e, r) => e.value.call(r);
var _E = Object.freeze({ __proto__: null, or: $f, nor: gE, and: qf, not: bE, eq: Ps, ne: If, lte: Rf, lt: Ff, gt: Tf, gte: Nf, exists: Cf, mod: wE, size: Lf, regex: Wf, within: Ln, nin: zf, all: Bf, elemMatch: Gf, where: kE });
const Ms = Object.assign({}, _E, { in: Ln });
Df(Ms);
function nl(e) {
  return e === null || typeof e != "object" ? e : e instanceof Date ? e.getTime() : e && typeof e.toJSON == "function" ? e.toJSON() : e;
}
const xE = (e, r) => Mf(nl(e), nl(r));
function Ds(e, r, t) {
  const n = new dE(e), i = Df(r, Object.assign({ compare: xE }, t));
  if (t && t.forPrimitives) {
    const a = { field: Gr }, s = n.parse;
    n.setParse((o) => s(o, a));
  }
  return oE(n.parse, i);
}
Ds(za, Ms);
Ds(["$and", "$or"].reduce((e, r) => (e[r] = Object.assign({}, e[r], { type: "field" }), e), Object.assign({}, za, { $nor: Object.assign({}, za.$nor, { type: "field", parse: hf.compound }) })), Ms, { forPrimitives: !0 });
const Uf = Object.hasOwn || ((e, r) => Object.prototype.hasOwnProperty.call(e, r));
function Ba(e) {
  return Array.isArray(e) ? e : [e];
}
const Ht = "__caslSubjectType__";
function Fi(e, r) {
  if (r) {
    if (!Uf(r, Ht)) Object.defineProperty(r, Ht, { value: e });
    else if (e !== r[Ht]) throw new Error(`Trying to cast object to subject type ${e} but previously it was casted to ${r[Ht]}`);
  }
  return r;
}
const on = (e) => {
  const r = typeof e;
  return r === "string" || r === "function";
}, EE = (e) => e.modelName || e.name;
function Xf(e) {
  return Uf(e, Ht) ? e[Ht] : EE(e.constructor);
}
const il = { function: (e) => e.constructor, string: Xf };
function al(e, r, t) {
  for (let n = t; n < r.length; n++) e.push(r[n]);
}
function sl(e, r) {
  if (!e || !e.length) return r || [];
  if (!r || !r.length) return e || [];
  let t = 0, n = 0;
  const i = [];
  for (; t < e.length && n < r.length; ) e[t].priority < r[n].priority ? (i.push(e[t]), t++) : e[t].priority > r[n].priority ? (i.push(r[n]), n++) : (i.push(e[t]), t++, n++);
  return al(i, e, t), al(i, r, n), i;
}
function nn(e, r, t) {
  let n = e.get(r);
  return n || (n = t(), e.set(r, n)), n;
}
const AE = (e) => e;
function OE(e, r) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = r(e[n]);
    t && i && t.push(e[n]), i || (t ??= e.slice(0, n));
  }
  return t || e;
}
function SE(e, r) {
  if (Array.isArray(e.fields) && !e.fields.length) throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");
  if (e.fields && !r.fieldMatcher) throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');
  if (e.conditions && !r.conditionsMatcher) throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions');
}
class jE {
  constructor(r, t, n = 0) {
    SE(r, t), this.action = t.resolveAction(r.action), this.subject = r.subject, this.inverted = !!r.inverted, this.conditions = r.conditions, this.reason = r.reason, this.origin = r, this.fields = r.fields ? Ba(r.fields) : void 0, this.priority = n, this.t = t;
  }
  i() {
    return this.conditions && !this.o && (this.o = this.t.conditionsMatcher(this.conditions)), this.o;
  }
  get ast() {
    const r = this.i();
    return r ? r.ast : void 0;
  }
  matchesConditions(r) {
    return this.conditions ? !r || on(r) ? !this.inverted : this.i()(r) : !0;
  }
  matchesField(r) {
    return this.fields ? r ? (this.u || (this.u = this.t.fieldMatcher(this.fields)), this.u(r)) : !this.inverted : !0;
  }
}
function PE(e, r) {
  const t = { value: e, prev: r, next: null };
  return r && (r.next = t), t;
}
function ME(e) {
  e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e.next = e.prev = null;
}
const ol = () => ({ rules: [], merged: !1 }), ul = () => /* @__PURE__ */ new Map();
class DE {
  constructor(r = [], t = {}) {
    this.h = !1, this.l = /* @__PURE__ */ new Map(), this.p = { conditionsMatcher: t.conditionsMatcher, fieldMatcher: t.fieldMatcher, resolveAction: t.resolveAction || AE }, this.$ = t.anyAction || "manage", this.A = t.anySubjectType || "all", this.m = r, this.M = !!t.detectSubjectType, this.j = t.detectSubjectType || Xf, this.v(r);
  }
  get rules() {
    return this.m;
  }
  detectSubjectType(r) {
    return on(r) ? r : r ? this.j(r) : this.A;
  }
  update(r) {
    const t = { rules: r, ability: this, target: this };
    return this._("update", t), this.m = r, this.v(r), this._("updated", t), this;
  }
  v(r) {
    const t = /* @__PURE__ */ new Map();
    let n;
    for (let i = r.length - 1; i >= 0; i--) {
      const a = r.length - i - 1, s = new jE(r[i], this.p, a), o = Ba(s.action), u = Ba(s.subject || this.A);
      !this.h && s.fields && (this.h = !0);
      for (let l = 0; l < u.length; l++) {
        const c = nn(t, u[l], ul);
        n === void 0 && (n = typeof u[l]), typeof u[l] !== n && n !== "mixed" && (n = "mixed");
        for (let f = 0; f < o.length; f++) nn(c, o[f], ol).rules.push(s);
      }
    }
    if (this.l = t, n !== "mixed" && !this.M) {
      const i = il[n] || il.string;
      this.j = i;
    }
  }
  possibleRulesFor(r, t = this.A) {
    if (!on(t)) throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');
    const n = nn(this.l, t, ul), i = nn(n, r, ol);
    if (i.merged) return i.rules;
    const a = r !== this.$ && n.has(this.$) ? n.get(this.$).rules : void 0;
    let s = sl(i.rules, a);
    return t !== this.A && (s = sl(s, this.possibleRulesFor(r, this.A))), i.rules = s, i.merged = !0, s;
  }
  rulesFor(r, t, n) {
    const i = this.possibleRulesFor(r, t);
    if (n && typeof n != "string") throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");
    return this.h ? OE(i, (a) => a.matchesField(n)) : i;
  }
  actionsFor(r) {
    if (!on(r)) throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');
    const t = /* @__PURE__ */ new Set(), n = this.l.get(r);
    n && Array.from(n.keys()).forEach((a) => t.add(a));
    const i = r !== this.A ? this.l.get(this.A) : void 0;
    return i && Array.from(i.keys()).forEach((a) => t.add(a)), Array.from(t);
  }
  on(r, t) {
    this.F = this.F || /* @__PURE__ */ new Map();
    const n = this.F, i = n.get(r) || null, a = PE(t, i);
    return n.set(r, a), () => {
      const s = n.get(r);
      !a.next && !a.prev && s === a ? n.delete(r) : a === s && n.set(r, a.prev), ME(a);
    };
  }
  _(r, t) {
    if (!this.F) return;
    let n = this.F.get(r) || null;
    const i = [];
    for (; n !== null; )
      i.push(n.value), n = n.prev;
    for (let a = 0; a < i.length; a++) i[a](t);
  }
}
class $E extends DE {
  can(r, t, n) {
    const i = this.relevantRuleFor(r, t, n);
    return !!i && !i.inverted;
  }
  relevantRuleFor(r, t, n) {
    const i = this.detectSubjectType(t), a = this.rulesFor(r, i, n);
    for (let s = 0, o = a.length; s < o; s++) if (a[s].matchesConditions(t)) return a[s];
    return null;
  }
  cannot(r, t, n) {
    return !this.can(r, t, n);
  }
}
const qE = { $eq: Os, $ne: Of, $lt: Ef, $lte: Af, $gt: Cn, $gte: As, $in: Nn, $nin: kf, $all: _f, $size: wf, $regex: Sf, $options: jf, $elemMatch: bf, $exists: xf }, IE = { eq: Ps, ne: If, lt: Ff, lte: Rf, gt: Tf, gte: Nf, in: Ln, nin: zf, all: Bf, size: Lf, regex: Wf, elemMatch: Gf, exists: Cf, and: qf }, RE = Ds(qE, IE), FE = /[-/\\^$+?.()|[\]{}]/g, TE = /\.?\*+\.?/g, NE = /\*+/, CE = /\./g;
function LE(e, r, t) {
  const n = t[0] === "*" || e[0] === "." && e[e.length - 1] === "." ? "+" : "*", i = e.indexOf("**") === -1 ? "[^.]" : ".", a = e.replace(CE, "\\$&").replace(NE, i + n);
  return r + e.length === t.length ? `(?:${a})?` : a;
}
function WE(e, r, t) {
  return e === "." && (t[r - 1] === "*" || t[r + 1] === "*") ? e : `\\${e}`;
}
function zE(e) {
  const r = e.map((n) => n.replace(FE, WE).replace(TE, LE)), t = r.length > 1 ? `(?:${r.join("|")})` : r[0];
  return new RegExp(`^${t}$`);
}
const BE = (e) => {
  let r;
  return (t) => (typeof r > "u" && (r = e.every((n) => n.indexOf("*") === -1) ? null : zE(e)), r === null ? e.indexOf(t) !== -1 : r.test(t));
};
function GE(e = [], r = {}) {
  return new $E(e, Object.assign({ conditionsMatcher: RE, fieldMatcher: BE }, r));
}
function UE(e) {
  return e.prototype !== void 0 && typeof e.prototype.possibleRulesFor == "function";
}
class XE {
  constructor(r) {
    this.O = r;
  }
  because(r) {
    return this.O.reason = r, this;
  }
}
class HE {
  constructor(r) {
    this.rules = [], this.C = r, this.can = (t, n, i, a) => this.R(t, n, i, a, !1), this.cannot = (t, n, i, a) => this.R(t, n, i, a, !0), this.build = (t) => UE(this.C) ? new this.C(this.rules, t) : this.C(this.rules, t);
  }
  R(r, t, n, i, a) {
    const s = { action: r };
    return a && (s.inverted = a), t && (s.subject = t, Array.isArray(n) || typeof n == "string" ? s.fields = n : typeof n < "u" && (s.conditions = n), typeof i < "u" && (s.conditions = i)), this.rules.push(s), new XE(s);
  }
}
function VE(e, r) {
  const t = new HE(GE), n = e(t.can, t.cannot);
  return n && typeof n.then == "function" ? n.then(() => t.build(r)) : t.build(r);
}
class JE extends Ve(Je) {
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
    const [r, t] = Cr.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return r ? {} : t;
  }
}
class YE {
  static __container_entry_key = "AclEntity";
  ability;
  permissions;
  debug = !1;
  logger;
  constructor(r = {}) {
    const t = (r.permissions || []).map((n) => JE.from(n));
    this.permissions = t, this.debug = r.debug || !1, this.logger = r.logger || new Lt().child({ label: "acl" }), this.ability = VE((n) => {
      t.forEach((i) => {
        n(i.action, i.subject, i.parsedConditions);
      });
    }), this.debug && this.logger.debug("initialized in debug mode", {
      permissions: this.permissions
    });
  }
  can(r, t, n) {
    if (!n)
      return this.ability.can(r, t);
    const i = Fi(t, n);
    return this.ability.can(r, i);
  }
  cannot(r, t, n) {
    if (!n)
      return this.ability.cannot(r, t);
    const i = Fi(t, n);
    return this.ability.cannot(r, i);
  }
  subject(r, t) {
    return Fi(r, t);
  }
}
const KE = Me.proxy(YE);
class QE {
  static __container_entry_key = "MenuService";
  items = /* @__PURE__ */ new Map();
  add(...r) {
    for (const t of r)
      t.id || (t.id = JSON.stringify(t)), this.items.set(t.id, Zx.from(t));
  }
  remove(r) {
    this.items.delete(r);
  }
  list(r = {}) {
    let t = JSON.parse(JSON.stringify(Array.from(this.items.values())));
    return r.layout && (t = t.filter((n) => n.layout === r.layout)), r.group && (t = t.filter((n) => n.group === r.group || n.parent === r.group)), r.parent && (t = t.filter((n) => n.parent === r.parent)), r.allowed !== void 0 && r.allowed === !0 && (t = t.filter((n) => KE.can("view", n))), t.sort((n, i) => {
      const a = n.order ? n.order : 98, s = i.order ? i.order : 98;
      return a - s;
    }), t;
  }
  clear() {
    this.items.clear();
  }
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
let Vt;
function ZE(e) {
  Vt = {
    ...Vt,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return {
    lang: e?.lang ?? Vt?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? Vt?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? Vt?.abortPipeEarly
  };
}
function eA() {
  Vt = void 0;
}
let jr;
function tA(e, r) {
  jr || (jr = /* @__PURE__ */ new Map()), jr.set(r, e);
}
// @__NO_SIDE_EFFECTS__
function Hf(e) {
  return jr?.get(e);
}
function rA(e) {
  jr?.delete(e);
}
let Pr;
function nA(e, r) {
  Pr || (Pr = /* @__PURE__ */ new Map()), Pr.set(r, e);
}
// @__NO_SIDE_EFFECTS__
function Vf(e) {
  return Pr?.get(e);
}
function iA(e) {
  Pr?.delete(e);
}
let qt;
function aA(e, r, t) {
  qt || (qt = /* @__PURE__ */ new Map()), qt.get(e) || qt.set(e, /* @__PURE__ */ new Map()), qt.get(e).set(t, r);
}
// @__NO_SIDE_EFFECTS__
function Jf(e, r) {
  return qt?.get(e)?.get(r);
}
function sA(e, r) {
  qt?.get(e)?.delete(r);
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  const r = typeof e;
  return r === "string" ? `"${e}"` : r === "number" || r === "bigint" || r === "boolean" ? `${e}` : r === "object" || r === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : r;
}
function k(e, r, t, n, i) {
  const a = i && "input" in i ? i.input : t.value, s = i?.expected ?? e.expects ?? null, o = i?.received ?? /* @__PURE__ */ he(a), u = {
    kind: e.kind,
    type: e.type,
    input: a,
    expected: s,
    received: o,
    message: `Invalid ${r}: ${s ? `Expected ${s} but r` : "R"}eceived ${o}`,
    requirement: e.requirement,
    path: i?.path,
    issues: i?.issues,
    lang: n.lang,
    abortEarly: n.abortEarly,
    abortPipeEarly: n.abortPipeEarly
  }, l = e.kind === "schema", c = i?.message ?? e.message ?? /* @__PURE__ */ Jf(e.reference, u.lang) ?? (l ? /* @__PURE__ */ Vf(u.lang) : null) ?? n.message ?? /* @__PURE__ */ Hf(u.lang);
  c !== void 0 && (u.message = typeof c == "function" ? c(u) : c), l && (t.typed = !1), t.issues ? t.issues.push(u) : t.issues = [u];
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
let Ti;
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  return Ti || (Ti = new TextEncoder()), Ti.encode(e).length;
}
let Ni;
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  Ni || (Ni = new Intl.Segmenter());
  const r = Ni.segment(e);
  let t = 0;
  for (const n of r) t++;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Wn(e, r) {
  if ("pipe" in e) {
    const t = [];
    for (let n = e.pipe.length - 1; n >= 0; n--) {
      const i = e.pipe[n];
      if (i.kind === "schema" && "pipe" in i) t.push(i);
      else if (i.kind === "metadata" && i.type === r) return i[r];
    }
    for (const n of t) {
      const i = /* @__PURE__ */ Wn(n, r);
      if (i !== void 0) return i;
    }
  }
}
// @__NO_SIDE_EFFECTS__
function F(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(r) {
      return e["~run"]({ value: r }, /* @__PURE__ */ nr());
    }
  };
}
let br;
// @__NO_SIDE_EFFECTS__
function Hr(e, r) {
  br || (br = /* @__PURE__ */ new Map()), br.get(e) || br.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const t = br.get(e).segment(r);
  let n = 0;
  for (const i of t) i.isWordLike && n++;
  return n;
}
const oA = /\D/gu;
// @__NO_SIDE_EFFECTS__
function $s(e) {
  const r = e.replace(oA, "");
  let t = r.length, n = 1, i = 0;
  for (; t; ) {
    const a = +r[--t];
    n ^= 1, i += n ? [
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
    ][a] : a;
  }
  return i % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function zt(e, r) {
  return Object.hasOwn(e, r) && r !== "__proto__" && r !== "prototype" && r !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Te(e, r) {
  const t = [...new Set(e)];
  return t.length > 1 ? `(${t.join(` ${r} `)})` : t[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function uA(e, r) {
  const t = {};
  for (const n of e) t[n] = r;
  return t;
}
// @__NO_SIDE_EFFECTS__
function lA(e) {
  const r = {};
  for (const t of e) Object.assign(r, t.entries);
  return r;
}
// @__NO_SIDE_EFFECTS__
function qs(e) {
  if (e.path) {
    let r = "";
    for (const t of e.path) if (typeof t.key == "string" || typeof t.key == "number") r ? r += `.${t.key}` : r += t.key;
    else return null;
    return r;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function cA(e, r) {
  return r.kind === e;
}
// @__NO_SIDE_EFFECTS__
function fA(e, r) {
  return r.type === e;
}
// @__NO_SIDE_EFFECTS__
function pA(e) {
  return e instanceof st;
}
var st = class extends Error {
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
function Yf(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Yf,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = (...i) => {
        const a = this.schema["~run"]({ value: i }, t);
        if (a.issues) throw new st(a.issues);
        return n(...a.value);
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kf(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: Kf,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = async (...i) => {
        const a = await e["~run"]({ value: i }, t);
        if (a.issues) throw new st(a.issues);
        return n(...a.value);
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qf() {
  return {
    kind: "transformation",
    type: "await",
    reference: Qf,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const Zf = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, ep = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, tp = /^[a-z][\da-z]*$/u, rp = /^[+-]?(?:\d*\.)?\d+$/u, np = /^\d+$/u, ip = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, ap = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, sp = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), op = /^(?:0[hx])?[\da-fA-F]+$/u, up = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, lp = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, cp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, fp = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, pp = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, yp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, dp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, hp = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, mp = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, vp = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, gp = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, bp = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, wp = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, kp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, _p = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, xp = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Ep = /^[\w-]+$/u, Ap = /^(?:0o)?[0-7]+$/u, Op = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Sp = /^[\da-z]+(?:[-_][\da-z]+)*$/u, jp = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Pp = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Mp(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Mp,
    async: !1,
    expects: null,
    requirement: Zf,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "Base64", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dp(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Dp,
    async: !1,
    expects: null,
    requirement: ep,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "BIC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $p(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: $p,
    async: !1,
    name: e,
    "~run"(r) {
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qp(e, r) {
  return {
    kind: "validation",
    type: "bytes",
    reference: qp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Ur(t.value);
        i !== this.requirement && k(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ip(e, r) {
  return {
    kind: "validation",
    type: "check",
    reference: Ip,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement(t.value) && k(this, "input", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rp(e, r) {
  return {
    kind: "validation",
    type: "check",
    reference: Rp,
    async: !0,
    expects: null,
    requirement: e,
    message: r,
    async "~run"(t, n) {
      return t.typed && !await this.requirement(t.value) && k(this, "input", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fp(e, r) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Fp,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) for (let i = 0; i < t.value.length; i++) {
        const a = t.value[i];
        this.requirement(a, i, t.value) || k(this, "item", t, n, {
          input: a,
          path: [{
            type: "array",
            origin: "value",
            input: t.value,
            key: i,
            value: a
          }]
        });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tp(e, r) {
  return {
    kind: "validation",
    type: "check_items",
    reference: Tp,
    async: !0,
    expects: null,
    requirement: e,
    message: r,
    async "~run"(t, n) {
      if (t.typed) {
        const i = await Promise.all(t.value.map(this.requirement));
        for (let a = 0; a < t.value.length; a++) if (!i[a]) {
          const s = t.value[a];
          k(this, "item", t, n, {
            input: s,
            path: [{
              type: "array",
              origin: "value",
              input: t.value,
              key: a,
              value: s
            }]
          });
        }
      }
      return t;
    }
  };
}
const yA = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, dA = /[- ]/gu, hA = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function Np(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: Np,
    async: !1,
    expects: null,
    requirement(r) {
      let t;
      return yA.test(r) && (t = r.replace(dA, "")) && hA.some((n) => n.test(t)) && /* @__PURE__ */ $s(t);
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "credit card", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cp(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: Cp,
    async: !1,
    expects: null,
    requirement: tp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "Cuid2", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lp(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: Lp,
    async: !1,
    expects: null,
    requirement: rp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "decimal", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wp(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: Wp,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function zp(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: zp,
    async: !1,
    expects: null,
    requirement: np,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "digits", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bp(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: Bp,
    expects: null,
    async: !1,
    requirement: ip,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "domain", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gp(e) {
  return {
    kind: "validation",
    type: "email",
    reference: Gp,
    expects: null,
    async: !1,
    requirement: ap,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "email", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Up(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: Up,
    async: !1,
    expects: null,
    requirement: sp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "emoji", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xp(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: Xp,
    async: !1,
    expects: "0",
    message: e,
    "~run"(r, t) {
      return r.typed && r.value.length > 0 && k(this, "length", r, t, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hp(e, r) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: Hp,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.endsWith(this.requirement) && k(this, "end", t, n, { received: `"${t.value.slice(-this.requirement.length)}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vp(e, r) {
  return {
    kind: "validation",
    type: "entries",
    reference: Vp,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i !== this.requirement && k(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jp(e, r) {
  return {
    kind: "validation",
    type: "every_item",
    reference: Jp,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.every(this.requirement) && k(this, "item", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yp(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: Yp,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function Kp(e, r) {
  const t = /* @__PURE__ */ he(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: Kp,
    async: !1,
    expects: `!${t}`,
    requirement: e,
    message: r,
    "~run"(n, i) {
      return n.typed && n.value.includes(this.requirement) && k(this, "content", n, i, { received: t }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qp(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: Qp,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.filter(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zp(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: Zp,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.find(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ey(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: ey,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "finite", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ty(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: ty,
    async: !1,
    name: e,
    "~run"(r) {
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ry(e, r) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: ry,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Xr(t.value);
        i !== this.requirement && k(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ny(e, r) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: ny,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ he(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value > this.requirement) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iy(e, r) {
  return {
    kind: "transformation",
    type: "guard",
    reference: iy,
    async: !1,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement(t.value) && (k(this, "input", t, n), t.typed = !1), t;
    }
  };
}
const mA = {
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
function ay(e, r) {
  return {
    kind: "validation",
    type: "hash",
    reference: ay,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((t) => `^[a-fA-F0-9]{${mA[t]}}$`).join("|"), "u"),
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.test(t.value) && k(this, "hash", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sy(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: sy,
    async: !1,
    expects: null,
    requirement: op,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "hexadecimal", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oy(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: oy,
    async: !1,
    expects: null,
    requirement: up,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "hex color", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uy(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: uy,
    async: !1,
    expects: null,
    requirement(r) {
      return lp.test(r) && /* @__PURE__ */ $s(r);
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "IMEI", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ly(e, r) {
  const t = /* @__PURE__ */ he(e);
  return {
    kind: "validation",
    type: "includes",
    reference: ly,
    async: !1,
    expects: t,
    requirement: e,
    message: r,
    "~run"(n, i) {
      return n.typed && !n.value.includes(this.requirement) && k(this, "content", n, i, { received: `!${t}` }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Is(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: Is,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "integer", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cy(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: cy,
    async: !1,
    expects: null,
    requirement: pp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "IP", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fy(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: fy,
    async: !1,
    expects: null,
    requirement: cp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "IPv4", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function py(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: py,
    async: !1,
    expects: null,
    requirement: fp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "IPv6", r, t), r;
    }
  };
}
function vA(e) {
  const r = e.split("").map((n) => n === "X" ? 10 : parseInt(n));
  let t = 0;
  for (let n = 0; n < 10; n++) t += r[n] * (10 - n);
  return t % 11 === 0;
}
function gA(e) {
  const r = e.split("").map((n) => parseInt(n));
  let t = 0;
  for (let n = 0; n < 13; n++) t += r[n] * (n % 2 === 0 ? 1 : 3);
  return t % 10 === 0;
}
const bA = /[- ]/gu, wA = /^\d{9}[\dX]$/u, kA = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function yy(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: yy,
    async: !1,
    expects: null,
    requirement(r) {
      const t = r.replace(bA, "");
      return wA.test(t) ? vA(t) : kA.test(t) ? gA(t) : !1;
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "ISBN", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dy(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: dy,
    async: !1,
    expects: null,
    requirement: wp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "ISRC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hy(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: hy,
    async: !1,
    expects: null,
    requirement: yp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "date", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function my(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: my,
    async: !1,
    expects: null,
    requirement: dp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "date-time", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vy(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: vy,
    async: !1,
    expects: null,
    requirement: hp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "time", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gy(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: gy,
    async: !1,
    expects: null,
    requirement: mp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "time-second", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function by(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: by,
    async: !1,
    expects: null,
    requirement: vp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "timestamp", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wy(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: wy,
    async: !1,
    expects: null,
    requirement: gp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "week", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ky(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: ky,
    async: !1,
    expects: null,
    requirement: bp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "JWS compact", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _y(e, r) {
  return {
    kind: "validation",
    type: "length",
    reference: _y,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length !== this.requirement && k(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xy(e, r) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: xy,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ he(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value < this.requirement) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ey(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: Ey,
    async: !1,
    expects: null,
    requirement: xp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ay(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Ay,
    async: !1,
    expects: null,
    requirement: kp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "48-bit MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oy(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Oy,
    async: !1,
    expects: null,
    requirement: _p,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "64-bit MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sy(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: Sy,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.map(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jy(e, r) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: jy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Ur(t.value);
        i > this.requirement && k(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Py(e, r) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Py,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i > this.requirement && k(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function My(e, r) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: My,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Xr(t.value);
        i > this.requirement && k(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dy(e, r) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Dy,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length > this.requirement && k(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $y(e, r) {
  return {
    kind: "validation",
    type: "max_size",
    reference: $y,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size > this.requirement && k(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qy(e, r) {
  return {
    kind: "validation",
    type: "max_value",
    reference: qy,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ he(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value <= this.requirement) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iy(e, r, t) {
  return {
    kind: "validation",
    type: "max_words",
    reference: Iy,
    async: !1,
    expects: `<=${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Hr(this.locales, n.value);
        a > this.requirement && k(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ry(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: Ry,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function Fy(e, r) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: Fy,
    async: !1,
    expects: /* @__PURE__ */ Te(e.map((t) => `"${t}"`), "|"),
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.includes(t.value.type) && k(this, "MIME type", t, n, { received: `"${t.value.type}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ty(e, r) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: Ty,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Ur(t.value);
        i < this.requirement && k(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ny(e, r) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: Ny,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i < this.requirement && k(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cy(e, r) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: Cy,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Xr(t.value);
        i < this.requirement && k(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ly(e, r) {
  return {
    kind: "validation",
    type: "min_length",
    reference: Ly,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length < this.requirement && k(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wy(e, r) {
  return {
    kind: "validation",
    type: "min_size",
    reference: Wy,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size < this.requirement && k(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zy(e, r) {
  return {
    kind: "validation",
    type: "min_value",
    reference: zy,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ he(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value >= this.requirement) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function By(e, r, t) {
  return {
    kind: "validation",
    type: "min_words",
    reference: By,
    async: !1,
    expects: `>=${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Hr(this.locales, n.value);
        a < this.requirement && k(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gy(e, r) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: Gy,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value % this.requirement != 0 && k(this, "multiple", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uy(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: Uy,
    async: !1,
    expects: null,
    requirement: Ep,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "Nano ID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xy(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: Xy,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(r, t) {
      return r.typed && r.value.length === 0 && k(this, "length", r, t, { received: "0" }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hy(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: Hy,
    async: !1,
    form: e,
    "~run"(r) {
      return r.value = r.value.normalize(this.form), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vy(e, r) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: Vy,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Ur(t.value);
        i === this.requirement && k(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jy(e, r) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: Jy,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i === this.requirement && k(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yy(e, r) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: Yy,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Xr(t.value);
        i === this.requirement && k(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ky(e, r) {
  return {
    kind: "validation",
    type: "not_length",
    reference: Ky,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length === this.requirement && k(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qy(e, r) {
  return {
    kind: "validation",
    type: "not_size",
    reference: Qy,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size === this.requirement && k(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zy(e, r) {
  return {
    kind: "validation",
    type: "not_value",
    reference: Zy,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ he(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && this.requirement <= t.value && this.requirement >= t.value && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ed(e, r) {
  return {
    kind: "validation",
    type: "not_values",
    reference: ed,
    async: !1,
    expects: `!${/* @__PURE__ */ Te(e.map((t) => t instanceof Date ? t.toJSON() : /* @__PURE__ */ he(t)), "|")}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && this.requirement.some((i) => i <= t.value && i >= t.value) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function td(e, r, t) {
  return {
    kind: "validation",
    type: "not_words",
    reference: td,
    async: !1,
    expects: `!${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Hr(this.locales, n.value);
        a === this.requirement && k(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rd(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: rd,
    async: !1,
    expects: null,
    requirement: Ap,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "octal", r, t), r;
    }
  };
}
const ll = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], cl = [
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
function nd(e, r) {
  const t = (o) => typeof o == "string" ? o.toLowerCase() : o, n = e?.truthy ?? ll, i = e?.falsy ?? cl, a = e?.truthy ? e.truthy.map(t) : ll, s = e?.falsy ? e.falsy.map(t) : cl;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: nd,
    expects: /* @__PURE__ */ Te([...n, ...i].map(he), "|"),
    config: e,
    message: r,
    async: !1,
    "~run"(o, u) {
      const l = t(o.value);
      return a.includes(l) ? o.value = !0 : s.includes(l) ? o.value = !1 : (k(this, "boolean", o, u), o.typed = !1), o;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function id(e, r) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: id,
    config: e,
    message: r,
    async: !1,
    "~run"(t, n) {
      try {
        t.value = JSON.parse(t.value, this.config?.reviver);
      } catch (i) {
        if (i instanceof Error)
          k(this, "JSON", t, n, { received: `"${i.message}"` }), t.typed = !1;
        else throw i;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ad(e, r) {
  if (e.issues) for (const t of r) for (const n of e.issues) {
    let i = !1;
    const a = Math.min(t.length, n.path?.length ?? 0);
    for (let s = 0; s < a; s++) if (t[s] !== n.path[s].key && (t[s] !== "$" || n.path[s].type !== "array")) {
      i = !0;
      break;
    }
    if (!i) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function sd(e, r, t) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: sd,
    async: !1,
    expects: null,
    paths: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ ad(n, e)) && !this.requirement(n.value) && k(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function od(e, r, t) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: od,
    async: !0,
    expects: null,
    paths: e,
    requirement: r,
    message: t,
    async "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ ad(n, e)) && !await this.requirement(n.value) && k(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ud(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: ud,
    async: !1,
    expects: null,
    "~run"(r, t) {
      return e({
        dataset: r,
        config: t,
        addIssue: (n) => k(this, n?.label ?? "input", r, t, n)
      }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ld(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: ld,
    async: !0,
    expects: null,
    async "~run"(r, t) {
      return await e({
        dataset: r,
        config: t,
        addIssue: (n) => k(this, n?.label ?? "input", r, t, n)
      }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cd(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: cd,
    async: !1,
    "~run"(r, t) {
      const n = e({
        dataset: r,
        config: t,
        addIssue: (i) => k(this, i?.label ?? "input", r, t, i),
        NEVER: null
      });
      return r.issues ? r.typed = !1 : r.value = n, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fd(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: fd,
    async: !0,
    async "~run"(r, t) {
      const n = await e({
        dataset: r,
        config: t,
        addIssue: (i) => k(this, i?.label ?? "input", r, t, i),
        NEVER: null
      });
      return r.issues ? r.typed = !1 : r.value = n, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pd() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: pd,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yd(e, r) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: yd,
    async: !1,
    operation: e,
    initial: r,
    "~run"(t) {
      return t.value = t.value.reduce(this.operation, this.initial), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dd(e, r) {
  return {
    kind: "validation",
    type: "regex",
    reference: dd,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.test(t.value) && k(this, "format", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hd(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: hd,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = (...i) => {
        const a = this.schema["~run"]({ value: n(...i) }, t);
        if (a.issues) throw new st(a.issues);
        return a.value;
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function md(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: md,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = async (...i) => {
        const a = await this.schema["~run"]({ value: await n(...i) }, t);
        if (a.issues) throw new st(a.issues);
        return a.value;
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vd(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: vd,
    expects: null,
    async: !1,
    requirement: Op,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "email", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gd(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: gd,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "safe integer", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bd(e, r) {
  return {
    kind: "validation",
    type: "size",
    reference: bd,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size !== this.requirement && k(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wd(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: wd,
    async: !1,
    expects: null,
    requirement: Sp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "slug", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kd(e, r) {
  return {
    kind: "validation",
    type: "some_item",
    reference: kd,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.some(this.requirement) && k(this, "item", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _d(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: _d,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.sort(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xd(e, r) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: xd,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.startsWith(this.requirement) && k(this, "start", t, n, { received: `"${t.value.slice(0, this.requirement.length)}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ed(e, r) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Ed,
    message: r,
    config: e,
    async: !1,
    "~run"(t, n) {
      try {
        const i = JSON.stringify(t.value, this.config?.replacer, this.config?.space);
        i === void 0 && (k(this, "JSON", t, n), t.typed = !1), t.value = i;
      } catch (i) {
        if (i instanceof Error)
          k(this, "JSON", t, n, { received: `"${i.message}"` }), t.typed = !1;
        else throw i;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ad(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Ad,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function Od(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: Od,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = BigInt(r.value);
      } catch {
        k(this, "bigint", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sd() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Sd,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jd(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: jd,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = new Date(r.value), isNaN(r.value) && (k(this, "date", r, t, { received: '"Invalid Date"' }), r.typed = !1);
      } catch {
        k(this, "date", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pd() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Pd,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Md(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: Md,
    async: !1,
    requirement: e,
    "~run"(r) {
      return r.value = r.value > this.requirement ? this.requirement : r.value, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dd(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Dd,
    async: !1,
    requirement: e,
    "~run"(r) {
      return r.value = r.value < this.requirement ? this.requirement : r.value, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $d(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: $d,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = Number(r.value), isNaN(r.value) && (k(this, "number", r, t), r.typed = !1);
      } catch {
        k(this, "number", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qd(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: qd,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = String(r.value);
      } catch {
        k(this, "string", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Id() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: Id,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: Oe,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = this.operation(r.value), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rd(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: Rd,
    async: !0,
    operation: e,
    async "~run"(r) {
      return r.value = await this.operation(r.value), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fd() {
  return {
    kind: "transformation",
    type: "trim",
    reference: Fd,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Td() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: Td,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nd() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: Nd,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cd(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: Cd,
    async: !1,
    expects: null,
    requirement: jp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "ULID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ld(e) {
  return {
    kind: "validation",
    type: "url",
    reference: Ld,
    async: !1,
    expects: null,
    requirement(r) {
      try {
        return new URL(r), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && k(this, "URL", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wd(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: Wd,
    async: !1,
    expects: null,
    requirement: Pp,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && k(this, "UUID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zd(e, r) {
  return {
    kind: "validation",
    type: "value",
    reference: zd,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ he(e),
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(this.requirement <= t.value && this.requirement >= t.value) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bd(e, r) {
  return {
    kind: "validation",
    type: "values",
    reference: Bd,
    async: !1,
    expects: `${/* @__PURE__ */ Te(e.map((t) => t instanceof Date ? t.toJSON() : /* @__PURE__ */ he(t)), "|")}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.some((i) => i <= t.value && i >= t.value) && k(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ he(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gd(e, r, t) {
  return {
    kind: "validation",
    type: "words",
    reference: Gd,
    async: !1,
    expects: `${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Hr(this.locales, n.value);
        a !== this.requirement && k(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
function _A(e, r) {
  const t = e["~run"]({ value: r }, { abortEarly: !0 }).issues;
  if (t) throw new st(t);
}
var Ud = class {
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
    const r = typeof e;
    if (r === "string") return `"${e}"`;
    if (r === "number" || r === "boolean") return `${e}`;
    if (r === "bigint") return `${e}n`;
    if (r === "object" || r === "function") {
      if (e) {
        this.refIds ??= /* @__PURE__ */ new WeakMap();
        let t = this.refIds.get(e);
        return t || (t = ++this.refCount, this.refIds.set(e, t)), `#${t}`;
      }
      return "null";
    }
    return r;
  }
  /**
  * Creates a cache key from input and config.
  *
  * @param input The input value.
  * @param config The parse configuration.
  *
  * @returns The cache key.
  */
  key(e, r = {}) {
    return `${this.#e(e)}|${this.#e(r.lang)}|${this.#e(r.message)}|${this.#e(r.abortEarly)}|${this.#e(r.abortPipeEarly)}`;
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
    const r = this.store.get(e);
    if (r) {
      if (this.hasMaxAge && Date.now() - r[1] > this.maxAge) {
        this.store.delete(e);
        return;
      }
      return this.store.delete(e), this.store.set(e, r), r[0];
    }
  }
  /**
  * Sets a value in the cache by key.
  *
  * @param key The cache key.
  * @param value The cached value.
  */
  set(e, r) {
    this.store ??= /* @__PURE__ */ new Map(), this.store.delete(e);
    const t = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [r, t]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function xA(e, r) {
  return {
    ...e,
    cacheConfig: r,
    cache: new Ud(r),
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = this.cache.key(t.value, n);
      let a = this.cache.get(i);
      return a || this.cache.set(i, a = e["~run"](t, n)), /* @__PURE__ */ cn(a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function EA(e, r) {
  let t;
  return {
    ...e,
    async: !0,
    cacheConfig: r,
    cache: new Ud(r),
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = this.cache.key(n.value, i), s = this.cache.get(a);
      if (s) return /* @__PURE__ */ cn(s);
      let o = t?.get(a);
      o || (t ??= /* @__PURE__ */ new Map(), o = Promise.resolve(e["~run"](n, i)), t.set(a, o));
      try {
        const u = await o;
        return this.cache.set(a, u), /* @__PURE__ */ cn(u);
      } finally {
        t?.delete(a);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function AA(e, r) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return e["~run"](t, {
        ...n,
        ...r
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ne(e, r, t) {
  return typeof e.fallback == "function" ? e.fallback(r, t) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function OA(e, r) {
  return {
    ...e,
    fallback: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = e["~run"](t, n);
      return i.issues ? {
        typed: !0,
        value: /* @__PURE__ */ Ne(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function SA(e, r) {
  return {
    ...e,
    fallback: r,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = await e["~run"](t, n);
      return i.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ Ne(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ga(e) {
  const r = {};
  for (const t of e) if (t.path) {
    const n = /* @__PURE__ */ qs(t);
    n ? (r.nested || (r.nested = {}), r.nested[n] ? r.nested[n].push(t.message) : r.nested[n] = [t.message]) : r.other ? r.other.push(t.message) : r.other = [t.message];
  } else r.root ? r.root.push(t.message) : r.root = [t.message];
  return r;
}
// @__NO_SIDE_EFFECTS__
function jA(e, r) {
  return {
    ...e,
    "~run"(t, n) {
      const i = t.issues && [...t.issues];
      if (t = e["~run"](t, n), t.issues) {
        for (const a of t.issues) if (!i?.includes(a)) {
          let s = t.value;
          for (const o of r) {
            const u = s[o], l = {
              type: "unknown",
              origin: "value",
              input: s,
              key: o,
              value: u
            };
            if (a.path ? a.path.push(l) : a.path = [l], !u) break;
            s = u;
          }
        }
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function PA(e, r) {
  return {
    ...e,
    async: !0,
    async "~run"(t, n) {
      const i = t.issues && [...t.issues];
      if (t = await e["~run"](t, n), t.issues) {
        for (const a of t.issues) if (!i?.includes(a)) {
          let s = t.value;
          for (const o of r) {
            const u = s[o], l = {
              type: "unknown",
              origin: "value",
              input: s,
              key: o,
              value: u
            };
            if (a.path ? a.path.push(l) : a.path = [l], !u) break;
            s = u;
          }
        }
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function be(e, r, t) {
  return typeof e.default == "function" ? e.default(r, t) : e.default;
}
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  if ("entries" in e) {
    const r = {};
    for (const t in e.entries) r[t] = /* @__PURE__ */ Ua(e.entries[t]);
    return r;
  }
  return "items" in e ? e.items.map(Ua) : /* @__PURE__ */ be(e);
}
// @__NO_SIDE_EFFECTS__
async function Xa(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([r, t]) => [r, await /* @__PURE__ */ Xa(t)]))) : "items" in e ? Promise.all(e.items.map(Xa)) : /* @__PURE__ */ be(e);
}
// @__NO_SIDE_EFFECTS__
function MA(e) {
  return /* @__PURE__ */ Wn(e, "description");
}
// @__NO_SIDE_EFFECTS__
function DA(e) {
  const r = [];
  function t(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? t(i) : i.kind === "metadata" && i.type === "examples" && r.push(...i.examples);
  }
  return t(e), r;
}
// @__NO_SIDE_EFFECTS__
function Ha(e) {
  if ("entries" in e) {
    const r = {};
    for (const t in e.entries) r[t] = /* @__PURE__ */ Ha(e.entries[t]);
    return r;
  }
  return "items" in e ? e.items.map(Ha) : /* @__PURE__ */ Ne(e);
}
// @__NO_SIDE_EFFECTS__
async function Va(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([r, t]) => [r, await /* @__PURE__ */ Va(t)]))) : "items" in e ? Promise.all(e.items.map(Va)) : /* @__PURE__ */ Ne(e);
}
// @__NO_SIDE_EFFECTS__
function $A(e) {
  const r = {};
  function t(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? t(i) : i.kind === "metadata" && i.type === "metadata" && Object.assign(r, i.metadata);
  }
  return t(e), r;
}
// @__NO_SIDE_EFFECTS__
function qA(e) {
  return /* @__PURE__ */ Wn(e, "title");
}
// @__NO_SIDE_EFFECTS__
function IA(e, r) {
  return !e["~run"]({ value: r }, { abortEarly: !0 }).issues;
}
// @__NO_SIDE_EFFECTS__
function Vr() {
  return {
    kind: "schema",
    type: "any",
    reference: Vr,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mt(e, r) {
  return {
    kind: "schema",
    type: "array",
    reference: mt,
    expects: "Array",
    async: !1,
    item: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < i.length; a++) {
          const s = i[a], o = this.item["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xd(e, r) {
  return {
    kind: "schema",
    type: "array",
    reference: Xd,
    expects: "Array",
    async: !0,
    item: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(i.map((s) => this.item["~run"]({ value: s }, n)));
        for (let s = 0; s < a.length; s++) {
          const o = a[s];
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: i[s]
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hd(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: Hd,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "bigint" ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vd(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: Vd,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value instanceof Blob ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rs(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: Rs,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "boolean" ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jd(e, r) {
  return {
    kind: "schema",
    type: "custom",
    reference: Jd,
    expects: "unknown",
    async: !1,
    check: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return this.check(t.value) ? t.typed = !0 : k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yd(e, r) {
  return {
    kind: "schema",
    type: "custom",
    reference: Yd,
    expects: "unknown",
    async: !0,
    check: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return await this.check(t.value) ? t.typed = !0 : k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  return {
    kind: "schema",
    type: "date",
    reference: zn,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value instanceof Date ? isNaN(r.value) ? k(this, "type", r, t, { received: '"Invalid Date"' }) : r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ja(e, r) {
  const t = [];
  for (const n in e) (`${+n}` !== n || typeof e[n] != "string" || !Object.is(e[e[n]], +n)) && t.push(e[n]);
  return {
    kind: "schema",
    type: "enum",
    reference: Ja,
    expects: /* @__PURE__ */ Te(t.map(he), "|"),
    async: !1,
    enum: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      return this.options.includes(n.value) ? n.typed = !0 : k(this, "type", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kd(e, r) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: Kd,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qd(e, r) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: Qd,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zd(e) {
  return {
    kind: "schema",
    type: "file",
    reference: Zd,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value instanceof File ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
  return {
    kind: "schema",
    type: "function",
    reference: Ya,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "function" ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eh(e, r) {
  return {
    kind: "schema",
    type: "instance",
    reference: eh,
    expects: e.name,
    async: !1,
    class: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value instanceof this.class ? t.typed = !0 : k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fn(e, r) {
  if (typeof e == typeof r) {
    if (e === r || e instanceof Date && r instanceof Date && +e == +r) return { value: e };
    if (e && r && e.constructor === Object && r.constructor === Object) {
      for (const t in r) if (t in e) {
        const n = /* @__PURE__ */ fn(e[t], r[t]);
        if (n.issue) return n;
        e[t] = n.value;
      } else e[t] = r[t];
      return { value: e };
    }
    if (Array.isArray(e) && Array.isArray(r) && e.length === r.length) {
      for (let t = 0; t < e.length; t++) {
        const n = /* @__PURE__ */ fn(e[t], r[t]);
        if (n.issue) return n;
        e[t] = n.value;
      }
      return { value: e };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function th(e, r) {
  return {
    kind: "schema",
    type: "intersect",
    reference: th,
    expects: /* @__PURE__ */ Te(e.map((t) => t.expects), "&"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      if (this.options.length) {
        const i = t.value;
        let a;
        t.typed = !0;
        for (const s of this.options) {
          const o = s["~run"]({ value: i }, n);
          if (o.issues && (t.issues ? t.issues.push(...o.issues) : t.issues = o.issues, n.abortEarly)) {
            t.typed = !1;
            break;
          }
          o.typed || (t.typed = !1), t.typed && (a ? a.push(o.value) : a = [o.value]);
        }
        if (t.typed) {
          t.value = a[0];
          for (let s = 1; s < a.length; s++) {
            const o = /* @__PURE__ */ fn(t.value, a[s]);
            if (o.issue) {
              k(this, "type", t, n, { received: "unknown" });
              break;
            }
            t.value = o.value;
          }
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rh(e, r) {
  return {
    kind: "schema",
    type: "intersect",
    reference: rh,
    expects: /* @__PURE__ */ Te(e.map((t) => t.expects), "&"),
    async: !0,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      if (this.options.length) {
        const i = t.value;
        let a;
        t.typed = !0;
        const s = await Promise.all(this.options.map((o) => o["~run"]({ value: i }, n)));
        for (const o of s) {
          if (o.issues && (t.issues ? t.issues.push(...o.issues) : t.issues = o.issues, n.abortEarly)) {
            t.typed = !1;
            break;
          }
          o.typed || (t.typed = !1), t.typed && (a ? a.push(o.value) : a = [o.value]);
        }
        if (t.typed) {
          t.value = a[0];
          for (let o = 1; o < a.length; o++) {
            const u = /* @__PURE__ */ fn(t.value, a[o]);
            if (u.issue) {
              k(this, "type", t, n, { received: "unknown" });
              break;
            }
            t.value = u.value;
          }
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nh(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: nh,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return this.getter(r.value)["~run"](r, t);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ih(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: ih,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(r, t) {
      return (await this.getter(r.value))["~run"](r, t);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pn(e, r) {
  return {
    kind: "schema",
    type: "literal",
    reference: pn,
    expects: /* @__PURE__ */ he(e),
    async: !1,
    literal: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value === this.literal ? t.typed = !0 : k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ah(e, r) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: ah,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ be(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Ne(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (k(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
        if (!t.issues || !n.abortEarly)
          for (const a in i) /* @__PURE__ */ zt(i, a) && !(a in this.entries) && (t.value[a] = i[a]);
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sh(e, r) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: sh,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ be(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Ne(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (k(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
        if (!t.issues || !n.abortEarly)
          for (const s in i) /* @__PURE__ */ zt(i, s) && !(s in this.entries) && (t.value[s] = i[s]);
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function oh(e, r) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: oh,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
        if (!t.issues || !n.abortEarly) for (let a = this.items.length; a < i.length; a++) t.value.push(i[a]);
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uh(e, r) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: uh,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
        if (!t.issues || !n.abortEarly) for (let s = this.items.length; s < i.length; s++) t.value.push(i[s]);
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lh(e, r, t) {
  return {
    kind: "schema",
    type: "map",
    reference: lh,
    expects: "Map",
    async: !1,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        for (const [s, o] of a) {
          const u = this.key["~run"]({ value: s }, i);
          if (u.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: a,
              key: s,
              value: o
            };
            for (const f of u.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: o }, i);
          if (l.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), n.value.set(u.value, l.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ch(e, r, t) {
  return {
    kind: "schema",
    type: "map",
    reference: ch,
    expects: "Map",
    async: !0,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        const s = await Promise.all([...a].map(([o, u]) => Promise.all([
          o,
          u,
          this.key["~run"]({ value: o }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [o, u, l, c] of s) {
          if (l.issues) {
            const f = {
              type: "map",
              origin: "key",
              input: a,
              key: o,
              value: u
            };
            for (const b of l.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "map",
              origin: "value",
              input: a,
              key: o,
              value: u
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), n.value.set(l.value, c.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fh(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: fh,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return Number.isNaN(r.value) ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ph(e) {
  return {
    kind: "schema",
    type: "never",
    reference: ph,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yh(e, r) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: yh,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value !== null && (t = this.wrapped["~run"](t, n)), t.value === null && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dh(e, r) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: dh,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value !== null && (t = await this.wrapped["~run"](t, n)), t.value === null && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hh(e, r) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: hh,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value === null || t.value === void 0 || (t = this.wrapped["~run"](t, n)), (t.value === null || t.value === void 0) && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mh(e, r) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: mh,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value === null || t.value === void 0 || (t = await this.wrapped["~run"](t, n)), (t.value === null || t.value === void 0) && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fs(e, r) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: Fs,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value !== void 0 && (t = this.wrapped["~run"](t, n)), t.value === void 0 && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ts(e, r) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: Ts,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value !== void 0 && (t = await this.wrapped["~run"](t, n)), t.value === void 0 && k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  return {
    kind: "schema",
    type: "null",
    reference: Ka,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value === null ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vh(e, r) {
  return {
    kind: "schema",
    type: "nullable",
    reference: vh,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value === null && (this.default !== void 0 && (t.value = /* @__PURE__ */ be(this, t, n)), t.value === null) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gh(e, r) {
  return {
    kind: "schema",
    type: "nullable",
    reference: gh,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value === null && (this.default !== void 0 && (t.value = await /* @__PURE__ */ be(this, t, n)), t.value === null) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yn(e, r) {
  return {
    kind: "schema",
    type: "nullish",
    reference: yn,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return (t.value === null || t.value === void 0) && (this.default !== void 0 && (t.value = /* @__PURE__ */ be(this, t, n)), t.value === null || t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bh(e, r) {
  return {
    kind: "schema",
    type: "nullish",
    reference: bh,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return (t.value === null || t.value === void 0) && (this.default !== void 0 && (t.value = await /* @__PURE__ */ be(this, t, n)), t.value === null || t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Kt,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "number" && !isNaN(r.value) ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ns(e, r) {
  return {
    kind: "schema",
    type: "object",
    reference: Ns,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ be(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Ne(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (k(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wh(e, r) {
  return {
    kind: "schema",
    type: "object",
    reference: wh,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ be(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Ne(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (k(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kh(e, r, t) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: kh,
    expects: "Object",
    async: !1,
    entries: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        for (const s in this.entries) {
          const o = this.entries[s];
          if (s in a || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in a ? a[s] : /* @__PURE__ */ be(o), l = o["~run"]({ value: u }, i);
            if (l.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: a,
                key: s,
                value: u
              };
              for (const f of l.issues)
                f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
              if (n.issues || (n.issues = l.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            l.typed || (n.typed = !1), n.value[s] = l.value;
          } else if (o.fallback !== void 0) n.value[s] = /* @__PURE__ */ Ne(o);
          else if (o.type !== "exact_optional" && o.type !== "optional" && o.type !== "nullish" && (k(this, "key", n, i, {
            input: void 0,
            expected: `"${s}"`,
            path: [{
              type: "object",
              origin: "key",
              input: a,
              key: s,
              value: a[s]
            }]
          }), i.abortEarly))
            break;
        }
        if (!n.issues || !i.abortEarly) {
          for (const s in a) if (/* @__PURE__ */ zt(a, s) && !(s in this.entries)) {
            const o = this.rest["~run"]({ value: a[s] }, i);
            if (o.issues) {
              const u = {
                type: "object",
                origin: "value",
                input: a,
                key: s,
                value: a[s]
              };
              for (const l of o.issues)
                l.path ? l.path.unshift(u) : l.path = [u], n.issues?.push(l);
              if (n.issues || (n.issues = o.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            o.typed || (n.typed = !1), n.value[s] = o.value;
          }
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _h(e, r, t) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: _h,
    expects: "Object",
    async: !0,
    entries: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        const [s, o] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([u, l]) => {
          if (u in a || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const c = u in a ? a[u] : await /* @__PURE__ */ be(l);
            return [
              u,
              c,
              l,
              await l["~run"]({ value: c }, i)
            ];
          }
          return [
            u,
            a[u],
            l,
            null
          ];
        })), Promise.all(Object.entries(a).filter(([u]) => /* @__PURE__ */ zt(a, u) && !(u in this.entries)).map(async ([u, l]) => [
          u,
          l,
          await this.rest["~run"]({ value: l }, i)
        ]))]);
        for (const [u, l, c, f] of s) if (f) {
          if (f.issues) {
            const b = {
              type: "object",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const d of f.issues)
              d.path ? d.path.unshift(b) : d.path = [b], n.issues?.push(d);
            if (n.issues || (n.issues = f.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          f.typed || (n.typed = !1), n.value[u] = f.value;
        } else if (c.fallback !== void 0) n.value[u] = await /* @__PURE__ */ Ne(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (k(this, "key", n, i, {
          input: void 0,
          expected: `"${u}"`,
          path: [{
            type: "object",
            origin: "key",
            input: a,
            key: u,
            value: l
          }]
        }), i.abortEarly))
          break;
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of o) {
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value[u] = c.value;
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ir(e, r) {
  return {
    kind: "schema",
    type: "optional",
    reference: Ir,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = /* @__PURE__ */ be(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cs(e, r) {
  return {
    kind: "schema",
    type: "optional",
    reference: Cs,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = await /* @__PURE__ */ be(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bn(e, r) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Bn,
    expects: /* @__PURE__ */ Te(e.map(he), "|"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return this.options.includes(t.value) ? t.typed = !0 : k(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xh(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: xh,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value instanceof Promise ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ls(e, r, t) {
  return {
    kind: "schema",
    type: "record",
    reference: Ls,
    expects: "Object",
    async: !1,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        for (const s in a) if (/* @__PURE__ */ zt(a, s)) {
          const o = a[s], u = this.key["~run"]({ value: s }, i);
          if (u.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: a,
              key: s,
              value: o
            };
            for (const f of u.issues)
              f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: o }, i);
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), u.typed && (n.value[u.value] = l.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eh(e, r, t) {
  return {
    kind: "schema",
    type: "record",
    reference: Eh,
    expects: "Object",
    async: !0,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        const s = await Promise.all(Object.entries(a).filter(([o]) => /* @__PURE__ */ zt(a, o)).map(([o, u]) => Promise.all([
          o,
          u,
          this.key["~run"]({ value: o }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [o, u, l, c] of s) {
          if (l.issues) {
            const f = {
              type: "object",
              origin: "key",
              input: a,
              key: o,
              value: u
            };
            for (const b of l.issues)
              b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: a,
              key: o,
              value: u
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), l.typed && (n.value[l.value] = c.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ah(e, r) {
  return {
    kind: "schema",
    type: "set",
    reference: Ah,
    expects: "Set",
    async: !1,
    value: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i instanceof Set) {
        t.typed = !0, t.value = /* @__PURE__ */ new Set();
        for (const a of i) {
          const s = this.value["~run"]({ value: a }, n);
          if (s.issues) {
            const o = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: a
            };
            for (const u of s.issues)
              u.path ? u.path.unshift(o) : u.path = [o], t.issues?.push(u);
            if (t.issues || (t.issues = s.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          s.typed || (t.typed = !1), t.value.add(s.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Oh(e, r) {
  return {
    kind: "schema",
    type: "set",
    reference: Oh,
    expects: "Set",
    async: !0,
    value: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i instanceof Set) {
        t.typed = !0, t.value = /* @__PURE__ */ new Set();
        const a = await Promise.all([...i].map(async (s) => [s, await this.value["~run"]({ value: s }, n)]));
        for (const [s, o] of a) {
          if (o.issues) {
            const u = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.add(o.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sh(e, r) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Sh,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ be(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Ne(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (k(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
        if (!t.issues || !n.abortEarly) {
          for (const a in i) if (!(a in this.entries)) {
            k(this, "key", t, n, {
              input: a,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: a,
                value: i[a]
              }]
            });
            break;
          }
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jh(e, r) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: jh,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ be(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Ne(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (k(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
        if (!t.issues || !n.abortEarly) {
          for (const s in i) if (!(s in this.entries)) {
            k(this, "key", t, n, {
              input: s,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: s,
                value: i[s]
              }]
            });
            break;
          }
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ph(e, r) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Ph,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
        !(t.issues && n.abortEarly) && this.items.length < i.length && k(this, "type", t, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mh(e, r) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Mh,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
        !(t.issues && n.abortEarly) && this.items.length < i.length && k(this, "type", t, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return {
    kind: "schema",
    type: "string",
    reference: Se,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "string" ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dh(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Dh,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return typeof r.value == "symbol" ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $h(e, r) {
  return {
    kind: "schema",
    type: "tuple",
    reference: $h,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qh(e, r) {
  return {
    kind: "schema",
    type: "tuple",
    reference: qh,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
      } else k(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ih(e, r, t) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Ih,
    expects: "Array",
    async: !1,
    items: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (Array.isArray(a)) {
        n.typed = !0, n.value = [];
        for (let s = 0; s < this.items.length; s++) {
          const o = a[s], u = this.items[s]["~run"]({ value: o }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
        if (!n.issues || !i.abortEarly) for (let s = this.items.length; s < a.length; s++) {
          const o = a[s], u = this.rest["~run"]({ value: o }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rh(e, r, t) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Rh,
    expects: "Array",
    async: !0,
    items: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (Array.isArray(a)) {
        n.typed = !0, n.value = [];
        const [s, o] = await Promise.all([Promise.all(this.items.map(async (u, l) => {
          const c = a[l];
          return [
            l,
            c,
            await u["~run"]({ value: c }, i)
          ];
        })), Promise.all(a.slice(this.items.length).map(async (u, l) => [
          l + this.items.length,
          u,
          await this.rest["~run"]({ value: u }, i)
        ]))]);
        for (const [u, l, c] of s) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of o) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qa(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: Qa,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value === void 0 ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fh(e, r) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Fh,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = /* @__PURE__ */ be(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Th(e, r) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: Th,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = await /* @__PURE__ */ be(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dn(e) {
  let r;
  if (e) for (const t of e) r ? r.push(...t.issues) : r = t.issues;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ge(e, r) {
  return {
    kind: "schema",
    type: "union",
    reference: Ge,
    expects: /* @__PURE__ */ Te(e.map((t) => t.expects), "|"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      let i, a, s;
      for (const o of this.options) {
        const u = o["~run"]({ value: t.value }, n);
        if (u.typed) if (u.issues) a ? a.push(u) : a = [u];
        else {
          i = u;
          break;
        }
        else s ? s.push(u) : s = [u];
      }
      if (i) return i;
      if (a) {
        if (a.length === 1) return a[0];
        k(this, "type", t, n, { issues: /* @__PURE__ */ dn(a) }), t.typed = !0;
      } else {
        if (s?.length === 1) return s[0];
        k(this, "type", t, n, { issues: /* @__PURE__ */ dn(s) });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nh(e, r) {
  return {
    kind: "schema",
    type: "union",
    reference: Nh,
    expects: /* @__PURE__ */ Te(e.map((t) => t.expects), "|"),
    async: !0,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(t, n) {
      let i, a, s;
      for (const o of this.options) {
        const u = await o["~run"]({ value: t.value }, n);
        if (u.typed) if (u.issues) a ? a.push(u) : a = [u];
        else {
          i = u;
          break;
        }
        else s ? s.push(u) : s = [u];
      }
      if (i) return i;
      if (a) {
        if (a.length === 1) return a[0];
        k(this, "type", t, n, { issues: /* @__PURE__ */ dn(a) }), t.typed = !0;
      } else {
        if (s?.length === 1) return s[0];
        k(this, "type", t, n, { issues: /* @__PURE__ */ dn(s) });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ch() {
  return {
    kind: "schema",
    type: "unknown",
    reference: Ch,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lh(e, r, t) {
  return {
    kind: "schema",
    type: "variant",
    reference: Lh,
    expects: "Object",
    async: !1,
    key: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        let s, o = 0, u = this.key, l = [];
        const c = (f, b) => {
          for (const d of f.options) {
            if (d.type === "variant") c(d, new Set(b).add(d.key));
            else {
              let E = !0, m = 0;
              for (const h of b) {
                const P = d.entries[h];
                if (h in a ? P["~run"]({
                  typed: !1,
                  value: a[h]
                }, { abortEarly: !0 }).issues : P.type !== "exact_optional" && P.type !== "optional" && P.type !== "nullish") {
                  E = !1, u !== h && (o < m || o === m && h in a && !(u in a)) && (o = m, u = h, l = []), u === h && l.push(d.entries[h].expects);
                  break;
                }
                m++;
              }
              if (E) {
                const h = d["~run"]({ value: a }, i);
                (!s || !s.typed && h.typed) && (s = h);
              }
            }
            if (s && !s.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), s) return s;
        k(this, "type", n, i, {
          input: a[u],
          expected: /* @__PURE__ */ Te(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: a,
            key: u,
            value: a[u]
          }]
        });
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wh(e, r, t) {
  return {
    kind: "schema",
    type: "variant",
    reference: Wh,
    expects: "Object",
    async: !0,
    key: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        let s, o = 0, u = this.key, l = [];
        const c = async (f, b) => {
          for (const d of f.options) {
            if (d.type === "variant") await c(d, new Set(b).add(d.key));
            else {
              let E = !0, m = 0;
              for (const h of b) {
                const P = d.entries[h];
                if (h in a ? (await P["~run"]({
                  typed: !1,
                  value: a[h]
                }, { abortEarly: !0 })).issues : P.type !== "exact_optional" && P.type !== "optional" && P.type !== "nullish") {
                  E = !1, u !== h && (o < m || o === m && h in a && !(u in a)) && (o = m, u = h, l = []), u === h && l.push(d.entries[h].expects);
                  break;
                }
                m++;
              }
              if (E) {
                const h = await d["~run"]({ value: a }, i);
                (!s || !s.typed && h.typed) && (s = h);
              }
            }
            if (s && !s.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), s) return s;
        k(this, "type", n, i, {
          input: a[u],
          expected: /* @__PURE__ */ Te(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: a,
            key: u,
            value: a[u]
          }]
        });
      } else k(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Za(e) {
  return {
    kind: "schema",
    type: "void",
    reference: Za,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      return r.value === void 0 ? r.typed = !0 : k(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function RA(e, r) {
  return /* @__PURE__ */ Bn(Object.keys(e.entries), r);
}
// @__NO_SIDE_EFFECTS__
function FA(e, r) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(t, n) {
      return e["~run"](t, {
        ...n,
        message: r
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function TA(e, r) {
  const t = { ...e.entries };
  for (const n of r) delete t[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
function zh(e, r, t) {
  const n = e["~run"]({ value: r }, /* @__PURE__ */ nr(t));
  if (n.issues) throw new st(n.issues);
  return n.value;
}
async function Bh(e, r, t) {
  const n = await e["~run"]({ value: r }, /* @__PURE__ */ nr(t));
  if (n.issues) throw new st(n.issues);
  return n.value;
}
// @__NO_SIDE_EFFECTS__
function NA(e, r) {
  const t = (n) => zh(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function CA(e, r) {
  const t = (n) => Bh(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function LA(e, r) {
  const t = {};
  for (const n in e.entries) t[n] = !r || r.includes(n) ? /* @__PURE__ */ Ir(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function WA(e, r) {
  const t = {};
  for (const n in e.entries) t[n] = !r || r.includes(n) ? /* @__PURE__ */ Cs(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zA(e, r) {
  const t = {};
  for (const n of r) t[n] = e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ke(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    "~run"(r, t) {
      for (const n of e) if (n.kind !== "metadata") {
        if (r.issues && (n.kind === "schema" || n.kind === "transformation")) {
          r.typed = !1;
          break;
        }
        (!r.issues || !t.abortEarly && !t.abortPipeEarly) && (r = n["~run"](r, t));
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function BA(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    },
    async "~run"(r, t) {
      for (const n of e) if (n.kind !== "metadata") {
        if (r.issues && (n.kind === "schema" || n.kind === "transformation")) {
          r.typed = !1;
          break;
        }
        (!r.issues || !t.abortEarly && !t.abortPipeEarly) && (r = await n["~run"](r, t));
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function GA(e, r, t) {
  const n = Array.isArray(r) ? r : void 0, i = Array.isArray(r) ? t : r, a = {};
  for (const s in e.entries) a[s] = !n || n.includes(s) ? /* @__PURE__ */ Fs(e.entries[s], i) : e.entries[s];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function UA(e, r, t) {
  const n = Array.isArray(r) ? r : void 0, i = Array.isArray(r) ? t : r, a = {};
  for (const s in e.entries) a[s] = !n || n.includes(s) ? /* @__PURE__ */ Ts(e.entries[s], i) : e.entries[s];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ F(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hn(e, r, t) {
  const n = e["~run"]({ value: r }, /* @__PURE__ */ nr(t));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function Ws(e, r, t) {
  const n = await e["~run"]({ value: r }, /* @__PURE__ */ nr(t));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
function XA(e, r) {
  const t = (n) => /* @__PURE__ */ hn(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function HA(e, r) {
  const t = (n) => /* @__PURE__ */ Ws(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function VA(e) {
  let r = "";
  for (const t of e) {
    r && (r += `
`), r += `× ${t.message}`;
    const n = /* @__PURE__ */ qs(t);
    n && (r += `
  → at ${n}`);
  }
  return r;
}
// @__NO_SIDE_EFFECTS__
function JA(e) {
  return e.wrapped;
}
const YA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: Zf,
  BIC_REGEX: ep,
  CUID2_REGEX: tp,
  DECIMAL_REGEX: rp,
  DIGITS_REGEX: np,
  DOMAIN_REGEX: ip,
  EMAIL_REGEX: ap,
  EMOJI_REGEX: sp,
  HEXADECIMAL_REGEX: op,
  HEX_COLOR_REGEX: up,
  IMEI_REGEX: lp,
  IPV4_REGEX: cp,
  IPV6_REGEX: fp,
  IP_REGEX: pp,
  ISO_DATE_REGEX: yp,
  ISO_DATE_TIME_REGEX: dp,
  ISO_TIMESTAMP_REGEX: vp,
  ISO_TIME_REGEX: hp,
  ISO_TIME_SECOND_REGEX: mp,
  ISO_WEEK_REGEX: gp,
  ISRC_REGEX: wp,
  JWS_COMPACT_REGEX: bp,
  MAC48_REGEX: kp,
  MAC64_REGEX: _p,
  MAC_REGEX: xp,
  NANO_ID_REGEX: Ep,
  OCTAL_REGEX: Ap,
  RFC_EMAIL_REGEX: Op,
  SLUG_REGEX: Sp,
  ULID_REGEX: jp,
  UUID_REGEX: Pp,
  ValiError: st,
  _addIssue: k,
  _cloneDataset: cn,
  _getByteCount: Ur,
  _getGraphemeCount: Xr,
  _getLastMetadata: Wn,
  _getStandardProps: F,
  _getWordCount: Hr,
  _isLuhnAlgo: $s,
  _isValidObjectKey: zt,
  _joinExpects: Te,
  _stringify: he,
  any: Vr,
  args: Yf,
  argsAsync: Kf,
  array: mt,
  arrayAsync: Xd,
  assert: _A,
  awaitAsync: Qf,
  base64: Mp,
  bic: Dp,
  bigint: Hd,
  blob: Vd,
  boolean: Rs,
  brand: $p,
  bytes: qp,
  cache: xA,
  cacheAsync: EA,
  check: Ip,
  checkAsync: Rp,
  checkItems: Fp,
  checkItemsAsync: Tp,
  config: AA,
  creditCard: Np,
  cuid2: Cp,
  custom: Jd,
  customAsync: Yd,
  date: zn,
  decimal: Lp,
  deleteGlobalConfig: eA,
  deleteGlobalMessage: rA,
  deleteSchemaMessage: iA,
  deleteSpecificMessage: sA,
  description: Wp,
  digits: zp,
  domain: Bp,
  email: Gp,
  emoji: Up,
  empty: Xp,
  endsWith: Hp,
  entries: Vp,
  entriesFromList: uA,
  entriesFromObjects: lA,
  enum: Ja,
  enum_: Ja,
  everyItem: Jp,
  exactOptional: Kd,
  exactOptionalAsync: Qd,
  examples: Yp,
  excludes: Kp,
  fallback: OA,
  fallbackAsync: SA,
  file: Zd,
  filterItems: Qp,
  findItem: Zp,
  finite: ey,
  flatten: Ga,
  flavor: ty,
  forward: jA,
  forwardAsync: PA,
  function: Ya,
  function_: Ya,
  getDefault: be,
  getDefaults: Ua,
  getDefaultsAsync: Xa,
  getDescription: MA,
  getDotPath: qs,
  getExamples: DA,
  getFallback: Ne,
  getFallbacks: Ha,
  getFallbacksAsync: Va,
  getGlobalConfig: nr,
  getGlobalMessage: Hf,
  getMetadata: $A,
  getSchemaMessage: Vf,
  getSpecificMessage: Jf,
  getTitle: qA,
  graphemes: ry,
  gtValue: ny,
  guard: iy,
  hash: ay,
  hexColor: oy,
  hexadecimal: sy,
  imei: uy,
  includes: ly,
  instance: eh,
  integer: Is,
  intersect: th,
  intersectAsync: rh,
  ip: cy,
  ipv4: fy,
  ipv6: py,
  is: IA,
  isOfKind: cA,
  isOfType: fA,
  isValiError: pA,
  isbn: yy,
  isoDate: hy,
  isoDateTime: my,
  isoTime: vy,
  isoTimeSecond: gy,
  isoTimestamp: by,
  isoWeek: wy,
  isrc: dy,
  jwsCompact: ky,
  keyof: RA,
  lazy: nh,
  lazyAsync: ih,
  length: _y,
  literal: pn,
  looseObject: ah,
  looseObjectAsync: sh,
  looseTuple: oh,
  looseTupleAsync: uh,
  ltValue: xy,
  mac: Ey,
  mac48: Ay,
  mac64: Oy,
  map: lh,
  mapAsync: ch,
  mapItems: Sy,
  maxBytes: jy,
  maxEntries: Py,
  maxGraphemes: My,
  maxLength: Dy,
  maxSize: $y,
  maxValue: qy,
  maxWords: Iy,
  message: FA,
  metadata: Ry,
  mimeType: Fy,
  minBytes: Ty,
  minEntries: Ny,
  minGraphemes: Cy,
  minLength: Ly,
  minSize: Wy,
  minValue: zy,
  minWords: By,
  multipleOf: Gy,
  nan: fh,
  nanoid: Uy,
  never: ph,
  nonEmpty: Xy,
  nonNullable: yh,
  nonNullableAsync: dh,
  nonNullish: hh,
  nonNullishAsync: mh,
  nonOptional: Fs,
  nonOptionalAsync: Ts,
  normalize: Hy,
  notBytes: Vy,
  notEntries: Jy,
  notGraphemes: Yy,
  notLength: Ky,
  notSize: Qy,
  notValue: Zy,
  notValues: ed,
  notWords: td,
  null: Ka,
  null_: Ka,
  nullable: vh,
  nullableAsync: gh,
  nullish: yn,
  nullishAsync: bh,
  number: Kt,
  object: Ns,
  objectAsync: wh,
  objectWithRest: kh,
  objectWithRestAsync: _h,
  octal: rd,
  omit: TA,
  optional: Ir,
  optionalAsync: Cs,
  parse: zh,
  parseAsync: Bh,
  parseBoolean: nd,
  parseJson: id,
  parser: NA,
  parserAsync: CA,
  partial: LA,
  partialAsync: WA,
  partialCheck: sd,
  partialCheckAsync: od,
  pick: zA,
  picklist: Bn,
  pipe: Ke,
  pipeAsync: BA,
  promise: xh,
  rawCheck: ud,
  rawCheckAsync: ld,
  rawTransform: cd,
  rawTransformAsync: fd,
  readonly: pd,
  record: Ls,
  recordAsync: Eh,
  reduceItems: yd,
  regex: dd,
  required: GA,
  requiredAsync: UA,
  returns: hd,
  returnsAsync: md,
  rfcEmail: vd,
  safeInteger: gd,
  safeParse: hn,
  safeParseAsync: Ws,
  safeParser: XA,
  safeParserAsync: HA,
  set: Ah,
  setAsync: Oh,
  setGlobalConfig: ZE,
  setGlobalMessage: tA,
  setSchemaMessage: nA,
  setSpecificMessage: aA,
  size: bd,
  slug: wd,
  someItem: kd,
  sortItems: _d,
  startsWith: xd,
  strictObject: Sh,
  strictObjectAsync: jh,
  strictTuple: Ph,
  strictTupleAsync: Mh,
  string: Se,
  stringifyJson: Ed,
  summarize: VA,
  symbol: Dh,
  title: Ad,
  toBigint: Od,
  toBoolean: Sd,
  toDate: jd,
  toLowerCase: Pd,
  toMaxValue: Md,
  toMinValue: Dd,
  toNumber: $d,
  toString: qd,
  toUpperCase: Id,
  transform: Oe,
  transformAsync: Rd,
  trim: Fd,
  trimEnd: Td,
  trimStart: Nd,
  tuple: $h,
  tupleAsync: qh,
  tupleWithRest: Ih,
  tupleWithRestAsync: Rh,
  ulid: Cd,
  undefined: Qa,
  undefined_: Qa,
  undefinedable: Fh,
  undefinedableAsync: Th,
  union: Ge,
  unionAsync: Nh,
  unknown: Ch,
  unwrap: JA,
  url: Ld,
  uuid: Wd,
  value: zd,
  values: Bd,
  variant: Lh,
  variantAsync: Wh,
  void: Za,
  void_: Za,
  words: Gd
}, Symbol.toStringTag, { value: "Module" }));
function es(e = /* @__PURE__ */ Vr()) {
  return /* @__PURE__ */ Ke(
    /* @__PURE__ */ Ge([e, /* @__PURE__ */ mt(e)]),
    /* @__PURE__ */ Oe((r) => Array.isArray(r) ? r : [r]),
    /* @__PURE__ */ mt(e)
  );
}
es.number = () => es(/* @__PURE__ */ Kt());
const Gh = 6048e5, KA = 864e5, fl = /* @__PURE__ */ Symbol.for("constructDateFrom");
function vt(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && fl in e ? e[fl](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function Ue(e, r) {
  return vt(r || e, e);
}
let QA = {};
function Gn() {
  return QA;
}
function Rr(e, r) {
  const t = Gn(), n = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, i = Ue(e, r?.in), a = i.getDay(), s = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function mn(e, r) {
  return Rr(e, { ...r, weekStartsOn: 1 });
}
function Uh(e, r) {
  const t = Ue(e, r?.in), n = t.getFullYear(), i = vt(t, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = mn(i), s = vt(t, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = mn(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function pl(e) {
  const r = Ue(e), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +e - +t;
}
function ZA(e, ...r) {
  const t = vt.bind(
    null,
    r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function yl(e, r) {
  const t = Ue(e, r?.in);
  return t.setHours(0, 0, 0, 0), t;
}
function eO(e, r, t) {
  const [n, i] = ZA(
    t?.in,
    e,
    r
  ), a = yl(n), s = yl(i), o = +a - pl(a), u = +s - pl(s);
  return Math.round((o - u) / KA);
}
function tO(e, r) {
  const t = Uh(e, r), n = vt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), mn(n);
}
function rO(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function nO(e) {
  return !(!rO(e) && typeof e != "number" || isNaN(+Ue(e)));
}
function iO(e, r) {
  const t = Ue(e, r?.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const aO = {
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
}, sO = (e, r, t) => {
  let n;
  const i = aO[e];
  return typeof i == "string" ? n = i : r === 1 ? n = i.one : n = i.other.replace("{{count}}", r.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Ci(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const oO = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, uO = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, lO = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cO = {
  date: Ci({
    formats: oO,
    defaultWidth: "full"
  }),
  time: Ci({
    formats: uO,
    defaultWidth: "full"
  }),
  dateTime: Ci({
    formats: lO,
    defaultWidth: "full"
  })
}, fO = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pO = (e, r, t, n) => fO[e];
function wr(e) {
  return (r, t) => {
    const n = t?.context ? String(t.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = t?.width ? String(t.width) : s;
      i = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = t?.width ? String(t.width) : e.defaultWidth;
      i = e.values[o] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return i[a];
  };
}
const yO = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, dO = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, hO = {
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
}, mO = {
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
}, vO = {
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
}, gO = {
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
}, bO = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, wO = {
  ordinalNumber: bO,
  era: wr({
    values: yO,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: dO,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: hO,
    defaultWidth: "wide"
  }),
  day: wr({
    values: mO,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: vO,
    defaultWidth: "wide",
    formattingValues: gO,
    defaultFormattingWidth: "wide"
  })
};
function kr(e) {
  return (r, t = {}) => {
    const n = t.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(i);
    if (!a)
      return null;
    const s = a[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(o) ? _O(o, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      kO(o, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const c = r.slice(s.length);
    return { value: l, rest: c };
  };
}
function kO(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function _O(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function xO(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const o = r.slice(i.length);
    return { value: s, rest: o };
  };
}
const EO = /^(\d+)(th|st|nd|rd)?/i, AO = /\d+/i, OO = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, SO = {
  any: [/^b/i, /^(a|c)/i]
}, jO = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, PO = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, MO = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, DO = {
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
}, $O = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qO = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, IO = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, RO = {
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
}, FO = {
  ordinalNumber: xO({
    matchPattern: EO,
    parsePattern: AO,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: kr({
    matchPatterns: OO,
    defaultMatchWidth: "wide",
    parsePatterns: SO,
    defaultParseWidth: "any"
  }),
  quarter: kr({
    matchPatterns: jO,
    defaultMatchWidth: "wide",
    parsePatterns: PO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: kr({
    matchPatterns: MO,
    defaultMatchWidth: "wide",
    parsePatterns: DO,
    defaultParseWidth: "any"
  }),
  day: kr({
    matchPatterns: $O,
    defaultMatchWidth: "wide",
    parsePatterns: qO,
    defaultParseWidth: "any"
  }),
  dayPeriod: kr({
    matchPatterns: IO,
    defaultMatchWidth: "any",
    parsePatterns: RO,
    defaultParseWidth: "any"
  })
}, TO = {
  code: "en-US",
  formatDistance: sO,
  formatLong: cO,
  formatRelative: pO,
  localize: wO,
  match: FO,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function NO(e, r) {
  const t = Ue(e, r?.in);
  return eO(t, iO(t)) + 1;
}
function CO(e, r) {
  const t = Ue(e, r?.in), n = +mn(t) - +tO(t);
  return Math.round(n / Gh) + 1;
}
function Xh(e, r) {
  const t = Ue(e, r?.in), n = t.getFullYear(), i = Gn(), a = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, s = vt(r?.in || e, 0);
  s.setFullYear(n + 1, 0, a), s.setHours(0, 0, 0, 0);
  const o = Rr(s, r), u = vt(r?.in || e, 0);
  u.setFullYear(n, 0, a), u.setHours(0, 0, 0, 0);
  const l = Rr(u, r);
  return +t >= +o ? n + 1 : +t >= +l ? n : n - 1;
}
function LO(e, r) {
  const t = Gn(), n = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, i = Xh(e, r), a = vt(r?.in || e, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), Rr(a, r);
}
function WO(e, r) {
  const t = Ue(e, r?.in), n = +Rr(t, r) - +LO(t, r);
  return Math.round(n / Gh) + 1;
}
function ce(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const ft = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return ce(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : ce(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return ce(e.getDate(), r.length);
  },
  // AM or PM
  a(e, r) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, r) {
    return ce(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return ce(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return ce(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return ce(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return ce(i, r.length);
  }
}, Ut = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, dl = {
  // Era
  G: function(e, r, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, r, t) {
    if (r === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return t.ordinalNumber(i, { unit: "year" });
    }
    return ft.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const i = Xh(e, n), a = i > 0 ? i : 1 - i;
    if (r === "YY") {
      const s = a % 100;
      return ce(s, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : ce(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = Uh(e);
    return ce(t, r.length);
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
  u: function(e, r) {
    const t = e.getFullYear();
    return ce(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return ce(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return ce(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return ft.M(e, r);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return ce(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, r, t, n) {
    const i = WO(e, n);
    return r === "wo" ? t.ordinalNumber(i, { unit: "week" }) : ce(i, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = CO(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : ce(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : ft.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = NO(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : ce(n, r.length);
  },
  // Day of week
  E: function(e, r, t) {
    const n = e.getDay();
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return ce(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(i, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return ce(a, r.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(i, {
          width: "short",
          context: "standalone"
        });
      default:
        return t.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (r) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return ce(i, r.length);
      // 2nd
      case "io":
        return t.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, r, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = Ut.noon : n === 0 ? i = Ut.midnight : i = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = Ut.evening : n >= 12 ? i = Ut.afternoon : n >= 4 ? i = Ut.morning : i = Ut.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, r, t) {
    if (r === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return ft.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : ft.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : ce(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : ce(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ft.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : ft.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return ft.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      // Hours and optional minutes
      case "X":
        return ml(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Mt(n);
      // Hours and minutes with `:` delimiter
      default:
        return Mt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Hours and optional minutes
      case "x":
        return ml(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Mt(n);
      // Hours and minutes with `:` delimiter
      default:
        return Mt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + hl(n, ":");
      default:
        return "GMT" + Mt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + hl(n, ":");
      default:
        return "GMT" + Mt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return ce(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return ce(+e, r.length);
  }
};
function hl(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(i) : t + String(i) + r + ce(a, 2);
}
function ml(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ce(Math.abs(e) / 60, 2) : Mt(e, r);
}
function Mt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = ce(Math.trunc(n / 60), 2), a = ce(n % 60, 2);
  return t + i + r + a;
}
const vl = (e, r) => {
  switch (e) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    default:
      return r.date({ width: "full" });
  }
}, Hh = (e, r) => {
  switch (e) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    default:
      return r.time({ width: "full" });
  }
}, zO = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], i = t[2];
  if (!i)
    return vl(e, r);
  let a;
  switch (n) {
    case "P":
      a = r.dateTime({ width: "short" });
      break;
    case "PP":
      a = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = r.dateTime({ width: "long" });
      break;
    default:
      a = r.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", vl(n, r)).replace("{{time}}", Hh(i, r));
}, BO = {
  p: Hh,
  P: zO
}, GO = /^D+$/, UO = /^Y+$/, XO = ["D", "DD", "YY", "YYYY"];
function HO(e) {
  return GO.test(e);
}
function VO(e) {
  return UO.test(e);
}
function JO(e, r, t) {
  const n = YO(e, r, t);
  if (console.warn(n), XO.includes(e)) throw new RangeError(n);
}
function YO(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const KO = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, QO = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ZO = /^'([^]*?)'?$/, eS = /''/g, tS = /[a-zA-Z]/;
function Vh(e, r, t) {
  const n = Gn(), i = n.locale ?? TO, a = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, s = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = Ue(e, t?.in);
  if (!nO(o))
    throw new RangeError("Invalid time value");
  let u = r.match(QO).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const b = BO[f];
      return b(c, i.formatLong);
    }
    return c;
  }).join("").match(KO).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: rS(c) };
    if (dl[f])
      return { isToken: !0, value: c };
    if (f.match(tS))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  i.localize.preprocessor && (u = i.localize.preprocessor(o, u));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (VO(f) || HO(f)) && JO(f, r, String(e));
    const b = dl[f[0]];
    return b(o, f, i.localize, l);
  }).join("");
}
function rS(e) {
  const r = e.match(ZO);
  return r ? r[1].replace(eS, "'") : e;
}
const Jh = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ Kt()]),
  /* @__PURE__ */ Oe(Number),
  /* @__PURE__ */ Is()
), Yh = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ Rs()]),
  /* @__PURE__ */ Oe((e) => e === !0 || e === "true")
), Kh = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ zn()]),
  /* @__PURE__ */ Oe((e) => e instanceof Date ? e : new Date(e)),
  /* @__PURE__ */ Oe((e) => e && Vh(e, "yyyy-MM-dd"))
), Qh = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ zn()]),
  /* @__PURE__ */ Oe((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), Vh(e, "yyyy-MM-dd HH:mm"))))
), nS = (e = /* @__PURE__ */ Vr()) => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ mt(/* @__PURE__ */ Se())]),
  /* @__PURE__ */ Oe((r) => Array.isArray(r) ? r : r.split(",")),
  /* @__PURE__ */ mt(e)
), Zh = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ Kt(), /* @__PURE__ */ mt(/* @__PURE__ */ Se()), /* @__PURE__ */ mt(/* @__PURE__ */ Kt())]),
  /* @__PURE__ */ Oe((e) => Array.isArray(e) ? e.map(Number) : typeof e == "string" ? e.split(",").map(Number) : [Number(e)]),
  /* @__PURE__ */ Oe((e) => e.map(Number))
), zs = () => /* @__PURE__ */ Ke(
  /* @__PURE__ */ Ge([/* @__PURE__ */ Se(), /* @__PURE__ */ Ls(/* @__PURE__ */ Se(), /* @__PURE__ */ Vr())]),
  /* @__PURE__ */ Oe((e) => typeof e == "string" ? Rc.parse(e) : e),
  /* @__PURE__ */ Oe((e) => {
    const r = {};
    for (const t in e)
      gs(r, t, bs(e, t));
    return r;
  })
);
function Fe() {
  return zs();
}
Fe.number = Jh;
Fe.boolean = Yh;
Fe.date = Kh;
Fe.datetime = Qh;
Fe.array = nS;
Fe.arrayNumber = Zh;
Fe.object = zs;
const iS = () => /* @__PURE__ */ Ke(/* @__PURE__ */ Se(), /* @__PURE__ */ Oe((e) => {
  const r = e.split(/[;\n]/).filter(Boolean).filter((i) => i.includes("=")).map((i) => i.trim().split("=")), t = Object.fromEntries(r), n = {};
  for (const [i, a] of Object.entries(t)) {
    let s = a;
    a.startsWith("bool:") && (s = a.replace("bool:", "").trim() === "true"), gs(n, i, s);
  }
  return n;
})), Bs = (e = {}) => /* @__PURE__ */ Ns({
  page: /* @__PURE__ */ Ir(Fe.number(), 1),
  limit: /* @__PURE__ */ Ir(Fe.number(), e.maxLimit || 100),
  orderBy: /* @__PURE__ */ yn(e.orderFields ? Fe.array(/* @__PURE__ */ Bn(e.orderFields)) : Fe.array(/* @__PURE__ */ Se()), []),
  orderDirection: /* @__PURE__ */ yn(Fe.array(/* @__PURE__ */ Ge([/* @__PURE__ */ pn("asc"), /* @__PURE__ */ pn("desc")])), [])
});
function em(e = {}) {
  return Bs(e);
}
em.base = Bs;
const aS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  array: es,
  arrayNumber: Zh,
  base: Bs,
  boolean: Yh,
  date: Kh,
  datetime: Qh,
  keyValue: iS,
  number: Jh,
  object: zs,
  pagination: em,
  url: Fe
}, Symbol.toStringTag, { value: "Module" }));
class sS {
  static __container_entry_key = "ValidatorService";
  v = {
    ...YA,
    extras: aS
  };
  create(r) {
    return r(this.v);
  }
  validate(r, t) {
    const n = typeof t == "function" ? t(this.v) : t, { output: i, issues: a, success: s } = /* @__PURE__ */ hn(n, r);
    if (!s) {
      const o = /* @__PURE__ */ Ga(a), u = [];
      o.root && u.push(...o.root), o.nested && Object.entries(o.nested).forEach((f) => {
        const [b, d] = f;
        u.push(...d.map((E) => `${b}: ${E}`));
      });
      const l = u.length ? u.join(", ") : "Validation failed", c = new rr(l, 422);
      throw c.name = "ValidationError", Object.assign(c, { messages: u }), c;
    }
    return i;
  }
  async validateAsync(r, t) {
    const n = typeof t == "function" ? t(this.v) : t, { output: i, issues: a, success: s } = await /* @__PURE__ */ Ws(n, r);
    if (!s) {
      const o = new Error("Validation failed"), u = /* @__PURE__ */ Ga(a), l = {
        ...u.root,
        ...u.nested
      };
      throw Object.assign(o, { details: l }), o;
    }
    return i;
  }
  isValid(r, t) {
    const n = typeof t == "function" ? t(this.v) : t, { success: i } = /* @__PURE__ */ hn(n, r);
    return i;
  }
}
const tm = globalThis, oS = tm.layout || new M1();
tm.layout = oS;
Mw(/* @__PURE__ */ new Map());
Me.proxy("route");
const rm = Me.proxy("router");
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const uS = Me.proxy(v0);
class lS {
  static __container_entry_key = "DashboardWidgetRegistry";
  definitions = /* @__PURE__ */ new Map();
  register(...r) {
    for (const t of r)
      this.definitions.set(t.id, t);
  }
  get(r) {
    return this.definitions.get(r) || null;
  }
  list() {
    return Array.from(this.definitions.values());
  }
}
Me.proxy(lS);
const cS = Me.proxy(Qx);
Me.proxy(Lt);
const fS = Me.proxy(QE);
class pS {
  static __container_entry_key = "TranslatorService";
  entries;
  locale;
  localeLoaders;
  debug = !1;
  logger;
  cache;
  constructor(r = {}) {
    this.entries = r.entries || /* @__PURE__ */ new Map(), this.locale = r.locale || "en", this.debug = r.debug || !1, this.cache = r.cache || /* @__PURE__ */ new Map(), this.logger = r.logger || new Lt(), this.localeLoaders = /* @__PURE__ */ new Map(), this.debug && this.logger.debug("initialized in debug mode", { locale: this.locale });
  }
  get locales() {
    return Array.from(this.localeLoaders.keys());
  }
  list() {
    const r = [];
    return this.entries.forEach((t, n) => {
      r.push({
        key: n,
        value: t
      });
    }), r;
  }
  async getEntries(r) {
    const t = this.cache.get(r);
    if (t && this.debug && this.logger.debug(`load locale "${r}" from cache`, {
      locale: r,
      length: Object.keys(t).length
    }), t)
      return t;
    const n = this.localeLoaders.get(r);
    if (!n)
      return this.logger.warn(`no loader found for locale "${r}"`), {};
    const i = await n();
    return this.cache.set(r, i), this.debug && this.logger.debug(`load locale ${r}`, {
      locale: r,
      keys: Object.keys(i).length
    }), i;
  }
  async load(r) {
    const t = await this.getEntries(r);
    this.entries = new Map(Object.entries(t)), this.locale = r;
  }
  t(r, t = {}) {
    !this.entries.has(r) && this.debug && this.logger.debug(`missing translation for key "${r}"`, {
      key: r,
      locale: this.locale
    });
    let n = this.entries.get(r) || r;
    return Object.keys(t).length && Object.entries(t).forEach(([i, a]) => {
      n = n.replace(`:${i}`, String(a));
    }), n;
  }
  date(r) {
    return new Date(r).toLocaleDateString(this.locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  }
  datetime(r) {
    return new Date(r).toLocaleString(this.locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
}
Me.proxy(pS);
const ir = new sS();
function vn() {
  return ir.create((e) => e.object({
    id: e.number(),
    dashboard_id: e.number(),
    name: e.string(),
    value: e.nullable(e.string())
  }));
}
vn.create = ir.create((e) => e.pick(vn(), ["dashboard_id", "name", "value"]));
vn.update = ir.create((e) => e.partial(vn.create));
function gn() {
  return ir.create((e) => e.object({
    id: e.number(),
    name: e.string(),
    description: e.nullish(e.string(), null),
    created_at: e.string(),
    updated_at: e.string(),
    deleted_at: e.nullable(e.string()),
    metas: e.optional(e.record(e.string(), e.any()))
  }));
}
gn.create = ir.create((e) => e.pick(gn(), ["name", "description"]));
gn.update = ir.create((e) => e.partial(gn.create));
class TD extends Ve(Je, Lr, Wr) {
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
class ND extends Ve(Je, Lr, Wr) {
  id;
  file_id;
  name;
  value;
}
class CD extends Ve(Je, Lr, Wr) {
  id;
  purpose;
  mime_types;
  max_size;
  // dynamic 
  upload_url;
  create_file_url;
  getParsedMimeTypes() {
    return this.mime_types.split(",").map((r) => r.trim());
  }
  isAllowedMimeType(r) {
    const t = this.getParsedMimeTypes();
    return t.includes(r) || t.includes("*/*");
  }
  isAllowedSize(r) {
    return r <= this.max_size;
  }
}
let yS = class extends Ve(Je, m0(af)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    const r = Object.fromEntries(
      Object.entries(e).filter(([, t]) => t !== void 0)
    );
    Object.assign(this, r), this.hook_id = `module:${this.id}`;
  }
};
class LD extends Ve(Je) {
  id;
  name;
  version;
  description;
  enabled;
  author;
  dependencies;
  build;
}
let dS = class extends Ve(Je) {
  id;
  name;
  version;
  enabled;
  aliases;
  branches;
};
class WD extends Ve(Je, Lr, Wr) {
  id;
  name;
  description;
}
class zD extends Fc(yS) {
}
class BD extends Fc(dS) {
  addPagesFolder(r, t) {
    rm.auto(r, t);
  }
  async load() {
  }
}
function GD(e) {
  return e;
}
function UD(e) {
  return e;
}
(function() {
  var e;
  try {
    if (typeof document < "u") {
      var r = document.createElement("style");
      r.nonce = (e = document.head.querySelector("meta[property=csp-nonce]")) == null ? void 0 : e.content, r.appendChild(document.createTextNode('[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32,.72,0,1);animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform, 100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform, 100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left],[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true]):after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:hover,[data-vaul-handle]:active{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;user-select:none}}@media (pointer: fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{0%{transform:translate3d(0,var(--initial-transform, 100%),0)}to{transform:translateZ(0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform, 100%),0)}}@keyframes slideFromTop{0%{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}to{transform:translateZ(0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform, 100%) * -1),0)}}@keyframes slideFromLeft{0%{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}to{transform:translateZ(0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform, 100%) * -1),0,0)}}@keyframes slideFromRight{0%{transform:translate3d(var(--initial-transform, 100%),0,0)}to{transform:translateZ(0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform, 100%),0,0)}}')), document.head.appendChild(r);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function hS(e) {
  const r = e.exclude || ["/auth/login", "/auth/register"];
  return (t) => {
    if (!uS.user && !r.includes(t.path))
      return typeof e.redirect == "function" ? e.redirect(t) : e.redirect;
  };
}
const mS = hS({
  redirect: (e) => "/auth/login?redirect=" + encodeURIComponent(e.fullPath)
});
var vS = typeof global == "object" && global && global.Object === Object && global, gS = typeof self == "object" && self && self.Object === Object && self, Gs = vS || gS || Function("return this")(), Qt = Gs.Symbol, nm = Object.prototype, bS = nm.hasOwnProperty, wS = nm.toString, _r = Qt ? Qt.toStringTag : void 0;
function kS(e) {
  var r = bS.call(e, _r), t = e[_r];
  try {
    e[_r] = void 0;
    var n = !0;
  } catch {
  }
  var i = wS.call(e);
  return n && (r ? e[_r] = t : delete e[_r]), i;
}
var _S = Object.prototype, xS = _S.toString;
function ES(e) {
  return xS.call(e);
}
var AS = "[object Null]", OS = "[object Undefined]", gl = Qt ? Qt.toStringTag : void 0;
function im(e) {
  return e == null ? e === void 0 ? OS : AS : gl && gl in Object(e) ? kS(e) : ES(e);
}
function bn(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var SS = "[object AsyncFunction]", jS = "[object Function]", PS = "[object GeneratorFunction]", MS = "[object Proxy]";
function DS(e) {
  if (!bn(e))
    return !1;
  var r = im(e);
  return r == jS || r == PS || r == SS || r == MS;
}
var Li = Gs["__core-js_shared__"], bl = (function() {
  var e = /[^.]+$/.exec(Li && Li.keys && Li.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function $S(e) {
  return !!bl && bl in e;
}
var qS = Function.prototype, IS = qS.toString;
function RS(e) {
  if (e != null) {
    try {
      return IS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var FS = /[\\^$.*+?()[\]{}|]/g, TS = /^\[object .+?Constructor\]$/, NS = Function.prototype, CS = Object.prototype, LS = NS.toString, WS = CS.hasOwnProperty, zS = RegExp(
  "^" + LS.call(WS).replace(FS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function BS(e) {
  if (!bn(e) || $S(e))
    return !1;
  var r = DS(e) ? zS : TS;
  return r.test(RS(e));
}
function GS(e, r) {
  return e?.[r];
}
function Us(e, r) {
  var t = GS(e, r);
  return BS(t) ? t : void 0;
}
var wl = (function() {
  try {
    var e = Us(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})();
function US(e, r, t) {
  r == "__proto__" && wl ? wl(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
function am(e, r) {
  return e === r || e !== e && r !== r;
}
var XS = Object.prototype, HS = XS.hasOwnProperty;
function VS(e, r, t) {
  var n = e[r];
  (!(HS.call(e, r) && am(n, t)) || t === void 0 && !(r in e)) && US(e, r, t);
}
var Xs = Array.isArray;
function JS(e) {
  return e != null && typeof e == "object";
}
var YS = "[object Symbol]";
function Hs(e) {
  return typeof e == "symbol" || JS(e) && im(e) == YS;
}
var KS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, QS = /^\w*$/;
function ZS(e, r) {
  if (Xs(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || Hs(e) ? !0 : QS.test(e) || !KS.test(e) || r != null && e in Object(r);
}
var Fr = Us(Object, "create");
function ej() {
  this.__data__ = Fr ? Fr(null) : {}, this.size = 0;
}
function tj(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var rj = "__lodash_hash_undefined__", nj = Object.prototype, ij = nj.hasOwnProperty;
function aj(e) {
  var r = this.__data__;
  if (Fr) {
    var t = r[e];
    return t === rj ? void 0 : t;
  }
  return ij.call(r, e) ? r[e] : void 0;
}
var sj = Object.prototype, oj = sj.hasOwnProperty;
function uj(e) {
  var r = this.__data__;
  return Fr ? r[e] !== void 0 : oj.call(r, e);
}
var lj = "__lodash_hash_undefined__";
function cj(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Fr && r === void 0 ? lj : r, this;
}
function Tt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Tt.prototype.clear = ej;
Tt.prototype.delete = tj;
Tt.prototype.get = aj;
Tt.prototype.has = uj;
Tt.prototype.set = cj;
function fj() {
  this.__data__ = [], this.size = 0;
}
function Un(e, r) {
  for (var t = e.length; t--; )
    if (am(e[t][0], r))
      return t;
  return -1;
}
var pj = Array.prototype, yj = pj.splice;
function dj(e) {
  var r = this.__data__, t = Un(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : yj.call(r, t, 1), --this.size, !0;
}
function hj(e) {
  var r = this.__data__, t = Un(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function mj(e) {
  return Un(this.__data__, e) > -1;
}
function vj(e, r) {
  var t = this.__data__, n = Un(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function ar(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
ar.prototype.clear = fj;
ar.prototype.delete = dj;
ar.prototype.get = hj;
ar.prototype.has = mj;
ar.prototype.set = vj;
var gj = Us(Gs, "Map");
function bj() {
  this.size = 0, this.__data__ = {
    hash: new Tt(),
    map: new (gj || ar)(),
    string: new Tt()
  };
}
function wj(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Xn(e, r) {
  var t = e.__data__;
  return wj(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function kj(e) {
  var r = Xn(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function _j(e) {
  return Xn(this, e).get(e);
}
function xj(e) {
  return Xn(this, e).has(e);
}
function Ej(e, r) {
  var t = Xn(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function Bt(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Bt.prototype.clear = bj;
Bt.prototype.delete = kj;
Bt.prototype.get = _j;
Bt.prototype.has = xj;
Bt.prototype.set = Ej;
var Aj = "Expected a function";
function Vs(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Aj);
  var t = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], a = t.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return t.cache = a.set(i, s) || a, s;
  };
  return t.cache = new (Vs.Cache || Bt)(), t;
}
Vs.Cache = Bt;
var Oj = 500;
function Sj(e) {
  var r = Vs(e, function(n) {
    return t.size === Oj && t.clear(), n;
  }), t = r.cache;
  return r;
}
var jj = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pj = /\\(\\)?/g, Mj = Sj(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(jj, function(t, n, i, a) {
    r.push(i ? a.replace(Pj, "$1") : n || t);
  }), r;
});
function Dj(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; )
    i[t] = r(e[t], t, e);
  return i;
}
var kl = Qt ? Qt.prototype : void 0, _l = kl ? kl.toString : void 0;
function sm(e) {
  if (typeof e == "string")
    return e;
  if (Xs(e))
    return Dj(e, sm) + "";
  if (Hs(e))
    return _l ? _l.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function $j(e) {
  return e == null ? "" : sm(e);
}
function om(e, r) {
  return Xs(e) ? e : ZS(e, r) ? [e] : Mj($j(e));
}
var qj = 9007199254740991, Ij = /^(?:0|[1-9]\d*)$/;
function Rj(e, r) {
  var t = typeof e;
  return r = r ?? qj, !!r && (t == "number" || t != "symbol" && Ij.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function um(e) {
  if (typeof e == "string" || Hs(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function Fj(e, r, t, n) {
  if (!bn(e))
    return e;
  r = om(r, e);
  for (var i = -1, a = r.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var u = um(r[i]), l = t;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != s) {
      var c = o[u];
      l = void 0, l === void 0 && (l = bn(c) ? c : Rj(r[i + 1]) ? [] : {});
    }
    VS(o, u, l), o = o[u];
  }
  return e;
}
function lm(e, r, t) {
  return e == null ? e : Fj(e, r, t);
}
var Tj = class cm extends Error {
  status = 500;
  constructor(r, t = 500) {
    super(r), this.name = "BaseException", this.status = t;
  }
  static fromError(r) {
    return new cm(r.message, 500);
  }
};
function Nj(e, r) {
  r = om(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[um(r[t++])];
  return t && t == n ? e : void 0;
}
function Cj(e, r, t) {
  var n = e == null ? void 0 : Nj(e, r);
  return n === void 0 ? t : n;
}
async function fm(e) {
  try {
    return [null, await e()];
  } catch (r) {
    return [r, null];
  }
}
fm.sync = function(e) {
  try {
    return [null, e()];
  } catch (r) {
    return [r, null];
  }
};
var Lj = class {
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
  async onRegister() {
  }
  async onLoad() {
  }
  async onBoot() {
  }
  async onShutdown() {
  }
}, xl = Object.defineProperty, Wj = (e, r) => {
  let t = {};
  for (var n in e) xl(t, n, { get: e[n], enumerable: !0 });
  return xl(t, Symbol.toStringTag, { value: "Module" }), t;
};
let Jt;
function zj(e) {
  Jt = {
    ...Jt,
    ...e
  };
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return {
    lang: e?.lang ?? Jt?.lang,
    message: e?.message,
    abortEarly: e?.abortEarly ?? Jt?.abortEarly,
    abortPipeEarly: e?.abortPipeEarly ?? Jt?.abortPipeEarly
  };
}
function Bj() {
  Jt = void 0;
}
let Mr;
function Gj(e, r) {
  Mr || (Mr = /* @__PURE__ */ new Map()), Mr.set(r, e);
}
// @__NO_SIDE_EFFECTS__
function pm(e) {
  return Mr?.get(e);
}
function Uj(e) {
  Mr?.delete(e);
}
let Dr;
function Xj(e, r) {
  Dr || (Dr = /* @__PURE__ */ new Map()), Dr.set(r, e);
}
// @__NO_SIDE_EFFECTS__
function ym(e) {
  return Dr?.get(e);
}
function Hj(e) {
  Dr?.delete(e);
}
let It;
function Vj(e, r, t) {
  It || (It = /* @__PURE__ */ new Map()), It.get(e) || It.set(e, /* @__PURE__ */ new Map()), It.get(e).set(t, r);
}
// @__NO_SIDE_EFFECTS__
function dm(e, r) {
  return It?.get(e)?.get(r);
}
function Jj(e, r) {
  It?.get(e)?.delete(r);
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const r = typeof e;
  return r === "string" ? `"${e}"` : r === "number" || r === "bigint" || r === "boolean" ? `${e}` : r === "object" || r === "function" ? (e && Object.getPrototypeOf(e)?.constructor?.name) ?? "null" : r;
}
function _(e, r, t, n, i) {
  const a = i && "input" in i ? i.input : t.value, s = i?.expected ?? e.expects ?? null, o = i?.received ?? /* @__PURE__ */ me(a), u = {
    kind: e.kind,
    type: e.type,
    input: a,
    expected: s,
    received: o,
    message: `Invalid ${r}: ${s ? `Expected ${s} but r` : "R"}eceived ${o}`,
    requirement: e.requirement,
    path: i?.path,
    issues: i?.issues,
    lang: n.lang,
    abortEarly: n.abortEarly,
    abortPipeEarly: n.abortPipeEarly
  }, l = e.kind === "schema", c = i?.message ?? e.message ?? /* @__PURE__ */ dm(e.reference, u.lang) ?? (l ? /* @__PURE__ */ ym(u.lang) : null) ?? n.message ?? /* @__PURE__ */ pm(u.lang);
  c !== void 0 && (u.message = typeof c == "function" ? c(u) : c), l && (t.typed = !1), t.issues ? t.issues.push(u) : t.issues = [u];
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return {
    typed: e.typed,
    value: e.value,
    issues: e.issues && [...e.issues]
  };
}
let Wi;
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return Wi || (Wi = new TextEncoder()), Wi.encode(e).length;
}
let zi;
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  zi || (zi = new Intl.Segmenter());
  const r = zi.segment(e);
  let t = 0;
  for (const n of r) t++;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Hn(e, r) {
  if ("pipe" in e) {
    const t = [];
    for (let n = e.pipe.length - 1; n >= 0; n--) {
      const i = e.pipe[n];
      if (i.kind === "schema" && "pipe" in i) t.push(i);
      else if (i.kind === "metadata" && i.type === r) return i[r];
    }
    for (const n of t) {
      const i = /* @__PURE__ */ Hn(n, r);
      if (i !== void 0) return i;
    }
  }
}
// @__NO_SIDE_EFFECTS__
function T(e) {
  return {
    version: 1,
    vendor: "valibot",
    validate(r) {
      return e["~run"]({ value: r }, /* @__PURE__ */ sr());
    }
  };
}
let xr;
// @__NO_SIDE_EFFECTS__
function Kr(e, r) {
  xr || (xr = /* @__PURE__ */ new Map()), xr.get(e) || xr.set(e, new Intl.Segmenter(e, { granularity: "word" }));
  const t = xr.get(e).segment(r);
  let n = 0;
  for (const i of t) i.isWordLike && n++;
  return n;
}
const Yj = /\D/gu;
// @__NO_SIDE_EFFECTS__
function Js(e) {
  const r = e.replace(Yj, "");
  let t = r.length, n = 1, i = 0;
  for (; t; ) {
    const a = +r[--t];
    n ^= 1, i += n ? [
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
    ][a] : a;
  }
  return i % 10 === 0;
}
// @__NO_SIDE_EFFECTS__
function Gt(e, r) {
  return Object.hasOwn(e, r) && r !== "__proto__" && r !== "prototype" && r !== "constructor";
}
// @__NO_SIDE_EFFECTS__
function Ce(e, r) {
  const t = [...new Set(e)];
  return t.length > 1 ? `(${t.join(` ${r} `)})` : t[0] ?? "never";
}
// @__NO_SIDE_EFFECTS__
function Kj(e, r) {
  const t = {};
  for (const n of e) t[n] = r;
  return t;
}
// @__NO_SIDE_EFFECTS__
function Qj(e) {
  const r = {};
  for (const t of e) Object.assign(r, t.entries);
  return r;
}
// @__NO_SIDE_EFFECTS__
function Ys(e) {
  if (e.path) {
    let r = "";
    for (const t of e.path) if (typeof t.key == "string" || typeof t.key == "number") r ? r += `.${t.key}` : r += t.key;
    else return null;
    return r;
  }
  return null;
}
// @__NO_SIDE_EFFECTS__
function Zj(e, r) {
  return r.kind === e;
}
// @__NO_SIDE_EFFECTS__
function eP(e, r) {
  return r.type === e;
}
// @__NO_SIDE_EFFECTS__
function tP(e) {
  return e instanceof ot;
}
var ot = class extends Error {
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
function hm(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: hm,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = (...i) => {
        const a = this.schema["~run"]({ value: i }, t);
        if (a.issues) throw new ot(a.issues);
        return n(...a.value);
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mm(e) {
  return {
    kind: "transformation",
    type: "args",
    reference: mm,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = async (...i) => {
        const a = await e["~run"]({ value: i }, t);
        if (a.issues) throw new ot(a.issues);
        return n(...a.value);
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vm() {
  return {
    kind: "transformation",
    type: "await",
    reference: vm,
    async: !0,
    async "~run"(e) {
      return e.value = await e.value, e;
    }
  };
}
const gm = /^(?:[\da-z+/]{4})*(?:[\da-z+/]{2}==|[\da-z+/]{3}=)?$/iu, bm = /^[A-Z]{6}(?!00)[\dA-Z]{2}(?:[\dA-Z]{3})?$/u, wm = /^[a-z][\da-z]*$/u, km = /^[+-]?(?:\d*\.)?\d+$/u, _m = /^\d+$/u, xm = /^(?=.{1,253}$)(?:(?![Xx][Nn]--)[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/u, Em = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu, Am = new RegExp("^(?:[\\u{1F1E6}-\\u{1F1FF}]{2}|\\u{1F3F4}[\\u{E0061}-\\u{E007A}]{2}[\\u{E0030}-\\u{E0039}\\u{E0061}-\\u{E007A}]{1,3}\\u{E007F}|(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation})(?:\\u200D(?:\\p{Emoji}\\uFE0F\\u20E3?|\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|(?![\\p{Emoji_Modifier_Base}\\u{1F1E6}-\\u{1F1FF}])\\p{Emoji_Presentation}))*)+$", "u"), Om = /^(?:0[hx])?[\da-fA-F]+$/u, Sm = /^#(?:[\da-fA-F]{3,4}|[\da-fA-F]{6}|[\da-fA-F]{8})$/u, jm = /^\d{15}$|^\d{2}-\d{6}-\d{6}-\d$/u, Pm = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u, Mm = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, Dm = /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$|^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu, $m = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u, qm = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3]):[0-5]\d$/u, Im = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u, Rm = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u, Fm = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?(?:Z| ?[+-](?:0\d|1\d|2[0-3])(?::?[0-5]\d)?)$/u, Tm = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u, Nm = /^(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?\.(?:[\w-]{2,3}|(?:[\w-]{4})+(?:[\w-]{2,3})?)?$/u, Cm = /^(?:[A-Z]{2}[A-Z\d]{3}\d{7}|[A-Z]{2}-[A-Z\d]{3}-\d{2}-\d{5})$/u, Lm = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$/u, Wm = /^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, zm = /^(?:[\da-fA-F]{2}:){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){5}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){2}[\da-fA-F]{4}$|^(?:[\da-fA-F]{2}:){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{2}-){7}[\da-fA-F]{2}$|^(?:[\da-fA-F]{4}\.){3}[\da-fA-F]{4}$|^(?:[\da-fA-F]{4}:){3}[\da-fA-F]{4}$/u, Bm = /^[\w-]+$/u, Gm = /^(?:0o)?[0-7]+$/u, Um = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Xm = /^[\da-z]+(?:[-_][\da-z]+)*$/u, Hm = /^[\da-hjkmnp-tv-zA-HJKMNP-TV-Z]{26}$/u, Vm = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;
// @__NO_SIDE_EFFECTS__
function Jm(e) {
  return {
    kind: "validation",
    type: "base64",
    reference: Jm,
    async: !1,
    expects: null,
    requirement: gm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "Base64", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ym(e) {
  return {
    kind: "validation",
    type: "bic",
    reference: Ym,
    async: !1,
    expects: null,
    requirement: bm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "BIC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Km(e) {
  return {
    kind: "transformation",
    type: "brand",
    reference: Km,
    async: !1,
    name: e,
    "~run"(r) {
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qm(e, r) {
  return {
    kind: "validation",
    type: "bytes",
    reference: Qm,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Jr(t.value);
        i !== this.requirement && _(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zm(e, r) {
  return {
    kind: "validation",
    type: "check",
    reference: Zm,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement(t.value) && _(this, "input", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ev(e, r) {
  return {
    kind: "validation",
    type: "check",
    reference: ev,
    async: !0,
    expects: null,
    requirement: e,
    message: r,
    async "~run"(t, n) {
      return t.typed && !await this.requirement(t.value) && _(this, "input", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tv(e, r) {
  return {
    kind: "validation",
    type: "check_items",
    reference: tv,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) for (let i = 0; i < t.value.length; i++) {
        const a = t.value[i];
        this.requirement(a, i, t.value) || _(this, "item", t, n, {
          input: a,
          path: [{
            type: "array",
            origin: "value",
            input: t.value,
            key: i,
            value: a
          }]
        });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rv(e, r) {
  return {
    kind: "validation",
    type: "check_items",
    reference: rv,
    async: !0,
    expects: null,
    requirement: e,
    message: r,
    async "~run"(t, n) {
      if (t.typed) {
        const i = await Promise.all(t.value.map(this.requirement));
        for (let a = 0; a < t.value.length; a++) if (!i[a]) {
          const s = t.value[a];
          _(this, "item", t, n, {
            input: s,
            path: [{
              type: "array",
              origin: "value",
              input: t.value,
              key: a,
              value: s
            }]
          });
        }
      }
      return t;
    }
  };
}
const rP = /^(?:\d{13,19}|\d{4}(?: \d{3,6}){2,4}|\d{4}(?:-\d{3,6}){2,4})$/u, nP = /[- ]/gu, iP = [
  /^3[47]\d{13}$/u,
  /^3(?:0[0-5]|[68]\d)\d{11,13}$/u,
  /^6(?:011|5\d{2})\d{12,15}$/u,
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  /^5[1-5]\d{2}|(?:222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  /^(?:6[27]\d{14,17}|81\d{14,17})$/u,
  /^4\d{12}(?:\d{3,6})?$/u
];
// @__NO_SIDE_EFFECTS__
function nv(e) {
  return {
    kind: "validation",
    type: "credit_card",
    reference: nv,
    async: !1,
    expects: null,
    requirement(r) {
      let t;
      return rP.test(r) && (t = r.replace(nP, "")) && iP.some((n) => n.test(t)) && /* @__PURE__ */ Js(t);
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "credit card", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iv(e) {
  return {
    kind: "validation",
    type: "cuid2",
    reference: iv,
    async: !1,
    expects: null,
    requirement: wm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "Cuid2", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function av(e) {
  return {
    kind: "validation",
    type: "decimal",
    reference: av,
    async: !1,
    expects: null,
    requirement: km,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "decimal", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sv(e) {
  return {
    kind: "metadata",
    type: "description",
    reference: sv,
    description: e
  };
}
// @__NO_SIDE_EFFECTS__
function ov(e) {
  return {
    kind: "validation",
    type: "digits",
    reference: ov,
    async: !1,
    expects: null,
    requirement: _m,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "digits", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function uv(e) {
  return {
    kind: "validation",
    type: "domain",
    reference: uv,
    expects: null,
    async: !1,
    requirement: xm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "domain", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lv(e) {
  return {
    kind: "validation",
    type: "email",
    reference: lv,
    expects: null,
    async: !1,
    requirement: Em,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "email", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cv(e) {
  return {
    kind: "validation",
    type: "emoji",
    reference: cv,
    async: !1,
    expects: null,
    requirement: Am,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "emoji", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fv(e) {
  return {
    kind: "validation",
    type: "empty",
    reference: fv,
    async: !1,
    expects: "0",
    message: e,
    "~run"(r, t) {
      return r.typed && r.value.length > 0 && _(this, "length", r, t, { received: `${r.value.length}` }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pv(e, r) {
  return {
    kind: "validation",
    type: "ends_with",
    reference: pv,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.endsWith(this.requirement) && _(this, "end", t, n, { received: `"${t.value.slice(-this.requirement.length)}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yv(e, r) {
  return {
    kind: "validation",
    type: "entries",
    reference: yv,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i !== this.requirement && _(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dv(e, r) {
  return {
    kind: "validation",
    type: "every_item",
    reference: dv,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.every(this.requirement) && _(this, "item", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hv(e) {
  return {
    kind: "metadata",
    type: "examples",
    reference: hv,
    examples: e
  };
}
// @__NO_SIDE_EFFECTS__
function mv(e, r) {
  const t = /* @__PURE__ */ me(e);
  return {
    kind: "validation",
    type: "excludes",
    reference: mv,
    async: !1,
    expects: `!${t}`,
    requirement: e,
    message: r,
    "~run"(n, i) {
      return n.typed && n.value.includes(this.requirement) && _(this, "content", n, i, { received: t }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vv(e) {
  return {
    kind: "transformation",
    type: "filter_items",
    reference: vv,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.filter(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gv(e) {
  return {
    kind: "transformation",
    type: "find_item",
    reference: gv,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.find(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bv(e) {
  return {
    kind: "validation",
    type: "finite",
    reference: bv,
    async: !1,
    expects: null,
    requirement: Number.isFinite,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "finite", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wv(e) {
  return {
    kind: "transformation",
    type: "flavor",
    reference: wv,
    async: !1,
    name: e,
    "~run"(r) {
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kv(e, r) {
  return {
    kind: "validation",
    type: "graphemes",
    reference: kv,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Yr(t.value);
        i !== this.requirement && _(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _v(e, r) {
  return {
    kind: "validation",
    type: "gt_value",
    reference: _v,
    async: !1,
    expects: `>${e instanceof Date ? e.toJSON() : /* @__PURE__ */ me(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value > this.requirement) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xv(e, r) {
  return {
    kind: "transformation",
    type: "guard",
    reference: xv,
    async: !1,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement(t.value) && (_(this, "input", t, n), t.typed = !1), t;
    }
  };
}
const aP = {
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
function Ev(e, r) {
  return {
    kind: "validation",
    type: "hash",
    reference: Ev,
    expects: null,
    async: !1,
    requirement: RegExp(e.map((t) => `^[a-fA-F0-9]{${aP[t]}}$`).join("|"), "u"),
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.test(t.value) && _(this, "hash", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Av(e) {
  return {
    kind: "validation",
    type: "hexadecimal",
    reference: Av,
    async: !1,
    expects: null,
    requirement: Om,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "hexadecimal", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ov(e) {
  return {
    kind: "validation",
    type: "hex_color",
    reference: Ov,
    async: !1,
    expects: null,
    requirement: Sm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "hex color", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sv(e) {
  return {
    kind: "validation",
    type: "imei",
    reference: Sv,
    async: !1,
    expects: null,
    requirement(r) {
      return jm.test(r) && /* @__PURE__ */ Js(r);
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "IMEI", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jv(e, r) {
  const t = /* @__PURE__ */ me(e);
  return {
    kind: "validation",
    type: "includes",
    reference: jv,
    async: !1,
    expects: t,
    requirement: e,
    message: r,
    "~run"(n, i) {
      return n.typed && !n.value.includes(this.requirement) && _(this, "content", n, i, { received: `!${t}` }), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return {
    kind: "validation",
    type: "integer",
    reference: Ks,
    async: !1,
    expects: null,
    requirement: Number.isInteger,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "integer", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pv(e) {
  return {
    kind: "validation",
    type: "ip",
    reference: Pv,
    async: !1,
    expects: null,
    requirement: Dm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "IP", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mv(e) {
  return {
    kind: "validation",
    type: "ipv4",
    reference: Mv,
    async: !1,
    expects: null,
    requirement: Pm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "IPv4", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dv(e) {
  return {
    kind: "validation",
    type: "ipv6",
    reference: Dv,
    async: !1,
    expects: null,
    requirement: Mm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "IPv6", r, t), r;
    }
  };
}
function sP(e) {
  const r = e.split("").map((n) => n === "X" ? 10 : parseInt(n));
  let t = 0;
  for (let n = 0; n < 10; n++) t += r[n] * (10 - n);
  return t % 11 === 0;
}
function oP(e) {
  const r = e.split("").map((n) => parseInt(n));
  let t = 0;
  for (let n = 0; n < 13; n++) t += r[n] * (n % 2 === 0 ? 1 : 3);
  return t % 10 === 0;
}
const uP = /[- ]/gu, lP = /^\d{9}[\dX]$/u, cP = /^\d{13}$/u;
// @__NO_SIDE_EFFECTS__
function $v(e) {
  return {
    kind: "validation",
    type: "isbn",
    reference: $v,
    async: !1,
    expects: null,
    requirement(r) {
      const t = r.replace(uP, "");
      return lP.test(t) ? sP(t) : cP.test(t) ? oP(t) : !1;
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "ISBN", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qv(e) {
  return {
    kind: "validation",
    type: "isrc",
    reference: qv,
    async: !1,
    expects: null,
    requirement: Cm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "ISRC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Iv(e) {
  return {
    kind: "validation",
    type: "iso_date",
    reference: Iv,
    async: !1,
    expects: null,
    requirement: $m,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "date", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rv(e) {
  return {
    kind: "validation",
    type: "iso_date_time",
    reference: Rv,
    async: !1,
    expects: null,
    requirement: qm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "date-time", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fv(e) {
  return {
    kind: "validation",
    type: "iso_time",
    reference: Fv,
    async: !1,
    expects: null,
    requirement: Im,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "time", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tv(e) {
  return {
    kind: "validation",
    type: "iso_time_second",
    reference: Tv,
    async: !1,
    expects: null,
    requirement: Rm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "time-second", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nv(e) {
  return {
    kind: "validation",
    type: "iso_timestamp",
    reference: Nv,
    async: !1,
    expects: null,
    requirement: Fm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "timestamp", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cv(e) {
  return {
    kind: "validation",
    type: "iso_week",
    reference: Cv,
    async: !1,
    expects: null,
    requirement: Tm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "week", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lv(e) {
  return {
    kind: "validation",
    type: "jws_compact",
    reference: Lv,
    async: !1,
    expects: null,
    requirement: Nm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "JWS compact", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wv(e, r) {
  return {
    kind: "validation",
    type: "length",
    reference: Wv,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length !== this.requirement && _(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zv(e, r) {
  return {
    kind: "validation",
    type: "lt_value",
    reference: zv,
    async: !1,
    expects: `<${e instanceof Date ? e.toJSON() : /* @__PURE__ */ me(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value < this.requirement) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bv(e) {
  return {
    kind: "validation",
    type: "mac",
    reference: Bv,
    async: !1,
    expects: null,
    requirement: zm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gv(e) {
  return {
    kind: "validation",
    type: "mac48",
    reference: Gv,
    async: !1,
    expects: null,
    requirement: Lm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "48-bit MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Uv(e) {
  return {
    kind: "validation",
    type: "mac64",
    reference: Uv,
    async: !1,
    expects: null,
    requirement: Wm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "64-bit MAC", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xv(e) {
  return {
    kind: "transformation",
    type: "map_items",
    reference: Xv,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.map(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hv(e, r) {
  return {
    kind: "validation",
    type: "max_bytes",
    reference: Hv,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Jr(t.value);
        i > this.requirement && _(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vv(e, r) {
  return {
    kind: "validation",
    type: "max_entries",
    reference: Vv,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i > this.requirement && _(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jv(e, r) {
  return {
    kind: "validation",
    type: "max_graphemes",
    reference: Jv,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Yr(t.value);
        i > this.requirement && _(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yv(e, r) {
  return {
    kind: "validation",
    type: "max_length",
    reference: Yv,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length > this.requirement && _(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kv(e, r) {
  return {
    kind: "validation",
    type: "max_size",
    reference: Kv,
    async: !1,
    expects: `<=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size > this.requirement && _(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qv(e, r) {
  return {
    kind: "validation",
    type: "max_value",
    reference: Qv,
    async: !1,
    expects: `<=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ me(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value <= this.requirement) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zv(e, r, t) {
  return {
    kind: "validation",
    type: "max_words",
    reference: Zv,
    async: !1,
    expects: `<=${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Kr(this.locales, n.value);
        a > this.requirement && _(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eg(e) {
  return {
    kind: "metadata",
    type: "metadata",
    reference: eg,
    metadata: e
  };
}
// @__NO_SIDE_EFFECTS__
function tg(e, r) {
  return {
    kind: "validation",
    type: "mime_type",
    reference: tg,
    async: !1,
    expects: /* @__PURE__ */ Ce(e.map((t) => `"${t}"`), "|"),
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.includes(t.value.type) && _(this, "MIME type", t, n, { received: `"${t.value.type}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rg(e, r) {
  return {
    kind: "validation",
    type: "min_bytes",
    reference: rg,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Jr(t.value);
        i < this.requirement && _(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ng(e, r) {
  return {
    kind: "validation",
    type: "min_entries",
    reference: ng,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i < this.requirement && _(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ig(e, r) {
  return {
    kind: "validation",
    type: "min_graphemes",
    reference: ig,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Yr(t.value);
        i < this.requirement && _(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ag(e, r) {
  return {
    kind: "validation",
    type: "min_length",
    reference: ag,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length < this.requirement && _(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sg(e, r) {
  return {
    kind: "validation",
    type: "min_size",
    reference: sg,
    async: !1,
    expects: `>=${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size < this.requirement && _(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function og(e, r) {
  return {
    kind: "validation",
    type: "min_value",
    reference: og,
    async: !1,
    expects: `>=${e instanceof Date ? e.toJSON() : /* @__PURE__ */ me(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(t.value >= this.requirement) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ug(e, r, t) {
  return {
    kind: "validation",
    type: "min_words",
    reference: ug,
    async: !1,
    expects: `>=${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Kr(this.locales, n.value);
        a < this.requirement && _(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lg(e, r) {
  return {
    kind: "validation",
    type: "multiple_of",
    reference: lg,
    async: !1,
    expects: `%${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value % this.requirement != 0 && _(this, "multiple", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cg(e) {
  return {
    kind: "validation",
    type: "nanoid",
    reference: cg,
    async: !1,
    expects: null,
    requirement: Bm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "Nano ID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fg(e) {
  return {
    kind: "validation",
    type: "non_empty",
    reference: fg,
    async: !1,
    expects: "!0",
    message: e,
    "~run"(r, t) {
      return r.typed && r.value.length === 0 && _(this, "length", r, t, { received: "0" }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pg(e) {
  return {
    kind: "transformation",
    type: "normalize",
    reference: pg,
    async: !1,
    form: e,
    "~run"(r) {
      return r.value = r.value.normalize(this.form), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yg(e, r) {
  return {
    kind: "validation",
    type: "not_bytes",
    reference: yg,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Jr(t.value);
        i === this.requirement && _(this, "bytes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dg(e, r) {
  return {
    kind: "validation",
    type: "not_entries",
    reference: dg,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (!t.typed) return t;
      const i = Object.keys(t.value).length;
      return t.typed && i === this.requirement && _(this, "entries", t, n, { received: `${i}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hg(e, r) {
  return {
    kind: "validation",
    type: "not_graphemes",
    reference: hg,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      if (t.typed) {
        const i = /* @__PURE__ */ Yr(t.value);
        i === this.requirement && _(this, "graphemes", t, n, { received: `${i}` });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mg(e, r) {
  return {
    kind: "validation",
    type: "not_length",
    reference: mg,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.length === this.requirement && _(this, "length", t, n, { received: `${t.value.length}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vg(e, r) {
  return {
    kind: "validation",
    type: "not_size",
    reference: vg,
    async: !1,
    expects: `!${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size === this.requirement && _(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gg(e, r) {
  return {
    kind: "validation",
    type: "not_value",
    reference: gg,
    async: !1,
    expects: e instanceof Date ? `!${e.toJSON()}` : `!${/* @__PURE__ */ me(e)}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && this.requirement <= t.value && this.requirement >= t.value && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bg(e, r) {
  return {
    kind: "validation",
    type: "not_values",
    reference: bg,
    async: !1,
    expects: `!${/* @__PURE__ */ Ce(e.map((t) => t instanceof Date ? t.toJSON() : /* @__PURE__ */ me(t)), "|")}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && this.requirement.some((i) => i <= t.value && i >= t.value) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function wg(e, r, t) {
  return {
    kind: "validation",
    type: "not_words",
    reference: wg,
    async: !1,
    expects: `!${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Kr(this.locales, n.value);
        a === this.requirement && _(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kg(e) {
  return {
    kind: "validation",
    type: "octal",
    reference: kg,
    async: !1,
    expects: null,
    requirement: Gm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "octal", r, t), r;
    }
  };
}
const El = [
  !0,
  1,
  "true",
  "1",
  "yes",
  "y",
  "on",
  "enabled"
], Al = [
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
function _g(e, r) {
  const t = (o) => typeof o == "string" ? o.toLowerCase() : o, n = e?.truthy ?? El, i = e?.falsy ?? Al, a = e?.truthy ? e.truthy.map(t) : El, s = e?.falsy ? e.falsy.map(t) : Al;
  return {
    kind: "transformation",
    type: "parse_boolean",
    reference: _g,
    expects: /* @__PURE__ */ Ce([...n, ...i].map(me), "|"),
    config: e,
    message: r,
    async: !1,
    "~run"(o, u) {
      const l = t(o.value);
      return a.includes(l) ? o.value = !0 : s.includes(l) ? o.value = !1 : (_(this, "boolean", o, u), o.typed = !1), o;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xg(e, r) {
  return {
    kind: "transformation",
    type: "parse_json",
    reference: xg,
    config: e,
    message: r,
    async: !1,
    "~run"(t, n) {
      try {
        t.value = JSON.parse(t.value, this.config?.reviver);
      } catch (i) {
        if (i instanceof Error)
          _(this, "JSON", t, n, { received: `"${i.message}"` }), t.typed = !1;
        else throw i;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eg(e, r) {
  if (e.issues) for (const t of r) for (const n of e.issues) {
    let i = !1;
    const a = Math.min(t.length, n.path?.length ?? 0);
    for (let s = 0; s < a; s++) if (t[s] !== n.path[s].key && (t[s] !== "$" || n.path[s].type !== "array")) {
      i = !0;
      break;
    }
    if (!i) return !1;
  }
  return !0;
}
// @__NO_SIDE_EFFECTS__
function Ag(e, r, t) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Ag,
    async: !1,
    expects: null,
    paths: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ Eg(n, e)) && !this.requirement(n.value) && _(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Og(e, r, t) {
  return {
    kind: "validation",
    type: "partial_check",
    reference: Og,
    async: !0,
    expects: null,
    paths: e,
    requirement: r,
    message: t,
    async "~run"(n, i) {
      return (n.typed || /* @__PURE__ */ Eg(n, e)) && !await this.requirement(n.value) && _(this, "input", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sg(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: Sg,
    async: !1,
    expects: null,
    "~run"(r, t) {
      return e({
        dataset: r,
        config: t,
        addIssue: (n) => _(this, n?.label ?? "input", r, t, n)
      }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jg(e) {
  return {
    kind: "validation",
    type: "raw_check",
    reference: jg,
    async: !0,
    expects: null,
    async "~run"(r, t) {
      return await e({
        dataset: r,
        config: t,
        addIssue: (n) => _(this, n?.label ?? "input", r, t, n)
      }), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pg(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Pg,
    async: !1,
    "~run"(r, t) {
      const n = e({
        dataset: r,
        config: t,
        addIssue: (i) => _(this, i?.label ?? "input", r, t, i),
        NEVER: null
      });
      return r.issues ? r.typed = !1 : r.value = n, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mg(e) {
  return {
    kind: "transformation",
    type: "raw_transform",
    reference: Mg,
    async: !0,
    async "~run"(r, t) {
      const n = await e({
        dataset: r,
        config: t,
        addIssue: (i) => _(this, i?.label ?? "input", r, t, i),
        NEVER: null
      });
      return r.issues ? r.typed = !1 : r.value = n, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Dg() {
  return {
    kind: "transformation",
    type: "readonly",
    reference: Dg,
    async: !1,
    "~run"(e) {
      return e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $g(e, r) {
  return {
    kind: "transformation",
    type: "reduce_items",
    reference: $g,
    async: !1,
    operation: e,
    initial: r,
    "~run"(t) {
      return t.value = t.value.reduce(this.operation, this.initial), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qg(e, r) {
  return {
    kind: "validation",
    type: "regex",
    reference: qg,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.test(t.value) && _(this, "format", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ig(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Ig,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = (...i) => {
        const a = this.schema["~run"]({ value: n(...i) }, t);
        if (a.issues) throw new ot(a.issues);
        return a.value;
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rg(e) {
  return {
    kind: "transformation",
    type: "returns",
    reference: Rg,
    async: !1,
    schema: e,
    "~run"(r, t) {
      const n = r.value;
      return r.value = async (...i) => {
        const a = await this.schema["~run"]({ value: await n(...i) }, t);
        if (a.issues) throw new ot(a.issues);
        return a.value;
      }, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fg(e) {
  return {
    kind: "validation",
    type: "rfc_email",
    reference: Fg,
    expects: null,
    async: !1,
    requirement: Um,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "email", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tg(e) {
  return {
    kind: "validation",
    type: "safe_integer",
    reference: Tg,
    async: !1,
    expects: null,
    requirement: Number.isSafeInteger,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "safe integer", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ng(e, r) {
  return {
    kind: "validation",
    type: "size",
    reference: Ng,
    async: !1,
    expects: `${e}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && t.value.size !== this.requirement && _(this, "size", t, n, { received: `${t.value.size}` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cg(e) {
  return {
    kind: "validation",
    type: "slug",
    reference: Cg,
    async: !1,
    expects: null,
    requirement: Xm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "slug", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lg(e, r) {
  return {
    kind: "validation",
    type: "some_item",
    reference: Lg,
    async: !1,
    expects: null,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.some(this.requirement) && _(this, "item", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wg(e) {
  return {
    kind: "transformation",
    type: "sort_items",
    reference: Wg,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = r.value.sort(this.operation), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zg(e, r) {
  return {
    kind: "validation",
    type: "starts_with",
    reference: zg,
    async: !1,
    expects: `"${e}"`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !t.value.startsWith(this.requirement) && _(this, "start", t, n, { received: `"${t.value.slice(0, this.requirement.length)}"` }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bg(e, r) {
  return {
    kind: "transformation",
    type: "stringify_json",
    reference: Bg,
    message: r,
    config: e,
    async: !1,
    "~run"(t, n) {
      try {
        const i = JSON.stringify(t.value, this.config?.replacer, this.config?.space);
        i === void 0 && (_(this, "JSON", t, n), t.typed = !1), t.value = i;
      } catch (i) {
        if (i instanceof Error)
          _(this, "JSON", t, n, { received: `"${i.message}"` }), t.typed = !1;
        else throw i;
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gg(e) {
  return {
    kind: "metadata",
    type: "title",
    reference: Gg,
    title: e
  };
}
// @__NO_SIDE_EFFECTS__
function Ug(e) {
  return {
    kind: "transformation",
    type: "to_bigint",
    reference: Ug,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = BigInt(r.value);
      } catch {
        _(this, "bigint", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xg() {
  return {
    kind: "transformation",
    type: "to_boolean",
    reference: Xg,
    async: !1,
    "~run"(e) {
      return e.value = !!e.value, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hg(e) {
  return {
    kind: "transformation",
    type: "to_date",
    reference: Hg,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = new Date(r.value), isNaN(r.value) && (_(this, "date", r, t, { received: '"Invalid Date"' }), r.typed = !1);
      } catch {
        _(this, "date", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vg() {
  return {
    kind: "transformation",
    type: "to_lower_case",
    reference: Vg,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toLowerCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jg(e) {
  return {
    kind: "transformation",
    type: "to_max_value",
    reference: Jg,
    async: !1,
    requirement: e,
    "~run"(r) {
      return r.value = r.value > this.requirement ? this.requirement : r.value, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yg(e) {
  return {
    kind: "transformation",
    type: "to_min_value",
    reference: Yg,
    async: !1,
    requirement: e,
    "~run"(r) {
      return r.value = r.value < this.requirement ? this.requirement : r.value, r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kg(e) {
  return {
    kind: "transformation",
    type: "to_number",
    reference: Kg,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = Number(r.value), isNaN(r.value) && (_(this, "number", r, t), r.typed = !1);
      } catch {
        _(this, "number", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qg(e) {
  return {
    kind: "transformation",
    type: "to_string",
    reference: Qg,
    async: !1,
    message: e,
    "~run"(r, t) {
      try {
        r.value = String(r.value);
      } catch {
        _(this, "string", r, t), r.typed = !1;
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zg() {
  return {
    kind: "transformation",
    type: "to_upper_case",
    reference: Zg,
    async: !1,
    "~run"(e) {
      return e.value = e.value.toUpperCase(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: je,
    async: !1,
    operation: e,
    "~run"(r) {
      return r.value = this.operation(r.value), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eb(e) {
  return {
    kind: "transformation",
    type: "transform",
    reference: eb,
    async: !0,
    operation: e,
    async "~run"(r) {
      return r.value = await this.operation(r.value), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tb() {
  return {
    kind: "transformation",
    type: "trim",
    reference: tb,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trim(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rb() {
  return {
    kind: "transformation",
    type: "trim_end",
    reference: rb,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimEnd(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nb() {
  return {
    kind: "transformation",
    type: "trim_start",
    reference: nb,
    async: !1,
    "~run"(e) {
      return e.value = e.value.trimStart(), e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ib(e) {
  return {
    kind: "validation",
    type: "ulid",
    reference: ib,
    async: !1,
    expects: null,
    requirement: Hm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "ULID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ab(e) {
  return {
    kind: "validation",
    type: "url",
    reference: ab,
    async: !1,
    expects: null,
    requirement(r) {
      try {
        return new URL(r), !0;
      } catch {
        return !1;
      }
    },
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement(r.value) && _(this, "URL", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sb(e) {
  return {
    kind: "validation",
    type: "uuid",
    reference: sb,
    async: !1,
    expects: null,
    requirement: Vm,
    message: e,
    "~run"(r, t) {
      return r.typed && !this.requirement.test(r.value) && _(this, "UUID", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ob(e, r) {
  return {
    kind: "validation",
    type: "value",
    reference: ob,
    async: !1,
    expects: e instanceof Date ? e.toJSON() : /* @__PURE__ */ me(e),
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !(this.requirement <= t.value && this.requirement >= t.value) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ub(e, r) {
  return {
    kind: "validation",
    type: "values",
    reference: ub,
    async: !1,
    expects: `${/* @__PURE__ */ Ce(e.map((t) => t instanceof Date ? t.toJSON() : /* @__PURE__ */ me(t)), "|")}`,
    requirement: e,
    message: r,
    "~run"(t, n) {
      return t.typed && !this.requirement.some((i) => i <= t.value && i >= t.value) && _(this, "value", t, n, { received: t.value instanceof Date ? t.value.toJSON() : /* @__PURE__ */ me(t.value) }), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function lb(e, r, t) {
  return {
    kind: "validation",
    type: "words",
    reference: lb,
    async: !1,
    expects: `${r}`,
    locales: e,
    requirement: r,
    message: t,
    "~run"(n, i) {
      if (n.typed) {
        const a = /* @__PURE__ */ Kr(this.locales, n.value);
        a !== this.requirement && _(this, "words", n, i, { received: `${a}` });
      }
      return n;
    }
  };
}
function fP(e, r) {
  const t = e["~run"]({ value: r }, { abortEarly: !0 }).issues;
  if (t) throw new ot(t);
}
var cb = class {
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
    const r = typeof e;
    if (r === "string") return `"${e}"`;
    if (r === "number" || r === "boolean") return `${e}`;
    if (r === "bigint") return `${e}n`;
    if (r === "object" || r === "function") {
      if (e) {
        this.refIds ??= /* @__PURE__ */ new WeakMap();
        let t = this.refIds.get(e);
        return t || (t = ++this.refCount, this.refIds.set(e, t)), `#${t}`;
      }
      return "null";
    }
    return r;
  }
  /**
  * Creates a cache key from input and config.
  *
  * @param input The input value.
  * @param config The parse configuration.
  *
  * @returns The cache key.
  */
  key(e, r = {}) {
    return `${this.#e(e)}|${this.#e(r.lang)}|${this.#e(r.message)}|${this.#e(r.abortEarly)}|${this.#e(r.abortPipeEarly)}`;
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
    const r = this.store.get(e);
    if (r) {
      if (this.hasMaxAge && Date.now() - r[1] > this.maxAge) {
        this.store.delete(e);
        return;
      }
      return this.store.delete(e), this.store.set(e, r), r[0];
    }
  }
  /**
  * Sets a value in the cache by key.
  *
  * @param key The cache key.
  * @param value The cached value.
  */
  set(e, r) {
    this.store ??= /* @__PURE__ */ new Map(), this.store.delete(e);
    const t = this.hasMaxAge ? Date.now() : 0;
    this.store.set(e, [r, t]), this.store.size > this.maxSize && this.store.delete(this.store.keys().next().value);
  }
  /**
  * Clears all entries from the cache.
  */
  clear() {
    this.store?.clear();
  }
};
// @__NO_SIDE_EFFECTS__
function pP(e, r) {
  return {
    ...e,
    cacheConfig: r,
    cache: new cb(r),
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = this.cache.key(t.value, n);
      let a = this.cache.get(i);
      return a || this.cache.set(i, a = e["~run"](t, n)), /* @__PURE__ */ wn(a);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yP(e, r) {
  let t;
  return {
    ...e,
    async: !0,
    cacheConfig: r,
    cache: new cb(r),
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = this.cache.key(n.value, i), s = this.cache.get(a);
      if (s) return /* @__PURE__ */ wn(s);
      let o = t?.get(a);
      o || (t ??= /* @__PURE__ */ new Map(), o = Promise.resolve(e["~run"](n, i)), t.set(a, o));
      try {
        const u = await o;
        return this.cache.set(a, u), /* @__PURE__ */ wn(u);
      } finally {
        t?.delete(a);
      }
    }
  };
}
// @__NO_SIDE_EFFECTS__
function dP(e, r) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return e["~run"](t, {
        ...n,
        ...r
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Le(e, r, t) {
  return typeof e.fallback == "function" ? e.fallback(r, t) : e.fallback;
}
// @__NO_SIDE_EFFECTS__
function hP(e, r) {
  return {
    ...e,
    fallback: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = e["~run"](t, n);
      return i.issues ? {
        typed: !0,
        value: /* @__PURE__ */ Le(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mP(e, r) {
  return {
    ...e,
    fallback: r,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = await e["~run"](t, n);
      return i.issues ? {
        typed: !0,
        value: await /* @__PURE__ */ Le(this, i, n)
      } : i;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ts(e) {
  const r = {};
  for (const t of e) if (t.path) {
    const n = /* @__PURE__ */ Ys(t);
    n ? (r.nested || (r.nested = {}), r.nested[n] ? r.nested[n].push(t.message) : r.nested[n] = [t.message]) : r.other ? r.other.push(t.message) : r.other = [t.message];
  } else r.root ? r.root.push(t.message) : r.root = [t.message];
  return r;
}
// @__NO_SIDE_EFFECTS__
function vP(e, r) {
  return {
    ...e,
    "~run"(t, n) {
      const i = t.issues && [...t.issues];
      if (t = e["~run"](t, n), t.issues) {
        for (const a of t.issues) if (!i?.includes(a)) {
          let s = t.value;
          for (const o of r) {
            const u = s[o], l = {
              type: "unknown",
              origin: "value",
              input: s,
              key: o,
              value: u
            };
            if (a.path ? a.path.push(l) : a.path = [l], !u) break;
            s = u;
          }
        }
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gP(e, r) {
  return {
    ...e,
    async: !0,
    async "~run"(t, n) {
      const i = t.issues && [...t.issues];
      if (t = await e["~run"](t, n), t.issues) {
        for (const a of t.issues) if (!i?.includes(a)) {
          let s = t.value;
          for (const o of r) {
            const u = s[o], l = {
              type: "unknown",
              origin: "value",
              input: s,
              key: o,
              value: u
            };
            if (a.path ? a.path.push(l) : a.path = [l], !u) break;
            s = u;
          }
        }
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, r, t) {
  return typeof e.default == "function" ? e.default(r, t) : e.default;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  if ("entries" in e) {
    const r = {};
    for (const t in e.entries) r[t] = /* @__PURE__ */ rs(e.entries[t]);
    return r;
  }
  return "items" in e ? e.items.map(rs) : /* @__PURE__ */ we(e);
}
// @__NO_SIDE_EFFECTS__
async function ns(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([r, t]) => [r, await /* @__PURE__ */ ns(t)]))) : "items" in e ? Promise.all(e.items.map(ns)) : /* @__PURE__ */ we(e);
}
// @__NO_SIDE_EFFECTS__
function bP(e) {
  return /* @__PURE__ */ Hn(e, "description");
}
// @__NO_SIDE_EFFECTS__
function wP(e) {
  const r = [];
  function t(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? t(i) : i.kind === "metadata" && i.type === "examples" && r.push(...i.examples);
  }
  return t(e), r;
}
// @__NO_SIDE_EFFECTS__
function is(e) {
  if ("entries" in e) {
    const r = {};
    for (const t in e.entries) r[t] = /* @__PURE__ */ is(e.entries[t]);
    return r;
  }
  return "items" in e ? e.items.map(is) : /* @__PURE__ */ Le(e);
}
// @__NO_SIDE_EFFECTS__
async function as(e) {
  return "entries" in e ? Object.fromEntries(await Promise.all(Object.entries(e.entries).map(async ([r, t]) => [r, await /* @__PURE__ */ as(t)]))) : "items" in e ? Promise.all(e.items.map(as)) : /* @__PURE__ */ Le(e);
}
// @__NO_SIDE_EFFECTS__
function kP(e) {
  const r = {};
  function t(n) {
    if ("pipe" in n)
      for (const i of n.pipe) i.kind === "schema" && "pipe" in i ? t(i) : i.kind === "metadata" && i.type === "metadata" && Object.assign(r, i.metadata);
  }
  return t(e), r;
}
// @__NO_SIDE_EFFECTS__
function _P(e) {
  return /* @__PURE__ */ Hn(e, "title");
}
// @__NO_SIDE_EFFECTS__
function xP(e, r) {
  return !e["~run"]({ value: r }, { abortEarly: !0 }).issues;
}
// @__NO_SIDE_EFFECTS__
function Qr() {
  return {
    kind: "schema",
    type: "any",
    reference: Qr,
    expects: "any",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gt(e, r) {
  return {
    kind: "schema",
    type: "array",
    reference: gt,
    expects: "Array",
    async: !1,
    item: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < i.length; a++) {
          const s = i[a], o = this.item["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function fb(e, r) {
  return {
    kind: "schema",
    type: "array",
    reference: fb,
    expects: "Array",
    async: !0,
    item: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(i.map((s) => this.item["~run"]({ value: s }, n)));
        for (let s = 0; s < a.length; s++) {
          const o = a[s];
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: i[s]
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function pb(e) {
  return {
    kind: "schema",
    type: "bigint",
    reference: pb,
    expects: "bigint",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "bigint" ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function yb(e) {
  return {
    kind: "schema",
    type: "blob",
    reference: yb,
    expects: "Blob",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value instanceof Blob ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  return {
    kind: "schema",
    type: "boolean",
    reference: Qs,
    expects: "boolean",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "boolean" ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function db(e, r) {
  return {
    kind: "schema",
    type: "custom",
    reference: db,
    expects: "unknown",
    async: !1,
    check: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return this.check(t.value) ? t.typed = !0 : _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function hb(e, r) {
  return {
    kind: "schema",
    type: "custom",
    reference: hb,
    expects: "unknown",
    async: !0,
    check: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return await this.check(t.value) ? t.typed = !0 : _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vn(e) {
  return {
    kind: "schema",
    type: "date",
    reference: Vn,
    expects: "Date",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value instanceof Date ? isNaN(r.value) ? _(this, "type", r, t, { received: '"Invalid Date"' }) : r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ss(e, r) {
  const t = [];
  for (const n in e) (`${+n}` !== n || typeof e[n] != "string" || !Object.is(e[e[n]], +n)) && t.push(e[n]);
  return {
    kind: "schema",
    type: "enum",
    reference: ss,
    expects: /* @__PURE__ */ Ce(t.map(me), "|"),
    async: !1,
    enum: e,
    options: t,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      return this.options.includes(n.value) ? n.typed = !0 : _(this, "type", n, i), n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function mb(e, r) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: mb,
    expects: e.expects,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function vb(e, r) {
  return {
    kind: "schema",
    type: "exact_optional",
    reference: vb,
    expects: e.expects,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function gb(e) {
  return {
    kind: "schema",
    type: "file",
    reference: gb,
    expects: "File",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value instanceof File ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  return {
    kind: "schema",
    type: "function",
    reference: os,
    expects: "Function",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "function" ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function bb(e, r) {
  return {
    kind: "schema",
    type: "instance",
    reference: bb,
    expects: e.name,
    async: !1,
    class: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value instanceof this.class ? t.typed = !0 : _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kn(e, r) {
  if (typeof e == typeof r) {
    if (e === r || e instanceof Date && r instanceof Date && +e == +r) return { value: e };
    if (e && r && e.constructor === Object && r.constructor === Object) {
      for (const t in r) if (t in e) {
        const n = /* @__PURE__ */ kn(e[t], r[t]);
        if (n.issue) return n;
        e[t] = n.value;
      } else e[t] = r[t];
      return { value: e };
    }
    if (Array.isArray(e) && Array.isArray(r) && e.length === r.length) {
      for (let t = 0; t < e.length; t++) {
        const n = /* @__PURE__ */ kn(e[t], r[t]);
        if (n.issue) return n;
        e[t] = n.value;
      }
      return { value: e };
    }
  }
  return { issue: !0 };
}
// @__NO_SIDE_EFFECTS__
function wb(e, r) {
  return {
    kind: "schema",
    type: "intersect",
    reference: wb,
    expects: /* @__PURE__ */ Ce(e.map((t) => t.expects), "&"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      if (this.options.length) {
        const i = t.value;
        let a;
        t.typed = !0;
        for (const s of this.options) {
          const o = s["~run"]({ value: i }, n);
          if (o.issues && (t.issues ? t.issues.push(...o.issues) : t.issues = o.issues, n.abortEarly)) {
            t.typed = !1;
            break;
          }
          o.typed || (t.typed = !1), t.typed && (a ? a.push(o.value) : a = [o.value]);
        }
        if (t.typed) {
          t.value = a[0];
          for (let s = 1; s < a.length; s++) {
            const o = /* @__PURE__ */ kn(t.value, a[s]);
            if (o.issue) {
              _(this, "type", t, n, { received: "unknown" });
              break;
            }
            t.value = o.value;
          }
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function kb(e, r) {
  return {
    kind: "schema",
    type: "intersect",
    reference: kb,
    expects: /* @__PURE__ */ Ce(e.map((t) => t.expects), "&"),
    async: !0,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      if (this.options.length) {
        const i = t.value;
        let a;
        t.typed = !0;
        const s = await Promise.all(this.options.map((o) => o["~run"]({ value: i }, n)));
        for (const o of s) {
          if (o.issues && (t.issues ? t.issues.push(...o.issues) : t.issues = o.issues, n.abortEarly)) {
            t.typed = !1;
            break;
          }
          o.typed || (t.typed = !1), t.typed && (a ? a.push(o.value) : a = [o.value]);
        }
        if (t.typed) {
          t.value = a[0];
          for (let o = 1; o < a.length; o++) {
            const u = /* @__PURE__ */ kn(t.value, a[o]);
            if (u.issue) {
              _(this, "type", t, n, { received: "unknown" });
              break;
            }
            t.value = u.value;
          }
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _b(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: _b,
    expects: "unknown",
    async: !1,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return this.getter(r.value)["~run"](r, t);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xb(e) {
  return {
    kind: "schema",
    type: "lazy",
    reference: xb,
    expects: "unknown",
    async: !0,
    getter: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(r, t) {
      return (await this.getter(r.value))["~run"](r, t);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function _n(e, r) {
  return {
    kind: "schema",
    type: "literal",
    reference: _n,
    expects: /* @__PURE__ */ me(e),
    async: !1,
    literal: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value === this.literal ? t.typed = !0 : _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Eb(e, r) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Eb,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ we(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Le(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (_(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
        if (!t.issues || !n.abortEarly)
          for (const a in i) /* @__PURE__ */ Gt(i, a) && !(a in this.entries) && (t.value[a] = i[a]);
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ab(e, r) {
  return {
    kind: "schema",
    type: "loose_object",
    reference: Ab,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ we(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Le(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (_(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
        if (!t.issues || !n.abortEarly)
          for (const s in i) /* @__PURE__ */ Gt(i, s) && !(s in this.entries) && (t.value[s] = i[s]);
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ob(e, r) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Ob,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
        if (!t.issues || !n.abortEarly) for (let a = this.items.length; a < i.length; a++) t.value.push(i[a]);
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Sb(e, r) {
  return {
    kind: "schema",
    type: "loose_tuple",
    reference: Sb,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
        if (!t.issues || !n.abortEarly) for (let s = this.items.length; s < i.length; s++) t.value.push(i[s]);
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jb(e, r, t) {
  return {
    kind: "schema",
    type: "map",
    reference: jb,
    expects: "Map",
    async: !1,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        for (const [s, o] of a) {
          const u = this.key["~run"]({ value: s }, i);
          if (u.issues) {
            const c = {
              type: "map",
              origin: "key",
              input: a,
              key: s,
              value: o
            };
            for (const f of u.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: o }, i);
          if (l.issues) {
            const c = {
              type: "map",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), n.value.set(u.value, l.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pb(e, r, t) {
  return {
    kind: "schema",
    type: "map",
    reference: Pb,
    expects: "Map",
    async: !0,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a instanceof Map) {
        n.typed = !0, n.value = /* @__PURE__ */ new Map();
        const s = await Promise.all([...a].map(([o, u]) => Promise.all([
          o,
          u,
          this.key["~run"]({ value: o }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [o, u, l, c] of s) {
          if (l.issues) {
            const f = {
              type: "map",
              origin: "key",
              input: a,
              key: o,
              value: u
            };
            for (const b of l.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "map",
              origin: "value",
              input: a,
              key: o,
              value: u
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), n.value.set(l.value, c.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Mb(e) {
  return {
    kind: "schema",
    type: "nan",
    reference: Mb,
    expects: "NaN",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return Number.isNaN(r.value) ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Db(e) {
  return {
    kind: "schema",
    type: "never",
    reference: Db,
    expects: "never",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $b(e, r) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: $b,
    expects: "!null",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value !== null && (t = this.wrapped["~run"](t, n)), t.value === null && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qb(e, r) {
  return {
    kind: "schema",
    type: "non_nullable",
    reference: qb,
    expects: "!null",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value !== null && (t = await this.wrapped["~run"](t, n)), t.value === null && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ib(e, r) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Ib,
    expects: "(!null & !undefined)",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value === null || t.value === void 0 || (t = this.wrapped["~run"](t, n)), (t.value === null || t.value === void 0) && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Rb(e, r) {
  return {
    kind: "schema",
    type: "non_nullish",
    reference: Rb,
    expects: "(!null & !undefined)",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value === null || t.value === void 0 || (t = await this.wrapped["~run"](t, n)), (t.value === null || t.value === void 0) && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zs(e, r) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: Zs,
    expects: "!undefined",
    async: !1,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value !== void 0 && (t = this.wrapped["~run"](t, n)), t.value === void 0 && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function eo(e, r) {
  return {
    kind: "schema",
    type: "non_optional",
    reference: eo,
    expects: "!undefined",
    async: !0,
    wrapped: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value !== void 0 && (t = await this.wrapped["~run"](t, n)), t.value === void 0 && _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  return {
    kind: "schema",
    type: "null",
    reference: us,
    expects: "null",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value === null ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Fb(e, r) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Fb,
    expects: `(${e.expects} | null)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value === null && (this.default !== void 0 && (t.value = /* @__PURE__ */ we(this, t, n)), t.value === null) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tb(e, r) {
  return {
    kind: "schema",
    type: "nullable",
    reference: Tb,
    expects: `(${e.expects} | null)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value === null && (this.default !== void 0 && (t.value = await /* @__PURE__ */ we(this, t, n)), t.value === null) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function xn(e, r) {
  return {
    kind: "schema",
    type: "nullish",
    reference: xn,
    expects: `(${e.expects} | null | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return (t.value === null || t.value === void 0) && (this.default !== void 0 && (t.value = /* @__PURE__ */ we(this, t, n)), t.value === null || t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nb(e, r) {
  return {
    kind: "schema",
    type: "nullish",
    reference: Nb,
    expects: `(${e.expects} | null | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return (t.value === null || t.value === void 0) && (this.default !== void 0 && (t.value = await /* @__PURE__ */ we(this, t, n)), t.value === null || t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return {
    kind: "schema",
    type: "number",
    reference: Zt,
    expects: "number",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "number" && !isNaN(r.value) ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function to(e, r) {
  return {
    kind: "schema",
    type: "object",
    reference: to,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ we(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Le(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (_(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Cb(e, r) {
  return {
    kind: "schema",
    type: "object",
    reference: Cb,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ we(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Le(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (_(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Lb(e, r, t) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Lb,
    expects: "Object",
    async: !1,
    entries: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        for (const s in this.entries) {
          const o = this.entries[s];
          if (s in a || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in a ? a[s] : /* @__PURE__ */ we(o), l = o["~run"]({ value: u }, i);
            if (l.issues) {
              const c = {
                type: "object",
                origin: "value",
                input: a,
                key: s,
                value: u
              };
              for (const f of l.issues)
                f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
              if (n.issues || (n.issues = l.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            l.typed || (n.typed = !1), n.value[s] = l.value;
          } else if (o.fallback !== void 0) n.value[s] = /* @__PURE__ */ Le(o);
          else if (o.type !== "exact_optional" && o.type !== "optional" && o.type !== "nullish" && (_(this, "key", n, i, {
            input: void 0,
            expected: `"${s}"`,
            path: [{
              type: "object",
              origin: "key",
              input: a,
              key: s,
              value: a[s]
            }]
          }), i.abortEarly))
            break;
        }
        if (!n.issues || !i.abortEarly) {
          for (const s in a) if (/* @__PURE__ */ Gt(a, s) && !(s in this.entries)) {
            const o = this.rest["~run"]({ value: a[s] }, i);
            if (o.issues) {
              const u = {
                type: "object",
                origin: "value",
                input: a,
                key: s,
                value: a[s]
              };
              for (const l of o.issues)
                l.path ? l.path.unshift(u) : l.path = [u], n.issues?.push(l);
              if (n.issues || (n.issues = o.issues), i.abortEarly) {
                n.typed = !1;
                break;
              }
            }
            o.typed || (n.typed = !1), n.value[s] = o.value;
          }
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Wb(e, r, t) {
  return {
    kind: "schema",
    type: "object_with_rest",
    reference: Wb,
    expects: "Object",
    async: !0,
    entries: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        const [s, o] = await Promise.all([Promise.all(Object.entries(this.entries).map(async ([u, l]) => {
          if (u in a || (l.type === "exact_optional" || l.type === "optional" || l.type === "nullish") && l.default !== void 0) {
            const c = u in a ? a[u] : await /* @__PURE__ */ we(l);
            return [
              u,
              c,
              l,
              await l["~run"]({ value: c }, i)
            ];
          }
          return [
            u,
            a[u],
            l,
            null
          ];
        })), Promise.all(Object.entries(a).filter(([u]) => /* @__PURE__ */ Gt(a, u) && !(u in this.entries)).map(async ([u, l]) => [
          u,
          l,
          await this.rest["~run"]({ value: l }, i)
        ]))]);
        for (const [u, l, c, f] of s) if (f) {
          if (f.issues) {
            const b = {
              type: "object",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const d of f.issues)
              d.path ? d.path.unshift(b) : d.path = [b], n.issues?.push(d);
            if (n.issues || (n.issues = f.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          f.typed || (n.typed = !1), n.value[u] = f.value;
        } else if (c.fallback !== void 0) n.value[u] = await /* @__PURE__ */ Le(c);
        else if (c.type !== "exact_optional" && c.type !== "optional" && c.type !== "nullish" && (_(this, "key", n, i, {
          input: void 0,
          expected: `"${u}"`,
          path: [{
            type: "object",
            origin: "key",
            input: a,
            key: u,
            value: l
          }]
        }), i.abortEarly))
          break;
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of o) {
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value[u] = c.value;
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Tr(e, r) {
  return {
    kind: "schema",
    type: "optional",
    reference: Tr,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = /* @__PURE__ */ we(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ro(e, r) {
  return {
    kind: "schema",
    type: "optional",
    reference: ro,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = await /* @__PURE__ */ we(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jn(e, r) {
  return {
    kind: "schema",
    type: "picklist",
    reference: Jn,
    expects: /* @__PURE__ */ Ce(e.map(me), "|"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return this.options.includes(t.value) ? t.typed = !0 : _(this, "type", t, n), t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function zb(e) {
  return {
    kind: "schema",
    type: "promise",
    reference: zb,
    expects: "Promise",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value instanceof Promise ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function no(e, r, t) {
  return {
    kind: "schema",
    type: "record",
    reference: no,
    expects: "Object",
    async: !1,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        for (const s in a) if (/* @__PURE__ */ Gt(a, s)) {
          const o = a[s], u = this.key["~run"]({ value: s }, i);
          if (u.issues) {
            const c = {
              type: "object",
              origin: "key",
              input: a,
              key: s,
              value: o
            };
            for (const f of u.issues)
              f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          const l = this.value["~run"]({ value: o }, i);
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], n.issues?.push(f);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!u.typed || !l.typed) && (n.typed = !1), u.typed && (n.value[u.value] = l.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Bb(e, r, t) {
  return {
    kind: "schema",
    type: "record",
    reference: Bb,
    expects: "Object",
    async: !0,
    key: e,
    value: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        n.typed = !0, n.value = {};
        const s = await Promise.all(Object.entries(a).filter(([o]) => /* @__PURE__ */ Gt(a, o)).map(([o, u]) => Promise.all([
          o,
          u,
          this.key["~run"]({ value: o }, i),
          this.value["~run"]({ value: u }, i)
        ])));
        for (const [o, u, l, c] of s) {
          if (l.issues) {
            const f = {
              type: "object",
              origin: "key",
              input: a,
              key: o,
              value: u
            };
            for (const b of l.issues)
              b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = l.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          if (c.issues) {
            const f = {
              type: "object",
              origin: "value",
              input: a,
              key: o,
              value: u
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          (!l.typed || !c.typed) && (n.typed = !1), l.typed && (n.value[l.value] = c.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Gb(e, r) {
  return {
    kind: "schema",
    type: "set",
    reference: Gb,
    expects: "Set",
    async: !1,
    value: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i instanceof Set) {
        t.typed = !0, t.value = /* @__PURE__ */ new Set();
        for (const a of i) {
          const s = this.value["~run"]({ value: a }, n);
          if (s.issues) {
            const o = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: a
            };
            for (const u of s.issues)
              u.path ? u.path.unshift(o) : u.path = [o], t.issues?.push(u);
            if (t.issues || (t.issues = s.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          s.typed || (t.typed = !1), t.value.add(s.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Ub(e, r) {
  return {
    kind: "schema",
    type: "set",
    reference: Ub,
    expects: "Set",
    async: !0,
    value: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i instanceof Set) {
        t.typed = !0, t.value = /* @__PURE__ */ new Set();
        const a = await Promise.all([...i].map(async (s) => [s, await this.value["~run"]({ value: s }, n)]));
        for (const [s, o] of a) {
          if (o.issues) {
            const u = {
              type: "set",
              origin: "value",
              input: i,
              key: null,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.add(o.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Xb(e, r) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Xb,
    expects: "Object",
    async: !1,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        for (const a in this.entries) {
          const s = this.entries[a];
          if (a in i || (s.type === "exact_optional" || s.type === "optional" || s.type === "nullish") && s.default !== void 0) {
            const o = a in i ? i[a] : /* @__PURE__ */ we(s), u = s["~run"]({ value: o }, n);
            if (u.issues) {
              const l = {
                type: "object",
                origin: "value",
                input: i,
                key: a,
                value: o
              };
              for (const c of u.issues)
                c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
              if (t.issues || (t.issues = u.issues), n.abortEarly) {
                t.typed = !1;
                break;
              }
            }
            u.typed || (t.typed = !1), t.value[a] = u.value;
          } else if (s.fallback !== void 0) t.value[a] = /* @__PURE__ */ Le(s);
          else if (s.type !== "exact_optional" && s.type !== "optional" && s.type !== "nullish" && (_(this, "key", t, n, {
            input: void 0,
            expected: `"${a}"`,
            path: [{
              type: "object",
              origin: "key",
              input: i,
              key: a,
              value: i[a]
            }]
          }), n.abortEarly))
            break;
        }
        if (!t.issues || !n.abortEarly) {
          for (const a in i) if (!(a in this.entries)) {
            _(this, "key", t, n, {
              input: a,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: a,
                value: i[a]
              }]
            });
            break;
          }
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Hb(e, r) {
  return {
    kind: "schema",
    type: "strict_object",
    reference: Hb,
    expects: "Object",
    async: !0,
    entries: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (i && typeof i == "object") {
        t.typed = !0, t.value = {};
        const a = await Promise.all(Object.entries(this.entries).map(async ([s, o]) => {
          if (s in i || (o.type === "exact_optional" || o.type === "optional" || o.type === "nullish") && o.default !== void 0) {
            const u = s in i ? i[s] : await /* @__PURE__ */ we(o);
            return [
              s,
              u,
              o,
              await o["~run"]({ value: u }, n)
            ];
          }
          return [
            s,
            i[s],
            o,
            null
          ];
        }));
        for (const [s, o, u, l] of a) if (l) {
          if (l.issues) {
            const c = {
              type: "object",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const f of l.issues)
              f.path ? f.path.unshift(c) : f.path = [c], t.issues?.push(f);
            if (t.issues || (t.issues = l.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          l.typed || (t.typed = !1), t.value[s] = l.value;
        } else if (u.fallback !== void 0) t.value[s] = await /* @__PURE__ */ Le(u);
        else if (u.type !== "exact_optional" && u.type !== "optional" && u.type !== "nullish" && (_(this, "key", t, n, {
          input: void 0,
          expected: `"${s}"`,
          path: [{
            type: "object",
            origin: "key",
            input: i,
            key: s,
            value: o
          }]
        }), n.abortEarly))
          break;
        if (!t.issues || !n.abortEarly) {
          for (const s in i) if (!(s in this.entries)) {
            _(this, "key", t, n, {
              input: s,
              expected: "never",
              path: [{
                type: "object",
                origin: "key",
                input: i,
                key: s,
                value: i[s]
              }]
            });
            break;
          }
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Vb(e, r) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Vb,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
        !(t.issues && n.abortEarly) && this.items.length < i.length && _(this, "type", t, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Jb(e, r) {
  return {
    kind: "schema",
    type: "strict_tuple",
    reference: Jb,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
        !(t.issues && n.abortEarly) && this.items.length < i.length && _(this, "type", t, n, {
          input: i[this.items.length],
          expected: "never",
          path: [{
            type: "array",
            origin: "value",
            input: i,
            key: this.items.length,
            value: i[this.items.length]
          }]
        });
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return {
    kind: "schema",
    type: "string",
    reference: Pe,
    expects: "string",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "string" ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Yb(e) {
  return {
    kind: "schema",
    type: "symbol",
    reference: Yb,
    expects: "symbol",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return typeof r.value == "symbol" ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Kb(e, r) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Kb,
    expects: "Array",
    async: !1,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        for (let a = 0; a < this.items.length; a++) {
          const s = i[a], o = this.items[a]["~run"]({ value: s }, n);
          if (o.issues) {
            const u = {
              type: "array",
              origin: "value",
              input: i,
              key: a,
              value: s
            };
            for (const l of o.issues)
              l.path ? l.path.unshift(u) : l.path = [u], t.issues?.push(l);
            if (t.issues || (t.issues = o.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          o.typed || (t.typed = !1), t.value.push(o.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qb(e, r) {
  return {
    kind: "schema",
    type: "tuple",
    reference: Qb,
    expects: "Array",
    async: !0,
    items: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      const i = t.value;
      if (Array.isArray(i)) {
        t.typed = !0, t.value = [];
        const a = await Promise.all(this.items.map(async (s, o) => {
          const u = i[o];
          return [
            o,
            u,
            await s["~run"]({ value: u }, n)
          ];
        }));
        for (const [s, o, u] of a) {
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: i,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], t.issues?.push(c);
            if (t.issues || (t.issues = u.issues), n.abortEarly) {
              t.typed = !1;
              break;
            }
          }
          u.typed || (t.typed = !1), t.value.push(u.value);
        }
      } else _(this, "type", t, n);
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zb(e, r, t) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: Zb,
    expects: "Array",
    async: !1,
    items: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (Array.isArray(a)) {
        n.typed = !0, n.value = [];
        for (let s = 0; s < this.items.length; s++) {
          const o = a[s], u = this.items[s]["~run"]({ value: o }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
        if (!n.issues || !i.abortEarly) for (let s = this.items.length; s < a.length; s++) {
          const o = a[s], u = this.rest["~run"]({ value: o }, i);
          if (u.issues) {
            const l = {
              type: "array",
              origin: "value",
              input: a,
              key: s,
              value: o
            };
            for (const c of u.issues)
              c.path ? c.path.unshift(l) : c.path = [l], n.issues?.push(c);
            if (n.issues || (n.issues = u.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          u.typed || (n.typed = !1), n.value.push(u.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ew(e, r, t) {
  return {
    kind: "schema",
    type: "tuple_with_rest",
    reference: ew,
    expects: "Array",
    async: !0,
    items: e,
    rest: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (Array.isArray(a)) {
        n.typed = !0, n.value = [];
        const [s, o] = await Promise.all([Promise.all(this.items.map(async (u, l) => {
          const c = a[l];
          return [
            l,
            c,
            await u["~run"]({ value: c }, i)
          ];
        })), Promise.all(a.slice(this.items.length).map(async (u, l) => [
          l + this.items.length,
          u,
          await this.rest["~run"]({ value: u }, i)
        ]))]);
        for (const [u, l, c] of s) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
        if (!n.issues || !i.abortEarly) for (const [u, l, c] of o) {
          if (c.issues) {
            const f = {
              type: "array",
              origin: "value",
              input: a,
              key: u,
              value: l
            };
            for (const b of c.issues)
              b.path ? b.path.unshift(f) : b.path = [f], n.issues?.push(b);
            if (n.issues || (n.issues = c.issues), i.abortEarly) {
              n.typed = !1;
              break;
            }
          }
          c.typed || (n.typed = !1), n.value.push(c.value);
        }
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function ls(e) {
  return {
    kind: "schema",
    type: "undefined",
    reference: ls,
    expects: "undefined",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value === void 0 ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function tw(e, r) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: tw,
    expects: `(${e.expects} | undefined)`,
    async: !1,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = /* @__PURE__ */ we(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function rw(e, r) {
  return {
    kind: "schema",
    type: "undefinedable",
    reference: rw,
    expects: `(${e.expects} | undefined)`,
    async: !0,
    wrapped: e,
    default: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      return t.value === void 0 && (this.default !== void 0 && (t.value = await /* @__PURE__ */ we(this, t, n)), t.value === void 0) ? (t.typed = !0, t) : this.wrapped["~run"](t, n);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  let r;
  if (e) for (const t of e) r ? r.push(...t.issues) : r = t.issues;
  return r;
}
// @__NO_SIDE_EFFECTS__
function Xe(e, r) {
  return {
    kind: "schema",
    type: "union",
    reference: Xe,
    expects: /* @__PURE__ */ Ce(e.map((t) => t.expects), "|"),
    async: !1,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      let i, a, s;
      for (const o of this.options) {
        const u = o["~run"]({ value: t.value }, n);
        if (u.typed) if (u.issues) a ? a.push(u) : a = [u];
        else {
          i = u;
          break;
        }
        else s ? s.push(u) : s = [u];
      }
      if (i) return i;
      if (a) {
        if (a.length === 1) return a[0];
        _(this, "type", t, n, { issues: /* @__PURE__ */ En(a) }), t.typed = !0;
      } else {
        if (s?.length === 1) return s[0];
        _(this, "type", t, n, { issues: /* @__PURE__ */ En(s) });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function nw(e, r) {
  return {
    kind: "schema",
    type: "union",
    reference: nw,
    expects: /* @__PURE__ */ Ce(e.map((t) => t.expects), "|"),
    async: !0,
    options: e,
    message: r,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(t, n) {
      let i, a, s;
      for (const o of this.options) {
        const u = await o["~run"]({ value: t.value }, n);
        if (u.typed) if (u.issues) a ? a.push(u) : a = [u];
        else {
          i = u;
          break;
        }
        else s ? s.push(u) : s = [u];
      }
      if (i) return i;
      if (a) {
        if (a.length === 1) return a[0];
        _(this, "type", t, n, { issues: /* @__PURE__ */ En(a) }), t.typed = !0;
      } else {
        if (s?.length === 1) return s[0];
        _(this, "type", t, n, { issues: /* @__PURE__ */ En(s) });
      }
      return t;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function iw() {
  return {
    kind: "schema",
    type: "unknown",
    reference: iw,
    expects: "unknown",
    async: !1,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(e) {
      return e.typed = !0, e;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function aw(e, r, t) {
  return {
    kind: "schema",
    type: "variant",
    reference: aw,
    expects: "Object",
    async: !1,
    key: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        let s, o = 0, u = this.key, l = [];
        const c = (f, b) => {
          for (const d of f.options) {
            if (d.type === "variant") c(d, new Set(b).add(d.key));
            else {
              let E = !0, m = 0;
              for (const h of b) {
                const P = d.entries[h];
                if (h in a ? P["~run"]({
                  typed: !1,
                  value: a[h]
                }, { abortEarly: !0 }).issues : P.type !== "exact_optional" && P.type !== "optional" && P.type !== "nullish") {
                  E = !1, u !== h && (o < m || o === m && h in a && !(u in a)) && (o = m, u = h, l = []), u === h && l.push(d.entries[h].expects);
                  break;
                }
                m++;
              }
              if (E) {
                const h = d["~run"]({ value: a }, i);
                (!s || !s.typed && h.typed) && (s = h);
              }
            }
            if (s && !s.issues) break;
          }
        };
        if (c(this, /* @__PURE__ */ new Set([this.key])), s) return s;
        _(this, "type", n, i, {
          input: a[u],
          expected: /* @__PURE__ */ Ce(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: a,
            key: u,
            value: a[u]
          }]
        });
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function sw(e, r, t) {
  return {
    kind: "schema",
    type: "variant",
    reference: sw,
    expects: "Object",
    async: !0,
    key: e,
    options: r,
    message: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(n, i) {
      const a = n.value;
      if (a && typeof a == "object") {
        let s, o = 0, u = this.key, l = [];
        const c = async (f, b) => {
          for (const d of f.options) {
            if (d.type === "variant") await c(d, new Set(b).add(d.key));
            else {
              let E = !0, m = 0;
              for (const h of b) {
                const P = d.entries[h];
                if (h in a ? (await P["~run"]({
                  typed: !1,
                  value: a[h]
                }, { abortEarly: !0 })).issues : P.type !== "exact_optional" && P.type !== "optional" && P.type !== "nullish") {
                  E = !1, u !== h && (o < m || o === m && h in a && !(u in a)) && (o = m, u = h, l = []), u === h && l.push(d.entries[h].expects);
                  break;
                }
                m++;
              }
              if (E) {
                const h = await d["~run"]({ value: a }, i);
                (!s || !s.typed && h.typed) && (s = h);
              }
            }
            if (s && !s.issues) break;
          }
        };
        if (await c(this, /* @__PURE__ */ new Set([this.key])), s) return s;
        _(this, "type", n, i, {
          input: a[u],
          expected: /* @__PURE__ */ Ce(l, "|"),
          path: [{
            type: "object",
            origin: "value",
            input: a,
            key: u,
            value: a[u]
          }]
        });
      } else _(this, "type", n, i);
      return n;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  return {
    kind: "schema",
    type: "void",
    reference: cs,
    expects: "void",
    async: !1,
    message: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      return r.value === void 0 ? r.typed = !0 : _(this, "type", r, t), r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function EP(e, r) {
  return /* @__PURE__ */ Jn(Object.keys(e.entries), r);
}
// @__NO_SIDE_EFFECTS__
function AP(e, r) {
  return {
    ...e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(t, n) {
      return e["~run"](t, {
        ...n,
        message: r
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function OP(e, r) {
  const t = { ...e.entries };
  for (const n of r) delete t[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
function ow(e, r, t) {
  const n = e["~run"]({ value: r }, /* @__PURE__ */ sr(t));
  if (n.issues) throw new ot(n.issues);
  return n.value;
}
async function uw(e, r, t) {
  const n = await e["~run"]({ value: r }, /* @__PURE__ */ sr(t));
  if (n.issues) throw new ot(n.issues);
  return n.value;
}
// @__NO_SIDE_EFFECTS__
function SP(e, r) {
  const t = (n) => ow(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function jP(e, r) {
  const t = (n) => uw(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function PP(e, r) {
  const t = {};
  for (const n in e.entries) t[n] = !r || r.includes(n) ? /* @__PURE__ */ Tr(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function MP(e, r) {
  const t = {};
  for (const n in e.entries) t[n] = !r || r.includes(n) ? /* @__PURE__ */ ro(e.entries[n]) : e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function DP(e, r) {
  const t = {};
  for (const n of r) t[n] = e.entries[n];
  return {
    ...e,
    entries: t,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Qe(...e) {
  return {
    ...e[0],
    pipe: e,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    "~run"(r, t) {
      for (const n of e) if (n.kind !== "metadata") {
        if (r.issues && (n.kind === "schema" || n.kind === "transformation")) {
          r.typed = !1;
          break;
        }
        (!r.issues || !t.abortEarly && !t.abortPipeEarly) && (r = n["~run"](r, t));
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function $P(...e) {
  return {
    ...e[0],
    pipe: e,
    async: !0,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    },
    async "~run"(r, t) {
      for (const n of e) if (n.kind !== "metadata") {
        if (r.issues && (n.kind === "schema" || n.kind === "transformation")) {
          r.typed = !1;
          break;
        }
        (!r.issues || !t.abortEarly && !t.abortPipeEarly) && (r = await n["~run"](r, t));
      }
      return r;
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qP(e, r, t) {
  const n = Array.isArray(r) ? r : void 0, i = Array.isArray(r) ? t : r, a = {};
  for (const s in e.entries) a[s] = !n || n.includes(s) ? /* @__PURE__ */ Zs(e.entries[s], i) : e.entries[s];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function IP(e, r, t) {
  const n = Array.isArray(r) ? r : void 0, i = Array.isArray(r) ? t : r, a = {};
  for (const s in e.entries) a[s] = !n || n.includes(s) ? /* @__PURE__ */ eo(e.entries[s], i) : e.entries[s];
  return {
    ...e,
    entries: a,
    get "~standard"() {
      return /* @__PURE__ */ T(this);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function An(e, r, t) {
  const n = e["~run"]({ value: r }, /* @__PURE__ */ sr(t));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
async function io(e, r, t) {
  const n = await e["~run"]({ value: r }, /* @__PURE__ */ sr(t));
  return {
    typed: n.typed,
    success: !n.issues,
    output: n.value,
    issues: n.issues
  };
}
// @__NO_SIDE_EFFECTS__
function RP(e, r) {
  const t = (n) => /* @__PURE__ */ An(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function FP(e, r) {
  const t = (n) => /* @__PURE__ */ io(e, n, r);
  return t.schema = e, t.config = r, t;
}
// @__NO_SIDE_EFFECTS__
function TP(e) {
  let r = "";
  for (const t of e) {
    r && (r += `
`), r += `× ${t.message}`;
    const n = /* @__PURE__ */ Ys(t);
    n && (r += `
  → at ${n}`);
  }
  return r;
}
// @__NO_SIDE_EFFECTS__
function NP(e) {
  return e.wrapped;
}
const CP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BASE64_REGEX: gm,
  BIC_REGEX: bm,
  CUID2_REGEX: wm,
  DECIMAL_REGEX: km,
  DIGITS_REGEX: _m,
  DOMAIN_REGEX: xm,
  EMAIL_REGEX: Em,
  EMOJI_REGEX: Am,
  HEXADECIMAL_REGEX: Om,
  HEX_COLOR_REGEX: Sm,
  IMEI_REGEX: jm,
  IPV4_REGEX: Pm,
  IPV6_REGEX: Mm,
  IP_REGEX: Dm,
  ISO_DATE_REGEX: $m,
  ISO_DATE_TIME_REGEX: qm,
  ISO_TIMESTAMP_REGEX: Fm,
  ISO_TIME_REGEX: Im,
  ISO_TIME_SECOND_REGEX: Rm,
  ISO_WEEK_REGEX: Tm,
  ISRC_REGEX: Cm,
  JWS_COMPACT_REGEX: Nm,
  MAC48_REGEX: Lm,
  MAC64_REGEX: Wm,
  MAC_REGEX: zm,
  NANO_ID_REGEX: Bm,
  OCTAL_REGEX: Gm,
  RFC_EMAIL_REGEX: Um,
  SLUG_REGEX: Xm,
  ULID_REGEX: Hm,
  UUID_REGEX: Vm,
  ValiError: ot,
  _addIssue: _,
  _cloneDataset: wn,
  _getByteCount: Jr,
  _getGraphemeCount: Yr,
  _getLastMetadata: Hn,
  _getStandardProps: T,
  _getWordCount: Kr,
  _isLuhnAlgo: Js,
  _isValidObjectKey: Gt,
  _joinExpects: Ce,
  _stringify: me,
  any: Qr,
  args: hm,
  argsAsync: mm,
  array: gt,
  arrayAsync: fb,
  assert: fP,
  awaitAsync: vm,
  base64: Jm,
  bic: Ym,
  bigint: pb,
  blob: yb,
  boolean: Qs,
  brand: Km,
  bytes: Qm,
  cache: pP,
  cacheAsync: yP,
  check: Zm,
  checkAsync: ev,
  checkItems: tv,
  checkItemsAsync: rv,
  config: dP,
  creditCard: nv,
  cuid2: iv,
  custom: db,
  customAsync: hb,
  date: Vn,
  decimal: av,
  deleteGlobalConfig: Bj,
  deleteGlobalMessage: Uj,
  deleteSchemaMessage: Hj,
  deleteSpecificMessage: Jj,
  description: sv,
  digits: ov,
  domain: uv,
  email: lv,
  emoji: cv,
  empty: fv,
  endsWith: pv,
  entries: yv,
  entriesFromList: Kj,
  entriesFromObjects: Qj,
  enum: ss,
  enum_: ss,
  everyItem: dv,
  exactOptional: mb,
  exactOptionalAsync: vb,
  examples: hv,
  excludes: mv,
  fallback: hP,
  fallbackAsync: mP,
  file: gb,
  filterItems: vv,
  findItem: gv,
  finite: bv,
  flatten: ts,
  flavor: wv,
  forward: vP,
  forwardAsync: gP,
  function: os,
  function_: os,
  getDefault: we,
  getDefaults: rs,
  getDefaultsAsync: ns,
  getDescription: bP,
  getDotPath: Ys,
  getExamples: wP,
  getFallback: Le,
  getFallbacks: is,
  getFallbacksAsync: as,
  getGlobalConfig: sr,
  getGlobalMessage: pm,
  getMetadata: kP,
  getSchemaMessage: ym,
  getSpecificMessage: dm,
  getTitle: _P,
  graphemes: kv,
  gtValue: _v,
  guard: xv,
  hash: Ev,
  hexColor: Ov,
  hexadecimal: Av,
  imei: Sv,
  includes: jv,
  instance: bb,
  integer: Ks,
  intersect: wb,
  intersectAsync: kb,
  ip: Pv,
  ipv4: Mv,
  ipv6: Dv,
  is: xP,
  isOfKind: Zj,
  isOfType: eP,
  isValiError: tP,
  isbn: $v,
  isoDate: Iv,
  isoDateTime: Rv,
  isoTime: Fv,
  isoTimeSecond: Tv,
  isoTimestamp: Nv,
  isoWeek: Cv,
  isrc: qv,
  jwsCompact: Lv,
  keyof: EP,
  lazy: _b,
  lazyAsync: xb,
  length: Wv,
  literal: _n,
  looseObject: Eb,
  looseObjectAsync: Ab,
  looseTuple: Ob,
  looseTupleAsync: Sb,
  ltValue: zv,
  mac: Bv,
  mac48: Gv,
  mac64: Uv,
  map: jb,
  mapAsync: Pb,
  mapItems: Xv,
  maxBytes: Hv,
  maxEntries: Vv,
  maxGraphemes: Jv,
  maxLength: Yv,
  maxSize: Kv,
  maxValue: Qv,
  maxWords: Zv,
  message: AP,
  metadata: eg,
  mimeType: tg,
  minBytes: rg,
  minEntries: ng,
  minGraphemes: ig,
  minLength: ag,
  minSize: sg,
  minValue: og,
  minWords: ug,
  multipleOf: lg,
  nan: Mb,
  nanoid: cg,
  never: Db,
  nonEmpty: fg,
  nonNullable: $b,
  nonNullableAsync: qb,
  nonNullish: Ib,
  nonNullishAsync: Rb,
  nonOptional: Zs,
  nonOptionalAsync: eo,
  normalize: pg,
  notBytes: yg,
  notEntries: dg,
  notGraphemes: hg,
  notLength: mg,
  notSize: vg,
  notValue: gg,
  notValues: bg,
  notWords: wg,
  null: us,
  null_: us,
  nullable: Fb,
  nullableAsync: Tb,
  nullish: xn,
  nullishAsync: Nb,
  number: Zt,
  object: to,
  objectAsync: Cb,
  objectWithRest: Lb,
  objectWithRestAsync: Wb,
  octal: kg,
  omit: OP,
  optional: Tr,
  optionalAsync: ro,
  parse: ow,
  parseAsync: uw,
  parseBoolean: _g,
  parseJson: xg,
  parser: SP,
  parserAsync: jP,
  partial: PP,
  partialAsync: MP,
  partialCheck: Ag,
  partialCheckAsync: Og,
  pick: DP,
  picklist: Jn,
  pipe: Qe,
  pipeAsync: $P,
  promise: zb,
  rawCheck: Sg,
  rawCheckAsync: jg,
  rawTransform: Pg,
  rawTransformAsync: Mg,
  readonly: Dg,
  record: no,
  recordAsync: Bb,
  reduceItems: $g,
  regex: qg,
  required: qP,
  requiredAsync: IP,
  returns: Ig,
  returnsAsync: Rg,
  rfcEmail: Fg,
  safeInteger: Tg,
  safeParse: An,
  safeParseAsync: io,
  safeParser: RP,
  safeParserAsync: FP,
  set: Gb,
  setAsync: Ub,
  setGlobalConfig: zj,
  setGlobalMessage: Gj,
  setSchemaMessage: Xj,
  setSpecificMessage: Vj,
  size: Ng,
  slug: Cg,
  someItem: Lg,
  sortItems: Wg,
  startsWith: zg,
  strictObject: Xb,
  strictObjectAsync: Hb,
  strictTuple: Vb,
  strictTupleAsync: Jb,
  string: Pe,
  stringifyJson: Bg,
  summarize: TP,
  symbol: Yb,
  title: Gg,
  toBigint: Ug,
  toBoolean: Xg,
  toDate: Hg,
  toLowerCase: Vg,
  toMaxValue: Jg,
  toMinValue: Yg,
  toNumber: Kg,
  toString: Qg,
  toUpperCase: Zg,
  transform: je,
  transformAsync: eb,
  trim: tb,
  trimEnd: rb,
  trimStart: nb,
  tuple: Kb,
  tupleAsync: Qb,
  tupleWithRest: Zb,
  tupleWithRestAsync: ew,
  ulid: ib,
  undefined: ls,
  undefined_: ls,
  undefinedable: tw,
  undefinedableAsync: rw,
  union: Xe,
  unionAsync: nw,
  unknown: iw,
  unwrap: NP,
  url: ab,
  uuid: sb,
  value: ob,
  values: ub,
  variant: aw,
  variantAsync: sw,
  void: cs,
  void_: cs,
  words: lb
}, Symbol.toStringTag, { value: "Module" })), lw = 6048e5, LP = 864e5, Ol = /* @__PURE__ */ Symbol.for("constructDateFrom");
function bt(e, r) {
  return typeof e == "function" ? e(r) : e && typeof e == "object" && Ol in e ? e[Ol](r) : e instanceof Date ? new e.constructor(r) : new Date(r);
}
function He(e, r) {
  return bt(r || e, e);
}
let WP = {};
function Yn() {
  return WP;
}
function Nr(e, r) {
  const t = Yn(), n = r?.weekStartsOn ?? r?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, i = He(e, r?.in), a = i.getDay(), s = (a < n ? 7 : 0) + a - n;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function On(e, r) {
  return Nr(e, { ...r, weekStartsOn: 1 });
}
function cw(e, r) {
  const t = He(e, r?.in), n = t.getFullYear(), i = bt(t, 0);
  i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = On(i), s = bt(t, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = On(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function Sl(e) {
  const r = He(e), t = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return t.setUTCFullYear(r.getFullYear()), +e - +t;
}
function zP(e, ...r) {
  const t = bt.bind(
    null,
    r.find((n) => typeof n == "object")
  );
  return r.map(t);
}
function jl(e, r) {
  const t = He(e, r?.in);
  return t.setHours(0, 0, 0, 0), t;
}
function BP(e, r, t) {
  const [n, i] = zP(
    t?.in,
    e,
    r
  ), a = jl(n), s = jl(i), o = +a - Sl(a), u = +s - Sl(s);
  return Math.round((o - u) / LP);
}
function GP(e, r) {
  const t = cw(e, r), n = bt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), On(n);
}
function UP(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function XP(e) {
  return !(!UP(e) && typeof e != "number" || isNaN(+He(e)));
}
function HP(e, r) {
  const t = He(e, r?.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const VP = {
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
}, JP = (e, r, t) => {
  let n;
  const i = VP[e];
  return typeof i == "string" ? n = i : r === 1 ? n = i.one : n = i.other.replace("{{count}}", r.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Bi(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const YP = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, KP = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, QP = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ZP = {
  date: Bi({
    formats: YP,
    defaultWidth: "full"
  }),
  time: Bi({
    formats: KP,
    defaultWidth: "full"
  }),
  dateTime: Bi({
    formats: QP,
    defaultWidth: "full"
  })
}, eM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, tM = (e, r, t, n) => eM[e];
function Er(e) {
  return (r, t) => {
    const n = t?.context ? String(t.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = t?.width ? String(t.width) : s;
      i = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = t?.width ? String(t.width) : e.defaultWidth;
      i = e.values[o] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(r) : r;
    return i[a];
  };
}
const rM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iM = {
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
}, aM = {
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
}, sM = {
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
}, oM = {
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
}, uM = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, lM = {
  ordinalNumber: uM,
  era: Er({
    values: rM,
    defaultWidth: "wide"
  }),
  quarter: Er({
    values: nM,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Er({
    values: iM,
    defaultWidth: "wide"
  }),
  day: Er({
    values: aM,
    defaultWidth: "wide"
  }),
  dayPeriod: Er({
    values: sM,
    defaultWidth: "wide",
    formattingValues: oM,
    defaultFormattingWidth: "wide"
  })
};
function Ar(e) {
  return (r, t = {}) => {
    const n = t.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], a = r.match(i);
    if (!a)
      return null;
    const s = a[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(o) ? fM(o, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      cM(o, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(l)
    ) : l;
    const c = r.slice(s.length);
    return { value: l, rest: c };
  };
}
function cM(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function fM(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function pM(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], a = r.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const o = r.slice(i.length);
    return { value: s, rest: o };
  };
}
const yM = /^(\d+)(th|st|nd|rd)?/i, dM = /\d+/i, hM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, mM = {
  any: [/^b/i, /^(a|c)/i]
}, vM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wM = {
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
}, kM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, _M = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, EM = {
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
}, AM = {
  ordinalNumber: pM({
    matchPattern: yM,
    parsePattern: dM,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ar({
    matchPatterns: hM,
    defaultMatchWidth: "wide",
    parsePatterns: mM,
    defaultParseWidth: "any"
  }),
  quarter: Ar({
    matchPatterns: vM,
    defaultMatchWidth: "wide",
    parsePatterns: gM,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ar({
    matchPatterns: bM,
    defaultMatchWidth: "wide",
    parsePatterns: wM,
    defaultParseWidth: "any"
  }),
  day: Ar({
    matchPatterns: kM,
    defaultMatchWidth: "wide",
    parsePatterns: _M,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ar({
    matchPatterns: xM,
    defaultMatchWidth: "any",
    parsePatterns: EM,
    defaultParseWidth: "any"
  })
}, OM = {
  code: "en-US",
  formatDistance: JP,
  formatLong: ZP,
  formatRelative: tM,
  localize: lM,
  match: AM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function SM(e, r) {
  const t = He(e, r?.in);
  return BP(t, HP(t)) + 1;
}
function jM(e, r) {
  const t = He(e, r?.in), n = +On(t) - +GP(t);
  return Math.round(n / lw) + 1;
}
function fw(e, r) {
  const t = He(e, r?.in), n = t.getFullYear(), i = Yn(), a = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, s = bt(r?.in || e, 0);
  s.setFullYear(n + 1, 0, a), s.setHours(0, 0, 0, 0);
  const o = Nr(s, r), u = bt(r?.in || e, 0);
  u.setFullYear(n, 0, a), u.setHours(0, 0, 0, 0);
  const l = Nr(u, r);
  return +t >= +o ? n + 1 : +t >= +l ? n : n - 1;
}
function PM(e, r) {
  const t = Yn(), n = r?.firstWeekContainsDate ?? r?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, i = fw(e, r), a = bt(r?.in || e, 0);
  return a.setFullYear(i, 0, n), a.setHours(0, 0, 0, 0), Nr(a, r);
}
function MM(e, r) {
  const t = He(e, r?.in), n = +Nr(t, r) - +PM(t, r);
  return Math.round(n / lw) + 1;
}
function fe(e, r) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(r, "0");
  return t + n;
}
const pt = {
  // Year
  y(e, r) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return fe(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M(e, r) {
    const t = e.getMonth();
    return r === "M" ? String(t + 1) : fe(t + 1, 2);
  },
  // Day of the month
  d(e, r) {
    return fe(e.getDate(), r.length);
  },
  // AM or PM
  a(e, r) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, r) {
    return fe(e.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(e, r) {
    return fe(e.getHours(), r.length);
  },
  // Minute
  m(e, r) {
    return fe(e.getMinutes(), r.length);
  },
  // Second
  s(e, r) {
    return fe(e.getSeconds(), r.length);
  },
  // Fraction of second
  S(e, r) {
    const t = r.length, n = e.getMilliseconds(), i = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return fe(i, r.length);
  }
}, Xt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Pl = {
  // Era
  G: function(e, r, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, r, t) {
    if (r === "yo") {
      const n = e.getFullYear(), i = n > 0 ? n : 1 - n;
      return t.ordinalNumber(i, { unit: "year" });
    }
    return pt.y(e, r);
  },
  // Local week-numbering year
  Y: function(e, r, t, n) {
    const i = fw(e, n), a = i > 0 ? i : 1 - i;
    if (r === "YY") {
      const s = a % 100;
      return fe(s, 2);
    }
    return r === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : fe(a, r.length);
  },
  // ISO week-numbering year
  R: function(e, r) {
    const t = cw(e);
    return fe(t, r.length);
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
  u: function(e, r) {
    const t = e.getFullYear();
    return fe(t, r.length);
  },
  // Quarter
  Q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return fe(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, r, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return fe(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return pt.M(e, r);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, r, t) {
    const n = e.getMonth();
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return fe(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, r, t, n) {
    const i = MM(e, n);
    return r === "wo" ? t.ordinalNumber(i, { unit: "week" }) : fe(i, r.length);
  },
  // ISO week of year
  I: function(e, r, t) {
    const n = jM(e);
    return r === "Io" ? t.ordinalNumber(n, { unit: "week" }) : fe(n, r.length);
  },
  // Day of the month
  d: function(e, r, t) {
    return r === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : pt.d(e, r);
  },
  // Day of year
  D: function(e, r, t) {
    const n = SM(e);
    return r === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : fe(n, r.length);
  },
  // Day of week
  E: function(e, r, t) {
    const n = e.getDay();
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return fe(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
      case "eee":
        return t.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(i, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, r, t, n) {
    const i = e.getDay(), a = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return fe(a, r.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return t.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(i, {
          width: "short",
          context: "standalone"
        });
      default:
        return t.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, r, t) {
    const n = e.getDay(), i = n === 0 ? 7 : n;
    switch (r) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return fe(i, r.length);
      // 2nd
      case "io":
        return t.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, r, t) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n === 12 ? i = Xt.noon : n === 0 ? i = Xt.midnight : i = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, r, t) {
    const n = e.getHours();
    let i;
    switch (n >= 17 ? i = Xt.evening : n >= 12 ? i = Xt.afternoon : n >= 4 ? i = Xt.morning : i = Xt.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, r, t) {
    if (r === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return pt.h(e, r);
  },
  // Hour [0-23]
  H: function(e, r, t) {
    return r === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : pt.H(e, r);
  },
  // Hour [0-11]
  K: function(e, r, t) {
    const n = e.getHours() % 12;
    return r === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : fe(n, r.length);
  },
  // Hour [1-24]
  k: function(e, r, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), r === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : fe(n, r.length);
  },
  // Minute
  m: function(e, r, t) {
    return r === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : pt.m(e, r);
  },
  // Second
  s: function(e, r, t) {
    return r === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : pt.s(e, r);
  },
  // Fraction of second
  S: function(e, r) {
    return pt.S(e, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, r, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (r) {
      // Hours and optional minutes
      case "X":
        return Dl(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Dt(n);
      // Hours and minutes with `:` delimiter
      default:
        return Dt(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Hours and optional minutes
      case "x":
        return Dl(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Dt(n);
      // Hours and minutes with `:` delimiter
      default:
        return Dt(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ml(n, ":");
      default:
        return "GMT" + Dt(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, r, t) {
    const n = e.getTimezoneOffset();
    switch (r) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ml(n, ":");
      default:
        return "GMT" + Dt(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, r, t) {
    const n = Math.trunc(+e / 1e3);
    return fe(n, r.length);
  },
  // Milliseconds timestamp
  T: function(e, r, t) {
    return fe(+e, r.length);
  }
};
function Ml(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = Math.trunc(n / 60), a = n % 60;
  return a === 0 ? t + String(i) : t + String(i) + r + fe(a, 2);
}
function Dl(e, r) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : Dt(e, r);
}
function Dt(e, r = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), i = fe(Math.trunc(n / 60), 2), a = fe(n % 60, 2);
  return t + i + r + a;
}
const $l = (e, r) => {
  switch (e) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    default:
      return r.date({ width: "full" });
  }
}, pw = (e, r) => {
  switch (e) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    default:
      return r.time({ width: "full" });
  }
}, DM = (e, r) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], i = t[2];
  if (!i)
    return $l(e, r);
  let a;
  switch (n) {
    case "P":
      a = r.dateTime({ width: "short" });
      break;
    case "PP":
      a = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = r.dateTime({ width: "long" });
      break;
    default:
      a = r.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", $l(n, r)).replace("{{time}}", pw(i, r));
}, $M = {
  p: pw,
  P: DM
}, qM = /^D+$/, IM = /^Y+$/, RM = ["D", "DD", "YY", "YYYY"];
function FM(e) {
  return qM.test(e);
}
function TM(e) {
  return IM.test(e);
}
function NM(e, r, t) {
  const n = CM(e, r, t);
  if (console.warn(n), RM.includes(e)) throw new RangeError(n);
}
function CM(e, r, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const LM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, WM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zM = /^'([^]*?)'?$/, BM = /''/g, GM = /[a-zA-Z]/;
function yw(e, r, t) {
  const n = Yn(), i = n.locale ?? OM, a = n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, s = n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = He(e, t?.in);
  if (!XP(o))
    throw new RangeError("Invalid time value");
  let u = r.match(WM).map((c) => {
    const f = c[0];
    if (f === "p" || f === "P") {
      const b = $M[f];
      return b(c, i.formatLong);
    }
    return c;
  }).join("").match(LM).map((c) => {
    if (c === "''")
      return { isToken: !1, value: "'" };
    const f = c[0];
    if (f === "'")
      return { isToken: !1, value: UM(c) };
    if (Pl[f])
      return { isToken: !0, value: c };
    if (f.match(GM))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: c };
  });
  i.localize.preprocessor && (u = i.localize.preprocessor(o, u));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: i
  };
  return u.map((c) => {
    if (!c.isToken) return c.value;
    const f = c.value;
    (TM(f) || FM(f)) && NM(f, r, String(e));
    const b = Pl[f[0]];
    return b(o, f, i.localize, l);
  }).join("");
}
function UM(e) {
  const r = e.match(zM);
  return r ? r[1].replace(BM, "'") : e;
}
var ql = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function XM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function HM(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      var i = !1;
      try {
        i = this instanceof n;
      } catch {
      }
      return i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Gi, Il;
function or() {
  return Il || (Il = 1, Gi = TypeError), Gi;
}
const VM = {}, JM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VM
}, Symbol.toStringTag, { value: "Module" })), YM = /* @__PURE__ */ HM(JM);
var Ui, Rl;
function Kn() {
  if (Rl) return Ui;
  Rl = 1;
  var e = typeof Map == "function" && Map.prototype, r = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, t = e && r && typeof r.get == "function" ? r.get : null, n = e && Map.prototype.forEach, i = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && i ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = i && a && typeof a.get == "function" ? a.get : null, o = i && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, f = c ? WeakSet.prototype.has : null, b = typeof WeakRef == "function" && WeakRef.prototype, d = b ? WeakRef.prototype.deref : null, E = Boolean.prototype.valueOf, m = Object.prototype.toString, h = Function.prototype.toString, P = String.prototype.match, O = String.prototype.slice, M = String.prototype.replace, v = String.prototype.toUpperCase, A = String.prototype.toLowerCase, x = RegExp.prototype.test, w = Array.prototype.concat, S = Array.prototype.join, j = Array.prototype.slice, I = Math.floor, $ = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, z = Object.getOwnPropertySymbols, X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, C = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === C || !0) ? Symbol.toStringTag : null, te = Object.prototype.propertyIsEnumerable, U = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(p) {
    return p.__proto__;
  } : null);
  function R(p, y) {
    if (p === 1 / 0 || p === -1 / 0 || p !== p || p && p > -1e3 && p < 1e3 || x.call(/e/, y))
      return y;
    var V = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof p == "number") {
      var Q = p < 0 ? -I(-p) : I(p);
      if (Q !== p) {
        var Z = String(Q), L = O.call(y, Z.length + 1);
        return M.call(Z, V, "$&_") + "." + M.call(M.call(L, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return M.call(y, V, "$&_");
  }
  var W = YM, g = W.custom, q = ee(g) ? g : null, D = {
    __proto__: null,
    double: '"',
    single: "'"
  }, J = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ui = function p(y, V, Q, Z) {
    var L = V || {};
    if (se(L, "quoteStyle") && !se(D, L.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (se(L, "maxStringLength") && (typeof L.maxStringLength == "number" ? L.maxStringLength < 0 && L.maxStringLength !== 1 / 0 : L.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var _e = se(L, "customInspect") ? L.customInspect : !0;
    if (typeof _e != "boolean" && _e !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (se(L, "indent") && L.indent !== null && L.indent !== "	" && !(parseInt(L.indent, 10) === L.indent && L.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (se(L, "numericSeparator") && typeof L.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ee = L.numericSeparator;
    if (typeof y > "u")
      return "undefined";
    if (y === null)
      return "null";
    if (typeof y == "boolean")
      return y ? "true" : "false";
    if (typeof y == "string")
      return ur(y, L);
    if (typeof y == "number") {
      if (y === 0)
        return 1 / 0 / y > 0 ? "0" : "-0";
      var pe = String(y);
      return Ee ? R(y, pe) : pe;
    }
    if (typeof y == "bigint") {
      var xe = String(y) + "n";
      return Ee ? R(y, xe) : xe;
    }
    var xt = typeof L.depth > "u" ? 5 : L.depth;
    if (typeof Q > "u" && (Q = 0), Q >= xt && xt > 0 && typeof y == "object")
      return re(y) ? "[Array]" : "[Object]";
    var qe = ni(L, Q);
    if (typeof Z > "u")
      Z = [];
    else if (ge(Z, y) >= 0)
      return "[Circular]";
    function ve(Ie, tt, ai) {
      if (tt && (Z = j.call(Z), Z.push(tt)), ai) {
        var vr = {
          depth: L.depth
        };
        return se(L, "quoteStyle") && (vr.quoteStyle = L.quoteStyle), p(Ie, vr, Q + 1, Z);
      }
      return p(Ie, L, Q + 1, Z);
    }
    if (typeof y == "function" && !Y(y)) {
      var cr = Ae(y), fr = Ze(y, ve);
      return "[Function" + (cr ? ": " + cr : " (anonymous)") + "]" + (fr.length > 0 ? " { " + S.call(fr, ", ") + " }" : "");
    }
    if (ee(y)) {
      var pr = C ? M.call(String(y), /^(Symbol\(.*\))_[^)]*$/, "$1") : X.call(y);
      return typeof y == "object" && !C ? ze(pr) : pr;
    }
    if (ei(y)) {
      for (var Be = "<" + A.call(String(y.nodeName)), Et = y.attributes || [], et = 0; et < Et.length; et++)
        Be += " " + Et[et].name + "=" + ne(ae(Et[et].value), "double", L);
      return Be += ">", y.childNodes && y.childNodes.length && (Be += "..."), Be += "</" + A.call(String(y.nodeName)) + ">", Be;
    }
    if (re(y)) {
      if (y.length === 0)
        return "[]";
      var At = Ze(y, ve);
      return qe && !ri(At) ? "[" + _t(At, qe) + "]" : "[ " + S.call(At, ", ") + " ]";
    }
    if (G(y)) {
      var Ot = Ze(y, ve);
      return !("cause" in Error.prototype) && "cause" in y && !te.call(y, "cause") ? "{ [" + String(y) + "] " + S.call(w.call("[cause]: " + ve(y.cause), Ot), ", ") + " }" : Ot.length === 0 ? "[" + String(y) + "]" : "{ [" + String(y) + "] " + S.call(Ot, ", ") + " }";
    }
    if (typeof y == "object" && _e) {
      if (q && typeof y[q] == "function" && W)
        return W(y, { depth: xt - Q });
      if (_e !== "symbol" && typeof y.inspect == "function")
        return y.inspect();
    }
    if (ke(y)) {
      var yr = [];
      return n && n.call(y, function(Ie, tt) {
        yr.push(ve(tt, y, !0) + " => " + ve(Ie, y));
      }), lr("Map", t.call(y), yr, qe);
    }
    if (ct(y)) {
      var dr = [];
      return o && o.call(y, function(Ie) {
        dr.push(ve(Ie, y));
      }), lr("Set", s.call(y), dr, qe);
    }
    if (De(y))
      return kt("WeakMap");
    if (Zn(y))
      return kt("WeakSet");
    if ($e(y))
      return kt("WeakRef");
    if (N(y))
      return ze(ve(Number(y)));
    if (ue(y))
      return ze(ve($.call(y)));
    if (K(y))
      return ze(E.call(y));
    if (H(y))
      return ze(ve(String(y)));
    if (typeof window < "u" && y === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && y === globalThis || typeof ql < "u" && y === ql)
      return "{ [object globalThis] }";
    if (!oe(y) && !Y(y)) {
      var St = Ze(y, ve), hr = U ? U(y) === Object.prototype : y instanceof Object || y.constructor === Object, jt = y instanceof Object ? "" : "null prototype", mr = !hr && B && Object(y) === y && B in y ? O.call(ye(y), 8, -1) : jt ? "Object" : "", ii = hr || typeof y.constructor != "function" ? "" : y.constructor.name ? y.constructor.name + " " : "", Pt = ii + (mr || jt ? "[" + S.call(w.call([], mr || [], jt || []), ": ") + "] " : "");
      return St.length === 0 ? Pt + "{}" : qe ? Pt + "{" + _t(St, qe) + "}" : Pt + "{ " + S.call(St, ", ") + " }";
    }
    return String(y);
  };
  function ne(p, y, V) {
    var Q = V.quoteStyle || y, Z = D[Q];
    return Z + p + Z;
  }
  function ae(p) {
    return M.call(String(p), /"/g, "&quot;");
  }
  function ie(p) {
    return !B || !(typeof p == "object" && (B in p || typeof p[B] < "u"));
  }
  function re(p) {
    return ye(p) === "[object Array]" && ie(p);
  }
  function oe(p) {
    return ye(p) === "[object Date]" && ie(p);
  }
  function Y(p) {
    return ye(p) === "[object RegExp]" && ie(p);
  }
  function G(p) {
    return ye(p) === "[object Error]" && ie(p);
  }
  function H(p) {
    return ye(p) === "[object String]" && ie(p);
  }
  function N(p) {
    return ye(p) === "[object Number]" && ie(p);
  }
  function K(p) {
    return ye(p) === "[object Boolean]" && ie(p);
  }
  function ee(p) {
    if (C)
      return p && typeof p == "object" && p instanceof Symbol;
    if (typeof p == "symbol")
      return !0;
    if (!p || typeof p != "object" || !X)
      return !1;
    try {
      return X.call(p), !0;
    } catch {
    }
    return !1;
  }
  function ue(p) {
    if (!p || typeof p != "object" || !$)
      return !1;
    try {
      return $.call(p), !0;
    } catch {
    }
    return !1;
  }
  var le = Object.prototype.hasOwnProperty || function(p) {
    return p in this;
  };
  function se(p, y) {
    return le.call(p, y);
  }
  function ye(p) {
    return m.call(p);
  }
  function Ae(p) {
    if (p.name)
      return p.name;
    var y = P.call(h.call(p), /^function\s*([\w$]+)/);
    return y ? y[1] : null;
  }
  function ge(p, y) {
    if (p.indexOf)
      return p.indexOf(y);
    for (var V = 0, Q = p.length; V < Q; V++)
      if (p[V] === y)
        return V;
    return -1;
  }
  function ke(p) {
    if (!t || !p || typeof p != "object")
      return !1;
    try {
      t.call(p);
      try {
        s.call(p);
      } catch {
        return !0;
      }
      return p instanceof Map;
    } catch {
    }
    return !1;
  }
  function De(p) {
    if (!l || !p || typeof p != "object")
      return !1;
    try {
      l.call(p, l);
      try {
        f.call(p, f);
      } catch {
        return !0;
      }
      return p instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function $e(p) {
    if (!d || !p || typeof p != "object")
      return !1;
    try {
      return d.call(p), !0;
    } catch {
    }
    return !1;
  }
  function ct(p) {
    if (!s || !p || typeof p != "object")
      return !1;
    try {
      s.call(p);
      try {
        t.call(p);
      } catch {
        return !0;
      }
      return p instanceof Set;
    } catch {
    }
    return !1;
  }
  function Zn(p) {
    if (!f || !p || typeof p != "object")
      return !1;
    try {
      f.call(p, f);
      try {
        l.call(p, l);
      } catch {
        return !0;
      }
      return p instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function ei(p) {
    return !p || typeof p != "object" ? !1 : typeof HTMLElement < "u" && p instanceof HTMLElement ? !0 : typeof p.nodeName == "string" && typeof p.getAttribute == "function";
  }
  function ur(p, y) {
    if (p.length > y.maxStringLength) {
      var V = p.length - y.maxStringLength, Q = "... " + V + " more character" + (V > 1 ? "s" : "");
      return ur(O.call(p, 0, y.maxStringLength), y) + Q;
    }
    var Z = J[y.quoteStyle || "single"];
    Z.lastIndex = 0;
    var L = M.call(M.call(p, Z, "\\$1"), /[\x00-\x1f]/g, ti);
    return ne(L, "single", y);
  }
  function ti(p) {
    var y = p.charCodeAt(0), V = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[y];
    return V ? "\\" + V : "\\x" + (y < 16 ? "0" : "") + v.call(y.toString(16));
  }
  function ze(p) {
    return "Object(" + p + ")";
  }
  function kt(p) {
    return p + " { ? }";
  }
  function lr(p, y, V, Q) {
    var Z = Q ? _t(V, Q) : S.call(V, ", ");
    return p + " (" + y + ") {" + Z + "}";
  }
  function ri(p) {
    for (var y = 0; y < p.length; y++)
      if (ge(p[y], `
`) >= 0)
        return !1;
    return !0;
  }
  function ni(p, y) {
    var V;
    if (p.indent === "	")
      V = "	";
    else if (typeof p.indent == "number" && p.indent > 0)
      V = S.call(Array(p.indent + 1), " ");
    else
      return null;
    return {
      base: V,
      prev: S.call(Array(y + 1), V)
    };
  }
  function _t(p, y) {
    if (p.length === 0)
      return "";
    var V = `
` + y.prev + y.base;
    return V + S.call(p, "," + V) + `
` + y.prev;
  }
  function Ze(p, y) {
    var V = re(p), Q = [];
    if (V) {
      Q.length = p.length;
      for (var Z = 0; Z < p.length; Z++)
        Q[Z] = se(p, Z) ? y(p[Z], p) : "";
    }
    var L = typeof z == "function" ? z(p) : [], _e;
    if (C) {
      _e = {};
      for (var Ee = 0; Ee < L.length; Ee++)
        _e["$" + L[Ee]] = L[Ee];
    }
    for (var pe in p)
      se(p, pe) && (V && String(Number(pe)) === pe && pe < p.length || C && _e["$" + pe] instanceof Symbol || (x.call(/[^\w$]/, pe) ? Q.push(y(pe, p) + ": " + y(p[pe], p)) : Q.push(pe + ": " + y(p[pe], p))));
    if (typeof z == "function")
      for (var xe = 0; xe < L.length; xe++)
        te.call(p, L[xe]) && Q.push("[" + y(L[xe]) + "]: " + y(p[L[xe]], p));
    return Q;
  }
  return Ui;
}
var Xi, Fl;
function KM() {
  if (Fl) return Xi;
  Fl = 1;
  var e = /* @__PURE__ */ Kn(), r = /* @__PURE__ */ or(), t = function(o, u, l) {
    for (var c = o, f; (f = c.next) != null; c = f)
      if (f.key === u)
        return c.next = f.next, l || (f.next = /** @type {NonNullable<typeof list.next>} */
        o.next, o.next = f), f;
  }, n = function(o, u) {
    if (o) {
      var l = t(o, u);
      return l && l.value;
    }
  }, i = function(o, u, l) {
    var c = t(o, u);
    c ? c.value = l : o.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: o.next,
      value: l
    };
  }, a = function(o, u) {
    return o ? !!t(o, u) : !1;
  }, s = function(o, u) {
    if (o)
      return t(o, u, !0);
  };
  return Xi = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new r("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var f = s(u, c);
        return f && u && !u.next && (u = void 0), !!f;
      },
      get: function(c) {
        return n(u, c);
      },
      has: function(c) {
        return a(u, c);
      },
      set: function(c, f) {
        u || (u = {
          next: void 0
        }), i(
          /** @type {NonNullable<typeof $o>} */
          u,
          c,
          f
        );
      }
    };
    return l;
  }, Xi;
}
var Hi, Tl;
function dw() {
  return Tl || (Tl = 1, Hi = Object), Hi;
}
var Vi, Nl;
function QM() {
  return Nl || (Nl = 1, Vi = Error), Vi;
}
var Ji, Cl;
function ZM() {
  return Cl || (Cl = 1, Ji = EvalError), Ji;
}
var Yi, Ll;
function eD() {
  return Ll || (Ll = 1, Yi = RangeError), Yi;
}
var Ki, Wl;
function tD() {
  return Wl || (Wl = 1, Ki = ReferenceError), Ki;
}
var Qi, zl;
function rD() {
  return zl || (zl = 1, Qi = SyntaxError), Qi;
}
var Zi, Bl;
function nD() {
  return Bl || (Bl = 1, Zi = URIError), Zi;
}
var ea, Gl;
function iD() {
  return Gl || (Gl = 1, ea = Math.abs), ea;
}
var ta, Ul;
function aD() {
  return Ul || (Ul = 1, ta = Math.floor), ta;
}
var ra, Xl;
function sD() {
  return Xl || (Xl = 1, ra = Math.max), ra;
}
var na, Hl;
function oD() {
  return Hl || (Hl = 1, na = Math.min), na;
}
var ia, Vl;
function uD() {
  return Vl || (Vl = 1, ia = Math.pow), ia;
}
var aa, Jl;
function lD() {
  return Jl || (Jl = 1, aa = Math.round), aa;
}
var sa, Yl;
function cD() {
  return Yl || (Yl = 1, sa = Number.isNaN || function(r) {
    return r !== r;
  }), sa;
}
var oa, Kl;
function fD() {
  if (Kl) return oa;
  Kl = 1;
  var e = /* @__PURE__ */ cD();
  return oa = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, oa;
}
var ua, Ql;
function pD() {
  return Ql || (Ql = 1, ua = Object.getOwnPropertyDescriptor), ua;
}
var la, Zl;
function hw() {
  if (Zl) return la;
  Zl = 1;
  var e = /* @__PURE__ */ pD();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return la = e, la;
}
var ca, ec;
function mw() {
  if (ec) return ca;
  ec = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ca = e, ca;
}
var fa, tc;
function yD() {
  return tc || (tc = 1, fa = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, t = /* @__PURE__ */ Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var i = 42;
    r[t] = i;
    for (var a in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(r);
    if (s.length !== 1 || s[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var o = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, t)
      );
      if (o.value !== i || o.enumerable !== !0)
        return !1;
    }
    return !0;
  }), fa;
}
var pa, rc;
function dD() {
  if (rc) return pa;
  rc = 1;
  var e = typeof Symbol < "u" && Symbol, r = yD();
  return pa = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : r();
  }, pa;
}
var ya, nc;
function vw() {
  return nc || (nc = 1, ya = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ya;
}
var da, ic;
function gw() {
  if (ic) return da;
  ic = 1;
  var e = /* @__PURE__ */ dw();
  return da = e.getPrototypeOf || null, da;
}
var ha, ac;
function hD() {
  if (ac) return ha;
  ac = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max, n = "[object Function]", i = function(u, l) {
    for (var c = [], f = 0; f < u.length; f += 1)
      c[f] = u[f];
    for (var b = 0; b < l.length; b += 1)
      c[b + u.length] = l[b];
    return c;
  }, a = function(u, l) {
    for (var c = [], f = l, b = 0; f < u.length; f += 1, b += 1)
      c[b] = u[f];
    return c;
  }, s = function(o, u) {
    for (var l = "", c = 0; c < o.length; c += 1)
      l += o[c], c + 1 < o.length && (l += u);
    return l;
  };
  return ha = function(u) {
    var l = this;
    if (typeof l != "function" || r.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = a(arguments, 1), f, b = function() {
      if (this instanceof f) {
        var P = l.apply(
          this,
          i(c, arguments)
        );
        return Object(P) === P ? P : this;
      }
      return l.apply(
        u,
        i(c, arguments)
      );
    }, d = t(0, l.length - c.length), E = [], m = 0; m < d; m++)
      E[m] = "$" + m;
    if (f = Function("binder", "return function (" + s(E, ",") + "){ return binder.apply(this,arguments); }")(b), l.prototype) {
      var h = function() {
      };
      h.prototype = l.prototype, f.prototype = new h(), h.prototype = null;
    }
    return f;
  }, ha;
}
var ma, sc;
function Qn() {
  if (sc) return ma;
  sc = 1;
  var e = hD();
  return ma = Function.prototype.bind || e, ma;
}
var va, oc;
function ao() {
  return oc || (oc = 1, va = Function.prototype.call), va;
}
var ga, uc;
function bw() {
  return uc || (uc = 1, ga = Function.prototype.apply), ga;
}
var ba, lc;
function mD() {
  return lc || (lc = 1, ba = typeof Reflect < "u" && Reflect && Reflect.apply), ba;
}
var wa, cc;
function vD() {
  if (cc) return wa;
  cc = 1;
  var e = Qn(), r = bw(), t = ao(), n = mD();
  return wa = n || e.call(t, r), wa;
}
var ka, fc;
function ww() {
  if (fc) return ka;
  fc = 1;
  var e = Qn(), r = /* @__PURE__ */ or(), t = ao(), n = vD();
  return ka = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new r("a function is required");
    return n(e, t, a);
  }, ka;
}
var _a, pc;
function gD() {
  if (pc) return _a;
  pc = 1;
  var e = ww(), r = /* @__PURE__ */ hw(), t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!t && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), i = Object, a = i.getPrototypeOf;
  return _a = n && typeof n.get == "function" ? e([n.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(o) {
      return a(o == null ? o : i(o));
    }
  ) : !1, _a;
}
var xa, yc;
function bD() {
  if (yc) return xa;
  yc = 1;
  var e = vw(), r = gw(), t = /* @__PURE__ */ gD();
  return xa = e ? function(i) {
    return e(i);
  } : r ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function")
      throw new TypeError("getProto: not an object");
    return r(i);
  } : t ? function(i) {
    return t(i);
  } : null, xa;
}
var Ea, dc;
function wD() {
  if (dc) return Ea;
  dc = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = Qn();
  return Ea = t.call(e, r), Ea;
}
var Aa, hc;
function so() {
  if (hc) return Aa;
  hc = 1;
  var e, r = /* @__PURE__ */ dw(), t = /* @__PURE__ */ QM(), n = /* @__PURE__ */ ZM(), i = /* @__PURE__ */ eD(), a = /* @__PURE__ */ tD(), s = /* @__PURE__ */ rD(), o = /* @__PURE__ */ or(), u = /* @__PURE__ */ nD(), l = /* @__PURE__ */ iD(), c = /* @__PURE__ */ aD(), f = /* @__PURE__ */ sD(), b = /* @__PURE__ */ oD(), d = /* @__PURE__ */ uD(), E = /* @__PURE__ */ lD(), m = /* @__PURE__ */ fD(), h = Function, P = function(Y) {
    try {
      return h('"use strict"; return (' + Y + ").constructor;")();
    } catch {
    }
  }, O = /* @__PURE__ */ hw(), M = /* @__PURE__ */ mw(), v = function() {
    throw new o();
  }, A = O ? (function() {
    try {
      return arguments.callee, v;
    } catch {
      try {
        return O(arguments, "callee").get;
      } catch {
        return v;
      }
    }
  })() : v, x = dD()(), w = bD(), S = gw(), j = vw(), I = bw(), $ = ao(), z = {}, X = typeof Uint8Array > "u" || !w ? e : w(Uint8Array), C = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": x && w ? w([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": z,
    "%AsyncGenerator%": z,
    "%AsyncGeneratorFunction%": z,
    "%AsyncIteratorPrototype%": z,
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
    "%Error%": t,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": h,
    "%GeneratorFunction%": z,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": x && w ? w(w([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !x || !w ? e : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": O,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": i,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !x || !w ? e : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": x && w ? w(""[Symbol.iterator]()) : e,
    "%Symbol%": x ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": A,
    "%TypedArray%": X,
    "%TypeError%": o,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": $,
    "%Function.prototype.apply%": I,
    "%Object.defineProperty%": M,
    "%Object.getPrototypeOf%": S,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": f,
    "%Math.min%": b,
    "%Math.pow%": d,
    "%Math.round%": E,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": j
  };
  if (w)
    try {
      null.error;
    } catch (Y) {
      var B = w(w(Y));
      C["%Error.prototype%"] = B;
    }
  var te = function Y(G) {
    var H;
    if (G === "%AsyncFunction%")
      H = P("async function () {}");
    else if (G === "%GeneratorFunction%")
      H = P("function* () {}");
    else if (G === "%AsyncGeneratorFunction%")
      H = P("async function* () {}");
    else if (G === "%AsyncGenerator%") {
      var N = Y("%AsyncGeneratorFunction%");
      N && (H = N.prototype);
    } else if (G === "%AsyncIteratorPrototype%") {
      var K = Y("%AsyncGenerator%");
      K && w && (H = w(K.prototype));
    }
    return C[G] = H, H;
  }, U = {
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
  }, R = Qn(), W = /* @__PURE__ */ wD(), g = R.call($, Array.prototype.concat), q = R.call(I, Array.prototype.splice), D = R.call($, String.prototype.replace), J = R.call($, String.prototype.slice), ne = R.call($, RegExp.prototype.exec), ae = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ie = /\\(\\)?/g, re = function(G) {
    var H = J(G, 0, 1), N = J(G, -1);
    if (H === "%" && N !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (N === "%" && H !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var K = [];
    return D(G, ae, function(ee, ue, le, se) {
      K[K.length] = le ? D(se, ie, "$1") : ue || ee;
    }), K;
  }, oe = function(G, H) {
    var N = G, K;
    if (W(U, N) && (K = U[N], N = "%" + K[0] + "%"), W(C, N)) {
      var ee = C[N];
      if (ee === z && (ee = te(N)), typeof ee > "u" && !H)
        throw new o("intrinsic " + G + " exists, but is not available. Please file an issue!");
      return {
        alias: K,
        name: N,
        value: ee
      };
    }
    throw new s("intrinsic " + G + " does not exist!");
  };
  return Aa = function(G, H) {
    if (typeof G != "string" || G.length === 0)
      throw new o("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof H != "boolean")
      throw new o('"allowMissing" argument must be a boolean');
    if (ne(/^%?[^%]*%?$/, G) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var N = re(G), K = N.length > 0 ? N[0] : "", ee = oe("%" + K + "%", H), ue = ee.name, le = ee.value, se = !1, ye = ee.alias;
    ye && (K = ye[0], q(N, g([0, 1], ye)));
    for (var Ae = 1, ge = !0; Ae < N.length; Ae += 1) {
      var ke = N[Ae], De = J(ke, 0, 1), $e = J(ke, -1);
      if ((De === '"' || De === "'" || De === "`" || $e === '"' || $e === "'" || $e === "`") && De !== $e)
        throw new s("property names with quotes must have matching quotes");
      if ((ke === "constructor" || !ge) && (se = !0), K += "." + ke, ue = "%" + K + "%", W(C, ue))
        le = C[ue];
      else if (le != null) {
        if (!(ke in le)) {
          if (!H)
            throw new o("base intrinsic for " + G + " exists, but the property is not available.");
          return;
        }
        if (O && Ae + 1 >= N.length) {
          var ct = O(le, ke);
          ge = !!ct, ge && "get" in ct && !("originalValue" in ct.get) ? le = ct.get : le = le[ke];
        } else
          ge = W(le, ke), le = le[ke];
        ge && !se && (C[ue] = le);
      }
    }
    return le;
  }, Aa;
}
var Oa, mc;
function kw() {
  if (mc) return Oa;
  mc = 1;
  var e = /* @__PURE__ */ so(), r = ww(), t = r([e("%String.prototype.indexOf%")]);
  return Oa = function(i, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(i, !!a)
    );
    return typeof s == "function" && t(i, ".prototype.") > -1 ? r(
      /** @type {const} */
      [s]
    ) : s;
  }, Oa;
}
var Sa, vc;
function _w() {
  if (vc) return Sa;
  vc = 1;
  var e = /* @__PURE__ */ so(), r = /* @__PURE__ */ kw(), t = /* @__PURE__ */ Kn(), n = /* @__PURE__ */ or(), i = e("%Map%", !0), a = r("Map.prototype.get", !0), s = r("Map.prototype.set", !0), o = r("Map.prototype.has", !0), u = r("Map.prototype.delete", !0), l = r("Map.prototype.size", !0);
  return Sa = !!i && /** @type {Exclude<import('.'), false>} */
  function() {
    var f, b = {
      assert: function(d) {
        if (!b.has(d))
          throw new n("Side channel does not contain " + t(d));
      },
      delete: function(d) {
        if (f) {
          var E = u(f, d);
          return l(f) === 0 && (f = void 0), E;
        }
        return !1;
      },
      get: function(d) {
        if (f)
          return a(f, d);
      },
      has: function(d) {
        return f ? o(f, d) : !1;
      },
      set: function(d, E) {
        f || (f = new i()), s(f, d, E);
      }
    };
    return b;
  }, Sa;
}
var ja, gc;
function kD() {
  if (gc) return ja;
  gc = 1;
  var e = /* @__PURE__ */ so(), r = /* @__PURE__ */ kw(), t = /* @__PURE__ */ Kn(), n = _w(), i = /* @__PURE__ */ or(), a = e("%WeakMap%", !0), s = r("WeakMap.prototype.get", !0), o = r("WeakMap.prototype.set", !0), u = r("WeakMap.prototype.has", !0), l = r("WeakMap.prototype.delete", !0);
  return ja = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var f, b, d = {
        assert: function(E) {
          if (!d.has(E))
            throw new i("Side channel does not contain " + t(E));
        },
        delete: function(E) {
          if (a && E && (typeof E == "object" || typeof E == "function")) {
            if (f)
              return l(f, E);
          } else if (n && b)
            return b.delete(E);
          return !1;
        },
        get: function(E) {
          return a && E && (typeof E == "object" || typeof E == "function") && f ? s(f, E) : b && b.get(E);
        },
        has: function(E) {
          return a && E && (typeof E == "object" || typeof E == "function") && f ? u(f, E) : !!b && b.has(E);
        },
        set: function(E, m) {
          a && E && (typeof E == "object" || typeof E == "function") ? (f || (f = new a()), o(f, E, m)) : n && (b || (b = n()), b.set(E, m));
        }
      };
      return d;
    }
  ) : n, ja;
}
var Pa, bc;
function oo() {
  if (bc) return Pa;
  bc = 1;
  var e = /* @__PURE__ */ or(), r = /* @__PURE__ */ Kn(), t = KM(), n = _w(), i = kD(), a = i || n || t;
  return Pa = function() {
    var o, u = {
      assert: function(l) {
        if (!u.has(l)) {
          var c = l && Object(l) === l ? "the given object key" : r(l);
          throw new e("Side channel does not contain " + c);
        }
      },
      delete: function(l) {
        return !!o && o.delete(l);
      },
      get: function(l) {
        return o && o.get(l);
      },
      has: function(l) {
        return !!o && o.has(l);
      },
      set: function(l, c) {
        o || (o = a()), o.set(l, c);
      }
    };
    return u;
  }, Pa;
}
var Ma, wc;
function uo() {
  if (wc) return Ma;
  wc = 1;
  var e = String.prototype.replace, r = /%20/g, t = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ma = {
    default: t.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, r, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: t.RFC1738,
    RFC3986: t.RFC3986
  }, Ma;
}
var Da, kc;
function xw() {
  if (kc) return Da;
  kc = 1;
  var e = /* @__PURE__ */ uo(), r = oo(), t = /* @__PURE__ */ mw(), n = Object.prototype.hasOwnProperty, i = Array.isArray, a = r(), s = function(g, q) {
    return a.set(g, q), g;
  }, o = function(g) {
    return a.has(g);
  }, u = function(g) {
    return a.get(g);
  }, l = function(g, q) {
    a.set(g, q);
  }, c = r(), f = function(g, q) {
    return c.set(g, q), g;
  }, b = function(g) {
    return c.has(g);
  }, d = function(g) {
    return c.get(g);
  }, E = (function() {
    for (var W = [], g = 0; g < 256; ++g)
      W[W.length] = "%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase();
    return W;
  })(), m = function(g) {
    for (; g.length > 1; ) {
      var q = g.pop(), D = q.obj[q.prop];
      if (i(D)) {
        for (var J = [], ne = 0; ne < D.length; ++ne)
          typeof D[ne] < "u" && (J[J.length] = D[ne]);
        q.obj[q.prop] = J;
      }
    }
  }, h = function(g, q) {
    for (var D = q && q.plainObjects ? { __proto__: null } : {}, J = 0; J < g.length; ++J)
      typeof g[J] < "u" && (D[J] = g[J]);
    return D;
  }, P = function(g, q, D) {
    q === "__proto__" && t ? t(g, q, {
      configurable: !0,
      enumerable: !0,
      value: D,
      writable: !0
    }) : g[q] = D;
  }, O = function(g, q) {
    for (var D = q, J = Object.keys(g), ne = 0; ne < J.length; ++ne) {
      var ae = parseInt(J[ne], 10);
      String(ae) === J[ne] && ae > D && (D = ae);
    }
    return D;
  }, M = function(g, q, D) {
    var J = [g, q];
    if (D && typeof D.arrayLimit == "number" && J.length > D.arrayLimit) {
      if (D.throwOnLimitExceeded)
        throw new RangeError("Array limit exceeded. Only " + D.arrayLimit + " element" + (D.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      return s(h(J, D), 1);
    }
    return J;
  }, v = function W(g, q, D) {
    if (!q)
      return g;
    if (typeof q != "object" && typeof q != "function") {
      if (i(g)) {
        var J = g.length;
        if (D && typeof D.arrayLimit == "number" && J >= D.arrayLimit) {
          if (D.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + D.arrayLimit + " element" + (D.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          return s(h(g.concat(q), D), J);
        }
        g[J] = q;
      } else if (g && typeof g == "object")
        if (o(g)) {
          var ne = u(g) + 1;
          g[ne] = q, l(g, ne);
        } else if (D && D.strictMerge && b(g)) {
          var ae = d(g) + 1;
          if (D.throwOnLimitExceeded && typeof D.arrayLimit == "number" && ae >= D.arrayLimit)
            throw new RangeError("Array limit exceeded. Only " + D.arrayLimit + " element" + (D.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          g[ae] = q, f(g, ae);
        } else if (D && D.strictMerge) {
          var ie = M(g, q, D);
          return i(ie) ? f(ie, 1) : ie;
        } else (D && (D.plainObjects || D.allowPrototypes) || !n.call(Object.prototype, q)) && (g[q] = !0);
      else
        return M(g, q, D);
      return g;
    }
    if (!g || typeof g != "object") {
      if (o(q)) {
        for (var re = Object.keys(q), oe = D && D.plainObjects ? { __proto__: null, 0: g } : { 0: g }, Y = 0; Y < re.length; Y++) {
          var G = parseInt(re[Y], 10);
          oe[G + 1] = q[re[Y]];
        }
        return s(oe, u(q) + 1);
      }
      var H = [g].concat(q);
      if (D && typeof D.arrayLimit == "number" && H.length > D.arrayLimit) {
        if (D.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + D.arrayLimit + " element" + (D.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return s(h(H, D), H.length - 1);
      }
      return H;
    }
    var N = g;
    if (i(g) && !i(q) && (N = h(g, D), b(g) && f(N, g.length - 1)), i(g) && i(q)) {
      if (q.forEach(function(K, ee) {
        if (n.call(g, ee)) {
          var ue = g[ee];
          ue && typeof ue == "object" && K && typeof K == "object" ? g[ee] = W(ue, K, D) : g[g.length] = K;
        } else
          g[ee] = K;
      }), D && typeof D.arrayLimit == "number" && g.length > D.arrayLimit) {
        if (D.throwOnLimitExceeded)
          throw new RangeError("Array limit exceeded. Only " + D.arrayLimit + " element" + (D.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        return s(h(g, D), g.length - 1);
      }
      return g;
    }
    return Object.keys(q).reduce(function(K, ee) {
      var ue = q[ee];
      if (n.call(K, ee) ? P(K, ee, W(K[ee], ue, D)) : P(K, ee, ue), o(q) && !o(K) && s(K, O(K, u(q))), o(K)) {
        var le = parseInt(ee, 10);
        String(le) === ee && le >= 0 && le > u(K) && l(K, le);
      }
      if (b(K)) {
        var se = parseInt(ee, 10);
        String(se) === ee && se > d(K) && f(K, se);
      }
      return K;
    }, N);
  }, A = function(g, q) {
    return Object.keys(q).reduce(function(D, J) {
      return P(D, J, q[J]), D;
    }, g);
  }, x = function(W, g, q) {
    if (typeof W == "string" && W.indexOf("%") === -1)
      return W.indexOf("+") === -1 ? W : W.replace(/\+/g, " ");
    var D = W.replace(/\+/g, " ");
    if (q === "iso-8859-1")
      return D.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(D);
    } catch {
      return D;
    }
  }, w = typeof Symbol == "function" && typeof Symbol.toPrimitive == "symbol", S = Array.prototype.join, j = Array.prototype.toString, I = Object.prototype.toString, $ = function W(g, q) {
    if (!g || typeof g != "object" && typeof g != "function" || w && g[Symbol.toPrimitive] != null)
      return g;
    if (i(g) && g.toString === j && g.join === S) {
      var D = q || r();
      if (D.has(g))
        return "";
      D.set(g, !0);
      for (var J, ne = 0; ne < g.length; ne += 1) {
        var ae = g[ne], ie = W(ae, D);
        if (!J && ie !== ae) {
          J = [];
          for (var re = 0; re < ne; re += 1)
            J[re] = g[re];
        }
        J && (J[ne] = ie);
      }
      return D.delete(g), J || g;
    }
    if (typeof g.toString == "function")
      return g;
    var oe = g.valueOf;
    if (typeof oe == "function") {
      var Y = oe.call(g);
      if (!Y || typeof Y != "object" && typeof Y != "function")
        return String(Y);
    }
    return I.call(g);
  }, z = 1024, X = function(g, q, D, J, ne) {
    if (g.length === 0)
      return g;
    var ae = g;
    if (typeof g == "symbol" ? ae = Symbol.prototype.toString.call(g) : typeof g != "string" && (ae = String($(g))), D === "iso-8859-1")
      return escape(ae).replace(/%u[0-9a-f]{4}/gi, function(K) {
        return "%26%23" + parseInt(K.slice(2), 16) + "%3B";
      }).replace(/\+/g, "%2B");
    for (var ie = "", re = 0; re < ae.length; re += z) {
      var oe = ae.length >= z ? ae.slice(re, re + z) : ae;
      if (re + z < ae.length) {
        var Y = oe.charCodeAt(oe.length - 1);
        Y >= 55296 && Y <= 56319 && (oe = oe.slice(0, -1), re -= 1);
      }
      for (var G = [], H = 0; H < oe.length; ++H) {
        var N = oe.charCodeAt(H);
        if (N === 45 || N === 46 || N === 95 || N === 126 || N >= 48 && N <= 57 || N >= 65 && N <= 90 || N >= 97 && N <= 122 || ne === e.RFC1738 && (N === 40 || N === 41)) {
          G[G.length] = oe.charAt(H);
          continue;
        }
        if (N < 128) {
          G[G.length] = E[N];
          continue;
        }
        if (N < 2048) {
          G[G.length] = E[192 | N >> 6] + E[128 | N & 63];
          continue;
        }
        if (N < 55296 || N >= 57344) {
          G[G.length] = E[224 | N >> 12] + E[128 | N >> 6 & 63] + E[128 | N & 63];
          continue;
        }
        H += 1, N = 65536 + ((N & 1023) << 10 | oe.charCodeAt(H) & 1023), G[G.length] = E[240 | N >> 18] + E[128 | N >> 12 & 63] + E[128 | N >> 6 & 63] + E[128 | N & 63];
      }
      ie += G.join("");
    }
    return ie;
  }, C = function(g) {
    for (var q = [{ obj: { o: g }, prop: "o" }], D = r(), J = 0; J < q.length; ++J)
      for (var ne = q[J], ae = ne.obj[ne.prop], ie = Object.keys(ae), re = 0; re < ie.length; ++re) {
        var oe = ie[re], Y = ae[oe];
        typeof Y == "object" && Y !== null && !D.has(Y) && (q[q.length] = { obj: ae, prop: oe }, D.set(Y, !0));
      }
    return m(q), g;
  }, B = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, te = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && typeof g.constructor.isBuffer == "function" && g.constructor.isBuffer(g));
  }, U = function(g, q, D, J, ne) {
    if (o(g)) {
      if (ne)
        throw new RangeError("Array limit exceeded. Only " + D + " element" + (D === 1 ? "" : "s") + " allowed in an array.");
      for (var ae = i(q) ? q : [q], ie = u(g), re = 0; re < ae.length; ++re)
        ie += 1, g[ie] = ae[re];
      return l(g, ie), g;
    }
    var oe = [].concat(g, q);
    if (oe.length > D) {
      if (ne)
        throw new RangeError("Array limit exceeded. Only " + D + " element" + (D === 1 ? "" : "s") + " allowed in an array.");
      return s(h(oe, { plainObjects: J }), oe.length - 1);
    }
    return oe;
  }, R = function(g, q) {
    if (i(g)) {
      for (var D = [], J = 0; J < g.length; J += 1)
        D[D.length] = q(g[J]);
      return D;
    }
    return q(g);
  };
  return Da = {
    arrayToObject: h,
    assign: A,
    combine: U,
    compact: C,
    decode: x,
    encode: X,
    isBuffer: te,
    isOverflow: o,
    isRegExp: B,
    markOverflow: s,
    maybeMap: R,
    merge: v,
    toCoercible: $
  }, Da;
}
var $a, _c;
function _D() {
  if (_c) return $a;
  _c = 1;
  var e = oo(), r = /* @__PURE__ */ xw(), t = /* @__PURE__ */ uo(), n = Object.prototype.hasOwnProperty, i = {
    brackets: function(h) {
      return h + "[]";
    },
    comma: "comma",
    indices: function(h, P) {
      return h + "[" + P + "]";
    },
    repeat: function(h) {
      return h;
    }
  }, a = Array.isArray, s = Array.prototype.push, o = function(m, h) {
    s.apply(m, a(h) ? h : [h]);
  }, u = Date.prototype.toISOString, l = t.default, c = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    depth: 1 / 0,
    encode: !0,
    encodeDotInKeys: !1,
    encoder: r.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: l,
    formatter: t.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(h) {
      return u.call(h);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, f = function(h) {
    return typeof h == "string" || typeof h == "number" || typeof h == "boolean" || typeof h == "symbol" || typeof h == "bigint";
  }, b = {}, d = function m(h, P, O, M, v, A, x, w, S, j, I, $, z, X, C, B, te, U, R, W) {
    var g = h;
    if (W > R)
      throw new RangeError("Input depth exceeded depth option of " + R);
    for (var q = U, D = 0, J = !1; (q = q.get(b)) !== void 0 && !J; ) {
      var ne = q.get(h);
      if (D += 1, typeof ne < "u") {
        if (ne === D)
          throw new RangeError("Cyclic object value");
        J = !0;
      }
      typeof q.get(b) > "u" && (D = 0);
    }
    if (g = typeof j == "function" ? j(P, g) : g, g instanceof Date ? g = z(g) : O === "comma" && a(g) && (g = r.maybeMap(g, function(se) {
      return se instanceof Date ? z(se) : se;
    })), g === null) {
      if (A)
        return C(S && !B ? S(P, c.encoder, te, "key", X) : P);
      g = "";
    }
    if (f(g) || r.isBuffer(g)) {
      if (S) {
        var ae = B ? P : S(P, c.encoder, te, "key", X);
        return [C(ae) + "=" + C(S(g, c.encoder, te, "value", X))];
      }
      return [C(P) + "=" + C(String(g))];
    }
    var ie = [];
    if (typeof g > "u")
      return ie;
    var re;
    if (O === "comma" && a(g))
      B && S && (g = r.maybeMap(g, function(se) {
        return se == null ? se : S(se, c.encoder, te, "value", X);
      })), re = [{ value: g.length > 0 ? r.toCoercible(g).join(",") || null : void 0 }];
    else if (a(j))
      re = j;
    else {
      var oe = Object.keys(g);
      re = I ? oe.sort(I) : oe;
    }
    var Y = String(P), G = M && a(g) && g.length === 1 ? Y + "[]" : Y;
    if (v && a(g) && g.length === 0 && Object.keys(g).length === 0)
      return G + "[]";
    for (var H = 0; H < re.length; ++H) {
      var N = re[H], K = typeof N == "object" && N && typeof N.value < "u" ? N.value : g[N];
      if (!(x && K === null)) {
        var ee = $ && w ? String(N).replace(/\./g, "%2E") : String(N), ue = a(g) ? typeof O == "function" ? O(G, ee) : G : G + ($ ? "." + ee : "[" + ee + "]");
        U.set(h, D);
        var le = e();
        le.set(b, U), o(ie, m(
          K,
          ue,
          O,
          M,
          v,
          A,
          x,
          w,
          O === "comma" && B && a(g) ? null : S,
          j,
          I,
          $,
          z,
          X,
          C,
          B,
          te,
          le,
          R,
          W + 1
        ));
      }
    }
    return ie;
  }, E = function(h) {
    if (!h)
      return c;
    if (typeof h.allowEmptyArrays < "u" && typeof h.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof h.encodeDotInKeys < "u" && typeof h.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (h.encoder !== null && typeof h.encoder < "u" && typeof h.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var P = h.charset || c.charset;
    if (typeof h.charset < "u" && h.charset !== "utf-8" && h.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var O = t.default;
    if (typeof h.format < "u") {
      if (!n.call(t.formatters, h.format))
        throw new TypeError("Unknown format option provided.");
      O = h.format;
    }
    var M = t.formatters[O], v = c.filter;
    (typeof h.filter == "function" || a(h.filter)) && (v = h.filter);
    var A;
    if (n.call(i, h.arrayFormat) ? A = h.arrayFormat : "indices" in h ? A = h.indices ? "indices" : "repeat" : A = c.arrayFormat, "commaRoundTrip" in h && typeof h.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var x = typeof h.allowDots > "u" ? h.encodeDotInKeys === !0 ? !0 : c.allowDots : !!h.allowDots;
    return {
      addQueryPrefix: typeof h.addQueryPrefix == "boolean" ? h.addQueryPrefix : c.addQueryPrefix,
      allowDots: x,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: A,
      charset: P,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!h.commaRoundTrip,
      delimiter: typeof h.delimiter > "u" ? c.delimiter : h.delimiter,
      depth: typeof h.depth == "number" ? h.depth : c.depth,
      encode: typeof h.encode == "boolean" ? h.encode : c.encode,
      encodeDotInKeys: typeof h.encodeDotInKeys == "boolean" ? h.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof h.encoder == "function" ? h.encoder : c.encoder,
      encodeValuesOnly: typeof h.encodeValuesOnly == "boolean" ? h.encodeValuesOnly : c.encodeValuesOnly,
      filter: v,
      format: O,
      formatter: M,
      serializeDate: typeof h.serializeDate == "function" ? h.serializeDate : c.serializeDate,
      skipNulls: typeof h.skipNulls == "boolean" ? h.skipNulls : c.skipNulls,
      sort: typeof h.sort == "function" ? h.sort : null,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : c.strictNullHandling
    };
  };
  return $a = function(m, h) {
    var P = m, O = E(h), M, v;
    typeof O.filter == "function" ? (v = O.filter, P = v("", P)) : a(O.filter) && (v = O.filter, M = v);
    var A = [];
    if (typeof P != "object" || P === null)
      return "";
    var x = i[O.arrayFormat], w = x === "comma" && O.commaRoundTrip;
    M || (M = Object.keys(P)), O.sort && M.sort(O.sort);
    for (var S = e(), j = 0; j < M.length; ++j) {
      var I = M[j];
      if (!(typeof I > "u" || I === null)) {
        var $ = P[I];
        if (!(O.skipNulls && $ === null)) {
          var z = O.encodeDotInKeys ? String(I).replace(/\./g, "%2E") : String(I);
          o(A, d(
            $,
            z,
            x,
            w,
            O.allowEmptyArrays,
            O.strictNullHandling,
            O.skipNulls,
            O.encodeDotInKeys,
            O.encode ? O.encoder : null,
            O.filter,
            O.sort,
            O.allowDots,
            O.serializeDate,
            O.format,
            O.formatter,
            O.encodeValuesOnly,
            O.charset,
            S,
            O.depth,
            0
          ));
        }
      }
    }
    var X = A.join(O.delimiter), C = O.addQueryPrefix === !0 ? "?" : "";
    return O.charsetSentinel && (O.charset === "iso-8859-1" ? C += "utf8=%26%2310003%3B" + O.delimiter : C += "utf8=%E2%9C%93" + O.delimiter), X.length > 0 ? C + X : "";
  }, $a;
}
var qa, xc;
function xD() {
  if (xc) return qa;
  xc = 1;
  var e = oo(), r = /* @__PURE__ */ xw(), t = Object.prototype.hasOwnProperty, n = Array.isArray, i = Object.getPrototypeOf, a = function(v) {
    if (!v || typeof v != "object")
      return !1;
    if (n(v))
      return !0;
    var A = i(v);
    return A === Object.prototype || A === null;
  }, s = function(v) {
    if (n(v)) {
      var A = [];
      return A.length = v.length, A;
    }
    return i(v) === null ? { __proto__: null } : {};
  }, o = function(v) {
    for (var A = e(), x = {}, w = [{ source: v, target: x }], S = 0; S < w.length; ++S)
      for (var j = w[S].source, I = w[S].target, $ = Object.keys(j), z = 0; z < $.length; ++z) {
        var X = j[$[z]];
        if (a(X)) {
          if (!A.has(X)) {
            var C = s(X);
            A.set(X, C), w[w.length] = { source: X, target: C };
          }
          I[$[z]] = A.get(X);
        } else
          I[$[z]] = X;
      }
    return x;
  }, u = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: r.decode,
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
  }, l = function(M) {
    return M.replace(/&#(\d+);/g, function(v, A) {
      return String.fromCharCode(parseInt(A, 10));
    });
  }, c = function(M, v, A) {
    if (M && typeof M == "string" && v.comma && M.indexOf(",") > -1) {
      if (v.throwOnLimitExceeded)
        for (var x = 0, w = M.indexOf(","); w > -1; ) {
          if (x += 1, x >= v.arrayLimit)
            throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          w = M.indexOf(",", w + 1);
        }
      return M.split(",");
    }
    if (v.throwOnLimitExceeded && A >= v.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + v.arrayLimit + " element" + (v.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return M;
  }, f = "utf8=%26%2310003%3B", b = "utf8=%E2%9C%93", d = function(v, A) {
    var x = { __proto__: null }, w = A.ignoreQueryPrefix ? v.replace(/^\?/, "") : v;
    w = w.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var S = A.parameterLimit === 1 / 0 ? void 0 : A.parameterLimit, j = w.split(
      A.delimiter,
      A.throwOnLimitExceeded && typeof S < "u" ? S + 1 : S
    );
    if (A.throwOnLimitExceeded && typeof S < "u" && j.length > S)
      throw new RangeError("Parameter limit exceeded. Only " + S + " parameter" + (S === 1 ? "" : "s") + " allowed.");
    var I = -1, $, z = A.charset;
    if (A.charsetSentinel)
      for ($ = 0; $ < j.length; ++$)
        j[$].indexOf("utf8=") === 0 && (j[$] === b ? z = "utf-8" : j[$] === f && (z = "iso-8859-1"), I = $, $ = j.length);
    for ($ = 0; $ < j.length; ++$)
      if ($ !== I) {
        var X = j[$], C = X.indexOf("]="), B = C === -1 ? X.indexOf("=") : C + 1, te = B > 1 && X.slice(B - 2, B) === "[]", U, R;
        if (B === -1 ? (U = A.decoder(X, u.decoder, z, "key"), R = A.strictNullHandling ? null : "") : (U = A.decoder(X.slice(0, B), u.decoder, z, "key"), U !== null && (R = r.maybeMap(
          c(
            X.slice(B + 1),
            A,
            n(x[U]) ? x[U].length : 0
          ),
          function(g) {
            return A.decoder(g, u.decoder, z, "value");
          }
        ))), R && A.interpretNumericEntities && z === "iso-8859-1" && (R = l(String(R))), te && (R = n(R) ? [R] : R), A.comma && n(R) && R.length > A.arrayLimit && (R = r.combine([], R, A.arrayLimit, A.plainObjects, A.throwOnLimitExceeded)), U !== null) {
          var W = t.call(x, U);
          W && (A.duplicates === "combine" || te) ? x[U] = r.combine(
            x[U],
            R,
            A.arrayLimit,
            A.plainObjects,
            A.throwOnLimitExceeded
          ) : (!W || A.duplicates === "last") && (x[U] = R);
        }
      }
    return x;
  }, E = function(M, v, A, x) {
    var w = 0;
    if (M.length > 0 && M[M.length - 1] === "[]") {
      var S = M.slice(0, -1).join("");
      w = Array.isArray(v) && v[S] ? v[S].length : 0;
    }
    for (var j = x ? v : c(v, A, w), I = M.length - 1; I >= 0; --I) {
      var $, z = M[I];
      if (z === "[]" && A.parseArrays)
        r.isOverflow(j) ? $ = j : $ = A.allowEmptyArrays && (j === "" || A.strictNullHandling && j === null) ? [] : r.combine(
          [],
          j,
          A.arrayLimit,
          A.plainObjects,
          A.throwOnLimitExceeded
        );
      else {
        $ = A.plainObjects ? { __proto__: null } : {};
        var X = z.charAt(0) === "[" && z.charAt(z.length - 1) === "]" ? z.slice(1, -1) : z, C = A.decodeDotInKeys ? X.replace(/%2E/g, ".") : X, B = parseInt(C, 10), te = !isNaN(B) && z !== C && String(B) === C && B >= 0 && A.parseArrays;
        if (!A.parseArrays && C === "")
          $ = { 0: j };
        else if (te && B < A.arrayLimit)
          $ = [], $[B] = j;
        else {
          if (te && A.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + A.arrayLimit + " element" + (A.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          te ? ($[B] = j, r.markOverflow($, B)) : C !== "__proto__" && ($[C] = j);
        }
      }
      j = $;
    }
    return j;
  }, m = function(v) {
    for (var A = "", x = 0, w = 0; w < v.length; w += 1) {
      var S = v.charCodeAt(w);
      if (S === 91)
        x += 1, A += "[";
      else if (S === 93)
        x > 0 && (x -= 1), A += "]";
      else if (S === 46 && x === 0 && w + 1 < v.length && v.charCodeAt(w + 1) !== 46 && v.charCodeAt(w + 1) !== 91) {
        for (var j = w + 1, I = j; I < v.length && v.charCodeAt(I) !== 46 && v.charCodeAt(I) !== 91; )
          I += 1;
        A += "[" + v.slice(j, I) + "]", w = I - 1;
      } else
        A += v.charAt(w);
    }
    return A;
  }, h = function(v, A) {
    var x = A.allowDots ? m(v) : v;
    if (A.depth <= 0)
      return !A.plainObjects && t.call(Object.prototype, x) && !A.allowPrototypes ? void 0 : [x];
    var w = [], S = x.indexOf("["), j = S >= 0 ? x.slice(0, S) : x;
    if (j) {
      if (!A.plainObjects && t.call(Object.prototype, j) && !A.allowPrototypes)
        return;
      w[w.length] = j;
    }
    for (var I = x.length, $ = S, z = 0; $ >= 0 && z < A.depth; ) {
      for (var X = 1, C = $ + 1, B = -1; C < I && B < 0; ) {
        var te = x.charCodeAt(C);
        te === 91 ? X += 1 : te === 93 && (X -= 1, X === 0 && (B = C)), C += 1;
      }
      if (B < 0)
        return w[w.length] = "[" + x.slice($) + "]", w;
      var U = x.slice($, B + 1), R = U.slice(1, -1);
      if (!A.plainObjects && t.call(Object.prototype, R) && !A.allowPrototypes)
        return;
      w[w.length] = U, z += 1, $ = x.indexOf("[", B + 1);
    }
    if ($ >= 0) {
      if (A.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + A.depth + " and strictDepth is true");
      w[w.length] = "[" + x.slice($) + "]";
    }
    return w;
  }, P = function(v, A, x, w) {
    if (v) {
      var S = h(v, x);
      if (S)
        return E(S, A, x, w);
    }
  }, O = function(v) {
    if (!v)
      return u;
    if (typeof v.allowEmptyArrays < "u" && typeof v.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof v.decodeDotInKeys < "u" && typeof v.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (v.decoder !== null && typeof v.decoder < "u" && typeof v.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof v.charset < "u" && v.charset !== "utf-8" && v.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof v.throwOnLimitExceeded < "u" && typeof v.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var A = typeof v.charset > "u" ? u.charset : v.charset, x = typeof v.duplicates > "u" ? u.duplicates : v.duplicates;
    if (x !== "combine" && x !== "first" && x !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var w = typeof v.allowDots > "u" ? v.decodeDotInKeys === !0 ? !0 : u.allowDots : !!v.allowDots;
    return {
      allowDots: w,
      allowEmptyArrays: typeof v.allowEmptyArrays == "boolean" ? !!v.allowEmptyArrays : u.allowEmptyArrays,
      allowPrototypes: typeof v.allowPrototypes == "boolean" ? v.allowPrototypes : u.allowPrototypes,
      allowSparse: typeof v.allowSparse == "boolean" ? v.allowSparse : u.allowSparse,
      arrayLimit: typeof v.arrayLimit == "number" ? v.arrayLimit : u.arrayLimit,
      charset: A,
      charsetSentinel: typeof v.charsetSentinel == "boolean" ? v.charsetSentinel : u.charsetSentinel,
      comma: typeof v.comma == "boolean" ? v.comma : u.comma,
      decodeDotInKeys: typeof v.decodeDotInKeys == "boolean" ? v.decodeDotInKeys : u.decodeDotInKeys,
      decoder: typeof v.decoder == "function" ? v.decoder : u.decoder,
      delimiter: typeof v.delimiter == "string" || r.isRegExp(v.delimiter) ? v.delimiter : u.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof v.depth == "number" || v.depth === !1 ? +v.depth : u.depth,
      duplicates: x,
      ignoreQueryPrefix: v.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof v.interpretNumericEntities == "boolean" ? v.interpretNumericEntities : u.interpretNumericEntities,
      parameterLimit: typeof v.parameterLimit == "number" ? v.parameterLimit : u.parameterLimit,
      parseArrays: v.parseArrays !== !1,
      plainObjects: typeof v.plainObjects == "boolean" ? v.plainObjects : u.plainObjects,
      strictDepth: typeof v.strictDepth == "boolean" ? !!v.strictDepth : u.strictDepth,
      strictMerge: typeof v.strictMerge == "boolean" ? !!v.strictMerge : u.strictMerge,
      strictNullHandling: typeof v.strictNullHandling == "boolean" ? v.strictNullHandling : u.strictNullHandling,
      throwOnLimitExceeded: typeof v.throwOnLimitExceeded == "boolean" ? v.throwOnLimitExceeded : !1
    };
  };
  return qa = function(M, v) {
    var A = O(v);
    if (M === "" || M === null || typeof M > "u")
      return A.plainObjects ? { __proto__: null } : {};
    for (var x = typeof M == "string" ? d(M, A) : o(M), w = A.plainObjects ? { __proto__: null } : {}, S = Object.keys(x), j = 0; j < S.length; ++j) {
      var I = S[j], $ = P(I, x[I], A, typeof M == "string");
      w = r.merge(w, $, A);
    }
    return A.allowSparse === !0 ? w : r.compact(w);
  }, qa;
}
var Ia, Ec;
function ED() {
  if (Ec) return Ia;
  Ec = 1;
  var e = /* @__PURE__ */ _D(), r = /* @__PURE__ */ xD(), t = /* @__PURE__ */ uo();
  return Ia = {
    formats: t,
    parse: r,
    stringify: e
  }, Ia;
}
var AD = /* @__PURE__ */ ED();
const OD = /* @__PURE__ */ XM(AD);
function fs(e = /* @__PURE__ */ Qr()) {
  return /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([e, /* @__PURE__ */ gt(e)]), /* @__PURE__ */ je((r) => Array.isArray(r) ? r : [r]), /* @__PURE__ */ gt(e));
}
fs.number = () => fs(/* @__PURE__ */ Zt());
const Ew = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ Zt()]), /* @__PURE__ */ je(Number), /* @__PURE__ */ Ks()), Aw = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ Qs()]), /* @__PURE__ */ je((e) => e === !0 || e === "true")), Ow = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ Vn()]), /* @__PURE__ */ je((e) => e instanceof Date ? e : new Date(e)), /* @__PURE__ */ je((e) => e && yw(e, "yyyy-MM-dd"))), Sw = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ Vn()]), /* @__PURE__ */ je((e) => e && (e === "null" ? null : (typeof e == "string" && (e = new Date(e)), yw(e, "yyyy-MM-dd HH:mm"))))), SD = (e = /* @__PURE__ */ Qr()) => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ gt(/* @__PURE__ */ Pe())]), /* @__PURE__ */ je((r) => Array.isArray(r) ? r : r.split(",")), /* @__PURE__ */ gt(e)), jw = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ Zt(), /* @__PURE__ */ gt(/* @__PURE__ */ Pe()), /* @__PURE__ */ gt(/* @__PURE__ */ Zt())]), /* @__PURE__ */ je((e) => Array.isArray(e) ? e.map(Number) : typeof e == "string" ? e.split(",").map(Number) : [Number(e)]), /* @__PURE__ */ je((e) => e.map(Number))), lo = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Xe([/* @__PURE__ */ Pe(), /* @__PURE__ */ no(/* @__PURE__ */ Pe(), /* @__PURE__ */ Qr())]), /* @__PURE__ */ je((e) => typeof e == "string" ? OD.parse(e) : e), /* @__PURE__ */ je((e) => {
  let r = {};
  for (let t in e) lm(r, t, Cj(e, t));
  return r;
}));
function Re() {
  return lo();
}
Re.number = Ew, Re.boolean = Aw, Re.date = Ow, Re.datetime = Sw, Re.array = SD, Re.arrayNumber = jw, Re.object = lo;
const jD = () => /* @__PURE__ */ Qe(/* @__PURE__ */ Pe(), /* @__PURE__ */ je((e) => {
  let r = e.split(/[;\n]/).filter(Boolean).filter((i) => i.includes("=")).map((i) => i.trim().split("=")), t = Object.fromEntries(r), n = {};
  for (let [i, a] of Object.entries(t)) {
    let s = a;
    a.startsWith("bool:") && (s = a.replace("bool:", "").trim() === "true"), lm(n, i, s);
  }
  return n;
})), co = (e = {}) => /* @__PURE__ */ to({ page: /* @__PURE__ */ Tr(Re.number(), 1), limit: /* @__PURE__ */ Tr(Re.number(), e.maxLimit || 100), orderBy: /* @__PURE__ */ xn(e.orderFields ? Re.array(/* @__PURE__ */ Jn(e.orderFields)) : Re.array(/* @__PURE__ */ Pe()), []), orderDirection: /* @__PURE__ */ xn(Re.array(/* @__PURE__ */ Xe([/* @__PURE__ */ _n("asc"), /* @__PURE__ */ _n("desc")])), []) });
function Pw(e = {}) {
  return co(e);
}
Pw.base = co;
var PD = Wj({ array: () => fs, arrayNumber: () => jw, base: () => co, boolean: () => Aw, date: () => Ow, datetime: () => Sw, keyValue: () => jD, number: () => Ew, object: () => lo, pagination: () => Pw, url: () => Re }), MD = class {
  static __container_entry_key = "ValidatorService";
  v = { ...CP, extras: PD };
  create(e) {
    return e(this.v);
  }
  validate(e, r) {
    let t = typeof r == "function" ? r(this.v) : r, { output: n, issues: i, success: a } = /* @__PURE__ */ An(t, e);
    if (!a) {
      let s = /* @__PURE__ */ ts(i), o = [];
      s.root && o.push(...s.root), s.nested && Object.entries(s.nested).forEach((l) => {
        let [c, f] = l;
        o.push(...f.map((b) => `${c}: ${b}`));
      });
      let u = new Tj(o.length ? o.join(", ") : "Validation failed", 422);
      throw u.name = "ValidationError", Object.assign(u, { messages: o }), u;
    }
    return n;
  }
  async validateAsync(e, r) {
    let t = typeof r == "function" ? r(this.v) : r, { output: n, issues: i, success: a } = await /* @__PURE__ */ io(t, e);
    if (!a) {
      let s = Error("Validation failed"), o = /* @__PURE__ */ ts(i), u = { ...o.root, ...o.nested };
      throw Object.assign(s, { details: u }), s;
    }
    return n;
  }
  isValid(e, r) {
    let t = typeof r == "function" ? r(this.v) : r, { success: n } = /* @__PURE__ */ An(t, e);
    return n;
  }
};
function ut(...e) {
  return e.reduce((r, t) => t(r), class {
  });
}
function DD(e) {
  return function(r) {
    class t extends r {
      constructor(...i) {
        super(...i);
        let a = new e(...i);
        Object.assign(this, a);
      }
    }
    for (let n of Reflect.ownKeys(e.prototype)) n !== "constructor" && Object.defineProperty(t.prototype, n, Object.getOwnPropertyDescriptor(e.prototype, n));
    return t;
  };
}
function $D(e) {
  let r = null;
  if (typeof e == "function" && (r = { load: e }), typeof e == "object" && (r = e), !r) throw Error("Invalid plugin definition. Must be a function or an object with a load method.");
  return r;
}
const er = new MD();
function an() {
  return er.create((e) => e.object({ id: e.number(), dashboard_id: e.number(), name: e.string(), value: e.nullable(e.string()) }));
}
an.create = er.create((e) => e.pick(an(), ["dashboard_id", "name", "value"])), an.update = er.create((e) => e.partial(an.create));
function sn() {
  return er.create((e) => e.object({ id: e.number(), name: e.string(), description: e.nullish(e.string(), null), created_at: e.string(), updated_at: e.string(), deleted_at: e.nullable(e.string()), metas: e.optional(e.record(e.string(), e.any())) }));
}
sn.create = er.create((e) => e.pick(sn(), ["name", "description"])), sn.update = er.create((e) => e.partial(sn.create));
function lt(e) {
  return class extends e {
    static from(r) {
      let t = typeof this == "function" ? this : e, n = new t(), i = { ...r };
      return typeof t?.parse == "function" && (i = t.parse(r)), typeof this?.parse == "function" && (i = this.parse(r)), Object.assign(n, i), n;
    }
    merge(r) {
      return Object.assign(this, r), this;
    }
  };
}
function Zr(e) {
  return class extends e {
    deleted_at = null;
  };
}
function en(e) {
  return class extends e {
    created_at;
    updated_at;
  };
}
(class extends ut(lt) {
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
    if (!this.conditions) return {};
    let [e, r] = fm.sync(() => typeof this.conditions == "string" ? JSON.parse(this.conditions) : this.conditions);
    return e ? {} : r;
  }
});
(class extends ut(lt, en, Zr) {
  id;
  drive;
  mimetype;
  purpose;
  client_name;
  filename;
  public;
  url;
  metas;
  isImage() {
    return this.mimetype.startsWith("image/");
  }
});
(class extends ut(lt, en, Zr) {
  id;
  file_id;
  name;
  value;
});
(class extends ut(lt, en, Zr) {
  id;
  purpose;
  mime_types;
  max_size;
  upload_url;
  create_file_url;
  getParsedMimeTypes() {
    return this.mime_types.split(",").map((e) => e.trim());
  }
  isAllowedMimeType(e) {
    let r = this.getParsedMimeTypes();
    return r.includes(e) || r.includes("*/*");
  }
  isAllowedSize(e) {
    return e <= this.max_size;
  }
});
(class extends ut(lt, DD(Lj)) {
  id;
  name;
  enabled = !1;
  dependencies = {};
  build = {};
  directory;
  upgrade_info;
  setData(e) {
    let r = Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
    Object.assign(this, r), this.hook_id = `module:${this.id}`;
  }
});
(class extends ut(lt) {
  id;
  name;
  version;
  description;
  enabled;
  author;
  dependencies;
  build;
});
(class extends ut(lt) {
  id;
  name;
  version;
  enabled;
  aliases;
  branches;
});
(class extends ut(lt, en, Zr) {
  id;
  name;
  description;
});
(class extends ut(lt, en, Zr) {
  id;
  email;
  name;
  username;
  password;
  verified_at;
  permissions;
  roles;
  get initials() {
    let [e, r] = this.name.split(" ");
    return r ? e[0].toUpperCase() + r[0].toUpperCase() : e[0].toUpperCase();
  }
});
const HD = $D(async () => {
  const e = "webhook";
  cS.on("load", async () => {
    rm.auto(/* @__PURE__ */ Object.assign({ "./pages/senders.vue": () => import("./senders-7ndxnUJo.mjs") }), {
      strip: ["pages"],
      prefix: `/admin/${e}`,
      guards: [mS],
      refine: (r) => r.map((t) => (t.meta = {
        layout: "admin"
      }, t))
    }), fS.add({
      label: $t("Senders"),
      icon: "lucide:send",
      group: $t("Webhook"),
      layout: "admin",
      to: `/admin/${e}/senders`
    });
  });
});
export {
  UD as I,
  Au as M,
  GD as T,
  h0 as g,
  HD as i,
  er as t
};
