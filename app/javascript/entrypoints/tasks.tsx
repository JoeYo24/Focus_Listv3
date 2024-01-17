import React from "react";
import ReactDOM from "react-dom";

const Tasks = () => {
  return (
    <h1 className="text-4xl text-yellow-500">Hello Tasks Page!</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Tasks />, document.getElementById("root") as HTMLElement)
});