import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

import Nav from "./components/Nav";
import Home from "./views/Home";
import People from "./views/People";
// import Home from "./views/Home";
// import Home from "./views/Home";

function NoMatch() {
  return <h2>Ooops!</h2>;
}

class Testing extends Component {
  render() {
    return (
      <div>
        <h2>Hoooooiii!</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-slate-300 h-auto pb-5">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              {/* <Route path="/starship" element={<Starship />} />
              <Route path="/planet" element={<Planet />} /> */}
              <Route path="400" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
