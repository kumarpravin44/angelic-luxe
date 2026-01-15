import React from "react";
import { motion } from "framer-motion";
import ServicesCard from '../component/ServicesCard'


export default function Services() {
    return (
        <div className="relative bg-[#4e352b] text-white">
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
                        Services
                    </motion.h1>

                </div>
            </section>

            <ServicesCard></ServicesCard>
        </div >
    )
};
