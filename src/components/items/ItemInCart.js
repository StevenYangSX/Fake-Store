import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../actions/cartAction";

const ItemInCart = ({ item, removeItemFromCart }) => {
  // useEffect(() => getItem(itemId), []);

  // if (loading === true) {
  //   return <h4>Loading...</h4>;
  // }

  return (
    <Fragment>
      <div>
        <p>{item.name}</p>
        <p>{item._id}</p>
        <img src={item.imageUrl} alt="" />
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  cart: state.cart
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, { removeItemFromCart })(ItemInCart);
// export default ItemInCart;
