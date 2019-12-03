import React from "react";
import { connect } from "react-redux";
//import { loadUser, logout } from "../../actions/userActions";
import { searchItem } from "../../actions/itemsActions";

const Nav = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={myStyle}
            >
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("appliances")}
              >
                appliances
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("computer")}
              >
                computers
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("musical instrument")}
              >
                Musical Instruments
              </p>
              <div className="dropdown-divider"></div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Brand
            </a>
            <div
              className="dropdown-menu"
              x-placement="bottom-start"
              style={myStyle}
            >
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("alienware")}
              >
                Alienware
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("audio-Technica")}
              >
                Audio-Technica
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("behringer")}
              >
                Behringer
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("google")}
              >
                Google
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("fender")}
              >
                Fender
              </p>
              <p
                className="dropdown-item"
                onClick={() => props.searchItem("apple")}
              >
                Apple
              </p>
              <div className="dropdown-divider"></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const myStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  transform: "translate3d(0px, 40px, 0px)"
};

//map state to props
const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart,
  items: state.items
});
export default connect(mapStateToProps, {
  searchItem
})(Nav);
