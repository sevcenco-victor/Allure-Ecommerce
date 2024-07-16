import Hero from '../Components/Hero';
import ButtonLink from '../Components/UI/ButtonLink';
import './Home.css';
import products from '../data/products';
import Product from '../Components/Product/Product';
import Button from '../Components/UI/Button';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigator = useNavigate();

  return (
    <div>
      <Hero />
      <section className="most-wanted">
        <div className="container">
          <div className="most-wanted-header">
            <h2>Most Wanted</h2>
            <ButtonLink
              text="Discover Full Collection"
              link="shop/most-wanted"
            />
          </div>
          <div className="most-wanted-products row-layout">
            {products.slice(0, 4).map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      <section className="story">
        <div className="story-layout container">
          <div className="story-content">
            <h2>The Allure story</h2>
            <p>
              Founded in Spain in 1972, Allure began as a small boutique
              dedicated to bringing European elegance and sophistication to
              women's fashion. With a focus on quality craftsmanship and
              timeless designs, we've grown into a renowned brand known for our
              commitment to luxury and style. Explore our journey of creating
              exquisite pieces that embody the allure of modern femininity.
            </p>
            <Button
              type="secondary"
              text="Explore our Gallery"
              onClick={() => navigator('shop')}
            />
          </div>
          <div className="story-images">
            <div className="main-image">
              <img
                className="image img1"
                src="https://i.ibb.co/yfmFK9R/image.jpg"
                alt="girl1"
              />
              <img
                className="image img2"
                src="https://i.ibb.co/PDQyNWL/image.jpg"
                alt="girl2"
              />
              <img
                className="image img3"
                src="https://i.ibb.co/p0xYPzD/image.jpg"
                alt="girl3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="shop-category">
        <div className="container">
          <div className="category-header">
            <h2>Shop by Category</h2>
            <ButtonLink
              text="Discover All Categories"
              color="black"
              link="shop"
            />
          </div>
          <div className="category-types">
            <div className="categ1">
              <div className="categ-content">
                <h3>Suits</h3>
                <p>
                  Discover our stylish suits for every occasion. Perfect fit,
                  elegant design, effortless sophistication.
                </p>
                <Link to="/shop/Suits">
                  <Button
                    category="secondary"
                    color="white"
                    text="Discover the Category"
                  />
                </Link>
              </div>
            </div>
            <div className="categ2">
              <div className="categ-content">
                <h3>Heels</h3>
                <p>
                  Elevate your style with our collection of heels. Perfect for
                  any occasion, designed for elegance and comfort.
                </p>
                <Link to="/shop/Heels">
                  <Button
                    type="secondary"
                    color="white"
                    text="Discover the Category"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="get-in-touch">
        <div className="get-in-touch-layout container">
          <div className="get-in-touch-header">
            <h2>Shop</h2>
            <p>Shop our cothing store every day</p>
          </div>
          <img
            className="get-in-touch-image"
            src="https://i.ibb.co/XFhYTs9/get-in-touch.jpg"
            alt="get-in-touch"
          />
          <div className="get-in-touch-details">
            <div className="detail-links">
              <a href="https://maps.app.goo.gl/Z6mQhBA6Mxi2YRaD6">
                Allure Boutique Calle del Encanto 25, Barcelona, Spain
              </a>
              <a href="tel:34 91 234 5678">+34 91 234 5678</a>
              <a href="mailto:info@allureboutique.es">info@allureboutique.es</a>
            </div>
            <ButtonLink text="Get in Touch" color="black" link="get-in-touch" />
          </div>
        </div>
      </section>
      <section className="qoute">
        <div className="container">
          <div className="qoute-content">
            <Logo className="qoute-logo" />
            <p className="qoute-text">
              is your Luxorious Threads tailored for Feminine Elegance
            </p>
            <img
              className="img1"
              src="https://i.ibb.co/xLDkkGT/qoute-Img1.jpg"
              alt="qoute-Img1"
            />
            <img
              className="img2"
              src="https://i.ibb.co/yfmFK9R/image.jpg"
              alt="qoute-Img2"
            />
            <img
              className="img3"
              src="https://i.ibb.co/vQRgkSm/qoute-Img3.jpg"
              alt="qoute-Img3"
            />
          </div>
          <p>Experince the artistry of every stitch.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
