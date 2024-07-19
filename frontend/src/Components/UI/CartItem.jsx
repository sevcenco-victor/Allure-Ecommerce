import styles from './CartItem.module.css';
import ColorRadio from './ColorRadio';
import Counter from './Counter';
import products from '../../data/products';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ productId, qty, color, size }) => {
  const [counter, setCounter] = useState(qty);

  const product = products.find((prod) => prod.id === productId);

  return (
    <div className={styles.cartItem}>
      <Link
        to={`/shop/${product.category}/${product.id}`}
        className={styles.itemImg}
      >
        <img
          // className={styles.itemImg}
          src={product.images[0]}
          alt="productImg"
        />
      </Link>
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <h3>{product.title}</h3>
          <Counter
            counter={counter}
            setCounter={(score) => setCounter(score)}
          />
        </div>
        <div className={styles.itemFooter}>
          <div className={styles.itemDetails}>
            <p>
              Color: <ColorRadio color={product.colors[color]} />
            </p>
            <p>Size: {product.sizes[size]}</p>
          </div>
          <h4 className={styles.itemPrice}>${product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
