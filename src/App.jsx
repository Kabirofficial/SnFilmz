import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./assets/components/Preloader";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Homepage from "./assets/pages/Homepage";
import AdReelsPage from "./assets/pages/AdReelsPage";
import NormalReelsPage from "./assets/pages/NormalReelsPage";
import PhotosPage from "./assets/pages/PhotosPage";
import AboutPage from "./assets/pages/AboutPage";
import ContactPage from "./assets/pages/ContactPage";
import ScrollToTop from "./assets/components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Preloader isLoading={loading} onFinish={() => setLoading(false)} />

      {!loading && (
        <div className="bg-gradient-to-br from-zinc-950 to-gray-900 text-gray-100 min-h-screen flex flex-col font-serif"> 
          <ScrollToTop />
          <main className="flex-grow pt-24 md:pt-28">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/paidwork" element={<AdReelsPage />} />
              <Route path="/reels" element={<NormalReelsPage />} />
              {/* <Route path="/photos" element={<PhotosPage />} /> */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}