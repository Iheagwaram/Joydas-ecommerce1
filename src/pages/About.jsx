import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div>
        <motion.h1
          className="text-4xl font-extrabold uppercase text-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Elevate Your Style. Embrace Your Confidence.
        </motion.h1>
      </div>
      {/* <div>
      <p className="text-lg leading-relaxed mt-8 text-center">
        Welcome to <strong>Joydas</strong>, founded by Adaeze Joyce with a passion for helping women level up their looks and embrace their unique beauty. At Joydas, we offer premium natural human hair, stylish wigs, handcrafted handbags, and a curated selection of beauty accessories. Our mission is simple—empower women to feel confident, elegant, and effortlessly chic every day. Discover the perfect blend of luxury and style with Joydas, where beauty meets authenticity.
        </p>
      </div> */}

    </div>
  );
};

export default About;
