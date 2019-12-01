import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Nav from "./components/layout/Nav";
import Flyer from "./components/layout/Flyer";
import Showcase from "./components/showcase/Showcase";
import Items from "./components/items/Items";
import AboutPage from "./components/pages/AboutPage";
import ItemDetails from "./components/items/ItemDetails";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Cart from "./components/cart/Cart";
import { loadUser } from "./actions/userActions";
import SearchItems from "./components/items/SearchItems";
import "bootswatch/dist/minty/bootstrap.min.css"; //
import "./App.css";
import PrivateRoute from "./components/routing/PrivateRoute";

// if (localStorage.token) {
//   const token = localStorage.token;
//   if (token) {
//     axios.defaults.headers.common["x-auth-token"] = token;
//   } else {
//     delete axios.defaults.headers.common["x-auth-token"];
//   }
// }
const App = props => {
  // useEffect(() => {
  //   if (props.items.redirect === "brand") {
  //     console.log(props);

  //     //props.history.push(`/items/brand/${props.items.redirect}`);
  //     return <Redirect to="/about" />;
  //   }
  //   if (props.items.redirect === "category") {
  //     console.log(props);

  //     props.history.push(`/items/${props.items.redirect}/`);
  //   }
  // }, [props.items.redirect]);
  return (
    <Provider store={store}>
      <Router>
        {props.items.redirect === "brand" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        {props.items.redirect === "category" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        {props.items.redirect === "name" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        <Navbar {...props} />
        <Nav />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <Flyer />
                <Showcase />
                <Items />
              </Fragment>
            )}
          />

          <Route exact path="/items/brand/:brand" component={SearchItems} />
          <Route exact path="/items/category/:brand" component={SearchItems} />
          <Route exact path="/items/name/:name" component={SearchItems} />
          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/item/:id" component={ItemDetails} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
};

// export default App;
//map state to props
const mapStateToProps = state => ({
  user: state.user,
  items: state.items,
  cart: state.cart
});
export default connect(mapStateToProps, { loadUser })(App);
