import { useState } from "react";
import siteLogo from "../assets/angelicwhite.png";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-[999]  bg-[rgba(00,00,00,0.9)] shadow-sm">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex pt-2 pb-2 items-center justify-between">
                    {/* Logo */}
                    <div className="site-logo">
                        <img src={siteLogo} alt="Site Logo" className="w-auto" />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 text-md font-medium text-gray-700 poppins-thin">
                        <Link to="/" className="hover:text-blue-600 transition text-white">Home</Link>
                        <Link to="/about" className="hover:text-blue-600 transition text-white">About</Link>
                        <Link to="/services" className="hover:text-blue-600 transition text-white">Services</Link>
                        <Link to="/gallery" className="hover:text-blue-600 transition text-white">Gallery</Link>
                        <Link to="/pricing" className="hover:text-blue-600 transition text-white">Pricing</Link>
                        <Link to="/contact" className="hover:text-blue-600 transition text-white">Contact</Link>
                    </nav>


                    {/* CTA Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <a href="tel:+919876543210"
                            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition poppins-thin">
                            <FiPhone className="text-lg" /> Call
                        </a> */}
                        {/* <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition poppins-thin">
                            <FaWhatsapp className="text-lg" /> WhatsApp
                        </a> */}
                        <a href=""
                            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition poppins-thin cursor-pointer">
                            Book Appointment
                        </a>

                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden rounded-md p-2 hover:bg-gray-100 text-white"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Slide-In Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>

                <div className="flex flex-col mt-16 space-y-4 px-6 text-gray-700 poppins-thin">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">Services</a>
                    <a href="#" className="hover:text-blue-600">Gallery</a>
                    <a href="#" className="hover:text-blue-600">Pricing</a>
                    <a href="#" className="hover:text-blue-600">Contact</a>

                    {/* CTA Buttons (Mobile) */}
                    <div className="flex flex-col gap-2 mt-6">
                        <a href="tel:+919876543210"
                            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition">
                            <FiPhone className="text-lg" /> Call
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-green-500 transition">
                            <FaWhatsapp className="text-lg" /> WhatsApp
                        </a>
                        <a href=""
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary transition poppins-thin">
                            Book Appointment
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
