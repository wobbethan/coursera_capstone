import React from "react";
import "./Reserve.css";
function Reserve() {
  return (
    <div className="reserve_comp">
      <div className="reserve_title">
        <img
          src="https://maderafleamarket.com/wp-content/uploads/2021/04/book-your-reservation-image_1.jpg"
          alt=""
        />
      </div>
      <div className="reserve_form">
        <div className="form_fn">
          <h3>First Name</h3>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form_ln">
          <h3>Last Name</h3>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form_email">
          <h3>Email</h3>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form_pn">
          <h3>Party Size</h3>
          <input type="number" placeholder={1} />
        </div>
        <div className="form_date">
          <h3>Date</h3>
          <input type="date" />
        </div>
        <div className="form_time">
          <h3>Time</h3>
          <input type="text" />
        </div>
        <div className="form_ac">
          <h3>Additional Comments</h3>
          <input type="text" />
        </div>
        <button type="Submit">Submit</button>
      </div>
    </div>
  );
}

export default Reserve;
