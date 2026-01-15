import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiUser, FiEdit } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

/**
 * Contact.jsx
 * - Full-bleed background image with dark overlay
 * - Centered translucent card with two-column layout on desktop
 * - Floating labels, subtle focus glow, refined CTA
 * - Animated confirmation modal with checkmark
 *
 * Tailwind CSS required. Replace image URLs and map embed as needed.
 */

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // simulate submit / show modal
        setIsOpen(true);
    };

    return (
        <div className="relative min-h-screen text-white">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')",
                }}
                aria-hidden="true"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                {/* Header */}
                <header className="text-center mb-12">
                    <motion.h1
                        className="text-3xl md:text-5xl font-serif font-semibold tracking-tight"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ letterSpacing: "-0.02em" }}
                    >
                        Contact
                    </motion.h1>
                    <motion.p
                        className="mt-3 text-gray-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                    >
                        Send a message or book a consultation. We reply within 24 hours.
                    </motion.p>
                </header>

                {/* Main card */}
                <motion.div
                    className="mx-auto bg-white/6 border border-white/8 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2"
                    initial={{ opacity: 0, scale: 0.995 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Left visual panel */}
                    <div className="hidden md:flex flex-col justify-center items-start p-10 bg-gradient-to-b from-black/20 to-black/10">
                        <div className="w-full">
                            <h2 className="text-2xl text-white font-medium mb-3">Angelic Luxe Studio</h2>
                            <p className="text-gray-200 mb-6">
                                Premium makeovers, curated looks, and personalized consultations. Visit our studio or message us directly.
                            </p>

                            <div className="flex items-center gap-3 text-gray-200 mb-4">
                                <FiPhone className="text-lg" />
                                <span className="text-sm">+91 98765 43210</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-200 mb-4">
                                <FiMail className="text-lg" />
                                <span className="text-sm">info@angelicluxe.com</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-200">
                                <FiMapPin className="text-lg" />
                                <span className="text-sm">Pune, Maharashtra, India</span>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <a className="text-white/90 hover:text-white transition" href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a className="text-white/90 hover:text-white transition" href="#" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a className="text-white/90 hover:text-white transition" href="#" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right form panel */}
                    <div className="p-8 md:p-10">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {/* Row: Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FloatingInput id="name" label="Full name" icon={<FiUser />} required />
                                <FloatingInput id="email" label="Email address" type="email" icon={<FiMail />} required />
                            </div>

                            {/* Message */}
                            <FloatingTextarea id="message" label="Message" icon={<FiEdit />} required />

                            {/* CTA */}
                            <motion.button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#111827] to-[#111827] border border-white/10 px-6 py-3 text-sm font-medium text-white shadow-md hover:scale-[1.01] transition"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] bg-clip-text text-transparent font-semibold">
                                    Send Message
                                </span>
                            </motion.button>

                            <p className="text-xs text-gray-300 mt-2">
                                Or start a chat on WhatsApp for faster replies.
                            </p>

                            <div className="mt-4 flex gap-3">
                                <a
                                    href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20premium%20makeover%20with%20Angelic%20Luxe."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-black hover:brightness-95 transition"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.19 1.6 6.01L0 24l6.17-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zM9.5 17.2l-.4-1.5c-.1-.4-.6-.7-1-.5-1.1.5-2.1.8-3.3.8-.3 0-.6-.1-.8-.3-.3-.3-.5-.7-.5-1.1 0-2.2 1.6-4.1 3.7-4.6.3-.1.6 0 .8.2l.9.9c.2.2.5.3.8.2 1.1-.3 2.2-.5 3.3-.5.4 0 .8.3.9.7l.4 1.5c.1.4 0 .8-.3 1.1l-1.2 1.2c-.3.3-.7.4-1.1.3-1.1-.2-2.2-.4-3.2-.4-.4 0-.8.2-1 .5z" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href="/BookAppointment"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition"
                                >
                                    Book Appointment
                                </a>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Map strip (compact) */}
                <div className="max-w-5xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Angelic Luxe Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.158...replace_with_your_embed_link"
                        width="100%"
                        height="260"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-xl"
                    />
                </div>
            </div>

            {/* Confirmation Modal */}
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                    <motion.div
                        className="relative bg-white rounded-2xl max-w-md w-full p-8 z-10 text-center"
                        initial={{ y: 20, scale: 0.98 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                        <motion.div
                            className="mx-auto mb-4 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        >
                            <svg className="w-10 h-10" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    d="M14 27 L22 34 L38 16"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.45, ease: "easeInOut" }}
                                />
                            </svg>
                        </motion.div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Thanks — we received your message</h3>
                        <p className="text-sm text-gray-600 mb-6">
                            Our team will contact you within 24 hours to confirm details. Meanwhile you can start a chat on WhatsApp.
                        </p>

                        <div className="flex justify-center gap-3">
                            <a
                                href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20premium%20makeover%20with%20Angelic%20Luxe."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-black hover:brightness-95 transition"
                            >
                                Chat on WhatsApp
                            </a>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

/* --- Helper components --- */
/* FloatingInput and FloatingTextarea implement a simple floating label using Tailwind utilities.
   They keep markup concise and are reusable across the form. */

function FloatingInput({ id, label, type = "text", icon, required = false }) {
    return (
        <label htmlFor={id} className="relative block">
            <div className="flex items-center bg-white/4 rounded-lg border border-white/6 focus-within:border-[#d4af37] transition">
                <span className="px-3 text-gray-300">{icon}</span>
                <input
                    id={id}
                    name={id}
                    type={type}
                    required={required}
                    className="peer w-full bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none"
                    placeholder={label}
                />
            </div>
            <span className="pointer-events-none absolute left-12 top-2 text-xs text-gray-300 transition-all peer-focus:top-[-10px] peer-focus:text-[11px] peer-focus:text-[#d4af37] peer-valid:top-[-10px] peer-valid:text-[11px]">
                {label}
            </span>
        </label>
    );
}

function FloatingTextarea({ id, label, icon, required = false }) {
    return (
        <label htmlFor={id} className="relative block">
            <div className="flex items-start bg-white/4 rounded-lg border border-white/6 focus-within:border-[#d4af37] transition">
                <span className="px-3 pt-3 text-gray-300">{icon}</span>
                <textarea
                    id={id}
                    name={id}
                    rows={4}
                    required={required}
                    className="peer w-full bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none resize-none"
                    placeholder={label}
                />
            </div>
            <span className="pointer-events-none absolute left-12 top-2 text-xs text-gray-300 transition-all peer-focus:top-[-10px] peer-focus:text-[11px] peer-focus:text-[#d4af37] peer-valid:top-[-10px] peer-valid:text-[11px]">
                {label}
            </span>
        </label>
    );
}

