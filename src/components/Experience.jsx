function Experience({ data }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono crt-text mb-6">
        {'>'} WORK_HISTORY.LOG
      </h2>
      <div className="space-y-4">
        {data.map((job, index) => (
          <div
            key={index}
            className="border-l-4 border-crt-green pl-4 sm:pl-6 py-3 hover:border-l-8 transition-all duration-300"
          >
            <div className="text-xs sm:text-sm font-mono text-crt-green opacity-60 mb-1">
              {job.duration}
            </div>
            <h3 className="text-base sm:text-lg font-bold font-mono text-crt-green mb-1">
              {job.role}
            </h3>
            <p className="text-sm sm:text-base font-mono text-crt-green opacity-80">
              @ {job.company}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-crt-dark-green">
        <p className="text-xs sm:text-sm font-mono text-crt-green opacity-70">
          {'>'} Total experience: {data.length} positions_
        </p>
      </div>
    </div>
  );
}

export default Experience;
