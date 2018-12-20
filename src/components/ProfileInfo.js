import React from "react";
import { connect } from "react-redux";
require("../css/profileinfo.css");

export function ProfileInfo(props) {
  if (props.currentUser) {
    return (
      <div id="prof-container">
        <div className="info-item">
          <label>Name: </label>
          <span className="prof-value">
            {props.currentUser.firstName} {props.currentUser.lastName}
          </span>
        </div>
        <div className="info-item">
          <label>Type: </label>
          <span className="prof-value">
            {props.currentUser.type.toLowerCase()}
          </span>
        </div>
        <div className="info-item">
          <label>Email: </label>
          <span className="prof-value">{props.currentUser.email}</span>
        </div>
        <div className="info-item">
          <label>Address: </label>
          <span className="prof-value">{props.currentUser.address.street}</span>
          <br />
          <span className="prof-value">{props.currentUser.address.city}</span>
          <br />
          <span className="prof-value">
            {props.currentUser.address.state.toUpperCase()}
          </span>
          <br />
          <span className="prof-value">{props.currentUser.address.zip}</span>
        </div>
        <div className="info-item">
          <label>Phone: </label>
          <span className="prof-value">{props.currentUser.phoneNumber}</span>
        </div>
      </div>
    );
  }
  return '';
}
const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(ProfileInfo);
