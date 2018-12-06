import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {required, nonEmpty} from '../validators.js';
import { login } from "../actions/auth.js";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff7f40;
  color: white;
  margin-top: 15px;
`;

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRole: "driver"
    };
  }

  setUserRole = changeEvent => {
    this.setState({
      selectedRole: changeEvent.target.value
    });
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }

    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <div id="form-container">
        <div id="login-form">
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => {
              return this.props.dispatch(login(values));
            })}
          >
            <div>
              {error}
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
              />
            </div>
            <Button>Log in</Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

const logForm = reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(connect(mapStateToProps)(LoginForm));

export default logForm;
