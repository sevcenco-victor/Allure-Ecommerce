import styles from './ButtonLink.module.css';
import { ReactComponent as ArrowIcon } from '../../Assets/icons/top-right-arrow.svg';

import { Link } from 'react-router-dom';
const ButtonLink = ({ text, title, link, color }) => {
  return (
    <button
      className={`${styles.buttonLink} ${
        color === 'white' ? styles.white : styles.black
      }`}
      title={title}
    >
      {link ? (
        <Link to={link} className={styles.buttonContent}>
          {text} <hr />
        </Link>
      ) : (
        <div className={styles.buttonContent}>
          {text} <hr />
        </div>
      )}

      <ArrowIcon className="arrow-icon" />
    </button>
  );
};

export default ButtonLink;
