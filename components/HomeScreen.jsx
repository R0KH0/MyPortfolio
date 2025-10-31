import React, { useState, useEffect } from 'react';

const HomeScreen = () => {
    const [text, setText] = useState('');
    const fullText = "Greetings, Earthling! You’ve landed on my personal code station. I’m Marwane Rokho, broadcasting my web adventures straight to your screen.";
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        setText('');
        const intervalId = setInterval(() => {
            if (index < fullText.length) {
                setText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-center items-start animate-fade-in">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
            <p className="leading-relaxed">
                {text}
                <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
            </p>
        </div>
    );
};

export default HomeScreen;
