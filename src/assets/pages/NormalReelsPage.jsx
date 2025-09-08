import React from "react";
import InstagramReel from "../components/InstagramReel";

export default function NormalReelsPage() {
  const reelIds = [
    "DInhydaqjeh",
    "DIIVI3syMLa",
    "DHtRHcjSJ1E",
  ];

  return (
      <section className="py-20 md:py-28 px-6 min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-indigo-600 font-serif">
            Creative <span className="text-amber-400">Reels</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {reelIds.map((id) => (
              <InstagramReel key={id} reelId={id} />
            ))}
          </div>
        </div>
      </section>
    );
}
