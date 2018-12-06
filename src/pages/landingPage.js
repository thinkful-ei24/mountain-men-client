
import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar.js';
import LandingMain from '../components/LandingMain.js';
import Dashboard from '../pages/dashboard';

export function LandingPage(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard'></Redirect>
  }

  return (
    <div>
      <HeaderBar />
      <LandingMain />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state,
  }
}

export default connect(mapStateToProps)(LandingPage);