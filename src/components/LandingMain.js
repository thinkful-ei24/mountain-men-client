import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from '../pages/dashboard.js';

require('../css/landingmain.css');

export function LandingMain(props) {
  if (props.currentUser !== null) {
    return <Redirect to="/dashboard" component={Dashboard} />;
  } else {
    return (
      <section id='landing-section'>
        <div id='need-truck-container'>
          <div id='need-truck-img' className='truck-img animated fadeInUpBig'>
            <img src={require('../cat.gif')} alt='box img'
              id='need-img'></img>
          </div>
          <div id='need-truck-card' className='truck-card animated fadeInLeftBig'>
            <h2>Need a Truck?</h2>
            <p>Log in to find a truck and driver to help you with your move</p>
            <Link to="/login">
              <button className='btn' type="button">Get Truck'd!</button>
            </Link>
          </div>
        </div>

        <div id='have-truck-container'>
          <div id='have-truck-card' className='truck-card animated fadeInRightBig'>
            <h2>Have a Truck?</h2>
            <p>
              Looking for some extra chash? Turn your truck into capital and help
              a out a neighbor!
            </p>
            <Link to="/register">
              <button className='btn' type="button">Truck Yourself!</button>
            </Link>
          </div>
          <div id='have-truck-img'  className='truck-img animated fadeInDownBig'>
            <img src={require('../truck-pickup.gif')} alt='truck img'
              id='have-img'></img>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
