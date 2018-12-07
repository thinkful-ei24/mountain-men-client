import React from 'react';

export default class UserJobCard extends React.Component{
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
    console.log(job)
    return (
      <li>
        <h3 onClick={() => this.showHide()}>{job.title}</h3>
        <p>{job.date}</p>
        {/* conditionally render everything below if
            expanded is true */}
            {this.state.expanded && (
              <div>
                <p>{job.description}</p>
                <button
                  type="button"
                  onClick="MAKES A PUT REQUEST TO CHANGE COMPLETED STATUS TO TRUE">
                  Completed
                </button>
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
