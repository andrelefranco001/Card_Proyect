import React from "react";
import imghome from "../assets/img/3d-fluency-big-ben.png";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          <img src={imghome} width="50" height="50" />
          England Houses
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
