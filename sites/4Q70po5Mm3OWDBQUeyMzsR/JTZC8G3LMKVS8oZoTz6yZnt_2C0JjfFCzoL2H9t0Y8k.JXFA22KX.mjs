import { a as at } from "./chunk-UGH4J7SB.mjs";
import { a as tt, b as At, c as Tt, d as Mt } from "./chunk-Q5B6BLG3.mjs";
import { a as Dt } from "./chunk-IBXLZ3AH.mjs";
import { a as Ne, b as je, c as De } from "./chunk-KTV4JKFL.mjs";
import {
  a as et,
  f as It,
  g as kt,
  h as Pt,
  m as rt,
  p as zt,
  q as Nt,
  r as jt,
} from "./chunk-SFQDW7Z7.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as q,
  Aa as u,
  Da as Me,
  E as xt,
  Ea as ze,
  F as O,
  Fa as L,
  Ga as z,
  H as a,
  K as Z,
  M as ke,
  N as X,
  O as wt,
  Q as Pe,
  R as T,
  T as vt,
  X as Ct,
  Y as Ae,
  Z as B,
  ba as bt,
  d as Je,
  e as Qe,
  g as Re,
  h,
  ha as Ut,
  ia as Te,
  n as $e,
  na as Ft,
  oa as Vt,
  qa as Et,
  t as fe,
  wa as St,
  x as Ie,
  xa as _t,
  ya as J,
  za as Rt,
} from "./chunk-BMMUF56P.mjs";
import {
  A as d,
  d as c,
  i as Se,
  l as yt,
  n as me,
  o as gt,
  p as F,
  q as _e,
  t as V,
  u as C,
  v as ce,
  z as e,
} from "./chunk-EREUIR4R.mjs";
import "./chunk-HZL4YIMB.mjs";
import "./chunk-WTJ5PBRZ.mjs";
import { b as s } from "./chunk-A3IIQ6X3.mjs";
var G = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  de = {
    ...G,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  pe = {
    onClick: { type: a.EventHandler },
    onMouseEnter: { type: a.EventHandler },
    onMouseLeave: { type: a.EventHandler },
  },
  nt = {
    type: a.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  ot = {
    font: {
      type: a.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: a.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: a.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
function ue(t, n) {
  return Ot(!0, t, n);
}
function he(t, n) {
  return Ot(!1, t, n);
}
function Ot(t, n, i = !0) {
  let o = ke();
  F(() => {
    i && o === t && n();
  }, [o]);
}
var br = () => {
    if (typeof s < "u") {
      let t = s.userAgent.toLowerCase();
      return (
        (t.indexOf("safari") > -1 ||
          t.indexOf("framermobile") > -1 ||
          t.indexOf("framerx") > -1) &&
        t.indexOf("chrome") < 0
      );
    } else return !1;
  },
  ye = () => V(() => br(), []);
function qe() {
  return V(() => O.current(), []);
}
function Le() {
  return V(() => O.current() === O.canvas, []);
}
function ge(t) {
  let {
    borderRadius: n,
    isMixedBorderRadius: i,
    topLeftRadius: o,
    topRightRadius: f,
    bottomRightRadius: p,
    bottomLeftRadius: y,
  } = t;
  return V(
    () => (i ? `${o}px ${f}px ${p}px ${y}px` : `${n}px`),
    [n, i, o, f, p, y]
  );
}
var xe = {
  borderRadius: {
    title: "Radius",
    type: a.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var lt = {
  padding: {
    type: a.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var mt = {
    ...G,
    ...de,
    textAlign: "center",
    padding: 15,
    width: 200,
    height: 100,
    overflow: "hidden",
  },
  bo = {
    ...mt,
    color: "#09f",
    background: "rgb(0, 153, 255, 0.1)",
    borderColor: "#09f",
  },
  tr = { fontSize: 12, fontWeight: 600, margin: 0 },
  rr = { fontSize: 12, maxWidth: 200, lineHeight: 1.4, margin: "5px 0 0 0" };
var Vr = {
    featured: "featured.svg",
    top: "top-post-badge.svg",
    review: "review.svg",
  },
  Er = /^https?:\/\/(?:www\.)?producthunt\.com\/posts\/([^\/]*)/;
function we({ url: t, type: n, theme: i, style: o, ...f }) {
  let p = V(() => {
    var y;
    let [, r] = (y = t.match(Er)) !== null && y !== void 0 ? y : [null, ""];
    return r
      ? `https://api.prsoducthunt.com/widgets/embed-image/v1/${Vr[n]}?post_id=${r}&theme=${i}`
      : null;
  }, [t, n, i]);
  return e(h.div, {
    style: {
      ...o,
      ...G,
      placeContent: "center",
      placeItems: "center",
      overflow: "hidden",
    },
    ...f,
    children: p
      ? e(h.a, {
          href: t,
          target: "_blank",
          style: { ...o, width: 250, height: 54 },
          ...f,
        
        })
      : d(h.div, {
          style: { ...mt, ...o },
          ...f,
          children: [
            e("h1", { style: tr, children: "Product Hunt" }),
            e("p", {
              style: rr,
              children: "Set a product URL in the Properties.",
            }),
          ],
        }),
  });
}
Z(we, {
  url: {
    type: a.String,
    title: "URL",
    placeholder: "https://www.producthunt.com/posts/***",
    defaultValue: "https://www.producthunt.com/posts/framer-for-web",
  },
  type: {
    type: a.Enum,
    title: "Type",
    options: ["featured", "top", "review"],
    optionTitles: ["Featured", "Top Post Daily", "Leave a Review"],
    defaultValue: "featured",
  },
  theme: {
    type: a.Enum,
    options: ["light", "dark"],
    optionTitles: ["Light", "Dark"],
    displaySegmentedControl: !0,
  },
});
var ar;
(function (t) {
  (t.Fill = "fill"),
    (t.Contain = "contain"),
    (t.Cover = "cover"),
    (t.None = "none"),
    (t.ScaleDown = "scale-down");
})(ar || (ar = {}));
var nr;
(function (t) {
  (t.Video = "Upload"), (t.Url = "URL");
})(nr || (nr = {}));
var Sr = "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4";
function _r(t) {
  let {
    width: n,
    height: i,
    topLeft: o,
    topRight: f,
    bottomRight: p,
    bottomLeft: y,
    id: r,
    children: b,
    ...g
  } = t;
  return g;
}
function ve(t) {
  let n = _r(t);
  return e(kr, { ...n });
}
function Rr(t) {
  let n = ke(),
    i = C(!1),
    o = C(!1),
    f = me((r) => {
      if (!t.current) return;
      let b = (r === 1 ? 0.999 : r) * t.current.duration,
        g = Math.abs(t.current.currentTime - b) < 0.1;
      t.current.duration > 0 && !g && (t.current.currentTime = b);
    }, []),
    p = me(() => {
      let r = t.current;
      if (!r) return;
      (r.preload = "auto"),
        !(
          r.currentTime > 0 &&
          r.onplaying &&
          !r.paused &&
          !r.ended &&
          r.readyState >= r.HAVE_CURRENT_DATA
        ) &&
          r &&
          !i.current &&
          n &&
          ((i.current = !0),
          (o.current = !0),
          r
            .play()
            .catch((g) => {})
            .finally(() => (i.current = !1)));
    }, []),
    y = me(() => {
      !t.current || i.current || (t.current.pause(), (o.current = !1));
    }, []);
  return { play: p, pause: y, setProgress: f, isPlaying: o };
}
function Ir({
  playingProp: t,
  muted: n,
  loop: i,
  playsinline: o,
  controls: f,
}) {
  let [p] = ce(() => t),
    [y, r] = ce(!1);
  t !== p && !y && r(!0);
  let b = p && n && i && o && !f && !y,
    g;
  return (
    b ? (g = "on-viewport") : p ? (g = "on-mount") : (g = "no-autoplay"), g
  );
}
var kr = yt(function (n) {
  let {
      srcType: i = "URL",
      srcUrl: o,
      srcFile: f = "",
      posterEnabled: p = !1,
      controls: y = !1,
      playing: r = !0,
      loop: b = !0,
      muted: g = !0,
      playsinline: N = !0,
      restartOnEnter: U = !1,
      objectFit: $ = "cover",
      backgroundColor: ee = "rgba(0,0,0,0)",
      radius: E = 0,
      volume: te = 25,
      startTime: re = 0,
      poster: j,
      playing: R,
      progress: v,
      onSeeked: ae,
      onPause: S,
      onPlay: ne,
      onEnd: be,
      onClick: Y,
      onMouseEnter: oe,
      onMouseLeave: Ue,
      onMouseDown: Fe,
      onMouseUp: I,
    } = n,
    x = C(),
    P = ye(),
    k = C(null),
    A = C(null),
    Ve = Le(),
    Ye = qe(),
    M = Ve || Ye === O.export,
    He = ge(n),
    _ = M
      ? "no-autoplay"
      : Ir({ playingProp: R, muted: g, loop: b, playsinline: N, controls: y }),
    H = M ? !0 : $e(x),
    Ke = M ? !1 : $e(x, { margin: "10%", once: !0 }),
    D = re === 100 ? 99.9 : re,
    { play: W, pause: ie, setProgress: se, isPlaying: le } = Rr(x);
  F(() => {
    M || (_ !== "on-viewport" && (R ? W() : ie()));
  }, [_, R]),
    F(() => {
      M || (H && R && _ !== "no-autoplay" && W(), _ === "on-viewport" && ie());
    }, [_, H, R]),
    F(() => {
      !Ve || j || p || D || !x.current || (x.current.currentTime = 0.01);
    }, [p, j, D]);
  let Ee = C(!1);
  F(() => {
    if (!Ee.current) {
      Ee.current = !0;
      return;
    }
    let w = Je(v) ? v.get() : (v ?? 0) * 0.01;
    se((w ?? 0) || (D ?? 0) / 100);
  }, [D, f, o, v]),
    F(() => {
      if (Je(v)) return v.on("change", (w) => se(w));
    }, [v]),
    ue(() => {
      k.current !== null && x.current && ((!A && b) || !k.current) && W();
    }),
    he(() => {
      x.current &&
        ((A.current = x.current.ended), (k.current = x.current.paused), ie());
    });
  let Ze = V(() => {
    let w = "";
    if (i === "URL") return o + w;
    if (i === "Upload") return f + w;
  }, [i, f, o, D]);
  F(() => {
    P && x.current && _ === "on-mount" && setTimeout(() => W(), 50);
  }, []),
    F(() => {
      x.current && !g && (x.current.volume = (te ?? 0) / 100);
    }, [te]);
  let Xe = () => {
    let w = x.current;
    w &&
      (w.currentTime < 0.3 && D > 0 && se((D ?? 0) * 0.01),
      (le.current || _ === "on-mount" || (R && _ === "on-viewport" && H)) &&
        W());
  };
  return e("video", {
    onClick: Y,
    onMouseEnter: oe,
    onMouseLeave: Ue,
    onMouseDown: Fe,
    onMouseUp: I,
    src: Ze,
    loop: b,
    ref: x,
    onSeeked: (w) => ae?.(w),
    onPause: (w) => S?.(w),
    onPlay: (w) => ne?.(w),
    onEnded: (w) => be?.(w),
    autoPlay: le.current || _ === "on-mount" || (R && _ === "on-viewport" && H),
    preload: le.current
      ? "auto"
      : M && !j
      ? "metadata"
      : _ !== "on-mount" && !Ke
      ? "none"
      : "metadata",
    poster:
      p && !f && o === Sr
        ? "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg"
        : p && j
        ? j
        : void 0,
    onLoadedData: Xe,
    controls: y,
    muted: M ? !0 : g,
    playsInline: N,
    style: {
      cursor: Y ? "pointer" : "auto",
      width: "100%",
      height: "100%",
      borderRadius: He,
      display: "block",
      objectFit: $,
      backgroundColor: ee,
      objectPosition: "50% 50%",
    },
  });
});
ve.displayName = "Video";
function Pr(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function Ar(t) {
  return (t.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
    .map(Pr)
    .join(" ");
}
var or = ["cover", "fill", "contain", "scale-down", "none"];
Z(ve, {
  srcType: {
    type: a.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: ["URL", "Upload"],
  },
  srcUrl: {
    type: a.String,
    title: "URL",
    defaultValue:
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    hidden(t) {
      return t.srcType === "Upload";
    },
  },
  srcFile: {
    type: a.File,
    title: "File",
    allowedFileTypes: ["mp4", "webm"],
    hidden(t) {
      return t.srcType === "URL";
    },
  },
  playing: {
    type: a.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  ...xe,
  posterEnabled: {
    type: a.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: {
    type: a.Image,
    title: "Image",
    hidden: ({ posterEnabled: t }) => !t,
    description:
      "We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).",
  },
  backgroundColor: {
    type: a.Color,
    title: "Background",
    defaultValue: "rgba(0,0,0,0)",
  },
  startTime: {
    title: "Start Time",
    type: a.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: a.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: a.Enum,
    title: "Fit",
    options: or,
    optionTitles: or.map(Ar),
  },
  controls: {
    type: a.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: !1,
  },
  muted: {
    type: a.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: a.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: t }) => t,
    defaultValue: 25,
  },
  onEnd: { type: a.EventHandler },
  onSeeked: { type: a.EventHandler },
  onPause: { type: a.EventHandler },
  onPlay: { type: a.EventHandler },
  ...pe,
});
var Mr = [
    "nhvYRvTGI",
    "ou0yTvKzz",
    "U0vnGZu7G",
    "ghJyJ5Jnx",
    "S_mPdY8Ss",
    "O2TCN1nUn",
    "Q_qGb54MS",
  ],
  zr = "framer-uuOz6",
  Nr = {
    ghJyJ5Jnx: "framer-v-1byxcms",
    nhvYRvTGI: "framer-v-paq7zd",
    O2TCN1nUn: "framer-v-1kdqvre",
    ou0yTvKzz: "framer-v-1ltzrce",
    Q_qGb54MS: "framer-v-164a2lv",
    S_mPdY8Ss: "framer-v-2xug7c",
    U0vnGZu7G: "framer-v-ob4lra",
  };
function jr(t, ...n) {
  let i = {};
  return n?.forEach((o) => o && Object.assign(i, t[o])), i;
}
var Dr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Or = {
    filter: "blur(8px)",
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ir = { damping: 80, delay: 0.05, mass: 1, stiffness: 200, type: "spring" },
  Br = {
    effect: Or,
    repeat: !1,
    startDelay: 0.4,
    tokenization: "character",
    transition: ir,
    trigger: "onMount",
    type: "appear",
  },
  qr = {
    filter: "blur(16px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Q = {
    effect: qr,
    repeat: !1,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "character",
    transition: ir,
    trigger: "onInView",
    type: "appear",
  },
  Lr = ({ value: t, children: n }) => {
    let i = gt(Qe),
      o = t ?? i.transition,
      f = V(() => ({ ...i, transition: o }), [JSON.stringify(o)]);
    return e(Qe.Provider, { value: f, children: n });
  },
  Gr = h.create(c),
  Wr = {
    "Variant 2": "ou0yTvKzz",
    "Variant 3": "U0vnGZu7G",
    "Variant 4": "ghJyJ5Jnx",
    "Variant 5": "S_mPdY8Ss",
    "Variant 6": "O2TCN1nUn",
    "Variant 7": "Q_qGb54MS",
    Default: "nhvYRvTGI",
  },
  Yr = ({
    color: t,
    height: n,
    id: i,
    width: o,
    word1: f,
    word2: p,
    word3: y,
    word4: r,
    word5: b,
    word6: g,
    word7: N,
    ...U
  }) => ({
    ...U,
    BvYUIio4d: p ?? U.BvYUIio4d ?? "Word 2",
    ETkR4EiD8: y ?? U.ETkR4EiD8 ?? "Word 3",
    hySqZUZhp: r ?? U.hySqZUZhp ?? "Word 4",
    jwQgn_Dhg: b ?? U.jwQgn_Dhg ?? "Word 5",
    lLCLpp0oi: N ?? U.lLCLpp0oi ?? "Word 7",
    O_KiwTq82: t ?? U.O_KiwTq82 ?? "rgba(225, 199, 237, 0.96)",
    sjn5dgp1i: f ?? U.sjn5dgp1i ?? "Word 1",
    tQRoD2Ocw: g ?? U.tQRoD2Ocw ?? "Word 6",
    variant: Wr[U.variant] ?? U.variant ?? "nhvYRvTGI",
  }),
  Hr = (t, n) =>
    t.layoutDependency ? n.join("-") + t.layoutDependency : n.join("-"),
  Kr = Se(function (t, n) {
    let i = C(null),
      o = n ?? i,
      f = _e(),
      { activeLocale: p, setLocale: y } = Ie(),
      r = Ae(),
      {
        style: b,
        className: g,
        layoutId: N,
        variant: U,
        sjn5dgp1i: $,
        BvYUIio4d: ee,
        ETkR4EiD8: E,
        hySqZUZhp: te,
        jwQgn_Dhg: re,
        tQRoD2Ocw: j,
        lLCLpp0oi: R,
        O_KiwTq82: v,
        ...ae
      } = Yr(t),
      {
        baseVariant: S,
        classNames: ne,
        clearLoadingGesture: be,
        gestureHandlers: Y,
        gestureVariant: oe,
        isLoading: Ue,
        setGestureState: Fe,
        setVariant: I,
        variants: x,
      } = St({
        cycleOrder: Mr,
        defaultVariant: "nhvYRvTGI",
        ref: o,
        variant: U,
        variantClassNames: Nr,
      }),
      P = Hr(t, x),
      { activeVariantCallback: k, delay: A } = Ft(S),
      Ve = k(async (...K) => {
        await A(() => I("ou0yTvKzz"), 4e3);
      }),
      Ye = k(async (...K) => {
        await A(() => I("U0vnGZu7G"), 4e3);
      }),
      M = k(async (...K) => {
        await A(() => I("ghJyJ5Jnx"), 4e3);
      }),
      He = k(async (...K) => {
        await A(() => I("S_mPdY8Ss"), 4e3);
      }),
      _ = k(async (...K) => {
        await A(() => I("O2TCN1nUn"), 4e3);
      }),
      H = k(async (...K) => {
        await A(() => I("Q_qGb54MS"), 4e3);
      }),
      Ke = k(async (...K) => {
        await A(() => I("nhvYRvTGI"), 4e3);
      });
    Et(S, {
      default: Ve,
      ghJyJ5Jnx: He,
      O2TCN1nUn: H,
      ou0yTvKzz: Ye,
      Q_qGb54MS: Ke,
      S_mPdY8Ss: _,
      U0vnGZu7G: M,
    });
    let W = X(zr, ...[De]),
      ie = () =>
        ![
          "ou0yTvKzz",
          "U0vnGZu7G",
          "ghJyJ5Jnx",
          "S_mPdY8Ss",
          "O2TCN1nUn",
          "Q_qGb54MS",
        ].includes(S),
      se = () => S === "ou0yTvKzz",
      le = () => S === "U0vnGZu7G",
      Ee = () => S === "ghJyJ5Jnx",
      Ze = () => S === "S_mPdY8Ss",
      Xe = () => S === "O2TCN1nUn",
      w = () => S === "Q_qGb54MS";
    return e(Re, {
      id: N ?? f,
      children: e(Gr, {
        animate: x,
        initial: !1,
        children: e(Lr, {
          value: Dr,
          children: d(h.div, {
            ...ae,
            ...Y,
            className: X(W, "framer-paq7zd", g, ne),
            "data-framer-name": "Default",
            "data-highlight": !0,
            layoutDependency: P,
            layoutId: "nhvYRvTGI",
            ref: o,
            style: { ...b },
            ...jr(
              {
                ghJyJ5Jnx: { "data-framer-name": "Variant 4" },
                O2TCN1nUn: { "data-framer-name": "Variant 6" },
                ou0yTvKzz: { "data-framer-name": "Variant 2" },
                Q_qGb54MS: { "data-framer-name": "Variant 7" },
                S_mPdY8Ss: { "data-framer-name": "Variant 5" },
                U0vnGZu7G: { "data-framer-name": "Variant 3" },
              },
              S,
              oe
            ),
            children: [
              ie() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 1",
                    }),
                  }),
                  className: "framer-vs8l92",
                  "data-framer-name": "Word 1",
                  effect: Br,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "BNfijqFwk",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: $,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              se() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 2",
                    }),
                  }),
                  className: "framer-117vmzi",
                  "data-framer-name": "Word 2",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "Syj5AQMJh",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: ee,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              le() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 3",
                    }),
                  }),
                  className: "framer-bdr74v",
                  "data-framer-name": "Word 3",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "e8mcXYCnt",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: E,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              Ee() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 1",
                    }),
                  }),
                  className: "framer-1q7w0w7",
                  "data-framer-name": "Word 4",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "tNEUaq6HI",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: te,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              Ze() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 1",
                    }),
                  }),
                  className: "framer-75rydw",
                  "data-framer-name": "Word 5",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "mngYxKrCr",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: re,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              Xe() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 1",
                    }),
                  }),
                  className: "framer-1sb4dut",
                  "data-framer-name": "Word 6",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "nDorwRBIp",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: j,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              w() &&
                e(u, {
                  __fromCanvasComponent: !0,
                  children: e(c, {
                    children: e(h.h1, {
                      className: "framer-styles-preset-f7kodg",
                      "data-styles-preset": "z914AvaCh",
                      style: {
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-gdpscs, var(--variable-reference-O_KiwTq82-GXn4dwV7M))",
                      },
                      children: "Word 1",
                    }),
                  }),
                  className: "framer-1jwpudy",
                  "data-framer-name": "Word 7",
                  effect: Q,
                  fonts: ["Inter"],
                  layoutDependency: P,
                  layoutId: "Vkm_iAANz",
                  style: {
                    "--extracted-gdpscs":
                      "var(--variable-reference-O_KiwTq82-GXn4dwV7M)",
                    "--framer-paragraph-spacing": "0px",
                    "--variable-reference-O_KiwTq82-GXn4dwV7M": v,
                  },
                  text: R,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Zr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-uuOz6.framer-10vef2d, .framer-uuOz6 .framer-10vef2d { display: block; }",
    ".framer-uuOz6.framer-paq7zd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-uuOz6 .framer-vs8l92, .framer-uuOz6 .framer-117vmzi, .framer-uuOz6 .framer-bdr74v, .framer-uuOz6 .framer-1q7w0w7, .framer-uuOz6 .framer-75rydw, .framer-uuOz6 .framer-1sb4dut, .framer-uuOz6 .framer-1jwpudy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-uuOz6.framer-v-1ltzrce .framer-117vmzi { order: 0; }",
    ".framer-uuOz6.framer-v-ob4lra .framer-bdr74v { order: 1; }",
    ".framer-uuOz6.framer-v-1byxcms .framer-1q7w0w7 { order: 2; }",
    ".framer-uuOz6.framer-v-2xug7c .framer-75rydw { order: 3; }",
    ".framer-uuOz6.framer-v-1kdqvre .framer-1sb4dut { order: 4; }",
    ".framer-uuOz6.framer-v-164a2lv .framer-1jwpudy { order: 5; }",
    ...je,
  ],
  Ce = Pe(Kr, Zr, "framer-uuOz6"),
  ct = Ce;
