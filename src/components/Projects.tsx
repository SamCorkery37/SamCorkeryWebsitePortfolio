import '@/styles/projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Overwhelmingly Positive",
            role: "Developer",
            description:
                "A rocketship platformer based on speed and movement mechanics. My first full released title available right now at Itch.io. My idea for this project was to develop a minimum viable product to start with, a simple game where you fly a rocket ship, then I wanted to see how far I could take that idea and how creative I could get with it. Every feature in the game was a new skill I was learning as I was going along. The result is a fun, goofy, creative, and addictive game. With an amazing soundtrack by the incredinly talented ForceFeeded.",
            video: "/OpwebsitevideoWebgl.webm",
            // Instead of a single link, we now provide an array of link objects:
            links: [
                {
                    platform: "github",
                    url: "https://github.com/SamCorkery37/OverwhelminglyPositive",
                    icon: "/icons/github.svg",
                },
                {
                    platform: "itchio",
                    url: "https://samcorkery.itch.io/overwhelmingly-positive",
                    icon: "/icons/itchio.svg",
                },
                {
                    platform: "unity",

                    icon: "/icons/Unity.svg",
                },
            ],
            font: "Corp",
        },
        {
            title: "Kill Block",
            role: "Developer",
            description:
                "A third person action game with dynamic slicing mechanics.... and every character is a cube. This project is very ambitious for a solo developer, I hope to one day create a team around it to fully realize the vision I have. A sprawling epic with a long story of love, betrayel, and revenge... All involving cubes... As of now I have a few core features finished, but if I want to continue my game dev journey I will need to redirect my focus onto other projects for the time being.",
            video: "/Killblockcutscenes2.mp4",
            links: [
                {
                    platform: "github",
                    url: "https://github.com/SamCorkery37/CubeSlice",
                    icon: "/icons/github.svg",
                },
                {
                    platform: "unreal",

                    icon: "/icons/Unreal.svg",
                },

            ],
            font: "Midorima-PersonalUse-Regular", // Title uses the "Midorima-PersonalUse-Regular" font.
        },
    ];

    return (
        <section
            id="projects"
            className="py-12 text-white"
            style={{ backgroundColor: "#050505" }}
        >
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-6 text-left text-[#A2C2E0]">
                    Solo Developer Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card bg-custom-card shadow-lg overflow-hidden w-full"
                        >
                            <div className="aspect-w-16 aspect-h-9">
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3
                                    className="text-xl font-bold"
                                    style={{ fontFamily: project.font }}
                                >
                                    {project.title}
                                </h3>
                                <p className="text-[#A2C2E0] mb-4">{project.description}</p>

                                {/* If the project has a 'links' property, render the icon links; otherwise, render a default text link */}
                                {project.links ? (
                                    <div className="flex space-x-4">
                                        {project.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={link.icon}
                                                    alt={`${link.platform} logo`}
                                                    className="w-8 h-8"
                                                />
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <a
                                        href={project.links}
                                        className="text-blue-500 font-semibold hover:underline"
                                    >
                                        Learn More →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technical Skills Section (unchanged) */}
            <div className="container mx-auto px-4 max-w-3xl mt-16">
                <h2 className="text-2xl font-bold mb-6 text-[#A2C2E0] ml-9">Technical Skills</h2>
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
                                                    : skill === "TypeScript"
                                                        ? "I built this website using TypeScript with Tailwindcss"
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
