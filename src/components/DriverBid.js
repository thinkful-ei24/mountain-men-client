import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from 'react-redux';
import { makeBid } from '../actions/jobs';

require('../css/DriverBid.css');

function JobComponent(props) {
  return (
    <div id='job-card'>
      <span id='user-name'>{props.name}</span>
      <p id='job-desc'>
        {props.desc}
      </p>
      <p id='job-date'>
        {props.date}
      </p>
      {/* <p id='job-bids'>
      There have been {bidsObject.bids.length} bids made.
      </p> */}
      <img
        id="job-image"
        src="https://images.uline.com/is/image/content/dam/images/Class-Group/c04/g009/guidednav.jpg?$BrowseRHD$&iccEmbed=1&icc=AdobeRGB"
        alt="post pic"
      />
      <form
        onSubmit={props.handleSubmit(values => {
          // console.log(props);
          // values.userId = props.auth.currentUser.id;
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
          placeholder="$25.00"
        />
        <Field
          name="desc"
          id="desc-input"
          component="textarea"
          type="textarea"
          placeholder="Additional comments"
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
  form: `jobBidForm + ${Job}`
})(connect(mapStateToProps)(JobComponent));

export default Job;
