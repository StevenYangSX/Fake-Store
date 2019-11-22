import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Nav from "./components/layout/Nav";
import Flyer from "./components/layout/Flyer";
import Showcase from "./components/showcase/Showcase";
import Items from "./components/items/Items";
import AboutPage from "./components/pages/AboutPage";
import ItemDetails from "./components/items/ItemDetails";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import axios from "axios";

import "bootswatch/dist/minty/bootstrap.min.css"; //
import "./App.css";

// if (localStorage.token) {
//   const token = localStorage.token;
//   if (token) {
//     axios.defaults.headers.common["x-auth-token"] = token;
//   } else {
//     delete axios.defaults.headers.common["x-auth-token"];
//   }
// }
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
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
          ></Route>

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/item/:id" component={ItemDetails} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
