import React from 'react';

const ContactScreen = () => {
    return (
        <div className="animate-fade-in text-xl">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
            <h1 className="text-4xl text-green-300 border-b-2 border-green-300 pb-2 mb-4">// CONTACT_CHANNEL</h1>
            <p className="mb-6">
                I'm currently available for freelance work and open to new opportunities. Feel free to reach out.
            </p>
            <div className="space-y-4">
                <div>
                    <label className="text-amber-300 block">// EMAIL</label>
                    <a href="mailto:contact@example.com" className="text-green-200 hover:underline">contact@example.com</a>
                </div>
                <div>
                    <label className="text-amber-300 block">// LINKEDIN</label>
                    <a href="#" className="text-green-200 hover:underline">linkedin.com/in/your-profile</a>
                </div>
                <div>
                    <label className="text-amber-300 block">// GITHUB</label>
                    <a href="#" className="text-green-200 hover:underline">github.com/your-username</a>
                </div>
            </div>
            <p className="mt-8 text-green-400/80">
                Awaiting your signal...
            </p>
        </div>
    );
};

export default ContactScreen;
