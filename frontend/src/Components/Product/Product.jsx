import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ id, category, images, title, price }) => {
  return (
    <Link to={`/shop/${category}/${id}`} className={styles.productCard}>
      <img
        src={images[0]}
        alt="product-image"
        className={styles.productCardImage}
      />
      <div className={styles.productCardContent}>
        <h5 className={styles.productCardTitle}>{title}</h5>
        <p className={styles.productCardPrice}>{price} $</p>
      </div>
    </Link>
  );
};

export default Product;
