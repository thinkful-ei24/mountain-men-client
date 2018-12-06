import React from 'react';
import { connect } from 'react-redux';
import BidComponent from '../components/BidComponent';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
  if(!props.loggedIn) {
    return <Redirect to='/'></Redirect>
  }

  console.log(props)
  return (
    <div>
      <h1>Welcome back, {props.currentUser.firstName} {props.currentUser.lastName}!</h1>
      <ul>
        <BidComponent name={props.currentUser.firstName}></BidComponent>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Dashboard);
