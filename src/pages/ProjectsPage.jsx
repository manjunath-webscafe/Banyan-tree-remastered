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
        description="A collection of considered homes across Bengaluru, shaped by enduring design, thoughtful planning and a deep respect for place."
      />
      <Projects />
      <Vastu />
      <Gallery />
      <CtaBanner />
    </>
  );
}
