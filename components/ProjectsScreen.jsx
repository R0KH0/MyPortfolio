import React from 'react';

const projects = [
    {
        title: "Project Alpha",
        description: "A cutting-edge web application for data visualization and real-time analytics.",
        tech: ["React", "D3.js", "Node.js"],
        imageUrl: "https://picsum.photos/seed/alpha/300/200"
    },
    {
        title: "Project Beta",
        description: "A mobile-first e-commerce platform with a focus on user experience and performance.",
        tech: ["Vue.js", "Firebase", "Stripe"],
        imageUrl: "https://picsum.photos/seed/beta/300/200"
    },
    {
        title: "Project Gamma",
        description: "An open-source machine learning library for predictive text analysis.",
        tech: ["Python", "TensorFlow", "Flask"],
        imageUrl: "https://picsum.photos/seed/gamma/300/200"
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
                        <h2 className="text-2xl text-amber-300">{project.title}</h2>
                        <p className="text-green-200 mt-1">{project.description}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs bg-green-900/70 text-amber-300 px-2 py-1 rounded">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsScreen;
