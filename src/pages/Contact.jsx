import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
    return (
        <div className="bg-gradient-to-br from-[#4e352b] via-[#2c1f1a] to-black min-h-screen text-white py-16 px-6">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Get in Touch
                </motion.h1>
                <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">
                    We’d love to hear from you. Reach out for appointments, inquiries, or collaborations.
                </p>
            </section>

            {/* Contact Info Cards */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
                {[
                    { icon: <FiPhone />, title: "Call Us", detail: "+91 98765 43210" },
                    { icon: <FiMail />, title: "Email Us", detail: "info@angelicluxe.com" },
                    { icon: <FiMapPin />, title: "Visit Us", detail: "Pune, Maharashtra, India" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-3xl text-[#d4af37] mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-[#f5e6a2] mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.detail}</p>
                    </motion.div>
                ))}
            </section>

            {/* Contact Form */}
            <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-semibold text-[#f5e6a2] mb-6 text-center">
                    Send Us a Message
                </h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Message</label>
                        <textarea
                            rows="5"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full rounded-full bg-[#d4af37] text-black font-semibold py-3 hover:bg-[#f5e6a2] transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </section>
        </div>
    );
}