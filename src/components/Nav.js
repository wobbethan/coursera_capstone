import React from "react";
import "./Nav.css";
import logo from "../assets/Asset16@4x.png";

function Nav() {
  return (
    <div className="nav_component">
      <img src={logo}></img>
      <ul className="nav_links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
