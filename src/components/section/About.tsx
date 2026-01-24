import { easeOut, motion } from "framer-motion";

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
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen mt-15 flex justify-center items-center text-white px-4"
        >
            <motion.div
                variants={containerVariants}
                className="w-full max-w-4xl bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl py-12 sm:py-16 flex flex-col gap-6 sm:gap-8 items-center"
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
            text-transparent bg-clip-text
            bg-white
            animate-accent
        "
    >
        Always learning, always building
    </motion.h2>

    {/* Animated underline */}
    <motion.span
        animate={{ scaleX: [0.6, 1, 0.6], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="
            h-0.75 w-80 rounded-full
            bg-white
            animate-accent
        "
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
            </motion.div>
        </motion.section>
    );
}

export default About;
