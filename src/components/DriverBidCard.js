import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/getUser";
require('../css/driverbidcard.css');

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
    return (
      <li id='job-card'>
        <h3 id='card-title'>{this.props.bid.jobTitle}</h3>
        <p className='card-label'>Job Date: </p>
        <p id='card-date'>{moment(this.props.bid.jobDate).format('LLLL')}</p>
        <p className='card-label'>Description: </p>
        <p id='card-desc'>{this.props.bid.jobDescription}</p>
        <p className='card-label'>Your Bid: </p>
        <p id='card-desc'>{this.props.bid.bidAmount}</p>
        <p className='card-label'>Your Description: </p>
        <p id='card-desc'>{this.props.bid.bidDescription}</p>
        {this.props.bid.accepted && !this.props.bid.completed && (
          <p>
            {this.props.bid.jobPoster} accepted your bid. You can contact them
            at <span id ='bold-text'>{this.props.bid.jobPosterEmail}</span> or{" "}
            <span id ='bold-text'>{this.props.bid.jobPosterPhoneNumber}</span>.
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