Ce.displayName = "Wordchanger";
Ce.defaultProps = { height: 82.5, width: 255 };
Z(Ce, {
  variant: {
    options: [
      "nhvYRvTGI",
      "ou0yTvKzz",
      "U0vnGZu7G",
      "ghJyJ5Jnx",
      "S_mPdY8Ss",
      "O2TCN1nUn",
      "Q_qGb54MS",
    ],
    optionTitles: [
      "Default",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "Variant 5",
      "Variant 6",
      "Variant 7",
    ],
    title: "Variant",
    type: a.Enum,
  },
  sjn5dgp1i: {
    defaultValue: "Word 1",
    displayTextArea: !1,
    title: "Word 1",
    type: a.String,
  },
  BvYUIio4d: {
    defaultValue: "Word 2",
    displayTextArea: !1,
    title: "Word 2",
    type: a.String,
  },
  ETkR4EiD8: {
    defaultValue: "Word 3",
    displayTextArea: !1,
    title: "Word 3",
    type: a.String,
  },
  hySqZUZhp: {
    defaultValue: "Word 4",
    description: "",
    displayTextArea: !1,
    title: "Word 4",
    type: a.String,
  },
  jwQgn_Dhg: { defaultValue: "Word 5", title: "Word 5", type: a.String },
  tQRoD2Ocw: { defaultValue: "Word 6", title: "Word 6", type: a.String },
  lLCLpp0oi: { defaultValue: "Word 7", title: "Word 7", type: a.String },
  O_KiwTq82: {
    defaultValue: "rgba(225, 199, 237, 0.96)",
    title: "Color",
    type: a.Color,
  },
});
ze(
  Ce,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...z(Ne),
  ],
  { supportsExplicitInterCodegen: !0 }
);
J.loadFonts([]);
var sr = [{ explicitInter: !0, fonts: [] }],
  lr = [
    ".framer-11Ee7 .framer-styles-preset-3z29la:not(.rich-text-wrapper), .framer-11Ee7 .framer-styles-preset-3z29la.rich-text-wrapper a { --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: rgba(225, 199, 237, 0.7); --framer-link-hover-text-decoration: none; --framer-link-text-color: rgba(225, 199, 237, 0.96); --framer-link-text-decoration: none; transition: color 0.25s cubic-bezier(0.44, 0, 0.56, 1) 0.05s; }",
  ],
  mr = "framer-11Ee7";
