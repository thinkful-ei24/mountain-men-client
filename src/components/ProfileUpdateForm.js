import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import updateProfile from "../actions/updateProfile";
import { updateView } from "../actions/view";
require('../css/profileupdateform.css')


export class ProfileUpdateForm extends React.Component {
  onSubmit(values) {
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      type,
      address: { street, city, state, zip }
    } = values;
    values.authToken = this.props.authToken;
    const user = {
      email,
      firstName,
      lastName,
      phoneNumber,
      street,
      city,
      state,
      zip,
      type
    };
    this.props.dispatch(updateView("default"));
    console.log(user);
    return this.props.dispatch(updateProfile(user));
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values => {
          return this.onSubmit(values);
        })}
      >
        <div id='update-form-container'>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            value="string"
          />
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Doe"
          />
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="JohnDoe@email.com"
            required="true"
          />
          <label>Phone</label>
          <Field
            name="phoneNumber"
            component="input"
            type="tel"
            placeholder="ex. 303-303-3030"
            required="true"
          />
          <label>Street</label>
          <Field
            name="address.street"
            component="input"
            type="text"
            placeholder="ex. 123 Main St"
          />
          <label>City</label>
          <Field
            name="address.city"
            component="input"
            type="text"
            placeholder="ex. Littleton"
          />
          <label>State</label>
          <Field
            name="address.state"
            component="input"
            type="text"
            placeholder="ex. CO"
          />
          <label>Zip</label>
          <Field
            name="address.zip"
            component="input"
            type="text"
            placeholder="ex. 80120"
          />
        <div id="radio-selector">
          <label id="radio-user" className="fas fa-users">
            User
            <Field name="type" component="input" type="radio" value="USER" />
          </label>
          <label id="radio-driver" className="fas fa-truck-pickup">
            Driver
            <Field name="type" component="input" type="radio" value="DRIVER" />
          </label>
        </div>
        <button
          onClick={() => {
            this.props.dispatch(updateView("default"));
          }}
        >
          Cancel
        </button>
        <button disabled={this.props.pristine}>Update</button>
        </div>
      </form>
    );
  }
}

ProfileUpdateForm = reduxForm({
  form: "udateProfileForm"
})(ProfileUpdateForm);

ProfileUpdateForm = connect(state => ({
  initialValues: state.auth.currentUser,
  authToken: state.auth.authToken
}))(ProfileUpdateForm);

export default ProfileUpdateForm;
