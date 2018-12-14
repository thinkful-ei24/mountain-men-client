import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const InfoItem = styled.p`
  font-weight: 400;
  font-size: 32px;
  margin: 10px;
`;

export class ProfileInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <InfoItem>
          <label>Name: </label>
          <b>
            {this.props.currentUser.firstName} {this.props.currentUser.lastName}
          </b>
        </InfoItem>
        <InfoItem>
          Type: <b>{this.props.currentUser.type.toLowerCase()}</b>
        </InfoItem>
        <InfoItem>
          Email: <b>{this.props.currentUser.email}</b>
        </InfoItem>
        <InfoItem>
          Address: <b>{this.props.currentUser.userAddress}</b>
        </InfoItem>
        <InfoItem>
          Phone: <b>{this.props.currentUser.phoneNumber}</b>
        </InfoItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(ProfileInfo);
