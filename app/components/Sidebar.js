'use client'

import styles from './Sidebar.module.css';
import { useState, useEffect } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const funFacts = [
  'my favorite color is purple because of a dance team called Quest Crew?',
  'I have a cat named Princess?',
  'the total weight of my squat, bench, and deadlift is 1115?',
  'I have a \"twin\" brother who is 4 years older than me? (we just look very alike)',
  'I\'ve read\/watched One Piece in its entirety over 5 times?',
  'I was the volleyball captain for my high school team?',
  'My favorite basketball player is Kemba Walker for no reason?',
  'I am an above average Rock Band (the game) drummer?'
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
      { threshold: 0.1 }
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
          <li><a href="#about" style={{ color: activeSection === 'about' ? 'var(--gold)' : 'var(--light-neutral)', transition: 'color 0.2s ease-in-out' }}
            onMouseOver={(e) => e.currentTarget.style.color = activeSection === 'about' ? 'var(--gold)' : 'var(--light-purple)'}
            onMouseOut={(e) => e.currentTarget.style.color = activeSection === 'about' ? 'var(--gold)' : 'var(--light-neutral)'}>About me</a></li>
          <li><a href="#projects" style={{ color: activeSection === 'projects' ? 'var(--gold)' : 'var(--light-neutral)', transition: 'color 0.2s ease-in-out' }}
            onMouseOver={(e) => e.currentTarget.style.color =  activeSection === 'projects' ? 'var(--gold)' : 'var(--light-purple)'}
            onMouseOut={(e) => e.currentTarget.style.color = activeSection === 'projects' ? 'var(--gold)' : 'var(--light-neutral)'}>Projects</a></li>
          <li><a href="#skills" style={{ color: activeSection === 'skills' ? 'var(--gold)' : 'var(--light-neutral)', transition: 'color 0.2s ease-in-out' }}
            onMouseOver={(e) => e.currentTarget.style.color =  activeSection === 'skills' ? 'var(--gold)' : 'var(--light-purple)'}
            onMouseOut={(e) => e.currentTarget.style.color = activeSection === 'skills' ? 'var(--gold)' : 'var(--light-neutral)'}>Skills</a></li>
          <li><a href="#resume" style={{ color: activeSection === 'resume' ? 'var(--gold)' : 'var(--light-neutral)', transition: 'color 0.2s ease-in-out' }}
            onMouseOver={(e) => e.currentTarget.style.color =  activeSection === 'resume' ? 'var(--gold)' : 'var(--light-purple)'}
            onMouseOut={(e) => e.currentTarget.style.color = activeSection === 'resume' ? 'var(--gold)' : 'var(--light-neutral)'}>Experience</a></li>
          <li><a href="#contact" style={{ color: activeSection === 'contact' ? 'var(--gold)' : 'var(--light-neutral)', transition: 'color 0.2ss ease-in-out' }}
            onMouseOver={(e) => e.currentTarget.style.color = activeSection === 'contact' ? 'var(--gold)' : 'var(--light-purple)'}
            onMouseOut={(e) => e.currentTarget.style.color = activeSection === 'contact' ? 'var(--gold)' : 'var(--light-neutral)'}>Contact me</a></li>
        </ul>
      </nav>
      <div className={styles.links}>
        <a href="https://github.com/delacruzralph" target="_blank" className={styles.icon}><FaGithubSquare size="3vw" /></a>
        <a href="https://www.linkedin.com/in/ralph-dela-cruz/" target="_blank" className={styles.icon}><FaLinkedin size="3vw" /></a>
      </div>
      <div className={styles['did-you-know']}>
        <h4 className={styles.h4}>
          Did you know...
        </h4>
        <p>{funFact}</p>
      </div>
    </div>
  );
}