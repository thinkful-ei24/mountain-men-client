import React from 'react';
import { connect } from 'react-redux';
import PostJobForm from './PostJobForm';
import PastJobs from './pastJobs.js';

export function ProfileComponent(props) {

  return (
    <div id='profile-component'>
        <PostJobForm />
        <PastJobs />
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
