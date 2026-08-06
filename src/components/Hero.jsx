import Reveal from "./Reveal.jsx";
import heroVideo from "../assets/Villa.mp4";
import heroPoster from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <img
          className="hero-fallback"
          src={heroPoster}
          alt="A sunlit contemporary residence framed by mature trees"
        />
        <div className="hero-scrim"></div>
      </div>

      <div className="container hero-content">
        <Reveal as="p" className="eyebrow">
          Est. 2004 &middot; Bengaluru
        </Reveal>
        <Reveal as="h1" className="hero-title">
          Rooted in the city.
          <br />
          <em>Built for generations.</em>
        </Reveal>
        <Reveal as="p" className="hero-sub">
          Banyan Tree Group has spent two decades shaping Bengaluru's finest
          addresses — where thoughtful architecture, honest craft and quiet
          luxury are allowed to grow, slowly and deliberately.
        </Reveal>
        <Reveal className="hero-cta">
          <a href="#residences" className="btn btn-primary">
            Explore Our Residences
          </a>
          <a href="#legacy" className="btn btn-ghost">
            Our Story
          </a>
        </Reveal>
      </div>

      <a
        href="#legacy"
        className="scroll-cue"
        aria-label="Scroll to next section"
      >
        <span></span>
      </a>
    </section>
  );
}
