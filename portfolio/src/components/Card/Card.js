import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.alt} src={props.image} id={props.id} />
    </div>
    <div className="content">
      <h1 className="text-center project-title">{props.title}</h1>
      <ul className="nav justify-content-center">
        <li>
          <a href={props.github} target="_new">
            <button type="button" className="btn btn-outline-light project-button">GitHub</button>
          </a>
        </li>
        <a href={props.live} target="_new">
          <li>
            <button type="button" className="btn btn-outline-light project-button">Live</button>
          </li>
        </a>
      </ul>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Card;
