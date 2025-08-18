// Three.js Extracted Code Part 2 - Loaders and Utilities
// This file contains DRACO loader, KTX2 loader, animation classes, and other utilities

// Import statements for Three.js dependencies
import {
  V as ce,
  L as fA,
  F as Ye,
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

// Animation Interpolation Classes
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

// GLTF Constants
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
};

const rt = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
const XA = { 9728: hn, 9729: at, 9984: fn, 9985: In, 9986: Cn, 9987: CA };
const ZA = { 33071: pn, 33648: Bn, 10497: St };
const Wt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };
const uA = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" };
const Ne = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" };
const jo = { CUBICSPLINE: void 0, LINEAR: hs, STEP: En };
const Xt = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };

// Utility Functions
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

// DRACO Loader
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

// DRACO Worker Function
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
            const u = t(a, l, r, c);
            self.postMessage({ type: "decode", id: i.id, geometry: u }, [u.buffer]);
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

// Export the classes and utilities
export {
  ws as CubicSplineInterpolant,
  Vo as QuaternionLinearInterpolant,
  Be as GLTFConstants,
  rt as ComponentTypes,
  XA as FilterTypes,
  ZA as WrapTypes,
  Wt as AttributeTypes,
  uA as AttributeMap,
  Ne as PropertyMap,
  jo as InterpolationTypes,
  Xt as AlphaModes,
  zo as getDefaultMaterial,
  Oe as assignExtrasToUserData,
  be as assignExtrasToUserData2,
  Wo as addMorphTargets,
  Xo as updateMorphTargets,
  Zo as getPrimitiveKey,
  Zt as getAttributeKey,
  dA as getNormalizedComponentScale,
  $o as getImageFormat,
  si as DRACOLoader,
  ni as DRACOWorker
}; 