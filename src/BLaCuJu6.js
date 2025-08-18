import { _ as qs } from "./BcxvAarl.js";
import {
  V as ce,
  u as Ae,
  a as Ce,
  p as Ke,
  b as _e,
  M as re,
  g as Js,
  c as ht,
  d as ct,
  e as Ys,
  T as Vs,
  f as lA,
  h as ls,
  L as fA,
  i as yt,
  F as Ye,
  C as ae,
  j as xe,
  S as js,
  P as zs,
  D as Ws,
  k as ft,
  l as Me,
  m as Le,
  n as IA,
  I as Xs,
  o as At,
  O as Nt,
  q as cs,
  r as Zs,
  B as wt,
  s as $s,
  t as at,
  v as CA,
  R as St,
  w as en,
  x as Ot,
  y as gs,
  z as us,
  A as tn,
  E as An,
  G as pA,
  H as sn,
  J as nn,
  K as on,
  N as ds,
  Q as rn,
  U as an,
  W as qt,
  X as ln,
  Y as cn,
  Z as gn,
  _ as un,
  $ as dn,
  a0 as hs,
  a1 as vA,
  a2 as Dt,
  a3 as BA,
  a4 as hn,
  a5 as fn,
  a6 as In,
  a7 as Cn,
  a8 as pn,
  a9 as Bn,
  aa as En,
  ab as mn,
  ac as Qn,
  ad as _A,
  ae as SA,
  af as DA,
  ag as LA,
  ah as yn,
  ai as wn,
  aj as xn,
  ak as vn,
  al as ye,
  am as _n,
  an as fs,
  ao as et,
  ap as Sn,
  aq as Dn,
  ar as Ln,
  as as Rn,
  at as Tn,
  au as bn,
  av as Fn,
  aw as Mn,
  ax as kn,
  ay as Mt,
  az as kt,
  aA as Gn,
  aB as Nn,
  aC as Un,
  aD as Hn,
  aE as RA,
  aF as It,
  aG as Ct,
  aH as TA,
  aI as Ut,
  aJ as Kn,
  aK as Jt,
  aL as Yt,
  aM as bA,
  aN as Pn,
  aO as Is,
  aP as Cs,
  aQ as st,
  aR as On,
  aS as EA,
  aT as qn,
  aU as FA,
  aV as Jn,
  aW as Yn,
  aX as Vn,
  aY as jn,
  aZ as zn,
  a_ as pt,
  a$ as ps,
  b0 as Wn,
  b1 as Xn,
} from "./XUZIvaV4.js";
import { g as Ee } from "./B6f-6u5n.js";
import {
  s as xt,
  t as vt,
  v as Zn,
  x as Bs,
  y as Bt,
  q,
  z as le,
  E as ge,
  A as me,
  o as he,
  B as je,
  h as S,
  d as F,
  l as p,
  f as m,
  n as Pe,
  F as ke,
  r as He,
  e as Y,
  w as mA,
  C as Ve,
  D as nt,
  i as ne,
  m as V,
  k as X,
  S as $n,
  b as ze,
  p as te,
  G as Et,
  H as Qe,
  I as W,
  J as QA,
  K as gt,
  T as fe,
  L as MA,
  M as kA,
  N as ot,
  O as eo,
  P as Gt,
  Q as yA,
  R as J,
  U as to,
  u as Ao,
  c as so,
  g as no,
} from "./epvPXJnI.js";
/*!
 * MorphSVGPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var we,
  wA,
  mt,
  Es,
  Qt,
  ms = function () {
    return we || (typeof window < "u" && (we = window.gsap) && we.registerPlugin && we);
  },
  Vt = function (e) {
    return typeof e == "function";
  },
  Je = Math.atan2,
  GA = Math.cos,
  NA = Math.sin,
  Fe = Math.sqrt,
  Ht = Math.PI,
  UA = Ht * 2,
  oo = Ht * 0.3,
  io = Ht * 0.7,
  Qs = 1e20,
  Lt = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  ro = /(^[#\.][a-z]|[a-y][a-z])/i,
  ao = /[achlmqstvz]/i,
  Ue = function (e) {
    return console && console.warn(e);
  },
  lo = 1,
  HA = function (e) {
    var t = e.length,
      n = 0,
      A = 0,
      o;
    for (o = 0; o < t; o++) (n += e[o++]), (A += e[o]);
    return [n / (t / 2), A / (t / 2)];
  },
  it = function (e) {
    var t = e.length,
      n = e[0],
      A = n,
      o = e[1],
      s = o,
      i,
      r,
      c;
    for (c = 6; c < t; c += 6) (i = e[c]), (r = e[c + 1]), i > n ? (n = i) : i < A && (A = i), r > o ? (o = r) : r < s && (s = r);
    return (e.centerX = (n + A) / 2), (e.centerY = (o + s) / 2), (e.size = (n - A) * (o - s));
  },
  _t = function (e, t) {
    t === void 0 && (t = 3);
    for (var n = e.length, A = e[0][0], o = A, s = e[0][1], i = s, r = 1 / t, c, g, a, l, u, f, h, C, I, B, E, Q, x, w, D, L; --n > -1;)
      for (u = e[n], c = u.length, l = 6; l < c; l += 6)
        for (I = u[l], B = u[l + 1], E = u[l + 2] - I, w = u[l + 3] - B, Q = u[l + 4] - I, D = u[l + 5] - B, x = u[l + 6] - I, L = u[l + 7] - B, f = t; --f > -1;)
          (h = r * f), (C = 1 - h), (g = (h * h * x + 3 * C * (h * Q + C * E)) * h + I), (a = (h * h * L + 3 * C * (h * D + C * w)) * h + B), g > A ? (A = g) : g < o && (o = g), a > s ? (s = a) : a < i && (i = a);
    return (e.centerX = (A + o) / 2), (e.centerY = (s + i) / 2), (e.left = o), (e.width = A - o), (e.top = i), (e.height = s - i), (e.size = (A - o) * (s - i));
  },
  co = function (e, t) {
    return t.length - e.length;
  },
  KA = function (e, t) {
    var n = e.size || it(e),
      A = t.size || it(t);
    return Math.abs(A - n) < (n + A) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : A - n;
  },
  PA = function (e, t) {
    var n = e.slice(0),
      A = e.length,
      o = A - 2,
      s,
      i;
    for (t = t | 0, s = 0; s < A; s++) (i = (s + t) % o), (e[s++] = n[i]), (e[s] = n[i + 1]);
  },
  jt = function (e, t, n, A, o) {
    var s = e.length,
      i = 0,
      r = s - 2,
      c,
      g,
      a,
      l;
    for (n *= 6, g = 0; g < s; g += 6) (c = (g + n) % r), (l = e[c] - (t[g] - A)), (a = e[c + 1] - (t[g + 1] - o)), (i += Fe(a * a + l * l));
    return i;
  },
  go = function (e, t, n) {
    var A = e.length,
      o = HA(e),
      s = HA(t),
      i = s[0] - o[0],
      r = s[1] - o[1],
      c = jt(e, t, 0, i, r),
      g = 0,
      a,
      l,
      u;
    for (u = 6; u < A; u += 6) (l = jt(e, t, u / 6, i, r)), l < c && ((c = l), (g = u));
    if (n) for (a = e.slice(0), Bt(a), u = 6; u < A; u += 6) (l = jt(a, t, u / 6, i, r)), l < c && ((c = l), (g = -u));
    return g / 6;
  },
  uo = function (e, t, n) {
    for (var A = e.length, o = Qs, s = 0, i = 0, r, c, g, a, l, u; --A > -1;)
      for (r = e[A], u = r.length, l = 0; l < u; l += 6) (c = r[l] - t), (g = r[l + 1] - n), (a = Fe(c * c + g * g)), a < o && ((o = a), (s = r[l]), (i = r[l + 1]));
    return [s, i];
  },
  ho = function (e, t, n, A, o, s) {
    var i = t.length,
      r = 0,
      c = Math.min(e.size || it(e), t[n].size || it(t[n])) * A,
      g = Qs,
      a = e.centerX + o,
      l = e.centerY + s,
      u,
      f,
      h,
      C,
      I;
    for (f = n; f < i && ((u = t[f].size || it(t[f])), !(u < c)); f++) (h = t[f].centerX - a), (C = t[f].centerY - l), (I = Fe(h * h + C * C)), I < g && ((r = f), (g = I));
    return (I = t[r]), t.splice(r, 1), I;
  },
  zt = function (e, t) {
    var n = 0,
      A = 0.999999,
      o = e.length,
      s = t / ((o - 2) / 6),
      i,
      r,
      c,
      g,
      a,
      l,
      u,
      f,
      h,
      C,
      I,
      B,
      E,
      Q;
    for (E = 2; E < o; E += 6)
      for (n += s; n > A;)
        (i = e[E - 2]),
          (r = e[E - 1]),
          (c = e[E]),
          (g = e[E + 1]),
          (a = e[E + 2]),
          (l = e[E + 3]),
          (u = e[E + 4]),
          (f = e[E + 5]),
          (Q = 1 / ((Math.floor(n) || 1) + 1)),
          (h = i + (c - i) * Q),
          (I = c + (a - c) * Q),
          (h += (I - h) * Q),
          (I += (a + (u - a) * Q - I) * Q),
          (C = r + (g - r) * Q),
          (B = g + (l - g) * Q),
          (C += (B - C) * Q),
          (B += (l + (f - l) * Q - B) * Q),
          e.splice(E, 4, i + (c - i) * Q, r + (g - r) * Q, h, C, h + (I - h) * Q, C + (B - C) * Q, I, B, a + (u - a) * Q, l + (f - l) * Q),
          (E += 6),
          (o += 6),
          n--;
    return e;
  },
  cA = function (e, t, n, A, o) {
    var s = t.length - e.length,
      i = s > 0 ? t : e,
      r = s > 0 ? e : t,
      c = 0,
      g = A === "complexity" ? co : KA,
      a = A === "position" ? 0 : typeof A == "number" ? A : 0.8,
      l = r.length,
      u = typeof n == "object" && n.push ? n.slice(0) : [n],
      f = u[0] === "reverse" || u[0] < 0,
      h = n === "log",
      C,
      I,
      B,
      E,
      Q,
      x,
      w;
    if (r[0]) {
      if (i.length > 1 && (e.sort(g), t.sort(g), (x = i.size || _t(i)), (x = r.size || _t(r)), (x = i.centerX - r.centerX), (w = i.centerY - r.centerY), g === KA))
        for (l = 0; l < r.length; l++) i.splice(l, 0, ho(r[l], i, l, a, x, w));
      if (s)
        for (s < 0 && (s = -s), i[0].length > r[0].length && zt(r[0], ((i[0].length - r[0].length) / 6) | 0), l = r.length; c < s;)
          (E = i[l].size || it(i[l])), (B = uo(r, i[l].centerX, i[l].centerY)), (E = B[0]), (Q = B[1]), (r[l++] = [E, Q, E, Q, E, Q, E, Q]), (r.totalPoints += 8), c++;
      for (l = 0; l < e.length; l++)
        (C = t[l]),
          (I = e[l]),
          (s = C.length - I.length),
          s < 0 ? zt(C, (-s / 6) | 0) : s > 0 && zt(I, (s / 6) | 0),
          f && o !== !1 && !I.reversed && Bt(I),
          (n = u[l] || u[l] === 0 ? u[l] : "auto"),
          n &&
          (I.closed || (Math.abs(I[0] - I[I.length - 2]) < 0.5 && Math.abs(I[1] - I[I.length - 1]) < 0.5)
            ? n === "auto" || n === "log"
              ? ((u[l] = n = go(I, C, !l || o === !1)), n < 0 && ((f = !0), Bt(I), (n = -n)), PA(I, n * 6))
              : n !== "reverse" && (l && n < 0 && Bt(I), PA(I, (n < 0 ? -n : n) * 6))
            : !f &&
              ((n === "auto" &&
                Math.abs(C[0] - I[0]) + Math.abs(C[1] - I[1]) + Math.abs(C[C.length - 2] - I[I.length - 2]) + Math.abs(C[C.length - 1] - I[I.length - 1]) >
                Math.abs(C[0] - I[I.length - 2]) + Math.abs(C[1] - I[I.length - 1]) + Math.abs(C[C.length - 2] - I[0]) + Math.abs(C[C.length - 1] - I[1])) ||
                n % 2)
              ? (Bt(I), (u[l] = -1), (f = !0))
              : n === "auto"
                ? (u[l] = 0)
                : n === "reverse" && (u[l] = -1),
            I.closed !== C.closed && (I.closed = C.closed = !1));
      return h && Ue("shapeIndex:[" + u.join(",") + "]"), (e.shapeIndex = u), u;
    }
  },
  OA = function (e, t, n, A, o) {
    var s = xt(e[0]),
      i = xt(e[1]);
    cA(s, i, t || t === 0 ? t : "auto", n, o) && ((e[0] = vt(s)), (e[1] = vt(i)), (A === "log" || A === !0) && Ue('precompile:["' + e[0] + '","' + e[1] + '"]'));
  },
  fo = function (e, t) {
    if (!t) return e;
    var n = e.match(Lt) || [],
      A = n.length,
      o = "",
      s,
      i,
      r;
    for (t === "reverse" ? ((i = A - 1), (s = -2)) : ((i = ((parseInt(t, 10) || 0) * 2 + 1 + A * 100) % A), (s = 2)), r = 0; r < A; r += 2) (o += n[i - 1] + "," + n[i] + " "), (i = (i + s) % A);
    return o;
  },
  qA = function (e, t) {
    var n = 0,
      A = parseFloat(e[0]),
      o = parseFloat(e[1]),
      s = A + "," + o + " ",
      i = 0.999999,
      r,
      c,
      g,
      a,
      l,
      u,
      f;
    for (g = e.length, r = (t * 0.5) / (g * 0.5 - 1), c = 0; c < g - 2; c += 2) {
      if (((n += r), (u = parseFloat(e[c + 2])), (f = parseFloat(e[c + 3])), n > i)) for (l = 1 / (Math.floor(n) + 1), a = 1; n > i;) (s += (A + (u - A) * l * a).toFixed(2) + "," + (o + (f - o) * l * a).toFixed(2) + " "), n--, a++;
      (s += u + "," + f + " "), (A = u), (o = f);
    }
    return s;
  },
  gA = function (e) {
    var t = e[0].match(Lt) || [],
      n = e[1].match(Lt) || [],
      A = n.length - t.length;
    A > 0 ? (e[0] = qA(t, A)) : (e[1] = qA(n, -A));
  },
  Io = function (e) {
    return isNaN(e)
      ? gA
      : function (t) {
        gA(t), (t[1] = fo(t[1], parseInt(e, 10)));
      };
  },
  Co = function (e, t, n) {
    var A = typeof e == "string",
      o,
      s;
    return (
      (!A || ro.test(e) || (e.match(Lt) || []).length < 3) &&
      ((o = wA(e)[0]),
        o
          ? ((s = (o.nodeName + "").toUpperCase()), t && s !== "PATH" && ((o = Bs(o, !1)), (s = "PATH")), (e = o.getAttribute(s === "PATH" ? "d" : "points") || ""), o === n && (e = o.getAttributeNS(null, "data-original") || e))
          : (Ue("WARNING: invalid morph to: " + e), (e = !1))),
      e
    );
  },
  JA = function (e, t) {
    for (var n = e.length, A = 0.2 * (t || 1), o, s, i, r, c, g, a, l, u, f, h, C; --n > -1;) {
      for (s = e[n], h = s.isSmooth = s.isSmooth || [0, 0, 0, 0], C = s.smoothData = s.smoothData || [0, 0, 0, 0], h.length = 4, l = s.length - 2, a = 6; a < l; a += 6)
        (i = s[a] - s[a - 2]),
          (r = s[a + 1] - s[a - 1]),
          (c = s[a + 2] - s[a]),
          (g = s[a + 3] - s[a + 1]),
          (u = Je(r, i)),
          (f = Je(g, c)),
          (o = Math.abs(u - f) < A),
          o && ((C[a - 2] = u), (C[a + 2] = f), (C[a - 1] = Fe(i * i + r * r)), (C[a + 3] = Fe(c * c + g * g))),
          h.push(o, o, 0, 0, o, o);
      s[l] === s[0] &&
        s[l + 1] === s[1] &&
        ((i = s[0] - s[l - 2]),
          (r = s[1] - s[l - 1]),
          (c = s[2] - s[0]),
          (g = s[3] - s[1]),
          (u = Je(r, i)),
          (f = Je(g, c)),
          Math.abs(u - f) < A && ((C[l - 2] = u), (C[2] = f), (C[l - 1] = Fe(i * i + r * r)), (C[3] = Fe(c * c + g * g)), (h[l - 2] = h[l - 1] = !0)));
    }
    return e;
  },
  YA = function (e) {
    var t = e.trim().split(" "),
      n = ~e.indexOf("left") ? 0 : ~e.indexOf("right") ? 100 : isNaN(parseFloat(t[0])) ? 50 : parseFloat(t[0]),
      A = ~e.indexOf("top") ? 0 : ~e.indexOf("bottom") ? 100 : isNaN(parseFloat(t[1])) ? 50 : parseFloat(t[1]);
    return { x: n / 100, y: A / 100 };
  },
  po = function (e) {
    return e !== e % Ht ? e + (e < 0 ? UA : -UA) : e;
  },
  VA = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
  Bo = function (e, t, n, A) {
    var o = this._origin,
      s = this._eOrigin,
      i = e[n] - o.x,
      r = e[n + 1] - o.y,
      c = Fe(i * i + r * r),
      g = Je(r, i),
      a,
      l;
    return (
      (i = t[n] - s.x),
      (r = t[n + 1] - s.y),
      (a = Je(r, i) - g),
      (l = po(a)),
      !A && mt && Math.abs(l + mt.ca) < oo && (A = mt),
      (this._anchorPT = mt = { _next: this._anchorPT, t: e, sa: g, ca: A && l * A.ca < 0 && Math.abs(l) > io ? a : l, sl: c, cl: Fe(i * i + r * r) - c, i: n })
    );
  },
  jA = function (e) {
    (we = ms()), (Qt = Qt || (we && we.plugins.morphSVG)), we && Qt ? ((wA = we.utils.toArray), (Qt.prototype._tweenRotation = Bo), (Es = 1)) : e && Ue("Please gsap.registerPlugin(MorphSVGPlugin)");
  },
  tt = {
    version: "3.13.0",
    name: "morphSVG",
    rawVars: 1,
    register: function (e, t) {
      (we = e), (Qt = t), jA();
    },
    init: function (e, t, n, A, o) {
      if ((Es || jA(1), !t)) return Ue("invalid shape"), !1;
      Vt(t) && (t = t.call(n, A, e, o));
      var s, i, r, c, g, a, l, u, f, h, C, I, B, E, Q, x, w, D, L, k, b, U;
      if (typeof t == "string" || t.getBBox || t[0]) t = { shape: t };
      else if (typeof t == "object") {
        s = {};
        for (i in t) s[i] = Vt(t[i]) && i !== "render" ? t[i].call(n, A, e, o) : t[i];
        t = s;
      }
      var R = e.nodeType ? window.getComputedStyle(e) : {},
        y = R.fill + "",
        N = !(y === "none" || (y.match(Lt) || [])[3] === "0" || R.fillRule === "evenodd"),
        v = (t.origin || "50 50").split(",");
      if (((s = (e.nodeName + "").toUpperCase()), (g = s === "POLYLINE" || s === "POLYGON"), s !== "PATH" && !g && !t.prop)) return Ue("Cannot morph a <" + s + "> element. " + VA), !1;
      if (((i = s === "PATH" ? "d" : "points"), !t.prop && !Vt(e.setAttribute))) return !1;
      if (((c = Co(t.shape || t.d || t.points || "", i === "d", e)), g && ao.test(c))) return Ue("A <" + s + "> cannot accept path data. " + VA), !1;
      if (
        ((a = t.shapeIndex || t.shapeIndex === 0 ? t.shapeIndex : "auto"),
          (l = t.map || tt.defaultMap),
          (this._prop = t.prop),
          (this._render = t.render || tt.defaultRender),
          (this._apply = "updateTarget" in t ? t.updateTarget : tt.defaultUpdateTarget),
          (this._rnd = Math.pow(10, isNaN(t.precision) ? 2 : +t.precision)),
          (this._tween = n),
          c)
      ) {
        if (
          ((this._target = e),
            (w = typeof t.precompile == "object"),
            (h = this._prop ? e[this._prop] : e.getAttribute(i)),
            !this._prop && !e.getAttributeNS(null, "data-original") && e.setAttributeNS(null, "data-original", h),
            i === "d" || this._prop)
        ) {
          if (((h = xt(w ? t.precompile[0] : h)), (C = xt(w ? t.precompile[1] : c)), !w && !cA(h, C, a, l, N))) return !1;
          for (
            (t.precompile === "log" || t.precompile === !0) && Ue('precompile:["' + vt(h) + '","' + vt(C) + '"]'),
            b = (t.type || tt.defaultType) !== "linear",
            b &&
            ((h = JA(h, t.smoothTolerance)),
              (C = JA(C, t.smoothTolerance)),
              h.size || _t(h),
              C.size || _t(C),
              (k = YA(v[0])),
              (this._origin = h.origin = { x: h.left + k.x * h.width, y: h.top + k.y * h.height }),
              v[1] && (k = YA(v[1])),
              (this._eOrigin = { x: C.left + k.x * C.width, y: C.top + k.y * C.height })),
            this._rawPath = e._gsRawPath = h,
            B = h.length;
            --B > -1;

          )
            for (Q = h[B], x = C[B], u = Q.isSmooth || [], f = x.isSmooth || [], E = Q.length, mt = 0, I = 0; I < E; I += 2)
              (x[I] !== Q[I] || x[I + 1] !== Q[I + 1]) &&
                (b
                  ? u[I] && f[I]
                    ? ((D = Q.smoothData),
                      (L = x.smoothData),
                      (U = I + (I === E - 4 ? 7 - E : 5)),
                      (this._controlPT = { _next: this._controlPT, i: I, j: B, l1s: D[I + 1], l1c: L[I + 1] - D[I + 1], l2s: D[U], l2c: L[U] - D[U] }),
                      (r = this._tweenRotation(Q, x, I + 2)),
                      this._tweenRotation(Q, x, I, r),
                      this._tweenRotation(Q, x, U - 1, r),
                      (I += 4))
                    : this._tweenRotation(Q, x, I)
                  : ((r = this.add(Q, I, Q[I], x[I], 0, 0, 0, 0, 0, 1)), (r = this.add(Q, I + 1, Q[I + 1], x[I + 1], 0, 0, 0, 0, 0, 1) || r)));
        } else r = this.add(e, "setAttribute", e.getAttribute(i) + "", c + "", A, o, 0, Io(a), i);
        b && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1), (r = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1))),
          r && (this._props.push("morphSVG"), (r.end = c), (r.endProp = i));
      }
      return lo;
    },
    render: function (e, t) {
      for (var n = t._rawPath, A = t._controlPT, o = t._anchorPT, s = t._rnd, i = t._target, r = t._pt, c, g, a, l, u, f, h, C, I, B, E, Q, x; r;) r.r(e, r.d), (r = r._next);
      if (e === 1 && t._apply) for (r = t._pt; r;) r.end && (t._prop ? (i[t._prop] = r.end) : i.setAttribute(r.endProp, r.end)), (r = r._next);
      else if (n) {
        for (; o;) (f = o.sa + e * o.ca), (u = o.sl + e * o.cl), (o.t[o.i] = t._origin.x + GA(f) * u), (o.t[o.i + 1] = t._origin.y + NA(f) * u), (o = o._next);
        for (a = e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1; A;)
          (h = A.i),
            (l = n[A.j]),
            (x = h + (h === l.length - 4 ? 7 - l.length : 5)),
            (f = Je(l[x] - l[h + 1], l[x - 1] - l[h])),
            (E = NA(f)),
            (Q = GA(f)),
            (I = l[h + 2]),
            (B = l[h + 3]),
            (u = A.l1s + a * A.l1c),
            (l[h] = I - Q * u),
            (l[h + 1] = B - E * u),
            (u = A.l2s + a * A.l2c),
            (l[x - 1] = I + Q * u),
            (l[x] = B + E * u),
            (A = A._next);
        if (((i._gsRawPath = n), t._apply)) {
          for (c = "", g = " ", C = 0; C < n.length; C++) for (l = n[C], u = l.length, c += "M" + ((l[0] * s) | 0) / s + g + ((l[1] * s) | 0) / s + " C", h = 2; h < u; h++) c += ((l[h] * s) | 0) / s + g;
          t._prop ? (i[t._prop] = c) : i.setAttribute("d", c);
        }
      }
      t._render && n && t._render.call(t._tween, n, i);
    },
    kill: function (e) {
      this._pt = this._rawPath = 0;
    },
    getRawPath: Zn,
    stringToRawPath: xt,
    rawPathToString: vt,
    normalizeStrings: function (e, t, n) {
      var A = n.shapeIndex,
        o = n.map,
        s = [e, t];
      return OA(s, A, o), s;
    },
    pathFilter: OA,
    pointsFilter: gA,
    getTotalSize: _t,
    equalizeSegmentQuantity: cA,
    convertToPath: function (e, t) {
      return wA(e).map(function (n) {
        return Bs(n, t !== !1);
      });
    },
    defaultType: "linear",
    defaultUpdateTarget: !0,
    defaultMap: "size",
  };
ms() && we.registerPlugin(tt);
const qe = {
  initialFocus: [-0.72, 0, -3.05],
  opening: { zoom: 30.5, direction: [0.027, 0.55, 0.176], focus: [14.72, 0, -3.05] },
  areas: {
    main: {
      center: "amenity-clubhouse-clubhouse",
      desktop: {
        orientation: { in: [0, 5.1, 5], out: [0, 8.5, 5] },
        dragFactor: { in: 0.004, out: 0.004 },
        zoomFactor: 0.0045,
        pinchFactor: 0.0045,
        softBoundsFactor: 0.85,
        dampFactor: { drag: 0.1, zoom: 0.25 },
        bounds: { x: [-2.4, 6], y: [0, 100], z: [-6, 0], distance: [10, 23] },
      },
      mobile: {
        orientation: { in: [0, 5.1, 5], out: [0, 8.5, 5] },
        dragFactor: { in: 0.007, out: 0.014 },
        zoomFactor: 0.0055,
        pinchFactor: 0.0065,
        softBoundsFactor: 0.85,
        dampFactor: { drag: 0.19, zoom: 0.06 },
        bounds: { x: [-7, 11], y: [0, 100], z: [-7, 3], distance: [10, 24] },
      },
    },
    residence: {
      center: "amenity-beachhouse-dune-deck",
      desktop: {
        orientation: { in: [0, 5.1, 5], out: [0, 8.5, 5] },
        dragFactor: { in: 0.004, out: 0.004 },
        zoomFactor: 0.0045,
        pinchFactor: 0.0045,
        softBoundsFactor: 0.85,
        dampFactor: { drag: 0.1, zoom: 0.25 },
        bounds: { x: [15, 18], y: [0, 100], z: [1, 3], distance: [10, 17] },
      },
      mobile: {
        orientation: { in: [0, 5.1, 5], out: [0, 8.5, 5] },
        dragFactor: { in: 0.007, out: 0.014 },
        zoomFactor: 0.0055,
        pinchFactor: 0.0065,
        softBoundsFactor: 0.85,
        dampFactor: { drag: 0.19, zoom: 0.06 },
        bounds: { x: [15, 18], y: [0, 100], z: [1, 3], distance: [10, 17] },
      },
    },
  },
},
  De = {
    map: { center: "amenity-clubhouse-clubhouse" },
    renderOrder: { amenities: 5, properties: 5, birds: 10, clouds: 20, fakeCameraCover: 100 },
    icons: { size: { cols: 5, rows: 2 }, coords: { listing: [0, 0], spa: [1, 0], restaurant: [2, 0], residence: [3, 0], beachhouse: [4, 0], clubhouse: [0, 1], golf: [1, 1], bar: [2, 1], waypoint: [3, 1], empty2: [4, 1] } },
  },
  Eo = ["renderOrder"],
  mo = {
    __name: "index",
    setup(d) {
      const e = (P = "main", j = !1) => {
        (D = P),
          (L = qe.areas[D]),
          (b = L[s]),
          j ||
          ((U = b.bounds),
            (R = U.distance),
            g && (R[0] *= 0.2),
            (M = { in: t.clone().fromArray(b.orientation.in).normalize(), out: t.clone().fromArray(b.orientation.out).normalize() }),
            (H = t.clone().lerpVectors(M.out, M.in, _.smooth).normalize()),
            (G = re.lerp(b.dragFactor.out, b.dragFactor.in, _.smooth)));
      },
        t = new ce();
      let n = !1;
      const A = Ae("map"),
        { setCameraRef: o, responsiveType: s, dynamicValues: i, setAppState: r, setCurrentFocusArea: c, isDebug: g } = A,
        { currentMeshKeyFocus: a, currentSidebar: l, appState: u, currentFocusArea: f } = Ce("map"),
        h = q(() => u.value === "experience"),
        C = le(null),
        I = le(null),
        { scene: B } = Ke(),
        E = Ee.timeline(),
        Q = Ee.timeline(),
        x = Ee.timeline(),
        w = { focus: t.clone(), zoom: 0 };
      let D, L;
      const k = s === "mobile";
      let b, U, R;
      const y = t.clone().fromArray(qe.opening.direction),
        N = qe.opening.zoom,
        v = t.clone().fromArray(qe.opening.focus),
        T = { static: t.clone().fromArray(qe.initialFocus), smooth: t.clone().fromArray(qe.initialFocus) },
        _ = i.zoom;
      let M, H, G;
      const z = { isDragging: !1, isPinching: !1 };
      let pe;
      e(f.value, !1);
      const Re = () => {
        E == null || E.kill(), E == null || E.clear(), Q == null || Q.kill(), Q == null || Q.clear(), x == null || x.kill();
      },
        Ge = (P) => {
          H.lerpVectors(M.out, M.in, P).normalize();
          const j = re.lerp(R[1], R[0], P);
          return t.copy(H).multiplyScalar(j), t;
        },
        We = (P, j = !1, $ = !1) => {
          Re();
          const ee = t.clone();
          let ie = 0;
          if (P) {
            ie = $ ? 0 : 1;
            const ve = t.clone(),
              Xe = Ge(ie);
            ve.copy(T.smooth).add(Xe);
            const Rt = t.copy(T.smooth).sub(ve).length(),
              lt = Js(C.value, Rt),
              Pt = B.value.getObjectByName(P);
            if (!Pt) return;
            Pt.getWorldPosition(t);
            let Ze = t.x,
              $e = t.z;
            $ || (k ? ((Ze += lt.width * 0), ($e += lt.height * 0.33)) : ((Ze += lt.width * 0.25), ($e += lt.height * 0))), (ee.x = Ze), (ee.z = $e);
          } else j && ((ie = w.zoom), ee.copy(w.focus));
          if (P || j) {
            const ve = ee.x,
              Xe = ee.z,
              Rt = 1.5;
            if ($) {
              const Ze = (ve - T.smooth.x) * 0.3,
                $e = (Xe - T.smooth.z) * 0.3,
                xA = _.smooth,
                Os = () => e(f.value, !1);
              E.addLabel("enter")
                .to(_, { duration: 1, static: xA - 2, smooth: xA - 2, ease: "power3.in" }, "enter")
                .to([T.smooth, T.static], { duration: 1, x: `+=${Ze}`, z: `+=${$e}`, ease: "power3.in" }, "enter")
                .to(I.value.material, { duration: 0.5, opacity: 1, ease: "power3.in" }, "enter+=0.4")
                .set([T.smooth, T.static], { x: ve - Ze, z: Xe - $e })
                .set(_, { static: ie - 2, smooth: ie - 2 })
                .call(Os)
                .addLabel("out")
                .to(I.value.material, { duration: 0.5, opacity: 0, ease: "power3.in" }, "out")
                .to([T.smooth, T.static], { duration: 1, x: ve, z: Xe, ease: "power3.out" }, "out")
                .to(_, { duration: 1, static: ie, smooth: ie, ease: "power3.out" }, "out")
                .restart();
            } else
              $ ||
                E.to([T.smooth, T.static], { duration: Rt, x: ve, z: Xe, ease: "power3.inOut" }, 0)
                  .to(_, { duration: Rt, static: ie, smooth: ie, ease: "power3.inOut" }, 0)
                  .to(I.value.material, { duration: 0.5, opacity: 0, ease: "power3.in" }, 0)
                  .restart();
          }
        },
        Z = () => {
          const P = { value: N },
            j = { focus: 0, rotation: 0 },
            $ = v.clone(),
            ee = y.clone(),
            ie = "power2.inOut";
          x.eventCallback("onComplete", () => {
            r("experience");
          }),
            x.eventCallback("onUpdate", () => {
              v.lerpVectors($, T.static, j.focus), y.lerpVectors(ee, H, j.rotation), t.copy(y).multiplyScalar(P.value), C.value.position.copy(v).add(t), C.value.lookAt(v);
            }),
            x
              .to(P, { duration: 2, value: R[1] * 0.7, ease: "power1.inOut" }, 0)
              .to(P, { duration: 2, value: R[1], ease: "power1.inOut" }, 2)
              .to(j, { duration: 4, focus: 1, ease: "power1.inOut" }, 0.25)
              .to(ee, { duration: 3.5, x: ee.x * 8, z: ee.z - 0.2, y: ee.y * 0.6, ease: "power1.inOut" }, 0.1)
              .to(j, { duration: 4, rotation: 1, ease: ie }, 0.6)
              .to(".js-map-help", { duration: 1, alpha: 1, ease: "power1" }, "-=0.3"),
            x.timeScale(0.75);
        },
        oe = ({ delta: P }) => {
          (E != null && E.isActive()) || ((_.static -= P[1] * b.zoomFactor * 0.1), (_.static = ht(_.static, 0, 1)));
        },
        Kt = ({ delta: P, active: j }) => {
          if ((E != null && E.isActive()) || z.isPinching) return;
          G = re.lerp(b.dragFactor.out, b.dragFactor.in, _.smooth);
          const $ = C.value.up
            .clone()
            .cross(H)
            .normalize()
            .multiplyScalar(-P[0] * G),
            ee = H.clone().multiplyScalar(-1);
          (ee.y = 0), ee.normalize().multiplyScalar(P[1] * G);
          const ie = $.add(ee);
          T.static.add(ie), (z.isDragging = j);
        },
        K = (P) => {
          if ((E != null && E.isActive()) || z.isDragging) return;
          z.isPinching = P.pinching;
          const j = ($) => {
            if (!$.event.touches || !$.event.touches[0] || !$.event.touches[1]) return 0;
            const ee = ($.event.touches[0].clientX - $.event.touches[1].clientX) ** 2,
              ie = ($.event.touches[0].clientY - $.event.touches[1].clientY) ** 2;
            return ee + ie;
          };
          if ((P.first && (pe = j(P)), P.pinching)) {
            const $ = j(P),
              ee = ($ - pe) * 0.001;
            (pe = $), (_.static += ee * b.pinchFactor), (_.static = ht(_.static, 0, 1));
          }
        },
        se = ({ delta: P }) => {
          if (!h.value) return;
          if (!(E != null && E.isActive())) {
            const $ = ht(T.static.x, U.x[0], U.x[1]),
              ee = T.static.x + ($ - T.static.x) * b.softBoundsFactor;
            ct(T.smooth, "x", ee, b.dampFactor.drag, P);
            const ie = ht(T.static.z, U.z[0], U.z[1]),
              ve = T.static.z + (ie - T.static.z) * b.softBoundsFactor;
            ct(T.smooth, "z", ve, b.dampFactor.drag, P), ct(T.static, "x", $, b.dampFactor.drag * 2, P), ct(T.static, "z", ie, b.dampFactor.drag * 2, P), ct(_, "smooth", _.static, b.dampFactor.zoom, P, 1 / 0, Ys);
          }
          const j = Ge(_.smooth);
          C.value.position.copy(T.smooth).add(j), C.value.lookAt(T.smooth), (i.zoom.static = _.static), (i.zoom.smooth = _.smooth);
        },
        Ps = (P) => {
          e(P, !0), We(L.center, !1, !0);
        };
      return (
        _e(ge.WEBGL_DRAG, Kt),
        _e(ge.WEBGL_WHEEL, oe),
        _e(ge.WEBGL_PINCH, K),
        me(u, (P) => {
          P === "opening>experience" && Z();
        }),
        me(a, (P) => {
          let j = !1;
          !n && l.value ? (w.focus.copy(T.smooth), (w.zoom = _.smooth), (j = !1)) : !l.value && n && (j = !0), We(P.meshKey, j), (n = l.value);
        }),
        me(f, (P) => {
          Ps(P);
        }),
        he(() => {
          o(!0), (i.cameraRef = C.value), t.copy(y).multiplyScalar(N), C.value.position.copy(v).add(t), C.value.lookAt(v);
        }),
        je(() => {
          Re();
        }),
        _e(ge.WEBGL_TICK_BEFORE, se),
        (P, j) => (
          S(),
          F(
            "TresPerspectiveCamera",
            { ref_key: "cameraRef", ref: C, fov: 20 },
            [
              p(
                "TresMesh",
                { ref_key: "coverMesh", ref: I, position: [0, 0, -0.1], "matrix-auto-update": "false", renderOrder: m(De).renderOrder.fakeCameraCover },
                j[0] || (j[0] = [p("TresPlaneGeometry", { args: [1, 1, 1, 1] }, null, -1), p("TresMeshBasicMaterial", { opacity: "0", transparent: "", depthTest: "false" }, null, -1)]),
                8,
                Eo
              ),
            ],
            512
          )
        )
      );
    },
  };
function zA(d, e) {
  if (e === Vs) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), d;
  if (e === lA || e === ls) {
    let t = d.getIndex();
    if (t === null) {
      const s = [],
        i = d.getAttribute("position");
      if (i !== void 0) {
        for (let r = 0; r < i.count; r++) s.push(r);
        d.setIndex(s), (t = d.getIndex());
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), d;
    }
    const n = t.count - 2,
      A = [];
    if (e === lA) for (let s = 1; s <= n; s++) A.push(t.getX(0)), A.push(t.getX(s)), A.push(t.getX(s + 1));
    else for (let s = 0; s < n; s++) s % 2 === 0 ? (A.push(t.getX(s)), A.push(t.getX(s + 1)), A.push(t.getX(s + 2))) : (A.push(t.getX(s + 2)), A.push(t.getX(s + 1)), A.push(t.getX(s)));
    A.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const o = d.clone();
    return o.setIndex(A), o.clearGroups(), o;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), d;
}
class Qo extends fA {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new _o(t);
      }),
      this.register(function (t) {
        return new So(t);
      }),
      this.register(function (t) {
        return new Go(t);
      }),
      this.register(function (t) {
        return new No(t);
      }),
      this.register(function (t) {
        return new Uo(t);
      }),
      this.register(function (t) {
        return new Lo(t);
      }),
      this.register(function (t) {
        return new Ro(t);
      }),
      this.register(function (t) {
        return new To(t);
      }),
      this.register(function (t) {
        return new bo(t);
      }),
      this.register(function (t) {
        return new vo(t);
      }),
      this.register(function (t) {
        return new Fo(t);
      }),
      this.register(function (t) {
        return new Do(t);
      }),
      this.register(function (t) {
        return new ko(t);
      }),
      this.register(function (t) {
        return new Mo(t);
      }),
      this.register(function (t) {
        return new wo(t);
      }),
      this.register(function (t) {
        return new Ho(t);
      }),
      this.register(function (t) {
        return new Ko(t);
      });
  }
  load(e, t, n, A) {
    const o = this;
    let s;
    if (this.resourcePath !== "") s = this.resourcePath;
    else if (this.path !== "") {
      const c = yt.extractUrlBase(e);
      s = yt.resolveURL(c, this.path);
    } else s = yt.extractUrlBase(e);
    this.manager.itemStart(e);
    const i = function (c) {
      A ? A(c) : console.error(c), o.manager.itemError(e), o.manager.itemEnd(e);
    },
      r = new Ye(this.manager);
    r.setPath(this.path),
      r.setResponseType("arraybuffer"),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(this.withCredentials),
      r.load(
        e,
        function (c) {
          try {
            o.parse(
              c,
              s,
              function (g) {
                t(g), o.manager.itemEnd(e);
              },
              i
            );
          } catch (g) {
            i(g);
          }
        },
        n,
        i
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, A) {
    let o;
    const s = {},
      i = {},
      r = new TextDecoder();
    if (typeof e == "string") o = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (r.decode(new Uint8Array(e, 0, 4)) === ys) {
        try {
          s[O.KHR_BINARY_GLTF] = new Po(e);
        } catch (a) {
          A && A(a);
          return;
        }
        o = JSON.parse(s[O.KHR_BINARY_GLTF].content);
      } else o = JSON.parse(r.decode(e));
    else o = e;
    if (o.asset === void 0 || o.asset.version[0] < 2) {
      A && A(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new ti(o, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let g = 0; g < this.pluginCallbacks.length; g++) {
      const a = this.pluginCallbacks[g](c);
      a.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), (i[a.name] = a), (s[a.name] = !0);
    }
    if (o.extensionsUsed)
      for (let g = 0; g < o.extensionsUsed.length; ++g) {
        const a = o.extensionsUsed[g],
          l = o.extensionsRequired || [];
        switch (a) {
          case O.KHR_MATERIALS_UNLIT:
            s[a] = new xo();
            break;
          case O.KHR_DRACO_MESH_COMPRESSION:
            s[a] = new Oo(o, this.dracoLoader);
            break;
          case O.KHR_TEXTURE_TRANSFORM:
            s[a] = new qo();
            break;
          case O.KHR_MESH_QUANTIZATION:
            s[a] = new Jo();
            break;
          default:
            l.indexOf(a) >= 0 && i[a] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + a + '".');
        }
      }
    c.setExtensions(s), c.setPlugins(i), c.parse(n, A);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (A, o) {
      n.parse(e, t, A, o);
    });
  }
}
function yo() {
  let d = {};
  return {
    get: function (e) {
      return d[e];
    },
    add: function (e, t) {
      d[e] = t;
    },
    remove: function (e) {
      delete d[e];
    },
    removeAll: function () {
      d = {};
    },
  };
}
const O = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class wo {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_LIGHTS_PUNCTUAL), (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, A = t.length; n < A; n++) {
      const o = t[n];
      o.extensions && o.extensions[this.name] && o.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, o.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let A = t.cache.get(n);
    if (A) return A;
    const o = t.json,
      r = (((o.extensions && o.extensions[this.name]) || {}).lights || [])[e];
    let c;
    const g = new ae(16777215);
    r.color !== void 0 && g.setRGB(r.color[0], r.color[1], r.color[2], xe);
    const a = r.range !== void 0 ? r.range : 0;
    switch (r.type) {
      case "directional":
        (c = new Ws(g)), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        (c = new zs(g)), (c.distance = a);
        break;
      case "spot":
        (c = new js(g)),
          (c.distance = a),
          (r.spot = r.spot || {}),
          (r.spot.innerConeAngle = r.spot.innerConeAngle !== void 0 ? r.spot.innerConeAngle : 0),
          (r.spot.outerConeAngle = r.spot.outerConeAngle !== void 0 ? r.spot.outerConeAngle : Math.PI / 4),
          (c.angle = r.spot.outerConeAngle),
          (c.penumbra = 1 - r.spot.innerConeAngle / r.spot.outerConeAngle),
          c.target.position.set(0, 0, -1),
          c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + r.type);
    }
    return c.position.set(0, 0, 0), (c.decay = 2), be(c, r), r.intensity !== void 0 && (c.intensity = r.intensity), (c.name = t.createUniqueName(r.name || "light_" + e)), (A = Promise.resolve(c)), t.cache.add(n, A), A;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      o = n.json.nodes[e],
      i = ((o.extensions && o.extensions[this.name]) || {}).light;
    return i === void 0
      ? null
      : this._loadLight(i).then(function (r) {
        return n._getNodeRef(t.cache, i, r);
      });
  }
}
class xo {
  constructor() {
    this.name = O.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ft;
  }
  extendParams(e, t, n) {
    const A = [];
    (e.color = new ae(1, 1, 1)), (e.opacity = 1);
    const o = t.pbrMetallicRoughness;
    if (o) {
      if (Array.isArray(o.baseColorFactor)) {
        const s = o.baseColorFactor;
        e.color.setRGB(s[0], s[1], s[2], xe), (e.opacity = s[3]);
      }
      o.baseColorTexture !== void 0 && A.push(n.assignTexture(e, "map", o.baseColorTexture, Me));
    }
    return Promise.all(A);
  }
}
class vo {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const A = this.parser.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = A.extensions[this.name].emissiveStrength;
    return o !== void 0 && (t.emissiveIntensity = o), Promise.resolve();
  }
}
class _o {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    if (
      (s.clearcoatFactor !== void 0 && (t.clearcoat = s.clearcoatFactor),
        s.clearcoatTexture !== void 0 && o.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)),
        s.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = s.clearcoatRoughnessFactor),
        s.clearcoatRoughnessTexture !== void 0 && o.push(n.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)),
        s.clearcoatNormalTexture !== void 0 && (o.push(n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== void 0))
    ) {
      const i = s.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new IA(i, i);
    }
    return Promise.all(o);
  }
}
class So {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_DISPERSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const A = this.parser.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = A.extensions[this.name];
    return (t.dispersion = o.dispersion !== void 0 ? o.dispersion : 0), Promise.resolve();
  }
}
class Do {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    return (
      s.iridescenceFactor !== void 0 && (t.iridescence = s.iridescenceFactor),
      s.iridescenceTexture !== void 0 && o.push(n.assignTexture(t, "iridescenceMap", s.iridescenceTexture)),
      s.iridescenceIor !== void 0 && (t.iridescenceIOR = s.iridescenceIor),
      t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
      s.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum),
      s.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum),
      s.iridescenceThicknessTexture !== void 0 && o.push(n.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)),
      Promise.all(o)
    );
  }
}
class Lo {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [];
    (t.sheenColor = new ae(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const s = A.extensions[this.name];
    if (s.sheenColorFactor !== void 0) {
      const i = s.sheenColorFactor;
      t.sheenColor.setRGB(i[0], i[1], i[2], xe);
    }
    return (
      s.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = s.sheenRoughnessFactor),
      s.sheenColorTexture !== void 0 && o.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, Me)),
      s.sheenRoughnessTexture !== void 0 && o.push(n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)),
      Promise.all(o)
    );
  }
}
class Ro {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    return s.transmissionFactor !== void 0 && (t.transmission = s.transmissionFactor), s.transmissionTexture !== void 0 && o.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)), Promise.all(o);
  }
}
class To {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    (t.thickness = s.thicknessFactor !== void 0 ? s.thicknessFactor : 0), s.thicknessTexture !== void 0 && o.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)), (t.attenuationDistance = s.attenuationDistance || 1 / 0);
    const i = s.attenuationColor || [1, 1, 1];
    return (t.attenuationColor = new ae().setRGB(i[0], i[1], i[2], xe)), Promise.all(o);
  }
}
class bo {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const A = this.parser.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = A.extensions[this.name];
    return (t.ior = o.ior !== void 0 ? o.ior : 1.5), Promise.resolve();
  }
}
class Fo {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    (t.specularIntensity = s.specularFactor !== void 0 ? s.specularFactor : 1), s.specularTexture !== void 0 && o.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
    const i = s.specularColorFactor || [1, 1, 1];
    return (t.specularColor = new ae().setRGB(i[0], i[1], i[2], xe)), s.specularColorTexture !== void 0 && o.push(n.assignTexture(t, "specularColorMap", s.specularColorTexture, Me)), Promise.all(o);
  }
}
class Mo {
  constructor(e) {
    (this.parser = e), (this.name = O.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    return (t.bumpScale = s.bumpFactor !== void 0 ? s.bumpFactor : 1), s.bumpTexture !== void 0 && o.push(n.assignTexture(t, "bumpMap", s.bumpTexture)), Promise.all(o);
  }
}
class ko {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Le;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      A = n.json.materials[e];
    if (!A.extensions || !A.extensions[this.name]) return Promise.resolve();
    const o = [],
      s = A.extensions[this.name];
    return (
      s.anisotropyStrength !== void 0 && (t.anisotropy = s.anisotropyStrength),
      s.anisotropyRotation !== void 0 && (t.anisotropyRotation = s.anisotropyRotation),
      s.anisotropyTexture !== void 0 && o.push(n.assignTexture(t, "anisotropyMap", s.anisotropyTexture)),
      Promise.all(o)
    );
  }
}
class Go {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      A = n.textures[e];
    if (!A.extensions || !A.extensions[this.name]) return null;
    const o = A.extensions[this.name],
      s = t.options.ktx2Loader;
    if (!s) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, o.source, s);
  }
}
class No {
  constructor(e) {
    (this.parser = e), (this.name = O.EXT_TEXTURE_WEBP), (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      A = n.json,
      o = A.textures[e];
    if (!o.extensions || !o.extensions[t]) return null;
    const s = o.extensions[t],
      i = A.images[s.source];
    let r = n.textureLoader;
    if (i.uri) {
      const c = n.options.manager.getHandler(i.uri);
      c !== null && (r = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, s.source, r);
      if (A.extensionsRequired && A.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
      (this.isSupported = new Promise(function (e) {
        const t = new Image();
        (t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
          (t.onload = t.onerror = function () {
            e(t.height === 1);
          });
      })),
      this.isSupported
    );
  }
}
class Uo {
  constructor(e) {
    (this.parser = e), (this.name = O.EXT_TEXTURE_AVIF), (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      A = n.json,
      o = A.textures[e];
    if (!o.extensions || !o.extensions[t]) return null;
    const s = o.extensions[t],
      i = A.images[s.source];
    let r = n.textureLoader;
    if (i.uri) {
      const c = n.options.manager.getHandler(i.uri);
      c !== null && (r = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, s.source, r);
      if (A.extensionsRequired && A.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
      (this.isSupported = new Promise(function (e) {
        const t = new Image();
        (t.src =
          "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
          (t.onload = t.onerror = function () {
            e(t.height === 1);
          });
      })),
      this.isSupported
    );
  }
}
class Ho {
  constructor(e) {
    (this.name = O.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const A = n.extensions[this.name],
        o = this.parser.getDependency("buffer", A.buffer),
        s = this.parser.options.meshoptDecoder;
      if (!s || !s.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return o.then(function (i) {
        const r = A.byteOffset || 0,
          c = A.byteLength || 0,
          g = A.count,
          a = A.byteStride,
          l = new Uint8Array(i, r, c);
        return s.decodeGltfBufferAsync
          ? s.decodeGltfBufferAsync(g, a, l, A.mode, A.filter).then(function (u) {
            return u.buffer;
          })
          : s.ready.then(function () {
            const u = new ArrayBuffer(g * a);
            return s.decodeGltfBuffer(new Uint8Array(u), g, a, l, A.mode, A.filter), u;
          });
      });
    } else return null;
  }
}
class Ko {
  constructor(e) {
    (this.name = O.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const A = t.meshes[n.mesh];
    for (const c of A.primitives) if (c.mode !== Be.TRIANGLES && c.mode !== Be.TRIANGLE_STRIP && c.mode !== Be.TRIANGLE_FAN && c.mode !== void 0) return null;
    const s = n.extensions[this.name].attributes,
      i = [],
      r = {};
    for (const c in s) i.push(this.parser.getDependency("accessor", s[c]).then((g) => ((r[c] = g), r[c])));
    return i.length < 1
      ? null
      : (i.push(this.parser.createNodeMesh(e)),
        Promise.all(i).then((c) => {
          const g = c.pop(),
            a = g.isGroup ? g.children : [g],
            l = c[0].count,
            u = [];
          for (const f of a) {
            const h = new Dt(),
              C = new ce(),
              I = new BA(),
              B = new ce(1, 1, 1),
              E = new Xs(f.geometry, f.material, l);
            for (let Q = 0; Q < l; Q++)
              r.TRANSLATION && C.fromBufferAttribute(r.TRANSLATION, Q), r.ROTATION && I.fromBufferAttribute(r.ROTATION, Q), r.SCALE && B.fromBufferAttribute(r.SCALE, Q), E.setMatrixAt(Q, h.compose(C, I, B));
            for (const Q in r)
              if (Q === "_COLOR_0") {
                const x = r[Q];
                E.instanceColor = new At(x.array, x.itemSize, x.normalized);
              } else Q !== "TRANSLATION" && Q !== "ROTATION" && Q !== "SCALE" && f.geometry.setAttribute(Q, r[Q]);
            Nt.prototype.copy.call(E, f), this.parser.assignFinalMaterial(E), u.push(E);
          }
          return g.isGroup ? (g.clear(), g.add(...u), g) : u[0];
        }));
  }
}
const ys = "glTF",
  ut = 12,
  WA = { JSON: 1313821514, BIN: 5130562 };
class Po {
  constructor(e) {
    (this.name = O.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, ut),
      n = new TextDecoder();
    if (((this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }), this.header.magic !== ys)) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const A = this.header.length - ut,
      o = new DataView(e, ut);
    let s = 0;
    for (; s < A;) {
      const i = o.getUint32(s, !0);
      s += 4;
      const r = o.getUint32(s, !0);
      if (((s += 4), r === WA.JSON)) {
        const c = new Uint8Array(e, ut + s, i);
        this.content = n.decode(c);
      } else if (r === WA.BIN) {
        const c = ut + s;
        this.body = e.slice(c, c + i);
      }
      s += i;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Oo {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = O.KHR_DRACO_MESH_COMPRESSION), (this.json = e), (this.dracoLoader = t), this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      A = this.dracoLoader,
      o = e.extensions[this.name].bufferView,
      s = e.extensions[this.name].attributes,
      i = {},
      r = {},
      c = {};
    for (const g in s) {
      const a = uA[g] || g.toLowerCase();
      i[a] = s[g];
    }
    for (const g in e.attributes) {
      const a = uA[g] || g.toLowerCase();
      if (s[g] !== void 0) {
        const l = n.accessors[e.attributes[g]],
          u = rt[l.componentType];
        (c[a] = u.name), (r[a] = l.normalized === !0);
      }
    }
    return t.getDependency("bufferView", o).then(function (g) {
      return new Promise(function (a, l) {
        A.decodeDracoFile(
          g,
          function (u) {
            for (const f in u.attributes) {
              const h = u.attributes[f],
                C = r[f];
              C !== void 0 && (h.normalized = C);
            }
            a(u);
          },
          i,
          c,
          xe,
          l
        );
      });
    });
  }
}
class qo {
  constructor() {
    this.name = O.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) ||
      ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class Jo {
  constructor() {
    this.name = O.KHR_MESH_QUANTIZATION;
  }
}
class ws extends xn {
  constructor(e, t, n, A) {
    super(e, t, n, A);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      A = this.valueSize,
      o = e * A * 3 + A;
    for (let s = 0; s !== A; s++) t[s] = n[o + s];
    return t;
  }
  interpolate_(e, t, n, A) {
    const o = this.resultBuffer,
      s = this.sampleValues,
      i = this.valueSize,
      r = i * 2,
      c = i * 3,
      g = A - t,
      a = (n - t) / g,
      l = a * a,
      u = l * a,
      f = e * c,
      h = f - c,
      C = -2 * u + 3 * l,
      I = u - l,
      B = 1 - C,
      E = I - l + a;
    for (let Q = 0; Q !== i; Q++) {
      const x = s[h + Q + i],
        w = s[h + Q + r] * g,
        D = s[f + Q + i],
        L = s[f + Q] * g;
      o[Q] = B * x + E * w + C * D + I * L;
    }
    return o;
  }
}
const Yo = new BA();
class Vo extends ws {
  interpolate_(e, t, n, A) {
    const o = super.interpolate_(e, t, n, A);
    return Yo.fromArray(o).normalize().toArray(o), o;
  }
}
const Be = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123,
},
  rt = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array },
  XA = { 9728: hn, 9729: at, 9984: fn, 9985: In, 9986: Cn, 9987: CA },
  ZA = { 33071: pn, 33648: Bn, 10497: St },
  Wt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  uA = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" },
  Ne = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" },
  jo = { CUBICSPLINE: void 0, LINEAR: hs, STEP: En },
  Xt = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function zo(d) {
  return d.DefaultMaterial === void 0 && (d.DefaultMaterial = new us({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: mn })), d.DefaultMaterial;
}
function Oe(d, e, t) {
  for (const n in t.extensions) d[n] === void 0 && ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}), (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function be(d, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(d.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Wo(d, e, t) {
  let n = !1,
    A = !1,
    o = !1;
  for (let c = 0, g = e.length; c < g; c++) {
    const a = e[c];
    if ((a.POSITION !== void 0 && (n = !0), a.NORMAL !== void 0 && (A = !0), a.COLOR_0 !== void 0 && (o = !0), n && A && o)) break;
  }
  if (!n && !A && !o) return Promise.resolve(d);
  const s = [],
    i = [],
    r = [];
  for (let c = 0, g = e.length; c < g; c++) {
    const a = e[c];
    if (n) {
      const l = a.POSITION !== void 0 ? t.getDependency("accessor", a.POSITION) : d.attributes.position;
      s.push(l);
    }
    if (A) {
      const l = a.NORMAL !== void 0 ? t.getDependency("accessor", a.NORMAL) : d.attributes.normal;
      i.push(l);
    }
    if (o) {
      const l = a.COLOR_0 !== void 0 ? t.getDependency("accessor", a.COLOR_0) : d.attributes.color;
      r.push(l);
    }
  }
  return Promise.all([Promise.all(s), Promise.all(i), Promise.all(r)]).then(function (c) {
    const g = c[0],
      a = c[1],
      l = c[2];
    return n && (d.morphAttributes.position = g), A && (d.morphAttributes.normal = a), o && (d.morphAttributes.color = l), (d.morphTargetsRelative = !0), d;
  });
}
function Xo(d, e) {
  if ((d.updateMorphTargets(), e.weights !== void 0)) for (let t = 0, n = e.weights.length; t < n; t++) d.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (d.morphTargetInfluences.length === t.length) {
      d.morphTargetDictionary = {};
      for (let n = 0, A = t.length; n < A; n++) d.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Zo(d) {
  let e;
  const t = d.extensions && d.extensions[O.KHR_DRACO_MESH_COMPRESSION];
  if ((t ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Zt(t.attributes)) : (e = d.indices + ":" + Zt(d.attributes) + ":" + d.mode), d.targets !== void 0))
    for (let n = 0, A = d.targets.length; n < A; n++) e += ":" + Zt(d.targets[n]);
  return e;
}
function Zt(d) {
  let e = "";
  const t = Object.keys(d).sort();
  for (let n = 0, A = t.length; n < A; n++) e += t[n] + ":" + d[t[n]] + ";";
  return e;
}
function dA(d) {
  switch (d) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function $o(d) {
  return d.search(/\.jpe?g($|\?)/i) > 0 || d.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : d.search(/\.webp($|\?)/i) > 0 || d.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
const ei = new Dt();
class ti {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new yo()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      A = -1,
      o = !1,
      s = -1;
    if (typeof navigator < "u") {
      const i = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(i) === !0;
      const r = i.match(/Version\/(\d+)/);
      (A = n && r ? parseInt(r[1], 10) : -1), (o = i.indexOf("Firefox") > -1), (s = o ? i.match(/Firefox\/([0-9]+)\./)[1] : -1);
    }
    typeof createImageBitmap > "u" || (n && A < 17) || (o && s < 98) ? (this.textureLoader = new cs(this.options.manager)) : (this.textureLoader = new Zs(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Ye(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      A = this.json,
      o = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (s) {
        return s._markDefs && s._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (s) {
          return s.beforeRoot && s.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
        })
        .then(function (s) {
          const i = { scene: s[0][A.scene || 0], scenes: s[0], animations: s[1], cameras: s[2], asset: A.asset, parser: n, userData: {} };
          return (
            Oe(o, i, A),
            be(i, A),
            Promise.all(
              n._invokeAll(function (r) {
                return r.afterRoot && r.afterRoot(i);
              })
            ).then(function () {
              for (const r of i.scenes) r.updateMatrixWorld();
              e(i);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let A = 0, o = t.length; A < o; A++) {
      const s = t[A].joints;
      for (let i = 0, r = s.length; i < r; i++) e[s[i]].isBone = !0;
    }
    for (let A = 0, o = e.length; A < o; A++) {
      const s = e[A];
      s.mesh !== void 0 && (this._addNodeRef(this.meshCache, s.mesh), s.skin !== void 0 && (n[s.mesh].isSkinnedMesh = !0)), s.camera !== void 0 && this._addNodeRef(this.cameraCache, s.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const A = n.clone(),
      o = (s, i) => {
        const r = this.associations.get(s);
        r != null && this.associations.set(i, r);
        for (const [c, g] of s.children.entries()) o(g, i.children[c]);
      };
    return o(n, A), (A.name += "_instance_" + e.uses[t]++), A;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const A = e(t[n]);
      if (A) return A;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let A = 0; A < t.length; A++) {
      const o = e(t[A]);
      o && n.push(o);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let A = this.cache.get(n);
    if (!A) {
      switch (e) {
        case "scene":
          A = this.loadScene(t);
          break;
        case "node":
          A = this._invokeOne(function (o) {
            return o.loadNode && o.loadNode(t);
          });
          break;
        case "mesh":
          A = this._invokeOne(function (o) {
            return o.loadMesh && o.loadMesh(t);
          });
          break;
        case "accessor":
          A = this.loadAccessor(t);
          break;
        case "bufferView":
          A = this._invokeOne(function (o) {
            return o.loadBufferView && o.loadBufferView(t);
          });
          break;
        case "buffer":
          A = this.loadBuffer(t);
          break;
        case "material":
          A = this._invokeOne(function (o) {
            return o.loadMaterial && o.loadMaterial(t);
          });
          break;
        case "texture":
          A = this._invokeOne(function (o) {
            return o.loadTexture && o.loadTexture(t);
          });
          break;
        case "skin":
          A = this.loadSkin(t);
          break;
        case "animation":
          A = this._invokeOne(function (o) {
            return o.loadAnimation && o.loadAnimation(t);
          });
          break;
        case "camera":
          A = this.loadCamera(t);
          break;
        default:
          if (
            ((A = this._invokeOne(function (o) {
              return o != this && o.getDependency && o.getDependency(e, t);
            })),
              !A)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, A);
    }
    return A;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        A = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        A.map(function (o, s) {
          return n.getDependency(e, s);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[O.KHR_BINARY_GLTF].body);
    const A = this.options;
    return new Promise(function (o, s) {
      n.load(yt.resolveURL(t.uri, A.path), o, void 0, function () {
        s(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const A = t.byteLength || 0,
        o = t.byteOffset || 0;
      return n.slice(o, o + A);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      A = this.json.accessors[e];
    if (A.bufferView === void 0 && A.sparse === void 0) {
      const s = Wt[A.type],
        i = rt[A.componentType],
        r = A.normalized === !0,
        c = new i(A.count * s);
      return Promise.resolve(new wt(c, s, r));
    }
    const o = [];
    return (
      A.bufferView !== void 0 ? o.push(this.getDependency("bufferView", A.bufferView)) : o.push(null),
      A.sparse !== void 0 && (o.push(this.getDependency("bufferView", A.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", A.sparse.values.bufferView))),
      Promise.all(o).then(function (s) {
        const i = s[0],
          r = Wt[A.type],
          c = rt[A.componentType],
          g = c.BYTES_PER_ELEMENT,
          a = g * r,
          l = A.byteOffset || 0,
          u = A.bufferView !== void 0 ? n.bufferViews[A.bufferView].byteStride : void 0,
          f = A.normalized === !0;
        let h, C;
        if (u && u !== a) {
          const I = Math.floor(l / u),
            B = "InterleavedBuffer:" + A.bufferView + ":" + A.componentType + ":" + I + ":" + A.count;
          let E = t.cache.get(B);
          E || ((h = new c(i, I * u, (A.count * u) / g)), (E = new $s(h, u / g)), t.cache.add(B, E)), (C = new Qn(E, r, (l % u) / g, f));
        } else i === null ? (h = new c(A.count * r)) : (h = new c(i, l, A.count * r)), (C = new wt(h, r, f));
        if (A.sparse !== void 0) {
          const I = Wt.SCALAR,
            B = rt[A.sparse.indices.componentType],
            E = A.sparse.indices.byteOffset || 0,
            Q = A.sparse.values.byteOffset || 0,
            x = new B(s[1], E, A.sparse.count * I),
            w = new c(s[2], Q, A.sparse.count * r);
          i !== null && (C = new wt(C.array.slice(), C.itemSize, C.normalized));
          for (let D = 0, L = x.length; D < L; D++) {
            const k = x[D];
            if ((C.setX(k, w[D * r]), r >= 2 && C.setY(k, w[D * r + 1]), r >= 3 && C.setZ(k, w[D * r + 2]), r >= 4 && C.setW(k, w[D * r + 3]), r >= 5))
              throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return C;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      o = t.textures[e].source,
      s = t.images[o];
    let i = this.textureLoader;
    if (s.uri) {
      const r = n.manager.getHandler(s.uri);
      r !== null && (i = r);
    }
    return this.loadTextureImage(e, o, i);
  }
  loadTextureImage(e, t, n) {
    const A = this,
      o = this.json,
      s = o.textures[e],
      i = o.images[t],
      r = (i.uri || i.bufferView) + ":" + s.sampler;
    if (this.textureCache[r]) return this.textureCache[r];
    const c = this.loadImageSource(t, n)
      .then(function (g) {
        (g.flipY = !1), (g.name = s.name || i.name || ""), g.name === "" && typeof i.uri == "string" && i.uri.startsWith("data:image/") === !1 && (g.name = i.uri);
        const l = (o.samplers || {})[s.sampler] || {};
        return (g.magFilter = XA[l.magFilter] || at), (g.minFilter = XA[l.minFilter] || CA), (g.wrapS = ZA[l.wrapS] || St), (g.wrapT = ZA[l.wrapT] || St), A.associations.set(g, { textures: e }), g;
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[r] = c), c;
  }
  loadImageSource(e, t) {
    const n = this,
      A = this.json,
      o = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((a) => a.clone());
    const s = A.images[e],
      i = self.URL || self.webkitURL;
    let r = s.uri || "",
      c = !1;
    if (s.bufferView !== void 0)
      r = n.getDependency("bufferView", s.bufferView).then(function (a) {
        c = !0;
        const l = new Blob([a], { type: s.mimeType });
        return (r = i.createObjectURL(l)), r;
      });
    else if (s.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const g = Promise.resolve(r)
      .then(function (a) {
        return new Promise(function (l, u) {
          let f = l;
          t.isImageBitmapLoader === !0 &&
            (f = function (h) {
              const C = new _A(h);
              (C.needsUpdate = !0), l(C);
            }),
            t.load(yt.resolveURL(a, o.path), f, void 0, u);
        });
      })
      .then(function (a) {
        return c === !0 && i.revokeObjectURL(r), be(a, s), (a.userData.mimeType = s.mimeType || $o(s.uri)), a;
      })
      .catch(function (a) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", r), a);
      });
    return (this.sourceCache[e] = g), g;
  }
  assignTexture(e, t, n, A) {
    const o = this;
    return this.getDependency("texture", n.index).then(function (s) {
      if (!s) return null;
      if ((n.texCoord !== void 0 && n.texCoord > 0 && ((s = s.clone()), (s.channel = n.texCoord)), o.extensions[O.KHR_TEXTURE_TRANSFORM])) {
        const i = n.extensions !== void 0 ? n.extensions[O.KHR_TEXTURE_TRANSFORM] : void 0;
        if (i) {
          const r = o.associations.get(s);
          (s = o.extensions[O.KHR_TEXTURE_TRANSFORM].extendTexture(s, i)), o.associations.set(s, r);
        }
      }
      return A !== void 0 && (s.colorSpace = A), (e[t] = s), s;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const A = t.attributes.tangent === void 0,
      o = t.attributes.color !== void 0,
      s = t.attributes.normal === void 0;
    if (e.isPoints) {
      const i = "PointsMaterial:" + n.uuid;
      let r = this.cache.get(i);
      r || ((r = new en()), Ot.prototype.copy.call(r, n), r.color.copy(n.color), (r.map = n.map), (r.sizeAttenuation = !1), this.cache.add(i, r)), (n = r);
    } else if (e.isLine) {
      const i = "LineBasicMaterial:" + n.uuid;
      let r = this.cache.get(i);
      r || ((r = new gs()), Ot.prototype.copy.call(r, n), r.color.copy(n.color), (r.map = n.map), this.cache.add(i, r)), (n = r);
    }
    if (A || o || s) {
      let i = "ClonedMaterial:" + n.uuid + ":";
      A && (i += "derivative-tangents:"), o && (i += "vertex-colors:"), s && (i += "flat-shading:");
      let r = this.cache.get(i);
      r ||
        ((r = n.clone()),
          o && (r.vertexColors = !0),
          s && (r.flatShading = !0),
          A && (r.normalScale && (r.normalScale.y *= -1), r.clearcoatNormalScale && (r.clearcoatNormalScale.y *= -1)),
          this.cache.add(i, r),
          this.associations.set(r, this.associations.get(n))),
        (n = r);
    }
    e.material = n;
  }
  getMaterialType() {
    return us;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      A = this.extensions,
      o = n.materials[e];
    let s;
    const i = {},
      r = o.extensions || {},
      c = [];
    if (r[O.KHR_MATERIALS_UNLIT]) {
      const a = A[O.KHR_MATERIALS_UNLIT];
      (s = a.getMaterialType()), c.push(a.extendParams(i, o, t));
    } else {
      const a = o.pbrMetallicRoughness || {};
      if (((i.color = new ae(1, 1, 1)), (i.opacity = 1), Array.isArray(a.baseColorFactor))) {
        const l = a.baseColorFactor;
        i.color.setRGB(l[0], l[1], l[2], xe), (i.opacity = l[3]);
      }
      a.baseColorTexture !== void 0 && c.push(t.assignTexture(i, "map", a.baseColorTexture, Me)),
        (i.metalness = a.metallicFactor !== void 0 ? a.metallicFactor : 1),
        (i.roughness = a.roughnessFactor !== void 0 ? a.roughnessFactor : 1),
        a.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(i, "metalnessMap", a.metallicRoughnessTexture)), c.push(t.assignTexture(i, "roughnessMap", a.metallicRoughnessTexture))),
        (s = this._invokeOne(function (l) {
          return l.getMaterialType && l.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (l) {
              return l.extendMaterialParams && l.extendMaterialParams(e, i);
            })
          )
        );
    }
    o.doubleSided === !0 && (i.side = tn);
    const g = o.alphaMode || Xt.OPAQUE;
    if (
      (g === Xt.BLEND ? ((i.transparent = !0), (i.depthWrite = !1)) : ((i.transparent = !1), g === Xt.MASK && (i.alphaTest = o.alphaCutoff !== void 0 ? o.alphaCutoff : 0.5)),
        o.normalTexture !== void 0 && s !== ft && (c.push(t.assignTexture(i, "normalMap", o.normalTexture)), (i.normalScale = new IA(1, 1)), o.normalTexture.scale !== void 0))
    ) {
      const a = o.normalTexture.scale;
      i.normalScale.set(a, a);
    }
    if (
      (o.occlusionTexture !== void 0 && s !== ft && (c.push(t.assignTexture(i, "aoMap", o.occlusionTexture)), o.occlusionTexture.strength !== void 0 && (i.aoMapIntensity = o.occlusionTexture.strength)),
        o.emissiveFactor !== void 0 && s !== ft)
    ) {
      const a = o.emissiveFactor;
      i.emissive = new ae().setRGB(a[0], a[1], a[2], xe);
    }
    return (
      o.emissiveTexture !== void 0 && s !== ft && c.push(t.assignTexture(i, "emissiveMap", o.emissiveTexture, Me)),
      Promise.all(c).then(function () {
        const a = new s(i);
        return o.name && (a.name = o.name), be(a, o), t.associations.set(a, { materials: e }), o.extensions && Oe(A, a, o), a;
      })
    );
  }
  createUniqueName(e) {
    const t = An.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      A = this.primitiveCache;
    function o(i) {
      return n[O.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i, t).then(function (r) {
        return $A(r, i, t);
      });
    }
    const s = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const c = e[i],
        g = Zo(c),
        a = A[g];
      if (a) s.push(a.promise);
      else {
        let l;
        c.extensions && c.extensions[O.KHR_DRACO_MESH_COMPRESSION] ? (l = o(c)) : (l = $A(new pA(), c, t)), (A[g] = { primitive: c, promise: l }), s.push(l);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      A = this.extensions,
      o = n.meshes[e],
      s = o.primitives,
      i = [];
    for (let r = 0, c = s.length; r < c; r++) {
      const g = s[r].material === void 0 ? zo(this.cache) : this.getDependency("material", s[r].material);
      i.push(g);
    }
    return (
      i.push(t.loadGeometries(s)),
      Promise.all(i).then(function (r) {
        const c = r.slice(0, r.length - 1),
          g = r[r.length - 1],
          a = [];
        for (let u = 0, f = g.length; u < f; u++) {
          const h = g[u],
            C = s[u];
          let I;
          const B = c[u];
          if (C.mode === Be.TRIANGLES || C.mode === Be.TRIANGLE_STRIP || C.mode === Be.TRIANGLE_FAN || C.mode === void 0)
            (I = o.isSkinnedMesh === !0 ? new sn(h, B) : new nn(h, B)),
              I.isSkinnedMesh === !0 && I.normalizeSkinWeights(),
              C.mode === Be.TRIANGLE_STRIP ? (I.geometry = zA(I.geometry, ls)) : C.mode === Be.TRIANGLE_FAN && (I.geometry = zA(I.geometry, lA));
          else if (C.mode === Be.LINES) I = new on(h, B);
          else if (C.mode === Be.LINE_STRIP) I = new ds(h, B);
          else if (C.mode === Be.LINE_LOOP) I = new rn(h, B);
          else if (C.mode === Be.POINTS) I = new an(h, B);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + C.mode);
          Object.keys(I.geometry.morphAttributes).length > 0 && Xo(I, o), (I.name = t.createUniqueName(o.name || "mesh_" + e)), be(I, o), C.extensions && Oe(A, I, C), t.assignFinalMaterial(I), a.push(I);
        }
        for (let u = 0, f = a.length; u < f; u++) t.associations.set(a[u], { meshes: e, primitives: u });
        if (a.length === 1) return o.extensions && Oe(A, a[0], o), a[0];
        const l = new qt();
        o.extensions && Oe(A, l, o), t.associations.set(l, { meshes: e });
        for (let u = 0, f = a.length; u < f; u++) l.add(a[u]);
        return l;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      A = n[n.type];
    if (!A) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective" ? (t = new ln(re.radToDeg(A.yfov), A.aspectRatio || 1, A.znear || 1, A.zfar || 2e6)) : n.type === "orthographic" && (t = new cn(-A.xmag, A.xmag, A.ymag, -A.ymag, A.znear, A.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      be(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let A = 0, o = t.joints.length; A < o; A++) n.push(this._loadNodeShallow(t.joints[A]));
    return (
      t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null),
      Promise.all(n).then(function (A) {
        const o = A.pop(),
          s = A,
          i = [],
          r = [];
        for (let c = 0, g = s.length; c < g; c++) {
          const a = s[c];
          if (a) {
            i.push(a);
            const l = new Dt();
            o !== null && l.fromArray(o.array, c * 16), r.push(l);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
        }
        return new gn(i, r);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      A = t.animations[e],
      o = A.name ? A.name : "animation_" + e,
      s = [],
      i = [],
      r = [],
      c = [],
      g = [];
    for (let a = 0, l = A.channels.length; a < l; a++) {
      const u = A.channels[a],
        f = A.samplers[u.sampler],
        h = u.target,
        C = h.node,
        I = A.parameters !== void 0 ? A.parameters[f.input] : f.input,
        B = A.parameters !== void 0 ? A.parameters[f.output] : f.output;
      h.node !== void 0 && (s.push(this.getDependency("node", C)), i.push(this.getDependency("accessor", I)), r.push(this.getDependency("accessor", B)), c.push(f), g.push(h));
    }
    return Promise.all([Promise.all(s), Promise.all(i), Promise.all(r), Promise.all(c), Promise.all(g)]).then(function (a) {
      const l = a[0],
        u = a[1],
        f = a[2],
        h = a[3],
        C = a[4],
        I = [];
      for (let B = 0, E = l.length; B < E; B++) {
        const Q = l[B],
          x = u[B],
          w = f[B],
          D = h[B],
          L = C[B];
        if (Q === void 0) continue;
        Q.updateMatrix && Q.updateMatrix();
        const k = n._createAnimationTracks(Q, x, w, D, L);
        if (k) for (let b = 0; b < k.length; b++) I.push(k[b]);
      }
      return new un(o, void 0, I);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      A = t.nodes[e];
    return A.mesh === void 0
      ? null
      : n.getDependency("mesh", A.mesh).then(function (o) {
        const s = n._getNodeRef(n.meshCache, A.mesh, o);
        return (
          A.weights !== void 0 &&
          s.traverse(function (i) {
            if (i.isMesh) for (let r = 0, c = A.weights.length; r < c; r++) i.morphTargetInfluences[r] = A.weights[r];
          }),
          s
        );
      });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      A = t.nodes[e],
      o = n._loadNodeShallow(e),
      s = [],
      i = A.children || [];
    for (let c = 0, g = i.length; c < g; c++) s.push(n.getDependency("node", i[c]));
    const r = A.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", A.skin);
    return Promise.all([o, Promise.all(s), r]).then(function (c) {
      const g = c[0],
        a = c[1],
        l = c[2];
      l !== null &&
        g.traverse(function (u) {
          u.isSkinnedMesh && u.bind(l, ei);
        });
      for (let u = 0, f = a.length; u < f; u++) g.add(a[u]);
      return g;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      A = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const o = t.nodes[e],
      s = o.name ? A.createUniqueName(o.name) : "",
      i = [],
      r = A._invokeOne(function (c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
    return (
      r && i.push(r),
      o.camera !== void 0 &&
      i.push(
        A.getDependency("camera", o.camera).then(function (c) {
          return A._getNodeRef(A.cameraCache, o.camera, c);
        })
      ),
      A._invokeAll(function (c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function (c) {
        i.push(c);
      }),
      (this.nodeCache[e] = Promise.all(i).then(function (c) {
        let g;
        if ((o.isBone === !0 ? (g = new dn()) : c.length > 1 ? (g = new qt()) : c.length === 1 ? (g = c[0]) : (g = new Nt()), g !== c[0])) for (let a = 0, l = c.length; a < l; a++) g.add(c[a]);
        if ((o.name && ((g.userData.name = o.name), (g.name = s)), be(g, o), o.extensions && Oe(n, g, o), o.matrix !== void 0)) {
          const a = new Dt();
          a.fromArray(o.matrix), g.applyMatrix4(a);
        } else o.translation !== void 0 && g.position.fromArray(o.translation), o.rotation !== void 0 && g.quaternion.fromArray(o.rotation), o.scale !== void 0 && g.scale.fromArray(o.scale);
        return A.associations.has(g) || A.associations.set(g, {}), (A.associations.get(g).nodes = e), g;
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      A = this,
      o = new qt();
    n.name && (o.name = A.createUniqueName(n.name)), be(o, n), n.extensions && Oe(t, o, n);
    const s = n.nodes || [],
      i = [];
    for (let r = 0, c = s.length; r < c; r++) i.push(A.getDependency("node", s[r]));
    return Promise.all(i).then(function (r) {
      for (let g = 0, a = r.length; g < a; g++) o.add(r[g]);
      const c = (g) => {
        const a = new Map();
        for (const [l, u] of A.associations) (l instanceof Ot || l instanceof _A) && a.set(l, u);
        return (
          g.traverse((l) => {
            const u = A.associations.get(l);
            u != null && a.set(l, u);
          }),
          a
        );
      };
      return (A.associations = c(o)), o;
    });
  }
  _createAnimationTracks(e, t, n, A, o) {
    const s = [],
      i = e.name ? e.name : e.uuid,
      r = [];
    Ne[o.path] === Ne.weights
      ? e.traverse(function (l) {
        l.morphTargetInfluences && r.push(l.name ? l.name : l.uuid);
      })
      : r.push(i);
    let c;
    switch (Ne[o.path]) {
      case Ne.weights:
        c = DA;
        break;
      case Ne.rotation:
        c = LA;
        break;
      case Ne.position:
      case Ne.scale:
        c = SA;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = DA;
            break;
          case 2:
          case 3:
          default:
            c = SA;
            break;
        }
        break;
    }
    const g = A.interpolation !== void 0 ? jo[A.interpolation] : hs,
      a = this._getArrayFromAccessor(n);
    for (let l = 0, u = r.length; l < u; l++) {
      const f = new c(r[l] + "." + Ne[o.path], t.array, a, g);
      A.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(f), s.push(f);
    }
    return s;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = dA(t.constructor),
        A = new Float32Array(t.length);
      for (let o = 0, s = t.length; o < s; o++) A[o] = t[o] * n;
      t = A;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const A = this instanceof LA ? Vo : ws;
      return new A(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function Ai(d, e, t) {
  const n = e.attributes,
    A = new yn();
  if (n.POSITION !== void 0) {
    const i = t.json.accessors[n.POSITION],
      r = i.min,
      c = i.max;
    if (r !== void 0 && c !== void 0) {
      if ((A.set(new ce(r[0], r[1], r[2]), new ce(c[0], c[1], c[2])), i.normalized)) {
        const g = dA(rt[i.componentType]);
        A.min.multiplyScalar(g), A.max.multiplyScalar(g);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const o = e.targets;
  if (o !== void 0) {
    const i = new ce(),
      r = new ce();
    for (let c = 0, g = o.length; c < g; c++) {
      const a = o[c];
      if (a.POSITION !== void 0) {
        const l = t.json.accessors[a.POSITION],
          u = l.min,
          f = l.max;
        if (u !== void 0 && f !== void 0) {
          if ((r.setX(Math.max(Math.abs(u[0]), Math.abs(f[0]))), r.setY(Math.max(Math.abs(u[1]), Math.abs(f[1]))), r.setZ(Math.max(Math.abs(u[2]), Math.abs(f[2]))), l.normalized)) {
            const h = dA(rt[l.componentType]);
            r.multiplyScalar(h);
          }
          i.max(r);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    A.expandByVector(i);
  }
  d.boundingBox = A;
  const s = new wn();
  A.getCenter(s.center), (s.radius = A.min.distanceTo(A.max) / 2), (d.boundingSphere = s);
}
function $A(d, e, t) {
  const n = e.attributes,
    A = [];
  function o(s, i) {
    return t.getDependency("accessor", s).then(function (r) {
      d.setAttribute(i, r);
    });
  }
  for (const s in n) {
    const i = uA[s] || s.toLowerCase();
    i in d.attributes || A.push(o(n[s], i));
  }
  if (e.indices !== void 0 && !d.index) {
    const s = t.getDependency("accessor", e.indices).then(function (i) {
      d.setIndex(i);
    });
    A.push(s);
  }
  return (
    vA.workingColorSpace !== xe && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vA.workingColorSpace}" not supported.`),
    be(d, e),
    Ai(d, e, t),
    Promise.all(A).then(function () {
      return e.targets !== void 0 ? Wo(d, e.targets, t) : d;
    })
  );
}
const $t = new WeakMap();
class si extends fA {
  constructor(e) {
    super(e),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }),
      (this.defaultAttributeTypes = { position: "Float32Array", normal: "Float32Array", color: "Float32Array", uv: "Float32Array" });
  }
  setDecoderPath(e) {
    return (this.decoderPath = e), this;
  }
  setDecoderConfig(e) {
    return (this.decoderConfig = e), this;
  }
  setWorkerLimit(e) {
    return (this.workerLimit = e), this;
  }
  load(e, t, n, A) {
    const o = new Ye(this.manager);
    o.setPath(this.path),
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        (s) => {
          this.parse(s, t, A);
        },
        n,
        A
      );
  }
  parse(e, t, n = () => { }) {
    this.decodeDracoFile(e, t, null, null, Me, n).catch(n);
  }
  decodeDracoFile(e, t, n, A, o = xe, s = () => { }) {
    const i = { attributeIDs: n || this.defaultAttributeIDs, attributeTypes: A || this.defaultAttributeTypes, useUniqueIDs: !!n, vertexColorSpace: o };
    return this.decodeGeometry(e, i).then(t).catch(s);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if ($t.has(e)) {
      const r = $t.get(e);
      if (r.key === n) return r.promise;
      if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
    }
    let A;
    const o = this.workerNextTaskID++,
      s = e.byteLength,
      i = this._getWorker(o, s)
        .then(
          (r) => (
            (A = r),
            new Promise((c, g) => {
              (A._callbacks[o] = { resolve: c, reject: g }), A.postMessage({ type: "decode", id: o, taskConfig: t, buffer: e }, [e]);
            })
          )
        )
        .then((r) => this._createGeometry(r.geometry));
    return (
      i
        .catch(() => !0)
        .then(() => {
          A && o && this._releaseTask(A, o);
        }),
      $t.set(e, { key: n, promise: i }),
      i
    );
  }
  _createGeometry(e) {
    const t = new pA();
    e.index && t.setIndex(new wt(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const A = e.attributes[n],
        o = A.name,
        s = A.array,
        i = A.itemSize,
        r = new wt(s, i);
      o === "color" && (this._assignVertexColorSpace(r, A.vertexColorSpace), (r.normalized = !(s instanceof Float32Array))), t.setAttribute(o, r);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== Me) return;
    const n = new ae();
    for (let A = 0, o = e.count; A < o; A++) n.fromBufferAttribute(e, A).convertSRGBToLinear(), e.setXYZ(A, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new Ye(this.manager);
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(t),
      n.setWithCredentials(this.withCredentials),
      new Promise((A, o) => {
        n.load(e, A, void 0, o);
      })
    );
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      t = [];
    return (
      e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(t).then((n) => {
        const A = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const o = ni.toString(),
          s = ["/* draco decoder */", A, "", "/* worker */", o.substring(o.indexOf("{") + 1, o.lastIndexOf("}"))].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([s]));
      })),
      this.decoderPending
    );
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const A = new Worker(this.workerSourceURL);
        (A._callbacks = {}),
          (A._taskCosts = {}),
          (A._taskLoad = 0),
          A.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (A.onmessage = function (o) {
            const s = o.data;
            switch (s.type) {
              case "decode":
                A._callbacks[s.id].resolve(s);
                break;
              case "error":
                A._callbacks[s.id].reject(s);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + s.type + '"');
            }
          }),
          this.workerPool.push(A);
      } else
        this.workerPool.sort(function (A, o) {
          return A._taskLoad > o._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return (n._taskCosts[e] = t), (n._taskLoad += t), n;
    });
  }
  _releaseTask(e, t) {
    (e._taskLoad -= e._taskCosts[t]), delete e._callbacks[t], delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
    return (this.workerPool.length = 0), this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL), this;
  }
}
function ni() {
  let d, e;
  onmessage = function (s) {
    const i = s.data;
    switch (i.type) {
      case "init":
        (d = i.decoderConfig),
          (e = new Promise(function (g) {
            (d.onModuleLoaded = function (a) {
              g({ draco: a });
            }),
              DracoDecoderModule(d);
          }));
        break;
      case "decode":
        const r = i.buffer,
          c = i.taskConfig;
        e.then((g) => {
          const a = g.draco,
            l = new a.Decoder();
          try {
            const u = t(a, l, new Int8Array(r), c),
              f = u.attributes.map((h) => h.array.buffer);
            u.index && f.push(u.index.array.buffer), self.postMessage({ type: "decode", id: i.id, geometry: u }, f);
          } catch (u) {
            console.error(u), self.postMessage({ type: "error", id: i.id, error: u.message });
          } finally {
            a.destroy(l);
          }
        });
        break;
    }
  };
  function t(s, i, r, c) {
    const g = c.attributeIDs,
      a = c.attributeTypes;
    let l, u;
    const f = i.GetEncodedGeometryType(r);
    if (f === s.TRIANGULAR_MESH) (l = new s.Mesh()), (u = i.DecodeArrayToMesh(r, r.byteLength, l));
    else if (f === s.POINT_CLOUD) (l = new s.PointCloud()), (u = i.DecodeArrayToPointCloud(r, r.byteLength, l));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!u.ok() || l.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + u.error_msg());
    const h = { index: null, attributes: [] };
    for (const C in g) {
      const I = self[a[C]];
      let B, E;
      if (c.useUniqueIDs) (E = g[C]), (B = i.GetAttributeByUniqueId(l, E));
      else {
        if (((E = i.GetAttributeId(l, s[g[C]])), E === -1)) continue;
        B = i.GetAttribute(l, E);
      }
      const Q = A(s, i, l, C, I, B);
      C === "color" && (Q.vertexColorSpace = c.vertexColorSpace), h.attributes.push(Q);
    }
    return f === s.TRIANGULAR_MESH && (h.index = n(s, i, l)), s.destroy(l), h;
  }
  function n(s, i, r) {
    const g = r.num_faces() * 3,
      a = g * 4,
      l = s._malloc(a);
    i.GetTrianglesUInt32Array(r, a, l);
    const u = new Uint32Array(s.HEAPF32.buffer, l, g).slice();
    return s._free(l), { array: u, itemSize: 1 };
  }
  function A(s, i, r, c, g, a) {
    const l = a.num_components(),
      f = r.num_points() * l,
      h = f * g.BYTES_PER_ELEMENT,
      C = o(s, g),
      I = s._malloc(h);
    i.GetAttributeDataArrayForAllPoints(r, a, C, h, I);
    const B = new g(s.HEAPF32.buffer, I, f).slice();
    return s._free(I), { name: c, array: B, itemSize: l };
  }
  function o(s, i) {
    switch (i) {
      case Float32Array:
        return s.DT_FLOAT32;
      case Int8Array:
        return s.DT_INT8;
      case Int16Array:
        return s.DT_INT16;
      case Int32Array:
        return s.DT_INT32;
      case Uint8Array:
        return s.DT_UINT8;
      case Uint16Array:
        return s.DT_UINT16;
      case Uint32Array:
        return s.DT_UINT32;
    }
  }
}
class oi {
  constructor(e = 4) {
    (this.pool = e), (this.queue = []), (this.workers = []), (this.workersResolve = []), (this.workerStatus = 0);
  }
  _initWorker(e) {
    if (!this.workers[e]) {
      const t = this.workerCreator();
      t.addEventListener("message", this._onMessage.bind(this, e)), (this.workers[e] = t);
    }
  }
  _getIdleWorker() {
    for (let e = 0; e < this.pool; e++) if (!(this.workerStatus & (1 << e))) return e;
    return -1;
  }
  _onMessage(e, t) {
    const n = this.workersResolve[e];
    if ((n && n(t), this.queue.length)) {
      const { resolve: A, msg: o, transfer: s } = this.queue.shift();
      (this.workersResolve[e] = A), this.workers[e].postMessage(o, s);
    } else this.workerStatus ^= 1 << e;
  }
  setWorkerCreator(e) {
    this.workerCreator = e;
  }
  setWorkerLimit(e) {
    this.pool = e;
  }
  postMessage(e, t) {
    return new Promise((n) => {
      const A = this._getIdleWorker();
      A !== -1 ? (this._initWorker(A), (this.workerStatus |= 1 << A), (this.workersResolve[A] = n), this.workers[A].postMessage(e, t)) : this.queue.push({ resolve: n, msg: e, transfer: t });
    });
  }
  dispose() {
    this.workers.forEach((e) => e.terminate()), (this.workersResolve.length = 0), (this.workers.length = 0), (this.queue.length = 0), (this.workerStatus = 0);
  }
}
const ii = 0,
  es = 2,
  ri = 1,
  ts = 2,
  ai = 0,
  li = 1,
  ci = 10,
  gi = 0,
  xs = 9,
  vs = 15,
  _s = 16,
  Ss = 22,
  Ds = 37,
  Ls = 43,
  Rs = 76,
  Ts = 83,
  bs = 97,
  Fs = 100,
  Ms = 103,
  ks = 109,
  Gs = 165,
  Ns = 166;
