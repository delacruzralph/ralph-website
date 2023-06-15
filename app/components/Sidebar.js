export default function Sidebar() {
  return (
    <div style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      padding: '2rem',
      borderTopLeftRadius: '4rem',
      borderBottomLeftRadius: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h1 style={{
        fontSize: '4rem'
      }}>Ralph Dela Cruz</h1>
      <nav>
        <ul style={{
          listStyle: 'none',
          margin: '0',
          padding: '0',
          textAlign: 'right',
          fontSize: '1.75rem'
        }}>
          <li><a href="#about">About me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
      </nav>
      <div style={{
        fontSize: '0.75rem'
      }} className="did-you-know">
        <h4>
          Did you know...
        </h4>
        <p>my favorite color is purple because of a dance team called Quest Crew?</p>
      </div>
    </div>
  );
}
