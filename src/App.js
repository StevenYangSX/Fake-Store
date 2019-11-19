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

import "bootswatch/dist/minty/bootstrap.min.css"; //
import "./App.css";

function App() {
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
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
