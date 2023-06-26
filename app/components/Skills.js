export default function Skills({ id, title }) {
  return (
    <section id={id} style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      borderTopRightRadius: '4rem',
      borderBottomRightRadius: '4rem',
      scrollSnapAlign: 'start',
      padding: '2rem',
    }}>
      <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
      <div className="skills-content" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        justifyItems: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 16rem)',
        gap: '1rem',
        fontSize: '1.5vh',
        lineHeight: '1.5',
      }}>
        <div className="skills-text">

          <h3>Web Development</h3>
          <ul style={{ listStylePosition: 'inside' }}>
            <li>Proficiency in JavaScript, HTML/CSS, and Python</li>
            <li>Experience with React, Bootstrap, and Next.js frameworks</li>
            <li>Web automation using Selenium WebDriver</li>
            <li>Code versioning and collaboration with GitHub</li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Design</h3>
          <ul style={{ listStylePosition: 'inside' }}>
            <li>Graphic design and editing using Adobe Creative Cloud (InDesign, Illustrator, Premiere Pro, XD, Photoshop)</li>
            <li>Web design experience with Squarespace and Wix</li>
            <li>UI/UX design utilizing Figma</li>
          </ul>
          <h3 style={{ marginTop: '1rem' }}>Other</h3>
          <ul style={{ listStylePosition: 'inside' }}>
            <li>Quality Assurance with test creation, automation, and deployment via Jenkins in a CI/CD environment</li>
            <li>IT Support with ticket resolution, work station setup, user account management, and IT process optimization</li>
            <li>Leadership in team management, event organization, finance oversight, and community relations</li>
          </ul>
        </div>
        <div className="skills-images">
          hi
        </div>
      </div>
    </section>
  );
}
