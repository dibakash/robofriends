import React, { Fragment } from "react";
import "./Card.css";

const Card = ({ name, id, email }) => {
  return (
    <Fragment>
      <div className="robo-cards">
        <img src={`https://robohash.org/${id}`} alt="robot1" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Fragment>
  );
};

export default Card;
