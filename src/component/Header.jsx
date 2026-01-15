import { useState } from "react";
import siteLogo from "../assets/angelicwhite.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const MotionLink = motion(Link);


    return (
        <header className="sticky top-0 z-[999] bg-gradient-to-r from-black via-[#2c1f1a] to-black shadow-lg">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex pt-2 pb-2 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="site-logo">
                        <motion.img
                            src={siteLogo}
                            alt="Site Logo"
                            className="w-auto"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 text-md font-medium poppins-thin">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/services", label: "Services" },
                            { to: "/gallery", label: "Gallery" },
                            { to: "/pricing", label: "Pricing" },
                            { to: "/contact", label: "Contact" },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                to={item.to}
                                className="group relative text-white hover:text-[#f5e6a2] transition"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#f5e6a2] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <MotionLink
                            to="/BookAppointment"
                            className="glow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white poppins-thin cursor-pointer border-2 border-green-500"
                            animate={{ borderColor: ["#25D366", "#128C7E", "#25D366"] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            Book Appointment
                        </MotionLink>

                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Slide-In Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-[#f5e6a2]"
                >
                    ✕
                </button>

                <div className="flex flex-col mt-16 space-y-4 px-6 poppins-thin">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/services", label: "Services" },
                        { to: "/gallery", label: "Gallery" },
                        { to: "/pricing", label: "Pricing" },
                        { to: "/contact", label: "Contact" },
                    ].map((item, i) => (
                        <Link
                            key={i}
                            to={item.to}
                            className="text-white hover:text-[#f5e6a2] transition"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* CTA Buttons (Mobile) */}
                    <div className="flex flex-col gap-2 mt-6">
                        <MotionLink
                            to="/BookAppointment"
                            className="glow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white poppins-thin cursor-pointer border-2 border-green-500"
                            animate={{ borderColor: ["#25D366", "#128C7E", "#25D366"] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            Book Appointment
                        </MotionLink>

                    </div>
                </div>
            </div>
        </header >
    );
}