class ui {
  constructor() {
    (this.vkFormat = 0),
      (this.typeSize = 1),
      (this.pixelWidth = 0),
      (this.pixelHeight = 0),
      (this.pixelDepth = 0),
      (this.layerCount = 0),
      (this.faceCount = 1),
      (this.supercompressionScheme = 0),
      (this.levels = []),
      (this.dataFormatDescriptor = [
        {
          vendorId: 0,
          descriptorType: 0,
          descriptorBlockSize: 0,
          versionNumber: 2,
          colorModel: 0,
          colorPrimaries: 1,
          transferFunction: 2,
          flags: 0,
          texelBlockDimension: [0, 0, 0, 0],
          bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
          samples: [],
        },
      ]),
      (this.keyValue = {}),
      (this.globalData = null);
  }
}
class dt {
  constructor(e, t, n, A) {
    (this._dataView = new DataView(e.buffer, e.byteOffset + t, n)), (this._littleEndian = A), (this._offset = 0);
  }
  _nextUint8() {
    const e = this._dataView.getUint8(this._offset);
    return (this._offset += 1), e;
  }
  _nextUint16() {
    const e = this._dataView.getUint16(this._offset, this._littleEndian);
    return (this._offset += 2), e;
  }
  _nextUint32() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian);
    return (this._offset += 4), e;
  }
  _nextUint64() {
    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 4294967296 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
    return (this._offset += 8), e;
  }
  _nextInt32() {
    const e = this._dataView.getInt32(this._offset, this._littleEndian);
    return (this._offset += 4), e;
  }
  _skip(e) {
    return (this._offset += e), this;
  }
  _scan(e, t = 0) {
    const n = this._offset;
    let A = 0;
    for (; this._dataView.getUint8(this._offset) !== t && A < e;) A++, this._offset++;
    return A < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, A);
  }
}
const de = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
function As(d) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(d) : Buffer.from(d).toString("utf8");
}
function di(d) {
  const e = new Uint8Array(d.buffer, d.byteOffset, de.length);
  if (e[0] !== de[0] || e[1] !== de[1] || e[2] !== de[2] || e[3] !== de[3] || e[4] !== de[4] || e[5] !== de[5] || e[6] !== de[6] || e[7] !== de[7] || e[8] !== de[8] || e[9] !== de[9] || e[10] !== de[10] || e[11] !== de[11])
    throw new Error("Missing KTX 2.0 identifier.");
  const t = new ui(),
    n = 17 * Uint32Array.BYTES_PER_ELEMENT,
    A = new dt(d, de.length, n, !0);
  (t.vkFormat = A._nextUint32()), (t.typeSize = A._nextUint32()), (t.pixelWidth = A._nextUint32()), (t.pixelHeight = A._nextUint32()), (t.pixelDepth = A._nextUint32()), (t.layerCount = A._nextUint32()), (t.faceCount = A._nextUint32());
  const o = A._nextUint32();
  t.supercompressionScheme = A._nextUint32();
  const s = A._nextUint32(),
    i = A._nextUint32(),
    r = A._nextUint32(),
    c = A._nextUint32(),
    g = A._nextUint64(),
    a = A._nextUint64(),
    l = new dt(d, de.length + n, 3 * o * 8, !0);
  for (let _ = 0; _ < o; _++) t.levels.push({ levelData: new Uint8Array(d.buffer, d.byteOffset + l._nextUint64(), l._nextUint64()), uncompressedByteLength: l._nextUint64() });
  const u = new dt(d, s, i, !0),
    f = {
      vendorId: u._skip(4)._nextUint16(),
      descriptorType: u._nextUint16(),
      versionNumber: u._nextUint16(),
      descriptorBlockSize: u._nextUint16(),
      colorModel: u._nextUint8(),
      colorPrimaries: u._nextUint8(),
      transferFunction: u._nextUint8(),
      flags: u._nextUint8(),
      texelBlockDimension: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()],
      bytesPlane: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()],
      samples: [],
    },
    h = (f.descriptorBlockSize / 4 - 6) / 4;
  for (let _ = 0; _ < h; _++) {
    const M = { bitOffset: u._nextUint16(), bitLength: u._nextUint8(), channelType: u._nextUint8(), samplePosition: [u._nextUint8(), u._nextUint8(), u._nextUint8(), u._nextUint8()], sampleLower: -1 / 0, sampleUpper: 1 / 0 };
    64 & M.channelType ? ((M.sampleLower = u._nextInt32()), (M.sampleUpper = u._nextInt32())) : ((M.sampleLower = u._nextUint32()), (M.sampleUpper = u._nextUint32())), (f.samples[_] = M);
  }
  (t.dataFormatDescriptor.length = 0), t.dataFormatDescriptor.push(f);
  const C = new dt(d, r, c, !0);
  for (; C._offset < c;) {
    const _ = C._nextUint32(),
      M = C._scan(_),
      H = As(M),
      G = C._scan(_ - M.byteLength);
    (t.keyValue[H] = H.match(/^ktx/i) ? As(G) : G), C._offset % 4 && C._skip(4 - (C._offset % 4));
  }
  if (a <= 0) return t;
  const I = new dt(d, g, a, !0),
    B = I._nextUint16(),
    E = I._nextUint16(),
    Q = I._nextUint32(),
    x = I._nextUint32(),
    w = I._nextUint32(),
    D = I._nextUint32(),
    L = [];
  for (let _ = 0; _ < o; _++) L.push({ imageFlags: I._nextUint32(), rgbSliceByteOffset: I._nextUint32(), rgbSliceByteLength: I._nextUint32(), alphaSliceByteOffset: I._nextUint32(), alphaSliceByteLength: I._nextUint32() });
  const k = g + I._offset,
    b = k + Q,
    U = b + x,
    R = U + w,
    y = new Uint8Array(d.buffer, d.byteOffset + k, Q),
    N = new Uint8Array(d.buffer, d.byteOffset + b, x),
    v = new Uint8Array(d.buffer, d.byteOffset + U, w),
    T = new Uint8Array(d.buffer, d.byteOffset + R, D);
  return (t.globalData = { endpointCount: B, selectorCount: E, imageDescs: L, endpointsData: y, selectorsData: N, tablesData: v, extendedData: T }), t;
}
let eA, Te, hA;
const tA = {
  env: {
    emscripten_notify_memory_growth: function (d) {
      hA = new Uint8Array(Te.exports.memory.buffer);
    },
  },
};
class hi {
  init() {
    return (
      eA ||
      ((eA =
        typeof fetch < "u"
          ? fetch("data:application/wasm;base64," + ss)
            .then((e) => e.arrayBuffer())
            .then((e) => WebAssembly.instantiate(e, tA))
            .then(this._init)
          : WebAssembly.instantiate(Buffer.from(ss, "base64"), tA).then(this._init)),
        eA)
    );
  }
  _init(e) {
    (Te = e.instance), tA.env.emscripten_notify_memory_growth(0);
  }
  decode(e, t = 0) {
    if (!Te) throw new Error("ZSTDDecoder: Await .init() before decoding.");
    const n = e.byteLength,
      A = Te.exports.malloc(n);
    hA.set(e, A), (t = t || Number(Te.exports.ZSTD_findDecompressedSize(A, n)));
    const o = Te.exports.malloc(t),
      s = Te.exports.ZSTD_decompress(o, t, A, n),
      i = hA.slice(o, o + s);
    return Te.exports.free(A), Te.exports.free(o), i;
  }
}
const ss =
  "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",
  AA = new WeakMap();
