import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemsActions";
import { removeItemFromCart, checkOut } from "../../actions/cartAction";
import ItemInCart from "../../components/items/ItemInCart";
import { Redirect } from "react-router-dom";

const Cart = props => {
  if (props.user.isAuthenticated !== true) {
    return <Redirect to="/" />;
  }

  const removeDuplicates = (myArr, prop) => {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  };
  const filteredItems = removeDuplicates(props.cart.items, "_id");

  const calculateTotal = allItem => {
    return allItem.reduce((sum, current) => sum + current.price, 0);
  };
  const calculateTax = allItem => {
    return allItem.reduce((sum, current) => sum + current.price * 0.12, 0);
  };
  const productTotal = calculateTotal(props.cart.items);
  const productTax = calculateTax(props.cart.items).toFixed(2);
  console.log(productTotal);
  return (
    <Fragment>
      <h3>Your Cart</h3>
      {props.cart &&
        filteredItems.map(item => (
          <Fragment>
            <br />
            <br />
            <ItemInCart key={item._id} item={item} />
          </Fragment>
        ))}

      <br />
      <br />
      <div className="container">
        <p>Product Subtotal: ${productTotal}</p>
        <p>Tax: ${productTax}</p>
        <p>
          Total after Tax: ${parseFloat(productTotal) + parseFloat(productTax)}{" "}
        </p>
      </div>
      <button onClick={props.checkOut}>Check Out</button>
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

export default connect(mapStateToProps, {
  checkOut,
  getItem,
  removeItemFromCart
})(Cart);
// export default ItemDetails;
