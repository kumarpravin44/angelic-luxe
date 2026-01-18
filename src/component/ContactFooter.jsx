import { FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactFooter() {
    return (
        <footer
            id="contact"
            className="text-white py-16 px-6 bg-[#000] relative"
        >
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-[url('/src/assets/pattern.png')] opacity-5 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl poppins-thin tracking-wide font-bold mb-6">Get in Touch</h2>
                    <p className="flex items-center justify-center md:justify-start gap-3 mb-3">
                        <span className="bg-white text-black rounded-full p-2 shadow-md">
                            <FiPhone />
                        </span>
                        +91 836 808 2337
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-3 mb-3">
                        <span className="bg-white text-green-600 rounded-full p-2 shadow-md">
                            <FaWhatsapp />
                        </span>
                        <a href="https://wa.me/918368082337" className="hover:text-yellow-400 transition">
                            Chat Now
                        </a>
                    </p>
                    <p className="flex items-center justify-center md:justify-start gap-3 mb-3">
                        <span className="bg-white text-red-600 rounded-full p-2 shadow-md">
                            <FaMapMarkerAlt />
                        </span>
                        Pune, Maharashtra
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-2xl poppins-thin tracking-wide font-bold mb-6">Quick Links</h2>
                    <ul className="space-y-2">
                        {["Services", "Gallery", "Pricing", "Contact"].map((link, i) => (
                            <li key={i}>
                                <Link to={`${link.toLowerCase()}`} className="relative text-white hover:text-yellow-400 transition">
                                    {link}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-2xl poppins-thin tracking-wide font-bold mb-6">Follow Us</h2>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#" className="bg-white text-blue-600 rounded-full p-3 shadow-md hover:shadow-yellow-400 hover:shadow-lg hover:scale-110 transition"><FaFacebookF /></a>
                        <a href="#" className="bg-white text-pink-600 rounded-full p-3 shadow-md hover:shadow-yellow-400 hover:shadow-lg hover:scale-110 transition"><FaInstagram /></a>
                        <a href="#" className="bg-white text-sky-500 rounded-full p-3 shadow-md hover:shadow-yellow-400 hover:shadow-lg hover:scale-110 transition"><FaTwitter /></a>
                    </div>
                </div>


            </div>

            {/* Bottom Note */}
            <div className="border-t border-[#1c1c1c] mt-12 pt-6 text-center">
                <p className="text-sm text-gray-400">
                    © 2026 Angelic Luxe Makeovers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}