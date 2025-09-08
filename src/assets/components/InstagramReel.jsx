/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function InstagramReel({ reelId }) {
  useEffect(() => {
    const loadInstagramScript = () => {
      if (!document.getElementById("instagram-embed-script")) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // Delay processing to make sure script is loaded
        setTimeout(() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }, 500);
      }
    };

    loadInstagramScript();
  }, [reelId]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/reel/${reelId}/?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          border: 0,
          margin: "0 auto",
          padding: 0,
          width: "100%",
          maxWidth: "540px", // Optional: adjust max width
        }}
      ></blockquote>
    </motion.div>
  );
}
