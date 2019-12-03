import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginUser, loadUser } from "../../actions/userActions";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (props.user.isAuthenticated) {
      console.log(props);

      props.history.push("/");
    }
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
      console.log("Login submited."); //
      props.loginUser({
        email,
        password
      });
      //props.loadUser();
    }
  };
  return (
    <Fragment>
      <form class="form-horizontal text-center" onSubmit={onSubmit}>
        <fieldset>
          <div id="legend">
            <legend class="">Login</legend>
          </div>

          <div class="control-group">
            <label class="control-label" for="email">
              E-mail
            </label>
            <div class="controls">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                placeholder=""
                class="input-xlarge"
                onChange={onChange}
                required
              />
              <p class="help-block">Please provide your E-mail</p>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="password">
              Password
            </label>
            <div class="controls">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder=""
                class="input-xlarge"
                onChange={onChange}
                required
              />
              <p class="help-block">Password should be at least 4 characters</p>
            </div>
          </div>

          <div class="control-group">
            <div class="controls">
              <button class="btn btn-success">Login</button>
            </div>
          </div>
          <div class="control-group">
            <div class="controls">
              <Link to="/register" class="">
                Register
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { loginUser })(Login);
