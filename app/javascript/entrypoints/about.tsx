import React from "react";
import ReactDOM from "react-dom";

const About = () => {
  return (
    <h1 className="text-4xl text-red-500">Hello About Page!</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<About />, document.getElementById("root") as HTMLElement)
})