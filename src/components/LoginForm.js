import React from "react";
import { reduxForm, Field, focus } from "redux-form";
import { connect } from "react-redux";
import {required, nonEmpty} from '../validators.js';
import { login } from "../actions/auth.js";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff7f40;
  color: white;
  margin-top: 15px;
`;

const LoginFormContainer = styled.div`
  box-shadow: 3px 3px 10px 1px black;
  padding: 30px;
  background-color: #364D87;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 425px;
  height: 350px;
  zoom: .9;
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

    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <div>
        <LoginFormContainer>
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
            <Button>Log in</Button>
          </form>
        </LoginFormContainer>
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
