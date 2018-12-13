import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
require('../css/loginpage.css');

export function LoginPage() {
  return (
    <div id='login-container' className='animated fadeIn'>
      <Link to='/'><div id='bg'></div></Link>
      <LoginForm id="login-form"></LoginForm>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(LoginPage);
