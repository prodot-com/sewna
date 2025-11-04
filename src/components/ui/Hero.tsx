import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// We assume BlurFadeDemo is a valid component imported from a local file.
import { BlurFadeDemo } from "./BlurFadeCustom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen w-full 
      px-8 md:px-24 bg-linear-to-br from-gray-200 via-green-300 to-gray-200 text-black 
      dark:from-black/55 dark:via-green-900 dark:to-black/55 dark:text-white 
      transition-colors duration-500 
      pt-24 md:pt-0"
    >
      {/* Left: Text content */}
      <div className="flex md:min-h-screen justify-center flex-col gap-6 w-full z-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Where <span className="text-[#00b67f]">Fashion Dreams</span> Meet Real
          Designers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-black dark:text-gray-300 text-lg leading-relaxed"
        >
          Collaborate with talented independent designers to craft your perfect
          outfit — custom, personal, and made with love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/req")}
            className="cursor-pointer bg-[#00b67f] text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00b67f] transition-all
            border border-green-700
            "
          >
            Find a Designer
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/por")}
            className="cursor-pointer border border-green-700 text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-[#00b67f]/10 transition-all"
          >
            Join as Designer
          </motion.button>
        </motion.div>
      </div>

      {/* Right: Image Gallery / BlurFadeDemo */}
      <div className="flex justify-center items-center w-full py-16 md:py-0 md:min-h-screen">
        <div className="relative w-full max-w-[550px] overflow-hidden pt-24">
          {/* We assume BlurFadeDemo is a valid component */}
          {/* <BlurFadeDemo /> */}
          {/* Placeholder for visual representation since BlurFadeDemo is not available */}
          <div className="w-full h-[400px] rounded-lg flex items-center justify-center p-1">
            <BlurFadeDemo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
