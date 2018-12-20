import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import { updateView } from "../actions/view";
import { withRouter } from "react-router";
import logoImg from "../logo.png";
require("../css/headerbar.css");

export class HeaderBar extends React.Component {
  render() {
    let logout = () => {
      this.props.dispatch(clearAuth());
      clearAuthToken();
    };

    let dashboardProfileButton;
    if (this.props.location.pathname === "/profile") {
      dashboardProfileButton = (
        <Link to="/dashboard">
          <button
            id="profile-btn"
            className="nav-btn"
            onClick={() => {
              this.props.dispatch(updateView("default"));
            }}
          >
            Dashboard
          </button>
        </Link>
      );
    } else {
      dashboardProfileButton = (
        <Link to="/profile">
          <button
            id="profile-btn"
            className="nav-btn"
            onClick={() => {
              this.props.dispatch(updateView("default"));
            }}
          >
            Profile
          </button>
        </Link>
      );
    }

    let showButtons;
    if (this.props.loggedIn) {
      showButtons = (
        <>
          <li className="show-nav">{dashboardProfileButton}</li>
          <li className="logout">
            <Link to="/">
              <button
                id="logout-btn"
                className="nav-btn"
                type="button"
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </button>
            </Link>
          </li>
        </>
      );
    } else {
      showButtons = (
        <>
          <li className="sign-up">
            <Link to="/register">
              <button className="nav-btn">Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="nav-btn">Log In</button>
            </Link>
          </li>
        </>
      );
    }

    return (
      <div id="header-bar">
        <ul className="header">
          <li className="logo">
            <Link className="link-logo" to="/dashboard">
              <img id="logo-img" src={logoImg} alt="logo" />
              <h1 id="title">Truck'd</h1>
            </Link>
          </li>
          {showButtons}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(HeaderBar));
