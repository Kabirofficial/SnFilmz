import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const blobVariants1 = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -50, 20, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 18,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const blobVariants2 = {
    animate: {
      x: [0, -40, 20, -60, 0],
      y: [0, -30, 60, -10, 0],
      scale: [1.05, 1, 1.1, 0.95, 1.05],
      transition: {
        duration: 12,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const blobVariants3 = {
    animate: {
      x: [0, 10, -15, 25, -5, 0],
      y: [0, -20, 10, -5, 15, 0],
      scale: [0.95, 1.02, 0.98, 1.03, 0.99, 0.95],
      transition: {
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-zinc-950 to-gray-900"
    >
      <motion.div
        variants={blobVariants1}
        animate="animate"
        className="absolute -top-60 -left-60 w-[400px] h-[400px] bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        variants={blobVariants2}
        animate="animate"
        className="absolute -bottom-80 -right-80 w-[500px] h-[500px] bg-indigo-700 rounded-full mix-blend-overlay filter blur-3xl opacity-20" 
      ></motion.div>
      <motion.div
        variants={blobVariants3}
        animate="animate"
        className="absolute top-1/4 left-1/2 w-80 h-80 bg-red-700 rounded-full mix-blend-overlay filter blur-3xl opacity-15" 
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-gray-50 font-serif"> 
          Capture <span className="text-amber-400">Moments</span>,
          <br />Create <span className="text-indigo-600">Stories</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light font-sans">
          Professional Reels & Cinematic Ad Shoots that make your brand unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(251, 191, 36, 0.4)" }} 
            whileTap={{ scale: 0.95 }}
            className="rounded-full shadow-lg"
          >
            <Link
              to="/reels"
              className="px-8 py-4 rounded-full bg-amber-500 text-zinc-950 text-lg font-semibold block transition-all duration-300 hover:bg-amber-600 font-sans"
            >
              Explore Reels
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(67, 56, 202, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full shadow-lg"
          >
            <Link
              to="/ad-reels"
              className="px-8 py-4 rounded-full bg-indigo-700 text-gray-50 text-lg font-semibold block transition-all duration-300 hover:bg-indigo-800 font-sans" 
            >
              Ad Reel Shoots
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}