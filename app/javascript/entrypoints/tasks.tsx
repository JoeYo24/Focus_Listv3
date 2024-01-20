import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/navbar";

const Tasks = () => {
  return (
    <div id="tasks">
      <Navbar />
      <h1 className="text-4xl text-yellow-500">Hello Tasks Page!</h1>
    </div>
    
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Tasks />, document.getElementById("root") as HTMLElement)
});