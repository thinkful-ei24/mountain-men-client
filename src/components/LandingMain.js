import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const logoImg = require('../mm-logo.png');
require('../css/landingmain.css');

export function LandingMain(props) {
  return (
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

      <div className="brand-section">
        <div id="mm">
          <img id="mm-logo-img" src={logoImg} alt="logo" />
          <h1 id="mm-name">Team Mountain Men</h1>
        </div>
        <div className="contacts">
          <p className="contact-name">
            Aaron Whitehead
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/WhiteheadAaron">
              <i className="icon-gh fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/aaron-whitehead-a2a94785/">
              <i className="icon-gh fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/WhiteheadAaron">
              <i className="icon-gh  fas fa-cat"></i>
            </a>
          </p>
          <p className="contact-name">
            Alex Gutierrez
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/alexgutes">
              <i className="icon-gh fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/alexgutes/">
              <i className="icon-gh fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://alexgut.es">
              <i className="icon-gh fab fa-earlybirds"></i>
            </a>
          </p>
          <p className="contact-name">
            Colin Rupp
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/rupp-colin">
              <i className="icon-gh fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/colin-r-5b790b167/">
              <i className="icon-gh fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/rupp-colin">
              <i className="icon-gh fas fa-terminal"></i>
            </a>
          </p>
          <p className="contact-name">
            Sean Phelan
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/phelan97">
              <i className="icon-gh fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://linkedin.com/in/sean-phelan97">
              <i className="icon-gh fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://seanphelan.io/">
              <i className="icon-gh  fas fa-crow"></i>
            </a>
          </p>
          <p className="contact-name">
            Shane Lupton
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/slupton89">
              <i className="icon-gh fab fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://linkedin.com/in/shane-lupton/">
              <i className="icon-gh fab fa-linkedin"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer"
              href="https://shane-lupton.com">
              <i className="icon-gh fas fa-meteor"></i>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser // state.auth.user !== null
});

export default connect(mapStateToProps)(LandingMain);
