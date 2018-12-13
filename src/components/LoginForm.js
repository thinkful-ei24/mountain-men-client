import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import { connect } from "react-redux";
import {required, nonEmpty} from '../validators.js';
import { login } from "../actions/auth.js";
require('../css/loginform.css');

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

    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <div id='login-form-container'>
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
              validate={[required, nonEmpty]}
              required={true}
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
              validate={[required, nonEmpty]}
            />
          </div>
          <button id='login-btn'>Log in</button>
        </form>
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
