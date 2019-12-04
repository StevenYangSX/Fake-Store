import React, { Fragment } from "react";
import flyer from "../../assets/flyer.webp";
const Flyer = () => {
  return (
    <Fragment>
      <img src={flyer} alt="Flyer" style={myStyle} />
    </Fragment>
  );
};

const myStyle = { width: "100vw", height: "80vh" };

export default Flyer;
