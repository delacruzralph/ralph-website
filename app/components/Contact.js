export default function Contact({ id, title }) {
  return (
    <section id={id} style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      // borderLeft: '2rem lightgray solid',
      borderTopRightRadius: '4rem',
      borderBottomRightRadius: '4rem',
      scrollSnapAlign: 'start'
    }}>
      <h1>{title}</h1>
    </section>
  );
}
