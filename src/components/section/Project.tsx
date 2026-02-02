import { motion, easeOut } from "framer-motion";
import { ProjectData } from "../datas/project";

const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.4,
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
            staggerChildren: 0.25, // one by one
        },
    },
};

// ✅ All cards come from RIGHT → LEFT
const cardVariants = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: easeOut,
        },
    },
};

function Project() {
    return (
        <motion.section
            id="projects"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen flex justify-center text-white py-24"
        >
            <div className="w-[94%] sm:w-[92%] lg:w-[85%] xl:w-[80%]">

                {/* Heading */}
                <motion.div
                    variants={headingVariants}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl text-purple-700 font-bold tracking-wide">
                        <u>Projects</u>
                    </h1>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={cardsContainerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {ProjectData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.04, y: -6 }}
                            className="
                                bg-[#1a181b]/80 backdrop-blur-md
                                border-2 border-purple-700
                                shadow-[0_0_12px_1px_#7e22ce]
                                rounded-2xl
                                flex flex-col
                                transition-all duration-300
                                hover:shadow-[0_0_25px_4px_#7e22ce]
                            "
                        >
                            {/* Image with spacing */}
                            <div className="p-4">
                                <div className="overflow-hidden rounded-xl border border-white/20">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                            w-full 
                                            h-52 
                                            object-cover
                                            transition-transform duration-500
                                            hover:scale-110
                                        "
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col grow px-6 pb-6 space-y-5">
                                <h2 className="text-xl text-center font-bold tracking-wide">
                                    <u>{project.title}</u>
                                </h2>

                                <p className="text-sm text-center text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tools */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.tools.map((tool, i) => (
                                        <span
                                            key={i}
                                            className="
                                                bg-gray-700/70
                                                border border-white
                                                px-3 py-1
                                                rounded-full
                                                text-xs
                                                hover:border-2
                                                hover:border-purple-700
                                                transition
                                            "
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
                                            hover:bg-purple-800
                                            transition
                                        "
                                    >
                                        View Project Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Project;
