export default function Hero() {
    return (
        <section
            id="hero"
            className="flex items-center justify-center min-h-[40vh] text-white px-0 pt-32"
            style={{ backgroundColor: "#050505" }}
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
                            src="/tempgirlpic.png"
                            alt="Sam Corkery"
                            className="w-56 h-56 rounded-full object-cover"
                        />
                    </div>
                </div>
                {/* Text Section */}
                <div>

                    <p className="mt-4 text-lg whitespace-pre-line pt-10 text-[#A2C2E0]">
                        Ill fuck ur dad and kill urmom, {"\n"}no fucks given fr fr. {"\n"}ill do coke off ur dads dick and make ur mom watch
                        {"\n"} fuck wit me, fuck around n fiiind out, {"\n"}now comeerreee and lemme sell u some shiiii
                    </p>
                </div>
            </div>
        </section>
    );
}
