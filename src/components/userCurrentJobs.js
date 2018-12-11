<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import UserJobCard from "./UserJobCard.js";
import { getUserJobs, getAllBids } from "../actions/jobs";
=======

import React from 'react';
import {connect} from 'react-redux';
import UserJobCard from './UserJobCard.js';
import { getAllJobs, getAllBids, getBidsCount } from "../actions/jobs";
>>>>>>> d2977ea472b56c56f7399859a2a7c0b898d176e7

export class CurrentJobs extends React.Component{

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUserJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let listOfJobs = []

    listOfJobs = this.props.jobs.map(async (job, index) => {
      if (!job.completed) {
        const bidCount = this.props.dispatch(getBidsCount(job.id))
        return (
        <UserJobCard job={job} key={index} />
      )
      }
    })


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
