import React from "react";
import "../Styles/header.scss"

function Header() {
return (
  <div>
    <nav>
      {/* <div> Logo</div> */}
      <ul>
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
      <i className="fas fa-bars burger"></i>

    </nav>
  </div>
);
}

export default Header;
