import PageHeader from "../components/PageHeader.jsx";
import Journey from "../components/Journey.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function JourneyPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Story"
        title="The Journey Continues"
        description="Follow us through three decades of growth, innovation, and transformation in Bengaluru's real estate."
      />
      <Journey />
      <Gallery />
      <CtaBanner />
    </>
  );
}
