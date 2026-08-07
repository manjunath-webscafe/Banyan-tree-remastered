import PageHeader from "../components/PageHeader.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Faq from "../components/Faq.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        subtitle="Client Voices"
        title="What Our Residents Say"
        description="Hear from the people who call Banyan Tree residences home."
      />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
