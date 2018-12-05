import React, { Component } from "react";
import LandingPage from "./pages/landingPage.js";
import RegistrationForm from './components/RegisterForm.js';
import LogForm from './components/LoginForm.js';
import { connect } from 'react-redux';
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from './pages/dashboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='body'>
            <div className='header'>

            </div>

            <div className='main'>
              {/* Landing Page */}
              <Route path="/" component={LandingPage} />
              <Route exact path='/login' component={LogForm} />
              <Route exact path='/register' component={RegistrationForm} />
              {/* Dashboards */}
              <Route exact path='/dashboard' component={Dashboard} />
            </div>

            <div className='footer'>

            </div>

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(App);
