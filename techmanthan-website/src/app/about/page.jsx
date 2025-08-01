// export default function AboutPage() {
//   return <h1>About Us</h1>
// }
import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>About Us</h2>
        <p>About content here...</p>
      </main>
    </>
  );
}