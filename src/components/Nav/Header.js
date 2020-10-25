import React, { useState } from "react";
import styles from "../../styles/nav.scss";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="logo"> Logo</div>
        <ul style={{ transform: open ? "translateX(0px)" : "" }}>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="inputContainer">
          <input className="input" type="text" placeholder="search..."></input>
          <span className="fa fa-search" />
        </div>
        <button onClick={() => console.log("clicked")}> Sign in </button>
        <i onClick={() => setOpen(!open)} className="fas fa-bars"></i>
      </nav>
    </div>
  );
}

export default Header;
