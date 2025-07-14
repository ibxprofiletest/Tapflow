import {
  Aa as U,
  C as ht,
  Da as Ve,
  Ea as J,
  Fa as le,
  Ga as ae,
  H as o,
  K as H,
  N as E,
  Q as N,
  T as yt,
  X as gt,
  Y as Z,
  Z as W,
  aa as _,
  e as A,
  g as Q,
  h as r,
  ia as p,
  ka as $e,
  m as ut,
  na as Ce,
  s as Le,
  wa as G,
  x as O,
  ya as K,
  za as et,
} from "./chunk-BMMUF56P.mjs";
import {
  A as h,
  d as l,
  i as q,
  n as ve,
  o as X,
  p as pt,
  q as M,
  t as j,
  u as Y,
  v as Ee,
  z as e,
} from "./chunk-EREUIR4R.mjs";
import { c as B } from "./chunk-A3IIQ6X3.mjs";
function tt(t) {
  return (
    pt(() => {
      if (t.enableSelection) {
        let a = "selection-styles",
          s = document.getElementById(a);
        s && s.remove();
        let n = document.createElement("style");
        (n.id = a),
          (n.innerHTML = `
        ::selection { 
          background: ${t.selectionBackgroundColor};
          color: ${t.selectionTextColor};
        }
        ::-moz-selection { 
          background: ${t.selectionBackgroundColor};
          color: ${t.selectionTextColor};
        }`),
          document.head.appendChild(n);
      } else {
        let a = document.getElementById("selection-styles");
        a && a.remove();
      }
    }, [t.enableSelection, t.selectionBackgroundColor, t.selectionTextColor]),
    e("div", {})
  );
}
tt.displayName = "Selection colors";
H(tt, {
  enableSelection: {
    title: "Selection",
    type: o.Boolean,
    defaultValue: !0,
    enabledTitle: "Yes",
    disabledTitle: "No",
    description: "Use to change the colour of selected text and background",
  },
  selectionBackgroundColor: {
    title: "Background",
    type: o.Color,
    defaultValue: "#000",
    hidden(t) {
      return !t.enableSelection;
    },
  },
  selectionTextColor: {
    title: "Text color",
    type: o.Color,
    defaultValue: "#fff",
    hidden(t) {
      return !t.enableSelection;
    },
  },
});
K.loadFonts([
  "FR;InterDisplay",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-Italic",
]);
var Ut = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2",
          weight: "400",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2",
          weight: "400",
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
  Ft = [
    `.framer-qgMW9 .framer-styles-preset-1x04h7g:not(.rich-text-wrapper), .framer-qgMW9 .framer-styles-preset-1x04h7g.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 13px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  wt = "framer-qgMW9";
K.loadFonts([
  "FR;InterDisplay-Medium",
  "FR;InterDisplay-SemiBold",
  "FR;InterDisplay-SemiBoldItalic",
  "FR;InterDisplay-MediumItalic",
]);
var xt = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2",
          weight: "500",
        },
      ],
    },
  ],
  It = [
    `.framer-je2T7 .framer-styles-preset-1ib9ynh:not(.rich-text-wrapper), .framer-je2T7 .framer-styles-preset-1ib9ynh.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 500; --framer-letter-spacing: 0em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0e11); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
    `@media (max-width: 1299px) and (min-width: 0px) { .framer-je2T7 .framer-styles-preset-1ib9ynh:not(.rich-text-wrapper), .framer-je2T7 .framer-styles-preset-1ib9ynh.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 500; --framer-letter-spacing: 0.02em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, #0e0e11); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
  ],
  vt = "framer-je2T7";
K.loadFonts([
  "FR;InterDisplay-SemiBold",
  "FR;InterDisplay-Bold",
  "FR;InterDisplay-BoldItalic",
  "FR;InterDisplay-SemiBoldItalic",
]);
var Ct = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2",
          weight: "700",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2",
          weight: "600",
        },
      ],
    },
  ],
  Dt = [
    `.framer-kfIXr .framer-styles-preset-e0i4gn:not(.rich-text-wrapper), .framer-kfIXr .framer-styles-preset-e0i4gn.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0.04em; --framer-line-height: 80%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
  ],
  bt = "framer-kfIXr";
var er = ["giHa8iCLq"],
  tr = "framer-TcO4X",
  rr = { giHa8iCLq: "framer-v-vf9w8c" };
var ar = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  nr = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  or = r(l),
  sr = ({
    background: t,
    height: a,
    id: s,
    text: n,
    textColor: d,
    width: S,
    ...I
  }) => {
    var f, v, C;
    return {
      ...I,
      VRNDXSwE9:
        (f = t ?? I.VRNDXSwE9) !== null && f !== void 0
          ? f
          : "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
      X7BXT0DN4: (v = n ?? I.X7BXT0DN4) !== null && v !== void 0 ? v : "Badge",
      yF8Wiw9dW:
        (C = d ?? I.yF8Wiw9dW) !== null && C !== void 0
          ? C
          : "var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72))",
    };
  },
  ir = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  lr = q(function (t, a) {
    let { activeLocale: s, setLocale: n } = O(),
      {
        style: d,
        className: S,
        layoutId: I,
        variant: f,
        X7BXT0DN4: v,
        yF8Wiw9dW: C,
        VRNDXSwE9: R,
        ...m
      } = sr(t),
      {
        baseVariant: c,
        classNames: F,
        clearLoadingGesture: $,
        gestureHandlers: P,
        gestureVariant: u,
        isLoading: x,
        setGestureState: z,
        setVariant: D,
        variants: g,
      } = G({
        cycleOrder: er,
        defaultVariant: "giHa8iCLq",
        variant: f,
        variantClassNames: rr,
      }),
      b = ir(t, g),
      i = Y(null),
      L = M(),
      w = [bt],
      y = Z();
    return e(Q, {
      id: I ?? L,
      children: e(or, {
        animate: g,
        initial: !1,
        children: e(nr, {
          value: ar,
          children: e(r.div, {
            ...m,
            ...P,
            className: E(tr, ...w, "framer-vf9w8c", S, F),
            "data-framer-name": "Variant 1",
            layoutDependency: b,
            layoutId: "giHa8iCLq",
            ref: a ?? i,
            style: {
              backgroundColor: R,
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              borderTopLeftRadius: 32,
              borderTopRightRadius: 32,
              ...d,
            },
            children: e(U, {
              __fromCanvasComponent: !0,
              children: e(l, {
                children: e(r.p, {
                  className: "framer-styles-preset-e0i4gn",
                  "data-styles-preset": "lANTtZW42",
                  style: {
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, var(--variable-reference-yF8Wiw9dW-uTnmg44b1))",
                  },
                  children: "Badge",
                }),
              }),
              className: "framer-10ccapt",
              fonts: ["Inter"],
              layoutDependency: b,
              layoutId: "VbIHCbwbJ",
              style: {
                "--extracted-r6o4lv":
                  "var(--variable-reference-yF8Wiw9dW-uTnmg44b1)",
                "--framer-paragraph-spacing": "0px",
                "--variable-reference-yF8Wiw9dW-uTnmg44b1": C,
              },
              text: v,
              verticalAlignment: "top",
              withExternalLayout: !0,
            }),
          }),
        }),
      }),
    });
  }),
  cr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-TcO4X.framer-1bqqqwk, .framer-TcO4X .framer-1bqqqwk { display: block; }",
    ".framer-TcO4X.framer-vf9w8c { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: 24px; justify-content: center; overflow: visible; padding: 0px 8px 0px 8px; position: relative; width: min-content; }",
    ".framer-TcO4X .framer-10ccapt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TcO4X.framer-vf9w8c { gap: 0px; } .framer-TcO4X.framer-vf9w8c > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-TcO4X.framer-vf9w8c > :first-child { margin-left: 0px; } .framer-TcO4X.framer-vf9w8c > :last-child { margin-right: 0px; } }",
    ...Dt,
  ],
  Be = N(lr, cr, "framer-TcO4X"),
  rt = Be;
