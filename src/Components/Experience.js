import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

const Experience = ({ experience }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-heading">Experience</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="timeline"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="position-title">{exp.position}</h3>
                  <span className="date-range">
                    {exp.fromDate} - {exp.toDate}
                  </span>
                </div>

                <h4 className="organization-name">{exp.organization}</h4>
                <p className="work-description">{exp.aboutWork}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
