import Product from '../../Components/Product/Product';
import styles from './RenderProducts.module.css';

const RenderProducts = ({ products }) => {
  const filteredProducts = [...products];

  const renderProductRow = (productSlice) => (
    <div className={styles.rowLayout}>
      {productSlice.map((p, index) => (
        <Product
          key={p.id}
          id={p.id}
          category={p.category}
          images={p.images}
          title={p.title}
          price={p.price}
          className={styles.product}
        />
      ))}
    </div>
  );

  const renderProductGrid = (productSlice) => (
    <div className={styles.gridLayout}>
      {productSlice.slice(0, 2).map((p) => (
        <Product
          key={p.id}
          id={p.id}
          category={p.category}
          images={p.images}
          title={p.title}
          price={p.price}
          className={styles.product}
        />
      ))}
      <div className={styles.gridEl3}>
        <Product
          key={productSlice[2].id}
          id={productSlice[2].id}
          category={productSlice[2].category}
          images={productSlice[2].images}
          title={productSlice[2].title}
          price={productSlice[2].price}
        />
      </div>
      {productSlice.slice(3).map((p) => (
        <Product
          key={p.id}
          id={p.id}
          category={p.category}
          images={p.images}
          title={p.title}
          price={p.price}
          className={styles.product}
        />
      ))}
    </div>
  );

  const getWrappedProducts = () => {
    let wrappedProducts = [];
    let startIdx = 0;

    while (startIdx < filteredProducts.length) {
      let endIdx = startIdx + 4;
      if (endIdx <= filteredProducts.length) {
        wrappedProducts.push(
          renderProductRow(filteredProducts.slice(startIdx, endIdx))
        );
        startIdx = endIdx;
      } else {
        wrappedProducts.push(
          renderProductRow(filteredProducts.slice(startIdx))
        );
        break;
      }

      endIdx = startIdx + 5;
      if (endIdx <= filteredProducts.length) {
        wrappedProducts.push(
          renderProductGrid(filteredProducts.slice(startIdx, endIdx))
        );
        startIdx = endIdx;
      } else if (startIdx < filteredProducts.length) {
        wrappedProducts.push(
          renderProductRow(filteredProducts.slice(startIdx))
        );
        break;
      }
    }

    return wrappedProducts;
  };

  return (
    <div className="d-flex-col gap-bb">
      {filteredProducts.length > 0 ? (
        getWrappedProducts()
      ) : (
        <h4>No products found by your search criteria</h4>
      )}
    </div>
  );
};

export default RenderProducts;
