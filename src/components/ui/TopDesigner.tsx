import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const designers = [
  {
    name: "Ariana Blake",
    specialty: "Bridal & Couture",
    rating: 4.9,
    image: "/designer1.jpg",
  },
  {
    name: "Ravi Sharma",
    specialty: "Men’s Ethnic Wear",
    rating: 4.8,
    image: "/designer2.jpg",
  },
  {
    name: "Mia Chen",
    specialty: "Modern Streetwear",
    rating: 4.7,
    image: "/designer3.jpg",
  },
  {
    name: "Noah Khan",
    specialty: "Luxury Accessories",
    rating: 4.9,
    image: "/designer4.jpg",
  },
];

const TopDesigners: React.FC = () => {
  return (
    <section className="relative py-24 px-8 md:px-20 bg-white dark:bg-black overflow-hidden">
      {/* Decorative blur light */}
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-[#00b67f]/10 blur-[160px] -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white"
      >
        Meet Our <span className="text-[#00b67f]">Top Designers</span>
      </motion.h2>

      {/* Designer Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {designers.map((designer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-neutral-900 border border-[#00b67f]/20 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-[#00b67f]/30 hover:shadow-lg"
          >
            <img
              src={designer.image}
              alt={designer.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {designer.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {designer.specialty}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(designer.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-[#00b67f] text-white text-sm font-medium hover:bg-[#00a874] transition-all"
              >
                View Profile
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopDesigners;
