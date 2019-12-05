import React, { Fragment } from "react";
import Item from "./Item";
import { connect } from "react-redux";
//import { getItems } from "../../actions/itemsActions";

const SearchItems = ({ items: { items, loading } }) => {
  //testing use
  // const showItems = what => {
  //   console.log(what);
  // };

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <Fragment>
      <div className="container text-center">
        <div className="cards-container">
          {!loading && items === null ? (
            <p>Nothing found</p>
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

export default connect(mapStateToProps)(SearchItems);
