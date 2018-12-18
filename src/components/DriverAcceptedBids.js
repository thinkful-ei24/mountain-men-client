import React from "react";
import DriverBidCard from "./DriverBidCard.js";
import { getAllBids, getAllJobs } from "../actions/jobs";

export default class DriverAcceptedBids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let driverBids = this.props.props.bids.bids.filter(item => {
      return item.userId === this.props.props.auth.currentUser.id;
    });

    let jobs = this.props.props.jobs.jobs.filter(item => {
      return item.accepted;
    });

    driverBids.forEach(item => {
      jobs.forEach(job => {
        if (
          job.id === item.jobId &&
          !job.completed &&
          job.acceptedUserId === item.userId
        ) {
          item.accepted = job.accepted;
          item.completed = job.completed;
          item.jobDescription = job.description;
          item.jobTitle = job.title;
          item.jobPosterId = job.userId;
        }
      });
    });

    driverBids = driverBids.filter(item => {
      return item.accepted;
    });

    driverBids = driverBids.map((bid, index) => {
      return (
        <DriverBidCard bid={bid} key={index} dispatch={this.props.dispatch} position={index} />
      );
    });
    return (
      <section style={{display: 'flex', justifyContent: 'center'}}>
        <ul style={{display: 'flex', justifyContent: 'center'}}>{driverBids}</ul>
      </section>
    );
  }
}
