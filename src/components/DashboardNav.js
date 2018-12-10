import React from "react";
import styled from "styled-components";
import { updateView } from "../actions/view";
import { connect } from "react-redux";

const FlexNav = styled.ul`
  display: flex;
`;
const NavButton = styled.button`
  font-size: 18px;
`;

export function DashboardNav(props) {
  console.log(props);
  if (props.type === "USER")
    return (
      <FlexNav>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("default"));
            }}
          >
            Need A Truck?
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("currentJobs"));
            }}
          >
            Active Posts
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("pastJobs"));
            }}
          >
            Transactions
          </NavButton>
        </li>
      </FlexNav>
    );
  if (props.type === "DRIVER")
    return (
      <FlexNav>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("default"));
            }}
          >
            Need A Truck>
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("currentJobs"));
            }}
          >
            Active Posts
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={() => {
              props.dispatch(updateView("pastJobs"));
            }}
          >
            Transactions
          </NavButton>
        </li>
      </FlexNav>
    );
}

const mapStateTothis = state => {
  return {
    currentUser: state.auth.currentUser,
    view: state.view.view
  };
};

export default connect(mapStateTothis)(DashboardNav);
