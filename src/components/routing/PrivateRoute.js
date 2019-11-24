import React from "react";
import { connect } from "react-redux";
import { getUserCart } from "../../actions/userActions";

const PrivateRoute = props => {
  return (
    <div>
      <p>{props.getUserCart}</p>
    </div>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { getUserCart })(PrivateRoute);
