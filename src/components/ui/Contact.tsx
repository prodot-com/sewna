import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    // MODIFIED: Updated background gradient to match the light, airy green theme
    <section className="w-full bg-linear-to-b from-neutral-200 via-green-100 to-neutral-200 dark:from-black/25 dark:via-gray-900/50 dark:to-black py-20 px-6 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Get in Touch
      </motion.h2>

      <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Have a question or want to collaborate? We’d love to hear from you.
        Whether you’re a designer, customer, or partner — Sewna is always open
        for creative conversations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* MODIFIED: Changed cards to be opaque with a shadow to match the testimonial card style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          {/* KEPT: This green color matches your brand's accent color perfectly */}
          <Mail className="mx-auto mb-3 text-[#00b67f]" size={30} />
          <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Email Us</h4>
          <p className="text-gray-700 dark:text-gray-300">support@sewna.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <Phone className="mx-auto mb-3 text-[#00b67f]" size={30} />
          <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Call Us</h4>
          <p className="text-gray-700 dark:text-gray-300">+91 98765 43210</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <MapPin className="mx-auto mb-3 text-[#00b67f]" size={30} />
          <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Visit Us</h4>
          <p className="text-gray-700 dark:text-gray-300">Mumbai, India</p>
        </motion.div>
      </div>
    </section>
  );
}