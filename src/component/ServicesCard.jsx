import bridalImg from "./../assets/bridal-makeover.jpg";
import threadingImg from "./../assets/threading.jpg";
import facialImg from "./../assets/facial.jpg";
import hairImg from "./../assets/hair-straightening.jpg";
import { Link } from "react-router-dom";

export default function ServicesCard() {
    const services = [
        {
            title: "Bridal Makeover",
            desc: "Flawless bridal look with expert makeup and styling. Radiant confidence for your big day.",
            img: bridalImg,
        },
        {
            title: "Threading",
            desc: "Clean, precise eyebrow shaping. Smooth finish with gentle technique.",
            img: threadingImg,
        },
        {
            title: "Facial",
            desc: "Refreshing treatment to hydrate and rejuvenate. Restores natural glow instantly.",
            img: facialImg,
        },
        {
            title: "Hair Straightening",
            desc: "Sleek, silky hair made effortless. Long‑lasting smooth style.",
            img: hairImg,
        },
    ];

    return (
        <section className="py-16 px-4 bg-[#4e352b]">
            <h2 className="text-4xl poppins-thin font-bold text-center text-white mb-12 tracking-wide">
                Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden transform hover:-translate-y-2"
                    >
                        {/* Image with hover zoom */}
                        <div className="overflow-hidden">
                            <img
                                src={s.img}
                                alt={s.title}
                                className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 text-center">
                            <h3 className="text-xl poppins-thin font-semibold mb-3 text-gray-900">
                                {s.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 font-sans">{s.desc}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-10">
                <Link to="/pricing" className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition">
                    View Services
                </Link>
            </div>
        </section>
    );
}