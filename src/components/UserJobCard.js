import React from "react";
import { connect } from "react-redux";
import { makeJobCompleted, makeJobAccepted } from "../actions/jobs.js";
import { bidsReducer } from "../reducers/bidsReducer.js";
import { getUser } from '../actions/getUser';
require('../css/userjobcard.css');

var moment = require('moment');
export class UserJobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    //gets all jobs related to a given user
    if (this.props.id) {
      this.props.dispatch(getUser(this.props.id));
    }
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
          <p id='bid-amount'>Bid amount: ${item.bidAmount}</p>
          {!job.accepted && (
            <button id='accept-btn'
              className='card-btn'
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
    let job = this.props.job;
    let winningDriver = this.props.winningDriver.user.user;
    return (
      <li id='card' className={this.state.expanded ? 'expanded' : null}
        onClick={() => this.showHide()}>
        <h3 id='job-title'>{job.title}</h3>
        <p id='date'>{moment(job.date).format('LLLL')}</p>
        {/* <p>{this.props.count || 0} bids have been placed</p> */}
        {/* conditionally render everything below if
            expanded is true */}
        {this.state.expanded && (
          <div>
            <p id='desc'>{job.description}</p>
            {!job.completed && !job.accepted && (
              <React.Fragment>

                <p id='bids-amount'>This job has received <span id='bid-count'> {this.props.bids.length}</span> bids.</p>
                <p>Your budget for this job is ${this.props.job.budget}</p>
                {this.showBids(job)}
              </React.Fragment>
            )}
            {!job.completed && job.accepted && (
              <React.Fragment>
                <p id='winning-bid'>{winningDriver.firstName} made {this.props.bids.length} bids.</p>
                {this.showBids(job)}
                <p id='contact'>Contact your driver at {winningDriver.phoneNumber} or {winningDriver.email}.</p>
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
              <button id='complete-btn'
                className='card-btn'
                type="button"
                onClick={() => this.props.dispatch(makeJobCompleted(job.id))}
              >
                Completed
              </button>
            )}
            {!job.completed && !job.accepted && (
              <button id='delete-btn'
                className='card-btn'
                type="button"
                onClick={() => this.props.dispatch(makeJobCompleted(job.id))}
              >
                Delete
              </button>
            )}
            <button id='show-btn'
              className='card-btn'
              type="button" onClick={() => this.showHide()}>
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