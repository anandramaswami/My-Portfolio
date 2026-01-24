import { easeInOut, easeOut, motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", { replace: true });
        }, 5200); // intro total time

        return () => clearTimeout(timer);
    }, [navigate]);

    const variants = {
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.7, duration: 1.7, ease: easeOut },
        },
        exit: {
            opacity: 0,
            y: 120,
            transition: { duration: 1.4, ease: easeInOut },
        },
    };

    return (
        <motion.div
            className="max-h-screen w-full bg-linear-to-br from-black via-zinc-900 to-black flex items-center justify-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="text-[#3b82f6] text-8xl font-extrabold mt-30 flex flex-col gap-3">
                <h1>ANAND'S</h1>
                <h1>PORTFOLIO</h1>
            </div>
        </motion.div>
    );
}

export default Intro;
