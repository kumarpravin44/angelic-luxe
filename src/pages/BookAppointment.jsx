import React from "react";
import { motion } from "framer-motion";

export default function BookAppointment() {
    return (
        <div className="bg-gradient-to-br from-[#4e352b] via-[#2c1f1a] to-black min-h-screen text-white py-16 px-6">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Book Your Appointment
                </motion.h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Reserve your luxury makeover session with ease. Fill out the form below and we’ll confirm your booking.
                </p>
            </section>

            {/* Appointment Form */}
            <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Phone Number</label>
                        <input
                            type="tel"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm mb-2">Preferred Date</label>
                            <input
                                type="date"
                                className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Preferred Time</label>
                            <input
                                type="time"
                                className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Service Type</label>
                        <select
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                        >
                            <option>Bridal Makeover</option>
                            <option>Luxury Styling</option>
                            <option>Hair & Beauty Session</option>
                            <option>Custom Glam Package</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm mb-2">Additional Notes</label>
                        <textarea
                            rows="4"
                            className="w-full rounded-lg px-4 py-2 bg-black/40 text-white border border-gray-600 focus:border-[#d4af37] focus:outline-none"
                            placeholder="Any special requests?"
                        ></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="w-full rounded-full bg-[#d4af37] text-black font-semibold py-3 hover:bg-[#f5e6a2] transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        Confirm Appointment
                    </motion.button>
                </form>
            </section>
        </div>
    );
}