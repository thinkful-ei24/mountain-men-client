import React from 'react';

export default class DriverBidCard extends React.Component{
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
    let bid = this.props.bid;
    console.log(this.props);
    return (
      <li>
        <h3>{this.props.bid.jobTitle}</h3>
        <p>Job Date: {this.props.bid.jobDate}</p>
        <p>Description: {this.props.bid.jobDescription}</p>
        <p>Job Location Here</p>
        <p>Your Bid: {this.props.bid.bidAmount}</p>
        <p>Your Description: {this.props.bid.bidDescription}</p>
      </li>
    )
  }
}
