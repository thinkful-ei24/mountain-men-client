import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateView } from "../actions/view";
import ProfileUpdateForm from "../components/ProfileUpdateForm";
import ProfileInfo from "../components/ProfileInfo";

export function Profile(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }
  // if props.view === whatever render form
  if (props.view === "default") {
    return (
      <section>
        <h1>Profile</h1>
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
      <section>
        <ProfileUpdateForm />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    view: state.view.view,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(Profile);
