import React from "react";
import { Link } from "react-router-dom";
import ShowNav from "./ShowNav";

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
        <button
          onClick={e => {
            this.setState({ click: !this.state.click });
          }}
        >
          Show Nav
        </button>
        {show}
        <ul>
          <li>
            <Link to="/">
              <span>App Name</span>
            </Link>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
        </ul>
      </header>
    );
  }
}
