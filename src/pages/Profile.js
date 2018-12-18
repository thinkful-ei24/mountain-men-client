import React from "react";
import { connect } from "react-redux";
import { updateView } from "../actions/view";
import ProfileUpdateForm from "../components/ProfileUpdateForm";
import ProfileInfo from "../components/ProfileInfo";
require("../css/profile.css");

export function Profile(props) {
  if (props.view === "default") {
    return (
      <section id="profile-section">
        <h1 id="page-title">Profile</h1>
        <ProfileInfo />
        <button
          onClick={() => {
            props.dispatch(updateView("showForm"));
          }}
        >
          Update Info
        </button>
      </section>
    );
  }
  if (props.view === "showForm") {
    return (
      <section id='profile-section'>
        <ProfileUpdateForm />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view.view,
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Profile);
