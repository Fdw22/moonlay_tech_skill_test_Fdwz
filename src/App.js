import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./views/Home";

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
        <div className="bg-slate-300 h-screen">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<Testing />} />
              <Route path="400" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
