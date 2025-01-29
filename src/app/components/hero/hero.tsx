"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/hero.jpeg",
  "/hero1.jpeg",
  "/hero2.jpeg",
  "/hero3.jpeg",
  "/hero4.jpeg"
]; 

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center px-6 overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-6xl font-bold font-serif leading-tight">
          Welcome to <span className="text-blue-400">Quick Crave!</span>
        </h1>
        <p className="text-xl font-light mt-4">
          Experience the best coffee and fast food in a modern, cozy atmosphere. ☕🍔
        </p>
        <button className="mt-6 px-6 py-3 text-lg bg-blue-400 text-gray-900 rounded-lg font-medium hover:bg-blue-300 transition">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Hero1;
