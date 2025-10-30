function About({ data }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono crt-text mb-6">
        {'>'} ABOUT.TXT
      </h2>
      <div className="border border-crt-green p-4 sm:p-6 bg-crt-dark-green/20">
        <pre className="text-xs sm:text-sm font-mono text-crt-green leading-relaxed whitespace-pre-wrap">
          {data.text}
        </pre>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-crt-green opacity-70 mt-6">
        <span>{'>'}</span>
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}

export default About;
