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
                    I love coding and find joy in every line I write. For me, programming isn’t just a job it’s a passion and a way to create, explore, and solve problems. I enjoy building projects that are both functional and visually engaging, experimenting with new technologies, and constantly learning to improve my skills. As a FullStack MERN developer, I thrive on crafting dynamic web applications, designing smooth user experiences, and turning ideas into reality. Coding is more than work, it’s a craft I love to master every day.
                </p>
            </div>
        </div>
    );
};

export default AboutScreen;
