import Rating from './UI/Rating';
import styles from './Review.module.css';
import { MdVerifiedUser } from 'react-icons/md';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';

const Review = ({ ratingScore, title, author, date, text, isVerified }) => {
  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.ratingStats}>
        <Rating ratingScore={ratingScore} />
        <p>1 week ago</p>
      </div>
      <div className={styles.ratingAuthor}>
        <h4>Beautiful and Elegant!</h4>
        <p>Emily R</p>
      </div>
      <p className={styles.ratingText}>
        The AURELIA VISCOSE-HEMP MAXI DRESS is beautiful and elegant. The
        material is breathable and comfortable for all-day wear. My only wish is
        that it came in more colors. Other than that, it's a fantastic addition
        to my wardrobe.
      </p>

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
