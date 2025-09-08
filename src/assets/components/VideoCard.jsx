// videocard.jsx
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

export default function VideoCard({ title, description, videoUrl, poster, instagramEmbedHtml }) {
  const embedRef = useRef(null);
  const isInstagramEmbed = !!instagramEmbedHtml; // Check if instagramEmbedHtml is provided

  useEffect(() => {
    if (isInstagramEmbed && embedRef.current) {
      // Safely re-inject the HTML for each card to ensure Instagram's script can find it
      // This is crucial because if React re-renders, the original innerHTML might be lost.
      embedRef.current.innerHTML = instagramEmbedHtml;

      // Make sure Instagram's embed.js script is loaded and re-processed
      // This part is tricky. Instagram's script only runs once on page load.
      // If the embed is added later or changed, you need to tell Instagram to re-process.
      // The `instgrm.Embeds.process()` function is how you do that.
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      } else {
        // If the script isn't loaded yet, we need to load it.
        // This should ideally be done once at the root of your application,
        // but can be done here as a fallback/redundancy.
        const scriptId = "instagram-embed-script";
        if (!document.getElementById(scriptId)) {
          const script = document.createElement("script");
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          script.id = scriptId;
          script.onload = () => {
            if (window.instgrm && window.instgrm.Embeds) {
              window.instgrm.Embeds.process();
            }
          };
          document.body.appendChild(script);
        }
      }
    }
  }, [instagramEmbedHtml, isInstagramEmbed]); // Re-run effect if embed HTML changes

  // Determine the correct URL for the "Watch on Instagram" link
  const linkUrl = isInstagramEmbed ? videoUrl : videoUrl; // Assuming videoUrl holds the direct Instagram URL when instagramEmbedHtml is present

  return (
    <motion.div
      whileHover={{ y: -12, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col w-full bg-zinc-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer transform hover:scale-[1.01] transition-all duration-300 group border border-zinc-800"
    >
      <div className="relative w-full h-52 bg-zinc-800 overflow-hidden">
        {isInstagramEmbed ? (
          // For Instagram embeds, we render the blockquote
          // The overflow-hidden on the parent div will clip any content that tries to go outside
          <div ref={embedRef} className="w-full h-full flex items-center justify-center instagram-reel-container">
            {/* The blockquote will be inserted here by useEffect */}
            {/* You might want a loading spinner here */}
            <p className="text-gray-400">Loading Instagram Reel...</p>
          </div>
        ) : videoUrl ? (
          // For other videos, use ReactPlayer
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls
            light={poster}
            // Add other ReactPlayer props as needed for non-Instagram videos
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            No video available
          </div>
        )}
      </div>

      <div className="p-6 text-left">
        <p className="text-xl font-semibold text-gray-50 drop-shadow-lg font-serif">
          {title}
        </p>
        <p className="text-base text-gray-400 mt-2 line-clamp-2 font-sans">
          {description}
        </p>
        <div className="mt-4">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium text-sm flex items-center gap-1 font-sans"
          >
            {isInstagramEmbed ? "View on Instagram" : "Watch Now"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}