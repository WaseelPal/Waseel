import React, {useState} from "react"
// import { Link } from "react-router-dom"
import styles from "../../styles/navbar.scss"

function Header() {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav>
                <div> Logo </div>
                <ul className={styles["ul-links"]}
                    style={{ transform: open ? "translateX(0px)" : "" }} >
                     <li> <a href="/cart">Cart</a> </li>
                     <li><a href="/contact”"> Contact</a></li >
               </ul >
                <div>
                    <input
                        className={styles["input"]}
                        type="text"
                        placeholder ="search..."
                    ></input>
                    {/* <span className="fa fa-search"></span> */}
                </div >

            <button className={styles["sign-in-button"]} onClick={() => console.log("clicked")}>
            {" "}
            Sign in{" "}
          </button>

         <i onClick={() => setOpen(!open)} className=" fas fa-bars"></i>
      </nav >
    </div >
  );
}

export default Header;