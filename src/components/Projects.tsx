import '@/styles/projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Overwhelmingly Positive 2022",
            description:
                "A first-person sword-fighting game with realistic slicing mechanics.",
            video: "/OpwebsitevideoWebgl.webm",
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
        "Python",
        "Java",
        "Git",
        "Premiere Pro",
        "Final Cut",
        "After Effects",
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
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-48 object-cover"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
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
            </div>

            {/* Technical Skills Section */}
            <div className="mt-12">
                <h2 className="text-4xl font-bold text-[#e793a7] mb-8 text-center">
                    Technical Experience
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Programming Languages */}
                    {["Java", "C++", "C#", "JavaScript", "Python", "Lua"].map((skill, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block programming">{skill}</span>
                            <div className="tooltip">
                                {skill === "Java"
                                    ? "Built many backend libraries using Java"
                                    : skill === "C++"
                                        ? "Developed performance-critical systems with C++"
                                        : skill === "C#"
                                            ? "Created Unity game scripts with C#"
                                            : skill === "JavaScript"
                                                ? "Designed interactive UIs with JavaScript"
                                                : skill === "Python"
                                                    ? "Automated workflows with Python scripts"
                                                    : skill === "Lua"
                                                        ? "Scripted game logic using Lua"
                                                        : ""}
                            </div>
                        </div>
                    ))}

                    {/* Frameworks */}
                    {["React", "Angular", "Django"].map((framework, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block frameworks">{framework}</span>
                            <div className="tooltip">
                                {framework === "React"
                                    ? "Built dynamic web apps using React"
                                    : framework === "Angular"
                                        ? "Created scalable applications with Angular"
                                        : framework === "Django"
                                            ? "Developed robust backends with Django"
                                            : ""}
                            </div>
                        </div>
                    ))}

                    {/* Engines */}
                    {["Unity", "Unreal Engine"].map((engine, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block engines">{engine}</span>
                            <div className="tooltip">
                                {engine === "Unity"
                                    ? "Developed games using Unity"
                                    : engine === "Unreal Engine"
                                        ? "Built immersive worlds in Unreal Engine"
                                        : ""}
                            </div>
                        </div>
                    ))}

                    {/* Video Applications */}
                    {["Premiere Pro", "After Effects", "DaVinci Resolve"].map((app, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block video">{app}</span>
                            <div className="tooltip">
                                {app === "Premiere Pro"
                                    ? "Edited professional videos with Premiere Pro"
                                    : app === "After Effects"
                                        ? "Created animations and visual effects with After Effects"
                                        : app === "DaVinci Resolve"
                                            ? "Color-graded videos with DaVinci Resolve"
                                            : ""}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
