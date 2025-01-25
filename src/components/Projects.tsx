export default function Projects() {
    const projects = [
        {
            title: "Unity Game: SliceMaster",
            description:
                "A first-person sword-fighting game with realistic slicing mechanics.",
            image: "/project1.jpg",
            link: "#",
        },
        {
            title: "Unreal Engine Adventure",
            description:
                "An open-world exploration game with AI-driven enemies and interactive environments.",
            image: "/project2.jpg",
            link: "#",
        },
        {
            title: "React Portfolio",
            description: "A responsive portfolio website built using React.",
            image: "/project3.jpg",
            link: "#",
        },
    ];

    const skills = [
        "C++",
        "C#",
        "JavaScript",
        "Unity",
        "Unreal Engine",
        "Lua",
        "Python",
        "Java",
        "Git",
        "Perforce",
    ];

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#e793a7]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Technical Skills Section */}
                <div className="mt-12">
                    <h2 className="text-4xl font-bold text-[#e793a7] mb-8 text-center">
                        Technical Experience
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-6 py-3 rounded-lg border-2 border-[#e793a7] text-[#e793a7] text-lg font-bold"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