J.loadFonts([
  "FR;InterDisplay-Light",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-Italic",
]);
var cr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/MaMAn5Jp5gJg1z3VaLH65QwWPLc.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/fEqgEChcTaneQFxeugexHq7Bk.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/nL7d8Ph0ViwUQorApF89PoAagQI.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/YOHXUQlY1iC2t7qT4HeLSoBDtn4.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/TfzHIi6ZmZDuhnIFGcgM6Ipuim4.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/6e1qKhy2mljzCRhlGpuCksCGjGI.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/ub5XwqqEAMrXQz31ej6fNqbxnBc.woff2",
          weight: "300",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vFzuJY0c65av44uhEKB6vyjFMg.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2",
          weight: "400",
        },
      ],
    },
  ],
  fr = [
    `.framer-pu8u1 .framer-styles-preset-1t136l8:not(.rich-text-wrapper), .framer-pu8u1 .framer-styles-preset-1t136l8.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-b90df2b5-0220-4015-b318-c7544e3e4fd4, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  dr = "framer-pu8u1";
var Qr = L(rt),
  $r = _t(rt),
  pr = Ct(h.div),
  ea = L(ct),
  ta = L(tt),
  ur = vt(h.div),
  ra = L(ve),
  aa = L(at),
  na = L(et),
  oa = L(we),
  ia = {
    GhsmaoWo7: "(min-width: 440px) and (max-width: 1023px)",
    iNw5uXiGc: "(min-width: 1024px) and (max-width: 1299px)",
    o4JagMMZU: "(min-width: 1300px)",
    Re1DApldz: "(max-width: 439px)",
  },
  ft = () => typeof document < "u",
  sa = "framer-PEjye",
  la = {
    GhsmaoWo7: "framer-v-1s9c9g7",
    iNw5uXiGc: "framer-v-m8p21b",
    o4JagMMZU: "framer-v-torpu9",
    Re1DApldz: "framer-v-2444vp",
  },
  ma = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  wr = { delay: 0.2, duration: 0.4, ease: [0.12, 0.23, 0.5, 1], type: "tween" },
  ca = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: wr,
    x: 0,
    y: 0,
  },
  fa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 24,
  },
  pt = { damping: 80, delay: 0, mass: 1, stiffness: 200, type: "spring" },
  da = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pt,
    x: 0,
    y: 24,
  },
  pa = {
    filter: "blur(8px)",
    opacity: 1,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  vr = { damping: 80, delay: 0.05, mass: 1, stiffness: 200, type: "spring" },
  ua = {
    effect: pa,
    repeat: !1,
    startDelay: 0,
    tokenization: "word",
    transition: vr,
    trigger: "onMount",
    type: "appear",
  },
  Cr = {
    filter: "blur(8px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  hr = {
    effect: Cr,
    repeat: !1,
    startDelay: 0,
    tokenization: "element",
    transition: vr,
    trigger: "onMount",
    type: "appear",
  },
  yr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: pt,
    x: 0,
    y: 0,
  },
  gr = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  ut = { damping: 80, delay: 0.01, mass: 1, stiffness: 250, type: "spring" },
  ha = {
    effect: Cr,
    repeat: !1,
    startDelay: 0,
    tokenization: "element",
    transition: ut,
    trigger: "onMount",
    type: "appear",
  },
  ht = {
    filter: "blur(4px)",
    opacity: 0.001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Ge = {
    effect: ht,
    repeat: !1,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "word",
    transition: ut,
    trigger: "onInView",
    type: "appear",
  },
  dt = {
    effect: ht,
    repeat: !1,
    startDelay: 0.3,
    threshold: 0.5,
    tokenization: "word",
    transition: ut,
    trigger: "onInView",
    type: "appear",
  },
  ya = { damping: 80, delay: 0.015, mass: 1, stiffness: 250, type: "spring" },
  xr = {
    effect: ht,
    repeat: !1,
    startDelay: 0,
    threshold: 0.5,
    tokenization: "word",
    transition: ya,
    trigger: "onInView",
    type: "appear",
  },
  ga = ({ value: t }) =>
    Ut()
      ? null
      : e("style", {
          dangerouslySetInnerHTML: { __html: t },
          "data-framer-html-style": "",
        }),
  xa = {
    "Phone Max": "GhsmaoWo7",
    Desktop: "o4JagMMZU",
    Phone: "Re1DApldz",
    Tablet: "iNw5uXiGc",
  },
  wa = ({ height: t, id: n, width: i, ...o }) => ({
    ...o,
    variant: xa[o.variant] ?? o.variant ?? "o4JagMMZU",
  }),
  va = Se(function (t, n) {
    let i = C(null),
      o = n ?? i,
      f = _e(),
      { activeLocale: p, setLocale: y } = Ie(),
      r = Ae(),
      { style: b, className: g, layoutId: N, variant: U, ...$ } = wa(t),
      ee = V(() => Dt(void 0, p), [void 0, p]);
    xt(ee);
    let [E, te] = Vt(U, ia, !1),
      re = void 0,
      R = X(sa, ...[De, jt, Pt, dr, Mt, mr]),
      v = C(null),
      ae = fe("SwrrYTWYy"),
      S = () => (ft() ? !["Re1DApldz", "GhsmaoWo7"].includes(E) : !0),
      ne = fe("kxVuIqS_9"),
      be = C(null),
      Y = () => !ft() || E === "Re1DApldz",
      oe = fe("WTeqxoVZX"),
      Ue = C(null),
      Fe = () => !ft() || E === "GhsmaoWo7",
      I = fe("cQocWcnEg"),
      x = C(null);
    return (
      bt({}),
      e(wt.Provider, {
        value: { primaryVariantId: "o4JagMMZU", variantClassNames: la },
        children: d(Re, {
          id: N ?? f,
          children: [
            e(ga, { value: "html body { background: rgb(0, 0, 0); }" }),
            d(h.div, {
              ...$,
              className: X(R, "framer-torpu9", g),
              ref: o,
              style: { ...b },
              children: [
                e(B, {
                  height: 52,
                  width: "100vw",
                  y: 0,
                  children: e(q, {
                    className: "framer-r4hwb6-container",
                    layoutScroll: !0,
                    nodeId: "AfiY3ple7",
                    rendersWithMotion: !0,
                    scopeId: "Z7s0mVtRR",
                    children: e(T, {
                      breakpoint: E,
                      overrides: {
                        GhsmaoWo7: {
                          __framer__variantAppearEffectEnabled: void 0,
                          variant: "QtLCLfH8_",
                        },
                        iNw5uXiGc: { variant: "xVCO5kcBX" },
                        Re1DApldz: {
                          __framer__variantAppearEffectEnabled: void 0,
                          variant: "QtLCLfH8_",
                        },
                      },
                      children: e($r, {
                        __framer__animateOnce: !1,
                        __framer__targets: [{ ref: v, target: "DYOuEjoJH" }],
                        __framer__threshold: 0,
                        __framer__variantAppearEffectEnabled: !0,
                        height: "100%",
                        id: "AfiY3ple7",
                        layoutId: "AfiY3ple7",
                        style: { width: "100%" },
                        variant: "fYVgS8NCd",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                d("div", {
                  className: "framer-mxn1rw",
                  "data-framer-name": "Main",
                  children: [
                    e("div", {
                      className: "framer-1a1q23a",
                      "data-framer-name": "Trigger: Navigation",
                      id: ae,
                      ref: v,
                    }),
                    e("div", {
                      className: "framer-1lh0knp",
                      "data-framer-name": "Spacing",
                    }),
                    d("section", {
                      className: "framer-wathut",
                      "data-framer-name": "Hero",
                      children: [
                        e(T, {
                          breakpoint: E,
                          overrides: {
                            GhsmaoWo7: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                            Re1DApldz: {
                              __framer__styleAppearEffectEnabled: void 0,
                            },
                          },
                          children: d(pr, {
                            __framer__animate: { transition: wr },
                            __framer__animateOnce: !0,
                            __framer__enter: ma,
                            __framer__exit: ca,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1azee46",
                            "data-framer-name": "Background",
                            children: [
                              e("div", {
                                className: "framer-msm3a9",
                                "data-framer-name": "Tonner: Shadow",
                              }),
                              e(T, {
                                breakpoint: E,
                                overrides: {
                                  GhsmaoWo7: {
                                    background: {
                                      alt: "Hero image",
                                      fit: "fill",
                                      loading: Me(
                                        (r?.y || 0) + 0 + 0 + 0 + 80 + -80 + 0
                                      ),
                                      pixelHeight: 1042,
                                      pixelWidth: 1852,
                                      positionX: "52%",
                                      positionY: "50%",
                                      sizes: `max(max(${
                                        r?.width || "100vw"
                                      }, 320px), 1px)`,
                                      src: "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=512 512w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png 1852w",
                                    },
                                  },
                                  Re1DApldz: {
                                    background: {
                                      alt: "Hero image",
                                      fit: "fill",
                                      loading: Me(
                                        (r?.y || 0) + 0 + 0 + 0 + 80 + -80 + 0
                                      ),
                                      pixelHeight: 1042,
                                      pixelWidth: 1852,
                                      positionX: "52%",
                                      positionY: "50%",
                                      sizes: `max(max(${
                                        r?.width || "100vw"
                                      }, 320px), 1px)`,
                                      src: "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png",
                                      srcSet:
                                        "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=512 512w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png 1852w",
                                    },
                                  },
                                },
                                children: e(Rt, {
                                  background: {
                                    alt: "Hero image",
                                    fit: "fill",
                                    loading: Me(
                                      (r?.y || 0) + 0 + 0 + 0 + 80 + -80 + 0
                                    ),
                                    pixelHeight: 1042,
                                    pixelWidth: 1852,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: `max(max(${
                                      r?.width || "100vw"
                                    }, 320px), 1px)`,
                                    src: "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=512 512w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/E4vrzzKGPqRVvPH5MFGLrTqYU.png 1852w",
                                  },
                                  className: "framer-1tfjkjp",
                                  "data-framer-name": "Image",
                                }),
                              }),
                              e("div", {
                                className: "framer-txjkhb",
                                "data-framer-name": "Gradient",
                              }),
                            ],
                          }),
                        }),
                        d(pr, {
                          __framer__animate: { transition: pt },
                          __framer__animateOnce: !0,
                          __framer__enter: fa,
                          __framer__exit: da,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-1oz08fe",
                          "data-framer-name": "Title",
                          children: [
                            d("div", {
                              className: "framer-1o09lit",
                              "data-framer-name": "Text",
                              children: [
                                d("div", {
                                  className: "framer-1imcsah",
                                  "data-framer-name": "Message",
                                  children: [
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: e(c, {
                                        children: e("h1", {
                                          className:
                                            "framer-styles-preset-f7kodg",
                                          "data-styles-preset": "z914AvaCh",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgb(255, 255, 255)",
                                          },
                                          children: "notes \u2192 sellable",
                                        }),
                                      }),
                                      className: "framer-1ef1k4o",
                                      effect: ua,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(T, {
                                      breakpoint: E,
                                      overrides: {
                                        GhsmaoWo7: {
                                          y:
                                            (r?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            97.92 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            82.56,
                                        },
                                        iNw5uXiGc: {
                                          y:
                                            (r?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            118.2904 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            82.56,
                                        },
                                        Re1DApldz: {
                                          y:
                                            (r?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            82.92 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            82.56,
                                        },
                                      },
                                      children: e(B, {
                                        height: 82,
                                        y:
                                          (r?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          80 +
                                          0 +
                                          227.92 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          82.56,
                                        children: e(q, {
                                          className: "framer-3hk37s-container",
                                          nodeId: "yz_NZaPlu",
                                          scopeId: "Z7s0mVtRR",
                                          children: e(ct, {
                                            BvYUIio4d: "frameworks",
                                            ETkR4EiD8: "guides",
                                            height: "100%",
                                            hySqZUZhp: "workflows",
                                            id: "yz_NZaPlu",
                                            jwQgn_Dhg: "templates",
                                            layoutId: "yz_NZaPlu",
                                            lLCLpp0oi: "systems",
                                            O_KiwTq82:
                                              "rgba(225, 199, 237, 0.96)",
                                            sjn5dgp1i: "products",
                                            tQRoD2Ocw: "playbooks",
                                            variant: "nhvYRvTGI",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                e(u, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      className: "framer-styles-preset-14qgaa",
                                      "data-styles-preset": "ZIat6mjgN",
                                      style: {
                                        "--framer-text-alignment": "center",
                                      },
                                      children:
                                        "Tapflow lets tech professionals turn their knowledge into products \u2014 and earn from it.",
                                    }),
                                  }),
                                  className: "framer-1khzc3k",
                                  "data-framer-name":
                                    "We create a world with more founders and do work that will have an impact on the world today, tomorrow, and beyond",
                                  effect: hr,
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e("div", {
                              className: "framer-bk8em4",
                              children: e(ur, {
                                animate: yr,
                                className: "framer-ak7qne",
                                "data-framer-appear-id": "ak7qne",
                                "data-framer-name": "Buttons",
                                initial: gr,
                                optimized: !0,
                                children: d("div", {
                                  className: "framer-lg8rif",
                                  children: [
                                    e(ur, {
                                      animate: yr,
                                      className: "framer-1p9qiz9",
                                      "data-framer-appear-id": "1p9qiz9",
                                      "data-framer-name": "Buttons",
                                      initial: gr,
                                      optimized: !0,
                                      children: e(T, {
                                        breakpoint: E,
                                        overrides: {
                                          GhsmaoWo7: {
                                            y:
                                              (r?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              80 +
                                              0 +
                                              97.92 +
                                              0 +
                                              388.56 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          iNw5uXiGc: {
                                            y:
                                              (r?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              80 +
                                              0 +
                                              118.2904 +
                                              0 +
                                              388.56 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          Re1DApldz: {
                                            y:
                                              (r?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              80 +
                                              0 +
                                              82.92 +
                                              0 +
                                              388.56 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: e(B, {
                                          height: 40,
                                          y:
                                            (r?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            227.92 +
                                            0 +
                                            388.56 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: e(q, {
                                            className:
                                              "framer-1ahlzet-container",
                                            nodeId: "FCKT0U8ty",
                                            scopeId: "Z7s0mVtRR",
                                            children: e(tt, {
                                              height: "100%",
                                              id: "FCKT0U8ty",
                                              layoutId: "FCKT0U8ty",
                                              Mv16WKTEe: "Claim your invite",
                                              variant: "LO7KZSQ24",
                                              width: "100%",
                                              zzdhFKk9U:
                                                "https://tapflow.co/auth/invite",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: e(c, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-oh30q",
                                          "data-styles-preset": "FwmuxBMQR",
                                          style: {
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "rgb(150, 150, 150)",
                                          },
                                          children: "*For now, invite-only ",
                                        }),
                                      }),
                                      className: "framer-m4akh3",
                                      effect: hr,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    d("div", {
                      className: "framer-qetfqf",
                      "data-framer-name": "Wrapper",
                      children: [
                        e("div", {
                          className: "framer-1tzfusu",
                          "data-framer-name": "Content",
                          children: d("div", {
                            className: "framer-w07yyr",
                            "data-framer-name": "Intro + Trust",
                            children: [
                              e(B, {
                                children: e(q, {
                                  className: "framer-1w59ruq-container",
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: "uxu3CfMbM",
                                  scopeId: "Z7s0mVtRR",
                                  children: e(T, {
                                    breakpoint: E,
                                    overrides: {
                                      GhsmaoWo7: {
                                        borderRadius: 8,
                                        bottomLeftRadius: 8,
                                        bottomRightRadius: 8,
                                        topLeftRadius: 8,
                                        topRightRadius: 8,
                                      },
                                      Re1DApldz: {
                                        borderRadius: 8,
                                        bottomLeftRadius: 8,
                                        bottomRightRadius: 8,
                                        topLeftRadius: 8,
                                        topRightRadius: 8,
                                      },
                                    },
                                    children: e(ve, {
                                      backgroundColor: "rgba(0, 0, 0, 0)",
                                      borderRadius: 16,
                                      bottomLeftRadius: 16,
                                      bottomRightRadius: 16,
                                      controls: !1,
                                      height: "100%",
                                      id: "uxu3CfMbM",
                                      isMixedBorderRadius: !1,
                                      layoutId: "uxu3CfMbM",
                                      loop: !0,
                                      muted: !0,
                                      objectFit: "cover",
                                      playing: !0,
                                      posterEnabled: !0,
                                      srcFile:
                                        "https://framerusercontent.com/assets/x55WYpCLiaS6yqWTPFMIILDXKco.mp4",
                                      srcType: "Upload",
                                      srcUrl:
                                        "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
                                      startTime: 0,
                                      style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                      },
                                      topLeftRadius: 16,
                                      topRightRadius: 16,
                                      volume: 25,
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                              e(T, {
                                breakpoint: E,
                                overrides: {
                                  GhsmaoWo7: {
                                    children: e(c, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-14qgaa",
                                        "data-styles-preset": "ZIat6mjgN",
                                        style: {
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(150, 150, 150)",
                                        },
                                        children:
                                          "Built for speed. Go from notes to a live product you can sell in 1\u20132 hours.",
                                      }),
                                    }),
                                  },
                                  Re1DApldz: {
                                    children: e(c, {
                                      children: e("p", {
                                        className:
                                          "framer-styles-preset-14qgaa",
                                        "data-styles-preset": "ZIat6mjgN",
                                        style: {
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(150, 150, 150)",
                                        },
                                        children:
                                          "Built for speed. Go from notes to a live product you can sell in 1\u20132 hours.",
                                      }),
                                    }),
                                  },
                                },
                                children: e(u, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      style: {
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(150, 150, 150)",
                                      },
                                      children:
                                        "Built for speed. Go from notes to a live product you can sell in 1\u20132 hours.",
                                    }),
                                  }),
                                  className: "framer-1r8onhx",
                                  effect: ha,
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              S() &&
                                e("section", {
                                  className:
                                    "framer-14efksu hidden-2444vp hidden-1s9c9g7",
                                  "data-framer-name": "Trust + Rating",
                                  children: d("section", {
                                    className: "framer-1n9hxl1",
                                    "data-framer-name": "Intro",
                                    id: ne,
                                    ref: be,
                                    children: [
                                      e(u, {
                                        __fromCanvasComponent: !0,
                                        children: e(c, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-1t136l8",
                                            "data-styles-preset": "Dc5RepiRa",
                                            style: {
                                              "--framer-text-color":
                                                "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                                            },
                                            children:
                                              "Ideas earn nothing in drafts.",
                                          }),
                                        }),
                                        className: "framer-lzoc27",
                                        effect: Ge,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(u, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: [
                                            e("p", {
                                              className:
                                                "framer-styles-preset-1d0x7ml",
                                              "data-styles-preset": "inMV6UGD0",
                                              style: {
                                                "--framer-text-color":
                                                  "rgb(150, 150, 150)",
                                              },
                                              children:
                                                "You already explain the same things \u2014 in Slack threads, meetings, Notion docs.",
                                            }),
                                            e("p", {
                                              className:
                                                "framer-styles-preset-1d0x7ml",
                                              "data-styles-preset": "inMV6UGD0",
                                              children: e("br", {
                                                className: "trailing-break",
                                              }),
                                            }),
                                            e("p", {
                                              className:
                                                "framer-styles-preset-1d0x7ml",
                                              "data-styles-preset": "inMV6UGD0",
                                              style: {
                                                "--framer-text-color":
                                                  "rgb(150, 150, 150)",
                                              },
                                              children:
                                                "Tapflow lets you turn that into something others can use \u2014 and something that earns.",
                                            }),
                                            e("p", {
                                              className:
                                                "framer-styles-preset-1d0x7ml",
                                              "data-styles-preset": "inMV6UGD0",
                                              children: e("br", {
                                                className: "trailing-break",
                                              }),
                                            }),
                                            e("p", {
                                              className:
                                                "framer-styles-preset-1d0x7ml",
                                              "data-styles-preset": "inMV6UGD0",
                                              style: {
                                                "--framer-text-color":
                                                  "rgb(150, 150, 150)",
                                              },
                                              children:
                                                "Most of your best thinking lives in private notes. What if you published just one of them?",
                                            }),
                                          ],
                                        }),
                                        className: "framer-ca1o8t",
                                        effect: Ge,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                      e(u, {
                                        __fromCanvasComponent: !0,
                                        children: e(c, {
                                          children: e("p", {
                                            className:
                                              "framer-styles-preset-1t136l8",
                                            "data-styles-preset": "Dc5RepiRa",
                                            style: {
                                              "--framer-text-color":
                                                "rgba(225, 199, 237, 0.96)",
                                            },
                                            children: e(Te, {
                                              href: "https://tapflow.co/auth/invite",
                                              motionChild: !0,
                                              nodeId: "SLbVqLUtu",
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: "Z7s0mVtRR",
                                              smoothScroll: !1,
                                              children: e(h.a, {
                                                className:
                                                  "framer-styles-preset-3z29la",
                                                "data-styles-preset":
                                                  "cHRC7KTPq",
                                                children: "Claim your invite",
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: "framer-rfhdub",
                                        effect: dt,
                                        fonts: ["Inter"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        }),
                        Y() &&
                          e("section", {
                            className:
                              "framer-1avu21i hidden-torpu9 hidden-m8p21b hidden-1s9c9g7",
                            "data-framer-name": "Trust + Rating",
                            children: d("section", {
                              className: "framer-mrsuhj",
                              "data-framer-name": "Intro",
                              id: oe,
                              ref: Ue,
                              children: [
                                e(u, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1t136l8",
                                      "data-styles-preset": "Dc5RepiRa",
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                                      },
                                      children: "Ideas earn nothing in drafts.",
                                    }),
                                  }),
                                  className: "framer-14z9y30",
                                  effect: Ge,
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                d("div", {
                                  className: "framer-1md5wcl",
                                  children: [
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: [
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "You already explain the same things \u2014 in Slack threads, meetings, Notion docs.",
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "Tapflow lets you turn that into something others can use \u2014 and something that earns.",
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "Most of your best thinking lives in private notes. What if you published just one of them?",
                                          }),
                                        ],
                                      }),
                                      className: "framer-3fm8ff",
                                      effect: Ge,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: e(c, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-14qgaa",
                                          "data-styles-preset": "ZIat6mjgN",
                                          style: {
                                            "--framer-text-color":
                                              "rgba(225, 199, 237, 0.96)",
                                          },
                                          children: e(Te, {
                                            href: "https://tapflow.co/auth/invite",
                                            motionChild: !0,
                                            nodeId: "BxsLxnlOR",
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: "Z7s0mVtRR",
                                            smoothScroll: !1,
                                            children: e(h.a, {
                                              className:
                                                "framer-styles-preset-3z29la",
                                              "data-styles-preset": "cHRC7KTPq",
                                              children: "Claim your invite",
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: "framer-13ewhid",
                                      effect: dt,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        Fe() &&
                          e("section", {
                            className:
                              "framer-16busno hidden-torpu9 hidden-m8p21b hidden-2444vp",
                            "data-framer-name": "Trust + Rating",
                            children: d("section", {
                              className: "framer-1cqnsv1",
                              "data-framer-name": "Intro",
                              id: I,
                              ref: x,
                              children: [
                                e(u, {
                                  __fromCanvasComponent: !0,
                                  children: e(c, {
                                    children: e("p", {
                                      className: "framer-styles-preset-1t136l8",
                                      "data-styles-preset": "Dc5RepiRa",
                                      style: {
                                        "--framer-text-color":
                                          "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                                      },
                                      children: "Ideas earn nothing in drafts.",
                                    }),
                                  }),
                                  className: "framer-1tr8kjj",
                                  effect: xr,
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                d("div", {
                                  className: "framer-1kv3wa2",
                                  children: [
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: d(c, {
                                        children: [
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "You already explain the same things \u2014 in Slack threads, meetings, Notion docs.",
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "Tapflow lets you turn that into something others can use \u2014 and something that earns.",
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            children: e("br", {
                                              className: "trailing-break",
                                            }),
                                          }),
                                          e("p", {
                                            className:
                                              "framer-styles-preset-14qgaa",
                                            "data-styles-preset": "ZIat6mjgN",
                                            style: {
                                              "--framer-text-color":
                                                "rgb(150, 150, 150)",
                                            },
                                            children:
                                              "Most of your best thinking lives in private notes. What if you published just one of them?",
                                          }),
                                        ],
                                      }),
                                      className: "framer-w15yoh",
                                      effect: xr,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(u, {
                                      __fromCanvasComponent: !0,
                                      children: e(c, {
                                        children: e("p", {
                                          className:
                                            "framer-styles-preset-14qgaa",
                                          "data-styles-preset": "ZIat6mjgN",
                                          style: {
                                            "--framer-text-color":
                                              "rgba(225, 199, 237, 0.96)",
                                          },
                                          children: e(Te, {
                                            href: "https://tapflow.co/auth/invite",
                                            motionChild: !0,
                                            nodeId: "qBkgYy8bR",
                                            openInNewTab: !1,
                                            relValues: [],
                                            scopeId: "Z7s0mVtRR",
                                            smoothScroll: !1,
                                            children: e(h.a, {
                                              className:
                                                "framer-styles-preset-3z29la",
                                              "data-styles-preset": "cHRC7KTPq",
                                              children: "Claim your invite",
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: "framer-1wfy8h1",
                                      effect: dt,
                                      fonts: ["Inter"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                e(T, {
                  breakpoint: E,
                  overrides: {
                    GhsmaoWo7: { y: (r?.y || 0) + 0 + 2762 },
                    iNw5uXiGc: { y: (r?.y || 0) + 0 + 2170.3407 },
                    Re1DApldz: { y: (r?.y || 0) + 0 + 2712 },
                  },
                  children: e(B, {
                    height: 489,
                    width: r?.width || "100vw",
                    y: (r?.y || 0) + 0 + 2469.6,
                    children: e(q, {
                      className: "framer-9wb14e-container",
                      nodeId: "Otm1Y8p2p",
                      scopeId: "Z7s0mVtRR",
                      children: e(T, {
                        breakpoint: E,
                        overrides: {
                          GhsmaoWo7: { variant: "y_M8a6Nag" },
                          iNw5uXiGc: { variant: "dliz4PR3R" },
                          Re1DApldz: { variant: "KDyNaPM2m" },
                        },
                        children: e(at, {
                          height: "100%",
                          id: "Otm1Y8p2p",
                          layoutId: "Otm1Y8p2p",
                          style: { width: "100%" },
                          variant: "TYCIeSgTT",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
                e("div", {
                  className: "framer-1ts4do7",
                  "data-framer-name": "Code **Must be on each page",
                  children: e(B, {
                    children: e(q, {
                      className: "framer-3k5o4i-container",
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      nodeId: "BE4kdm8lA",
                      scopeId: "Z7s0mVtRR",
                      children: e(et, {
                        enableSelection: !0,
                        height: "100%",
                        id: "BE4kdm8lA",
                        layoutId: "BE4kdm8lA",
                        selectionBackgroundColor:
                          "var(--token-b5e49964-bf57-4389-8d97-5913008b6ebd, rgba(72, 70, 255, 0.16))",
                        selectionTextColor:
                          "var(--token-2d0a1fe9-66b7-4e55-9ef6-2872c40c6330, rgb(72, 70, 255))",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(B, {
                  children: e(q, {
                    className: "framer-1yd6yob-container",
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    layoutScroll: !0,
                    nodeId: "g96h0w7vw",
                    scopeId: "Z7s0mVtRR",
                    children: e(we, {
                      height: "100%",
                      id: "g96h0w7vw",
                      layoutId: "g96h0w7vw",
                      theme: "dark",
                      type: "featured",
                      url: "https://www.producthunt.com/posts/tapflow-2-0",
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            e("div", { id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ca = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PEjye.framer-1uqtlh6, .framer-PEjye .framer-1uqtlh6 { display: block; }",
    ".framer-PEjye.framer-torpu9 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1300px; }",
    ".framer-PEjye .framer-r4hwb6-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 100%; z-index: 10; }",
    ".framer-PEjye .framer-mxn1rw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 100vh; min-width: 320px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1a1q23a { background-color: var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, #ff3d3f); flex: none; height: 1px; left: 0px; opacity: 0; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-PEjye .framer-1lh0knp { flex: none; height: 80px; overflow: hidden; position: relative; width: 100%; }",
    ".framer-PEjye .framer-wathut { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; min-height: 600px; overflow: visible; padding: 0px 80px 0px 80px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1azee46 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 117%; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: absolute; top: -80px; width: 100%; z-index: 0; }",
    ".framer-PEjye .framer-msm3a9 { background: linear-gradient(24deg, var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0f11) 0%, rgba(0, 0, 0, 0) 58.192567567567565%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
    ".framer-PEjye .framer-1tfjkjp { flex: 1 0 0px; height: 100%; overflow: hidden; position: relative; width: 1px; }",
    ".framer-PEjye .framer-txjkhb { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 99.6727195945946%); bottom: 0px; flex: none; height: 167px; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 1; }",
    ".framer-PEjye .framer-1oz08fe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px 0px 80px 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1o09lit { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1imcsah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1ef1k4o, .framer-PEjye .framer-m4akh3, .framer-PEjye .framer-1r8onhx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-PEjye .framer-3hk37s-container, .framer-PEjye .framer-1ahlzet-container, .framer-PEjye .framer-3k5o4i-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-PEjye .framer-1khzc3k { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-PEjye .framer-bk8em4, .framer-PEjye .framer-lg8rif { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-PEjye .framer-ak7qne, .framer-PEjye .framer-1p9qiz9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }",
    ".framer-PEjye .framer-qetfqf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 0px 100px 80px 100px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1tzfusu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-w07yyr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1w59ruq-container { flex: none; height: auto; max-width: 300%; position: relative; width: 100%; }",
    ".framer-PEjye .framer-14efksu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 0px 60px 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1n9hxl1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 978px; justify-content: center; min-height: 960px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-PEjye .framer-lzoc27, .framer-PEjye .framer-ca1o8t, .framer-PEjye .framer-rfhdub, .framer-PEjye .framer-13ewhid, .framer-PEjye .framer-1wfy8h1 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 453px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-PEjye .framer-1avu21i, .framer-PEjye .framer-16busno { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-PEjye .framer-mrsuhj, .framer-PEjye .framer-1cqnsv1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-PEjye .framer-14z9y30, .framer-PEjye .framer-1tr8kjj { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 340px; word-break: break-word; word-wrap: break-word; }",
    ".framer-PEjye .framer-1md5wcl, .framer-PEjye .framer-1kv3wa2 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; }",
    ".framer-PEjye .framer-3fm8ff, .framer-PEjye .framer-w15yoh { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-PEjye .framer-9wb14e-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-PEjye .framer-1ts4do7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: calc(50.00000000000002% - 100% / 2); opacity: 0; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: -1; }",
    ".framer-PEjye .framer-1yd6yob-container { bottom: 24px; flex: none; height: auto; position: fixed; right: 24px; width: auto; z-index: 1; }",
    ...je,
    ...Nt,
    ...kt,
    ...fr,
    ...Tt,
    ...lr,
    "@media (min-width: 1024px) and (max-width: 1299px) { .framer-PEjye.framer-torpu9 { width: 1024px; } .framer-PEjye .framer-wathut { height: 74.07407407407408vh; padding: 0px 40px 0px 40px; } .framer-PEjye .framer-1oz08fe { padding: 0px 0px 40px 0px; } .framer-PEjye .framer-1o09lit { width: 80%; } .framer-PEjye .framer-1khzc3k { max-width: 350px; } .framer-PEjye .framer-qetfqf { gap: 80px; padding: 0px 40px 40px 40px; } .framer-PEjye .framer-1tzfusu { gap: 80px; } .framer-PEjye .framer-1n9hxl1 { width: 1025px; }}",
    "@media (max-width: 439px) { .framer-PEjye.framer-torpu9 { width: 390px; } .framer-PEjye .framer-r4hwb6-container, .framer-PEjye .framer-1imcsah { order: 0; } .framer-PEjye .framer-mxn1rw { order: 1; } .framer-PEjye .framer-wathut { height: 670px; min-height: unset; padding: 0px 40px 0px 40px; } .framer-PEjye .framer-1azee46 { height: 108%; } .framer-PEjye .framer-1oz08fe { padding: 0px 0px 40px 0px; width: 110%; } .framer-PEjye .framer-1o09lit { max-width: 400px; width: 110%; } .framer-PEjye .framer-1khzc3k { order: 1; width: 335px; } .framer-PEjye .framer-qetfqf { gap: 320px; max-width: unset; padding: 10px 24px 240px 24px; } .framer-PEjye .framer-1tzfusu { gap: 0px; max-width: unset; min-width: 360px; padding: 80px 0px 0px 0px; } .framer-PEjye .framer-w07yyr { gap: 24px; } .framer-PEjye .framer-1w59ruq-container { max-width: 100%; order: 0; } .framer-PEjye .framer-1r8onhx { order: 1; white-space: pre-wrap; width: 340px; word-break: break-word; word-wrap: break-word; } .framer-PEjye .framer-9wb14e-container { order: 2; } .framer-PEjye .framer-1ts4do7 { flex-direction: column; order: 3; } .framer-PEjye .framer-1yd6yob-container { order: 4; }}",
    "@media (min-width: 440px) and (max-width: 1023px) { .framer-PEjye.framer-torpu9 { width: 440px; } .framer-PEjye .framer-r4hwb6-container, .framer-PEjye .framer-1a1q23a { order: 0; } .framer-PEjye .framer-mxn1rw, .framer-PEjye .framer-1lh0knp { order: 1; } .framer-PEjye .framer-wathut { height: 700px; min-height: unset; order: 2; padding: 0px 40px 0px 40px; } .framer-PEjye .framer-1azee46 { height: 108%; } .framer-PEjye .framer-1oz08fe { padding: 0px 0px 40px 0px; width: 110%; } .framer-PEjye .framer-1o09lit { max-width: 400px; width: 110%; } .framer-PEjye .framer-1khzc3k { width: 334px; } .framer-PEjye .framer-qetfqf { gap: 340px; max-width: unset; order: 3; padding: 10px 24px 240px 24px; } .framer-PEjye .framer-1tzfusu { gap: 0px; max-width: unset; min-width: 400px; padding: 80px 0px 0px 0px; } .framer-PEjye .framer-w07yyr { gap: 24px; } .framer-PEjye .framer-1w59ruq-container { max-width: 100%; } .framer-PEjye .framer-1r8onhx { white-space: pre-wrap; width: 340px; word-break: break-word; word-wrap: break-word; } .framer-PEjye .framer-9wb14e-container { order: 2; } .framer-PEjye .framer-1ts4do7 { flex-direction: column; order: 3; } .framer-PEjye .framer-1yd6yob-container { order: 4; }}",
  ],
  We = Pe(va, Ca, "framer-PEjye"),
  _i = We;
We.displayName = "Features";
We.defaultProps = { height: 3329.5, width: 1300 };
ze(
  We,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...Qr,
    ...ea,
    ...ta,
    ...ra,
    ...aa,
    ...na,
    ...oa,
    ...z(Ne),
    ...z(zt),
    ...z(It),
    ...z(cr),
    ...z(At),
    ...z(sr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ri = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerZ7s0mVtRR",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1300",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerImmutableVariables: "true",
        framerAcceptsLayoutTemplate: "true",
        framerComponentViewportWidth: "true",
        framerColorSyntax: "true",
        framerScrollSections:
          '{"SwrrYTWYy":{"pattern":":SwrrYTWYy","name":"navigation"},"kxVuIqS_9":{"pattern":":kxVuIqS_9","name":"intro"},"WTeqxoVZX":{"pattern":":WTeqxoVZX","name":"intro"},"cQocWcnEg":{"pattern":":cQocWcnEg","name":"intro"}}',
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"iNw5uXiGc":{"layout":["fixed","auto"]},"Re1DApldz":{"layout":["fixed","auto"]},"GhsmaoWo7":{"layout":["fixed","auto"]}}}',
        framerAutoSizeImages: "true",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "3329.5",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Ri as __FramerMetadata__, _i as default };
//# sourceMappingURL=JTZC8G3LMKVS8oZoTz6yZnt_2C0JjfFCzoL2H9t0Y8k.JXFA22KX.mjs.map
