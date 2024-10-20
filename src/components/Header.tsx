import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  userLevel: number;
  userPoints: number;
}

const Header: React.FC<HeaderProps> = ({ userLevel, userPoints }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-dark-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-neon-blue">LaunchPad</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/catalog" className="text-white hover:text-neon-purple transition-colors">Discover</Link>
          <Link to="/roadmap" className="text-white hover:text-neon-purple transition-colors">Roadmap</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            <span className="text-neon-pink">Lvl {userLevel}</span>
            <span className="ml-2">{userPoints} pts</span>
          </div>
          <Search className="w-5 h-5 text-white cursor-pointer" />
          <Bell className="w-5 h-5 text-white cursor-pointer" />
          <Link to="/profile/1">
            <User className="w-5 h-5 text-white" />
          </Link>
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;