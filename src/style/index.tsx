import React from "react";
import { styler } from "./styler";

const Styler: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  styler();

  return <>{children}</>;
};

export default Styler;
