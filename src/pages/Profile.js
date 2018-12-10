import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { reduxForm, Field, focus } from "redux-form";

export class Profile extends React.Component {
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>
          {this.props.currentUser.firstName} {this.props.currentUser.lastName}
        </h1>
        <p>Type: {this.props.currentUser.type.toLowerCase()}</p>
        <p>Email: {this.props.currentUser.email}</p>
        <p>Address: {this.props.currentUser.address}</p>
        <p>Phone: {this.props.currentUser.phoneNumber}</p>
        <div>
          <h1>Update Info</h1>
          <form>
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
            <button>Update</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  };
};

//TODO initialize from state form https://redux-form.com/7.0.2/examples/initializefromstate/
const updateForm = reduxForm({
  form: "updateProfile",
  initialValues: {
    address: "string"
  }
})(connect(mapStateToProps)(Profile));

export default updateForm;
