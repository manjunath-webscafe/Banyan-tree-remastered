import { useCountUp } from "../hooks/useCountUp.js";
import { stats } from "../data/site.js";

function StatItem({ count, suffix, label }) {
  const [ref, value] = useCountUp(count);

  return (
    <div className="stat-item">
      <span className="stat-num" ref={ref}>
        {value}
      </span>
      <span className="stat-suffix">{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatStrip() {
  return (
    <section className="stat-strip" aria-label="Banyan Tree Group at a glance">
      <div className="container stat-strip-grid">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
