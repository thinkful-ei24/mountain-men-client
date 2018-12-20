import React from "react";
import { connect } from "react-redux";
import { makeJobCompleted, makeJobAccepted } from "../actions/jobs.js";
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
    bids = this.props.bids.map((item, index) => {
      return (
        <div className="job-bid-info" key={index}>
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
        </div>
      );
    });
    return bids;
  }

  render() {
    let job = this.props.job;
    let winningDriver = this.props.winningDriver.user.users.filter(item => {
      return item.id === job.acceptedUserId;
    });

    let date = new Date(job.date);
    date.setHours(25);

    return (
      <li id='card' key={this.props.index} className={this.state.expanded ? 'expanded' : null}
        >
        <h3 onClick={() => this.showHide()} id='job-title'>{job.title}</h3>
        <p id='date'>{moment(date).format('MMM Do YYYY')}</p>

        {this.state.expanded && (
          <div>
            <p id='desc'>{job.description}</p>
            {!job.completed && !job.accepted && (
              <React.Fragment>

                <p id='bids-amount'>This job has received <span id='bid-count'> {this.props.bids.length}</span> bids.</p>
                <p>Your budget for this job is <span id='budget'>${this.props.job.budget}</span></p>
                {this.showBids(job)}
              </React.Fragment>
            )}
            {!job.completed && job.accepted && (
              <React.Fragment>
                <p id='winning-bid'>{winningDriver[this.props.position].firstName} made {this.props.bids.length} bids.</p>
                {this.showBids(job)}
                <p id='contact'>Contact your driver at <span id='bold-text'>{winningDriver[this.props.position].phoneNumber}</span> or <span id='bold-text'>{winningDriver[this.props.position].email}</span>.</p>
              </React.Fragment>
            )}

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
