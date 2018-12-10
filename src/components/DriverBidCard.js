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
    {/*
    {
      driverId:,
      bid: bidAmount,
      description:,
      driverRating:,
    }
      */}
    return (
      <li>
        <h3>Job Title Here</h3>
        <p>Job Date Here</p>
        <p>Job Location Here</p>
        <p>${bid.bid}</p>
      </li>
    )
  }
}
