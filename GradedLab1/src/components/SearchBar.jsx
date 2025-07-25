function SearchBar({ searchQuery, onSearchChange, selectedCategory, onCategoryChange }){
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
        <option value="Stationery">Stationery</option>
      </select>
    </div>
  );
}

export default SearchBar;