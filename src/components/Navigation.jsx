function Navigation({ activeChannel, onChannelChange }) {
  const channels = [
    { id: 'home', label: 'CH 1: HOME' },
    { id: 'projects', label: 'CH 2: PROJECTS' },
    { id: 'about', label: 'CH 3: ABOUT' },
    { id: 'experience', label: 'CH 4: EXPERIENCE' },
    { id: 'contact', label: 'CH 5: CONTACT' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6 px-4">
      {channels.map(channel => (
        <button
          key={channel.id}
          onClick={() => onChannelChange(channel.id)}
          className={`tv-button px-4 py-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider ${
            activeChannel === channel.id ? 'active text-crt-green' : 'text-gray-400'
          }`}
        >
          {channel.label}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
