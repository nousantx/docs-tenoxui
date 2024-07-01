import generateColor from "../../utils/color-generator";

export const styles = {
  body: ".bg-neutral-100 .text-neutral-900 family-[poppins,sans-serif]",
  "pre, code": "family-['JetBrains\\_Mono',monospace] fs-90%",
  "p,a": "family-[gabarito,sans-serif]",
  a: "tc-inherit td-none lh-1.4",
  "p, a[class]": ".text-neutral-700",
  h1: "fs-2.5rem lh-1 ls--0.040em  fw-700",
  h2: "fs-2rem lh-2.25rem ls--0.030em fw-600",
  h3: "fs-1.50rem lh-2rem ls--0.025em fw-600",
  h4: "fs-1.25rem lh-1.75rem ls--0.020em fw-600",
  p: "fs-16px lh-1.4rem",
  "p code": "fs-80% bg-[rgba(142,151,169,0.27)] br-2px px-4px fw-600",

  span: "fs-inherit",
  // div: "bg-color-unset",
  // display
  ".flex": "d-flex",
  ".inline-flex": "d-[inline-flex]",
  // position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // text align
  ".text-left": "ta-left",
  ".text-center": "ta-center",
  ".text-right": "ta-right",
  ".text-justify": "ta-justify",
  ".text-start": "ta-start",
  ".text-end": "ta-end",
  // text transform
  ".uppercase": "tn-uppercase",
  ".lowercase": "tn-lowercase",
  ".capitalize": "tn-capitalize",
  ".normal-case": "tn-none",
  // text overflow
  ".truncate": "over-hidden text-over-ellipsis white-space-nowrap",
  ".text-ellipsis": "text-over-ellipsis",
  ".text-clip": "text-over-clip",
  // text wrap
  ".text-wrap": "tw-wrap",
  ".text-nowrap": "tw-nowrap",
  ".text-balance": "tw-balance",
  ".text-pretty": "tw-pretty",
  // line height
  ".leading-3": "lh-0.75rem",
  ".leading-4": "lh-1rem",
  ".leading-5": "lh-1.25rem",
  ".leading-6": "lh-1.5rem",
  ".leading-7": "lh-1.75rem",
  ".leading-8": "lh-2rem",
  ".leading-9": "lh-2.25rem",
  ".leading-10": "lh-2.5rem",
  ".leading-none": "lh-1",
  ".leading-tight": "lh-1.25",
  ".leading-snug": "lh-1.375",
  ".leading-normal": "lh-1.5",
  ".leading-relaxed": "lh-1.625",
  ".leading-loose": "lh-2",
  // line spacing
  ".tracking-tighter": "ls--0.05em",
  ".tracking-tight": "ls--0.025em",
  ".tracking-normal": "ls-0em",
  ".tracking-wide": "ls-0.025em",
  ".tracking-wider": "ls-0.05em",
  ".tracking-widest": "ls-0.1em",
  // font size
  ".text-xs": "fs-0.75rem lh-1rem",
  ".text-sm": "fs-0.875rem lh-1.25rem",
  ".text-base": "fs-1rem lh-1.5rem",
  ".text-lg": "fs-1.125rem lh-1.75rem",
  ".text-xl": "fs-1.25rem lh-1.75rem",
  ".text-2xl": "fs-1.5rem lh-2rem",
  ".text-3xl": "fs-1.875rem lh-2.25rem",
  ".text-4xl": "fs-2.25rem lh-2.5rem",
  ".text-5xl": "fs-3rem lh-1",
  ".text-6xl": "fs-3.75rem lh-1",
  ".text-7xl": "fs-4.5rem lh-1",
  ".text-8xl": "fs-6rem lh-1",
  ".text-9xl": "fs-8rem lh-1",
  // font style
  ".italic": "font-s-italic",
  ".not-italic": "font-s-normal",
  // font weight
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  // border-radius
  ".rounded-none": "br-0px",
  ".rounded-sm": "br-0.125rem",
  ".rounded": "br-0.25rem",
  ".rounded-md": "br-0.375rem",
  ".rounded-lg": "br-0.5rem",
  ".rounded-xl": "br-0.75rem",
  ".rounded-2xl": "br-1rem",
  ".rounded-3xl": "br-1.5rem",
  ".rounded-full": "br-9999px",
  ".none": "d-none",
    ".border": "bs-solid bw-0",
  ".flex-center": "d-flex flex-parent-center",
  // global styles
  ".sidebar a.nav-link": "d-block mt-6px .text-sm .tracking-tight .text-neutral-700",
  ".sidebar a.nav-link.active": ".text-blue-500",
  // docs styles
  ".docs-wrapper": {
    "h1 + p,h2 + p,h3 + p,h4 + p": "mt-2rem ta-justify",
    "p + p": "mt-1.5rem ta-justify"
  },
  // components
  // tip
  ".tip-wrapper a": "td-l-underline",
  ".tip-wrapper *": "td-c-inherit",
  // breadcrumbs
  "a.breadcrumb-link": "tc-[--neutral-700] td-li-none",
  "a.breadcrumb-link.last.active": "tc-[--neutral-900] td-l-underline td-c-[--accent-500]"
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
