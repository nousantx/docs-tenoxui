import property from "@tenoxui/property";
export const globalProps = [
  property,
  {
    "text-opacity": "--text-opacity",
    "bg-opacity": "--bg-opacity",
    "border-opacity": "--border-opacity",
    tr: "transition",
    border: "border",
    bc: "borderColor",
    "td-l": "textDecorationLine",
    "td-c": "textDecorationColor",
    visibility: "visibility",
    outline: "outline",
    "scroll-b": "scrollBehavior",
    "scroll-m-t": "scrollMarginTop",
    "li-s-loc": "listStylePosition",
    "li-s": "listStyle",
    "li-s-type": "listStyleType",
    blur: {
      property: "filter",
      customValue: "blur({value})"
    }
  }
];
