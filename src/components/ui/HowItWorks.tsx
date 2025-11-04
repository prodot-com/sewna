import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Shirt } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="w-10 h-10 text-[#00b67f]" />,
    title: "Share Your Vision",
    description:
      "Tell us what you dream of — from casual to couture, describe your perfect outfit idea.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#00b67f]" />,
    title: "Match with Designers",
    description:
      "We connect you with talented independent designers who match your style and budget.",
  },
  {
    icon: <Shirt className="w-10 h-10 text-[#00b67f]" />,
    title: "Get Your Dream Outfit",
    description:
      "Collaborate directly, approve the design, and receive your custom creation — made with love.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-24 px-8 md:px-20 bg-gradient-to-br from-[#f8fff9] to-[#e6ffef] dark:from-[#0a0a0a] dark:to-[#111] text-center overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00b67f]/10 blur-[180px] rounded-full -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
      >
        How <span className="text-[#00b67f]">Sewna</span> Works
      </motion.h2>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-neutral-900/60 border border-[#00b67f]/20 rounded-2xl p-8 shadow-md hover:shadow-[#00b67f]/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
