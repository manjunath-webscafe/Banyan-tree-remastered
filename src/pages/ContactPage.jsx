import PageHeader from "../components/PageHeader.jsx";
import Contact from "../components/Contact.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Get In Touch"
        title="Let's Connect"
        description="Reach out to us to learn more about our residences or to schedule a visit."
      />
      <CtaBanner />
      <Contact />
    </>
  );
}
