import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../Components/UI/Breadcrumbs';
import products from '../data/products';
import './ProductDisplay.css';
import Button from '../Components/UI/Button';
import Rating from '../Components/UI/Rating';
import { useEffect, useState } from 'react';
import Review from '../Components/Product/Review';
import ButtonLink from '../Components/UI/ButtonLink';
import Product from '../Components/Product/Product';
import ColorRadio from '../Components/UI/ColorRadio';
import Toggle from '../Components/UI/Toggle';
import Dropdown from '../Components/UI/Dropdown';
import ProgressBar from '../Components/UI/ProgressBar';

const getProductById = (id) =>
  products.filter((product) => product.id === Number(id));

const ProductDisplay = () => {
  const { pathname } = useLocation();
  const routes = pathname.split('/').filter(Boolean);
  const id = routes[routes.length - 1];
  const product = getProductById(id)[0];
  const { title, images, rating, colors, reviewNum, sizes, details } = product;
  const columnOneImages = images.slice(0, images.length / 2);
  const columnTwoImages = images.slice(columnOneImages.length, images.length);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedQty, setSelectedQty] = useState(1);
  const [isBuyerVerified, setIsBuyerVerified] = useState(false);
  const handleIsBuyerVerified = (check) => setIsBuyerVerified(check);

  useEffect(() => {
    setSelectedColor(colors[0]);
    setSelectedSize(sizes[0]);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className="container">
        <div className="product-details">
          <div className="product-images">
            <div className="column">
              {columnOneImages.map((image, index) => (
                <img key={index} src={image} alt="product-image" />
              ))}
            </div>
            <div className="column">
              {columnTwoImages.map((image, index) => (
                <img key={index} src={image} alt="product-image" />
              ))}
            </div>
          </div>
          <div className="product-content">
            <div className="product-info">
              <h2>{title}</h2>
              <div className="product-ratings d-flex-row">
                {<Rating ratingScore={rating} />}
                <a href="#reviews">{`[ ${reviewNum} Reviews ]`}</a>
              </div>
              <div className="product-colors">
                <h4>Color:</h4>
                <div className="color-items">
                  {colors.map((color, index) => (
                    <ColorRadio
                      key={index}
                      color={color}
                      isChecked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="product-sizes">
                <h4>Size:</h4>
                <div className="sizes">
                  {sizes.map((size) => (
                    <label className="size-item" key={size}>
                      <input
                        type="radio"
                        name="size"
                        checked={selectedSize === size}
                        onChange={() => setSelectedSize(size)}
                      />
                      <h5>{size}</h5>
                    </label>
                  ))}
                </div>
              </div>
              <details className="whats-my-size">
                <summary>
                  <p style={{ textDecoration: 'underline' }}>What's my size?</p>
                </summary>
                <div className="whats-size">
                  <p>
                    Before you buy, it's important to select the right size for
                    a comfortable and proper fit. Check our size guide to make
                    sure you choose correctly:
                  </p>
                  <ul className="whats-size-list">
                    <li>
                      <strong>Personal Measurements:</strong> Start by taking
                      your bust, waist, and hip measurements. Use a flexible
                      tape measure for the most accurate results.
                    </li>
                    <li>
                      <strong>Size Chart:</strong> Check our size chart to find
                      the correct size based on your measurements. Choose the
                      size that best matches your measurements.
                    </li>
                    <li>
                      <strong>Selection Tips:</strong> If your measurements fall
                      between two sizes, we recommend choosing the larger size
                      for a more comfortable fit.
                    </li>
                  </ul>
                  <p>
                    For more details and personalized advice, feel free to
                    contact us. We want to ensure every purchase fits perfectly!
                  </p>
                </div>
              </details>
            </div>
            <div className="product-cta">
              <Dropdown
                defaultText={selectedQty}
                optionNames={'qty'}
                options={[1, 2, 3, 4, 5, 6]}
                isCTA={true}
                onChange={(index) => setSelectedQty(index + 1)}
              />

              <Button category="primary" text="Add to Bag" />
            </div>
            <section className="product-info">
              <div className="details-item">
                <h4>Description:</h4>
                <p>{details.description}</p>
              </div>
              <div className="details-item">
                <h4>Trapez Fit:</h4>
                <p>{details.trapezFit}</p>
              </div>
              <div className="details-item">
                <h4>Fabric & Care:</h4>
                <p>{details.fabricAndCare}</p>
              </div>
            </section>
          </div>
        </div>
        <section className="product-reviews" id="reviews">
          <div className="rating-data">
            <div className="rating-score">
              <div className="rating-score-header">
                <h3>Rating & Rewiews</h3>
                <div className="product-ratings d-flex-row">
                  {<Rating ratingScore={rating} />}
                  <a>{`[ ${reviewNum} Reviews ]`}</a>
                </div>
              </div>
              <div className="rating-score-numbers">
                <div className="rating-score-item">
                  <p>5 Stars</p>
                  <ProgressBar value={65} />
                  <p>82%</p>
                </div>
                <div className="rating-score-item">
                  <p>4 Stars</p>
                  <ProgressBar value={22} />
                  <p>82%</p>
                </div>
                <div className="rating-score-item">
                  <p>3 Stars</p>
                  <ProgressBar value={8} />
                  <p>82%</p>
                </div>
                <div className="rating-score-item">
                  <p>2 Stars</p>
                  <ProgressBar value={2} />
                  <p>82%</p>
                </div>
                <div className="rating-score-item">
                  <p>1 Stars</p>
                  <ProgressBar value={12} />
                  <p>82%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ratings-wrapper">
            <div className="ratings-header">
              <div className="ratings-item">
                <h3>Filter Reviews by</h3>
                <div className="rating-conditions">
                  <Dropdown
                    options={['1star', '2stars', '3stars', '4stars', '5stars']}
                    defaultText="Stars"
                    optionNames="rating"
                    onChange={() => {}}
                  />
                  <div className="filter-type verified-buyer">
                    <p>Verified Buyer</p>
                    <Toggle
                      isCheck={isBuyerVerified}
                      handleIsCheck={handleIsBuyerVerified}
                    />
                  </div>
                </div>
              </div>
              <div className="ratings-item">
                <h3 style={{ textAlign: 'right' }}>Sort By</h3>
                <Dropdown
                  options={['Most Helpful', 'Newest', 'Oldest']}
                  optionNames={'sortRating'}
                  defaultText="Most Helpful"
                  onChange={() => {}}
                >
                  <button>Most Helpful</button>
                  <button>Newest</button>
                  <button>Oldest</button>
                </Dropdown>
              </div>
            </div>
            <div className="rating-list">
              <Review ratingScore={5} isVerified={true} />
              <hr />
              <Review ratingScore={5} isVerified={true} />
              <hr />
              <Review ratingScore={5} isVerified={true} />
              <hr />
            </div>
            <ButtonLink text="View More" className="rating-list-viewMore" />
          </div>
        </section>

        <section className="most-wanted">
          <div className="most-wanted-header">
            <h2>Complete the look</h2>
            <ButtonLink text="Discover Full Collection" link="/shop" />
          </div>
          <div className="most-wanted-products row-layout">
            {products.slice(0, 4).map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDisplay;
