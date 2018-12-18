import React from "react";
import { updateView } from '../actions/view';
import {connect} from 'react-redux';
require('../css/dashboardnav.css');

export function DashboardNav(props) {
  if (props.type === "USER")
    return (
      <ul className='nav-container'>
        <li>
          <h1 className='nav-link' onClick={() => {
            props.dispatch(updateView('postJob'));
          }}>Create Post</h1>
        </li>
        <li>
          <h1 className='nav-link' onClick={() => {
            props.dispatch(updateView('default'))
          }}>Active Posts</h1>
        </li>
        <li>
          <h1 className='nav-link' onClick={() => {
            props.dispatch(updateView('acceptedJobs'));
          }}>Accepted Jobs</h1>
        </li>
        <li>
          <h1 className='nav-link' onClick={() => {
            props.dispatch(updateView('pastJobs'));
          }}>Completed Jobs</h1>
        </li>
      </ul>
    );
  if (props.type === "DRIVER")
    return (
      <div className='nav-container'>
        <li>
          <h1 className='nav-link'
            onClick={() => {
              props.dispatch(updateView('default'));
            }}>Need A Truck</h1>
        </li>
        <li>
          <h1 className='nav-link'
            onClick={() => {
              props.dispatch(updateView('currentJobs'));
          }}>Active Posts</h1>
        </li>
        <li>
          <h1 className='nav-link'
            onClick={() => {
              props.dispatch(updateView('pastJobs'));
          }}>Transactions</h1>
        </li>
        <li>
          <h1 className='nav-link'
            onClick={() => {
              props.dispatch(updateView("completedJobs"));
            }}
          >
            Completed Jobs
          </h1>
        </li>
      </div>
    );
}

const mapStateTothis = state => {
  return {
    currentUser: state.auth.currentUser,
    view: state.view.view
  };
};

export default connect(mapStateTothis)(DashboardNav);
