/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from '../components/ImageCard';
import photosData from '../../data/photos';

export default function PhotosPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="photos-page" className="py-20 md:py-28 px-6 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-amber-400 font-serif">
            Captivating <span className="text-indigo-600">Photography</span>
          </h1>
          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">
            {photosData.map((photo) => (
              <motion.div key={photo.id} variants={itemVariants}>
                <ImageCard
                  title={photo.title}
                  description={photo.description}
                  imageUrl={photo.imageUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}