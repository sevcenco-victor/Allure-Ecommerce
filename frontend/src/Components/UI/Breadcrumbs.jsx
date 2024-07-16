import { FaAngleRight } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter(Boolean);

  let path = '';

  return (
    <div className={styles.breadcrumbs}>
      <div key={0} className={styles.item}>
        <Link to="/">Home</Link>
      </div>
      {crumbs.map((crumb, index) => {
        path += `/${crumb}`;

        return (
          <div key={index} className={styles.item}>
            {index !== crumbs.length - 1 ? (
              <>
                <FaAngleRight />
                <Link to={path}>{toCapital(crumb)}</Link>
              </>
            ) : (
              <>
                <FaAngleRight />
                <p className={styles.currItem}>{toCapital(crumb)}</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
