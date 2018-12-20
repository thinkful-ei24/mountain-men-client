import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

require('../css/landingmain.css');

export function LandingMain(props) {
    return (
      <div>
      <section id='landing-section'>
        <div id='need-truck-container'>
          <div id='need-truck-img' className='truck-img animated fadeInUpBig'>
            <img src={require('../cat.gif')} alt='box img'
              id='need-img'></img>
          </div>
          <div id='need-truck-card' className='truck-card animated fadeInLeftBig'>
            <h2>Need a Truck?</h2>
            <p>Sign up to find someone with a truck. Whether you are moving, cleaning out or maybe just want a mobile pool. Let the truck owners
              compete for your jobs.
            </p>
            <Link to="/login">
              <button className='btn' type="button">Get Truck'd!</button>
            </Link>
          </div>
        </div>

        <div id='have-truck-container'>
          <div id='have-truck-card' className='truck-card animated fadeInRightBig'>
            <h2>Have a Truck?</h2>
            <p>
              Looking for some extra cash? Turn your truck into capital and help
              a out a neighbor! Pick and bid on the jobs that fit your schedule and work when you
              want.
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
      </div>
    );

}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
