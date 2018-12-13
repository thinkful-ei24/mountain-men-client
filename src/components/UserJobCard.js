import React from "react";
import { connect } from "react-redux";
import { makeJobCompleted, makeJobAccepted } from "../actions/jobs.js";
import { bidsReducer } from "../reducers/bidsReducer.js";
import { getUser } from '../actions/getUser';

export class UserJobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUser(this.props.id));
  }

  showHide() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  showBids(job) {
    let bids = [];
    bids = this.props.bids.map(item => {
      return (
        <React.Fragment>
          <p>Bid amount: ${item.bidAmount}</p>
          {!job.accepted && (
            <button
              onClick={() => {
                this.props.dispatch(makeJobAccepted(job.id, item.userId));
              }}
            >
              Accept Bid
            </button>
          )}
        </React.Fragment>
      );
    });
    return bids;
  }


  render() {
    console.log(this.props);
    let job = this.props.job;
    let winningDriver = this.props.winningDriver.user.user;
    return (
      <li>
        <h3 onClick={() => this.showHide()}>{job.title}</h3>
        <p>{job.date}</p>
        {/* <p>{this.props.count || 0} bids have been placed</p> */}
        {/* conditionally render everything below if
            expanded is true */}
        {this.state.expanded && (
          <div>
            <p>{job.description}</p>
            {!job.completed && !job.accepted && (
              <React.Fragment>
                <p>This job has received {this.props.bids.length} bids.</p>
                {this.showBids(job)}
              </React.Fragment>
            )}
            {!job.completed && job.accepted && (
              <React.Fragment>
                <p>{winningDriver.firstName} made {this.props.bids.length} bids.</p>
                {this.showBids(job)}
                <p>Contact your driver at {winningDriver.phoneNumber} or {winningDriver.email}.</p>
              </React.Fragment>
            )}

            {/* {!job.completed && !job.accepted && (
              <button
                type="button"
                onClick={() => this.props.dispatch(makeJobAccepted(job.id))}
              >
                Completed
              </button>
            )} */}
            {!job.completed && job.accepted && (
              <button
                type="button"
                onClick={() => this.props.dispatch(makeJobCompleted(job.id))}
              >
                Completed
              </button>
            )}
            {!job.completed && !job.accepted && (
              <button
                type="button"
                onClick={() => this.props.dispatch(makeJobCompleted(job.id))}
              >
                Delete
              </button>
            )}
            <button type="button" onClick={() => this.showHide()}>
              Show Less
            </button>
          </div>
        )}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  winningDriver: state
});

export default connect(mapStateToProps)(UserJobCard);