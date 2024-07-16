import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as InstagramIcon } from '../Assets/icons/intagram.svg';
import { ReactComponent as FacebookIcon } from '../Assets/icons/facebook.svg';
import { ReactComponent as WhatsAppIcon } from '../Assets/icons/whatsapp.svg';
import { ReactComponent as TelegramIcon } from '../Assets/icons/telegram.svg';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import ButtonLink from './UI/ButtonLink';
import { useState } from 'react';

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail);
  };
  const handleInputChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerItems} container`}>
        <div className={styles.footerListItem}>
          <h4>Product</h4>
          <ul className="product-list">
            <Link to="shop">Most Wanted</Link>
            <Link to="aboutUs">About Us</Link>
            <Link to="shop">Category</Link>
            <Link to="shop">Shop</Link>
          </ul>
        </div>
        <div className={styles.footerListItem}>
          <h4>Help</h4>
          <ul>
            <Link to="account">My account</Link>
            <Link to=".">Gift Options</Link>
            <Link to="shop">Shop</Link>
          </ul>
        </div>
        <div className={styles.footerListItem}>
          <h4>Terms & Conditions</h4>
          <ul>
            <Link to=".">Privacy Policy</Link>
            <Link to=".">Terms of Service</Link>
            <Link to=".">Cookies Settings</Link>
          </ul>
        </div>

        <div className={styles.footerListItem} id={styles.footerActions}>
          <div className={styles.footerListSubscribe}>
            <h4>Subscribe</h4>
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <form
            className={styles.footerEmailForm}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <label htmlFor="email" style={{ width: '100%' }}>
              <input
                className={styles.footerInput}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => handleInputChange(e)}
              />
            </label>
            <ButtonLink text="Subscribe" type="submit" color="white" />
          </form>
          <p className={styles.subscribeInfo}>
            *By subscribing you agree to with our
            <Link to="privacyPolicy"> Privacy Policy</Link> and provide consent
            to receive updates from our company.
          </p>
          <div className={styles.footerSocials}>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a href="https://www.instagram.com">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com">
              <WhatsAppIcon />
            </a>
            <a href="https://www.instagram.com">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <Logo className={styles.footerLogo} />
      </div>
      <hr className={styles.footerDevider} />
      <p className={styles.footerCopyright}>© 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
