export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">Sam Corkery</h1>
                <ul className="flex space-x-4">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}