import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = props => {
  const [cartFlag, setCartFlag] = useState(false);

  useEffect(() => {
    //props.getCart()
    if (props.user !== null) {
      if (props.user.cart !== undefined || props.user.cart !== null) {
        ///console.log(props.user);
        setCartFlag(true);
        console.log("code god here in useEffect when login.", cartFlag);
      }
    }
  }, []);
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
          <li className="nav-item active">
            <Link className="nav-link" to="/register">
              Register <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Number:
              {cartFlag === true ? (
                <p>You have :{props.user.name}</p>
              ) : (
                <p>Loading...</p>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(Navbar);

//export default connect(mapStateToProps, { registerUser, loadUser })(Register);
