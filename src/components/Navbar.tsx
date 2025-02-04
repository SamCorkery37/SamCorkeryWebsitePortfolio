import React from "react";
import '@/styles/logoStyles.css';

export default function Navbar() {
    return (
        <nav
            className="text-white py-6 fixed top-0 left-0 w-full z-50"
            style={{ backgroundColor: "#0e1920" }}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Container for the name and tagline */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-[#e793a7]">Sam Corkery</h1>
                    <h2 className="text-sm font-bold text-[#A2C2E0]">
                        Game Dev | Web Dev | Video Producer | Video Editor
                    </h2>
                </div>
                {/* Social icons remain on the right; hide them on small screens */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <a
                            href="https://github.com/SamCorkery37"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/github.svg"
                                alt="GitHub"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://youtube.com/piemotherfucker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/youtube.svg"
                                alt="YouTube"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/SamCorkery"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/samcorkery"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/sam.corkery.5/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/facebook.svg"
                                alt="Facebook"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://samcorkery.itch.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/itchio.svg"
                                alt="ItchIo"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/resume.pdf"
                            download="SamCorkery_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-14 px-3 border border-white rounded hover:text-[#A2C2E0] transition-colors"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
