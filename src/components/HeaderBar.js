import React from "react";
import { Link } from "react-router-dom";
import ShowNav from "./ShowNav";
import "./styles/HeaderBar.css";

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
  }

  render() {
    let show;
    if (this.state.click) {
      show = <ShowNav />;
    }

    return (
      <header>
        <ul className="header">
          <li className="show-nav">
            <button
              onClick={e => {
                this.setState({ click: !this.state.click });
              }}
            >
              Show Nav
            </button>
          </li>
          <li className="logo">
            <Link to="/">
              <h3>Trucks R Us</h3>
            </Link>
          </li>
          <li className="sign-up">
            <button>Sign Up</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
        </ul>
        {show}
      </header>
    );
  }
}
