import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import AboutScreen from './components/AboutScreen';
import ExperienceScreen from './components/ExperienceScreen';
import ContactScreen from './components/ContactScreen';
import StaticGif from './src/assets/Static.gif';
import StaticSound from './src/assets/TVSTATIC.mp3'
import ButtonClick from './src/assets/button-press.mp3'

// TVButton component
const TVButton = ({ label, isActive, onClick }) => {
    // handle button click
    const handleButtonClick = () => {
        // play the sound
        const audio = new Audio(ButtonClick);
        audio.currentTime = 0; // restart sound from the beginning
        audio.volume = 0.5; // optional volume
        audio.play();

        // call the parent click function if provided
        if (onClick) onClick();
  };
    return (
        <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-800 text-xs font-mono uppercase tracking-wider">{label}</span>
            <button 
                onClick={handleButtonClick}
                className={`w-12 h-12 rounded-full border-4 border-gray-600 bg-gray-800 transition-all duration-150 ease-in-out focus:outline-none focus:ring-4 focus:ring-amber-300
                ${isActive ? 'shadow-[inset_0_4px_8px_rgba(0,0,0,0.8),0_0_10px_rgba(251,191,36,0.7)] bg-gray-900' : 'shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_0_-4px_4px_rgba(255,255,255,0.2)] hover:bg-gray-700'}`}
            >
                {isActive && <div className="w-3 h-3 bg-amber-400 rounded-full mx-auto animate-pulse"></div>}
            </button>
        </div>
    );
};


// Static overlay effect
const StaticOverlay = () => (
    <div className="absolute inset-0 w-full h-full opacity-10 bg-[repeating-linear-gradient(transparent_0,rgba(0,0,0,0.15)_1px,transparent_2px)] pointer-events-none"></div>
);

// Flicker effect for switching channels
const FlickerEffect = () => {
    React.useEffect(() => {
        const audio = new Audio(StaticSound);
        audio.volume = 0.4; // adjust volume as you like
        audio.play();

        // Stop sound when flicker effect ends or component unmounts
        const stopSound = () => {
            audio.pause();
            audio.currentTime = 0;
        };

        // Stop after 300ms (same as your flicker duration)
        const timeout = setTimeout(stopSound, 300);

        return () => {
            stopSound();
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="w-full h-full bg-white animate-[flicker_0.3s_steps(2,start)_infinite]">
            <img src={StaticGif} className="w-full h-full object-cover" />
        </div>
    );
};

// App component
const App = () => {
    const ScreenView = {
        HOME: 'HOME',
        PROJECTS: 'PROJECTS',
        ABOUT: 'ABOUT',
        EXPERIENCE: 'EXPERIENCE',
        CONTACT: 'CONTACT',
    };

    const [activeView, setActiveView] = useState(ScreenView.HOME);
    const [isSwitching, setIsSwitching] = useState(false);

    const navItems = [
        { label: 'Home', view: ScreenView.HOME },
        { label: 'About', view: ScreenView.ABOUT },
        { label: 'Experience', view: ScreenView.EXPERIENCE },
        { label: 'Projects', view: ScreenView.PROJECTS },
        { label: 'Contact', view: ScreenView.CONTACT },
    ];

    const changeView = (view) => {
        if (view === activeView) return;
        setIsSwitching(true);
        setTimeout(() => {
            setActiveView(view);
            setIsSwitching(false);
        }, 300);
    };

    const renderScreen = () => {
        if (isSwitching) {
            return <FlickerEffect />;
        }
        switch (activeView) {
            case ScreenView.HOME:
                return <HomeScreen />;
            case ScreenView.PROJECTS:
                return <ProjectsScreen />;
            case ScreenView.ABOUT:
                return <AboutScreen />;
            case ScreenView.EXPERIENCE:
                return <ExperienceScreen />;
            case ScreenView.CONTACT:
                return <ContactScreen />;
            default:
                return <HomeScreen />;
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-900">
            <div className="w-full max-w-5xl bg-gradient-to-b from-gray-800 to-black p-4 sm:p-6 rounded-2xl shadow-2xl border-2 border-gray-900 shadow-black/50">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                    {/* Screen Section */}
                    <div className="flex-grow bg-gray-900 p-2 sm:p-4 rounded-xl shadow-inner shadow-black/50">
                        <div className="aspect-video w-full bg-[#4a5c48] rounded-lg shadow-inner shadow-black/80 overflow-hidden relative">
                            <div className="p-4 sm:p-6 text-2xl sm:text-3xl text-green-200 w-full h-full overflow-y-auto">
                                {renderScreen()}
                            </div>
                            <StaticOverlay />
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="flex-shrink-0 md:w-48 bg-gradient-to-b from-gray-400 to-gray-500 p-4 rounded-xl shadow-lg border-t-2 border-gray-500">
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-2 rounded-lg shadow-inner shadow-black/50 space-y-1">
                                <div className="h-4 bg-gray-900 rounded-sm"></div>
                                <div className="h-4 bg-gray-900 rounded-sm"></div>
                            </div>
                            <div className="bg-gray-800 p-2 rounded-lg shadow-inner shadow-black/50 space-y-1">
                                <div className="h-4 bg-gray-900 rounded-sm"></div>
                                <div className="h-4 bg-gray-900 rounded-sm"></div>
                            </div>
                            <div className="w-full h-px bg-gray-600 my-4"></div>
                            <div className="grid grid-cols-5 md:grid-cols-2 gap-4">
                                {navItems.map(item => (
                                    <TVButton
                                        key={item.label}
                                        label={item.label}
                                        isActive={activeView === item.view}
                                        onClick={() => changeView(item.view)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;