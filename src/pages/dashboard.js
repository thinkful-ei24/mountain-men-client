import React from "react";
import { connect } from "react-redux";
import Profile from '../components/userProfileComponent';
import { Redirect } from "react-router-dom";
import Job from '../components/JobCard';

function Dashboard(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }
  console.log(props);

  if (props.currentUser.type === "DRIVER") {
    return (
      <div>
        <h1>
          Welcome back, {props.currentUser.firstName}{" "}
          {props.currentUser.lastName}!
        </h1>
        <ul>
          <Job name={props.currentUser.firstName} />
        </ul>
      </div>
    );
  }
  if (props.currentUser.type === "USER") {
    return (
      <div>
        <h1>
          Welcome back, {props.currentUser.firstName}{" "}
          {props.currentUser.lastName}!
        </h1>
        <ul>
          <Profile />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);
