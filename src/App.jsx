import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home.jsx';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import portfolioData from './data.json';

function App() {
  const [activeChannel, setActiveChannel] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChannelChange = (channel) => {
    if (channel === activeChannel) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveChannel(channel);
      setIsTransitioning(false);
    }, 150);
  };

  const renderContent = () => {
    switch (activeChannel) {
      case 'home':
        return <Home data={portfolioData.home} />;
      case 'projects':
        return <Projects data={portfolioData.projects} />;
      case 'about':
        return <About data={portfolioData.about} />;
      case 'experience':
        return <Experience data={portfolioData.experience} />;
      case 'contact':
        return <Contact data={portfolioData.contact} />;
      default:
        return <Home data={portfolioData.home} />;
    }
  };

  return (
    <div className="min-h-screen bg-crt-bg flex items-center justify-center p-4 sm:p-8 font-mono">
      <div className="crt-border p-6 sm:p-12 w-full max-w-5xl">
        <div className="relative">
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-600 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-lg"></div>
            <div className="w-3 h-3 rounded-full bg-crt-green shadow-lg"></div>
          </div>
        </div>

        <div className="crt-screen scanline p-6 sm:p-10 min-h-[500px] sm:min-h-[600px]">
          <div className="mb-8 text-center">
            <div className="text-xs sm:text-sm font-mono text-crt-green opacity-60 mb-2">
              RETRO TERMINAL v1.0
            </div>
            <div className="text-xs font-mono text-crt-green opacity-40">
              {'═'.repeat(50)}
            </div>
          </div>

          <Navigation
            activeChannel={activeChannel}
            onChannelChange={handleChannelChange}
          />

          <div
            className={`mt-8 relative z-20 ${isTransitioning ? 'flicker-animation' : ''}`}
          >
            {renderContent()}
          </div>

          <div className="mt-12 pt-6 border-t border-crt-dark-green text-center">
            <p className="text-xs font-mono text-crt-green opacity-40">
              © 2025 RETRO TERMINAL - ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
