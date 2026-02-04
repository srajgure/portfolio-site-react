import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faServer,
  faLaptopCode,
  faPalette
} from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = ({ skills }) => {
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('angular') || name.includes('html') || name.includes('css')) {
      return faPalette;
    } else if (name.includes('node') || name.includes('php')) {
      return faServer;
    } else if (name.includes('database') || name.includes('sql')) {
      return faDatabase;
    } else if (name.includes('javascript') || name.includes('typescript') || name.includes('python')) {
      return faCode;
    }
    return faLaptopCode;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="skill-card glass-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">
                <FontAwesomeIcon icon={getSkillIcon(skill.name)} />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
