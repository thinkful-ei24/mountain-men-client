import React from 'react';
import { connect } from 'react-redux';
import PostJobForm from './PostJobForm';
import PastJobs from './userPastJobs.js';
import CurrentJobs from './userCurrentJobs.js';
import AcceptedJobs from './userAcceptedBids';

export function ProfileComponent(props) {

  function renderThings() {
    if (props.view === "postJob") {
      return <PostJobForm />;
    }
    if (props.view === "default") {
      return <CurrentJobs bids={props.bids} />;
    }
    if (props.view === "pastJobs") {
      return <PastJobs bids={props.bids} />;
    }
    if (props.view === "acceptedJobs") {
      return <AcceptedJobs bids={props.bids} />;
    }
    if (props.view === "postSuccess") {
      return <h3>Thank you! You have made your post successfully.</h3>
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
