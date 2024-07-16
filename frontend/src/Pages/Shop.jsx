import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as FilterIcon } from '../Assets/icons/filter.svg';
import Breadcrumbs from '../Components/UI/Breadcrumbs';
import products from '../data/products';
import Product from '../Components/Product/Product';
import Button from '../Components/UI/Button';
import Dropdown from '../Components/UI/Dropdown';
import Filter from '../Components/Filter';
import './Shop.css';
import {
  useFetcher,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import queryString from 'query-string';
const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const [originalProducts] = useState([...products]);
  const [appliedFilter, setAppliedFilter] = useState([...products]);
  const [filterIsVisible, setFilterIsVisible] = useState(false);
  const { pathname } = useLocation();
  const [currentCategory, setCurrentCategory] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const handleSearchParamsChange = (newParams) => setSearchParams(newParams);

  const handleCategoryChange = (category) => setCurrentCategory(category);

  const handleSortChange = (option) => {
    const sortedProducts = [...filteredProducts];

    if (option === 'title') {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleFilterVisibility = () => {
    setFilterIsVisible(!filterIsVisible);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleFilterApply = () => {
    const newCategory = currentCategory;
    applyFilters(newCategory);
    navigate(`/shop/${newCategory}?${searchParams}`);
  };
  const getCategoryFromUrl = () => {
    const categoryWithParams = pathname.split('/shop/')[1] || '';
    const [category] = categoryWithParams.split('&');
    return category || '';
  };
  const applyFilters = (newCategory = currentCategory, term = searchTerm) => {
    const { minPrice, maxPrice, sizes } = queryString.parse(search);
    let filtered = [...originalProducts]; // Use the original list here

    const category = newCategory || getCategoryFromUrl();

    if (newCategory !== currentCategory) setCurrentCategory(newCategory);

    if (category && category !== '') {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(
        (product) =>
          product.price >= Number(minPrice) && product.price <= Number(maxPrice)
      );
    }

    if (sizes && sizes.length > 0) {
      const sizeArr = sizes.split(',');
      filtered = filtered.filter((product) =>
        sizeArr.every((size) => product.sizes.includes(size))
      );
    }

    if (term && term !== '') {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };
  useEffect(() => {
    applyFilters(getCategoryFromUrl());
  }, []);

  useEffect(() => {
    applyFilters(getCategoryFromUrl());
  }, [pathname]);

  useEffect(() => {
    applyFilters(currentCategory, searchTerm);
  }, [searchTerm]);

  // useEffect(() => {
  //   let currProducts = [...products];
  //   if (currentCategory) {
  //     currProducts = currProducts.filter((product) =>
  //       product.category.toLowerCase().includes(currentCategory.toLowerCase())
  //     );
  //   }
  //   setAppliedFilter(currProducts);
  // }, [currentCategory]);

  // useEffect(() => {
  //   let currProducts = [...appliedFilter];

  //   if (searchTerm.length !== 0) {
  //     currProducts = currProducts.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }
  //   setFilteredProducts(currProducts);
  // }, [searchTerm]);

  // useEffect(() => {
  //   const categoryWithParams = pathname.split('/shop/')[1] || '';
  //   const [category] = categoryWithParams.split('&');

  //   let currProducts = [...products];

  //   if (category) {
  //     currProducts = currProducts.filter((product) =>
  //       product.category
  //         .toLocaleLowerCase()
  //         .includes(category.toLocaleLowerCase())
  //     );
  //   }
  //   setFilteredProducts(currProducts);
  //   console.log('shop page load', currProducts);
  //   console.log('shop page load', filteredProducts);
  // }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="shop-actions">
        <div className="main-actions">
          <label className="shop-search" htmlFor="">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Key word"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </label>
          <div className="filter">
            <Button onClick={handleFilterVisibility}>
              <div className="filterBtn">
                <FilterIcon />
                <p>Filters</p>
              </div>
            </Button>
            {filterIsVisible && (
              <Filter
                currentCategory={currentCategory}
                setCurrentCategory={handleCategoryChange}
                setFilteredProducts={(products) =>
                  setFilteredProducts(products)
                }
                setFilterVisibility={handleFilterVisibility}
                filterApply={handleFilterApply}
                searchParams={searchParams}
                setSearchParams={handleSearchParamsChange}
              />
            )}
          </div>
        </div>
        <Dropdown>
          <button onClick={() => handleSortChange('title')}>Title</button>
          <button onClick={() => handleSortChange('price-low')}>
            Lowest Price
          </button>
          <button onClick={() => handleSortChange('price-high')}>
            Highest Price
          </button>
        </Dropdown>
      </div>
      <div className="shop-products">
        <div className="shop-products row-layout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))
          ) : (
            <h4>No products found by your search criteria</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
