'use client'

import { useState } from 'react';

const projects = [
  { name: 'Project 1', description: 'This is Project 1', photo: '/path/to/photo1.jpg' },
  { name: 'Project 2', description: 'This is Project 2', photo: '/path/to/photo2.jpg' },
  { name: 'Project 3', description: 'This is Project 3', photo: '/path/to/photo3.jpg' },
  { name: 'Project 4', description: 'This is Project 4', photo: '/path/to/photo4.jpg' },
];

function ProjectCard({ project, handleButtonClick }) {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      borderRadius: '1rem',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column', // add this
    }}>
      <div style={{
        backgroundColor: 'gray',
        height: '75%', // adjust this as needed
        width: '100%',
      }}></div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={handleButtonClick(project)}>Learn More</button>
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
      }}>
        <h1>{title}</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          padding: '2rem',
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