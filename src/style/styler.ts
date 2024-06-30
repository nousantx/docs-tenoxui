import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
import { colors, styles, breakpoints, values } from "./lib/styles";

export function styler(...props: any) {
  useLayoutEffect(() => {
    use({
      property: [
        property,
        {
          "text-opacity": "--text-opacity",
          "bg-opacity": "--bg-opacity",
          "border-opacity": "--border-opacity",
          tr: "transition",
          border: "border",
          visibility: "visibility"
        }
      ],
      values: values,
      breakpoint: breakpoints
    });
    makeStyles(colors, styles);
    tenoxui();
  }, [props]);
}
