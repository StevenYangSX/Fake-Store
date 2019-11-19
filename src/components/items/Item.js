import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Item = ({ brand, name, price, imageUrl, id }) => {
  return (
    <Fragment>
      <div className="col">
        <div className="card">
          <img className="card-img-top" src={imageUrl} alt="" />
          <div className="card-body">
            <h4 className="card-title">
              {brand} {name}
            </h4>
            <p className="card-text">
              ${price} {id}
            </p>

            <Link to={`/item/${id}`} className="btn btn-primary">
              Details
            </Link>
            <Link to="#!" className="btn btn-secondary btn-sm">
              Add to Card
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
