import React from "react";
import styled from "styled-components";

const FlexNav = styled.ul`
  display: flex;
`;
const NavButton = styled.button`
  font-size: 18px;
`;

export default function DashboardNav(props) {
  if (props.type === "USER")
    return (
      <FlexNav>
        <li>
          <NavButton>Need A Truck?</NavButton>
        </li>
        <li>
          <NavButton>Active Posts</NavButton>
        </li>
        <li>
          <NavButton>Transactions</NavButton>
        </li>
      </FlexNav>
    );
  if (props.type === "DRIVER")
    return (
      <ul>
        <li>
          <NavButton>Need A Truck></NavButton>
        </li>
        <li>
          <NavButton>Active Posts</NavButton>
        </li>
        <li>
          <NavButton>Transactions</NavButton>
        </li>
      </ul>
    );
}
