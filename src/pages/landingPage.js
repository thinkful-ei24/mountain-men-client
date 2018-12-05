import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HeaderBar from '../components/HeaderBar.js';
import LandingMain from '../components/LandingMain.js';

export function LandingPage(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard' />
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
    loggedIn: state.auth.user !== null,
  }
}

export default connect(mapStateToProps)(LandingPage);