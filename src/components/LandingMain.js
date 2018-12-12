import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from '../pages/dashboard.js';
import styled from 'styled-components';

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: white;
`;

const Button = styled.button`
  background-color: #3DC182;
  color: white;
  margin-top: 15px;
  font-size: 18px;
`;

const NeedTruck = styled.div`
  @media only screen and (max-width: 600px) {
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  background-color: #444a59;
  width: 450px;
  min-height: 250px;
  padding: 50px;
  margin-top: 20px;
  margin-left: 400px;
  margin-right: auto;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;
`;

const HaveTruck = styled.div`
  @media only screen and (max-width: 600px) {
    min-width: 350px;
    margin: 0 auto;

  }
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  background-color: #444a59;
  width: 450px;
  min-height: 250px;
  padding: 50px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 400px;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;
`;

export function LandingMain(props) {
  if (props.currentUser !== null) {
    return <Redirect to="/dashboard" component={Dashboard} />;
  } else {
    return (
      <Landing>
        <NeedTruck className='animated fadeInLeft'>
          <h2>Need a Truck?</h2>
          <p>Log in to find a truck and driver to help you with your move</p>
          <Link to="/login">
            <Button type="button">Get Truck'd!</Button>
          </Link>
        </NeedTruck>
        <HaveTruck className='animated fadeInRight'>
          <h2>Have a Truck?</h2>
          <p>
            Looking for some extra chash? Turn your truck into capital and help
            a out a neighbor!
          </p>
          <Link to="/register">
            <Button type="button">Truck Yourself!</Button>
          </Link>
        </HaveTruck>
        <img style={{width: '200px'}} src="http://cars.typepad.com/.a/6a00d83451b3c669e2014e86ba94f4970d-800wi" alt='truck'/>
      </Landing>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
