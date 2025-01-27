export default function Hero() {
    return (
        <section
            id="hero"
            className="flex items-center justify-center min-h-[40vh] bg-gray-900 text-white px-8"
        >
            {/* Container for content */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <div className="relative">
                        {/* Border Wrapper */}
                        <div className="absolute inset-0 rounded-full border-4 border-[#e793a7]"></div>
                        {/* Profile Picture */}
                        <img
                            src="/me.png"
                            alt="Sam Corkery"
                            className="w-44 h-44 rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Text Description */}
                <div>
                    <h1 className="text-5xl font-bold text-[#e793a7]">Sam Corkery</h1>
                    <p className="text-2xl text-gray-300 mt-3">Game Developer | Web Developer | Producer | Video Editor</p>
                    <p className="text-lg text-gray-400 mt-4 max-w-lg">
                        Passionate about creating immersive gaming experiences and writing clean, efficient code. Focused on solving challenges in game development and web technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}
