import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MessageCircle, ShoppingCart, ThumbsUp, Award } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [userRating, setUserRating] = useState(0);

  // Placeholder product data (in a real app, this would be fetched based on the id)
  const product = {
    id: parseInt(id || '1'),
    name: 'Smart Fitness Tracker',
    description: 'An advanced fitness tracker that uses AI to provide personalized workout recommendations and health insights.',
    price: 129.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://source.unsplash.com/random/800x600?fitness,tracker',
    category: 'Fitness',
    launchStatus: 'Newly Released',
    company: 'FitTech Innovations',
    founderBio: 'Jane Doe, a fitness enthusiast and tech expert, founded FitTech Innovations to bridge the gap between cutting-edge technology and personal health.',
    features: [
      'Advanced heart rate monitoring',
      'GPS tracking',
      'Sleep analysis',
      '7-day battery life',
      'Water-resistant up to 50m',
    ],
  };

  const handleRating = (rating: number) => {
    setUserRating(rating);
    // Here you would typically send this rating to your backend
    console.log(`User rated product ${id} with ${rating} stars`);
  };

  return (
    <div className="bg-dark-200 rounded-lg shadow-md p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-neon-blue">{product.name}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2 text-neon-pink">${product.price.toFixed(2)}</span>
            <span className="bg-neon-purple text-white text-xs font-semibold px-2.5 py-0.5 rounded">{product.launchStatus}</span>
          </div>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="text-white mr-2">{product.rating}</span>
            <span className="text-gray-400">({product.reviews} reviews)</span>
          </div>
          <button className="bg-neon-purple text-white px-6 py-3 rounded-lg hover:bg-neon-pink transition duration-300 flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">About the Company</h2>
        <p className="mb-4 text-gray-300">{product.company}</p>
        <h3 className="text-xl font-semibold mb-2 text-neon-pink">Founder</h3>
        <p className="text-gray-300">{product.founderBio}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Product Features</h2>
        <ul className="list-disc list-inside text-gray-300">
          {product.features.map((feature, index) => (
            <li key={index} className="mb-2 flex items-center">
              <Award className="w-5 h-5 text-neon-purple mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Rate This Product</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 cursor-pointer ${star <= userRating ? 'text-yellow-400' : 'text-gray-400'}`}
              onClick={() => handleRating(star)}
            />
          ))}
        </div>
        <p className="text-gray-300">Your rating helps other innovators!</p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Customer Reviews</h2>
        {/* Placeholder for customer reviews */}
        <div className="bg-dark-300 p-4 rounded-lg mb-4">
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-300 mb-2">"This fitness tracker has completely changed my workout routine. The AI recommendations are spot-on!"</p>
          <p className="text-gray-400 text-sm">John D. - Verified Purchaser</p>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button className="text-neon-purple hover:text-neon-pink transition-colors flex items-center">
          <MessageCircle className="w-5 h-5 mr-2" />
          Ask a Question
        </button>
        <button className="text-neon-purple hover:text-neon-pink transition-colors flex items-center">
          <ThumbsUp className="w-5 h-5 mr-2" />
          Recommend
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;