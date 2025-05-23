import React from "react";
import { createRoot } from "react-dom/client"; 

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "This is h1 Tag"),
    React.createElement("h2", { key: "h2" }, "This is h2 Tag"),
  ])
);

const root = createRoot(document.getElementById("root"));
root.render(parent);
