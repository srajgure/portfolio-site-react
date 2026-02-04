import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Education.css';

const Education = ({ education }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-heading">Education</h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="education-card glass-card"
            >
              <div className="education-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>

              <div className="education-content">
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="university-name">{edu.university}</h4>

                <div className="education-details">
                  <span className="gpa">GPA: {edu.gpa}</span>
                  <span className="education-date">
                    {edu.fromDate} - {edu.toDate}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
