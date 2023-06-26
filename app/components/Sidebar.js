'use client'

import { useState, useEffect } from 'react';

const funFacts = [
  'my favorite color is purple because of a dance team called Quest Crew?',
  'I once won a powerlifting competition?',
  'I can solve a Rubik\'s cube in under a minute?',
  // Add as many fun facts as you like...
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);
  const [funFact, setFunFact] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    setFunFact(funFacts[randomIndex]);
  }, []);

  return (
    <div style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      padding: '2rem',
      borderTopLeftRadius: '4rem',
      borderBottomLeftRadius: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h1 style={{
        fontSize: '4rem'
      }}>Ralph Dela Cruz</h1>
      <nav>
        <ul style={{
          listStyle: 'none',
          margin: '0',
          padding: '0',
          textAlign: 'right',
          fontSize: 'clamp(1.5rem, 1.5vw, 5rem)'
        }}>
          <li><a href="#about" style={{ color: activeSection === 'about' ? 'purple' : 'black' }}>About me</a></li>
          <li><a href="#projects" style={{ color: activeSection === 'projects' ? 'purple' : 'black' }}>Projects</a></li>
          <li><a href="#skills" style={{ color: activeSection === 'skills' ? 'purple' : 'black' }}>Skills</a></li>
          <li><a href="#resume" style={{ color: activeSection === 'resume' ? 'purple' : 'black' }}>Resume</a></li>
          <li><a href="#contact" style={{ color: activeSection === 'contact' ? 'purple' : 'black' }}>Contact me</a></li>
        </ul>
      </nav>
      <div style={{
        fontSize: 'clamp(1rem, 1vw, 3rem)'
      }} className="did-you-know">
        <h4>
          Did you know...
        </h4>
        <p>{funFact}</p>
      </div>
    </div>
  );
}