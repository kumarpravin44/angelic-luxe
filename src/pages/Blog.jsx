import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
    const posts = [
        {
            title: "Top Bridal Makeup Trends 2026",
            excerpt:
                "Discover the latest luxury bridal looks, from golden hour glows to editorial-inspired artistry.",
            date: "January 15, 2026",
            image: "/src/assets/blog/bridal-trends.jpg",
            link: "/blog/bridal-trends-2026",
        },
        {
            title: "Behind the Scenes: Angelic Luxe",
            excerpt:
                "Step inside our studio and see how we craft premium transformations with elegance and precision.",
            date: "January 10, 2026",
            image: "/src/assets/blog/behind-scenes.jpg",
            link: "/blog/behind-the-scenes",
        },
        {
            title: "Luxury Skincare Before Your Makeover",
            excerpt:
                "Prep your skin with curated routines that ensure flawless, radiant results for any occasion.",
            date: "January 5, 2026",
            image: "/src/assets/blog/skincare.jpg",
            link: "/blog/luxury-skincare",
        },
    ];

    return (
        <div className="bg-[#4e352b] min-h-screen text-white py-16 px-6">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-7xl transcity-font text-white font-200 leading-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Blog
                </motion.h1>
                <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
                    Insights, trends, and stories from Angelic Luxe Makeovers — crafted to inspire elegance.
                </p>
            </section>

            {/* Blog Grid */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <motion.div
                        key={i}
                        className="relative group overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#f5e6a2] to-[#fff] text-transparent bg-clip-text mb-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-2">{post.date}</p>
                            <p className="text-gray-400 mb-4">{post.excerpt}</p>
                            <a
                                href={post.link}
                                className="inline-block rounded-full bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-black font-semibold px-5 py-2 shadow-lg hover:shadow-xl transition"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}