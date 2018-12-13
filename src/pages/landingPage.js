import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LandingMain from "../components/LandingMain.js";
require('../css/landingpage.css');

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div id='landing-container'>
      <LandingMain />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state
  };
};

export default connect(mapStateToProps)(LandingPage);
