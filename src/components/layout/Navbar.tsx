import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ================== ANIMATIONS (UNCHANGED) ================== */

const navbarVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: easeOut,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: easeOut },
    },
};

const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.4, ease: easeOut },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.3, ease: easeOut },
    },
};

/* ================== COMPONENT ================== */

function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    /* ===== SCROLL BEHAVIOR (from Antigravity idea) ===== */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Experience", path: "/experience" },
        { label: "Skills & Service", path: "/service" },
        { label: "Projects", path: "/project" },
        { label: "Contact", path: "/contact" },
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
        setOpen(false);
    };

    return (
        <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className={`
                fixed top-0 left-0 w-full z-50 text-white
                transition-all duration-300
                ${isScrolled
                    ? "backdrop-blur-md bg-[#181824]/80 h-16 shadow-lg"
                    : "bg-[#181824] h-20 shadow-[0_4px_10px_-4px_rgba(255,255,255,0.7)]"}
                px-4 sm:px-8
            `}
        >
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

                {/* LOGO */}
                <motion.h1
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl text-purple-700 font-extrabold"
                >
                    Portfolio
                </motion.h1>

                {/* DESKTOP NAV */}
                <motion.nav className="hidden md:flex gap-8 text-base font-semibold">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.label}
                            variants={itemVariants}
                            onClick={() => navigate(item.path)}
                            className="
                                relative hover:text-purple-700 transition-colors
                                before:content-['']
                                before:absolute before:top-full before:left-0
                                before:w-0 before:h-0.5
                                before:bg-purple-700
                                before:transition-all
                                hover:before:w-full
                            "
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </motion.nav>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-purple-700"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="
                            md:hidden
                            backdrop-blur-md bg-[#181824]/90
                            border-t border-purple-700/40
                            shadow-[0_8px_20px_-10px_rgba(255,255,255,0.6)]
                        "
                    >
                        <div className="flex flex-col py-6 gap-6 items-center text-lg font-semibold">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.label}
                                    variants={itemVariants}
                                    onClick={() => handleNavigate(item.path)}
                                    className="hover:text-purple-700"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Navbar;
