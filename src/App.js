import React, { Component } from "react";
import LandingPage from "./pages/landingPage.js";
import {RegisterForm as Register} from './components/RegisterForm.js';
import {LoginForm as Login} from './components/LoginForm.js';
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
