import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
    return (
        <div className="relative bg-[#4e352b] text-white">
            {/* Hero Section */}
            <section className="about-hero max-w-7xl mx-auto text-center py-20 px-6">
                <motion.h1
                    className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About Angelic Luxe Makeovers
                </motion.h1>
                <p className="tagline mt-4 text-lg md:text-xl text-gray-300">
                    Elevating beauty with elegance, artistry, and luxury.
                </p>
            </section>

            {/* Story Section */}
            <section className="about-story max-w-5xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
                <p className="text-gray-200 leading-relaxed">
                    Angelic Luxe Makeovers was founded with a vision to redefine luxury
                    beauty experiences. From personalized consultations to flawless
                    transformations, we blend creativity with precision to bring out the
                    best in every client.
                </p>
            </section>

            {/* Values Section */}
            <section className="about-values max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold text-[#d4af37] text-center mb-10">
                    Our Values
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "✨ Elegance",
                            desc: "Every detail is crafted to radiate sophistication and grace.",
                        },
                        {
                            title: "🎨 Artistry",
                            desc: "We combine skill and creativity to deliver unforgettable looks.",
                        },
                        {
                            title: "💎 Luxury",
                            desc: "Premium products, refined techniques, and a touch of gold.",
                        },
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            className="value-card bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-[#f5e6a2] mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-300">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-semibold text-[#d4af37] text-center mb-10">
                    Meet Our Team
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            name: "Pravin",
                            role: "Creative Director & Lead Designer",
                            img: "/images/team1.jpg",
                        },
                        {
                            name: "Sarah",
                            role: "Senior Makeup Artist",
                            img: "/images/team2.jpg",
                        },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            className="team-member text-center bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-32 h-32 mx-auto rounded-full border-4 border-[#d4af37] mb-4 object-cover"
                            />
                            <h3 className="text-xl font-semibold text-[#f5e6a2]">
                                {member.name}
                            </h3>
                            <p className="text-gray-300">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}