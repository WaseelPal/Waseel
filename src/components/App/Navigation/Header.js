import React from "react";
import "../Styles/header.scss"

function Header() {
return (
  <div>
    <nav>
      <div className="logo"> Logo</div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/"> Cart</a>
        </li>
      </ul>
      <input placeholder="search..."></input>

      <button> Sign in </button>

    </nav>
  </div>
);
}

export default Header;
