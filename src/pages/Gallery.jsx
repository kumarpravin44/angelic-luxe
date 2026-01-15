import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
    const images = [
        { src: "/src/assets/gallery-1.jpg", title: "Bridal Makeover" },
        { src: "/src/assets/gallery-2.jpg", title: "Luxury Styling" },
        { src: "/src/assets/gallery-3.jpg", title: "Elegant Hair Design" },
        { src: "/src/assets/gallery-4.jpg", title: "Premium Beauty Session" },
        { src: "/src/assets/gallery-1.jpg", title: "Creative Glam Look" },
        { src: "/src/assets/gallery-2.jpg", title: "Golden Hour Glow" },
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
                    Our Gallery
                </motion.h1>
                <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore our finest transformations, luxury makeovers, and elegant styling sessions.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="relative group overflow-hidden rounded-xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <h3 className="text-xl poppins-thin font-semibold text-[#f5e6a2]">{img.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}