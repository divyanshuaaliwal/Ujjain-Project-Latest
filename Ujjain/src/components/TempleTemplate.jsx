const TempleTemplate = () => {
    const {tid} = useD
    console.log();
    

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                    src="/images/mahakaleshwar.jpg" // Replace with actual path
                    alt="Mahakaleshwar Temple"
                    className="w-full h-64 object-cover"
                />

                <div className="p-6">
                    <span className="text-sm text-white bg-red-500 px-3 py-1 rounded-full inline-block mb-4">
                        History
                    </span>

                    <h1 className="text-3xl font-bold mb-4 text-gray-800">
                        Mahakaleshwar Temple
                    </h1>

                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                        <span>📅 May 5, 2025</span>
                        <span>⏱️ 5 min read</span>
                        <span>👁️ 2.4k views</span>
                    </div>

                    <p className="text-gray-700 mb-6">
                        The Mahakaleshwar Temple, located in Ujjain, Madhya Pradesh, is one of the 12
                        sacred Jyotirlingas of Lord Shiva. Known for its spiritual power, the temple is
                        a major center of Shaivite worship in India.
                    </p>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">🕉️ Introduction</h2>
                        <p className="text-gray-700">
                            Mahakaleshwar is believed to be the only Jyotirlinga facing south, symbolizing
                            death and liberation. The temple's atmosphere is intensely spiritual, drawing
                            millions of devotees annually.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">🏛️ Historical Significance</h2>
                        <p className="text-gray-700">
                            Referenced in ancient texts like the Puranas, Mahakaleshwar is one of the most
                            important religious sites for Shaivites. It was rebuilt in the 18th century by
                            the Marathas.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">🛐 Rituals and Traditions</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Bhasma Aarti:</strong> Unique early morning ritual using sacred ash.</li>
                            <li><strong>Shravan Month:</strong> Peak season for devotees.</li>
                            <li><strong>Maha Shivaratri:</strong> Celebrated with great devotion and festivity.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">🗺️ Location and Architecture</h2>
                        <p className="text-gray-700">
                            Situated near Rudra Sagar Lake in Ujjain, the temple blends Bhumija, Maratha, and Chalukya
                            architectural styles with intricate carvings and towering spires.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">🙏 Why Visit?</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>One of the 12 sacred Jyotirlingas in India.</li>
                            <li>Experience the mystical Bhasma Aarti ritual.</li>
                            <li>Located in Ujjain – a key spiritual city in Hinduism.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">📌 Travel Tips</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Best Time:</strong> October to March</li>
                            <li><strong>Nearest Airport:</strong> Indore (55 km)</li>
                            <li><strong>Dress Code:</strong> Traditional attire recommended</li>
                            <li><strong>Entry:</strong> Free (Special darshan may have charges)</li>
                        </ul>
                    </section>

                    <div className="mt-8">
                        <a
                            href="/articles/temples"
                            className="text-orange-600 font-medium hover:underline"
                        >
                            🔗 Read More About Hindu Temples and Rituals →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempleTemplate;
