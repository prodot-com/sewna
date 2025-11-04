import React, { useState } from "react";
import { motion } from "framer-motion";

const PortfolioUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white px-6 md:px-20 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Showcase Your <span className="text-[#00b67f]">Portfolio</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Upload your best fashion designs and attract clients who love your style.
        </p>

        {/* Upload Box */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border-2 border-dashed border-[#00b67f] rounded-2xl p-10 bg-white/10 dark:bg-black/20 hover:bg-[#00b67f]/5 transition-all cursor-pointer"
        >
          <p className="text-[#00b67f] mb-3">Drag & drop your designs here</p>
          <p className="text-gray-400">or</p>
          <label className="mt-3 inline-block bg-[#00b67f] text-black font-semibold px-6 py-2 rounded-full cursor-pointer">
            Browse Files
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileInput}
            />
          </label>
        </div>

        {/* Preview */}
        {files.length > 0 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group rounded-xl overflow-hidden border border-white/10"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all">
                  <p className="text-sm text-white">{file.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PortfolioUpload;
