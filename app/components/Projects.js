'use client'

import { useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import Image1 from '../../public/pomotivation.png'

const projects = [
  {
    name: 'Pomotivation',
    description: 'A productivity web app that combines the Pomodoro technique with motivational quotes, developed using React and deployed on GitHub Pages.',
    photo: './../pomotivation.png',
    summary: 'The application provides a timer following the Pomodoro Technique (25 minutes of focused work followed by a 5-minute break). Each work or break session is accompanied by a randomly generated inspirational quote to keep users motivated.',
    technology: 'The application is built using React and styled with CSS.',
    features: 'The core features include a Pomodoro timer, random quote generator, and a clean, intuitive user interface.',
    future: 'Future enhancements may include user customization options such as changing the timer duration, adding custom quotes, and integrating with task management tools.'
  },
  {
    name: 'SEL Zoo',
    description: 'SEL Zoo is a mobile-first web platform providing social emotional learning tools, developed using ReactJS, MaterialUI, and Firebase API.',
    photo: '/path/to/photo2.jpg',
    summary: 'The platform provides resources and tools for parents to teach SEL, with a focus on early childhood development.',
    technology: 'The platform is built using React and styled with CSS.',
    features: ' SELZoo offers a variety of SEL teaching resources, a user-friendly interface, and a focus on early childhood development.',
    future: 'Future plans include expanding the resource library, adding user accounts for personalized learning paths, and integrating with other educational platforms.'
  },
  {
    name: 'Weight to Plate',
    description: 'A JavaScript app that visually calculates barbell weight distribution for weightlifters.',
    photo: '/path/to/photo3.jpg',
    summary: 'The application takes a target weight as input and provides the combination of weight plates needed to reach that weight on a barbell.',
    technology: 'The application is built using React and styled with CSS. The codebase is structured with MVC architecture.',
    features: 'The application supports various weight units and plate sizes, and provides a simple, user-friendly interface.',
    future: 'Future updates may include support for more weight units, integration with workout planning tools, and a mobile app version.'
  },
  {
    name: 'Portfolio Website',
    description: 'A personal showcase of my skills and projects, built with Next.js and React for a smooth, interactive user experience.',
    photo: '/path/to/photo4.jpg',
    summary: 'The website provides an overview of my work and background, with detailed sections for each project and a contact form for visitors to get in touch.',
    technology: 'The website is built using Next.js, a popular React framework, and styled with CSS.',
    features: 'The website features an About Me section, a Projects section with detailed project cards, a Skills section, a Resume section, and a Contact Me form.',
    future: 'Future updates may include a blog section, more detailed project pages, and integration with LinkedIn and GitHub for real-time updates.'
  },
];

function ProjectCard({ project, handleButtonClick }) {
  return (
    <div onClick={handleButtonClick(project)} className={styles.projectCard}>
      <div className={styles.imageSection}>
        <Image src={Image1} width="100%" height="100%" alt="Pomotivation" />
      </div>
      <div className={styles.contentSection}>
        <h3 className={styles.contentSectionH3}>{project.name}</h3>
        <p className={styles.contentSectionP}>{project.description}</p>
      </div>
    </div>
  );
}

function Project({ project, active, resetProject }) {
  return (
    <div className={`${styles.projectPopup} ${active ? styles.projectPopupActive : ''}`}>
      <div className='projectPopupContent'>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <h3>Summary</h3>
        <p>{project.summary}</p>
        <h3>Technology Used</h3>
        <p>{project.technology}</p>
        <h3>Features</h3>
        <p>{project.features}</p>
        <h3>Future Plans</h3>
        <p>{project.future}</p>
      </div>
      <div className={styles.imageButtonSection}>
        <img src={project.photo} alt={project.name} />
        <button onClick={resetProject} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}

export default function Projects({ id, title }) {
  const [activeProject, setActiveProject] = useState(null);

  const handleButtonClick = (project) => () => {
    setActiveProject(project);
  };

  const resetProject = () => {
    setActiveProject(null);
  };

  return (
    <>
      <section id={id} className={`${styles.mainSection} ${activeProject ? styles.mainSectionTransformed : ''}`}>
        <h2 className={styles.mainSectionH2}>{title}</h2>
        <div className={styles.gridLayout}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} handleButtonClick={handleButtonClick} />
          ))}
        </div>
      </section>
      {projects.map((project) => (
        <Project
          key={project.name}
          project={project}
          active={activeProject === project}
          resetProject={resetProject}
        />
      ))}
    </>
  );
}






