import PageHeader from "../components/PageHeader.jsx";
import Legacy from "../components/Legacy.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function LegacyPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Heritage"
        title="Two Decades of Excellence"
        description="Discover how Banyan Tree Group has shaped Bengaluru's finest addresses through thoughtful architecture and honest craft."
      />
      <Legacy />
      <Gallery />
      <CtaBanner />
    </>
  );
}
