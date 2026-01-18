import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogDetail() {
    const { slug } = useParams();

    // Example posts data (same as Blog.js but with full content)
    const posts = {
        "bridal-trends-2026": {
            title: "Top Bridal Makeup Trends 2026",
            date: "January 15, 2026",
            image: "/src/assets/blog/bridal-trends.jpg",
            content: `
        In 2026, bridal makeup is all about radiant skin, golden hour glow, and editorial-inspired artistry.
        Expect soft metallics, glass-skin finishes, and bold yet elegant eye looks. 
        Our artists craft each bridal transformation with premium products and timeless techniques.
      `,
        },
        "behind-the-scenes": {
            title: "Behind the Scenes: Angelic Luxe",
            date: "January 10, 2026",
            image: "/src/assets/blog/behind-scenes.jpg",
            content: `
        Step inside our studio and discover how Angelic Luxe Makeovers creates premium transformations.
        From curated product selections to luxury styling stations, every detail is designed for elegance.
        Our team blends creativity with precision to deliver unforgettable experiences.
      `,
        },
        "luxury-skincare": {
            title: "Luxury Skincare Before Your Makeover",
            date: "January 5, 2026",
            image: "/src/assets/blog/skincare.jpg",
            content: `
        Flawless makeup begins with flawless skin. 
        Our luxury skincare routines prep your complexion for radiant results. 
        Hydration, gentle exfoliation, and gold-infused serums ensure your makeover shines with elegance.
      `,
        },
    };

    const post = posts[slug];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h2 className="text-2xl">Post not found</h2>
            </div>
        );
    }

    return (
        <div className="bg-[#4e352b] min-h-screen text-white py-16 px-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Image */}
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
                />

                {/* Title + Date */}
                <h1 className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-transparent bg-clip-text mb-4">
                    {post.title}
                </h1>
                <p className="text-gray-300 mb-6">{post.date}</p>

                {/* Content */}
                <div className="text-gray-200 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
            </motion.div>
        </div>
    );
}