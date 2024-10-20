import React, { useState } from 'react';
import { ArrowRight, Rocket, Zap, Target } from 'lucide-react';

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<'startup' | 'consumer' | null>(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-neon-blue">Welcome to LaunchPad!</h2>
            <p className="mb-8 text-gray-300">Are you joining us as an innovator or a tech enthusiast?</p>
            <div className="flex justify-center space-x-4">
              <button
                className={`px-6 py-3 rounded-lg transition duration-300 ${userType === 'startup' ? 'bg-neon-purple text-white' : 'bg-dark-300 text-gray-300'}`}
                onClick={() => setUserType('startup')}
              >
                I'm an Innovator
              </button>
              <button
                className={`px-6 py-3 rounded-lg transition duration-300 ${userType === 'consumer' ? 'bg-neon-purple text-white' : 'bg-dark-300 text-gray-300'}`}
                onClick={() => setUserType('consumer')}
              >
                I'm a Tech Enthusiast
              </button>
            </div>
          </div>
        );
      case 2:
        return userType === 'startup' ? <StartupForm /> : <ConsumerForm />;
      case 3:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6 text-neon-blue">You're all set!</h2>
            <p className="mb-8 text-gray-300">Welcome to LaunchPad. Get ready to shape the future of tech!</p>
            <button className="bg-neon-purple text-white px-6 py-3 rounded-lg hover:bg-neon-pink transition duration-300 flex items-center mx-auto">
              Start Your Journey <Rocket className="ml-2 w-5 h-5" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-dark-200 rounded-lg shadow-md p-8">
        {renderStep()}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              className="text-neon-blue hover:text-neon-purple transition-colors"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 3 && userType && (
            <button
              className="bg-neon-purple text-white px-6 py-3 rounded-lg hover:bg-neon-pink transition duration-300 flex items-center ml-auto"
              onClick={nextStep}
            >
              Next <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const StartupForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-neon-blue">Tell us about your innovation</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-300 font-semibold mb-2">Company Name</label>
          <input type="text" id="companyName" className="w-full px-3 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="productCategory" className="block text-gray-300 font-semibold mb-2">Product Category</label>
          <select id="productCategory" className="w-full px-3 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white">
            <option value="">Select a category</option>
            <option value="wellness">Wellness</option>
            <option value="fitness">Fitness</option>
            <option value="design">Design</option>
            <option value="finance">Finance</option>
            <option value="ai">AI</option>
            <option value="iot">IoT</option>
            <option value="vr-ar">VR/AR</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-gray-300 font-semibold mb-2">Product Description</label>
          <textarea id="productDescription" rows={4} className="w-full px-3 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"></textarea>
        </div>
      </form>
    </div>
  );
};

const ConsumerForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-neon-blue">Tell us about your interests</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Full Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2">Interests (select all that apply)</label>
          <div className="space-y-2">
            {['Wellness', 'Fitness', 'Design', 'Finance', 'AI', 'IoT', 'VR/AR', 'Smart Home', 'Wearables'].map((interest) => (
              <label key={interest} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-neon-purple" />
                <span className="ml-2 text-gray-300">{interest}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-300 font-semibold mb-2">Short Bio (optional)</label>
          <textarea id="bio" rows={3} className="w-full px-3 py-2 bg-dark-300 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple text-white"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;