import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (
      <div className="card">
        <div className="card-body">
          <img
            src={props.img}
            width="40%"
            alt=""
            className=""
            id="demopic"
            style={{ position: "relative", top: "-5%", left: "5%" }}
          />
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.text}
          </p>
          <Link to="/" className="btn btn-primary">
            {props.link}
          </Link>
        </div>
      </div>
    );
}

export default Card