Be.displayName = "Badge";
Be.defaultProps = { height: 24, width: 66 };
H(Be, {
  X7BXT0DN4: {
    defaultValue: "Badge",
    displayTextArea: !1,
    title: "Text",
    type: o.String,
  },
  yF8Wiw9dW: {
    defaultValue:
      'var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72)) /* {"name":"Dark 72"} */',
    title: "Text color",
    type: o.Color,
  },
  VRNDXSwE9: {
    defaultValue:
      'var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63)) /* {"name":"Attention 100"} */',
    title: "Background",
    type: o.Color,
  },
});
J(
  Be,
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
    ...ae(Ct),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var fr = le(rt),
  mr = {
    qZMGAGPE0: { hover: !0 },
    symjmldSc: { hover: !0 },
    UkUfAzkeL: { hover: !0 },
  },
  dr = [
    "symjmldSc",
    "qZMGAGPE0",
    "M28i9A74g",
    "pvwC0M2D3",
    "UkUfAzkeL",
    "tHbpqM7yv",
  ],
  pr = "framer-sI6sN",
  ur = {
    M28i9A74g: "framer-v-1jgt2kj",
    pvwC0M2D3: "framer-v-9e86c9",
    qZMGAGPE0: "framer-v-1j7jq13",
    symjmldSc: "framer-v-hecye6",
    tHbpqM7yv: "framer-v-1b990dx",
    UkUfAzkeL: "framer-v-118ix00",
  };
function at(t, ...a) {
  let s = {};
  return a?.forEach((n) => n && Object.assign(s, t[n])), s;
}
var hr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  yr = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  gr = r.create(l),
  Ur = {
    "Ghost / Submenu opened ": "M28i9A74g",
    "Ghost / Tab Selected": "pvwC0M2D3",
    Blue: "UkUfAzkeL",
    Ghost: "tHbpqM7yv",
    White: "symjmldSc",
  },
  Fr = ({
    badge: t,
    badgeColor: a,
    badgeText: s,
    click: n,
    height: d,
    hover: S,
    id: I,
    link: f,
    newTab: v,
    text: C,
    width: R,
    ...m
  }) => ({
    ...m,
    Kr62I1Ee9: f ?? m.Kr62I1Ee9,
    Mv16WKTEe: C ?? m.Mv16WKTEe ?? "Button",
    NctncU19N:
      a ??
      m.NctncU19N ??
      "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
    r9wjJW8ZN: t ?? m.r9wjJW8ZN,
    s4QYqX_Ju: n ?? m.s4QYqX_Ju,
    UU0IU6Qs2: S ?? m.UU0IU6Qs2,
    variant: Ur[m.variant] ?? m.variant ?? "symjmldSc",
    XiCzUhcM5: v ?? m.XiCzUhcM5,
    xkpUt4F21: s ?? m.xkpUt4F21 ?? "New",
  }),
  wr = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  xr = q(function (t, a) {
    let s = Y(null),
      n = a ?? s,
      d = M(),
      { activeLocale: S, setLocale: I } = O(),
      f = Z(),
      {
        style: v,
        className: C,
        layoutId: R,
        variant: m,
        Mv16WKTEe: c,
        Kr62I1Ee9: F,
        XiCzUhcM5: $,
        s4QYqX_Ju: P,
        UU0IU6Qs2: u,
        r9wjJW8ZN: x,
        xkpUt4F21: z,
        NctncU19N: D,
        ...g
      } = Fr(t),
      {
        baseVariant: b,
        classNames: i,
        clearLoadingGesture: L,
        gestureHandlers: w,
        gestureVariant: y,
        isLoading: se,
        setGestureState: he,
        setVariant: ye,
        variants: ie,
      } = G({
        cycleOrder: dr,
        defaultVariant: "symjmldSc",
        enabledGestures: mr,
        ref: n,
        variant: m,
        variantClassNames: ur,
      }),
      ge = wr(t, ie),
      { activeVariantCallback: we, delay: de } = Ce(b),
      ne = we(async (...Ue) => {
        if ((he({ isPressed: !1 }), P && (await P(...Ue)) === !1)) return !1;
      }),
      fe = we(async (...Ue) => {
        if ((he({ isHovered: !0 }), u && (await u(...Ue)) === !1)) return !1;
      }),
      me = E(pr, ...[vt, wt]);
    return e(Q, {
      id: R ?? d,
      children: e(gr, {
        animate: ie,
        initial: !1,
        children: e(yr, {
          value: hr,
          children: e(p, {
            href: F,
            motionChild: !0,
            nodeId: "symjmldSc",
            openInNewTab: $,
            scopeId: "F5glnIxIK",
            smoothScroll: !0,
            children: h(r.a, {
              ...g,
              ...w,
              className: `${E(me, "framer-hecye6", C, i)} framer-33mo6g`,
              "data-framer-name": "White",
              layoutDependency: ge,
              layoutId: "symjmldSc",
              ref: n,
              style: {
                backgroundColor:
                  "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                borderBottomLeftRadius: 9,
                borderBottomRightRadius: 9,
                borderTopLeftRadius: 9,
                borderTopRightRadius: 9,
                opacity: 1,
                ...v,
              },
              variants: {
                "qZMGAGPE0-hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.07)",
                },
                "symjmldSc-hover": { backgroundColor: "rgb(225, 199, 237)" },
                "UkUfAzkeL-hover": {
                  backgroundColor: "rgb(225, 199, 237)",
                  opacity: 0.8,
                },
                M28i9A74g: {
                  backgroundColor:
                    "var(--token-05ef185e-4a65-4b7f-aecb-3ad4381563cf, rgba(14, 15, 17, 0.05))",
                },
                pvwC0M2D3: {
                  backgroundColor:
                    "var(--token-05ef185e-4a65-4b7f-aecb-3ad4381563cf, rgba(14, 15, 17, 0.05))",
                },
                qZMGAGPE0: {
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                },
                tHbpqM7yv: {
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                },
                UkUfAzkeL: {
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                  borderTopLeftRadius: 14,
                  borderTopRightRadius: 14,
                },
              },
              ...at(
                {
                  "qZMGAGPE0-hover": { "data-framer-name": void 0 },
                  "symjmldSc-hover": { "data-framer-name": void 0 },
                  "UkUfAzkeL-hover": { "data-framer-name": void 0 },
                  M28i9A74g: {
                    "data-framer-name": "Ghost / Submenu opened ",
                    "data-highlight": !0,
                    onMouseEnter: fe,
                    onTap: ne,
                  },
                  pvwC0M2D3: {
                    "data-framer-name": "Ghost / Tab Selected",
                    "data-highlight": !0,
                    onMouseEnter: fe,
                    onTap: ne,
                  },
                  qZMGAGPE0: {
                    "data-framer-name": "Ghost",
                    "data-highlight": !0,
                    onMouseEnter: fe,
                    onTap: ne,
                  },
                  tHbpqM7yv: {
                    "data-framer-name": "Ghost",
                    "data-highlight": !0,
                    onMouseEnter: fe,
                    onTap: ne,
                  },
                  UkUfAzkeL: { "data-framer-name": "Blue" },
                },
                b,
                y
              ),
              children: [
                e(U, {
                  __fromCanvasComponent: !0,
                  children: e(l, {
                    children: e(r.p, {
                      className: "framer-styles-preset-1ib9ynh",
                      "data-styles-preset": "NMzSZBKI3",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(0, 0, 0)))",
                      },
                      children: "Button",
                    }),
                  }),
                  className: "framer-h2rsyl",
                  fonts: ["Inter"],
                  layoutDependency: ge,
                  layoutId: "ESG37723E",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(0, 0, 0))",
                  },
                  text: c,
                  variants: {
                    "qZMGAGPE0-hover": {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    },
                    "symjmldSc-hover": { "--extracted-r6o4lv": "rgb(0, 0, 0)" },
                    qZMGAGPE0: { "--extracted-r6o4lv": "rgb(148, 148, 148)" },
                    tHbpqM7yv: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                    UkUfAzkeL: {
                      "--extracted-r6o4lv":
                        "var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(14, 15, 17))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...at(
                    {
                      "qZMGAGPE0-hover": {
                        children: e(l, {
                          children: e(r.p, {
                            className: "framer-styles-preset-1ib9ynh",
                            "data-styles-preset": "NMzSZBKI3",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      "symjmldSc-hover": {
                        children: e(l, {
                          children: e(r.p, {
                            className: "framer-styles-preset-1ib9ynh",
                            "data-styles-preset": "NMzSZBKI3",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(0, 0, 0))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      qZMGAGPE0: {
                        children: e(l, {
                          children: e(r.p, {
                            className: "framer-styles-preset-1ib9ynh",
                            "data-styles-preset": "NMzSZBKI3",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(148, 148, 148))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      tHbpqM7yv: {
                        children: e(l, {
                          children: e(r.p, {
                            className: "framer-styles-preset-1x04h7g",
                            "data-styles-preset": "dj_MW1Noe",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      UkUfAzkeL: {
                        children: e(l, {
                          children: e(r.p, {
                            className: "framer-styles-preset-1ib9ynh",
                            "data-styles-preset": "NMzSZBKI3",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-570b2f2b-e7a3-4440-a1b5-6d52ceddedc1, rgb(14, 15, 17)))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                    },
                    b,
                    y
                  ),
                }),
                x &&
                  e(W, {
                    height: 24,
                    y: (f?.y || 0) + (0 + ((f?.height || 34) - 0 - 24) / 2),
                    ...at(
                      {
                        tHbpqM7yv: {
                          y:
                            (f?.y || 0) +
                            (0 + ((f?.height || 29) - 0 - 24) / 2),
                        },
                      },
                      b,
                      y
                    ),
                    children: e(_, {
                      className: "framer-1xvp7c3-container",
                      layoutDependency: ge,
                      layoutId: "B1Njnq32L-container",
                      nodeId: "B1Njnq32L",
                      rendersWithMotion: !0,
                      scopeId: "F5glnIxIK",
                      children: e(rt, {
                        height: "100%",
                        id: "B1Njnq32L",
                        layoutId: "B1Njnq32L",
                        style: { height: "100%" },
                        VRNDXSwE9: D,
                        width: "100%",
                        X7BXT0DN4: z,
                        yF8Wiw9dW:
                          "var(--token-f55df62d-817a-47db-857c-83650e997163, rgba(14, 14, 17, 0.72))",
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Ir = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-sI6sN.framer-33mo6g, .framer-sI6sN .framer-33mo6g { display: block; }",
    ".framer-sI6sN.framer-hecye6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 34px; justify-content: center; overflow: visible; padding: 0px 14px 0px 14px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-sI6sN .framer-h2rsyl { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-sI6sN .framer-1xvp7c3-container { flex: none; height: 24px; position: relative; width: auto; }",
    ".framer-sI6sN.framer-v-1j7jq13.framer-hecye6 { padding: 0px 10px 0px 10px; }",
    ".framer-sI6sN.framer-v-118ix00.framer-hecye6 { padding: 0px 18px 0px 18px; }",
    ".framer-sI6sN.framer-v-1b990dx.framer-hecye6 { height: 29px; padding: 0px 10px 0px 10px; }",
    ...It,
    ...Ft,
  ],
  Re = N(xr, Ir, "framer-sI6sN"),
  be = Re;
Re.displayName = "Buttons / Medium";
Re.defaultProps = { height: 34, width: 69 };
H(Re, {
  variant: {
    options: [
      "symjmldSc",
      "qZMGAGPE0",
      "M28i9A74g",
      "pvwC0M2D3",
      "UkUfAzkeL",
      "tHbpqM7yv",
    ],
    optionTitles: [
      "White",
      "Ghost",
      "Ghost / Submenu opened ",
      "Ghost / Tab Selected",
      "Blue",
      "Ghost",
    ],
    title: "Variant",
    type: o.Enum,
  },
  Mv16WKTEe: {
    defaultValue: "Button",
    displayTextArea: !1,
    placeholder: "Text",
    title: "Text",
    type: o.String,
  },
  Kr62I1Ee9: { title: "Link", type: o.Link },
  XiCzUhcM5: { defaultValue: !1, title: "New Tab", type: o.Boolean },
  s4QYqX_Ju: { title: "Click", type: o.EventHandler },
  UU0IU6Qs2: { title: "Hover", type: o.EventHandler },
  r9wjJW8ZN: { defaultValue: !1, title: "Badge", type: o.Boolean },
  xkpUt4F21: {
    defaultValue: "New",
    displayTextArea: !1,
    placeholder: "Badge text",
    title: "Badge text",
    type: o.String,
  },
  NctncU19N: {
    defaultValue:
      'var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63)) /* {"name":"Attention 100"} */',
    title: "Badge color",
    type: o.Color,
  },
});
J(
  Re,
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
    ...fr,
    ...ae(xt),
    ...ae(Ut),
  ],
  { supportsExplicitInterCodegen: !0 }
);
K.loadFonts([
  "FR;InterDisplay-Light",
  "FR;InterDisplay-SemiBold",
  "FR;InterDisplay-SemiBoldItalic",
  "FR;InterDisplay-LightItalic",
]);
var Te = [
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
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/JVGAsgKKXCCsDQ3MCrxIs5u1U.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/GeFYhvsobZhw8u0Xza2zCmC8Cw.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/8dxmIktsyEgZt0OloSu5gz6TgLI.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/f2kclCrwmFV8YeznrosrT3kcjE.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/HTPyW5jOpXfwIja9CrgNJUDriY4.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/SorE7ZPZIqD5pBy9oKeSOEC0Q5k.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/xFtzow8wtMpaEQuIGgCbt25Qorg.woff2",
          weight: "300",
        },
      ],
    },
  ],
  qe = [
    `.framer-RQNyq .framer-styles-preset-oh30q:not(.rich-text-wrapper), .framer-RQNyq .framer-styles-preset-oh30q.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on, 'ss07' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0.03em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-b90df2b5-0220-4015-b318-c7544e3e4fd4, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  Xe = "framer-RQNyq";
K.loadFonts([]);
var Me = [{ explicitInter: !0, fonts: [] }],
  je = [
    ".framer-B3bsc .framer-styles-preset-1eahpii:not(.rich-text-wrapper), .framer-B3bsc .framer-styles-preset-1eahpii.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-color: var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48)); --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; transition: color 0.4s cubic-bezier(0.12, 0.23, 0.5, 1) 0s; }",
  ],
  Ye = "framer-B3bsc";
var vr = ["DZvrXa0YP"],
  Cr = "framer-ZifpV",
  Dr = { DZvrXa0YP: "framer-v-1jtqse8" };
var br = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ar = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  Er = r(l),
  Br = ({ height: t, id: a, width: s, ...n }) => ({ ...n }),
  Rr = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  kr = q(function (t, a) {
    let { activeLocale: s, setLocale: n } = O(),
      { style: d, className: S, layoutId: I, variant: f, ...v } = Br(t),
      {
        baseVariant: C,
        classNames: R,
        clearLoadingGesture: m,
        gestureHandlers: c,
        gestureVariant: F,
        isLoading: $,
        setGestureState: P,
        setVariant: u,
        variants: x,
      } = G({
        cycleOrder: vr,
        defaultVariant: "DZvrXa0YP",
        variant: f,
        variantClassNames: Dr,
      }),
      z = Rr(t, x),
      D = Y(null),
      g = M(),
      b = [],
      i = Z();
    return e(Q, {
      id: I ?? g,
      children: e(Er, {
        animate: x,
        initial: !1,
        children: e(Ar, {
          value: br,
          children: e(r.div, {
            ...v,
            ...c,
            className: E(Cr, ...b, "framer-1jtqse8", S, R),
            "data-framer-name": "Variant 1",
            layoutDependency: z,
            layoutId: "DZvrXa0YP",
            ref: a ?? D,
            style: {
              boxShadow:
                "inset 0px 0.5px 0px 0px var(--token-2c81481e-38cd-4c47-96da-a9e57d1ddd77, rgba(255, 255, 255, 0.16))",
              ...d,
            },
          }),
        }),
      }),
    });
  }),
  Nr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ZifpV.framer-uzji1d, .framer-ZifpV .framer-uzji1d { display: block; }",
    ".framer-ZifpV.framer-1jtqse8 { height: 1px; overflow: hidden; position: relative; width: 960px; }",
  ],
  Qe = N(kr, Nr, "framer-ZifpV"),
  Oe = Qe;
Qe.displayName = "Divider";
Qe.defaultProps = { height: 1, width: 960 };
J(Qe, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
K.loadFonts([
  "FR;InterDisplay-SemiBold",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-Italic",
]);
var Bt = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
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
  Rt = [
    `.framer-2NkpP .framer-styles-preset-ijyc80:not(.rich-text-wrapper), .framer-2NkpP .framer-styles-preset-ijyc80.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 130%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
  ],
  kt = "framer-2NkpP";
var nt = yt(gt(r.div)),
  Pr = le(Oe),
  zr = { wXiuOqYPn: { hover: !0, pressed: !0 } },
  Lr = "framer-HT5vw",
  Vr = { wXiuOqYPn: "framer-v-amwl45" };
function ue(t, ...a) {
  let s = {};
  return a?.forEach((n) => n && Object.assign(s, t[n])), s;
}
var Tr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  qr = { damping: 80, delay: 0.2, mass: 1, stiffness: 200, type: "spring" },
  ot = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: qr,
    x: 0,
    y: 0,
  },
  st = {
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
  Xr = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  Mr = r.create(l),
  jr = ({ height: t, id: a, width: s, ...n }) => ({ ...n }),
  Yr = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Qr = q(function (t, a) {
    let s = Y(null),
      n = a ?? s,
      d = M(),
      { activeLocale: S, setLocale: I } = O(),
      f = Z(),
      { style: v, className: C, layoutId: R, variant: m, ...c } = jr(t),
      {
        baseVariant: F,
        classNames: $,
        clearLoadingGesture: P,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: z,
        setGestureState: D,
        setVariant: g,
        variants: b,
      } = G({
        defaultVariant: "wXiuOqYPn",
        enabledGestures: zr,
        ref: n,
        variant: m,
        variantClassNames: Vr,
      }),
      i = Yr(t, b),
      w = E(Lr, ...[Ye, Xe]);
    return e(Q, {
      id: R ?? d,
      children: e(Mr, {
        animate: b,
        initial: !1,
        children: e(Xr, {
          value: Tr,
          children: h(r.div, {
            ...c,
            ...u,
            className: E(w, "framer-amwl45", C, $),
            "data-framer-name": "Menu",
            layoutDependency: i,
            layoutId: "wXiuOqYPn",
            ref: n,
            style: { backgroundColor: "rgb(0, 0, 0)", ...v },
            ...ue(
              {
                "wXiuOqYPn-hover": { "data-framer-name": void 0 },
                "wXiuOqYPn-pressed": { "data-framer-name": void 0 },
              },
              F,
              x
            ),
            children: [
              e(nt, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: ot,
                className: "framer-1bjgd66",
                "data-framer-appear-id": "1bjgd66",
                "data-framer-name": "Auth",
                initial: st,
                layoutDependency: i,
                layoutId: "eeWBtSiWK",
                optimized: !0,
                children: h(r.div, {
                  className: "framer-1ftggzs",
                  "data-framer-name": "Items",
                  layoutDependency: i,
                  layoutId: "zMt3DxmXv",
                  children: [
                    e(U, {
                      __fromCanvasComponent: !0,
                      children: e(l, {
                        children: e(r.p, {
                          style: {
                            "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                            "--framer-font-family":
                              '"Inter Display", "Inter Display Placeholder", sans-serif',
                            "--framer-font-size": "24px",
                            "--framer-font-weight": "300",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255)))",
                          },
                          children: e(p, {
                            href: "tapflow.co/auth/signin",
                            motionChild: !0,
                            nodeId: "PDE3PUf6l",
                            openInNewTab: !1,
                            scopeId: "zkzDy2SkZ",
                            smoothScroll: !1,
                            children: e(r.a, {
                              className: "framer-styles-preset-1eahpii",
                              "data-styles-preset": "pWnECMXPj",
                              children: "Log in",
                            }),
                          }),
                        }),
                      }),
                      className: "framer-l6nurl",
                      fonts: ["FR;InterDisplay-Light"],
                      layoutDependency: i,
                      layoutId: "PDE3PUf6l",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                      },
                      variants: {
                        "wXiuOqYPn-hover": {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)",
                        },
                        "wXiuOqYPn-pressed": {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)",
                        },
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...ue(
                        {
                          "wXiuOqYPn-hover": {
                            children: e(l, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                                },
                                children: e(p, {
                                  href: "tapflow.co/auth/signin",
                                  motionChild: !0,
                                  nodeId: "PDE3PUf6l",
                                  openInNewTab: !1,
                                  scopeId: "zkzDy2SkZ",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-1eahpii",
                                    "data-styles-preset": "pWnECMXPj",
                                    children: "Log in",
                                  }),
                                }),
                              }),
                            }),
                          },
                          "wXiuOqYPn-pressed": {
                            children: e(l, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                                },
                                children: e(p, {
                                  href: "tapflow.co/auth/signin",
                                  motionChild: !0,
                                  nodeId: "PDE3PUf6l",
                                  openInNewTab: !1,
                                  scopeId: "zkzDy2SkZ",
                                  smoothScroll: !1,
                                  children: e(r.a, {
                                    className: "framer-styles-preset-1eahpii",
                                    "data-styles-preset": "pWnECMXPj",
                                    children: "Log in",
                                  }),
                                }),
                              }),
                            }),
                          },
                        },
                        F,
                        x
                      ),
                    }),
                    e(U, {
                      __fromCanvasComponent: !0,
                      children: e(l, {
                        children: e(r.p, {
                          style: {
                            "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                            "--framer-font-family":
                              '"Inter Display", "Inter Display Placeholder", sans-serif',
                            "--framer-font-size": "24px",
                            "--framer-font-weight": "300",
                            "--framer-line-height": "120%",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgba(225, 199, 237, 0.96))",
                          },
                          children: "\u2726 Claim invite \u2726",
                        }),
                      }),
                      className: "framer-1o24gyw",
                      fonts: ["FR;InterDisplay-Light"],
                      layoutDependency: i,
                      layoutId: "ZMMB1zCVr",
                      style: {
                        "--extracted-r6o4lv": "rgba(225, 199, 237, 0.96)",
                      },
                      variants: {
                        "wXiuOqYPn-hover": {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)",
                        },
                        "wXiuOqYPn-pressed": {
                          "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)",
                        },
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                      ...ue(
                        {
                          "wXiuOqYPn-hover": {
                            children: e(l, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                                },
                                children: "\u2726 Claim invite \u2726",
                              }),
                            }),
                          },
                          "wXiuOqYPn-pressed": {
                            children: e(l, {
                              children: e(r.p, {
                                style: {
                                  "--font-selector":
                                    "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                  "--framer-font-family":
                                    '"Inter Display", "Inter Display Placeholder", sans-serif',
                                  "--framer-font-size": "24px",
                                  "--framer-font-weight": "300",
                                  "--framer-line-height": "120%",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                                },
                                children: "\u2726 Claim invite \u2726",
                              }),
                            }),
                          },
                        },
                        F,
                        x
                      ),
                    }),
                  ],
                }),
              }),
              h(nt, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: ot,
                className: "framer-5u7l02",
                "data-framer-appear-id": "5u7l02",
                "data-framer-name": "Main",
                initial: st,
                layoutDependency: i,
                layoutId: "xIVekztj4",
                optimized: !0,
                children: [
                  e(W, {
                    height: 1,
                    width: `calc(${f?.width || "100vw"} - 48px)`,
                    y:
                      (f?.y || 0) +
                      0 +
                      (((f?.height || 800) - 140 - 880) / 2 + 120 + 0) +
                      0 +
                      0,
                    children: e(_, {
                      className: "framer-2f1cp0-container",
                      layoutDependency: i,
                      layoutId: "U8OQHhXFj-container",
                      nodeId: "U8OQHhXFj",
                      rendersWithMotion: !0,
                      scopeId: "zkzDy2SkZ",
                      style: { opacity: 0.7 },
                      children: e(Oe, {
                        height: "100%",
                        id: "U8OQHhXFj",
                        layoutId: "U8OQHhXFj",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                  e(U, {
                    __fromCanvasComponent: !0,
                    children: e(l, {
                      children: e(r.p, {
                        style: {
                          "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                          "--framer-font-family":
                            '"Inter Display", "Inter Display Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-font-weight": "300",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        },
                        children: e(p, {
                          href: { webPageId: "Z7s0mVtRR" },
                          motionChild: !0,
                          nodeId: "jDFEhyQdR",
                          openInNewTab: !1,
                          scopeId: "zkzDy2SkZ",
                          smoothScroll: !1,
                          children: e(r.a, {
                            className: "framer-styles-preset-1eahpii",
                            "data-styles-preset": "pWnECMXPj",
                            children: "Home",
                          }),
                        }),
                      }),
                    }),
                    className: "framer-qu71s8",
                    fonts: ["FR;InterDisplay-Light"],
                    layoutDependency: i,
                    layoutId: "jDFEhyQdR",
                    style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)" },
                    variants: {
                      "wXiuOqYPn-hover": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                      "wXiuOqYPn-pressed": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ue(
                      {
                        "wXiuOqYPn-hover": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "Z7s0mVtRR" },
                                motionChild: !0,
                                nodeId: "jDFEhyQdR",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Home",
                                }),
                              }),
                            }),
                          }),
                        },
                        "wXiuOqYPn-pressed": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "Z7s0mVtRR" },
                                motionChild: !0,
                                nodeId: "jDFEhyQdR",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Home",
                                }),
                              }),
                            }),
                          }),
                        },
                      },
                      F,
                      x
                    ),
                  }),
                  e(U, {
                    __fromCanvasComponent: !0,
                    children: e(l, {
                      children: e(r.p, {
                        style: {
                          "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                          "--framer-font-family":
                            '"Inter Display", "Inter Display Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-font-weight": "300",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        },
                        children: e(p, {
                          href: { webPageId: "Ypsar2ozb" },
                          motionChild: !0,
                          nodeId: "KH1VHZKSw",
                          openInNewTab: !1,
                          scopeId: "zkzDy2SkZ",
                          smoothScroll: !1,
                          children: e(r.a, {
                            className: "framer-styles-preset-1eahpii",
                            "data-styles-preset": "pWnECMXPj",
                            children: "Changelog",
                          }),
                        }),
                      }),
                    }),
                    className: "framer-fkci60",
                    fonts: ["FR;InterDisplay-Light"],
                    layoutDependency: i,
                    layoutId: "KH1VHZKSw",
                    style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)" },
                    variants: {
                      "wXiuOqYPn-hover": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                      "wXiuOqYPn-pressed": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ue(
                      {
                        "wXiuOqYPn-hover": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "Ypsar2ozb" },
                                motionChild: !0,
                                nodeId: "KH1VHZKSw",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Changelog",
                                }),
                              }),
                            }),
                          }),
                        },
                        "wXiuOqYPn-pressed": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "Ypsar2ozb" },
                                motionChild: !0,
                                nodeId: "KH1VHZKSw",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Changelog",
                                }),
                              }),
                            }),
                          }),
                        },
                      },
                      F,
                      x
                    ),
                  }),
                  e(U, {
                    __fromCanvasComponent: !0,
                    children: e(l, {
                      children: e(r.p, {
                        style: {
                          "--font-selector": "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                          "--framer-font-family":
                            '"Inter Display", "Inter Display Placeholder", sans-serif',
                          "--framer-font-size": "24px",
                          "--framer-font-weight": "300",
                          "--framer-line-height": "120%",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        },
                        children: e(p, {
                          href: { webPageId: "iLZYGxuPR" },
                          motionChild: !0,
                          nodeId: "ect4WtFov",
                          openInNewTab: !1,
                          scopeId: "zkzDy2SkZ",
                          smoothScroll: !1,
                          children: e(r.a, {
                            className: "framer-styles-preset-1eahpii",
                            "data-styles-preset": "pWnECMXPj",
                            children: "Contact",
                          }),
                        }),
                      }),
                    }),
                    className: "framer-100g3bb",
                    fonts: ["FR;InterDisplay-Light"],
                    layoutDependency: i,
                    layoutId: "ect4WtFov",
                    style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)" },
                    variants: {
                      "wXiuOqYPn-hover": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                      "wXiuOqYPn-pressed": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ue(
                      {
                        "wXiuOqYPn-hover": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "iLZYGxuPR" },
                                motionChild: !0,
                                nodeId: "ect4WtFov",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Contact",
                                }),
                              }),
                            }),
                          }),
                        },
                        "wXiuOqYPn-pressed": {
                          children: e(l, {
                            children: e(r.p, {
                              style: {
                                "--font-selector":
                                  "RlI7SW50ZXJEaXNwbGF5LUxpZ2h0",
                                "--framer-font-family":
                                  '"Inter Display", "Inter Display Placeholder", sans-serif',
                                "--framer-font-size": "24px",
                                "--framer-font-weight": "300",
                                "--framer-line-height": "120%",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: { webPageId: "iLZYGxuPR" },
                                motionChild: !0,
                                nodeId: "ect4WtFov",
                                openInNewTab: !1,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "Contact",
                                }),
                              }),
                            }),
                          }),
                        },
                      },
                      F,
                      x
                    ),
                  }),
                  e(W, {
                    height: 1,
                    width: `calc(${f?.width || "100vw"} - 48px)`,
                    y:
                      (f?.y || 0) +
                      0 +
                      (((f?.height || 800) - 140 - 880) / 2 + 120 + 0) +
                      0 +
                      529,
                    children: e(_, {
                      className: "framer-7xcb5l-container",
                      layoutDependency: i,
                      layoutId: "JsTiGXlzZ-container",
                      nodeId: "JsTiGXlzZ",
                      rendersWithMotion: !0,
                      scopeId: "zkzDy2SkZ",
                      style: { opacity: 0.7 },
                      children: e(Oe, {
                        height: "100%",
                        id: "JsTiGXlzZ",
                        layoutId: "JsTiGXlzZ",
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              h(nt, {
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                animate: ot,
                className: "framer-1uar6kw",
                "data-framer-appear-id": "1uar6kw",
                "data-framer-name": "Social",
                initial: st,
                layoutDependency: i,
                layoutId: "Ro8lNxMk6",
                optimized: !0,
                children: [
                  e(U, {
                    __fromCanvasComponent: !0,
                    children: e(l, {
                      children: e(r.p, {
                        className: "framer-styles-preset-oh30q",
                        "data-styles-preset": "FwmuxBMQR",
                        style: {
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        },
                        children: e(p, {
                          href: "linkedin.com",
                          motionChild: !0,
                          nodeId: "NDAVIMrI3",
                          openInNewTab: !0,
                          scopeId: "zkzDy2SkZ",
                          smoothScroll: !1,
                          children: e(r.a, {
                            className: "framer-styles-preset-1eahpii",
                            "data-styles-preset": "pWnECMXPj",
                            children: "LinkedIn",
                          }),
                        }),
                      }),
                    }),
                    className: "framer-1gryoek",
                    fonts: ["Inter"],
                    layoutDependency: i,
                    layoutId: "NDAVIMrI3",
                    style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)" },
                    variants: {
                      "wXiuOqYPn-hover": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                      "wXiuOqYPn-pressed": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ue(
                      {
                        "wXiuOqYPn-hover": {
                          children: e(l, {
                            children: e(r.p, {
                              className: "framer-styles-preset-oh30q",
                              "data-styles-preset": "FwmuxBMQR",
                              style: {
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: "linkedin.com",
                                motionChild: !0,
                                nodeId: "NDAVIMrI3",
                                openInNewTab: !0,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "LinkedIn",
                                }),
                              }),
                            }),
                          }),
                        },
                        "wXiuOqYPn-pressed": {
                          children: e(l, {
                            children: e(r.p, {
                              className: "framer-styles-preset-oh30q",
                              "data-styles-preset": "FwmuxBMQR",
                              style: {
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: "linkedin.com",
                                motionChild: !0,
                                nodeId: "NDAVIMrI3",
                                openInNewTab: !0,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "LinkedIn",
                                }),
                              }),
                            }),
                          }),
                        },
                      },
                      F,
                      x
                    ),
                  }),
                  e(U, {
                    __fromCanvasComponent: !0,
                    children: e(l, {
                      children: e(r.p, {
                        className: "framer-styles-preset-oh30q",
                        "data-styles-preset": "FwmuxBMQR",
                        style: {
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                        },
                        children: e(p, {
                          href: "twitter.com",
                          motionChild: !0,
                          nodeId: "gDYj0YbBJ",
                          openInNewTab: !0,
                          scopeId: "zkzDy2SkZ",
                          smoothScroll: !1,
                          children: e(r.a, {
                            className: "framer-styles-preset-1eahpii",
                            "data-styles-preset": "pWnECMXPj",
                            children: "X (Twitter)",
                          }),
                        }),
                      }),
                    }),
                    className: "framer-1u84vvk",
                    fonts: ["Inter"],
                    layoutDependency: i,
                    layoutId: "gDYj0YbBJ",
                    style: { "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)" },
                    variants: {
                      "wXiuOqYPn-hover": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                      "wXiuOqYPn-pressed": {
                        "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ue(
                      {
                        "wXiuOqYPn-hover": {
                          children: e(l, {
                            children: e(r.p, {
                              className: "framer-styles-preset-oh30q",
                              "data-styles-preset": "FwmuxBMQR",
                              style: {
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: "twitter.com",
                                motionChild: !0,
                                nodeId: "gDYj0YbBJ",
                                openInNewTab: !0,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "X (Twitter)",
                                }),
                              }),
                            }),
                          }),
                        },
                        "wXiuOqYPn-pressed": {
                          children: e(l, {
                            children: e(r.p, {
                              className: "framer-styles-preset-oh30q",
                              "data-styles-preset": "FwmuxBMQR",
                              style: {
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                              },
                              children: e(p, {
                                href: "twitter.com",
                                motionChild: !0,
                                nodeId: "gDYj0YbBJ",
                                openInNewTab: !0,
                                scopeId: "zkzDy2SkZ",
                                smoothScroll: !1,
                                children: e(r.a, {
                                  className: "framer-styles-preset-1eahpii",
                                  "data-styles-preset": "pWnECMXPj",
                                  children: "X (Twitter)",
                                }),
                              }),
                            }),
                          }),
                        },
                      },
                      F,
                      x
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Or = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-HT5vw.framer-yev4ph, .framer-HT5vw .framer-yev4ph { display: block; }",
    ".framer-HT5vw.framer-amwl45 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: hidden; padding: 0px 24px 140px 24px; position: relative; width: 400px; }",
    ".framer-HT5vw .framer-1bjgd66 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 120px; justify-content: center; overflow: visible; padding: 0px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-HT5vw .framer-1ftggzs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-HT5vw .framer-l6nurl, .framer-HT5vw .framer-1o24gyw { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-HT5vw .framer-5u7l02 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-HT5vw .framer-2f1cp0-container, .framer-HT5vw .framer-7xcb5l-container { flex: none; height: 1px; position: relative; width: 100%; }",
    ".framer-HT5vw .framer-qu71s8, .framer-HT5vw .framer-fkci60, .framer-HT5vw .framer-100g3bb, .framer-HT5vw .framer-1gryoek, .framer-HT5vw .framer-1u84vvk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-HT5vw .framer-1uar6kw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 100%; }",
    ...je,
    ...qe,
  ],
  He = N(Qr, Or, "framer-HT5vw"),
  it = He;
He.displayName = "Navigation / Menu: Phone";
He.defaultProps = { height: 800, width: 400 };
J(
  He,
  [
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
    ...Pr,
    ...ae(Me),
    ...ae(Te),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Hr = ["HisUdmQ9F", "EyQ28nQyS"],
  Zr = "framer-D6knu",
  Wr = { EyQ28nQyS: "framer-v-l2g0yc", HisUdmQ9F: "framer-v-x4itgw" };
function _r(t, ...a) {
  let s = {};
  return a?.forEach((n) => n && Object.assign(s, t[n])), s;
}
var Gr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Kr = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  Jr = r.create(l),
  $r = { Close: "EyQ28nQyS", Open: "HisUdmQ9F" },
  ea = ({ height: t, id: a, width: s, ...n }) => ({
    ...n,
    variant: $r[n.variant] ?? n.variant ?? "HisUdmQ9F",
  }),
  ta = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  ra = q(function (t, a) {
    let s = Y(null),
      n = a ?? s,
      d = M(),
      { activeLocale: S, setLocale: I } = O(),
      f = Z(),
      { style: v, className: C, layoutId: R, variant: m, ...c } = ea(t),
      {
        baseVariant: F,
        classNames: $,
        clearLoadingGesture: P,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: z,
        setGestureState: D,
        setVariant: g,
        variants: b,
      } = G({
        cycleOrder: Hr,
        defaultVariant: "HisUdmQ9F",
        ref: n,
        variant: m,
        variantClassNames: Wr,
      }),
      i = ta(t, b),
      { activeVariantCallback: L, delay: w } = Ce(F),
      y = L(async (...ie) => {
        D({ isPressed: !1 }), g("EyQ28nQyS");
      }),
      se = L(async (...ie) => {
        D({ isPressed: !1 }), g("HisUdmQ9F");
      }),
      ye = E(Zr, ...[]);
    return e(Q, {
      id: R ?? d,
      children: e(Jr, {
        animate: b,
        initial: !1,
        children: e(Kr, {
          value: Gr,
          children: h(r.div, {
            ...c,
            ...u,
            className: E(ye, "framer-x4itgw", C, $),
            "data-framer-name": "Open",
            "data-highlight": !0,
            layoutDependency: i,
            layoutId: "HisUdmQ9F",
            onTap: y,
            ref: n,
            style: { ...v },
            ..._r(
              { EyQ28nQyS: { "data-framer-name": "Close", onTap: se } },
              F,
              x
            ),
            children: [
              e(r.div, {
                className: "framer-1rup4we",
                "data-framer-name": "Line",
                layoutDependency: i,
                layoutId: "Y6v8fLmiq",
                style: {
                  backgroundColor:
                    "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                  rotate: 0,
                },
                variants: { EyQ28nQyS: { rotate: -45 } },
              }),
              e(r.div, {
                className: "framer-16ln8w7",
                "data-framer-name": "Line",
                layoutDependency: i,
                layoutId: "WDhh61_qL",
                style: {
                  backgroundColor:
                    "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                  rotate: 0,
                },
                variants: { EyQ28nQyS: { rotate: 45 } },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  aa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-D6knu.framer-14tn57g, .framer-D6knu .framer-14tn57g { display: block; }",
    ".framer-D6knu.framer-x4itgw { cursor: pointer; gap: 0px; height: 24px; overflow: visible; position: relative; width: 26px; }",
    ".framer-D6knu .framer-1rup4we { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(66.66666666666669% - 2px / 2); width: 20px; }",
    ".framer-D6knu .framer-16ln8w7 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: calc(33.33333333333336% - 2px / 2); width: 20px; }",
    ".framer-D6knu.framer-v-l2g0yc.framer-x4itgw { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); }",
    ".framer-D6knu.framer-v-l2g0yc .framer-1rup4we, .framer-D6knu.framer-v-l2g0yc .framer-16ln8w7 { top: calc(50.00000000000002% - 2px / 2); }",
  ],
  ke = N(ra, aa, "framer-D6knu"),
  lt = ke;
ke.displayName = "Navigation / _icon";
ke.defaultProps = { height: 26, width: 26 };
H(ke, {
  variant: {
    options: ["HisUdmQ9F", "EyQ28nQyS"],
    optionTitles: ["Open", "Close"],
    title: "Variant",
    type: o.Enum,
  },
});
J(ke, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var na = le(be),
  oa = le(lt),
  sa = le(it),
  ia = ["fYVgS8NCd", "xVCO5kcBX", "QtLCLfH8_", "K9ye4z1sg"],
  la = "framer-BtO5q",
  ca = {
    fYVgS8NCd: "framer-v-v5jef7",
    K9ye4z1sg: "framer-v-nlrie7",
    QtLCLfH8_: "framer-v-8gk3nt",
    xVCO5kcBX: "framer-v-1swrfui",
  };
function ce(t, ...a) {
  let s = {};
  return a?.forEach((n) => n && Object.assign(s, t[n])), s;
}
var Nt = { duration: 0, type: "tween" },
  fa = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  ma = r.create(l),
  da = {
    "Phone: Open": "K9ye4z1sg",
    Desktop: "fYVgS8NCd",
    Phone: "QtLCLfH8_",
    Tablet: "xVCO5kcBX",
  },
  pa = ({ height: t, id: a, width: s, ...n }) => ({
    ...n,
    variant: da[n.variant] ?? n.variant ?? "fYVgS8NCd",
  }),
  ua = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  ha = q(function (t, a) {
    let s = Y(null),
      n = a ?? s,
      d = M(),
      { activeLocale: S, setLocale: I } = O(),
      f = Z(),
      {
        style: v,
        className: C,
        layoutId: R,
        variant: m,
        s4QYqX_Ju: c,
        UU0IU6Qs2: F,
        XiCzUhcM5F5glnIxIK: $,
        ...P
      } = pa(t),
      {
        baseVariant: u,
        classNames: x,
        clearLoadingGesture: z,
        gestureHandlers: D,
        gestureVariant: g,
        isLoading: b,
        setGestureState: i,
        setVariant: L,
        variants: w,
      } = G({
        cycleOrder: ia,
        defaultVariant: "fYVgS8NCd",
        ref: n,
        variant: m,
        variantClassNames: ca,
      }),
      y = ua(t, w),
      { activeVariantCallback: se, delay: he } = Ce(u),
      ye = se(async (...ee) => {
        L("K9ye4z1sg");
      }),
      ie = se(async (...ee) => {
        L("QtLCLfH8_");
      }),
      ge = se(async (...ee) => {
        if (c && (await c(...ee)) === !1) return !1;
      }),
      we = se(async (...ee) => {
        if (F && (await F(...ee)) === !1) return !1;
      }),
      ne = E(la, ...[kt]),
      fe = () => u !== "K9ye4z1sg",
      pe = () => u === "K9ye4z1sg",
      me = () => !["QtLCLfH8_", "K9ye4z1sg"].includes(u),
      Ue = Le(),
      xe = () => !!["QtLCLfH8_", "K9ye4z1sg"].includes(u),
      Ze = () => u === "QtLCLfH8_";
    return e(Q, {
      id: R ?? d,
      children: e(ma, {
        animate: w,
        initial: !1,
        children: e(fa, {
          ...ce({ K9ye4z1sg: { value: Nt }, QtLCLfH8_: { value: Nt } }, u, g),
          children: h(r.nav, {
            ...P,
            ...D,
            className: E(ne, "framer-v5jef7", C, x),
            "data-framer-name": "Desktop",
            layoutDependency: y,
            layoutId: "fYVgS8NCd",
            ref: n,
            style: {
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              WebkitBackdropFilter: "blur(0px)",
              ...v,
            },
            variants: {
              K9ye4z1sg: {
                backdropFilter: "blur(100px)",
                background:
                  "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                backgroundColor: "rgb(0, 0, 0)",
                WebkitBackdropFilter: "blur(100px)",
              },
            },
            ...ce(
              {
                K9ye4z1sg: { "data-framer-name": "Phone: Open" },
                QtLCLfH8_: { "data-framer-name": "Phone" },
                xVCO5kcBX: { "data-framer-name": "Tablet" },
              },
              u,
              g
            ),
            children: [
              h(r.div, {
                className: "framer-4j4vvm",
                "data-framer-name": "Navigation",
                layoutDependency: y,
                layoutId: "nFqqO3tu2",
                style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                variants: {
                  K9ye4z1sg: { backgroundColor: "rgba(217, 217, 217, 0)" },
                },
                children: [
                  e(r.div, {
                    className: "framer-5q1umm",
                    "data-framer-name": "Left",
                    layoutDependency: y,
                    layoutId: "AijVkjry0",
                    style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    variants: {
                      K9ye4z1sg: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    },
                    children: e(p, {
                      href: { webPageId: "Z7s0mVtRR" },
                      motionChild: !0,
                      nodeId: "ajLQ0dHSU",
                      openInNewTab: !1,
                      scopeId: "nyDxmLt7o",
                      children: h(r.a, {
                        "aria-label": "Home",
                        className: "framer-gsgf7v framer-1prae73",
                        "data-framer-name": "Logo",
                        layoutDependency: y,
                        layoutId: "ajLQ0dHSU",
                        children: [
                          fe() &&
                            e(et, {
                              background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 111.5,
                                intrinsicWidth: 267,
                                loading: Ve(
                                  (f?.y || 0) +
                                    (0 + ((f?.height || 52) - 0 - 52) / 2) +
                                    0 +
                                    12 +
                                    0
                                ),
                                pixelHeight: 287,
                                pixelWidth: 1001,
                                positionX: "center",
                                positionY: "center",
                                sizes: "100px",
                                src: "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w",
                              },
                              className: "framer-1woe2r0",
                              "data-framer-name": "tapflow",
                              layoutDependency: y,
                              layoutId: "qOxdmRCEq",
                              ...ce(
                                {
                                  QtLCLfH8_: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      intrinsicHeight: 111.5,
                                      intrinsicWidth: 267,
                                      loading: Ve(
                                        (f?.y || 0) +
                                          (0 +
                                            ((f?.height || 52) - 0 - 52) / 2) +
                                          0 +
                                          11 +
                                          0
                                      ),
                                      pixelHeight: 287,
                                      pixelWidth: 1001,
                                      positionX: "center",
                                      positionY: "center",
                                      sizes: "105px",
                                      src: "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w",
                                    },
                                  },
                                },
                                u,
                                g
                              ),
                            }),
                          pe() &&
                            e(et, {
                              background: {
                                alt: "",
                                fit: "fit",
                                intrinsicHeight: 111.5,
                                intrinsicWidth: 267,
                                pixelHeight: 287,
                                pixelWidth: 1001,
                                positionX: "center",
                                positionY: "center",
                                src: "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512",
                                srcSet:
                                  "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w",
                              },
                              className: "framer-1xzqgzt",
                              "data-framer-name": "tapflow",
                              layoutDependency: y,
                              layoutId: "pQJipsh6q",
                              ...ce(
                                {
                                  K9ye4z1sg: {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      intrinsicHeight: 111.5,
                                      intrinsicWidth: 267,
                                      loading: Ve(
                                        (f?.y || 0) + 0 + 0 + 0 + 11 + 0
                                      ),
                                      pixelHeight: 287,
                                      pixelWidth: 1001,
                                      positionX: "center",
                                      positionY: "center",
                                      sizes: "105px",
                                      src: "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512",
                                      srcSet:
                                        "https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png?scale-down-to=512 512w,https://framerusercontent.com/images/mPPPnx1TYlZGvAQgOxDyFbr7Aew.png 1001w",
                                    },
                                  },
                                },
                                u,
                                g
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                  me() &&
                    h(r.div, {
                      className: "framer-1ni7j8s",
                      "data-framer-name": "Center",
                      layoutDependency: y,
                      layoutId: "lxFcEQFTM",
                      style: { opacity: 0 },
                      children: [
                        e($e, {
                          links: [
                            {
                              href: { webPageId: "Ypsar2ozb" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "Ypsar2ozb" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (ee) =>
                            e(W, {
                              height: 28,
                              y:
                                (f?.y || 0) +
                                (0 + ((f?.height || 52) - 0 - 52) / 2) +
                                0 +
                                12,
                              children: e(_, {
                                className: "framer-fpbs8u-container",
                                layoutDependency: y,
                                layoutId: "CzGZlISh4-container",
                                nodeId: "CzGZlISh4",
                                rendersWithMotion: !0,
                                scopeId: "nyDxmLt7o",
                                children: e(be, {
                                  height: "100%",
                                  id: "CzGZlISh4",
                                  Kr62I1Ee9: ee[0],
                                  layoutId: "CzGZlISh4",
                                  Mv16WKTEe: "Changelog",
                                  NctncU19N:
                                    "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
                                  r9wjJW8ZN: !1,
                                  style: { height: "100%" },
                                  variant: "qZMGAGPE0",
                                  width: "100%",
                                  XiCzUhcM5: !1,
                                  xkpUt4F21: "New",
                                  ...ce(
                                    { xVCO5kcBX: { Kr62I1Ee9: ee[1] } },
                                    u,
                                    g
                                  ),
                                }),
                              }),
                            }),
                        }),
                        e($e, {
                          links: [
                            {
                              href: { webPageId: "SfANFKzD6" },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { webPageId: "SfANFKzD6" },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (ee) =>
                            e(W, {
                              height: 28,
                              y:
                                (f?.y || 0) +
                                (0 + ((f?.height || 52) - 0 - 52) / 2) +
                                0 +
                                12,
                              children: e(_, {
                                className: "framer-10hck1u-container",
                                layoutDependency: y,
                                layoutId: "NVeQTcDoK-container",
                                nodeId: "NVeQTcDoK",
                                rendersWithMotion: !0,
                                scopeId: "nyDxmLt7o",
                                children: e(be, {
                                  height: "100%",
                                  id: "NVeQTcDoK",
                                  Kr62I1Ee9: ee[0],
                                  layoutId: "NVeQTcDoK",
                                  Mv16WKTEe: "Blog",
                                  NctncU19N:
                                    "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
                                  r9wjJW8ZN: !1,
                                  style: { height: "100%" },
                                  variant: "qZMGAGPE0",
                                  width: "100%",
                                  XiCzUhcM5: !1,
                                  xkpUt4F21: "New",
                                  ...ce(
                                    { xVCO5kcBX: { Kr62I1Ee9: ee[1] } },
                                    u,
                                    g
                                  ),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  me() &&
                    h(r.div, {
                      className: "framer-112u9ki",
                      "data-framer-name": "Right",
                      layoutDependency: y,
                      layoutId: "ClfRKToaZ",
                      children: [
                        e(W, {
                          height: 28,
                          y:
                            (f?.y || 0) +
                            (0 + ((f?.height || 52) - 0 - 52) / 2) +
                            0 +
                            12,
                          children: e(_, {
                            className: "framer-7572t-container",
                            layoutDependency: y,
                            layoutId: "qiJUYp81T-container",
                            nodeId: "qiJUYp81T",
                            rendersWithMotion: !0,
                            scopeId: "nyDxmLt7o",
                            children: e(be, {
                              height: "100%",
                              id: "qiJUYp81T",
                              Kr62I1Ee9: "tapflow.co/auth/signin",
                              layoutId: "qiJUYp81T",
                              Mv16WKTEe: "Log in",
                              NctncU19N:
                                "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
                              r9wjJW8ZN: !1,
                              style: { height: "100%" },
                              variant: "qZMGAGPE0",
                              width: "100%",
                              XiCzUhcM5: !1,
                              xkpUt4F21: "New",
                            }),
                          }),
                        }),
                        e(W, {
                          height: 28,
                          y:
                            (f?.y || 0) +
                            (0 + ((f?.height || 52) - 0 - 52) / 2) +
                            0 +
                            12,
                          children: e(_, {
                            className: "framer-1derri5-container",
                            layoutDependency: y,
                            layoutId: "zOcXcQqG7-container",
                            nodeId: "zOcXcQqG7",
                            rendersWithMotion: !0,
                            scopeId: "nyDxmLt7o",
                            children: e(be, {
                              height: "100%",
                              id: "zOcXcQqG7",
                              Kr62I1Ee9: "tapflow.co/auth/invite",
                              layoutId: "zOcXcQqG7",
                              Mv16WKTEe: "Claim invite",
                              NctncU19N:
                                "var(--token-302b6139-62bf-4a65-a11c-00b7552c4831, rgb(255, 61, 63))",
                              r9wjJW8ZN: !1,
                              style: { height: "100%" },
                              variant: "symjmldSc",
                              width: "100%",
                              XiCzUhcM5: !1,
                              xkpUt4F21: "New",
                            }),
                          }),
                        }),
                      ],
                    }),
                  xe() &&
                    e(r.div, {
                      className: "framer-1gfcht1",
                      "data-framer-name": "Mobile icon",
                      layoutDependency: y,
                      layoutId: "ZJl18ybwh",
                      ...ce(
                        {
                          K9ye4z1sg: { "data-highlight": !0, onTap: ie },
                          QtLCLfH8_: { "data-highlight": !0, onTap: ye },
                        },
                        u,
                        g
                      ),
                      children: e(W, {
                        height: 24,
                        width: "24px",
                        ...ce(
                          {
                            K9ye4z1sg: {
                              width: "26px",
                              y: (f?.y || 0) + 0 + 0 + 0 + 14,
                            },
                            QtLCLfH8_: {
                              width: "26px",
                              y:
                                (f?.y || 0) +
                                (0 + ((f?.height || 52) - 0 - 52) / 2) +
                                0 +
                                14,
                            },
                          },
                          u,
                          g
                        ),
                        children: e(_, {
                          className: "framer-kyccc7-container",
                          layoutDependency: y,
                          layoutId: "uIIiVQFab-container",
                          nodeId: "uIIiVQFab",
                          rendersWithMotion: !0,
                          scopeId: "nyDxmLt7o",
                          children: e(lt, {
                            height: "100%",
                            id: "uIIiVQFab",
                            layoutId: "uIIiVQFab",
                            style: { height: "100%", width: "100%" },
                            variant: "HisUdmQ9F",
                            width: "100%",
                            ...ce(
                              { K9ye4z1sg: { variant: "EyQ28nQyS" } },
                              u,
                              g
                            ),
                          }),
                        }),
                      }),
                    }),
                  Ze() &&
                    e(p, {
                      href: "https://tapflow.co/auth/signin?_gl=1*z42apk*_ga*NDg1NDA0NzA0LjE3NDgzNDI0OTE.*_ga_FY7WMHDS49*czE3NDgzNjQwMDAkbzMkZzEkdDE3NDgzNjQwMDEkajU5JGwwJGgxNTQ2NDg3NTA0JGRaR2syT3hFSUhaQnluclBMZXV6dklZV0xvYU9tREdCMndn",
                      motionChild: !0,
                      nodeId: "gWLa5ExkS",
                      openInNewTab: $,
                      scopeId: "nyDxmLt7o",
                      smoothScroll: !0,
                      children: e(r.a, {
                        className: "framer-jcbcv8 framer-1prae73",
                        "data-framer-name": "Ghost",
                        "data-highlight": !0,
                        layoutDependency: y,
                        layoutId: "gWLa5ExkS",
                        onMouseEnter: we,
                        onTap: ge,
                        style: {
                          backdropFilter: "blur(40px)",
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                          borderBottomLeftRadius: 9.4,
                          borderBottomRightRadius: 9.4,
                          borderTopLeftRadius: 9.4,
                          borderTopRightRadius: 9.4,
                          WebkitBackdropFilter: "blur(40px)",
                        },
                        children: e(U, {
                          __fromCanvasComponent: !0,
                          children: e(l, {
                            children: e(r.p, {
                              className: "framer-styles-preset-ijyc80",
                              "data-styles-preset": "x7cZ6t6HM",
                              style: {
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.55))",
                              },
                              children: "Log in",
                            }),
                          }),
                          className: "framer-svjrin",
                          fonts: ["Inter"],
                          layoutDependency: y,
                          layoutId: "gWLa5ExkSESG37723E",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.55)",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                ],
              }),
              pe() &&
                e(W, {
                  ...ce(
                    {
                      K9ye4z1sg: {
                        height: 800,
                        width: f?.width || "100vw",
                        y: (f?.y || 0) + 0 + 52,
                      },
                    },
                    u,
                    g
                  ),
                  children: e(_, {
                    className: "framer-i6u3r4-container",
                    layoutDependency: y,
                    layoutId: "HQZuw3OFR-container",
                    nodeId: "HQZuw3OFR",
                    rendersWithMotion: !0,
                    scopeId: "nyDxmLt7o",
                    children: e(it, {
                      height: "100%",
                      id: "HQZuw3OFR",
                      layoutId: "HQZuw3OFR",
                      style: { width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  ya = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-BtO5q.framer-1prae73, .framer-BtO5q .framer-1prae73 { display: block; }",
    ".framer-BtO5q.framer-v5jef7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 960px; }",
    ".framer-BtO5q .framer-4j4vvm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 52px; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-BtO5q .framer-5q1umm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 100px; position: relative; width: 1px; }",
    ".framer-BtO5q .framer-gsgf7v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-BtO5q .framer-1woe2r0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100px; }",
    ".framer-BtO5q .framer-1xzqgzt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 105px; }",
    ".framer-BtO5q .framer-1ni7j8s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-BtO5q .framer-fpbs8u-container, .framer-BtO5q .framer-10hck1u-container, .framer-BtO5q .framer-7572t-container, .framer-BtO5q .framer-1derri5-container { flex: none; height: 28px; position: relative; width: auto; }",
    ".framer-BtO5q .framer-112u9ki { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: flex-end; overflow: visible; padding: 0px 100px 0px 0px; position: relative; width: 1px; }",
    ".framer-BtO5q .framer-1gfcht1 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 56px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 56px; }",
    ".framer-BtO5q .framer-kyccc7-container { flex: none; height: 24px; pointer-events: none; position: relative; width: 24px; }",
    ".framer-BtO5q .framer-jcbcv8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 28px; justify-content: center; overflow: visible; padding: 0px 10px 0px 10px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-BtO5q .framer-svjrin { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-BtO5q .framer-i6u3r4-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-BtO5q.framer-v-1swrfui .framer-4j4vvm { max-width: unset; }",
    ".framer-BtO5q.framer-v-1swrfui .framer-5q1umm { padding: 0px 0px 0px 40px; }",
    ".framer-BtO5q.framer-v-1swrfui .framer-112u9ki { padding: 0px 40px 0px 0px; }",
    ".framer-BtO5q.framer-v-8gk3nt.framer-v5jef7 { width: 400px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-4j4vvm { order: 0; padding: 0px 4px 0px 0px; position: sticky; top: 0px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-5q1umm { order: 0; padding: 0px 0px 0px 16px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-1woe2r0 { height: 30px; width: 105px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-1gfcht1 { cursor: pointer; height: var(--framer-aspect-ratio-supported, 52px); order: 4; width: 52px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-kyccc7-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); order: 0; width: 26px; }",
    ".framer-BtO5q.framer-v-8gk3nt .framer-jcbcv8 { order: 3; }",
    ".framer-BtO5q.framer-v-nlrie7.framer-v5jef7 { flex-direction: column; justify-content: flex-start; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; width: 400px; }",
    ".framer-BtO5q.framer-v-nlrie7 .framer-4j4vvm { flex: none; padding: 0px 4px 0px 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }",
    ".framer-BtO5q.framer-v-nlrie7 .framer-5q1umm { padding: 0px 0px 0px 16px; }",
    ".framer-BtO5q.framer-v-nlrie7 .framer-1gfcht1 { cursor: pointer; height: var(--framer-aspect-ratio-supported, 52px); width: 52px; }",
    ".framer-BtO5q.framer-v-nlrie7 .framer-kyccc7-container { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 26px); width: 26px; }",
    ".framer-BtO5q.framer-v-nlrie7 .framer-i6u3r4-container { flex: none; width: 100%; }",
    ...Rt,
  ],
  Ne = N(ha, ya, "framer-BtO5q"),
  Vn = Ne;
Ne.displayName = "Navigation / Header";
Ne.defaultProps = { height: 52, width: 960 };
H(Ne, {
  variant: {
    options: ["fYVgS8NCd", "xVCO5kcBX", "QtLCLfH8_", "K9ye4z1sg"],
    optionTitles: ["Desktop", "Tablet", "Phone", "Phone: Open"],
    title: "Variant",
    type: o.Enum,
  },
});
J(
  Ne,
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
    ...na,
    ...oa,
    ...sa,
    ...ae(Bt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ga =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Ua = /^https?:\/\/([^\/]+)[^\?]+\??(.+)$/,
  St = (t) => ga.test(String(t).toLowerCase()),
  Fa = (t) => {
    let [, a, s] = t.replace("&amp;", "&").match(Ua) ?? [null, null, null];
    return [a, s ? new URLSearchParams(s) : null];
  };
function wa(t) {
  console.log(t);
  try {
    return new URL(t), t;
  } catch {
    try {
      return new URL(`https://${t}`), `https://${t}`;
    } catch {}
  }
}
function xa(t) {
  return t === void 0
    ? !1
    : !!(t.startsWith("#") || t.startsWith("/") || t.startsWith("."));
}
var Pt = "v1",
  Vt = N(
    function ({
      service: a,
      redirectAs: s,
      mailchimpURL: n,
      loopsID: d,
      loopsUserGroup: S,
      loopsMailingList: I,
      formsparkID: f,
      getwaitlistAPI: v,
      convertkitAPI: C,
      convertkitFormID: R,
      input: m,
      button: c,
      font: F,
      layout: $,
      link: P,
      gap: u,
      style: x,
      onSubmit: z,
    }) {
      let [D, g] = Ee(""),
        [b, i] = Ee(!1),
        [L, w] = Ee(!1),
        [y, se] = Ee(!1),
        {
          paddingPerSide: he,
          paddingTop: ye,
          paddingRight: ie,
          paddingBottom: ge,
          paddingLeft: we,
          padding: de,
          borderRadius: ne,
          borderObject: fe,
          focusObject: pe,
          shadowObject: me,
          height: Ue,
          fixedHeight: xe,
        } = m,
        {
          buttonPaddingPerSide: Ze,
          buttonPaddingTop: ee,
          buttonPaddingRight: We,
          buttonPaddingBottom: qt,
          buttonPaddingLeft: Xt,
          buttonPadding: Pe,
        } = c,
        Mt = he
          ? `${ye}px ${
              c.isDocked ? ie + c.widthWhenDocked : ie
            }px ${ge}px ${we}px`
          : `${de}px ${
              c.isDocked ? de + c.widthWhenDocked : de
            }px ${de}px ${de}px`,
        jt = Ze
          ? `${c.isDocked ? 0 : ee}px ${We}px ${c.isDocked ? 0 : qt}px ${Xt}px`
          : `${c.isDocked ? 0 : Pe}px ${Pe}px ${c.isDocked ? 0 : Pe}px ${Pe}px`,
        mt = Le(),
        Ae = () => {
          if ((w(!1), se(!1), g(""), s === "link" && P && !b)) {
            let [te, oe] = P.split("#"),
              k = te.split("?")[0] || "",
              { routeId: re, pathVariables: Ke } = ht(mt.routes, k);
            if ((re && mt.navigate(re, oe, Ke), !xa(P))) {
              let ze = wa(P);
              ze && typeof B < "u" && B.open(ze, "_blank");
            }
          }
        },
        Ie = ve(
          (te) => (te === "" || !St(te) ? (i(!0), Fe.start("error"), !1) : !0),
          [St]
        ),
        Yt = ve((te) => {
          i(!1), g(te.target.value);
        }, []),
        Qt = ve((te) => {
          se(!0);
        }, []),
        Ot = ve((te) => {
          se(!1), i(!1);
        }, []),
        Ht = ve(
          (te) => {
            if ((te.preventDefault(), !L)) {
              if ((w(!0), a === "mailchimp")) {
                let [oe, k] = Fa(n);
                if (!Ie(D) || !oe || !k) {
                  w(!1);
                  return;
                }
                k.set("MERGE0", D),
                  fetch(`https://${oe}/subscribe/post`, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                    },
                    body: k.toString(),
                  })
                    .then((re) => {
                      Ae(), s === "overlay" && z?.();
                    })
                    .catch((re) => {
                      console.error(re), w(!1), i(!0), Fe.start("error");
                    });
              }
              if (a === "loops") {
                if (!Ie(D)) {
                  w(!1);
                  return;
                }
                let oe = `email=${encodeURIComponent(D)}`,
                  k = `userGroup=${encodeURIComponent(S)}`,
                  re = `mailingLists=${encodeURIComponent(I)}`,
                  Ke = !!I && I !== " ",
                  ze = !!S && S !== " ",
                  Je = oe;
                ze && (Je += `&${k}`),
                  Ke && (Je += `&${re}`),
                  fetch(`https://app.loops.so/api/newsletter-form/${d}`, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: Je,
                  })
                    .then(() => {
                      Ae(), s === "overlay" && z?.();
                    })
                    .catch((Gt) => {
                      console.error(Gt), w(!1), i(!0), Fe.start("error");
                    });
              }
              if (a === "formspark") {
                if (!Ie(D)) {
                  w(!1);
                  return;
                }
                let oe = new FormData(te.target),
                  k = Object.fromEntries(oe.entries());
                fetch(`https://api.formspark.io/${f}`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(k),
                })
                  .then(() => {
                    Ae(), z?.();
                  })
                  .catch((re) => {
                    console.error(re), w(!1), i(!0), Fe.start("error");
                  });
              }
              if (a === "getwaitlist") {
                if (!Ie(D)) {
                  w(!1);
                  return;
                }
                let oe = new FormData(te.target),
                  k = Object.fromEntries(oe.entries());
                (k.referral_link = document.URL),
                  fetch(
                    `https://api.getwaitlist.com/api/v1
/waiter/`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify(k),
                    }
                  )
                    .then(() => {
                      Ae(), s === "overlay" && z?.();
                    })
                    .catch((re) => {
                      console.error(re), w(!1), i(!0), Fe.start("error");
                    });
              }
              if (a === "convertkit") {
                if (!Ie(D)) {
                  w(!1);
                  return;
                }
                let oe = new FormData(te.target),
                  k = Object.fromEntries(oe.entries());
                (k.referral_link = document.URL),
                  (k.api_key = C),
                  fetch(`https://api.convertkit.com/v3/forms/${R}/subscribe`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify(k),
                  })
                    .then(() => {
                      Ae(), s === "overlay" && z?.();
                    })
                    .catch((re) => {
                      console.error(re), w(!1), i(!0), Fe.start("error");
                    });
              }
            }
          },
          [n, f, R, D, z, Ie, L]
        ),
        Fe = ut(),
        dt = m.focusObject
          ? `inset 0 0 0 ${pe.focusWidthFrom}px ${pe.focusColor}`
          : null,
        Zt = m.focusObject
          ? `inset 0 0 0 ${pe.focusWidthTo}px ${pe.focusColor}`
          : null,
        _e = m.shadowObject
          ? `${me.shadowX}px ${me.shadowY}px ${me.shadowBlur}px ${me.shadowColor}`
          : null,
        Ge = m.borderObject
          ? `inset 0 0 0 ${fe.borderWidth}px ${fe.borderColor}`
          : null,
        Wt = {
          default: { x: 0 },
          error: { x: [0, -4, 4, 0], transition: { duration: 0.2 } },
        },
        _t = {
          default: { boxShadow: ct(dt, _e, Ge) },
          focused: { boxShadow: ct(Zt, _e, Ge) },
        };
      return e(r.div, {
        style: {
          ...x,
          ...Ia,
          "--framer-custom-placeholder-color": m.placeholderColor,
        },
        variants: Wt,
        animate: Fe,
        children: h("form", {
          style: {
            width: "100%",
            height: "auto",
            display: "flex",
            position: "relative",
            flexDirection: $ === "vertical" ? "column" : "row",
            color: c.color,
            gap: c.isDocked ? 0 : u,
          },
          onSubmit: Ht,
          method: "POST",
          children: [
            a === "getwaitlist" &&
              e("input", { type: "hidden", name: "api_key", value: v }),
            a === "convertkit" &&
              e("input", { type: "hidden", name: "api_key", value: C }),
            e(r.input, {
              type: "email",
              name: "email",
              placeholder: m.placeholder,
              value: D,
              className: `${Pt} framer-custom-input`,
              onChange: Yt,
              onFocus: Qt,
              onBlur: Ot,
              autoComplete: "off",
              autoCapitalize: "off",
              autoCorrect: "off",
              spellCheck: "false",
              style: {
                ...Lt,
                padding: Mt,
                borderRadius: ne,
                fontSize: 16,
                ...F,
                background: m.fill,
                height: Ue ? "auto" : xe,
                color: m.color,
                boxShadow: ct(dt, _e, Ge),
              },
              variants: _t,
              initial: !1,
              animate: y ? "focused" : "default",
              transition: { duration: 0.3 },
              "data-1p-ignore": !0,
            }),
            !c.shouldAppear &&
              L &&
              e(zt, {
                shouldAppear: c.shouldAppear,
                paddingPerSide: he,
                paddingTop: ye,
                paddingRight: ie,
                padding: de,
                color: m.color,
              }),
            c.shouldAppear &&
              h("div", {
                style: {
                  position: c.isDocked ? "absolute" : "relative",
                  top: c.isDocked ? c.insetWhenDocked : 0,
                  right: c.isDocked ? c.insetWhenDocked : 0,
                  bottom: c.isDocked ? c.insetWhenDocked : 0,
                },
                children: [
                  e(r.input, {
                    type: "submit",
                    value: c.label,
                    style: {
                      ...Lt,
                      width: c.isDocked ? c.widthWhenDocked : "100%",
                      height: Ue ? "100%" : xe,
                      cursor: "pointer",
                      padding: jt,
                      borderRadius: c.isDocked ? ne - c.insetWhenDocked : ne,
                      fontSize: 16,
                      ...c.buttonFont,
                      background: c.fill,
                      color: c.color,
                      zIndex: 1,
                      boxShadow: va(c),
                    },
                  }),
                  L &&
                    e("div", {
                      style: {
                        borderRadius: c.isDocked ? ne - c.insetWhenDocked : ne,
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        inset: 0,
                        zIndex: 2,
                        color: c.color,
                        background: c.fill,
                      },
                      children: e(zt, { color: c.color }),
                    }),
                ],
              }),
          ],
        }),
      });
    },
    [
      `.${Pt}.framer-custom-input::placeholder { color: var(--framer-custom-placeholder-color) !important; }`,
    ]
  ),
  zt = (t) => {
    let a = t.shouldAppear
      ? {}
      : {
          position: "absolute",
          top: "calc(50% - 8px)",
          right: t.paddingPerSide ? t.paddingRight : t.padding,
        };
    return e(r.div, {
      style: { height: 16, width: 16, ...a },
      initial: { rotate: 0 },
      animate: { rotate: 360 },
      transition: { duration: 1, repeat: 1 / 0 },
      children: e(r.div, {
        initial: { scale: 0 },
        animate: { scale: 1 },
        children: h("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          style: { fill: "currentColor", color: t.color },
          children: [
            e("path", {
              d: "M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z",
              fill: "currentColor",
              opacity: "0.2",
            }),
            e("path", {
              d: "M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z",
              fill: "currentColor",
            }),
          ],
        }),
      }),
    });
  };
H(Vt, {
  service: {
    title: "Service",
    type: o.Enum,
    options: ["loops", "formspark", "mailchimp", "getwaitlist", "convertkit"],
    optionTitles: [
      "Loops",
      "FormSpark",
      "MailChimp",
      "Get Waitlist",
      "ConvertKit",
    ],
    defaultValue: "loops",
  },
  mailchimpURL: {
    title: "URL",
    placeholder: "https://***.us6.list-manage.com/subscribe/post?u=***",
    type: o.String,
    hidden: (t) => t.service !== "mailchimp",
  },
  loopsID: {
    title: "ID",
    placeholder: "klm2jxy0i98abzr01pq7defg5",
    type: o.String,
    hidden: (t) => t.service !== "loops",
  },
  loopsUserGroup: {
    title: "User Group",
    type: o.String,
    placeholder: "Title",
    optional: !0,
    hidden: (t) => t.service !== "loops",
  },
  loopsMailingList: {
    title: "Mailing List",
    type: o.String,
    placeholder: "cm3q41c5v02ii1lml14om2wtr",
    optional: !0,
    hidden: (t) => t.service !== "loops",
  },
  formsparkID: {
    title: "ID",
    placeholder: "7PbPpGN3",
    type: o.String,
    hidden: (t) => t.service !== "formspark",
  },
  getwaitlistAPI: {
    title: "ID",
    placeholder: "9148",
    type: o.String,
    hidden: (t) => t.service !== "getwaitlist",
  },
  convertkitAPI: {
    title: "API Key",
    placeholder: "5opis1WK6xnVsBwrOINUpe",
    type: o.String,
    hidden: (t) => t.service !== "convertkit",
  },
  convertkitFormID: {
    title: "Form ID",
    placeholder: "1043389",
    type: o.String,
    hidden: (t) => t.service !== "convertkit",
  },
  redirectAs: {
    title: "Success",
    type: o.Enum,
    options: ["link", "overlay"],
    optionTitles: ["Open Link", "Show Overlay"],
    defaultValue: "link",
  },
  link: {
    title: "Redirect",
    type: o.Link,
    hidden: (t) => t.redirectAs === "overlay",
  },
  onSubmit: {
    title: "Submit",
    type: o.EventHandler,
    hidden: (t) => t.redirectAs === "link",
  },
  layout: {
    title: "Layout",
    type: o.Enum,
    options: ["horizontal", "vertical"],
    displaySegmentedControl: !0,
    hidden: (t) => t.button.isDocked,
  },
  font: { type: o.Font, title: "Font", controls: "extended" },
  input: {
    title: "Input",
    type: o.Object,
    controls: {
      placeholder: {
        title: "Placeholder",
        type: o.String,
        defaultValue: "name@email.com",
      },
      placeholderColor: {
        title: " ",
        type: o.Color,
        defaultValue: "rgba(0, 0, 0, 0.3)",
      },
      fill: { title: "Fill", type: o.Color, defaultValue: "#EBEBEB" },
      color: { title: "Text", type: o.Color, defaultValue: "#000" },
      height: {
        title: "Height",
        type: o.Boolean,
        enabledTitle: "Auto",
        disabledTitle: "Fixed",
      },
      fixedHeight: {
        title: " ",
        type: o.Number,
        displayStepper: !0,
        min: 0,
        defaultValue: 50,
        hidden: (t) => t.height,
      },
      padding: {
        title: "Padding",
        type: o.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 15,
        valueKeys: [
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      borderRadius: {
        title: "Radius",
        type: o.Number,
        displayStepper: !0,
        min: 0,
        defaultValue: 8,
      },
      focusObject: {
        type: o.Object,
        title: "Focus",
        optional: !0,
        controls: {
          focusWidthFrom: {
            title: "From",
            type: o.Number,
            displayStepper: !0,
            defaultValue: 0,
          },
          focusWidthTo: {
            title: "To",
            type: o.Number,
            displayStepper: !0,
            defaultValue: 2,
          },
          focusColor: { title: "Color", type: o.Color, defaultValue: "#09F" },
        },
      },
      borderObject: {
        type: o.Object,
        title: "Border",
        optional: !0,
        controls: {
          borderWidth: {
            title: "Width",
            type: o.Number,
            displayStepper: !0,
            defaultValue: 1,
          },
          borderColor: {
            title: "Color",
            type: o.Color,
            defaultValue: "rgba(200,200,200,0.5)",
          },
        },
      },
      shadowObject: {
        type: o.Object,
        title: "Shadow",
        optional: !0,
        controls: {
          shadowColor: {
            title: "Color",
            type: o.Color,
            defaultValue: "rgba(0,0,0,0.25)",
          },
          shadowX: {
            title: "Shadow X",
            type: o.Number,
            min: -100,
            max: 100,
            defaultValue: 0,
          },
          shadowY: {
            title: "Shadow Y",
            type: o.Number,
            min: -100,
            max: 100,
            defaultValue: 2,
          },
          shadowBlur: {
            title: "Shadow B",
            type: o.Number,
            min: 0,
            max: 100,
            defaultValue: 4,
          },
        },
      },
    },
  },
  button: {
    title: "Button",
    type: o.Object,
    controls: {
      shouldAppear: { title: "Show", type: o.Boolean, defaultValue: !0 },
      label: { title: "Label", type: o.String, defaultValue: "Subscribe" },
      buttonFont: { type: o.Font, title: "Font", controls: "extended" },
      fill: { title: "Fill", type: o.Color, defaultValue: "#333" },
      color: { title: "Text", type: o.Color, defaultValue: "#FFF" },
      isDocked: { title: "Docked", type: o.Boolean, defaultValue: !1 },
      widthWhenDocked: {
        title: "Width",
        type: o.Number,
        min: 0,
        defaultValue: 100,
        displayStepper: !0,
        hidden: (t) => !t.isDocked,
      },
      insetWhenDocked: {
        title: "Inset",
        type: o.Number,
        min: 0,
        defaultValue: 5,
        displayStepper: !0,
        hidden: (t) => !t.isDocked,
      },
      buttonPadding: {
        title: "Padding",
        type: o.FusedNumber,
        toggleKey: "buttonPaddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        defaultValue: 15,
        valueKeys: [
          "buttonPaddingTop",
          "buttonPaddingRight",
          "buttonPaddingBottom",
          "buttonPaddingLeft",
        ],
        valueLabels: ["T", "R", "B", "L"],
        min: 0,
      },
      buttonShadow: {
        type: o.Object,
        title: "Shadow",
        optional: !0,
        controls: {
          shadowColor: {
            title: "Color",
            type: o.Color,
            defaultValue: "rgba(0,0,0,0.25)",
          },
          shadowX: {
            title: "Shadow X",
            type: o.Number,
            min: -100,
            max: 100,
            defaultValue: 0,
          },
          shadowY: {
            title: "Shadow Y",
            type: o.Number,
            min: -100,
            max: 100,
            defaultValue: 2,
          },
          shadowBlur: {
            title: "Shadow B",
            type: o.Number,
            min: 0,
            max: 100,
            defaultValue: 4,
          },
        },
      },
    },
  },
  gap: {
    title: "Gap",
    type: o.Number,
    displayStepper: !0,
    min: 0,
    defaultValue: 10,
    hidden: (t) => t.button.isDocked,
  },
});
var Lt = {
    WebkitAppearance: "none",
    appearance: "none",
    width: "100%",
    height: "auto",
    outline: "none",
    border: "none",
  },
  Ia = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
function va(t) {
  return t.buttonShadow
    ? `${t.buttonShadow.shadowX}px ${t.buttonShadow.shadowY}px ${t.buttonShadow.shadowBlur}px ${t.buttonShadow.shadowColor}`
    : "none";
}
function ct(...t) {
  let a = [];
  return t.forEach((s) => s && a.push(s)), a.join(", ");
}
var ft = Vt;
var Ca = le(ft),
  Da = ["UDF2xq7Bi", "aeBB4p3ZD"],
  ba = "framer-0kg7Y",
  Aa = { aeBB4p3ZD: "framer-v-1f30o6c", UDF2xq7Bi: "framer-v-p42k7t" };
function Tt(t, ...a) {
  let s = {};
  return a?.forEach((n) => n && Object.assign(s, t[n])), s;
}
var Ea = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ba = ({ value: t, children: a }) => {
    let s = X(A),
      n = t ?? s.transition,
      d = j(() => ({ ...s, transition: n }), [JSON.stringify(n)]);
    return e(A.Provider, { value: d, children: a });
  },
  Ra = r.create(l),
  ka = { Desktop: "UDF2xq7Bi", Phone: "aeBB4p3ZD" },
  Na = ({ height: t, id: a, width: s, ...n }) => ({
    ...n,
    variant: ka[n.variant] ?? n.variant ?? "UDF2xq7Bi",
  }),
  Sa = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Pa = q(function (t, a) {
    let s = Y(null),
      n = a ?? s,
      d = M(),
      { activeLocale: S, setLocale: I } = O(),
      f = Z(),
      { style: v, className: C, layoutId: R, variant: m, ...c } = Na(t),
      {
        baseVariant: F,
        classNames: $,
        clearLoadingGesture: P,
        gestureHandlers: u,
        gestureVariant: x,
        isLoading: z,
        setGestureState: D,
        setVariant: g,
        variants: b,
      } = G({
        cycleOrder: Da,
        defaultVariant: "UDF2xq7Bi",
        ref: n,
        variant: m,
        variantClassNames: Aa,
      }),
      i = Sa(t, b),
      w = E(ba, ...[Xe, Ye]);
    return e(Q, {
      id: R ?? d,
      children: e(Ra, {
        animate: b,
        initial: !1,
        children: e(Ba, {
          value: Ea,
          children: h(r.footer, {
            ...c,
            ...u,
            className: E(w, "framer-p42k7t", C, $),
            "data-framer-name": "Desktop",
            layoutDependency: i,
            layoutId: "UDF2xq7Bi",
            ref: n,
            style: { backgroundColor: "rgb(0, 0, 0)", ...v },
            ...Tt({ aeBB4p3ZD: { "data-framer-name": "Phone" } }, F, x),
            children: [
              e(r.div, {
                className: "framer-1ksnwjy",
                "data-framer-name": "Footer",
                layoutDependency: i,
                layoutId: "O9DeQEHTa",
                style: {
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 40,
                  borderTopRightRadius: 40,
                },
                children: e(r.div, {
                  className: "framer-1gsg2v9",
                  "data-framer-name": "Column",
                  layoutDependency: i,
                  layoutId: "jpOuOTjaX",
                  children: e(r.div, {
                    className: "framer-dwycy3",
                    "data-framer-name": "Row",
                    layoutDependency: i,
                    layoutId: "Nz_0lUglz",
                    children: h(r.div, {
                      className: "framer-tucbhz",
                      layoutDependency: i,
                      layoutId: "n74nbR2Eu",
                      children: [
                        h(r.div, {
                          className: "framer-uy29qe",
                          layoutDependency: i,
                          layoutId: "IHBPwDoP6",
                          children: [
                            h(r.div, {
                              className: "framer-fpkhay",
                              "data-framer-name": "Sitemap",
                              layoutDependency: i,
                              layoutId: "M_sk6g8EZ",
                              children: [
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: { webPageId: "Z7s0mVtRR" },
                                        motionChild: !0,
                                        nodeId: "e3_DSfGLe",
                                        openInNewTab: !1,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "Home",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-1s974iv",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "e3_DSfGLe",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: { webPageId: "Ypsar2ozb" },
                                        motionChild: !0,
                                        nodeId: "OaS3A4H6p",
                                        openInNewTab: !1,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "Changelog",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-1bainrm",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "OaS3A4H6p",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: { webPageId: "iLZYGxuPR" },
                                        motionChild: !0,
                                        nodeId: "onHyG_130",
                                        openInNewTab: !1,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "Contact",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-16899xq",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "onHyG_130",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            h(r.div, {
                              className: "framer-zcq6xp",
                              "data-framer-name": "Social",
                              layoutDependency: i,
                              layoutId: "IhL_ViPrc",
                              children: [
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: "https://x.com/tapflownotes",
                                        motionChild: !0,
                                        nodeId: "usAA_4N72",
                                        openInNewTab: !0,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "X/Twitter",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-1ebde5n",
                                  "data-framer-name": "Twitter",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "usAA_4N72",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                // e(U, {
                                //   __fromCanvasComponent: !0,
                                //   children: e(l, {
                                //     children: e(r.p, {
                                //       className: "framer-styles-preset-oh30q",
                                //       "data-styles-preset": "FwmuxBMQR",
                                //       children: e(p, {
                                //         href: "https://www.linkedin.com/company/tapflowhq",
                                //         motionChild: !0,
                                //         nodeId: "WdX8k4QN4",
                                //         openInNewTab: !0,
                                //         scopeId: "OPJJq0QP0",
                                //         smoothScroll: !1,
                                //         children: e(r.a, {
                                //           className:
                                //             "framer-styles-preset-1eahpii",
                                //           "data-styles-preset": "pWnECMXPj",
                                //           children: "LinkedIn",
                                //         }),
                                //       }),
                                //     }),
                                //   }),
                                //   className: "framer-1n23z5m",
                                //   fonts: ["Inter"],
                                //   layoutDependency: i,
                                //   layoutId: "WdX8k4QN4",
                                //   style: {
                                //     "--framer-paragraph-spacing": "0px",
                                //   },
                                //   verticalAlignment: "top",
                                //   withExternalLayout: !0,
                                // }),
                              ],
                            }),
                            h(r.div, {
                              className: "framer-it8err",
                              "data-framer-name": "Legal",
                              layoutDependency: i,
                              layoutId: "JADlPKjvy",
                              children: [
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: {
                                          pathVariables: { oNC7XILjD: "terms" },
                                          unresolvedPathSlugs: {
                                            oNC7XILjD: {
                                              collectionId: "kB5JQlUFw",
                                              collectionItemId: "zzwT7Ecnc",
                                            },
                                          },
                                          webPageId: "ZFYIZTF16",
                                        },
                                        motionChild: !0,
                                        nodeId: "uTd820ROK",
                                        openInNewTab: !1,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "Terms",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-izhv8u",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "uTd820ROK",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(p, {
                                        href: {
                                          pathVariables: {
                                            oNC7XILjD: "privacy",
                                          },
                                          unresolvedPathSlugs: {
                                            oNC7XILjD: {
                                              collectionId: "kB5JQlUFw",
                                              collectionItemId: "QptZngUYr",
                                            },
                                          },
                                          webPageId: "ZFYIZTF16",
                                        },
                                        motionChild: !0,
                                        nodeId: "A3dcv3ue4",
                                        openInNewTab: !1,
                                        scopeId: "OPJJq0QP0",
                                        smoothScroll: !1,
                                        children: e(r.a, {
                                          className:
                                            "framer-styles-preset-1eahpii",
                                          "data-styles-preset": "pWnECMXPj",
                                          children: "Privacy ",
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: "framer-yyq4ns",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "A3dcv3ue4",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                        h(r.div, {
                          className: "framer-ozn9p4",
                          "data-framer-name": "Subscription",
                          layoutDependency: i,
                          layoutId: "YvB8estc0",
                          children: [
                            h(r.div, {
                              className: "framer-sonpd6",
                              "data-framer-name": "Text",
                              layoutDependency: i,
                              layoutId: "xDEoX0VjX",
                              children: [
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      children: e(r.strong, {
                                        children: "Newsletter (rare, but good)",
                                      }),
                                    }),
                                  }),
                                  className: "framer-1nqdaa7",
                                  fonts: ["Inter", "Inter-Bold"],
                                  layoutDependency: i,
                                  layoutId: "XlWGtPMxI",
                                  style: {
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  variants: {
                                    aeBB4p3ZD: {
                                      "--extracted-r6o4lv":
                                        "rgb(255, 255, 255)",
                                    },
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                  ...Tt(
                                    {
                                      aeBB4p3ZD: {
                                        children: e(l, {
                                          children: e(r.p, {
                                            className:
                                              "framer-styles-preset-oh30q",
                                            "data-styles-preset": "FwmuxBMQR",
                                            style: {
                                              "--framer-text-color":
                                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                            },
                                            children:
                                              "Newsletter (rare, but good)",
                                          }),
                                        }),
                                        fonts: ["Inter"],
                                      },
                                    },
                                    F,
                                    x
                                  ),
                                }),
                                e(U, {
                                  __fromCanvasComponent: !0,
                                  children: e(l, {
                                    children: e(r.p, {
                                      className: "framer-styles-preset-oh30q",
                                      "data-styles-preset": "FwmuxBMQR",
                                      style: {
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48)))",
                                      },
                                      children:
                                        "Insights, launches, and behind-the-scenes plays from top creators. Useful ideas you can learn from \u2014 only when there\u2019s something good to share.",
                                    }),
                                  }),
                                  className: "framer-68s0tl",
                                  fonts: ["Inter"],
                                  layoutDependency: i,
                                  layoutId: "TQmXSXoVA",
                                  style: {
                                    "--extracted-r6o4lv":
                                      "var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))",
                                    "--framer-paragraph-spacing": "0px",
                                  },
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(r.div, {
                              className: "framer-igeii7",
                              "data-framer-name": "Input",
                              layoutDependency: i,
                              layoutId: "BBhfr6uuU",
                              children: e(W, {
                                children: e(_, {
                                  className: "framer-j1t6qc-container",
                                  "data-framer-name": "Subscription",
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: i,
                                  layoutId: "emcnd7TiN-container",
                                  name: "Subscription",
                                  nodeId: "emcnd7TiN",
                                  rendersWithMotion: !0,
                                  scopeId: "OPJJq0QP0",
                                  children: e(ft, {
                                    button: {
                                      buttonFont: {
                                        fontFamily:
                                          '"Inter Display", "Inter Display Placeholder", sans-serif',
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        letterSpacing: "0em",
                                        lineHeight: "120%",
                                      },
                                      buttonPadding: 0,
                                      buttonPaddingBottom: 0,
                                      buttonPaddingLeft: 16,
                                      buttonPaddingPerSide: !0,
                                      buttonPaddingRight: 16,
                                      buttonPaddingTop: 0,
                                      color: "rgb(255, 255, 255)",
                                      fill: "rgba(255, 255, 255, 0.2)",
                                      insetWhenDocked: 0,
                                      isDocked: !1,
                                      label: "Subscribe",
                                      shouldAppear: !0,
                                      widthWhenDocked: 120,
                                    },
                                    convertkitAPI:
                                      "kit_2074651f2175b9ec7c43e5bca5742dee",
                                    convertkitFormID: "",
                                    font: {
                                      fontFamily:
                                        '"Inter Display", "Inter Display Placeholder", sans-serif',
                                      fontSize: "16px",
                                      fontStyle: "normal",
                                      fontWeight: 300,
                                      letterSpacing: "0.03em",
                                      lineHeight: "100%",
                                    },
                                    formsparkID: "Tu7ynGXIv",
                                    gap: 8,
                                    getwaitlistAPI: "",
                                    height: "100%",
                                    id: "emcnd7TiN",
                                    input: {
                                      borderRadius: 12,
                                      color:
                                        "var(--token-c231b950-0423-4991-bb61-2e0a15fbd93a, rgba(255, 255, 255, 0.96))",
                                      fill: "rgba(255, 255, 255, 0.08)",
                                      fixedHeight: 40,
                                      focusObject: {
                                        focusColor:
                                          "var(--token-2c81481e-38cd-4c47-96da-a9e57d1ddd77, rgba(255, 255, 255, 0.16))",
                                        focusWidthFrom: 0,
                                        focusWidthTo: 1,
                                      },
                                      height: !1,
                                      padding: 16,
                                      paddingBottom: 0,
                                      paddingLeft: 16,
                                      paddingPerSide: !0,
                                      paddingRight: 16,
                                      paddingTop: 0,
                                      placeholder: "Enter email",
                                      placeholderColor:
                                        "var(--token-afca69a8-e426-431f-98e7-ffc871bb638d, rgba(255, 255, 255, 0.48))",
                                    },
                                    layout: "horizontal",
                                    layoutId: "emcnd7TiN",
                                    loopsID: "",
                                    loopsMailingList: "",
                                    loopsUserGroup: "",
                                    mailchimpURL: "",
                                    name: "Subscription",
                                    redirectAs: "overlay",
                                    service: "formspark",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              e(r.div, {
                className: "framer-18v8cwy",
                "data-framer-name": "Credits",
                layoutDependency: i,
                layoutId: "Nj6bCXOmJ",
                style: { opacity: 0.24 },
                children: e(U, {
                  __fromCanvasComponent: !0,
                  children: e(l, {
                    children: e(r.p, {
                      className: "framer-styles-preset-oh30q",
                      "data-styles-preset": "FwmuxBMQR",
                      style: {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255)))",
                      },
                      children:
                        "Tapflow \xA9 2025 \u2014 Knowledge, thoughtfully made.",
                    }),
                  }),
                  className: "framer-1iuyfoc",
                  "data-framer-name": "Sign up now for TOP SECRET\xA0news",
                  fonts: ["Inter"],
                  layoutDependency: i,
                  layoutId: "d0L2e8_mm",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-cd78f7ae-9245-431a-9c41-e6abcbb80403, rgb(255, 255, 255))",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  za = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-0kg7Y.framer-w964ra, .framer-0kg7Y .framer-w964ra { display: block; }",
    ".framer-0kg7Y.framer-p42k7t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1140px; }",
    ".framer-0kg7Y .framer-1ksnwjy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-0kg7Y .framer-1gsg2v9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 40px 0px 40px 0px; position: relative; width: 1px; }",
    ".framer-0kg7Y .framer-dwycy3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 152px; justify-content: flex-start; max-height: 100%; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-0kg7Y .framer-tucbhz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-0kg7Y .framer-uy29qe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-0kg7Y .framer-fpkhay, .framer-0kg7Y .framer-zcq6xp, .framer-0kg7Y .framer-it8err { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 16px 0px 0px; position: relative; width: min-content; }",
    ".framer-0kg7Y .framer-1s974iv, .framer-0kg7Y .framer-1bainrm, .framer-0kg7Y .framer-16899xq, .framer-0kg7Y .framer-1ebde5n, .framer-0kg7Y .framer-1n23z5m, .framer-0kg7Y .framer-izhv8u, .framer-0kg7Y .framer-yyq4ns { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-0kg7Y .framer-ozn9p4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; max-width: 440px; min-width: 320px; overflow: visible; padding: 0px; position: relative; width: 440px; }",
    ".framer-0kg7Y .framer-sonpd6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; max-width: 400px; overflow: visible; padding: 0px 0px 0px 14px; position: relative; width: 100%; }",
    ".framer-0kg7Y .framer-1nqdaa7, .framer-0kg7Y .framer-68s0tl { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-0kg7Y .framer-igeii7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-0kg7Y .framer-j1t6qc-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-0kg7Y .framer-18v8cwy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 24px 60px 24px 60px; position: relative; width: min-content; }",
    ".framer-0kg7Y .framer-1iuyfoc { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 440px; word-break: break-word; word-wrap: break-word; }",
    ".framer-0kg7Y.framer-v-1f30o6c.framer-p42k7t { height: 428px; width: 400px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-1ksnwjy { flex-direction: column; height: 81%; padding: 32px 0px 0px 0px; width: 401px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-1gsg2v9 { flex: none; gap: 40px; justify-content: flex-start; padding: 0px 32px 32px 32px; width: min-content; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-dwycy3 { gap: 80px; width: 337px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-tucbhz { flex: none; flex-direction: column; gap: 54px; justify-content: flex-start; width: min-content; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-uy29qe { gap: 36px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-fpkhay, .framer-0kg7Y.framer-v-1f30o6c .framer-zcq6xp, .framer-0kg7Y.framer-v-1f30o6c .framer-it8err { gap: 4px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-ozn9p4 { width: min-content; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-sonpd6 { padding: 0px; width: 337px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-igeii7 { width: 337px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-j1t6qc-container { width: 109%; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-18v8cwy { padding: 12px 0px 20px 0px; }",
    ".framer-0kg7Y.framer-v-1f30o6c .framer-1iuyfoc { width: 400px; }",
    ...qe,
    ...je,
  ],
  Se = N(Pa, za, "framer-0kg7Y"),
  Kn = Se;
Se.displayName = ".footer-content";
Se.defaultProps = { height: 299.5, width: 1140 };
H(Se, {
  variant: {
    options: ["UDF2xq7Bi", "aeBB4p3ZD"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: o.Enum,
  },
});
J(
  Se,
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
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2",
          weight: "500",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2",
          weight: "500",
        },
      ],
    },
    ...Ca,
    ...ae(Te),
    ...ae(Me),
  ],
  { supportsExplicitInterCodegen: !0 }
);
K.loadFonts([
  "FR;InterDisplay-Light",
  "FR;InterDisplay-SemiBold",
  "FR;InterDisplay-SemiBoldItalic",
  "FR;InterDisplay-LightItalic",
]);
var to = [
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
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/dHHUz45rhM2KCQpj9zttNVlibk.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/KKQXBq6BF0xEmVbrTnWxh3Yw.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/ugFYeIKZEJXDxI6Kh0YQUX6EK9I.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/DgDysCLt0HkIpWMu2uN5tivgQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/2yEyxokC6poTg3Uc5E2ogfVi6WE.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/wmHLUqO4QxLaADUScavxvknnBQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/08bCJfmvizuFi36VeazboYh54CQ.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/DuYGXsyDXsSnxlZ8qzmcA4x3JiI.woff2",
          weight: "600",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/JVGAsgKKXCCsDQ3MCrxIs5u1U.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/GeFYhvsobZhw8u0Xza2zCmC8Cw.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/8dxmIktsyEgZt0OloSu5gz6TgLI.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/f2kclCrwmFV8YeznrosrT3kcjE.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/HTPyW5jOpXfwIja9CrgNJUDriY4.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/SorE7ZPZIqD5pBy9oKeSOEC0Q5k.woff2",
          weight: "300",
        },
        {
          family: "Inter Display",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/xFtzow8wtMpaEQuIGgCbt25Qorg.woff2",
          weight: "300",
        },
      ],
    },
  ],
  ro = [
    `.framer-yQnRl .framer-styles-preset-14qgaa:not(.rich-text-wrapper), .framer-yQnRl .framer-styles-preset-14qgaa.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
    `@media (max-width: 1299px) and (min-width: 0px) { .framer-yQnRl .framer-styles-preset-14qgaa:not(.rich-text-wrapper), .framer-yQnRl .framer-styles-preset-14qgaa.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv10' on; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 600; --framer-font-weight-bold-italic: 600; --framer-font-weight-italic: 300; --framer-letter-spacing: 0.02em; --framer-line-height: 130%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: rgba(219, 219, 219, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
  ],
  ao = "framer-yQnRl";
export {
  tt as a,
  Ut as b,
  Ft as c,
  wt as d,
  be as e,
  Te as f,
  qe as g,
  Xe as h,
  Me as i,
  je as j,
  Ye as k,
  Oe as l,
  Vn as m,
  ft as n,
  Kn as o,
  to as p,
  ro as q,
  ao as r,
};
//# sourceMappingURL=chunk-SFQDW7Z7.mjs.map
