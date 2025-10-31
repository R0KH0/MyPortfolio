import React from 'react';

const AboutScreen = () => {
    return (
        <div className="animate-fade-in text-xl">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
            <h1 className="text-4xl text-green-300 border-b-2 border-green-300 pb-2 mb-4">// ABOUT_ME</h1>
            <div className="space-y-4">
                <p>
                    I am a world-class senior frontend React engineer with a passion for creating intuitive, beautiful, and highly functional user interfaces. With deep expertise in UI/UX design, I bridge the gap between complex logic and user-friendly experiences.
                </p>
                <p>
                    My journey in web development started with a fascination for how things work, and it has evolved into a career dedicated to building amazing applications that people love to use. I thrive on challenges and am constantly learning new technologies to stay at the forefront of the industry.
                </p>
                <p>
                    When I'm not coding, I enjoy exploring retro technology and vintage electronics, which served as the inspiration for this very portfolio.
                </p>
            </div>
        </div>
    );
};

export default AboutScreen;
