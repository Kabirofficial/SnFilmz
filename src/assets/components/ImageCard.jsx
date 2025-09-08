/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function ImageCard({ title, description, imageUrl }) {
  return (
    <motion.div
      whileHover={{ y: -12, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col w-full bg-zinc-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-[1.01] transition-all duration-300 group border border-zinc-800"
    >
      <div className="relative w-full h-52 bg-zinc-800 overflow-hidden"> 
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <p className="text-xl font-semibold text-gray-50 drop-shadow-lg font-serif">{title}</p>
        </div>
      </div>

      <div className="p-6 text-left"> 
        <p className="text-base text-gray-400 mt-0 line-clamp-2 font-sans">{description}</p>
        <div className="mt-4">
          <button className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium text-sm flex items-center gap-1 font-sans">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}