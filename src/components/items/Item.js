import React, { Fragment } from "react";

const Item = ({ brand, name, price, imageUrl }) => {
  return (
    <Fragment>
      <div class="col">
        <div class="card">
          <img class="card-img-top" src={imageUrl} alt="" />
          <div class="card-body">
            <h4 class="card-title">
              {brand} {name}
            </h4>
            <p class="card-text">${price}</p>
            <a href="#!" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
