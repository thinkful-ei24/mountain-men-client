import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field, focus } from "redux-form";
import ProfileUpdateForm from "../components/ProfileUpdateForm";

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
          <ProfileUpdateForm />
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

export default connect(mapStateToProps)(Profile);
