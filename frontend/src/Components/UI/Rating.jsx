import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import styles from './Rating.module.css';

const Rating = ({ ratingScore }) => {
  const starArr = [];
  let index = 0;
  for (index; index < ratingScore - 0.5; index++) {
    starArr.push(<FaStar key={index} />);
  }
  if (ratingScore - index != 0) {
    starArr.push(<FaStarHalfAlt key={index} />);
  }

  return <div className={styles.ratingStars}>{starArr}</div>;
};

export default Rating;
