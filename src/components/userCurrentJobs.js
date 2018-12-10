import React from "react";
import { connect } from "react-redux";
import UserJobCard from "./UserJobCard.js";
import { getAllJobs, getAllBids } from "../actions/jobs";

export class CurrentJobs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getAllJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let listOfJobs = [];
    let bids = [];
    listOfJobs = this.props.jobs.map((job, index) => {
      if (!job.completed && job.userId === this.props.user.id) {
        let bids = this.props.bids.bids.filter(item => {
          return item.jobId === job.id;
        })
        return <UserJobCard job={job} key={index} bids={bids} />;
      }
    });

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
