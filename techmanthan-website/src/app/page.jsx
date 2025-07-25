import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import '@/styles/home.scss'; // Optional if you're using Sass

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="homepage">
        <section className="hero">
          <h1>Welcome to Our Company</h1>
          <p>We offer tailored services to help you grow.</p>
        </section>

        <section className="services">
          <h2>What We Do</h2>
          <ul>
            <li>🌐 Web Development</li>
            <li>📱 Mobile Apps</li>
            <li>🔒 Security Solutions</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
