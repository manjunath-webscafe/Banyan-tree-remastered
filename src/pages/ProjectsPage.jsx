import PageHeader from "../components/PageHeader.jsx";
import Projects from "../components/Projects.jsx";
import Vastu from "../components/Vastu.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        subtitle="Explore Our Portfolio"
        title="Exceptional Projects"
        description="Vastu Shastra is the ancient Indian science of architecture and spatial design, rooted in creating harmony between human habitats and natural forces. By aligning structural layouts with the five fundamental elements (Panchabhutas—Earth, Water, Fire, Air, and Space) and cardinal directions, Vastu aims to optimize the flow of positive energy (Prana) within a space. Beyond traditional beliefs, modern Vastu emphasizes geometric balance, optimal natural lighting, cross-ventilation, and functional flow, ensuring that a home supports the physical well-being, peace, and prosperity of its occupants.

Banyan Tree Group, every project is designed around a commitment to these traditional spatial principles. We integrate strict Vastu adherence directly into the initial planning and architectural blueprints of our developments. From site orientation and entrance placement to the precise positioning of living zones, kitchens, and master suites, our design process ensures that spatial harmony is never compromised. By pairing rigorous structural engineering with timeless Vastu fundamentals, Banyan Tree Group delivers modern homes that respect tradition while enhancing daily living."
      />
      <Projects />
      <Vastu />
      <Gallery />
      <CtaBanner />
    </>
  );
}
