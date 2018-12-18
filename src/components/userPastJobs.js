import React from "react";
import { connect } from "react-redux";
import { getUserJobs } from "../actions/jobs.js";
import UserJobCard from "./UserJobCard.js";

export class pastJobs extends React.Component {
  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUserJobs());
  }

  render() {

    let listOfJobs = this.props.jobs.filter(item => {
      return item.completed;
    });

    listOfJobs = listOfJobs.map((job, index) => {
        const bids = this.props.bids.bids.filter(item => {
          return item.jobId === job.id;
        });
        return <UserJobCard job={job} key={index} bids={bids} />;
    });

    if (listOfJobs.length === 0) {
      listOfJobs = (
        <li>Nothing here yet. To make a post, click on 'Need A Truck' above and submit a job.</li>
      )
    }
    return (
      <section>
        <h2>Past Jobs</h2>
        <ul>{listOfJobs}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  jobs: state.jobs.jobs
});

export default connect(mapStateToProps)(pastJobs);
