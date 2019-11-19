import React from "react";

const Nav = () => {
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
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
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
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
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
export default Nav;
