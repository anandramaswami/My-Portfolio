import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.3,
            delayChildren: 0.8,
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.5 },
    },
};

const subHeadingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: easeOut,
        },
    },
};

const paragraphVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 2.1 },
    },
};

function About() {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);

    /* ===== COUNTER LOGIC ===== */
    useEffect(() => {
        if (!hasCounted) return;

        let yearsInterval: number;
        let projectsInterval: number;

        yearsInterval = window.setInterval(() => {
            setYears((prev) => {
                if (prev >= 1) {
                    clearInterval(yearsInterval);
                    return 1;
                }
                return prev + 1;
            });
        }, 400);

        projectsInterval = window.setInterval(() => {
            setProjects((prev) => {
                if (prev >= 4) {
                    clearInterval(projectsInterval);
                    return 4;
                }
                return prev + 1;
            });
        }, 120);

        return () => {
            clearInterval(yearsInterval);
            clearInterval(projectsInterval);
        };
    }, [hasCounted]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onViewportEnter={() => setHasCounted(true)}
            className="min-h-screen mt-15 flex justify-center items-center text-white px-4"
        >
            <motion.div
                variants={containerVariants}
                className="
                    w-full max-w-4xl
                    bg-[#1a181b]
                    border-2 border-purple-700
                    shadow-[0_0_10px_1px_#7e22ce]
                    rounded-2xl
                    py-12 sm:py-16
                    flex flex-col gap-6 sm:gap-8 items-center
                "
            >
                {/* Main Heading */}
                <motion.h1
                    variants={headingVariants}
                    className="text-2xl sm:text-3xl md:text-4xl text-purple-700 font-bold underline"
                >
                    About Me
                </motion.h1>

                {/* Sub Heading */}
                <motion.div
                    variants={subHeadingVariants}
                    className="flex flex-col items-center gap-2"
                >
                    <motion.h2
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="
                            text-lg sm:text-xl md:text-2xl font-semibold tracking-wide
                            text-transparent bg-clip-text bg-white
                        "
                    >
                        Always learning, always building
                    </motion.h2>

                    <motion.span
                        animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-0.75 w-80 rounded-full bg-white"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={paragraphVariants}
                    className="text-base sm:text-lg md:text-md text-center sm:text-left px-2 sm:px-6 leading-relaxed"
                >
                    I am a Frontend Developer passionate in building modern, responsive,
                    and user-centric web interfaces focused on React and also proficient in
                    Django and Python Full Stack development, backed by real-world
                    experience. From working as a Junior Developer to building full-scale
                    applications during internships, I enjoy creating clean UI experiences
                    powered by robust backend logic.
                </motion.p>

                {/* ===== STATS SECTION (NEW) ===== */}
                <div className="grid grid-cols-2 gap-6 pt-6 w-[90%] max-w-md">
                    <div className="border border-purple-700 rounded-xl py-4 text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">
                            {years}+
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Years Experience
                        </p>
                    </div>

                    <div className="border border-purple-700 rounded-xl py-4 text-center">
                        <h3 className="text-3xl sm:text-4xl font-bold text-purple-700">
                            {projects}+
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Projects Completed
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default About;
