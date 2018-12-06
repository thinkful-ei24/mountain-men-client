import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "./input.js";

export class PostJob extends React.Component {
  constructor(props) {
    super(props);
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
            onSubmit={() => {
              console.log("hello");
            }}
          >
            <div>
              <label>Job Title</label>
              <Field
                name="jobTitle"
                component={Input}
                type="text"
                placeholder="I.e. I have a couch I need moved"
              />
            </div>
            <div>
              <label>Job Description</label>
              <Field
                name="jobDescription"
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
  isLoggedIn: state.auth.currentUser !== null
});

const PostJobForm = reduxForm({
  form: "postJob"
})(connect(mapStateToProps)(PostJob));

export default PostJobForm;
