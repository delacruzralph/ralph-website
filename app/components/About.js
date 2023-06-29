import Image from 'next/image';
import styles from './About.module.css';
import me from '../../public/me.jpg';

export default function About({ id, title }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <div className={styles.aboutContent}>
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

          <div className={styles.interests}>
            <h3>Interests</h3>
            <p>
              Off the clock, I'm powerlifting, playing basketball, gaming, or building—from LEGO sets to models.
              I'm a huge One Piece fan and a tiny house enthusiast, always intrigued by maximizing minimal spaces.
            </p>
          </div>
        </div>

        <div className={styles.img}>
          <Image
            src={me}
            alt='Ralph'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: 'inherit'
            }} />
        </div>
      </div>
    </section>
  );
}
