import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/getUser";
var moment = require("moment");

export class DriverBidCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    //gets all jobs related to a given user
    this.props.dispatch(getUser(this.props.bid.jobPosterId));
  }

  showHide() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    let bid = this.props.bid;
    let user = this.props.jobPoster.user.users[0];
    return (
      <li>
        <h3>{bid.jobTitle}</h3>
        <p>Job Date: {moment(bid.jobDate).format("LLLL")}</p>
        <p>Description: {bid.jobDescription}</p>
        <p>Your Bid: {bid.bidAmount}</p>
        <p>Your Description: {bid.bidDescription}</p>
        {bid.accepted &&
          !bid.completed &&
          user && (
            <p>
              {user.firstName} accepted your bid. You can contact them at{" "}
              {user.email} or {user.phoneNumber}.
            </p>
          )}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  jobPoster: state
});

export default connect(mapStateToProps)(DriverBidCard);
