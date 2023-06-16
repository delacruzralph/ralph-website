export default function Resume({ id, title }) {
  return (
    <section id={id} style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      borderTopRightRadius: '4rem',
      borderBottomRightRadius: '4rem',
      scrollSnapAlign: 'start',
      padding: '2rem'
    }}>
      <h2 style={{ marginBottom: '2rem' }}>{title}</h2>
      <div className="resume-content" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem',
        height: '100%',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        <div className="resume-text">
          <h3>Quality Assurance Engineering Co-op at Carbonite, Inc. (Jan. 2020 - Apr. 2020)</h3>
          <p style={{ marginBottom: '1rem' }}>Developed and automated test cases for eCommerce websites and business portals, analyzed test suites in various stages of development cycles,
            and proposed innovative software deployment solutions through Docker.</p>

          <h3>IT Support Analyst Co-op at Harvard Business Publishing (Jan. 2019 - June. 2019)</h3>
          <p style={{ marginBottom: '1rem' }}>Resolved hundreds of technology-related issues, configured workstations for employees, managed user accounts, and streamlined IT help desk
            operations.</p>

          <h3>Graphic Designer at Nomads Dance Team (Sep. 2019 - Apr. 2022)</h3>
          <p style={{ marginBottom: '1rem' }}>Managed video editing projects, maintained the team's website, created promotional graphics, and designed a variety of merchandise.</p>

          <h3>Chairperson at District One (Jan. 2018 - Jun. 2021)</h3>
          <p style={{ marginBottom: '1rem' }}>Directed a board of members to support a large community of Filipino collegiate organizations, adapted events for pandemic conditions,
            created resources for contemporary issues, and increased funds through collaborative efforts.</p>

          <h3>National Director & Conference Finance Director at FIND, Inc. (Jan. 2019 - Nov. 2020)</h3>
          <p style={{ marginBottom: '1rem' }}>Represented the New England Filipino-American collegiate community at a national level, maintained policy adherence, hosted conferences
            for diverse colleges, and managed budgets for guest speaker and logistics expenses.</p>

          <h3>External Public Relations Officer at NU Barkada (Apr. 2018 - Apr. 2019)</h3>
          <p style={{ marginBottom: '1rem' }}>Cultivated internal and external relationships, promoted organization events, and managed social media campaigns.</p>
        </div>
        <div className="resume-images">
          hi
        </div>
      </div>
    </section>
  );
}
