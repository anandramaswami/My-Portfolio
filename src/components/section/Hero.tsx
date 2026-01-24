import { useNavigate } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import Buttons from "../ui/Buttons";
import ProfilepicImg from "../../assets/images/Profilepic.png";

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
    hidden: { opacity: 0, y: -80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2.2,
            ease: easeOut,
            delay: 8,
        },
    },
};

function Hero() {

    const navigate = useNavigate();

    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume/ANAND-P-R-CV-R5.pdf"; // path from public/
        link.download = "ANAND-P-R-CV-R5.pdf";
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
                px-4
                pt-24 lg:pt-0
            "
        >
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                {/* LEFT */}
                <div
                    className="
                        w-full lg:w-1/2
                        flex flex-col gap-6
                        text-center lg:text-left
                        items-center lg:items-start
                        lg:max-w-xl
                        lg:translate-x-10
                    "
                >
                    <motion.h1
                        variants={headingVariants}
                        className="text-2xl sm:text-3xl font-extrabold leading-tight"
                    >
                        Heyy, this is{" "}
                        <span className="text-purple-700 text-5xl sm:text-6xl lg:text-7xl">
                            Anand
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={paragraphVariants}
                        className="text-lg sm:text-xl font-extrabold"
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
                        <div className="bg-purple-700 border-2 border-white ml-4 px-6 py-2 rounded-2xl">
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
                <div className="relative w-full lg:w-1/2 flex justify-center">
                    <motion.div
                        variants={imageBgVariants}
                        className="
                            relative
                            w-64 h-64
                            sm:w-72 sm:h-72
                            lg:w-[70%] lg:h-full
                            bg-purple-700
                            rounded-full
                            flex items-center justify-center
                        "
                    >
                        <motion.img
                            variants={imageVariants}
                            src={ProfilepicImg}
                            alt="Profile-Pic"
                            className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-b-4xl"
                        />
                    </motion.div>
                </div>

            </div>
        </motion.section>
    );
}

export default Hero;
