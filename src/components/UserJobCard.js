import React from "react";
import { connect } from "react-redux";
import { makeJobCompleted, makeJobAccepted } from "../actions/jobs.js";
import { bidsReducer } from "../reducers/bidsReducer.js";

export class UserJobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
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
          <p>Bid amount: {item.bidAmount}</p>
          {!job.accepted && <button
            onClick={() => {
              this.props.dispatch(makeJobAccepted(job.id));
            }}
          >
            Accept Bid
          </button>}
        </React.Fragment>
      );
    });
    return bids;
  }

  render() {
    let job = this.props.job;
    console.log(this.props);
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
            {!job.completed && (
              <React.Fragment>
                <p>This job has received {this.props.bids.length} bids.</p>
                {this.showBids(job)}
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

export default connect()(UserJobCard);
