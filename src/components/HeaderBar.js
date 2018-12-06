import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import ShowNav from "./ShowNav";
import "./styles/HeaderBar.css";

export class HeaderBar extends React.Component {
  state = { click: false };

  render() {
    let logout = () => {
      this.props.dispatch(clearAuth());
      clearAuthToken();
    };
    let showNav;
    let showNavButton;
    if (this.state.click) {
      showNav = <ShowNav />;
    }
    let showButtons;
    if (this.props.loggedIn) {
      showNavButton = (
        <li className="show-nav">
          <button
            onClick={e => {
              this.setState({ click: !this.state.click });
            }}
          >
            Show Nav
          </button>
        </li>
      );
      showButtons = (
        <li className="logout">
          <Link to="/">
            <button
              type="button"
              onClick={() => {
                logout();
                console.log("logout");
              }}
            >
              Log out
            </button>
          </Link>
        </li>
      );
    } else {
      showButtons = (
        <>
          <li className="sign-up">
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </li>
        </>
      );
    }

    return (
      <header>
        <ul className="header">
          {showNavButton}
          <li className="logo">
            <Link to="/">
              <h3>Trucks R Us</h3>
            </Link>
          </li>
          {showButtons}
        </ul>
        {showNav}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
