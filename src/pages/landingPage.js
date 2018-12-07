import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HeaderBar from "../components/HeaderBar.js";
import LandingMain from "../components/LandingMain.js";
import Dashboard from "../pages/dashboard";
import styled from 'styled-components';

const Landing = styled.div`
  position: relative;
  top: 50px;
`;

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Landing>
      <LandingMain />
    </Landing>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state
  };
};

export default connect(mapStateToProps)(LandingPage);
