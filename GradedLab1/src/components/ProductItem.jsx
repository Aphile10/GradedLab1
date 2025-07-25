/*function ProductItem({ product }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '8px'
    }}>
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> R{product.price}</p>
      <p><strong>Status:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}

export default ProductItem;*/

function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>
    </li>
  );
}

export default ProductItem;