let sA = 0,
  nA;
class Se extends fA {
  constructor(e) {
    super(e),
      (this.transcoderPath = ""),
      (this.transcoderBinary = null),
      (this.transcoderPending = null),
      (this.workerPool = new oi()),
      (this.workerSourceURL = ""),
      (this.workerConfig = null),
      typeof MSC_TRANSCODER < "u" && console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.');
  }
  setTranscoderPath(e) {
    return (this.transcoderPath = e), this;
  }
  setWorkerLimit(e) {
    return this.workerPool.setWorkerLimit(e), this;
  }
  async detectSupportAsync(e) {
    return (
      (this.workerConfig = {
        astcSupported: await e.hasFeatureAsync("texture-compression-astc"),
        etc1Supported: await e.hasFeatureAsync("texture-compression-etc1"),
        etc2Supported: await e.hasFeatureAsync("texture-compression-etc2"),
        dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
        bptcSupported: await e.hasFeatureAsync("texture-compression-bptc"),
        pvrtcSupported: await e.hasFeatureAsync("texture-compression-pvrtc"),
      }),
      this
    );
  }
  detectSupport(e) {
    return (
      e.isWebGPURenderer === !0
        ? (this.workerConfig = {
          astcSupported: e.hasFeature("texture-compression-astc"),
          etc1Supported: e.hasFeature("texture-compression-etc1"),
          etc2Supported: e.hasFeature("texture-compression-etc2"),
          dxtSupported: e.hasFeature("texture-compression-bc"),
          bptcSupported: e.hasFeature("texture-compression-bptc"),
          pvrtcSupported: e.hasFeature("texture-compression-pvrtc"),
        })
        : (this.workerConfig = {
          astcSupported: e.extensions.has("WEBGL_compressed_texture_astc"),
          etc1Supported: e.extensions.has("WEBGL_compressed_texture_etc1"),
          etc2Supported: e.extensions.has("WEBGL_compressed_texture_etc"),
          dxtSupported: e.extensions.has("WEBGL_compressed_texture_s3tc"),
          bptcSupported: e.extensions.has("EXT_texture_compression_bptc"),
          pvrtcSupported: e.extensions.has("WEBGL_compressed_texture_pvrtc") || e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        }),
      this
    );
  }
  init() {
    if (!this.transcoderPending) {
      const e = new Ye(this.manager);
      e.setPath(this.transcoderPath), e.setWithCredentials(this.withCredentials);
      const t = e.loadAsync("basis_transcoder.js"),
        n = new Ye(this.manager);
      n.setPath(this.transcoderPath), n.setResponseType("arraybuffer"), n.setWithCredentials(this.withCredentials);
      const A = n.loadAsync("basis_transcoder.wasm");
      (this.transcoderPending = Promise.all([t, A]).then(([o, s]) => {
        const i = Se.BasisWorker.toString(),
          r = [
            "/* constants */",
            "let _EngineFormat = " + JSON.stringify(Se.EngineFormat),
            "let _TranscoderFormat = " + JSON.stringify(Se.TranscoderFormat),
            "let _BasisFormat = " + JSON.stringify(Se.BasisFormat),
            "/* basis_transcoder.js */",
            o,
            "/* worker */",
            i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
          ].join(`
`);
        (this.workerSourceURL = URL.createObjectURL(new Blob([r]))),
          (this.transcoderBinary = s),
          this.workerPool.setWorkerCreator(() => {
            const c = new Worker(this.workerSourceURL),
              g = this.transcoderBinary.slice(0);
            return c.postMessage({ type: "init", config: this.workerConfig, transcoderBinary: g }, [g]), c;
          });
      })),
        sA > 0 && console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),
        sA++;
    }
    return this.transcoderPending;
  }
  load(e, t, n, A) {
    if (this.workerConfig === null) throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");
    const o = new Ye(this.manager);
    o.setResponseType("arraybuffer"),
      o.setWithCredentials(this.withCredentials),
      o.load(
        e,
        (s) => {
          if (AA.has(s)) return AA.get(s).promise.then(t).catch(A);
          this._createTexture(s)
            .then((i) => (t ? t(i) : null))
            .catch(A);
        },
        n,
        A
      );
  }
  _createTextureFrom(e, t) {
    const { faces: n, width: A, height: o, format: s, type: i, error: r, dfdFlags: c } = e;
    if (i === "error") return Promise.reject(r);
    let g;
    if (t.faceCount === 6) g = new vn(n, s, ye);
    else {
      const a = n[0].mipmaps;
      g = t.layerCount > 1 ? new _n(a, A, o, t.layerCount, s, ye) : new fs(a, A, o, s, ye);
    }
    return (g.minFilter = n[0].mipmaps.length === 1 ? at : CA), (g.magFilter = at), (g.generateMipmaps = !1), (g.needsUpdate = !0), (g.colorSpace = Us(t)), (g.premultiplyAlpha = !!(c & ri)), g;
  }
  async _createTexture(e, t = {}) {
    const n = di(new Uint8Array(e));
    if (n.vkFormat !== gi) return Ii(n);
    const A = t,
      o = this.init()
        .then(() => this.workerPool.postMessage({ type: "transcode", buffer: e, taskConfig: A }, [e]))
        .then((s) => this._createTextureFrom(s.data, n));
    return AA.set(e, { promise: o }), o;
  }
  dispose() {
    return this.workerPool.dispose(), this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL), sA--, this;
  }
}
Se.BasisFormat = { ETC1S: 0, UASTC_4x4: 1 };
Se.TranscoderFormat = {
  ETC1: 0,
  ETC2: 1,
  BC1: 2,
  BC3: 3,
  BC4: 4,
  BC5: 5,
  BC7_M6_OPAQUE_ONLY: 6,
  BC7_M5: 7,
  PVRTC1_4_RGB: 8,
  PVRTC1_4_RGBA: 9,
  ASTC_4x4: 10,
  ATC_RGB: 11,
  ATC_RGBA_INTERPOLATED_ALPHA: 12,
  RGBA32: 13,
  RGB565: 14,
  BGR565: 15,
  RGBA4444: 16,
};
Se.EngineFormat = {
  RGBAFormat: et,
  RGBA_ASTC_4x4_Format: Sn,
  RGBA_BPTC_Format: Dn,
  RGBA_ETC2_EAC_Format: Ln,
  RGBA_PVRTC_4BPPV1_Format: Rn,
  RGBA_S3TC_DXT5_Format: Tn,
  RGB_ETC1_Format: bn,
  RGB_ETC2_Format: Fn,
  RGB_PVRTC_4BPPV1_Format: Mn,
  RGBA_S3TC_DXT1_Format: kn,
};
Se.BasisWorker = function () {
  let d, e, t;
  const n = _EngineFormat,
    A = _TranscoderFormat,
    o = _BasisFormat;
  self.addEventListener("message", function (f) {
    const h = f.data;
    switch (h.type) {
      case "init":
        (d = h.config), s(h.transcoderBinary);
        break;
      case "transcode":
        e.then(() => {
          try {
            const { faces: C, buffers: I, width: B, height: E, hasAlpha: Q, format: x, dfdFlags: w } = i(h.buffer);
            self.postMessage({ type: "transcode", id: h.id, faces: C, width: B, height: E, hasAlpha: Q, format: x, dfdFlags: w }, I);
          } catch (C) {
            console.error(C), self.postMessage({ type: "error", id: h.id, error: C.message });
          }
        });
        break;
    }
  });
  function s(f) {
    e = new Promise((h) => {
      (t = { wasmBinary: f, onRuntimeInitialized: h }), BASIS(t);
    }).then(() => {
      t.initializeBasis(), t.KTX2File === void 0 && console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.");
    });
  }
  function i(f) {
    const h = new t.KTX2File(new Uint8Array(f));
    function C() {
      h.close(), h.delete();
    }
    if (!h.isValid()) throw (C(), new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file"));
    const I = h.isUASTC() ? o.UASTC_4x4 : o.ETC1S,
      B = h.getWidth(),
      E = h.getHeight(),
      Q = h.getLayers() || 1,
      x = h.getLevels(),
      w = h.getFaces(),
      D = h.getHasAlpha(),
      L = h.getDFDFlags(),
      { transcoderFormat: k, engineFormat: b } = a(I, B, E, D);
    if (!B || !E || !x) throw (C(), new Error("THREE.KTX2Loader:	Invalid texture"));
    if (!h.startTranscoding()) throw (C(), new Error("THREE.KTX2Loader: .startTranscoding failed"));
    const U = [],
      R = [];
    for (let y = 0; y < w; y++) {
      const N = [];
      for (let v = 0; v < x; v++) {
        const T = [];
        let _, M;
        for (let G = 0; G < Q; G++) {
          const z = h.getImageLevelInfo(v, G, y);
          y === 0 && v === 0 && G === 0 && (z.origWidth % 4 !== 0 || z.origHeight % 4 !== 0) && console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),
            x > 1 ? ((_ = z.origWidth), (M = z.origHeight)) : ((_ = z.width), (M = z.height));
          const pe = new Uint8Array(h.getImageTranscodedSizeInBytes(v, G, 0, k));
          if (!h.transcodeImage(pe, v, G, y, k, 0, -1, -1)) throw (C(), new Error("THREE.KTX2Loader: .transcodeImage failed."));
          T.push(pe);
        }
        const H = u(T);
        N.push({ data: H, width: _, height: M }), R.push(H.buffer);
      }
      U.push({ mipmaps: N, width: B, height: E, format: b });
    }
    return C(), { faces: U, buffers: R, width: B, height: E, hasAlpha: D, format: b, dfdFlags: L };
  }
  const r = [
    { if: "astcSupported", basisFormat: [o.UASTC_4x4], transcoderFormat: [A.ASTC_4x4, A.ASTC_4x4], engineFormat: [n.RGBA_ASTC_4x4_Format, n.RGBA_ASTC_4x4_Format], priorityETC1S: 1 / 0, priorityUASTC: 1, needsPowerOfTwo: !1 },
    { if: "bptcSupported", basisFormat: [o.ETC1S, o.UASTC_4x4], transcoderFormat: [A.BC7_M5, A.BC7_M5], engineFormat: [n.RGBA_BPTC_Format, n.RGBA_BPTC_Format], priorityETC1S: 3, priorityUASTC: 2, needsPowerOfTwo: !1 },
    { if: "dxtSupported", basisFormat: [o.ETC1S, o.UASTC_4x4], transcoderFormat: [A.BC1, A.BC3], engineFormat: [n.RGBA_S3TC_DXT1_Format, n.RGBA_S3TC_DXT5_Format], priorityETC1S: 4, priorityUASTC: 5, needsPowerOfTwo: !1 },
    { if: "etc2Supported", basisFormat: [o.ETC1S, o.UASTC_4x4], transcoderFormat: [A.ETC1, A.ETC2], engineFormat: [n.RGB_ETC2_Format, n.RGBA_ETC2_EAC_Format], priorityETC1S: 1, priorityUASTC: 3, needsPowerOfTwo: !1 },
    { if: "etc1Supported", basisFormat: [o.ETC1S, o.UASTC_4x4], transcoderFormat: [A.ETC1], engineFormat: [n.RGB_ETC1_Format], priorityETC1S: 2, priorityUASTC: 4, needsPowerOfTwo: !1 },
    {
      if: "pvrtcSupported",
      basisFormat: [o.ETC1S, o.UASTC_4x4],
      transcoderFormat: [A.PVRTC1_4_RGB, A.PVRTC1_4_RGBA],
      engineFormat: [n.RGB_PVRTC_4BPPV1_Format, n.RGBA_PVRTC_4BPPV1_Format],
      priorityETC1S: 5,
      priorityUASTC: 6,
      needsPowerOfTwo: !0,
    },
  ],
    c = r.sort(function (f, h) {
      return f.priorityETC1S - h.priorityETC1S;
    }),
    g = r.sort(function (f, h) {
      return f.priorityUASTC - h.priorityUASTC;
    });
  function a(f, h, C, I) {
    let B, E;
    const Q = f === o.ETC1S ? c : g;
    for (let x = 0; x < Q.length; x++) {
      const w = Q[x];
      if (d[w.if] && w.basisFormat.includes(f) && !(I && w.transcoderFormat.length < 2) && !(w.needsPowerOfTwo && !(l(h) && l(C))))
        return (B = w.transcoderFormat[I ? 1 : 0]), (E = w.engineFormat[I ? 1 : 0]), { transcoderFormat: B, engineFormat: E };
    }
    return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."), (B = A.RGBA32), (E = n.RGBAFormat), { transcoderFormat: B, engineFormat: E };
  }
  function l(f) {
    return f <= 2 ? !0 : (f & (f - 1)) === 0 && f !== 0;
  }
  function u(f) {
    if (f.length === 1) return f[0];
    let h = 0;
    for (let B = 0; B < f.length; B++) {
      const E = f[B];
      h += E.byteLength;
    }
    const C = new Uint8Array(h);
    let I = 0;
    for (let B = 0; B < f.length; B++) {
      const E = f[B];
      C.set(E, I), (I += E.byteLength);
    }
    return C;
  }
};
const fi = new Set([et, It, Ct]),
  oA = { [ks]: et, [bs]: et, [Ds]: et, [Ls]: et, [Ms]: It, [Ts]: It, [_s]: It, [Ss]: It, [Fs]: Ct, [Rs]: Ct, [vs]: Ct, [xs]: Ct, [Ns]: TA, [Gs]: TA },
  iA = { [ks]: Mt, [bs]: kt, [Ds]: ye, [Ls]: ye, [Ms]: Mt, [Ts]: kt, [_s]: ye, [Ss]: ye, [Fs]: Mt, [Rs]: kt, [vs]: ye, [xs]: ye, [Ns]: ye, [Gs]: ye };
