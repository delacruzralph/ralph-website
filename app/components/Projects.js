'use client'

import { useState } from 'react';

const projects = [
  {
    name: 'Pomotivation',
    description: 'A productivity web app that combines the Pomodoro technique with motivational quotes, developed using React and deployed on GitHub Pages.',
    photo: '/path/to/photo1.jpg',
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
    <div onClick={handleButtonClick(project)} style={{
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        borderRadius: '1rem',
        backgroundColor: 'gray',
        height: '75%',
        width: '100%',
      }}></div>
      <div style={{
        height: 'calc(100% - 135px)',
        overflow: 'auto',
      }}>
        <h3 style={{
          marginTop: '.5rem'
        }}>{project.name}</h3>
        <p style={{
          fontSize: '1.5vh',
          lineHeight: '1.5'
        }}>{project.description}</p>
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
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '2rem',
      fontSize: '1.75vh',
      textAlign: 'left'
    }}>
      <div className="">
        <h2>{project.name}</h2>
        <p style={{ marginBottom: '1rem' }}>{project.description}</p>
        <h3>Summary</h3>
        <p style={{ marginBottom: '1rem' }}>{project.summary}</p>
        <h3>Technology Used</h3>
        <p style={{ marginBottom: '1rem' }}>{project.technology}</p>
        <h3>Features</h3>
        <p style={{ marginBottom: '1rem' }}>{project.features}</p>
        <h3>Future Plans</h3>
        <p style={{ marginBottom: '1rem' }}>{project.future}</p>
      </div>
      <div className="" style={{ height: 'calc(100vh - 32rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={project.photo} alt={project.name} />
        <button onClick={resetProject} style={{
          width: '100%', paddingBlock: '.5rem', marginRight: '-20vw', borderRadius: '.75vh', border: 'none', marginTop: '.5rem', fontWeight: 'bold'
        }}>Close</button>
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
        <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          paddingBlock: '0rem',
          height: 'calc(100vh - 16rem)',
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