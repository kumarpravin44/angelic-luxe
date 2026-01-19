import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaPaintBrush, FaStar, FaRegSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
    const services = [
        {
            icon: <FaCrown />,
            title: "Bridal Makeovers",
            desc: "Flawless bridal look with expert makeup and styling. Radiant confidence for your big day.",
        },
        {
            icon: <FaPaintBrush />,
            title: "Threading",
            desc: "Clean, precise eyebrow shaping. Smooth finish with gentle technique.",
        },
        {
            icon: <FaStar />,
            title: "Facial",
            desc: "Refreshing treatment to hydrate and rejuvenate. Restores natural glow instantly.",
        },
        {
            icon: <FaRegSmile />,
            title: "Hair Straightening",
            desc: "Sleek, silky hair made effortless. Long‑lasting smooth style.",
        },
    ];

    return (
        <div className="bg-gradient-to-br from-[#2c1f1a] via-black to-[#4e352b] min-h-screen text-white py-20 px-6">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <motion.h1
                    className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight "
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
                <motion.p
                    className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed poppins-thin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Each service is a milestone in your beauty journey — explore them step by step.
                </motion.p>
            </section>

            {/* Timeline */}
            <section className="relative max-w-5xl mx-auto">
                {/* Center line only visible on md+ */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#d4af37] to-[#f5e6a2]"></div>

                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        className={`relative flex flex-col md:flex-row items-center mb-16 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Icon Node */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] flex items-center justify-center text-black text-2xl shadow-lg mb-6 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                            {service.icon}
                        </div>

                        {/* Card */}
                        <div
                            className={`w-full md:w-5/12 bg-white/10 backdrop-blur-md border border-[#d4af37]/40 rounded-xl p-6 shadow-lg ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                                }`}
                        >
                            <h3 className="poppins-thin text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#f5e6a2] to-[#fff] text-transparent bg-clip-text mb-3">
                                {service.title}
                            </h3>
                            <p className="poppins-thin text-gray-300 text-sm sm:text-base leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link
                        to="/BookAppointment"
                        className="poppins-thin rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition"
                    >
                        Book Your Appointment
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}