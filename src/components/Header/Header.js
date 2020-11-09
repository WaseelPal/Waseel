import React, {useState} from 'react';
import styles from './navbar.scss';
import { HiMenu } from 'react-icons/hi';


function Header() {

  const [open, setOpen] = useState(false);
  return (
    <div className={styles['topnav']}>
      <section className={styles['left-section']}>
        <ul className={styles['ul-links']}
          style={{ transform: open ? 'translateX(0px)' : '' }} >
          <div className={styles['logo']}> Wasel </div>
          <li><a href="/cart">Sale</a> </li>
          <li><a href="/contact”"> Contact</a></li >
          <li><a href="/About"> About</a></li >
          <li><a href="/About"> New!</a></li >
          <div className={styles['dropdown']}>
            <button className={styles['dropbtn']}>Departments
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles['dropdown-content']}>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">kids</a>
              <a href="#">Electronics</a>
              <a href="#">Outdoors</a>
              <a href="#">Accessories</a>
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
      
    </div >
    
  );
}

export default Header;