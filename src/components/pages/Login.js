import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../../actions/userActions";
import "../../style/myForm.css";
const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (props.user.isAuthenticated) {
      // console.log(props);

      props.history.push("/");
    }
    //eslint-disable-next-line
  }, [props.user.isAuthenticated, props.history]);

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("please input valid infomation.");
    } else {
      //console.log("Login submited."); //
      props.loginUser({
        email,
        password
      });
      //props.loadUser();
    }
  };
  return (
    <Fragment>
      <div className="container text-center register-login-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>E-mail</label>

            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
            />

            <small className="help-block">Please provide your E-mail</small>
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
            />
            <small className="help-block">
              Password should be at least 6 characters
            </small>
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>

          <div className="form-group">
            <Link to="/register" className="">
              Register Today
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { loginUser })(Login);
