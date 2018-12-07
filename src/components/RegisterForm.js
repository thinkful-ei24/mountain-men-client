import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { registerUser, login } from "../actions/auth.js";
import {required, nonEmpty, matches, length, isTrimmed} from '../validators.js';
import Input from "./input.js";
import styled from 'styled-components';
const passwordLength = length({min: 9, max: 72});
const matchesPassword = matches('password');

const Button = styled.button`
  background-color: #ff7f40;
  color: white;
  margin-top: 15px;
`;

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRole: ""
    };
  }

  setUserRole = changeEvent => {
    this.setState({
      selectedRole: changeEvent.target.value
    });
  };

  onSubmit(values) {
    const {email, password, firstName, lastName, phoneNumber, address, type} = values;
    const user = {email, password, firstName, lastName, phoneNumber, address, type};
    return this.props
      .dispatch(registerUser(user))
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div id="form-container">
        <div id="register-form">
          <form
            className="register-form"
            onSubmit={this.props.handleSubmit(values => {
              return this.onSubmit(values);
            })}
          >
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component={Input}
                type="text"
                placeholder="First Name"
                validate={[required, nonEmpty, isTrimmed]}
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component={Input}
                type="text"
                placeholder="Last Name"
                validate={[required, nonEmpty, isTrimmed]}
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component={Input}
                type="email"
                placeholder="Email"
                validate={[required, nonEmpty, isTrimmed]}
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component={Input}
                type="password"
                placeholder="Password"
                validate={[required, passwordLength, isTrimmed]}
              />
            </div>
            <div>
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
            </div>
            <div>
              <label>Phone</label>
              <Field
                name="phoneNumber"
                component={Input}
                // TODO - is there a phone number input?
                type="tel"
                pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}"
                placeholder="ex. 303-303-3030"
              />
            </div>
            <div>
              <label>Address</label>
              <Field
                name="address"
                component={Input}
                type="text"
                placeholder="ex. 123 Main St, Littleton, CO 80120"
                validate={[required]}
              />
            </div>
            <div id='radio-selector'>
              <label id="radio-user"
                className="fas fa-users">User
              <Field
                name="type"
                component={Input}
                type="radio"
                value="USER"
                checked={this.state.selectedRole === "user"}
                onChange={this.setUserRole}
              /></label>
              <label id="radio-driver"
                className="fas fa-truck-pickup">Driver
              <Field
                name={"type"}
                component={Input}
                type="radio"
                value="DRIVER"
                checked={this.state.selectedRole === "driver"}
                onChange={this.setUserRole}
              /></label>
            </div>
            <Button
              disabled={this.props.pristine || this.props.submitting}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null
});

const RegistrationForm = reduxForm({
  form: "register"
})(connect(mapStateToProps)(RegisterForm));

export default RegistrationForm;
