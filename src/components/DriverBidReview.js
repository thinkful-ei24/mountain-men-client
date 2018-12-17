import React from 'react';
import DriverBidCard from './DriverBidCard.js';
import BidMap from './BidMap.js';
import { getAllBids, getAllJobs } from '../actions/jobs';

export default class DriverReviewBids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getAllJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    //should return an array of <li> elements containing all bids made by a driver
    //let driverBids = this.props.bids.map((bid, index) => {
    //  return <DriverBidCard bid={bid} key={index} />
    //})


    //TODO FAKE DATA FOR TESTING PURPOSES PLEASE DELETE AFTER ENDPOINTS ARE WORKING

    let driverBids = this.props.props.bids.bids.filter(item => {
      return item.userId === this.props.props.auth.currentUser.id;
    })
    let jobs = this.props.props.jobs.jobs.filter(item => {
      return !item.completed && !item.accepted;
    })
    console.log(jobs);
    driverBids.forEach(item => {
      jobs.forEach(job => {
        if (job.id === item.jobId && !job.completed && !job.accepted) {
          item.accepted = job.accepted;
          item.completed = job.completed;
          item.jobDescription = job.description;
          item.jobTitle = job.title;
          item.jobPosterId = job.userId;
          item.jobDate = job.date;
        }
      })
    })

    driverBids = driverBids.map((bid, index) => {
      return <DriverBidCard bid={bid} key={index} dispatch={this.props.dispatch} />;
    });

    return (
      <section style={{display: 'flex', justifyContent: 'center'}}>
        <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '800px'}}>
          {/* get all bids
          render a new component
            */}
          {driverBids}
        </ul>
      </section>
    );
  }
}

//  const mapStateToProps = state => {
//    bids: state.bids // expect to get back an array of bids
//  }
//
//  export default connect(mapStateToProps)(DriverReviewBids)
