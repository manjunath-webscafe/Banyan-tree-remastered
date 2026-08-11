import PageHeader from "../components/PageHeader.jsx";
import Promoters from "../components/Promoters.jsx";
import Team from "../components/Team.jsx";
import CtaBanner from "../components/CtaBanner.jsx";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        subtitle="Who We Are"
        title="Team & Promoters"
        description="The founders who guide Banyan Tree Group, and the designers, engineers and advisors who bring every address to life."
      />
      <Promoters />
      <Team />
      <CtaBanner />
    </>
  );
}
