import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class ShowNav extends React.Component {
  render() {
    // if driver
    /**
     * get a jbo
     * current bids
     * past jobs
     *
     * if user
     *  need a truck?
     * acrive posts
     * transactions
     *
     * actions
     * current jobs
     * past
     *
     */
    if (this.props.currentUser.type === "USER") {
      return (
        <div>
          <h4>{this.props.currentUser.firstName}</h4>
          <span>{this.props.currentUser.type}</span>
          <ul>
            <Link to="/dashboard">
              <li>Need A Truck?</li>
            </Link>
            <Link to="/dashboard">
              <li>Active Posts</li>
            </Link>
            <Link to="/dashboard">
              <li>Transactions</li>
            </Link>
          </ul>
        </div>
      );
    }
    if (this.props.currentUser.type === "DRIVER") {
      return (
        <div>
          <h4>{this.props.currentUser.firstName}</h4>
          <span>{this.props.currentUser.type}</span>
          <ul>
            <Link to="/dashboard">
              <li>Get A Job</li>
            </Link>
            <Link to="/dashboard">
              <li>Current Bids</li>
            </Link>
            <Link to="/dashboard">
              <li>Past Jobs</li>
            </Link>
          </ul>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(ShowNav);
