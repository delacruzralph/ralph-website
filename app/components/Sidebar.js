export default function Sidebar() {
  return (
    <div style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      borderTopLeftRadius: '4rem',
      borderBottomLeftRadius: '4rem'
    }}>
      <h1>Sidebar</h1>
      <nav>
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </div>
  );
}
