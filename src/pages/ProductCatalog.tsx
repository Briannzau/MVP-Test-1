import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Zap } from 'lucide-react';

const categories = ['All', 'Wellness', 'Fitness', 'Design', 'Finance', 'AI', 'IoT', 'VR/AR'];

const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Placeholder product data
  const products = [
    { id: 1, name: 'Smart Fitness Tracker', category: 'Fitness', price: 129.99, image: 'https://source.unsplash.com/random/400x300?fitness', rating: 4.5 },
    { id: 2, name: 'AI-Powered Financial Advisor', category: 'Finance', price: 49.99, image: 'https://source.unsplash.com/random/400x300?finance', rating: 4.2 },
    { id: 3, name: 'Ergonomic Standing Desk', category: 'Design', price: 399.99, image: 'https://source.unsplash.com/random/400x300?desk', rating: 4.7 },
    { id: 4, name: 'Meditation Headband', category: 'Wellness', price: 199.99, image: 'https://source.unsplash.com/random/400x300?meditation', rating: 4.0 },
    { id: 5, name: 'Smart Home Energy Monitor', category: 'IoT', price: 149.99, image: 'https://source.unsplash.com/random/400x300?smarthome', rating: 4.3 },
    { id: 6, name: 'Personalized Nutrition App', category: 'AI', price: 9.99, image: 'https://source.unsplash.com/random/400x300?nutrition', rating: 4.1 },
    { id: 7, name: 'Virtual Reality Fitness Game', category: 'VR/AR', price: 59.99, image: 'https://source.unsplash.com/random/400x300?vr', rating: 4.6 },
    { id: 8, name: 'Cryptocurrency Portfolio Manager', category: 'Finance', price: 29.99, image: 'https://source.unsplash.com/random/400x300?crypto', rating: 4.4 },
    { id: 9, name: 'Smart Water Bottle', category: 'IoT', price: 39.99, image: 'https://source.unsplash.com/random/400x300?water', rating: 4.2 },
    { id: 10, name: 'AI-Powered Design Assistant', category: 'AI', price: 79.99, image: 'https://source.unsplash.com/random/400x300?design', rating: 4.8 },
  ];

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-neon-blue">Discover Innovative Products</h1>
      
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-neon-purple" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-dark-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-neon-blue">{product.name}</h2>
              <p className="text-gray-400 mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <p className="text-neon-pink font-bold">${product.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400">{product.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;