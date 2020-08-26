import React from "./node_modules/react";
import "./style.css";

function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;