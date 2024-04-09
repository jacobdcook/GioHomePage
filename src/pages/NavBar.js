import { Outlet, Link } from "react-router-dom";
import styles from './pages.module.css';
import React from 'react';
import recipes from './images/recipes.png';
import leftovers from './images/leftovers.png';
import plan from './images/image_prev_ui.png';
import book from './images/book.png';

const NavBar = () => {
  const clearUser = () => {
    localStorage.setItem("username", "None");
  };

  let username = localStorage.getItem("username");
  if (username === "None" || !username) {
    username = "Gio"; // Set "Gio" as the default name if "None" or not set
  }

  return (
    <div className={styles.navBarContainer}>
      {/* Title area + Log out button */}
      <div className={styles.titleHeaderContainer}>
        <div className={styles.titleContainer}>
          <a href="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <img src={book} alt="Home" className={styles.titleImg}/>
            <p className={styles.titleText}>Gio Rod</p>
          </a>
        </div>
        <div className={styles.signOutContainer}>
          <p className={styles.signOutText} style={{fontFamily:'NotoSans'}}>HELLO, {username}</p>
          <button onClick={clearUser} style={{color: 'inherit'}} className={styles.signOutBtn}><p className={styles.signOutText}>Refresh</p></button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav>
        <div className={styles.navItemsContainer}>
          <div className={styles.navItem}>
            <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
              <img src={recipes} alt="Recipes" className={styles.navImg}/>
              <p className={styles.navItemText}>Home</p>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="/food-storage-tips" style={{color: 'inherit', textDecoration: 'inherit'}}>
              <img src={plan} alt="mealplan" className={`${styles.foodStorageImg} ${styles.foodStorageImgPadding}`}/>
              <p className={styles.navItemText}>Favorites</p>
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link to="/Leftovers" style={{color: 'inherit', textDecoration: 'inherit'}}>
              <img src={leftovers} alt="Leftovers" className={styles.navImg}/>
              <p className={styles.navItemText}>History</p>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
