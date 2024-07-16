import { useState, useEffect } from 'react';
import Slider from 'react-slider';
import CategoryLabel from './UI/CategoryLabel';
import Button from './UI/Button';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import styles from './Filter.module.css';

const MIN_PRICE = 0;
const MAX_PRICE = 1000;
const sizes = ['XXS', 'XS', 'S', 'M', 'L'];
const uniqueCategories = [
  ...new Set(products.map((product) => product.category)),
];

const Filter = ({
  setFilterVisibility,
  currentCategory,
  setCurrentCategory,
  filterApply,
  searchParams,
  setSearchParams,
}) => {
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const { pathname } = useLocation();

  const handleSizeChange = (e) => {
    const size = e.target.name;
    let newSizes = [...selectedSizes];

    if (e.target.checked) {
      newSizes.push(size);
    } else {
      newSizes = newSizes.filter((s) => s !== size);
    }

    setSelectedSizes(newSizes);

    if (newSizes.length > 0) {
      searchParams.set('sizes', newSizes.join(','));
    } else {
      searchParams.delete('sizes');
    }

    setSearchParams(searchParams);
  };
  const handlePriceChange = (range) => {
    setPriceRange(range);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('minPrice', range[0]);
    newParams.set('maxPrice', range[1]);
    setSearchParams(newParams);
  };

  const handleFilterClear = () => {
    setSearchParams('');
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setCurrentCategory('');
  };

  useEffect(() => {
    const sizes = searchParams.get('sizes');
    if (sizes) {
      setSelectedSizes(sizes.split(','));
    } else setSelectedSizes([]);

    const minPrice = Number(searchParams.get('minPrice'));
    const maxPrice = Number(searchParams.get('maxPrice'));
    if (minPrice && maxPrice) {
      setPriceRange([minPrice, maxPrice]);
    } else {
      setPriceRange([MIN_PRICE, MAX_PRICE]);
    }
  }, [searchParams, pathname]);
  return (
    <div className="filter-layout">
      <div className="filter-type">
        <h5>Categories</h5>
        <ul>
          <CategoryLabel
            key="All"
            id=""
            text="All"
            isChecked={currentCategory === ''}
            onChange={(e) => setCurrentCategory(e.target.id)}
          />
          {uniqueCategories.map((category) => (
            <CategoryLabel
              key={category}
              id={category}
              text={category}
              isChecked={currentCategory === category}
              onChange={(e) => setCurrentCategory(e.target.id)}
            />
          ))}
        </ul>
      </div>
      <hr />
      <div className="filter-type">
        <h5>Size</h5>
        <ul>
          {sizes.map((size, index) => (
            <label key={index}>
              <input
                className={styles.sizeCheckBox}
                type="checkbox"
                name={size}
                id={size}
                onChange={handleSizeChange}
                checked={selectedSizes.includes(size)}
              />
              {size}
            </label>
          ))}
        </ul>
      </div>
      <hr />
      <div className="filter-type">
        <h5>Price</h5>
        <Slider
          value={priceRange}
          min={MIN_PRICE}
          max={MAX_PRICE}
          onChange={handlePriceChange}
        />
        <p>
          {priceRange[0]} - {priceRange[1]} $
        </p>
      </div>
      <hr />
      <div className="filter-actions">
        <Button text="Clear All" onClick={handleFilterClear} />
        <Button
          type="primary"
          text="Apply"
          onClick={() => {
            filterApply();
            setFilterVisibility();
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
