import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
import ShowNav from "./ShowNav";
import "./styles/HeaderBar.css";
import styled from "styled-components";

import logoImg from '../logo.png';

const Button = styled.button`
  background-color: #3dc182;
  color: white;
  margin-top: 25px;
  font-size: 18px;
  width: 100px;
  height: 30px;
  font-size: 16px;
`;

const Title = styled.h3`
  display: inline;
  font-family: 'Michroma';
  color: white;
`;

const Logo = styled.img`
  display: inline-block;
  position: relative;
  top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

const HeaderB = styled.header`
  position: sticky;
  height: 60px;
  width: 100%;
  background-color: #444a59;
`
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
      <HeaderB>
        <ul className="header">
          {showNavButton}
          <li className="logo">
            <Link className="link-logo" to="/">
              <Logo src={logoImg} alt='logo'/>
              <Title>Truck'd</Title>
            </Link>
          </li>
          {showButtons}
        </ul>
        {showNav}
      </HeaderB>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
