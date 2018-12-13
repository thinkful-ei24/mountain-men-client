import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { postJobs } from "../actions/postJobs";
import { updateView } from "../actions/view";

export class PostJob extends React.Component {
  onSubmit(values) {
    values.id = this.props.currentUser.id;
    values.authToken = this.props.authToken;
    this.props.dispatch(updateView("currentJobs"));
    return this.props.dispatch(postJobs(values));
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div id="form-container">
        <div id="register-form">
          <form
            className="register-form"
            onSubmit={this.props.handleSubmit(values => {
              return this.onSubmit(values);
            })}
          >
            <div>
              <label>Job Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="I.e. I have a couch I need moved"
              />
            </div>
            <div>
              <label>Job Description</label>
              <Field
                name="description"
                component="input"
                type="text"
                placeholder="Job Description"
              />
            </div>
            <div>
              <label>Date</label>
              <Field
                name="date"
                component="input"
                type="date"
                placeholder="Friday December 14th at 6:00 pm"
              />
            </div>
            <div>
              <label>Street</label>
              <Field
                name="street"
                component="input"
                type="text"
                placeholder="i.e. 123 Main St"
              />
            </div>
            <div>
              <label>City</label>
              <Field
                name="city"
                component="input"
                type="text"
                placeholder="i.e. Los Angeles"
              />
            </div>
            <div>
              <label>State</label>
              <Field
                name="state"
                component="input"
                type="text"
                placeholder="i.e. California"
              />
            </div>
            <div>
              <label>Zip Code</label>
              <Field
                name="zipCode"
                component="input"
                type="text"
                placeholder="i.e. 90005"
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
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
