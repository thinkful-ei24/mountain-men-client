import React, { Component } from "react";
import LandingPage from "./pages/landingPage.js";
import {RegisterForm as Register} from './components/RegisterForm.js';
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/login' component={Register} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
