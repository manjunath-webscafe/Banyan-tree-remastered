import PageHeader from "../components/PageHeader.jsx";
import Leadership from "../components/Leadership.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        subtitle="Promoters & Shareholders"
        title="Visionary Leadership"
        description="A trusted leadership team combining experience, strategic vision, and a commitment to sustainable growth."
      />
      <Leadership />
      <CtaBanner />
    </>
  );
}
