import React from "react";
import ReactDOM from "react-dom";

const Signup = () => {
  return (
    <h1 className="text-4xl text-purple-500">Hello Signup Page!</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Signup />, document.getElementById("root") as HTMLElement)
});