async function Ii(d) {
  const { vkFormat: e } = d;
  if (oA[e] === void 0) throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");
  let t;
  d.supercompressionScheme === es &&
    (nA ||
      (nA = new Promise(async (o) => {
        const s = new hi();
        await s.init(), o(s);
      })),
      (t = await nA));
  const n = [];
  for (let o = 0; o < d.levels.length; o++) {
    const s = Math.max(1, d.pixelWidth >> o),
      i = Math.max(1, d.pixelHeight >> o),
      r = d.pixelDepth ? Math.max(1, d.pixelDepth >> o) : 0,
      c = d.levels[o];
    let g;
    if (d.supercompressionScheme === ii) g = c.levelData;
    else if (d.supercompressionScheme === es) g = t.decode(c.levelData, c.uncompressedByteLength);
    else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");
    let a;
    iA[e] === Mt ? (a = new Float32Array(g.buffer, g.byteOffset, g.byteLength / Float32Array.BYTES_PER_ELEMENT)) : iA[e] === kt ? (a = new Uint16Array(g.buffer, g.byteOffset, g.byteLength / Uint16Array.BYTES_PER_ELEMENT)) : (a = g),
      n.push({ data: a, width: s, height: i, depth: r });
  }
  let A;
  if (fi.has(oA[e])) A = d.pixelDepth === 0 ? new Gn(n[0].data, d.pixelWidth, d.pixelHeight) : new Nn(n[0].data, d.pixelWidth, d.pixelHeight, d.pixelDepth);
  else {
    if (d.pixelDepth > 0) throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");
    A = new fs(n, d.pixelWidth, d.pixelHeight);
  }
  return (A.mipmaps = n), (A.type = iA[e]), (A.format = oA[e]), (A.colorSpace = Us(d)), (A.needsUpdate = !0), Promise.resolve(A);
}
function Us(d) {
  const e = d.dataFormatDescriptor[0];
  return e.colorPrimaries === li
    ? e.transferFunction === ts
      ? Me
      : xe
    : e.colorPrimaries === ci
      ? e.transferFunction === ts
        ? Un
        : Hn
      : e.colorPrimaries === ai
        ? RA
        : (console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`), RA);
}
function Hs(d, e, t) {
  const n = t.length - d - 1;
  if (e >= t[n]) return n - 1;
  if (e <= t[d]) return d;
  let A = d,
    o = n,
    s = Math.floor((A + o) / 2);
  for (; e < t[s] || e >= t[s + 1];) e < t[s] ? (o = s) : (A = s), (s = Math.floor((A + o) / 2));
  return s;
}
function Ci(d, e, t, n) {
  const A = [],
    o = [],
    s = [];
  A[0] = 1;
  for (let i = 1; i <= t; ++i) {
    (o[i] = e - n[d + 1 - i]), (s[i] = n[d + i] - e);
    let r = 0;
    for (let c = 0; c < i; ++c) {
      const g = s[c + 1],
        a = o[i - c],
        l = A[c] / (g + a);
      (A[c] = r + g * l), (r = a * l);
    }
    A[i] = r;
  }
  return A;
}
function pi(d, e, t, n) {
  const A = Hs(d, n, e),
    o = Ci(A, n, d, e),
    s = new Ut(0, 0, 0, 0);
  for (let i = 0; i <= d; ++i) {
    const r = t[A - d + i],
      c = o[i],
      g = r.w * c;
    (s.x += r.x * g), (s.y += r.y * g), (s.z += r.z * g), (s.w += r.w * c);
  }
  return s;
}
function Bi(d, e, t, n, A) {
  const o = [];
  for (let a = 0; a <= t; ++a) o[a] = 0;
  const s = [];
  for (let a = 0; a <= n; ++a) s[a] = o.slice(0);
  const i = [];
  for (let a = 0; a <= t; ++a) i[a] = o.slice(0);
  i[0][0] = 1;
  const r = o.slice(0),
    c = o.slice(0);
  for (let a = 1; a <= t; ++a) {
    (r[a] = e - A[d + 1 - a]), (c[a] = A[d + a] - e);
    let l = 0;
    for (let u = 0; u < a; ++u) {
      const f = c[u + 1],
        h = r[a - u];
      i[a][u] = f + h;
      const C = i[u][a - 1] / i[a][u];
      (i[u][a] = l + f * C), (l = h * C);
    }
    i[a][a] = l;
  }
  for (let a = 0; a <= t; ++a) s[0][a] = i[a][t];
  for (let a = 0; a <= t; ++a) {
    let l = 0,
      u = 1;
    const f = [];
    for (let h = 0; h <= t; ++h) f[h] = o.slice(0);
    f[0][0] = 1;
    for (let h = 1; h <= n; ++h) {
      let C = 0;
      const I = a - h,
        B = t - h;
      a >= h && ((f[u][0] = f[l][0] / i[B + 1][I]), (C = f[u][0] * i[I][B]));
      const E = I >= -1 ? 1 : -I,
        Q = a - 1 <= B ? h - 1 : t - a;
      for (let w = E; w <= Q; ++w) (f[u][w] = (f[l][w] - f[l][w - 1]) / i[B + 1][I + w]), (C += f[u][w] * i[I + w][B]);
      a <= B && ((f[u][h] = -f[l][h - 1] / i[B + 1][a]), (C += f[u][h] * i[a][B])), (s[h][a] = C);
      const x = l;
      (l = u), (u = x);
    }
  }
  let g = t;
  for (let a = 1; a <= n; ++a) {
    for (let l = 0; l <= t; ++l) s[a][l] *= g;
    g *= t - a;
  }
  return s;
}
function Ei(d, e, t, n, A) {
  const o = A < d ? A : d,
    s = [],
    i = Hs(d, n, e),
    r = Bi(i, n, d, o, e),
    c = [];
  for (let g = 0; g < t.length; ++g) {
    const a = t[g].clone(),
      l = a.w;
    (a.x *= l), (a.y *= l), (a.z *= l), (c[g] = a);
  }
  for (let g = 0; g <= o; ++g) {
    const a = c[i - d].clone().multiplyScalar(r[g][0]);
    for (let l = 1; l <= d; ++l) a.add(c[i - d + l].clone().multiplyScalar(r[g][l]));
    s[g] = a;
  }
  for (let g = o + 1; g <= A + 1; ++g) s[g] = new Ut(0, 0, 0);
  return s;
}
function mi(d, e) {
  let t = 1;
  for (let A = 2; A <= d; ++A) t *= A;
  let n = 1;
  for (let A = 2; A <= e; ++A) n *= A;
  for (let A = 2; A <= d - e; ++A) n *= A;
  return t / n;
}
function Qi(d) {
  const e = d.length,
    t = [],
    n = [];
  for (let o = 0; o < e; ++o) {
    const s = d[o];
    (t[o] = new ce(s.x, s.y, s.z)), (n[o] = s.w);
  }
  const A = [];
  for (let o = 0; o < e; ++o) {
    const s = t[o].clone();
    for (let i = 1; i <= o; ++i) s.sub(A[o - i].clone().multiplyScalar(mi(o, i) * n[i]));
    A[o] = s.divideScalar(n[0]);
  }
  return A;
}
function yi(d, e, t, n, A) {
  const o = Ei(d, e, t, n, A);
  return Qi(o);
}
class wi extends Kn {
  constructor(e, t, n, A, o) {
    super(), (this.degree = e), (this.knots = t), (this.controlPoints = []), (this.startKnot = A || 0), (this.endKnot = o || this.knots.length - 1);
    for (let s = 0; s < n.length; ++s) {
      const i = n[s];
      this.controlPoints[s] = new Ut(i.x, i.y, i.z, i.w);
    }
  }
  getPoint(e, t = new ce()) {
    const n = t,
      A = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
      o = pi(this.degree, this.knots, this.controlPoints, A);
    return o.w !== 1 && o.divideScalar(o.w), n.set(o.x, o.y, o.z);
  }
  getTangent(e, t = new ce()) {
    const n = t,
      A = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]),
      o = yi(this.degree, this.knots, this.controlPoints, A, 1);
    return n.copy(o[1]).normalize(), n;
  }
}
let xi = 0;
class vi {
  constructor(e) {
    (this.parser = e), (this.name = "UTSUBO_curve_extension");
  }
  afterRoot(e) {
    const t = this.parser,
      n = t.json;
    return n.nodes ? t.getDependencies("node").then((A) => this.createCurves(n.nodes, e, A)) : null;
  }
  createCurves(e, t, n) {
    const A = [];
    for (let o = 0; o < e.length; o++) {
      const s = e[o];
      s.extensions && s.extensions[this.name] && A.push(this.createCurve(s, t, o, n[o]));
    }
    return Promise.all(A);
  }
  createCurve(e, t, n, A) {
    const o = e.extensions[this.name],
      s = [];
    o.splines.forEach((l) => {
      let u;
      if (l.type === "BEZIER") {
        const f = l.points.map((I) => this.convertBlenderToThreeCoordinates(I.co)),
          h = l.points.map((I) => this.convertBlenderToThreeCoordinates(I.handle_left)),
          C = l.points.map((I) => this.convertBlenderToThreeCoordinates(I.handle_right));
        if (f.length === 2) u = new Jt(f[0], C[0], h[1], f[1]);
        else {
          u = new Yt();
          for (let I = 0; I < f.length - 1; I++) {
            const B = new Jt(f[I], C[I], h[I + 1], f[I + 1]);
            u.curves.push(B);
          }
          if (l.use_cyclic_u) {
            const I = f.length - 1,
              B = new Jt(f[I], C[I], h[0], f[0]);
            u.curves.push(B), (u.curves[0].v0 = f[0].clone());
          }
        }
      } else if (l.type === "NURBS") u = this.createNURBSCurvePath(l);
      else {
        const f = l.points.map((h) => this.convertBlenderToThreeCoordinates(h.co));
        u = new bA(f, l.use_cyclic_u);
      }
      u && s.push(u);
    });
    let i = s[0];
    s.length > 1 && ((i = new Yt()), s.forEach((l) => i.add(l)));
    const r = i.getPoints(o.splines[0].resolution_u * 10 || 100),
      c = new pA().setFromPoints(r),
      g = new gs({ color: 16777215 }),
      a = new ds(c, g);
    return (
      (a.name = e.name || spline.type + "_" + xi++),
      this.applyNodeTransform(a, e),
      (a.userData.curve = i),
      this.parser.associations.has(a) || this.parser.associations.set(a, {}),
      (this.parser.associations.get(a).nodes = n),
      Promise.resolve(a).then((l) => (this.replaceCurveInScene(t, l, A), l))
    );
  }
  convertBlenderToThreeCoordinates(e) {
    return new ce(e[0], e[2], -e[1]);
  }
  applyNodeTransform(e, t) {
    if (t.matrix !== void 0) {
      const n = new Dt();
      n.fromArray(t.matrix), e.applyMatrix4(n);
    } else {
      if ((t.translation !== void 0 && e.position.fromArray(t.translation), t.rotation !== void 0)) {
        const n = new BA().fromArray(t.rotation),
          A = new Pn().setFromQuaternion(n, "XYZ");
        (A.x = -A.x), (A.y = -A.y), e.rotation.copy(A);
      }
      t.scale !== void 0 && e.scale.fromArray(t.scale);
    }
  }
  replaceCurveInScene(e, t, n) {
    if (n && n.parent) {
      const A = n.parent,
        o = A.children.indexOf(n);
      if (o !== -1) {
        for (; n.children.length > 0;) t.add(n.children[0]);
        t.position.copy(n.position), t.quaternion.copy(n.quaternion), t.scale.copy(n.scale), (A.children[o] = t), (t.parent = A), (t.userData = { ...n.userData, ...t.userData }), (n.parent = null);
      } else console.warn("Original node not found in parent's children.");
    } else console.warn("Original node or its parent not found. Adding curve to scene root."), e.scene.add(t);
  }
  createNURBSCurvePath(e) {
    const t = e.order_u - 1,
      n = e.knots || this.generateKnots(e.points.length, t, e.use_cyclic_u),
      A = e.points.map((a) => {
        const l = this.convertBlenderToThreeCoordinates(a.co);
        return new Ut(l.x, l.y, l.z, a.w || 1);
      });
    let o, s;
    e.use_cyclic_u ? ((o = t), (s = n.length - t - 1)) : ((o = 0), (s = n.length - 1));
    const i = new wi(t, n, A, o, s),
      r = Math.max(200, e.resolution_u * 10),
      c = i.getPoints(r),
      g = new Yt();
    return g.add(new bA(c, e.use_cyclic_u, "centripetal")), g;
  }
  generateKnots(e, t, n) {
    const A = t + 1;
    let o = [];
    if (n) {
      const i = e + A;
      for (let r = 0; r < i; r++) o.push(r);
    } else {
      for (let i = 0; i < A; i++) o.push(0);
      for (let i = 1; i <= e - A; i++) o.push(i);
      for (let i = 0; i < A; i++) o.push(e - A + 1);
    }
    const s = o[o.length - 1];
    return o.map((i) => i / s);
  }
}
const _i = [
  { key: "map", type: "gltf", path: "gl/models/map.glb" },
  { key: "bird", type: "gltf", path: "gl/models/bird.glb" },
  { key: "cloudsNoise", type: "texture", path: "gl/images/cloudsNoise.png" },
  { key: "clouds", type: "texture", path: "gl/images/clouds.jpg" },
  { key: "turbolence", type: "texture", path: "gl/images/turbolence.jpg" },
  { key: "icons-spritesheet", type: "texture", path: "gl/images/pins/icons-spritesheet.jpg" },
],
  Si = [{ key: "diffuse", type: "texture", path: "gl/images/map-8k-test.ktx2" }],
  Di = [{ key: "diffuse", type: "texture", path: "gl/images/map-4k-test.ktx2" }];
class Li {
  constructor() {
    (this._resources = new Map()), (this._loaders = { gltf: new Qo(), tl: new cs(), ktx: new Se() });
    const e = new si();
    e.setDecoderPath("three-static/draco/"), this._loaders.gltf.setDRACOLoader(e), this._loaders.gltf.register((t) => new vi(t)), this._loaders.ktx.setTranscoderPath("three-static/basis/");
  }
  get(e) {
    return e === "all" ? this._resources : this._resources.get(e);
  }
  get loaders() {
    return this._loaders;
  }
  detectSupport(e) {
    this._loaders.ktx.detectSupport(e);
  }
  startPreload({ responsiveType: e } = {}) {
    let t = [..._i];
    e === "desktop" && (t = [...t, ...Si]), e === "mobile" && (t = [...t, ...Di]);
    const n = t.map((A) => {
      let o;
      return this._resources.has(A.key) && !A.type === "gltf"
        ? new Promise((s) => s())
        : (A.type === "gltf"
          ? (o = new Promise((s) => {
            this._loaders.gltf.load(A.path, (i) => {
              (i.config = A), this._resources.set(A.key, i), s();
            });
          }))
          : A.type === "envmap"
            ? (o = new Promise((s) => {
              this._loaders.rgbe.load(A.path, (i) => {
                (i.config = A), this._resources.set(A.key, i), s();
              });
            }))
            : A.type === "texture" && !A.path.includes("ktx2")
              ? (o = new Promise((s) => {
                this._loaders.tl.load(A.path, (i) => {
                  (i.config = A), this._resources.set(A.key, i), s();
                });
              }))
              : A.type === "texture" &&
              A.path.includes("ktx2") &&
              (o = new Promise((s) => {
                this._loaders.ktx.load(A.path, (i) => {
                  (i.config = A), this._resources.set(A.key, i), s();
                });
              })),
          o);
    });
    return Promise.all(n);
  }
}
const Ie = new Li();
var Ri = `precision highp float;
varying vec3 vWorldPosition;
varying vec2 vUv;

void main(){
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,
  Ti = `uniform sampler2D uDiffuseTxt;
uniform sampler2D uCloudNoiseTxt;
uniform float uTime;

varying vec3 vWorldPosition;
varying vec2 vUv;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};
float createSingleCloud(sampler2D _txt, vec2 _uv, float _timeFactor, vec2 _shift){
  vec2 cUv = ((_uv) - vec2(gTime * _timeFactor, 0.0 + _shift));
  float c = texture2D(_txt, cUv).r;
  c = 1.0 - smoothstep(0.25, 0.37, c);
  return c;
}

float getCloudsShadow(sampler2D _txt, vec3 _wp){
  float cloud1 = createSingleCloud(_txt, 0.190 * _wp.xz, 0.030, vec2(0.0, 0.0));
  float cloud2 = createSingleCloud(_txt, 0.135 * _wp.xz, 0.026, vec2(0.0, 0.0));
  float cloud3 = createSingleCloud(_txt, 0.129 * _wp.xz, 0.023, vec2(0.4, 0.3));

  float cloud23 = cloud2 * cloud3;

  
  float c = cloud1 * 0.53 + cloud2 * 0.47 + cloud3 * 0.55;
  c = clamp(c, 0.00, 0.68) * 1.05;
  return 1.0 - c;
}

void main(){
  vec4 final = texture2D(uDiffuseTxt, vUv);

  float shadow = getCloudsShadow(uCloudNoiseTxt, vWorldPosition);
  final.rgb *= shadow;

  gl_FragColor = final;

  #include <tonemapping_fragment>
	#include <colorspace_fragment>
}`;
const bi = ["object"],
  Fi = {
    __name: "index",
    emits: ["ready"],
    setup(d, { emit: e }) {
      const t = e,
        { renderer: n } = Ke(),
        A = Ie.get("map"),
        o = Ie.get("diffuse"),
        s = Ie.get("cloudsNoise");
      (o.colorSpace = Me), (o.flipY = !1), (o.needsUpdate = !0), (o.anisotropy = n.value.capabilities.getMaxAnisotropy()), (s.wrapS = s.wrapT = St);
      const { scene: i } = A,
        r = new Is({ vertexShader: Ri, fragmentShader: Ti, uniforms: { uDiffuseTxt: { value: o }, uCloudNoiseTxt: { value: s } }, toneMapped: !1 });
      return (
        i.traverse((c) => {
          c.isMesh && ((c.matrixAutoUpdate = !1), (c.material = r), c.updateMatrix());
        }),
        he(() => {
          t("ready");
        }),
        (c, g) => (S(), F("primitive", { object: m(i) }, null, 8, bi))
      );
    },
  };
function Ks(d) {
  let e = De.icons.coords.waypoint;
  for (const t in De.icons.coords) d.includes(t) && (e = De.icons.coords[t]);
  return e;
}
var ns = `varying vec3 vWorldPosition;
varying vec2 vUv;

void main(){
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,
  os = `uniform float uSharp;
uniform float uAlpha;
uniform float uRadius;
uniform float uShift;
uniform vec2 uCoords;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform sampler2D uCloudNoiseTxt;
uniform sampler2D uIconsTxt;

varying vec2 vUv;
varying vec3 vWorldPosition;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};
float aastep(float threshold, float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}
float createSingleCloud(sampler2D _txt, vec2 _uv, float _timeFactor, vec2 _shift){
  vec2 cUv = ((_uv) - vec2(gTime * _timeFactor, 0.0 + _shift));
  float c = texture2D(_txt, cUv).r;
  c = 1.0 - smoothstep(0.25, 0.37, c);
  return c;
}

float getCloudsShadow(sampler2D _txt, vec3 _wp){
  float cloud1 = createSingleCloud(_txt, 0.190 * _wp.xz, 0.030, vec2(0.0, 0.0));
  float cloud2 = createSingleCloud(_txt, 0.135 * _wp.xz, 0.026, vec2(0.0, 0.0));
  float cloud3 = createSingleCloud(_txt, 0.129 * _wp.xz, 0.023, vec2(0.4, 0.3));

  float cloud23 = cloud2 * cloud3;

  
  float c = cloud1 * 0.53 + cloud2 * 0.47 + cloud3 * 0.55;
  c = clamp(c, 0.00, 0.68) * 1.05;
  return 1.0 - c;
}

void main(){
  
  vec2 nUv = vUv;
  float padding = 0.0;

  nUv.y = nUv.y + uShift * 0.4;

  float spriteIndexX = uCoords.x;
  float spriteIndexY = float(ROWS - 1) - uCoords.y;
  float spriteWidth = 1.0 / float(COLS);
  float spriteHeight = 1.0 / float(ROWS);

  
  float remappedU = (nUv.x + spriteIndexX) * spriteWidth;
  float remappedV = (nUv.y + spriteIndexY) * spriteHeight;

  
  vec2 newUv = vec2(remappedU, remappedV);

  float icon = texture2D(uIconsTxt, newUv).r;
  icon = smoothstep(0.0, uSharp, icon);

  float alpha = 1.0 - aastep(uRadius * 0.5, distance(vUv, vec2(0.5)));
  float border = 1.0 - aastep(uRadius * 0.46, distance(vUv, vec2(0.5)));
  alpha *= uAlpha;

  
  vec3 color = mix(uColorB, uColorA, border);
  color = mix(color, uColorB, icon);

  
  float shadow = getCloudsShadow(uCloudNoiseTxt, vWorldPosition);
  color.rgb *= vec3(shadow);

  gl_FragColor = vec4(color, alpha);

  #include <colorspace_fragment>
}`;
const Mi = ["position", "name"],
  ki = ["render-order"],
  Gi = ["object"],
  Ni = ["args"],
  Ui = ["scale", "render-order"],
  Hi = ["object"],
  Ki = ["args"],
  Pi = ["object"],
  Oi = {
    __name: "index",
    props: ["object"],
    setup(d) {
      const { setSelectedAmenity: e, dynamicValues: t } = Ae("map"),
        { currentType: n, selectedAmenity: A, currentMeshKeyFocus: o, responsiveType: s } = Ce("map"),
        { position: i, name: r } = d.object,
        c = r,
        g = le(null),
        a = le(null),
        l = le(null),
        u = le(null),
        f = q(() => n.value === "amenities"),
        h = q(() => A.value === c),
        C = q(() => o.value.meshKey === c && o.value.isHighlighted),
        I = new Cs(),
        B = De.renderOrder.amenities,
        E = re.randFloat(0, 0.55),
        x = { desktop: { in: 0.0024, out: 0.0035 }, mobile: { in: 0.0027, out: 0.0045 } }[s.value],
        w = { default: 1.34, hover: 1.53 },
        D = { default: 1.34, hover: 1.53 },
        L = De.icons,
        k = Ie.get("icons-spritesheet"),
        b = Ks(r),
        U = Ie.get("cloudsNoise"),
        R = {
          vertexShader: ns,
          fragmentShader: os,
          uniforms: {
            uIconsTxt: { value: k },
            uAlpha: { value: 1 },
            uShift: { value: 0 },
            uCoords: { value: b },
            uColorA: { value: new ae(16777215) },
            uColorB: { value: new ae(2788269) },
            uRadius: { value: 1 },
            uSharp: { value: 0.8 },
            uCloudNoiseTxt: { value: U },
          },
          defines: { COLS: L.size.cols, ROWS: L.size.rows },
        },
        y = {
          vertexShader: ns,
          fragmentShader: os,
          uniforms: {
            uIconsTxt: { value: k },
            uAlpha: { value: 1 },
            uShift: { value: 1 },
            uCoords: { value: b },
            uColorA: { value: new ae(2788269) },
            uColorB: { value: new ae(16777215) },
            uRadius: { value: 0 },
            uSharp: { value: 0.8 },
            uCloudNoiseTxt: { value: U },
          },
          defines: { COLS: L.size.cols, ROWS: L.size.rows },
        },
        N = () => {
          g.value.updateMatrix(), l.value.updateMatrix(), u.value.updateMatrix();
        },
        v = () => {
          _ == null || _.kill(), _ == null || _.clear(), T == null || T.kill(), T == null || T.clear();
        },
        T = Ee.timeline({ onUpdate: N }),
        _ = Ee.timeline({ onUpdate: N }),
        M = () => {
          v(),
            _.set(g.value, { visible: !0 })
              .to(l.value.scale, { duration: 0.35, x: w.hover, y: w.hover, ease: "power2.out" }, 0)
              .to(u.value.scale, { duration: 0.35, x: D.hover, y: D.hover, ease: "power2.out" }, 0)
              .to(y.uniforms.uShift, { duration: 0.35, value: 0, ease: "power2.out" }, 0)
              .to(y.uniforms.uRadius, { duration: 0.35, value: 1, ease: "power2.out" }, 0)
              .to(y.uniforms.uAlpha, { duration: 0.35, value: 1, ease: "power2.out" }, 0)
              .restart();
        },
        H = () => {
          h.value ||
            (v(),
              _.to(l.value.scale, { duration: 0.35, x: w.default, y: w.default, ease: "power2.out" }, 0)
                .to(u.value.scale, { duration: 0.35, x: D.default, y: D.default, ease: "power2.out" }, 0)
                .to(y.uniforms.uAlpha, { duration: 0.35, value: 0, ease: "power2.out" }, 0)
                .set(y.uniforms.uAlpha, { value: 1 })
                .set(y.uniforms.uRadius, { value: 0 })
                .set(y.uniforms.uShift, { value: 1 })
                .restart());
        },
        G = (Z = !0) => {
          v();
          const oe = Z ? E : 0;
          T.addLabel("enter", oe)
            .set(g.value, { visible: !0 })
            .to(l.value.scale, { duration: 0.45, x: w.default, y: w.default, ease: "power2.out" }, "enter")
            .to(u.value.scale, { duration: 0.45, x: D.default, y: D.default, ease: "power2.out" }, "enter")
            .restart(),
            T.timeScale(1);
        },
        z = (Z = !0) => {
          v();
          const oe = Z ? E : 0;
          T.addLabel("enter", oe)
            .to(u.value.scale, { duration: 0.45, x: 0, y: 0, ease: "power2.in" }, "enter")
            .to(l.value.scale, { duration: 0.45, x: 0, y: 0, ease: "power2.in" }, "enter+=0.16")
            .set(g.value, { visible: !1 })
            .set(y.uniforms.uAlpha, { value: 1 })
            .set(y.uniforms.uRadius, { value: 0 })
            .set(y.uniforms.uShift, { value: 1 })
            .restart(),
            T.timeScale(1.2);
        },
        pe = () => {
          f.value && (A.value || e(r));
        },
        Re = () => {
          f.value && (A.value || ((document.body.style.cursor = "pointer"), M()));
        },
        Ge = () => {
          C.value || (f.value && ((document.body.style.cursor = "default"), H()));
        };
      st("click", a, pe),
        st("pointerEnter", a, Re),
        st("pointerLeave", a, Ge),
        me(f, (Z) => {
          Z ? G() : z();
        }),
        me(o, (Z, oe) => {
          A.value || (Z.meshKey === c && Z.isHighlighted ? M() : oe.meshKey === c && H());
        }),
        me(A, (Z, oe) => {
          Z === c ? M() : oe === c && Z !== !1 ? z(!1) : oe === c ? H() : Z ? z() : Z === !1 && G();
        }),
        he(() => {
          f.value && G(), [l, u, a].forEach((Z) => Z.value.updateMatrix());
        }),
        je(() => {
          v();
        });
      const We = ({ camera: Z }) => {
        const oe = re.lerp(x.out, x.in, t.zoom.smooth);
        g.value.quaternion.copy(Z.value.quaternion), g.value.scale.set(oe, oe, 1), g.value.updateMatrix();
      };
      return (
        _e(ge.WEBGL_TICK_BEFORE, We),
        (Z, oe) => (
          S(),
          F(
            "TresGroup",
            { ref_key: "groupRef", ref: g, scale: [0, 0, 0], position: m(i), visible: !1, name: m(c), "matrix-auto-update": !1 },
            [
              p(
                "TresMesh",
                { ref_key: "bgRef", ref: l, visible: !0, "matrix-auto-update": !1, scale: [0, 0, 1], "render-order": m(B) },
                [p("primitive", { object: m(I) }, null, 8, Gi), p("TresShaderMaterial", { name: "amenity-bg", args: [R], transparent: !0, "depth-write": !1, "depth-test": !1 }, null, 8, Ni)],
                8,
                ki
              ),
              p(
                "TresMesh",
                { ref_key: "iconRef", ref: u, visible: !0, "matrix-auto-update": !1, scale: [D.default, D.default, 1], "render-order": m(B) + 1 },
                [p("primitive", { object: m(I) }, null, 8, Hi), p("TresShaderMaterial", { name: "amenity-icon", args: [y], transparent: !0, "depth-write": !1, "depth-test": !1 }, null, 8, Ki)],
                8,
                Ui
              ),
              p(
                "TresMesh",
                { ref_key: "raycastMesh", ref: a, visible: !1, "matrix-auto-update": !1, scale: [1.2, 1.2, 1] },
                [p("primitive", { object: m(I) }, null, 8, Pi), oe[0] || (oe[0] = p("TresMeshBasicMaterial", null, null, -1))],
                512
              ),
            ],
            8,
            Mi
          )
        )
      );
    },
  },
  qi = {
    __name: "index",
    setup(d) {
      const e = Pe(),
        t = q(() => e.amenities),
        { scene: n } = Ke(),
        A = [];
      return (
        t.value.forEach(({ meshKey: o }) => {
          const s = n.value.getObjectByName(o);
          s && A.push(s);
        }),
        (o, s) => (
          S(),
          F("TresGroup", null, [
            (S(),
              F(
                ke,
                null,
                He(A, (i, r) => Y(m(Oi), { key: { i: r }, object: i }, null, 8, ["object"])),
                64
              )),
          ])
        )
      );
    },
  };
var is = `varying vec2 vUv;
varying vec3 vWorldPosition;

void main(){
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}`,
  rs = `uniform float uSharp;
uniform float uAlpha;
uniform float uRadius;
uniform float uShift;
uniform vec2 uCoords;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform sampler2D uCloudNoiseTxt;
uniform sampler2D uIconsTxt;

varying vec2 vUv;
varying vec3 vWorldPosition;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};
float aastep(float threshold, float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}
float createSingleCloud(sampler2D _txt, vec2 _uv, float _timeFactor, vec2 _shift){
  vec2 cUv = ((_uv) - vec2(gTime * _timeFactor, 0.0 + _shift));
  float c = texture2D(_txt, cUv).r;
  c = 1.0 - smoothstep(0.25, 0.37, c);
  return c;
}

float getCloudsShadow(sampler2D _txt, vec3 _wp){
  float cloud1 = createSingleCloud(_txt, 0.190 * _wp.xz, 0.030, vec2(0.0, 0.0));
  float cloud2 = createSingleCloud(_txt, 0.135 * _wp.xz, 0.026, vec2(0.0, 0.0));
  float cloud3 = createSingleCloud(_txt, 0.129 * _wp.xz, 0.023, vec2(0.4, 0.3));

  float cloud23 = cloud2 * cloud3;

  
  float c = cloud1 * 0.53 + cloud2 * 0.47 + cloud3 * 0.55;
  c = clamp(c, 0.00, 0.68) * 1.05;
  return 1.0 - c;
}

void main(){
  
  vec2 nUv = vUv;
  float padding = 0.0;

  nUv.y = nUv.y + uShift * 0.4;

  float spriteIndexX = uCoords.x;
  float spriteIndexY = float(ROWS - 1) - uCoords.y;
  float spriteWidth = 1.0 / float(COLS);
  float spriteHeight = 1.0 / float(ROWS);

  
  float remappedU = (nUv.x + spriteIndexX) * spriteWidth;
  float remappedV = (nUv.y + spriteIndexY) * spriteHeight;

  
  vec2 newUv = vec2(remappedU, remappedV);

  float icon = texture2D(uIconsTxt, newUv).r;
  icon = smoothstep(0.0, uSharp, icon);

  float alpha = 1.0 - aastep(uRadius * 0.5, distance(vUv, vec2(0.5)));
  float border = 1.0 - aastep(uRadius * 0.46, distance(vUv, vec2(0.5)));
  alpha *= uAlpha;

  
  vec3 color = mix(uColorB, uColorA, border);
  color = mix(color, uColorB, icon);

  
  float shadow = getCloudsShadow(uCloudNoiseTxt, vWorldPosition);
  color.rgb *= vec3(shadow);

  gl_FragColor = vec4(color, alpha);

  #include <colorspace_fragment>
}`,
  Ji = `uniform float uProg;
varying vec2 vUv;
varying vec3 vWorldPosition;

void main(){
  vec3 newPos = position;
  
  newPos.xz *= 1.0 - (1.0 - uProg) * 0.15;
  vWorldPosition = (modelMatrix * vec4(newPos, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  vUv = uv;
}`,
  Yi = `uniform float uProg;
uniform float uAlpha;
uniform sampler2D uCloudNoiseTxt;

varying vec2 vUv;
varying vec3 vWorldPosition;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};
float createSingleCloud(sampler2D _txt, vec2 _uv, float _timeFactor, vec2 _shift){
  vec2 cUv = ((_uv) - vec2(gTime * _timeFactor, 0.0 + _shift));
  float c = texture2D(_txt, cUv).r;
  c = 1.0 - smoothstep(0.25, 0.37, c);
  return c;
}

float getCloudsShadow(sampler2D _txt, vec3 _wp){
  float cloud1 = createSingleCloud(_txt, 0.190 * _wp.xz, 0.030, vec2(0.0, 0.0));
  float cloud2 = createSingleCloud(_txt, 0.135 * _wp.xz, 0.026, vec2(0.0, 0.0));
  float cloud3 = createSingleCloud(_txt, 0.129 * _wp.xz, 0.023, vec2(0.4, 0.3));

  float cloud23 = cloud2 * cloud3;

  
  float c = cloud1 * 0.53 + cloud2 * 0.47 + cloud3 * 0.55;
  c = clamp(c, 0.00, 0.68) * 1.05;
  return 1.0 - c;
}

void main(){
  vec3 finalColor = vec3(1.0);

  float shadow = getCloudsShadow(uCloudNoiseTxt, vWorldPosition);
  finalColor.rgb *= vec3(shadow);

  gl_FragColor = vec4(finalColor, uProg * uAlpha);

  #include <colorspace_fragment>
}`;
const Vi = { ref: "parentGroup" },
  ji = ["name", "position"],
  zi = ["render-order"],
  Wi = ["object"],
  Xi = ["args"],
  Zi = ["scale", "render-order"],
  $i = ["object"],
  er = ["args"],
  tr = ["object"],
  Ar = {
    __name: "index",
    props: ["object", "name"],
    setup(d) {
      const { setSelectedProperty: e, dynamicValues: t } = Ae("map"),
        { selectedProperty: n, currentType: A, currentMeshKeyFocus: o, responsiveType: s } = Ce("map"),
        i = le(null),
        r = le(null),
        c = le(null),
        g = le(null),
        a = le(null),
        l = le(null),
        u = q(() => A.value === "properties"),
        f = q(() => n.value === C),
        h = q(() => o.value.meshKey === C && o.value.isHighlighted),
        C = d.name,
        I = new ce(),
        B = new Cs(),
        E = De.renderOrder.properties,
        Q = re.randFloat(0, 0.55),
        w = { desktop: { in: 0.0018, out: 0.0026 }, mobile: { in: 0.0024, out: 0.0036 } }[s.value],
        D = { default: 1.34, hover: 1.53 },
        L = { default: 1.37, hover: 1.56 },
        k = De.icons,
        b = Ks(C),
        U = Ie.get("icons-spritesheet"),
        R = Ie.get("cloudsNoise"),
        y = {
          vertexShader: is,
          fragmentShader: rs,
          uniforms: {
            uIconsTxt: { value: U },
            uAlpha: { value: 1 },
            uShift: { value: 0 },
            uCoords: { value: b },
            uColorA: { value: new ae(16777215) },
            uColorB: { value: new ae(2788269) },
            uRadius: { value: 1 },
            uSharp: { value: 0.6 },
            uCloudNoiseTxt: { value: R },
          },
          defines: { COLS: k.size.cols, ROWS: k.size.rows },
        },
        N = {
          vertexShader: is,
          fragmentShader: rs,
          uniforms: {
            uIconsTxt: { value: U },
            uAlpha: { value: 1 },
            uShift: { value: 1 },
            uCoords: { value: b },
            uColorA: { value: new ae(2788269) },
            uColorB: { value: new ae(16777215) },
            uRadius: { value: 0 },
            uSharp: { value: 0.6 },
            uCloudNoiseTxt: { value: R },
          },
          defines: { COLS: k.size.cols, ROWS: k.size.rows },
        };
      let v = !1;
      const T = { name: "property-highlight", vertexShader: Ji, fragmentShader: Yi, uniforms: { uProg: { value: 0 }, uAlpha: { value: 0 }, uCloudNoiseTxt: { value: R } }, transparent: !0, depthWrite: !1, depthTest: !1 };
      d.object.traverse((K) => {
        const se = new Is(T);
        K.isMesh && K.name.includes("Plot")
          ? ((a.value = K), (v = !0), (K.material = se.clone()), (K.material.uniforms.uAlpha.value = 0.45), (K.visible = !1), (K.renderOrder = E + 1), (K.matrixAutoUpdate = !1), K.updateMatrix(), I.copy(K.position))
          : K.name.includes("polySurface") && ((l.value = K), (K.material = se.clone()), (K.material.uniforms.uAlpha.value = 1), (K.visible = !1), (K.renderOrder = E), (K.matrixAutoUpdate = !1), K.updateMatrix());
      });
      const _ = () => {
        i.value.updateMatrix(), c.value.updateMatrix(), r.value.updateMatrix();
      },
        M = () => {
          G == null || G.kill(), G == null || G.clear(), H == null || H.kill(), H == null || H.clear();
        },
        H = Ee.timeline({ onUpdate: _ }),
        G = Ee.timeline({ onUpdate: _ }),
        z = () => {
          M(),
            G.set(i.value, { visible: !0 })
              .to(c.value.scale, { duration: 0.35, x: D.hover, y: D.hover, ease: "power2.out" }, 0)
              .to(r.value.scale, { duration: 0.35, x: L.hover, y: L.hover, ease: "power2.out" }, 0)
              .to(N.uniforms.uShift, { duration: 0.35, value: 0, ease: "power2.out" }, 0)
              .to(N.uniforms.uRadius, { duration: 0.35, value: 1, ease: "power2.out" }, 0)
              .to(N.uniforms.uAlpha, { duration: 0.35, value: 1, ease: "power2.out" }, 0),
            v && G.set([a.value, l.value], { visible: !0 }, 0).to([a.value.material.uniforms.uProg, l.value.material.uniforms.uProg], { duration: 0.35, value: 1, ease: "power2.out" }, 0),
            G.restart();
        },
        pe = () => {
          f.value ||
            (M(),
              G.to(c.value.scale, { duration: 0.35, x: D.default, y: D.default, ease: "power2.out" }, 0)
                .to(r.value.scale, { duration: 0.35, x: L.default, y: L.default, ease: "power2.out" }, 0)
                .to(N.uniforms.uAlpha, { duration: 0.35, value: 0, ease: "power2.out" }, 0),
              v && G.to([a.value.material.uniforms.uProg, l.value.material.uniforms.uProg], { duration: 0.35, value: 0, ease: "power2.out" }, 0).set([a.value, l.value], { visible: !1 }),
              G.set(N.uniforms.uAlpha, { value: 1 }).set(N.uniforms.uRadius, { value: 0 }).set(N.uniforms.uShift, { value: 1 }),
              G.restart());
        },
        Re = (K = !0) => {
          M();
          const se = K ? Q : 0;
          H.addLabel("enter", se)
            .set(i.value, { visible: !0 }, "enter")
            .to(c.value.scale, { duration: 0.45, x: D.default, y: D.default, ease: "power2.out" }, "enter")
            .to(r.value.scale, { duration: 0.45, x: L.default, y: L.default, ease: "power2.out" }, "enter")
            .restart(),
            H.timeScale(1);
        },
        Ge = (K = !0) => {
          M();
          const se = K ? Q : 0;
          H.addLabel("enter", se).to(r.value.scale, { duration: 0.45, x: 0, y: 0, ease: "power2.in" }, "enter").to(c.value.scale, { duration: 0.45, x: 0, y: 0, ease: "power2.in" }, "enter+=0.16").set(i.value, { visible: !1 }),
            v && H.to([a.value.material.uniforms.uProg, l.value.material.uniforms.uProg], { duration: 0.35, value: 0, ease: "power2.out" }, 0).set([a.value, l.value], { visible: !1 }),
            H.set(N.uniforms.uAlpha, { value: 1 }).set(N.uniforms.uRadius, { value: 0 }).set(N.uniforms.uShift, { value: 1 }).restart(),
            H.timeScale(1.2);
        },
        We = () => {
          console.log(C), u.value && (n.value || e(C));
        },
        Z = () => {
          u.value && (n.value || ((document.body.style.cursor = "pointer"), z()));
        },
        oe = () => {
          h.value || (u.value && ((document.body.style.cursor = "default"), pe()));
        };
      st("click", g, We),
        st("pointerEnter", g, Z),
        st("pointerLeave", g, oe),
        me(u, (K) => {
          K ? Re() : Ge();
        }),
        me(o, (K, se) => {
          n.value || (K.meshKey === C && K.isHighlighted ? z() : se.meshKey === C && pe());
        }),
        me(n, (K, se) => {
          K === C ? z() : se === C && K !== !1 ? Ge(!1) : se === C ? pe() : K ? Ge() : K === !1 && Re();
        }),
        he(() => {
          u.value && Re(), [r, g].forEach((K) => K.value.updateMatrix()), (i.value.userData = { ...d.object.userData }), (d.object.userData = {});
        }),
        je(() => {
          M();
        });
      const Kt = ({ camera: K }) => {
        const se = re.lerp(w.out, w.in, t.zoom.smooth);
        i.value.quaternion.copy(K.value.quaternion), i.value.scale.set(se, se, 1), i.value.updateMatrix();
      };
      return (
        _e(ge.WEBGL_TICK_BEFORE, Kt),
        (K, se) => (
          S(),
          F(
            "TresGroup",
            Vi,
            [
              p(
                "TresGroup",
                { ref_key: "childGroup", ref: i, scale: [0, 0, 1], visible: !1, name: m(C), "matrix-auto-update": !1, position: m(I) },
                [
                  p(
                    "TresMesh",
                    { ref_key: "bgRef", ref: c, visible: !0, "matrix-auto-update": !1, scale: [0, 0, 1], "render-order": m(E) + 1 },
                    [p("primitive", { object: m(B) }, null, 8, Wi), p("TresShaderMaterial", { name: "property-bg", args: [y], transparent: !0, "depth-write": !1, "depth-test": !1 }, null, 8, Xi)],
                    8,
                    zi
                  ),
                  p(
                    "TresMesh",
                    { ref_key: "iconRef", ref: r, visible: !0, "matrix-auto-update": !1, scale: [L.default, L.default, 1], "render-order": m(E) + 2 },
                    [p("primitive", { object: m(B) }, null, 8, $i), p("TresShaderMaterial", { name: "property-icon", args: [N], transparent: !0, "depth-write": !1, "depth-test": !1 }, null, 8, er)],
                    8,
                    Zi
                  ),
                  p(
                    "TresMesh",
                    { ref_key: "raycastMeshRef", ref: g, visible: !1, "matrix-auto-update": !1, scale: [1.2, 1.2, 1] },
                    [p("primitive", { object: m(B) }, null, 8, tr), se[0] || (se[0] = p("TresMeshBasicMaterial", null, null, -1))],
                    512
                  ),
                ],
                8,
                ji
              ),
            ],
            512
          )
        )
      );
    },
  },
  sr = {
    __name: "index",
    setup(d) {
      const e = Pe(),
        t = q(() => e.listings),
        { scene: n } = Ke(),
        A = [];
      return (
        n.value.traverse((o) => {
          o.name.includes("property") && o.children.forEach((s) => (s.visible = !1));
        }),
        t.value.forEach(({ meshKey: o }) => {
          const s = n.value.getObjectByName(o);
          if (s) {
            const { name: i } = s;
            s.traverse((r) => {
              r.isMesh && r.name.includes("Plot") && (s.name = s.name.replace("property-", "prprt-ADDED-"));
            }),
              A.push({ object: s, name: i });
          }
        }),
        (o, s) => (
          S(),
          F("TresGroup", null, [
            (S(),
              F(
                ke,
                null,
                He(A, (i, r) => Y(m(Ar), { key: { i: r }, object: i.object, name: i.name }, null, 8, ["object", "name"])),
                64
              )),
          ])
        )
      );
    },
  },
  ue = new On();
ue.setName("Global");
ue.resolution = new EA(new IA(0, 0));
ue.add(ue.resolution);
ue.time = new EA(0);
ue.add(ue.time);
ue.dpr = new EA(1);
ue.add(ue.dpr);
var nr = `attribute float aShift;
attribute float aSpeed;
attribute float aTxtIndex;

uniform vec2 uBoundsX;

varying float vDistance;
varying float vTxtIndex;
varying vec2 vUv;

vec3 getMatrixScale(mat4 mat) {
    return vec3(length(mat[0].xyz), length(mat[1].xyz), length(mat[2].xyz));
}

vec3 getMatrixTranslation(mat4 mat) {
    return vec3(mat[3]);
}

mat4 billboardModelMatrix() {
    vec3 scale = getMatrixScale(instanceMatrix);
    vec3 translation = getMatrixTranslation(instanceMatrix);

    
    return mat4(
        vec4(scale.x, 0.0, 0.0, 0.0),
        vec4(0.0, scale.y, 0.0, 0.0),
        vec4(0.0, 0.0, scale.z, 0.0),
        vec4(translation, 1.0)
    );
}

vec3 getViewRight() {
    return vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
}
vec3 getViewLeft() {
    return-getViewRight();
}
vec3 getViewUp() {
    return vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
}
vec3 getViewDown() {
    return-getViewUp();
}
vec3 getViewBack() {
    return vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2]);
}
vec3 getViewForward() {
    return-getViewBack();
}
mat4 billBoardMatrix(mat4 mat) {
    mat4 m = mat4(1.0);
    vec3 scale = getMatrixScale(mat);
    m[0].xyz = getViewRight()*scale.x;
    m[1].xyz = getViewUp()*scale.y;
    m[2].xyz = getViewBack()*scale.z;
    m[3].xyz = getMatrixTranslation(mat);
    return m;
}

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};

