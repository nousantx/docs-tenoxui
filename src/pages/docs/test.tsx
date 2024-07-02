import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";

const App = () => {
  useLayoutEffect(() => {
    // use tenoxui property library
    use({ property: [property] });

    // apply styles directly
    makeStyles({
      body: "bg-#21272f tc-#e4e6e8 family-[sans-serif] m-0 p-2rem"
    });

    // init tenoxui
    tenoxui();
  }, []);

  return <h1 className="tc-#ccf654">Hello World!</h1>;
};

export default App;
