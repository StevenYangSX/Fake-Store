import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser, logout } from "../../actions/userActions";
import {
  addItemToCart,
  removeItemFromCart,
  clearCart
} from "../../actions/cartAction";

const Navbar = props => {
  useEffect(() => {
    //if(props.isAuthenticated)
    if (
      localStorage.getItem("token") !== undefined &&
      localStorage.getItem("token") !== null
    ) {
      props.loadUser();
    }
    if (props.user.user !== null) {
      props.user.user.cart.map(id => props.addItemToCart(id));
    }
    //props.user.user.cart.map(id => props.addItemToCart(id));
  }, [props.user.isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Fake Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <form className="form-inline mr-auto my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <ul className="navbar-nav mr-right">
          {!props.user.isAuthenticated && (
            <li className="nav-item active">
              <Link className="nav-link" to="/register">
                Register <span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
          {!props.user.isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          {props.user.isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <button onClick={props.logout}>Logout</button>
              </Link>
            </li>
          )}
          {props.user.isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
          )}
          {props.user.isAuthenticated && !props.user.loading ? (
            <li className="nav-item">
              <p>{props.user.user.cart.length}</p>
            </li>
          ) : (
            <li className="nav-item">
              <p>loading...</p>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
});
export default connect(mapStateToProps, {
  loadUser,
  logout,
  addItemToCart,
  removeItemFromCart,
  clearCart
})(Navbar);

//export default connect(mapStateToProps, { registerUser, loadUser })(Register);
