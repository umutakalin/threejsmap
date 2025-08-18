// Three.js Extracted Code from BLaCuJu6.js
// This file contains all Three.js related functionality extracted from the original file

// Import statements for Three.js dependencies
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

// Three.js BufferGeometry Utilities
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

// GLTF Loader Class
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

// Cache utility
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

// GLTF Extensions Constants
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

// GLTF Extension Classes

// Lights Punctual Extension
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

// Materials Unlit Extension
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

// Materials Emissive Strength Extension
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

// Materials Clearcoat Extension
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

// Materials Dispersion Extension
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

// Materials Iridescence Extension
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

// Materials Sheen Extension
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

// Materials Transmission Extension
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

// Materials Volume Extension
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

// Materials IOR Extension
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

// Materials Specular Extension
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

// Materials Bump Extension
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

// Materials Anisotropy Extension
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

// Texture BasisU Extension
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

// Texture WebP Extension
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

// Texture AVIF Extension
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

// Meshopt Compression Extension
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

// Mesh GPU Instancing Extension
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

// Export the main classes and utilities
export {
  zA as toTrianglesDrawMode,
  Qo as GLTFLoader,
  yo as createCache,
  O as GLTFExtensions,
  wo as LightsPunctualExtension,
  xo as MaterialsUnlitExtension,
  vo as MaterialsEmissiveStrengthExtension,
  _o as MaterialsClearcoatExtension,
  So as MaterialsDispersionExtension,
  Do as MaterialsIridescenceExtension,
  Lo as MaterialsSheenExtension,
  Ro as MaterialsTransmissionExtension,
  To as MaterialsVolumeExtension,
  bo as MaterialsIORExtension,
  Fo as MaterialsSpecularExtension,
  Mo as MaterialsBumpExtension,
  ko as MaterialsAnisotropyExtension,
  Go as TextureBasisUExtension,
  No as TextureWebPExtension,
  Uo as TextureAVIFExtension,
  Ho as MeshoptCompressionExtension,
  Ko as MeshGPUInstancingExtension
}; 