import CartItem from '../../Components/UI/CartItem';
import cartItems from '../../data/cartItems';
import products from '../../data/products';

const Overview = () => {
  const getProductById = (id) => {
    return products.filter((product) => product.id === id);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => {
        console.log(item);
        return <CartItem key={item.productId} {...item} />;
      })}
    </div>
  );
};

export default Overview;
