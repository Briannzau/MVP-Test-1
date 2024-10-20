import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetails from './pages/ProductDetails';
import UserProfile from './pages/UserProfile';
import Onboarding from './pages/Onboarding';
import Roadmap from './pages/Roadmap';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [userLevel, setUserLevel] = useState(1);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    // Simulating user activity
    const interval = setInterval(() => {
      setUserPoints(prevPoints => prevPoints + 10);
    }, 60000); // Increase points every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Level up logic
    if (userPoints >= userLevel * 100) {
      setUserLevel(prevLevel => prevLevel + 1);
    }
  }, [userPoints, userLevel]);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-dark-100 text-white">
          <Header userLevel={userLevel} userPoints={userPoints} />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<ProductCatalog />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/profile/:id" element={<UserProfile userLevel={userLevel} userPoints={userPoints} />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;