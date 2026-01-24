import { ServiceData } from "../datas/service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code, Layout, Smartphone } from "lucide-react";
import {
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faReact,
    faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCode,
    faServer,
    faDatabase,
    faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

/* ===================== SKILL TYPES ===================== */
type Skill = {
    name: string;
    icon: any;
    color: string;
    level: number; // percentage
};

/* ===================== SKILL DATA ===================== */
const FRONTEND_SKILLS: Skill[] = [
    { name: "HTML", icon: faHtml5, color: "#E34F26", level: 95 },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6", level: 90 },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3", level: 80 },
    { name: "TailwindCSS", icon: faCode, color: "#06B6D4", level: 85 },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E", level: 80 },
    { name: "React", icon: faReact, color: "#61DAFB", level: 85 },
    { name: "TypeScript", icon: faCode, color: "#3178C6", level: 75 },
];

const BACKEND_SKILLS: Skill[] = [
    { name: "Python", icon: faCode, color: "#3776AB", level: 70 },
    { name: "Django", icon: faServer, color: "#0C4B36", level: 75 },
    { name: "Django REST", icon: faServer, color: "#0C4B36", level: 70 },
    { name: "MySQL", icon: faDatabase, color: "#4479A1", level: 60 },
];

const TOOLS_SKILLS: Skill[] = [
    { name: "VS Code", icon: faTerminal, color: "#007ACC", level: 90 },
    { name: "Git & GitHub", icon: faCode, color: "#F05032", level: 80 },
    { name: "GitHub Copilot", icon: faCode, color: "#6CC644", level: 80 },
    { name: "Antigravity", icon: faTerminal, color: "#A855F7", level: 65 },
];

/* ===================== THERMOMETER BAR ===================== */
const ThermometerBar = ({ value }: { value: number }) => (
    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mt-2">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full bg-linear-to-r from-purple-500 to-fuchsia-500"
        />
    </div>
);

/* ===================== COMPONENT ===================== */
function Service() {
    const serviceIcons = [Code, Layout, Smartphone];

    const rowVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.3, delayChildren: 0.6 },
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
            transition: { duration: 1.9, delay: 2.4 },
        },
    };

    const renderSkillGrid = (skills: Skill[]) => (
        <motion.div
            variants={mainVariants}
            className="w-full sm:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-3 p-2 sm:p-0"
        >
            {skills.map((skill) => (
                <div
                    key={skill.name}   
                    className="border border-white rounded-2xl p-4 flex flex-col gap-2"
                >
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} />
                        <p className="text-sm sm:text-base font-semibold">
                            {skill.name}
                        </p>
                        <span className="ml-auto text-xs text-purple-400">
                            {skill.level}%
                        </span>
                    </div>
                    <ThermometerBar value={skill.level} />
                </div>
            ))}
        </motion.div>
    );

    return (
        <div className="min-h-screen flex flex-col items-center text-white py-10 sm:py-16 px-4">

            {/* ================= SKILLS ================= */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl text-purple-700 font-bold"
            >
                <u>Skills</u>
            </motion.h1>

            <motion.div
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 w-full max-w-5xl bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl p-4 sm:p-5"
            >
                {/* Frontend */}
                <div className="mb-6 flex flex-col sm:flex-row">
                    <div className="sm:w-[30%] flex justify-center items-center">
                        <motion.h1 variants={headingVariants} className="text-xl font-bold">
                            Front-End
                        </motion.h1>
                    </div>
                    {renderSkillGrid(FRONTEND_SKILLS)}
                </div>

                {/* Backend */}
                <div className="mb-6 flex flex-col sm:flex-row">
                    <div className="sm:w-[30%] flex justify-center items-center">
                        <motion.h1 variants={headingVariants} className="text-xl font-bold">
                            Back-End
                        </motion.h1>
                    </div>
                    {renderSkillGrid(BACKEND_SKILLS)}
                </div>

                {/* Tools */}
                <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-[30%] flex justify-center items-center">
                        <motion.h1 variants={headingVariants} className="text-xl font-bold">
                            Tools & Platforms
                        </motion.h1>
                    </div>
                    {renderSkillGrid(TOOLS_SKILLS)}
                </div>
            </motion.div>

            {/* ================= SERVICES (UNCHANGED) ================= */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-2xl sm:text-3xl text-purple-700 font-bold"
            >
                <u>Services</u>
            </motion.h1>

            <div className="mt-6 mb-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ServiceData.map((service, index) => {
                    const Icon = serviceIcons[index];
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#1a181b] border-2 border-purple-700 shadow-[0_0_10px_1px_#7e22ce] rounded-2xl p-6 space-y-3"
                        >
                            <h1 className="text-center text-lg font-semibold">
                                {service.title}
                            </h1>
                            {Icon && <Icon className="mx-auto w-8 h-8" />}
                            <p className="text-center text-sm">
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
