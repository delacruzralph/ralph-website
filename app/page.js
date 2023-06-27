import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <About id='about' title='About me' />
      <Projects id='projects' title='Projects' />
      <Skills id='skills' title='Skills' />
      <Resume id='resume' title='Experience' />
      <Contact id='contact' title='Contact me' />
    </main>
  )
}
