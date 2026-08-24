import PageHeader from "../components/PageHeader.jsx";
import Leadership from "../components/Leadership.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        subtitle="Promoters and Shareholders"
        title="Professional Leadership"
        description="Family Officers and individual Networth"
      />
      <Leadership />
      <CtaBanner />
    </>
  );
}
