import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import updateProfile from "../actions/updateProfile";
import { updateView } from "../actions/view";
import styled from "styled-components";

const ButtonGreen = styled.button`
  background-color: #3dc182;
  color: white;
  margin-top: 15px;
  font-size: 18px;
`;
export class ProfileUpdateForm extends React.Component {
  onSubmit(values) {
    const { email, firstName, lastName, phoneNumber, address, type } = values;
    values.authToken = this.props.authToken;
    const user = {
      email,
      firstName,
      lastName,
      phoneNumber,
      address,
      type
    };
    this.props.dispatch(updateView("default"));

    return this.props.dispatch(updateProfile(user));
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(values => {
          return this.onSubmit(values);
        })}
      >
        <div>
          <label>First Name</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            value="string"
          />
        </div>
        <div>
          <label>Last Name</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Doe"
          />
        </div>
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="JohnDoe@email.com"
            required="true"
          />
        </div>
        <div>
          <label>Phone</label>
          <Field
            name="phoneNumber"
            component="input"
            type="tel"
            placeholder="ex. 303-303-3030"
            required="true"
          />
        </div>
        <div>
          <label>Address</label>
          <Field
            name="address"
            component="input"
            type="text"
            placeholder="ex. 123 Main St, Littleton, CO 80120"
          />
        </div>
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
        <ButtonGreen disabled={this.props.pristine}>Update</ButtonGreen>
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