void main(){
  vec4 billboardPos = billBoardMatrix(instanceMatrix) * vec4(position, 1.0);
  float progT = fract((gTime * aSpeed) * 0.0028 + aShift);
  float progX = mix(uBoundsX.x, uBoundsX.y, progT);
  billboardPos.x += progX;

  gl_Position = projectionMatrix * viewMatrix * billboardPos;
  vUv = uv;
  vTxtIndex = aTxtIndex;
}`,
  or = `uniform float uOpeningProgress;
uniform float uZoom;
uniform float uInternalTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform sampler2D uCloudTxt;
uniform sampler2D uTurbolenceTxt;

varying float vTxtIndex;
varying vec2 vUv;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};

vec2 scaleFromCenter(vec2 uv, vec2 scale){
    vec2 center = vec2(0.5);
    return (uv - center) * scale + center;
}

void main(){
  bool isMobile = gResolution.y > gResolution.x;
  
  float time = gTime * 0.003;
  float internalTime = uInternalTime;
  vec2 noiseUv1 = vec2(vUv.x + time, vUv.y + time);
  vec2 noiseUv2 = vec2(vUv.x - time, vUv.y - time);
  vec2 noiseUv3 = scaleFromCenter(vUv, vec2(0.12)) + vec2(0.83 + (time*0.5), 0.0);

  vec2 noiseUvInternal = vec2(vUv.x - internalTime, vUv.y + internalTime);

  vec4 flowMapTexture1 = texture2D(uTurbolenceTxt, noiseUv1);
  vec4 flowMapTexture2 = texture2D(uTurbolenceTxt, noiseUv2);
  vec4 flowMapTexture3 = texture2D(uTurbolenceTxt, noiseUv3);

  vec4 flowMapTexture = flowMapTexture1 * 0.8 + flowMapTexture2 * 0.2;

  vec2 f_displ = (flowMapTexture.rg - 0.5) * 2.0;
  vec2 f_displ2 = f_displ;
  vec2 f_displ3 = smoothstep(0.7, 0.9, flowMapTexture3.rg);

  vec2 smallTurbolence = texture2D(uTurbolenceTxt, noiseUvInternal * 2.0).gg;
  smallTurbolence.r = smoothstep(0.75, 1.0, smallTurbolence.r);

  f_displ *= fract(time);
  f_displ2 *= fract(time + 0.5);
  f_displ3 = (f_displ3 - 0.5) * 2.0;

  float i = abs((fract(time) - 0.5) * 2.0);
  vec2 final = mix(f_displ, f_displ2, i);

  
  vec2 shapeUv = vUv + (final) * 0.01 + (f_displ3 * 0.05);
  vec4 txt = texture2D(uCloudTxt, shapeUv);

  
  
  

  
  float shape = 0.0;
  if(vTxtIndex > -0.5 && vTxtIndex < 0.5){ shape= txt.r; }
  else if(vTxtIndex > 0.5 && vTxtIndex < 1.5){ shape= txt.g; }
  else if(vTxtIndex > 1.5 && vTxtIndex < 2.5){ shape= txt.b; }

  
  float alpha = shape * (1.0 + final.r);
  alpha = shape;
  alpha = alpha - (smallTurbolence.r * (1.0 - shape) * 0.2);
  alpha = clamp(alpha, 0.0, 1.0);
  alpha *= 1.6;

  vec2 st = gl_FragCoord.xy / (gResolution * gDpr);
  float ratio = gResolution.x / gResolution.y;
  vec2 sf = vec2(1.0, 1.0 / ratio);
  if(isMobile){ sf = vec2(ratio, 1.0); };
  st = scaleFromCenter(st, sf);

  float centerMask = distance(vec2(0.5), st);
  float sizeShift = isMobile ? 0.09 * uZoom : 0.05 * uZoom;
  centerMask = 1.0 - smoothstep(0.25 + sizeShift, 0.45 + sizeShift, centerMask);
  float factor = mix(0.7, 0.85, uZoom);
  alpha *= (1.0 - centerMask * factor * uOpeningProgress); 
  alpha *= mix(1.0, 0.75, uZoom);

  
  vec3 colorA = uColorA;
  vec3 colorB = uColorB;
  float colorMix = 1.0 - (final.r + final.g);
  colorMix = clamp(colorMix, 0.0, 1.0);

  vec3 color = mix(uColorB, uColorA, colorMix);

  alpha = clamp(alpha, 0.0, 1.0);

  gl_FragColor = vec4(color, alpha);

	#include <colorspace_fragment>
}`;
const ir = ["args", "render-order"],
  rr = ["args"],
  rA = 25,
  ar = {
    __name: "index",
    setup(d) {
      const e = new ae(),
        t = le(null),
        n = new Nt(),
        A = { x: [-7, 26], y: [2.4, 4.9], z: [-10, 12] },
        o = { x: [5, 9], y: [0.7, 1.35] },
        s = De.renderOrder.clouds,
        { dynamicValues: i } = Ae("map"),
        { appState: r } = Ce("map"),
        { renderer: c } = Ke(),
        g = Ee.timeline(),
        a = Ie.get("clouds"),
        l = Ie.get("turbolence");
      (l.wrapS = l.wrapT = St), (a.minFilter = a.magFilter = at), (l.minFilter = l.magFilter = at);
      const u = c.value.capabilities.getMaxAnisotropy();
      (a.anisotropy = u), (l.anisotropy = u), (a.needsUpdate = !0), (l.needsUpdate = !0);
      const f = {
        name: "clouds",
        vertexShader: nr,
        fragmentShader: or,
        uniformsGroups: [ue],
        uniforms: {
          uCloudTxt: { value: a },
          uBoundsX: { value: A.x },
          uTurbolenceTxt: { value: l },
          uColorA: { value: e.clone().set(16777215) },
          uColorB: { value: e.clone().set(15132390) },
          uZoom: { value: 0 },
          uInternalTime: { value: 0 },
          uOpeningProgress: { value: 0 },
        },
        transparent: !0,
        depthWrite: !1,
        depthTest: !1,
      },
        h = [],
        C = [],
        I = [];
      for (let E = 0; E < rA; E++) h.push(re.randFloat(0, 1)), C.push(re.randFloat(0.6, 1.4)), I.push(re.randInt(0, 2));
      const B = ({ delta: E }) => {
        (f.uniforms.uZoom.value = i.zoom.smooth), (f.uniforms.uInternalTime.value += 0.01 * (E * re.lerp(1, 0.3, i.zoom.smooth)));
      };
      return (
        _e(ge.WEBGL_TICK_BEFORE, B, 2),
        me(r, (E) => {
          E === "opening>experience" && g.to(f.uniforms.uOpeningProgress, { duration: 2, value: 1 }, 2.3);
        }),
        he(() => {
          for (let w = 0; w < rA; w++) {
            const L = re.randFloat(A.y[0], A.y[1]),
              k = re.randFloat(A.z[0], A.z[1]);
            n.position.set(0, L, k);
            const b = a.source.data.naturalWidth,
              U = a.source.data.naturalHeight,
              R = b / U,
              y = re.randFloat(o.x[0], o.x[1]),
              N = (y / R) * re.randFloat(o.y[0], o.y[1]);
            n.scale.set(y, N, 1), n.updateMatrix(), t.value.setMatrixAt(w, n.matrix);
          }
          t.value.instanceMatrix.needsUpdate = !0;
          const E = new At(new Float32Array(h), 1);
          t.value.geometry.setAttribute("aShift", E);
          const Q = new At(new Float32Array(C), 1);
          t.value.geometry.setAttribute("aSpeed", Q);
          const x = new At(new Float32Array(I), 1);
          t.value.geometry.setAttribute("aTxtIndex", x), t.value.updateMatrix();
        }),
        je(() => {
          g == null || g.kill();
        }),
        (E, Q) => (
          S(),
          F(
            "TresInstancedMesh",
            { ref_key: "meshRef", ref: t, args: [null, null, rA], "matrix-auto-update": !1, "render-order": m(s) },
            [Q[0] || (Q[0] = p("TresPlaneGeometry", { args: [1, 1, 1, 1] }, null, -1)), p("TresShaderMaterial", { args: [f] }, null, 8, rr)],
            8,
            ir
          )
        )
      );
    },
  };
var lr = `attribute float aTimeShift;
attribute vec3 aPosShift;
attribute vec3 color;

varying float vWing;
varying vec3 vNormal;
varying vec3 vPosition;

uniform Global {
  vec2 gResolution;
  float gTime;
  float gDpr;
};

void main() {
  vec3 np = position;
  float time = (2.0 * gTime) + aTimeShift * 4.0;

  float y = cos(0.3 * time + sin(1.3 * time)) + cos(3.3 * time) * 0.3;
  float x = cos(0.2 * time + sin(0.7 * time)) + cos(0.35 * time) * 0.3;

  np.x += x * 5.0;
  np.y += y * 3.0;
  np.y += color.g * sin(time * 10.0);

  np += aPosShift;

  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(np, 1.0);

  vWing = color.g;
  vPosition = np + vec3(0.0, color.g * sin(time * 10.0) * 1.0, 0.0);
}`,
  cr = `uniform vec3 uColor;

