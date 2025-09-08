/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ isLoading, onFinish }) {
  useEffect(() => {
    if (isLoading) {
      const t = setTimeout(() => {
        onFinish();
      }, 2500);
      return () => clearTimeout(t);
    }
  }, [isLoading, onFinish]);

  const preloaderVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };

  const filmStripVariants = {
    initial: { height: "0%" },
    animate: { height: "50%", transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } },
    exit: { height: "0%", transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2 } },
  };

  const logoVariants = {
    initial: { scale: 0.7, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.9 } },
    exit: { opacity: 0, scale: 0.7, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={preloaderVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
        >
          {/* Top strip */}
          <motion.div
            variants={filmStripVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-zinc-900 to-gray-900 origin-top"
          />

          {/* Bottom strip */}
          <motion.div
            variants={filmStripVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-br from-zinc-900 to-gray-900 origin-bottom"
          />

          {/* Logo */}
          <motion.img
            src="/logo.jpg"
            alt="SN Filmz Logo"
            className="relative z-10 w-36 h-36 object-contain rounded-full border-2 border-amber-400 p-1"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />

          {/* Loading text */}
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 text-gray-400 text-sm mt-4 tracking-wider font-sans"
          >
            Loading Cinematic Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
