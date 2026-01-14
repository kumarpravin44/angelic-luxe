export default function Services() {
    const services = [
        {
            title: "Bridal Makeover",
            desc: "Elegant, long-lasting bridal looks for your big day.",
            img: "/src/assets/bridal-makeover.jpg"
        },
        {
            title: "Threading",
            desc: "Precise eyebrow and facial threading for a clean, defined look.",
            img: "/src/assets/threading.jpg"
        },
        {
            title: "Facial",
            desc: "Relaxing facials to rejuvenate and hydrate your skin.",
            img: "/src/assets/facial.jpg"
        },
        {
            title: "Hair Straightening",
            desc: "Smooth, silky hair with professional straightening treatments.",
            img: "/src/assets/hair-straightening.jpg"
        }
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
                            <p className="text-gray-600 text-sm mb-4 font-sans">
                                {s.desc}
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary/90 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}