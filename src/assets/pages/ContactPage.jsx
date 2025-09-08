/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section
      id="contact-page"
      className="py-20 md:py-28 px-6 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="max-w-3xl mx-auto text-center w-full">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold mb-8 text-amber-400 font-serif"
        >
          Get in <span className="text-indigo-600">Touch</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-gray-300 mb-10 font-light font-sans"
        >
          Have a project in mind or just want to say hello? Fill out the form below or reach out directly.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-zinc-900 p-10 rounded-2xl shadow-2xl space-y-10 border border-zinc-700"
        >
          {/* Direct Contact */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-gray-50 font-serif">Direct Contact</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* <a
                href="mailto:contact@snfilmz.com"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaEnvelope className="h-7 w-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-lg font-sans">contact@snfilmz.com</span>
              </a> */}
              <a
                href="tel:+917016668282"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaPhoneAlt className="h-7 w-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-lg font-sans">+91 70166 68282</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 pt-8 border-t border-zinc-700">
            <p className="text-2xl font-semibold text-gray-50 font-serif">Follow Us</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Personal Instagram */}
              <a
                href="https://www.instagram.com/sadiknathani_.21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaInstagram className="h-7 w-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-lg font-sans">Sadik</span>
              </a>
              {/* SN Filmz Instagram */}
              <a
                href="https://www.instagram.com/sn_.filmz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
              >
                <FaInstagram className="h-7 w-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                <span className="text-lg font-sans">SN Filmz</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
