import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogDetail() {
    const { slug } = useParams();

    // Expanded posts data
    const posts = {
        "detan-treatment": {
            title: "De-Tan Treatment for Women: Restore Your Natural Glow ✨",
            date: "January 19, 2026",
            image: "/src/assets/blog/bridal-trends.jpg",
            content: `
In today’s fast-paced lifestyle, women are constantly exposed to sunlight, pollution, and dust. Over time, this leads to tanning, dull skin, uneven tone, and pigmentation. If your skin looks darker than its natural shade or feels tired and lifeless, a De-Tan treatment is the perfect solution.

What Is De-Tan?

De-Tan is a professional skincare treatment designed to remove sun tan, dead skin cells, and impurities from the skin. It gently exfoliates and nourishes the skin, revealing a brighter, clearer, and more even complexion.

Unlike home remedies that take time and may not work evenly, a salon De-Tan gives instant and visible results.

Benefits of De-Tan for Women

✔ Removes sun tan and dullness
✔ Brightens skin tone naturally
✔ Reduces pigmentation and dark patches
✔ Improves skin texture
✔ Makes skin soft, smooth, and fresh
✔ Boosts natural glow

Areas Where De-Tan Can Be Done

De-Tan treatment is not limited to the face. Women can get De-Tan on:

- Face & neck
- Hands & arms
- Legs & feet
- Back & shoulders

These areas are most exposed to sunlight and need regular care.

De-Tan Treatment Process

A typical De-Tan session includes:

- Cleansing – Removes dirt and oil
- Exfoliation – Eliminates dead skin cells
- De-Tan pack or mask – Lightens tan and nourishes skin
- Massage – Improves blood circulation
- Moisturizing & SPF – Locks hydration and protects skin

The treatment usually takes 30–45 minutes.

Is De-Tan Safe for All Skin Types?

Yes, De-Tan treatments are generally safe for all skin types when done by trained professionals. Good salons use skin-friendly, chemical-free or mild products suitable for sensitive skin as well.

How Often Should Women Get De-Tan?

For best results:

- Once every 3–4 weeks for normal sun exposure
- Once every 2–3 weeks if you spend a lot of time outdoors

Regular sessions help maintain an even and glowing complexion.

Aftercare Tips

- Avoid direct sunlight for 24 hours
- Apply sunscreen daily
- Keep skin hydrated with a good moisturizer
- Avoid harsh scrubs for a few days

Final Thoughts

De-Tan is a must-have skincare treatment for women who want to reverse sun damage and bring back their natural glow. Whether it’s for a special occasion or regular skin maintenance, De-Tan helps you look fresh, confident, and radiant.

✨ Pamper your skin. You deserve it! ✨
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
                <h1 className="poppins-thin text-4xl md:text-5xl font-serif bg-gradient-to-r from-[#d4af37] to-[#f5e6a2] text-transparent bg-clip-text mb-4">
                    {post.title}
                </h1>
                <p className="poppins-thin text-gray-300 mb-6">{post.date}</p>

                {/* Content */}
                <div className="poppins-thin text-gray-200 leading-relaxed whitespace-pre-line">
                    {post.content}
                </div>
            </motion.div>
        </div>
    );
}