import { useNavigate } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import Buttons from "../ui/Buttons";
import ProfileImg from "../../assets/images/p2.png";

/* ================= HERO ANIMATIONS ================= */

const heroVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 3,
            staggerChildren: 2,
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 10,
        transition: { duration: 1.8, ease: easeOut },
    },
};

const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 10,
        transition: { duration: 2, ease: easeOut },
    },
};

const buttonsVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: easeOut },
    },
};

const imageBgVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            ease: easeOut,
            delay: 6,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: easeOut,
            delay: 6.5,
        },
    },
};

function Hero() {
    const navigate = useNavigate();

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume/ANAND_P_R_RESUME(1).pdf";
        link.download = "ANAND_P_R_RESUME(1).pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="
                min-h-screen w-full flex
                items-start lg:items-center
                justify-center
                text-white
                pt-24 lg:pt-0
                lg:px-20 xl:px-24
            "
        >
            <div
                className="
                    w-full max-w-7xl
                    flex flex-col lg:flex-row
                    items-center
                    gap-16 lg:gap-20
                    lg:justify-between
                "
            >

                {/* LEFT */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex flex-col gap-6
                        text-center lg:text-left
                        items-center lg:items-start
                        lg:max-w-xl
                        lg:pl-6
                    "
                >
                    <motion.h1
                        variants={headingVariants}
                        className="text-xl sm:text-3xl lg:text-5xl font-extrabold leading-tight"
                    >
                        Heyy, this is{" "}
                        <span className="text-purple-700 text-4xl sm:text-6xl lg:text-7xl">
                            Anand
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={paragraphVariants}
                        className="text-md px-17 sm:text-xl lg:px-1 lg:text-2xl font-extrabold"
                    >
                        Frontend Developer | Python Full Stack
                    </motion.p>

                    <motion.div
                        variants={buttonsVariants}
                        className="
                            mt-8
                            flex flex-col sm:flex-row
                            gap-6 sm:gap-10
                            justify-center lg:justify-start
                            items-center
                        "
                    >
                        <div className="bg-purple-700 border-2 border-white px-6 py-2 rounded-2xl">
                            <Buttons
                                label="About Me"
                                onClick={() => navigate("/about")}
                            />
                        </div>

                        <div className="bg-transparent border-2 border-purple-700 shadow-[0_0_7px_1px] text-purple-700 font-semibold px-6 py-2 rounded-2xl">
                            <Buttons
                                label="Download Resume"
                                onClick={handleResumeDownload}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT */}
                <div className="relative w-full lg:w-1/2 h-[420px] flex justify-center lg:justify-end overflow-hidden lg:pr-6">
                    <motion.div
                        variants={imageBgVariants}
                        className="
                            relative
                            mx-auto lg:mx-0
                            w-64 h-64
                            sm:w-72 sm:h-72
                            lg:w-[360px] lg:h-[360px]
                            bg-purple-700
                            rounded-full
                            overflow-hidden
                            flex
                            items-end
                            justify-center
                        "
                    >
                        <motion.img
                            variants={imageVariants}
                            src={ProfileImg}
                            alt="Profile-Pic"
                            className="
                                w-56 h-56
                                sm:w-64 sm:h-64
                                lg:w-80 lg:h-80
                                object-cover
                                translate-y-2
                                rotate-[5deg]
                                drop-shadow-[0_0_15px_white]
                            "
                        />
                    </motion.div>
                </div>

            </div>
        </motion.section>
    );
}

export default Hero;
