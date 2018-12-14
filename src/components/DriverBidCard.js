import React from "react";
import { getUser } from "../actions/getUser";

export default class DriverBidCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    //gets all jobs related to a given user
    if (this.props.bid.jobPosterId) {
      this.props.dispatch(getUser(this.props.bid.jobPosterId));
    }
  }

  showHide() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    console.log(this.props);
    let bid = this.props.bid;
    return (
      <li>
        <h3>{this.props.bid.jobTitle}</h3>
        <p>Job Date: {this.props.bid.jobDate}</p>
        <p>Description: {this.props.bid.jobDescription}</p>
        <p>Your Bid: {this.props.bid.bidAmount}</p>
        <p>Your Description: {this.props.bid.bidDescription}</p>
        {this.props.bid.accepted && !this.props.bids.completed && (
          <p>
            {this.props.bid.jobPoster} accepted your bid. You can contact them
            at {this.props.bid.jobPosterEmail} or{" "}
            {this.props.bid.jobPosterPhoneNumber}.
          </p>
        )}
      </li>
    );
  }
}
