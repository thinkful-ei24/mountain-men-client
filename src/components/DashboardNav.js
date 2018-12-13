import React from "react";
import { updateView } from '../actions/view';
import {connect} from 'react-redux';

export function DashboardNav(props) {
  if (props.type === "USER")
    return (
      <ul style={{display: 'flex'}}>
        <li>
          <button onClick={() => {
            props.dispatch(updateView('default'));
          }}>Need A Truck?</button>
        </li>
        <li>
          <button onClick={() => {
            props.dispatch(updateView('currentJobs'))
          }}>Active Posts</button>
        </li>
        <li>
          <button onClick={() => {
            props.dispatch(updateView('pastJobs'));
          }}>Transactions</button>
        </li>
      </ul>
    );
  if (props.type === "DRIVER")
    return (
      <ul>
        <li>
          <button style={{fontSize: '18px'}}
            onClick={() => {
              props.dispatch(updateView('default'));
            }}>Need A Truck></button>
        </li>
        <li>
          <button style={{fontSize: '18px'}}
            onClick={() => {
              props.dispatch(updateView('currentJobs'));
          }}>Active Posts</button>
        </li>
        <li>
          <button style={{fontSize: '18px'}}
            onClick={() => {
              props.dispatch(updateView('pastJobs'));
          }}>Transactions</button>
        </li>
      </ul>
    );
}

const mapStateTothis = state => {
  return {
    currentUser: state.auth.currentUser,
    view: state.view.view
  };
};

export default connect(mapStateTothis)(DashboardNav);
