import React from "react";
import { motion } from "framer-motion";


export default function Pricing() {
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
                    Pricing
                </motion.h1>
                <p className="tagline mt-4 text-lg md:text-xl text-gray-300">
                    Elevating beauty with elegance, artistry, and luxury.
                </p>
            </section>
        </div>
    )
};
