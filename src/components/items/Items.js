import React, { useEffect, Fragment } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemsActions";

const Items = ({ items: { items, loading }, getItems }) => {
  useEffect(() => {
    getItems();
    console.log("in items componrnt, loading in usefffect is", loading);
    //eslint-disable-next-line
  }, []);

  //testing use
  // const showItems = what => {
  //   console.log(what);
  // };

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {!loading && items === null ? (
            <p>Loading...</p>
          ) : (
            items.map(item => (
              <Item
                brand={item.brand.name}
                name={item.name}
                key={item._id}
                price={item.price}
                imageUrl={item.imageUrl}
                id={item._id}
              />
            ))
          )}
          {/* {showItems(items)} */}
        </div>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps, { getItems })(Items);
