import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Zap, Target } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-neon-blue">Ignite Your Tech Journey</h1>
        <p className="text-xl mb-8 text-gray-300">Be the first to discover and shape the future of technology.</p>
        <Link to="/catalog" className="bg-neon-purple text-white px-6 py-3 rounded-lg hover:bg-neon-pink transition duration-300 inline-flex items-center">
          Explore Innovations <Rocket className="ml-2 w-5 h-5" />
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-neon-pink">Featured Launches</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-dark-200 rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300">
              <img src={`https://source.unsplash.com/random/400x300?tech,${i}`} alt="Product" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-neon-blue">Innovative Product {i}</h3>
              <p className="text-sm text-gray-400 mb-4">A revolutionary product that will change the way you interact with technology.</p>
              <Link to={`/product/${i}`} className="text-neon-purple hover:text-neon-pink transition-colors flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark-300 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-neon-blue">Why LaunchPad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <Zap className="w-12 h-12 text-neon-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-neon-pink">Discover Innovation</h3>
            <p className="text-gray-300">Be the first to know about cutting-edge products across various tech categories.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Rocket className="w-12 h-12 text-neon-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-neon-pink">Support Startups</h3>
            <p className="text-gray-300">Help bring revolutionary ideas to life by becoming an early adopter.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="w-12 h-12 text-neon-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-neon-pink">Shape the Future</h3>
            <p className="text-gray-300">Provide valuable feedback to influence the development of tomorrow's tech.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;