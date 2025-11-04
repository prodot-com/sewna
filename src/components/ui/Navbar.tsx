import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // install with: npm i lucide-react

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-center">
      <div
        className="fixed top-8 w-[60%] md:w-[88%] flex justify-between items-center
        px-6 py-2 md:py-4 rounded-[10px] border  bg-white/45 dark:bg-neutral-700/25 backdrop-blur-3xl
        shadow-lg text-white z-50 transition-all"
      >
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold tracking-wide cursor-pointer"
        >
          <span className="text-[#00b67f] pacifico-regular">Se</span>
          <span className="text-[#00b67f] poppins-bold">wna</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "Designers", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ color: "#00b67f" }}
              className="transition-all text-neutral-700 dark:text-white duration-100 cursor-pointer hover:underline 
              hover:text-[#00b67f] ease-in-out text-lg
              "
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right Section: CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer hidden md:block bg-[#00b67f] text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-[#00b67f]/90 transition-all"
          >
            Join Now
          </motion.button>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 180, scale: 0.9 }}
            className="p-1 rounded-full border hover:border-neutral-300 hover:bg-green-100 dark:hover:border-neutral-200 dark:hover:bg-white/10 transition-all ease-in-out delay-100 cursor-pointer"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-8 h-8 text-[#00b67f] dark:text-green-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-8 h-8 text-[#00b67f] dark:text-green-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* CTA Button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

