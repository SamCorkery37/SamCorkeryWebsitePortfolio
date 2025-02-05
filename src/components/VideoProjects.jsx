import React from 'react';

export default function VideoProjects() {
    const projects = [
        {
            title: "Stepbrother",
            description:
                "My most recent skate video, shot on an antique VX100      --Filmed and Edited by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/tWI0OroPpJo?si=DZVkpi4Cr01fCerF",
            link: "https://youtu.be/tWI0OroPpJo",
        },
        {
            title: "Death Waiver",
            description:
                "My full length skate video that took 3 years to produce, worked with professional skateboarders and distributed by a well known company The Berrics --Filmed and Edited by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/ARZfn2Fg7OQ?si=J7mcINUnvqxjOwzE",
            link: "https://www.youtube.com/watch?v=VIDEO_ID2",
        },
        {
            title: "Maplewould",
            description:
                "A promotional video for Infinity Skateshop featuring a lot of locals --Filmed and Edited by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/F7kvMxlpbgs?si=R7GpIQG2yOS2nDLn",
            link: "https://www.youtube.com/watch?v=VIDEO_ID3",
        },
        {
            title: "Babality: A Mortal Kombat Documentary",
            description:
                "My final project for Hydrolic Pictures when I was interning for them, a documentary about drama within the Mortal Kombat fighting game community --Produced, filmed, and edited by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/sReQJF3pAz0?si=4e_M9qdqOt3fzM9O",
            link: "https://www.youtube.com/watch?v=VIDEO_ID4",
        },
        {
            title: "Kenzie + Richie",
            description:
                "One of my many wedding videos I worked on during my time at Millennium Productions, a short wedding video being able to showcase my use of more expensive cameras and lenses --Filmed and editing by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/44WvQq8cDVY?si=jYtKpRq7-zSNPsDw",
            link: "https://www.youtube.com/watch?v=VIDEO_ID5",
        },
        {
            title: "KOTL entree: Twisted Team",
            description:
                "A local contest in which teams participate in challenged to earn points and win prizes that takes place over one week, we took 3rd in the contest but won best video --Filmed and edited by Sam Corkery",
            youtubeEmbed:
                "https://www.youtube.com/embed/UiETLW0FfjI?si=PdpQP-QcninDZAnu",
            link: "https://www.youtube.com/watch?v=VIDEO_ID6",
        },
    ];

    return (
        <section
            id="video-projects"
            className="py-12 text-white"
            style={{ backgroundColor: "#050505" }}
        >
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold mb-6 text-left text-[#A2C2E0] ml-12">
                    Solo Video Projects
                </h2>
                {/* Use gap-x for horizontal gap and gap-y for vertical gap */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-4">
                    {projects.map((project, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="project-card bg-custom-card shadow-lg overflow-hidden w-full max-w-sm">
                                <div className="aspect-w-4 aspect-h-3">
                                    <iframe
                                        src={project.youtubeEmbed}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-cover"
                                    ></iframe>
                                </div>
                                <div className="p-2">
                                    <h3 className="text-lg font-bold">{project.title}</h3>
                                    <p className="text-[#A2C2E0] text-sm mb-2">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src="/icons/youtube.svg"
                                            alt="YouTube logo"
                                            className="w-8 h-8"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
