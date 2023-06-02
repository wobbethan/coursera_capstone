import React from "react";
import "./Main.css";
function Main() {
  return (
    <div>
      <div className="main_topelement">
        <div className="main_top_info">
          <h1 className="main_top_info_title">
            Little Lemon <br />
            Chicaco
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a atque
            aspernatur fugiat sapiente consequuntur praesentium laboriosam totam
            reiciendis, architecto dolorem voluptatum soluta et ipsum harum
            numquam repudiandae aliquid nisi.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img
          src="https://www.simplejoy.com/wp-content/uploads/2022/01/mediterranean-salad.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
