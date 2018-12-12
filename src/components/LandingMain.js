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

const NeedTruckContainer = styled.div`
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    align-items: center
  }
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const NeedTruckImg = styled.div`
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
  }
  display: flex;
  align-items: center;
  background-color: #444a59;
  width: 250px;
  min-height: 250px;
  padding: 50px;
  margin-top: 20px;
  margin-left: 0px;
  margin-right: auto;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;

  animation-duration: 1.5s;
  animation-delay: 1s;
`;

const NeedTruck = styled.div`
  @media only screen and (max-width: 800px) {
    min-width: 350px;
    margin-left: 0;
    margin-right: 0;
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
  /* margin-left: 250px; */
  margin-left: 10px;
  margin-right: auto;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;

  animation-duration: 1.5s;
  animation-delay: 1s;
`;

const HaveTruckContainer = styled.div`
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    align-items: center
  }
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const HaveTruckImg = styled.div`
  @media only screen and (max-width: 800px) {
    margin: 0 auto;
  }
  display: flex;
  align-items: center;
  background-color: #444a59;
  width: 250px;
  min-height: 250px;
  padding: 50px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: 0px;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;

  animation-duration: 1.5s;
  animation-delay: 1s;
`;

const HaveTruck = styled.div`
  @media only screen and (max-width: 800px) {
    min-width: 350px;
    margin-left: 0;
    margin-right: 0;
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
  margin-right: 10px;
  margin-bottom: 20px;

  border-radius: 3px;
  box-shadow: 3px 3px 10px 1px black;

  animation-duration: 1.5s;
  animation-delay: 1s;
`;

export function LandingMain(props) {
  if (props.currentUser !== null) {
    return <Redirect to="/dashboard" component={Dashboard} />;
  } else {
    return (
      <Landing>
        <NeedTruckContainer>
          <NeedTruckImg className='animated fadeInUpBig'></NeedTruckImg>
          <NeedTruck className='animated fadeInLeftBig'>
            <h2>Need a Truck?</h2>
            <p>Log in to find a truck and driver to help you with your move</p>
            <Link to="/login">
              <Button type="button">Get Truck'd!</Button>
            </Link>
          </NeedTruck>
        </NeedTruckContainer>

        <HaveTruckContainer>
          <HaveTruck className='animated fadeInRightBig'>
            <h2>Have a Truck?</h2>
            <p>
              Looking for some extra chash? Turn your truck into capital and help
              a out a neighbor!
            </p>
            <Link to="/register">
              <Button type="button">Truck Yourself!</Button>
            </Link>
          </HaveTruck>
          <HaveTruckImg className='animated fadeInDownBig'></HaveTruckImg>
        </HaveTruckContainer>
      </Landing>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
