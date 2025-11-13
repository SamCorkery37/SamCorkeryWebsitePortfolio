import '@/styles/projects.css';

export default function Projects() {
    const projects = [
        {
            title: "Sanity Break",
            featured: true,
            borderColor: "#D10F2A",
            role: "Developer",
            description:
                "Sanity Break is a class-based first-person survival horror RPG with a robust sanity mechanic. Beginning with a broadcast sent directly into your mind, you're forced into a week-long data retrieval job for the Felsat Organization—building your character, managing your sanity, and surviving procedurally generated facilities. A blend of survival horror gameplay and a class based RPG progression system. The underpowered feeling when facing enemies, while still building stats and having unique abilities per class.",
            video: "/sanitybreakvideo.webm",
            links: [
                {
                    platform: "steam",
                    url: "https://store.steampowered.com/app/3999430/Sanity_Break/",
                    icon: "/icons/steam.svg",
                },
                {
                    platform: "unity",
                    icon: "/icons/Unity.svg",
                },
            ],
            font: "Corp",
        },
        {
            title: "Overwhelmingly Positive",
            role: "Developer",
            borderColor: "#4AC7E0",
            description:
                "A rocketship platformer based on speed and movement mechanics. My first full released title available right now at Itch.io. My idea for this project was to develop a minimum viable product to start with, a simple game where you fly a rocket ship, then I wanted to see how far I could take that idea and how creative I could get with it. Every feature in the game was a new skill I was learning as I was going along. The result is a fun, goofy, creative, and addictive game. With an amazing soundtrack by the incredinly talented ForceFeeded.",
            video: "/OpwebsitevideoWebgl.webm",
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
            borderColor: "#4AE058",
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
            font: "Midorima-PersonalUse-Regular",
        },
    ];

    return (
        <section
            id="projects"
            className="py-12 text-white"
            style={{ backgroundColor: "#050505" }}
        >
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-6 text-left text-[#A2C2E0]">
                    Game Development Projects
                </h2>

                {/* Slightly narrower overall grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`
        project-card bg-custom-card shadow-lg overflow-hidden w-full
        transform transition-transform duration-300
        hover:scale-105 hover:shadow-2xl
        ${project.featured ? "md:col-span-2" : ""}
    `}
                                style={{
                                    border: `1.5px solid ${project.borderColor}`,
                                    borderRadius: "6px",
                                }}
                            >
                                {/* Different aspect ratios for featured vs others //*/}
                                <div
                                    className={
                                        project.featured
                                            ? "aspect-w-16 aspect-h-6"
                                            : "aspect-w-16 aspect-h-8"
                                    }
                                >
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Slightly tighter padding + reduced text/icon sizes */}
                                <div className="p-2.5">
                                    <h3
                                        className="text-base md:text-lg font-bold"
                                        style={{ fontFamily: project.font }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p className="text-[#A2C2E0] text-xs sm:text-sm mb-2.5">
                                        {project.description}
                                    </p>

                                    {project.links && (
                                        <div className="flex space-x-3">
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
                                                        className="w-5 h-5"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Technical Skills Section */}
            <div className="container mx-auto px-4 max-w-3xl mt-10">
                <h2 className="text-2xl font-bold mb-6 text-[#A2C2E0] ml-9">
                    Technical Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-1">
                    {/* Programming Languages */}
                    {["Java", "C++", "C#", "JavaScript", "Python"].map((skill, index) => (
                        <div key={index} className="relative group">
                            <span className="skill-block programming">{skill}</span>
                            <div className="tooltip">
                                {skill === "Java"
                                    ? "Learned building backend libraries with Java"
                                    : skill === "C++"
                                        ? "Developed performance-critical systems with C++ as well as more complicated and expensive logic for Unreal"
                                        : skill === "C#"
                                            ? "Leanred game dev using c# and have accumulated a mass library of C# scripts for many dynamic uses"
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
                                    ? "Built dynamic web apps using React including this one"
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
                    {["Premiere Pro", "Final Cut", "After Effects", "DaVinci Resolve"].map(
                        (app, index) => (
                            <div key={index} className="relative group">
                                <span className="skill-block video">{app}</span>
                                <div className="tooltip">
                                    {app === "Premiere Pro"
                                        ? "My go to editing software of choice, most of my professional career was done in Premiere"
                                        : app === "Final Cut"
                                            ? "My preferred software when the a video needs to be more straightforward"
                                            : app === "After Effects"
                                                ? "Created animations and visual effects  and transitions"
                                                : app === "DaVinci Resolve"
                                                    ? "Color-graded videos with DaVinci Resolve"
                                                    : ""}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}