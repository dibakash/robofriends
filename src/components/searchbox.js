import React, { Fragment } from "react";
import "./searchbox.css";

const Searchbox = ({ makeChanges }) => {
  return (
    <Fragment>
      <input type="search" onChange={makeChanges} />
    </Fragment>
  );
};

export default Searchbox;
