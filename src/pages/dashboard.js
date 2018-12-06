import React from 'react';
import { connect } from 'react-redux';
import Job from '../components/JobCard';
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
        <Job name={'Bob'}></Job>
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
