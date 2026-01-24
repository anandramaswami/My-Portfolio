import { ServiceData } from "../datas/service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Layout, Smartphone } from "lucide-react";
import {
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faReact,
    faJs
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faServer,
    faDatabase,
    faMobileScreen,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Service() {

    const serviceIcons = [Code, Layout, Smartphone];

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.3,
                delayChildren: 0.6,
            },
        },
    };

    const headingBlockVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 0.6,
            },
        },
    };

    const headingVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.4 },
        },
    };

    const mainVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.9,
                delay: 2.4,
            },
        },
    };

    return (
        <div className="min-h-screen flex flex-col items-center text-white py-10 sm:py-16 px-4">

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-3xl text-purple-700 font-bold"
            >
                <u>Skills</u>
            </motion.h1>

            <motion.div
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 sm:mt-7 w-full max-w-5xl bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl p-4 sm:p-5"
            >

                {/* Front-End */}
                <div className="w-full mb-4 sm:mb-6">
                    <motion.div variants={headingBlockVariants} className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[30%] flex justify-center items-center py-2 sm:py-0">
                            <motion.h1
                                variants={headingVariants}
                                className="text-center text-lg sm:text-2xl font-bold"
                            >
                                Front-End
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={mainVariants}
                            className="w-full sm:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-0"
                        >
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faHtml5} style={{ color: "#E34F26" }} />
                                <p className="text-xs sm:text-sm">HTML</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#1572B6" }} />
                                <p className="text-xs sm:text-sm">CSS</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faBootstrap} style={{ color: "#7952B3" }} />
                                <p className="text-xs sm:text-sm">Bootstrap</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#06B6D4" }} />
                                <p className="text-xs sm:text-sm">TailwindCSS</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faJs} style={{ color: "#F7DF1E" }} />
                                <p className="text-xs sm:text-sm">JavaScript</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} />
                                <p className="text-xs sm:text-sm">React</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#3178C6" }} />
                                <p className="text-xs sm:text-sm">TypeScript</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Back-End */}
                <div className="w-full mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[30%] flex justify-center items-center py-2 sm:py-0">
                            <motion.h1 variants={headingVariants} className="text-center text-lg sm:text-2xl font-bold">
                                Back-End
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={mainVariants}
                            className="w-full sm:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-0"
                        >
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#3776AB" }} />
                                <p className="text-xs sm:text-sm">Python</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faServer} style={{ color: "#0C4B36" }} />
                                <p className="text-xs sm:text-sm">Django</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faServer} style={{ color: "#0C4B36" }} />
                                <p className="text-xs sm:text-sm">Django REST</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faDatabase} style={{ color: "#4479A1" }} />
                                <p className="text-xs sm:text-sm">MySQL</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Development */}
                <div className="w-full mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[30%] flex justify-center items-center py-2 sm:py-0">
                            <motion.h1 variants={headingVariants} className="text-center text-lg sm:text-2xl font-bold">
                                Mobile Development
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={mainVariants}
                            className="w-full sm:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-0"
                        >
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faMobileScreen} style={{ color: "#61DAFB" }} />
                                <p className="text-xs sm:text-sm">React Native</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className="w-full mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-[30%] flex justify-center items-center py-2 sm:py-0">
                            <motion.h1 variants={headingVariants} className="text-center text-lg sm:text-2xl font-bold">
                                Tools & Platforms
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={mainVariants}
                            className="w-full sm:w-[70%] grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-2 sm:p-0"
                        >
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faTerminal} style={{ color: "#007ACC" }} />
                                <p className="text-xs sm:text-sm">VS Code</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#F05032" }} />
                                <p className="text-xs sm:text-sm">Git & GitHub</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faCode} style={{ color: "#6CC644" }} />
                                <p className="text-xs sm:text-sm">GitHub Copilot</p>
                            </div>
                            <div className="w-full h-24 sm:h-25 border border-white rounded-2xl p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 justify-center items-center">
                                <FontAwesomeIcon icon={faTerminal} style={{ color: "#A855F7" }} />
                                <p className="text-xs sm:text-sm">Antigravity</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-8 sm:mt-15 text-center text-2xl sm:text-3xl md:text-3xl text-purple-700 font-bold"
            >
                <u>Services</u>
            </motion.h1>

            <div className="mt-6 sm:mt-7 mb-10 sm:mb-15 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {ServiceData.map((service, index) => {
                    const Icon = serviceIcons[index];
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl p-4 sm:p-6 space-y-3"
                        >
                            <h1 className="text-center text-lg sm:text-xl font-semibold">
                                {service.title}
                            </h1>
                            {Icon && <Icon className="mx-auto w-6 sm:w-8 h-6 sm:h-8" />}
                            <p className="text-center text-sm sm:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
}

export default Service;
