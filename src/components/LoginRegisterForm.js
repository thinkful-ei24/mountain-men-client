import React from 'react';
import Form from 'redux-form';
import { connect } from 'react-redux';

export function LoginRegisterForm() {

}

connect(mapStateToProps = state => {
  isLoggedIn: state.auth.user !== null;
})(LoginRegisterForm);
