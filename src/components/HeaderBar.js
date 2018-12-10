import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local-storage";
// import ShowNav from "./ShowNav";
import styled from "styled-components";

const Button = styled.button`
  background-color: #3dc182;
  color: white;
  margin-top: 15px;
  font-size: 18px;
`;

const FlexHeader = styled.ul`
  margin-top: 0;
  display: flex;
  height: 46px;
  align-items: center;
  padding: 0 10px;
`;

const FlexItemRight = styled.li`
  margin-left: auto;
`;

const MainLogo = styled.li`
  text-decoration: none !important;
  font-size: 2rem;
  color: black;
`;
export class HeaderBar extends React.Component {
  render() {
    let logout = () => {
      this.props.dispatch(clearAuth());
      clearAuthToken();
    };

    let showButtons;
    if (this.props.loggedIn) {
      showButtons = (
        <>
          <FlexItemRight>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </FlexItemRight>

          <li>
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
          <FlexItemRight>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </FlexItemRight>
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
        <FlexHeader>
          <MainLogo>
            <Link to="/">
              <h3>Trucks R Us</h3>
            </Link>
          </MainLogo>
          {showButtons}
        </FlexHeader>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
