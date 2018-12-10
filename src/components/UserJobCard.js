import React from 'react';
import {connect} from 'react-redux';
import {makeJobCompleted} from '../actions/jobs.js';

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
        {/* conditionally render everything below if
            expanded is true */}
            {this.state.expanded && (
              <div>
                <p>{job.description}</p>
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
