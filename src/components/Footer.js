import React from "react";
import logo from "../assets/Asset 20@4x.png";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="first_col">
        <img src={logo}></img>
      </div>
      <div className="second_col">
        <h2>Document Navigation</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div className="third_col">
        <h2>Contact</h2>
        <ul>
          <li>
            <p>2395 Maldove Way, Chicago Illinois</p>
          </li>
          <li>
            <p>123-456-7890</p>
          </li>
          <li>
            <p>contact@littlelemon.com</p>
          </li>
        </ul>
      </div>
      <div className="fourth_col">
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
