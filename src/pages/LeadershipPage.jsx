import PageHeader from "../components/PageHeader.jsx";
import Leadership from "../components/Leadership.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        subtitle="Who We Are"
        title="Leadership"
        description="The people setting direction for Banyan Tree Group, and the standards they hold every address to."
      />
      <Leadership />
      <CtaBanner />
    </>
  );
}
