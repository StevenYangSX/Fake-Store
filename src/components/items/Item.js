import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToCart, addItemToCartServer } from "../../actions/cartAction";

const Item = props => {
  const conbinedFunction = id => {
    props.addItemToCart(id);
    props.addItemToCartServer(id);
  };
  const { brand, name, price, imageUrl, id } = props;
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

            <a href={`/item/${id}`} className="btn btn-primary">
              Details
            </a>
            <button
              onClick={() => conbinedFunction(id)}
              className="btn btn-secondary btn-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  items: state.items
});
export default connect(mapStateToProps, { addItemToCart, addItemToCartServer })(
  Item
);
