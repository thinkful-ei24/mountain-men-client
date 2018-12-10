import React from "react";
import { connect } from "react-redux";
import Profile from "../components/userProfileComponent";
import { Redirect } from "react-router-dom";
import Job from "../components/DriverBid";
import { getAllJobs } from "../actions/jobs";
import DriverReviewBids from "../components/DriverBidReview.js";
import DashboardNav from "../components/DashboardNav";

export class Dashboard extends React.Component {

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getAllJobs());
  }

  render() {
    // need to dispatch to get jobs
    const getJobs = job => {
      const jobs = this.props.driverJobs.jobs.jobs.map((job, index) => {
        return (
          <Job
            name={job.title}
            title={job.title}
            desc={job.description}
            image={job.image}
            id={job.id}
            date={job.date}
          />
        );
      });
      return jobs;
    };

    let jobs = getJobs();

    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }


    if (this.props.currentUser.type === "DRIVER") {
      function renderDriverPage(props) {
        console.log(props);
        if (props === "currentJobs") {
          return <DriverReviewBids />;
        }
        if (props === "default") {
          return <ul>{jobs}</ul>;
        }
      }
      console.log(this.props);
      return (
        <div>
          <DashboardNav type="DRIVER" view={this.props.view} />
          <h1>
            Welcome back, {this.props.currentUser.firstName}{" "}
            {this.props.currentUser.lastName}!
          </h1>

          {renderDriverPage(this.props.view)}

        </div>
      );
    }
    if (this.props.currentUser.type === "USER") {
      console.log(this.props);
      return (
        <div>
          <DashboardNav type="USER" view={this.props.view} />
          <h1>
            Welcome back, {this.props.currentUser.firstName}{" "}
            {this.props.currentUser.lastName}!
          </h1>
          <ul>
            <Profile view={this.props.view} />
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
    currentUser: state.auth.currentUser,
    view: state.view.view
  };
};

export default connect(mapStateTothis)(Dashboard);
