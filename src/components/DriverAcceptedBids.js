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

    driverBids.forEach(item => {
        this.props.props.jobs.jobs.forEach(job => {
          if (job.id === item.jobId && !job.completed && job.acceptedUserId === item.userId) {
            console.log(this.props);
            item.accepted = job.accepted;
            item.completed = job.completed;
            item.jobDescription = job.description;
            item.jobTitle = job.title;
            item.jobPosterId = job.userId;
            item.jobDate = job.date;
            item.jobPoster = this.props.props.user.user.firstName;
            item.jobPosterEmail = this.props.props.user.user.email;
            item.jobPosterPhoneNumber = this.props.props.user.user.phoneNumber;
          }
        })
      })

    driverBids = driverBids.filter(item => {
        return item.accepted;
    });

    console.log(this.props);

    driverBids = driverBids.map((bid, index) => {
      return <DriverBidCard bid={bid} key={index} dispatch={this.props.dispatch} />;
    });
    return (
      <section style={{display: 'flex', justifyContent: 'center'}}>
        <ul style={{display: 'flex', justifyContent: 'center'}}>{driverBids}</ul>
      </section>
    );
  }
}
