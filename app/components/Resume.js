import styles from './Resume.module.css';

export default function Resume({ id, title }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.resumeContent}>
        <div className={styles.resumeText}>
          <h3 className={styles.h3}>Quality Assurance Engineering Co-op at Carbonite, Inc. (Jan. 2020 - Apr. 2020)</h3>
          <p className={styles.p}>Developed and automated test cases for eCommerce websites and business portals, analyzed test suites in various stages of development cycles,
            and proposed innovative software deployment solutions through Docker.</p>

          <h3 className={styles.h3}>IT Support Analyst Co-op at Harvard Business Publishing (Jan. 2019 - June. 2019)</h3>
          <p className={styles.p}>Resolved hundreds of technology-related issues, configured workstations for employees, managed user accounts, and streamlined IT help desk
            operations.</p>

          <h3 className={styles.h3}>Graphic Designer at Nomads Dance Team (Sep. 2019 - Apr. 2022)</h3>
          <p className={styles.p}>Managed video editing projects, maintained the team's website, created promotional graphics, and designed a variety of merchandise.</p>

          <h3 className={styles.h3}>Chairperson at District One (Jan. 2018 - Jun. 2021)</h3>
          <p className={styles.p}>Directed a board of members to support a large community of Filipino collegiate organizations, adapted events for pandemic conditions,
            created resources for contemporary issues, and increased funds through collaborative efforts.</p>

          <h3 className={styles.h3}>National Director & Conference Finance Director at FIND, Inc. (Jan. 2019 - Nov. 2020)</h3>
          <p className={styles.p}>Represented the New England Filipino-American collegiate community at a national level, maintained policy adherence, hosted conferences
            for diverse colleges, and managed budgets for guest speaker and logistics expenses.</p>

          <h3 className={styles.h3}>External Public Relations Officer at NU Barkada (Apr. 2018 - Apr. 2019)</h3>
          <p className={styles.p}>Cultivated internal and external relationships, promoted organization events, and managed social media campaigns.</p>
        </div>
      </div>
    </section>
  );
}
