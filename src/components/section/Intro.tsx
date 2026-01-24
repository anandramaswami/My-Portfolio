import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { easeOut, easeInOut, motion } from "framer-motion";

function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", { replace: true }); // go to Home
        }, 5200);

        return () => clearTimeout(timer);
    }, [navigate]);

    const variants = {
        hidden: { opacity: 0, y: 120 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 1.7, ease: easeOut } },
        exit: { opacity: 0, y: 120, transition: { duration: 1.4, ease: easeInOut } },
    };

    return (
        <motion.div
            className="min-h-screen w-full bg-linear-to-br from-black via-zinc-900 to-black flex items-center justify-center px-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="text-[#3b82f6] font-extrabold flex flex-col gap-3 text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">ANAND'S</h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">PORTFOLIO</h1>
            </div>
        </motion.div>
    );
}

export default Intro;
