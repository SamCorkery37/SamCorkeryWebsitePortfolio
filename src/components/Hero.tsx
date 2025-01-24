export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
        >
            {/* Profile Picture */}
            <div className="relative">
                <img
                    src="/me.png"
                    alt="Sam Corkery"
                    className="w-48 h-48 rounded-full border-4 border-[#e793a7] object-cover"
                />
            </div>
            {/* Add additional content */}
            <h1 className="text-4xl font-bold mt-6">Hi, I'm Sam Corkery</h1>
            <p className="text-lg mt-4 text-gray-300">
                Game Developer | Web Developer | Creator
            </p>
        </section>
    );
}
