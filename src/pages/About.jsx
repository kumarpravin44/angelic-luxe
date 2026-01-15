import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="relative text-white">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 hero-banner bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
                <div className="relative z-10">
                    <motion.h1
                        className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About Angelic Luxe
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg md:text-xl poppins-thin text-gray-200 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Elevating beauty with elegance, artistry, and luxury.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className=" py-20 px-6 text-center bg-[#4e352b]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl poppins-thin font-bold text-center text-white mb-8 tracking-wide">Our Story</h2>

                    <p className="text-gray-300 leading-relaxed poppins-thin text-lg">
                        Angelic Luxe Makeovers was founded with a vision to redefine luxury
                        beauty experiences. From personalized consultations to flawless
                        transformations, we blend creativity with precision to bring out the
                        best in every client.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className=" py-20 px-6 text-center gradient-bg">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl poppins-thin font-bold text-center text-white mb-8 tracking-wide">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Elegance", desc: "Every detail radiates sophistication and grace." },
                            { title: "Artistry", desc: "Skill and creativity combine for unforgettable looks." },
                            { title: "Luxury", desc: "Premium products, refined techniques, and a touch of gold." },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-[#d4af37]/50 hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl poppins-thin font-semibold text-[#f5e6a2] mb-3">{value.title}</h3>
                                <p className="text-gray-300 poppins-thin">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className=" py-20 px-6 text-center bg-[#4e352b]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl poppins-thin font-bold text-center text-white mb-8 tracking-wide">
                        Meet Our Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { name: "Pravin", role: "Creative Director & Lead Designer", img: "/images/team1.jpg" },
                            { name: "Sarah", role: "Senior Makeup Artist", img: "/images/team2.jpg" },
                            { name: "Sarah", role: "Senior Makeup Artist", img: "/images/team2.jpg" },
                        ].map((member, i) => (
                            <motion.div
                                key={i}
                                className="text-center bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg hover:scale-105 transition-transform"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-32 h-32 mx-auto rounded-full border-4 border-[#d4af37] mb-4 object-cover hover:scale-110 transition-transform"
                                />
                                <h3 className="text-xl poppins-thin font-semibold text-[#f5e6a2]">{member.name}</h3>
                                <p className="text-gray-300 poppins-thin">{member.role}</p>
                                <div className="flex justify-center gap-4 mt-4 text-[#d4af37]">
                                    <a href="#" className="hover:text-[#f5e6a2]">🌐</a>
                                    <a href="#" className="hover:text-[#f5e6a2]">📸</a>
                                    <a href="#" className="hover:text-[#f5e6a2]">💼</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}