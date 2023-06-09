import React from "react";
import "./Main.css";
function Main() {
  return (
    <div className="main_component">
      <div className="main_intro">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, located on Maldove
          Street in Chicago, Illionis. We focus on traditional recipes served
          with a modern twist.
        </p>
        <button>Reserve a table</button>
      </div>
      <div className="main_image">
        <img src="https://rawcdn.githack.com/Ephrem2166/Little-Lemon-Restaurant/8776bab9931f73a25a9bba9fe4e8a05fb9484499/src/assets/food/food1.png"></img>
      </div>
    </div>
  );
}

export default Main;
