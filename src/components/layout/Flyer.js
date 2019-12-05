import React, { Fragment } from "react";
import flyer from "../../assets/flyer.jpg";
const Flyer = () => {
  return (
    <Fragment>
      <img src={flyer} alt="Flyer" style={myStyle} />
      <hr />
    </Fragment>
  );
};

const myStyle = { width: "100vw", height: "auto" };

export default Flyer;
