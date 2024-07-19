import Product from '../../Components/Product/Product';
import ButtonLink from '../../Components/UI/ButtonLink';
import products from '../../data/products';

import './Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation-page">
      <div className="confirmation-data container d-flex-col gap-bb">
        <div className="d-flex-col gap-m">
          <h2>Thank You For Your Order!</h2>
          <p>We will send you all details in your e-mail oliviaens@gmail.com</p>
        </div>
        <div className="d-flex-col gap-m">
          <h3>Your Order:</h3>
          <div className="d-flex-col gap-8px">
            <h5>
              ORDER NUMBER: <b>XSSMNDLF202515</b>
            </h5>
            <h5>
              ITEMS: <b>3</b>
            </h5>
            <h5>
              DELIVERY DATE: <b>30.07.2024</b>
            </h5>
          </div>
        </div>
        <div className="confirmation-recommendations gap-10px">
          {products.slice(0, 3).map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              images={product.images}
              title={product.title}
              price={product.price}
            />
          ))}
          <ButtonLink text="View More" link={'/shop'} />
        </div>
      </div>
      <img
        className="confirmation-bg"
        src="https://i.ibb.co/vjQN8Yg/confirmation-Bg.jpg"
        alt="confirmation-Bg"
      />
    </div>
  );
};

export default Confirmation;
