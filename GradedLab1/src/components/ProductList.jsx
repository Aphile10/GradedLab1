import ProductItem from './ProductItem';

function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
