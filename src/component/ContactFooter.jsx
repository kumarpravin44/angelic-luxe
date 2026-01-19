import { FiPhone } from "react-icons/fi";
import {
    FaWhatsapp,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactFooter() {
    return (
        <footer className="relative bg-gradient-to-br from-black via-[#2c1f1a] to-black text-white overflow-hidden">
            {/* Decorative shimmer overlay */}
            <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-10 pointer-events-none"></div>

            {/* Top CTA Band */}
            <div className="relative poppins-thin bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black py-6 text-center font-semibold text-lg shadow-lg">
                <p>
                    Ready to shine with elegance?{" "}
                    <Link
                        to="/BookAppointment"
                        className="ml-3 inline-block px-6 py-2 poppins-thin rounded-full bg-black text-[#f5e6a2] hover:bg-[#2c1f1a] transition"
                    >
                        Book Appointment
                    </Link>
                </p>
            </div>

            {/* Middle Section */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-6">
                {/* Contact Info */}
                <div className="poppins-thin bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition">
                    <h2 className="poppins-thin text-2xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-transparent bg-clip-text">
                        Contact Us
                    </h2>
                    <a href="tel:+918368082337" className="flex items-center gap-3 mb-4">
                        <span className="bg-white text-black rounded-full p-2 shadow-md">
                            <FiPhone />
                        </span>
                        +91 836 808 2337
                    </a>
                    <p className="flex items-center gap-3 mb-4">
                        <span className="bg-green-500 text-white rounded-full p-2 shadow-md">
                            <FaWhatsapp />
                        </span>
                        <a
                            href="https://wa.me/918368082337?text=Hello%20Angelic%20Luxe%20Makeovers%2C%20I%20would%20like%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#f5e6a2] transition"
                        >
                            Chat Now
                        </a>
                    </p>
                    <p className="flex items-center gap-3" >
                        <span className="bg-red-600 text-white rounded-full p-2 shadow-md">
                            <FaMapMarkerAlt />
                        </span>
                        Yahavi, OCR 9, Vanaha Township Lavale Pirangut,Pune, Maharashtra 412115
                    </p>
                </div>

                {/* Quick Links */}
                <div className="poppins-thin bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition">
                    <h2 className="poppins-thin text-2xl font-bold mb-6 bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-transparent bg-clip-text">
                        Quick Links
                    </h2>
                    <ul className="space-y-3">
                        {["Services", "Gallery", "Pricing", "Contact"].map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={`/${link.toLowerCase()}`}
                                    className="group relative inline-block hover:text-[#f5e6a2] transition"
                                >
                                    {link}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f5e6a2] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="border-t border-white/10 py-8 text-center">
                <div className="flex justify-center gap-6">
                    {[
                        { icon: <FaFacebookF />, color: "text-blue-600" },
                        { icon: <FaInstagram />, color: "text-pink-600" },
                        { icon: <FaTwitter />, color: "text-sky-500" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href="#"
                            className={`bg-white ${social.color} rounded-full p-3 shadow-md relative overflow-hidden group`}
                        >
                            {social.icon}
                            <span className="absolute inset-0 bg-[#f5e6a2]/30 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></span>
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-sm text-gray-400 poppins-thin">
                    © 2026 Angelic Luxe Makeovers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}