varying float vWing;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {

  
  vec3 dx = dFdx(vPosition);
  vec3 dy = dFdy(vPosition);

  
  vec3 displacedNormal = normalize(cross(dx, dy));

  vec3 finalColor = uColor * max(dot(displacedNormal, normalize(vec3(0.2, 1.0, -0.2))), 0.0) + 0.1;

  finalColor += vWing * 0.1;
  gl_FragColor = vec4(finalColor, 1.0);

  
}`;
const gr = ["args", "render-order"],
  ur = ["args"],
  aA = 40,
  dr = {
    __name: "index",
    props: ["data"],
    setup(d) {
      const { isDebug: e } = Ae("map"),
        { scene: t } = Ke(),
        n = le(null),
        A = new Nt(),
        o = d.data.shiftPositions.length,
        { duration: s, modelShift: i } = d.data,
        r = new ce().fromArray(i).multiplyScalar(0.01),
        g = Ie.get("bird").scene.children[0].geometry.clone(),
        a = De.renderOrder.birds,
        l = new ce(),
        u = l.clone(),
        f = l.clone(),
        h = [],
        C = [],
        I = [];
      for (let w = 0; w < o; w++) {
        const D = re.randFloat(0, 1);
        h.push(D), C.push(d.data.shiftPositions[w][0] * aA, d.data.shiftPositions[w][1] * aA, d.data.shiftPositions[w][2] * aA);
        const L = re.randFloat(1.5, 3.5) / 16e3;
        I.push(L);
      }
      const B = { vertexShader: lr, fragmentShader: cr, uniformsGroups: [ue], uniforms: { uColor: { value: new ae(15790320) } }, depthTest: !1, depthWrite: !1, transparent: !0 },
        E = t.value.getObjectByName(d.data.path);
      E.visible = e;
      const { curve: Q } = E.userData,
        x = ({ elapsed: w }) => {
          for (let D = 0; D < o; D++) {
            const L = ((w + h[D] * 0.01 + d.data.initialShift) % s) / s;
            Q.getPointAt(L, u), Q.getTangentAt(L, f);
            const k = Math.atan2(f.x, f.z);
            (A.rotation.y = k), A.position.copy(u), A.position.add(r), A.scale.setScalar(I[D]), A.updateMatrix(), n.value.setMatrixAt(D, A.matrix);
          }
          n.value.instanceMatrix.needsUpdate = !0;
        };
      return (
        _e(ge.WEBGL_TICK_BEFORE, x),
        he(() => {
          n.value.geometry = g;
          const w = new At(new Float32Array(h), 1);
          n.value.geometry.setAttribute("aTimeShift", w);
          const D = new At(new Float32Array(C), 3);
          n.value.geometry.setAttribute("aPosShift", D);
        }),
        (w, D) => (
          S(),
          F(
            "TresInstancedMesh",
            { ref_key: "meshRef", ref: n, args: [null, null, m(o)], "matrix-auto-update": !1, "render-order": m(a), "frustum-culled": !1 },
            [D[0] || (D[0] = p("TresPlaneGeometry", null, null, -1)), p("TresShaderMaterial", { args: [B] }, null, 8, ur)],
            8,
            gr
          )
        )
      );
    },
  },
  hr = {
    __name: "index",
    setup(d) {
      const e = [
        [
          [0, 0, 0],
          [0.5, 0.2, 0.5],
          [-0.3, -0.3, 0.1],
          [0.1, 0.1, -0.4],
        ],
        [
          [0, 0, 0],
          [0.65, 0.15, 0.2],
          [0.2, -0.2, -0.4],
          [-0.3, -0.3, 0.1],
        ],
        [
          [0, 0, 0],
          [0.35, 0.35, 0.2],
          [-0.3, -0.3, -0.14],
          [0.1, 0.1, -0.4],
        ],
        [
          [0, 0, 0],
          [0.65, 0.15, 0.2],
          [0.2, -0.2, -0.4],
          [-0.2, 0.2, 0.4],
          [-0.4, -0.3, -0.3],
        ],
        [
          [0, 0, 0],
          [0.4, 0.4, 0.3],
          [-0.2, 0.2, -0.3],
          [0.3, -0.3, 0.2],
          [-0.1, -0.1, 0.5],
        ],
        [
          [0, 0, 0],
          [0.55, 0.25, 0.1],
          [-0.35, 0.35, -0.1],
          [0.15, -0.15, 0.3],
          [-0.25, -0.25, -0.2],
        ],
      ],
        t = [
          [0.3, 0.4, 0.5],
          [-0.3, 0.4, 1.5],
          [0.6, -0.4, -2.5],
          [-0.6, 0.2, 2.5],
        ],
        n = [
          { path: "birds-1", duration: 120, initialShift: 20, modelShift: t[0], shiftPositions: e[0] },
          { path: "birds-1", duration: 120, initialShift: 50, modelShift: t[1], shiftPositions: e[3] },
          { path: "birds-1", duration: 120, initialShift: 70, modelShift: t[2], shiftPositions: e[2] },
          { path: "birds-1", duration: 120, initialShift: 90, modelShift: t[3], shiftPositions: e[4] },
          { path: "birds-2", duration: 140, initialShift: 30, modelShift: t[0], shiftPositions: e[1] },
          { path: "birds-2", duration: 140, initialShift: 50, modelShift: t[1], shiftPositions: e[0] },
          { path: "birds-2", duration: 140, initialShift: 80, modelShift: t[2], shiftPositions: e[2] },
          { path: "birds-2", duration: 140, initialShift: 110, modelShift: t[3], shiftPositions: e[3] },
          { path: "birds-3", duration: 110, initialShift: 20, modelShift: t[0], shiftPositions: e[2] },
          { path: "birds-3", duration: 110, initialShift: 55, modelShift: t[1], shiftPositions: e[3] },
          { path: "birds-3", duration: 110, initialShift: 85, modelShift: t[2], shiftPositions: e[1] },
          { path: "birds-3", duration: 110, initialShift: 105, modelShift: t[3], shiftPositions: e[5] },
          { path: "birds-4", duration: 130, initialShift: 30, modelShift: t[0], shiftPositions: e[3] },
          { path: "birds-4", duration: 130, initialShift: 60, modelShift: t[1], shiftPositions: e[0] },
          { path: "birds-4", duration: 130, initialShift: 90, modelShift: t[2], shiftPositions: e[4] },
          { path: "birds-4", duration: 130, initialShift: 110, modelShift: t[3], shiftPositions: e[5] },
        ];
      return (A, o) => (
        S(),
        F("TresGroup", null, [
          (S(),
            F(
              ke,
              null,
              He(n, (s, i) => Y(m(dr), { key: { i }, data: s }, null, 8, ["data"])),
              64
            )),
        ])
      );
    },
  };
function fr(d, e) {
  const t = [...e.amenities.items, ...e.properties.items];
  d.traverse((n) => {
    const A = n.name.includes("amenity"),
      o = n.name.includes("property");
    (A || o) && (A ? ((n.userData.isDebugObject = !0), (n.userData.isAvailableInCms = t.some((s) => s.meshKey === n.name))) : o && ((n.userData.isDebugObject = !0), (n.userData.isAvailableInCms = t.some((s) => s.meshKey === n.name))));
  }),
    console.group("CMS x SCENE"),
    t.forEach((n) => {
      d.getObjectByName(n.meshKey) || console.log(`ERROR: ${n.meshKey} from CMS is not available in the map model`);
    }),
    console.groupEnd();
}
const Ir = { scale: [50, 50, 50] },
  Cr = {
    __name: "index",
    async setup(d) {
      let e, t;
      const n = Pe(),
        { responsiveType: A, setSizes: o, dynamicValues: s, setAppState: i } = Ae("map"),
        { appState: r } = Ce("map"),
        c = q(() => n.amenities),
        g = q(() => n.listings),
        a = q(() => r.value !== "loading"),
        { renderer: l, scene: u, camera: f, sizes: h } = Ke();
      Ie.detectSupport(l.value), ([e, t] = mA(() => Ie.startPreload({ responsiveType: A }))), await e, t();
      const { setSceneRef: C } = Ae("map");
      (s.sceneRef = u.value), C(!0), Ie.get("map");
      const { render: I } = qn();
      return (
        he(async () => {
          await Ve(), i("loaded"), await Ve(), fr(u.value, { amenities: { items: c.value }, properties: { items: g.value } }), i("opening");
        }),
        me(
          h.aspectRatio,
          async () => {
            await Ve();
            const B = h.width.value,
              E = h.height.value;
            (ue.resolution.value.x = B), (ue.resolution.value.y = E), o(B, E), (ue.dpr.value = l.value.getPixelRatio()), nt.emit(ge.WEBGL_RESIZE, { width: B, height: E });
          },
          { immediate: !0 }
        ),
        I(({ renderer: B, elapsed: E, delta: Q, raycaster: x }) => {
          (s.frames += 1), (ue.time.value = E);
          const w = { renderer: B, scene: u, camera: f, elapsed: E, delta: Q, raycaster: x };
          nt.emit(ge.WEBGL_TICK_BEFORE, w), B.render(u.value, f.value), nt.emit(ge.WEBGL_TICK_AFTER, w);
        }),
        (B, E) => (
          S(),
          F(
            ke,
            null,
            [
              p("TresGroup", Ir, [Y(m(Fi)), m(a) ? (S(), ne(m(qi), { key: 0 })) : V("", !0), m(a) ? (S(), ne(m(sr), { key: 1 })) : V("", !0), m(a) ? (S(), ne(m(hr), { key: 2 })) : V("", !0)]),
              m(a) ? (S(), ne(m(ar), { key: 0 })) : V("", !0),
            ],
            64
          )
        )
      );
    },
  },
  pr = {
    __name: "index",
    setup(d) {
      const { dynamicValues: e, sizes: t } = Ae("map"),
        { raycaster: n, camera: A, renderer: o } = Ke(),
        s = (r, c = !0) => {
          const g = r.clientX,
            a = r.clientY;
          (e.mouse.default.x = g), (e.mouse.default.y = a), (e.mouse.normalized.x = (g / t.w) * 2 - 1), (e.mouse.normalized.y = -(a / t.h) * 2 + 1), c && FA.onPointerMove(e.mouse.normalized, A.value);
        },
        i = (r) => {
          s(r, !1), FA.onClick(e.mouse.normalized, A.value);
        };
      return (
        he(() => {
          n.value.layers.set(9), o.value.domElement.addEventListener("pointermove", s), o.value.domElement.addEventListener("click", i);
        }),
        je(() => {
          o.value.domElement.removeEventListener("pointermove", s), o.value.domElement.removeEventListener("click", i);
        }),
        (r, c) => null
      );
    },
  },
  Br = Jn(Yn),
  Er = {
    __name: "index",
    setup(d) {
      return (e, t) => {
        const n = Br;
        return S(), ne(n, { antialias: !1, alpha: !0, dpr: [1, 1.5] }, { default: X(() => [Y(m(mo)), (S(), ne($n, null, { default: X(() => [Y(m(Cr))]), _: 1 })), Y(m(pr))]), _: 1 });
      };
    },
  },
  mr = {
    __name: "index",
    setup(d) {
      let e, t, n;
      const { $event: A } = ze(),
        { appState: o } = Ce("map"),
        s = te(!1),
        i = (g) => {
          o.value === "experience" && (nt.emit(ge.WEBGL_DRAG, g), !s.value && ((s.value = !0), A.emit("map:interacted")));
        },
        r = (g) => {
          o.value === "experience" && (nt.emit(ge.WEBGL_WHEEL, g), !s.value && ((s.value = !0), A.emit("map:interacted")));
        },
        c = (g) => {
          o.value === "experience" && (nt.emit(ge.WEBGL_PINCH, g), !s.value && ((s.value = !0), A.emit("map:interacted")));
        };
      return (
        he(() => {
          const g = Et(".js-canvas-gestures");
          (t = new Vn(g, i, { filterTaps: !0 })), (e = new jn(g, r, { event: { passive: !0 } })), (n = new zn(g, c, { pointer: { touch: !0 }, event: { passive: !1 } }));
        }),
        je(() => {
          t == null || t.destroy(), e == null || e.destroy(), n == null || n.destroy();
        }),
        (g, a) => null
      );
    },
  },
  Tt = new ce(),
  as = (d, e) => (Tt.copy(d), Tt.project(e), { x: Tt.x * window.innerWidth * 0.5 + window.innerWidth * 0.5, y: -Tt.y * window.innerHeight * 0.5 + window.innerHeight * 0.5 }),
  Qr = { class: "mapCanvas__debug" },
  yr = {
    __name: "index",
    async setup(d) {
      let e, t;
      const n = new ce(),
        { dynamicValues: A } = Ae("map"),
        o = le(null),
        s = te(null),
        i = le(null),
        r = te(null);
      ([e, t] = mA(() => Ve())), await e, t();
      const c = ({ camera: g }) => {
        o.value.forEach(({ item: a }, l) => {
          a.getWorldPosition(n);
          const u = as(n, g.value);
          Ee.set(s.value[l], { x: u.x, y: u.y });
        }),
          i.value.forEach(({ item: a }, l) => {
            a.getWorldPosition(n);
            const u = as(n, g.value);
            Ee.set(r.value[l], { x: u.x, y: u.y });
          });
      };
      return (
        he(async () => {
          await Ve(),
            (o.value = []),
            (i.value = []),
            A.sceneRef.traverse((g) => {
              var a, l;
              if (
                (g.isObject3D && g.name.includes("amenity") && (a = g.userData) != null && a.isDebugObject && o.value.push({ item: g, exists: g.userData.isAvailableInCms, label: g.name }),
                  g.isObject3D && g.name.includes("property") && (l = g.userData) != null && l.isDebugObject)
              )
                if (g.isGroup) i.value.push({ item: g, exists: g.userData.isAvailableInCms, label: g.name });
                else {
                  const u = g.children[0];
                  i.value.push({ item: u, exists: g.userData.isAvailableInCms, label: g.name });
                }
            });
        }),
        _e(ge.WEBGL_TICK_AFTER, c),
        (g, a) => (
          S(),
          F("div", Qr, [
            (S(!0),
              F(
                ke,
                null,
                He(m(o), (l, u) => (S(), F("div", { ref_for: !0, ref_key: "amenitiesRef", ref: s, key: { i: u }, class: Qe(["mapCanvas__debug-pin", { "--matches": l.exists === !0 }]) }, W(l.label), 3))),
                128
              )),
            (S(!0),
              F(
                ke,
                null,
                He(m(i), (l, u) => (S(), F("div", { ref_for: !0, ref_key: "propertiesRef", ref: r, key: { i: u }, class: Qe(["mapCanvas__debug-pin", { "--matches": l.exists === !0 }]) }, W(l.label), 3))),
                128
              )),
          ])
        )
      );
    },
  },
  wr = { class: "relative" },
  xr = { class: "relative flex h-46 s:h-50 text-main pointer-events-none before:absolute before:inset-0 before:bg-[#EEF6F6] before:rounded-full before:z-1" },
  vr = ["disabled"],
  _r = { class: "switch__mask absolute inset-0 flex pointer-events-none bg-highlight text-white rounded-full overflow-hidden z-3", "aria-hidden": "true" },
  Sr = {
    __name: "index",
    setup(d) {
      const e = Pe(),
        { setCurrentType: t } = Ae("map"),
        { currentType: n, currentFocusArea: A } = Ce("map");
      q(() => (A.value === "main" ? e.amenities.filter((s) => !s.notMain || s.slug === "dune-deck") : e.amenities.filter((s) => s.notMain || s.slug === "dune-deck")));
      const o = q(() => (A.value === "main" ? e.listings.filter((s) => !s.notMain) : e.listings.filter((s) => s.notMain)));
      return (s, i) => (
        S(),
        F(
          "div",
          {
            class: Qe([
              "switch pr-95 s:pr-0 absolute bottom-20 s:bottom-32 l:bottom-48 left-20 right-20 s:right-auto s:left-1/2 s:-translate-x-1/2 rounded-full bg-white-pure s:w-full s:max-w-[31.5rem] text-14 font-bold border-[.3rem] border-white-pure pointer-events-auto",
              { "is-toggled": m(n) === "properties" && m(o).length > 1 },
            ]),
          },
          [
            p("div", wr, [
              p("div", xr, [
                p("button", { type: "button", class: "flex-1 shrink-0 flex items-center justify-center pointer-events-auto z-2", onClick: i[0] || (i[0] = (r) => m(t)("amenities")) }, " Amenities "),
                p(
                  "button",
                  {
                    type: "button",
                    class: Qe(["flex-1 shrink-0 flex items-center justify-center transition-opacity duration-500 ease-out pointer-events-auto z-2", { "opacity-50": m(o).length < 1 }]),
                    onClick: i[1] || (i[1] = (r) => m(t)("properties")),
                    disabled: m(o).length < 1,
                  },
                  " Properties ",
                  10,
                  vr
                ),
              ]),
              p("div", _r, [
                i[2] || (i[2] = p("div", { class: "flex-1 shrink-0 flex items-center justify-center" }, " Amenities ", -1)),
                p("div", { class: Qe(["flex-1 shrink-0 flex items-center justify-center", { "opacity-50": m(o).length < 1 }]) }, " Properties ", 2),
              ]),
            ]),
          ],
          2
        )
      );
    },
  },
  Dr = QA(Sr, [["__scopeId", "data-v-527ab9b7"]]),
  Lr = { class: "sidebar-root flex absolute top-0 right-0 bottom-0 w-full l:max-w-[75rem] pointer-events-auto z-10", "data-lenis-prevent": "" },
  Rr = { class: "relative flex flex-col w-full js-mask" },
  Tr = { class: "relative flex-1 min-h-[11rem] max-h-[11rem] s:min-h-[12rem] s:max-h-[12rem] bg-white before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:border-main before:opacity-10" },
  br = { key: 0, class: "absolute top-0 left-0 w-full h-110 s:h-120 z-1 flex justify-center px-20 s:px-130 l:px-100 l:pl-120" },
  Fr = { class: "mt-40 s:max-w-[70rem] l:max-w-[55rem] w-full" },
  Mr = {
    class:
      "relative flex items-center rounded-[3px] h-40 max-s:text-13 s:text-13 l:text-13 w-fit w-128 before:absolute before:inset-[-1px] before:opacity-20 before:border before:border-main before:rounded-[.4rem] before:duration-500 before:ease-out",
  },
  kr = { class: "w-46 s:w-60 l:w-46 text-center text-main" },
  Gr = { class: "opacity-60" },
  Nr = { key: 1, class: "absolute top-0 left-0 w-full h-110 s:h-120 z-1 flex justify-center px-20 s:px-130 l:px-100 l:pl-120" },
  Ur = { class: "mt-40 s:max-w-[70rem] l:max-w-[55rem] w-full" },
  Hr = {
    class:
      "relative flex items-center rounded-[3px] h-40 max-s:text-13 s:text-13 l:text-13 w-fit w-128 before:absolute before:inset-[-1px] before:opacity-20 before:border before:border-main before:rounded-[.4rem] before:duration-500 before:ease-out",
  },
  Kr = { class: "w-46 s:w-60 l:w-46 text-center text-main" },
  Pr = { class: "opacity-60" },
  Or = { key: 0, class: "sidebar__amenities px-20 s:px-130 l:px-100 l:pl-120 pt-50 pb-100 s:py-60 w-full" },
  qr = { key: 0, class: "w-full s:max-w-[55rem] s:mx-auto" },
  Jr = { class: "flex flex-col gap-y-10 s:gap-y-20" },
  Yr = ["onClick"],
  Vr = { class: "flex rounded-[.4rem] overflow-hidden radius-fix transition-colors duration-500 ease-out has-hover:group-hover:bg-white-pure" },
  jr = { class: "relative flex-1 flex items-center justify-between px-20 s:px-32 text-main" },
  zr = { class: "text-16 s:text-18 !font-sans normal-case text-main tracking-[-.05em] pr-20" },
  Wr = { class: "h3 !text-32 mt-20 js-t-up" },
  Xr = ["innerHTML"],
  Zr = { key: 0, class: "sidebar__properties px-20 s:px-130 l:px-100 l:pl-120 pt-50 pb-100 s:py-60 w-full" },
  $r = { key: 0, class: "w-full s:max-w-[70rem] l:max-w-[55rem] s:mx-auto text-main" },
  ea = { class: "flex flex-col gap-y-10 s:gap-y-20" },
  ta = ["onClick"],
  Aa = { class: "flex rounded-[.4rem] overflow-hidden radius-fix transition-colors duration-500 ease-out has-hover:group-hover:bg-white-pure" },
  sa = { class: "flex-1 flex flex-col justify-center px-20 s:px-32" },
  na = { class: "flex items-center justify-between gap-15" },
  oa = { class: "text-16 s:text-18 !font-sans normal-case text-main tracking-[-.05em] pr-20" },
  ia = { key: 0, class: "text-12 s:text-14 text-main opacity-80 mt-4" },
  ra = { key: 0, class: "mx-6 s:mx-12" },
  aa = { key: 1, class: "mx-6 s:mx-12" },
  la = { class: "h3 !text-32 mt-20 js-t-up" },
  ca = { class: "flex gap-x-12 relative pb-40 js-t-up -mt-28" },
  ga = ["innerHTML"],
  ua = {
    __name: "index",
    setup(d) {
      const { $device: e } = ze(),
        t = eo(),
        n = te(),
        A = te(),
        o = Pe(),
        { setCurrentSidebar: s, setSelectedAmenity: i, setSelectedProperty: r, setCurrentMeshKeyFocus: c } = Ae("map"),
        { currentSidebar: g, selectedAmenity: a, selectedProperty: l, currentFocusArea: u } = Ce("map"),
        f = q(() => (u.value === "main" ? o.amenities.filter((R) => !R.notMain || R.slug === "dune-deck") : o.amenities.filter((R) => R.notMain || R.slug === "dune-deck"))),
        h = q(() => (u.value === "main" ? o.listings.filter((R) => !R.notMain) : o.listings.filter((R) => R.notMain))),
        C = q(() => f.value.find((R) => R.meshKey === a.value)),
        I = q(() => h.value.find((R) => R.meshKey === l.value)),
        B = q(() => !e.isMobile),
        E = () => {
          s(!1), i(!1), r(!1);
        },
        Q = (R) => {
          c({ meshKey: R.meshKey, isHighlighted: !0 });
        },
        x = (R) => {
          c({ meshKey: R.meshKey, isHighlighted: !0 });
        },
        w = (R) => {
          i(R.meshKey);
        },
        D = (R) => {
          r(R.meshKey);
        },
        L = (R) => {
          if (R === "amenities") {
            const y = a.value,
              v = (f.value.findIndex((T) => T.meshKey === y) - 1 + f.value.length) % f.value.length;
            i(f.value[v].meshKey);
          } else if (R === "properties") {
            const y = l.value,
              v = (h.value.findIndex((T) => T.meshKey === y) - 1 + h.value.length) % h.value.length;
            r(h.value[v].meshKey);
          }
        },
        k = (R) => {
          if (R === "amenities") {
            const y = a.value,
              v = (f.value.findIndex((T) => T.meshKey === y) + 1) % f.value.length;
            i(f.value[v].meshKey);
          } else if (R === "properties") {
            const y = l.value,
              v = (h.value.findIndex((T) => T.meshKey === y) + 1) % h.value.length;
            r(h.value[v].meshKey);
          }
        },
        b = (R, y) => {
          y();
          const N = Gt(".js-t-up", R);
          Ee.timeline().from(R, { alpha: 0, duration: 0.5, delay: 0.5, ease: "power1" }).from(N, { y: "5rem", alpha: 0, duration: 1, stagger: 0.1, ease: "unmask" }, 0.35);
        },
        U = (R, y) => {
          Ee.to(R, {
            alpha: 0,
            duration: 0.5,
            ease: "power1",
            onComplete: () => {
              (A.value.scrollTop = 0), y();
            },
          });
        };
      return (R, y) => {
        const N = yA;
        return (
          S(),
          F("div", Lr, [
            p(
              "div",
              { ref_key: "el", ref: n, class: "relative flex w-full overflow-hidden bg-white before:absolute before:top-0 before:left-0 before:w-full before:opacity-20 before:border-t before:border-highlight" },
              [
                p("div", Rr, [
                  p("div", Tr, [
                    p("div", { class: "absolute px-20 s:px-130 l:px-100 l:pl-120 w-full h-full" }, [
                      p("div", { class: "w-full s:max-w-[70rem] l:max-w-[55rem] s:mx-auto relative" }, [
                        p(
                          "button",
                          { type: "button", "aria-label": "Close", class: "group rounded-full transition-colors duration-500 ease-out text-highlight absolute top-40 right-0 z-2", onClick: E },
                          y[4] ||
                          (y[4] = [
                            gt(
                              '<svg class="relative z-2 size-40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f58ecf54><rect class="stroke-highlight stroke-1" x="0.5" y="0.5" width="39" height="39" rx="2.5" data-v-f58ecf54></rect><g class="icon-close transition-transform duration-500 ease-out group-hover:rotate-90 origin-center" data-v-f58ecf54><path d="M15.9341 15.2364L24.5961 23.8984L23.7299 24.7647L15.0679 16.1026L15.9341 15.2364Z" class="fill-current" data-v-f58ecf54></path><path d="M24.5962 16.1025L15.9341 24.7646L15.0679 23.8984L23.73 15.2363L24.5962 16.1025Z" class="fill-current" data-v-f58ecf54></path></g></svg>',
                              1
                            ),
                          ])
                        ),
                      ]),
                    ]),
                    m(a)
                      ? (S(),
                        F("div", br, [
                          p("div", Fr, [
                            p("div", Mr, [
                              p(
                                "button",
                                {
                                  type: "button",
                                  label: "Previous",
                                  onClick: y[0] || (y[0] = () => L("amenities")),
                                  class: "group h-shape relative text-main pointer-events-auto rounded-full size-40 s:size-40 l:size-40 inline-flex items-center justify-center",
                                },
                                y[5] ||
                                (y[5] = [
                                  gt(
                                    '<svg class="relative h-10 s:h-10 l:h-10 w-auto scale-x-[-1] z-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f58ecf54><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-0 has-hover:group-hover:translate-x-[150%]" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.1876855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-[150%] has-hover:group-hover:translate-x-0" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g></svg>',
                                    1
                                  ),
                                ])
                              ),
                              p("div", kr, [p("span", null, W(m(f).findIndex((v) => v.meshKey === m(a)) + 1), 1), p("span", Gr, " / " + W(m(f).length), 1)]),
                              p(
                                "button",
                                {
                                  type: "button",
                                  label: "Next",
                                  onClick: y[1] || (y[1] = () => k("amenities")),
                                  class: "group h-shape relative text-main pointer-events-auto rounded-full size-40 s:size-40 l:size-40 inline-flex items-center justify-center",
                                },
                                y[6] ||
                                (y[6] = [
                                  gt(
                                    '<svg class="relative h-10 s:h-10 l:h-10 w-auto z-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f58ecf54><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-0 has-hover:group-hover:translate-x-[150%]" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-[150%] has-hover:group-hover:translate-x-0" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g></svg>',
                                    1
                                  ),
                                ])
                              ),
                            ]),
                          ]),
                        ]))
                      : V("", !0),
                    m(l)
                      ? (S(),
                        F("div", Nr, [
                          p("div", Ur, [
                            p("div", Hr, [
                              p(
                                "button",
                                {
                                  type: "button",
                                  label: "Previous",
                                  onClick: y[2] || (y[2] = () => L("properties")),
                                  class: "group h-shape relative text-main pointer-events-auto rounded-full size-40 s:size-40 l:size-40 inline-flex items-center justify-center",
                                },
                                y[7] ||
                                (y[7] = [
                                  gt(
                                    '<svg class="relative h-10 s:h-10 l:h-10 w-auto scale-x-[-1] z-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f58ecf54><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-0 has-hover:group-hover:translate-x-[150%]" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.1876855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-[150%] has-hover:group-hover:translate-x-0" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g></svg>',
                                    1
                                  ),
                                ])
                              ),
                              p("div", Kr, [p("span", null, W(m(h).findIndex((v) => v.meshKey === m(l)) + 1), 1), p("span", Pr, " / " + W(m(h).length), 1)]),
                              p(
                                "button",
                                {
                                  type: "button",
                                  label: "Next",
                                  onClick: y[3] || (y[3] = () => k("properties")),
                                  class: "group h-shape relative text-main pointer-events-auto rounded-full size-40 s:size-40 l:size-40 inline-flex items-center justify-center",
                                },
                                y[8] ||
                                (y[8] = [
                                  gt(
                                    '<svg class="relative h-10 s:h-10 l:h-10 w-auto z-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f58ecf54><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-0 has-hover:group-hover:translate-x-[150%]" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g><g class="h-shape__shape duration-1000 ease-out-expo transition-transform -translate-x-[150%] has-hover:group-hover:translate-x-0" data-v-f58ecf54><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M12.3782 6.63849L7.62272 1.20367L8.43369 0.276855L14.0001 6.63849L8.43369 13.0001L7.62272 12.0733L12.3782 6.63849Z" data-v-f58ecf54></path><path class="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M3.8147e-06 5.98306H13.1891V7.29378H3.8147e-06V5.98306Z" data-v-f58ecf54></path></g></svg>',
                                    1
                                  ),
                                ])
                              ),
                            ]),
                          ]),
                        ]))
                      : V("", !0),
                  ]),
                  p(
                    "div",
                    { ref_key: "scrollable", ref: A, class: "sidebar__content stack h-full w-full overflow-y-auto overflow-x-hidden" },
                    [
                      Y(
                        fe,
                        { css: !1, onEnter: b, onLeave: U },
                        {
                          default: X(() => [
                            m(g) === "amenities"
                              ? (S(),
                                F("div", Or, [
                                  Y(
                                    fe,
                                    { css: !1, onEnter: b, onLeave: U },
                                    {
                                      default: X(() => [
                                        m(a)
                                          ? V("", !0)
                                          : (S(),
                                            F("div", qr, [
                                              y[11] || (y[11] = p("h3", { class: "h3 !text-32 mb-20 s:mb-30 js-sidebar-elem" }, " Explore Amenities ", -1)),
                                              y[12] || (y[12] = p("hr", { class: "border-current mb-20 s:mb-30 opacity-0 l:mb-10" }, null, -1)),
                                              p("div", Jr, [
                                                (S(!0),
                                                  F(
                                                    ke,
                                                    null,
                                                    He(
                                                      m(f),
                                                      (v) => (
                                                        S(),
                                                        F(
                                                          "article",
                                                          MA(
                                                            {
                                                              key: v.meshKey,
                                                              class:
                                                                "group relative cursor-pointer before:absolute before:inset-[-1px] before:border before:border-[#BFE3ED] before:rounded-[.4rem] before:duration-500 before:ease-out js-sidebar-elem",
                                                              onClick: () => w(v),
                                                            },
                                                            kA(m(B) ? { mouseenter: () => Q(v) } : null, !0)
                                                          ),
                                                          [
                                                            p("div", Vr, [
                                                              v.featuredImage
                                                                ? (S(),
                                                                  ne(
                                                                    m(pt),
                                                                    { key: 0, image: v.featuredImage.thumbnail, class: "relative media-fill w-full max-w-[13rem] s:max-w-[20rem]" },
                                                                    { default: X(() => y[9] || (y[9] = [p("div", { class: "pt-[62.5%]" }, null, -1)])), _: 2 },
                                                                    1032,
                                                                    ["image"]
                                                                  ))
                                                                : V("", !0),
                                                              p("div", jr, [
                                                                p("h3", zr, W(v.title), 1),
                                                                y[10] ||
                                                                (y[10] = p(
                                                                  "svg",
                                                                  {
                                                                    class:
                                                                      "h-10 w-auto transition-all duration-1000 ease-out-expo has-hover:opacity-0 has-hover:-translate-x-full has-hover:group-hover:opacity-100 has-hover:group-hover:translate-x-0",
                                                                    viewBox: "0 0 13 11",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                  },
                                                                  [
                                                                    p("path", {
                                                                      "fill-rule": "evenodd",
                                                                      "clip-rule": "evenodd",
                                                                      d:
                                                                        "M10.7929 5.80619L6.64648 1.65974L7.35359 0.952637L12.2071 5.80619L7.35359 10.6597L6.64648 9.95264L10.7929 5.80619Z",
                                                                      fill: "currentColor",
                                                                    }),
                                                                    p("path", {
                                                                      "fill-rule": "evenodd",
                                                                      "clip-rule": "evenodd",
                                                                      d: "M0 5.30615H11.5V6.30615H0V5.30615Z",
                                                                      fill: "currentColor",
                                                                    }),
                                                                  ],
                                                                  -1
                                                                )),
                                                              ]),
                                                            ]),
                                                          ],
                                                          16,
                                                          Yr
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                              ]),
                                            ])),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  Y(
                                    fe,
                                    { css: !1, onEnter: b, onLeave: U },
                                    {
                                      default: X(() => [
                                        m(a)
                                          ? (S(),
                                            F("article", { key: m(a), class: "flex flex-col w-full s:max-w-[70rem] l:max-w-[55rem] s:mx-auto" }, [
                                              y[14] || (y[14] = p("span", { class: "eyebrow !text-11 text-highlight js-t-up opacity-60" }, "Amenities", -1)),
                                              p("h2", Wr, W(m(C).title), 1),
                                              m(C).featuredImage
                                                ? (S(),
                                                  ne(
                                                    m(pt),
                                                    { key: 0, image: m(C).featuredImage.src, class: "relative media-fill w-full my-40 js-t-up" },
                                                    { default: X(() => y[13] || (y[13] = [p("div", { class: "pt-[62.5%]" }, null, -1)])), _: 1 },
                                                    8,
                                                    ["image"]
                                                  ))
                                                : V("", !0),
                                              p("div", { class: "txt js-t-up text-main", innerHTML: m(C).description }, null, 8, Xr),
                                            ]))
                                          : V("", !0),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]))
                              : V("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                      Y(
                        fe,
                        { css: !1, onEnter: b, onLeave: U },
                        {
                          default: X(() => [
                            m(g) === "properties"
                              ? (S(),
                                F("div", Zr, [
                                  Y(
                                    fe,
                                    { css: !1, onEnter: b, onLeave: U },
                                    {
                                      default: X(() => [
                                        m(l)
                                          ? V("", !0)
                                          : (S(),
                                            F("div", $r, [
                                              y[17] || (y[17] = p("h3", { class: "h3 !text-32 mb-20 s:mb-30 js-sidebar-elem" }, " Explore Properties ", -1)),
                                              y[18] || (y[18] = p("hr", { class: "border-current mb-20 s:mb-30 opacity-0 l:mb-10" }, null, -1)),
                                              p("div", ea, [
                                                (S(!0),
                                                  F(
                                                    ke,
                                                    null,
                                                    He(
                                                      m(h),
                                                      (v) => (
                                                        S(),
                                                        F(
                                                          "article",
                                                          MA(
                                                            {
                                                              key: v.meshKey,
                                                              class:
                                                                "group relative cursor-pointer before:absolute before:inset-[-1px] before:border before:border-[#BFE3ED] before:rounded-[.4rem] before:duration-500 before:ease-out js-sidebar-elem",
                                                              onClick: () => D(v),
                                                            },
                                                            kA(m(B) ? { mouseenter: () => x(v) } : null, !0)
                                                          ),
                                                          [
                                                            p("div", Aa, [
                                                              v.thumbnail
                                                                ? (S(),
                                                                  ne(
                                                                    m(pt),
                                                                    { key: 0, image: v.thumbnail.thumbnail, class: "relative media-fill w-full max-w-[10rem] s:max-w-[20rem]" },
                                                                    { default: X(() => y[15] || (y[15] = [p("div", { class: "pt-[110%] s:pt-[62.5%]" }, null, -1)])), _: 2 },
                                                                    1032,
                                                                    ["image"]
                                                                  ))
                                                                : V("", !0),
                                                              p("div", sa, [
                                                                p("div", na, [
                                                                  p("div", null, [
                                                                    p("h3", oa, W(v.title), 1),
                                                                    v.bedrooms || v.bathrooms || v.area
                                                                      ? (S(),
                                                                        F("p", ia, [
                                                                          ot(W(v.bedrooms) + " ", 1),
                                                                          v.bathrooms ? (S(), F("span", ra, "|")) : V("", !0),
                                                                          ot(" " + W(v.bathrooms) + " ", 1),
                                                                          v.area ? (S(), F("span", aa, "|")) : V("", !0),
                                                                          ot(" " + W(v.area), 1),
                                                                        ]))
                                                                      : V("", !0),
                                                                  ]),
                                                                  y[16] ||
                                                                  (y[16] = p(
                                                                    "svg",
                                                                    {
                                                                      class:
                                                                        "relative h-10 w-auto transition-all duration-1000 ease-out-expo has-hover:opacity-0 has-hover:-translate-x-full has-hover:group-hover:opacity-100 has-hover:group-hover:translate-x-0",
                                                                      viewBox: "0 0 13 11",
                                                                      fill: "none",
                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                    },
                                                                    [
                                                                      p("path", {
                                                                        "fill-rule": "evenodd",
                                                                        "clip-rule": "evenodd",
                                                                        d:
                                                                          "M10.7929 5.80619L6.64648 1.65974L7.35359 0.952637L12.2071 5.80619L7.35359 10.6597L6.64648 9.95264L10.7929 5.80619Z",
                                                                        fill: "currentColor",
                                                                      }),
                                                                      p("path", {
                                                                        "fill-rule": "evenodd",
                                                                        "clip-rule": "evenodd",
                                                                        d: "M0 5.30615H11.5V6.30615H0V5.30615Z",
                                                                        fill: "currentColor",
                                                                      }),
                                                                    ],
                                                                    -1
                                                                  )),
                                                                ]),
                                                              ]),
                                                            ]),
                                                          ],
                                                          16,
                                                          ta
                                                        )
                                                      )
                                                    ),
                                                    128
                                                  )),
                                              ]),
                                            ])),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  Y(
                                    fe,
                                    { css: !1, onEnter: b, onLeave: U },
                                    {
                                      default: X(() => {
                                        var v, T, _, M, H, G, z;
                                        return [
                                          m(l)
                                            ? (S(),
                                              F("article", { key: m(l), class: "flex flex-col w-full s:max-w-[70rem] l:max-w-[55rem] s:mx-auto" }, [
                                                y[20] || (y[20] = p("span", { class: "eyebrow !text-11 text-highlight js-t-up opacity-60" }, "Real Estate", -1)),
                                                p("h2", la, W((v = m(I)) == null ? void 0 : v.title), 1),
                                                (T = m(I)) != null && T.thumbnail
                                                  ? (S(),
                                                    ne(
                                                      m(pt),
                                                      { key: 0, image: (_ = m(I)) == null ? void 0 : _.thumbnail.src, class: "relative media-fill w-full my-40 js-t-up" },
                                                      { default: X(() => y[19] || (y[19] = [p("div", { class: "pt-[62.5%]" }, null, -1)])), _: 1 },
                                                      8,
                                                      ["image"]
                                                    ))
                                                  : V("", !0),
                                                p("nav", ca, [
                                                  Y(
                                                    N,
                                                    {
                                                      to: `${m(t).public.BASE_URL.replace(/\/+$/, "")}/real-estate/${(H = (M = m(I)) == null ? void 0 : M.category) == null ? void 0 : H.slug
                                                        }/${(G = m(I)) == null ? void 0 : G.slug}`,
                                                      target: "_blank",
                                                      rel: "noreferrer",
                                                      dark: !0,
                                                      label: "More details",
                                                      class: "!flex !flex-1 s:h-48",
                                                      backgroundAlt: "",
                                                    },
                                                    null,
                                                    8,
                                                    ["to"]
                                                  ),
                                                  Y(N, { to: "/contact", dark: !0, label: "Get in touch", class: "!flex !flex-1 s:h-48", backgroundAlt: "", onClick: E }),
                                                ]),
                                                p("div", { class: "txt js-t-up text-main", innerHTML: (z = m(I)) == null ? void 0 : z.description }, null, 8, ga),
                                              ]))
                                            : V("", !0),
                                        ];
                                      }),
                                      _: 1,
                                    }
                                  ),
                                ]))
                              : V("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                    ],
                    512
                  ),
                ]),
              ],
              512
            ),
          ])
        );
      };
    },
  },
  da = QA(ua, [["__scopeId", "data-v-f58ecf54"]]),
  ha = {
    __name: "index",
    setup(d) {
      const { $resize: e } = ze(),
        t = Ae("map"),
        { setCurrentSidebar: n, setCurrentMeshKeyFocus: A } = t,
        { currentSidebar: o, currentType: s, selectedAmenity: i, selectedProperty: r } = Ce("map"),
        c = q(() => e.small ?? !1),
        g = q(() => (e == null ? void 0 : e.medium) ?? !1),
        a = q(() => (e == null ? void 0 : e.landscape) ?? !0),
        l = () => {
          const { center: u } = qe.areas[t.currentFocusArea];
          A({ meshKey: u, isHighlighted: !1 }), n(s.value);
        };
      return (u, f) => (
        S(),
        F(
          "button",
          {
            type: "button",
            class:
              "see-all-root group absolute bottom-26 s:bottom-32 l:bottom-48 right-26 s:right-32 l:right-48 flex items-center gap-x-15 text-white text-14 font-bold pointer-events-auto before:absolute before:right-[-.3rem] before:bottom-[-.3rem] before:bg-[#EEF6F6] before:rounded-full before:z-1 before:w-88 before:h-46 before:z-0 before:pointer-events-none s:before:hidden",
            onClick: l,
          },
          [
            f[1] || (f[1] = p("span", { class: "max-s:hidden l:opacity-0 l:transition-opacity l:duration-500 ease-out l:has-hover:group-hover:opacity-100" }, "See all", -1)),
            p(
              "div",
              {
                class: Qe([
                  "relative h-40 s:h-50 w-40 s:w-50 bg-white-pure s:bg-white rounded-full after:absolute after:inset-0 after:bg-highlight after:rounded-full after:scale-0 after:transition-transform after:duration-700 after:ease-out-expo has-hover:group-hover:after:scale-100 text-main z-1 after:z-[-1]",
                  [!m(a) && m(o) && !m(i) && !m(r) && (m(c) || m(g)) ? "after:scale-100" : ""],
                ]),
              },
              [
                (S(),
                  F(
                    "svg",
                    {
                      viewBox: "0 0 40 40",
                      fill: "none",
                      class: Qe([
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-highlight h-40 w-auto has-hover:group-hover:text-white",
                        [!m(a) && m(o) && !m(i) && !m(r) && (m(c) || m(g)) ? "text-white" : "text-highlight"],
                      ]),
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    f[0] ||
                    (f[0] = [
                      p("rect", { x: "12.8047", y: "15.1018", width: "11.8954", height: "1.39946", fill: "currentColor" }, null, -1),
                      p("rect", { x: "12.8047", y: "19.3003", width: "13.9946", height: "1.39946", fill: "currentColor" }, null, -1),
                      p("rect", { x: "12.8047", y: "23.4984", width: "9.79622", height: "1.39946", fill: "currentColor" }, null, -1),
                    ]),
                    2
                  )),
              ],
              2
            ),
          ]
        )
      );
    },
  },
  fa = { class: "relative flex flex-col items-center justify-center bg-white overflow-hidden rounded-[0.6rem] px-33 s:px-50 pt-40 s:pt-40 pb-40" },
  Ia = { class: "w-[28.2rem] h-[21.3rem] relative bg-white flex items-center justify-center" },
  Ca = { class: "relative stack" },
  pa = { class: "fade flex items-center justify-center" },
  Ba = { key: 0, class: "svg__scroll-zoom" },
  Ea = { key: 1, class: "svg__pinch" },
  ma = { class: "relative stack text-center text-11 rtl:text-14 font-[600] tracking-[.2em] leading-none uppercase" },
  Qa = { class: "fade" },
  ya = { class: "fade" },
  wa = "<span>Drag</span><span>to move</span>",
  xa = {
    __name: "index",
    setup(d) {
      J.registerPlugin(tt);
      const { $event: e, $device: t } = ze(),
        { setCurrentType: n } = Ae("map"),
        A = q(() => t.isMobile),
        o = q(() => (A.value ? "Swipe to explore" : "Click and drag to explore")),
        s = q(() => (A.value ? "Pinch to zoom in and out" : "Scroll to zoom in and out")),
        i = te(null),
        r = te(!1);
      let c;
      const g = () => {
        r.value ||
          (!r.value && (r.value = !0),
            (c = J.timeline({
              onComplete: () => {
                c == null || c.kill(), i.value.remove();
              },
            })
              .to(i.value, { alpha: 0, duration: 0.5, ease: "power1" })
              .add(() => n("amenities"), 0.35)));
      };
      return (
        he(() => {
          e.on("map:interacted", g),
            Ve(() => {
              J.set(".ellipse", { opacity: 1 });
              const a = document.querySelector(".ellipse"),
                l = document.querySelector(".ellipse-tail"),
                u = document.querySelector(".ellipse-head"),
                f = document.querySelector(".svg__glove");
              if (!a || !l || !u || !f) return;
              const h = a.getTotalLength(),
                C = l.getTotalLength();
              if (
                (u.getTotalLength(),
                  (a.style.strokeDasharray = `${h / 4}px ${(h * 3) / 4}px`),
                  (a.style.strokeDashoffset = `${h / 4}px`),
                  (l.style.strokeDasharray = `${C / 4}px ${(C * 3) / 4}px`),
                  (l.style.strokeDashoffset = `${C / 4}px`),
                  (u.style.strokeDasharray = "1 9999"),
                  (u.style.strokeDashoffset = "0px"),
                  J.to(a, { duration: 2, ease: "power4.inOut", strokeDashoffset: 0, repeat: -1 }),
                  J.to(l, {
                    keyframes: [
                      { strokeDashoffset: C / 4, duration: 1.4, ease: "none" },
                      { strokeDashoffset: 0, duration: 0.6, ease: "power4.inOut" },
                      { strokeDashoffset: 0, duration: 0, ease: "none" },
                    ],
                    repeat: -1,
                  }),
                  J.to(u, { duration: 2, ease: "power4.inOut", strokeDashoffset: -h / 4, repeat: -1 }),
                  J.timeline({ repeat: -1, repeatDelay: 0.8, delay: 0.5 })
                    .set(u, { opacity: 0 })
                    .to(u, { duration: 0.2, opacity: 0 })
                    .to(u, { duration: 0.2, opacity: 1, ease: "power1.out" })
                    .to(u, { duration: 0.7, opacity: 1 })
                    .to(u, { duration: 0.1, opacity: 0, ease: "power1.in" }),
                  J.fromTo(
                    f,
                    { transform: "translate3d(0, 35rem, 0) scale(1.2)", opacity: 0 },
                    { duration: 1.07, ease: "power2.inOut", transform: "translate3d(15rem, 35rem, 0) scale(1.2)", opacity: 1, repeat: -1, repeatDelay: 0.93, delay: 0.5 }
                  ),
                  J.timeline({ repeat: -1, repeatDelay: 0.8, delay: 0.6 })
                    .fromTo(f, { opacity: 0 }, { duration: 0.4, opacity: 1, ease: "power1.out" })
                    .to(f, { duration: 0.45, opacity: 1 })
                    .to(f, { duration: 0.35, opacity: 0, ease: "power1.in" }),
                  !A.value)
              ) {
                const E = document.querySelector(".svg__scroll-zoom .bar__indicator"),
                  Q = document.querySelector(".svg__scroll-zoom .hand");
                J.to(E, { transform: "translate3d(0, 300%, 0)", duration: 1, ease: "power3.inOut", repeat: -1, yoyo: !0 }),
                  J.to(Q, { transform: "translate3d(200%, 300%, 0)", duration: 1, ease: "power3.inOut", repeat: -1, yoyo: !0 });
              }
              if (A.value) {
                const E = document.querySelector(".svg__pinch .hand"),
                  Q = document.querySelector(".svg__pinch .hand__svg path"),
                  x = document.querySelector(".svg__pinch .left__dot"),
                  w = document.querySelector(".svg__pinch .left__pulse"),
                  D = document.querySelector(".svg__pinch .left__rect"),
                  L = document.querySelector(".svg__pinch .right__dot"),
                  k = document.querySelector(".svg__pinch .right__pulse"),
                  b = document.querySelector(".svg__pinch .right__rect"),
                  U =
                    "M8.74565 2.34289L3.08636 9.69997C2.78594 10.0905 2.51366 10.5019 2.27158 10.9311C1.74568 11.8633 1.41117 12.898 1.28925 13.9614C1.10061 15.6068 1.35365 17.2827 2.02439 18.797L2.08566 18.9353C2.5106 19.8946 3.23802 20.6884 4.15671 21.1953C5.4855 21.9284 6.97837 22.3129 8.49598 22.3129H9.72967H15.0571C16.033 22.3129 16.8242 21.5218 16.8242 20.5459C16.8242 19.57 16.033 18.7788 15.0571 18.7788H13.9758V18.6206H16.8342C17.79 18.6206 18.5648 17.8457 18.5648 16.8899C18.5648 15.9263 17.7778 15.1483 16.8143 15.1594L13.9758 15.192V15.0338H16.7451C17.7501 15.0338 18.5648 14.219 18.5648 13.214C18.5648 12.209 17.7501 11.3942 16.7451 11.3942H13.9758V11.2887H19.4879H23.2066C24.1971 11.2887 25 10.4858 25 9.49531C25 8.50484 24.1971 7.70191 23.2066 7.70191H17.5363H10.0725L11.8298 4.3046C12.1969 3.59488 12.0624 2.72919 11.4974 2.16419C10.7142 1.38099 9.42097 1.46498 8.74565 2.34289Z",
                  R =
                    "M10.0933 1.59559L3.40373 8.28513C2.88851 8.80036 2.4458 9.38331 2.0878 10.0179C1.68168 10.7379 1.42393 11.5319 1.32978 12.3531L1.28672 12.7287C1.09898 14.3662 1.35194 16.0241 2.01946 17.531L2.08044 17.6687C2.50333 18.6234 3.22725 19.4134 4.14152 19.9178C5.46392 20.6474 6.9496 21.0301 8.45991 21.0301H9.68766H14.9895C15.9607 21.0301 16.748 20.2428 16.748 19.2715C16.748 18.3003 15.9607 17.513 14.9895 17.513H13.9134V17.3555H16.758C17.7092 17.3555 18.4803 16.5844 18.4803 15.6332C18.4803 14.6742 17.6971 13.9 16.7382 13.911L13.9134 13.9435V13.786H16.6693C17.6695 13.786 18.4803 12.9752 18.4803 11.975C18.4803 10.9748 17.6695 10.1639 16.6693 10.1639H13.9134V10.0589L16.2493 9.21905L19.9553 5.12402C20.5595 4.45648 20.5969 3.45148 20.0442 2.7408C19.3739 1.87897 18.1078 1.77974 17.3114 2.52661L13.3097 6.27941L8.66404 8.58913L12.6701 4.00484C13.2812 3.30553 13.2458 2.25228 12.5891 1.59559C11.8999 0.906376 10.7825 0.906376 10.0933 1.59559Z",
                  y = J.timeline({ repeat: -1, repeatDelay: 1.5 });
                y.to(Q, { duration: 0.25, ease: "power3.inOut", morphSVG: { shape: R } }), y.to(Q, { duration: 0.25, ease: "power3.inOut", morphSVG: { shape: U } });
                const N = J.timeline({ repeat: -1, repeatDelay: 1.5 });
                N.to(E, { duration: 0.25, ease: "power3.inOut", transform: "translateX(-70%) rotate(-25deg)" }),
                  N.to(E, { duration: 0.25, ease: "power3.inOut", transform: "translateX(-50%) rotate(5deg)" }),
                  J.set([L, x], { transformOrigin: "center center" }),
                  J.fromTo([L, x], { scale: 0 }, { scale: 1, ease: "power3.inOut", duration: 0.5, repeat: -1, repeatDelay: 1.5 }),
                  J.fromTo([L, x], { opacity: 1 }, { opacity: 0, ease: "power3.inOut", duration: 1, repeat: -1, delay: 1, clearProps: "opacity", repeatDelay: 1 }),
                  J.fromTo([k, w], { r: 0 }, { r: 16, ease: "power3.inOut", duration: 1, repeat: -1, delay: 0.5, repeatDelay: 1 }),
                  J.fromTo([k, w], { fillOpacity: 0.5 }, { fillOpacity: 0, ease: "power3.inOut", duration: 1.2, repeat: -1, delay: 0.5, repeatDelay: 0.8 });
                const v = J.timeline({ repeat: -1, repeatDelay: 0.7 });
                v.set(b, { width: 0, transformOrigin: "right center" }), v.to(b, { width: 76, duration: 1, ease: "power3.inOut" }, 0), v.to(b, { scaleX: 0, duration: 0.8, ease: "power3.inOut" }, 0.5);
                const T = J.timeline({ repeat: -1, repeatDelay: 0.7 });
                T.set(D, { width: 0, transformOrigin: "right center" }), T.to(D, { width: 76, duration: 1, ease: "power3.inOut" }, 0), T.to(D, { scaleX: 0, duration: 0.8, ease: "power3.inOut" }, 0.5);
              }
            });
        }),
        je(() => {
          c == null || c.kill();
        }),
        (a, l) => {
          const u = ps,
            f = yA;
          return (
            S(),
            F(
              "div",
              { ref_key: "el", ref: i, class: "absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-main opacity-0 select-none js-map-help" },
              [
                p("div", fa, [
                  p("div", { innerHTML: wa, class: "absolute top-63 s:w-170 text-38 font-disp flex flex-col items-center justify-center z-2 leading-[1] text-center tracking-[0.03em] rtl:s:w-260" }),
                  p("div", Ia, [
                    p("div", Ca, [
                      Y(u, null, {
                        default: X(() => [
                          l[2] ||
                          (l[2] = p(
                            "div",
                            { class: "fade flex items-center justify-center" },
                            [
                              p("div", { class: "svg_explore flex items-center justify-center" }, [
                                p("div", { class: "svg__rings-wrapper w-20" }, [
                                  p("svg", { class: "svg__rings", viewbox: "0 0 800 500", width: "200", height: "200" }, [
                                    p("defs", null, [
                                      p("linearGradient", { id: "fade-gradient", x1: "0", y1: "0", x2: "0", y2: "1" }, [
                                        p("stop", { offset: "0%", "stop-color": "var(--color-white)", "stop-opacity": "1" }),
                                        p("stop", { offset: "86%", "stop-color": "var(--color-white)", "stop-opacity": "1" }),
                                        p("stop", { offset: "100%", "stop-color": "var(--color-white)", "stop-opacity": "0" }),
                                      ]),
                                    ]),
                                    p("g", null, [
                                      p("ellipse", { class: "ellipse", cx: "50%", cy: "50%", rx: "30%", ry: "12%" }),
                                      p("ellipse", { class: "ellipse ellipse-tail", cx: "50%", cy: "50%", rx: "30%", ry: "12%" }),
                                      p("ellipse", { class: "ellipse ellipse-dashed", cx: "50%", cy: "50%", rx: "30%", ry: "12%" }),
                                      p("ellipse", { class: "ellipse ellipse-head", cx: "50%", cy: "50%", rx: "30%", ry: "12%" }),
                                    ]),
                                    p("rect", { fill: "url(#fade-gradient)", x: "0", y: "0", width: "100%", height: "53%" }),
                                  ]),
                                ]),
                                p("div", { class: "svg__glove-wrapper" }, [
                                  p("svg", { class: "svg__glove", width: "21", height: "32", viewBox: "0 0 21 32", fill: "none" }, [
                                    p("path", {
                                      d:
                                        "M10.7262 0.443165C9.32754 0.0683984 7.87467 0.907216 7.4999 2.30587L4.90854 11.9769C3.39004 11.8973 1.95506 12.8215 1.54643 14.3466L0.864629 16.891C0.439215 18.4787 0.895172 20.2942 1.54257 21.9944C2.14747 23.583 2.94027 25.031 3.52359 26.0514L3.07883 27.7113C2.98961 28.0443 3.21144 28.4286 3.5445 28.5178L14.3586 31.4155C14.6917 31.5047 15.0759 31.2829 15.1652 30.9498L16.0441 27.6698C17.8134 26.5611 19.1944 24.8183 19.7779 22.6406L20.8858 18.5058C21.2606 17.1072 20.4218 15.6543 19.0231 15.2795C18.533 15.1482 18.054 15.2069 17.5993 15.3454C17.8296 14.0211 17.0397 12.7027 15.7177 12.3485C15.2276 12.2171 14.7486 12.2758 14.2939 12.4144C14.5242 11.09 13.7343 9.77164 12.4123 9.41741C11.9399 9.29082 11.4774 9.33901 11.0362 9.46415L12.5889 3.66946C12.9637 2.27081 12.1248 0.817931 10.7262 0.443165ZM10.3853 1.71541C11.1011 1.90722 11.5084 2.61273 11.3166 3.32856L9.18603 11.2801C9.0919 11.6314 9.30039 11.9925 9.65171 12.0867C10.003 12.1808 10.3641 11.9723 10.4583 11.621C10.6501 10.9052 11.3556 10.4979 12.0714 10.6897C12.7873 10.8815 13.1946 11.587 13.0028 12.3028L12.4914 14.2112C12.3973 14.5625 12.6058 14.9236 12.9571 15.0177C13.3084 15.1119 13.6695 14.9034 13.7637 14.5521C13.9555 13.8362 14.661 13.4289 15.3768 13.6207C16.0927 13.8125 16.5 14.518 16.3082 15.2339L15.7968 17.1422C15.7027 17.4936 15.9112 17.8547 16.2625 17.9488C16.6138 18.043 16.9749 17.8345 17.0691 17.4831C17.2609 16.7673 17.9664 16.36 18.6822 16.5518C19.398 16.7436 19.8054 17.4491 19.6136 18.1649L18.5057 22.2997C17.9846 24.2444 16.7443 25.7784 15.1418 26.7036C14.9894 26.7904 14.8745 26.9405 14.8304 27.1102L14.0634 29.9728L4.52152 27.416L4.86242 26.1438C4.9091 25.9748 4.8846 25.7873 4.79608 25.636C4.22063 24.6393 3.37921 23.11 2.77602 21.5259C2.17284 19.9418 1.84682 18.3144 2.13688 17.2319L2.81867 14.6874C3.04496 13.8429 3.75634 13.2859 4.57297 13.2293L3.57957 16.9367C3.48477 17.2715 3.70648 17.6632 4.04259 17.7532C4.37869 17.8433 4.76652 17.615 4.85182 17.2776L8.77215 2.64676C8.96395 1.93094 9.66946 1.52361 10.3853 1.71541Z",
                                      fill: "var(--color-main)",
                                    }),
                                  ]),
                                ]),
                              ]),
                            ],
                            -1
                          )),
                          p("div", pa, [
                            m(A)
                              ? (S(),
                                F(
                                  "div",
                                  Ea,
                                  l[1] ||
                                  (l[1] = [
                                    p(
                                      "svg",
                                      { width: "184", height: "33", viewBox: "0 0 184 33", fill: "none" },
                                      [
                                        p("rect", { class: "right__rect", x: "92", y: "16.2", width: "79", height: "1", rx: "1", fill: "#2a8bad" }),
                                        p("g", { class: "left__rect-wrap" }, [p("rect", { class: "left__rect", x: "8", y: "16.2", width: "79", height: "1", rx: "1", fill: "#2a8bad" })]),
                                        p("path", { class: "dashed__path", d: "M18 16.6914L173.5 16.6914" }),
                                        p("circle", { class: "left__pulse", cx: "16.5", cy: "16.6914", r: "16" }),
                                        p("circle", { class: "left__dot", cx: "16.5", cy: "16.6914", r: "3" }),
                                        p("circle", { class: "right__pulse", cx: "167.5", cy: "16.6914", r: "16" }),
                                        p("circle", { class: "right__dot", cx: "167.5", cy: "16.6914", r: "3" }),
                                        p("path", {
                                          class: "left__bar",
                                          d: "M19.002 16.1914H70.502C70.7781 16.1914 71.002 16.4153 71.002 16.6914C71.002 16.9675 70.7781 17.1914 70.502 17.1914H19.002V16.1914Z",
                                        }),
                                        p("path", {
                                          class: "right__bar",
                                          d: "M113.016 16.6914C113.016 16.4153 113.239 16.1914 113.516 16.1914H165.016V17.1914H113.516C113.239 17.1914 113.016 16.9675 113.016 16.6914Z",
                                        }),
                                      ],
                                      -1
                                    ),
                                    p(
                                      "div",
                                      { class: "hand" },
                                      [
                                        p("svg", { class: "hand__svg", width: "100%", height: "100%", viewBox: "0 0 26 26", fill: "none" }, [
                                          p("path", {
                                            d:
                                              "M8.74565 2.34289L3.08636 9.69997C2.78594 10.0905 2.51366 10.5019 2.27158 10.9311C1.74568 11.8633 1.41117 12.898 1.28925 13.9614C1.10061 15.6068 1.35365 17.2827 2.02439 18.797L2.08566 18.9353C2.5106 19.8946 3.23802 20.6884 4.15671 21.1953C5.4855 21.9284 6.97837 22.3129 8.49598 22.3129H9.72967H15.0571C16.033 22.3129 16.8242 21.5218 16.8242 20.5459C16.8242 19.57 16.033 18.7788 15.0571 18.7788H13.9758V18.6206H16.8342C17.79 18.6206 18.5648 17.8457 18.5648 16.8899C18.5648 15.9263 17.7778 15.1483 16.8143 15.1594L13.9758 15.192V15.0338H16.7451C17.7501 15.0338 18.5648 14.219 18.5648 13.214C18.5648 12.209 17.7501 11.3942 16.7451 11.3942H13.9758V11.2887H19.4879H23.2066C24.1971 11.2887 25 10.4858 25 9.49531C25 8.50484 24.1971 7.70191 23.2066 7.70191H17.5363H10.0725L11.8298 4.3046C12.1969 3.59488 12.0624 2.72919 11.4974 2.16419C10.7142 1.38099 9.42097 1.46498 8.74565 2.34289Z",
                                            stroke: "#2a8bad",
                                            "stroke-width": "1.4",
                                          }),
                                        ]),
                                      ],
                                      -1
                                    ),
                                  ])
                                ))
                              : (S(),
                                F(
                                  "div",
                                  Ba,
                                  l[0] ||
                                  (l[0] = [
                                    p("div", { class: "bar bg-[#2a8bad]/50" }, [p("span", { class: "bar__indicator" })], -1),
                                    p(
                                      "div",
                                      { class: "hand" },
                                      [
                                        p("svg", { class: "hand__svg", width: "100%", height: "100%", viewBox: "0 0 28 33", fill: "none" }, [
                                          p("path", {
                                            d:
                                              "M18.6123 32.7002L18.1338 32.7119C18.3966 32.7119 18.6567 32.6983 18.914 32.6777C18.8138 32.6858 18.7134 32.6953 18.6123 32.7002ZM10.0654 0.400391C11.7657 0.400533 13.1699 1.80459 13.1699 3.50488V8.96484L13.2002 8.95313V11.3779C13.1809 11.4765 13.1699 11.5783 13.1699 11.6826V15.9561H11.6338V3.50488C11.6338 2.63602 10.9342 1.93666 10.0654 1.93652C9.19645 1.93652 8.49704 2.63593 8.49704 3.50488V21.9619L4.14157 17.6064C3.83189 17.2968 3.46431 17.0997 3.05563 17.0996C2.69782 17.0996 2.37136 17.2506 2.08786 17.4961L1.9697 17.6064C1.66003 17.9161 1.462 18.2837 1.46188 18.6924C1.4619 19.1011 1.65998 19.4686 1.9697 19.7783L1.97067 19.7803L11.4267 29.127L11.4463 29.1455L11.4677 29.1621C12.7521 30.1265 14.3135 30.7754 16.1259 30.7754H18.1338C22.4026 30.7754 25.7626 27.4153 25.7627 23.1465V14.0195C25.7627 13.1506 25.0632 12.4512 24.1943 12.4512C23.3254 12.4512 22.626 13.1506 22.6259 14.0195V15.9561H20.9795V11.6826C20.9793 10.8138 20.2799 10.1143 19.4111 10.1143C18.5425 10.1145 17.8439 10.814 17.8437 11.6826V15.9561H16.4004V9.07617C16.5439 9.16926 16.68 9.27322 16.8066 9.3877L17.0752 9.62988L17.3437 9.3877C17.8964 8.88793 18.6234 8.57824 19.4111 8.57813C20.8494 8.57815 22.0785 9.59188 22.4189 10.9414L22.5351 11.4023L22.9697 11.208C23.3671 11.0304 23.7714 10.915 24.1943 10.915C25.8946 10.9151 27.2988 12.3192 27.2988 14.0195V23.1465C27.2988 28.2239 23.2112 32.3125 18.1338 32.3125H16.1259C13.9969 32.3125 12.0991 31.5792 10.5976 30.4736L10.5459 30.3701L10.4267 30.3096L10.4101 30.3008L1.00974 21.0078V20.9736L0.892548 20.8564C-0.297519 19.6664 -0.297513 17.7194 0.892548 16.5293C2.08262 15.3395 4.02874 15.3394 5.21872 16.5293L5.22849 16.5391L5.23825 16.5479L5.51169 16.7861L6.27048 17.582L6.95993 18.3037V3.50488C6.95993 1.8045 8.36502 0.400391 10.0654 0.400391ZM18.8593 30.3408L18.5107 30.3662C18.6297 30.3603 18.7479 30.3512 18.8652 30.3398C18.8632 30.34 18.8613 30.3406 18.8593 30.3408ZM12.0205 29.0654C11.9893 29.0441 11.9576 29.0237 11.9267 29.002L11.708 28.8428C11.8102 28.9195 11.9147 28.9932 12.0205 29.0654ZM27.6504 24.127C27.6435 24.1953 27.6323 24.2631 27.624 24.3311C27.6329 24.2583 27.6441 24.1856 27.6513 24.1123L27.6504 24.127ZM2.1611 19.3975L2.25192 19.4961C2.22063 19.4648 2.19156 19.433 2.16403 19.4014L2.1611 19.3975ZM2.35056 17.7979L2.25192 17.8896C2.31702 17.8245 2.38283 17.7676 2.44919 17.7188L2.35056 17.7979ZM3.5527 15.2725C3.66254 15.2882 3.77168 15.3097 3.87985 15.3359C3.82577 15.3228 3.77132 15.3113 3.71677 15.3008L3.5527 15.2725ZM2.33786 15.3125C2.35648 15.3086 2.37485 15.3034 2.39352 15.2998L2.55856 15.2725C2.4846 15.2831 2.41112 15.2971 2.33786 15.3125ZM18.8535 10.6553L18.956 10.6064C18.9609 10.6044 18.9658 10.6026 18.9707 10.6006C18.9305 10.6169 18.8913 10.6348 18.8535 10.6553ZM17.3174 8.89063L17.0752 9.09082C17.1526 9.02081 17.233 8.95383 17.3164 8.89063L17.5761 8.71094C17.487 8.76689 17.401 8.8273 17.3174 8.89063ZM8.91306 3.3125C8.91545 3.29782 8.91694 3.28304 8.91989 3.26855L8.94919 3.15625C8.93353 3.20687 8.9219 3.25912 8.91306 3.3125ZM6.70798 2.50781C6.71196 2.49458 6.71458 2.48094 6.71872 2.46777L6.77438 2.30566C6.74987 2.37204 6.72845 2.43967 6.70798 2.50781ZM7.3652 1.28125L7.47653 1.1543C7.48103 1.14936 7.48568 1.14457 7.4902 1.13965C7.44763 1.18604 7.40534 1.23271 7.3652 1.28125ZM7.67184 0.956055C7.68609 0.942647 7.69937 0.928203 7.71384 0.915039L7.84177 0.804688C7.78327 0.853057 7.72697 0.903944 7.67184 0.956055ZM8.25485 0.510742L8.11227 0.602539C8.1588 0.57099 8.20583 0.540085 8.25388 0.510742L8.40134 0.425781C8.35175 0.452875 8.30299 0.481359 8.25485 0.510742ZM9.88669 0.00488281L9.70895 0.0185547C9.82617 0.00647083 9.94524 -3.4591e-09 10.0654 0C10.0055 -1.72442e-09 9.9459 0.00184166 9.88669 0.00488281Z",
                                            fill: "var(--color-main)",
                                          }),
                                          p("path", {
                                            d:
                                              "M14.7295 0.300781C16.4416 0.300781 17.8301 1.68929 17.8301 3.40137V11.3008H16.3398V3.57031C16.3398 2.70333 15.6375 2.00017 14.7705 2C13.9034 2 13.2002 2.70323 13.2002 3.57031V11.3008H11.6299V3.40137C11.6299 1.68942 13.0176 0.300992 14.7295 0.300781Z",
                                            fill: "var(--color-main)",
                                          }),
                                        ]),
                                      ],
                                      -1
                                    ),
                                  ])
                                )),
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                  ]),
                  p("div", ma, [p("p", Qa, W(m(o)), 1), p("p", ya, W(m(s)), 1)]),
                  Y(f, { onClickOnce: g, type: "button", label: "Continue", backgroundAlt: "", dark: "", class: "pointer-events-auto mt-30 s:mt-50 z-2" }),
                ]),
              ],
              512
            )
          );
        }
      );
    },
  },
  va = QA(xa, [["__scopeId", "data-v-455825aa"]]),
  _a = { class: "zoom-root absolute top-1/2 left-32 l:left-48 -translate-y-1/2 pointer-events-auto text-main" },
  Sa = {
    __name: "index",
    setup(d) {
      const { dynamicValues: e } = Ae("map"),
        t = te(!0),
        n = te(!1),
        A = (s) => {
          (e.zoom.static += 0.33 * s), (e.zoom.static = ht(e.zoom.static, 0, 1));
        },
        o = () => {
          e.frames % 20 === 0 && ((t.value = e.zoom.static < 0.99), (n.value = e.zoom.static > 0.01));
        };
      return (
        _e(ge.WEBGL_TICK_BEFORE, o),
        (s, i) => (
          S(),
          F("div", _a, [
            p(
              "button",
              {
                type: "button",
                class: Qe([
                  "relative h-40 w-40 bg-white rounded-full flex items-center justify-center mb-10 transition-colors duration-500 ease-out group has-hover:hover:text-white after:absolute after:inset-0 after:bg-highlight after:rounded-full after:scale-0 after:transition-transform after:duration-700 after:ease-out-expo has-hover:hover:after:scale-100 js-zoom-btn",
                  { "is-active": m(t) },
                ]),
                "aria-label": "Zoom in",
                onClick: i[0] || (i[0] = () => A(1)),
              },
              i[2] ||
              (i[2] = [
                p(
                  "svg",
                  { class: "relative h-11 w-auto z-2", viewBox: "0 0 11 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                  [p("path", { class: "fill-current", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.36523 0H4.86523V4.86548H0V6.36548H4.86523V11H6.36523V6.36548H11V4.86548H6.36523V0Z" })],
                  -1
                ),
              ]),
              2
            ),
            p(
              "button",
              {
                type: "button",
                class: Qe([
                  "relative h-40 w-40 bg-white rounded-full flex items-center justify-center mb-10 transition-colors duration-500 ease-out group has-hover:hover:text-white after:absolute after:inset-0 after:bg-highlight after:rounded-full after:scale-0 after:transition-transform after:duration-700 after:ease-out-expo has-hover:hover:after:scale-100 js-zoom-btn",
                  { "is-active": m(n) },
                ]),
                "aria-label": "Zoom out",
                onClick: i[1] || (i[1] = () => A(-1)),
              },
              i[3] || (i[3] = [p("svg", { class: "relative h-2 w-auto z-2", viewBox: "0 0 11 2", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [p("path", { class: "fill-current", d: "M11 0V1.5H0V0H11Z" })], -1)]),
              2
            ),
          ])
        )
      );
    },
  },
  Da = { class: "flex relative z-1 w-full max-w-[28.5rem] s:max-w-[32.5rem] mx-auto js-slides" },
  La = ["data-key"],
  Ra = { class: "flex-1 flex flex-col justify-between py-16 px-16 s:py-18 s:px-18" },
  Ta = { class: "text-16 s:text-18 !font-sans text-highlight tracking-[-.05em] leading-[1.2] pr-30 max-l:!capitalize" },
  ba = { key: 0, class: "max-s:text-12 text-highlight opacity-70 mt-8 s:mt-12" },
  Fa = { class: "flex" },
  Ma = { key: 0, class: "mx-5 s:mx-10" },
  ka = { key: 1, class: "max-s:text-12 text-highlight opacity-70 mt-8 s:mt-12" },
  Ga = { class: "flex p-2 s:p-3" },
  Na = {
    __name: "index",
    setup(d) {
      const { $event: e } = ze(),
        t = Pe(),
        { setCurrentSidebar: n, setSelectedAmenity: A, setSelectedProperty: o, setCurrentMeshKeyFocus: s } = Ae("map"),
        { currentType: i, currentFocusArea: r } = Ce("map"),
        c = q(() => (r.value === "main" ? t.amenities.filter((h) => !h.notMain) : t.amenities.filter((h) => h.notMain || h.slug === "dune-deck"))),
        g = q(() => (r.value === "main" ? t.listings.filter((h) => !h.notMain) : t.listings.filter((h) => h.notMain))),
        a = q(() => (i.value === "amenities" ? c.value : g.value)),
        l = (h) => {
          i.value === "amenities" ? A(h) : o(h);
        },
        u = (h = 0) => {
          s({ meshKey: a.value[h].meshKey, isHighlighted: !0 });
        },
        f = () => {
          n(null);
        };
      return (
        he(async () => {
          await Ve(), u(), e.on("carousel:snap", u), e.on("slide:click", l);
        }),
        to(() => {
          e.off("carousel:snap", u), e.off("slide:click", l);
        }),
        (h, C) => {
          const I = Wn;
          return (
            S(),
            ne(
              I,
              { ref: "carousel", toggle: !0, class: "site-max absolute bottom-90 s:bottom-130 left-0 w-full pointer-events-auto z-4" },
              {
                default: X(() => [
                  p(
                    "button",
                    { ref: "close", type: "button", "aria-label": "Close", class: "l:hidden rounded-full bg-white text-highlight absolute -top-50 s:-top-70 right-1/2 translate-x-1/2 z-2", onClick: f },
                    C[0] ||
                    (C[0] = [
                      p(
                        "svg",
                        { class: "relative z-2 size-40 s:size-50 l:size-40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        [
                          p("path", { d: "M15.3532 14.5557L25.2527 24.4552L24.2628 25.4452L14.3633 15.5457L15.3532 14.5557Z", class: "fill-current" }),
                          p("path", { d: "M25.2528 15.5456L15.3533 25.4451L14.3633 24.4552L24.2628 14.5557L25.2528 15.5456Z", class: "fill-current" }),
                        ],
                        -1
                      ),
                    ]),
                    512
                  ),
                  p("div", Da, [
                    (S(!0),
                      F(
                        ke,
                        null,
                        He(m(a), (B) => {
                          var E, Q;
                          return (
                            S(),
                            F(
                              "article",
                              { key: B.id, class: "flex relative media-fill min-h-[14.4rem] s:min-h-[16rem] min-w-[100%] max-w-[100%] bg-white rounded-[.6rem] mr-15 s:mr-25 js-slide", "data-key": B.meshKey },
                              [
                                p("div", Ra, [
                                  p("h3", Ta, W(B.title), 1),
                                  (B.bedrooms || B.bathrooms || B.area,
                                    S(),
                                    F("p", ba, [p("span", Fa, [ot(W(B.bedrooms) + " ", 1), B.bathrooms ? (S(), F("span", Ma, "/")) : V("", !0), ot(" " + W(B.bathrooms), 1)]), ot(" " + W(B.area), 1)])),
                                  B.location ? (S(), F("p", ka, W(B.location), 1)) : V("", !0),
                                  C[1] ||
                                  (C[1] = p(
                                    "svg",
                                    { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "rtl:rotate-180 mt-auto text-highlight" },
                                    [
                                      p("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M13.1636 7.99999L8.36572 3.0681L9.18393 2.22705L14.8 7.99999L9.18393 13.7729L8.36572 12.9319L13.1636 7.99999Z",
                                        fill: "currentColor",
                                      }),
                                      p("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.675293 7.40527H13.9821V8.5947H0.675293V7.40527Z", fill: "currentColor" }),
                                    ],
                                    -1
                                  )),
                                ]),
                                p("div", Ga, [
                                  Y(
                                    pt,
                                    {
                                      image: ((E = B.featuredImage) == null ? void 0 : E.thumbnail) || ((Q = B.thumbnail) == null ? void 0 : Q.thumbnail) || "",
                                      class: "min-w-[10rem] max-w-[10rem] s:min-w-[11rem] s:max-w-[11rem] relative media-fill rounded-[.4rem] s:rounded-[.2rem] radius-fix",
                                    },
                                    { default: X(() => C[2] || (C[2] = [p("div", { class: "pt-[90%]" }, null, -1)])), _: 2 },
                                    1032,
                                    ["image"]
                                  ),
                                ]),
                              ],
                              8,
                              La
                            )
                          );
                        }),
                        128
                      )),
                  ]),
                ]),
                _: 1,
              },
              512
            )
          );
        }
      );
    },
  },
  Ua = { class: "fixed bottom-26 s:bottom-32 l:bottom-48 right-68 s:right-auto s:left-32 l:left-48" },
  Ha = { key: 0, class: "absolute bottom-[calc(100%+2.5rem)] -right-[2.5rem] s:right-auto s:left-0 flex flex-col text-highlight bg-white rounded-[.4rem] py-25 px-20 max-s:w-[calc(100vw-4.3rem*2)] s:min-w-[28.5rem] pointer-events-auto" },
  Ka = { class: "flex flex-col" },
  Pa = { class: "flex items-center gap-x-15 mt-15" },
  Oa = { class: "flex items-center gap-x-15 mt-15" },
  bt = "The Hills",
  Ft = "Dune Deck",
  qa = {
    __name: "index",
    emits: ["toggled"],
    setup(d, { emit: e }) {
      const { currentFocusArea: t, currentSidebar: n } = Ce("map"),
        { setCurrentFocusArea: A } = Ae("map"),
        o = Ae("map"),
        { setCurrentSidebar: s } = o,
        i = te(!1),
        r = te(t.value === "main" ? bt : Ft),
        c = te(t.value === "main" ? Ft : bt),
        g = () => {
          !i.value && n.value !== null && n.value && s(null), (i.value = !i.value), C("toggled", !i.value);
        },
        a = () => {
          A(t.value === "main" ? "residence" : "main"), (i.value = !1);
        },
        l = () => {
          const I = t.value === "main";
          (r.value = I ? bt : Ft), (c.value = I ? Ft : bt);
        },
        u = { alpha: 0, y: "-1.5rem", duration: 0.75, ease: "unmask" },
        f = (I, B) => {
          B(), J.from(I, { ...u });
        },
        h = (I, B) => {
          J.to(I, {
            ...u,
            onComplete: () => {
              B(), l();
            },
          });
        },
        C = e;
      return (
        me(n, (I, B) => {
          I !== B && i.value && ((i.value = !i.value), C("toggled", !i.value));
        }),
        he(() => {
          C("toggled", !0);
        }),
        (I, B) => (
          S(),
          F("div", Ua, [
            Y(
              fe,
              { css: !1, onEnter: f, onLeave: h },
              {
                default: X(() => [
                  m(i)
                    ? (S(),
                      F("div", Ha, [
                        p(
                          "button",
                          { ref: "close", type: "button", "aria-label": "Close", class: "s:hidden rounded-full bg-white text-highlight absolute -top-50 s:-top-70 right-1/2 translate-x-1/2 z-2", onClick: g },
                          B[1] ||
                          (B[1] = [
                            p(
                              "svg",
                              { class: "relative z-2 size-40 s:size-50 l:size-40", viewBox: "0 0 44 44", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                              [
                                p("path", { d: "M15.707 15L29.1421 28.435L28.435 29.1421L14.9999 15.7071L15.707 15Z", class: "fill-current" }),
                                p("path", { d: "M15 28.4351L28.435 15L29.1421 15.7071L15.7071 29.1422L15 28.4351Z", class: "fill-current" }),
                              ],
                              -1
                            ),
                          ]),
                          512
                        ),
                        p("div", Ka, [
                          B[3] || (B[3] = p("div", { class: "eyebrow !text-10" }, "You are here", -1)),
                          p("div", Pa, [
                            B[2] ||
                            (B[2] = p(
                              "svg",
                              { class: "h-15 w-auto", viewBox: "0 0 12 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                              [
                                p("path", {
                                  d:
                                    "M0.957501 9.25473L0.987501 9.2981C1.02417 9.35314 1.0625 9.4065 1.10083 9.46488L5.44417 15.7091C5.50665 15.7989 5.58991 15.8722 5.68683 15.9229C5.78376 15.9735 5.89149 16 6.00083 16C6.11018 16 6.21791 15.9735 6.31483 15.9229C6.41176 15.8722 6.49501 15.7989 6.5575 15.7091L10.8908 9.46988C10.9325 9.41151 10.9725 9.3548 11.0125 9.3031L11.0392 9.26307C11.6247 8.35646 11.9552 7.30864 11.9958 6.22993C12.0363 5.15121 11.7855 4.0815 11.2698 3.1334C10.754 2.18529 9.99232 1.39388 9.06493 0.842453C8.13755 0.29103 7.07875 0 6 0C4.92125 0 3.86245 0.29103 2.93506 0.842453C2.00768 1.39388 1.24601 2.18529 0.730236 3.1334C0.214463 4.0815 -0.0363334 5.15121 0.0042479 6.22993C0.0448292 7.30864 0.375287 8.35646 0.960834 9.26307L0.957501 9.25473ZM6.00083 3.50585C6.49529 3.50585 6.97864 3.65257 7.38976 3.92746C7.80088 4.20235 8.12131 4.59306 8.31053 5.05018C8.49975 5.50731 8.54926 6.01031 8.4528 6.49559C8.35633 6.98088 8.11823 7.42663 7.7686 7.7765C7.41897 8.12637 6.97351 8.36463 6.48856 8.46116C6.00361 8.55769 5.50094 8.50815 5.04412 8.3188C4.58731 8.12945 4.19686 7.80881 3.92216 7.3974C3.64746 6.986 3.50083 6.50233 3.50083 6.00754C3.50083 5.34405 3.76423 4.70773 4.23307 4.23857C4.70191 3.76942 5.33779 3.50585 6.00083 3.50585Z",
                                  fill: "#2A8BAD",
                                }),
                              ],
                              -1
                            )),
                            p("span", null, W(m(r)), 1),
                          ]),
                        ]),
                        B[7] || (B[7] = p("hr", { class: "border-highlight opacity-20 my-20" }, null, -1)),
                        p("button", { type: "button", onClick: B[0] || (B[0] = () => a()), class: "flex flex-col text-left" }, [
                          B[6] || (B[6] = p("div", { class: "eyebrow !text-10" }, "Go to", -1)),
                          p("div", Oa, [
                            B[4] ||
                            (B[4] = p(
                              "svg",
                              { class: "h-15 w-auto", viewBox: "0 0 12 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                              [
                                p("path", {
                                  d:
                                    "M0.957501 9.25473L0.987501 9.2981C1.02417 9.35314 1.0625 9.4065 1.10083 9.46488L5.44417 15.7091C5.50665 15.7989 5.58991 15.8722 5.68683 15.9229C5.78376 15.9735 5.89149 16 6.00083 16C6.11018 16 6.21791 15.9735 6.31483 15.9229C6.41176 15.8722 6.49501 15.7989 6.5575 15.7091L10.8908 9.46988C10.9325 9.41151 10.9725 9.3548 11.0125 9.3031L11.0392 9.26307C11.6247 8.35646 11.9552 7.30864 11.9958 6.22993C12.0363 5.15121 11.7855 4.0815 11.2698 3.1334C10.754 2.18529 9.99232 1.39388 9.06493 0.842453C8.13755 0.29103 7.07875 0 6 0C4.92125 0 3.86245 0.29103 2.93506 0.842453C2.00768 1.39388 1.24601 2.18529 0.730236 3.1334C0.214463 4.0815 -0.0363334 5.15121 0.0042479 6.22993C0.0448292 7.30864 0.375287 8.35646 0.960834 9.26307L0.957501 9.25473ZM6.00083 3.50585C6.49529 3.50585 6.97864 3.65257 7.38976 3.92746C7.80088 4.20235 8.12131 4.59306 8.31053 5.05018C8.49975 5.50731 8.54926 6.01031 8.4528 6.49559C8.35633 6.98088 8.11823 7.42663 7.7686 7.7765C7.41897 8.12637 6.97351 8.36463 6.48856 8.46116C6.00361 8.55769 5.50094 8.50815 5.04412 8.3188C4.58731 8.12945 4.19686 7.80881 3.92216 7.3974C3.64746 6.986 3.50083 6.50233 3.50083 6.00754C3.50083 5.34405 3.76423 4.70773 4.23307 4.23857C4.70191 3.76942 5.33779 3.50585 6.00083 3.50585Z",
                                  fill: "#2A8BAD",
                                }),
                              ],
                              -1
                            )),
                            p("span", null, W(m(c)), 1),
                            B[5] ||
                            (B[5] = p(
                              "span",
                              { class: "ml-auto w-12 h-10" },
                              [
                                p("svg", { viewBox: "0 0 12 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [
                                  p("path", {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M10.4995 4.85355L6.4657 0.707107L7.1536 0L11.8753 4.85355L7.1536 9.70711L6.4657 9L10.4995 4.85355Z",
                                    fill: "#2A8BAD",
                                  }),
                                  p("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0 4.35352H11.1876V5.35352H0V4.35352Z", fill: "#2A8BAD" }),
                                ]),
                              ],
                              -1
                            )),
                          ]),
                        ]),
                      ]))
                    : V("", !0),
                ]),
                _: 1,
              }
            ),
            p("button", { type: "button", class: "area-change-root group relative flex items-center gap-x-15 text-white text-14 font-bold pointer-events-auto", onClick: g }, [
              p(
                "div",
                {
                  class: Qe([
                    "relative h-40 s:h-50 w-40 s:w-50 flex items-center justify-center bg-white-pure s:bg-white rounded-full after:absolute after:inset-0 after:bg-highlight after:rounded-full after:scale-0 after:transition-transform after:duration-700 after:ease-out-expo has-hover:group-hover:after:scale-100 text-main",
                    [m(i) ? "after:scale-100 text-white" : ""],
                  ]),
                },
                B[8] ||
                (B[8] = [
                  p(
                    "svg",
                    { class: "relative h-25 w-auto has-hover:group-hover:text-white transition-colors duration-500 ease-out z-2", viewBox: "0 0 16 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    [
                      p("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d:
                          "M4.77573 7.65033C4.77573 5.9269 6.17284 4.52979 7.89627 4.52979C9.6197 4.52979 11.0168 5.9269 11.0168 7.65033C11.0168 9.37376 9.6197 10.7709 7.89627 10.7709C6.17284 10.7709 4.77573 9.37376 4.77573 7.65033ZM7.89627 5.73468C6.83829 5.73468 5.98062 6.59235 5.98062 7.65033C5.98062 8.70831 6.83829 9.56598 7.89627 9.56598C8.95425 9.56598 9.81192 8.70831 9.81192 7.65033C9.81192 6.59235 8.95425 5.73468 7.89627 5.73468Z",
                        fill: "currentColor",
                      }),
                      p("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d:
                          "M0 8.37883C0 3.79135 3.44858 -0.00878906 7.80001 -0.00878906C12.1514 -0.00878906 15.6 3.79135 15.6 8.37883C15.6 10.591 14.3174 13.4472 11.939 16.8933L11.9357 16.8982L11.9345 16.8998L11.3648 17.7082C10.6702 18.6738 9.88954 19.6898 9.02458 20.7545L9.02168 20.7581L9.02075 20.7592L7.8044 22.2335L7.33889 21.6799C6.26063 20.3975 5.22587 19.0747 4.23666 17.7115L4.23173 17.7047L4.2301 17.7024L3.66094 16.8946L3.66033 16.8937C1.28233 13.4471 0 10.5908 0 8.37883ZM7.80001 1.1961C4.20145 1.1961 1.20489 4.36588 1.20489 8.37883C1.20489 10.1958 2.29132 12.7873 4.6505 16.2071L4.65164 16.2087L5.21348 17.0061L5.21511 17.0083C5.99603 18.0843 6.80588 19.1347 7.64364 20.1596C7.68152 20.206 7.73818 20.2329 7.79804 20.2331C7.8579 20.2332 7.91467 20.2065 7.95277 20.1604L8.09029 19.9937L8.09125 19.9925C8.94214 18.945 9.70638 17.9501 10.3844 17.0077L10.3856 17.0061L10.9484 16.2073L10.9496 16.2057C13.3087 12.7868 14.3951 10.1958 14.3951 8.37883C14.3951 4.36588 11.3986 1.1961 7.80001 1.1961Z",
                        fill: "currentColor",
                      }),
                    ],
                    -1
                  ),
                ]),
                2
              ),
              B[9] || (B[9] = p("span", { class: "max-s:hidden" }, "Navigate", -1)),
            ]),
          ])
        )
      );
    },
  },
  Ja = { key: 0, class: "absolute inset-0 bg-main z-5" },
  Ya = { class: "eyebrow js-i-words js-t-title !text-13 s:!text-15 !tracking-[0.3em]" },
  Va = { class: "text-110 s:text-200 tracking-[-.063] leading-none mt-30 s:mt-40 overflow-hidden text-center js-i-chars" },
  ja = ["innerHTML"],
  za = { class: "z-12" },
  Wa = {
    __name: "index",
    props: { eyebrow: { type: String, default: "" }, title: { type: String, default: "" }, subtitle: { type: String, default: "" } },
    setup(d) {
      const { $event: e, $resize: t } = ze(),
        n = Pe(),
        { setAppState: A } = Ae("map"),
        { appState: o, currentSidebar: s, currentType: i, selectedAmenity: r, selectedProperty: c } = Ce("map"),
        g = q(() => t.small ?? !1),
        a = q(() => (t == null ? void 0 : t.medium) ?? !1),
        l = q(() => (t == null ? void 0 : t.landscape) ?? !0),
        u = q(() => i.value),
        f = q(() => (a.value && !l.value ? i.value && !r.value && !c.value : i.value && !s.value)),
        h = q(() => (a.value && !l.value ? s.value && (c.value || r.value) : s.value)),
        C = te(null),
        I = te(null),
        B = te(null),
        E = te(null),
        Q = te(null),
        x = te(null);
      te(!1);
      const w = te(!1);
      let D, L;
      const k = () => {
        D = J.timeline({
          defaults: { duration: 1.25, ease: "power2.in" },
          onComplete: () => {
            I.value.remove(), D == null || D.kill();
          },
        })
          .to(B.value, { scale: 1.75, alpha: 0 })
          .to(E.value, { y: "5rem", alpha: 0, duration: 1 }, 0);
      },
        b = () => {
          A("opening>experience"), k();
        },
        U = (_, M) => {
          M(), J.from(_, { y: "3.5rem", alpha: 0, duration: 1.5, ease: "unmask" });
        },
        R = (_, M) => {
          J.to(_, { y: "3.5rem", alpha: 0, duration: 0.5, ease: "power2.inOut", onComplete: M });
        },
        y = (_, M) => {
          M(), J.from(Gt(".js-zoom-btn", _), { scale: 0, duration: 1.5, stagger: 0.1, ease: "unmask" });
        },
        N = (_, M) => {
          J.to(Gt(".js-zoom-btn", _), { scale: 0, duration: 0.5, stagger: 0.1, ease: "power2.inOut", onComplete: M });
        },
        v = (_, M) => {
          M(), n.setSh(!1), document.body.classList.add("is-sidebar-open");
          const H = Et(".js-scale-x", _),
            G = Et(".js-mask", _),
            z = Gt(".js-sidebar-elem", _);
          !L && (L = J.timeline({ paused: !0, defaults: { duration: 1.25, ease: "power3.inOut" } })),
            L.clear().fromTo([_, G], { xPercent: a.value ? 0 : J.utils.wrap([100, -100]), yPercent: a.value ? J.utils.wrap([100, -100]) : 0 }, { xPercent: 0, yPercent: 0 }),
            z.length && L.fromTo(".js-sidebar-elem", { alpha: 0, xPercent: 25 }, { alpha: 1, xPercent: 0, stagger: 0.075, ease: "expo" }, 0.45),
            H && L.fromTo(H, { scaleX: 0 }, { scaleX: 1, ease: "expo.inOut", duration: 1.5 }, 0.45),
            a.value && L.from(close.value, { scale: 0, duration: 1, ease: "expo" }, 0.25),
            L.restart();
        },
        T = (_, M) => {
          document.body.classList.remove("overflow-hidden");
          const H = Et(".js-mask", _),
            G = Et(".js-close", _);
          L == null || L.clear(),
            L.to([_, H], { xPercent: a.value ? 0 : J.utils.wrap([100, -100]), yPercent: a.value ? J.utils.wrap([100, -100]) : 0 }).add(() => {
              n.setSh(!0), M();
            }),
            a.value && L.to(G, { scale: 0, duration: 0.75, ease: "expo.inOut" }, 0),
            L.restart();
        };
      return (_, M) => {
        const H = yA;
        return (
          S(),
          F(
            "div",
            { ref_key: "el", ref: C, class: "absolute inset-0 pointer-events-none" },
            [
              m(o) === "loading" ? (S(), F("div", Ja)) : V("", !0),
              p("div", { ref_key: "bg", ref: Q, class: Qe(["absolute inset-0 bg-black-pure transition-opacity duration-500 ease-out", m(u) ? "opacity-0" : "opacity-30"]) }, null, 2),
              p(
                "div",
                { ref_key: "intro", ref: I, class: "absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none z-10" },
                [
                  p("div", { ref_key: "content", ref: B, class: "flex flex-col items-center justify-center z-10" }, [p("h3", Ya, W(d.eyebrow), 1), p("h1", Va, W(d.title), 1)], 512),
                  p(
                    "div",
                    { ref_key: "button", ref: E, class: "absolute bottom-60 s:bottom-66 l:bottom-80 left-0 w-full flex justify-center flex-col items-center" },
                    [
                      p("p", { class: "leading-none js-i-words js-t-title text-16 s:text-18", innerHTML: d.subtitle }, null, 8, ja),
                      Y(H, { onClick: b, type: "button", label: "Explore", class: "pointer-events-auto js-i-up js-t-up mt-32 s:mt-40 !text-15 s:!text-16 l:!text-15", background: "" }),
                    ],
                    512
                  ),
                ],
                512
              ),
              p("div", { class: Qe(["absolute bg-overlay z-0", m(u) ? "hide" : ""]) }, null, 2),
              p("div", za, [
                Y(fe, { css: !1, onEnter: U, onLeave: R }, { default: X(() => [m(f) ? (S(), ne(m(Dr), { key: 0, class: "pointer-events-auto" })) : V("", !0)]), _: 1 }),
                Y(fe, { css: !1, onEnter: v, onLeave: T }, { default: X(() => [m(h) ? (S(), ne(m(da), { key: 0 })) : V("", !0)]), _: 1 }),
                Y(fe, { name: "fade" }, { default: X(() => [m(a) && !m(l) && m(s) && !m(r) && !m(c) && m(w) ? (S(), ne(m(Na), { key: m(i) })) : V("", !0)]), _: 1 }),
                Y(fe, { css: !1, onEnter: y, onLeave: N }, { default: X(() => [!m(g) && m(i) && !m(s) ? (S(), ne(m(Sa), { key: 0, class: "pointer-events-auto" })) : V("", !0)]), _: 1 }),
                Y(fe, { css: !1, onEnter: U, onLeave: R }, { default: X(() => [m(f) ? (S(), ne(m(ha), { key: 0, class: "pointer-events-auto" })) : V("", !0)]), _: 1 }),
                Y(fe, { css: !1, onEnter: U, onLeave: R }, { default: X(() => [m(f) ? (S(), ne(m(qa), { key: 0, onToggled: M[0] || (M[0] = (G) => (w.value = G)) })) : V("", !0)]), _: 1 }),
                Y(m(va), { ref_key: "help", ref: x }, null, 512),
              ]),
            ],
            512
          )
        );
      };
    },
  };
function Xa(d) {
  const { setResponsiveType: e } = Ae("map");
  he(() => {
    const t = window.innerWidth > 768 ? "desktop" : "mobile";
    e(t);
  });
}
const Za = { class: "absolute inset-0" },
  $a = { class: "absolute inset-0 js-canvas-gestures" },
  el = {
    __name: "index",
    props: { eyebrow: { type: String, default: "Discover" }, title: { type: String, default: "The Hills" }, subtitle: { type: String, default: "Explore real-estate listings and amenities" } },
    setup(d) {
      var r;
      const { setIsDebug: e } = Ae("map"),
        { hasSceneRef: t, appState: n } = Ce("map"),
        o = !!((r = Ao().query) != null && r.debug);
      e(o);
      const s = te(null),
        i = q(() => o && t && n.value !== "loading");
      return (
        Xa(),
        (c, g) => {
          const a = ps;
          return (
            S(),
            ne(a, null, {
              default: X(() => [
                p(
                  "div",
                  { ref_key: "rootRef", ref: s, class: "fixed inset-0 touch-none bg-main z-5" },
                  [
                    p("div", Za, [
                      p("div", $a, [Y(m(Er))]),
                      Y(m(mr)),
                      Y(m(Wa), { eyebrow: d.eyebrow, title: d.title, subtitle: d.subtitle }, null, 8, ["eyebrow", "title", "subtitle"]),
                      m(i) ? (S(), ne(m(yr), { key: 0 })) : V("", !0),
                    ]),
                  ],
                  512
                ),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  },
  tl = {
    amenities: {
      items: [
        { meshKey: "amenity-clubhouse-clubhouse" },
        { meshKey: "amenity-golf-practice-range" },
        { meshKey: "amenity-golf-putting-green" },
        { meshKey: "amenity-restaurant-comfort-station" },
        { meshKey: "amenity-waypoint-fieldhouse" },
        { meshKey: "amenity-waypoint-organicfarm" },
        { meshKey: "amenity-waypoint-pond" },
        { meshKey: "amenity-residence-dune-deck" },
      ],
    },
    properties: {
      items: [
        { meshKey: "property-listing-1" },
        { meshKey: "property-listing-2" },
        { meshKey: "property-listing-3" },
        { meshKey: "property-listing-4" },
        { meshKey: "property-listing-5" },
        { meshKey: "property-listing-6" },
        { meshKey: "property-listing-7" },
        { meshKey: "property-listing-8" },
        { meshKey: "property-listing-9" },
        { meshKey: "property-listing-10" },
        { meshKey: "property-listing-11" },
        { meshKey: "property-listing-12" },
        { meshKey: "property-listing-13" },
        { meshKey: "property-listing-14" },
        { meshKey: "property-listing-15" },
        { meshKey: "property-listing-16" },
        { meshKey: "property-listing-17" },
        { meshKey: "property-listing-18" },
        { meshKey: "property-listing-19" },
        { meshKey: "property-listing-20" },
        { meshKey: "property-listing-21" },
        { meshKey: "property-listing-22" },
        { meshKey: "property-listing-23" },
        { meshKey: "property-listing-24" },
        { meshKey: "property-listing-25" },
        { meshKey: "property-listing-26" },
        { meshKey: "property-listing-27" },
        { meshKey: "property-listing-28" },
        { meshKey: "property-listing-29" },
        { meshKey: "property-listing-30" },
        { meshKey: "property-listing-31" },
        { meshKey: "property-listing-32" },
        { meshKey: "property-listing-33" },
        { meshKey: "property-listing-34" },
        { meshKey: "property-listing-35" },
        { meshKey: "property-listing-36" },
        { meshKey: "property-listing-37" },
        { meshKey: "property-listing-38" },
        { meshKey: "property-listing-39" },
        { meshKey: "property-listing-40" },
        { meshKey: "property-listing-41" },
        { meshKey: "property-listing-42" },
        { meshKey: "property-listing-43" },
        { meshKey: "property-listing-44" },
        { meshKey: "property-listing-45" },
        { meshKey: "property-listing-46" },
        { meshKey: "property-listing-47" },
        { meshKey: "property-listing-48" },
        { meshKey: "property-listing-49" },
        { meshKey: "property-listing-50" },
        { meshKey: "property-listing-51" },
        { meshKey: "property-listing-52" },
        { meshKey: "property-listing-53" },
        { meshKey: "property-listing-54" },
        { meshKey: "property-listing-55" },
        { meshKey: "property-listing-56" },
        { meshKey: "property-listing-57" },
        { meshKey: "property-listing-58" },
        { meshKey: "property-listing-59" },
        { meshKey: "property-listing-60" },
        { meshKey: "property-listing-61" },
        { meshKey: "property-listing-62" },
        { meshKey: "property-listing-63" },
        { meshKey: "property-listing-64" },
        { meshKey: "property-listing-65" },
        { meshKey: "property-listing-66" },
        { meshKey: "property-listing-67" },
        { meshKey: "property-listing-68" },
        { meshKey: "property-listing-69" },
        { meshKey: "property-listing-70" },
        { meshKey: "property-listing-71" },
        { meshKey: "property-listing-72" },
        { meshKey: "property-listing-73" },
        { meshKey: "property-listing-74" },
        { meshKey: "property-listing-75" },
        { meshKey: "property-listing-76" },
        { meshKey: "property-listing-77" },
        { meshKey: "property-listing-78" },
        { meshKey: "property-listing-79" },
        { meshKey: "property-listing-80" },
        { meshKey: "property-listing-81" },
        { meshKey: "property-listing-82" },
        { meshKey: "property-listing-83" },
        { meshKey: "property-listing-84" },
        { meshKey: "property-listing-85" },
        { meshKey: "property-listing-86" },
        { meshKey: "property-listing-87" },
        { meshKey: "property-listing-88" },
        { meshKey: "property-listing-89" },
        { meshKey: "property-listing-90" },
        { meshKey: "property-listing-91" },
        { meshKey: "property-listing-92" },
        { meshKey: "property-listing-93" },
        { meshKey: "property-listing-94" },
        { meshKey: "property-listing-95" },
        { meshKey: "property-listing-96" },
        { meshKey: "property-listing-97" },
        { meshKey: "property-listing-98" },
        { meshKey: "property-listing-99" },
        { meshKey: "property-listing-100" },
        { meshKey: "property-listing-101" },
        { meshKey: "property-listing-102" },
        { meshKey: "property-listing-103" },
        { meshKey: "property-listing-104" },
        { meshKey: "property-listing-105" },
        { meshKey: "property-listing-106" },
        { meshKey: "property-listing-107" },
        { meshKey: "property-listing-108" },
        { meshKey: "property-listing-109" },
        { meshKey: "property-listing-110" },
      ],
    },
  },
  Al = { "data-map": !0 },
  rl = {
    __name: "map",
    async setup(d) {
      let e, t;
      const n = Xn();
      n.$reset(), n.setCmsData(tl), Pe();
      const { $dato: A } = ze(),
        { enabled: o } = so(),
        { data: s } =
          (([e, t] = mA(async () =>
            no("map", async () => {
              try {
                const { page: i } = await A.page({ slug: "map", variables: {}, preview: o.value });
                return i;
              } catch (i) {
                throw (console.error(i), i);
              }
            })
          )),
            (e = await e),
            t(),
            e);
      return (i, r) => {
        var a, l, u, f;
        const c = qs,
          g = el;
        return (
          S(),
          F("span", Al, [
            Y(c, { seo: (a = m(s)) == null ? void 0 : a.seo }, null, 8, ["seo"]),
            Y(g, { eyebrow: (l = m(s)) == null ? void 0 : l.eyebrow, title: (u = m(s)) == null ? void 0 : u.title, subtitle: (f = m(s)) == null ? void 0 : f.subtitle }, null, 8, ["eyebrow", "title", "subtitle"]),
          ])
        );
      };
    },
  };
export { rl as default };
