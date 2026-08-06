import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import StatStrip from "./components/StatStrip.jsx";
import Legacy from "./components/Legacy.jsx";
import Philosophy from "./components/Philosophy.jsx";
import Residences from "./components/Residences.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Journey from "./components/Journey.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Faq from "./components/Faq.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <StatStrip />
        <Legacy />
        <Philosophy />
        <Residences />
        <WhyChooseUs />
        <Journey />
        <Gallery />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
