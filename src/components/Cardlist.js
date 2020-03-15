import React, { Fragment } from "react";
import Card from "./Card";
import "./Cardlist.css";

const Cardlist = ({ robots }) => {
  return (
    <Fragment>
      <div className="card-wrapper">
        {robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Cardlist;
