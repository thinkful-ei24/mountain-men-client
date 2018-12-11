import React from 'react';
import {connect} from 'react-redux';
import UserJobCard from './UserJobCard.js';
import { getUserJobs, getAllBids, getBidsCount } from "../actions/jobs";

export class CurrentJobs extends React.Component{

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUserJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let listOfJobs = []
    console.log(this.props, 'okaythen');

    listOfJobs = this.props.jobs.map((job, index) => {
      if (!job.completed) {
        const bids = this.props.bids.bids.filter(item => {
          console.log(item.jobId, job.id, 'ids');
          return item.jobId === job.id;
        })
        console.log(bids);
        // const bidCount = this.props.dispatch(getBidsCount(job.id))
        return (
        <UserJobCard job={job} key={index} bids={bids}/>
      )
      }
    })

    console.log(listOfJobs);
    return (
      <section>
        <h2>Current Jobs</h2>
        <ul>{listOfJobs}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(CurrentJobs);
