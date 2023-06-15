export default function Skills({ id, title }) {
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
      <h1>{title}</h1>
    </section>
  );
}
