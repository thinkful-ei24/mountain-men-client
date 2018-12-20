import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import LandingMain from "../components/LandingMain.js";
import Footer from '../components/Footer.js';

require('../css/landingpage.css');

export function LandingPage(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard'></Redirect>
  }
  return (
    <div id='landing-container'>
      <LandingMain />
      <Footer/>
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
