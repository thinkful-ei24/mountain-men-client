import React, { Component } from "react";
import LandingPage from "./pages/landingPage.js";

import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import HeaderBar from "./components/HeaderBar.js";

import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Dashboard from './pages/dashboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className='body'>
            <div className='header'>
              {/* <HeaderBar></HeaderBar> */}
            </div>

            <div className='main'>

              {/* Landing Page */}
              <Route path="/" component={LandingPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />

              {/* Dashboards */}
              <Route exact path='/dashboard' component={Dashboard} />

            </div>

            <div className='footer'>

            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
