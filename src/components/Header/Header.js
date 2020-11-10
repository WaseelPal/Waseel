import React, {useState} from 'react';
import styles from './navbar.scss';
import { HiMenu } from 'react-icons/hi';
function Header() {

  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className={styles['topnav']}>
        <section className={styles['left-section']}>
          <ul className={styles['ul-links']}
            style={{ transform: open ? 'translateX(0px)' : '' }} >
            <div className={styles['logo']}> Wasel </div>
            <li><a >Sale</a> </li>
            <li><a > Contact</a></li >
            <li><a > About</a></li >
            <li><a> New!</a></li >
            <div className={styles['dropdown']}>
              <button className={styles['dropbtn']}>Departments
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles['dropdown-content']}>
                <a>Men</a>
                <a>Women</a>
                <a>kids</a>
                <a>Electronics</a>
                <a>Outdoors</a>
                <a>Accessories</a>
              </div>
            </div>
            <div className={styles['right-section']}>
              <button className={styles['signin']}> SIGN IN</button>
              <button className={styles['account']} >Create Account</button>
            </div>
          </ul >
      
        </section>

        <section className={styles['right-section']}>
          <i className={styles['burger']}  onClick={() => setOpen(!open)} > <HiMenu /></i>
        </section>
      </nav>
    </div >
    
  );
}

export default Header;