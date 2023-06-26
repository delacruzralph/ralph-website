export default function About({ id, title }) {
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
      <div className="about-content" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        fontSize: '1.5vh',
        lineHeight: '1.5',
        height: 'calc(100vh - 16rem)',
        alignItems: 'center',
        justifyItems: 'center'
      }}>
        <div className="about-text">
          <div className="background">
            <h3>Background</h3>
            <p>
              I'm a Computer Science and Design graduate from Northeastern University, specializing in UX Design and Web Development.
              My capstone, SELZoo, and personal experiences with mental health have shaped my empathetic approach to design.
              I'm introverted, but my actions speak volumes. My goal is to design a world that makes it easier to do the right thing.
            </p>
            <br />
            <p>
              During college, I was part of the Nomads dance team and Filipino American organizations, fostering cultural connections.
              Currently based in the NJ/NYC area, I continue to apply my quiet passion in crafting meaningful digital experiences.
            </p>
          </div>

          <div className="interests" style={{ marginTop: '1rem' }}>
            <h3>Interests</h3>
            <p>
              Off the clock, I'm powerlifting, playing basketball, gaming, or building—from LEGO sets to models.
              I'm a huge One Piece fan and a tiny house enthusiast, always intrigued by maximizing minimal spaces.
            </p>
          </div>
        </div>

        <div className="about-images">
          <div className="img" style={{
            backgroundColor: 'gray',
            width: '25vw',
            height: '25vw',
            borderRadius: '50%'
          }}></div>
        </div>
      </div>
    </section>
  );
}
