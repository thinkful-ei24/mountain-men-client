import React from "react";
import DriverBidCard from "./DriverBidCard.js";
import { getAllBids, getAllJobs } from "../actions/jobs";

export default class DriverCompletedBids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    this.props.props.bids.bids = [];
    this.props.props.jobs.jobs = [];
    this.props.dispatch(getAllJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let driverBids = this.props.props.bids.bids.filter(item => {
      return item.userId === this.props.props.auth.currentUser.id;
    });

    driverBids.forEach(item => {
        this.props.props.jobs.jobs.forEach(job => {
          if (job.id === item.jobId && job.completed && job.acceptedUserId === item.userId) {
            item.accepted = job.accepted;
            item.completed = job.completed;
            item.jobDescription = job.description;
            item.jobTitle = job.title;
            item.jobPosterId = job.userId;
            item.jobDate = job.date;
          }
        })
      })

    driverBids = driverBids.filter(item => {
        return item.completed;
    });

    driverBids = driverBids.map((bid, index) => {
      return <DriverBidCard bid={bid} key={index} dispatch={this.props.dispatch} />;
    });

    if (driverBids.length === 0) {
      driverBids = (
        <li>Nothing here yet. Click on 'Find a Job' above to find and bid on jobs.</li>
      )
    }

    return (
      <section style={{display: 'flex', justifyContent: 'center'}}>
        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '800px'}}>
          {driverBids}
        </ul>
      </section>
    );
  }
}
