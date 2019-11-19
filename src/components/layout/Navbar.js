import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <a className="nav-link" href="/">
              Register <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
