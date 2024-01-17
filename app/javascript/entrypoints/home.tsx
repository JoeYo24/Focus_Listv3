import React from "react";
import ReactDOM from "react-dom";

const Home = () => {
  return (
    <h1 className="text-4xl text-green-500">Hello World!</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("root") as HTMLElement)
});