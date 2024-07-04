import generateColor from "../../utils/color-generator";

export const styles = {
  html: "scroll-b-smooth",
  body: ".bg-neutral-900 .text-neutral-100 family-[poppins,sans-serif]",
  "pre, code": "family-['JetBrains\\_Mono',monospace] fs-90%",
  //"pre, code": "family-['poppins',monospace] fs-90%",
  "p,a,li": "family-[gabarito,sans-serif] fw-400",
  a: "tc-inherit td-none lh-1.4",
  "p, a[class]": ".text-slate-200",
  ".poppins": "family-poppins",
  h1: "fs-2.5rem lh-1 ls--0.040em  fw-700",
  h2: "fs-2rem lh-2.25rem ls--0.030em fw-600",
  h3: "fs-1.50rem lh-2rem ls--0.025em fw-600",
  h4: "fs-1.25rem lh-1.75rem ls--0.020em fw-600",
  p: "fs-16px lh-1.4rem",
  ".code": "fs-80% bg-[rgba(142,151,169,0.27)] br-2px px-4px fw-600 tc-$neutral-100",
  "p code": ".code",
  "code.primary": ".text-primary-500",
  ".hljs": "bg-#1a1b26 tc-#9aa5ce",
  ".hljs span": "tw-nowrap",
  span: "fs-inherit",
  // div: "bg-color-unset",
  // global styles
  ".sidebar a.nav-link": "d-block mt-6px .text-base .tracking-tight .text-neutral-400 bs-solid bw-0 p-0 tw-nowrap",
  ".sidebar a.nav-link.active": "pl-8px bw-left-2px bc-[--primary-500] .text-neutral-200",
  "a.app--nav_link": "fs-14px td-l-underline td-c-transparent tc-inherit",
  "a.app--nav_link.active": "tc-$primary-100 td-c-$primary-500",
  // docs styles
  ".docs-wrapper": {
    "h1,h2,h3,h4": "scroll-m-t-2rem",
    p: "lh-1.5em",
    h1: "fs-2rem lh-1.2 ls--0.040em fw-700",
    h2: "fs-1.75rem lh-1.7em ls--0.030em fw-600",
    "h1 + p,h2 + p,h3 + p,h4 + p": "mt-1.3rem ta-justify",
    "p a, p > a code": "td-l-underline td-c-$primary-500",
    "h1 + h2": "mt-3rem",
    "h2 + h3": "mt-2rem",
    "p + h2": "mt-3rem",
    "p + h3": "mt-2.5rem",
    "p + p": "mt-1.5rem ta-justify",
    "code + h1, code + h2, code + h3, code + h4": "mb-2rem",
    "h1 code, h2 code, h3 code, h4 code": ".code",
    ".doc-link-bottom p": "m-0",
    ul: {
      "": "li-s-loc-inside",
      "+ p": "mt-1rem", // ul + p
      "+ h2": "mt-1rem", // ul + p
      li: {
        "": "fs-1rem lh-1.5rem mt-8px",
        "code, span.code": ".code",
        "code.primary, span.code.primary": "tc-[--accent-500]"
      }
    },
    ol: {
      "": "li-s-loc-inside",
      "+ p": "mt-1rem", // ul + p
      "+ h2": "mt-1rem", // ul + p
      li: {
        "": "fs-1rem lh-1.5rem mt-8px",
        "code, span.code": ".code",
        "code.primary, span.code.primary": "tc-[--accent-500]"
      }
    }
  },

  // components
  // tip
  ".tip-wrapper a": "td-l-underline",
  ".tip-wrapper *": "td-c-inherit",
  // breadcrumbs
  "a.breadcrumb-link": "tc-[--neutral-500] td-l-none",
  "a.breadcrumb-link.last.active": "tc-[--neutral-200] td-l-underline td-c-[--primary-500]",
  ".transition-color": "tr-prop-[color,\\_background-color,\\_border-color]",

  // button
  // ".btn": "bg-none border-none tc-[--neutral-100] cursor-pointer fw-500 family-inherit",
  button: "outline-none border-none bg-none tc-inherit family-inherit"
};

export const colors = generateColor([
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "primary",
  "accent"
]);

// breakpoints
export const breakpoints = [
  { name: "max-xs", max: 374.9 },
  { name: "xs", min: 375 },
  { name: "max-sm", max: 578.9 },
  { name: "sm", min: 579 },
  { name: "max-md", max: 639.9 },
  { name: "md", min: 640 },
  { name: "max-lg", max: 767.9 },
  { name: "lg", min: 768 },
  { name: "max-xl", max: 991.9 },
  { name: "xl", min: 992 },
  { name: "max-2xl", max: 1279.9 },
  { name: "2xl", min: 1280 },
  { name: "max-3xl", max: 1439.9 },
  { name: "3xl", min: 1440 }
];

// custom values
export const values = {
  full: "100%",
  primary: "#ccf654"
};
