export default function Hero() {
    return (
        <section
            id="hero"
            className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white"
        >
            <div className="text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Hi, I'm Sam Corkery</h1>
                <p className="text-xl mb-6">Game Developer | Web Developer | Creator</p>
                <a
                    href="#projects"
                    className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow hover:bg-gray-200"
                >
                    View My Work
                </a>
            </div>
        </section>
    );
}
