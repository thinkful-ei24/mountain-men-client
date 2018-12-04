import React, { Component } from "react";
import LandingPage from "./pages/landingPage.js";
import RegistrationForm from './components/RegisterForm.js';
import LogForm from './components/LoginForm.js';
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
            <Route exact path='/login' component={LogForm} />
            <Route exact path='/register' component={RegistrationForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
