import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiUser, FiEdit } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <section className="relative min-h-screen text-white">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center contact-bg"

            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight">
                        Let’s Create Your Look
                    </h1>
                    <p className="poppins-thin mt-4 text-gray-300 max-w-xl mx-auto">
                        Book a premium makeover or message us directly. We respond within 24 hours.
                    </p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid md:grid-cols-2 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
                >
                    {/* Left Info */}
                    <div className="p-10 space-y-6 poppins-thin">
                        <h2 className="text-2xl font-semibold poppins-thin">Angelic Luxe Makeovers</h2>
                        <p className="text-gray-300 text-sm poppins-thin">
                            Luxury bridal & party makeovers in Pune. Personalized looks crafted with precision and care.
                        </p>

                        <Info icon={<FiPhone />} text="+91 836 808 2337" />
                        <Info icon={<FiMail />} text="info@angelicluxe.com" />
                        <Info icon={<FiMapPin />} text="Yahavi, OCR 9, Vanaha Township Lavale Pirangut,Pune, Maharashtra 412115" />

                        <div className="flex gap-4 pt-4">
                            <Social icon={<FaInstagram />} />
                            <Social icon={<FaFacebookF />} />
                            <Social icon={<FaYoutube />} />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 bg-black/30">
                        <form onSubmit={handleSubmit} className="space-y-5 poppins-thin">
                            <Input icon={<FiUser />} placeholder="Your Name" required />
                            <Input icon={<FiMail />} type="email" placeholder="Email Address" required />
                            <Textarea icon={<FiEdit />} placeholder="Tell us what you’re looking for" required />

                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="poppins-thin cursor-pointer w-full rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold py-3"
                            >
                                Send Message
                            </motion.button>


                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {success && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white rounded-2xl p-8 text-center max-w-sm w-full text-black"
                        >
                            <h3 className="text-xl font-semibold mb-2">Message Sent 💛</h3>
                            <p className="text-sm text-gray-600 mb-6">
                                We’ll get back to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="rounded-full border px-6 py-2 text-sm hover:bg-gray-100"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

/* ---------------- Components ---------------- */

const Info = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-gray-300 text-sm">
        {icon} <span>{text}</span>
    </div>
);

const Social = ({ icon }) => (
    <a className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
        {icon}
    </a>
);

const Input = ({ icon, ...props }) => (
    <div className="flex items-center bg-white/10 rounded-xl px-4 py-3 border border-white/10 focus-within:border-[#d4af37]">
        <span className="text-gray-300 mr-3">{icon}</span>
        <input
            {...props}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
        />
    </div>
);

const Textarea = ({ icon, ...props }) => (
    <div className="flex items-start bg-white/10 rounded-xl px-4 py-3 border border-white/10 focus-within:border-[#d4af37]">
        <span className="text-gray-300 mr-3 mt-1">{icon}</span>
        <textarea
            {...props}
            rows={4}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none"
        />
    </div>
);
