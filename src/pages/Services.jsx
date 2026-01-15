import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaPaintBrush, FaStar } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            icon: <FaCrown />,
            title: "Bridal Makeovers",
            desc: "Experience a complete luxury bridal transformation with premium products, flawless artistry, and elegant styling.",
        },
        {
            icon: <FaPaintBrush />,
            title: "Creative Styling",
            desc: "From editorial looks to party glam, our artists craft unique styles tailored to your personality and occasion.",
        },
        {
            icon: <FaStar />,
            title: "Luxury Packages",
            desc: "Indulge in curated makeover packages featuring gold accents, advanced techniques, and personalized consultations.",
        },
    ];

    return (
        <div className="bg-[#4e352b] min-h-screen text-white py-16 px-6">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Services
                </motion.h1>
                <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto">
                    Discover our range of luxury makeover services designed to elevate your beauty with elegance and artistry.
                </p>
            </section>

            {/* Services Grid */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:scale-105 transition-transform text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-4xl text-[#d4af37] mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-[#f5e6a2] mb-3">{service.title}</h3>
                        <p className="text-gray-300">{service.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="text-center mt-16">
                <a
                    href="/BookAppointment"
                    className=" inline-block rounded-full bg-[#fff] text-black font-semibold px-8 py-3 hover:bg-[#f5e6a2] transition"
                    whileHover={{ scale: 1.05 }}
                >
                    Book Your Appointment
                </a>
            </section>
        </div>
    );
}