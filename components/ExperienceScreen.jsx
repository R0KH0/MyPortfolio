import React from 'react';

const experiences = [
    {
        role: "Senior Frontend Engineer",
        company: "Innovate Inc.",
        period: "2020 - Present",
        description: "Led the development of a new component library in React, improving development speed by 40%. Mentored junior developers and championed best practices in code quality and testing."
    },
    {
        role: "UI/UX Developer",
        company: "Creative Solutions",
        period: "2017 - 2020",
        description: "Designed and implemented user interfaces for various client projects, focusing on responsive design and accessibility. Collaborated closely with designers and backend teams."
    },
];

const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Node.js", "GraphQL", "CI/CD", "Jest & RTL"];

const ExperienceScreen = () => {
    return (
        <div className="animate-fade-in text-xl">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
            <h1 className="text-4xl text-green-300 border-b-2 border-green-300 pb-2 mb-4">// EXPERIENCE</h1>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <h2 className="text-2xl text-amber-300">{exp.role} - {exp.company}</h2>
                        <p className="text-green-400/80 text-lg">{exp.period}</p>
                        <p className="mt-1">{exp.description}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-3xl text-green-300 border-b-2 border-green-300 pb-2 my-4">// SKILLS</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className="bg-green-900/70 text-amber-300 px-3 py-1 rounded text-lg">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default ExperienceScreen;
