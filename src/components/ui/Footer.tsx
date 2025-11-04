import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    // MODIFIED: Changed to a light background to match the site's airy feel
    <footer className="border-t-3 border-dotted border-green-300 dark:border-green-500/45 bg-linear-to-t from-neutral-200  to-green-200 dark:from-black dark:to-green-700/25 text-gray-700 dark:text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          {/* MODIFIED: Used brand accent color for the name */}
          <h3 className="text-2xl font-bold text-[#00b67f]">Sewna</h3>
          {/* MODIFIED: Updated text color for light bg */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Where Fashion Dreams Meet Real Designers.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#00b67f] transition">About</a>
          <a href="#" className="hover:text-[#00b67f] transition">Designers</a>
          <a href="#" className="hover:text-[#00b67f] transition">Support</a>
          <a href="#" className="hover:text-[#00b67f] transition">Privacy</a>
        </div>

        {/* Socials */}
        <div className="flex gap-5">
          {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              // MODIFIED: Updated icon color for light bg
              className="text-gray-500 dark:text-gray-400 hover:text-[#00b67f] transition"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* MODIFIED: Updated text and border colors for light bg */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
        © {new Date().getFullYear()} Sewna. All rights reserved.
      </div>
    </footer>
  );
}