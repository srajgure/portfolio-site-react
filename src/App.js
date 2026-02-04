import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Projects from './Components/Projects';
import profileData from './profileData.json';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'projects', 'interests'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Sidebar
        sidebarData={profileData.landing}
        activeSection={activeSection}
      />
      <div className="main-content container-fluid p-0">
        <Landing landingData={profileData.landing} />
        <hr className="m-0" />
        <Experience experience={profileData.experience} />
        <hr className="m-0" />
        <Education education={profileData.education} />
        <hr className="m-0" />
        <Skills skills={profileData.skills} />
        <hr className="m-0" />
        <Projects projects={profileData.projects} />
        <hr className="m-0" />
        <Interests interests={profileData.interests} />
      </div>
    </div>
  );
}

export default App;
