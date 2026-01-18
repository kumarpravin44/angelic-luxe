import { Link } from "react-router-dom";
export default function PricingCTA() {
    return (
        <section className="py-16 px-4 bg-[#4e352b]  text-center">
            <h2 className="text-4xl poppins-thin font-bold text-center text-white tracking-wide mb-3">Transparent Pricing</h2>
            <p className="mb-6 text-lg text-white mb-5">No surprises. Just luxury makeovers at fair rates.</p>
            <Link to="/pricing" className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition">
                View Packages
            </Link>
        </section>
    );
}