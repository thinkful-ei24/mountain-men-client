import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from '../pages/dashboard.js';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #04CDFF;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;

const Button = styled.button`
  background-color: #3DC182;
  color: white;
  margin-top: 15px;
  font-size: 18px;
`;



export function LandingMain(props) {
  console.log(props.currentUser);
  if (props.currentUser !== null) {
    return <Redirect to="/dashboard" component={Dashboard} />;
  } else {
    return (
      <Main>
        <div>
          <h2>Need a Truck?</h2>
          <p>Log in to find a truck and driver to help you with your move</p>
          {/*TODO make button its own component */}
          <Link to="/login">
            <Button type="button">Log in</Button>
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
            <Button type="button">Register</Button>
          </Link>
        </div>
        <img src="http://cars.typepad.com/.a/6a00d83451b3c669e2014e86ba94f4970d-800wi" alt='truck'/>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
