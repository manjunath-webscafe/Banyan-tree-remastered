import PageHeader from "../components/PageHeader.jsx";
import Philosophy from "../components/Philosophy.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Values"
        title="Philosophy & Vision"
        description="Built on the foundation of thoughtful design, honest craftsmanship, and a commitment to quiet luxury."
      />
      <Philosophy />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
