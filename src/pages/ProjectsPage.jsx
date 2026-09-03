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
        description="Explore our portfolio of distinctive residential and commercial developments."
      />
      <Projects />
      <Vastu />
      <Gallery />
      <CtaBanner />
    </>
  );
}
