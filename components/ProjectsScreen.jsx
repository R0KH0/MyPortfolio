import React from 'react';

const projects = [
    {
        title: "My Retro TV Portfolio",
        description: "A personal portfolio website designed to look like a vintage television set, with navigation buttons acting as channels to display different sections of the portfolio.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        imageUrl: "../src/assets/tvPortfolio.png",
        github: "https://github.com/R0KH0/MyPortfolio",
        liveDemo: "https://github.com/R0KH0/MyPortfolio" 
    }
];

const ProjectsScreen = () => {
    return (
        <div className="animate-fade-in">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>

            <h1 className="text-4xl text-green-300 border-b-2 border-green-300 pb-2 mb-4">// PROJECTS_LOG</h1>

            <div className="space-y-6 text-xl">
                {projects.map((project, index) => (
                    <div key={index} className="border border-green-400/50 p-3 rounded">
                        {/*<img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full rounded mb-3 shadow-lg"
                        />*/}
                        <h2 className="text-2xl text-amber-300">{project.title}</h2>
                        <p className="text-green-200 mt-1">{project.description}</p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span
                                    key={t}
                                    className="text-xs bg-green-900/70 text-amber-300 px-2 py-1 rounded"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Buttons Section */}
                        <div className="mt-4 flex items-center gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-black font-semibold bg-amber-400 hover:bg-amber-300 px-3 py-1 rounded shadow-md transition"
                                >
                                    GitHub
                                </a>
                            )}
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-black font-semibold bg-green-400 hover:bg-green-300 px-3 py-1 rounded shadow-md transition"
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsScreen;
