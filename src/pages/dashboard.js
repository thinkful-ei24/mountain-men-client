import React from "react";
import { connect } from "react-redux";
import Profile from '../components/userProfileComponent';
import { Redirect } from "react-router-dom";
import Job from '../components/JobCard';
import { getAllJobs } from '../actions/jobs';

function Dashboard(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

  // need to dispatch to get jobs
  const getJobs = (job) => {
    props.dispatch(getAllJobs());
    const jobs = props.driverJobs.map((job, index) => {
      return (
        <Job
          name={job.userId}
          title={job.title}
          desc={job.description}
          image={job.image}
        ></Job>
      )
    })
    return jobs;
  }


  if (props.currentUser.type === "DRIVER") {
    return (
      <div>
        <h1>
          Welcome back, {props.currentUser.firstName}{" "}
          {props.currentUser.lastName}!
        </h1>
        <ul>
          {getJobs()}
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
    driverJobs: state.driverJobs,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Dashboard);
