'use client'

import { useState } from 'react';

const projects = [
  {
    name: 'Pomotivation',
    description: 'A productivity web app that combines the Pomodoro technique with motivational quotes, developed using React and deployed on GitHub Pages.',
    photo: '/path/to/photo1.jpg'
  },
  {
    name: 'SEL Zoo',
    description: 'SEL Zoo is a mobile-first web platform providing social emotional learning tools, developed using ReactJS, MaterialUI, and Firebase API.',
    photo: '/path/to/photo2.jpg'
  },
  {
    name: 'Weight to Plate',
    description: 'A JavaScript app that visually calculates barbell weight distribution for weightlifters.',
    photo: '/path/to/photo3.jpg'
  },
  {
    name: 'Portfolio Website',
    description: 'A personal showcase of my skills and projects, built with Next.js and React for a smooth, interactive user experience.',
    photo: '/path/to/photo4.jpg'
  },
];

function ProjectCard({ project, handleButtonClick }) {
  return (
    <div onClick={handleButtonClick(project)} style={{
      borderRadius: '1rem 1rem 0 0',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        backgroundColor: 'gray',
        height: '75%',
        width: '100%',
      }}></div>
      <div style={{ // add this div
        height: 'calc(100% - 135px)',
        overflow: 'auto',
      }}>
        <h3 style={{
          marginTop: '.5rem'
        }}>{project.name}</h3>
        <p style={{ fontSize: '.825rem' }}>{project.description}</p>
      </div>
    </div>
  );
}

function Project({ project, active, resetProject }) {
  return (
    <div style={{
      position: 'fixed',
      top: '4rem',
      left: '25vw',
      width: '72.5vw',
      height: 'calc(100vh - 8rem)',
      backgroundColor: 'white',
      opacity: active ? 1 : 0,
      visibility: active ? 'visible' : 'hidden',
      transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '2rem'
    }}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <img src={project.photo} alt={project.name} />
      <button onClick={resetProject}>Close</button>
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
      <section id={id} style={{
        backgroundColor: 'darkgray',
        height: 'calc(100vh - 8rem)',
        marginBlock: '2rem',
        borderTopRightRadius: '4rem',
        borderBottomRightRadius: '4rem',
        scrollSnapAlign: 'start',
        position: 'relative',
        transform: activeProject ? 'translateX(100%)' : 'translateX(0)',
        transition: 'transform 0.3s ease-in-out',
        padding: '2rem'
      }}>
        <h1>{title}</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          paddingBlock: '2rem',
          height: 'calc(100% - 3rem)'
        }}>
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