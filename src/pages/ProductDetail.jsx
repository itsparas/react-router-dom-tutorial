import { useParams, useNavigate, Link } from 'react-router-dom';

// Sample product data (same as Products page)
const allProducts = [
  { id: 1, name: 'Laptop', category: 'electronics', price: 999, description: 'Powerful laptop for work and play' },
  { id: 2, name: 'Headphones', category: 'electronics', price: 199, description: 'Wireless noise-canceling headphones' },
  { id: 3, name: 'T-Shirt', category: 'clothing', price: 29, description: 'Comfortable cotton t-shirt' },
  { id: 4, name: 'Jeans', category: 'clothing', price: 59, description: 'Classic blue jeans' },
  { id: 5, name: 'Coffee Maker', category: 'home', price: 79, description: 'Automatic drip coffee maker' },
  { id: 6, name: 'Blender', category: 'home', price: 49, description: 'High-speed blender for smoothies' },
  { id: 7, name: 'Smartphone', category: 'electronics', price: 699, description: 'Latest smartphone with great camera' },
  { id: 8, name: 'Sneakers', category: 'clothing', price: 89, description: 'Comfortable running sneakers' },
];

/**
 * ProductDetail Page
 * 
 * Demonstrates DYNAMIC ROUTES and URL PARAMS using useParams hook.
 * 
 * The route is defined as: /products/:productId
 * - :productId is a dynamic segment that matches any value
 * - useParams() returns an object with the matched params
 */
export default function ProductDetail() {
  // useParams returns the dynamic segments from the URL
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Find the product by ID
  const product = allProducts.find(p => p.id === parseInt(productId));

  // If product not found, show 404-like message
  if (!product) {
    return (
      <div>
        <h1>❌ Product Not Found</h1>
        <p>No product exists with ID: <code>{productId}</code></p>
        <p>
          This demonstrates how to handle invalid dynamic route parameters.
        </p>
        <button onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '1rem' }}>
        ← Back to Products
      </Link>
      
      <h1>📦 {product.name}</h1>
      
      {/* Show the URL params */}
      <div style={{ 
        padding: '1rem', 
        background: '#e8f4fd', 
        borderRadius: '8px',
        marginBottom: '1rem'
      }}>
        <h3>🔍 useParams() Result:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px' }}>
{`const { productId } = useParams();
// productId = "${productId}"`}
        </pre>
      </div>
      
      {/* Product Details */}
      <div style={{ 
        padding: '2rem', 
        border: '1px solid #ddd', 
        borderRadius: '8px',
        background: '#fff'
      }}>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> <span style={{ color: '#646cff', fontSize: '1.5rem' }}>${product.price}</span></p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>

      {/* Navigation to other products */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Try Other Products:</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {allProducts.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <Link key={p.id} to={`/products/${p.id}`}>
              <button>{p.name}</button>
            </Link>
          ))}
          <Link to="/products/999">
            <button style={{ background: '#dc3545', color: 'white' }}>Invalid ID (999)</button>
          </Link>
        </div>
      </div>

      {/* Code example */}
      <section style={{ marginTop: '2rem' }}>
        <h3>📝 Route Definition:</h3>
        <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`// In your router configuration:
<Route path="/products/:productId" element={<ProductDetail />} />

// In the component:
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams(); // Access the dynamic segment
  // productId contains whatever value is in the URL
}`}
        </pre>
      </section>
    </div>
  );
}
