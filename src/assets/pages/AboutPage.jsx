import React from "react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/sadik.jpg"
            alt="Sadik"
            className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover border-4 border-amber-400 shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            About Sadik
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Sadik is a passionate filmmaker and content creator with years of experience
            in bringing stories to life. He specializes in creating visually compelling
            films and reels that capture the essence of every moment.
          </p>
          <p className="text-lg md:text-xl">
            With a keen eye for detail and a love for creativity, Sadik strives to
            deliver exceptional work that resonates with audiences and leaves a lasting
            impression.
          </p>
        </div>
      </div>
    </section>
  );
}
