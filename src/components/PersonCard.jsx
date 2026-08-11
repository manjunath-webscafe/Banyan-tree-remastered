import Reveal from "./Reveal.jsx";

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Placeholder-friendly person card: monogram avatar, name, role, optional bio. */
export default function PersonCard({ name, role, bio }) {
  return (
    <Reveal as="article" className="person-card">
      <span className="person-avatar" aria-hidden="true">
        {initials(name)}
      </span>
      <h3>{name}</h3>
      <p className="person-role">{role}</p>
      {bio && <p className="person-bio">{bio}</p>}
    </Reveal>
  );
}
