import React from "react";
import ReactDOM from "react-dom";

const Login = () => {
  return (
    <h1 className="text-4xl text-blue-500">Hello Login Page!</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Login />, document.getElementById("root") as HTMLElement)
});