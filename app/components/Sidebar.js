'use client'

import styles from './Sidebar.module.css';
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
    <div className={styles.sidebar}>
      <h1>Ralph Dela Cruz</h1>
      <nav>
        <ul>
          <li><a href="#about" style={{ color: activeSection === 'about' ? 'var(--gold)' : 'var(--light-neutral)' }}>About me</a></li>
          <li><a href="#projects" style={{ color: activeSection === 'projects' ? 'var(--gold)' : 'var(--light-neutral)' }}>Projects</a></li>
          <li><a href="#skills" style={{ color: activeSection === 'skills' ? 'var(--gold)' : 'var(--light-neutral)' }}>Skills</a></li>
          <li><a href="#resume" style={{ color: activeSection === 'resume' ? 'var(--gold)' : 'var(--light-neutral)' }}>Experience</a></li>
          <li><a href="#contact" style={{ color: activeSection === 'contact' ? 'var(--gold)' : 'var(--light-neutral)' }}>Contact me</a></li>
        </ul>
      </nav>
      <div className={styles['did-you-know']}>
        <h4 className={styles.h4}>
          Did you know...
        </h4>
        <p>{funFact}</p>
      </div>
    </div>
  );
}