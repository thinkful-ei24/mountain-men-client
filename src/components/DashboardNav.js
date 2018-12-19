import React from "react";
import { updateView } from '../actions/view';
import {connect} from 'react-redux';
require('../css/dashboardnav.css');

export function DashboardNav(props) {
  if (props.type === "USER")
    return (
      <ul className='nav-container'>
        <li>
          <button
            className="create-post"
            onClick={() => {
            props.dispatch(updateView('postJob'));
          }}>Create Post</button>
        </li>
        <li>
          <button
            className="active-posts"
            onClick={() => {
            props.dispatch(updateView('default'))
          }}>Active Posts</button>
        </li>
        <li>
          <button
            className="accepted-jobs"
            onClick={() => {
            props.dispatch(updateView('acceptedJobs'));
          }}>Accepted Jobs</button>
        </li>
        <li>
          <button
            className="completed-jobs"
            onClick={() => {
            props.dispatch(updateView('pastJobs'));
          }}>Completed Jobs</button>
        </li>
      </ul>
    );
  if (props.type === "DRIVER")
    return (
      <div className='nav-container'>
        <li>
          <button
            className="need-a-truck"
            onClick={() => {
              props.dispatch(updateView('default'));
            }}>Need A Truck</button>
        </li>
        <li>
          <button
            className="active-posts"
            onClick={() => {
              props.dispatch(updateView('currentJobs'));
          }}>Active Posts</button>
        </li>
        <li>
          <button
            className="transactions"
            onClick={() => {
              props.dispatch(updateView('pastJobs'));
          }}>Transactions</button>
        </li>
        <li>
          <button
            className="completed-jobs"
            onClick={() => {
              props.dispatch(updateView("completedJobs"));
            }}
          >
            Completed Jobs
          </button>
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
