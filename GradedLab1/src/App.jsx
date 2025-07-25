import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import products from './productInfo/products';

function App(){
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
  const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
  return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Product Catalog</h1>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
