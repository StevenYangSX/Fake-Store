import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addItemToCart, addItemToCartServer } from "../../actions/cartAction";
import "../../style/item.css";

const Item = props => {
  const conbinedFunction = id => {
    if (props.user.isAuthenticated) {
      props.addItemToCart(id);
      //console.log(Redirect);
      props.addItemToCartServer(id);
    } else {
      alert("please register or login first.");
    }
  };
  const { brand, name, price, imageUrl, id } = props;
  return (
    <Fragment>
      <div className="cards">
        <div className="card-image">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-text">
          <h6>
            {" "}
            {brand} {name}
          </h6>
          <p>$ {price}</p>
        </div>
        <div className="card-buttons">
          <a href={`/item/${id}`} className="btn btn-primary">
            Details
          </a>
          <a
            href="#!"
            onClick={() => conbinedFunction(id)}
            className="btn btn-warning"
          >
            Add to Cart
          </a>
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  items: state.items,
  user: state.user
});
export default connect(mapStateToProps, { addItemToCart, addItemToCartServer })(
  Item
);
