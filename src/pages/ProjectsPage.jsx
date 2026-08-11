import PageHeader from "../components/PageHeader.jsx";
import Residences from "../components/Residences.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function ResidencesPage() {
  return (
    <>
      <PageHeader
        subtitle="Explore Our Projects"
        title="Exceptional Residences"
        description="Each residence is a masterpiece of thoughtful design, where architecture meets lifestyle."
      />
      <Residences />
      <Gallery />
      <CtaBanner />
    </>
  );
}
