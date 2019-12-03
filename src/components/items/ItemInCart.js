import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  addItemToCartServer,
  removeOneItemFromCart
  // removeOneItemFromCartServer
} from "../../actions/cartAction";

import "../../style/itemInCart.css";
const ItemInCart = props => {
  const [itemNumber, setItemNumber] = useState(0);

  useEffect(
    () =>
      setItemNumber(
        props.cart.items.reduce(
          (count, ele) => count + (ele._id === item._id),
          0
        )
      ),
    []
  );
  const addOneItem = itemId => {
    setItemNumber(itemNumber + 1);
    console.log("add item button clicked", itemId);
    props.addItemToCart(itemId);
    props.addItemToCartServer(itemId);
  };

  const removeItem = itemId => {
    //setItemNumber(itemNumber - 1);
    props.removeItemFromCart(itemId);
    // removeItemFromCartServer(itemId);
  };

  const removeOneItem = itemId => {
    if (itemNumber === 1) {
      return alert("Only One Item. Button disabled.");
    } else {
      setItemNumber(itemNumber - 1);
      console.log("minus item button clicked", itemId);
      props.removeOneItemFromCart(itemId);
      //props.removeOneItemFromCartServer(itemId);
    }
  };

  const { item } = props;
  return (
    <Fragment>
      <div className="container bg-light">
        <h4>
          {item.brand.name} {item.name} {item.model}
        </h4>
        {/* <p>{item._id}</p> */}
        <div className="itemCardContent">
          <img
            src={item.imageUrl}
            style={{ height: "10rem", width: "10rem" }}
            alt=""
          />
          <p>${item.price}</p>
          <br />
          <div className="quantityZone">
            <p
              className="btn btn-secondary btn-xs"
              onClick={() => removeOneItem(item._id)}
            >
              -
            </p>
            <p>{itemNumber}</p>
            <p
              className="btn btn-secondary btn-xs"
              onClick={() => addOneItem(item._id)}
            >
              +
            </p>

            <button onClick={() => removeItem(item._id)}>Remove</button>
          </div>
        </div>
        <h5>Product Total</h5>
        <h5>{(item.price * itemNumber).toFixed(2)}</h5>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, {
  addItemToCart,
  addItemToCartServer,
  removeItemFromCart,
  removeOneItemFromCart
  // removeOneItemFromCartServer
})(ItemInCart);
// export default ItemInCart;
