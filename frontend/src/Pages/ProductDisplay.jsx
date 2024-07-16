import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../Components/UI/Breadcrumbs';
import products from '../data/products';
import './ProductDisplay.css';
import Button from '../Components/UI/Button';
import Rating from '../Components/UI/Rating';
import { useEffect, useState } from 'react';
import Review from '../Components/Review';
import ButtonLink from '../Components/UI/ButtonLink';
import Product from '../Components/Product/Product';
import ColorRadio from '../Components/UI/ColorRadio';

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
                  <a>What's my size?</a>
                </summary>
                <div>measure data</div>
              </details>
            </div>
            <div className="product-cta">
              <select id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
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
                  <a href="#reviews">{`[ ${reviewNum} Reviews ]`}</a>
                </div>
              </div>
              <div className="rating-score-numbers">zz</div>
            </div>
          </div>
          <div className="ratings-wrapper">
            <div className="ratings-header">
              <div className="ratings-filter">
                <h3>Filter Reviews by</h3>
                <div className="filter-type">
                  <details>
                    <summary>Stars</summary>
                  </details>
                </div>
              </div>
              <div className="ratings-sort">
                <h3>Sort By</h3>
                <div className="filter-type">
                  <details>
                    <summary>Sort By</summary>
                    <button>Most Helpful</button>
                    <button>Newest</button>
                    <button>Oldest</button>
                  </details>
                </div>
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
          <div className="container">
            <div className="most-wanted-header">
              <h2>Complete the look</h2>
              <ButtonLink text="Discover Full Collection" link="shop" />
            </div>
            <div className="most-wanted-products row-layout">
              {products.slice(0, 4).map((product) => (
                <Product key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDisplay;
