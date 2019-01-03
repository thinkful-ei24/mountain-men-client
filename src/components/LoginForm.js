import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import { connect } from "react-redux";
import {required, nonEmpty} from '../validators.js';
import { login } from "../actions/auth.js";
import Logo from '../logo.png';
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

    const logoStyle = {
      width: '50px',
      borderRadius: '25px',
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
        <div>
          <p id="demo-email">Demo email: demo_user@test.test</p>
          <p id="demo-password">password: password123</p>
          <img src={Logo} style={logoStyle} alt="Truck'd logo"/>
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
