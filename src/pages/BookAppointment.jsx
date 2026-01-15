import React from "react";
import { motion } from "framer-motion";

export default function BookAppointment() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2c1f1a] via-black to-[#4e352b] flex items-center justify-center py-16 px-6">
            <motion.div
                className="max-w-6xl w-full grid md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Left Branding Panel */}
                <div className="bg-gradient-to-br from-[#d4af37] to-[#f5e6a2] flex flex-col items-center justify-center p-10 text-black">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Angelic Luxe</h2>
                    <p className="text-lg max-w-md text-center">
                        Elevate your beauty with our premium makeover sessions. Book today and shine with elegance.
                    </p>
                </div>

                {/* Right Form Panel */}
                <div className="bg-white/95 backdrop-blur-md p-10 text-black">
                    <h3 className="text-2xl font-semibold text-[#2c1f1a] mb-6">Book Your Appointment</h3>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Preferred Time</label>
                                <input
                                    type="time"
                                    className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Service Type</label>
                            <select
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
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
                                className="w-full rounded-lg px-4 py-2 border border-gray-300 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none"
                                placeholder="Any special requests?"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold py-3 shadow-lg hover:shadow-xl transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Confirm Appointment
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}