import PageHeader from "../components/PageHeader.jsx";
import Legacy from "../components/Legacy.jsx";
import Philosophy from "../components/Philosophy.jsx";
import Gallery from "../components/Gallery.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function LegacyPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Heritage"
        title="Legacy & Philosophy"
        description="Discover how Banyan Tree Group has shaped Bengaluru's finest addresses, and the principles that guide every one of them."
      />
      <Legacy />
      <Philosophy />
      <Gallery />
      <CtaBanner />
    </>
  );
}
