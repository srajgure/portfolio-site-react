import React from 'react';
import { motion } from 'framer-motion';
import './Landing.css';

const Landing = ({ landingData }) => {
  return (
    <section id="about" className="landing-section">
      <div className="landing-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="landing-content"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="greeting"
          >
            Hi, I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-name"
          >
            {landingData.firstName}
            <span className="gradient-text">{landingData.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-bio"
          >
            {landingData.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <a href={`mailto:${landingData.email}`} className="btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn-outline">
              View My Work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-visual"
        >
          <div className="hero-circle"></div>
          <div className="hero-circle-2"></div>
          <div className="hero-circle-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
