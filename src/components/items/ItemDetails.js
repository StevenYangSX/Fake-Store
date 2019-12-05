import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemsActions";
import { addItemToCart, addItemToCartServer } from "../../actions/cartAction";
import "../../style/itemDetails.css";

const ItemDetails = props => {
  const { item, loading, match, getItem } = props;
  useEffect(() => {
    //console.log("use effect get called.");
    getItem(match.params.id);
    //console.log("loading in useeffect is", loading);
    //eslint-disable-next-line
  }, []);

  const conbinedFunction = id => {
    if (props.user.isAuthenticated) {
      props.addItemToCart(id);
      props.addItemToCartServer(id);
    } else {
      alert("please register or login first.");
    }
  };

  if (loading || item === null) {
    //console.log("in loafing 1 phase");
    return <h1>loading...</h1>;
  } // else {
  //   return <h1>{item.name}</h1>;
  // }
  return (
    <Fragment>
      <div className="container text-center">
        <div className="item-details">
          {!loading && item === undefined ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              <div className="title">
                <h4>
                  {item.brand.name}
                  {"     "} {item.name}
                </h4>

                {/* <h4>{item.details}</h4> */}
              </div>
              <div className="item-image">
                <img src={item.imageUrl} alt="" />
              </div>
              <div className="item-des">
                <p>{item.details}</p>
              </div>
              <div className="item-price">
                <p>${item.price}</p>
              </div>
              <div className="add-to-cart">
                <button
                  className="btn btn-primary"
                  onClick={() => conbinedFunction(item._id)}
                >
                  Add To Cart
                </button>
              </div>
            </Fragment>
          )}
          {/* {showItems(items)} */}
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  item: state.items.item,
  loading: state.items.loading,
  user: state.user
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, {
  getItem,
  addItemToCart,
  addItemToCartServer
})(ItemDetails);
// export default ItemDetails;
