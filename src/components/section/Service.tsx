import { ServiceData } from "../datas/service";
import { Code, Layout, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS } from "../datas/skills";
import type { Skill } from "../datas/skills";


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
            transition: { duration: 1.9, delay: 0.6 },
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
                    className="border border-white rounded-2xl p-4 flex flex-col gap-2 hover:scale-105 hover:shadow-xl  hover:border-purple-500/40"
                >
                    <div className="flex items-center gap-3">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                        />
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

            {/* ================= SERVICES ================= */}
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
