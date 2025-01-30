import React from "react";
import '@/styles/logoStyles.css';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white py-6 fixed top-0 left-0 w-full z-50"> {/* Added 'fixed', 'top-0', 'left-0', 'w-full', and 'z-50' */}
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#e793a7]">Sam Corkery</h1>
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="https://github.com/YourGitHubUsername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/github.png"
                                alt="GitHub"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://youtube.com/YourChannel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/youtube.png"
                                alt="YouTube"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/YourLinkedInProfile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/linkedin.png"
                                alt="LinkedIn"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://instagram.com/YourInstagramProfile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/instagram.png"
                                alt="Instagram"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com/YourFacebookProfile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/icons/facebook.png"
                                alt="Facebook"
                                className="social-icon w-10 h-10"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
