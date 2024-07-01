import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "nosant-icon";
import "./style/css/index.css";
import "./style/css/color.css";
import "./style/css/google-icons.css";

createRoot(document.getElementById("root")!).render(<Routes />);
