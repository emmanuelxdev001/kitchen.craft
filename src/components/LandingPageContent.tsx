import React from 'react';

const LandingPageContent: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Wazobiabite</h1>
            <p className="mb-4">
                Discover our amazing features and services designed to enhance your experience.
            </p>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Feature 1</h2>
                    <p>Details about feature 1.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Feature 2</h2>
                    <p>Details about feature 2.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Feature 3</h2>
                    <p>Details about feature 3.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold">Feature 4</h2>
                    <p>Details about feature 4.</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPageContent;