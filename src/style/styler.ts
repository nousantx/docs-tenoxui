import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { globalProps } from "./lib/props.ts";
import { colors, styles, breakpoints, values } from "./lib/styles";
import { utility } from "./lib/utility";

export function styler(...props: any) {
  useLayoutEffect(() => {
    use({
      property: globalProps,
      values: values,
      breakpoint: breakpoints
    });
    makeStyles(colors, styles, utility, colors);
    tenoxui();
  }, [props]);
}
