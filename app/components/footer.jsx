"use client"

import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Footer() {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <footer className="bg-[rgba(20,24,1,0.37)] text-white mt-5">
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-gray-800">
        <div className="flex items-center justify-between">
          {/* Sol: telif */}
          <p className="text-sm text-gray-900">
            © 2025 Sena AKAT. Tüm hakları saklıdır.
          </p>

          {/* Sağ: ikonlar */}
          <div className="flex items-center gap-5">
             <a
                      href="https://www.instagram.com/sena_akat"
                      target="_blank"
                      rel="noopener noreferrer"
                       className="text-pink-500 hover:text-pink-900 text-3xl transition duration-300"
                    >
                      <FaInstagram />
                    </a>
            
                    {/* GitHub */}
                    <a
                      href="https://github.com/senaakat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-white text-3xl transition duration-300"
                    >
                      <FaGithub />
                    </a>
            
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/sena-akat-9baaa0226"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(14,157,234)] hover:text-blue-950 text-3xl transition duration-300"
                    >
                      <FaLinkedin />
                    </a>
          </div>
        </div>
      </div>
     {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-400 text-black p-3 rounded-full shadow-lg transition transform hover:bg-teal-500 hover:scale-110"
          aria-label="Başa dön"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </footer>
  )
}
