import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("success");
                    form.current?.reset();
                    setLoading(false);

                    setTimeout(() => setStatus("idle"), 3000);
                },
                () => {
                    setStatus("error");
                    setLoading(false);

                    setTimeout(() => setStatus("idle"), 3000);
                }
            );
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full text-white py-20 flex items-center"
        >
            <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl text-purple-700 font-bold">
                        <u>Contact</u>
                    </h2>
                    <p className="text-white text-base sm:text-lg mt-4 max-w-xl mx-auto">
                        Feel free to reach out to me!
                    </p>
                </motion.div>

                {/* Form */}
                <div className="flex justify-center">
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 140 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="
              w-full
              max-w-xl
              bg-linear-to-br from-black via-zinc-900 to-black
              border-2 border-purple-700
              shadow-[0_0_10px_1px_#7e22ce]
              rounded-2xl
              p-6 sm:p-8
              space-y-6
            "
                    >
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full rounded-xl bg-[#1a1a2a] border border-zinc-700 px-4 py-3 outline-none focus:border-purple-700"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full rounded-xl bg-[#1a1a2a] border border-zinc-700 px-4 py-3 outline-none focus:border-purple-700"
                            />
                        </div>

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full rounded-xl bg-[#1a1a2a] border border-zinc-700 px-4 py-3 outline-none focus:border-purple-700"
                        />

                        {/* Message */}
                        <textarea
                            rows={5}
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full rounded-xl bg-[#1a1a2a] border border-zinc-700 px-4 py-3 outline-none focus:border-purple-700 resize-none"
                        />

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="
                w-full
                flex items-center justify-center gap-2
                rounded-xl
                bg-purple-700
                hover:bg-purple-800
                transition
                px-6 py-3
                font-semibold
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <Send className="w-5 h-5" />
                        </button>

                        {/* Animated Feedback (Moved Below Button) */}
                        <AnimatePresence>
                            {status !== "idle" && (
                                <motion.div
                                    key={status}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className={`text-center text-sm sm:text-base font-semibold ${status === "success"
                                            ? "text-green-400"
                                            : "text-red-400"
                                        }`}
                                >
                                    {status === "success"
                                        ? "✅ Message sent successfully!"
                                        : "❌ Failed to send message. Please try again."}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
