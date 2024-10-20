import React from 'react';
import { Rocket, Zap, Target, Award } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: 'Q3 2024: Enhanced Analytics',
      description: 'Provide startups with advanced analytics tools to track product performance, user engagement, and sales metrics.',
      features: [
        'Real-time dashboard for startups',
        'Detailed user demographics and behavior analysis',
        'Sales funnel visualization',
        'Competitor benchmarking'
      ],
      icon: <Zap className="w-12 h-12 text-neon-purple mb-4" />
    },
    {
      title: 'Q4 2024: Premium Memberships',
      description: 'Introduce tiered membership plans for both startups and consumers, offering exclusive benefits and features.',
      features: [
        'Priority product placement for startups',
        'Early access to new products for consumers',
        'Dedicated support channels',
        'Exclusive webinars and events'
      ],
      icon: <Award className="w-12 h-12 text-neon-purple mb-4" />
    },
    {
      title: 'Q1 2025: Accelerator Integration',
      description: 'Partner with startup accelerators to provide a seamless pipeline for innovative products and additional resources for startups.',
      features: [
        'Direct application process to partnered accelerators',
        'Mentorship program connecting startups with industry experts',
        'Co-branded challenges and hackathons',
        'Investor matchmaking events'
      ],
      icon: <Rocket className="w-12 h-12 text-neon-purple mb-4" />
    },
    {
      title: 'Q2 2025: AI-Powered Recommendations',
      description: 'Implement advanced AI algorithms to provide personalized product recommendations and insights for both startups and consumers.',
      features: [
        'Predictive trend analysis for startups',
        'Personalized product discovery for consumers',
        'AI-assisted product development suggestions',
        'Smart pricing recommendations based on market data'
      ],
      icon: <Target className="w-12 h-12 text-neon-purple mb-4" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-neon-blue">LaunchPad Roadmap</h1>
      <p className="text-gray-300 mb-8">
        Our vision for the future of LaunchPad involves continuous innovation and expansion. 
        Here's a glimpse of what's on the horizon:
      </p>
      <div className="space-y-12">
        {roadmapItems.map((item, index) => (
          <div key={index} className="bg-dark-200 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-4">
              {item.icon}
              <h2 className="text-2xl font-semibold text-neon-pink">{item.title}</h2>
            </div>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <h3 className="text-lg font-semibold mb-2 text-neon-blue">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-300">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-300 mb-4">
          We're constantly evolving based on user feedback and emerging tech trends. 
          Stay tuned for more groundbreaking updates!
        </p>
        <button className="bg-neon-purple text-white px-6 py-3 rounded-lg hover:bg-neon-pink transition duration-300">
          Subscribe to Roadmap Updates
        </button>
      </div>
    </div>
  );
};

export default Roadmap;