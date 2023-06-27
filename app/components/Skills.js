import styles from './Skills.module.css';

export default function Skills({ id, title }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.skillsContent}>
        <div className="skills-text">
          <h3>Web Development</h3>
          <ul className={styles.ul}>
            <li>Proficiency in JavaScript, HTML/CSS, and Python</li>
            <li>Experience with React, Bootstrap, and Next.js frameworks</li>
            <li>Web automation using Selenium WebDriver</li>
            <li>Code versioning and collaboration with GitHub</li>
          </ul>
          <h3 className={styles.h3}>Design</h3>
          <ul className={styles.ul}>
            <li>Graphic design and editing using Adobe Creative Cloud (InDesign, Illustrator, Premiere Pro, XD, Photoshop)</li>
            <li>Web design experience with Squarespace and Wix</li>
            <li>UI/UX design utilizing Figma</li>
          </ul>
          <h3 className={styles.h3}>Other</h3>
          <ul className={styles.ul}>
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
