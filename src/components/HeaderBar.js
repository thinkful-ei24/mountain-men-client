import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import ShowNav from "./ShowNav";
import "./styles/HeaderBar.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: #3dc182;
  color: white;
  margin-top: 15px;
  font-size: 18px;
`;
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
      showButtons = (
        <>
          <li className="show-nav">
            <Button
              onClick={e => {
                this.setState({ click: !this.state.click });
              }}
            >
              Account
            </Button>
          </li>
          <li className="logout">
            <Link to="/">
              <Button
                type="button"
                onClick={() => {
                  logout();
                  console.log("logout");
                }}
              >
                Log out
              </Button>
            </Link>
          </li>
        </>
      );
    } else {
      showButtons = (
        <>
          <li className="sign-up">
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button>Log In</Button>
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
            <Link className="link-logo" to="/">
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
