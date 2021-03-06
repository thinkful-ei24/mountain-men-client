import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
require('../css/registrationpage.css');

export function RegisterPage(props) {
  if(props.loggedIn) {
    return <Redirect to='/dashboard'></Redirect>
  }
  return (
    <div id='registration-container' className='animated fadeIn'>
      <Link to='/'><div id='bg'></div></Link>
      <RegisterForm style={{display: 'flex', alignContent: 'center'}} id='register-form'></RegisterForm>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(RegisterPage);