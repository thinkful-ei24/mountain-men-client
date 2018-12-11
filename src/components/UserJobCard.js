import React from 'react';
import {connect} from 'react-redux';
import {makeJobCompleted, getBidsCount} from '../actions/jobs.js';
import { bidsReducer } from '../reducers/bidsReducer.js';

export class UserJobCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }

  showHide() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  render() {
    let job = this.props.job;
    return (
      <li>
        <h3 onClick={() => this.showHide()}>{job.title}</h3>
        <p>{job.date}</p>
        <p>{job.count || 0} bids have been placed</p>
        {/* conditionally render everything below if
            expanded is true */}
            {this.state.expanded && (
              <div>
                <p>{job.description}</p>
                <p>This job has received {this.props.bids.length} bids.</p>
                {!job.completed && <button
                  type="button"
                  onClick={() => this.props.dispatch(makeJobCompleted(job.id))}>
                  Completed
                </button>}
                <button
                  type="button"
                  onClick={() => this.showHide()}>
                  Show Less
                </button>
            </div>)}
      </li>
    )
  }
}

export default connect()(UserJobCard);
