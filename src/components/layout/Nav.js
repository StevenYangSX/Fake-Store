import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="nav nav-pills">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div
              class="dropdown-menu"
              x-placement="bottom-start"
              style={myStyle}
            >
              <a class="dropdown-item" href="/">
                Action
              </a>
              <a class="dropdown-item" href="/">
                Another action
              </a>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Brand
            </a>
            <div
              class="dropdown-menu"
              x-placement="bottom-start"
              style={myStyle}
            >
              <a class="dropdown-item" href="/">
                Action
              </a>
              <a class="dropdown-item" href="/">
                Another action
              </a>
              <a class="dropdown-item" href="/">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">
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
