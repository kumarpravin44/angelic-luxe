import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
    const plans = [
        {
            name: "Basic Glam",
            price: "₹4,999",
            features: [
                "Bridal touch-up",
                "Basic hair styling",
                "Premium products",
                "1-hour session",
            ],
            popular: false,
        },
        {
            name: "Luxury Makeover",
            price: "₹9,999",
            features: [
                "Full bridal makeover",
                "Advanced hair styling",
                "Luxury product kit",
                "3-hour session",
                "Free consultation",
            ],
            popular: true,
        },
        {
            name: "Elite Experience",
            price: "₹14,999",
            features: [
                "Complete bridal package",
                "Exclusive hair design",
                "Gold accents & luxury kit",
                "5-hour session",
                "Personal stylist",
            ],
            popular: false,
        },
    ];

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
                    Pricing Plans
                </motion.h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto poppins-thin">
                    Choose the perfect makeover package tailored to your needs and style.
                </p>
            </section>

            {/* Pricing Cards */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        className={`relative rounded-xl p-8 shadow-lg backdrop-blur-md bg-white/10 border ${plan.popular ? "border-[#d4af37]" : "border-transparent"
                            } hover:scale-105 transition-transform`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        {plan.popular && (
                            <span className="poppins-thin absolute top-4 right-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                                Most Popular
                            </span>
                        )}
                        <h3 className="poppins-thin text-2xl font-semibold text-[#f5e6a2] mb-4">
                            {plan.name}
                        </h3>
                        <p className="poppins-thin text-3xl font-bold mb-6">{plan.price}</p>
                        <ul className="poppins-thin space-y-3 text-gray-300">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                        <motion.a
                            href=""
                            className="poppins-thin mt-6 block text-center rounded-full bg-[#d4af37] text-black font-semibold py-2 hover:bg-[#f5e6a2] transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            Book Now
                        </motion.a>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}