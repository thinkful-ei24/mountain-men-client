import React from "react";
import { connect } from "react-redux";
import UserJobCard from "./UserJobCard.js";
import { getUserJobs, getAllBids } from "../actions/jobs";

export class AcceptedJobs extends React.Component {
  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUserJobs());
    this.props.dispatch(getAllBids());
  }

  render() {
    let listOfJobs = [];
    listOfJobs = this.props.jobs.filter(item => {
      return !item.completed && item.accepted;
    });
    
    listOfJobs = listOfJobs.map((job, index) => {
      const bids = this.props.bids.bids.filter(item => {
        return item.userId === job.acceptedUserId && item.jobId === job.id;
      });
      return <UserJobCard job={job} key={index} bids={bids} id={bids[0].userId} position={index} />;
    });
    
    if (listOfJobs.length === 0) {
      listOfJobs = (
        <li>
          Nothing here yet. To make a post, click on 'Create Post' above and
          submit a job.
        </li>
      );
    }

    return (
      <section>
        <h2>Accepted Jobs</h2>
        <ul>{listOfJobs}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  jobs: state.jobs.jobs,
  acceptedBids: state
});

export default connect(mapStateToProps)(AcceptedJobs);
