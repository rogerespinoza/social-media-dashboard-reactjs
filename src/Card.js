import React from "react";
import './card.css'

export default function Card(props) {
  return (
    <article className={`card ${props.name}`}>
      <p className="card-title">
        <img src={props.socialIcon} alt="" />
        {props.user}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{props.followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="" />
        {props.todayFollower}
      </p>
    </article>
  );
}
