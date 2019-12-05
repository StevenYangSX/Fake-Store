import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser, loadUser } from "../../actions/userActions";
import "../../style/myForm.css";

const Register = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  useEffect(() => {
    if (props.user.isAuthenticated) {
      // console.log(
      //   "useEffect () get called in regitster compoent after auth is true"
      // );
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
      //console.log("Register submited."); //
      props.registerUser({
        name,
        email,
        password
      });
      //props.loadUser();
    }
    //console.log("In regiester page, onsubmit , checking states:", props.user);
  };

  return (
    <Fragment>
      <hr />
      <div className="container text-center register-login-form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>

            <input
              type="text"
              id="username"
              name="name"
              value={name}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
            />
            <small className="help-block">
              Username can contain any letters or numbers, without spaces
            </small>
          </div>

          <div className="form-group">
            <label>E-mail: </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
            />
            <p className="help-block">Please provide your E-mail</p>
          </div>

          <div className="form-group">
            <label>Password: </label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
              minLength="6"
            />
            <small className="help-block">
              Password should be at least 6 characters
            </small>
          </div>

          <div className="form-group">
            <label>Password (Confirm)</label>

            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder=""
              className="form-control"
              onChange={onChange}
              required
              minLength="6"
            />
            <p className="help-block">Please confirm password</p>
          </div>

          <button type="submit" className="btn btn-primary">
            Rigerster
          </button>
        </form>
      </div>
    </Fragment>
  );
};

//map state to props
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps, { registerUser, loadUser })(Register);
