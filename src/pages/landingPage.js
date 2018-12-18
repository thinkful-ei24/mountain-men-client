import React from "react";
import { connect } from "react-redux";
import LandingMain from "../components/LandingMain.js";

require('../css/landingpage.css');

export function LandingPage(props) {
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
