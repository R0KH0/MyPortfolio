function Projects({ data }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono crt-text mb-6">
        {'>'} PROJECTS.EXE
      </h2>
      <div className="space-y-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="border border-crt-green p-4 sm:p-6 hover:bg-crt-dark-green/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-crt-green">
                [{index + 1}] {project.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-crt-green opacity-80 mb-4 leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              className="inline-block text-xs sm:text-sm font-mono text-crt-green hover:animate-crt-glow transition-all"
            >
              {'>'} VIEW PROJECT_
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
