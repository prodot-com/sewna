import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Image as ImageIcon, DollarSign, Calendar } from "lucide-react";

const CustomRequest: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [budget, setBudget] = useState(150);
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#00b67f] mb-4"
        >
          Request Sent ✨
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md">
          Your custom design request has been shared with our top designers.
          Expect personalized suggestions soon!
        </p>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-[#0b0b0b] dark:to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white/80 dark:bg-white/10 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Custom Design Request
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Upload your inspiration
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-white/20 rounded-xl p-6 text-center hover:border-[#00b67f]/60 transition">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mx-auto w-48 h-48 object-cover rounded-xl"
                />
              ) : (
                <label className="cursor-pointer flex flex-col items-center gap-3">
                  <Upload className="w-8 h-8 text-[#00b67f]" />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Click to upload an image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700 dark:text-gray-300">
              Describe your dream outfit
            </label>
            <textarea
              required
              placeholder="Tell us about the style, color, or theme you have in mind..."
              className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-transparent p-4 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-[#00b67f] outline-none"
              rows={4}
            />
          </div>

          {/* Budget */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2 text-gray-700 dark:text-gray-300">
              <DollarSign className="w-4 h-4" /> Budget Range: ${budget}
            </label>
            <input
              type="range"
              min={50}
              max={500}
              step={10}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-[#00b67f]"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2 text-gray-700 dark:text-gray-300">
              <Calendar className="w-4 h-4" /> Preferred Deadline
            </label>
            <input
              type="date"
              required
              className="w-full rounded-xl border border-gray-300 dark:border-white/20 bg-transparent p-3 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-[#00b67f] outline-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-[#00b67f] text-black font-semibold py-3 rounded-full mt-4 shadow-lg hover:bg-[#00b67f]/90 transition"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default CustomRequest;
