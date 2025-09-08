import React from "react";
import InstagramReel from "../components/InstagramReel";

export default function AdReelsPage() {
  const reelIds = [
    "DL7oHs0PqAg",
    "DHbK55uSzZ_",
    "DHOgxo4St6e",
    "DDZy9TYAajO",
    "DItdqKIPU_w",
    "C-pVkGCSIWG",
    "C-0VNXVIpke",
    "DHYoPdGI19C",
    "C_BEeCJtLFW",
    'DAYf1ZHylOD',
    "DBdbEoRRNgt",
    "DBLwBpxgsUR",
    "DApzlQjoa42",
    "DAs6tOhoxfI",
    "DFxl-c3yb97",
    "DHLnJgHpt4z",
    "DG937BERDsk",
    "DG2-gSKyH1h",
    "DHWDGJ_I7Ia",
    "DI51w0bzeod",
    "DJEBPAszruT",
    "DI6VXWDTpjB",
    "DHgX5WFNiYh",
    "DI1eSwUMR1A",
  ];

  return (
    <section className="py-20 md:py-28 px-6 min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-indigo-600 font-serif">
          Paid <span className="text-amber-400">Works</span>
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
