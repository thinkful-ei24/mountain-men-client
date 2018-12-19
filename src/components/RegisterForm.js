import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../actions/auth.js";
import {required, nonEmpty, matches, length, isTrimmed} from '../validators.js';
const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');
require('../css/registrationform.css');

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
    const {email, password, firstName, lastName, phoneNumber, street, city, state, zip, type} = values;
    const user = {email, password, firstName, lastName, phoneNumber, street, city, state, zip, type};
    return this.props
      .dispatch(registerUser(user))
  }

  render() {
    return (
        <div id='register-form-container'>
          <form
            className="register-form"
            onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
          >
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="John"
                validate={[required, nonEmpty, isTrimmed]}
                required={true}
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Doe"
                validate={[required, nonEmpty, isTrimmed]}
                required={true}
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="JohnDoe@email.com"
                validate={[required, nonEmpty, isTrimmed]}
                required={true}
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                id="password"
                component="input"
                type="password"
                placeholder="*******"
                validate={[required, passwordLength, isTrimmed]}
                required={true}
              />
            </div>
            <div>
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                  name="passwordConfirm"
                  component="input"
                  type="password"
                  placeholder="*******"
                  validate={[required, nonEmpty, matchesPassword]}
                  required={true}
                />
            </div>
            <div>
              <label>Phone</label>
              <Field
                name="phoneNumber"
                component="input"
                type="tel"
                placeholder="ex. 303-303-3030"
                required={true}
              />
            </div>
            <div>
              <label>Street</label>
              <Field
                name="street"
                component="input"
                type="string"
                placeholder="ex. 123 Main St"
                required={true}
              />
            </div>
            <div>
              <label>City</label>
              <Field
                name="city"
                component="input"
                type="string"
                placeholder="ex. Los Angeles"
                required={true}
              />
            </div>
            <div>
              <label>State</label>
              <Field
                name="state"
                component="input"
                type="string"
                placeholder="ex. California"
                required={true}
              />
            </div>
            <div>
              <label>Zip Code</label>
              <Field
                name="zip"
                component="input"
                type="string"
                placeholder="ex. 90002"
                required={true}
              />
            </div>
            <div id='radio-selector'>
              <label id="radio-user"
                className="fas fa-users">User
              <Field
                name="type"
                component="input"
                type="radio"
                value="USER"
                checked={this.state.selectedRole === "USER"}
                onChange={this.setUserRole}
                required={true}
              /></label>
              <label id="radio-driver"
                className="fas fa-truck-pickup">Driver
              <Field
                name="type"
                component="input"
                type="radio"
                value="DRIVER"
                checked={this.state.selectedRole === "DRIVER"}
                onChange={this.setUserRole}
              /></label>
            </div>
            <button id='register-btn'
              disabled={this.props.pristine || this.props.submitting}>
              Submit
            </button>
          </form>
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
