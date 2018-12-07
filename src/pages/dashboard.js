import React from "react";
import { connect } from "react-redux";
import Profile from "../components/userProfileComponent";
import { Redirect } from "react-router-dom";
import Job from "../components/JobCard";
import { getAllJobs } from "../actions/jobs";

export class Dashboard extends React.Component {
  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getAllJobs());
    
  }
  
  render() {
    console.log(this.props);
    console.log(this.props.driverJobs.jobs.jobs);
    // need to dispatch to get jobs
    const getJobs = job => {
      const jobs = this.props.driverJobs.jobs.jobs.map((job, index) => {
        return (
          <Job
            name={job.userId}
            title={job.title}
            desc={job.description}
            image={job.image}
          />
        );
      });
      console.log(jobs, "driverJobs");
      return jobs;
    };

    let jobs = getJobs();

    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    if (this.props.currentUser.type === "DRIVER") {
      return (
        <div>
          <h1>
            Welcome back, {this.props.currentUser.firstName}{" "}
            {this.props.currentUser.lastName}!
          </h1>
          <ul>
            {jobs}
            <Job name={this.props.currentUser.firstName} />
          </ul>
        </div>
      );
    }
    if (this.props.currentUser.type === "USER") {
      return (
        <div>
          <h1>
            Welcome back, {this.props.currentUser.firstName}{" "}
            {this.props.currentUser.lastName}!
          </h1>
          <ul>
            <Profile />
          </ul>
        </div>
      );
    }
  }
}

const mapStateTothis = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
    driverJobs: state,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateTothis)(Dashboard);
