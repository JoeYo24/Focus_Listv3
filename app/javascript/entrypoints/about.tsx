import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <div id="about">
      <Navbar />
      <h1 className="text-4xl text-red-500">Hello About Page!</h1>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<About />, document.getElementById("root") as HTMLElement)
})