import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { makeBid } from '../actions/jobs';
import { updateView } from '../actions/view';
require('../css/DriverBid.css');

var moment = require('moment');

export function JobComponent(props) {

  let date = new Date(props.date);
  date.setHours(25);

  return (
    <div id='job-card'>
      <span id='user-name'>{props.name}</span>
      <p id='job-desc'>
        {props.desc}
      </p>
      <p id='job-date'>
        {moment(date).format('MMM Do YYYY')}
      </p>
      <p id='job-budget'>
        This poster has a budget of ${props.budget}
      </p>
      <form
        onSubmit={props.handleSubmit(values => {
          props.dispatch(makeBid(props.id, values));
          return props.dispatch(updateView("currentJobs"));
        })}
      >
        <label id="bid-label">Your Offer</label>
        <Field
          name="bid"
          id="bid-input"
          component="input"
          type="number"
          placeholder="Bid Amount"
        />
        <Field
          name="desc"
          id="desc-input"
          component="textarea"
          type="textarea"
          placeholder="Additional Comments"
        />
        <button id='submit-btn' type='submit'>Submit Bid</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {};
};

const Job = reduxForm({
  form: `jobBidForm`
})(connect(mapStateToProps)(JobComponent));

export default Job;
