import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { postJobs } from "../actions/postJobs";
import { updateView } from "../actions/view";
require('../css/postjobform.css');
export class PostJob extends React.Component {
  onSubmit(values) {
    values.id = this.props.currentUser.id;
    values.authToken = this.props.authToken;
    this.props.dispatch(postJobs(values));
    this.props.dispatch(updateView("currentJobs"));
  }

  render() {
    return (
      <div id="register-form">
        <form
          className="register-form"
          onSubmit={this.props.handleSubmit(values => {
            return this.onSubmit(values);
          })}>
            <label>Job Title</label>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="I.e. I have a couch I need moved"
            />
            <label>Job Description</label>
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Job Description"
            />
            <label>Date</label>
            <Field
              name="date"
              component="input"
              type="date"
              placeholder="Friday December 14th at 6:00 pm"
            />
            <label>Budget</label>
            <Field
              name="budget"
              component="input"
              type="number"
              min="10"
              placeholder="$100"
            />
            <label>Street</label>
            <Field
              name="street"
              component="input"
              type="text"
              placeholder="i.e. 123 Main St"
            />
            <label>City</label>
            <Field
              name="city"
              component="input"
              type="text"
              placeholder="i.e. Los Angeles"
            />
            <label>State</label>
            <Field
              name="state"
              component="input"
              type="text"
              placeholder="i.e. California"
            />
            <label>Zip Code</label>
            <Field
              name="zipCode"
              component="input"
              type="text"
              placeholder="i.e. 90005"
            />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
  authToken: state.auth.authToken
});

const PostJobForm = reduxForm({
  form: "postJob"
})(connect(mapStateToProps)(PostJob));

export default PostJobForm;
