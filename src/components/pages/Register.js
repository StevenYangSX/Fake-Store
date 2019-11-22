import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser, loadUser } from "../../actions/userActions";

const Register = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    if (props.user.isAuthenticated) {
      console.log(
        "useEffect () get called in regitster compoent after auth is true"
      );
      props.history.push("/");
    }
  }, [props.user.isAuthenticated, props.history]);

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      alert("please input valid infomation.");
    } else if (password !== password2) {
      alert("Passwords do not match.");
    } else {
      console.log("Register submited."); //
      props.registerUser({
        name,
        email,
        password
      });
      //props.loadUser();
    }
    console.log("In regiester page, onsubmit , checking states:", props.user);
  };

  return (
    <Fragment>
      <h3>register page.</h3>

      <form class="form-horizontal text-center" onSubmit={onSubmit}>
        <fieldset>
          <div id="legend">
            <legend class="">Register</legend>
          </div>

          <div class="control-group">
            <label class="control-label" for="username">
              Username
            </label>
            <div class="controls">
              <input
                type="text"
                id="username"
                name="name"
                value={name}
                placeholder=""
                class="input-xlarge"
                onChange={onChange}
                required
              />
              <p class="help-block">
                Username can contain any letters or numbers, without spaces
              </p>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="email">
              E-mail
            </label>
            <div class="controls">
              <input
                type="email"
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
                minLength="6"
              />
              <p class="help-block">Password should be at least 4 characters</p>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label" for="password_confirm">
              Password (Confirm)
            </label>
            <div class="controls">
              <input
                type="password"
                id="password2"
                name="password2"
                value={password2}
                placeholder=""
                class="input-xlarge"
                onChange={onChange}
                required
                minLength="6"
              />
              <p class="help-block">Please confirm password</p>
            </div>
          </div>

          <div class="control-group">
            <div class="controls">
              <button class="btn btn-success">Register</button>
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
export default connect(mapStateToProps, { registerUser, loadUser })(Register);
