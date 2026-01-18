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
                            { to: "/blog", label: "Blog" },
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

                    {/* Right Side: CTA + Mobile Menu Icon */}
                    <div className="flex items-center space-x-2">
                        {/* Book Appointment (always visible) */}
                        <MotionLink
                            to="/BookAppointment"
                            className="glow flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white poppins-thin cursor-pointer border-2 border-green-500"
                            animate={{ borderColor: ["#25D366", "#128C7E", "#25D366"] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            Book Appointment
                        </MotionLink>

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
            </div>

            {/* Mobile Slide-In Menu */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: isOpen ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#2c1f1a] to-black/90 backdrop-blur-lg rounded-t-3xl shadow-2xl z-50 overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#f5e6a2] hover:text-black transition"
                >
                    ✕
                </button>

                {/* Menu Items */}
                <motion.div
                    className="flex flex-col mt-20 space-y-6 px-8 text-lg font-medium poppins-thin"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                >
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/services", label: "Services" },
                        { to: "/gallery", label: "Gallery" },
                        { to: "/pricing", label: "Pricing" },
                        { to: "/blog", label: "Blog" },
                        { to: "/contact", label: "Contact" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Link
                                to={item.to}
                                className="text-white hover:text-[#f5e6a2] transition"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </header>
    );
}