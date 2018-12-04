import React from "react";

export default function HeaderBar() {
  return (
    <header>
      <nav>{/** nav component */}</nav>
      <ul>
        <li>
          <span>App Name</span>
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
