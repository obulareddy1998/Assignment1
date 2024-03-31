import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import List from "../List";
import Mobile from "../Mobile";
import Component from "../Component";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Mobile />
  </StrictMode>
);
