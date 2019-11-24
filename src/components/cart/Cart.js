import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemsActions";
import { removeItemFromCart } from "../../actions/cartAction";
import ItemInCart from "../../components/items/ItemInCart";
import { Redirect } from "react-router-dom";

const Cart = props => {
  if (props.user.isAuthenticated !== true) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      {props.cart &&
        props.cart.items.map(item => (
          <Fragment>
            <button onClick={() => props.removeItemFromCart(item._id)}>
              Remove Item
            </button>
            <ItemInCart key={item._id} item={item} />
          </Fragment>
        ))}

      <br />
      <br />
      <button>Check Out</button>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user,
  items: state.items,
  cart: state.cart
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, { getItem, removeItemFromCart })(Cart);
// export default ItemDetails;
