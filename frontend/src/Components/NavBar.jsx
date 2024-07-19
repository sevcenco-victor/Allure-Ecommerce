import styles from './NavBar.module.css';
import searchIcon from '../Assets/icons/search.svg';
import userIcon from '../Assets/icons/user.svg';
import cartIcon from '../Assets/icons/cart.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { useEffect, useState } from 'react';
const NavBar = () => {
  const [isScrollerd, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        location.pathname === '/' ? window.innerHeight - 100 : 0;
      setIsScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <nav
      className={`${styles.navBar} ${
        isScrollerd ? styles.scrolled : ''
      } container`}
    >
      <div className={styles.navList}>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="about-us">About Us</NavLink>
      </div>
      <Logo
        className={`${styles.navBarLogo} ${
          location.pathname === '/' && !isScrollerd
            ? styles.whiteLogo
            : styles.blackLogo
        }`}
      />
      <div className={styles.navBarActions}>
        <img src={searchIcon} alt="search icon" />
        <Link to="personal-account">
          <img src={userIcon} alt="user icon" />
        </Link>
        <Link to="cart">
          <img src={cartIcon} alt="cart icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
