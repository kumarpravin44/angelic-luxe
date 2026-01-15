import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import images directly from src/assets
import gallery1 from "../assets/gallery/gallery-1.jpg";
import gallery2 from "../assets/gallery/gallery-2.jpg";
import gallery3 from "../assets/gallery/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

export default function GalleryPreview() {
    const images = [gallery1, gallery2, gallery3, gallery4];
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [animateKey, setAnimateKey] = useState(0); // triggers animation on change

    const handleOpen = (index) => setSelectedIndex(index);
    const handleClose = () => setSelectedIndex(null);

    const showPrev = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        setAnimateKey((k) => k + 1);
    };
    const showNext = () => {
        setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        setAnimateKey((k) => k + 1);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex !== null) {
                if (e.key === "Escape") handleClose();
                if (e.key === "ArrowLeft") showPrev();
                if (e.key === "ArrowRight") showNext();
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    return (
        <section className="py-16 px-4 gradient-bg relative">
            <h2 className="text-4xl poppins-thin font-bold text-center text-white mb-12 tracking-wide">
                Gallery
            </h2>

            {/* Grid of thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Gallery ${i + 1}`}
                        className="rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
                        style={{ height: "250px", width: "100%", objectFit: "cover" }}
                        onClick={() => handleOpen(i)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] animate-fadeIn"
                    onClick={handleClose}
                >
                    <div
                        key={animateKey} // forces re-render for animation
                        className="animate-slideIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[selectedIndex]}
                            alt="Full view"
                            className="max-w-4xl max-h-[80vh] rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-yellow-400 transition"
                    >
                        ✕
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="absolute left-6 text-white text-4xl hover:text-yellow-400 transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-6 text-white text-4xl hover:text-yellow-400 transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </section>
    );
}