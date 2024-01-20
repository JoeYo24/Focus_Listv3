import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("root") as HTMLElement)
});