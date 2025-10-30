function Contact({ data }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold font-mono crt-text mb-6">
        {'>'} CONTACT.SYS
      </h2>
      <div className="border border-crt-green p-6 sm:p-8 space-y-4 bg-crt-dark-green/20">
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
            <span className="text-xs sm:text-sm font-mono text-crt-green opacity-60 w-32">
              EMAIL:
            </span>
            <a
              href={`mailto:${data.email}`}
              className="text-sm sm:text-base font-mono text-crt-green hover:animate-crt-glow"
            >
              {data.email}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
            <span className="text-xs sm:text-sm font-mono text-crt-green opacity-60 w-32">
              PHONE:
            </span>
            <a
              href={`tel:${data.phone}`}
              className="text-sm sm:text-base font-mono text-crt-green hover:animate-crt-glow"
            >
              {data.phone}
            </a>
          </div>

          {data.github && (
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
              <span className="text-xs sm:text-sm font-mono text-crt-green opacity-60 w-32">
                GITHUB:
              </span>
              <a
                href={`https://${data.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-mono text-crt-green hover:animate-crt-glow"
              >
                {data.github}
              </a>
            </div>
          )}

          {data.linkedin && (
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0">
              <span className="text-xs sm:text-sm font-mono text-crt-green opacity-60 w-32">
                LINKEDIN:
              </span>
              <a
                href={`https://${data.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-mono text-crt-green hover:animate-crt-glow"
              >
                {data.linkedin}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 border border-crt-green bg-crt-dark-green/10">
        <p className="text-xs sm:text-sm font-mono text-crt-green opacity-70">
          {'>'} READY TO CONNECT_
        </p>
      </div>
    </div>
  );
}

export default Contact;
