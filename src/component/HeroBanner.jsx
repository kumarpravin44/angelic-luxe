import { Link } from "react-router-dom";


export default function HeroBanner() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center hero-banner">

            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(00,00,00,0.5)]"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight">
                    Angelic Luxe Makeovers
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 font-sans">
                    Make Every Look Angelic
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Link to="/Services"
                        className="rounded-lg bg-primary px-6 py-3 text-sm md:text-base font-semibold text-white hover:bg-primary/90 transition">
                        Explore Services
                    </Link>

                </div>
            </div>
        </section>
    );
}