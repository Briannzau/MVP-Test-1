import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { User, Settings, ShoppingBag, MessageSquare, Award, Zap } from 'lucide-react';

interface UserProfileProps {
  userLevel: number;
  userPoints: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userLevel, userPoints }) => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('profile');

  // Placeholder user data (in a real app, this would be fetched based on the id)
  const user = {
    id: parseInt(id || '1'),
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joinDate: 'January 2024',
    interests: ['Fitness', 'Wellness', 'Smart Home', 'AI'],
    purchaseHistory: [
      { id: 1, name: 'Smart Fitness Tracker', date: '2024-02-15', price: 129.99 },
      { id: 2, name: 'AI-Powered Financial Advisor', date: '2024-01-20', price: 49.99 },
    ],
    reviews: [
      { id: 1, productName: 'Smart Fitness Tracker', rating: 5, comment: 'Excellent product! Really helped me stay on track with my fitness goals.' },
      { id: 2, productName: 'AI-Powered Financial Advisor', rating: 4, comment: 'Very useful app, but there\'s room for improvement in the user interface.' },
    ],
    badges: ['Early Adopter', 'Top Reviewer', 'Innovation Champion'],
  };

  return (
    <div className="bg-dark-200 rounded-lg shadow-md p-8">
      <div className="flex items-center mb-8">
        <User className="w-16 h-16 text-neon-blue mr-4" />
        <div>
          <h1 className="text-2xl font-bold text-neon-pink">{user.name}</h1>
          <p className="text-gray-400">Innovator since {user.joinDate}</p>
        </div>
      </div>

      <div className="bg-dark-300 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2 text-neon-blue">Innovator Stats</h2>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-neon-purple">Level {userLevel}</p>
            <p className="text-gray-400">{userPoints} Innovation Points</p>
          </div>
          <div className="flex space-x-2">
            {user.badges.map((badge, index) => (
              <span key={index} className="bg-neon-pink text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex mb-8">
        <button
          className={`mr-4 pb-2 ${activeTab === 'profile' ? 'border-b-2 border-neon-blue text-neon-blue' : 'text-gray-400'}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'purchases' ? 'border-b-2 border-neon-blue text-neon-blue' : 'text-gray-400'}`}
          onClick={() => setActiveTab('purchases')}
        >
          Purchase History
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-neon-blue text-neon-blue' : 'text-gray-400'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {activeTab === 'profile' && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Profile Information</h2>
          <p className="text-gray-300"><strong>Email:</strong> {user.email}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-neon-pink">Interests</h3>
          <div className="flex flex-wrap">
            {user.interests.map((interest, index) => (
              <span key={index} className="bg-dark-400 text-neon-purple px-3 py-1 rounded-full text-sm mr-2 mb-2">{interest}</span>
            ))}
          </div>
          <button className="mt-4 flex items-center text-neon-blue hover:text-neon-purple transition-colors">
            <Settings className="w-5 h-5 mr-2" />
            Edit Profile
          </button>
        </div>
      )}

      {activeTab === 'purchases' && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Purchase History</h2>
          {user.purchaseHistory.map((purchase) => (
            <div key={purchase.id} className="border-b border-dark-400 py-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-neon-pink">{purchase.name}</h3>
                <p className="text-gray-400 text-sm">{purchase.date}</p>
              </div>
              <p className="font-semibold text-neon-blue">${purchase.price.toFixed(2)}</p>
            </div>
          ))}
          <button className="mt-4 flex items-center text-neon-blue hover:text-neon-purpletransition-colors">
            <ShoppingBag className="w-5 h-5 mr-2" />
            View All Purchases
          </button>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Your Reviews</h2>
          {user.reviews.map((review) => (
            <div key={review.id} className="border-b border-dark-400 py-4">
              <h3 className="font-semibold text-neon-pink">{review.productName}</h3>
              <div className="flex items-center my-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
          <button className="mt-4 flex items-center text-neon-blue hover:text-neon-purple transition-colors">
            <MessageSquare className="w-5 h-5 mr-2" />
            Write a New Review
          </button>
        </div>
      )}

      <div className="mt-8 bg-dark-300 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-neon-blue">Innovation Challenges</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Award className="w-6 h-6 text-neon-purple mr-2" />
              <span className="text-gray-300">Review 5 new products</span>
            </div>
            <span className="text-neon-pink">3/5</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-neon-purple mr-2" />
              <span className="text-gray-300">Reach Innovator Level 10</span>
            </div>
            <span className="text-neon-pink">Level {userLevel}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;