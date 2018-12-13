import React from "react";
import LoginForm from "../components/LoginForm";
import styled from 'styled-components';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const LoginContainer = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.8);

  animation-duration: .5s;
`;

const BG = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default function LoginPage() {
  return (
    <LoginContainer className='animated fadeIn'>
      <BG as={Link} to='/'></BG>
      <LoginForm id="login-form"></LoginForm>
    </LoginContainer>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(LoginPage);
