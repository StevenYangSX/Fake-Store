import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemsActions";

const ItemDetails = () => {
  //   useEffect(() => {
  //     getItem(props.match.params.id);
  //   }, []);
  return (
    <div>
      <p>waht???</p>
    </div>
  );
};

//map state to props
// const mapStateToProps = state => ({
//   item: state.item
// });

// export default connect(mapStateToProps, { getItem })(ItemDetails);
export default ItemDetails;
