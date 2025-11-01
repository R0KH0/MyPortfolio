import React from 'react';

const experiences = [
    {
        role: "Full-Stack Web Development Intern (MERN Stack)",
        company: "Ark-x",
        period: "Sep 2025 - Present",
        description: "Built web applications using MongoDB, Express.js, React, Node.js. Created RESTful APIs and connected them to front-end React components. Worked in a team using Git/GitHub, participated in debugging and code reviews"
    },
    {
        role: "IT Specialist – Network Systems & Surveillance",
        company: "Uma Volailles",
        period: "May 2025 - Aug 2025",
        description: "Managed and troubleshooted local area networks (LANs) for smooth connectivity. Provided technical support for IT hardware and software related to surveillance and networking. Monitored and resolved network and system issues to minimize downtime. Installed, configured, and maintained camera surveillance systems. Ensured proper data storage, system security, and network integrity."
    },
    {
        role: "IT Specialist – Network Systems & Surveillance",
        company: "GAMATEL MAROC",
        period: "Apr 2025 - May 2025",
        description: "Managed and troubleshooted local area networks (LANs) for smooth connectivity. Provided technical support for IT hardware and software related to surveillance and networking. Monitored and resolved network and system issues to minimize downtime. Installed, configured, and maintained camera surveillance systems. Ensured proper data storage, system security, and network integrity"
    },
    {
        role: "Factory Manager – Aluminium Sector",
        company: "RG-bond SART",
        period: "Jan 2024 - Jun 2024",
        description: "Supervised and coordinated production teams to meet targets. Managed the production process and optimized workflow efficiency. Oversaw the management of raw materials and inventory. Ensured compliance with safety and quality standards"
    },
    {
        role: "Email Marketing Specialist (HTML, CSS)",
        company: "E-Impact",
        period: "Jun 2023 - Nov 2023",
        description: "Designed and created responsive marketing emails using HTML and CSS. Collaborated with marketing teams to implement email campaigns. Ensured emails were visually appealing and consistent with brand guidelines. Tested emails for compatibility across different devices and email clients"
    },
    {
        role: "IT Intern – Programming",
        company: "Jil Smart",
        period: "Dec 2021 - Jan 2022",
        description: "Assisted in software development and programming tasks. Supported testing and debugging of applications. Contributed to building small automation and data management tools. Improved understanding of coding principles and development environments"
    },
    {
        role: "IT Technician Intern",
        company: "Celatec",
        period: "Apr 2021 - Jun 2021",
        description: "Installed, configured, and updated computer hardware and software. Configured and maintained local (LAN) and wide area (WAN) networks. Installed and configured surveillance camera systems. Provided basic IT support and troubleshooting for users"
    },
];

const skills = [ "JavaScript", "React", "Node.js", "MongoDB",  "Tailwind CSS",  "HTML", "Git/Github", "Ajile", "Scrum"];

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
                        <ul className="list-disc list-inside text-green-200 mt-2 space-y-1 text-sm">
                            {exp.description.split('. ').map((bullet, i) => 
                                bullet.trim() ? <li key={i}>{bullet.trim()}.</li> : null
                            )}
                        </ul>
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
