import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/getUser";
require('../css/driverbidcard.css');

const moment = require('moment');
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
    let user = this.props.jobPoster.user.users[this.props.position];

    console.log(this.props);

    let date = new Date(bid.jobDate);
    date.setHours(25);

    return (
      <li className='job-card'>
        <h3 id='card-title'>{bid.jobTitle}</h3>
        <p className='card-label'>Job Date: </p>
        <p id='card-date'>{moment(date).format('MMM Do YYYY')}</p>
        <p className='card-label'>Description: </p>
        <p id='card-desc'>{bid.jobDescription}</p>
        <p className='card-label'>Your Bid: </p>
        <p id='card-bid'>{bid.bidAmount}</p>
        <p className='card-label'>Your Description: </p>
        <p id='card-desc'>{bid.bidDescription}</p>
        {bid.accepted && !bid.completed && user && (
          <p>
            {user.firstName} accepted your bid. You can contact them
            at <span id ='bold-text'>{user.email}</span> or{" "}
            <span id ='bold-text'>{user.phoneNumber}</span>.
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
