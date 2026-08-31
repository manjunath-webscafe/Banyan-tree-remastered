import Hero from "../components/Hero.jsx";
import StatStrip from "../components/StatStrip.jsx";
import Legacy from "../components/Legacy.jsx";
import Philosophy from "../components/Philosophy.jsx";
import Projects from "../components/Projects.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Vastu from "../components/Vastu.jsx";
import Gallery from "../components/Gallery.jsx";
import Faq from "../components/Faq.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <Legacy />
      <Philosophy />
      <Projects featured />
      <Vastu />
      <WhyChooseUs />
      <Gallery />
      <Faq />
      <CtaBanner />
    </>
  );
}
