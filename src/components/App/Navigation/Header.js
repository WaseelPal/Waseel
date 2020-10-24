import React, {useState} from "react";
import "../Styles/header.scss"

function Header() {
  const [open, setOpen] = useState(false);
return (
  <div>
    <nav>
      <div className="logo"> Logo</div>
      <ul style={{ transform: open ? "translateX(0px)" : ""}}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      
      </ul>
      <input placeholder="search..."></input>
      <button onClick={()=> console.log("clicked")}> Sign in </button>
      <i onClick= {() => setOpen(!open)} className="fas fa-bars .burger"></i>
    </nav>
    
  </div>
);
}

export default Header;
