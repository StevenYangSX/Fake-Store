import React, { useEffect, Fragment, useState } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemsActions";

const Items = ({ items: { items, loading }, getItems, control }) => {
  useEffect(() => {
    getItems();
    // console.log("in items componrnt, loading in usefffect is", loading);
    //eslint-disable-next-line
  }, []);

  //testing use
  // const showItems = what => {
  //   console.log(what);
  // };
  var filteredItems = items;
  const [startState, setStartState] = useState(8);
  const moreItems = () => {
    console.log("more button clicked.");
    setStartState(startState + 8);
  };

  //partial items by control panel
  if (control.priceInterval !== null) {
    filteredItems = items.filter(
      element =>
        element.price >= control.priceInterval[0] &&
        element.price <= control.priceInterval[1]
    );
    console.log(filteredItems);
  }

  // if (control.ifFeatured !== null) {
  //   filteredItems = items.filter(
  //     element => element.isFeatured === control.ifFeatured
  //   );
  //   console.log(filteredItems);
  // }

  // if (control.ifOnSale !== null) {
  //   filteredItems = items.filter(
  //     element => element.isOnSale === control.ifOnSale
  //   );
  //   console.log(filteredItems);
  // }

  ///////finished partial items

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
            filteredItems
              .slice(0, startState)
              .map(item => (
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
        <br />
        <br />
        <h4 className="btn btn-primary btn-lg center" onClick={moreItems}>
          More
        </h4>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  items: state.items,
  control: state.control
});

export default connect(mapStateToProps, { getItems })(Items);
