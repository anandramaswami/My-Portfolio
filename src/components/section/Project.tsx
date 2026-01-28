import { motion, easeOut } from "framer-motion";
import { ProjectData } from "../datas/project";

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.6,
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    },
};

const cardsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = (direction: string) => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -40 : 40,
        y: 10,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeOut,
        },
    },
});

function Project() {
    return (
        <motion.section
            id="projects"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen flex justify-center text-white py-20"
        >
            <div className="w-[90%] lg:w-[80%]">

                {/* Heading */}
                <motion.div
                    variants={headingVariants}
                    className="text-center mb-14"
                >
                    <h1 className="text-3xl text-purple-700 font-bold">
                        <u>Projects</u>
                    </h1>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={cardsContainerVariants}
                    className="
                        grid 
                        grid-cols-1 
                        min-[900px]:grid-cols-2 
                        gap-8
                    "
                >
                    {ProjectData.map((project, index) => {
                        const direction = index % 2 === 0 ? "left" : "right";

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants(direction)}
                                whileHover={{ scale: 1.03 }}
                                className="
                                    bg-[#1a181b]
                                    border-2 border-purple-700
                                    shadow-[0_0_12px_1px_#7e22ce]
                                    rounded-2xl
                                    p-6
                                    flex
                                    flex-col
                                "
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="
                                        w-full 
                                        h-48 
                                        object-cover
                                        border 
                                        border-white 
                                        rounded-xl
                                    "
                                />

                                {/* Content */}
                                <div className="flex flex-col grow mt-4 space-y-4">
                                    <h2 className="text-xl text-center font-bold">
                                        <u>{project.title}</u>
                                    </h2>

                                    <p className="text-sm text-center">
                                        {project.description}
                                    </p>

                                    {/* Tools */}
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {project.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="bg-gray-600 border border-white px-3 py-1 rounded-2xl text-sm"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button pinned at bottom */}
                                    <div className="mt-auto flex justify-center pt-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                bg-purple-700
                                                text-white
                                                px-10
                                                py-2
                                                rounded-2xl
                                                hover:underline
                                            "
                                        >
                                            View Project Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Project;
