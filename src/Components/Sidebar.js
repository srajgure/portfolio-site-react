import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ sidebarData, activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'interests', label: 'Interests' }
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="profile-avatar">
            <span className="avatar-text">
              {sidebarData.firstName.charAt(0)}{sidebarData.lastName.charAt(0)}
            </span>
          </div>
          <h1 className="profile-name">
            {sidebarData.firstName}
            <span className="gradient-text">{sidebarData.lastName}</span>
          </h1>
          <p className="profile-bio">{sidebarData.bio}</p>
        </div>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="social-links">
          <a
            href={`mailto:${sidebarData.email}`}
            className="social-icon"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href={`tel:${sidebarData.phoneNumber}`}
            className="social-icon"
            aria-label="Phone"
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href={sidebarData.linkedin}
            className="social-icon"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={sidebarData.github}
            className="social-icon"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
