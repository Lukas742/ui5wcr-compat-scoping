import "./scoping.ts";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-compat/dist/Assets.js";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
