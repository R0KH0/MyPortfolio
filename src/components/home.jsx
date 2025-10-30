function Home({ data }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-4xl font-bold font-mono crt-text mb-6 animate-crt-glow">
        {data.title}
      </h1>
      <div className="text-sm sm:text-base font-mono text-crt-green leading-relaxed whitespace-pre-line">
        {data.text}
      </div>
      <div className="mt-8 pt-6 border-t border-crt-dark-green">
        <p className="text-xs sm:text-sm font-mono text-crt-green opacity-70">
          {'>'} Use the channel buttons above to navigate_
        </p>
      </div>
    </div>
  );
}

export default Home;
