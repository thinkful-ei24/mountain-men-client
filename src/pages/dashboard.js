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
      <h1>this is the dahsboard page</h1>
      <ul>
        <BidComponent name={'Bob'}></BidComponent>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.currentUser !== null,
    anything: state,
  }
}

export default connect(mapStateToProps)(Dashboard);
