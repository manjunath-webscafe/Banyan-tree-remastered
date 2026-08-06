import Reveal from "./Reveal.jsx";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-media">
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80"
          alt=""
          loading="lazy"
        />
      </div>
      <Reveal className="container cta-content">
        <h2>Ready to see your address?</h2>
        <p>
          Request our current brochure or speak with a member of our team — no
          obligation, just an honest conversation.
        </p>
        <div className="cta-actions">
          <a href="#contact" className="btn btn-primary">
            Download Brochure
          </a>
          <a href="#contact" className="btn btn-ghost">
            Book a Consultation
          </a>
        </div>
      </Reveal>
    </section>
  );
}
