import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "./input.js";
import { postJobs } from "../actions/postJobs";

export class PostJob extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    
    values.id = this.props.currentUser.id;
    values.authToken = this.props.authToken;
    return this.props.dispatch(postJobs(values));
  }

  render() {
    console.log(this.props);
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
                component={Input}
                type="text"
                placeholder="I.e. I have a couch I need moved"
              />
            </div>
            <div>
              <label>Job Description</label>
              <Field
                name="description"
                component={Input}
                type="text"
                placeholder="Job Description"
              />
            </div>
            <div>
              <label>Date</label>
              <Field
                name="date"
                component={Input}
                type="date"
                placeholder="Friday December 14th at 6:00 pm"
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
