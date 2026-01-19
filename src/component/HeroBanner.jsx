import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "../assets/banner/hero-1.jpg";
import hero2 from "../assets/banner/hero-2.jpg";
import hero3 from "../assets/banner/hero-3.jpg";
import hero4 from "../assets/banner/hero-4.jpg";

export default function HeroBanner() {
    const images = [hero1, hero2, hero3, hero4];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight">
                    Redefining Luxe Transformations

                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 poppins-thin">
                    Where artistry meets sophistication for a radiant new you.
                </p>
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Link
                        to="/Services"
                        className="rounded-full poppins-thin bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition"
                    >
                        Explore Services
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-[#d4af37]" : "bg-white/50"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
}