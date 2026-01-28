import { motion, easeOut } from "framer-motion";
import { ExperienceData } from "../datas/experience";


const sectionVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.5, 
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
            delayChildren: 0.5,
            staggerChildren: 0.25,
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
            duration: 1.5,
            ease: easeOut,
        },
    },
});


function Experience() {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen flex justify-center text-white py-16 px-4 sm:py-20"
        >
            <div className="w-full max-w-6xl flex flex-col gap-12">

                {/* Heading */}
                <motion.h1
                    variants={headingVariants}
                    className="text-center text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold underline"
                >
                    Experience
                </motion.h1>

                {/* Experience Cards */}
                <motion.div
                    variants={cardsContainerVariants}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-16"
                >
                    {ExperienceData.map((exp, index) => {
                        const direction = index % 2 === 0 ? "left" : "right";

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants(direction)}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl p-5 flex flex-col space-y-3"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold">
                                    {exp.role} - {exp.duration}
                                </h3>

                                <h2 className="text-lg sm:text-xl font-semibold underline">
                                    {exp.company}
                                </h2>

                                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm sm:text-base">
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Experience;
