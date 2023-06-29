'use client'

import { useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import pomotivation from '../../public/pomotivation.png'
import selzoo from '../../public/selzoo.png'
import weightplate from '../../public/weight-to-plate.png'
import portfolio from '../../public/portfolio.png'
import { FaGithub, FaGlobe } from 'react-icons/fa';

const projects = [
  {
    name: 'Pomotivation',
    description: 'A productivity web app that combines the Pomodoro technique with motivational quotes, developed using React and deployed on GitHub Pages.',
    photo: pomotivation,
    summary: 'The application provides a timer following the Pomodoro Technique (25 minutes of focused work followed by a 5-minute break). Each work or break session is accompanied by a randomly generated inspirational quote to keep users motivated.',
    technology: 'The application is built using ReactJS.',
    features: 'The core features include a Pomodoro timer, random quote generator, and a clean, intuitive user interface. Users can also adjust the break and session lengths.',
    future: 'Future enhancements may include user customization options such as adding custom quotes, and integrating with task management tools.',
    github: 'https://github.com/delacruzralph/pomodoro-quote',
    website: 'https://delacruzralph.github.io/pomodoro-quote/'
  },
  {
    name: 'SEL Zoo',
    description: 'SEL Zoo is a mobile-first web platform providing social emotional learning tools, developed using ReactJS, MaterialUI, and Firebase API.',
    photo: selzoo,
    summary: 'The platform provides resources and tools for parents to teach SEL, with a focus on early childhood development.',
    technology: 'The platform is built using ReactJS, styled using MaterialUI, and supported with a Firebase backend.',
    features: ' SELZoo offers a variety of SEL teaching resources, a user-friendly interface, and a focus on early childhood development.',
    future: 'Future plans include expanding the resource library, adding user accounts for personalized learning paths, and integrating with other educational platforms.',
    github: 'https://github.com/liu-caro/sel-site',
    website: 'https://sel-zoo.web.app/'
  },
  {
    name: 'Weight to Plate',
    description: 'A JavaScript app that visually calculates barbell weight distribution for weightlifters.',
    photo: weightplate,
    summary: 'The application takes a target weight as input and provides the combination of weight plates needed to reach that weight on a barbell.',
    technology: 'The application is built using Javascript, HTML, and CSS as well as Bootstrap. The codebase is structured with MVC architecture.',
    features: 'The application supports various weight units and plate sizes, and provides a simple, user-friendly interface, including a visual representation of the weights. It supports kilograms and pounds and can convert between them.',
    future: 'Future updates may include integration with workout planning tools, and a mobile app version.',
    github: 'https://github.com/delacruzralph/Weight-To-Plate-v2',
    website: 'https://delacruzralph.github.io/Weight-To-Plate-v2/'
  },
  {
    name: 'Portfolio Website',
    description: 'A personal showcase of my skills and projects, built with Next.js and React for a smooth, interactive user experience.',
    photo: portfolio,
    summary: 'The website provides an overview of my work and background, with detailed sections for each project and a contact form for visitors to get in touch.',
    technology: 'The website is built using Next.js, a popular React framework, and styled with CSS.',
    features: 'The website features many UI elements with the goal of providing a sleek and satisfying experience.',
    future: 'Future updates may include a blog section, better interactions with animations, and integration with LinkedIn and GitHub for real-time updates.',
    github: 'https://github.com/delacruzralph/ralph-website',
    website: 'https://www.ralphdelacruz.com/'
  },
];

function ProjectCard({ project, handleButtonClick }) {
  return (
    <div onClick={handleButtonClick(project)} className={styles.projectCard}>
      <div className={styles.imageSection}>
        <Image
          src={project.photo}
          alt={project.name}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 'inherit'
          }} />
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
      <div className={styles.projectPopupImage}>
        <Image
          src={project.photo}
          alt={project.name}
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '1rem'
          }} />
      </div>
      <div className={styles.links}>
        <a href={project.github} target='_blank'><FaGithub size="3vw"/></a>
        <a href={project.website} target='_blank'><FaGlobe size="3vw"/></a>
      </div>
      <button onClick={resetProject} className={styles.closeButton}>Close</button>
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






