import { Link, useSearchParams } from 'react-router-dom';

// Sample product data
const allProducts = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 999 },
  { id: 2, name: 'Headphones', category: 'electronics', price: 199 },
  { id: 3, name: 'T-Shirt', category: 'clothing', price: 29 },
  { id: 4, name: 'Jeans', category: 'clothing', price: 59 },
  { id: 5, name: 'Coffee Maker', category: 'home', price: 79 },
  { id: 6, name: 'Blender', category: 'home', price: 49 },
  { id: 7, name: 'Smartphone', category: 'electronics', price: 699 },
  { id: 8, name: 'Sneakers', category: 'clothing', price: 89 },
];

const categories = ['all', 'electronics', 'clothing', 'home'];

/**
 * Products Page
 * 
 * Demonstrates SEARCH PARAMS as application state using useSearchParams hook.
 * 
 * Search params allow you to:
 * - Store UI state in the URL (filters, pagination, sorting)
 * - Share links with specific state
 * - Use back/forward buttons to navigate through states
 */
export default function Products() {
  // useSearchParams works similar to useState but syncs with URL
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read values from search params
  const categoryFilter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'name';
  const searchQuery = searchParams.get('q') || '';

  // Filter and sort products
  let filteredProducts = allProducts.filter(product => {
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  // Update search params
  const handleCategoryChange = (category) => {
    setSearchParams(prev => {
      if (category === 'all') {
        prev.delete('category');
      } else {
        prev.set('category', category);
      }
      return prev;
    });
  };

  const handleSortChange = (sort) => {
    setSearchParams(prev => {
      prev.set('sort', sort);
      return prev;
    });
  };

  const handleSearchChange = (e) => {
    setSearchParams(prev => {
      if (e.target.value) {
        prev.set('q', e.target.value);
      } else {
        prev.delete('q');
      }
      return prev;
    });
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>🛍️ Products</h1>
      <p>This page demonstrates <strong>Search Params as Application State</strong>.</p>
      <p>Notice how the URL changes as you filter - you can share this URL or use back/forward!</p>

      {/* Filters */}
      <section style={{ 
        display: 'flex', 
        gap: '1rem', 
        flexWrap: 'wrap', 
        padding: '1rem', 
        background: '#f5f5f5', 
        borderRadius: '8px',
        marginTop: '1rem'
      }}>
        {/* Search */}
        <div>
          <label>
            Search:{' '}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              style={{ padding: '0.5rem' }}
            />
          </label>
        </div>

        {/* Category Filter */}
        <div>
          <label>Category: </label>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              style={{
                marginLeft: '0.5rem',
                padding: '0.5rem 1rem',
                background: categoryFilter === cat ? '#646cff' : '#fff',
                color: categoryFilter === cat ? '#fff' : '#213547',
                border: '1px solid #646cff',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div>
          <label>
            Sort:{' '}
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="name">Name</option>
              <option value="price">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </label>
        </div>

        <button onClick={clearFilters}>Clear All Filters</button>
      </section>

      {/* Current URL display */}
      <div style={{ 
        marginTop: '1rem', 
        padding: '0.5rem', 
        background: '#1e1e1e', 
        color: '#4ec9b0',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }}>
        Current URL: {window.location.pathname}{window.location.search}
      </div>

      {/* Product Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '1rem',
        marginTop: '1rem'
      }}>
        {filteredProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              background: '#fff',
              transition: 'box-shadow 0.2s'
            }}>
              <h3>{product.name}</h3>
              <p style={{ color: '#666' }}>{product.category}</p>
              <p style={{ color: '#646cff', fontWeight: 'bold' }}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
}
