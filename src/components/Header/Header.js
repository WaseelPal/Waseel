import React, {useState} from "react"
import styles from '../Header/navstyles/navbarstyles.scss';

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
                    />
                </div >
            <button className={styles["sign-in-button"]}>
            {" "}
            Login{" "}
          </button>
         <i onClick={() => setOpen(!open)} className=" fas fa-bars"></i>
      </nav >
    </div >
  );
}

export default Header;