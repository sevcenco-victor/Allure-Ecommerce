import Rating from '../UI/Rating';
import styles from './Review.module.css';
import { MdVerifiedUser } from 'react-icons/md';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

const Review = ({
  ratingScore,
  title,
  author,
  date,
  text,
  helpfulScore,
  isVerified = false,
}) => {
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.ratingStats}>
        <Rating ratingScore={ratingScore} />
        <p>{date}</p>
      </div>
      <div className={styles.ratingAuthor}>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
      <p className={styles.ratingText}>{text}</p>

      <div className={styles.ratingFooter}>
        {isVerified ? (
          <div className={styles.verifiedUser}>
            <MdVerifiedUser />
            <small>Verified Buyer</small>
          </div>
        ) : (
          <small>Unverified Buyer</small>
        )}
        <div className={styles.ratingVote}>
          <small>
            <b>Was helpful?</b>
          </small>
          <div className={styles.votes}>
            <button>
              <AiOutlineLike />
            </button>
            <button>
              <AiOutlineDislike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
