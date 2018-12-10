import React from 'react';
import { connect } from 'react-redux';
import PostJobForm from './PostJobForm';
import PastJobs from './userPastJobs.js';
import CurrentJobs from './userCurrentJobs.js';

export function ProfileComponent(props) {

  function renderThings() {
    if (props.view === "default") {
      return <PostJobForm />;
    }
    if (props.view === "currentJobs") {
      return <CurrentJobs />;
    }
    if (props.view === "pastJobs") {
      return <PastJobs />;
    }
  }
  return (
    <div id='profile-component'>
        {renderThings()}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state,
  }
}

export default connect(mapStateToProps)(ProfileComponent);
