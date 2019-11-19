import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemsActions";

const ItemDetails = ({ item, loading, match, getItem }) => {
  //const { item, loading } = props;
  console.log("outside use effect cheking: ", loading);
  useEffect(() => {
    console.log("use effect get called.");
    getItem(match.params.id);
    console.log("loading in useeffect is", loading);
  }, []);

  if (loading || item === null) {
    console.log("in loafing 1 phase");
    return <h1>loading...</h1>;
  } // else {
  //   return <h1>{item.name}</h1>;
  // }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {!loading && item === undefined ? (
            <p>Loading...</p>
          ) : (
            <Fragment>
              <p>{item.name}</p>
              <p>{item.brand.name}</p>
              <p>{item.details}</p>
              <img src={item.imageUrl} alt="" />
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
  loading: state.items.loading
});
//console.log("in mapping state is: ", state)

export default connect(mapStateToProps, { getItem })(ItemDetails);
// export default ItemDetails;
