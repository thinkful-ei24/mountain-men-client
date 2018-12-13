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
    console.log(this.props);

    let listOfJobs = [];
    listOfJobs = this.props.jobs.map((job, index) => {
      if (job.completed) {
        const bids = this.props.bids.bids.filter(item => {
          return item.jobId === job.id;
        });
        return <UserJobCard job={job} key={index} bids={bids} />;
      }
    });

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
