import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from '../pages/dashboard.js';

export function LandingMain(props) {
  console.log(props.currentUser);
  if (props.currentUser !== null) {
    return <Redirect to="/dashboard" component={Dashboard} />;
  } else {
    return (
      <main>
        <div>
          <h2>Need a Truck?</h2>
          <p>Log in to find a truck and driver to help you with your move</p>
          {/*TODO make button its own component */}
          <Link to="/login">
            <button type="button">Find a Truck</button>
          </Link>
        </div>
        <div>
          <h2>Have a Truck?</h2>
          <p>
            Looking for some extra chash? Turn your truck into capital and help
            a out a neighbor!
          </p>
          {/*TODO make button its own component */}
          <Link to="/register">
            <button type="button">Find a Truck</button>
          </Link>
        </div>
        <img src="http://cars.typepad.com/.a/6a00d83451b3c669e2014e86ba94f4970d-800wi" />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
