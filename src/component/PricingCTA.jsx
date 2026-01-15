import { Link } from "react-router-dom";
export default function PricingCTA() {
    return (
        <section className="py-16 px-4 bg-[#4e352b]  text-center">
            <h2 className="text-4xl poppins-thin font-bold text-center text-white tracking-wide mb-3">Transparent Pricing</h2>
            <p className="mb-6 text-lg text-white mb-5">No surprises. Just luxury makeovers at fair rates.</p>
            <Link to="/pricing" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Packages
            </Link>
        </section>
    );
}