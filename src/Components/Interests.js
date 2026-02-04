import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Interests.css';

const Interests = ({ interests }) => {
  return (
    <section id="interests" className="interests-section">
      <div className="section-container">
        <h2 className="section-heading">Interests</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="interests-content glass-card"
        >
          <div className="interests-icons">
            <motion.div
              className="interest-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faCode} />
            </motion.div>
            <motion.div
              className="interest-icon"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </motion.div>
            <motion.div
              className="interest-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </motion.div>
          </div>

          <p className="interests-text">{interests.paragraphOne}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
