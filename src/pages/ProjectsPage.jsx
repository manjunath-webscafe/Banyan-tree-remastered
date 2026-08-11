import PageHeader from "../components/PageHeader.jsx";
import Projects from "../components/Projects.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        subtitle="Explore Our Portfolio"
        title="Exceptional Projects"
        description="Each project is a masterpiece of thoughtful design, where architecture meets lifestyle."
      />
      <Projects />
      <Gallery />
      <CtaBanner />
    </>
  );
}
