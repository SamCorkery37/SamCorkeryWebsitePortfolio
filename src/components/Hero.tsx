export default function Hero() {
    return (
        <section
            id="hero"
            className="flex items-center justify-center min-h-[40vh] text-white px-8 pt-32"
            style={{ backgroundColor: "#0e1920" }}
        >
            {/* Container for content */}
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 py-24">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <div className="relative">
                        {/* Border Wrapper */}
                        <div className="absolute inset-0 rounded-full border-4 border-[#e793a7]"></div>
                        {/* Profile Picture */}
                        <img
                            src="/me.png"
                            alt="Sam Corkery"
                            className="w-56 h-56 rounded-full object-cover"
                        />
                    </div>
                </div>
                {/* Text Section */}
                <div>

                    <p className="mt-4 text-lg whitespace-pre-line pt-10 text-[#38b9c6]">
                        Gameplay designer/ programmer that focuses on innovative{"\n"} and fun experiences in each project {"\n"} with a heavy focus on optimization and
                        {"\n"} a video producer/ editor that excels in creative narritive focues story telling
                    </p>
                </div>
            </div>
        </section>
    );
}
