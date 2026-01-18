import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import promoVideo from "../assets/gallery/promo.mp4";

export default function Gallery() {
    const media = [
        { type: "image", src: gallery1, title: "Bridal Makeover" },
        { type: "image", src: gallery2, title: "Luxury Styling" },
        { type: "image", src: gallery3, title: "Elegant Hair Design" },
        { type: "video", src: promoVideo, title: "Behind the Scenes" },
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleOpen = (index) => setSelectedIndex(index);
    const handleClose = () => setSelectedIndex(null);

    const showPrev = () =>
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : media.length - 1));
    const showNext = () =>
        setSelectedIndex((prev) => (prev < media.length - 1 ? prev + 1 : 0));

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex !== null) {
                if (e.key === "Escape") handleClose();
                if (e.key === "ArrowLeft") showPrev();
                if (e.key === "ArrowRight") showNext();
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

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
                {media.map((item, i) => (
                    <motion.div
                        key={i}
                        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => handleOpen(i)}
                    >
                        {item.type === "image" ? (
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                style={{ height: "500px", width: "100%", objectFit: "cover" }}
                            />
                        ) : (
                            <video
                                src={item.src}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                                style={{ height: "500px", width: "100%", objectFit: "cover" }}
                                muted
                                loop
                                autoPlay
                            />
                        )}
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <h3 className="text-xl poppins-thin font-semibold text-[#f5e6a2]">
                                {item.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
                    onClick={handleClose}
                >
                    <div
                        className="relative max-w-5xl max-h-[80vh] mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {media[selectedIndex].type === "image" ? (
                            <img
                                src={media[selectedIndex].src}
                                alt={media[selectedIndex].title}
                                className="rounded-lg shadow-xl max-h-[80vh] mx-auto"
                            />
                        ) : (
                            <video
                                src={media[selectedIndex].src}
                                controls
                                autoPlay
                                className="rounded-lg shadow-xl max-h-[80vh] mx-auto"
                            />
                        )}
                        <h3 className="text-center text-[#f5e6a2] mt-4 text-lg">
                            {media[selectedIndex].title}
                        </h3>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-yellow-400 transition"
                    >
                        ✕
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="absolute left-6 text-white text-4xl hover:text-yellow-400 transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-6 text-white text-4xl hover:text-yellow-400 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
}