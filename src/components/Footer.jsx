import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-custom-card text-white py-4 border border-white">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; 2025 Sam Corkery. All rights reserved.
                </p>
                <p className="mt-2">
                    Built by Sam Corkery.{' '}
                    <a
                        href="samcorkery37@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        Email Me
                    </a>
                </p>
            </div>
        </footer>
    );
}
