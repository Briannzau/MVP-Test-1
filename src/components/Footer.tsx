import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-300 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-blue">LaunchPad</h3>
            <p className="text-sm">Connecting innovative startups with early adopters and tech enthusiasts.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-purple">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-neon-pink transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="text-sm hover:text-neon-pink transition-colors">Discover</Link></li>
              <li><Link to="/onboarding" className="text-sm hover:text-neon-pink transition-colors">Join Us</Link></li>
              <li><Link to="/roadmap" className="text-sm hover:text-neon-pink transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-pink">Contact</h3>
            <p className="text-sm">Email: info@launchpad.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2024 LaunchPad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;