import React from "react";

export default function Footer() {
  return (
    <footer
      className="py-12 text-center text-gray-500 bg-zinc-900 border-t border-zinc-800 text-lg font-light font-sans"
    >
      © {new Date().getFullYear()} SN Filmz — Cinematography
    </footer>
  );
}