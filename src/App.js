import React from "react";
import "bootswatch/dist/minty/bootstrap.min.css"; // Added this :boom:

import Navbar from "./components/layout/Navbar";
import Nav from "./components/layout/Nav";
import Flyer from "./components/layout/Flyer";
import Showcase from "./components/showcase/Showcase";
import Items from "./components/items/Items";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Nav />
      <Flyer />
      <Showcase />
      <Items />
    </div>
  );
}

export default App;
