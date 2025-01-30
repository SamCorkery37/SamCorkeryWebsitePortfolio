import '@/styles/projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Overwhelmingly Positive",
            role: "Developer",
            description:
                "A rocketship platformer based on speed and movement mechanics",
            video: "/OpwebsitevideoWebgl.webm",
            link: "#",
        },
        {
            title: "Kill Block",
            role: "Developer",
            description:
                "A third person action game with dynamic slicing mechanics.... and every character is a cube",
            video: "/Killblockcutscenes2.mp4",
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


    {/* Projects Section */ }

    return (
        <section id="projects" className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-6 text-left text-[#e793a7]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card bg-gray-800 shadow-lg overflow-hidden w-full"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
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
            <div className="container mx-auto px-4 max-w-3xl mt-16"> {/* Adjust max width here */}
                <h2 className="text-2xl font-bold mb-6 text-[#e793a7]">Technical Skills</h2> {/* Heading alignment */}
                <div className="flex flex-wrap justify-center gap-1">
                    {/* Programming Languages */}
                    {["Java", "C++", "C#", "JavaScript", "Python"].map((skill, index) => (
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
                                    ? "Learned game development through Unity, and developed my first full release Overwhelmingly Positive with this amazing engine"
                                    : engine === "Unreal Engine"
                                        ? "The Limits of Unreals technology seem to have no ceiling, therefore I want to learn every feature I can"
                                        : ""}
                            </div>
                        </div>
                    ))}

                    {/* Video Applications */}
                    {["Premiere Pro", "Final Cut", "After Effects", "DaVinci Resolve"].map((app, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block video">{app}</span>
                            <div className="tooltip">
                                {app === "Premiere Pro"
                                    ? "Edited professional videos with Premiere Pro"
                                    : app === "Final Cut"
                                        ? "Edited professional videos with Final Cut"
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
